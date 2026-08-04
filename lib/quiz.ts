import type { Difficulty, QnAItem, Question } from "@/content/types";

/** A question tagged with its source topic (as stored in the aggregate bank). */
export type BankQuestion = Question & { topic: string };

/** Open-ended interview prompt adapted into the quiz runner. */
export type BankQnA = {
  id: string;
  topic: string;
  type: "qna";
  difficulty: Difficulty;
  prompt: string;
  modelAnswer: string;
};

export type QuizItem = BankQuestion | BankQnA;

export function qnaToQuizItem(item: QnAItem, topic: string): BankQnA {
  return {
    id: item.id,
    topic,
    type: "qna",
    difficulty: 2,
    prompt: item.q,
    modelAnswer: item.a,
  };
}

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // i and j are always in range, so both reads are defined.
    const tmp = a[i] as T;
    a[i] = a[j] as T;
    a[j] = tmp;
  }
  return a;
}

/**
 * Build a quiz: sample `count` questions across `pools` (one pool per topic),
 * spreading the count as evenly as possible across topics, filtered by
 * difficulty. Falls back gracefully when a pool runs dry.
 */
export function buildQuiz(
  pools: Record<string, QuizItem[]>,
  topicIds: string[],
  count: number,
  difficulties: Difficulty[] = [1, 2, 3]
): QuizItem[] {
  if (!Number.isFinite(count) || count <= 0) return [];
  const diffSet = new Set<Difficulty>(difficulties);
  // An unknown topic id (or a topic whose pool is empty) contributes nothing
  // rather than throwing — `pools` is keyed by id and may not cover every id.
  const perTopic: QuizItem[][] = topicIds.map((id) =>
    shuffle((pools[id] ?? []).filter((q) => diffSet.has(q.difficulty)))
  );
  const picked: QuizItem[] = [];
  // round-robin across topics so mixed tests are balanced
  let exhausted = false;
  while (picked.length < count && !exhausted) {
    exhausted = true;
    for (const pool of perTopic) {
      if (picked.length >= count) break;
      const q = pool.pop();
      if (q) {
        picked.push(q);
        exhausted = false;
      }
    }
  }
  return shuffle(picked);
}

// U+2212 minus and the dash family that keyboards/autocorrect substitute for "-".
const DASHES = /[\u2010-\u2015\u2212\uFF0D]/g;
// Regular, non-breaking, thin and narrow spaces — all used as digit grouping.
const SPACES = /[\s\u00A0\u2007\u202F]/g;
// The leading numeric literal: optional sign, digits with an optional decimal
// point, optional exponent. Deliberately does NOT match "0x10" as hex (it
// matches the leading "0" and leaves "x10" behind).
const NUMBER_HEAD = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/;
// "3x10^5", "3*10^5", "3**10^-5" — how engineers write scientific notation
// when the keypad has no "e". The caret (or "**") is required, so "3*102" stays
// an unevaluated expression instead of being read as 3e2.
const SCI_TAIL = /^[x\u00D7*\u00B7\u22C5]{1,2}10(?:\^|\*\*)([+-]?\d+)/;
// A leftover starting with an operator means an unevaluated expression
// ("1/2", "25-30", "3+4"), not a number with a unit. Rejected.
const OPERATOR_HEAD = /^[+\-*\/^\u00D7\u00F7]/;

/**
 * Parse a user-typed numeric response into a number, or null if it is not a
 * number at all. Deliberate rules (all pinned by tests):
 *
 * - Leading/trailing whitespace and internal digit-grouping spaces are removed,
 *   so "1 234" is 1234.
 * - A unicode minus/dash prefix ("−5") is treated as "-5"; a leading "+" is fine.
 * - Everything after the leading numeric literal is treated as a **unit** and
 *   ignored, because the UI prints the unit right next to the input and invites
 *   the user to type it: "25 MPa" and "25MPa" both parse as 25.
 * - **Comma rule.** A comma is ambiguous: "1,234" is 1234 in en-US and 1.234 in
 *   most of Europe. We resolve it by group shape, never by magnitude:
 *     * comma(s) followed by exactly three digits, in whole groups, are
 *       THOUSANDS separators — "1,234" -> 1234, "1,234,567" -> 1234567.
 *     * any other comma is a DECIMAL separator — "3,5" -> 3.5, "0,25" -> 0.25,
 *       "1,23456" -> 1.23456.
 *   The old code stripped every comma, so "3,5" became 35: it marked a European
 *   3.5 wrong AND marked it right when the expected answer was 35. Both are
 *   fixed; the only remaining ambiguity ("1,234") follows the en-US convention
 *   that matches the rest of the app's content.
 * - "3x10^5" / "3*10^5" / "3·10^-5" are accepted as scientific notation, as are
 *   "1e3" and "1.2E-4".
 * - An unevaluated expression ("1/2", "25-30") is rejected rather than silently
 *   graded as its first term.
 */
