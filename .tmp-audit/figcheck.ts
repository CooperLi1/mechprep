import asmBase from "../content/library/assembly-strategies";
import asmExtra from "../content/library/assembly-strategies.extra";
import datBase from "../content/library/datums";
import datExtra from "../content/library/datums.extra";
const CONTENT: any = {
  "assembly-strategies": { ...asmBase, questions: [...asmBase.questions, ...asmExtra] },
  datums: { ...datBase, questions: [...datBase.questions, ...datExtra] },
};
const strip = (h: string) => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9. ]+/g, " ").replace(/\s+/g, " ").trim();

for (const t of ["assembly-strategies", "datums"]) {
  const c = CONTENT[t]!;
  console.log(`\n########## ${t} ##########`);
  const byDiff: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  let mc = 0, num = 0, figs = 0;
  const idx = [0, 0, 0, 0];
  for (const q of c.questions as any[]) {
    byDiff[q.difficulty]++;
    if (q.type === "mc") { mc++; idx[q.answer]++; } else num++;
    if (q.figure) figs++;
  }
  console.log(`n=${c.questions.length} mc=${mc} numeric=${num} figs=${figs} diff=${JSON.stringify(byDiff)} ansIdx=${idx.join("/")}`);
  console.log(`min needed per difficulty (15%) = ${(c.questions.length * 0.15).toFixed(1)}`);

  // ---- static figure integrity + answer-leak scan ----
  for (const q of c.questions as any[]) {
    if (!q.figure) continue;
    const f: string = q.figure;
    const where = q.id;
    const problems: string[] = [];
    // balanced svg / text / defs
    for (const tag of ["svg", "text", "defs", "g", "marker", "tspan"]) {
      const o = (f.match(new RegExp(`<${tag}[\\s>]`, "g")) ?? []).length;
      const cl = (f.match(new RegExp(`</${tag}>`, "g")) ?? []).length;
      if (o !== cl) problems.push(`unbalanced <${tag}> ${o}/${cl}`);
    }
    // url(#..) resolution
    const ids = new Set([...f.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
    for (const m of f.matchAll(/url\(#([^)]+)\)/g)) if (!ids.has(m[1])) problems.push(`dangling url(#${m[1]})`);
    for (const id of ids) if (!f.includes(`url(#${id})`)) problems.push(`unused id "${id}"`);
    // html in <text>
    for (const m of f.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g))
      if (/<(sub|sup|b|i|strong|em|br|p|div|span)\b/i.test(m[1])) problems.push(`HTML tag inside <text>`);
    // bounds
    const vb = f.match(/viewBox="([\d.\-\s]+)"/);
    if (!vb) problems.push("no viewBox");
    else {
      const [, , w, h] = vb[1].trim().split(/\s+/).map(Number);
      for (const m of f.matchAll(/<text\b[^>]*\bx="([\d.\-]+)"[^>]*\by="([\d.\-]+)"/g)) {
        const x = Number(m[1]), y = Number(m[2]);
        if (x < 0 || x > w || y < 0 || y > h) problems.push(`text at (${x},${y}) outside 0 0 ${w} ${h}`);
      }
    }
    // answer leak: does any figure text contain the keyed choice / stored answer?
    const texts = [...f.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map((m) => norm(strip(m[1])));
    const blob = texts.join(" | ");
    if (q.type === "mc") {
      const key = norm(strip(q.choices[q.answer]));
      const words = key.split(" ").filter((w: string) => w.length > 4);
      const hits = words.filter((w: string) => blob.includes(w));
      if (words.length && hits.length / words.length > 0.5)
        problems.push(`figure text echoes ${Math.round(hits.length / words.length * 100)}% of the keyed choice: ${hits.join(",")}`);
    } else {
      const a = Math.abs(q.answer);
      const forms = new Set([String(q.answer), a.toPrecision(3), a.toFixed(2), a.toFixed(3), a.toFixed(1)]);
      for (const v of forms) if (v && blob.includes(v.replace(/\.?0+$/, "")) && a !== 0) problems.push(`figure prints the stored answer "${v}"`);
    }
    if (problems.length) console.log(`  ${where}: ${[...new Set(problems)].join("; ")}`);
  }
}
