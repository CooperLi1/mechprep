# MechPrep Content Authoring Guide

This document is the contract for authoring topic content. The reference
implementation is `content/library/statics.ts` — **read it in full before
writing anything**, and match or exceed its quality.

## File layout

Each topic is one file: `content/library/<topic-id>.ts`, default-exporting a
`TopicContent` object (see `content/types.ts`). Do not touch any file except
the topic files assigned to you.

## Hard requirements (enforced by `npm run validate`)

Per topic:
- Lesson: real title, intro ≥120 chars, **≥4 sections** (aim for 5–6), **≥2
  SVG figures** in the lesson (aim for 3), **≥4 key equations** (aim 6–8),
  **≥3 interview tips** (aim 5).
- **≥30 questions**: unique ids `<topic-id>-q01`, `-q02`, …;
  every explanation ≥80 chars (in practice 400–900 chars of worked solution);
  MC answer index in range; no duplicate choices.
- **≥3 questions with figures** (aim 6–8).
- Cover all three difficulties: roughly 8× difficulty 1, 14× difficulty 2,
  8× difficulty 3.
- Mix types: ~2/3 `mc` (4 choices), ~1/3 `numeric`.
- **≥8 QnA items** (aim 9–10): ids `<topic-id>-qa01`, …; answers are full
  model answers (500–1200 chars), not one-liners.
- SVG element ids (markers etc.) must be **globally unique across the app** —
  always prefix them with a short figure-specific code, e.g. a beam-bending
  figure 2 uses `id="bb2-load"`, `url(#bb2-load)`.
- **Never put HTML `<sub>` or `<sup>` inside an SVG `<text>` element.** SVG is
  a different XML namespace; `<sub>` is not an SVG element and the renderer
  **drops its text content entirely**. A label written `T<sub>&infin;</sub>`
  appears on screen as a bare "T". This shipped 40 times, silently corrupting
  diagram labels across seven topics. Use instead:

      <text x="80" y="24">R<tspan baseline-shift="sub" font-size="9">1</tspan></text>

  and `baseline-shift="super"` for superscripts.
- Every question bank file must carry figures, **including the `.extra.ts`
  files** — for a long time all 18 of them had zero diagrams between them
  while the base files had 91.

Run validation after writing each topic:

    npx tsx scripts/validate.ts 2>&1 | grep -A40 '— <topic-id>$'

and confirm your topics report **zero ERROR lines** (placeholder topics owned
by others will still fail — ignore those). Also confirm the file compiles:
`npx tsx scripts/validate.ts` exiting without a TypeScript syntax crash is
sufficient.

## Correctness bar (non-negotiable)

- Every numeric answer must be **recomputed by you step by step** in the
  explanation; the explanation must show the equation, the substitution, and
  the result. Round answers to 3 significant figures; default grading
  tolerance is ±3% (set `tolerance` explicitly if the answer needs it).
- MC distractors must be *plausible errors* (wrong moment arm, forgotten
  factor of 2, unit slip) — and the explanation should call out the trap.
- Question style: model them on real MechE interview screens (FBD setups,
  quick estimates, "which fails first", classic gotchas), not textbook
  plug-and-chug only. Include the standard interview classics for your topic.
- Explanations teach — but **not to a template**. An earlier version of this
  guide said "end with a sanity check, rule of thumb, or the follow-up an
  interviewer would ask", and 1,431 explanations then ended exactly that way.
  The result reads as machine-generated regardless of how good the engineering
  is. See the Voice section below.

## The question bar: "would this show up in an interview?"

Apply this test to every question. **If the answer is a definition, it is a bad
question. If the answer needs a modeling decision plus a number, it is a good
one.**

Write questions that look like a real screen: "here's a bracket, where does it
fail?", "estimate the deflection", "which resistance dominates?", "why did this
shaft break?", "this FEA result is wrong — why?". Order-of-magnitude estimates,
classic traps interviewers deliberately set, and design tradeoffs with a
defensible answer all qualify.

**Delete on sight:**

- Vocabulary recall — "which statement best describes…", "what does X stand
  for", "which term means…".
- Giveaway distractor sets where three options are physically absurd. Real
  examples that shipped and had to be removed: *"Nylon becomes a metal during
  molding"*, *"reflected beams are massless"*, *"the Stefan-Boltzmann constant
  changed with age"*.
- Questions whose only difficulty is arithmetic.
- Near-duplicates of another question in the same topic — **diff your `.extra`
  file against the base file.** Six exact duplicate pairs once shipped in a
  single topic because nobody cross-checked.

### Two defects that let a candidate score without knowing any engineering

These were measured across the bank and are now hard-failed by `validate`:

