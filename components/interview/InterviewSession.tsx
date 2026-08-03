"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { getTopic } from "@/content/topics";
import { DIFF_LABEL, gradeNumeric, shuffle, type QuizItem } from "@/lib/quiz";
import {
  mmss,
  newId,
  type InterviewItemResult,
  type InterviewPlan,
  type InterviewReport,
} from "@/lib/interview";
import HtmlContent from "@/components/HtmlContent";
import SelfGradeStep from "@/components/interview/SelfGradeStep";

interface Response {
  choice: number | null; // index into the *shuffled* order
  text: string;
  flagged: boolean;
  selfGrade: "correct" | "incorrect" | null;
}

const EMPTY: Response = { choice: null, text: "", flagged: false, selfGrade: null };

/** Spoken countdown checkpoints. The clock itself is never announced. */
const THRESHOLDS = [1800, 1200, 900, 600, 300, 120, 60, 30, 10];
const URGENT_BELOW = 60;

function plural(n: number, word: string) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

function thresholdMessage(seconds: number) {
  return seconds >= 60
    ? `${plural(Math.round(seconds / 60), "minute")} remaining`
    : `${plural(seconds, "second")} remaining`;
}

function clockLabel(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const spoken = m > 0 ? `${plural(m, "minute")} ${plural(s, "second")}` : plural(s, "second");
  return `Time remaining: ${spoken}${seconds < URGENT_BELOW ? ", final minute" : ""}`;
}

function makePerms(items: QuizItem[]): (number[] | null)[] {
  return items.map((q) => (q.type === "mc" ? shuffle(q.choices.map((_, i) => i)) : null));
}

function isAnswered(q: QuizItem, r: Response): boolean {
  if (q.type === "mc") return r.choice !== null;
  return r.text.trim() !== "";
}

interface Props {
  plan: InterviewPlan;
  stages: number[];
  onFinish: (report: InterviewReport) => void;
  onAbandon: () => void;
}

