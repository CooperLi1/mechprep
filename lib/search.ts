/**
 * Global search index for the ⌘K command palette.
 *
 * Design notes that matter:
 *
 * 1. **The index is built exactly once, at module scope.** Every content string
 *    in this app is HTML (`&sigma;`, `<sub>y</sub>`, `<tspan>`), so matching on
 *    it raw is both wrong and slow. `/bank` strips tags inside its `useMemo`,
 *    which the code audit measured at 6.9 ms *per keystroke* over 1,371
 *    questions. Here the expensive part — strip tags, decode entities, fold to
 *    a normalised haystack — happens once when the module first evaluates, and
 *    a keystroke is reduced to `String.indexOf` over ~2k short strings.
 *
 * 2. **Nothing is copied.** An index entry holds a *reference* into the already
 *    imported corpus (or an index into it) plus the normalised strings needed
 *    to match. Display text (titles, snippets) is derived lazily for the ~24
 *    rows that actually get rendered, so the bank is not duplicated in memory
 *    and the route's JS payload is unchanged — this module imports exactly the
 *    modules `/` and `/bank` already import.
 *
 * 3. **Ranking is explicit, not fuzzy-by-default.** Prefix and word-boundary
 *    hits beat substrings, titles beat bodies, topics/lessons beat question
 *    bodies, and shorter items win ties. A subsequence ("fuzzy") pass exists
 *    but is restricted to the ~400 short, high-signal entries (actions, topics,
 *    lesson headings, equations) where it helps and cannot flood the list.
 */

import { ALL_QNA, ALL_QUESTIONS, CONTENT } from "@/content/index";
import { TOPICS } from "@/content/topics";
import type { Topic } from "@/content/types";
import type { BankQuestion } from "@/lib/quiz";

/* -------------------------------------------------------------------------- */
/* HTML → text                                                                */
/* -------------------------------------------------------------------------- */

/** Entities that actually occur in this corpus, plus the usual suspects. */
const NAMED_ENTITIES: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", shy: "",
  hellip: "…", mdash: "—", ndash: "–", lsquo: "‘", rsquo: "’", ldquo: "“",
  rdquo: "”", middot: "·", bull: "•", deg: "°", prime: "′", Prime: "″",
  times: "×", divide: "÷", minus: "−", plusmn: "±", frac12: "½", frac14: "¼",
  frac34: "¾", sup2: "²", sup3: "³", sup1: "¹", le: "≤", ge: "≥", ne: "≠",
  asymp: "≈", equiv: "≡", sim: "∼", prop: "∝", radic: "√", infin: "∞",
  sum: "∑", prod: "∏", int: "∫", part: "∂", nabla: "∇", ang: "∠", perp: "⊥",
  there4: "∴", cong: "≅", isin: "∈", cap: "∩", cup: "∪", larr: "←",
  rarr: "→", uarr: "↑", darr: "↓", harr: "↔", lArr: "⇐", rArr: "⇒",
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ",
  eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν",
  xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigmaf: "ς", sigma: "σ",
  tau: "τ", upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  Alpha: "Α", Beta: "Β", Gamma: "Γ", Delta: "Δ", Epsilon: "Ε", Zeta: "Ζ",
  Eta: "Η", Theta: "Θ", Lambda: "Λ", Mu: "Μ", Nu: "Ν", Xi: "Ξ", Pi: "Π",
  Rho: "Ρ", Sigma: "Σ", Tau: "Τ", Phi: "Φ", Chi: "Χ", Psi: "Ψ", Omega: "Ω",
};

/** Tags whose removal must NOT insert a space: `&sigma;<sub>y</sub>` is "σy". */
const INLINE_TAG =
  /^(?:sub|sup|b|i|em|strong|span|tspan|code|var|small|u|abbr|a|mark|kbd)$/i;

