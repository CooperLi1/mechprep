"use client";

import { useState } from "react";
import Link from "next/link";
import { STAGES, TOPICS, getTopic } from "@/content/topics";
import { CONTENT, QUESTION_POOLS } from "@/content/index";
import type { ProgressData } from "@/lib/progress";
import { lessonRead } from "@/lib/progress";
import { continueTarget, type MasteryLevel } from "@/lib/mastery";
import MasteryBadge, { levelRank, MasteryLegend } from "./MasteryBadge";
import { Annot } from "@/components/Sheet";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="h-3 w-3 shrink-0 text-[var(--ink-muted)] transition-transform"
      style={{ transform: open ? "rotate(90deg)" : "none" }}
    >
      <path
        d="M4 2.5 L8 6 L4 9.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The stage roadmap, demoted from front page to browse view.
 *
 * It used to be the whole home screen: 25 cards, six stages, 4,228px of
 * scroll, and no opinion about any of it. It is still the best way to see the
 * shape of the syllabus, so it stays — collapsed to the stage you are actually
 * working in, with every other stage one click away.
 */
export default function StageRoadmap({
  progress,
  levels,
}: {
  progress: ProgressData | null;
  levels: Record<string, MasteryLevel>;
}) {
  const [overrides, setOverrides] = useState<Record<number, boolean>>({});

  const target = progress ? continueTarget(progress) : null;
  const focusStage =
    (target ? getTopic(target.topicId)?.stage : undefined) ?? STAGES[0]?.num ?? 1;

  const isOpen = (num: number) => overrides[num] ?? num === focusStage;

  const setOpen = (num: number, open: boolean) =>
    setOverrides((prev) => (prev[num] === open ? prev : { ...prev, [num]: open }));

  return (
    <section aria-labelledby="roadmap-heading">
      <div className="mb-4">
        <Annot num="02" as="h2" id="roadmap-heading" className="mb-3">
          Browse the roadmap
        </Annot>
        <p className="body-copy text-sm">
          <span className="mono-meta text-[var(--ink)]">
            {TOPICS.length} topics
          </span>{" "}
          across{" "}
          <span className="mono-meta text-[var(--ink)]">
            {STAGES.length} stages
          </span>
          . Open a stage to see its lessons and question pools — the sheet above
          already knows which one you should be in.
        </p>
        <div className="mt-3">
          <MasteryLegend />
        </div>
      </div>

      <nav className="stage-index" aria-label="Jump to a stage">
        {STAGES.map((stage) => {
          const ts = TOPICS.filter((t) => t.stage === stage.num);
          const started = ts.filter(
            (t) => (levels[t.id] ?? "none") !== "none"
          ).length;
          const strong = ts.filter(
            (t) => levelRank(levels[t.id] ?? "none") >= levelRank("proficient")
          ).length;
          return (
            <a
              key={stage.num}
              href={`#stage-${stage.num}`}
              className="stage-index-item"
              onClick={() => setOpen(stage.num, true)}
            >
              <span className="stage-index-num">{stage.num}</span>
              <span className="stage-index-body">
                <span className="stage-index-name">{stage.name}</span>
                <span className="stage-index-meta">
                  {ts.length} topics
                  {strong > 0
                    ? ` · ${strong} proficient`
                    : started > 0
                      ? ` · ${started} started`
                      : ""}
                </span>
              </span>
            </a>
          );
        })}
      </nav>

      <div className="mt-4 grid gap-3">
        {STAGES.map((stage) => {
          const topics = TOPICS.filter((t) => t.stage === stage.num);
          const started = topics.filter(
            (t) => (levels[t.id] ?? "none") !== "none"
          ).length;
          const strong = topics.filter(
            (t) => levelRank(levels[t.id] ?? "none") >= levelRank("proficient")
          ).length;
          const open = isOpen(stage.num);
          const complete = topics.length > 0 && strong === topics.length;

          return (
            <details
              key={stage.num}
              id={`stage-${stage.num}`}
              className="scroll-mt-20 overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--surface)]"
              open={open}
              onToggle={(e) => setOpen(stage.num, e.currentTarget.open)}
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 p-3 hover:bg-[var(--surface-muted)] sm:p-4 [&::-webkit-details-marker]:hidden">
                <Chevron open={open} />
                <span className="stage-marker" aria-hidden="true">
                  {stage.num}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[16px] leading-[1.25] font-bold text-[var(--ink)]">
                    {stage.name}
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-[var(--ink-muted)]">
                    {stage.desc}
                  </span>
                </span>
                <span className="shrink-0 text-right font-mono text-[0.68rem] font-medium tracking-[0.04em] text-[var(--ink-muted)] tabular-nums">
                  <span className="block">
                    {started}/{topics.length} started
                  </span>
                  {complete ? (
                    <span className="mt-0.5 block text-[var(--correct)]">
                      stage proficient
                    </span>
                  ) : strong > 0 ? (
                    <span className="mt-0.5 block">{strong} proficient</span>
                  ) : null}
                </span>
              </summary>

              <div className="border-t border-[var(--line)] bg-[var(--surface-muted)] p-3 sm:p-4">
                <div className="dense-grid topic-grid">
                  {topics.map((t) => {
                    const level = levels[t.id] ?? "none";
                    const read = progress ? lessonRead(t.id, progress) : false;
                    const nQ = QUESTION_POOLS[t.id]?.length ?? 0;
                    const nQnA = CONTENT[t.id]?.qna.length ?? 0;
                    return (
                      <article key={t.id} className="topic-card interactive-card">
                        <div>
                          <h3 className="text-[16px] leading-[1.25] font-bold text-[var(--ink)]">
                            {t.name}
                          </h3>
                          <div className="mt-2">
                            <MasteryBadge level={level} />
                          </div>
                          <p className="mt-2 text-[13px] leading-[1.55] text-[var(--ink-soft)]">
                            {t.blurb}
                          </p>
                        </div>
                        <div>
                          <div className="meta-line mt-3">
                            <span>{nQ} questions</span>
                            <span aria-hidden="true">·</span>
                            <span>{nQnA} Q&amp;As</span>
                            {read && <span className="status-pill">lesson read</span>}
                          </div>
                          <div className="mt-3 flex gap-2">
                            <Link
                              href={`/learn/${t.id}`}
                              className="btn btn-secondary flex-1"
                            >
                              Lesson
                            </Link>
                            {/* Both hairline: the only solid button on this
                                page is the coach panel's recommendation, and
                                25 blue buttons in a browse grid would drown
                                it. */}
                            <Link
                              href={`/practice/${t.id}`}
                              className="btn btn-secondary flex-1"
                            >
                              Practice{" "}
                              <span className="card-arrow" aria-hidden="true">
                                →
                              </span>
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
