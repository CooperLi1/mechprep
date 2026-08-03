// Mock interview engine: format definitions, question selection, scoring and
// diagnosis, and persistence of past attempts.
//
// Everything here is a pure function of its inputs except the three storage
// functions at the bottom. Reports are stored as *ids plus outcomes*, never as
// copies of question content, so the store stays tiny and an improved analysis
// applies retroactively to attempts taken before it was written.
//
// Storage key is `mechprep-interviews`. This module never writes to
// `mechprep.v1` (lib/progress.ts) — the interview is a diagnostic, and letting
// a 25-question timed set rewrite the spaced-repetition schedule would let a
// bad day erase weeks of scheduling.

import { useSyncExternalStore } from "react";
import type { Difficulty } from "@/content/types";
import { CONTENT, QNA_POOLS, QUESTION_POOLS } from "@/content/index";
import { STAGES, TOPICS, getTopic } from "@/content/topics";
import { buildQuiz, shuffle, type QuizItem } from "@/lib/quiz";
import { masteryFor, type ProgressData } from "@/lib/progress";
import { weakestTopics } from "@/lib/mastery";

// ---------------------------------------------------------------------------
// Formats
// ---------------------------------------------------------------------------

export type InterviewFormatId = "screen" | "onsite" | "weak-spot";

export interface InterviewFormat {
  id: InterviewFormatId;
  name: string;
  minutes: number;
  /** Total items served, open-ended included. */
  count: number;
  /** How many of `count` are open-ended interview prompts. */
  qnaCount: number;
  /** Counts per difficulty for the auto-graded part. Sums to count - qnaCount. */
  mix: Record<Difficulty, number>;
  /** How many distinct topics to draw from — breadth vs. depth. */
  breadth: number;
  tagline: string;
  detail: string;
}

export const FORMATS: Record<InterviewFormatId, InterviewFormat> = {
  screen: {
    id: "screen",
    name: "Phone screen",
    minutes: 30,
    count: 15,
    qnaCount: 0,
    mix: { 1: 6, 2: 8, 3: 1 },
    breadth: 15,
    tagline: "15 questions · 30 minutes · broad",
    detail:
      "One question from as many areas as possible, mostly fundamentals and standard difficulty. This is the filter — a recruiter or hiring engineer checking that nothing is missing.",
  },
  onsite: {
    id: "onsite",
    name: "On-site loop",
    minutes: 60,
    count: 25,
    qnaCount: 4,
    mix: { 1: 2, 2: 11, 3: 8 },
    breadth: 8,
    tagline: "25 questions · 60 minutes · deep",
    detail:
      "Fewer areas, several questions each, weighted to standard and hard. Includes four open-ended prompts you answer in prose and grade yourself against a model answer, because talking through a problem is most of a real loop.",
  },
  "weak-spot": {
    id: "weak-spot",
    name: "Weak-spot drill",
    minutes: 30,
    count: 15,
    qnaCount: 1,
    mix: { 1: 4, 2: 7, 3: 3 },
    breadth: 5,
    tagline: "15 questions · 30 minutes · your worst areas",
    detail:
      "Drawn from the topics your practice history says you are worst at, under the same time pressure. Expect this to hurt; that is the point.",
  },
};

export const FORMAT_ORDER: InterviewFormatId[] = ["screen", "onsite", "weak-spot"];

export function isFormatId(v: unknown): v is InterviewFormatId {
  return v === "screen" || v === "onsite" || v === "weak-spot";
}

// ---------------------------------------------------------------------------
// Where the weak spots are
// ---------------------------------------------------------------------------

/**
 * Smoothed accuracy: a topic answered once and missed is weaker evidence than
 * a topic answered twenty times at 45%. Both are pulled towards PRIOR_P, so
 * the well-measured failure sorts below the single unlucky guess, and a topic
 * never practiced at all lands exactly on the prior — behind anything with
 * measured trouble, ahead of nothing.
 */
const PRIOR_P = 0.7;
const PRIOR_W = 4;
/** masteryFor() looks at the most recent 30 answers; match that window. */
const MASTERY_WINDOW = 30;