const TAG = /<\/?([a-zA-Z][a-zA-Z0-9-]*)\b[^>]*>|<!--[\s\S]*?-->|<[^>]*>/g;
const ENTITY = /&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]{1,31});/g;

function decodeEntities(s: string): string {
  if (s.indexOf("&") === -1) return s;
  return s.replace(ENTITY, (m, body: string) => {
    if (body.charCodeAt(0) === 35 /* # */) {
      const code =
        body.charCodeAt(1) === 120 /* x */
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff
        ? String.fromCodePoint(code)
        : m;
    }
    return NAMED_ENTITIES[body] ?? m;
  });
}

/**
 * HTML string → readable plain text. Tags go first so a decoded `&lt;b&gt;`
 * is never mistaken for markup afterwards.
 */
export function plainText(html: string): string {
  if (!html) return "";
  const stripped = html.replace(TAG, (_m, name?: string) =>
    name && INLINE_TAG.test(name) ? "" : " "
  );
  return decodeEntities(stripped).replace(/\s+/g, " ").trim();
}

/** The inline subset that is safe (and useful) to render in a result row. */
const KEEP_INLINE = /^(?:sub|sup|i|b|em|strong)$/i;

/**
 * Equation formulas are the one place where the markup carries meaning —
 * `I = &pi;d<sup>4</sup>/64` must not render as "I = πd4/64". Keep only the
 * handful of tags that typeset the formula (attributes dropped), drop the rest,
 * and leave entities for the browser to decode. Precomputed once per equation,
 * never per keystroke.
 */
export function inlineHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(TAG, (m: string, name?: string) => {
      if (!name) return " ";
      if (KEEP_INLINE.test(name)) return m.replace(/\s[^>]*(?=>)/, "");
      return INLINE_TAG.test(name) ? "" : " ";
    })
    .replace(/[ \t]+/g, " ")
    .trim();
}

/* -------------------------------------------------------------------------- */
/* Normalisation                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Greek letters are folded to their ASCII names *in addition to* the glyph, so
 * typing "sigma" finds `&sigma;` and typing "poisson" still finds "Poisson".
 */
const GREEK_NAME: Record<string, string> = {
  α: "alpha", β: "beta", γ: "gamma", δ: "delta", ε: "epsilon", ζ: "zeta",
  η: "eta", θ: "theta", ι: "iota", κ: "kappa", λ: "lambda", μ: "mu",
  ν: "nu", ξ: "xi", ο: "omicron", π: "pi", ρ: "rho", ς: "sigma", σ: "sigma",
  τ: "tau", υ: "upsilon", φ: "phi", χ: "chi", ψ: "psi", ω: "omega",
  µ: "mu", "Ω": "omega", "∆": "delta",
};

const NON_WORD = /[^\p{L}\p{N}]+/gu;
const COMBINING = /\p{M}+/gu;

/**
 * Fold text to a space-delimited, lowercase, accent-free token string. The
 * result is padded with a leading and trailing space so a word-boundary test
 * is `indexOf(" " + term)` — no per-entry regex at query time.
 */
function normalize(text: string): string {
  if (!text) return " ";
  let s = text.toLowerCase().normalize("NFD").replace(COMBINING, "");
  if (/[Ͱ-Ͽµ∆Ω]/.test(s)) {
    s = s.replace(/[Ͱ-Ͽµ∆Ω]/g, (c) => {
      const name = GREEK_NAME[c];
      return name ? ` ${c} ${name} ` : " ";
    });
  }
  return ` ${s.replace(NON_WORD, " ").trim()} `;
}

/** Normalise a raw HTML content string in one pass. */
function normalizeHtml(html: string): string {
  return normalize(plainText(html));
}

const PUNCT = /[^\p{L}\p{N} ]+/gu;

/**
 * A second, punctuation-collapsed reading of a title: "GD&T: Geometric
 * Dimensioning" also indexes as "gdt geometric dimensioning", and "S-N curves"
 * as "sn curves". Without it, nobody typing the abbreviation the way it is
 * spoken ("gdt", "sn", "vm") finds the thing they are looking for.
 */