export function parseNumericResponse(response: string): number | null {
  if (typeof response !== "string") return null;
  const s = response.replace(DASHES, "-").replace(SPACES, "");
  if (s === "") return null;

  const head = NUMBER_HEAD.exec(s);
  if (!head) return null;
  let literal = head[0];
  let rest = s.slice(literal.length);

  if (rest.startsWith(",") && !literal.includes(".") && !/[eE]/.test(literal)) {
    const thousands = /^(?:,\d{3})+(?!\d)/.exec(rest);
    const decimal = /^,\d+/.exec(rest);
    if (thousands) {
      literal += thousands[0].replace(/,/g, "");
      rest = rest.slice(thousands[0].length);
    } else if (decimal) {
      literal += `.${decimal[0].slice(1)}`;
      rest = rest.slice(decimal[0].length);
    }
  }

  let exponent = 0;
  const sci = SCI_TAIL.exec(rest);
  if (sci) {
    exponent = Number(sci[1]);
    rest = rest.slice(sci[0].length); // a unit may still follow: "3x10^5 Pa"
  }
  if (OPERATOR_HEAD.test(rest)) return null;

  const val = Number(literal) * 10 ** exponent;
  return Number.isFinite(val) ? val : null;
}

// Characters an arithmetic expression may contain after normalisation.
const EXPR_ALLOWED = /^[\d.()+\-*/^]+$/;

/**
 * Safely evaluate a plain arithmetic expression ("3/4", "(3+4)/2", "2^3",
 * "1/2 + 1/4") into a number, or null if it is not a well-formed expression.
 *
 * This exists so an answer typed as a fraction grades the same as its decimal
 * form — 3/4 and 0.75 are the same answer. Recursive descent over + - * / ^
 * and parentheses; no eval(), no identifiers, so there is nothing to inject.
 */
export function evaluateExpression(response: string): number | null {
  if (typeof response !== "string") return null;
  const s = response
    .replace(DASHES, "-")
    .replace(SPACES, "")
    .replace(/\*\*/g, "^")
    .replace(/[×·⋅]/g, "*")
    .replace(/÷/g, "/");
  if (s === "" || !EXPR_ALLOWED.test(s)) return null;

  let pos = 0;
  const peek = () => s[pos];

  function parseExpr(): number | null {
    let left = parseTerm();
    if (left === null) return null;
    while (peek() === "+" || peek() === "-") {
      const op = s[pos++];
      const right = parseTerm();
      if (right === null) return null;
      left = op === "+" ? left + right : left - right;
    }
    return left;
  }

  function parseTerm(): number | null {
    let left = parseFactor();
    if (left === null) return null;
    while (peek() === "*" || peek() === "/") {
      const op = s[pos++];
      const right = parseFactor();
      if (right === null) return null;
      left = op === "*" ? left * right : left / right;
    }
    return left;
  }

  function parseFactor(): number | null {
    let sign = 1;
    while (peek() === "+" || peek() === "-") {
      if (s[pos] === "-") sign = -sign;
      pos++;
    }
    const base = parsePrimary();
    if (base === null) return null;
    if (peek() === "^") {
      pos++;
      const exp = parseFactor(); // right-associative
      if (exp === null) return null;
      return sign * base ** exp;
    }
    return sign * base;
  }

  function parsePrimary(): number | null {
    if (peek() === "(") {
      pos++;
      const inner = parseExpr();
      if (inner === null || peek() !== ")") return null;
      pos++;
      return inner;
    }
    const m = /^(?:\d+\.?\d*|\.\d+)/.exec(s.slice(pos));
    if (!m) return null;
    pos += m[0].length;
    return Number(m[0]);
  }

  const val = parseExpr();
  if (val === null || pos !== s.length) return null;
  return Number.isFinite(val) ? val : null;
}

