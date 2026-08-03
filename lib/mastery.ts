// Mastery levels, weak-spot detection and an honest readiness estimate.
//
// The rule that shapes this whole file (PRODUCT.md principle 2): mastery must
// be hard to fake. Two consequences run through everything below.
//
// 1. Everything is counted over DISTINCT questions, scored by their MOST RECENT
//    outcome. Answering the same easy question twenty times is one question, not
//    twenty, and a question you have since got right stops counting against you.
// 2. The thresholds require breadth (all three difficulty levels) and, at the
//    top, evidence over time (a spaced-review interval actually survived), so no
//    amount of grinding one difficulty-1 question in one sitting reaches
//    "Mastered".

import { ALL_QNA, ALL_QUESTIONS } from "@/content/index";
import { TOPIC_IDS, TOPICS } from "@/content/topics";
import type { Difficulty } from "@/content/types";
import { getProgress, lessonRead, type ProgressData } from "@/lib/progress";
import { topicSurvivedReview } from "@/lib/review";

export type MasteryLevel = "none" | "attempted" | "familiar" | "proficient" | "mastered";

/** Published thresholds. Every number here is quoted back in `masteryMeta`. */
const FAMILIAR_ANSWERED = 8;
const FAMILIAR_ACCURACY = 0.6;
const PROFICIENT_ANSWERED = 15;
const PROFICIENT_ACCURACY = 0.75;
const MASTERED_ACCURACY = 0.85;

/** A topic needs this many distinct questions before it can be called "weak". */
const WEAKEST_MIN_ANSWERED = 5;

/** Depth at which a topic counts as fully covered for the readiness estimate. */
const READINESS_TARGET_PER_TOPIC = PROFICIENT_ANSWERED;

export const READINESS_CAVEAT =
  "Coverage across all topics weighted by accuracy, from questions answered in " +
  "this browser only. It measures recall on written questions with a known " +
  "answer — nothing else. It cannot tell whether you can talk through a problem " +
  "out loud, sketch a free-body diagram at a whiteboard, defend a design " +
  "decision under follow-up questions, or handle the topics this bank does not " +
  "cover. Treat it as study coverage, not a probability of passing.";

// --- difficulty index -------------------------------------------------------

let difficultyIndex: Map<string, Difficulty> | null = null;

/** item id -> difficulty, built once. Q&A prompts are treated as difficulty 2. */
function difficultyOf(itemId: string): Difficulty | undefined {
  if (!difficultyIndex) {
    difficultyIndex = new Map();
    for (const q of ALL_QUESTIONS) difficultyIndex.set(q.id, q.difficulty);
    for (const q of ALL_QNA) difficultyIndex.set(q.id, 2);
  }
  return difficultyIndex.get(itemId);
}

let topicDifficulties: Map<string, number> | null = null;

/**
 * How many distinct difficulty levels a topic's bank actually offers. The
 * "spans all three difficulties" rule is capped by this so a topic that ships
 * only two levels does not make Proficient unreachable.
 */
function difficultiesAvailable(topicId: string): number {
  if (!topicDifficulties) {
    const seen = new Map<string, Set<Difficulty>>();
    for (const q of ALL_QUESTIONS) {
      let set = seen.get(q.topic);
      if (!set) seen.set(q.topic, (set = new Set()));
      set.add(q.difficulty);
    }
    topicDifficulties = new Map(
      TOPIC_IDS.map((id) => [id, Math.min(3, seen.get(id)?.size ?? 0)])
    );
  }
  return topicDifficulties.get(topicId) ?? 3;
}

// --- per-topic statistics ---------------------------------------------------

interface TopicStats {
  /** Distinct questions answered. */
  answered: number;
  /** Distinct questions whose most recent outcome was correct. */
  correct: number;
  /** correct / answered, or 0 when nothing has been answered. */
  accuracy: number;
  /** Distinct difficulty levels covered by those questions. */
  difficulties: number;
  /**
   * True when the topic's history predates per-question recording, so only
   * aggregate correct/total counts exist. Levels above Familiar are withheld
   * rather than guessed at — see `masteryLevel`.
   */
  legacyOnly: boolean;
}

