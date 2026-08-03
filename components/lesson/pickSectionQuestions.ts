import type { LessonSection, Question } from "@/content/types";
import { terms } from "./text";

/**
 * Which bank question to offer as the "check your understanding" after each
 * lesson section.
 *
 * There is no section -> question mapping in the content, so this derives one.
 * Everything below is a pure function of statically imported content: no
 * randomness, no clock, no storage. That is a hard requirement, not a nicety —
 * the lesson is server-rendered and then hydrated, so a selector that varied by
 * even one pick would produce a hydration mismatch.
 *
 * The heuristic, in order of influence:
 *
 * 1. **Distinctive-term overlap.** Each section is turned into a weighted bag of
 *    words; so is each question. Terms are weighted by inverse document
 *    frequency *within this lesson*, so a word that appears in nine of ten
 *    sections ("thermal", "resistance" in heat transfer) counts for almost
 *    nothing while "emissivity" or "buckling" counts for a lot. Scoring is
 *    cosine similarity, so a long question does not out-score a short one just
 *    by owning more words.
 * 2. **The heading is the strongest signal** in a section and is weighted 3x the
 *    body.
 * 3. **Difficulty 1-2 preferred.** A check placed immediately after reading
 *    should be answerable from what was just read; difficulty 3 is multiplied by
 *    0.62 so it only wins when it is a dramatically better topical match.
 * 4. **Globally greedy, one question per section.** All (section, question)
 *    pairs are ranked once and consumed best-first, so a question that suits
 *    section 7 far better than section 2 is not stolen by section 2 simply for
 *    being earlier. Ties break on section index then question index.
 * 5. **Deterministic fallback.** A section with zero term overlap (rare, but
 *    possible for a purely qualitative section) takes the lowest-difficulty
 *    unused question rather than showing nothing.
 */

/** Difficulty 3 has to be a much better match to beat a 1 or a 2. */
const DIFFICULTY_WEIGHT: Record<number, number> = { 1: 1, 2: 1, 3: 0.62 };

/** A term repeated 20 times in one section should not swamp the vector. */
function cappedCounts(list: string[], weight: number, into: Map<string, number>) {
  const local = new Map<string, number>();
  for (const t of list) local.set(t, (local.get(t) ?? 0) + 1);
  for (const [t, n] of local) {
    into.set(t, (into.get(t) ?? 0) + weight * Math.min(n, 4));
  }
}

function unit(vec: Map<string, number>): Map<string, number> {
  let sum = 0;
  for (const v of vec.values()) sum += v * v;
  const norm = Math.sqrt(sum);
  if (norm === 0) return vec;
  const out = new Map<string, number>();
  for (const [t, v] of vec) out.set(t, v / norm);
  return out;
}

function dot(a: Map<string, number>, b: Map<string, number>): number {
  // Iterate the smaller map; the vectors are sparse and rarely overlap much.
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  let sum = 0;
  for (const [t, v] of small) {
    const other = large.get(t);
    if (other !== undefined) sum += v * other;
  }
  return sum;
}

function questionText(q: Question): Map<string, number> {
  const vec = new Map<string, number>();
  // The prompt is what the reader is being asked; it carries the topic.
  cappedCounts(terms(q.prompt), 3, vec);
  if (q.type === "mc") {
    for (const choice of q.choices) cappedCounts(terms(choice), 1, vec);
  }
  // The worked solution names the governing law, which is often the clearest
  // link back to a section, but it also carries generic interview advice — so
  // it contributes, at a lower weight than the prompt.
  cappedCounts(terms(q.explanation), 1, vec);
  return vec;
}

export function pickSectionQuestions(
  sections: LessonSection[],
  questions: Question[]
): (Question | null)[] {
  const n = sections.length;
  if (n === 0 || questions.length === 0) return sections.map(() => null);

  // --- section vectors, idf-weighted within this lesson ----------------------
  const rawSections = sections.map((s) => {
    const vec = new Map<string, number>();
    cappedCounts(terms(s.heading), 3, vec);
    cappedCounts(terms(s.html), 1, vec);
    return vec;
  });

  const df = new Map<string, number>();
  for (const vec of rawSections) {
    for (const t of vec.keys()) df.set(t, (df.get(t) ?? 0) + 1);
  }
  const idf = (t: string) => Math.log(1 + n / (df.get(t) ?? n));

  const sectionVecs = rawSections.map((vec) => {
    const weighted = new Map<string, number>();
    for (const [t, v] of vec) weighted.set(t, v * idf(t));
    return unit(weighted);
  });

  const questionVecs = questions.map((q) => {
    const weighted = new Map<string, number>();
    for (const [t, v] of questionText(q)) {
      // A question term the lesson never uses is not evidence either way, so it
      // gets the weight of a term seen in every section rather than infinity.
      weighted.set(t, v * idf(t));
    }
    return unit(weighted);
  });

  // --- rank every (section, question) pair once ------------------------------
  const pairs: { s: number; q: number; score: number }[] = [];
  for (let s = 0; s < n; s++) {
    for (let q = 0; q < questions.length; q++) {
      const question = questions[q];
      if (!question) continue;
      const raw = dot(sectionVecs[s]!, questionVecs[q]!);
      if (raw <= 0) continue;
      pairs.push({
        s,
        q,
        score: raw * (DIFFICULTY_WEIGHT[question.difficulty] ?? 1),
      });
    }
  }
  pairs.sort((a, b) => b.score - a.score || a.s - b.s || a.q - b.q);

  const chosen: (Question | null)[] = new Array(n).fill(null);
  const usedQuestion = new Set<number>();
  let assigned = 0;
  for (const pair of pairs) {
    if (assigned === n) break;
    if (chosen[pair.s] || usedQuestion.has(pair.q)) continue;
    chosen[pair.s] = questions[pair.q]!;
    usedQuestion.add(pair.q);
    assigned++;
  }

  // --- fallback: a section that matched nothing still gets a question --------
  if (assigned < n) {
    const spare = questions
      .map((q, i) => ({ q, i }))
      .filter(({ i }) => !usedQuestion.has(i))
      .sort((a, b) => a.q.difficulty - b.q.difficulty || a.i - b.i);
    let cursor = 0;
    for (let s = 0; s < n && cursor < spare.length; s++) {
      if (chosen[s]) continue;
      const pick = spare[cursor++]!;
      chosen[s] = pick.q;
      usedQuestion.add(pick.i);
    }
  }

  return chosen;
}

/**
 * Selection is identical for every render of a topic, so it is computed once
 * per topic per process. This also keeps the server render and the client
 * hydration reading from the same table within a session.
 */
const cache = new Map<string, (Question | null)[]>();

export function sectionQuestions(
  topicId: string,
  sections: LessonSection[],
  questions: Question[]
): (Question | null)[] {
  const hit = cache.get(topicId);
  if (hit) return hit;
  const picked = pickSectionQuestions(sections, questions);
  cache.set(topicId, picked);
  return picked;
}
