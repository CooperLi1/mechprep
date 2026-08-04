"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ALL_QUESTIONS, QNA_POOLS } from "@/content/index";
import { getTopic } from "@/content/topics";
import type { MCQuestion } from "@/content/types";
import HtmlContent from "@/components/HtmlContent";
import MathKeyboard from "@/components/MathKeyboard";
import { DIFF_LABEL, diagnoseNumeric, gradeNumeric, shuffle, type QuizItem } from "@/lib/quiz";
import {
  getProgress,
  isBookmarked,
  progressError,
  recordAnswers,
  toggleBookmark,
  useProgress,
  type ProgressData,
} from "@/lib/progress";
import {
  describeInterval,
  dueItems,
  forgetReviews,
  nextDueAt,
  reviewFor,
  reviewStats,
  scheduleReview,
} from "@/lib/review";
import { continueTarget, masteryMeta, masteryLevel, weakestTopics } from "@/lib/mastery";

/**
 * One sitting, not the whole backlog (PRODUCT.md principle 4). Whatever is left
 * is offered again on the completion screen rather than presented as a wall.
 */
const SESSION_LIMIT = 20;

/** item id -> question, for turning a schedule entry back into something askable. */
const ITEM_INDEX: Map<string, QuizItem> = (() => {
  const index = new Map<string, QuizItem>();
  for (const q of ALL_QUESTIONS) index.set(q.id, q);
  for (const pool of Object.values(QNA_POOLS)) for (const q of pool) index.set(q.id, q);
  return index;
})();

interface Card {
  item: QuizItem;
  /** perm[displayIndex] = originalIndex, so the answer is not always in slot A. */
  perm: number[] | null;
}

interface Graded {
  correct: boolean;
  /** What the schedule did with it, e.g. "Back in 7 days". */
  outcome: string;
}

function newSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

interface Session {
  cards: Card[];
  /** Due ids with no question behind them any more; cleaned up in an effect. */
  stale: string[];
}

/**
 * Snapshot the queue.
 *
 * Deliberately reads storage directly rather than deriving from the `useProgress`
 * snapshot: every answer rewrites the schedule, so a derived queue would
 * reorder itself under the user mid-drill. Run as a `useState` initialiser, this
 * executes during hydration — when `window` exists but the component is still
 * rendering its loading state — so it never causes a hydration mismatch.
 */
function buildSession(): Session {
  if (typeof window === "undefined") return { cards: [], stale: [] };
  const data: ProgressData = getProgress();
  const cards: Card[] = [];
  const stale: string[] = [];
  for (const due of dueItems(data, SESSION_LIMIT)) {
    const item = ITEM_INDEX.get(due.id);
    if (!item) {
      stale.push(due.id);
      continue;
    }
    cards.push({
      item,
      perm: item.type === "mc" ? shuffle(item.choices.map((_, i) => i)) : null,
    });
  }
  return { cards, stale };
}

function relativeDay(at: number): string {
  const ms = at - Date.now();
  if (ms <= 0) return "now";
  const hours = ms / 3_600_000;
  // Round to the nearest day rather than flooring: an item 23h59m out is
  // "tomorrow", not "later today".
  if (hours < 12) return "later today";
  return describeInterval(Math.max(1, Math.round(hours / 24)));
}

