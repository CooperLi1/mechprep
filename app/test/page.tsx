"use client";

import { useMemo, useState } from "react";
import { STAGES, TOPICS } from "@/content/topics";
import { QUESTION_POOLS, quizPools } from "@/content/index";
import type { Difficulty } from "@/content/types";
import { buildQuiz, DIFF_LABEL, type QuizItem } from "@/lib/quiz";
import { solvedItemIds, useProgress } from "@/lib/progress";
import QuizRunner, { QuizMode } from "@/components/QuizRunner";

export default function TestBuilderPage() {
  const progress = useProgress();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [diffs, setDiffs] = useState<Difficulty[]>([1, 2, 3]);
  const [count, setCount] = useState(30);
  const [mode, setMode] = useState<QuizMode>("exam");
  const [timer, setTimer] = useState(0); // minutes; 0 = untimed
  const [includeQna, setIncludeQna] = useState(false);
  const [excludeSolved, setExcludeSolved] = useState(false);
  const [quiz, setQuiz] = useState<QuizItem[] | null>(null);
  const [isRetry, setIsRetry] = useState(false);

  const pools = useMemo(() => {
    const base = quizPools(includeQna);
    if (!excludeSolved || !progress) return base;
    return Object.fromEntries(
      TOPICS.map((topic) => {
        const solved = solvedItemIds(topic.id, progress);
        return [topic.id, (base[topic.id] ?? []).filter((q) => !solved.has(q.id))];
      })
    );
  }, [excludeSolved, includeQna, progress]);

  const available = useMemo(() => {
    let n = 0;
    for (const id of selected) {
      n += (pools[id] ?? []).filter((q) => diffs.includes(q.difficulty)).length;
    }
    return n;
  }, [selected, diffs, pools]);

  if (quiz) {
    // Constrained to the same reading measure as /practice: an unconstrained
    // runner filled the 76rem container and produced 110–130 character prompts.
    return (
      <div className="narrow-page">
        <QuizRunner
          questions={quiz}
          mode={mode}
          timerMinutes={mode === "exam" && timer > 0 ? timer : undefined}
          title={isRetry ? "Custom test — retry" : "Custom test"}
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

  const toggleTopic = (id: string) =>
    setSelected((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleDiff = (d: Difficulty) =>
    setDiffs((cur) => {
      const next = cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d];
      return next.length === 0 ? cur : next;
    });

  const selectStage = (stageNum: number) => {
    const ids = TOPICS.filter((t) => t.stage === stageNum).map((t) => t.id);
    setSelected((cur) => {
      const next = new Set(cur);
      const allIn = ids.every((id) => next.has(id));
      ids.forEach((id) => (allIn ? next.delete(id) : next.add(id)));
      return next;
    });
  };

  return (
    <div className="medium-page page-stack" data-route="test">
      <div>
        <h1 className="section-title">Test builder</h1>
        <p className="body-copy mt-2 text-sm">
          Mix topics into a timed or untimed set that feels closer to an interview screen.
        </p>
      </div>

      <div className="panel space-y-6">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm font-bold">Topics</span>
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setSelected(new Set(TOPICS.map((t) => t.id)))}
                className="font-semibold text-accent-dark hover:text-accent"
              >
                Select all
              </button>
              <button onClick={() => setSelected(new Set())} className="font-semibold text-stone-500 hover:text-stone-800">
                Clear
              </button>
            </div>
          </div>
          {STAGES.map((stage) => (
            <div key={stage.num} className="mb-4 last:mb-0">
              <button
                onClick={() => selectStage(stage.num)}
                className="mb-2 text-left text-xs font-bold tracking-wide text-stone-500 hover:text-accent-dark"
                title="Toggle whole stage"
              >
                {stage.name}
              </button>
              <div className="flex flex-wrap gap-2">
                {TOPICS.filter((t) => t.stage === stage.num).map((t) => {
                  const on = selected.has(t.id);
                  const n = (QUESTION_POOLS[t.id] ?? []).length;
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTopic(t.id)}
                      className={`chip ${on ? "chip-on" : ""}`}
                      aria-pressed={on}
                    >
                      {t.short} <span className="text-xs opacity-70">({n})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="control-grid">
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
          <div>
            <div className="mb-2 text-sm font-bold">Mode</div>
            <div className="segmented">
              {(
                [
                  ["exam", "Exam"],
                  ["practice", "Practice"],
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
              Adds open-ended prompts with model answers and self-grading.
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
              Removes questions and interview prompts already answered correctly.
            </span>
          </span>
        </label>

        <div className="control-grid">
          <div>
            <div className="mb-2 flex justify-between gap-3 text-sm">
              <span className="font-bold">Questions</span>
              <span className="muted">
                {Math.min(count, available)} of {available} available
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={Math.max(5, Math.min(60, available))}
              value={Math.min(count, Math.max(5, available))}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full accent-teal-700"
            />
          </div>
          {mode === "exam" && (
            <div>
              <div className="mb-2 text-sm font-bold">Timer</div>
              <select
                value={timer}
                onChange={(e) => setTimer(Number(e.target.value))}
                className="select-field"
              >
                <option value={0}>Untimed</option>
                <option value={10}>10 minutes</option>
                <option value={20}>20 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </select>
            </div>
          )}
        </div>

        <button
          disabled={selected.size === 0 || available === 0}
          onClick={() => {
            setIsRetry(false);
            setQuiz(buildQuiz(pools, [...selected], Math.min(count, available), diffs));
          }}
          className="btn btn-primary w-full disabled:opacity-45"
        >
          {selected.size === 0 ? "Select at least one topic" : "Start test"}
        </button>
      </div>
    </div>
  );
}