const EMPTY_STATS: TopicStats = {
  answered: 0,
  correct: 0,
  accuracy: 0,
  difficulties: 0,
  legacyOnly: false,
};

// The home dashboard calls masteryLevel/weakestTopics/readiness for every topic
// on every render, and useProgress hands out a stable snapshot object between
// writes, so memoising per snapshot turns ~75 walks of the attempt log into one.
const statsCache = new WeakMap<ProgressData, Map<string, TopicStats>>();

function topicStats(topicId: string, data: ProgressData): TopicStats {
  let perTopic = statsCache.get(data);
  if (!perTopic) statsCache.set(data, (perTopic = new Map()));
  const hit = perTopic.get(topicId);
  if (hit) return hit;

  const entry = data.topics[topicId];
  const attempts = entry?.attempts ?? [];
  if (attempts.length === 0) {
    perTopic.set(topicId, EMPTY_STATS);
    return EMPTY_STATS;
  }

  // Attempts are stored in creation order, so a later attempt overwrites an
  // earlier verdict on the same question: the score reflects where you are now.
  const latest = new Map<string, boolean>();
  let legacyTotal = 0;
  let legacyCorrect = 0;
  for (const attempt of attempts) {
    const outcomes = attempt.outcomes;
    const itemIds = attempt.itemIds;
    if (outcomes?.length && itemIds?.length) {
      outcomes.forEach((ok, i) => {
        const id = itemIds[i];
        if (id) latest.set(id, ok);
      });
    } else if (attempt.total > 0) {
      // Pre-itemIds history: no question identity, so it can only contribute an
      // aggregate, and only when nothing better exists.
      legacyTotal += attempt.total;
      legacyCorrect += attempt.correct;
    }
  }

  let stats: TopicStats;
  if (latest.size > 0) {
    let correct = 0;
    const levels = new Set<Difficulty>();
    for (const [id, ok] of latest) {
      if (ok) correct++;
      const d = difficultyOf(id);
      if (d) levels.add(d);
    }
    stats = {
      answered: latest.size,
      correct,
      accuracy: correct / latest.size,
      difficulties: levels.size,
      legacyOnly: false,
    };
  } else if (legacyTotal > 0) {
    stats = {
      answered: legacyTotal,
      correct: legacyCorrect,
      accuracy: legacyCorrect / legacyTotal,
      difficulties: 0,
      legacyOnly: true,
    };
  } else {
    stats = EMPTY_STATS;
  }

  perTopic.set(topicId, stats);
  return stats;
}

// --- public API -------------------------------------------------------------

export function masteryLevel(topicId: string, data?: ProgressData): MasteryLevel {
  const d = data ?? getProgress();
  const s = topicStats(topicId, d);
  if (s.answered === 0) return "none";
  if (s.answered < FAMILIAR_ANSWERED || s.accuracy < FAMILIAR_ACCURACY) return "attempted";
  // Aggregate-only history cannot prove breadth, and claiming Proficient on
  // unverifiable evidence is exactly the inflation this model exists to avoid.
  if (s.legacyOnly) return "familiar";
  if (
    s.answered < PROFICIENT_ANSWERED ||
    s.accuracy < PROFICIENT_ACCURACY ||
    s.difficulties < difficultiesAvailable(topicId)
  ) {
    return "familiar";
  }
  if (s.accuracy < MASTERED_ACCURACY || !topicSurvivedReview(topicId, d)) return "proficient";
  return "mastered";
}

