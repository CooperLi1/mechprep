import type { CSSProperties } from "react";

/* ===========================================================================
   Skeleton

   Several surfaces in this app render `null` until localStorage hydrates, so
   these are load-bearing, not decoration. Rules:

   1. A skeleton must have the SHAPE of the thing it replaces. A generic grey
      rectangle just moves the flash of empty from "nothing" to "something
      wrong", so each primitive below mirrors a real component in the app
      (text block, panel, table row, figure sheet, stat tile).
   2. Motion is opt-in per user: the pulse is applied through Tailwind's
      `motion-safe:` variant, so under `prefers-reduced-motion: reduce` the
      animation class is never emitted at all — nothing to override, nothing
      frozen mid-keyframe.
   3. The bars are `aria-hidden`; the *container* announces the wait once via
      `role="status"`. Screen readers hear "Loading lessons", not 14 blanks.

   Colour is `color-mix(--ink into --surface)` rather than a fixed token so the
   bars sit at the same optical distance from the card in both themes.
   =========================================================================== */

const BAR_BG = "color-mix(in srgb, var(--ink) 10%, var(--surface))";
const PULSE = "motion-safe:animate-pulse";

export type SkeletonProps = {
  /** CSS width. Number is treated as px. Default: fill the parent. */
  width?: number | string;
  /** CSS height. Number is treated as px. Default: one text line. */
  height?: number | string;
  /** Corner radius token. `pill` for avatars/chips, `sm` for text bars. */
  radius?: "sm" | "md" | "lg" | "pill";
  className?: string;
  style?: CSSProperties;
};

const RADIUS: Record<NonNullable<SkeletonProps["radius"]>, string> = {
  sm: "var(--r-sm)",
  md: "var(--r)",
  lg: "var(--r-lg)",
  pill: "var(--r-pill)",
};

/** One placeholder bar. Everything else in this file is composed from it. */
export function Skeleton({
  width,
  height = "0.85rem",
  radius = "sm",
  className = "",
  style,
}: SkeletonProps) {
  return (
    <span
      aria-hidden="true"
      className={`block ${PULSE} ${className}`}
      style={{
        width: width ?? "100%",
        height,
        borderRadius: RADIUS[radius],
        background: BAR_BG,
        ...style,
      }}
    />
  );
}

/**
 * Wraps a group of bars so assistive tech hears the wait exactly once.
 * Every composite below uses it; nest freely — only pass `label` at the top.
 */
export function SkeletonRegion({
  label = "Loading",
  className = "",
  children,
}: {
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div role="status" aria-busy="true" aria-live="polite" className={className}>
      <span className="sr-only">{label}…</span>
      {children}
    </div>
  );
}

/* --- text ---------------------------------------------------------------- */

/** A paragraph. The last line is short, the way real prose ends. */
export function SkeletonText({
  lines = 3,
  label,
  className = "",
}: {
  lines?: number;
  label?: string;
  className?: string;
}) {
  const bars = Array.from({ length: Math.max(1, lines) }, (_, i) => (
    <Skeleton
      key={i}
      height="0.75rem"
      width={i === lines - 1 && lines > 1 ? "62%" : "100%"}
    />
  ));

  if (!label) return <div className={`grid gap-2.5 ${className}`}>{bars}</div>;
  return (
    <SkeletonRegion label={label} className={`grid gap-2.5 ${className}`}>
      {bars}
    </SkeletonRegion>
  );
}

/* --- surfaces ------------------------------------------------------------ */

/** Mirrors `.panel` / `.topic-card`: hairline border, title, body, meta row. */
export function SkeletonCard({
  lines = 2,
  showMeta = true,
  label,
  className = "",
}: {
  lines?: number;
  showMeta?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <SkeletonRegion
      label={label ?? "Loading card"}
      className={`rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-4 ${className}`}
    >
      <div className="grid gap-3">
        <Skeleton width="55%" height="1rem" />
        <SkeletonText lines={lines} />
        {showMeta ? (
          <div className="mt-1 flex items-center gap-2">
            <Skeleton width={54} height="0.7rem" radius="pill" />
            <Skeleton width={38} height="0.7rem" radius="pill" />
          </div>
        ) : null}
      </div>
    </SkeletonRegion>
  );
}