export default function InterviewSession({ plan, stages, onFinish, onAbandon }: Props) {
  const items = plan.items;
  const [perms] = useState<(number[] | null)[]>(() => makePerms(items));
  const [responses, setResponses] = useState<Response[]>(() => items.map(() => ({ ...EMPTY })));
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"answering" | "grading">("answering");
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [confirmExit, setConfirmExit] = useState(false);
  const [notice, setNotice] = useState({ polite: "", urgent: "" });
  /** Whether the clock ran out rather than the candidate submitting. */
  const [expired, setExpired] = useState(false);

  const allottedMs = plan.format.minutes * 60_000;
  // An absolute deadline, never a decrementing counter: a backgrounded or
  // throttled tab can delay a repaint, but it must not buy extra exam time.
  const [startedAt] = useState(() => Date.now());
  const deadline = startedAt + allottedMs;
  const [secondsLeft, setSecondsLeft] = useState(() => Math.round(allottedMs / 1000));

  const spoken = useRef<Set<number>>(new Set());
  const autoSubmitted = useRef(false);
  const finishedAt = useRef<number | null>(null);

  // Per-question time on screen, accumulated across visits.
  const spent = useRef<number[]>(items.map(() => 0));
  // Seeded from the session start (a lazy state initializer, so render stays
  // pure) — the first question is being timed from the moment the clock starts.
  const mark = useRef({ idx: 0, at: startedAt });

  const promptId = useId();
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const paletteRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const commitTime = useCallback((nextIdx: number) => {
    const now = Date.now();
    const m = mark.current;
    spent.current[m.idx] = (spent.current[m.idx] ?? 0) + Math.max(0, now - m.at);
    mark.current = { idx: nextIdx, at: now };
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const clamped = Math.min(Math.max(i, 0), items.length - 1);
      commitTime(clamped);
      setIdx(clamped);
    },
    [commitTime, items.length]
  );

  const buildReport = useCallback(
    (rs: Response[], wasExpired: boolean, elapsedMs: number): InterviewReport => {
      const results: InterviewItemResult[] = items.map((q, i) => {
        const r = rs[i] ?? EMPTY;
        const perm = perms[i] ?? null;
        let correct = false;
        let choice: number | null = null;
        if (q.type === "mc") {
          if (perm && r.choice !== null) choice = perm[r.choice] ?? null;
          correct = choice !== null && choice === q.answer;
        } else if (q.type === "numeric") {
          correct = gradeNumeric(r.text, q.answer, q.tolerance ?? 0.03);
        } else {
          correct = r.selfGrade === "correct";
        }
        return {
          id: q.id,
          topic: q.topic,
          difficulty: q.difficulty,
          kind: q.type,
          correct,
          ms: Math.round(spent.current[i] ?? 0),
          flagged: r.flagged,
          answered: isAnswered(q, r),
          choice,
          text: r.text.trim().slice(0, 700),
          selfGraded: q.type === "qna" ? r.selfGrade !== null : true,
        };
      });
      return {
        id: newId(),
        date: Date.now(),
        format: plan.format.id,
        stages,
        allottedMs,
        elapsedMs,
        expired: wasExpired,
        items: results,
      };
    },
    [allottedMs, items, perms, plan.format.id, stages]
  );

  const hasQna = useMemo(() => items.some((q) => q.type === "qna"), [items]);

  // Latest answers, read by the submit paths. A state updater must stay pure —
  // under StrictMode it is invoked twice — so the report is never built inside
  // one, and the ref is synced from an effect rather than during render.
  const responsesRef = useRef(responses);
  useEffect(() => {
    responsesRef.current = responses;
  }, [responses]);

  const emit = useCallback(
    (wasExpired: boolean) => {
      onFinish(
        buildReport(
          responsesRef.current,
          wasExpired,
          (finishedAt.current ?? Date.now()) - startedAt
        )
      );
    },
    [buildReport, onFinish, startedAt]
  );

  /** Stop the clock and move to grading (or straight to the report). */
  const closeSession = useCallback(
    (wasExpired: boolean) => {
      if (finishedAt.current !== null) return;
      commitTime(idx);
      finishedAt.current = Date.now();
      setExpired(wasExpired);
      setConfirmSubmit(false);
      setConfirmExit(false);
      if (hasQna) setPhase("grading");
      else emit(wasExpired);
    },
    [commitTime, emit, hasQna, idx]
  );

  // The interval only ever *reads* the deadline, so drift cannot accumulate;
  // it also re-derives immediately when a hidden tab comes back.
  const closeRef = useRef(closeSession);
  useEffect(() => {
    closeRef.current = closeSession;
  }, [closeSession]);
  useEffect(() => {
    if (phase !== "answering") return;
    const tick = () => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft((prev) => (prev === left ? prev : left));
      const crossed = THRESHOLDS.find((t) => left <= t && left > 0 && !spoken.current.has(t));
      if (crossed !== undefined) {
        THRESHOLDS.filter((t) => t >= crossed).forEach((t) => spoken.current.add(t));
        const message = thresholdMessage(crossed);
        setNotice(
          crossed < URGENT_BELOW ? { polite: "", urgent: message } : { polite: message, urgent: "" }
        );
      }
      if (left <= 0 && !autoSubmitted.current) {
        autoSubmitted.current = true;
        setNotice({ polite: "", urgent: "Time is up. Your interview has been submitted." });
        closeRef.current(true);
      }
    };
    tick();
    const id = setInterval(tick, 250);
    const onVisible = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [deadline, phase]);

  // Nothing is written until the interview closes, so a stray reload would
  // discard the whole attempt without asking.
  useEffect(() => {
    if (phase !== "answering") return;
    const guard = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [phase]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [phase]);

  // ---------- self-grading ----------
  if (phase === "grading") {
    return (
      <SelfGradeStep
        items={items}
        drafts={items.map((_, i) => responses[i]?.text ?? "")}
        grades={items.map((_, i) => responses[i]?.selfGrade ?? null)}
        expired={expired}
        headingRef={headingRef}
        onGrade={(i, grade) =>
          setResponses((rs) => rs.map((r, j) => (j === i ? { ...r, selfGrade: grade } : r)))
        }
        onDone={() => emit(expired)}
      />
    );
  }

  const safeIdx = Math.min(Math.max(idx, 0), items.length - 1);
  const q = items[safeIdx];
  const resp = responses[safeIdx] ?? EMPTY;
  const perm = perms[safeIdx] ?? null;

  if (!q) return null;

  const setResp = (patch: Partial<Response>) =>
    setResponses((rs) => rs.map((r, i) => (i === safeIdx ? { ...r, ...patch } : r)));

  const answeredCount = items.reduce(
    (n, item, i) => (isAnswered(item, responses[i] ?? EMPTY) ? n + 1 : n),
    0
  );
  const flaggedCount = responses.filter((r) => r.flagged).length;
  const blanks = items.length - answeredCount;
  const elapsedFraction = Math.min(1, Math.max(0, 1 - secondsLeft / (allottedMs / 1000)));

  const nextFlagged = () => {
    for (let step = 1; step <= items.length; step++) {
      const i = (safeIdx + step) % items.length;
      if (responses[i]?.flagged) {
        goTo(i);
        return;
      }
    }
  };

  const optionCount = q.type === "mc" && perm ? perm.length : 0;
  const letter = (i: number) => String.fromCharCode(65 + i);
  const rovingOption = resp.choice ?? 0;

  const moveOption = (from: number, delta: number) => {
    if (optionCount === 0) return;
    const to = (from + delta + optionCount) % optionCount;
    optionRefs.current[to]?.focus();
    setResp({ choice: to });
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
        optionRefs.current[0]?.focus();
        setResp({ choice: 0 });
        break;
      case "End":
        e.preventDefault();
        optionRefs.current[optionCount - 1]?.focus();
        setResp({ choice: optionCount - 1 });
        break;
      default:
        break;
    }
  };

  const onPaletteKeyDown = (e: KeyboardEvent, i: number) => {
    const last = items.length - 1;
    let to: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") to = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") to = i === 0 ? last : i - 1;
    else if (e.key === "Home") to = 0;
    else if (e.key === "End") to = last;
    if (to === null) return;
    e.preventDefault();
    paletteRefs.current[to]?.focus();
  };

  const toggleSign = () => {
    const t = resp.text.trim();
    setResp({ text: /^[-−]/.test(t) ? t.slice(1) : `-${t}` });
  };

  return (
    <div className="page-stack" data-interview-phase="answering">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs font-bold tracking-wide text-stone-500 uppercase">
            {plan.format.name} · in progress
          </div>
          <h1 ref={headingRef} tabIndex={-1} className="text-lg font-semibold">
            Question {safeIdx + 1} <span className="text-stone-500">of {items.length}</span>
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
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
            <span aria-hidden="true">{mmss(secondsLeft * 1000)}</span>
          </span>
          <button
            type="button"
            data-submit-interview
            onClick={() => {
              setConfirmExit(false);
              if (blanks > 0) setConfirmSubmit(true);
              else closeSession(false);
            }}
            className="btn btn-primary min-h-0 px-4 py-1.5"
          >
            Submit interview
          </button>
          <button
            type="button"
            onClick={() => {
              setConfirmSubmit(false);
              setConfirmExit(true);
            }}
            aria-expanded={confirmExit}
            className="btn btn-secondary min-h-0 px-4 py-1.5"
          >
            Abandon
          </button>
        </div>
      </div>

      {/* Pressure you can see without being shouted at. */}
      <div>
        <div
          className="h-1 w-full overflow-hidden rounded-full bg-stone-200"
          role="img"
          aria-label={`${Math.round(elapsedFraction * 100)} percent of the allotted time used`}
        >
          <div
            className={`h-full ${secondsLeft < URGENT_BELOW ? "bg-rose-600" : "bg-accent"}`}
            style={{ width: `${elapsedFraction * 100}%` }}
          />
        </div>
        <p className="meta-line mt-2 text-xs">
          <span>{answeredCount} answered</span>
          <span aria-hidden="true">·</span>
          <span>{blanks} left</span>
          {flaggedCount > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={nextFlagged}
                className="font-semibold text-accent-dark underline underline-offset-2"
              >
                {flaggedCount} flagged — go to next
              </button>
            </>
          )}
          <span aria-hidden="true">·</span>
          <span>No feedback until you submit.</span>
        </p>
      </div>

      {plan.note && (
        <p className="soft-callout text-sm text-stone-600">
          <span className="font-bold">Note. </span>
          {plan.note}
        </p>
      )}

      <div aria-live="polite" className="sr-only">
        {notice.polite}
      </div>
      <div aria-live="assertive" className="sr-only">
        {notice.urgent}
      </div>

      {confirmExit && (
        <div
          role="alertdialog"
          aria-label="Abandon this interview"
          className="soft-callout flex flex-wrap items-center justify-between gap-3 border-amber-300 bg-amber-50"
        >
          <p className="text-sm text-amber-900">
            <span className="font-bold">Abandon this interview?</span> Nothing is recorded
            until you submit, so all {answeredCount} answer{answeredCount === 1 ? "" : "s"} and
            the remaining time are discarded.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setConfirmExit(false)}
              className="btn btn-secondary min-h-0 px-4 py-1.5"
            >
              Keep going
            </button>
            <button
              type="button"
              onClick={onAbandon}
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
          className="soft-callout flex flex-wrap items-center justify-between gap-3"
        >
          <span className="text-sm">
            <span className="font-bold">
              {blanks} question{blanks === 1 ? "" : "s"} unanswered
            </span>{" "}
            — submit anyway? Blank answers are marked incorrect, exactly as they would be.
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
              onClick={() => closeSession(false)}
              className="btn btn-primary min-h-0 px-4 py-1.5"
            >
              Submit anyway
            </button>
          </div>
        </div>
      )}

      <nav aria-label="Question navigation" className="flex flex-wrap gap-1.5">
        {items.map((item, i) => {
          const r = responses[i] ?? EMPTY;
          const done = isAnswered(item, r);
          const current = i === safeIdx;
          return (
            <button
              type="button"
              key={item.id}
              ref={(el) => {
                paletteRefs.current[i] = el;
              }}
              onClick={() => goTo(i)}
              onKeyDown={(e) => onPaletteKeyDown(e, i)}
              tabIndex={current ? 0 : -1}
              aria-current={current ? "step" : undefined}
              aria-label={`Question ${i + 1} of ${items.length}, ${
                done ? "answered" : "not answered"
              }${r.flagged ? ", flagged" : ""}${current ? ", current question" : ""}`}
              className={`progress-dot relative ${r.flagged ? "border-2 border-amber-300" : ""} ${
                current
                  ? "bg-accent text-white"
                  : done
                    ? "bg-teal-100 text-accent-dark"
                    : "bg-stone-200 text-stone-500 hover:bg-stone-300"
              }`}
            >
              <span aria-hidden="true">{i + 1}</span>
              {r.flagged && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 text-[10px] leading-none text-amber-800"
                >
                  ⚑
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="question-panel">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-stone-100 px-2 py-0.5 font-semibold text-stone-600">
            {q.type === "qna" ? "Open-ended" : DIFF_LABEL[q.difficulty]}
          </span>
          <span className="text-stone-500">{getTopic(q.topic)?.short ?? q.topic}</span>
          <button
            type="button"
            data-flag-toggle
            onClick={() => setResp({ flagged: !resp.flagged })}
            aria-pressed={resp.flagged}
            className={`chip ml-auto ${resp.flagged ? "chip-on" : ""}`}
          >
            <span aria-hidden="true">⚑ </span>
            {resp.flagged ? "Flagged for review" : "Flag for review"}
          </button>
        </div>

        <div id={promptId}>
          <HtmlContent html={q.prompt} />
        </div>
        {q.type !== "qna" && q.figure && (
          <div className="qfig" dangerouslySetInnerHTML={{ __html: q.figure }} />
        )}

        {q.type === "mc" && perm ? (
          <div role="radiogroup" aria-labelledby={promptId} className="mt-4 space-y-2">
            {perm.map((orig, di) => {
              const picked = resp.choice === di;
              return (
                <button
                  type="button"
                  key={di}
                  ref={(el) => {
                    optionRefs.current[di] = el;
                  }}
                  role="radio"
                  aria-checked={picked}
                  tabIndex={di === rovingOption ? 0 : -1}
                  onClick={() => setResp({ choice: di })}
                  onKeyDown={(e) => onOptionKeyDown(e, di)}
                  className={`answer-option cursor-pointer ${picked ? "answer-option-selected" : ""}`}
                >
                  <span className="mr-2 font-semibold text-stone-500">{letter(di)}.</span>
                  <span className="inline-block align-middle [&>div]:inline">
                    <HtmlContent html={q.choices[orig] ?? ""} />
                  </span>
                  {picked && <span className="answer-option-note">selected</span>}
                </button>
              );
            })}
          </div>
        ) : q.type === "numeric" ? (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleSign}
              aria-label="Toggle negative sign"
              title="Toggle negative sign"
              className="btn btn-secondary min-h-0 px-3 py-1.5 font-mono"
            >
              ±
            </button>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              spellCheck={false}
              value={resp.text}
              aria-label={`Your answer${q.unit ? ` in ${q.unit}` : ""}`}
              onChange={(e) => setResp({ text: e.target.value })}
              placeholder="Your answer"
              className="text-field w-48"
            />
            {q.unit && <span className="text-sm text-stone-500">{q.unit}</span>}
          </div>
        ) : (
          <div className="mt-4 space-y-2">
            <textarea
              value={resp.text}
              aria-label="Your answer"
              onChange={(e) => setResp({ text: e.target.value })}
              placeholder="Answer as you would out loud: assumptions, the approach, the number, then the sanity check."
              className="textarea-field"
              rows={7}
            />
            <p className="muted text-xs">
              You will compare this against a model answer and grade yourself once the clock
              stops — not now.
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => goTo(safeIdx - 1)}
          disabled={safeIdx === 0}
          className="btn btn-secondary disabled:opacity-40"
        >
          ← Previous
        </button>
        {safeIdx === items.length - 1 ? (
          <button
            type="button"
            onClick={() => {
              setConfirmExit(false);
              if (blanks > 0) setConfirmSubmit(true);
              else closeSession(false);
            }}
            className="btn btn-primary"
          >
            Finish interview
          </button>
        ) : (
          <button type="button" onClick={() => goTo(safeIdx + 1)} className="btn btn-primary">
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
