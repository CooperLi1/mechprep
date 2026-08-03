/**
 * Read-only text utilities for lesson content.
 *
 * Lesson bodies are HTML strings rendered verbatim through `HtmlContent`. These
 * helpers never modify that HTML — they derive a plain-text *shadow copy* used
 * for word counts and for scoring which question belongs to which section. The
 * rendered markup is untouched.
 */

/** `<svg>…</svg>` contributes hundreds of label words that nobody reads as prose. */
const SVG_BLOCK = /<svg[\s\S]*?<\/svg>/gi;
const TAG = /<[^>]+>/g;
/** Named + numeric entities. We only need them gone, not resolved. */
const ENTITY = /&(?:#\d+|#x[0-9a-f]+|[a-z]+);/gi;

/**
 * Plain text for measurement only. SVG innards are dropped first so a figure's
 * axis labels do not inflate the word count or the term-overlap score.
 */
export function toText(html: string): string {
  return html
    .replace(SVG_BLOCK, " ")
    .replace(TAG, " ")
    .replace(ENTITY, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function wordCount(html: string): number {
  const text = toText(html);
  return text === "" ? 0 : text.split(" ").length;
}

/** Figures are `<figure class="fig">` wrappers in lesson HTML. */
export function figureCount(html: string): number {
  return (html.match(/<figure\b/gi) ?? []).length;
}

/**
 * Words that appear in every engineering paragraph and therefore separate
 * nothing. Kept deliberately short: the inverse-document-frequency weighting in
 * `pickSectionQuestions` already suppresses terms that are common *in this
 * lesson*, which is a better filter than any hand-written list.
 */
const STOPWORDS = new Set([
  "about", "above", "across", "after", "again", "against", "all", "almost",
  "also", "although", "always", "among", "and", "another", "any", "are",
  "around", "because", "been", "before", "being", "below", "best", "better",
  "between", "both", "but", "can", "cannot", "case", "come", "could", "does",
  "doing", "done", "down", "each", "either", "else", "enough", "even", "ever",
  "every", "far", "few", "first", "for", "from", "get", "gets", "give", "given",
  "goes", "going", "gives", "had", "has", "have", "here", "how", "however",
  "into", "its", "itself", "just", "keep", "kept", "know", "known", "large",
  "last", "least", "less", "let", "like", "little", "long", "look", "made",
  "make", "makes", "making", "many", "may", "means", "might", "more", "most",
  "much", "must", "near", "need", "needs", "never", "next", "not", "now",
  "often", "once", "one", "only", "onto", "other", "others", "our", "out",
  "over", "own", "part", "per", "put", "quite", "rather", "real", "really",
  "same", "say", "says", "see", "seen", "set", "several", "she", "should",
  "show", "shows", "side", "since", "small", "some", "still", "such", "take",
  "takes", "than", "that", "the", "their", "them", "then", "there", "these",
  "they", "thing", "things", "this", "those", "though", "three", "through",
  "thus", "time", "times", "too", "two", "under", "until", "upon", "use",
  "used", "uses", "using", "usually", "very", "want", "was", "way", "well",
  "were", "what", "when", "where", "whether", "which", "while", "who", "whole",
  "why", "will", "with", "within", "without", "would", "you", "your",
]);

/**
 * Lowercased alphabetic terms of 3+ characters, stopwords removed. Digits are
 * dropped on purpose: "0.5 K/W" in a worked example says nothing about which
 * section a question belongs to, while "resistance" says everything.
 */
export function terms(html: string): string[] {
  const out: string[] = [];
  for (const raw of toText(html).toLowerCase().split(/[^a-z]+/)) {
    if (raw.length < 3) continue;
    if (STOPWORDS.has(raw)) continue;
    out.push(raw);
  }
  return out;
}
