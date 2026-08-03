import { CONTENT } from "../content/index";

import smBase from "../content/library/shear-moment";
import smExtra from "../content/library/shear-moment.extra";
import ftBase from "../content/library/failure-theories";
import ftExtra from "../content/library/failure-theories.extra";
import bbBase from "../content/library/beam-bending";
import bbExtra from "../content/library/beam-bending.extra";
import mfBase from "../content/library/manufacturing";
import mfExtra from "../content/library/manufacturing.extra";
import type { Question } from "../content/types";

const stripTags = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const mine = ["shear-moment", "failure-theories", "beam-bending", "manufacturing"];
const verbose = process.argv.includes("-v");

console.log("--- per topic: length tells ---");
for (const id of mine) {
  const c = CONTENT[id];
  const mcAll = c.questions.filter((q) => q.type === "mc") as any[];
  let longestWins = 0;
  let elimPayoff = 0;
  const rows: string[] = [];
  for (const q of mcAll) {
    const lens = q.choices.map((ch: string) => stripTags(ch).length);
    const max = Math.max(...lens);
    const nMax = lens.filter((l: number) => l === max).length;
    const strictLongest = lens[q.answer] === max && nMax === 1;
    if (strictLongest) longestWins++;
    if (nMax === 1) elimPayoff += strictLongest ? 0 : 1 / (q.choices.length - 1);
    else elimPayoff += 1 / q.choices.length;
    rows.push(`${q.id} d${q.difficulty} key=${q.answer} lens=[${lens.join(",")}] ${strictLongest ? "LONGEST" : ""}`);
  }
  const counts = [0, 0, 0, 0];
  for (const q of mcAll) counts[q.answer]++;
  const pct = (x: number) => `${(x * 100).toFixed(1)}%`;
  console.log(
    `${id.padEnd(18)} pick-longest ${String(longestWins).padStart(2)}/${mcAll.length} = ${pct(
      longestWins / mcAll.length
    ).padStart(6)}   elim-longest-EV = ${pct(elimPayoff / mcAll.length)}   keys=${counts.join("/")}   nQ=${c.questions.length}`
  );
  if (verbose) for (const r of rows) console.log("   " + r);
}

console.log("\n--- per file: answer-key rotation and spread ---");
const files: [string, Question[]][] = [
  ["shear-moment.ts", smBase.questions],
  ["shear-moment.extra.ts", smExtra],
  ["failure-theories.ts", ftBase.questions],
  ["failure-theories.extra.ts", ftExtra],
  ["beam-bending.ts", bbBase.questions],
  ["beam-bending.extra.ts", bbExtra],
  ["manufacturing.ts", mfBase.questions],
  ["manufacturing.extra.ts", mfExtra],
];
for (const [name, qs] of files) {
  const mc = qs.filter((q) => q.type === "mc") as Extract<Question, { type: "mc" }>[];
  const keys = mc.map((q) => q.answer);
  let run = 1;
  let best = 1;
  let bestEnd = 0;
  for (let i = 1; i < keys.length; i++) {
    if (keys[i] === (keys[i - 1] + 1) % 4) {
      run++;
      if (run > best) {
        best = run;
        bestEnd = i;
      }
    } else run = 1;
  }
  const counts = [0, 0, 0, 0];
  for (const k of keys) counts[k]++;
  const maxShare = Math.max(...counts) / keys.length;
  const worst = best >= 6 ? mc.slice(bestEnd - best + 1, bestEnd + 1).map((q) => q.id).join(",") : "";
  console.log(
    `${name.padEnd(28)} n=${String(keys.length).padStart(2)} longestRotationRun=${String(best).padStart(2)}${
      best >= 6 ? " <<<" : "   "
    } spread=${counts.join("/")} maxShare=${(maxShare * 100).toFixed(0)}%  ${worst}`
  );
  if (verbose) console.log("      keys: " + keys.join(""));
}