export default function ReviewClient() {
  const progress = useProgress();

  const [session, setSession] = useState<Session>(buildSession);
  const [pos, setPos] = useState(0);
  const [graded, setGraded] = useState<Graded | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [revealed, setRevealed] = useState(false);
  const qnaInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [log, setLog] = useState<{ correct: boolean; topic: string }[]>([]);
  const [sessionId, setSessionId] = useState(newSessionId);
  const [saveError, setSaveError] = useState<string | null>(null);

  // A question dropped from the bank would otherwise sit due forever and keep
  // the home-screen count permanently wrong.
  useEffect(() => {
    if (session.stale.length) forgetReviews(session.stale);
  }, [session]);

  const stats = useMemo(
    () => (progress ? reviewStats(progress) : { due: 0, scheduled: 0, learned: 0 }),
    [progress]
  );

  const cards = session.cards;
  const card = pos < cards.length ? cards[pos] : null;
  const bookmarked = card ? isBookmarked(card.item.id, progress ?? undefined) : false;

  const resetCardState = () => {
    setGraded(null);
    setChoice(null);
    setText("");
    setRevealed(false);
  };

  const restart = () => {
    setSession(buildSession());
    setPos(0);
    setLog([]);
    setSessionId(newSessionId());
    resetCardState();
  };

  const commit = (correct: boolean) => {
    if (!card || graded) return;
    const { item } = card;
    scheduleReview(item.id, item.topic, correct);
    // A review is practice: it feeds topic accuracy and mastery like any other
    // answered question. One attempt per topic per session, appended to.
    if (!recordAnswers(sessionId, [{ topicId: item.topic, itemId: item.id, correct }])) {
      setSaveError(progressError());
    }
    const entry = reviewFor(item.id);
    const outcome = !entry
      ? ""
      : entry.retired
        ? "Retired — you have this one, it will not be scheduled again"
        : `Back ${describeInterval(entry.interval)}`;
    setGraded({ correct, outcome });
    setLog((l) => [...l, { correct, topic: item.topic }]);
  };

  const advance = () => {
    resetCardState();
    setPos((p) => p + 1);
  };

  // --- hydration placeholder ------------------------------------------------
  // Everything on this page comes from localStorage, so the server and the
  // first client render agree on this and nothing else.
  if (progress === null) {
    return (
      <div className="narrow-page page-stack">
        <h1 className="section-title">Review</h1>
        <div className="panel" aria-busy="true">
          <p className="body-copy text-sm">Loading your review queue…</p>
        </div>
      </div>
    );
  }

  const saveBanner = saveError ? (
    <div role="alert" className="soft-callout border-amber-300 bg-amber-50 text-sm text-amber-900">
      <span className="font-bold">Progress not saved. </span>
      {saveError}
    </div>
  ) : null;

  // --- nothing due ----------------------------------------------------------
  if (cards.length === 0) {
    return <EmptyReview progress={progress} stats={stats} />;
  }

  // --- completed ------------------------------------------------------------
  if (pos >= cards.length) {
    const correct = log.filter((l) => l.correct).length;
    const remaining = stats.due;
    const missed = log.length - correct;
    return (
      <div className="narrow-page page-stack">
        {saveBanner}
        <section className="hero-panel text-center">
          <div className="text-sm font-bold text-stone-500">Review complete</div>
          <div className="mt-2 text-5xl font-extrabold text-accent-dark tabular-nums">
            {correct}/{log.length}
          </div>
          <p className="muted mx-auto mt-2 max-w-md text-sm">
            {missed === 0
              ? "Everything recalled. Those questions move further out; the ones you keep getting right stop coming back at all."
              : `${missed} to fix. ${missed === 1 ? "It comes" : "They come"} back tomorrow — the rest move further out.`}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {remaining > 0 && (
              <button onClick={restart} className="btn btn-primary">
                Review {Math.min(remaining, SESSION_LIMIT)} more
              </button>
            )}
            <Link href="/" className="btn btn-secondary">
              Back to roadmap
            </Link>
          </div>
        </section>
        <NextSteps progress={progress} heading="Then what" />
      </div>
    );
  }

  // --- the drill ------------------------------------------------------------
  if (!card) return null;
  const { item, perm } = card;
  const left = cards.length - pos;
  const topicName = getTopic(item.topic)?.short ?? item.topic;
  const answerable = item.type === "mc" ? choice !== null : text.trim() !== "";

  const gradeCurrent = () => {
    if (item.type === "mc") {
      if (choice === null || !perm) return;
      commit(perm[choice] === (item as MCQuestion).answer);
    } else if (item.type === "numeric") {
      commit(gradeNumeric(text, item.answer, item.tolerance ?? 0.03));
    }
  };

  return (
    <div className="narrow-page page-stack">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Link href="/" className="text-sm font-semibold text-accent-dark hover:text-accent">
            ← Roadmap
          </Link>
          <h1 className="section-title mt-2">Review</h1>
        </div>
        <div className="text-right">
          <div className="metric-count text-2xl text-accent-dark" aria-hidden="true">
            {left}
          </div>
          <div className="text-xs font-semibold text-stone-500" role="status">
            {left} left in this session
          </div>
        </div>
      </div>

      <div
        className="h-1 w-full overflow-hidden rounded-full bg-stone-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={cards.length}
        aria-valuenow={pos}
        aria-label="Review session progress"
      >
        <div
          className="h-full rounded-full bg-accent transition-all"
          style={{ width: `${(pos / cards.length) * 100}%` }}
        />
      </div>

      {saveBanner}

      <div className="question-panel">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="flex flex-wrap items-center gap-2">
            <span className="chip">{topicName}</span>
            <span className="text-stone-500">
              {item.type === "qna" ? "Interview Q&A" : DIFF_LABEL[item.difficulty]}
            </span>
          </span>
          <button
            type="button"
            onClick={() => toggleBookmark(item.id, item.topic)}
            aria-pressed={bookmarked}
            className={`chip ${bookmarked ? "chip-on" : ""}`}
          >
            {bookmarked ? "★ Bookmarked" : "☆ Bookmark"}
          </button>
        </div>

        <HtmlContent html={item.prompt} />
        {item.type !== "qna" && item.figure && (
          <div className="qfig" dangerouslySetInnerHTML={{ __html: item.figure }} />
        )}

        {item.type === "mc" ? (
          <ul className="mt-4 space-y-2">
            {(perm ?? item.choices.map((_, i) => i)).map((original, display) => {
              const picked = choice === display;
              const isAnswer = original === item.answer;
              let cls = "";
              if (graded && isAnswer) cls = "answer-option-correct";
              else if (graded && picked) cls = "answer-option-incorrect";
              else if (picked) cls = "answer-option-selected";
              return (
                <li key={display}>
                  <button
                    type="button"
                    disabled={graded !== null}
                    aria-pressed={picked}
                    onClick={() => setChoice(display)}
                    className={`answer-option ${cls} ${graded ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <span className="mr-2 font-semibold text-stone-500">
                      {String.fromCharCode(65 + display)}.
                    </span>
                    <span className="inline-block align-middle [&>div]:inline">
                      <HtmlContent html={item.choices[original] ?? ""} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : item.type === "numeric" ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setText((t) => (/^[-−]/.test(t.trim()) ? t.trim().slice(1) : `-${t.trim()}`))}
              disabled={graded !== null}
              aria-label="Toggle negative sign"
              className="btn btn-secondary min-h-0 px-3 py-1.5 font-mono disabled:opacity-40"
            >
              ±
            </button>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck={false}
              value={text}
              disabled={graded !== null}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !graded && text.trim()) gradeCurrent();
              }}
              placeholder="Your answer"
              aria-label="Your answer"
              className="text-field w-40"
            />
            {item.unit && <span className="text-sm text-stone-500">{item.unit}</span>}
            {graded && (
              <span className="text-sm font-semibold">
                Expected {item.answer}
                {item.unit ? ` ${item.unit}` : ""}
              </span>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <textarea
              ref={qnaInputRef}
              value={text}
              disabled={revealed}
              onChange={(e) => setText(e.target.value)}
              placeholder="Answer out loud or in your own words first, then compare."
              aria-label="Your answer"
              className="textarea-field"
            />
            <MathKeyboard
              targetRef={qnaInputRef}
              value={text}
              onValueChange={setText}
              disabled={revealed}
            />
            {!revealed && (
              <button type="button" onClick={() => setRevealed(true)} className="btn btn-primary">
                Reveal model answer
              </button>
            )}
            {revealed && (
              <div className="solution-box">
                <div className="mb-1 text-xs font-bold text-stone-500">Model answer</div>
                <HtmlContent html={item.modelAnswer} className="text-sm" />
                {!graded && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button onClick={() => commit(true)} className="btn btn-success">
                      I got it
                    </button>
                    <button onClick={() => commit(false)} className="btn btn-danger">
                      Needs review
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {graded && (
          <div
            role="status"
            className={`soft-callout mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${
              graded.correct
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-rose-200 bg-rose-50 text-rose-800"
            }`}
          >
            <span className="font-bold">{graded.correct ? "✓ Correct" : "✕ Not this time"}</span>
            {graded.outcome && <span>{graded.outcome}</span>}
            {!graded.correct && item.type === "numeric" && (() => {
              const hint = diagnoseNumeric(text, item.answer, item.tolerance ?? 0.03);
              return hint ? (
                <span className="basis-full font-normal" data-numeric-hint>
                  <span className="font-semibold">Where you likely went wrong: </span>
                  {hint}
                </span>
              ) : null;
            })()}
          </div>
        )}

        {graded && item.type !== "qna" && (
          <div className="solution-box mt-4">
            <div className="mb-1 text-xs font-bold text-stone-500">Explanation</div>
            <HtmlContent html={item.explanation} className="text-sm" />
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {!graded && item.type !== "qna" && (
            <button
              onClick={gradeCurrent}
              disabled={!answerable}
              className="btn btn-primary disabled:opacity-40"
            >
              Check answer
            </button>
          )}
          {graded && (
            <button onClick={advance} className="btn btn-primary" autoFocus>
              {pos === cards.length - 1 ? "Finish review" : "Next →"}
            </button>
          )}
        </div>
        {!graded && (
          <button
            onClick={advance}
            className="text-sm font-semibold text-stone-500 hover:text-accent"
          >
            Skip — stays due
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Nothing due. Not an apology: the schedule is explained, and every path out of
 * here is a concrete next action (PRODUCT.md principle 1).
 */
function EmptyReview({
  progress,
  stats,
}: {
  progress: ProgressData;
  stats: { due: number; scheduled: number; learned: number };
}) {
  const next = nextDueAt(progress);
  const started = stats.scheduled > 0 || stats.learned > 0;

  return (
    <div className="narrow-page page-stack">
      <div>
        <Link href="/" className="text-sm font-semibold text-accent-dark hover:text-accent">
          ← Roadmap
        </Link>
        <h1 className="section-title mt-2">
          {started ? "Nothing due right now" : "Your review queue starts with your first answer"}
        </h1>
        <p className="body-copy mt-2 text-sm">
          {started ? (
            <>
              Every question you answer joins a spaced schedule: miss one and it comes back
              tomorrow, get it right and it moves out to 3, 7, 16 then 35 days. Get it right six
              times running and it retires for good.
              {next !== null && (
                <>
                  {" "}
                  Your next questions unlock <strong>{relativeDay(next)}</strong>.
                </>
              )}
            </>
          ) : (
            <>
              Answer questions in a practice set or a mock test and they enter a spaced schedule
              here: miss one and it comes back tomorrow, get it right and it moves out to 3, 7, 16
              then 35 days, until it retires. Nothing to review yet because nothing has been
              answered yet.
            </>
          )}
        </p>
      </div>

      {started && (
        <dl className="dense-grid grid-cols-2 sm:grid-cols-3">
          <div className="mini-stat">
            <dt className="text-xs font-semibold text-stone-500">Scheduled</dt>
            <dd className="metric-count text-2xl text-accent-dark">{stats.scheduled}</dd>
          </div>
          <div className="mini-stat">
            <dt className="text-xs font-semibold text-stone-500">Learned</dt>
            <dd className="metric-count text-2xl text-accent-dark">{stats.learned}</dd>
          </div>
          <div className="mini-stat">
            <dt className="text-xs font-semibold text-stone-500">Next due</dt>
            <dd className="text-lg font-bold text-accent-dark">
              {next === null ? "—" : relativeDay(next)}
            </dd>
          </div>
        </dl>
      )}

      <NextSteps progress={progress} heading="Do this instead" />
    </div>
  );
}

/** Continue / weakest area / browse — the three ways out of any review screen. */
function NextSteps({ progress, heading }: { progress: ProgressData; heading: string }) {
  const target = continueTarget(progress);
  const weakest = weakestTopics(progress, 1)[0];
  const weakTopic = weakest ? getTopic(weakest.topicId) : undefined;
  const targetTopic = target ? getTopic(target.topicId) : undefined;

  return (
    <section className="page-stack">
      <h2 className="text-sm font-bold uppercase tracking-wide text-stone-500">{heading}</h2>
      <div className="dense-grid sm:grid-cols-2">
        {target && targetTopic && (
          <article className="panel interactive-card">
            <div className="text-xs font-bold uppercase tracking-wide text-stone-500">Continue</div>
            <h3 className="mt-1 text-base font-bold">{targetTopic.name}</h3>
            <p className="body-copy mt-1 text-sm">
              {masteryMeta(masteryLevel(target.topicId, progress)).blurb}
            </p>
            <Link
              href={`/${target.kind === "lesson" ? "learn" : "practice"}/${target.topicId}`}
              className="btn btn-primary mt-3"
            >
              {target.kind === "lesson" ? "Read the lesson" : "Practice this topic"}
            </Link>
          </article>
        )}
        {weakest && weakTopic ? (
          <article className="panel interactive-card">
            <div className="text-xs font-bold uppercase tracking-wide text-stone-500">
              Weakest area
            </div>
            <h3 className="mt-1 text-base font-bold">{weakTopic.name}</h3>
            <p className="body-copy mt-1 text-sm tabular-nums">
              {Math.round(weakest.accuracy * 100)}% correct over {weakest.attempts} questions —
              your lowest.
            </p>
            <Link href={`/practice/${weakest.topicId}`} className="btn btn-secondary mt-3">
              Drill it
            </Link>
          </article>
        ) : (
          <article className="panel interactive-card">
            <div className="text-xs font-bold uppercase tracking-wide text-stone-500">
              Build a set
            </div>
            <h3 className="mt-1 text-base font-bold">Mixed mock test</h3>
            <p className="body-copy mt-1 text-sm">
              Pick topics and a length; everything you answer enters the review schedule.
            </p>
            <Link href="/test" className="btn btn-secondary mt-3">
              Open the test builder
            </Link>
          </article>
        )}
      </div>
    </section>
  );
}