1. **Answer-key clustering.** 14 of 18 base files once keyed *every* MC at
   index 0 — "always answer A" scored 100% on nine of them. Spread the correct
   answer across 0–3, and check per file, not per topic: merging a base and an
   `.extra` file hides the imbalance.
2. **The correct choice being the longest.** 175 questions gave themselves away
   this way; in one topic it was 89% of them. Keep all four choices within
   roughly the same length. A long hedged correct answer beside three short
   wrong ones is answerable with zero domain knowledge.

   **Measure the attack, not the question.** A per-question length ratio is not
   enough — every item can pass a ratio check while the topic as a whole is
   still solvable. `validate` simulates what a test-taker actually does:
   *always pick the longest choice*, scored against the 25% chance baseline.
   When that check was first run, eleven topics scored 41–79%; one was 19 of
   24 (p ≈ 1e-7). Individually, not one of those questions looked wrong.

   **Fix it by raising the distractors, not padding them.** Correct answers run
   long because they are written with care and qualification while distractors
   are thrown away. Make every wrong choice a *specific, plausible engineering
   error stated with the same care* — length equalises as a side effect and the
   question gets better. Padding with filler games the metric and helps nobody.

   **Aim for chance, not zero.** This is not a footnote — it actually happened
   here. The one-sided version of this instruction ("drive the number down")
   took eight topics to **exactly 0%**, where the correct answer is never the
   longest. That is the same tell backwards: eliminate the longest option,
   guess among the remaining three, and you score **33%** instead of 25%. A big
   exploit was replaced with a small one, and the gate reported success
   throughout because it only measured one direction.

   `validate` is therefore two-sided: it errors above 40% **and** below 10%.
   In roughly one question in four the correct answer *should* legitimately be
   the longest. The fix is to stop suppressing that, not to manufacture it.
   Never pad the correct answer, never shorten distractors to compensate, and
   if hitting the target would damage a question, leave the question alone.

   The general lesson, since it will apply to the next metric too: **the
   statistic serves the questions, not the reverse.** Any measure you optimise
   directly stops measuring what you cared about. Check the goal, not the
   proxy — here that means asking "can this be answered without engineering?"
   in both directions, not "is the number lower than it was?"

3. **The figure answering the question.** One topic had 12 of 13 figure-bearing
   questions printing the keyed answer on the diagram, six of them by reusing a
   lesson figure verbatim. A figure should give the reader what they need to
   *do the work*, not the result of it. If the diagram is already labelled with
   the answer, either redraw it for the question or drop the figure.

Difficulty labels must be honest. Difficulty 3 means a real modeling decision,
not a bigger number — a single division with the formula printed in the prompt
is difficulty 1 no matter how intimidating the units look.

## Stay inside your topic's boundary

Neighbouring topics overlap in the real world, which is exactly why the split
has to be deliberate. When topics were authored in parallel without it, a third
of one became another's material, the same locating-scheme question appeared in
three files, and two topics shipped **opposite answers to the identical
problem** — with the wrong one naming the right one as "the trap".

Before writing, check what the adjacent topics already own, and diff your
`.extra` file against the base file *and* against your neighbours. `validate`
scans for near-duplicate prompts within and across topics, but it cannot catch
two questions that contradict each other in substance.

## Verify the numbers you are given

Corrections arrive from audits, from briefs, and from your own algebra, and all
three have been wrong here. Agents on this project have caught: a "corrected"
polytropic volume that was further off than the original, an uncertainty target
that was mathematically unreachable, an equal-mass tube comparison that was 56%
of the stated area, and — in one case — an error in the agent's own analytical
shortcut, found by checking it against a case with a known closed form.

Recompute before you apply. If you disagree with a correction, say so with your
working rather than applying it.

## HTML conventions (content strings)

- Plain HTML only. **No markdown, no LaTeX, no code fences.**
- Math: HTML + Unicode entities. Variables in plain text or `<em>`;
  subscripts/superscripts via `<sub>`/`<sup>`; Greek via entities
  (`&sigma;` σ, `&tau;` τ, `&epsilon;` ε, `&theta;` θ, `&Delta;` Δ,
  `&mu;` μ, `&omega;` ω, `&pi;` π, `&Sigma;` Σ, `&radic;` √, `&middot;` ·,
  `&times;` ×, `&minus;` −, `&le;` ≤, `&rarr;` →, `&deg;` °, `&perp;` ⊥).
- Display equations: `<p class="eq">M = F &middot; d</p>`.
- Callouts: `<div class="callout">…</div>` (blue) or
  `<div class="callout warn">…</div>` (amber).
