"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Icon from "@/components/Icon";

/* ===========================================================================
   KeyboardHelp — the "?" sheet

   One place where every keyboard shortcut in the app is written down. Other
   surfaces (the command palette, the quiz runner) own their own key handling;
   they hand their shortcut list to this component so the documentation cannot
   drift from the implementation.

   Dialog semantics use the native <dialog> element opened with `showModal()`,
   which gives the browser-native modal guarantees: focus is trapped inside the
   top layer, Esc fires `cancel` + `close`, and focus returns to the invoker on
   close. `role="dialog"` / `aria-modal` are set explicitly anyway so the
   contract is legible in the markup and does not depend on UA mapping.
   =========================================================================== */

export type Shortcut = {
  /**
   * Key caps in press order, joined with "+".
   * A token from {@link SEPARATORS} is rendered as plain connecting text
   * instead of a cap, so `["1", "–", "5"]` reads "1 – 5", not "1 + – + 5",
   * and `["G", "then", "R"]` reads as a chord.
   */
  keys: readonly string[];
  description: string;
  /** Optional scope note, e.g. "in a quiz". */
  when?: string;
};

/** Tokens that connect key caps rather than being keys themselves. */
const SEPARATORS = new Set(["–", "—", "-", "…", "/", "then", "or", "to"]);

export type ShortcutGroup = {
  label: string;
  shortcuts: readonly Shortcut[];
};

/**
 * The one shortcut this component itself owns. Spread it into your groups so
 * the sheet documents how to reach the sheet.
 */
export const HELP_SHORTCUT: Shortcut = {
  keys: ["?"],
  description: "Show this keyboard shortcut sheet",
};

export type KeyboardHelpProps = {
  groups: readonly ShortcutGroup[];
  /** Controlled open state. Omit to let the component manage it. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Set to stop listening for "?" (e.g. a route that binds it itself). */
  disableHotkey?: boolean;
  title?: string;
  /** Shown under the title. One line. */
  description?: string;
};

/** A single key cap. Exported so other surfaces can render inline key hints. */
export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-w-[1.65rem] items-center justify-center rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface-muted)] px-1.5 py-[0.15rem] font-mono text-[0.72rem] font-semibold text-[var(--ink)] tabular-nums">
      {children}
    </kbd>
  );
}

/** True when the user is typing — a bare "?" there must insert a character. */
function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}

export default function KeyboardHelp({
  groups,
  open: controlledOpen,
  onOpenChange,
  disableHotkey = false,
  title = "Keyboard shortcuts",
  description,
}: KeyboardHelpProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const headingId = useId();
  const descId = useId();

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  /* "?" opens the sheet from anywhere that is not a text field. */
  useEffect(() => {
    if (disableHotkey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "?" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;
      if (dialogRef.current?.open) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [disableHotkey, setOpen]);

  /* Drive the native dialog from React state, and only from React state. */
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (open && !el.open) {
      restoreRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      el.showModal();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  /* A modal dialog does not stop the page behind it from scrolling. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /**
   * Explicit Tab cycling.
   *
   * `showModal()` already makes everything outside the dialog inert, so focus
   * cannot reach the page behind it. What the UA does NOT guarantee is that
   * Tab wraps from the last control back to the first rather than stepping out
   * into browser chrome, so that part is handled here and the behaviour is the
   * same in every browser.
   */
  const trapTab = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const el = dialogRef.current;
    if (!el) return;

    const focusable = Array.from(
      el.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (e.shiftKey) {
      if (active === first || !el.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last || !el.contains(active)) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  /* Fires for Esc, for the close button, and for programmatic close(). */
  const handleClose = useCallback(() => {
    setOpen(false);
    // The browser restores focus on its own; this covers the case where the
    // invoker was re-rendered while the sheet was open.
    const target = restoreRef.current;
    restoreRef.current = null;
    if (target && document.contains(target)) target.focus();
  }, [setOpen]);

  return (
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      aria-describedby={description ? descId : undefined}
      onClose={handleClose}
      onKeyDown={trapTab}
      onClick={(e) => {
        // Clicking the backdrop targets the dialog element itself.
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-auto w-[min(100vw-2rem,40rem)] max-w-none rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-0 text-[var(--ink)] backdrop:bg-black/45"
      style={{ boxShadow: "var(--shadow-pop)" }}
    >
      <div className="flex max-h-[min(80vh,42rem)] flex-col">
        <header className="flex items-start gap-3 border-b border-[var(--line)] px-5 py-4">
          <span
            className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface-muted)] text-[var(--ink-soft)]"
            aria-hidden="true"
          >
            <Icon name="keyboard" size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id={headingId}
              className="text-[1.05rem] font-semibold tracking-[-0.015em] text-[var(--ink)]"
            >
              {title}
            </h2>
            {description ? (
              <p id={descId} className="mt-0.5 text-[0.82rem] text-[var(--ink-muted)]">
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close keyboard shortcuts"
            className="grid h-8 w-8 shrink-0 place-items-center rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
          >
            <Icon name="close" size={16} />
          </button>
        </header>

        {/* The list scrolls, so it must be reachable and scrollable by keyboard
            — and being in the tab order also gives the trap a second stop. */}
        <div
          tabIndex={0}
          role="group"
          aria-label="Shortcut list"
          className="min-h-0 flex-1 overflow-y-auto px-5 py-4"
        >
          {groups.length === 0 ? (
            <p className="py-6 text-center text-[0.85rem] text-[var(--ink-muted)]">
              No shortcuts are registered on this screen.
            </p>
          ) : (
            <div className="grid gap-6">
              {groups.map((group) => (
                <section key={group.label}>
                  <h3 className="mb-2 text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                    {group.label}
                  </h3>
                  <ul className="grid">
                    {group.shortcuts.map((s) => (
                      <li
                        key={`${group.label}:${s.description}`}
                        className="flex items-center justify-between gap-4 border-t border-[var(--line)] py-2 first:border-t-0"
                      >
                        <span className="text-[0.86rem] leading-snug text-[var(--ink-soft)]">
                          {s.description}
                          {s.when ? (
                            <span className="text-[var(--ink-muted)]"> · {s.when}</span>
                          ) : null}
                        </span>
                        <span className="flex shrink-0 items-center gap-1">
                          {s.keys.map((k, i) => {
                            if (SEPARATORS.has(k)) {
                              return (
                                <span
                                  key={`${k}-${i}`}
                                  className="px-0.5 text-[0.72rem] text-[var(--ink-muted)]"
                                >
                                  {k}
                                </span>
                              );
                            }
                            const joins =
                              i > 0 && !SEPARATORS.has(s.keys[i - 1] as string);
                            return (
                              <span key={`${k}-${i}`} className="flex items-center gap-1">
                                {joins ? (
                                  <span
                                    aria-hidden="true"
                                    className="text-[0.7rem] text-[var(--ink-muted)]"
                                  >
                                    +
                                  </span>
                                ) : null}
                                <Kbd>{k}</Kbd>
                              </span>
                            );
                          })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>

        <footer className="flex items-center justify-between gap-3 border-t border-[var(--line)] bg-[var(--surface-muted)] px-5 py-2.5 text-[0.75rem] text-[var(--ink-muted)]">
          <span className="flex items-center gap-1.5">
            <Kbd>Esc</Kbd> closes this sheet
          </span>
          <span className="flex items-center gap-1.5">
            <Kbd>?</Kbd> reopens it
          </span>
        </footer>
      </div>
    </dialog>
  );
}