function normalizeTight(text: string): string {
  const tight = normalize(text.toLowerCase().normalize("NFD").replace(COMBINING, "").replace(PUNCT, ""));
  return tight;
}

/* -------------------------------------------------------------------------- */
/* Index                                                                      */
/* -------------------------------------------------------------------------- */

export type ResultKind =
  | "action"
  | "topic"
  | "lesson"
  | "equation"
  | "question"
  | "qna";

export const KIND_LABEL: Record<ResultKind, string> = {
  action: "Actions",
  topic: "Topics",
  lesson: "Lesson sections",
  equation: "Equations",
  question: "Questions",
  qna: "Interview Q&A",
};

export type PaletteCommand = "toggle-theme";

interface ActionDef {
  title: string;
  sub: string;
  href?: string;
  command?: PaletteCommand;
  /** Extra words folded into the haystack so synonyms find the action. */
  keywords?: string;
}

type Ref =
  | { k: "action"; def: ActionDef }
  | { k: "topic"; topic: Topic }
  | { k: "lesson"; topic: Topic; i: number }
  | { k: "equation"; topic: Topic; i: number }
  | { k: "question"; q: BankQuestion }
  | { k: "qna"; i: number };

interface Entry {
  kind: ResultKind;
  /** normalised title, space-padded */
  tn: string;
  /** normalised own body text, space-padded ("" when there is none) */
  bn: string;
  /** normalised contextual keywords (topic labels), space-padded */
  kn: string;
  /**
   * Bitset of the character classes present anywhere in this entry: a–z map to
   * bits 0–25, digits to bit 26, everything else (Greek glyphs) to bit 27. A
   * term whose bits are not all present cannot possibly match, so one integer
   * AND replaces three `indexOf` scans over ~600 characters. This is what keeps
   * a keystroke in single-digit milliseconds over the whole corpus.
   */
  mask: number;
  /** plain-text title length, used as the tie-break */
  len: number;
  /** true for the small, high-signal set that the fuzzy pass is allowed to use */
  fuzzy: boolean;
  ref: Ref;
}

const DIGIT_BIT = 1 << 26;
const OTHER_BIT = 1 << 27;

function charMask(text: string): number {
  let mask = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    if (c === 32) continue;
    if (c >= 97 && c <= 122) mask |= 1 << (c - 97);
    else if (c >= 48 && c <= 57) mask |= DIGIT_BIT;
    else mask |= OTHER_BIT;
  }
  return mask;
}

const ACTIONS: ActionDef[] = [
  {
    title: "Start a review session",
    sub: "Spaced-repetition drill over everything you are due to see again",
    href: "/review",
    keywords: "review spaced repetition due revise refresh drill session forgot again",
  },
  {
    title: "Build a mock test",
    sub: "Pick topics, difficulty, length and a timer",
    href: "/test",
    keywords: "custom test exam quiz timed build practice set topics",
  },
  {
    title: "Take a mock interview",
    sub: "Timed, no feedback until the end, then a report card",
    href: "/interview",
    keywords: "mock interview simulate screen onsite timed report card realistic",
  },
  {
    title: "Open the formula reference sheet",
    sub: "Every equation from all 25 lessons, filterable and printable",
    href: "/reference",
    keywords: "formula equations reference cram sheet print cheat crib",
  },
  {
    title: "Browse the question bank",
    sub: `All ${ALL_QUESTIONS.length} questions with worked solutions`,
    href: "/bank",
    keywords: "bank browse all questions solutions filter search",
  },
  {
    title: "Interview Q&A",
    sub: `${ALL_QNA.length} open-ended questions to answer out loud`,
    href: "/qna",
    keywords: "qna verbal open ended conceptual talk explain out loud",
  },
  {
    title: "Go to the roadmap",
    sub: "All 25 topics, grouped by stage",
    href: "/",
    keywords: "home roadmap dashboard stages overview progress mastery continue start",
  },
  {
    title: "Toggle light / dark theme",
    sub: "Switch the colour theme for this browser",
    command: "toggle-theme",
    keywords: "dark light mode theme colour color night day appearance contrast",
  },
  {
    title: "Figure QA sheet",
    sub: "Every diagram in the app on one page",
    href: "/figures",
    keywords: "figures diagrams drawings svg qa sheet",
  },
];

