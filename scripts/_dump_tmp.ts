import { CONTENT } from "../content/index";
const strip = (h: string) => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const t = process.argv[2];
const c = CONTENT[t]!;
for (const q of c.questions) {
  const lens = q.type === "mc" ? (q as any).choices.map((ch: string) => strip(ch).length) : [];
  const max = lens.length ? Math.max(...lens) : 0;
  const flag = q.type === "mc" && lens[(q as any).answer] === max && lens.filter((l: number) => l === max).length === 1 ? " <<LONGEST" : "";
  console.log(`\n${q.id} d${q.difficulty} ${q.type}${q.figure ? " FIG" : ""} ${q.type === "numeric" ? `ans=${(q as any).answer}${(q as any).unit ? " " + (q as any).unit : ""}${(q as any).tolerance !== undefined ? " tol=" + (q as any).tolerance : ""}` : `key=${(q as any).answer} lens=[${lens.join(",")}]`}${flag}`);
  console.log(`  P: ${strip(q.prompt).slice(0, 300)}`);
  if (q.type === "mc") (q as any).choices.forEach((ch: string, i: number) => console.log(`   ${i === (q as any).answer ? "*" : " "}[${i}] ${strip(ch)}`));
}
console.log("\n--- QNA ---");
for (const a of c.qna) console.log(`${a.id}: ${strip(a.q).slice(0, 160)}`);
