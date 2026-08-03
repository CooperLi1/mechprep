import { CONTENT } from "../content/index";
const strip = (h: string) => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const c = CONTENT[process.argv[2]]!;
let L=0,S=0,n=0;
for (const q of c.questions) {
  if (q.type !== "mc") continue; n++;
  const lens = (q as any).choices.map((ch: string) => strip(ch).length);
  const a=(q as any).answer, mx=Math.max(...lens), mn=Math.min(...lens);
  const isL = lens[a]===mx && lens.filter((l:number)=>l===mx).length===1;
  const isS = lens[a]===mn && lens.filter((l:number)=>l===mn).length===1;
  if(isL)L++; if(isS)S++;
  console.log(`${q.id} key=${a} [${lens.join(",")}] ${isL?"LONG":isS?"short":"-"}`);
}
console.log(`TOTAL ${n} mc: longest ${L} (${Math.round(L/n*100)}%) shortest ${S} (${Math.round(S/n*100)}%)`);