/** Topic lookup, so tagging 1,405 questions is not 1,405 linear scans. */
const TOPIC_BY_ID = new Map(TOPICS.map((t) => [t.id, t]));

function buildIndex(): Entry[] {
  const entries: Entry[] = [];
  const add = (
    kind: ResultKind,
    tn: string,
    bn: string,
    kn: string,
    len: number,
    fuzzy: boolean,
    ref: Ref
  ) => {
    entries.push({
      kind,
      tn,
      bn,
      kn,
      mask: charMask(tn) | charMask(bn) | charMask(kn),
      len,
      fuzzy,
      ref,
    });
  };

  for (const def of ACTIONS) {
    add(
      "action",
      normalize(def.title),
      normalize(`${def.sub} ${def.keywords ?? ""}`),
      " ",
      def.title.length,
      true,
      { k: "action", def }
    );
  }

  for (const topic of TOPICS) {
    const topicWords = normalize(`${topic.name} ${topic.short}`);
    const topicTight = normalizeTight(`${topic.name} ${topic.short}`);
    add("topic", topicWords, normalize(topic.blurb), topicTight, topic.name.length, true, {
      k: "topic",
      topic,
    });

    const content = CONTENT[topic.id];
    if (!content) continue;

    // Lesson sections — each heading deep-links to /learn/<topic>#s<n>.
    const sections = content.lesson?.sections ?? [];
    for (let i = 0; i < sections.length; i++) {
      // Headings are declared plain text, but some carry entities
      // ("Mohr&rsquo;s circle"), so they go through the same pipeline.
      const heading = plainText(sections[i].heading);
      add(
        "lesson",
        normalize(heading),
        " ",
        `${topicWords}${normalizeTight(heading).slice(1)}`,
        heading.length,
        true,
        { k: "lesson", topic, i }
      );
    }

    // Equations — the name is the title; the formula and note are searchable.
    const equations = content.lesson?.equations ?? [];
    for (let i = 0; i < equations.length; i++) {
      const eq = equations[i];
      add(
        "equation",
        normalizeHtml(eq.name),
        normalizeHtml(`${eq.formula} ${eq.note ?? ""}`),
        `${topicWords}${normalizeTight(plainText(eq.name)).slice(1)}`,
        eq.name.length,
        true,
        { k: "equation", topic, i }
      );
    }
  }

  // Questions — prompt is the title, MC choices are the body. Explanations are
  // deliberately not indexed: they would roughly triple the index's memory for
  // a large loss of precision, since every worked solution names every symbol.
  for (const q of ALL_QUESTIONS) {
    const topic = TOPIC_BY_ID.get(q.topic);
    add(
      "question",
      normalizeHtml(q.prompt),
      q.type === "mc" ? normalizeHtml(q.choices.join(" ")) : " ",
      topic ? normalize(`${topic.name} ${topic.short}`) : " ",
      q.prompt.length,
      false,
      { k: "question", q }
    );
  }

  for (let i = 0; i < ALL_QNA.length; i++) {
    const item = ALL_QNA[i];
    const topic = TOPIC_BY_ID.get(item.topic);
    add(
      "qna",
      normalizeHtml(item.q),
      " ",
      topic ? normalize(`${topic.name} ${topic.short}`) : " ",
      item.q.length,
      false,
      { k: "qna", i }
    );
  }

  return entries;
}

export type IndexStats = { total: number } & Record<ResultKind, number>;

