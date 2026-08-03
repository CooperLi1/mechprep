"use client";

import { useMemo } from "react";
import { STAGES, TOPICS, getTopic } from "@/content/topics";
import type { ProgressData } from "@/lib/progress";
import {
  FORMATS,
  FORMAT_ORDER,
  hasWeakSpotEvidence,
  masteryWeakTopics,
  mmss,
  reportDateLabel,
  weakestTopicIds,
  type InterviewFormatId,
  type InterviewReport,
} from "@/lib/interview";

interface Props {
  format: InterviewFormatId;
  stages: number[];
  progress: ProgressData | null;
  history: InterviewReport[] | null;
  onFormatChange: (f: InterviewFormatId) => void;
  onStagesChange: (s: number[]) => void;
  onStart: () => void;
  onOpenReport: (id: string) => void;
}

export default function InterviewSetup({
  format,
  stages,
  progress,
  history,
  onFormatChange,
  onStagesChange,
  onStart,
  onOpenReport,
}: Props) {
  const spec = FORMATS[format];

  const candidates = useMemo(
    () =>
      TOPICS.filter((t) => stages.length === 0 || stages.includes(t.stage)).map((t) => t.id),
    [stages]
  );

  // Exactly the ranking planInterview will use, so the preview is a promise the
  // session keeps: the mastery module's list first, ours filling the remainder.
  const weakPreview = useMemo(() => {
    if (format !== "weak-spot") return [];
    const n = FORMATS["weak-spot"].breadth;
    return weakestTopicIds(progress, n, candidates, masteryWeakTopics(progress, n));
  }, [format, progress, candidates]);
  const evidence = useMemo(() => hasWeakSpotEvidence(progress), [progress]);

  const toggleStage = (num: number) => {
    onStagesChange(
      stages.includes(num) ? stages.filter((s) => s !== num) : [...stages, num].sort((a, b) => a - b)
    );
  };

  return (
    <div className="page-stack" data-interview-phase="setup">
      <div>
        <h1 className="page-title">Mock interview</h1>
        <p className="body-copy mt-3">
          A timed set with no feedback until the end, then an honest report card: where the marks
          went, which difficulty broke down, which questions ran long, and exactly what to read
          next. Pick a format and start — there is nothing else to configure.
        </p>
      </div>

      {/* Native radios: one tab stop, arrow keys, and the checked state exposed
          without re-implementing the pattern by hand. */}
      <fieldset className="dense-grid topic-grid min-w-0">
        <legend className="sr-only">Interview format</legend>
        {FORMAT_ORDER.map((id) => {
          const f = FORMATS[id];
          const on = format === id;
          return (
            <label
              key={id}
              data-format={id}
              className={`topic-card interactive-card cursor-pointer text-left ${
                on ? "border-accent bg-teal-50" : ""
              }`}
            >
              <div>
                <div className="flex items-start gap-2">
                  <input
                    type="radio"
                    name="interview-format"
                    value={id}
                    aria-label={`${f.name} — ${f.tagline}`}
                    checked={on}
                    onChange={() => onFormatChange(id)}
                    className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
                  />
                  <span className="text-base font-bold">{f.name}</span>
                </div>
                <div className="meta-line mt-1 ml-6 text-xs">{f.tagline}</div>
                <p className="mt-3 ml-6 text-sm leading-6 text-stone-600">{f.detail}</p>
              </div>
            </label>
          );
        })}
      </fieldset>

      <div className="panel">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-sm font-bold">Role focus</h2>
          <span className="muted text-xs">
            Optional — leave empty for the full spread of a generalist interview.
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onStagesChange([])}
            aria-pressed={stages.length === 0}
            className={`chip ${stages.length === 0 ? "chip-on" : ""}`}
          >
            Everything
          </button>
          {STAGES.map((s) => (
            <button
              type="button"
              key={s.num}
              onClick={() => toggleStage(s.num)}
              aria-pressed={stages.includes(s.num)}
              className={`chip ${stages.includes(s.num) ? "chip-on" : ""}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {format === "weak-spot" && (
        <div className="soft-callout">
          <p className="text-sm font-bold">
            {evidence ? "Drawn from your weakest areas" : "Not enough history yet"}
          </p>
          <p className="body-copy mt-1 text-sm">
            {evidence ? (
              <>
                Ranked by accuracy across your practice history, weighted so that one unlucky
                question does not outrank a topic you have genuinely been failing.
              </>
            ) : (
              <>
                You have not practiced enough for a real ranking, so this falls back to the topics
                with the least evidence behind them. It will still find gaps — it just cannot
                promise these are your worst.
              </>
            )}
          </p>
          {weakPreview.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {weakPreview.map((id) => (
                <li key={id} className="chip">
                  {getTopic(id)?.short ?? id}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="button" data-start-interview onClick={onStart} className="btn btn-primary">
          Start the {spec.name.toLowerCase()} →
        </button>
        <p className="muted text-sm">
          {spec.count} questions · {spec.minutes} minutes · auto-submits when time runs out.
        </p>
      </div>

      {history && history.length > 0 && (
        <section className="panel" aria-labelledby="setup-history">
          <h2 id="setup-history" className="section-title">
            Your last interviews
          </h2>
          <div className="table-shell mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-100 text-left">
                  <th className="px-3 py-2 font-semibold">When</th>
                  <th className="px-3 py-2 font-semibold">Format</th>
                  <th className="px-3 py-2 text-right font-semibold">Score</th>
                  <th className="px-3 py-2 text-right font-semibold">Time</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {history.map((r) => {
                  const c = r.items.filter((i) => i.correct).length;
                  const pct = r.items.length ? Math.round((c / r.items.length) * 100) : 0;
                  return (
                    <tr key={r.id} className="border-t border-slate-200">
                      <td className="px-3 py-2 tabular-nums whitespace-nowrap">
                        {reportDateLabel(r.date)}
                      </td>
                      <td className="px-3 py-2">{FORMATS[r.format].name}</td>
                      <td className="px-3 py-2 text-right tabular-nums">
                        {c}/{r.items.length} · {pct}%
                      </td>
                      <td className="px-3 py-2 text-right tabular-nums">{mmss(r.elapsedMs)}</td>
                      <td className="px-3 py-2 text-right">
                        <button
                          type="button"
                          data-open-report={r.id}
                          onClick={() => onOpenReport(r.id)}
                          className="text-xs font-semibold text-accent-dark underline underline-offset-2"
                        >
                          Open report
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
