import Link from "next/link";
import Icon, { type IconKey } from "@/components/Icon";

/* ===========================================================================
   EmptyState

   PRODUCT.md principle 1: "Never show a dead end. Every screen ends with an
   obvious next action. Empty states are opportunities, not apologies."

   That principle is enforced by the type, not by a code review: `action` is a
   required prop, and an action must carry either an `href` or an `onClick`.
   There is no way to render this component that leaves the user stuck.
   =========================================================================== */

type ActionBase = {
  label: string;
  /** Optional leading glyph. Keep it out unless it adds meaning. */
  icon?: IconKey;
};

/**
 * An action must go somewhere. The union makes "a button that does nothing"
 * a compile error rather than a design review comment.
 */
export type EmptyStateAction =
  | (ActionBase & { href: string; onClick?: () => void })
  | (ActionBase & { onClick: () => void; href?: undefined });

export type EmptyStateProps = {
  /** Headline. A statement of the situation, not an apology. */
  title: string;
  /** One line of explanation. Two at the very most — this is not a page. */
  description?: string;
  icon?: IconKey;
  /** Required: the way out. */
  action: EmptyStateAction;
  /** Optional lower-commitment alternative. */
  secondaryAction?: EmptyStateAction;
  /**
   * `block`   — full panel, for a route or a card that has nothing in it.
   * `compact` — one inline row, for an empty section inside a populated page.
   */
  variant?: "block" | "compact";
  className?: string;
};

function ActionControl({
  action,
  kind,
  block,
}: {
  action: EmptyStateAction;
  kind: "primary" | "secondary";
  block: boolean;
}) {
  const cls = block
    ? `btn btn-${kind}`
    : kind === "primary"
      ? "inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] hover:underline underline-offset-2"
      : "inline-flex items-center gap-1.5 text-[0.82rem] font-medium text-[var(--ink-soft)] hover:text-[var(--ink)] hover:underline underline-offset-2";

  const inner = (
    <>
      {action.icon ? <Icon name={action.icon} size={block ? 16 : 14} /> : null}
      {action.label}
      {/* The inline primary gets a direction cue; the secondary must stay
          visibly quieter, so it never gets one. */}
      {!block && kind === "primary" && !action.icon ? (
        <Icon name="arrow-right" size={13} />
      ) : null}
    </>
  );

  if (action.href) {
    return (
      <Link href={action.href} className={cls} onClick={action.onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} onClick={action.onClick}>
      {inner}
    </button>
  );
}

export default function EmptyState({
  title,
  description,
  icon,
  action,
  secondaryAction,
  variant = "block",
  className = "",
}: EmptyStateProps) {
  if (variant === "compact") {
    return (
      <div
        className={`flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface-muted)] px-3.5 py-3 ${className}`}
      >
        {icon ? (
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--ink-muted)]">
            <Icon name={icon} size={15} />
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="text-[0.86rem] font-semibold text-[var(--ink)]">{title}</p>
          {description ? (
            <p className="mt-0.5 text-[0.8rem] leading-snug text-[var(--ink-muted)]">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <ActionControl action={action} kind="primary" block={false} />
          {secondaryAction ? (
            <ActionControl action={secondaryAction} kind="secondary" block={false} />
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] px-6 py-10 text-center ${className}`}
    >
      {icon ? (
        <span
          className="mb-4 grid h-11 w-11 place-items-center rounded-[var(--r)] border border-[var(--line-strong)] bg-[var(--surface-muted)] text-[var(--ink-muted)]"
          aria-hidden="true"
        >
          <Icon name={icon} size={22} />
        </span>
      ) : null}

      <p className="text-[1.05rem] font-semibold tracking-[-0.015em] text-balance text-[var(--ink)]">
        {title}
      </p>

      {description ? (
        <p className="mt-1.5 max-w-[46ch] text-[0.88rem] leading-relaxed text-pretty text-[var(--ink-soft)]">
          {description}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        <ActionControl action={action} kind="primary" block />
        {secondaryAction ? (
          <ActionControl action={secondaryAction} kind="secondary" block />
        ) : null}
      </div>
    </div>
  );
}