/**
 * The index is built once, but *lazily*. Building it eagerly at module scope
 * would run on the server during SSR of every route and again during hydration
 * — ~2,100 entries of tag-stripping and entity-decoding on the critical path,
 * for a palette the user may never open. `warmSearchIndex()` lets the caller
 * pay that cost during an idle callback instead; every other entry point warms
 * it on demand, so it is impossible to search an unbuilt index.
 */
let INDEX: Entry[] | null = null;
let STATS: IndexStats | null = null;

function getIndex(): Entry[] {
  if (INDEX === null) INDEX = buildIndex();
  return INDEX;
}

/** Build the index now if it does not exist yet. Idempotent and cheap after. */
export function warmSearchIndex(): void {
  getIndex();
}

export function indexStats(): IndexStats {
  if (STATS === null) {
    const stats: IndexStats = {
      total: 0,
      action: 0,
      topic: 0,
      lesson: 0,
      equation: 0,
      question: 0,
      qna: 0,
    };
    const index = getIndex();
    stats.total = index.length;
    for (const e of index) stats[e.kind] += 1;
    STATS = stats;
  }
  return STATS;
}

/* -------------------------------------------------------------------------- */
/* Scoring                                                                    */
/* -------------------------------------------------------------------------- */

const S_TITLE_EXACT = 1000;
const S_TITLE_PREFIX = 640;
const S_TITLE_WORD = 540;
const S_TITLE_WORD_PREFIX = 460;
const S_TITLE_SUB = 260;
const S_BODY_WORD = 190;
const S_BODY_WORD_PREFIX = 155;
const S_BODY_SUB = 95;
const S_CONTEXT = 60;
const S_FUZZY_MAX = 120;

/** Topic and lesson titles outrank question bodies, per the product brief. */
const KIND_BOOST: Record<ResultKind, number> = {
  action: 1.3,
  topic: 1.28,
  lesson: 1.14,
  equation: 1.06,
  qna: 0.94,
  question: 0.9,
};

/**
 * Subsequence score: every character of `term` appears in order in `hay`.
 * Contiguous runs and a hit right after a word boundary score higher, so
 * "vonm" ranks "Von Mises" above an accidental scatter. Only ever called on
 * the ~400 short entries flagged `fuzzy`.
 */
function fuzzyScore(hay: string, term: string): number {
  let hi = 0;
  let streak = 0;
  let longestRun = 0;
  let score = 0;
  for (let ti = 0; ti < term.length; ti++) {
    const c = term.charCodeAt(ti);
    let found = -1;
    while (hi < hay.length) {
      if (hay.charCodeAt(hi) === c) {
        found = hi;
        break;
      }
      hi++;
    }
    if (found === -1) return 0;
    const boundary = found > 0 && hay.charCodeAt(found - 1) === 32;
    score += 1 + streak * 2 + (boundary ? 3 : 0);
    streak += 1;
    if (streak > longestRun) longestRun = streak;
    hi = found + 1;
    if (ti + 1 < term.length && hay.charCodeAt(hi) !== term.charCodeAt(ti + 1)) streak = 0;
  }
  // A real typo is local: "bukling" still shares a five-character run with
  // "buckling". A scatter of single letters ("stress" inside "Start a Review
  // Session") is not a typo, it is noise, so require one run of three.
  if (longestRun < 3) return 0;
  // Normalise against the best achievable score for this term length.
  const best = term.length * 3 + 3;
  return Math.min(S_FUZZY_MAX, Math.round((score / best) * S_FUZZY_MAX));
}

/**
 * Score `term` against one haystack in a single left-to-right pass.
 *
 * `table` is indexed by hit quality: 0 substring · 1 word-prefix · 2 whole word
 * · 3 first word, prefix · 4 first word, whole. The naive version probed with
 * four separate `indexOf` calls per haystack and re-scanned up to 1,500
 * characters each time; this walks the string once and stops as soon as the
 * best possible hit for that haystack is found.
 */
