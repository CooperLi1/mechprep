"use client";

import Link from "next/link";
import type { Topic } from "@/content/types";

export interface MissedCheck {
  /** Anchor of the inline check that was answered wrongly. */
  anchorId: string;
  sectionNumber: number;
  heading: string;
}

/**
 * The lesson used to end on two bare arrows. This is the "what should I do
 * right now?" answer: drill the topic, go back over the checks you missed, or
 * move to the next topic — named, not implied.
 */
export default function LessonOutro({
  id,
  sectionIndex,
  topic,
  next,
  prev,
  questionCount,
  qnaCount,
  checks,
  missed,
  headerHeight,
}: {
  id: string;
  /** Position in the nav list, so the rail can highlight it like a section. */
  sectionIndex: number;
  topic: Topic;
  next: Topic | null;
  prev: Topic | null;
  questionCount: number;
  qnaCount: number;
  checks: { answered: number; correct: number; total: number };
  missed: MissedCheck[];
  headerHeight: number;
}) {
  const untouched = checks.total - checks.answered;

  return (
    <section
      id={id}
      data-section-index={sectionIndex}
      aria-labelledby={`${id}-title`}
      className="rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6"
      style={{ scrollMarginTop: headerHeight + 16 }}
    >
      <h2 id={`${id}-title`} className="section-title">
        Where to next
      </h2>

      <p className="body-copy mt-2 text-sm">
        {checks.answered === 0 ? (
          <>
            You read {topic.name}. Nothing sticks from reading alone — the fastest
            way to find out what you actually absorbed is to answer questions on it.
          </>
        ) : (
          <>
            You answered{" "}
            <strong className="tabular-nums">
              {checks.correct} of {checks.answered}
            </strong>{" "}
            inline checks correctly
            {untouched > 0 ? ` and skipped ${untouched}` : ""}. That is a sample of{" "}
            {checks.answered}, not a verdict — {questionCount} questions on this topic
            are waiting.
          </>
        )}
      </p>

      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <Link href={`/practice/${topic.id}`} className="btn btn-primary flex-1">
          Practice {topic.short} · {questionCount} questions
        </Link>
        <Link href={`/qna?topic=${topic.id}`} className="btn btn-secondary flex-1">
          Interview Q&amp;A · {qnaCount}
        </Link>
      </div>

      {missed.length > 0 && (
        <div className="mt-4 rounded-[var(--r)] border border-[var(--line)] border-l-[3px] border-l-[var(--incorrect)] bg-[var(--surface-muted)] p-3.5">
          <p className="text-[0.8rem] font-semibold text-[var(--ink)]">
            Review what you missed
            <span className="ml-1.5 font-normal text-[var(--ink-muted)] tabular-nums">
              · {missed.length} {missed.length === 1 ? "check" : "checks"}
            </span>
          </p>
          <ul className="mt-2 grid gap-1">
            {missed.map((m) => (
              <li key={m.anchorId}>
                <a
                  href={`#${m.anchorId}`}
                  className="flex items-baseline gap-2 text-[0.82rem] text-accent-dark hover:text-accent"
                >
                  <span
                    aria-hidden="true"
                    className="w-4 shrink-0 text-right font-mono text-[0.68rem] text-[var(--ink-muted)] tabular-nums"
                  >
                    {m.sectionNumber}
                  </span>
                  <span className="min-w-0 font-semibold">{m.heading}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 grid gap-2.5 border-t border-[var(--line)] pt-4 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/learn/${prev.id}`}
            className="interactive-card rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] p-3"
          >
            <span className="block text-[0.68rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase">
              ← Previous
            </span>
            <span className="mt-0.5 block text-[0.88rem] font-semibold text-[var(--ink)]">
              {prev.name}
            </span>
            <span className="mt-0.5 block text-[0.74rem] text-[var(--ink-muted)]">
              Stage {prev.stage}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/learn/${next.id}`}
            className="interactive-card rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] p-3 sm:text-right"
          >
            <span className="block text-[0.68rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase">
              Next up →
            </span>
            <span className="mt-0.5 block text-[0.88rem] font-semibold text-[var(--ink)]">
              {next.name}
            </span>
            <span className="mt-0.5 block text-[0.74rem] text-[var(--ink-muted)]">
              Stage {next.stage}
            </span>
          </Link>
        ) : (
          <Link
            href="/test"
            className="interactive-card rounded-[var(--r)] border border-[var(--line)] bg-[var(--surface)] p-3 sm:text-right"
          >
            <span className="block text-[0.68rem] font-bold tracking-[0.09em] text-[var(--ink-muted)] uppercase">
              Last topic →
            </span>
            <span className="mt-0.5 block text-[0.88rem] font-semibold text-[var(--ink)]">
              Build a mixed test
            </span>
            <span className="mt-0.5 block text-[0.74rem] text-[var(--ink-muted)]">
              Every topic, one sitting
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
