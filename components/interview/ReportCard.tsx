"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { getTopic } from "@/content/topics";
import { DIFF_LABEL } from "@/lib/quiz";
import {
  FORMATS,
  READINESS_CAVEAT,
  analyze,
  humanDuration,
  itemById,
  mmss,
  reportDateLabel,
  type Breakdown,
  type InterviewFormatId,
  type InterviewItemResult,
  type InterviewReport,
} from "@/lib/interview";
import HtmlContent from "@/components/HtmlContent";

interface Props {
  report: InterviewReport;
  history: InterviewReport[];
  storageError: string | null;
  onStart: (format: InterviewFormatId) => void;
  onOpenReport: (id: string) => void;
  onBack: () => void;
}

function rate(b: { correct: number; total: number }) {
  return b.total === 0 ? 0 : b.correct / b.total;
}

/** Bar colour is a second read of the number beside it, never the only one. */
function barClass(r: number): string {
  if (r >= 0.8) return "bg-emerald-600";
  if (r >= 0.55) return "bg-amber-300";
  return "bg-rose-600";
}

function BreakdownRow({ row, wide }: { row: Breakdown; wide?: boolean }) {
  const r = rate(row);
  return (
    <div className="flex items-center gap-3 text-sm">
      <span
        className={`${wide ? "w-52" : "w-40"} shrink-0 truncate text-left text-stone-700`}
        title={row.label}
      >
        {row.label}
      </span>
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-stone-200"
        role="img"
        aria-label={`${row.label}: ${row.correct} of ${row.total} correct, ${Math.round(r * 100)} percent`}
      >
        <div className={`h-full rounded-full ${barClass(r)}`} style={{ width: `${r * 100}%` }} />
      </div>
      <span className="w-24 shrink-0 text-right tabular-nums text-stone-500">
        {row.correct}/{row.total} · {Math.round(r * 100)}%
      </span>
    </div>
  );
}