export interface TopicStanding {
  id: string;
  /** Raw accuracy over the mastery window, or null if never practiced. */
  accuracy: number | null;
  answered: number;
  /** Smoothed score used for ranking. Lower is weaker. */
  score: number;
}

function answeredCount(progress: ProgressData | null, topicId: string): number {
  const attempts = progress?.topics?.[topicId]?.attempts;
  if (!Array.isArray(attempts)) return 0;
  let n = 0;
  for (let i = attempts.length - 1; i >= 0 && n < MASTERY_WINDOW; i--) {
    const total = attempts[i]?.total;
    if (typeof total === "number" && total > 0) n += total;
  }
  return Math.min(n, MASTERY_WINDOW);
}

export function topicStandings(progress: ProgressData | null): TopicStanding[] {
  return TOPICS.map((t) => {
    const answered = answeredCount(progress, t.id);
    const accuracy = progress && answered > 0 ? masteryFor(t.id, progress) : null;
    const correct = accuracy === null ? 0 : accuracy * answered;
    const score =
      accuracy === null
        ? PRIOR_P
        : (correct + PRIOR_W * PRIOR_P) / (answered + PRIOR_W);
    return { id: t.id, accuracy, answered, score };
  });
}

/**
 * The topics a weak-spot interview should be drawn from, weakest first.
 *
 * `preferred` lets a caller (the mastery module, when it exists) supply its own
 * ranking; anything it names is honoured first, and the smoothed-accuracy
 * ranking fills the rest.
 */
export function weakestTopicIds(
  progress: ProgressData | null,
  limit: number,
  candidates?: string[],
  preferred?: string[]
): string[] {
  const allowed = new Set(candidates ?? TOPICS.map((t) => t.id));
  const out: string[] = [];
  for (const id of preferred ?? []) {
    if (allowed.has(id) && !out.includes(id)) out.push(id);
    if (out.length >= limit) return out;
  }
  const ranked = topicStandings(progress)
    .filter((s) => allowed.has(s.id) && !out.includes(s.id))
    // Ties (every unpracticed topic scores exactly PRIOR_P) break towards the
    // one with more evidence, then stably by topic order.
    .sort((a, b) => a.score - b.score || b.answered - a.answered);
  for (const s of ranked) {
    out.push(s.id);
    if (out.length >= limit) break;
  }
  return out;
}

/** True when there is enough history for a weak-spot drill to mean anything. */
export function hasWeakSpotEvidence(progress: ProgressData | null): boolean {
  return topicStandings(progress).filter((s) => s.answered >= 3).length >= 2;
}

/**
 * The mastery module's own ranking, which applies its published evidence bar
 * (`weakestTopics` only names topics with enough answered questions to mean
 * something). It leads; our smoothed ranking fills whatever it leaves short.
 */
export function masteryWeakTopics(progress: ProgressData | null, n: number): string[] {
  try {
    return weakestTopics(progress ?? undefined, n).map((t) => t.topicId);
  } catch {
    // The mastery store is another module's; never let it take the interview down.
    return [];
  }
}

// ---------------------------------------------------------------------------
// Selection
// ---------------------------------------------------------------------------

function rotate<T>(arr: T[], by: number): T[] {
  if (arr.length === 0) return arr;
  const k = ((by % arr.length) + arr.length) % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

/** Round-robin across stages so a topic set is never one stage deep. */
function pickTopics(candidates: string[], want: number): string[] {
  const byStage = new Map<number, string[]>();
  for (const id of candidates) {
    const stage = getTopic(id)?.stage ?? 0;
    const bucket = byStage.get(stage);
    if (bucket) bucket.push(id);
    else byStage.set(stage, [id]);
  }
  const queues = [...byStage.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, ids]) => shuffle(ids));
  const out: string[] = [];
  let progressed = true;
  while (out.length < want && progressed) {
    progressed = false;
    for (const q of queues) {
      if (out.length >= want) break;
      const next = q.pop();
      if (next) {
        out.push(next);
        progressed = true;
      }
    }
  }
  return out;
}

