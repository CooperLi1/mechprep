// Content schema for MechPrep. All rich-text fields are HTML strings
// (rendered via HtmlContent). Figures are complete inline <svg> strings.

export type Difficulty = 1 | 2 | 3; // 1 = fundamentals, 2 = standard interview, 3 = hard

export interface Stage {
  num: number;
  name: string;
  desc: string;
}

export interface Topic {
  id: string;
  name: string;
  short: string; // short label for chips/cards
  stage: number;
  blurb: string;
}

interface QuestionBase {
  id: string; // "<topicId>-q<nn>", unique across the app
  difficulty: Difficulty;
  prompt: string; // HTML
  figure?: string; // complete <svg> string
  explanation: string; // HTML — full worked solution / reasoning
  /**
   * Optional nudge shown on request before answering (HTML). Point at the
   * governing principle or first step — never state the answer. When absent,
   * the UI falls back to the first sentence of `explanation`.
   */
  hint?: string;
}

export interface MCQuestion extends QuestionBase {
  type: "mc";
  choices: string[]; // HTML allowed; 4 choices preferred
  answer: number; // index into choices
  /**
   * Optional, index-aligned with `choices`: why each *wrong* choice is wrong
   * (HTML). Shown to the user when they pick that choice. The entry at
   * `answer` is ignored; use an empty string to skip a choice.
   */
  whyWrong?: string[];
}

export interface NumericQuestion extends QuestionBase {
  type: "numeric";
  answer: number;
  unit?: string; // shown next to the input
  tolerance?: number; // relative tolerance, default 0.03
}

export type Question = MCQuestion | NumericQuestion;

export interface QnAItem {
  id: string; // "<topicId>-qa<nn>"
  q: string; // HTML — open-ended interview question
  a: string; // HTML — model answer to self-grade against
}

export interface LessonSection {
  heading: string;
  html: string; // HTML; may embed <svg> figures wrapped in <figure class="fig">
}

export interface Lesson {
  title: string;
  intro: string; // HTML
  sections: LessonSection[];
  equations: { name: string; formula: string; note?: string }[]; // formula is HTML
  interviewTips: string[]; // plain text
}

export interface TopicContent {
  lesson: Lesson;
  questions: Question[];
  qna: QnAItem[];
}
