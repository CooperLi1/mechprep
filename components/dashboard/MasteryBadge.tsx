import { masteryMeta, type MasteryLevel } from "@/lib/mastery";

/** Weakest to strongest, for anything that needs to compare two levels. */
export const MASTERY_ORDER = [
  "none",
  "attempted",
  "familiar",
  "proficient",
  "mastered",
] as const satisfies readonly MasteryLevel[];

export function levelRank(level: MasteryLevel): number {
  return MASTERY_ORDER.indexOf(level);
}

/** Bar heights in px, shortest first. The level is carried by how many bars are
 *  filled AND by the visible label — never by colour alone. */
const BAR_HEIGHTS = [5, 8, 11, 14];

/**
 * The mastery level, replacing the old percentage ring.
 *
 * A ring reading 100% after three lucky guesses taught nothing (PRODUCT.md
 * principle 2). A named level with published criteria — see `MasteryLegend`,
 * which quotes `masteryMeta().blurb` verbatim — is legible and hard to fake.
 */
export default function MasteryBadge({
  level,
  className = "",
}: {
  level: MasteryLevel;
  className?: string;
}) {
  const { label, blurb } = masteryMeta(level);
  const filled = Math.max(0, levelRank(level));
  const fill = level === "mastered" ? "var(--correct)" : "var(--accent)";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 ${className}`}
      title={`${label} — ${blurb}`}
    >
      <span aria-hidden="true" className="flex h-[14px] items-end gap-[2px]">
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={h}
            className="w-[3px] rounded-[1px]"
            style={{
              height: `${h}px`,
              // --surface-sunken is all but invisible against a dark card, and
              // the empty bars have to be countable for the filled ones to read.
              background: i < filled ? fill : "var(--line-strong)",
            }}
          />
        ))}
      </span>
      <span
        className="text-[13px] font-semibold whitespace-nowrap"
        style={{ color: filled === 0 ? "var(--ink-muted)" : "var(--ink-soft)" }}
      >
        {label}
      </span>
    </span>
  );
}

/** The published criteria. A level the user cannot check is just another
 *  number to distrust, so every threshold is spelled out on the page. */
export function MasteryLegend() {
  return (
    <details className="max-w-[68ch]">
      <summary className="cursor-pointer text-[13px] font-semibold text-[var(--ink-soft)] hover:text-[var(--accent)]">
        How mastery is measured
      </summary>
      <dl className="mt-3 grid gap-3 rounded-[6px] border border-[var(--line)] bg-[var(--surface-muted)] p-3">
        {MASTERY_ORDER.map((level) => (
          <div key={level} className="grid gap-1 sm:grid-cols-[132px_1fr] sm:gap-3">
            <dt>
              <MasteryBadge level={level} />
            </dt>
            <dd className="text-[13px] leading-[1.55] text-[var(--ink-soft)]">
              {masteryMeta(level).blurb}
            </dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
