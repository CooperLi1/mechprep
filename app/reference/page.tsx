import type { Metadata } from "next";
import Link from "next/link";
import { CONTENT } from "@/content/index";
import { STAGES, TOPICS } from "@/content/topics";
import ReferenceControls from "./ReferenceClient";

/* ===========================================================================
   Formula reference sheet — the page a candidate crams from on the morning of
   an interview.

   This file is a SERVER COMPONENT on purpose. It imports the whole content
   library (which drags in all ~1,400 questions) but none of that reaches the
   browser: every equation is turned into plain HTML on the server, and the
   only thing marked "use client" is the ~4 kB filter toolbar, which receives
   nothing but topic/stage labels.

   Filtering is therefore done by toggling the `hidden` attribute on
   server-rendered nodes rather than by re-rendering 200+ rows in React. That
   keeps the equation HTML out of the client bundle *and* out of the RSC flight
   payload, and means the printed page is just the document as parsed.
   =========================================================================== */

export const metadata: Metadata = {
  title: "Formula reference — MechPrep",
  description:
    "Every equation from every MechPrep lesson on one filterable, printable page. Group by stage and topic, filter by text, and print a clean A4 cram sheet.",
};

/* ---------------------------------------------------------------------------
   HTML → searchable plain text.

   Content strings are HTML with named entities (&sigma;, &Delta;, &le;, …).
   Matching against the raw string is wrong (a search for "sub" would hit every
   subscript tag) and matching against the decoded string alone is also wrong —
   `&sigma;` decodes to "σ", which no one types. So the search index carries
   BOTH: the decoded text *and* the entity names that produced it, so "sigma",
   "σ" and "Δ" all find the same row.
   --------------------------------------------------------------------------- */
const ENTITY: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  minus: "−", ndash: "–", mdash: "—", times: "×",
  middot: "·", sdot: "⋅", divide: "÷", plusmn: "±",
  deg: "°", prime: "′", Prime: "″", frasl: "/",
  le: "≤", ge: "≥", ne: "≠", asymp: "≈", equiv: "≡",
  prop: "∝", infin: "∞", radic: "√", sum: "∑",
  int: "∫", part: "∂", nabla: "∇", ang: "∠",
  sup1: "¹", sup2: "²", sup3: "³",
  frac12: "½", frac14: "¼", frac34: "¾",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ",
  epsilon: "ε", zeta: "ζ", eta: "η", theta: "θ",
  iota: "ι", kappa: "κ", lambda: "λ", mu: "μ",
  nu: "ν", xi: "ξ", omicron: "ο", pi: "π", rho: "ρ",
  sigma: "σ", sigmaf: "ς", tau: "τ", upsilon: "υ",
  phi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ",
  Epsilon: "Ε", Theta: "Θ", Lambda: "Λ", Xi: "Ξ",
  Pi: "Π", Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω",
  rarr: "→", larr: "←", harr: "↔", uarr: "↑",
  darr: "↓", hellip: "…", bull: "•",
};

const ENTITY_RE = /&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g;

function decodeEntities(s: string): string {
  return s.replace(ENTITY_RE, (_m, ref: string) => {
    if (ref[0] === "#") {
      const cp =
        ref[1] === "x" || ref[1] === "X"
          ? parseInt(ref.slice(2), 16)
          : parseInt(ref.slice(1), 10);
      return Number.isFinite(cp) ? String.fromCodePoint(cp) : " ";
    }
    return ENTITY[ref] ?? ref;
  });
}

