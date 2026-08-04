"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { GLOSSARY, type GlossaryEntry } from "@/content/glossary";

/**
 * The glossary: every term a candidate can be asked to define cold, grouped
 * by subject, filterable by text. The same definitions power the hover boxes
 * on marked terms across lessons and questions.
 */

const GROUPS: GlossaryEntry["group"][] = [
  "Statics & loading",
  "Stress & strain",
  "Failure & fatigue",
  "Beams & structures",
  "Machine elements",
  "Joining & welds",
  "Dynamics & vibration",
  "Thermal & fluids",
  "Manufacturing & tolerancing",
];

function matches(e: GlossaryEntry, needle: string): boolean {
  if (!needle) return true;
  const hay = [e.term, ...(e.aliases ?? []), e.def.replace(/<[^>]+>/g, " ")]
    .join(" ")
    .toLowerCase();
  return needle
    .toLowerCase()
    .split(/\s+/)
    .every((w) => hay.includes(w));
}

export default function GlossaryClient() {
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim();
    return GROUPS.map((group) => ({
      group,
      entries: GLOSSARY.filter((e) => e.group === group && matches(e, q)).sort(
        (a, b) => a.term.localeCompare(b.term)
      ),
    })).filter((g) => g.entries.length > 0);
  }, [query]);

  const total = shown.reduce((n, g) => n + g.entries.length, 0);

  return (
    <div className="medium-page page-stack">
      <div>
        <Link href="/" className="text-sm font-semibold text-accent-dark hover:text-accent">
          ← Roadmap
        </Link>
        <h1 className="page-title mt-2">Glossary</h1>
        <p className="body-copy mt-2">
          The terms an interviewer expects you to define without warming up.
          Each definition is written the way a strong answer sounds out loud —
          and the same definitions appear as hover boxes wherever a{" "}
          <span className="term" tabIndex={0} data-term="moment">
            marked term
          </span>{" "}
          shows up in a lesson or question.
        </p>
      </div>

      <div className="panel flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter terms — try “weld”, “moment”, “fatigue”…"
          aria-label="Filter glossary terms"
          className="text-field max-w-md flex-1"
        />
        <span className="mono-meta" role="status">
          {total} term{total === 1 ? "" : "s"}
        </span>
      </div>

      {total === 0 && (
        <div className="panel p-8 text-center text-stone-500">
          No terms match “{query}”.
        </div>
      )}

      {shown.map(({ group, entries }, gi) => (
        <section key={group} aria-label={group}>
          <h2 className="annot mb-3">
            <span className="annot-num">{String(gi + 1).padStart(2, "0")}</span>
            {group}
          </h2>
          <div className="dense-grid">
            {entries.map((e) => (
              <article key={e.id} id={e.id} className="panel scroll-mt-24">
                <h3 className="flex flex-wrap items-baseline gap-x-2 text-[0.95rem] font-semibold text-stone-900">
                  {e.term}
                  {e.aliases && e.aliases.length > 0 && (
                    <span className="mono-meta font-normal normal-case">
                      also: {e.aliases.join(", ")}
                    </span>
                  )}
                </h3>
                <div
                  className="prose-eng mt-1.5 text-[0.92rem]"
                  dangerouslySetInnerHTML={{ __html: e.def }}
                />
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