/** Reorder so consecutive items rarely share a topic. */
function deCluster<T extends { topic: string }>(items: T[]): T[] {
  const groups = new Map<string, T[]>();
  for (const it of items) {
    const g = groups.get(it.topic);
    if (g) g.push(it);
    else groups.set(it.topic, [it]);
  }
  const out: T[] = [];
  let last: string | null = null;
  while (out.length < items.length) {
    let best: string | null = null;
    let bestLen = 0;
    for (const [topic, arr] of groups) {
      if (arr.length === 0 || topic === last) continue;
      if (arr.length > bestLen) {
        best = topic;
        bestLen = arr.length;
      }
    }
    if (best === null) {
      // Everything left belongs to the topic we just used.
      for (const [topic, arr] of groups) {
        if (arr.length > 0) {
          best = topic;
          break;
        }
      }
    }
    if (best === null) break;
    const arr = groups.get(best);
    const next = arr?.shift();
    if (!next) break;
    out.push(next);
    last = best;
  }
  return out;
}

/** Slot the open-ended prompts through the back two-thirds of the set. */
function interleave(main: QuizItem[], extra: QuizItem[]): QuizItem[] {
  if (extra.length === 0) return main;
  const out = main.slice();
  const start = Math.floor(main.length * 0.3);
  const span = Math.max(1, main.length - start);
  extra.forEach((item, i) => {
    const target = start + Math.round(((i + 1) * span) / (extra.length + 1)) + i;
    out.splice(Math.min(out.length, Math.max(0, target)), 0, item);
  });
  return out;
}

export interface InterviewPlan {
  format: InterviewFormat;
  items: QuizItem[];
  topics: string[];
  /** Set when the plan had to compromise; shown to the candidate up front. */
  note: string | null;
}

export interface PlanOptions {
  /** Role focus. Empty means every stage. */
  stages?: number[];
  progress?: ProgressData | null;
  /** Optional ranking from the mastery module, honoured ahead of our own. */
  preferredWeakTopics?: string[];
}

/**
 * Build a session.
 *
 * The set is assembled one difficulty band at a time so the mix is deliberate
 * rather than whatever the pool happened to contain, and every band is drawn
 * with `buildQuiz`, which round-robins across topics — so the spread across
 * topics is structural, not luck. Ids picked by one band are removed from the
 * pools the next band sees, so nothing repeats inside a session.
 */
export function planInterview(
  formatId: InterviewFormatId,
  opts: PlanOptions = {}
): InterviewPlan {
  const format = FORMATS[formatId];
  const stageFilter = opts.stages && opts.stages.length > 0 ? new Set(opts.stages) : null;
  const candidates = TOPICS.filter((t) => !stageFilter || stageFilter.has(t.stage)).map(
    (t) => t.id
  );

  let note: string | null = null;
  let topics: string[];
  if (formatId === "weak-spot") {
    if (!hasWeakSpotEvidence(opts.progress ?? null)) {
      note =
        "You have not practiced enough for a real weak-spot ranking yet, so this draws from the topics with the least evidence behind them. It will still find gaps — it just cannot promise these are your worst.";
    }
    topics = weakestTopicIds(
      opts.progress ?? null,
      format.breadth,
      candidates,
      opts.preferredWeakTopics ?? masteryWeakTopics(opts.progress ?? null, format.breadth)
    );
  } else {
    topics = pickTopics(candidates, format.breadth);
  }
  if (topics.length === 0) topics = candidates.slice(0, format.breadth);

  const used = new Set<string>();
  const bands: QuizItem[][] = [];
  let order = topics;
  let deficit = 0;

  for (const d of [1, 2, 3] as Difficulty[]) {
    const want = format.mix[d] + deficit;
    if (want <= 0) {
      bands.push([]);
      continue;
    }
    const pools = Object.fromEntries(
      order.map((t) => [t, (QUESTION_POOLS[t] ?? []).filter((q) => !used.has(q.id))])
    );
    const got = buildQuiz(pools, order, want, [d]);
    got.forEach((q) => used.add(q.id));
    deficit = want - got.length;
    bands.push(got);
    // Start the next band on a different topic so band boundaries do not all
    // land on the same one.
    order = rotate(order, Math.max(1, got.length));
  }

  // Anything the bands could not fill (a narrow role focus with few hard
  // questions, say) is topped up from whatever is left, at any difficulty.
  const wantedAuto = format.count - format.qnaCount;
  let have = bands.reduce((n, b) => n + b.length, 0);
  if (have < wantedAuto) {
    const pools = Object.fromEntries(
      order.map((t) => [t, (QUESTION_POOLS[t] ?? []).filter((q) => !used.has(q.id))])
    );
    const fill = buildQuiz(pools, order, wantedAuto - have, [1, 2, 3]);
    fill.forEach((q) => used.add(q.id));
    for (const q of fill) {
      const band = bands[Math.min(2, q.difficulty - 1)];
      if (band) band.push(q);
    }
    have += fill.length;
  }

  // Ramp: fundamentals first, hard last — the shape of a real interview — and
  // de-clustered inside each band so consecutive questions change subject.
  const main = bands.flatMap((b) => deCluster(b));

  let qna: QuizItem[] = [];
  if (format.qnaCount > 0) {
    const qnaPools = Object.fromEntries(
      order.map((t) => [t, (QNA_POOLS[t] ?? []).filter((q) => !used.has(q.id))])
    );
    qna = buildQuiz(qnaPools, order, format.qnaCount, [1, 2, 3]);
    qna.forEach((q) => used.add(q.id));
  }

  const items = interleave(main, deCluster(qna));
  if (items.length < format.count && !note) {
    note = `Only ${items.length} of the usual ${format.count} questions were available for this selection. Widen the focus for a full-length session.`;
  }

  return { format, items, topics, note };
}

