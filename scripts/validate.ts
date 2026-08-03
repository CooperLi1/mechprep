/**
 * Content validation. Run with: npm run validate
 * Enforces the content contract for every topic:
 *  - lesson: real title, intro, >=4 sections, >=2 SVG figures, >=4 equations, >=3 tips
 *  - questions: >=30, unique ids with correct prefix, valid answers, explanations
 *  - qna: >=8 items with substantive answers
 *  - SVG sanity: balanced tags, viewBox present, no <script>, no external refs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { TOPICS } from "../content/topics";
import { CONTENT, RAW_MODULE_EXTRA, RAW_MODULE_QUESTIONS } from "../content/index";
import type { Question } from "../content/types";

let errors = 0;
let warnings = 0;

function err(msg: string) {
  errors++;
  console.error(`  ERROR: ${msg}`);
}
function warn(msg: string) {
  warnings++;
  console.warn(`  warn:  ${msg}`);
}

function checkSvg(svg: string, where: string) {
  const opens = (svg.match(/<svg\b/g) ?? []).length;
  const closes = (svg.match(/<\/svg>/g) ?? []).length;
  if (opens === 0) err(`${where}: figure has no <svg> tag`);
  if (opens !== closes) err(`${where}: unbalanced <svg> tags (${opens} open, ${closes} close)`);
  if (!/viewBox=/.test(svg)) err(`${where}: svg missing viewBox`);
  if (/<script/i.test(svg)) err(`${where}: svg contains <script>`);
  if (/xlink:href=["']https?:|href=["']https?:/.test(svg)) err(`${where}: svg references external URL`);
  if (/<image/i.test(svg)) warn(`${where}: svg embeds an <image> (should be pure vector)`);
  if (svg.length < 400) warn(`${where}: svg is suspiciously small (${svg.length} chars) — likely low quality`);
  checkSvgIds(svg, where);
  checkSvgText(svg, where);
  checkSvgBounds(svg, where);
  // text intended to be visible needs a fill or inherits default black — fine.
}

// SVG lives in its own XML namespace: HTML formatting elements are NOT valid
// there. A <sub>/<sup>/<b>/<br> inside <text> is parsed as an unknown SVG
// element and its text content is DROPPED by the renderer, so a label written
// as T<sub>&infin;</sub> silently renders as a bare "T". Use
// <tspan baseline-shift="sub" font-size="9">…</tspan> instead.
const HTML_IN_SVG = /<(sub|sup|b|i|strong|em|br|p|div|span)\b/i;
function checkSvgText(svg: string, where: string) {
  for (const m of svg.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)) {
    const inner = m[1];
    const bad = inner.match(HTML_IN_SVG);
    if (bad)
      err(
        `${where}: <${bad[1]}> inside <text> DESTROYS THE REST OF THE FIGURE. sub/sup/b/i/p/br are on the HTML5 foreign-content breakout list: the parser exits the <svg> at this tag, every later element is discarded, and the remainder spills into the page as raw HTML. Use <tspan baseline-shift="sub|super" font-size="9">. Offending label: ${inner.replace(/\s+/g, " ").slice(0, 60)}`
      );
  }
  // catch the same mistake outside <text> but still inside the svg body
  const outside = svg.replace(/<text\b[^>]*>[\s\S]*?<\/text>/g, "");
  const stray = outside.match(HTML_IN_SVG);
  if (stray) warn(`${where}: stray HTML element <${stray[1]}> inside <svg> — not valid SVG`);
}

// Text positioned outside the viewBox is invisible. Catch gross overruns.
function checkSvgBounds(svg: string, where: string) {
  const vb = svg.match(/viewBox="([\d.\-\s]+)"/);
  if (!vb) return;
  const [, , w, h] = vb[1].trim().split(/\s+/).map(Number);
  if (!Number.isFinite(w) || !Number.isFinite(h)) return;
  for (const m of svg.matchAll(/<text\b[^>]*\bx="([\d.\-]+)"[^>]*\by="([\d.\-]+)"/g)) {
    const x = Number(m[1]);
    const y = Number(m[2]);
    if (x < -2 || x > w + 2 || y < -2 || y > h + 2)
      warn(`${where}: <text> at (${x}, ${y}) falls outside viewBox 0 0 ${w} ${h} — will be clipped`);
  }

  // The anchor point being inside the viewBox is not enough. A long caption
  // centred at x≈230 in a 460-wide box runs off both ends, and this is the most
  // common real defect in the figure set: captions are written with no width
  // budget, so anything past ~76 characters is silently cut.
  //
  // Advance width is estimated at 0.50em per character. That constant is
  // measured, not guessed: getComputedTextLength() on six real captions in the
  // figures' own font stack gives a mean of 0.4626 em/char and a max of 0.4955,
  // so 0.50 sits just above the worst case. An earlier 0.55 over-reported by
  // ~19% and flagged 142 captions against ~31 that a render-verified audit
  // actually measured as clipped. The 6-unit tolerance absorbs the remainder.
  const svgFont = Number(svg.match(/<svg\b[^>]*\bfont-size="([\d.]+)"/)?.[1] ?? 13);
  for (const m of svg.matchAll(
    /<text\b([^>]*)>([\s\S]*?)<\/text>/g
  )) {
    const attrs = m[1];
    const label = m[2].replace(/<[^>]*>/g, "").replace(/&[a-zA-Z#0-9]+;/g, "x").trim();
    if (!label) continue;
    const x = Number(attrs.match(/\bx="([\d.\-]+)"/)?.[1] ?? NaN);
    if (!Number.isFinite(x)) continue;
    const size = Number(attrs.match(/\bfont-size="([\d.]+)"/)?.[1] ?? svgFont);
    const anchor = attrs.match(/text-anchor="(middle|end|start)"/)?.[1] ?? "start";
    const est = label.length * size * 0.50;
    const left = anchor === "middle" ? x - est / 2 : anchor === "end" ? x - est : x;
    const right = left + est;
    if (left < -6 || right > w + 6)
      warn(
        `${where}: caption "${label.slice(0, 42)}${label.length > 42 ? "…" : ""}" is ~${Math.round(est)} units wide, anchored ${anchor} at x=${x}, so it spans ${Math.round(left)}..${Math.round(right)} in a ${w}-wide viewBox — it will be clipped. Shorten it, split to a second line, or widen the viewBox.`
      );
  }
}

function extractSvgs(html: string): string[] {
  return html.match(/<svg[\s\S]*?<\/svg>/g) ?? [];
}

function checkHtml(html: string, where: string) {
  if (/```/.test(html)) err(`${where}: contains markdown code fence — HTML only`);
  if (/\$\S+\$/.test(html)) warn(`${where}: looks like LaTeX ($...$) — should be HTML/Unicode math`);
  for (const tag of ["ul", "ol", "table", "p", "figure"]) {
    const o = (html.match(new RegExp(`<${tag}[\\s>]`, "g")) ?? []).length;
    const c = (html.match(new RegExp(`</${tag}>`, "g")) ?? []).length;
    if (o !== c) err(`${where}: unbalanced <${tag}> tags (${o} open, ${c} close)`);
  }
}

// Phrases from the machine-generated question templates. Any survivor means an
// explanation or prompt was not rewritten into question-specific content.
const BOILERPLATE: RegExp[] = [
  /This question is testing engineering judgment/i,
  /How to use it:\s*when/i,
  /turn the rule into an explicit modeling choice/i,
  /Which statement best reflects/i,
  /what is the best way to reason about/i,
  /Treat it as a vocabulary detail/i,
  /Ignore it until after choosing a final design/i,
  /Assume it always improves performance regardless/i,
  /state the assumption that would make that rule invalid/i,
];

function checkBoilerplate(html: string, where: string) {
  for (const re of BOILERPLATE) {
    if (re.test(html)) {
      err(`${where}: contains template boilerplate (/${re.source.slice(0, 40)}.../) — must be rewritten`);
      return;
    }
  }
}

// ---------------------------------------------------------------------------
// Interview-realism heuristics
//
// The bar for this app is "would this show up in a real interview?". A question
// whose answer is a definition fails that bar. These patterns catch the common
// shapes of vocabulary-recall filler; they are warnings because a handful of
// legitimate questions do phrase themselves this way, but a topic carrying
// several is a topic that needs rewriting.
// ---------------------------------------------------------------------------
const VOCAB_RECALL: RegExp[] = [
  /which statement best (describes|reflects|captures|summari[sz]es)/i,
  /which of the following best (describes|defines|explains)/i,
  /what does\s+[^<>?]{2,40}\s+stand for/i,
  /which term (best )?(describes|means|refers to|denotes)/i,
  /is the definition of/i,
  /which statement (is|are) true about/i,
  /which of these is the correct definition/i,
  /what is the (name|term) (for|given to)/i,
];

function checkVocabRecall(prompt: string, where: string) {
  for (const re of VOCAB_RECALL) {
    if (re.test(prompt)) {
      warn(
        `${where}: reads as vocabulary recall (/${re.source.slice(0, 38)}.../) — rewrite so the answer needs a modeling decision, not a definition`
      );
      return;
    }
  }
}

const stripTags = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

// A correct choice noticeably longer than its distractors is a giveaway: test
// takers pick the longest, most-hedged option without doing the physics.
function checkChoiceBalance(q: Extract<Question, { type: "mc" }>, where: string) {
  const lens = q.choices.map((c) => stripTags(c).length);
  const correct = lens[q.answer];
  const others = lens.filter((_, i) => i !== q.answer);
  if (others.length === 0) return;
  const meanOther = others.reduce((a, b) => a + b, 0) / others.length;
  if (meanOther >= 25 && correct > meanOther * 1.7)
    warn(
      `${where}: correct choice is ${Math.round(correct / meanOther * 100)}% the length of the average distractor — length alone gives the answer away`
    );
  const maxOther = Math.max(...others);
  if (correct > 40 && maxOther < correct * 0.45)
    warn(`${where}: distractors are far shorter than the correct choice — they read as filler`);
}

// Near-duplicate prompts inside one topic waste a question slot.
function normPrompt(html: string): string {
  return stripTags(html)
    .toLowerCase()
    .replace(/[\d.,]+/g, "#")
    .replace(/[^a-z# ]/g, "")
    .trim();
}
function jaccard(a: string, b: string): number {
  const A = new Set(a.split(" ").filter((w) => w.length > 3));
  const B = new Set(b.split(" ").filter((w) => w.length > 3));
  if (A.size === 0 || B.size === 0) return 0;
  let inter = 0;
  for (const w of A) if (B.has(w)) inter++;
  return inter / (A.size + B.size - inter);
}

const seenIds = new Set<string>();

// SVG element ids (markers, gradients…) must be unique across *distinct*
// figures: many figures render on a single page and duplicate ids make
// url(#...) references resolve to another figure's definition. The same
// figure string reused in two places is fine.
const svgIdOwners = new Map<string, string>(); // element id -> svg string hash
function checkSvgIds(svg: string, where: string) {
  for (const m of svg.matchAll(/\bid="([^"]+)"/g)) {
    const id = m[1];
    const owner = svgIdOwners.get(id);
    if (owner === undefined) svgIdOwners.set(id, svg);
    else if (owner !== svg)
      err(`${where}: svg element id "${id}" also used by a different figure — prefix ids with the figure name`);
  }
}

function checkQuestion(q: Question, topicId: string) {
  const where = q.id || `${topicId}-<missing id>`;
  if (!q.id.startsWith(`${topicId}-q`)) err(`${where}: id must start with "${topicId}-q"`);
  if (seenIds.has(q.id)) err(`${where}: duplicate question id`);
  seenIds.add(q.id);
  if (![1, 2, 3].includes(q.difficulty)) err(`${where}: bad difficulty ${q.difficulty}`);
  if (!q.prompt || q.prompt.length < 30) err(`${where}: prompt missing or too short`);
  if (!q.explanation || q.explanation.length < 80)
    err(`${where}: explanation missing or too short (${q.explanation?.length ?? 0} chars) — must be a worked solution`);
  checkHtml(q.prompt, `${where}.prompt`);
  checkHtml(q.explanation, `${where}.explanation`);
  checkBoilerplate(q.prompt, `${where}.prompt`);
  checkBoilerplate(q.explanation, `${where}.explanation`);
  checkVocabRecall(q.prompt, `${where}.prompt`);
  if (q.type === "mc") q.choices.forEach((ch, i) => checkBoilerplate(ch, `${where}.choice[${i}]`));
  if (q.figure) checkSvg(q.figure, `${where}.figure`);
  if (q.type === "mc") {
    if (!Array.isArray(q.choices) || q.choices.length < 3)
      err(`${where}: mc question needs >=3 choices`);
    if (q.answer < 0 || q.answer >= q.choices.length)
      err(`${where}: answer index ${q.answer} out of range`);
    const uniq = new Set(q.choices.map((c) => c.trim()));
    if (uniq.size !== q.choices.length) err(`${where}: duplicate choices`);
    checkChoiceBalance(q, where);
    // "all/none of the above" defeats the point of a plausible-distractor set
    if (q.choices.some((c) => /\b(all|none) of the above\b/i.test(stripTags(c))))
      warn(`${where}: uses "all/none of the above" — replace with a real distractor`);
  } else if (q.type === "numeric") {
    if (typeof q.answer !== "number" || !Number.isFinite(q.answer))
      err(`${where}: numeric answer must be a finite number`);
    if (q.tolerance !== undefined && (q.tolerance <= 0 || q.tolerance > 0.25))
      warn(`${where}: unusual tolerance ${q.tolerance}`);
    // A numeric answer with no unit is ambiguous unless it is dimensionless.
    if (!q.unit && !/\b(ratio|factor|number|coefficient|efficiency|fraction|dimensionless|Bi|Re|Nu|Pr|Ma|Fr)\b/i.test(stripTags(q.prompt)))
      warn(`${where}: numeric question has no \`unit\` — the expected unit is ambiguous`);
    // The worked solution must actually show the number it claims.
    const a = Math.abs(q.answer);
    if (a > 0) {
      const sig = a.toPrecision(3).replace(/\.?0+$/, "");
      const plain = stripTags(q.explanation).replace(/,/g, "");
      const digits = sig.replace(/[^\d]/g, "").slice(0, 3);
      if (digits.length >= 2 && !plain.replace(/[^\d]/g, "").includes(digits))
        warn(`${where}: explanation never shows the answer ${q.answer} — worked solution may not match the key`);
    }
  } else {
    err(`${where}: unknown type ${(q as { type: string }).type}`);
  }
}

// ---------------------------------------------------------------------------
// Source-level scan.
//
// Some defects are invisible at runtime because the TypeScript parser has
// already eaten them. `\sigma` inside a template literal is an unknown escape,
// so JS collapses it to the plain word "sigma" — the page renders "εsigma A"
// and no runtime check can tell that a Greek letter was intended. The only
// place to catch this class is the raw source text.
// ---------------------------------------------------------------------------
const LIB_DIR = join(import.meta.dirname, "..", "content", "library");

// Entities that LOOK real by analogy but do not exist, so they render as their
// own literal source text. `&sup2;`/`&sup3;` are genuine, which is exactly why
// someone reaches for `&sup4;` to write a fourth power — and gets "sup4;"
// printed in the middle of a diagram.
//
// This is deliberately a denylist, not a whitelist. HTML5 defines ~2200 named
// references (`&approx;` and `&dot;` among them); enumerating the valid ones
// by hand produces false errors, and a false error here sends an author off to
// "fix" working markup.
const FAKE_ENTITIES = new Set([
  "sup4", "sup5", "sup6", "sup7", "sup8", "sup9", "sup0",
  "sub0", "sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7", "sub8", "sub9",
  "degree", "degrees", "celsius", "fahrenheit",
  "sqrt", "cdot", "vec", "hat", "bar",
  "lessthan", "greaterthan", "leq", "geq", "neq", "approxeq",
  "alpha1", "beta1", "delta1", "sigma1",
]);
const SUPERSCRIPT_NUMERIC: Record<string, string> = {
  sup4: "&#8308;", sup5: "&#8309;", sup6: "&#8310;",
  sup7: "&#8311;", sup8: "&#8312;", sup9: "&#8313;", sup0: "&#8304;",
};

const TEX_NAMES =
  "alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|rho|sigma|tau|phi|chi|psi|omega|" +
  "Alpha|Beta|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Phi|Psi|Omega|pi|" +
  "infty|approx|times|cdot|frac|sqrt|le|ge|ne|pm|leq|geq|neq|degree|circ|partial|nabla|sum|int";

function scanSources() {
  const files = readdirSync(LIB_DIR).filter((f) => f.endsWith(".ts")).sort();
  const escRe = new RegExp(String.raw`\\(${TEX_NAMES})\b`, "g");
  for (const f of files) {
    const src = readFileSync(join(LIB_DIR, f), "utf8");
    const lines = src.split("\n");
    lines.forEach((line, i) => {
      for (const m of line.matchAll(escRe)) {
        err(
          `content/library/${f}:${i + 1}: leaked TeX escape "\\${m[1]}" — JS collapses it to the bare word "${m[1]}". Use the HTML entity &${m[1]};`
        );
      }
      // An HTML entity missing its semicolon renders as literal text: the
      // headline equation "&Sigma F = ma" shows up on the page as exactly
      // that. Browsers only forgive this for a handful of legacy entities.
      for (const m of line.matchAll(
        /&(Sigma|sigma|Delta|delta|tau|rho|alpha|beta|gamma|omega|Omega|mu|nu|theta|Theta|epsilon|eta|zeta|lambda|Lambda|phi|psi|chi|xi|pi|Pi|infin|radic|middot|minus|times|divide|plusmn|deg|perp|rarr|larr|harr|le|ge|ne|asymp|equiv|prop|part|sum|int|prime)(?![a-zA-Z;])/g
      )) {
        err(
          `content/library/${f}:${i + 1}: entity "&${m[1]}" is missing its semicolon — renders as literal text. Write "&${m[1]};"`
        );
      }
      // An entity that does not exist renders as its own literal source text.
      // `&sup4;` is the trap: &sup1;/&sup2;/&sup3; are real, &sup4; is not, so
      // a fourth power silently prints "sup4;" in the middle of a diagram.
      for (const m of line.matchAll(/&([a-zA-Z][a-zA-Z0-9]{1,10});/g)) {
        if (FAKE_ENTITIES.has(m[1])) {
          const fix = SUPERSCRIPT_NUMERIC[m[1]];
          err(
            `content/library/${f}:${i + 1}: "&${m[1]};" is not a real HTML entity — it renders as the literal text "${m[1]};".` +
              (fix ? ` Use ${fix} instead.` : "")
          );
        }
      }
      // LaTeX math delimiters have no renderer here
      if (/\$[^$\n]{1,60}\$/.test(line) && !/\$\{/.test(line))
        warn(`content/library/${f}:${i + 1}: looks like LaTeX ($…$) — use HTML + Unicode entities`);
      if (/\\u[0-9a-fA-F]{4}/.test(line))
        warn(`content/library/${f}:${i + 1}: \\uXXXX escape in content — prefer the named HTML entity for readability`);
    });

    // Answer-key clustering, measured PER FILE. The merged base+extra pool
    // dilutes this: a base file can key every single MC at index 0 while the
    // topic-level share still looks acceptable. Authors work one file at a
    // time, so that is the level the check has to run at.
    const chunks = src.split(/\n\s*\{\s*\n\s*id: "/).slice(1);
    const mcAnswers: number[] = [];
    for (const ch of chunks) {
      if (!/type: "mc"/.test(ch)) continue;
      const m = ch.match(/\n\s*answer: (\d+),/);
      if (m) mcAnswers.push(Number(m[1]));
    }
    // Uniform is not the same as unpredictable. "Spread the answer key" was
    // read by some authors as a literal rotation — 0,1,2,3,0,1,2,3 — which is
    // perfectly uniform and perfectly guessable. One file ran 16 questions
    // straight. Like the clustering check below, the runtime shuffle hides
    // this in practice/exam mode; it leaks on /bank, which renders stored
    // order, and it is a sign the keys were assigned mechanically.
    if (mcAnswers.length >= 8) {
      let run = 1;
      let longest = 1;
      for (let i = 1; i < mcAnswers.length; i++) {
        if ((mcAnswers[i - 1] + 1) % 4 === mcAnswers[i]) {
          run++;
          longest = Math.max(longest, run);
        } else run = 1;
      }
      if (longest >= 6)
        warn(
          `content/library/${f}: ${longest} consecutive MC answers follow a strict 0,1,2,3 rotation — uniform but perfectly predictable. Assign keys by what the question needs, not by cycling.`
        );
    }

    if (mcAnswers.length >= 4) {
      const counts = [0, 0, 0, 0, 0];
      for (const a of mcAnswers) counts[a] = (counts[a] ?? 0) + 1;
      const top = Math.max(...counts);
      if (top / mcAnswers.length > 0.5)
        err(
          `content/library/${f}: ${top}/${mcAnswers.length} MC answers keyed at index ${counts.indexOf(top)} (${counts.slice(0, 4).join("/")}). QuizRunner shuffles choices per question, so this does not leak in practice/exam mode — but /bank renders choices in stored order, where the answer is visibly always the same position. It also signals the file was authored without varying the correct slot, and it removes the safety margin if shuffling is ever bypassed. Redistribute.`
        );
    }

    // Figures must not all live in the base file. The .extra banks hold roughly
    // half of every topic's questions and app-wide carry zero diagrams.
    if (f.endsWith(".extra.ts")) {
      const figs = (src.match(/<svg\b/g) ?? []).length;
      const nq = (src.match(/^\s*id: "/gm) ?? []).length;
      if (figs === 0 && nq > 0)
        warn(`content/library/${f}: ${nq} questions and zero figures — diagrams should not live only in the base file`);
    }
  }
}

console.log("Scanning content sources…");
scanSources();

console.log(`\nValidating ${TOPICS.length} topics…\n`);

for (const t of TOPICS) {
  const c = CONTENT[t.id];
  console.log(`— ${t.id}`);
  if (!c) {
    err("missing content module");
    continue;
  }

  // lesson
  const L = c.lesson;
  if (!L.title || /coming soon/i.test(L.title)) err("lesson: placeholder or missing title");
  if (!L.intro || L.intro.length < 120) err("lesson: intro missing or too short");
  if (L.sections.length < 4) err(`lesson: only ${L.sections.length} sections (need >=4)`);
  const lessonSvgs = [...extractSvgs(L.intro), ...L.sections.flatMap((s) => extractSvgs(s.html))];
  if (lessonSvgs.length < 2) err(`lesson: only ${lessonSvgs.length} figures (need >=2)`);
  lessonSvgs.forEach((s, i) => checkSvg(s, `${t.id} lesson fig ${i + 1}`));
  checkHtml(L.intro, `${t.id} lesson.intro`);
  L.sections.forEach((s, i) => {
    if (!s.heading) err(`lesson section ${i}: missing heading`);
    if (!s.html || s.html.length < 200) err(`lesson section ${i} (${s.heading}): too short`);
    checkHtml(s.html, `${t.id} lesson section ${i}`);
  });
  // Fields the schema declares as plain text are rendered with plain JSX
  // interpolation, so an HTML entity in them appears on screen literally —
  // "Mohr&rsquo;s circle". These are the only content fields NOT passed through
  // HtmlContent, which is exactly why they get missed.
  const PLAIN_ENTITY = /&[a-zA-Z]+;|&#[0-9]+;/;
  const plainFields: [string, string][] = [
    ["lesson.title", L.title],
    ...L.sections.map((s, i) => [`lesson.sections[${i}].heading`, s.heading] as [string, string]),
    ...L.interviewTips.map((t2, i) => [`lesson.interviewTips[${i}]`, t2] as [string, string]),
    ...L.equations.map((e, i) => [`lesson.equations[${i}].name`, e.name] as [string, string]),
  ];
  for (const [where, value] of plainFields) {
    const m = value?.match(PLAIN_ENTITY);
    if (m)
      err(
        `${where} is a plain-text field but contains "${m[0]}" — it renders literally on the page. Use the character itself (’ — × √ –), not an entity.`
      );
  }

  if (L.equations.length < 4) err(`lesson: only ${L.equations.length} key equations (need >=4)`);
  if (L.interviewTips.length < 3) err(`lesson: only ${L.interviewTips.length} interview tips (need >=3)`);

  // A module that failed to export a usable array is silently absorbed by
  // content/index.ts so one bad file cannot break every route — say so here.
  if (!Array.isArray(RAW_MODULE_QUESTIONS[t.id]))
    err(`base module does not export a questions array — check content/library/${t.id}.ts`);
  if (!Array.isArray(RAW_MODULE_EXTRA[t.id]))
    err(`extra module does not export an array — check content/library/${t.id}.extra.ts`);

  // questions
  if (c.questions.length < 30) err(`only ${c.questions.length} questions (need >=30)`);
  const withFig = c.questions.filter((q) => q.figure).length;
  if (withFig < 3) warn(`only ${withFig} questions have figures (want >=3)`);
  const diffs = new Set(c.questions.map((q) => q.difficulty));
  if (diffs.size < 3) warn(`questions do not cover all three difficulty levels`);
  c.questions.forEach((q) => checkQuestion(q, t.id));

  // answer-key distribution: templated banks put every correct MC answer at
  // index 0. Flag a topic whose MC answers are badly clustered.
  const mc = c.questions.filter((q) => q.type === "mc") as Extract<Question, { type: "mc" }>[];
  if (mc.length >= 8) {
    const counts = [0, 0, 0, 0, 0];
    for (const q of mc) counts[q.answer] = (counts[q.answer] ?? 0) + 1;
    const maxShare = Math.max(...counts) / mc.length;
    if (maxShare > 0.6)
      warn(`MC answer key clustered: ${Math.round(maxShare * 100)}% at one index (${counts.slice(0, 4).join("/")}) — redistribute`);
  }

  // ---------------------------------------------------------------------
  // "Pick the longest option" strategy score.
  //
  // The per-question length check below catches an individual outlier, but it
  // is blind to the pattern: a topic where every correct answer is merely a
  // *bit* longer passes item by item while still being solvable with no
  // engineering at all. Measured on real topics here: 77% on machine-elements,
  // and 19 of 24 in assembly-strategies (p ~ 1e-7 against chance).
  //
  // So simulate the actual attack. Chance is 25% on 4 choices; anything much
  // above that is a leak regardless of how any single question looks.
  // ---------------------------------------------------------------------
  const mcAll = c.questions.filter((q) => q.type === "mc") as Extract<Question, { type: "mc" }>[];
  if (mcAll.length >= 10) {
    let longestWins = 0;
    for (const q of mcAll) {
      const lens = q.choices.map((ch) => stripTags(ch).length);
      const max = Math.max(...lens);
      // strictly longest only — a tie gives the strategy no signal
      if (lens[q.answer] === max && lens.filter((l) => l === max).length === 1) longestWins++;
    }
    // Two-sided, and it has to be. Driving this to zero does not remove the
    // tell, it inverts it: if the answer is *never* the longest, "eliminate the
    // longest and guess" pays ~33% instead of 25%. That happened here — eight
    // topics hit 0% while chasing the one-sided version of this check.
    //
    // The target is chance, not zero. With four choices that is 25%; the band
    // below allows ordinary sampling noise on a 25-question topic.
    const share = longestWins / mcAll.length;
    const pct = Math.round(share * 100);
    const detail = `(${longestWins}/${mcAll.length}, chance is 25%)`;
    if (share > 0.4)
      err(
        `"always pick the longest choice" scores ${pct}% here ${detail} — the bank is solvable without engineering. Vary which choice is longest.`
      );
    else if (share < 0.1)
      err(
        `the correct choice is almost never the longest — ${pct}% here ${detail}. That is the same tell inverted: "eliminate the longest, guess the rest" now pays ~${Math.round((1 / (mcAll.length ? 3 : 3)) * 100)}%. Aim for chance, not zero.`
      );
    else if (share > 0.32 || share < 0.15)
      warn(
        `"always pick the longest choice" scores ${pct}% ${detail} — drifting ${share > 0.25 ? "toward a length tell" : "toward the inverted tell"}.`
      );
  }

  // difficulty mix: the guide asks for roughly 8/14/8 per 30 questions. A topic
  // that is all difficulty-2 gives the difficulty filter nothing to filter.
  const byDiff = [0, 0, 0, 0];
  for (const q of c.questions) byDiff[q.difficulty]++;
  const n = c.questions.length;
  ([1, 2, 3] as const).forEach((d) => {
    if (byDiff[d] < n * 0.15)
      warn(`difficulty ${d} is only ${byDiff[d]}/${n} questions (want >=15%) — mix is lopsided`);
  });

  // near-duplicate prompts waste a slot in a bank this size
  const qs = c.questions;
  const norms = qs.map((q) => normPrompt(q.prompt));
  for (let i = 0; i < qs.length; i++) {
    for (let j = i + 1; j < qs.length; j++) {
      const sim = jaccard(norms[i], norms[j]);
      if (sim > 0.72)
        warn(`${qs[i].id} and ${qs[j].id} are ${Math.round(sim * 100)}% similar prompts — likely near-duplicates, cut or differentiate one`);
    }
  }

  // explanation depth: surface topics still dominated by shallow explanations
  const shallow = c.questions.filter((q) => q.explanation.length < 250).length;
  const avgExpl = Math.round(
    c.questions.reduce((s, q) => s + q.explanation.length, 0) / c.questions.length
  );
  if (shallow > c.questions.length * 0.4)
    warn(`${shallow}/${c.questions.length} explanations under 250 chars (avg ${avgExpl}) — likely still shallow`);

  // qna
  if (c.qna.length < 8) err(`only ${c.qna.length} QnA items (need >=8)`);
  const seenQa = new Set<string>();
  c.qna.forEach((item) => {
    if (!item.id.startsWith(`${t.id}-qa`)) err(`${item.id}: qna id must start with "${t.id}-qa"`);
    if (seenQa.has(item.id)) err(`${item.id}: duplicate qna id`);
    seenQa.add(item.id);
    if (!item.q || item.q.length < 15) err(`${item.id}: question too short`);
    if (!item.a || item.a.length < 120) err(`${item.id}: answer too short — must be a model answer`);
  });
}

// ---------------------------------------------------------------------------
// Cross-topic duplicates.
//
// The per-topic scan above cannot see a question that was written twice in two
// different files. Real examples found here: an ADC-resolution question in both
// controls-instrumentation and analysis-testing, and three statics questions
// reproduced in shear-moment. Neighbouring topics overlap legitimately, so the
// threshold is deliberately higher than the within-topic one.
// ---------------------------------------------------------------------------
console.log("\nCross-topic duplicate scan…");
{
  const all: { id: string; topic: string; norm: string }[] = [];
  for (const t of TOPICS)
    for (const q of CONTENT[t.id]?.questions ?? [])
      all.push({ id: q.id, topic: t.id, norm: normPrompt(q.prompt) });

  // Bucket by shared rare-ish words so this stays well under O(n^2) on 1400 items.
  const buckets = new Map<string, number[]>();
  all.forEach((item, i) => {
    for (const w of new Set(item.norm.split(" ").filter((x) => x.length > 5)))
      (buckets.get(w) ?? buckets.set(w, []).get(w)!).push(i);
  });

  const seenPair = new Set<string>();
  let crossDupes = 0;
  for (const idxs of buckets.values()) {
    if (idxs.length > 400) continue; // a word this common carries no signal
    for (let a = 0; a < idxs.length; a++) {
      for (let b = a + 1; b < idxs.length; b++) {
        const x = all[idxs[a]];
        const y = all[idxs[b]];
        if (x.topic === y.topic) continue; // handled per-topic
        const key = x.id < y.id ? `${x.id}|${y.id}` : `${y.id}|${x.id}`;
        if (seenPair.has(key)) continue;
        seenPair.add(key);
        const sim = jaccard(x.norm, y.norm);
        if (sim > 0.78) {
          crossDupes++;
          warn(
            `${x.id} (${x.topic}) and ${y.id} (${y.topic}) are ${Math.round(sim * 100)}% similar across topics — one topic should own this question`
          );
        }
      }
    }
  }
  console.log(`  ${crossDupes} cross-topic near-duplicate pair(s)`);
}

const totalQ = TOPICS.reduce((n, t) => n + (CONTENT[t.id]?.questions.length ?? 0), 0);
const totalQnA = TOPICS.reduce((n, t) => n + (CONTENT[t.id]?.qna.length ?? 0), 0);
console.log(`\nTotals: ${totalQ} questions, ${totalQnA} QnA items across ${TOPICS.length} topics.`);
console.log(`${errors} errors, ${warnings} warnings.`);
if (errors > 0) process.exit(1);
console.log("Content validation PASSED.");
