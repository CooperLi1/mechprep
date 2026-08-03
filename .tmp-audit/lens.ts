import { CONTENT } from "../content/index";
const strip = (h: string) => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
for (const t of ["assembly-strategies", "datums"]) {
  const qs = (CONTENT[t]?.questions ?? []).filter((q: any) => q.type === "mc") as any[];
  let wins = 0;
  console.log(`\n=== ${t}: ${qs.length} MC ===`);
  for (const q of qs) {
    const lens = q.choices.map((c: string) => strip(c).length);
    const max = Math.max(...lens);
    const win = lens[q.answer] === max && lens.filter((l: number) => l === max).length === 1;
    if (win) wins++;
    console.log(`${q.id} ans=${q.answer} lens=[${lens.join(",")}] ${win ? "LONGEST<<<" : ""}`);
  }
  console.log(`--> ${wins}/${qs.length} = ${Math.round(wins / qs.length * 100)}%`);
  // answer index spread per file handled by validator
}