function probeScore(hay: string, term: string, table: readonly number[]): number {
  const len = term.length;
  let p = hay.indexOf(term);
  if (p === -1) return 0;
  // Haystacks are space-padded, so only the *first* hit can be the first word.
  if (p === 1) return hay.charCodeAt(1 + len) === 32 ? table[4] : table[3];
  // Everything after it tops out at "whole word", which is the break condition.
  const ceiling = table[2];
  let best = 0;
  while (p !== -1) {
    let quality = 0;
    if (hay.charCodeAt(p - 1) === 32) quality = hay.charCodeAt(p + len) === 32 ? 2 : 1;
    const s = table[quality];
    if (s > best) {
      best = s;
      if (best >= ceiling) break;
    }
    p = hay.indexOf(term, p + 1);
  }
  return best;
}

const TITLE_TABLE = [
  S_TITLE_SUB,
  S_TITLE_WORD_PREFIX,
  S_TITLE_WORD,
  S_TITLE_PREFIX,
  S_TITLE_PREFIX + 40,
] as const;
const BODY_TABLE = [
  S_BODY_SUB,
  S_BODY_WORD_PREFIX,
  S_BODY_WORD,
  S_BODY_WORD,
  S_BODY_WORD,
] as const;
/** Topic labels only count as a whole-word hint, never as a substring. */
const CONTEXT_TABLE = [0, S_CONTEXT, S_CONTEXT, S_CONTEXT, S_CONTEXT] as const;

function termScore(entry: Entry, term: string, termMask: number): number {
  if ((entry.mask & termMask) === termMask) {
    const { tn } = entry;
    if (tn.length === term.length + 2 && tn.indexOf(term) === 1) return S_TITLE_EXACT;
    const t = probeScore(tn, term, TITLE_TABLE);
    if (t !== 0) return t;
    const b = probeScore(entry.bn, term, BODY_TABLE);
    if (b !== 0) return b;
    const c = probeScore(entry.kn, term, CONTEXT_TABLE);
    if (c !== 0) return c;
    if (entry.fuzzy && term.length >= 4) {
      // A floor, so a lucky scatter of characters never fills the list with noise.
      const f = fuzzyScore(tn, term);
      return f >= 55 ? f : 0;
    }
  }
  return 0;
}

/** Character-class bitset for a query term (see `Entry.mask`). */
function termMaskOf(term: string): number {
  return charMask(term);
}

/* -------------------------------------------------------------------------- */
/* Results                                                                    */
/* -------------------------------------------------------------------------- */

export interface SearchResult {
  key: string;
  kind: ResultKind;
  /** Plain text — always safe to render as a text node. */
  title: string;
  /** Equations only: the formula with `<sub>/<sup>` preserved. */
  formulaHtml?: string;
  subtitle?: string;
  /** Right-hand metadata chip (topic label, difficulty…). */
  meta?: string;
  href?: string;
  command?: PaletteCommand;
  /** Secondary target, opened with → or ⌘↵ (topics: practice instead of lesson). */
  altHref?: string;
  altLabel?: string;
  /**
   * `/bank` has no per-question anchor and is owned by another agent, so a
   * question result carries the exact text the bank's own filter needs to
   * isolate it. See CommandPalette#revealInBank.
   */
  bankKey?: string;
  score: number;
}

export interface SearchGroup {
  kind: ResultKind;
  label: string;
  results: SearchResult[];
  /** Total matches in this group before the per-group cap. */
  total: number;
}

const DIFFICULTY_LABEL: Record<number, string> = {
  1: "Fundamentals",
  2: "Standard",
  3: "Hard",
};

/** The bank filters on `prompt.replace(/<[^>]*>/g, " ").toLowerCase()`, so a
 *  contiguous slice of exactly that string is guaranteed to match it. */