function ResultReview({ result, position }: { result: InterviewItemResult; position: number }) {
  const q = itemById(result.id);
  const topic = getTopic(result.topic);
  return (
    <div
      className={`question-panel ${
        result.correct ? "question-panel-correct" : "question-panel-incorrect"
      }`}
      data-result-state={result.correct ? "correct" : "incorrect"}
    >
      <h3 className="review-card-head">
        <span
          className={`rounded-full px-2 py-0.5 font-semibold ${
            result.correct ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
          }`}
        >
          {result.correct ? "✓ Correct" : "✕ Incorrect"}
        </span>
        <span className="font-medium text-stone-500">
          Question {position} · {topic?.short ?? result.topic} ·{" "}
          {result.kind === "qna" ? "Open-ended" : DIFF_LABEL[result.difficulty]} ·{" "}
          <span className="tabular-nums">{mmss(result.ms)}</span>
          {result.flagged && <> · ⚑ flagged</>}
          {!result.answered && <> · left blank</>}
        </span>
      </h3>

      {!q ? (
        <p className="muted text-sm">
          This question is no longer in the bank, so it cannot be shown. The score above still
          counts it.
        </p>
      ) : (
        <>
          <HtmlContent html={q.prompt} />
          {q.type !== "qna" && q.figure && (
            <div className="qfig" dangerouslySetInnerHTML={{ __html: q.figure }} />
          )}

          {q.type === "mc" ? (
            <ul className="mt-3 space-y-1.5">
              {q.choices.map((choice, i) => {
                const isAns = i === q.answer;
                const isPicked = result.choice === i;
                return (
                  <li
                    key={i}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      isAns
                        ? "review-answer-correct"
                        : isPicked
                          ? "review-answer-incorrect"
                          : "border-slate-200"
                    }`}
                  >
                    <HtmlContent html={choice} />
                    {isAns && (
                      <span className="ml-1 text-xs font-semibold text-emerald-800">
                        correct answer
                      </span>
                    )}
                    {isPicked && !isAns && (
                      <span className="ml-1 text-xs font-semibold text-rose-800">your pick</span>
                    )}
                    {isPicked && isAns && (
                      <span className="ml-1 text-xs font-semibold text-emerald-800">
                        — your pick
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : q.type === "numeric" ? (
            <div className="mt-3 text-sm">
              Your answer:{" "}
              <span
                className={`font-semibold ${result.correct ? "text-emerald-700" : "text-rose-700"}`}
              >
                {result.text || "—"}
              </span>{" "}
              · Expected: <span className="font-semibold tabular-nums">{q.answer}</span>{" "}
              {q.unit && <span className="text-stone-500">{q.unit}</span>}
            </div>
          ) : (
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <div className="mb-1 font-semibold text-stone-600">
                  What you wrote
                  {!result.selfGraded && (
                    <span className="ml-2 font-normal text-stone-500">
                      (not graded — counted as missed)
                    </span>
                  )}
                </div>
                <div className="rounded-lg border border-slate-200 bg-stone-100 p-3 whitespace-pre-wrap text-stone-700">
                  {result.text || "Nothing entered."}
                </div>
              </div>
              <div>
                <div className="mb-1 font-semibold text-stone-600">Model answer</div>
                <HtmlContent html={q.modelAnswer} className="solution-box text-sm" />
              </div>
            </div>
          )}

          {q.type !== "qna" && (
            <div className="solution-box mt-3">
              <div className="mb-1 text-xs font-bold text-stone-500">Worked solution</div>
              <HtmlContent html={q.explanation} className="text-sm" />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function ReportCard({
  report,
  history,
  storageError,
  onStart,
  onOpenReport,
  onBack,
}: Props) {
  const a = useMemo(() => analyze(report), [report]);
  const format = FORMATS[report.format];
  const scoreRef = useRef<HTMLHeadingElement | null>(null);
  const [filter, setFilter] = useState<"all" | "incorrect">("all");

  useEffect(() => {
    scoreRef.current?.focus();
  }, [report.id]);

  const missed = report.items.filter((i) => !i.correct);
  const shown = filter === "incorrect" ? missed : report.items;
  const positionOf = (id: string) => report.items.findIndex((i) => i.id === id) + 1;

  const summary =
    `${format.name} report. ${a.correct} of ${a.total} correct, ${a.percent} percent. ` +
    `${a.band.label}.`;

  // Same-format attempts, oldest → newest, so "improvement" compares like with like.
  const sameFormat = history
    .filter((r) => r.format === report.format)
    .slice()
    .sort((x, y) => x.date - y.date);
  const myIndex = sameFormat.findIndex((r) => r.id === report.id);
  const previous = myIndex > 0 ? sameFormat[myIndex - 1] : null;
  const previousPct =
    previous && previous.items.length > 0
      ? Math.round((previous.items.filter((i) => i.correct).length / previous.items.length) * 100)
      : null;
  const delta = previousPct === null ? null : a.percent - previousPct;

  return (
    <div className="page-stack" data-interview-phase="report">
      <p role="status" className="sr-only">
        {summary}
      </p>

      {storageError && (
        <div role="alert" className="soft-callout border-amber-300 bg-amber-50 text-sm text-amber-900">
          <span className="font-bold">History not saved. </span>
          {storageError}
        </div>
      )}

      {/* ---------------- verdict ---------------- */}
      <div className="hero-panel">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <p className="text-xs font-bold tracking-wide text-stone-500 uppercase">
            {format.name} · {reportDateLabel(report.date)}
          </p>
          <p className="muted text-xs">
            {report.expired ? "Auto-submitted when the clock ran out" : "Submitted"} ·{" "}
            {humanDuration(a.usedMs)} of {humanDuration(a.allottedMs)} used
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
          <h1 ref={scoreRef} tabIndex={-1} aria-label={summary} className="results-score">
            {a.correct}
            <span className="results-score-total">/{a.total}</span>
          </h1>
          <div className="pb-2">
            <p className="text-2xl font-bold tabular-nums">{a.percent}%</p>
            {delta !== null && (
              <p className="muted text-xs tabular-nums">
                {delta === 0
                  ? "Same as your last attempt at this format"
                  : `${delta > 0 ? "+" : ""}${delta} points vs. your last ${format.name.toLowerCase()}`}
              </p>
            )}
          </div>
        </div>

        <p className="mt-4 text-lg font-semibold" data-readiness={a.band.key}>
          {a.band.label}
        </p>
        <p className="body-copy mt-2 text-sm">{a.band.verdict}</p>

        <div className="soft-callout mt-4">
          <p className="text-xs font-bold tracking-wide text-stone-500 uppercase">
            What this score cannot tell you
          </p>
          <p className="body-copy mt-1 text-sm">{READINESS_CAVEAT}</p>
        </div>

        {(a.unanswered > 0 || a.ungraded > 0 || a.flaggedWrong > 0) && (
          <ul className="mt-4 grid gap-1 text-sm text-stone-600">
            {a.unanswered > 0 && (
              <li>
                <span className="font-semibold tabular-nums">{a.unanswered}</span> question
                {a.unanswered === 1 ? " was" : "s were"} left blank and counted as wrong.
              </li>
            )}
            {a.ungraded > 0 && (
              <li>
                <span className="font-semibold tabular-nums">{a.ungraded}</span> open-ended answer
                {a.ungraded === 1
                  ? " was never self-graded, so it counts as missed."
                  : "s were never self-graded, so they count as missed."}
              </li>
            )}
            {a.flaggedWrong > 0 && (
              <li>
                <span className="font-semibold tabular-nums">{a.flaggedWrong}</span> of the
                questions you flagged turned out to be wrong — your instinct for what you do not
                know is working.
              </li>
            )}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onStart(report.format)} className="btn btn-primary">
            Run this format again
          </button>
          <button
            type="button"
            onClick={() => onStart("weak-spot")}
            className="btn btn-secondary"
          >
            Drill the weak spots
          </button>
          <button type="button" data-back-to-setup onClick={onBack} className="btn btn-secondary">
            Choose another format
          </button>
          <Link href="/" className="btn btn-secondary">
            Back to roadmap
          </Link>
        </div>
      </div>

      {/* ---------------- where the loss is ---------------- */}
      <section className="panel" aria-labelledby="rc-breakdown">
        <h2 id="rc-breakdown" className="section-title">
          Where the marks went
        </h2>
        <p className="body-copy mt-1 text-sm">
          Weakness located, not felt. A stage that reads low here is a whole afternoon of
          revision; a single topic is an evening.
        </p>

        <h3 className="mt-5 text-sm font-bold">By stage</h3>
        <div className="mt-2 grid gap-2">
          {a.byStage.map((row) => (
            <BreakdownRow key={row.key} row={row} wide />
          ))}
        </div>

        <h3 className="mt-6 text-sm font-bold">By topic — weakest first</h3>
        {a.thinTopics && (
          <p className="muted mt-1 text-xs">
            Most rows here rest on a single question, so treat a 0% as a lead worth checking
            rather than a measurement. The stage rows above are the sturdier read.
          </p>
        )}
        <div className="mt-2 grid gap-2">
          {a.byTopic.map((row) => (
            <BreakdownRow key={row.key} row={row} />
          ))}
        </div>
      </section>

      {/* ---------------- difficulty ---------------- */}
      <section className="panel" aria-labelledby="rc-difficulty">
        <h2 id="rc-difficulty" className="section-title">
          Accuracy by difficulty
        </h2>
        <p className="body-copy mt-1 text-sm">
          Acing the fundamentals and failing the hard questions is a different problem from being
          uniformly shaky, and it needs different work.
        </p>
        <div className="mt-4 grid gap-2">
          {a.byDifficulty.map((row) => (
            <BreakdownRow key={row.key} row={row} />
          ))}
        </div>
        {a.difficultySpread === null ? (
          <p className="soft-callout mt-4 text-sm">
            <span className="font-bold">Too few questions at one end to call a pattern. </span>
            {report.format === "onsite" ? (
              <>
                Answer more of the set and this comparison becomes readable — most of this
                interview was left blank.
              </>
            ) : (
              <>
                This format does not carry enough hard questions to say whether depth or coverage
                is the problem. The on-site loop is weighted to standard and hard, and will answer
                it.
              </>
            )}
          </p>
        ) : (
          <p className="soft-callout mt-4 text-sm">
            {a.difficultySpread >= 0.35 ? (
              <>
                <span className="font-bold">Your knowledge is broad but thin. </span>
                You are {Math.round(a.difficultySpread * 100)} points better on {a.spreadLabel}{" "}
                than on the hard ones. That pattern says you know the formulas and lose the
                modelling step — the part where you decide what to apply. Practice difficulty-3
                questions specifically rather than doing more volume.
              </>
            ) : a.difficultySpread <= -0.1 ? (
              <>
                <span className="font-bold">Unusual shape. </span>
                You did better on the hard questions than on {a.spreadLabel}, which normally means
                careless losses on the warm-ups rather than a knowledge gap. Slow down on the
                first few questions.
              </>
            ) : (
              <>
                <span className="font-bold">Uniform across difficulties. </span>
                Only {Math.abs(Math.round(a.difficultySpread * 100))} points separate{" "}
                {a.spreadLabel} from the hard ones, so this is a coverage problem, not a depth
                problem. Work the weak topics above rather than chasing harder questions.
              </>
            )}
          </p>
        )}
      </section>

      {/* ---------------- time ---------------- */}
      <section className="panel" aria-labelledby="rc-time">
        <h2 id="rc-time" className="section-title">
          Time
        </h2>
        <p className="body-copy mt-1 text-sm">
          Slow-but-correct is a real interview failure mode: an interviewer who watches you take
          five minutes on a two-minute question learns something the score does not show.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="mini-stat">
            <div className="text-xs font-semibold text-stone-500">Time used</div>
            <div className="metric-count text-xl tabular-nums">{mmss(a.usedMs)}</div>
            <div className="muted text-xs tabular-nums">of {mmss(a.allottedMs)}</div>
          </div>
          <div className="mini-stat">
            <div className="text-xs font-semibold text-stone-500">Median per question</div>
            <div className="metric-count text-xl tabular-nums">{mmss(a.medianMs)}</div>
            <div className="muted text-xs tabular-nums">
              budget {mmss(a.allottedMs / Math.max(1, a.total))}
            </div>
          </div>
          <div className="mini-stat">
            <div className="text-xs font-semibold text-stone-500">Ran long</div>
            <div className="metric-count text-xl tabular-nums">{a.slowest.length}</div>
            <div className="muted text-xs">
              {a.slowCorrect} correct · {a.slowWrong} wrong
            </div>
          </div>
        </div>

        {a.slowest.length === 0 ? (
          <p className="soft-callout mt-4 text-sm">
            No question took disproportionately long. Your pace was even, which is what an
            interviewer wants to see.
          </p>
        ) : (
          <>
            <h3 className="mt-6 text-sm font-bold">Questions that ran long</h3>
            <ul className="mt-2 grid gap-2">
              {a.slowest.map(({ result, ratio }) => (
                <li
                  key={result.id}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-slate-200 pb-2 text-sm last:border-0"
                >
                  <span className="tabular-nums font-semibold">{mmss(result.ms)}</span>
                  <span className="muted tabular-nums text-xs">
                    {ratio > 0 ? `${ratio.toFixed(1)}× your median` : ""}
                  </span>
                  <span className="text-stone-600">
                    Q{positionOf(result.id)} · {getTopic(result.topic)?.short ?? result.topic} ·{" "}
                    {result.kind === "qna" ? "Open-ended" : DIFF_LABEL[result.difficulty]}
                  </span>
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-xs font-semibold ${
                      result.correct
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {result.correct ? "✓ correct" : "✕ wrong"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="soft-callout mt-4 text-sm">
              {a.slowCorrect > 0 && a.slowWrong === 0 ? (
                <>
                  <span className="font-bold">You got there, slowly. </span>
                  Every long question came out right, so this is recall speed, not understanding.
                  Re-derive those results until the first step is automatic.
                </>
              ) : a.slowWrong > 0 && a.slowCorrect === 0 ? (
                <>
                  <span className="font-bold">Long and wrong. </span>
                  Time spent on questions you still missed is the worst combination — it means you
                  were stuck rather than working. In a real interview, say what you are stuck on
                  out loud; here, go back to the lesson for those topics.
                </>
              ) : (
                <>
                  <span className="font-bold">Mixed. </span>
                  {a.slowCorrect} long question{a.slowCorrect === 1 ? "" : "s"} came out right and{" "}
                  {a.slowWrong} did not. Set yourself a hard two-minute cap and move on — the
                  questions you would have got right anyway are costing you the ones you have not
                  reached.
                </>
              )}
            </p>
          </>
        )}
      </section>

      {/* ---------------- what to do ---------------- */}
      <section className="panel" aria-labelledby="rc-actions">
        <h2 id="rc-actions" className="section-title">
          Do this next
        </h2>
        {a.actions.length === 0 ? (
          <div className="mt-3">
            <p className="body-copy text-sm">
              Nothing in this set is weak enough to name. The useful next step is a harder or
              wider session rather than more revision.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => onStart("onsite")} className="btn btn-primary">
                Run the on-site loop
              </button>
              <Link href="/bank" className="btn btn-secondary">
                Browse the bank
              </Link>
            </div>
          </div>
        ) : (
          <ol className="mt-3 grid gap-3">
            {a.actions.map((action, i) => (
              <li key={action.topicId} className="soft-callout">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-bold text-stone-500 tabular-nums">{i + 1}.</span>
                  <span className="text-sm font-bold">{action.headline}</span>
                </div>
                <p className="body-copy mt-1 text-sm">{action.detail}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link href={action.lessonHref} className="btn btn-primary min-h-0 px-4 py-1.5">
                    Open the lesson
                  </Link>
                  <Link
                    href={action.practiceHref}
                    className="btn btn-secondary min-h-0 px-4 py-1.5"
                  >
                    {action.practiceLabel}
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* ---------------- history ---------------- */}
      {history.length > 1 && (
        <section className="panel" aria-labelledby="rc-history">
          <h2 id="rc-history" className="section-title">
            Previous attempts
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
                  const current = r.id === report.id;
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
                        {current ? (
                          <span className="muted text-xs">shown</span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => onOpenReport(r.id)}
                            className="text-xs font-semibold text-accent-dark underline underline-offset-2"
                          >
                            Open
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ---------------- full review ---------------- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="section-title">Every question, with the solution</h2>
        <div className="segmented" role="group" aria-label="Filter reviewed questions">
          <button
            type="button"
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
            className={`segment ${filter === "all" ? "segment-on" : ""}`}
          >
            All ({report.items.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("incorrect")}
            aria-pressed={filter === "incorrect"}
            disabled={missed.length === 0}
            className={`segment ${filter === "incorrect" ? "segment-on" : ""} disabled:opacity-45`}
          >
            Incorrect only ({missed.length})
          </button>
        </div>
      </div>
      <p role="status" className="muted -mt-3 text-xs">
        Showing {shown.length} of {report.items.length} questions.
      </p>

      {shown.length === 0 ? (
        <div className="panel p-8 text-center text-stone-500">
          Nothing to review — every question was correct.
        </div>
      ) : (
        shown.map((result) => (
          <ResultReview key={result.id} result={result} position={positionOf(result.id)} />
        ))
      )}
    </div>
  );
}
