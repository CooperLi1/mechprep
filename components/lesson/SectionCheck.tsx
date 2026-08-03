"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import type { Question } from "@/content/types";
import { DIFF_COLOR, DIFF_LABEL, gradeNumeric } from "@/lib/quiz";
import HtmlContent from "@/components/HtmlContent";

/**
 * One inline "check your understanding" for one lesson section.
 *
 * Deliberately much smaller than `QuizRunner`: a single question, no
 * navigation, no timer, no session lifecycle. Collapsed by default so a reader
 * who wants to keep reading is never blocked by it, and it never collapses
 * itself once answered — the worked explanation stays on the page.
 *
 * MC choices are shown in their stored order. `QuizRunner` shuffles, but this
 * component renders on the server first: any shuffle would differ between the
 * server render and hydration and produce a mismatch. The bank already spreads
 * its answer keys across the four indices, so a fixed order is honest here.
 */
/** Same reading-measure cap as the lesson body: prose narrows, figures do not. */
const MEASURE = "[&>p]:max-w-[68ch] [&>ul]:max-w-[68ch] [&>ol]:max-w-[68ch]";

export default function SectionCheck({
  question,
  sectionNumber,
  anchorId,
  practiceHref,
  onAnswered,
}: {
  question: Question;
  sectionNumber: number;
  anchorId: string;
  practiceHref: string;
  onAnswered: (questionId: string, correct: boolean) => void;
}) {
  const panelId = useId();
  const buttonId = useId();
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [blank, setBlank] = useState(false);
  const verdictRef = useRef<HTMLParagraphElement>(null);

  const answered = result !== null;

  function settle(correct: boolean) {
    setResult(correct);
    onAnswered(question.id, correct);
    // Move attention to the verdict; it carries the explanation below it.
    // A timer, not `requestAnimationFrame`, which is paused in a hidden tab.
    setTimeout(() => verdictRef.current?.focus(), 0);
  }

  function pick(index: number) {
    if (answered) return;
    setChoice(index);
    settle(index === (question.type === "mc" ? question.answer : -1));
  }

  function checkNumeric(event: React.FormEvent) {
    event.preventDefault();
    if (answered || question.type !== "numeric") return;
    if (text.trim() === "") {
      setBlank(true);
      return;
    }
    setBlank(false);
    settle(gradeNumeric(text, question.answer, question.tolerance ?? 0.03));
  }

  return (
    <div
      id={anchorId}
      className="mt-6 rounded-[var(--r-lg)] border border-[var(--line)] bg-[var(--surface-muted)]"
      data-check-state={answered ? (result ? "correct" : "incorrect") : "unanswered"}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-3 rounded-[var(--r-lg)] px-4 py-3 text-left"
        >
          <span
            aria-hidden="true"
            className="inline-block w-3 shrink-0 text-center text-[0.7rem] text-[var(--ink-muted)]"
          >
            {open ? "▾" : "▸"}
          </span>
          <span className="min-w-0 flex-1 text-[0.85rem] font-semibold text-[var(--ink)]">
            Check your understanding
            <span className="ml-2 font-normal text-[var(--ink-muted)]">
              · section {sectionNumber}
            </span>
          </span>
          {answered ? (
            <span
              className={`shrink-0 rounded-[var(--r-pill)] px-2 py-0.5 text-[0.7rem] font-bold ${
                result
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-rose-100 text-rose-800"
              }`}
            >
              {result ? "✓ Correct" : "✕ Missed"}
            </span>
          ) : (
            <span
              className={`shrink-0 rounded-[var(--r-pill)] px-2 py-0.5 text-[0.7rem] font-semibold ${
                DIFF_COLOR[question.difficulty]
              }`}
            >
              {DIFF_LABEL[question.difficulty]}
            </span>
          )}
        </button>
      </h3>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-[var(--line)] px-4 py-4"
        >
          <HtmlContent html={question.prompt} className={`text-[0.92rem] ${MEASURE}`} />

          {question.figure && (
            <figure className="qfig" dangerouslySetInnerHTML={{ __html: question.figure }} />
          )}

          {question.type === "mc" ? (
            <ul className="mt-3 grid gap-2">
              {question.choices.map((c, i) => {
                const isAnswer = i === question.answer;
                const isPick = i === choice;
                let state = "";
                if (answered && isAnswer) state = "answer-option-correct";
                else if (answered && isPick) state = "answer-option-incorrect";
                else if (isPick) state = "answer-option-selected";
                return (
                  <li key={i}>
                    <button
                      type="button"
                      className={`answer-option ${state}`}
                      aria-disabled={answered || undefined}
                      onClick={() => pick(i)}
                    >
                      <HtmlContent html={c} className="inline [&_p]:m-0 [&_p]:inline" />
                      {answered && isAnswer && (
                        <span className="answer-option-note">correct answer</span>
                      )}
                      {answered && isPick && !isAnswer && (
                        <span className="answer-option-note">your pick</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <form onSubmit={checkNumeric} className="mt-3 flex flex-wrap items-end gap-2">
              <div className="min-w-0 flex-1">
                <label
                  htmlFor={inputId}
                  className="mb-1 block text-[0.75rem] font-semibold text-[var(--ink-soft)]"
                >
                  Your answer{question.unit ? ` (${question.unit})` : ""}
                </label>
                <input
                  id={inputId}
                  className="text-field tabular-nums"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  value={text}
                  readOnly={answered}
                  aria-describedby={blank ? `${inputId}-err` : undefined}
                  onChange={(e) => {
                    setText(e.target.value);
                    setBlank(false);
                  }}
                  placeholder={question.unit ? `number in ${question.unit}` : "number"}
                />
              </div>
              {!answered && (
                <button type="submit" className="btn btn-primary">
                  Check
                </button>
              )}
            </form>
          )}

          {blank && (
            <p id={`${inputId}-err`} role="alert" className="mt-2 text-[0.8rem] text-rose-700">
              Enter a number first.
            </p>
          )}

          {answered && (
            <div className="mt-4">
              <p
                ref={verdictRef}
                tabIndex={-1}
                role="status"
                className={`quiz-verdict ${
                  result ? "quiz-verdict-correct" : "quiz-verdict-incorrect"
                }`}
              >
                <span aria-hidden="true">{result ? "✓" : "✕"}</span>
                {result ? "Correct." : "Not quite."}
                {question.type === "numeric" && (
                  <span className="font-normal tabular-nums">
                    Answer: {question.answer}
                    {question.unit ? ` ${question.unit}` : ""}
                  </span>
                )}
              </p>
              <HtmlContent
                html={question.explanation}
                className={`mt-3 text-[0.92rem] ${MEASURE}`}
              />
              <p className="mt-3 text-[0.8rem]">
                <Link
                  href={practiceHref}
                  className="font-semibold text-accent-dark hover:text-accent"
                >
                  Drill more questions like this →
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