function bankFilterKey(promptHtml: string): string {
  const asBankSeesIt = promptHtml.replace(/<[^>]*>/g, " ").toLowerCase();
  const slice = asBankSeesIt.slice(0, 90);
  const cut = slice.lastIndexOf(" ");
  return (cut > 40 ? slice.slice(0, cut) : slice).trim();
}

function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return `${text.slice(0, cut > max * 0.6 ? cut : max).trimEnd()}…`;
}

/** Build the renderable row for a hit. Called for the ~24 visible rows only. */
function materialize(entry: Entry, score: number): SearchResult {
  const ref = entry.ref;
  switch (ref.k) {
    case "action":
      return {
        key: `action:${ref.def.title}`,
        kind: "action",
        title: ref.def.title,
        subtitle: ref.def.sub,
        href: ref.def.href,
        command: ref.def.command,
        score,
      };
    case "topic": {
      const content = CONTENT[ref.topic.id];
      const n = content?.questions.length ?? 0;
      return {
        key: `topic:${ref.topic.id}`,
        kind: "topic",
        title: ref.topic.name,
        subtitle: clip(ref.topic.blurb, 120),
        meta: `Stage ${ref.topic.stage} · ${n} questions`,
        href: `/learn/${ref.topic.id}`,
        altHref: `/practice/${ref.topic.id}`,
        altLabel: "Practice",
        score,
      };
    }
    case "lesson": {
      const section = CONTENT[ref.topic.id]?.lesson.sections[ref.i];
      return {
        key: `lesson:${ref.topic.id}:${ref.i}`,
        kind: "lesson",
        title: plainText(section?.heading ?? ""),
        subtitle: `Section ${ref.i + 1} of ${CONTENT[ref.topic.id]?.lesson.title ?? ref.topic.name}`,
        meta: ref.topic.short,
        href: `/learn/${ref.topic.id}#s${ref.i}`,
        score,
      };
    }
    case "equation": {
      const eq = CONTENT[ref.topic.id]?.lesson.equations[ref.i];
      return {
        key: `eq:${ref.topic.id}:${ref.i}`,
        kind: "equation",
        title: plainText(eq?.name ?? ""),
        formulaHtml: inlineHtml(eq?.formula ?? ""),
        subtitle: eq?.note ? clip(plainText(eq.note), 110) : undefined,
        meta: ref.topic.short,
        // The formula sheet renders every equation with `id="topic-<id>"`
        // anchors, so it is a closer landing than the top of the lesson.
        href: `/reference#topic-${ref.topic.id}`,
        altHref: `/learn/${ref.topic.id}`,
        altLabel: "Lesson",
        score,
      };
    }
    case "question": {
      const q = ref.q;
      const topic = TOPICS.find((t) => t.id === q.topic);
      return {
        key: `q:${q.id}`,
        kind: "question",
        title: clip(plainText(q.prompt), 190),
        meta: `${topic?.short ?? q.topic} · ${DIFFICULTY_LABEL[q.difficulty]}`,
        subtitle: q.id,
        href: `/bank?q=${encodeURIComponent(q.id)}`,
        bankKey: bankFilterKey(q.prompt),
        score,
      };
    }
    case "qna": {
      const item = ALL_QNA[ref.i]!;
      const topic = TOPICS.find((t) => t.id === item.topic);
      return {
        key: `qna:${item.id}`,
        kind: "qna",
        title: clip(plainText(item.q), 190),
        subtitle: clip(plainText(item.a), 110),
        meta: topic?.short ?? item.topic,
        href: `/qna?topic=${encodeURIComponent(item.topic)}`,
        score,
      };
    }
  }
}

const GROUP_ORDER: ResultKind[] = [
  "action",
  "topic",
  "lesson",
  "equation",
  "question",
  "qna",
];

export interface SearchOptions {
  /** Rows rendered per group (default 5). */
  perGroup?: number;
}