// ---------------------------------------------------------------------------
// A recorded attempt
// ---------------------------------------------------------------------------

export type ItemKind = "mc" | "numeric" | "qna";

export interface InterviewItemResult {
  id: string;
  topic: string;
  difficulty: Difficulty;
  kind: ItemKind;
  correct: boolean;
  /** Milliseconds this question was on screen, summed across visits. */
  ms: number;
  flagged: boolean;
  answered: boolean;
  /** Original (unshuffled) choice index for multiple choice, else null. */
  choice: number | null;
  /** Typed response — numeric entry or open-ended draft. Capped on save. */
  text: string;
  /** Open-ended only: whether the candidate actually graded themselves. */
  selfGraded: boolean;
}

export interface InterviewReport {
  id: string;
  date: number;
  format: InterviewFormatId;
  stages: number[];
  allottedMs: number;
  elapsedMs: number;
  /** True when the clock ran out rather than the candidate submitting. */
  expired: boolean;
  items: InterviewItemResult[];
}

// ---------------------------------------------------------------------------
// Analysis — the report card
// ---------------------------------------------------------------------------

export interface Breakdown {
  key: string;
  label: string;
  correct: number;
  total: number;
}

export interface DifficultyRow extends Breakdown {
  bucket: Difficulty | "qna";
}

export interface SlowItem {
  result: InterviewItemResult;
  ratio: number;
}

export interface NextAction {
  topicId: string;
  headline: string;
  detail: string;
  lessonHref: string;
  practiceHref: string;
  practiceLabel: string;
}

export interface ReadinessBand {
  key: "ready" | "close" | "developing" | "early";
  label: string;
  verdict: string;
}

export const READINESS_CAVEAT =
  "This is a written test, and a written test cannot see the half of an interview that decides the outcome: whether you think out loud, ask the clarifying question before you start calculating, state your assumptions, sanity-check the magnitude, and recover gracefully when the interviewer tells you your first answer is wrong. Read this score as a floor on what you know, not a prediction of how the conversation goes.";

function band(percent: number): ReadinessBand {
  if (percent >= 85) {
    return {
      key: "ready",
      label: "Interview-ready on this material",
      verdict:
        "You are answering at the level this format is written for. Remaining misses are specific and worth closing, but the knowledge base is there.",
    };
  }
  if (percent >= 70) {
    return {
      key: "close",
      label: "Close — gaps are specific, not general",
      verdict:
        "You would survive most of this interview. The losses are concentrated rather than spread, which means a short, targeted push closes them.",
    };
  }
  if (percent >= 55) {
    return {
      key: "developing",
      label: "Not yet — the standard questions are getting away",
      verdict:
        "The fundamentals are mostly in place, but the questions an interviewer actually asks are landing about half the time. That reads as unprepared in the room.",
    };
  }
  return {
    key: "early",
    label: "Not ready — work the fundamentals first",
    verdict:
      "Too much of this set went wrong to blame nerves or the clock. Go back to the lessons for the areas below before booking anything.",
  };
}

