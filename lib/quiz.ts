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
  const val = parseNumericResponse(response);
  if (val === null) return false;
  if (answer === 0) return Math.abs(val) <= tolerance;
  return Math.abs(val - answer) / Math.abs(answer) <= tolerance;
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