/** Strip tags, decode entities, collapse whitespace. */
function plain(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

/** The named entities used in a string, e.g. "sigma delta le". */
function entityWords(html: string): string {
  const seen = new Set<string>();
  for (const m of html.matchAll(ENTITY_RE)) {
    const ref = m[1];
    if (ref[0] !== "#" && ref.length > 1) seen.add(ref.toLowerCase());
  }
  return [...seen].join(" ");
}

/** Aggressive compaction, used only to locate an equation inside lesson prose. */
function compact(html: string): string {
  return plain(html).toLowerCase().replace(/[^a-z0-9]/g, "");
}

const STOP = new Set([
  "the", "a", "an", "of", "for", "and", "in", "to", "at", "on", "vs", "with",
  "from", "by", "is", "or", "its",
]);

function tokens(s: string): string[] {
  return plain(s)
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

/* ---------------------------------------------------------------------------
   "The lesson section it comes from".

   Equations are authored as a flat list on the lesson, not tagged with a
   section, so the section is recovered here: first by looking for the compacted
   formula verbatim in a section's prose (most equations are stated in the body
   before being tabulated), then by scoring the equation name against section
   headings. Anything that still doesn't resolve links to the lesson itself
   rather than guessing. The resolved heading is shown on the link so a wrong
   guess is visible rather than silent.
   --------------------------------------------------------------------------- */
function locateSection(
  formula: string,
  name: string,
  sections: { heading: string; html: string }[]
): number {
  const compacted = sections.map((s) => compact(s.html));
  const full = compact(formula);
  const lead = compact(formula.split(/,|;|&nbsp;&nbsp;/)[0] ?? "");
  for (const cand of [full, lead]) {
    if (cand.length < 5) continue;
    const i = compacted.findIndex((s) => s.includes(cand));
    if (i >= 0) return i;
  }
  const nameTokens = tokens(name);
  if (nameTokens.length === 0) return -1;
  let best = -1;
  let bestScore = 0;
  sections.forEach((s, i) => {
    const head = new Set(tokens(s.heading));
    const body = new Set(tokens(s.html));
    let score = 0;
    for (const w of nameTokens) score += head.has(w) ? 3 : body.has(w) ? 1 : 0;
    if (score > bestScore) {
      bestScore = score;
      best = i;
    }
  });
  return bestScore >= 3 ? best : -1;
}

/* ---------------------------------------------------------------------------
   The sheet, assembled once at module scope (build time for a static route).
   --------------------------------------------------------------------------- */
interface RefEquation {
  key: string;
  name: string;
  formula: string;
  note: string;
  /** lowercase haystack: decoded text + entity names */
  text: string;
  href: string;
  srcLabel: string;
  srcTitle: string;
}

interface RefTopicBlock {
  id: string;
  name: string;
  short: string;
  stage: number;
  lessonTitle: string;
  equations: RefEquation[];
}

interface RefStageBlock {
  num: number;
  name: string;
  desc: string;
  topics: RefTopicBlock[];
  count: number;
}

function buildSheet(): { stages: RefStageBlock[]; total: number } {
  const blocks: RefTopicBlock[] = TOPICS.map((t) => {
    const lesson = CONTENT[t.id]?.lesson;
    const sections = lesson?.sections ?? [];
    const equations = (lesson?.equations ?? []).map((eq, i) => {
      const note = eq.note ?? "";
      const idx = locateSection(eq.formula, eq.name, sections);
      const heading = idx >= 0 ? sections[idx].heading : null;
      return {
        key: `${t.id}-e${i}`,
        name: eq.name,
        formula: eq.formula,
        note,
        text: [
          plain(eq.name),
          plain(eq.formula),
          plain(note),
          entityWords(`${eq.name}${eq.formula}${note}`),
        ]
          .join(" ")
          .toLowerCase(),
        href: idx >= 0 ? `/learn/${t.id}#s${idx}` : `/learn/${t.id}`,
        srcLabel: heading ? `§${idx + 1} ${heading}` : "Lesson",
        srcTitle: heading
          ? `${lesson?.title ?? t.name} — section ${idx + 1}: ${heading}`
          : `Open the ${t.name} lesson`,
      };
    });
    return {
      id: t.id,
      name: t.name,
      short: t.short,
      stage: t.stage,
      lessonTitle: lesson?.title ?? t.name,
      equations,
    };
  }).filter((b) => b.equations.length > 0);

  const stages = STAGES.map((s) => {
    const topics = blocks.filter((b) => b.stage === s.num);
    return {
      num: s.num,
      name: s.name,
      desc: s.desc,
      topics,
      count: topics.reduce((n, b) => n + b.equations.length, 0),
    };
  }).filter((s) => s.topics.length > 0);

  return {
    stages,
    total: blocks.reduce((n, b) => n + b.equations.length, 0),
  };
}

const SHEET = buildSheet();

/* ---------------------------------------------------------------------------
   Styles.

   `app/globals.css` is single-owner, so everything specific to this route
   lives here. These rules are UNLAYERED, which means they outrank Tailwind's
   layered utilities — so this block deliberately uses its own `.ref-*` class
   names and does not restyle anything the rest of the app relies on.
   --------------------------------------------------------------------------- */
const STYLES = `
[hidden] { display: none !important; }

/* --ink-muted is a 3.5:1 grey on the light surface, which is fine for the
   captions it was designed for but not for the metadata this page sets at
   11–13px. A slightly darker derivative keeps the same hierarchy and clears
   4.5:1 in both themes. Derived from the tokens, not a new palette. */
:root {
  --ref-dim: color-mix(in srgb, var(--ink-soft) 86%, var(--surface));
}

.ref-print-only { display: none; }

.ref-toolbar { display: grid; gap: 0.75rem; }
.ref-controls { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
.ref-search { min-width: 12rem; flex: 1 1 16rem; }
.ref-select { flex: 0 1 auto; width: auto; }
.ref-status {
  display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.9rem;
  color: var(--ref-dim); font-size: 0.78rem; font-weight: 500;
  font-variant-numeric: tabular-nums;
}
.ref-status b { color: var(--ink); font-weight: 650; }

.ref-jump { display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; }
.ref-jump-label { color: var(--ref-dim); font-size: 0.75rem; font-weight: 600; }

.ref-stage { display: grid; gap: 0.75rem; scroll-margin-top: 5rem; }
.ref-stage + .ref-stage { margin-top: 1.75rem; }
.ref-stage-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.5rem 0.75rem; }
.ref-stage-num {
  display: grid; height: 1.5rem; width: 1.5rem; place-items: center;
  border-radius: var(--r-sm); background: var(--accent-soft); color: var(--accent-ink);
  font-size: 0.75rem; font-weight: 700;
}
.ref-stage-name { color: var(--ink); font-size: 1.02rem; font-weight: 680; letter-spacing: -0.015em; }
.ref-stage-desc { max-width: 62ch; color: var(--ref-dim); font-size: 0.8rem; line-height: 1.5; }

.ref-topic {
  border: 1px solid var(--line); border-radius: var(--r-lg);
  background: var(--surface); padding: clamp(0.85rem, 2vw, 1.15rem);
  scroll-margin-top: 5rem;
}
.ref-topic-head {
  display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.4rem 0.75rem;
  border-bottom: 1px solid var(--line); padding-bottom: 0.5rem;
}
.ref-topic-name { color: var(--ink); font-size: 0.98rem; font-weight: 660; letter-spacing: -0.015em; }
.ref-topic-count { color: var(--ref-dim); font-size: 0.74rem; font-variant-numeric: tabular-nums; }
.ref-topic-link { margin-left: auto; color: var(--accent); font-size: 0.78rem; font-weight: 600; }
.ref-topic-link:hover { color: var(--accent-hover); text-decoration: underline; }

.ref-eqs { columns: 34rem 2; column-gap: 2.25rem; }
.ref-row {
  break-inside: avoid; -webkit-column-break-inside: avoid; page-break-inside: avoid;
  padding-block: 0.7rem 0.9rem;
}
.ref-row + .ref-row { border-top: 1px dashed var(--line); }
.ref-row-top { display: flex; align-items: baseline; gap: 0.6rem; }
.ref-name { color: var(--ink); font-size: 0.85rem; font-weight: 650; line-height: 1.35; }
.ref-src {
  margin-left: auto; flex: 0 1 auto; min-width: 0; overflow: hidden;
  color: var(--ref-dim); font-size: 0.7rem; white-space: nowrap;
  text-overflow: ellipsis; font-variant-numeric: tabular-nums;
}
.ref-src:hover { color: var(--accent); }

/* Reuse the app's equation treatment (mono, rules above and below, centered)
   and only retune the rhythm for a dense list. */
.ref-eq { margin-block: 0.55rem; padding-block: 0.55rem; overflow-wrap: break-word; }
.ref-eq > p { margin: 0; }
.ref-eq > p + p { margin-top: 0.3rem; }

.ref-note { color: var(--ink-soft); font-size: 0.82rem; line-height: 1.55; }
.ref-note sub, .ref-note sup { font-size: 0.72em; }

#ref-sheet[data-density="compact"] .ref-topic { padding: 0.75rem 0.85rem; }
#ref-sheet[data-density="compact"] .ref-eqs { columns: 22rem 3; column-gap: 1.75rem; }
#ref-sheet[data-density="compact"] .ref-row { padding-block: 0.45rem 0.6rem; }
#ref-sheet[data-density="compact"] .ref-name { font-size: 0.79rem; }
#ref-sheet[data-density="compact"] .ref-eq {
  margin-block: 0.35rem; padding-block: 0.35rem; font-size: 0.88rem;
}
#ref-sheet[data-density="compact"] .ref-note { font-size: 0.75rem; line-height: 1.45; }
#ref-sheet[data-density="compact"] .ref-stage-desc { display: none; }

/* ---------------------------------------------------------------------------
   Print — this is the page people export to PDF the night before.
   --------------------------------------------------------------------------- */
@media print {
  @page { size: A4 portrait; margin: 12mm 10mm 14mm; }

  /* Black on white in BOTH themes: re-point the tokens rather than chasing
     every rule that consumes them. */
  :root, :root[data-theme="dark"], :root[data-theme="light"] {
    --bg: #ffffff; --surface: #ffffff; --surface-muted: #ffffff;
    --surface-sunken: #ffffff; --line: #c4c4c4; --line-strong: #8a8a8a;
    --ink: #000000; --ink-soft: #1a1a1a; --ink-muted: #4a4a4a;
    --accent: #000000; --accent-ink: #000000; --accent-soft: #ffffff;
    --shadow-pop: none;
  }
  html, body { background: #fff !important; color: #000 !important; }
  body::before { display: none !important; }

  /* Chrome and filter UI never print. */
  .app-header, .app-footer, .skip-link, .back-to-top,
  .reading-progress, .ref-noprint { display: none !important; }

  .app-main { padding: 0 !important; overflow: visible !important; }
  .app-container { width: 100% !important; max-width: none !important; margin: 0 !important; }
  .page-stack { gap: 0 !important; }

  .ref-print-only { display: block; }
  .ref-print-head {
    border-bottom: 1.2pt solid #000; padding-bottom: 4pt; margin-bottom: 8pt;
    font-size: 9pt; color: #000;
  }
  .ref-print-title { font-size: 12pt; font-weight: 700; }
  .ref-print-sub { color: #333; }

  .ref-stage { display: block; margin: 0; }
  .ref-stage + .ref-stage { margin-top: 8pt; }
  .ref-stage-head { break-after: avoid; page-break-after: avoid; margin-bottom: 2pt; }
  .ref-stage-num {
    height: auto; width: auto; background: none; color: #000;
    font-size: 9pt; display: inline;
  }
  .ref-stage-num::after { content: " ·"; }
  .ref-stage-name { font-size: 11pt; font-weight: 700; }
  .ref-stage-desc { display: none; }

  .ref-topic {
    border: 0; border-radius: 0; padding: 0; margin: 0 0 6pt;
    border-top: 0.8pt solid #000;
  }
  .ref-topic-head {
    break-after: avoid; page-break-after: avoid;
    border-bottom: 0; padding: 2pt 0 3pt;
  }
  .ref-topic-name { font-size: 9.5pt; font-weight: 700; }
  .ref-topic-count { font-size: 7.5pt; color: #444; }
  .ref-topic-link, .ref-src { display: none !important; }

  /* Two columns on A4 is the density a cram sheet wants; every equation keeps
     its name, formula and note in one unbreakable block. */
  /* column-fill stays at its default (balance) on purpose: a multicol box that
     spans pages fragments per page, so each printed page gets two balanced
     columns instead of one long column followed by an empty one. */
  .ref-eqs, #ref-sheet[data-density="compact"] .ref-eqs {
    columns: 2; column-gap: 7mm;
  }
  .ref-row, #ref-sheet[data-density="compact"] .ref-row {
    break-inside: avoid !important; page-break-inside: avoid !important;
    padding: 2.5pt 0 3.5pt;
  }
  .ref-row + .ref-row { border-top: 0.4pt dotted #999; }
  .ref-name, #ref-sheet[data-density="compact"] .ref-name { font-size: 8.5pt; font-weight: 700; }
  .ref-eq, #ref-sheet[data-density="compact"] .ref-eq {
    margin-block: 2pt; padding-block: 2pt; font-size: 9pt;
    border-color: #b0b0b0; color: #000;
  }
  .ref-note, #ref-sheet[data-density="compact"] .ref-note {
    font-size: 7.6pt; line-height: 1.35; color: #222;
  }

  a { color: #000 !important; text-decoration: none !important; }
}
`;

export default function ReferencePage() {
  const topicMeta = TOPICS.map((t) => ({
    id: t.id,
    short: t.short,
    stage: t.stage,
  }));
  const stageMeta = SHEET.stages.map((s) => ({ num: s.num, name: s.name }));

  return (
    <div className="page-stack" data-route="reference">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Printed sheets need to say what they are and what was filtered. */}
      <div className="ref-print-only ref-print-head">
        <div className="ref-print-title">MechPrep — Formula reference</div>
        <div className="ref-print-sub">
          <span id="ref-print-filter">All {SHEET.total} equations</span>
        </div>
      </div>

      <header className="ref-noprint">
        <h1 className="section-title">Formula reference</h1>
        <p className="body-copy mt-2 text-sm">
          Every equation from all {TOPICS.length} lessons — {SHEET.total} of
          them — grouped by stage and topic. Filter it down to what you are
          about to be asked, switch to compact, and print it.
        </p>
      </header>

      <ReferenceControls
        topics={topicMeta}
        stages={stageMeta}
        total={SHEET.total}
      />

      <div id="ref-sheet" data-density="comfortable">
        {SHEET.stages.map((stage) => (
          <section
            key={stage.num}
            id={`stage-${stage.num}`}
            className="ref-stage"
            data-stage-block={stage.num}
            aria-labelledby={`stage-${stage.num}-h`}
          >
            <div className="ref-stage-head">
              <span className="ref-stage-num" aria-hidden="true">
                {stage.num}
              </span>
              <h2 id={`stage-${stage.num}-h`} className="ref-stage-name">
                {stage.name}
              </h2>
              <p className="ref-stage-desc">{stage.desc}</p>
            </div>

            {stage.topics.map((topic) => (
              <article
                key={topic.id}
                id={`topic-${topic.id}`}
                className="ref-topic"
                data-topic-block={topic.id}
                data-stage={topic.stage}
              >
                <div className="ref-topic-head">
                  <h3 className="ref-topic-name">{topic.name}</h3>
                  <span className="ref-topic-count" data-topic-count>
                    {topic.equations.length} equations
                  </span>
                  <Link href={`/learn/${topic.id}`} className="ref-topic-link">
                    Open lesson →
                  </Link>
                </div>

                <div className="ref-eqs">
                  {topic.equations.map((eq) => (
                    <div
                      key={eq.key}
                      className="ref-row"
                      data-eq
                      data-text={eq.text}
                    >
                      <div className="ref-row-top">
                        <span className="ref-name">{eq.name}</span>
                        <Link
                          href={eq.href}
                          className="ref-src"
                          title={eq.srcTitle}
                        >
                          {eq.srcLabel}
                        </Link>
                      </div>
                      <div
                        className="eq ref-eq"
                        dangerouslySetInnerHTML={{ __html: eq.formula }}
                      />
                      {eq.note && (
                        <p
                          className="ref-note"
                          dangerouslySetInnerHTML={{ __html: eq.note }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>

      <p id="ref-empty" className="soft-callout ref-noprint text-sm" hidden>
        No equation matches those filters. Clear the text filter, or widen the
        stage and topic selection.
      </p>
    </div>
  );
}