const STOPWORDS = new Set([
  "the", "and", "for", "with", "from", "that", "this", "what", "when", "which",
  "into", "your", "you", "are", "was", "were", "will", "how", "why", "its",
  "their", "them", "than", "then", "have", "has", "does", "did", "not", "but",
  "all", "any", "one", "two", "per", "over", "under", "more", "most", "less",
  "using", "used", "use", "given", "find", "calculate", "estimate", "shown",
  "figure", "following", "about", "each", "same", "also", "much", "many",
]);

function words(html: string): string[] {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w));
}

/**
 * The lesson section that best matches what the candidate actually got wrong,
 * so the advice is "review §4, Goodman corrections" rather than "study fatigue".
 */
function bestSection(topicId: string, missedPrompts: string[]): { index: number; heading: string } | null {
  const sections = CONTENT[topicId]?.lesson?.sections;
  if (!Array.isArray(sections) || sections.length === 0) return null;
  const missed = new Set(missedPrompts.flatMap(words));
  const bodies = sections.map((s) => new Set(words(s?.html ?? "")));

  // Inverse section frequency. A raw overlap count just elects the longest
  // section, because words like "part", "test" and "cycles" appear in all of
  // them; weighting each hit by 1/(sections containing it) lets the one term
  // that actually names the missed idea — "Miner", "buckling", "datum" — decide.
  const weight = new Map<string, number>();
  for (const t of missed) {
    let df = 0;
    for (const body of bodies) if (body.has(t)) df++;
    if (df > 0) weight.set(t, 1 / df);
  }

  let bestIndex = 0;
  let bestScore = -1;
  sections.forEach((section, i) => {
    let score = 0;
    // A term in the heading is a much stronger signal than the same term buried
    // in the prose.
    for (const t of words(section?.heading ?? "")) if (missed.has(t)) score += 1.5;
    const body = bodies[i];
    if (body) for (const [t, w] of weight) if (body.has(t)) score += w;
    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  });
  const heading = sections[bestIndex]?.heading;
  return heading ? { index: bestIndex, heading } : null;
}

export interface Analysis {
  total: number;
  correct: number;
  percent: number;
  band: ReadinessBand;
  byStage: Breakdown[];
  byTopic: Breakdown[];
  byDifficulty: DifficultyRow[];
  /** Median seconds-on-screen, used as the yardstick for "disproportionate". */
  medianMs: number;
  slowest: SlowItem[];
  slowCorrect: number;
  slowWrong: number;
  unanswered: number;
  ungraded: number;
  flaggedWrong: number;
  actions: NextAction[];
  /** Easy-end minus hard accuracy, or null if either band is too thin to read. */
  difficultySpread: number | null;
  /** What the easy end of that comparison actually was. */
  spreadLabel: string;
  /** True when most topic rows rest on a single question — read stages first. */
  thinTopics: boolean;
  usedMs: number;
  allottedMs: number;
  perItemMs: number;
}

function rate(b: { correct: number; total: number }): number {
  return b.total === 0 ? 0 : b.correct / b.total;
}

