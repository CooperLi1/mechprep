import { CONTENT } from "../content/index";
import { TOPICS } from "../content/topics";

const stripTags = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const mine = ["machine-elements","buckling","thermodynamics","gd-and-t","free-body-diagrams","structural-loading","mechanical-design","stress-analysis","datums","assembly-strategies"];
for (const t of TOPICS) {
  if (!mine.includes(t.id)) continue;
  const c = CONTENT[t.id];
  if (!c) continue;
  const mcAll = c.questions.filter((q) => q.type === "mc") as any[];
  let longestWins = 0;
  let shortestWins = 0;
  const offenders: string[] = [];
  for (const q of mcAll) {
    const lens = q.choices.map((ch: string) => stripTags(ch).length);
    const max = Math.max(...lens);
    const min = Math.min(...lens);
    if (lens[q.answer] === max && lens.filter((l: number) => l === max).length === 1) { longestWins++; offenders.push(`${q.id} [${lens.join(",")}] key=${q.answer}`); }
    if (lens[q.answer] === min && lens.filter((l: number) => l === min).length === 1) shortestWins++;
  }
  const counts = [0,0,0,0];
  for (const q of mcAll) counts[q.answer]++;
  console.log(`\n=== ${t.id}: longest=${longestWins}/${mcAll.length} = ${Math.round(longestWins/mcAll.length*100)}%  shortest=${shortestWins}/${mcAll.length} = ${Math.round(shortestWins/mcAll.length*100)}%  keys=${counts.join("/")}  totalQ=${c.questions.length}`);
  if (process.argv.includes("-v")) for (const o of offenders) console.log("   " + o);
}
