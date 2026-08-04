"use client";

import { useEffect, useMemo, useState } from "react";
import { TOPICS, getTopic } from "@/content/topics";
import { ALL_QUESTIONS } from "@/content/index";
import type { Difficulty } from "@/content/types";
import { DIFF_LABEL, DIFF_COLOR } from "@/lib/quiz";
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
        All {ALL_QUESTIONS.length} questions with full worked solutions. Expand any card to study the answer.
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
        {filtered.slice(0, limit).map((q) => {
          const isOpen = open.has(q.id);
          return (
            <article key={q.id} className="question-panel interactive-card">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
                <span className={`rounded-full px-2 py-0.5 font-semibold ${DIFF_COLOR[q.difficulty]}`}>
                  {DIFF_LABEL[q.difficulty]}
                </span>
                <span className="status-pill">
                  {getTopic(q.topic)?.short ?? q.topic}
                </span>
                <span className="text-stone-400">{q.type === "mc" ? "multiple choice" : "numeric"}</span>
                <span className="ml-auto font-mono text-stone-400">{q.id}</span>
              </div>
              <HtmlContent html={q.prompt} />
              {q.figure && <div className="qfig" dangerouslySetInnerHTML={{ __html: q.figure }} />}
              {q.type === "mc" && (
                <ul className="mt-3 space-y-1.5 text-sm">
                  {q.choices.map((c, i) => (
                    <li
                      key={i}
                      className={`rounded-lg border px-3 py-1.5 ${
                        isOpen && i === q.answer
                          ? "border-emerald-400 bg-emerald-50"
                          : "border-stone-200 bg-white/50"
                      }`}
                    >
                      <span className="mr-2 font-semibold text-stone-500">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <span className="[&>div]:inline"><HtmlContent html={c} glossary={false} /></span>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => toggle(q.id)}
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
        })}
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