/**
 * Read a response as a number: first as a numeric literal (which tolerates
 * units, thousands separators and engineers' scientific notation), then as an
 * arithmetic expression ("3/4" = 0.75).
 */
export function readNumericResponse(response: string): number | null {
  return parseNumericResponse(response) ?? evaluateExpression(response);
}

/**
 * Grade a numeric response against the expected answer.
 *
 * `tolerance` is relative (3% by default, matching `NumericQuestion.tolerance`).
 * Relative tolerance is undefined when the expected answer is exactly 0, so in
 * that one case — and only that case — it is interpreted as an absolute bound:
 * `answer: 0, tolerance: 0.01` means "within ±0.01 of zero". That is the
 * existing, intended behaviour; it is preserved here.
 */
export function gradeNumeric(response: string, answer: number, tolerance = 0.03): boolean {
  const val = readNumericResponse(response);
  if (val === null) return false;
  if (answer === 0) return Math.abs(val) <= tolerance;
  return Math.abs(val - answer) / Math.abs(answer) <= tolerance;
}

/**
 * Explain a wrong numeric answer from its relationship to the expected value.
 * Deterministic and offline, like everything else in the app: it recognises
 * the classic failure shapes — sign flip, unit-prefix slip (×10ⁿ), inverted
 * ratio, radius/diameter-style factors of 2 and 4, a stray π — and otherwise
 * reports how far off the value is. Returns null when there is nothing useful
 * to say (blank input, or the answer was actually correct).
 */
export function diagnoseNumeric(
  response: string,
  answer: number,
  tolerance = 0.03
): string | null {
  if (response.trim() === "") return null;
  const val = readNumericResponse(response);
  if (val === null) {
    return "Your input could not be read as a number. Plain numbers, units (25 MPa), scientific notation (3x10^5) and fractions (3/4) all work.";
  }
  if (gradeNumeric(response, answer, tolerance)) return null;
  if (answer === 0) {
    return `Expected 0 (within ±${tolerance}); your value is ${val}. Check whether the terms should cancel.`;
  }

  const tol = Math.max(tolerance, 0.03);
  const near = (a: number, b: number) =>
    b !== 0 && Math.abs(a - b) / Math.abs(b) <= tol;

  if (near(-val, answer)) {
    return "Magnitude is right but the sign is flipped — check the assumed direction or sign convention.";
  }
  for (let n = 1; n <= 9; n++) {
    if (near(val, answer * 10 ** n) || near(val, answer / 10 ** n)) {
      return `Off by a factor of 10${n > 1 ? `^${n}` : ""} — usually a unit-prefix slip (mm vs m, kPa vs MPa, N vs kN).`;
    }
  }
  if (val !== 0 && near(1 / val, answer)) {
    return "Your value is the reciprocal of the expected one — a ratio is probably inverted.";
  }
  if (near(val, answer * 2) || near(val, answer / 2)) {
    return "Off by exactly a factor of 2 — radius vs diameter, or a missing ½, are the usual suspects.";
  }
  if (near(val, answer * 4) || near(val, answer / 4)) {
    return "Off by a factor of 4 — check for a squared radius/diameter mix-up.";
  }
  if (near(val, answer * Math.PI) || near(val, answer / Math.PI)) {
    return "Off by a factor of π — check the geometric formula you used.";
  }
  const rel = Math.abs(val - answer) / Math.abs(answer);
  if (rel <= 0.15) {
    return `Close — off by ${Math.round(rel * 100)}%. Likely rounding too early or an intermediate-value slip; carry more digits through.`;
  }
  return `Off by ${rel >= 10 ? "more than 10×" : `${Math.round(rel * 100)}%`} — recheck the governing equation and each substituted value.`;
}

// Words too generic to count as "key terms" of a model answer.
const STOPWORDS = new Set(
  (
    "the a an and or but if then than that this these those there here it its is are was were be been being " +
    "have has had do does did will would should could can may might must not no nor so such very much many " +
    "more most less least own same other another each every either neither both all any some few first second " +
    "with within without into onto from about above below under over between through during before after " +
    "because while where when what which who whom whose how why you your yours we our ours they them their " +
    "i me my mine he him his she her hers something anything nothing everything one two three also just only " +
    "even still yet again always never often usually sometimes at by for in of on to up out off as against " +
    "check checks checking problem problems answer answers question questions right wrong good better best " +
    "part parts thing things way ways case cases give gives given giving take takes taken use uses used using " +
    "make makes made making get gets got need needs needed want wants like different means start begin look " +
    "point points want does keep keeps become becomes call called work works say says said tell tells told"
  ).split(/\s+/)
);

