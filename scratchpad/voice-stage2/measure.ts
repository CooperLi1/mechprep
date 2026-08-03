// Voice-tell counter for the six topics owned by this pass.
// Run: npx tsx scratchpad/voice-stage2/measure.ts [--json out.json]
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MINE = [
  "structural-loading",
  "stress-analysis",
  "beam-bending",
  "beam-deflection",
  "torsion",
  "buckling",
];

const LIB = join(process.cwd(), "content", "library");

type Passage = { where: string; text: string; kind: string };

async function collect(): Promise<Passage[]> {
  const out: Passage[] = [];
  for (const id of MINE) {
    const base = (await import(join(LIB, `${id}.ts`))).default;
    const extra = (await import(join(LIB, `${id}.extra.ts`))).default;
    const L = base.lesson;
    out.push({ where: `${id}.lesson.intro`, text: L.intro, kind: "lesson" });
    L.sections.forEach((s: any, i: number) =>
      out.push({ where: `${id}.lesson.sections[${i}]`, text: s.html, kind: "lesson" })
    );
    L.equations.forEach((e: any, i: number) =>
      out.push({ where: `${id}.lesson.equations[${i}].note`, text: e.note ?? "", kind: "eqnote" })
    );
    L.interviewTips.forEach((t: string, i: number) =>
      out.push({ where: `${id}.lesson.tips[${i}]`, text: t, kind: "tip" })
    );
    base.qna.forEach((x: any) => out.push({ where: x.id, text: x.a, kind: "qna" }));
    const qs = [...base.questions, ...extra];
    qs.forEach((q: any) => out.push({ where: q.id, text: q.explanation, kind: "explanation" }));
  }
  return out;
}

const strip = (h: string) =>
  h
    .replace(/<svg[\s\S]*?<\/svg>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&[a-zA-Z#0-9]+;/g, "x")
    .replace(/\s+/g, " ")
    .trim();

function stats(nums: number[]) {
  const n = nums.length;
  const sorted = [...nums].sort((a, b) => a - b);
  const mean = nums.reduce((a, b) => a + b, 0) / n;
  const sd = Math.sqrt(nums.reduce((s, x) => s + (x - mean) ** 2, 0) / n);
  const q = (p: number) => sorted[Math.min(n - 1, Math.floor(p * n))];
  return {
    n,
    mean: Math.round(mean),
    sd: Math.round(sd),
    min: sorted[0],
    p10: q(0.1),
    p25: q(0.25),
    median: q(0.5),
    p75: q(0.75),
    p90: q(0.9),
    max: sorted[n - 1],
  };
}

async function main() {
const passages = await collect();

// every count is taken on the visible prose, with SVG markup removed
const visible = passages.map((p) => ({ ...p, vis: strip(p.text) }));
const count = (re: RegExp) =>
  visible.reduce((s, p) => s + (p.vis.match(re) ?? []).length, 0);

const emdash = count(/—/g);

const expl = passages.filter((p) => p.kind === "explanation");
const explLens = expl.map((p) => strip(p.text).length);
const rawLens = expl.map((p) => p.text.length);

// rule-of-three list: "a, b and c" / "a, b, and c"
const ruleOfThree = count(/\w+, [^,.;:]{2,45}?,? and \b/g);

const result = {
  passages: passages.length,
  chars: passages.reduce((s, p) => s + p.text.length, 0),
  tells: {
    interviewer: count(/interviewer/gi),
    "the trap": count(/the trap|traps?\b/gi),
    "trap (word)": count(/\btraps?\b/gi),
    "sanity check": count(/sanity check/gi),
    "em-dash": emdash,
    "rule-of-three": ruleOfThree,
    "In practice": count(/In practice\b/g),
    "That said": count(/That said\b/g),
    "Crucially": count(/Crucially\b/g),
    "Importantly": count(/Importantly\b/g),
    "It's worth noting": count(/[Ii]t.s worth noting/g),
    "comes down to": count(/comes down to/gi),
    "real-world": count(/real-world/gi),
    "This is why": count(/This is why/g),
    "self-announcing": count(/the whole (question|point|thing) is|worth naming|honest caveats?|Note the ranking|Read the split/gi),
    "Follow-up": count(/[Ff]ollow-?up/g),
    "not just X it's Y": count(/not just .{1,40}?, it.s/gi),
    "robust/leverage/nuanced/etc": count(
      /\b(robust|leverage|delve|nuanced|comprehensive|holistic|key takeaway)\b/gi
    ),
    "Distractor analysis": count(/Distractor analysis/g),
  },
  explanationLengthVisibleChars: stats(explLens),
  explanationLengthRawChars: stats(rawLens),
  shortest: expl
    .map((p, i) => ({ where: p.where, len: explLens[i] }))
    .sort((a, b) => a.len - b.len)
    .slice(0, 8),
  longest: expl
    .map((p, i) => ({ where: p.where, len: explLens[i] }))
    .sort((a, b) => b.len - a.len)
    .slice(0, 8),
};

const jsonArg = process.argv.indexOf("--json");
if (jsonArg > -1) writeFileSync(process.argv[jsonArg + 1], JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
}
main();
