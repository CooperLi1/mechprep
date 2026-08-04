"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { TOPICS, getTopic } from "@/content/topics";
import { ALL_QUESTIONS } from "@/content/index";
import type { Difficulty } from "@/content/types";
import {
  DIFF_LABEL,
  DIFF_COLOR,
  diagnoseNumeric,
  gradeNumeric,
  type BankQuestion,
} from "@/lib/quiz";
import HtmlContent from "@/components/HtmlContent";

const PAGE_SIZE = 20;

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, " ").toLowerCase();
}

/**
 * `?q=<question-id>` isolates a single question and opens its solution. The
 * command palette links here for every question result; without this it had to
 * drive this component's search field through the DOM to approximate the same
 * thing.
 *
 * Read in an effect rather than via `useSearchParams`, which would force this
 * whole page behind a Suspense boundary and drop its prerendered content.
 */
function useDeepLinkedId(): string | null {
  const [id, setId] = useState<string | null>(null);
  useEffect(() => {
    const read = () =>
      setId(new URLSearchParams(window.location.search).get("q"));
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);
  return id;
}

export default function BankPage() {
  const [topic, setTopic] = useState("all");
  const [diff, setDiff] = useState<"all" | Difficulty>("all");
  const [type, setType] = useState<"all" | "mc" | "numeric">("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [limit, setLimit] = useState(PAGE_SIZE);

  const deepLinkedId = useDeepLinkedId();
  // Expand the linked question automatically — arriving from a search result
  // and then having to click to see the answer is a wasted step.
  useEffect(() => {
    if (deepLinkedId) setOpen((prev) => new Set(prev).add(deepLinkedId));
  }, [deepLinkedId]);

  const filtered = useMemo(() => {
    // A deep link wins over the filters: the user asked for one exact question.
    if (deepLinkedId) {
      const hit = ALL_QUESTIONS.filter((q) => q.id === deepLinkedId);
      if (hit.length > 0) return hit;
    }
    const s = search.trim().toLowerCase();
    return ALL_QUESTIONS.filter((q) => {
      if (topic !== "all" && q.topic !== topic) return false;
      if (diff !== "all" && q.difficulty !== diff) return false;
      if (type !== "all" && q.type !== type) return false;
      if (s && !stripHtml(q.prompt).includes(s) && !stripHtml(q.explanation).includes(s))
        return false;
      return true;
    });
  }, [topic, diff, type, search, deepLinkedId]);

  const toggle = (id: string) =>
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="medium-page page-stack" data-route="bank">
      <div>
        <h1 className="section-title">Question bank</h1>
        <p className="body-copy mt-2 text-sm">
        All {ALL_QUESTIONS.length} questions with full worked solutions. Answer any card right
        here — pick a choice or type a number — or open the solution to study it directly.
        </p>
      </div>

      <div className="panel">
        <div className="flex flex-wrap gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setLimit(PAGE_SIZE); }}
          placeholder="Search prompts and solutions…"
          aria-label="Search prompts and solutions"
          className="field min-w-56 flex-1"
        />
        <select
          value={topic}
          onChange={(e) => { setTopic(e.target.value); setLimit(PAGE_SIZE); }}
          aria-label="Filter by topic"
          className="select-field w-auto"
        >
          <option value="all">All topics</option>
          {TOPICS.map((t) => (
            <option key={t.id} value={t.id}>{t.short}</option>
          ))}
        </select>
        <select
          value={diff}
          onChange={(e) => {
            setDiff(e.target.value === "all" ? "all" : (Number(e.target.value) as Difficulty));
            setLimit(PAGE_SIZE);
          }}
          aria-label="Filter by difficulty"
          className="select-field w-auto"
        >
          <option value="all">Any difficulty</option>
          <option value={1}>{DIFF_LABEL[1]}</option>
          <option value={2}>{DIFF_LABEL[2]}</option>
          <option value={3}>{DIFF_LABEL[3]}</option>
        </select>
        <select
          value={type}
          onChange={(e) => { setType(e.target.value as "all" | "mc" | "numeric"); setLimit(PAGE_SIZE); }}
          aria-label="Filter by question type"
          className="select-field w-auto"
        >
          <option value="all">Any type</option>
          <option value="mc">Multiple choice</option>
          <option value="numeric">Numeric</option>
        </select>
        </div>
        {/* Live: changing a filter used to update this count silently. */}
        <div role="status" data-result-count className="mt-3 text-xs font-semibold text-stone-600">
          {filtered.length} matching question{filtered.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.slice(0, limit).map((q) => (
          <BankCard
            key={q.id}
            q={q}
            isOpen={open.has(q.id)}
            onToggle={() => toggle(q.id)}
            onAnswered={() => setOpen((cur) => new Set(cur).add(q.id))}
          />
        ))}
      </div>

      {filtered.length > limit && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setLimit((l) => l + PAGE_SIZE)}
            className="btn btn-secondary"
          >
            Show more ({filtered.length - limit} remaining)
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * One answerable bank card. Choices grade on click and a numeric field grades
 * on Check/Enter — same feedback as the quiz runner (correct/incorrect states,
 * per-choice whyWrong notes, numeric diagnosis) — and answering opens the
 * worked solution. Nothing here records progress: the bank is a browsing
 * surface, so answers are throwaway by design.
 *
 * MC choices render in stored order (no shuffle): this page also serves
 * study-with-solution-open, where a stable order matters more than quiz
 * hygiene, and the bank's answer keys are already spread across indices.
 */
function BankCard({
  q,
  isOpen,
  onToggle,
  onAnswered,
}: {
  q: BankQuestion;
  isOpen: boolean;
  onToggle: () => void;
  onAnswered: () => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  const correct =
    checked &&
    (q.type === "mc"
      ? choice === q.answer
      : gradeNumeric(text, q.answer, q.tolerance ?? 0.03));
  const numericHint =
    checked && !correct && q.type === "numeric"
      ? diagnoseNumeric(text, q.answer, q.tolerance ?? 0.03)
      : null;

  const pick = (i: number) => {
    if (checked) return;
    setChoice(i);
    setChecked(true);
    onAnswered();
  };

  const checkNumeric = (e: FormEvent) => {
    e.preventDefault();
    if (checked || text.trim() === "") return;
    setChecked(true);
    onAnswered();
  };

  return (
    <article className="question-panel interactive-card">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
        <span className={`rounded-full px-2 py-0.5 font-semibold ${DIFF_COLOR[q.difficulty]}`}>
          {DIFF_LABEL[q.difficulty]}
        </span>
        <span className="status-pill">{getTopic(q.topic)?.short ?? q.topic}</span>
        <span className="text-stone-400">{q.type === "mc" ? "multiple choice" : "numeric"}</span>
        <span className="ml-auto font-mono text-stone-400">{q.id}</span>
      </div>
      <HtmlContent html={q.prompt} />
      {q.figure && <div className="qfig" dangerouslySetInnerHTML={{ __html: q.figure }} />}

      {q.type === "mc" ? (
        <ul className="mt-3 space-y-1.5 text-sm">
          {q.choices.map((c, i) => {
            const isAns = i === q.answer;
            const isPick = i === choice;
            // Answered: grade the pick. Unanswered with the solution open:
            // highlight the key (the pre-existing study behaviour).
            let cls = "";
            if (checked && isAns) cls = "answer-option-correct";
            else if (checked && isPick) cls = "answer-option-incorrect";
            else if (!checked && isOpen && isAns) cls = "answer-option-correct";
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-disabled={checked || undefined}
                  className={`answer-option ${cls} ${checked ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span className="mr-2 font-semibold text-stone-500">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="inline-block align-middle [&>div]:inline">
                    <HtmlContent html={c} glossary={false} />
                  </span>
                  {checked && isPick && !isAns && (
                    <span className="answer-option-note">your pick</span>
                  )}
                  {checked && isAns && (
                    <span className="answer-option-note">
                      {isPick ? "correct — your pick" : "correct answer"}
                    </span>
                  )}
                  {checked && isPick && !isAns && q.whyWrong?.[i]?.trim() && (
                    <span className="mt-1 block text-xs font-normal" data-why-wrong>
                      <span className="font-semibold">Why this is wrong: </span>
                      <HtmlContent html={q.whyWrong[i] ?? ""} className="inline-content" />
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <form onSubmit={checkNumeric} className="mt-3 flex flex-wrap items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            value={text}
            readOnly={checked}
            aria-label="Your answer"
            onChange={(e) => setText(e.target.value)}
            placeholder="Your answer"
            className="text-field w-44 tabular-nums"
          />
          {q.unit && <span className="text-sm text-stone-600">{q.unit}</span>}
          {!checked && (
            <button type="submit" className="btn btn-primary min-h-0 px-4 py-1.5">
              Check
            </button>
          )}
        </form>
      )}

      {checked && (
        <div
          role="status"
          data-verdict={correct ? "correct" : "incorrect"}
          className={`quiz-verdict mt-3 ${correct ? "quiz-verdict-correct" : "quiz-verdict-incorrect"}`}
        >
          <span>
            <span aria-hidden="true">{correct ? "✓ " : "✕ "}</span>
            {correct ? "Correct" : "Incorrect"}
            {q.type === "numeric" && (
              <> — expected {q.answer}{q.unit ? ` ${q.unit}` : ""}</>
            )}
          </span>
          {numericHint && (
            <div className="basis-full text-sm font-normal" data-numeric-hint>
              <span className="font-semibold">Where you likely went wrong: </span>
              {numericHint}
            </div>
          )}
        </div>
      )}

      <button
        onClick={onToggle}
        className="mt-4 text-sm font-bold text-accent-dark hover:text-accent"
        aria-expanded={isOpen}
      >
        {isOpen ? "Hide solution ↑" : "Show solution ↓"}
      </button>
      {isOpen && (
        <div className="solution-box mt-3">
          {q.type === "numeric" && (
            <div className="mb-2 text-sm">
              Answer:{" "}
              <span className="font-bold">
                {q.answer} {q.unit ?? ""}
              </span>
            </div>
          )}
          <HtmlContent html={q.explanation} className="text-sm" />
        </div>
      )}
    </article>
  );
}
