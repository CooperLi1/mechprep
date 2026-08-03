"use client";

import { useId, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
  /** Section number, or null for the trailing landmarks (equations, tips, CTA). */
  num: number | null;
}

interface Shared {
  items: NavItem[];
  active: number;
  /** Highest index reached; anything before it counts as read. */
  furthest: number;
  atEnd: boolean;
  sectionCount: number;
  headerHeight: number;
}

function isRead(index: number, furthest: number, atEnd: boolean): boolean {
  return atEnd || index < furthest;
}

/**
 * State is never carried by colour alone: the current item also gets an accent
 * rule down its left edge, bolder type and `aria-current`; a finished one gets
 * a tick in place of its number.
 */
function NavList({
  items,
  active,
  furthest,
  atEnd,
  onNavigate,
}: {
  items: NavItem[];
  active: number;
  furthest: number;
  atEnd: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ol className="grid gap-px">
      {items.map((item, i) => {
        const current = i === active;
        const read = isRead(i, furthest, atEnd);
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={current ? "location" : undefined}
              onClick={onNavigate}
              className={`flex items-start gap-2.5 rounded-[var(--r-sm)] border-l-2 py-1.5 pr-2 pl-2 text-[0.8rem] leading-snug ${
                current
                  ? "border-l-[var(--accent)] bg-[var(--accent-soft)] font-semibold text-[var(--accent-ink)]"
                  : "border-l-transparent text-[var(--ink-soft)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
              }`}
            >
              <span
                aria-hidden="true"
                className={`w-4 shrink-0 text-right font-mono text-[0.68rem] tabular-nums ${
                  current ? "text-[var(--accent)]" : "text-[var(--ink-muted)]"
                }`}
              >
                {read ? "✓" : item.num ?? "·"}
              </span>
              <span className="min-w-0">
                {item.label}
                {read && <span className="sr-only"> (read)</span>}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function ProgressMeter({
  read,
  total,
  className = "",
}: {
  read: number;
  total: number;
  className?: string;
}) {
  const pct = total === 0 ? 0 : Math.round((read / total) * 100);
  return (
    <div className={className}>
      <div
        className="h-1 w-full overflow-hidden rounded-[var(--r-pill)] bg-[var(--surface-sunken)]"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={read}
        aria-label="Lesson sections read"
        aria-valuetext={`${read} of ${total} sections read`}
      >
        <div
          className="h-full rounded-[var(--r-pill)] bg-[var(--accent)] transition-[width] duration-200"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1.5 text-[0.7rem] text-[var(--ink-muted)] tabular-nums">
        {read} of {total} sections read
      </p>
    </div>
  );
}

/** The persistent rail. Only mounted from `lg` up, where there is room beside
 *  the prose column without pushing it under a comfortable measure. */
export function LessonNav({
  items,
  active,
  furthest,
  atEnd,
  sectionCount,
  headerHeight,
  minutes,
  figures,
  checks,
}: Shared & {
  minutes: number;
  figures: number;
  checks: { answered: number; correct: number; total: number };
}) {
  const read = Math.min(atEnd ? sectionCount : furthest, sectionCount);
  return (
    <nav
      aria-label="Lesson contents"
      className="hidden lg:block"
      style={{ position: "sticky", top: headerHeight + 24 }}
    >
      <div
        className="overflow-y-auto rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-3"
        style={{ maxHeight: `calc(100vh - ${headerHeight + 48}px)` }}
      >
        <p className="px-2 text-[0.68rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase">
          In this lesson
        </p>
        <p className="mt-1 px-2 text-[0.72rem] text-[var(--ink-muted)] tabular-nums">
          ~{minutes} min read · {figures} figures
        </p>
        <ProgressMeter read={read} total={sectionCount} className="mt-2.5 px-2" />
        <hr className="my-2.5 border-0 border-t border-[var(--line)]" />
        <NavList items={items} active={active} furthest={furthest} atEnd={atEnd} />
        {checks.total > 0 && (
          <>
            <hr className="my-2.5 border-0 border-t border-[var(--line)]" />
            <p className="px-2 pb-1 text-[0.72rem] text-[var(--ink-muted)] tabular-nums">
              {checks.answered === 0
                ? `${checks.total} checks to try`
                : `Checks: ${checks.correct}/${checks.answered} correct`}
            </p>
          </>
        )}
      </div>
    </nav>
  );
}

/** Below `lg` the rail becomes a one-line sticky bar that expands on demand. */
export function LessonNavCompact({
  items,
  active,
  furthest,
  atEnd,
  sectionCount,
  headerHeight,
  minutes,
  ref,
}: Shared & { minutes: number; ref?: React.Ref<HTMLDivElement> }) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const current = items[Math.min(active, items.length - 1)];
  const read = Math.min(atEnd ? sectionCount : furthest, sectionCount);

  return (
    <div
      ref={ref}
      className="lg:hidden"
      style={{ position: "sticky", top: headerHeight, zIndex: 30 }}
    >
      <nav
        aria-label="Lesson contents"
        className="rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)]"
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-2.5 rounded-[var(--r)] px-3 py-2.5 text-left"
        >
          <span className="shrink-0 rounded-[var(--r-sm)] bg-[var(--accent-soft)] px-1.5 py-0.5 font-mono text-[0.68rem] font-bold text-[var(--accent-ink)] tabular-nums">
            {Math.min(read + 1, sectionCount)}/{sectionCount}
          </span>
          <span className="min-w-0 flex-1 truncate text-[0.8rem] font-semibold text-[var(--ink)]">
            {current?.label ?? "Contents"}
          </span>
          <span className="shrink-0 text-[0.7rem] text-[var(--ink-muted)] tabular-nums">
            ~{minutes} min
          </span>
          <span aria-hidden="true" className="shrink-0 text-[0.7rem] text-[var(--ink-muted)]">
            {open ? "▴" : "▾"}
          </span>
        </button>
        {open && (
          <div id={panelId} className="border-t border-[var(--line)] p-2">
            <NavList
              items={items}
              active={active}
              furthest={furthest}
              atEnd={atEnd}
              onNavigate={() => setOpen(false)}
            />
          </div>
        )}
      </nav>
    </div>
  );
}
