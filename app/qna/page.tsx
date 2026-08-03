"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { TOPICS, getTopic } from "@/content/topics";
import { ALL_QNA } from "@/content/index";
import HtmlContent from "@/components/HtmlContent";

function QnAList() {
  const params = useSearchParams();
  const initial = params.get("topic") ?? "all";
  const [topic, setTopic] = useState(initial);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return ALL_QNA.filter((item) => {
      if (topic !== "all" && item.topic !== topic) return false;
      if (s && !item.q.toLowerCase().includes(s) && !item.a.toLowerCase().includes(s)) return false;
      return true;
    });
  }, [topic, search]);

  const toggle = (id: string) =>
    setOpen((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="medium-page page-stack" data-route="qna">
      <div>
        <h1 className="section-title">Interview Q&amp;A</h1>
        <p className="body-copy mt-2 text-sm">
        Open-ended questions the way interviewers actually ask them. Answer out loud, then reveal
        the model answer and grade yourself honestly.
        </p>
      </div>

      <div className="panel flex flex-wrap gap-2">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search…"
          aria-label="Search interview questions and answers"
          className="field min-w-56 flex-1"
        />
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label="Filter by topic"
          className="select-field w-auto"
        >
          <option value="all">All topics ({ALL_QNA.length})</option>
          {TOPICS.map((t) => (
            <option key={t.id} value={t.id}>{t.short}</option>
          ))}
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => setOpen(new Set(filtered.map((f) => f.id)))}
            className="btn btn-secondary min-h-0 px-3 py-2 text-xs"
          >
            Reveal all
          </button>
          <button
            onClick={() => setOpen(new Set())}
            className="btn btn-secondary min-h-0 px-3 py-2 text-xs"
          >
            Hide all
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((item) => {
          const isOpen = open.has(item.id);
          return (
            <article key={item.id} className="question-panel interactive-card p-0">
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="mb-1 block text-xs font-bold text-stone-500">
                    {getTopic(item.topic)?.short ?? item.topic}
                  </span>
                  <HtmlContent html={item.q} className="font-medium" />
                </div>
                <span className="mt-1 shrink-0 text-stone-500">{isOpen ? "↑" : "↓"}</span>
              </button>
              {isOpen && (
                <div className="border-t border-stone-200 bg-stone-100/55 px-5 py-4">
                  <HtmlContent html={item.a} className="text-sm" />
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="panel p-8 text-center text-stone-500">
            No questions match.
          </div>
        )}
      </div>
    </div>
  );
}

export default function QnAPage() {
  return (
    <Suspense>
      <QnAList />
    </Suspense>
  );
}