/** Split a raw query into normalised terms. Exported for highlighting. */
export function queryTerms(query: string): string[] {
  const n = normalize(query).trim();
  return n ? n.split(" ").filter((t) => t.length > 0) : [];
}

/**
 * Rank the whole corpus against `query` and return results grouped by kind.
 * Groups are ordered by their best hit, so the very first row is always the
 * single best match — pressing ↵ immediately never lands somewhere surprising.
 */
export function search(query: string, options: SearchOptions = {}): SearchGroup[] {
  const perGroup = options.perGroup ?? 5;
  const terms = queryTerms(query);
  if (terms.length === 0) return defaultGroups();

  const phrase = terms.length > 1 ? ` ${terms.join(" ")}` : "";
  const masks = terms.map(termMaskOf);
  const buckets = new Map<ResultKind, { entry: Entry; score: number }[]>();
  const index = getIndex();

  for (let i = 0; i < index.length; i++) {
    const entry = index[i];
    let total = 0;
    let ok = true;
    for (let t = 0; t < terms.length; t++) {
      const s = termScore(entry, terms[t], masks[t]);
      if (s === 0) {
        ok = false;
        break;
      }
      total += s;
    }
    if (!ok) continue;

    let score = (total / terms.length) * KIND_BOOST[entry.kind];
    if (phrase) {
      // Reward the terms appearing together, in order.
      if (entry.tn.indexOf(phrase) !== -1) score += 320;
      else if (entry.bn.indexOf(phrase) !== -1) score += 120;
    }
    // Shorter items win ties: a 40-char heading beats a 400-char prompt.
    score -= Math.min(55, entry.len * 0.16);

    let bucket = buckets.get(entry.kind);
    if (!bucket) buckets.set(entry.kind, (bucket = []));
    bucket.push({ entry, score });
  }

  const groups: SearchGroup[] = [];
  for (const kind of GROUP_ORDER) {
    const bucket = buckets.get(kind);
    if (!bucket || bucket.length === 0) continue;
    bucket.sort((a, b) => b.score - a.score || a.entry.len - b.entry.len);
    groups.push({
      kind,
      label: KIND_LABEL[kind],
      total: bucket.length,
      results: bucket
        .slice(0, perGroup)
        .map(({ entry, score }) => materialize(entry, score)),
    });
  }

  groups.sort((a, b) => (b.results[0]?.score ?? 0) - (a.results[0]?.score ?? 0));
  return groups;
}

/** What the palette shows before anything is typed — never an empty box. */
export function defaultGroups(): SearchGroup[] {
  const index = getIndex();
  const actions = index.filter((e) => e.kind === "action");
  const topics = index.filter((e) => e.kind === "topic");
  return [
    {
      kind: "action",
      label: KIND_LABEL.action,
      total: actions.length,
      results: actions.map((e) => materialize(e, 0)),
    },
    {
      kind: "topic",
      label: "Jump to a topic",
      total: topics.length,
      results: topics.slice(0, 5).map((e) => materialize(e, 0)),
    },
  ];
}

/* -------------------------------------------------------------------------- */
/* Highlighting                                                               */
/* -------------------------------------------------------------------------- */

const ESCAPE_RE = /[.*+?^${}()|[\]\\]/g;

/**
 * Split display text into alternating plain/matched segments. Built from the
 * raw typed terms so it works on the already-decoded text the row renders.
 */
export function highlight(
  text: string,
  terms: string[]
): { text: string; hit: boolean }[] {
  if (!text) return [];
  const usable = terms.filter((t) => t.length > 1);
  if (usable.length === 0) return [{ text, hit: false }];
  const re = new RegExp(
    `(${usable.map((t) => t.replace(ESCAPE_RE, "\\$&")).join("|")})`,
    "gi"
  );
  const out: { text: string; hit: boolean }[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const start = m.index;
    if (start > last) out.push({ text: text.slice(last, start), hit: false });
    out.push({ text: m[0], hit: true });
    last = start + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), hit: false });
  return out;
}