export function analyze(report: InterviewReport): Analysis {
  const items = report.items;
  const total = items.length;
  const correct = items.filter((i) => i.correct).length;
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);

  const stageMap = new Map<number, Breakdown>();
  const topicMap = new Map<string, Breakdown>();
  const diffMap = new Map<Difficulty | "qna", DifficultyRow>();

  for (const item of items) {
    const topic = getTopic(item.topic);
    const stageNum = topic?.stage ?? 0;
    const stage = STAGES.find((s) => s.num === stageNum);
    const sKey = String(stageNum);
    const sEntry =
      stageMap.get(stageNum) ??
      ({ key: sKey, label: stage?.name ?? "Other", correct: 0, total: 0 } as Breakdown);
    sEntry.total++;
    if (item.correct) sEntry.correct++;
    stageMap.set(stageNum, sEntry);

    const tEntry =
      topicMap.get(item.topic) ??
      ({
        key: item.topic,
        label: topic?.short ?? item.topic,
        correct: 0,
        total: 0,
      } as Breakdown);
    tEntry.total++;
    if (item.correct) tEntry.correct++;
    topicMap.set(item.topic, tEntry);

    const bucket: Difficulty | "qna" = item.kind === "qna" ? "qna" : item.difficulty;
    const dEntry =
      diffMap.get(bucket) ??
      ({
        key: String(bucket),
        bucket,
        label:
          bucket === "qna"
            ? "Open-ended"
            : bucket === 1
              ? "Fundamentals"
              : bucket === 2
                ? "Standard"
                : "Hard",
        correct: 0,
        total: 0,
      } as DifficultyRow);
    dEntry.total++;
    if (item.correct) dEntry.correct++;
    diffMap.set(bucket, dEntry);
  }

  const byStage = [...stageMap.entries()].sort((a, b) => a[0] - b[0]).map(([, v]) => v);
  const byTopic = [...topicMap.values()].sort((a, b) => rate(a) - rate(b) || b.total - a.total);
  const diffOrder: (Difficulty | "qna")[] = [1, 2, 3, "qna"];
  const byDifficulty = diffOrder
    .map((k) => diffMap.get(k))
    .filter((v): v is DifficultyRow => v !== undefined);

  // Time. Median over items that were actually on screen; an item never
  // visited contributes nothing and must not drag the yardstick to zero.
  const seen = items.map((i) => i.ms).filter((ms) => ms > 0).sort((a, b) => a - b);
  const medianMs =
    seen.length === 0
      ? 0
      : seen.length % 2 === 1
        ? (seen[(seen.length - 1) / 2] ?? 0)
        : ((seen[seen.length / 2 - 1] ?? 0) + (seen[seen.length / 2] ?? 0)) / 2;
  // "Disproportionate" needs both a ratio and an absolute floor: at a 20 s
  // median, 1.6x is 32 s, which is not a finding.
  const slowThreshold = Math.max(medianMs * 1.6, medianMs + 25_000);
  const slowest: SlowItem[] = items
    .filter((i) => i.ms > slowThreshold && i.ms > 20_000)
    // A median of a couple of seconds is not a yardstick — it means the set was
    // clicked through — so the multiple is suppressed rather than printed as
    // "1107x your median".
    .map((result) => ({ result, ratio: medianMs >= 5_000 ? result.ms / medianMs : 0 }))
    .sort((a, b) => b.result.ms - a.result.ms)
    .slice(0, 5);

  // Only claim a difficulty pattern when both ends carry enough questions to
  // support one. A phone screen has a single hard question, and the on-site
  // loop only two fundamentals; "100 points worse on hard questions" from a
  // sample of one or two is not a finding. When the easy end is thin, pool
  // fundamentals with standard rather than going silent — "the easier two
  // thirds vs. the hard third" is still a real comparison.
  const MIN_BAND = 3;
  const d1 = diffMap.get(1);
  const d2 = diffMap.get(2);
  const d3 = diffMap.get(3);
  let easy = d1;
  let easyLabel = "fundamentals";
  if ((!d1 || d1.total < MIN_BAND) && d2) {
    easy = d1
      ? { ...d2, correct: d1.correct + d2.correct, total: d1.total + d2.total }
      : d2;
    easyLabel = d1 ? "the fundamentals and standard questions" : "the standard questions";
  }
  const difficultySpread =
    easy && d3 && easy.total >= MIN_BAND && d3.total >= MIN_BAND
      ? rate(easy) - rate(d3)
      : null;

  // Actions: the topics that actually lost points, worst first, capped at
  // three — a list of ten is a list of none.
  const actions: NextAction[] = [];
  for (const entry of byTopic) {
    if (actions.length >= 3) break;
    const missed = entry.total - entry.correct;
    if (missed === 0) continue;
    if (rate(entry) >= 0.8 && entry.total >= 3) continue;
    const topic = getTopic(entry.key);
    const missedPrompts = items
      .filter((i) => i.topic === entry.key && !i.correct)
      .map((i) => promptOf(i.id) ?? "");
    const section = bestSection(entry.key, missedPrompts);
    const drill = Math.min(20, Math.max(8, missed * 5));
    actions.push({
      topicId: entry.key,
      headline: section
        ? `Review ${topic?.name ?? entry.key} §${section.index + 1} — ${section.heading}`
        : `Review ${topic?.name ?? entry.key}`,
      detail:
        entry.total === 1
          ? `The single question from this topic went wrong, so this is a lead rather than a verdict. Read the section, then drill ${drill} questions to find out whether it is real.`
          : `${missed} of ${entry.total} wrong here. Read the section, then drill ${drill} questions on this topic.`,
      lessonHref: section ? `/learn/${entry.key}#s${section.index}` : `/learn/${entry.key}`,
      practiceHref: `/practice/${entry.key}`,
      practiceLabel: `Drill ${drill} questions`,
    });
  }

  const unanswered = items.filter((i) => !i.answered).length;
  const ungraded = items.filter((i) => i.kind === "qna" && !i.selfGraded).length;
  const flaggedWrong = items.filter((i) => i.flagged && !i.correct).length;
  const usedMs = report.elapsedMs;

  return {
    total,
    correct,
    percent,
    band: band(percent),
    byStage,
    byTopic,
    byDifficulty,
    medianMs,
    slowest,
    slowCorrect: slowest.filter((s) => s.result.correct).length,
    slowWrong: slowest.filter((s) => !s.result.correct).length,
    unanswered,
    ungraded,
    flaggedWrong,
    actions,
    difficultySpread,
    spreadLabel: easyLabel,
    thinTopics:
      byTopic.length > 0 && byTopic.filter((t) => t.total === 1).length / byTopic.length >= 0.6,
    usedMs,
    allottedMs: report.allottedMs,
    perItemMs: total === 0 ? 0 : usedMs / total,
  };
}

