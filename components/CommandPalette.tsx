"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Icon, { type IconKey } from "@/components/Icon";
import {
  defaultGroups,
  highlight,
  indexStats,
  queryTerms,
  search,
  warmSearchIndex,
  type SearchGroup,
  type SearchResult,
} from "@/lib/search";

const PER_GROUP = 5;

/* `useSyncExternalStore` rather than a mount effect: it gives the server a
   deliberate snapshot ("not mounted", "not a Mac") and swaps in the real one at
   hydration, with no cascading setState and no mismatch warning. */
const NEVER_CHANGES = () => () => {};
const onClient = () => true;
const onServer = () => false;
const detectMac = () =>
  /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent);

interface Results {
  groups: SearchGroup[];
  /** Wall-clock milliseconds the last query took over the whole corpus. */
  ms: number;
}

const NO_RESULTS: Results = { groups: [], ms: 0 };

/* -------------------------------------------------------------------------- */
/* Icons — the shared drafting-instrument set, not a parallel one              */
/* -------------------------------------------------------------------------- */

const KIND_ICON: Record<SearchResult["kind"], IconKey> = {
  action: "command",
  topic: "compass",
  lesson: "book",
  equation: "sigma",
  question: "target",
  qna: "message",
};

function Marked({ text, terms }: { text: string; terms: string[] }) {
  const parts = useMemo(() => highlight(text, terms), [text, terms]);
  return (
    <>
      {parts.map((p, i) =>
        p.hit ? (
          <mark
            key={i}
            className="bg-transparent font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-2"
          >
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Bank hand-off                                                              */
/* -------------------------------------------------------------------------- */

/**
 * `/bank` renders no per-question anchor and is owned by another agent, so a
 * palette hit cannot be a plain `#id` deep link. Instead we navigate to
 * `/bank?q=<id>` (which the bank can adopt natively later) and, until it does,
 * drive the bank's own search field to the exact text that isolates this
 * question. Everything here is best-effort: if the markup it expects is not
 * there, the user is simply left on the question bank.
 */
function revealInBank(bankKey: string) {
  const started = performance.now();
  const tick = () => {
    if (performance.now() - started > 2500) return;
    const field = document.querySelector<HTMLInputElement>(
      '[data-route="bank"] input[type="search"]'
    );
    if (!field) {
      requestAnimationFrame(tick);
      return;
    }
    if (field.value !== bankKey) {
      // React owns this input, so set the value through the native setter and
      // dispatch the event its onChange listener is actually waiting for.
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      setter?.call(field, bankKey);
      field.dispatchEvent(new Event("input", { bubbles: true }));
    }
  };
  requestAnimationFrame(tick);
}

/* -------------------------------------------------------------------------- */
/* Palette                                                                    */
/* -------------------------------------------------------------------------- */

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [results, setResults] = useState<Results>(NO_RESULTS);

  const mounted = useSyncExternalStore(NEVER_CHANGES, onClient, onServer);
  const isMac = useSyncExternalStore(NEVER_CHANGES, detectMac, onServer);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  const domId = useId().replace(/:/g, "");

  /* ---- results ---------------------------------------------------------- */

  // Searching in the change handler rather than in a render-phase memo keeps
  // render pure (no `performance.now()` mid-render) and means the corpus is
  // scanned exactly once per keystroke.
  const runQuery = useCallback((value: string) => {
    const started = performance.now();
    const groups = value.trim()
      ? search(value, { perGroup: PER_GROUP })
      : defaultGroups();
    setQuery(value);
    setResults({ groups, ms: performance.now() - started });
    setActive(0);
  }, []);

  const groups = results.groups;

  const terms = useMemo(() => {
    const raw = query.trim().split(/\s+/).filter(Boolean);
    return raw.length ? raw : queryTerms(query);
  }, [query]);

  const flat = useMemo(() => groups.flatMap((g) => g.results), [groups]);
  /** Flat index of each group's first row, so rows can be numbered purely. */
  const groupOffsets = useMemo(() => {
    const out: number[] = [];
    let n = 0;
    for (const g of groups) {
      out.push(n);
      n += g.results.length;
    }
    return out;
  }, [groups]);
  const total = flat.length;
  const current = flat[Math.min(active, Math.max(total - 1, 0))];

  /* ---- open / close ----------------------------------------------------- */

  const openPalette = useCallback(() => {
    restoreRef.current = (document.activeElement as HTMLElement | null) ?? null;
    warmSearchIndex();
    setQuery("");
    setActive(0);
    setResults({ groups: defaultGroups(), ms: 0 });
    setOpen(true);
  }, []);

  const closePalette = useCallback(() => {
    setOpen(false);
    const previous = restoreRef.current;
    // Opening from a bare page (nothing focused) would otherwise dump the user
    // back on <body>; the trigger is the honest place to land in that case.
    const restore =
      previous && previous !== document.body && previous.isConnected
        ? previous
        : triggerRef.current;
    // Wait for the portal to unmount before handing focus back, or React
    // removes the node from under the browser and focus falls to <body>.
    requestAnimationFrame(() => restore?.focus?.());
  }, []);

  // ⌘K / Ctrl-K from anywhere, including inside another input.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) closePalette();
        else openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openPalette, closePalette]);

  // Pay for the index during an idle slice rather than on the first keystroke.
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => warmSearchIndex(), { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(warmSearchIndex, 1500);
    return () => window.clearTimeout(id);
  }, []);

  // Lock background scroll while the dialog is up.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keep the active row visible without smooth-scrolling under reduced motion
  // ("nearest" is instant, which is exactly what a keyboard list wants).
  useEffect(() => {
    if (!open) return;
    const el = document.getElementById(`${domId}-opt-${active}`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open, domId, groups]);

  /* ---- activation ------------------------------------------------------- */

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const currentTheme =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = currentTheme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("mechprep-theme", next);
    } catch {
      // Private browsing: the toggle still applies, it just will not persist.
    }
  }, []);

  const run = useCallback(
    (result: SearchResult | undefined, useAlt = false) => {
      if (!result) return;
      if (result.command === "toggle-theme") {
        toggleTheme();
        closePalette();
        return;
      }
      const href = (useAlt && result.altHref) || result.href;
      if (!href) return;
      closePalette();
      router.push(href);
      if (!useAlt && result.bankKey) revealInBank(result.bankKey);
    },
    [closePalette, router, toggleTheme]
  );

  /* ---- keyboard --------------------------------------------------------- */

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closePalette();
        return;
      case "ArrowDown":
        e.preventDefault();
        if (total) setActive((i) => (i + 1) % total);
        return;
      case "ArrowUp":
        e.preventDefault();
        if (total) setActive((i) => (i - 1 + total) % total);
        return;
      case "Home":
        if (total) {
          e.preventDefault();
          setActive(0);
        }
        return;
      case "End":
        if (total) {
          e.preventDefault();
          setActive(total - 1);
        }
        return;
      case "PageDown":
        e.preventDefault();
        setActive((i) => Math.min(total - 1, i + 5));
        return;
      case "PageUp":
        e.preventDefault();
        setActive((i) => Math.max(0, i - 5));
        return;
      case "ArrowRight":
        if (current?.altHref && inputRef.current?.selectionStart === query.length) {
          e.preventDefault();
          run(current, true);
        }
        return;
      case "Enter":
        e.preventDefault();
        run(current, e.metaKey || e.ctrlKey);
        return;
      case "Tab": {
        // Focus trap: the dialog is the whole world while it is open.
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        return;
      }
      default:
        return;
    }
  };

  /* ---- render ----------------------------------------------------------- */

  const modKey = isMac ? "⌘" : "Ctrl";

  const trigger = (
    <button
      ref={triggerRef}
      type="button"
      onClick={openPalette}
      className="flex h-8 items-center gap-2 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] px-2.5 text-[0.8rem] font-medium text-[var(--ink-muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
      aria-label={`Search everything (${isMac ? "Command" : "Control"}+K)`}
      aria-haspopup="dialog"
      aria-expanded={open}
    >
      <Icon name="search" size={15} />
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden min-w-[2.6em] rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface-muted)] px-1.5 py-0.5 text-center font-sans text-[0.68rem] tabular-nums sm:inline">
        {mounted ? `${modKey}K` : "\u00a0"}
      </kbd>
    </button>
  );

  const dialog = !open ? null : (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[color-mix(in_srgb,var(--ink)_42%,transparent)] px-4 pt-[8vh] pb-8 backdrop-blur-[2px]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePalette();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${domId}-title`}
        data-search-ms={results.ms.toFixed(3)}
        onKeyDown={onKeyDown}
        className="flex max-h-[84vh] w-full max-w-[42rem] flex-col overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] shadow-[var(--shadow-pop)]"
      >
        <h2 id={`${domId}-title`} className="sr-only">
          Search MechPrep
        </h2>

        <div className="flex items-center gap-2 border-b border-[var(--line)] px-3">
          <span className="shrink-0 text-[var(--ink-muted)]">
            <Icon name="search" size={17} />
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => runQuery(e.target.value)}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={`${domId}-list`}
            aria-autocomplete="list"
            aria-activedescendant={total ? `${domId}-opt-${active}` : undefined}
            aria-describedby={`${domId}-hint`}
            autoComplete="off"
            spellCheck={false}
            placeholder="Search topics, lessons, equations, questions…"
            className="min-w-0 flex-1 bg-transparent py-3.5 text-[0.95rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)]"
          />
          <button
            type="button"
            onClick={closePalette}
            className="shrink-0 rounded-[var(--r-sm)] border border-[var(--line)] px-1.5 py-0.5 text-[0.68rem] font-medium text-[var(--ink-muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
          >
            Esc
          </button>
        </div>

        <div
          ref={listRef}
          id={`${domId}-list`}
          role="listbox"
          aria-label="Search results"
          className="min-h-0 overflow-y-auto overscroll-contain p-1.5"
        >
          {total === 0 && (
            <div className="px-3 py-10 text-center">
              <p className="text-sm font-semibold text-[var(--ink)]">
                Nothing matches “{query.trim()}”.
              </p>
              <p className="mt-1 text-[0.8rem] text-[var(--ink-muted)]">
                Try a shorter word, a symbol name like{" "}
                <span className="font-medium text-[var(--ink-soft)]">sigma</span>, or a
                topic such as{" "}
                <span className="font-medium text-[var(--ink-soft)]">buckling</span>.
              </p>
            </div>
          )}

          {groups.map((group, groupIndex) => (
            <div
              key={group.kind}
              role="group"
              aria-labelledby={`${domId}-grp-${group.kind}`}
            >
              <div
                id={`${domId}-grp-${group.kind}`}
                className="flex items-baseline justify-between px-2.5 pt-3 pb-1.5 text-[0.68rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase"
              >
                <span>{group.label}</span>
                {group.total > group.results.length && (
                  <span className="font-medium tracking-normal normal-case tabular-nums">
                    {group.total - group.results.length} more
                  </span>
                )}
              </div>

              {group.results.map((result, resultIndex) => {
                const index = groupOffsets[groupIndex] + resultIndex;
                const isActive = index === active;
                return (
                  <div
                    key={result.key}
                    id={`${domId}-opt-${index}`}
                    role="option"
                    aria-selected={isActive}
                    onMouseMove={() => setActive(index)}
                    onClick={() => run(result)}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-[var(--r)] px-2.5 py-2 ${
                      isActive
                        ? "bg-[var(--accent-soft)] text-[var(--ink)]"
                        : "text-[var(--ink)]"
                    }`}
                  >
                    <span
                      className={`mt-0.5 ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--ink-muted)]"
                      }`}
                    >
                      <Icon name={KIND_ICON[result.kind]} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-2">
                        <span className="line-clamp-2 text-[0.88rem] leading-snug font-medium">
                          <Marked text={result.title} terms={terms} />
                        </span>
                        {result.formulaHtml && (
                          <span
                            className="rounded-[var(--r-sm)] bg-[var(--surface-muted)] px-1.5 py-0.5 font-serif text-[0.85rem] text-[var(--ink)]"
                            dangerouslySetInnerHTML={{ __html: result.formulaHtml }}
                          />
                        )}
                      </span>
                      {result.subtitle && (
                        <span className="mt-0.5 line-clamp-2 text-[0.75rem] text-[var(--ink-muted)]">
                          <Marked text={result.subtitle} terms={terms} />
                        </span>
                      )}
                    </span>

                    {result.meta && (
                      <span className="mt-0.5 hidden shrink-0 text-[0.7rem] whitespace-nowrap text-[var(--ink-muted)] tabular-nums sm:block">
                        {result.meta}
                      </span>
                    )}

                    {result.altHref && (
                      <button
                        type="button"
                        tabIndex={-1}
                        onClick={(e) => {
                          e.stopPropagation();
                          run(result, true);
                        }}
                        className="mt-px hidden shrink-0 rounded-[var(--r-sm)] border border-[var(--line)] px-1.5 py-0.5 text-[0.68rem] font-medium text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] sm:block"
                      >
                        {result.altLabel} →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div
          id={`${domId}-hint`}
          className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-[var(--line)] bg-[var(--surface-muted)] px-3 py-2 text-[0.7rem] text-[var(--ink-muted)]"
        >
          <span>
            <Key>↑</Key>
            <Key>↓</Key> move
          </span>
          <span>
            <Key>↵</Key> open
          </span>
          {current?.altHref && (
            <span>
              <Key>→</Key> {current.altLabel?.toLowerCase()}
            </span>
          )}
          <span>
            <Key>esc</Key> close
          </span>
          <span className="ml-auto tabular-nums">
            {query.trim()
              ? `${flat.length} of ${indexStats().total.toLocaleString()} indexed`
              : `${indexStats().total.toLocaleString()} things indexed`}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {trigger}
      {mounted && dialog ? createPortal(dialog, document.body) : null}
    </>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="mr-0.5 inline-block min-w-[1.35em] rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface)] px-1 py-px text-center font-sans text-[0.68rem] text-[var(--ink-soft)]">
      {children}
    </kbd>
  );
}