const META: Record<MasteryLevel, { label: string; blurb: string }> = {
  none: {
    label: "Not started",
    blurb: "No questions answered yet. Answering one moves this to Attempted.",
  },
  attempted: {
    label: "Attempted",
    blurb:
      `At least one question answered. Familiar needs ${FAMILIAR_ANSWERED} different ` +
      `questions at ${Math.round(FAMILIAR_ACCURACY * 100)}% or better. Repeats of the ` +
      "same question count once, and only your latest answer to it counts.",
  },
  familiar: {
    label: "Familiar",
    blurb:
      `${FAMILIAR_ANSWERED}+ different questions answered, ${Math.round(FAMILIAR_ACCURACY * 100)}%+ ` +
      `correct. Proficient needs ${PROFICIENT_ANSWERED}+ different questions spanning all three ` +
      `difficulty levels at ${Math.round(PROFICIENT_ACCURACY * 100)}%+.`,
  },
  proficient: {
    label: "Proficient",
    blurb:
      `${PROFICIENT_ANSWERED}+ different questions across fundamentals, standard and hard, ` +
      `${Math.round(PROFICIENT_ACCURACY * 100)}%+ correct. Mastered needs ` +
      `${Math.round(MASTERED_ACCURACY * 100)}%+ and at least one question recalled correctly ` +
      "after its spaced-review interval had elapsed — which takes days, not one sitting.",
  },
  mastered: {
    label: "Mastered",
    blurb:
      `${PROFICIENT_ANSWERED}+ different questions across all three difficulty levels, ` +
      `${Math.round(MASTERED_ACCURACY * 100)}%+ correct, and recalled correctly after a spaced ` +
      "review interval elapsed. Missing a question here drops the level back.",
  },
};

export function masteryMeta(level: MasteryLevel): { label: string; blurb: string } {
  return META[level] ?? META.none;
}

/**
 * Lowest-accuracy topics that have enough evidence to be worth naming, weakest
 * first. `attempts` is the number of distinct questions answered in the topic.
 */
export function weakestTopics(
  data?: ProgressData,
  n = 3
): { topicId: string; accuracy: number; attempts: number }[] {
  const d = data ?? getProgress();
  return TOPIC_IDS.map((topicId) => {
    const s = topicStats(topicId, d);
    return { topicId, accuracy: s.accuracy, attempts: s.answered };
  })
    .filter((t) => t.attempts >= WEAKEST_MIN_ANSWERED)
    .sort((a, b) => a.accuracy - b.accuracy || b.attempts - a.attempts)
    .slice(0, Math.max(0, Math.floor(n)));
}

/**
 * Study coverage, 0-100. Each topic contributes
 * `min(1, distinctAnswered / 15) x accuracy`, averaged over every topic, so
 * depth in one topic cannot substitute for breadth and accuracy cannot be
 * separated from volume. Read `caveat` before showing this to anyone.
 */
export function readiness(data?: ProgressData): {
  score: number;
  topicsCovered: number;
  topicsTotal: number;
  caveat: string;
} {
  const d = data ?? getProgress();
  const topicsTotal = TOPIC_IDS.length;
  let sum = 0;
  let topicsCovered = 0;
  for (const topicId of TOPIC_IDS) {
    const s = topicStats(topicId, d);
    if (s.answered > 0) topicsCovered++;
    sum += Math.min(1, s.answered / READINESS_TARGET_PER_TOPIC) * s.accuracy;
  }
  return {
    score: topicsTotal === 0 ? 0 : Math.round((sum / topicsTotal) * 100),
    topicsCovered,
    topicsTotal,
    caveat: READINESS_CAVEAT,
  };
}

/**
 * What to do next: pick up where the last session stopped, or start the first
 * unfinished topic. Never returns null for a user with topics available —
 * "nothing to continue" is a dead end, and PRODUCT.md principle 1 forbids it.
 */
export function continueTarget(
  data?: ProgressData
): { topicId: string; kind: "lesson" | "practice" } | null {
  const d = data ?? getProgress();
  if (TOPICS.length === 0) return null;

  let recent: string | null = null;
  let recentAt = -1;
  for (const topicId of TOPIC_IDS) {
    for (const attempt of d.topics[topicId]?.attempts ?? []) {
      if (attempt.date > recentAt) {
        recentAt = attempt.date;
        recent = topicId;
      }
    }
  }

  const target = (topicId: string) =>
    ({ topicId, kind: lessonRead(topicId, d) ? "practice" : "lesson" }) as const;

  // Finished with the last topic touched? Move on to the first one that is not.
  if (recent && masteryLevel(recent, d) !== "mastered") return target(recent);

  const nextUnfinished = TOPIC_IDS.find((id) => masteryLevel(id, d) !== "mastered");
  if (nextUnfinished) return target(nextUnfinished);

  // Everything is mastered: keep the weakest topic warm rather than say "done".
  const weakest = weakestTopics(d, 1)[0];
  return { topicId: weakest?.topicId ?? TOPIC_IDS[0], kind: "practice" };
}