// ---------------------------------------------------------------------------
// Resolving stored ids back to questions (for the review section)
// ---------------------------------------------------------------------------

let itemIndex: Map<string, QuizItem> | null = null;

function buildIndex(): Map<string, QuizItem> {
  const map = new Map<string, QuizItem>();
  for (const t of TOPICS) {
    for (const q of QUESTION_POOLS[t.id] ?? []) map.set(q.id, q);
    for (const q of QNA_POOLS[t.id] ?? []) map.set(q.id, q);
  }
  return map;
}

/** The live question behind a stored result, or null if content moved on. */
export function itemById(id: string): QuizItem | null {
  itemIndex ??= buildIndex();
  return itemIndex.get(id) ?? null;
}

function promptOf(id: string): string | null {
  const item = itemById(id);
  if (!item) return null;
  return item.prompt;
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

export function mmss(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export function humanDuration(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rest = s % 60;
  return rest === 0 ? `${m} min` : `${m} min ${rest}s`;
}

export function reportDateLabel(ts: number): string {
  try {
    return new Date(ts).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

// ---------------------------------------------------------------------------
// Persistence — own key, never throws
// ---------------------------------------------------------------------------

const KEY = "mechprep-interviews";
const MAX_REPORTS = 6;
const MAX_TEXT = 700;

const STORAGE_ERROR =
  "This browser would not let the app save your interview history (storage is " +
  "full, or disabled — private browsing is the usual cause). This report is " +
  "complete, but it will be gone when you close the tab.";

let memoryOnly: InterviewReport[] | null = null;
let storageError: string | null = null;

export function interviewStorageError(): string | null {
  return storageError;
}

function sanitizeItem(v: unknown): InterviewItemResult | null {
  if (!v || typeof v !== "object") return null;
  const raw = v as Partial<InterviewItemResult>;
  if (typeof raw.id !== "string" || raw.id === "") return null;
  const kind: ItemKind =
    raw.kind === "mc" || raw.kind === "numeric" || raw.kind === "qna" ? raw.kind : "mc";
  const difficulty: Difficulty =
    raw.difficulty === 1 || raw.difficulty === 2 || raw.difficulty === 3 ? raw.difficulty : 2;
  const ms = Number(raw.ms);
  return {
    id: raw.id,
    topic: typeof raw.topic === "string" ? raw.topic : "",
    difficulty,
    kind,
    correct: !!raw.correct,
    ms: Number.isFinite(ms) && ms >= 0 ? Math.min(ms, 24 * 3_600_000) : 0,
    flagged: !!raw.flagged,
    answered: !!raw.answered,
    choice: typeof raw.choice === "number" && Number.isInteger(raw.choice) ? raw.choice : null,
    text: typeof raw.text === "string" ? raw.text.slice(0, MAX_TEXT) : "",
    selfGraded: !!raw.selfGraded,
  };
}

function sanitizeReport(v: unknown): InterviewReport | null {
  if (!v || typeof v !== "object") return null;
  const raw = v as Partial<InterviewReport>;
  if (typeof raw.id !== "string" || raw.id === "") return null;
  if (!isFormatId(raw.format)) return null;
  const items = Array.isArray(raw.items)
    ? raw.items.map(sanitizeItem).filter((i): i is InterviewItemResult => i !== null)
    : [];
  if (items.length === 0) return null;
  const num = (x: unknown, fallback: number) =>
    Number.isFinite(Number(x)) && Number(x) >= 0 ? Number(x) : fallback;
  return {
    id: raw.id,
    date: num(raw.date, 0),
    format: raw.format,
    stages: Array.isArray(raw.stages)
      ? raw.stages.filter((n): n is number => typeof n === "number")
      : [],
    allottedMs: num(raw.allottedMs, 0),
    elapsedMs: num(raw.elapsedMs, 0),
    expired: !!raw.expired,
    items,
  };
}

function sanitizeAll(v: unknown): InterviewReport[] {
  if (!Array.isArray(v)) return [];
  return v
    .map(sanitizeReport)
    .filter((r): r is InterviewReport => r !== null)
    .sort((a, b) => b.date - a.date)
    .slice(0, MAX_REPORTS);
}

let snapCache: { raw: string | null; data: InterviewReport[] } | null = null;
const EMPTY: InterviewReport[] = [];
const listeners = new Set<() => void>();

function notify() {
  for (const l of listeners) l();
}

export function loadReports(): InterviewReport[] {
  if (typeof window === "undefined") return [];
  if (memoryOnly) return memoryOnly;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    return sanitizeAll(JSON.parse(raw));
  } catch {
    return [];
  }
}

function write(list: InterviewReport[]): boolean {
  try {
    const raw = JSON.stringify(list);
    window.localStorage.setItem(KEY, raw);
    snapCache = { raw, data: list };
    return true;
  } catch {
    return false;
  }
}

/**
 * Persist a finished interview, newest first, keeping the last few.
 *
 * Returns false when the browser refused the write; the report is then held in
 * memory for the rest of the session so the UI never silently loses it, and
 * `interviewStorageError()` explains why.
 */
export function saveReport(report: InterviewReport): boolean {
  if (typeof window === "undefined") return false;
  const clean = sanitizeReport(report);
  if (!clean) return false;
  const next = sanitizeAll([clean, ...loadReports().filter((r) => r.id !== clean.id)]);
  let ok = write(next);
  // Shed history rather than lose the attempt that just happened.
  if (!ok) ok = write(next.slice(0, 2));
  if (!ok) ok = write(next.slice(0, 1));
  if (ok) {
    memoryOnly = null;
    storageError = null;
  } else {
    memoryOnly = next;
    snapCache = null;
    storageError = STORAGE_ERROR;
  }
  notify();
  return ok;
}

export function clearReports(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    // nothing to remove when storage is unavailable
  }
  snapCache = null;
  memoryOnly = null;
  storageError = null;
  notify();
}

function readSnapshot(): InterviewReport[] {
  if (typeof window === "undefined") return EMPTY;
  if (memoryOnly) return memoryOnly;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === null) return EMPTY;
  if (snapCache && snapCache.raw === raw) return snapCache.data;
  let data: InterviewReport[];
  try {
    data = sanitizeAll(JSON.parse(raw));
  } catch {
    data = EMPTY;
  }
  snapCache = { raw, data };
  return data;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

/** Reactive interview history; null during SSR and first hydration. */
export function useInterviewReports(): InterviewReport[] | null {
  return useSyncExternalStore(subscribe, readSnapshot, () => null);
}

export function newId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `i${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
}
