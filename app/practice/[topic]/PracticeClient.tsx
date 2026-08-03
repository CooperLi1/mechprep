"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QNA_POOLS, QUESTION_POOLS, quizPools } from "@/content/index";
import { getTopic } from "@/content/topics";
import type { Difficulty } from "@/content/types";
import { buildQuiz, DIFF_LABEL, type QuizItem } from "@/lib/quiz";
import { solvedItemIds, useProgress } from "@/lib/progress";
import QuizRunner, { QuizMode } from "@/components/QuizRunner";

export default function PracticeClient({ topicId }: { topicId: string }) {
  const topic = getTopic(topicId)!;
  const pool = QUESTION_POOLS[topicId] ?? [];
  const progress = useProgress();

  const [quiz, setQuiz] = useState<QuizItem[] | null>(null);
  const [isRetry, setIsRetry] = useState(false);
  const [mode, setMode] = useState<QuizMode>("practice");
  const [count, setCount] = useState(30);
  const [diffs, setDiffs] = useState<Difficulty[]>([1, 2, 3]);
  const [includeQna, setIncludeQna] = useState(false);
  const [excludeSolved, setExcludeSolved] = useState(false);

  const pools = useMemo(() => {
    const base = quizPools(includeQna);
    if (!excludeSolved || !progress) return base;
    const solved = solvedItemIds(topicId, progress);
    return {
      ...base,
      [topicId]: (base[topicId] ?? []).filter((q) => !solved.has(q.id)),
    };
  }, [excludeSolved, includeQna, progress, topicId]);

  const availableFor = (ds: Difficulty[]) =>
    (pools[topicId] ?? []).filter((q) => ds.includes(q.difficulty)).length;
  const available = availableFor(diffs);
  const solvedCount = progress ? solvedItemIds(topicId, progress).size : 0;

  if (quiz) {
    // Same measure as the config screen above it, so starting a quiz no longer
    // jumps the column from 46rem to the full 76rem container and stretches
    // prompts to 110–130 characters a line.
    return (
      <div className="narrow-page">
        <QuizRunner
          questions={quiz}
          mode={mode}
          title={`${topic.short} — ${
            isRetry ? "Retry" : mode === "practice" ? "Practice" : "Exam"
          }`}
          onExit={() => {
            setIsRetry(false);
            setQuiz(null);
          }}
          onRetry={(items) => {
            setIsRetry(true);
            setQuiz(items);
          }}
        />
      </div>
    );
  }

  const toggleDiff = (d: Difficulty) =>
    setDiffs((cur) => {
      const next = cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d];
      return next.length === 0 ? cur : next;
    });

  return (
    <div className="narrow-page page-stack" data-route="roadmap">
      <div>
        <Link href="/" className="text-sm font-semibold text-accent-dark hover:text-accent">← Roadmap</Link>
        <h1 className="section-title mt-3">{topic.name}</h1>
        <p className="body-copy mt-2 text-sm">
        {pool.length} questions in the bank ·{" "}
        {QNA_POOLS[topicId]?.length ?? 0} interview Q&amp;As ·{" "}
        {solvedCount} solved ·{" "}
        <Link href={`/learn/${topicId}`} className="font-semibold text-accent-dark hover:text-accent">
          read the lesson first
        </Link>
        </p>
      </div>

      <div className="panel space-y-5">
        <div>
          <div className="mb-2 text-sm font-bold">Mode</div>
          <div className="segmented">
            {(
              [
                ["practice", "Practice — instant feedback"],
                ["exam", "Exam — graded at the end"],
              ] as [QuizMode, string][]
            ).map(([m, label]) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`segment ${mode === m ? "segment-on" : ""}`}
                aria-pressed={mode === m}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-2 text-sm font-bold">Difficulty</div>
          <div className="segmented">
            {([1, 2, 3] as Difficulty[]).map((d) => (
              <button
                key={d}
                onClick={() => toggleDiff(d)}
                className={`segment ${diffs.includes(d) ? "segment-on" : ""}`}
                aria-pressed={diffs.includes(d)}
              >
                {DIFF_LABEL[d]}
              </button>
            ))}
          </div>
        </div>

        <label className="soft-callout flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={includeQna}
            onChange={(e) => setIncludeQna(e.target.checked)}
            className="mt-1 h-4 w-4 accent-teal-700"
          />
          <span>
            <span className="block text-sm font-bold">Include interview Q&amp;A</span>
            <span className="block text-xs leading-5 text-stone-500">
              Mix in open-ended prompts with model answers and self-grading.
            </span>
          </span>
        </label>

        <label className="soft-callout flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={excludeSolved}
            onChange={(e) => setExcludeSolved(e.target.checked)}
            className="mt-1 h-4 w-4 accent-teal-700"
          />
          <span>
            <span className="block text-sm font-bold">Skip previously solved items</span>
            <span className="block text-xs leading-5 text-stone-500">
              Hides prompts you answered correctly or self-graded as &quot;I got it.&quot;
            </span>
          </span>
        </label>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-bold">Questions</span>
            <span className="muted">
              {Math.min(count, available)} of {available} available
            </span>
          </div>
          <input
            type="range"
            min={3}
            max={Math.max(3, available)}
            value={Math.min(count, Math.max(3, available))}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-teal-700"
          />
        </div>

        <button
          disabled={available === 0}
          onClick={() => {
            setIsRetry(false);
            setQuiz(buildQuiz(pools, [topicId], Math.min(count, available), diffs));
          }}
          className="btn btn-primary w-full disabled:opacity-45"
        >
          Start {mode === "practice" ? "practice" : "exam"}
        </button>
      </div>
    </div>
  );
}
