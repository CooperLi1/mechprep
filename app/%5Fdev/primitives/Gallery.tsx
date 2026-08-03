"use client";

import { useEffect, useMemo, useState } from "react";
import Icon, {
  ICON_ALIASES,
  ICON_GROUPS,
  ICON_NAMES,
  type IconName,
} from "@/components/Icon";
import EmptyState from "@/components/EmptyState";
import Skeleton, {
  SkeletonCard,
  SkeletonFigure,
  SkeletonList,
  SkeletonStat,
  SkeletonTable,
  SkeletonText,
} from "@/components/Skeleton";
import KeyboardHelp, { HELP_SHORTCUT, Kbd } from "@/components/KeyboardHelp";

const SIZES = [16, 20, 24] as const;

const DEMO_SHORTCUTS = [
  {
    label: "Global",
    shortcuts: [
      { keys: ["⌘", "K"], description: "Open search — questions, lessons, equations" },
      { keys: ["G", "H"], description: "Go to the home dashboard" },
      { keys: ["G", "R"], description: "Go to today's review queue" },
      HELP_SHORTCUT,
    ],
  },
  {
    label: "In a quiz",
    shortcuts: [
      { keys: ["1", "–", "5"], description: "Select an answer option" },
      { keys: ["G", "then", "B"], description: "Chord example — go to the bank" },
      { keys: ["Enter"], description: "Submit, then advance", when: "in a quiz" },
      { keys: ["→"], description: "Next question", when: "in a quiz" },
      { keys: ["←"], description: "Previous question", when: "in a quiz" },
      { keys: ["B"], description: "Bookmark this question", when: "in a quiz" },
      { keys: ["H"], description: "Reveal the next hint", when: "in a quiz" },
    ],
  },
  {
    label: "Reading",
    shortcuts: [
      { keys: ["J"], description: "Next section" },
      { keys: ["K"], description: "Previous section" },
      { keys: ["⌘", "P"], description: "Print this lesson" },
    ],
  },
] as const;

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="grid gap-4">
      <div className="border-b border-[var(--line)] pb-2">
        <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em] text-[var(--ink)]">
          {title}
        </h2>
        {note ? (
          <p className="mt-1 max-w-[68ch] text-[0.85rem] leading-relaxed text-[var(--ink-muted)]">
            {note}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function IconTile({
  name,
  size,
  onCopy,
  copied,
}: {
  name: IconName;
  size: number;
  onCopy: (name: IconName) => void;
  copied: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onCopy(name)}
      title={`Copy <Icon name="${name}" />`}
      className="group flex flex-col items-center justify-start gap-2 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] px-2 py-3 hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)]"
    >
      <span className="grid h-8 place-items-center text-[var(--ink)]">
        <Icon name={name} size={size} />
      </span>
      <span className="w-full truncate text-center font-mono text-[0.65rem] leading-none text-[var(--ink-muted)] group-hover:text-[var(--ink-soft)]">
        {copied ? "copied" : name}
      </span>
    </button>
  );
}

export default function Gallery() {
  const [size, setSize] = useState<number>(24);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<IconName | null>(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [reduced, setReduced] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(null), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = (name: IconName) => {
    setCopied(name);
    void navigator.clipboard?.writeText(`<Icon name="${name}" />`).catch(() => {});
  };

  const q = query.trim().toLowerCase();
  const groups = useMemo(
    () =>
      ICON_GROUPS.map((g) => ({
        ...g,
        names: g.names.filter((n) => !q || n.includes(q)),
      })).filter((g) => g.names.length > 0),
    [q]
  );

  const aliasRows = Object.entries(ICON_ALIASES) as [string, IconName][];

  return (
    <div className="page-stack">
      {/* ---------------------------------------------------------------- */}
      <header className="rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-5">
        <p className="text-[0.7rem] font-bold tracking-[0.1em] text-[var(--ink-muted)] uppercase">
          Internal · not linked from navigation
        </p>
        <h1 className="mt-1.5 text-[1.9rem] leading-tight font-bold tracking-[-0.03em] text-[var(--ink)]">
          Shared visual primitives
        </h1>
        <p className="mt-2 max-w-[68ch] text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
          The icon set, empty states, skeletons and the <Kbd>?</Kbd> shortcut sheet
          that the rest of the product is built from. Everything here is
          self-contained: Tailwind utilities plus the tokens already declared in{" "}
          <code className="rounded-[var(--r-sm)] bg-[var(--surface-muted)] px-1 font-mono text-[0.85em]">
            globals.css
          </code>
          . Click any icon to copy its JSX.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setHelpOpen(true)}
          >
            <Icon name="keyboard" size={16} />
            Open the shortcut sheet
          </button>
          <span className="text-[0.8rem] text-[var(--ink-muted)]">
            or press <Kbd>?</Kbd> anywhere on this page
          </span>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="icons"
        title={`Icon set — ${ICON_NAMES.length} glyphs`}
        note="24×24 grid, 1.5 stroke, currentColor, round caps and joins, live area inset to 3.5–20.5. Straight lines and 45° diagonals wherever the object allows; curves only where the object genuinely curves. Decorative by default (aria-hidden); pass `label` to promote to role=&quot;img&quot;."
      >
        <div className="flex flex-wrap items-center gap-3">
          <div className="segmented" role="group" aria-label="Icon size">
            {SIZES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={`segment${size === s ? " segment-on" : ""}`}
              >
                {s}px
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2">
            <span className="sr-only">Filter icons by name</span>
            <span className="relative flex items-center">
              <span className="pointer-events-none absolute left-2.5 text-[var(--ink-muted)]">
                <Icon name="search" size={15} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by name…"
                className="text-field w-56 pl-8"
              />
            </span>
          </label>
          <span className="text-[0.78rem] text-[var(--ink-muted)]">
            {groups.reduce((n, g) => n + g.names.length, 0)} shown
          </span>
        </div>

        {groups.length === 0 ? (
          <EmptyState
            variant="compact"
            icon="search"
            title={`No icon matches “${query}”`}
            description="Names are kebab-case, e.g. arrow-right, bookmark-filled."
            action={{ label: "Clear the filter", onClick: () => setQuery("") }}
          />
        ) : (
          groups.map((group) => (
            <div key={group.label} className="grid gap-2">
              <h3 className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                {group.label}
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2">
                {group.names.map((n) => (
                  <IconTile
                    key={n}
                    name={n}
                    size={size}
                    onCopy={copy}
                    copied={copied === n}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="legibility"
        title="16px legibility check"
        note="The set is drawn on a 24u grid, so 16px renders the 1.5 stroke at exactly 1.0 CSS px. Every glyph below is at its real 16px size beside 14px UI text — the size it will actually ship at inside buttons and meta rows. The 4× column is the same SVG scaled up for inspection only."
      >
        <div className="overflow-x-auto rounded-[var(--r)] border border-[var(--line)]">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-[var(--surface-muted)] text-[0.7rem] tracking-[0.06em] text-[var(--ink-muted)] uppercase">
                <th className="px-3 py-2 font-semibold">Name</th>
                <th className="px-3 py-2 font-semibold">16px inline</th>
                <th className="px-3 py-2 font-semibold">16px on accent</th>
                <th className="px-3 py-2 font-semibold">4× inspection</th>
              </tr>
            </thead>
            <tbody>
              {ICON_NAMES.filter((n) => !q || n.includes(q)).map((n) => (
                <tr key={n} className="border-t border-[var(--line)]">
                  <td className="px-3 py-1.5 font-mono text-[0.72rem] text-[var(--ink-soft)]">
                    {n}
                  </td>
                  <td className="px-3 py-1.5">
                    <span className="inline-flex items-center gap-1.5 text-[0.875rem] text-[var(--ink)]">
                      <Icon name={n} size={16} />
                      Continue drilling
                    </span>
                  </td>
                  <td className="px-3 py-1.5">
                    <span className="inline-flex items-center gap-1.5 rounded-[var(--r)] bg-[var(--accent)] px-2 py-1 text-[0.8rem] font-semibold text-[var(--on-accent)]">
                      <Icon name={n} size={16} />
                      Start
                    </span>
                  </td>
                  <td className="px-3 py-1.5 text-[var(--ink)]">
                    <Icon name={n} size={64} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="aliases"
        title="Semantic aliases"
        note="Call sites can use the product word instead of the drawing word. Both resolve to the same glyph and both type-check."
      >
        <div className="grid grid-cols-[repeat(auto-fill,minmax(11rem,1fr))] gap-2">
          {aliasRows.map(([alias, target]) => (
            <div
              key={alias}
              className="flex items-center gap-2.5 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
            >
              <Icon name={target} size={18} />
              <span className="min-w-0 font-mono text-[0.72rem] text-[var(--ink-soft)]">
                <span className="text-[var(--ink)]">{alias}</span>
                <span className="text-[var(--ink-muted)]"> → {target}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="empty"
        title="EmptyState"
        note="`action` is a required prop and an action must carry an href or an onClick, so a dead-end empty state is a type error rather than a review comment. Block variant for a whole route or card; compact for an empty section inside a populated page."
      >
        <div className="grid gap-3 md:grid-cols-2">
          <EmptyState
            icon="repeat"
            title="Nothing due for review"
            description="Questions you get wrong come back here on a schedule. You have not missed any yet."
            action={{ label: "Start a practice set", href: "/", icon: "target" }}
          />
          <EmptyState
            icon="bookmark"
            title="No bookmarks yet"
            description="Flag a question from any quiz and it lands here for the morning of your interview."
            action={{ label: "Browse the bank", href: "/bank", icon: "layers" }}
            secondaryAction={{ label: "How bookmarks work", href: "/" }}
          />
          <EmptyState
            title="No results for “thermal fatigue”"
            description="Try a broader term, or search the formula sheet instead."
            action={{ label: "Clear filters", onClick: () => setQuery("") }}
            secondaryAction={{ label: "Open formula sheet", href: "/" }}
          />
          <EmptyState
            icon="clipboard"
            title="You have not taken a mock test"
            description="A timed, mixed-topic session ends in a report card with per-area advice."
            action={{ label: "Build a test", href: "/test", icon: "arrow-right" }}
          />
        </div>

        <div className="grid gap-2">
          <EmptyState
            variant="compact"
            icon="flag"
            title="No weak areas identified yet"
            description="Answer at least five questions in a topic and it becomes eligible."
            action={{ label: "Practice", href: "/" }}
          />
          <EmptyState
            variant="compact"
            icon="chart"
            title="Progress is empty"
            description="This browser has no saved attempts."
            action={{ label: "Start", href: "/" }}
            secondaryAction={{ label: "Import", onClick: () => {} }}
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="skeleton"
        title="Skeleton"
        note="Shapes that match the real content, not generic grey boxes. The pulse is emitted through Tailwind's motion-safe: variant, so under prefers-reduced-motion the animation class is never applied — nothing frozen mid-keyframe. Bars are aria-hidden; the container announces the wait once via role=status."
      >
        <div
          className={`soft-callout flex items-center gap-2 text-[0.82rem] ${
            reduced ? "text-[var(--warn-ink)]" : "text-[var(--ink-soft)]"
          }`}
        >
          <Icon name={reduced ? "pause" : "play"} size={16} />
          {reduced === null
            ? "Checking motion preference…"
            : reduced
              ? "prefers-reduced-motion: reduce — skeletons below are static."
              : "prefers-reduced-motion: no-preference — skeletons below pulse."}
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              Text · 4 lines
            </p>
            <div className="rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-4">
              <SkeletonText lines={4} label="Loading lesson" />
            </div>
          </div>

          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              Card
            </p>
            <SkeletonCard label="Loading topic" />
          </div>

          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              Stat tiles
            </p>
            <SkeletonStat count={3} />
          </div>

          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              List rows
            </p>
            <SkeletonList items={3} />
          </div>

          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              Table · 4 rows × 4 cols
            </p>
            <SkeletonTable rows={4} columns={4} />
          </div>

          <div className="grid gap-2">
            <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
              Figure sheet
            </p>
            <SkeletonFigure height={140} />
          </div>
        </div>

        <div className="grid gap-2">
          <p className="text-[0.7rem] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
            Base bar — width / height / radius
          </p>
          <div className="flex flex-wrap items-center gap-3 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] p-4">
            <Skeleton width={120} height="0.75rem" />
            <Skeleton width={80} height="1.25rem" radius="md" />
            <Skeleton width={32} height={32} radius="pill" />
            <Skeleton width={180} height={48} radius="lg" />
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section
        id="keyboard"
        title="KeyboardHelp"
        note="Native <dialog> opened with showModal(): focus is trapped in the top layer, Esc closes it, focus returns to the invoker. role=dialog and aria-modal are also set explicitly. The list is a prop, so whoever owns ⌘K or the quiz keys owns their own entries."
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setHelpOpen(true)}
          >
            <Icon name="keyboard" size={16} />
            Open sheet
          </button>
          <span className="text-[0.82rem] text-[var(--ink-muted)]">
            Tab cycles inside the dialog · <Kbd>Esc</Kbd> closes · focus returns to
            this button
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] p-4">
          <span className="text-[0.82rem] text-[var(--ink-soft)]">Key caps:</span>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <Kbd>Esc</Kbd>
          <Kbd>Enter</Kbd>
          <Kbd>?</Kbd>
          <Kbd>1</Kbd>
        </div>
      </Section>

      <KeyboardHelp
        groups={DEMO_SHORTCUTS}
        open={helpOpen}
        onOpenChange={setHelpOpen}
        description="Example list — each surface passes its own shortcuts in."
      />
    </div>
  );
}
