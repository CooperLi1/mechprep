import type { Lesson } from "@/content/types";
import { figureCount, wordCount } from "./text";

export interface LessonStats {
  words: number;
  figures: number;
  /** Whole minutes, never below 1. */
  minutes: number;
}

/**
 * 180 words a minute rather than the usual 200-250: this is technical prose
 * with equations inline, and the estimate should not flatter the reader.
 * A diagram is worth 15 seconds — you stop and look at it — and a row in the
 * key-equations table about 8.
 */
const WORDS_PER_MINUTE = 180;
const SECONDS_PER_FIGURE = 15;
const SECONDS_PER_EQUATION = 8;

export function lessonStats(lesson: Lesson): LessonStats {
  let words = wordCount(lesson.intro);
  let figures = figureCount(lesson.intro);
  for (const section of lesson.sections) {
    words += wordCount(section.html);
    figures += figureCount(section.html);
  }
  const seconds =
    (words / WORDS_PER_MINUTE) * 60 +
    figures * SECONDS_PER_FIGURE +
    lesson.equations.length * SECONDS_PER_EQUATION;
  return { words, figures, minutes: Math.max(1, Math.round(seconds / 60)) };
}
