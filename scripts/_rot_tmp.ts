import { readFileSync } from "node:fs";
for (const f of process.argv.slice(2)) {
  const src = readFileSync(f, "utf8");
  const chunks = src.split(/\n\s*\{\s*\n\s*id: "/).slice(1);
  const rows: [string, number][] = [];
  for (const ch of chunks) {
    if (!/type: "mc"/.test(ch)) continue;
    const m = ch.match(/\n\s*answer: (\d+),/);
    const id = ch.slice(0, ch.indexOf('"'));
    if (m) rows.push([id, Number(m[1])]);
  }
  console.log(f, rows.map(r=>`${r[0].split("-").pop()}:${r[1]}`).join(" "));
  // find rotation runs
  let run = 1;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][1] === (rows[i-1][1] + 1) % 4) run++; else { if (run>=5) console.log("  run len",run,"ending", rows[i-1][0]); run = 1; }
  }
  if (run>=5) console.log("  run len",run,"ending", rows[rows.length-1][0]);
}