/** Strip tags and decode the entities the content actually uses. */
function htmlToText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&sigma;/gi, "σ")
    .replace(/&tau;/gi, "τ")
    .replace(/&epsilon;/gi, "ε")
    .replace(/&delta;/gi, "δ")
    .replace(/&theta;/gi, "θ")
    .replace(/&omega;/gi, "ω")
    .replace(/&gamma;/gi, "γ")
    .replace(/&rho;/gi, "ρ")
    .replace(/&nu;/gi, "ν")
    .replace(/&mu;/gi, "µ")
    .replace(/&pi;/gi, "π")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+\d*;|&#\d+;/gi, " ")
    .replace(/\s+/g, " ")
    // Tags were replaced by spaces, which strands punctuation: "arrow , with".
    .replace(/\s+([,.;:!?)])/g, "$1")
    .replace(/\(\s+/g, "(")
    .trim();
}

/**
 * Key terms of a model answer that a draft never mentions.
 *
 * This is a coverage check, not grading: fully offline, it cannot judge
 * reasoning, only vocabulary. Terms are the most frequent non-stopwords of the
 * model answer (min length 5), matched against the draft by crude stemming
 * (first 6 characters), so "stress"/"stresses" and "deflect"/"deflection"
 * count as mentions. Returns at most `limit` missing terms; empty array means
 * good coverage, and an empty draft returns [] because there is nothing to
 * check.
 */
export function modelAnswerGaps(
  modelAnswerHtml: string,
  draft: string,
  limit = 5
): string[] {
  const text = htmlToText(modelAnswerHtml).toLowerCase();
  const draftLower = draft.toLowerCase();
  if (draftLower.trim() === "") return [];

  const counts = new Map<string, number>();
  for (const raw of text.split(/[^a-zσετδθωγρνµπ'-]+/i)) {
    const w = raw.replace(/^['-]+|['-]+$/g, "");
    if (w.length < 5 || STOPWORDS.has(w)) continue;
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  const key = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || b[0].length - a[0].length)
    .slice(0, 10)
    .map(([w]) => w);

  const stem = (w: string) => w.slice(0, Math.min(6, w.length));
  const draftWords = draftLower.split(/[^a-zσετδθωγρνµπ'-]+/i);
  const draftStems = new Set(draftWords.map(stem));
  return key.filter((w) => !draftStems.has(stem(w))).slice(0, limit);
}

/**
 * The hint for a question: the authored one when present, otherwise the first
 * sentence of the worked solution (plain text, clipped) — enough to point at
 * the governing idea without handing over the answer. Returns HTML-safe plain
 * text for the fallback, raw HTML for authored hints.
 */
export function questionHint(q: {
  hint?: string;
  explanation: string;
}): { html: string; derived: boolean } | null {
  if (q.hint?.trim()) return { html: q.hint, derived: false };
  const text = htmlToText(q.explanation);
  if (!text) return null;
  // First sentence: up to the first period followed by a space/end, but not a
  // decimal point ("0.75") or common abbreviation.
  const m = /^.{20,240}?(?<!\d)\.(?=\s|$)/.exec(text);
  const sentence = (m ? m[0] : text.slice(0, 160)).trim();
  if (!sentence) return null;
  // A derived hint must never leak the verdict.
  if (/answer\s+is|correct\s+(answer|choice|option)|\bis\s+correct\b/i.test(sentence)) {
    return null;
  }
  // Escape — the fallback is plain text being placed into HTML.
  const safe = sentence
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return { html: safe, derived: true };
}

/** Format a mastery fraction as a percentage label. */
export function pct(x: number): string {
  return `${Math.round(x * 100)}%`;
}

export const DIFF_LABEL: Record<Difficulty, string> = {
  1: "Fundamentals",
  2: "Standard",
  3: "Hard",
};

export const DIFF_COLOR: Record<Difficulty, string> = {
  1: "bg-emerald-100 text-emerald-800",
  2: "bg-amber-100 text-amber-800",
  3: "bg-rose-100 text-rose-800",
};