- Tables: plain `<table><thead><tr><th>…` — styled automatically.
- Lesson figures: wrap in
  `<figure class="fig">${"${figName}"}<figcaption>…</figcaption></figure>`.
- Content lives in TS template literals: **never use a backtick or `${` inside
  the content text itself** (interpolating figure consts is fine).
- **Never write a TeX escape.** `\sigma` inside a template literal is an
  unknown escape, so JavaScript silently collapses it to the bare word
  `sigma` and the page renders "εsigma A". Use `&sigma;`. This shipped 45
  times before `validate` learned to catch it, and it is invisible when
  reading the source.
- **Entities need their semicolon.** `&Sigma F = ma` renders as exactly that
  literal text. Write `&Sigma; F = ma`.

## SVG figure conventions (quality bar — no exceptions)

Figures must look like clean textbook diagrams. NO ascii art, no crude
squiggles, no unlabeled geometry. Study the statics exemplar figures first.

- Root: `<svg viewBox="0 0 460 H" xmlns="http://www.w3.org/2000/svg"
  font-family="system-ui, sans-serif" font-size="13">` with H ≈ 200–280.
  White card background and border come from site CSS — do not draw your own
  background rect.
- Palette: structure/ink `#334155`, applied loads/heat `#dc2626`, reactions/
  results/highlights `#1d4ed8`, dimensions & annotations `#64748b`,
  member fill `#dbeafe`, light gray fill `#e2e8f0`, warm fill `#fee2e2`.
- Arrows: define `<marker>` arrowheads in `<defs>` (copy the exemplar) and use
  `marker-end`. Load arrows stroke-width 2.5, dimension lines 1.
- Standard symbols drawn properly: pin = triangle + pin dot + ground line +
  hatching; roller = triangle + two circles + ground line; fixed support /
  wall = thick line + diagonal hatching; ground = hatched line.
- Dimension lines: thin gray lines with end ticks and a centered label
  (`1 m`, `0.3 m`), offset below/beside the geometry — never overlapping it.
- Every load, support, dimension, and key point labeled (A, B, P = 10 kN…).
- Check for overlap mentally: keep ≥12 px between text and geometry; text
  size 12–13; titles at the top only if they add information.
- Graphs (S–N curves, stress–strain, cycle diagrams, V/M diagrams): draw
  axes with arrowheads and axis labels, the curve as a smooth `<path>`, and
  annotate the salient features (yield point, endurance limit, knee, peak).

## Voice

Write like a sharp senior engineer coaching a candidate: direct, concrete,
zero filler. Explain *why*, name the mistakes people actually make, and tie
concepts to real hardware (bolts, shafts, brackets, heat sinks).

**Vary the shape.** This matters more than any word choice. Uniform structure
is the single loudest signal that text was generated, and it is what went wrong
here: every explanation opened by restating the setup, ran the equations, named
a trap, then offered an interviewer follow-up. Measured across the bank that
produced 216 "interviewer", 142 "trap", 127 "sanity check" and 411 em-dashes.

So:
- **Length varies with the question.** A difficulty-1 unit conversion needs two
  sentences, not 900 characters.
- **Openings vary.** Lead with the answer, or with the common mistake, or with
  the equation alone. Not always with a restatement of the prompt.
- **Endings vary.** Most explanations should stop at the number. Ending every
  one with a lesson dilutes the ones that have a real lesson.

**Banned:** "Follow-up an interviewer will ask", "The trap is…", "Sanity
check:", "Two honest caveats:", "The whole question is…", "It's not just X,
it's Y", "In practice,", "That said,", "Crucially,", "It's worth noting",
"comes down to", "real-world", and the words *robust, leverage, delve, nuanced,
comprehensive, holistic*.

**Rationed:** em-dashes (a full stop is nearly always better — two short
sentences beat one hinged sentence) and rule-of-three lists (often the third
item is padding; cut to two, or extend to four when four genuinely exist).

**Cut the throat-clearing.** Do not announce what you are about to do. "Using
cos 60° gives 20 N·m. That component pushes the socket onto the fastener and
makes no torque at all" says everything that "The two traps are both worth
naming…" was building up to.

## Optional coaching fields (added 2026-08)

- `hint` (any question, HTML): a nudge shown on request in practice mode and
  lesson checks. Point at the governing principle or first step; never state
  the answer. When absent the UI falls back to the first sentence of
  `explanation` (skipped automatically if that sentence would leak the verdict).
- `whyWrong` (MC only, `string[]` index-aligned with `choices`, HTML): why each
  wrong choice is wrong, shown when the user picks it. Use `""` to skip a
  choice; the entry at `answer` is ignored. Write it as the diagnosis of the
  specific mistake that leads to that choice, not a restatement of the right
  answer.
