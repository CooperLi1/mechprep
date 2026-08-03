# MechPrep — Mechanical Engineering Interview Practice

A fully local practice site for mechanical engineering interviews: a mini
Khan Academy with lessons, textbook-style diagrams, a large question bank,
open-ended interview Q&A, and a custom test builder. No accounts, no network
calls — progress lives in your browser's localStorage.

## Run it

```bash
npm install   # first time only
npm run dev   # then open http://localhost:3000
```

For a production build: `npm run build && npm start`.

## The idea

A question bank makes *you* decide what to study every time you open it. This
tries to be a coach instead: the home screen answers "what should I do right
now?", and the app tracks whether its own advice worked.

## What's inside

**The daily loop**

- **Home** (`/`) — what to continue, what is due for review, your weakest area,
  and a readiness figure that states plainly what it cannot measure.
- **Review** (`/review`) — spaced repetition. Anything you miss is rescheduled
  (wrong → 1 day, right → the interval stretches) and comes back. The nav
  carries a live due count.
- **Mock Interview** (`/interview`) — a timed set with no feedback until the
  end, in three formats (phone screen, on-site loop, weak-spot drill), followed
  by a report card that locates the weakness by topic, by difficulty and by
  time spent.

**The material** — 25 topics across 6 stages, ~1,400 questions, ~250 open-ended
interview Q&As, and 450+ hand-drawn SVG diagrams.

- **Lessons** (`/learn/<topic>`) — long-form articles with figures, an equation
  table and interview tips. Each section ends with one inline question, and
  missing it schedules that question for review.
- **Practice** (`/practice/<topic>`) — per-topic quizzes, instant-feedback or
  exam mode, difficulty filters.
- **Question Bank** (`/bank`) — browse, search and filter every question with
  its worked solution.
- **Formula Sheet** (`/reference`) — every equation in the app on one filterable
  page, with a print stylesheet for the morning of an interview.
- **Interview Q&A** (`/qna`) — open-ended prompts with model answers.
- **Custom test** (`/test`) — mix any topics into your own set.

**⌘K** opens a command palette over the whole corpus — topics, lesson sections,
equations and questions.

## Content

All content is TypeScript data in `content/library/<topic>.ts` (schema in
`content/types.ts`, authoring rules in `content/CONTENT_GUIDE.md`). Figures
are inline SVG — no image files.

Validate content against the schema and quality gates:

```bash
npm run validate
```

`validate` is a real gate, not a smoke test. Beyond the schema it catches the
defect classes that are invisible when you read the source:

- **TeX escapes that silently collapse.** `\sigma` in a template literal is an
  unknown escape, so JavaScript turns it into the bare word "sigma" and the page
  renders "εsigma A". This shipped 45 times.
- **HTML `<sub>` inside an SVG `<text>`.** `sub`/`sup` are on the HTML5
  foreign-content breakout list: the parser exits the `<svg>` at that tag and
  **discards every element after it**. Four diagrams were reduced to bare axes
  before this check existed.
- **Entities that render as literal text** — a missing semicolon (`&Sigma F`),
  or an entity that does not exist (`&sup4;`).
- **A bank you can pass without engineering.** The check simulates the actual
  attack — *always pick the longest choice* — and scores it against the 25%
  chance baseline. Per-question length ratios miss this: eleven topics once
  scored 41–79% while every individual question looked fine.
- Answer keys clustered on one index, near-duplicate prompts within *and*
  across topics, vocabulary-recall phrasing, dishonest difficulty labels, and
  numeric answers whose worked solution never shows the answer.

`/figures` renders every diagram in the app on one page for visual QA. Note
that several defect classes — a label overlapping geometry, a diagram that
contradicts its caption, a figure that gives away its own answer — are only
findable by looking. Render before you trust.
