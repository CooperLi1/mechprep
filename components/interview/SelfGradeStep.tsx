"use client";

import type { RefObject } from "react";
import { getTopic } from "@/content/topics";
import type { QuizItem } from "@/lib/quiz";
import HtmlContent from "@/components/HtmlContent";

type Grade = "correct" | "incorrect" | null;

interface Props {
  items: QuizItem[];
  drafts: string[];
  grades: Grade[];
  expired: boolean;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onGrade: (index: number, grade: Grade) => void;
  onDone: () => void;
}

/**
 * The open-ended items are graded here, after the clock has stopped and before
 * the report — which keeps the interview itself feedback-free while still
 * letting prose answers count towards the score.
 */
export default function SelfGradeStep({
  items,
  drafts,
  grades,
  expired,
  headingRef,
  onGrade,
  onDone,
}: Props) {
  const qnaIndexes = items
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => item.type === "qna");
  const ungraded = qnaIndexes.filter(({ i }) => grades[i] == null).length;

  return (
    <div className="page-stack" data-interview-phase="grading">
      <div>
        <p className="text-xs font-bold tracking-wide text-stone-500 uppercase">
          Step 2 of 2 · self-assessment
        </p>
        <h1 ref={headingRef} tabIndex={-1} className="section-title mt-1">
          Grade your open-ended answers
        </h1>
        <p className="body-copy mt-2 text-sm">
          {expired && (
            <>
              <span className="font-semibold">Time expired and the interview was submitted. </span>
            </>
          )}
          These cannot be marked automatically, and grading yourself generously is the fastest
          way to make the report card useless. Mark it covered only if you named the governing
          relationship, got the direction and order of magnitude right, and would have said the
          tradeoff out loud.
        </p>
      </div>

      {qnaIndexes.map(({ item, i }) => {
        if (item.type !== "qna") return null;
        const grade = grades[i] ?? null;
        return (
          <div key={item.id} className="question-panel">
            <div className="review-card-head">
              <span className="rounded-full bg-stone-100 px-2 py-0.5 font-semibold text-stone-600">
                Question {i + 1}
              </span>
              <span className="font-medium text-stone-500">
                {getTopic(item.topic)?.short ?? item.topic} · Open-ended
              </span>
            </div>
            <HtmlContent html={item.prompt} />

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="mb-1 text-xs font-bold text-stone-500">What you wrote</div>
                <div className="rounded-lg border border-slate-200 bg-stone-100 p-3 text-sm whitespace-pre-wrap text-stone-700">
                  {drafts[i]?.trim() || "Nothing entered."}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-bold text-stone-500">Model answer</div>
                <HtmlContent html={item.modelAnswer} className="solution-box text-sm" />
              </div>
            </div>

            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label={`Grade your answer to question ${i + 1}`}
            >
              <button
                type="button"
                data-self-grade="correct"
                onClick={() => onGrade(i, "correct")}
                aria-pressed={grade === "correct"}
                className={`btn min-h-0 px-4 py-2 ${
                  grade === "correct"
                    ? "btn-success"
                    : "border-emerald-300 bg-stone-50 text-emerald-800 hover:bg-emerald-50"
                }`}
              >
                <span aria-hidden="true">✓ </span>I covered this
              </button>
              <button
                type="button"
                data-self-grade="incorrect"
                onClick={() => onGrade(i, "incorrect")}
                aria-pressed={grade === "incorrect"}
                className={`btn min-h-0 px-4 py-2 ${
                  grade === "incorrect"
                    ? "btn-danger"
                    : "border-rose-300 bg-stone-50 text-rose-800 hover:bg-rose-50"
                }`}
              >
                <span aria-hidden="true">✕ </span>I missed things
              </button>
              {grade !== null && (
                <button
                  type="button"
                  onClick={() => onGrade(i, null)}
                  className="btn btn-secondary min-h-0 px-4 py-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        );
      })}

      <div className="soft-callout flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">
          {ungraded === 0 ? (
            <>All open-ended answers graded.</>
          ) : (
            <>
              <span className="font-bold">
                {ungraded} still ungraded.
              </span>{" "}
              Ungraded answers count as missed, and the report card says so.
            </>
          )}
        </p>
        <button type="button" data-finish-grading onClick={onDone} className="btn btn-primary">
          See report card
        </button>
      </div>
    </div>
  );
}