/** Mirrors `.mini-stat`: a small label over a big tabular number. */
export function SkeletonStat({
  count = 3,
  label,
  className = "",
}: {
  count?: number;
  label?: string;
  className?: string;
}) {
  return (
    <SkeletonRegion label={label ?? "Loading statistics"} className={className}>
      <div
        className="grid gap-2.5"
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, count)}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: Math.max(1, count) }, (_, i) => (
          <div
            key={i}
            className="rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] px-3 py-2.5"
          >
            <Skeleton width="70%" height="0.65rem" />
            <Skeleton width="45%" height="1.15rem" className="mt-2" />
          </div>
        ))}
      </div>
    </SkeletonRegion>
  );
}

/* --- tables -------------------------------------------------------------- */

/** One row of a data table. Column widths vary so it does not read as a grid. */
export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
  const widths = ["38%", "62%", "48%", "70%", "55%", "44%"];
  return (
    <div
      className="grid items-center gap-3 border-t border-[var(--line)] px-3 py-2.5"
      style={{
        gridTemplateColumns: `repeat(${Math.max(1, columns)}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: Math.max(1, columns) }, (_, i) => (
        <Skeleton key={i} width={widths[i % widths.length]} height="0.72rem" />
      ))}
    </div>
  );
}

/** A whole table shell: header band plus `rows` placeholder rows. */
export function SkeletonTable({
  rows = 5,
  columns = 4,
  label,
  className = "",
}: {
  rows?: number;
  columns?: number;
  label?: string;
  className?: string;
}) {
  return (
    <SkeletonRegion
      label={label ?? "Loading table"}
      className={`overflow-hidden rounded-[var(--r)] border border-[var(--line)] ${className}`}
    >
      <div
        className="grid gap-3 bg-[var(--surface-muted)] px-3 py-2.5"
        style={{
          gridTemplateColumns: `repeat(${Math.max(1, columns)}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: Math.max(1, columns) }, (_, i) => (
          <Skeleton key={i} width="55%" height="0.65rem" />
        ))}
      </div>
      {Array.from({ length: Math.max(1, rows) }, (_, i) => (
        <SkeletonTableRow key={i} columns={columns} />
      ))}
    </SkeletonRegion>
  );
}

/* --- figures ------------------------------------------------------------- */

/**
 * Mirrors `.fig` / `.qfig`. Per DESIGN.md a drawing lives on a sheet, so the
 * placeholder keeps the paper-white sheet and the `--figure-frame` hairline in
 * BOTH themes — the loading state must not imply the figure will be dark.
 */
export function SkeletonFigure({
  height = 160,
  caption = true,
  label,
  className = "",
}: {
  height?: number;
  caption?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <SkeletonRegion
      label={label ?? "Loading figure"}
      className={`rounded-[var(--r)] border border-[var(--figure-frame)] bg-[var(--figure-sheet)] p-3.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`block ${PULSE}`}
        style={{
          height,
          borderRadius: "var(--r-sm)",
          background: "color-mix(in srgb, #0f172a 8%, var(--figure-sheet))",
        }}
      />
      {caption ? (
        <span
          aria-hidden="true"
          className={`mx-auto mt-3 block ${PULSE}`}
          style={{
            width: "48%",
            height: "0.7rem",
            borderRadius: "var(--r-sm)",
            background: "color-mix(in srgb, #0f172a 12%, var(--figure-sheet))",
          }}
        />
      ) : null}
    </SkeletonRegion>
  );
}

/* --- lists --------------------------------------------------------------- */

/** A stack of question/lesson rows — the shape the bank and Q&A lists use. */
export function SkeletonList({
  items = 4,
  label,
  className = "",
}: {
  items?: number;
  label?: string;
  className?: string;
}) {
  return (
    <SkeletonRegion
      label={label ?? "Loading list"}
      className={`grid gap-2 ${className}`}
    >
      {Array.from({ length: Math.max(1, items) }, (_, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] px-3.5 py-3"
        >
          <Skeleton width={26} height={26} radius="sm" className="shrink-0" />
          <div className="grid flex-1 gap-2">
            <Skeleton width={i % 2 === 0 ? "72%" : "58%"} height="0.8rem" />
            <Skeleton width="40%" height="0.65rem" />
          </div>
        </div>
      ))}
    </SkeletonRegion>
  );
}

export default Skeleton;
