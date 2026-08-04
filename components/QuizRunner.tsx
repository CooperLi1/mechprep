"use client";

import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import type { MCQuestion } from "@/content/types";
import { getTopic } from "@/content/topics";
import {
  diagnoseNumeric,
  gradeNumeric,
  modelAnswerGaps,
  questionHint,
  shuffle,
  DIFF_LABEL,
  DIFF_COLOR,
  type BankQuestion,
  type QuizItem,
} from "@/lib/quiz";
import { progressError, recordAnswers, type GradedItem } from "@/lib/progress";
import HtmlContent from "@/components/HtmlContent";
import MathKeyboard from "@/components/MathKeyboard";

export type QuizMode = "practice" | "exam";

interface Response {
  choice: number | null; // index into the *shuffled* choices
  text: string; // numeric input
  checked: boolean; // practice mode: answer revealed
  selfGrade: "correct" | "incorrect" | null; // open-ended Q&A self-assessment
  hintShown: boolean; // practice mode: hint requested before answering
}

interface Props {
  questions: QuizItem[];
  mode: QuizMode;
  timerMinutes?: number; // exam mode only
  title: string;
  onExit?: () => void;
  /** Restart the runner with a subset of questions (results screen "retry missed"). */
  onRetry?: (items: QuizItem[]) => void;
}

const EMPTY_RESPONSE: Response = { choice: null, text: "", checked: false, selfGrade: null, hintShown: false };

const SAVE_FAILED_FALLBACK =
  "Your results could not be saved to this browser. They are shown here but " +
  "will not appear on the roadmap.";

/** Per-question shuffled order of MC choices: perm[displayIndex] = originalIndex */
function makePerms(questions: QuizItem[]): (number[] | null)[] {
  return questions.map((q) =>
    q.type === "mc" ? shuffle(q.choices.map((_, i) => i)) : null
  );
}

function freshResponses(questions: QuizItem[]): Response[] {
  return questions.map(() => ({ ...EMPTY_RESPONSE }));
}

function newSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `s${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Timer state is an absolute deadline plus the derived seconds remaining.
 * Storing the deadline (rather than decrementing a counter) is what keeps the
 * clock honest: a throttled or backgrounded tab can delay a repaint but can
 * never buy the candidate extra exam time.
 */
interface TimerState {
  deadline: number | null;
  seconds: number | null;
}

function startTimer(mode: QuizMode, timerMinutes: number | undefined): TimerState {
  if (mode !== "exam" || !timerMinutes || timerMinutes <= 0) return { deadline: null, seconds: null };
  return { deadline: Date.now() + timerMinutes * 60_000, seconds: Math.round(timerMinutes * 60) };
}

function secondsUntil(deadline: number): number {
  return Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
}

/**
 * Announcement points for the countdown. A screen reader must not be told the
 * time every second — that makes the rest of the page unusable — so the visible
 * clock is `role="timer" aria-live="off"` and only these crossings are spoken.
 */
const TIMER_THRESHOLDS = [1800, 1200, 900, 600, 300, 120, 60, 30, 10];
/** Below this the reminder is assertive; above it, polite. */
const URGENT_BELOW = 60;

function plural(n: number, word: string): string {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

function thresholdMessage(seconds: number): string {
  return seconds >= 60
    ? `${plural(Math.round(seconds / 60), "minute")} remaining`
    : `${plural(seconds, "second")} remaining`;
}

function clockLabel(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const spoken = m > 0 ? `${plural(m, "minute")} ${plural(s, "second")}` : plural(s, "second");
  return `Time remaining: ${spoken}${seconds < URGENT_BELOW ? ", final minute" : ""}`;
}

function clockDigits(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function isAutoQuestion(q: QuizItem): q is BankQuestion {
  return q.type === "mc" || q.type === "numeric";
}

function isCorrect(q: QuizItem, perm: number[] | null, r: Response): boolean {
  if (q.type === "mc") {
    if (r.choice === null || !perm) return false;
    return perm[r.choice] === (q as MCQuestion).answer;
  }
  if (q.type === "qna") return r.selfGrade === "correct";
  return gradeNumeric(r.text, q.answer, q.tolerance ?? 0.03);
}

export default function QuizRunner({ questions, mode, timerMinutes, title, onExit, onRetry }: Props) {
  const [perms, setPerms] = useState<(number[] | null)[]>(() => makePerms(questions));
  const [responses, setResponses] = useState<Response[]>(() => freshResponses(questions));
  const [idx, setIdx] = useState(0);
  const [finished, setFinished] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "incorrect" | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState(newSessionId);
  const [timer, setTimer] = useState<TimerState>(() => startTimer(mode, timerMinutes));
  const [timerNotice, setTimerNotice] = useState({ polite: "", urgent: "" });
  const recorded = useRef(false);
  const autoSubmitted = useRef(false);
  const recordedItems = useRef<Set<string>>(new Set());
  const announcedThresholds = useRef<Set<number>>(new Set());

  // Focus targets. Checking an answer used to disable the focused control, which
  // dropped focus to <body> and left ~40 tab stops between the user and "Next".
  // Nothing is disabled now, and focus is placed deliberately instead.
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const scoreRef = useRef<HTMLHeadingElement | null>(null);
  const exitDialogRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const paletteRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const qnaInputRef = useRef<HTMLTextAreaElement | null>(null);
  const wantsFeedbackFocus = useRef(false);
  const promptId = useId();

  // `perms` and `responses` are per-run state seeded from `questions`. If the
  // prop ever changes identity while mounted (a "retry missed" button, say),
  // stale shuffles would grade the new questions against the old choice order.
  // Re-seed everything instead — React's documented pattern for adjusting state
  // when a prop changes.
  const [prevQuestions, setPrevQuestions] = useState(questions);
  if (questions !== prevQuestions) {
    setPrevQuestions(questions);
    setPerms(makePerms(questions));
    setResponses(freshResponses(questions));
    setIdx(0);
    setFinished(false);
    setConfirmSubmit(false);
    setConfirmExit(false);
    setReviewFilter(null);
    setSaveError(null);
    setSessionId(newSessionId());
    setTimer(startTimer(mode, timerMinutes));
    setTimerNotice({ polite: "", urgent: "" });
  }

  // Recording guards belong to one run; a new session id means a new run.
  // Declared before the recording effects so it always runs first.
  useEffect(() => {
    recorded.current = false;
    autoSubmitted.current = false;
    recordedItems.current = new Set();
    announcedThresholds.current = new Set();
  }, [sessionId]);

  const secondsLeft = timer.seconds;

  // Countdown: derive the remaining time from the deadline on every tick so
  // drift cannot accumulate, and re-derive as soon as a hidden tab comes back.
  // The zero crossing submits exactly once (`autoSubmitted`).
  useEffect(() => {
    const deadline = timer.deadline;
    if (deadline === null || finished) return;
    const tick = () => {
      const left = secondsUntil(deadline);
      setTimer((t) => (t.deadline === deadline && t.seconds === left ? t : { deadline, seconds: left }));
      // Speak only when a threshold is crossed, never on every tick. Every
      // threshold at or above the remaining time is retired at once, so a
      // 10-minute exam opens with "10 minutes remaining" rather than working
      // its way down through the thresholds a 60-minute exam would use.
      if (left > 0) {
        const pending = TIMER_THRESHOLDS.filter(
          (t) => t >= left && !announcedThresholds.current.has(t)
        );
        const crossed = pending[pending.length - 1]; // descending list: the tightest
        if (crossed !== undefined) {
          pending.forEach((t) => announcedThresholds.current.add(t));
          const message = thresholdMessage(crossed);
          setTimerNotice(
            crossed <= URGENT_BELOW ? { polite: "", urgent: message } : { polite: message, urgent: "" }
          );
        }
      }
      if (left <= 0 && !autoSubmitted.current) {
        autoSubmitted.current = true;
        setTimerNotice({ polite: "", urgent: "Time is up. Your test has been submitted." });
        setFinished(true);
      }
    };
    tick();
    const id = setInterval(tick, 250);
    const onVisibility = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [timer.deadline, finished]);

  // Nothing is written to storage until an exam is submitted, so a reload would
  // throw the whole attempt away without asking.
  useEffect(() => {
    if (mode !== "exam" || finished) return;
    const guard = (e: BeforeUnloadEvent) => {
      if (!responses.some((r) => r.choice !== null || r.text.trim() !== "")) return;
      e.preventDefault();
    };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [mode, finished, responses]);

  const record = (items: GradedItem[]) => {
    if (items.length === 0) return;
    if (!recordAnswers(sessionId, items)) {
      setSaveError(progressError() ?? SAVE_FAILED_FALLBACK);
    }
  };

  // Practice mode: persist each answer the moment it is graded, so abandoning
  // the run part-way (← Roadmap, browser back) keeps the work already done.
  // `recordedItems` plus the (session, item) key in recordAnswers make this
  // safe to run on every response change and under StrictMode double-invokes.
  useEffect(() => {
    if (mode !== "practice") return;
    const pending: GradedItem[] = [];
    questions.forEach((qq, i) => {
      const r = responses[i];
      if (!r?.checked) return;
      if (qq.type === "qna" && r.selfGrade === null) return;
      if (recordedItems.current.has(qq.id)) return;
      recordedItems.current.add(qq.id);
      pending.push({ topicId: qq.topic, itemId: qq.id, correct: isCorrect(qq, perms[i] ?? null, r) });
    });
    record(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, responses, perms, mode, sessionId]);

  // Record whatever is left over once on finish (everything, in exam mode).
  useEffect(() => {
    if (!finished || recorded.current) return;
    recorded.current = true;
    const pending: GradedItem[] = [];
    questions.forEach((qq, i) => {
      if (recordedItems.current.has(qq.id)) return;
      recordedItems.current.add(qq.id);
      pending.push({
        topicId: qq.topic,
        itemId: qq.id,
        correct: isCorrect(qq, perms[i] ?? null, responses[i] ?? EMPTY_RESPONSE),
      });
    });
    record(pending);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished, questions, perms, responses, sessionId]);

  // Revealing an answer moves focus onto the verdict, so the feedback a sighted
  // user just produced is the very next thing a keyboard/screen-reader user
  // lands on — and "Next" is two tab stops away instead of forty.
  useEffect(() => {
    if (!wantsFeedbackFocus.current) return;
    if (!feedbackRef.current) return;
    wantsFeedbackFocus.current = false;
    feedbackRef.current.focus();
  });

  // The score is the point of the results screen; land on it.
  useEffect(() => {
    if (finished) scoreRef.current?.focus();
  }, [finished]);

  useEffect(() => {
    if (confirmExit) exitDialogRef.current?.focus();
  }, [confirmExit]);

  const score = useMemo(() => {
    if (!finished) return null;
    let c = 0;
    questions.forEach((qq, i) => {
      if (isCorrect(qq, perms[i] ?? null, responses[i] ?? EMPTY_RESPONSE)) c++;
    });
    return c;
  }, [finished, questions, perms, responses]);

  if (questions.length === 0) {
    return (
      <div className="panel p-8 text-center text-stone-500">
        No questions match this configuration.
      </div>
    );
  }

  const safeIdx = Math.min(Math.max(idx, 0), questions.length - 1);
  const q = questions[safeIdx];
  const perm = perms[safeIdx] ?? null;
  const resp = responses[safeIdx] ?? EMPTY_RESPONSE;

  const setResp = (patch: Partial<Response>) =>
    setResponses((rs) => rs.map((r, i) => (i === safeIdx ? { ...r, ...patch } : r)));

  const answered = (r: Response, qq: BankQuestion) =>
    qq.type === "mc" ? r.choice !== null : r.text.trim() !== "";
  const completed = (r: Response, qq: QuizItem) => {
    if (qq.type === "qna") return r.selfGrade !== null;
    return answered(r, qq);
  };

  const responseAt = (i: number) => responses[i] ?? EMPTY_RESPONSE;
  const blanks = questions.reduce(
    (n, qq, i) => (completed(responseAt(i), qq) ? n : n + 1),
    0
  );
  const answeredCount = questions.length - blanks;

  // Submission is never blocked. Unanswered questions grade as incorrect (which
  // `isCorrect` already does); the user just gets told how many there are first.
  const submitNow = () => {
    setConfirmSubmit(false);
    setConfirmExit(false);
    setFinished(true);
  };
  const requestSubmit = () => {
    setConfirmExit(false);
    if (blanks > 0) setConfirmSubmit(true);
    else submitNow();
  };

  const saveErrorBanner = saveError ? (
    <div
      role="alert"
      data-save-error
      className="soft-callout border-amber-300 bg-amber-50 text-left text-sm text-amber-900"
    >
      <span className="font-bold">Progress not saved. </span>
      {saveError}
    </div>
  ) : null;

  // ---------- results screen ----------
  if (finished) {
    const total = questions.length;
    const c = score ?? 0;
    const percent = Math.round((c / total) * 100);
    const byTopic: Record<string, { correct: number; total: number }> = {};
    const missedIdx: number[] = [];
    questions.forEach((qq, i) => {
      const e = (byTopic[qq.topic] ??= { correct: 0, total: 0 });
      e.total++;
      if (isCorrect(qq, perms[i] ?? null, responseAt(i))) e.correct++;
      else missedIdx.push(i);
    });
    // A single-topic quiz restated the headline score one line below itself.
    const showTopicBreakdown = Object.keys(byTopic).length > 1;
    // Default to what a learner actually came for. 30 full-detail cards is
    // ~30,000px of page; the ones they got wrong is the useful subset.
    const filter = reviewFilter ?? (missedIdx.length > 0 ? "incorrect" : "all");
    const shownIdx =
      filter === "incorrect" ? missedIdx : questions.map((_, i) => i);
    const summary = `${title} complete. Score ${c} out of ${total}, ${percent} percent correct.`;

    return (
      <div className="page-stack">
        {saveErrorBanner}
        <p role="status" className="sr-only">
          {summary}
        </p>
        <div className="hero-panel text-center">
          <p className="text-sm font-bold text-stone-500">{title}</p>
          <h1
            ref={scoreRef}
            tabIndex={-1}
            aria-label={summary}
            className="results-score mt-1"
          >
            {c}
            <span className="results-score-total">/{total}</span>
          </h1>
          {/* --ink-muted measures 3.41:1 on the page background, below the
              4.5:1 body-text minimum, so these two lines use --ink-soft. */}
          <p className="mt-1 text-sm text-stone-600">
            {percent}% correct
            {missedIdx.length > 0 && <> · {missedIdx.length} to review</>}
          </p>

          {showTopicBreakdown && (
            <div className="mx-auto mt-5 flex max-w-md flex-col gap-2">
              {Object.entries(byTopic).map(([tid, s]) => (
                <div key={tid} className="flex items-center gap-3 text-sm">
                  <span className="w-40 shrink-0 truncate text-left text-stone-700">
                    {getTopic(tid)?.short ?? tid}
                  </span>
                  <div
                    className="h-2 flex-1 overflow-hidden rounded-full bg-stone-200"
                    role="img"
                    aria-label={`${getTopic(tid)?.short ?? tid}: ${s.correct} of ${s.total} correct`}
                  >
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${(s.correct / s.total) * 100}%` }}
                    />
                  </div>
                  <span className="w-12 text-right tabular-nums text-stone-500">
                    {s.correct}/{s.total}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {onRetry && missedIdx.length > 0 && (
              <button
                type="button"
                data-retry-missed
                onClick={() => onRetry(missedIdx.map((i) => questions[i] as QuizItem))}
                className="btn btn-primary"
              >
                Retry {missedIdx.length} missed
              </button>
            )}
            {onExit && (
              <button type="button" onClick={onExit} className="btn btn-secondary">
                New quiz
              </button>
            )}
            <Link href="/" className="btn btn-secondary">
              Back to roadmap
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title">Review</h2>
          <div className="segmented" role="group" aria-label="Filter reviewed questions">
            <button
              type="button"
              data-review-filter="incorrect"
              onClick={() => setReviewFilter("incorrect")}
              aria-pressed={filter === "incorrect"}
              disabled={missedIdx.length === 0}
              className={`segment ${filter === "incorrect" ? "segment-on" : ""} disabled:opacity-45`}
            >
              Incorrect only ({missedIdx.length})
            </button>
            <button
              type="button"
              data-review-filter="all"
              onClick={() => setReviewFilter("all")}
              aria-pressed={filter === "all"}
              className={`segment ${filter === "all" ? "segment-on" : ""}`}
            >
              All ({total})
            </button>
          </div>
        </div>
        <p role="status" className="-mt-3 text-xs text-stone-600" data-review-count>
          Showing {shownIdx.length} of {total} question{total === 1 ? "" : "s"}.
        </p>

        {shownIdx.length === 0 && (
          <div className="panel p-8 text-center text-stone-500">
            Nothing to review — every question was correct.
          </div>
        )}

        {shownIdx.map((i) => {
          const qq = questions[i] as QuizItem;
          const r = responseAt(i);
          const p = perms[i] ?? null;
          const ok = isCorrect(qq, p, r);
          return (
            <div
              key={qq.id}
              className={`question-panel ${
                ok ? "question-panel-correct" : "question-panel-incorrect"
              }`}
              data-result-state={ok ? "correct" : "incorrect"}
            >
              <h3 className="review-card-head">
                <span
                  className={`rounded-full px-2 py-0.5 font-semibold ${
                    ok ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {ok ? "✓ Correct" : "✕ Incorrect"}
                </span>
                <span className="font-medium text-stone-500">
                  Question {i + 1} · {getTopic(qq.topic)?.short ?? qq.topic} ·{" "}
                  {qq.type === "qna" ? "Interview Q&A" : DIFF_LABEL[qq.difficulty]}
                </span>
              </h3>
              <HtmlContent html={qq.prompt} />
              {isAutoQuestion(qq) && qq.figure && <div className="qfig" dangerouslySetInnerHTML={{ __html: qq.figure }} />}
              {qq.type === "mc" && p ? (
                <ul className="mt-3 space-y-1.5">
                  {p.map((orig, di) => {
                    const isAns = orig === qq.answer;
                    const isPicked = r.choice === di;
                    return (
                      <li
                        key={di}
                        className={`rounded-lg border px-3 py-2 text-sm ${
                          isAns
                            ? "review-answer-correct"
                            : isPicked
                              ? "review-answer-incorrect"
                              : "border-slate-200"
                        }`}
                      >
                        <HtmlContent html={qq.choices[orig] ?? ""} glossary={false} />
                        {isAns && <span className="ml-1 text-xs font-semibold text-emerald-800">correct answer</span>}
                        {isPicked && !isAns && <span className="ml-1 text-xs font-semibold text-rose-800">your pick</span>}
                        {isPicked && isAns && <span className="ml-1 text-xs font-semibold text-emerald-800">— your pick</span>}
                        {isPicked && !isAns && qq.whyWrong?.[orig]?.trim() && (
                          <div className="mt-1 text-xs text-rose-700" data-why-wrong>
                            <span className="font-semibold">Why this is wrong: </span>
                            <HtmlContent html={qq.whyWrong[orig] ?? ""} className="inline-content" />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : qq.type === "numeric" ? (
                <div className="mt-3 text-sm">
                  Your answer:{" "}
                  <span className={`font-semibold ${ok ? "text-emerald-700" : "text-rose-700"}`}>
                    {r.text.trim() || "—"}
                  </span>{" "}
                  · Expected: <span className="font-semibold">{qq.answer}</span>{" "}
                  {qq.unit && <span className="text-stone-500">{qq.unit}</span>}
                  {!ok && (() => {
                    const hint = diagnoseNumeric(r.text, qq.answer, qq.tolerance ?? 0.03);
                    return hint ? (
                      <div className="mt-1 text-xs text-rose-700" data-numeric-hint>
                        <span className="font-semibold">Where you likely went wrong: </span>
                        {hint}
                      </div>
                    ) : null;
                  })()}
                </div>
              ) : qq.type === "qna" ? (
                <div className="mt-3 space-y-3 text-sm">
                  <div>
                    <div className="mb-1 font-semibold text-stone-600">Your answer</div>
                    <div className="rounded-lg border border-stone-200 bg-stone-100 p-3 text-stone-700">
                      {r.text.trim() || "No draft entered."}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-stone-600">Model answer</div>
                    <HtmlContent html={qq.modelAnswer} className="solution-box text-sm" />
                  </div>
                </div>
              ) : null}
              {qq.type !== "qna" && (
                <div className="solution-box mt-3">
                  <div className="mb-1 text-xs font-bold text-stone-500">
                    Explanation
                  </div>
                  <HtmlContent html={qq.explanation} className="text-sm" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (!q) {
    return (
      <div className="panel p-8 text-center text-stone-500">
        That question is no longer available.
      </div>
    );
  }

  // ---------- question screen ----------
  const revealed = q.type === "qna" ? resp.checked : mode === "practice" && resp.checked;
  const isLast = safeIdx === questions.length - 1;
  const correctNow = revealed && q.type !== "qna" ? isCorrect(q, perm, resp) : false;

  // Wrong-answer coaching. For MC, content may explain the specific trap the
  // picked choice falls into; for numeric, the diagnosis is derived from the
  // relationship between the typed value and the expected one.
  const pickedOrig =
    q.type === "mc" && perm && resp.choice !== null ? (perm[resp.choice] ?? null) : null;
  const whyWrongNote =
    revealed && !correctNow && q.type === "mc" && pickedOrig !== null
      ? q.whyWrong?.[pickedOrig]?.trim() || null
      : null;
  const numericHint =
    revealed && !correctNow && q.type === "numeric"
      ? diagnoseNumeric(resp.text, q.answer, q.tolerance ?? 0.03)
      : null;
  const qnaGaps =
    revealed && q.type === "qna" ? modelAnswerGaps(q.modelAnswer, resp.text) : [];
  // Hints are a practice-mode aid; a timed exam gets none.
  const hint = mode === "practice" && !revealed && q.type !== "qna" ? questionHint(q) : null;

  const reveal = () => {
    wantsFeedbackFocus.current = true;
    setResp({ checked: true });
  };

  // The decimal keypad on iOS/Android has no minus key, and several questions
  // have negative answers, so the sign has to be reachable without a keyboard.
  const toggleSign = () => {
    if (revealed) return;
    const t = resp.text.trim();
    setResp({ text: /^[-−]/.test(t) ? t.slice(1) : `-${t}` });
  };

  const optionCount = q.type === "mc" && perm ? perm.length : 0;
  const letter = (i: number) => String.fromCharCode(65 + i);
  /** Roving tabindex: the group is one tab stop, arrows move within it. */
  const rovingOption = resp.choice ?? 0;

  const moveOption = (from: number, delta: number) => {
    if (optionCount === 0) return;
    const to = (from + delta + optionCount) % optionCount;
    optionRefs.current[to]?.focus();
    // Arrow keys select as well as move, per the radiogroup pattern — but not
    // once the answer is locked, where they are read-only navigation.
    if (!revealed) setResp({ choice: to });
  };

  const jumpOption = (to: number) => {
    if (optionCount === 0) return;
    optionRefs.current[to]?.focus();
    if (!revealed) setResp({ choice: to });
  };

  const onOptionKeyDown = (e: KeyboardEvent, di: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        moveOption(di, 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        moveOption(di, -1);
        break;
      case "Home":
        e.preventDefault();
        jumpOption(0);
        break;
      case "End":
        e.preventDefault();
        jumpOption(optionCount - 1);
        break;
      default:
        break;
    }
  };

  const onPaletteKeyDown = (e: KeyboardEvent, i: number) => {
    const last = questions.length - 1;
    let to: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = i === 0 ? last : i - 1;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = last;
    if (to === null) return;
    e.preventDefault();
    paletteRefs.current[to]?.focus();
  };

  return (
    <div className="page-stack">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-bold text-stone-500">{title}</div>
          <div className="text-lg font-semibold">
            Question {safeIdx + 1} <span className="text-stone-500">of {questions.length}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {secondsLeft !== null && (
            <span
              data-timer
              role="timer"
              aria-live="off"
              aria-label={clockLabel(secondsLeft)}
              className={`quiz-timer ${secondsLeft < URGENT_BELOW ? "quiz-timer-urgent" : ""}`}
            >
              <span className="quiz-timer-label" aria-hidden="true">
                {secondsLeft < URGENT_BELOW ? "Final minute" : "Time left"}
              </span>
              <span aria-hidden="true">{clockDigits(secondsLeft)}</span>
            </span>
          )}
          {mode === "exam" && (
            <button
              type="button"
              onClick={requestSubmit}
              className="btn btn-primary min-h-0 px-4 py-1.5"
            >
              Submit test
            </button>
          )}
          {onExit && (
            <button
              type="button"
              data-exit-quiz
              onClick={() => {
                setConfirmSubmit(false);
                setConfirmExit(true);
              }}
              aria-expanded={confirmExit}
              className="btn btn-secondary min-h-0 px-4 py-1.5"
            >
              End session
            </button>
          )}
        </div>
      </div>

      {/* Countdown reminders. Two regions because switching a single region's
          politeness at runtime is not reliably picked up by screen readers. */}
      <div aria-live="polite" className="sr-only">
        {timerNotice.polite}
      </div>
      <div aria-live="assertive" className="sr-only">
        {timerNotice.urgent}
      </div>

      {saveErrorBanner}

      {confirmExit && (
        <div
          role="alertdialog"
          aria-label="End this session"
          data-exit-confirm
          ref={exitDialogRef}
          tabIndex={-1}
          className="soft-callout flex flex-wrap items-center justify-between gap-3 border-amber-300 bg-amber-50"
        >
          <p className="text-sm text-amber-900">
            <span className="font-bold">End this session?</span>{" "}
            {mode === "exam" ? (
              <>
                Nothing is recorded until you submit, so all {answeredCount} answer
                {answeredCount === 1 ? "" : "s"} and{" "}
                {secondsLeft !== null ? "the remaining time " : "your place in the test "}
                will be discarded.
              </>
            ) : (
              <>
                {answeredCount} checked answer{answeredCount === 1 ? "" : "s"}{" "}
                {answeredCount === 1 ? "is" : "are"} already saved to your progress;
                the remaining {blanks} unanswered question{blanks === 1 ? "" : "s"} and this
                question order will be lost.
              </>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setConfirmExit(false)}
              className="btn btn-secondary min-h-0 px-4 py-1.5"
            >
              Keep working
            </button>
            {answeredCount > 0 && (
              <button
                type="button"
                onClick={requestSubmit}
                className="btn btn-secondary min-h-0 px-4 py-1.5"
              >
                Submit &amp; see results
              </button>
            )}
            <button
              type="button"
              data-exit-discard
              onClick={() => {
                setConfirmExit(false);
                onExit?.();
              }}
              className="btn btn-danger min-h-0 px-4 py-1.5"
            >
              Discard &amp; exit
            </button>
          </div>
        </div>
      )}

      {confirmSubmit && (
        <div
          role="alertdialog"
          aria-label="Confirm submission"
          data-submit-confirm
          className="soft-callout flex flex-wrap items-center justify-between gap-3"
        >
          <span className="text-sm">
            <span className="font-bold">
              {blanks} question{blanks === 1 ? "" : "s"} unanswered
            </span>{" "}
            — submit anyway? Blank answers are marked incorrect.
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setConfirmSubmit(false)}
              className="btn btn-secondary min-h-0 px-4 py-1.5"
            >
              Keep working
            </button>
            <button
              type="button"
              onClick={submitNow}
              className="btn btn-primary min-h-0 px-4 py-1.5"
            >
              Submit anyway
            </button>
          </div>
        </div>
      )}

      {/* Question palette. Roving tabindex keeps it a single tab stop: as 30
          separate stops it sat between the user and every question. */}
      <nav aria-label="Question navigation" className="flex flex-wrap gap-1.5">
        {questions.map((qq, i) => {
          const done = completed(responseAt(i), qq);
          const current = i === safeIdx;
          return (
            <button
              type="button"
              key={qq.id}
              ref={(el) => {
                paletteRefs.current[i] = el;
              }}
              onClick={() => setIdx(i)}
              onKeyDown={(e) => onPaletteKeyDown(e, i)}
              tabIndex={current ? 0 : -1}
              aria-current={current ? "step" : undefined}
              aria-label={`Question ${i + 1} of ${questions.length}, ${
                done ? "answered" : "not answered"
              }${current ? ", current question" : ""}`}
              className={`progress-dot ${
                current
                  ? "bg-accent text-white"
                  : done
                    ? "bg-teal-100 text-accent-dark"
                    // stone-500 (--ink-muted) on stone-200 measured 3.0:1
                    : "bg-stone-200 text-stone-600 hover:bg-stone-300"
              }`}
            >
              <span aria-hidden="true">{i + 1}</span>
            </button>
          );
        })}
      </nav>

      <div className="question-panel">
        <div className="mb-3 flex items-center gap-2 text-xs">
          <span className={`rounded-full px-2 py-0.5 font-semibold ${DIFF_COLOR[q.difficulty]}`}>
            {q.type === "qna" ? "Interview Q&A" : DIFF_LABEL[q.difficulty]}
          </span>
          <span className="text-stone-500">{getTopic(q.topic)?.short ?? q.topic}</span>
        </div>
        <div id={promptId}>
          <HtmlContent html={q.prompt} />
        </div>
        {isAutoQuestion(q) && q.figure && <div className="qfig" dangerouslySetInnerHTML={{ __html: q.figure }} />}

        {q.type === "mc" && perm ? (
          <div
            role="radiogroup"
            aria-labelledby={promptId}
            data-answer-group
            className="mt-4 space-y-2"
          >
            {perm.map((orig, di) => {
              const picked = resp.choice === di;
              const isAns = orig === q.answer;
              let cls = "";
              let state: "selected" | "correct" | "incorrect" | undefined;
              let note = "";
              if (revealed && isAns) {
                cls = "answer-option-correct";
                state = "correct";
                note = picked ? "correct answer — your pick" : "correct answer";
              } else if (revealed && picked && !isAns) {
                cls = "answer-option-incorrect";
                state = "incorrect";
                note = "your pick — incorrect";
              } else if (picked) {
                cls = "answer-option-selected";
                state = "selected";
              }
              return (
                <button
                  type="button"
                  key={di}
                  ref={(el) => {
                    optionRefs.current[di] = el;
                  }}
                  role="radio"
                  aria-checked={picked}
                  aria-disabled={revealed || undefined}
                  tabIndex={di === rovingOption ? 0 : -1}
                  data-answer-state={state}
                  onClick={() => {
                    if (revealed) return;
                    setResp({ choice: di });
                  }}
                  onKeyDown={(e) => onOptionKeyDown(e, di)}
                  className={`answer-option ${cls} ${revealed ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span className="mr-2 font-semibold text-stone-500">{letter(di)}.</span>
                  <span className="inline-block align-middle [&>div]:inline">
                    <HtmlContent html={q.choices[orig] ?? ""} glossary={false} />
                  </span>
                  {note && (
                    <span className="answer-option-note">{note}</span>
                  )}
                </button>
              );
            })}
          </div>
        ) : q.type === "numeric" ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleSign}
              aria-disabled={revealed || undefined}
              aria-label="Toggle negative sign"
              title="Toggle negative sign"
              data-sign-toggle
              className={`btn btn-secondary min-h-0 px-3 py-1.5 font-mono ${revealed ? "opacity-45" : ""}`}
            >
              ±
            </button>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck={false}
              value={resp.text}
              readOnly={revealed}
              aria-label="Your answer"
              aria-describedby={q.unit ? `${promptId}-unit` : undefined}
              onChange={(e) => setResp({ text: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter" && mode === "practice" && !revealed && resp.text.trim()) {
                  reveal();
                }
              }}
              placeholder="Your answer"
              className="text-field w-48"
            />
            {q.unit && (
              <span id={`${promptId}-unit`} className="text-sm text-stone-600">
                {q.unit}
              </span>
            )}
          </div>
        ) : q.type === "qna" ? (
          <div className="mt-4 space-y-2">
            <textarea
              ref={qnaInputRef}
              value={resp.text}
              readOnly={revealed}
              aria-label="Your answer"
              onChange={(e) => setResp({ text: e.target.value })}
              placeholder="Draft your answer in your own words, then compare against the model answer."
              className="textarea-field"
            />
            <MathKeyboard
              targetRef={qnaInputRef}
              value={resp.text}
              onValueChange={(text) => setResp({ text })}
              disabled={revealed}
            />
          </div>
        ) : null}

        {hint && !resp.hintShown && (
          <button
            type="button"
            data-show-hint
            onClick={() => setResp({ hintShown: true })}
            className="link-quiet mt-4 text-sm font-medium"
          >
            Show hint
          </button>
        )}
        {hint && resp.hintShown && (
          <div className="soft-callout mt-4 text-sm" data-hint>
            <span className="mono-key mr-2">Hint</span>
            <HtmlContent html={hint.html} className="inline-content" />
            {hint.derived && (
              <span className="muted block pt-1 text-xs">
                From the first line of the worked solution.
              </span>
            )}
          </div>
        )}

        {/* The verdict. Focused on reveal and marked role="status", so the
            outcome reaches keyboard and screen-reader users the same moment it
            reaches everyone else — and never by colour alone. */}
        {revealed && (
          <div
            ref={feedbackRef}
            tabIndex={-1}
            role="status"
            data-verdict={q.type === "qna" ? "revealed" : correctNow ? "correct" : "incorrect"}
            className={`quiz-verdict mt-4 ${
              q.type === "qna"
                ? ""
                : correctNow
                  ? "quiz-verdict-correct"
                  : "quiz-verdict-incorrect"
            }`}
          >
            {q.type === "qna" ? (
              <span>Model answer revealed — grade yourself below.</span>
            ) : correctNow ? (
              <span>
                <span aria-hidden="true">✓ </span>Correct
                {q.type === "numeric" && <> — {q.answer}{q.unit ? ` ${q.unit}` : ""}</>}
                {q.type === "mc" && perm && (
                  <> — {letter(perm.findIndex((o) => o === q.answer))}</>
                )}
              </span>
            ) : (
              <span>
                <span aria-hidden="true">✕ </span>Incorrect —{" "}
                {q.type === "numeric" ? (
                  <>expected {q.answer}{q.unit ? ` ${q.unit}` : ""}</>
                ) : perm ? (
                  <>the correct answer is {letter(perm.findIndex((o) => o === q.answer))}</>
                ) : null}
              </span>
            )}
            {whyWrongNote && resp.choice !== null && (
              <div className="basis-full text-sm font-normal" data-why-wrong>
                <span className="font-semibold">Why {letter(resp.choice)} is wrong: </span>
                <HtmlContent html={whyWrongNote} className="inline-content" />
              </div>
            )}
            {numericHint && (
              <div className="basis-full text-sm font-normal" data-numeric-hint>
                <span className="font-semibold">Where you likely went wrong: </span>
                {numericHint}
              </div>
            )}
          </div>
        )}

        {revealed && q.type === "qna" && (
          <div className="solution-box mt-4">
            <div className="mb-1 text-xs font-bold text-stone-500">Model answer</div>
            <HtmlContent html={q.modelAnswer} className="text-sm" />
            {resp.text.trim() !== "" && (
              <p className="mt-3 text-sm text-stone-600" data-coverage>
                {qnaGaps.length > 0 ? (
                  <>
                    <span className="font-semibold">Coverage check:</span> your draft never
                    mentions {qnaGaps.map((w, i) => (
                      <span key={w}>
                        {i > 0 && ", "}
                        <em>{w}</em>
                      </span>
                    ))}{" "}
                    — see how the model answer uses {qnaGaps.length === 1 ? "it" : "them"} before
                    grading yourself.
                  </>
                ) : (
                  <>
                    <span className="font-semibold">Coverage check:</span> your draft touches the
                    model answer&apos;s key terms — now compare the reasoning, not just the
                    vocabulary.
                  </>
                )}
              </p>
            )}
            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="Grade your answer"
            >
              <button
                type="button"
                onClick={() => setResp({ selfGrade: "correct" })}
                aria-pressed={resp.selfGrade === "correct"}
                className={`btn min-h-0 px-4 py-2 ${
                  resp.selfGrade === "correct"
                    ? "btn-success"
                    : "border-emerald-300 bg-stone-50 text-emerald-800 hover:bg-emerald-50"
                }`}
              >
                I got it
              </button>
              <button
                type="button"
                onClick={() => setResp({ selfGrade: "incorrect" })}
                aria-pressed={resp.selfGrade === "incorrect"}
                className={`btn min-h-0 px-4 py-2 ${
                  resp.selfGrade === "incorrect"
                    ? "btn-danger"
                    : "border-rose-300 bg-stone-50 text-rose-800 hover:bg-rose-50"
                }`}
              >
                Needs review
              </button>
            </div>
          </div>
        )}

        {revealed && q.type !== "qna" && (
          <div className="solution-box mt-4">
            <div className="mb-1 text-xs font-bold text-stone-500">
              Explanation
            </div>
            <HtmlContent html={q.explanation} className="text-sm" />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setIdx(Math.max(0, safeIdx - 1))}
          disabled={safeIdx === 0}
          className="btn btn-secondary disabled:opacity-40"
        >
          ← Previous
        </button>
        <div className="flex flex-wrap justify-end gap-2">
          {mode === "practice" && !revealed && (
            <button
              type="button"
              onClick={reveal}
              disabled={q.type !== "qna" && !answered(resp, q)}
              className="btn btn-primary disabled:opacity-40"
            >
              {q.type === "qna" ? "Reveal model answer" : "Check answer"}
            </button>
          )}
          {mode === "exam" && q.type === "qna" && !revealed && (
            <button type="button" onClick={reveal} className="btn btn-primary">
              Reveal &amp; self-grade
            </button>
          )}
          {!isLast && (mode === "exam" || revealed) && (
            <button
              type="button"
              onClick={() => setIdx(safeIdx + 1)}
              className="btn btn-primary"
            >
              Next →
            </button>
          )}
          {isLast && (mode === "exam" || revealed) && (
            <button type="button" onClick={requestSubmit} className="btn btn-success">
              Finish &amp; see results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
