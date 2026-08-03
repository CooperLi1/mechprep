import { CONTENT } from "../content/index";
import * as fs from "fs";

const stripTags = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const mine = ["shear-moment", "failure-theories", "beam-bending", "manufacturing"];
const out = process.argv[3] || "/tmp/dump.txt";
const only = process.argv[2];

let buf = "";
for (const id of mine) {
  if (only && only !== id) continue;
  const c = CONTENT[id];
  const mcAll = c.questions.filter((q) => q.type === "mc") as any[];
  for (const q of mcAll) {
    const lens = q.choices.map((ch: string) => stripTags(ch).length);
    const max = Math.max(...lens);
    const gap = max - lens[q.answer];
    buf += `\n### ${q.id}  d${q.difficulty}  key=${q.answer}  lens=[${lens.join(",")}]  gapToMax=${gap}\n`;
    buf += `PROMPT: ${stripTags(q.prompt)}\n`;
    q.choices.forEach((ch: string, i: number) => {
      buf += `  [${i}]${i === q.answer ? "*" : " "} (${lens[i]}) ${stripTags(ch)}\n`;
    });
  }
}
fs.writeFileSync(out, buf);
console.log("wrote", out, buf.length);
