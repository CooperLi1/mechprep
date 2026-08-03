import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Fatigue & Fracture
// SVG element ids in this topic are prefixed fa<n>- (globally unique).
// ---------------------------------------------------------------------------

const figCycle = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="fa1-dimE" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="fa1-dimS" markerWidth="8" markerHeight="8" refX="1.5" refY="4" orient="auto"><path d="M8,0L0,4L8,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">One stress cycle</text>
  <text x="24" y="40" fill="#64748b" font-size="12">&sigma; (MPa)</text>
  <line x1="62" y1="218" x2="62" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa1-ax)"/>
  <line x1="62" y1="218" x2="416" y2="218" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa1-ax)"/>
  <text x="422" y="223" fill="#64748b" font-size="12">time</text>
  <text x="54" y="223" text-anchor="end" fill="#64748b" font-size="12">0</text>
  <line x1="62" y1="74" x2="300" y2="74" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="62" y1="194" x2="300" y2="194" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="62" y1="134" x2="320" y2="134" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="5 4"/>
  <path d="M78,134 C87.5,134 95,74 104.5,74 C114,74 121.5,134 131,134 C140.5,134 148,194 157.5,194 C167,194 174.5,134 184,134 C193.5,134 201,74 210.5,74 C220,74 227.5,134 237,134 C246.5,134 254,194 263.5,194 C273,194 280.5,134 290,134" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="306" y="78" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">max</tspan> = 120</text>
  <text x="306" y="198" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">min</tspan> = 20</text>
  <text x="326" y="130" fill="#1d4ed8" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">m</tspan> = 70</text>
  <line x1="396" y1="134" x2="396" y2="74" stroke="#1d4ed8" stroke-width="1.5" marker-start="url(#fa1-dimS)" marker-end="url(#fa1-dimE)"/>
  <text x="402" y="108" fill="#1d4ed8" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">a</tspan> = 50</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">R = &sigma;<tspan baseline-shift="sub" font-size="9">min</tspan>/&sigma;<tspan baseline-shift="sub" font-size="9">max</tspan> = 0.17 &nbsp; (R = &minus;1 would be fully reversed)</text>
</svg>`;

const figSN = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">S-N curve for a steel (log-log axes)</text>
  <line x1="80" y1="52" x2="80" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="144" y1="52" x2="144" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="208" y1="52" x2="208" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="272" y1="52" x2="272" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="336" y1="52" x2="336" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="400" y1="52" x2="400" y2="210" stroke="#e2e8f0" stroke-width="1"/>
  <line x1="62" y1="210" x2="62" y2="48" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa2-ax)"/>
  <line x1="62" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa2-ax)"/>
  <text x="24" y="40" fill="#64748b" font-size="12">S<tspan baseline-shift="sub" font-size="9">a</tspan> (MPa)</text>
  <line x1="62" y1="162" x2="272" y2="162" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="6 4"/>
  <path d="M80,78 L272,162" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <path d="M272,162 L406,162" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="272" cy="162" r="5" fill="#1d4ed8"/>
  <line x1="206" y1="186" x2="265" y2="166" stroke="#64748b" stroke-width="1"/>
  <text x="170" y="192" text-anchor="middle" fill="#64748b" font-size="12">knee near 10<tspan baseline-shift="super" font-size="9">6</tspan> cycles</text>
  <text x="140" y="122" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">finite life</text>
  <text x="345" y="200" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">infinite life (steel only)</text>
  <text x="336" y="180" text-anchor="middle" fill="#dc2626" font-size="12">S<tspan baseline-shift="sub" font-size="9">e</tspan> = 300 MPa</text>
  <text x="56" y="82" text-anchor="end" fill="#64748b" font-size="12">630</text>
  <text x="56" y="166" text-anchor="end" fill="#64748b" font-size="12">300</text>
  <text x="80" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">3</tspan></text>
  <text x="144" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">4</tspan></text>
  <text x="208" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">5</tspan></text>
  <text x="272" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">6</tspan></text>
  <text x="336" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">7</tspan></text>
  <text x="400" y="228" text-anchor="middle" fill="#64748b" font-size="12">10<tspan baseline-shift="super" font-size="9">8</tspan></text>
  <text x="240" y="248" text-anchor="middle" fill="#64748b" font-size="12">cycles to failure N</text>
</svg>`;

const figGoodman = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa3-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Goodman diagram with a real margin</text>
  <polygon points="70,215 70,75 390,215" fill="#dbeafe" opacity="0.55"/>
  <line x1="70" y1="215" x2="70" y2="50" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa3-ax)"/>
  <line x1="70" y1="215" x2="424" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#fa3-ax)"/>
  <text x="26" y="42" fill="#64748b" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">a</tspan> (MPa)</text>
  <line x1="70" y1="75" x2="390" y2="215" stroke="#dc2626" stroke-width="2.5"/>
  <text x="306" y="172" fill="#dc2626" font-size="12" font-weight="600">Goodman line</text>
  <line x1="70" y1="215" x2="144" y2="107" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="6 4"/>
  <circle cx="144" cy="107" r="5" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <circle cx="108" cy="159" r="5.5" fill="#1d4ed8"/>
  <text x="152" y="102" fill="#dc2626" font-size="12">failure point, n = 1.92</text>
  <line x1="131" y1="121" x2="140" y2="113" stroke="#64748b" stroke-width="1"/>
  <text x="128" y="124" text-anchor="end" fill="#64748b" font-size="12">margin</text>
  <line x1="116" y1="172" x2="110" y2="165" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="182" fill="#1d4ed8" font-size="12">operating point (60, 80)</text>
  <text x="78" y="70" fill="#dc2626" font-size="12">S<tspan baseline-shift="sub" font-size="9">e</tspan> = 200</text>
  <text x="390" y="232" text-anchor="middle" fill="#dc2626" font-size="12">S<tspan baseline-shift="sub" font-size="9">ut</tspan> = 500</text>
  <text x="196" y="207" text-anchor="middle" fill="#334155" font-size="12">safe region</text>
  <text x="250" y="252" text-anchor="middle" fill="#64748b" font-size="12">mean stress &sigma;<tspan baseline-shift="sub" font-size="9">m</tspan> (MPa)</text>
</svg>`;

const figNotch = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="fa4-dimE" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="fa4-dimS" markerWidth="8" markerHeight="8" refX="1.5" refY="4" orient="auto"><path d="M8,0L0,4L8,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Shoulder fillet on a cyclically loaded shaft</text>
  <line x1="52" y1="58" x2="52" y2="202" stroke="#334155" stroke-width="3"/>
  <line x1="40" y1="72" x2="52" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="100" x2="52" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="128" x2="52" y2="116" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="156" x2="52" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="184" x2="52" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="212" x2="52" y2="200" stroke="#64748b" stroke-width="1"/>
  <path d="M52,70 H210 V77 Q210,95 228,95 H392 V165 H228 Q210,165 210,183 V190 H52 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="130" x2="400" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="12 3 2 3"/>
  <text x="130" y="135" text-anchor="middle" fill="#334155" font-weight="600">D</text>
  <text x="320" y="135" text-anchor="middle" fill="#334155" font-weight="600">d</text>
  <circle cx="222" cy="97" r="26" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="240" y1="79" x2="266" y2="54" stroke="#64748b" stroke-width="1"/>
  <text x="258" y="50" fill="#dc2626" font-size="12" font-weight="600">notch root: crack starts here</text>
  <text x="270" y="66" fill="#334155" font-size="12">K<tspan baseline-shift="sub" font-size="9">f</tspan> = 1 + q(K<tspan baseline-shift="sub" font-size="9">t</tspan> &minus; 1)</text>
  <line x1="406" y1="96" x2="406" y2="164" stroke="#dc2626" stroke-width="2.5" marker-start="url(#fa4-dimS)" marker-end="url(#fa4-dimE)"/>
  <text x="414" y="134" fill="#dc2626" font-size="12" font-weight="600">&plusmn;F</text>
  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="12">a bigger radius lowers K<tspan baseline-shift="sub" font-size="9">t</tspan> much faster than it raises q</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Fatigue & Fracture",
    intro: `<p>Fatigue is failure under repeated loading at stresses the part survives easily once. A crack starts somewhere local, a machining mark, a fillet root, a weld toe, a thread, a corrosion pit, a fretting contact, grows a little each cycle, and then the remaining ligament tears in one final overload. Static factors of safety say nothing about it. Fatigue is where an interview finds out whether you think about the surface, the detail and the load history, or only about the peak number on a stress plot.</p>
<figure class="fig">${figCycle}<figcaption>Every fatigue calculation starts by splitting the load history into an alternating part and a mean part.</figcaption></figure>`,
    sections: [
      {
        heading: "Reading a stress cycle",
        html: `<p>Split any repeating cycle into two numbers:</p>
<p class="eq">&sigma;<sub>a</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2, &nbsp;&nbsp; &sigma;<sub>m</sub> = (&sigma;<sub>max</sub> + &sigma;<sub>min</sub>)/2</p>
<p><strong>&sigma;<sub>a</sub></strong> is the alternating amplitude and <strong>&sigma;<sub>m</sub></strong> is the mean, both in MPa. The stress ratio R = &sigma;<sub>min</sub>/&sigma;<sub>max</sub> is shorthand for the same information: R = &minus;1 is fully reversed (&sigma;<sub>m</sub> = 0), R = 0 is zero-to-tension, R = 0.5 is a small ripple on a big steady load.</p>
<p>Amplitude does the damage; tensile mean stress makes each unit of amplitude more damaging because the crack stays open longer in the cycle. Compressive mean stress helps for the opposite reason. Two histories with identical ranges and different means are <em>not</em> equally damaging, and that single fact is what mean-stress corrections exist to handle.</p>
<div class="callout">Get in the habit of writing down &sigma;<sub>a</sub>, &sigma;<sub>m</sub> and R before touching any fatigue curve. Half of the wrong answers in interviews come from feeding &sigma;<sub>max</sub> into a formula that wanted &sigma;<sub>a</sub>.</div>`,
      },
      {
        heading: "S-N curves, the knee, and what an endurance limit is worth",
        html: `<p>An S-N curve plots alternating stress against cycles to failure on log axes. Wrought steels show a knee somewhere near 10<sup>6</sup> to 10<sup>7</sup> cycles, below which the curve runs flat: that plateau is the <strong>endurance limit S<sub>e</sub></strong>. A useful first estimate before you open a handbook is</p>
<p class="eq">S&prime;<sub>e</sub> &asymp; 0.5 S<sub>ut</sub> &nbsp; (capped near 700 MPa for very strong steels)</p>
<p>Aluminum, copper and most non-ferrous alloys have <strong>no true endurance limit</strong>. Their S-N curves keep sliding downward past 10<sup>8</sup> and 10<sup>9</sup> cycles, so handbooks quote a "fatigue strength at 5 &times; 10<sup>8</sup> cycles" instead. Carrying the steel shortcut over to an aluminum bracket is one of the most common and most expensive fatigue mistakes.</p>
<figure class="fig">${figSN}<figcaption>Left of the knee is finite life; right of it, for steels only, is the flat endurance limit.</figcaption></figure>
<p>The other half of the picture is finite life. If a part sees 10<sup>4</sup> cycles in its whole service life there is no reason to size it to S<sub>e</sub>, the allowable at 10<sup>4</sup> cycles can be twice as high, which is a large weight and cost saving. Fit the sloped portion between roughly 0.9 S<sub>ut</sub> at 10<sup>3</sup> cycles and S<sub>e</sub> at 10<sup>6</sup>:</p>
<p class="eq">S = a N<sup>b</sup>, &nbsp;&nbsp; b = log(0.9S<sub>ut</sub>/S<sub>e</sub>) / log(10<sup>3</sup>/10<sup>6</sup>)</p>
<div class="callout warn">A published S-N curve belongs to a polished 7.6 mm rotating-beam specimen tested in dry air at room temperature with a 50% survival probability. Your part is none of those things.</div>`,
      },
      {
        heading: "From lab specimen to real part: the correction factors",
        html: `<p>The Marin-style correction chain scales the specimen value down to the part you are actually building:</p>
<p class="eq">S<sub>e</sub> = k<sub>a</sub> k<sub>b</sub> k<sub>c</sub> k<sub>d</sub> k<sub>e</sub> S&prime;<sub>e</sub></p>
<table><thead><tr><th>Factor</th><th>What it covers</th><th>Typical value</th></tr></thead>
<tbody>
<tr><td>k<sub>a</sub> surface</td><td>finish and the micro-notches it leaves</td><td>0.9 ground, 0.75 machined, 0.45 hot-rolled, 0.3 as-forged</td></tr>
<tr><td>k<sub>b</sub> size</td><td>stressed volume; more material, more defects</td><td>1.0 below 8 mm, about 0.85 at 50 mm</td></tr>
<tr><td>k<sub>c</sub> loading</td><td>axial has no stress gradient to hide behind</td><td>1.0 bending, 0.85 axial, 0.59 torsion</td></tr>
<tr><td>k<sub>d</sub> temperature</td><td>hot strength loss, creep interaction</td><td>1.0 to about 350 &deg;C for steel</td></tr>
<tr><td>k<sub>e</sub> reliability</td><td>scatter; 50% survival is the raw data</td><td>0.897 at 90%, 0.814 at 99%, 0.753 at 99.9%</td></tr>
</tbody></table>
<p><strong>Surface finish almost always dominates.</strong> It is also the cheapest to change: polishing or grinding one fillet costs a few minutes of machine time, while a size or loading factor is locked in by the architecture. When a corrected S<sub>e</sub> lands around 40% of the specimen value, look at k<sub>a</sub> first.</p>`,
      },
      {
        heading: "Mean stress: Goodman, Soderberg, Gerber",
        html: `<p>Three straight-line-or-parabola fits turn a (&sigma;<sub>a</sub>, &sigma;<sub>m</sub>) pair into a safety factor:</p>
<p class="eq">Goodman: &sigma;<sub>a</sub>/S<sub>e</sub> + &sigma;<sub>m</sub>/S<sub>ut</sub> = 1/n</p>
<p class="eq">Soderberg: &sigma;<sub>a</sub>/S<sub>e</sub> + &sigma;<sub>m</sub>/S<sub>y</sub> = 1/n</p>
<p class="eq">Gerber: n&sigma;<sub>a</sub>/S<sub>e</sub> + (n&sigma;<sub>m</sub>/S<sub>ut</sub>)<sup>2</sup> = 1</p>
<p><strong>Soderberg</strong> is the most conservative because it uses yield strength as the mean-stress intercept, so it also guarantees no first-cycle yielding. <strong>Goodman</strong> is the industry default: simple, linear, and it sits below almost all real test data. <strong>Gerber</strong> is the parabola that actually fits ductile-steel data best, so it is the one to reach for when Goodman is costing you real weight and you can defend the extra risk.</p>
<figure class="fig">${figGoodman}<figcaption>Safety factor is measured along the load line from the origin, not vertically. The margin is the gap between the operating point and the line.</figcaption></figure>
<p>Two habits worth building. First, a <em>compressive</em> mean stress gets no penalty. Set &sigma;<sub>m</sub> = 0 and use n = S<sub>e</sub>/&sigma;<sub>a</sub> rather than taking credit for a negative term. Second, tensile residual stress from welding or grinding adds straight onto &sigma;<sub>m</sub>, and it can erase the entire apparent margin of a part whose applied mean stress looks harmless.</p>`,
      },
      {
        heading: "Notches: K_t, K_f and notch sensitivity",
        html: `<p>Fatigue cracks start at stress raisers. The elastic stress concentration K<sub>t</sub> comes from geometry alone; the number you actually apply to the alternating stress is the fatigue notch factor</p>
<p class="eq">K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1), &nbsp;&nbsp; q = 1/(1 + a/r)</p>
<p><strong>K<sub>t</sub></strong> is the elastic geometry factor, <strong>r</strong> is the notch root radius, <strong>a</strong> is the Neuber/Peterson material constant (about 0.25 mm for a 700 MPa steel, about 0.06 mm at 1400 MPa), and <strong>q</strong> is notch sensitivity between 0 and 1.</p>
<div class="callout warn">Get the direction right, because it is asked deliberately. <strong>A sharper notch has LOWER notch sensitivity.</strong> With a = 0.25 mm, a 0.25 mm radius gives q = 1/(1 + 1) = 0.50, while a 2.5 mm radius gives q = 1/(1 + 0.1) = 0.91. As r &rarr; 0, q &rarr; 0 and K<sub>f</sub> &rarr; 1. The material behaves as if the very sharp notch were not fully there, which is precisely why K<sub>f</sub> &lt; K<sub>t</sub>. Higher-strength material moves q the other way: a smaller constant a means q closer to 1, which is why strong steels are punished harder by notches.</div>
<p>None of that makes a sharp notch safe. K<sub>t</sub> climbs far faster as the radius shrinks than q falls, so the product still gets worse. The design lever runs the other way: open the radius up. Going from a 0.5 mm to a 3 mm fillet might drop K<sub>t</sub> from 2.8 to 1.8 while q rises from 0.67 to 0.92, and K<sub>f</sub> still falls from 2.20 to 1.74.</p>
<figure class="fig">${figNotch}<figcaption>K<sub>f</sub>, not K<sub>t</sub>, multiplies the alternating stress. Apply it to the alternating component, and to the mean only when the notch stays elastic.</figcaption></figure>`,
      },
      {
        heading: "Cumulative damage, crack growth, and reading the break",
        html: `<p>For a variable-amplitude history, count cycles (rainflow is the standard method) and sum linear damage:</p>
<p class="eq">D = &Sigma;(n<sub>i</sub>/N<sub>i</sub>), &nbsp;&nbsp; failure near D = 1</p>
<p><strong>n<sub>i</sub></strong> is the applied cycles in block i and <strong>N<sub>i</sub></strong> is the life at that block's stress. Miner's known weakness is that it is order-blind: it gives the same answer whether the big cycle comes first or last. Reality is not order-blind. A tensile overload can blunt a crack tip and leave compressive residual stress that <em>retards</em> growth, while a compressive overload can accelerate it. Cycles below the corrected endurance limit contribute nothing in the simple form, which is usually the biggest single lever in a spectrum calculation.</p>
<p>Once a crack exists, the question changes from initiation to growth: &Delta;K = Y&Delta;&sigma;&radic;(&pi;a) drives da/dN = C(&Delta;K)<sup>m</sup>, and the part is done when K<sub>max</sub> reaches K<sub>IC</sub>. Integrating that from the smallest reliably detectable crack to the critical crack is what sets an inspection interval.</p>
<p>The fracture surface tells you most of this after the fact. Beach marks are concentric bands centred on the origin, each marking a change in load or a shutdown. Ratchet marks, small steps at the surface where separate cracks joined, mean multiple origins, which means a severe stress concentration or a high surface stress. And the ratio of the smooth fatigue zone to the rough final overload zone reads the load level directly: a big fatigue zone with a small final zone means the nominal stress was low, while a small fatigue zone means the part was running near its static capacity.</p>`,
      },
    ],
    equations: [
      { name: "Stress amplitude and mean", formula: "<p>&sigma;<sub>a</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2, &nbsp; &sigma;<sub>m</sub> = (&sigma;<sub>max</sub> + &sigma;<sub>min</sub>)/2</p>", note: "&sigma;<sub>a</sub> drives the damage; &sigma;<sub>m</sub> scales how damaging each unit of amplitude is. R = &sigma;<sub>min</sub>/&sigma;<sub>max</sub> carries the same information." },
      { name: "Endurance limit estimate", formula: "<p>S&prime;<sub>e</sub> &asymp; 0.5 S<sub>ut</sub> (steel), capped near 700 MPa</p>", note: "A polished-specimen value only, and only for ferrous alloys. Aluminum has no true endurance limit; quote a fatigue strength at a stated life instead." },
      { name: "Marin correction chain", formula: "<p>S<sub>e</sub> = k<sub>a</sub>k<sub>b</sub>k<sub>c</sub>k<sub>d</sub>k<sub>e</sub>S&prime;<sub>e</sub></p>", note: "Surface (k<sub>a</sub>), size (k<sub>b</sub>), loading (k<sub>c</sub>), temperature (k<sub>d</sub>), reliability (k<sub>e</sub>). Surface usually dominates and is usually the cheapest to fix." },
      { name: "Finite-life S-N fit", formula: "<p>S = aN<sup>b</sup>, &nbsp; b = log(0.9S<sub>ut</sub>/S<sub>e</sub>)/log(10<sup>3</sup>/10<sup>6</sup>)</p>", note: "Use it whenever required life is under about 10<sup>6</sup> cycles; designing a short-life part to S<sub>e</sub> throws away weight and cost." },
      { name: "Goodman", formula: "<p>&sigma;<sub>a</sub>/S<sub>e</sub> + &sigma;<sub>m</sub>/S<sub>ut</sub> = 1/n</p>", note: "The linear default. Soderberg swaps S<sub>ut</sub> for S<sub>y</sub> and is more conservative; Gerber is the parabola n&sigma;<sub>a</sub>/S<sub>e</sub> + (n&sigma;<sub>m</sub>/S<sub>ut</sub>)<sup>2</sup> = 1 and is the least conservative of the three." },
      { name: "Fatigue notch factor", formula: "<p>K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1), &nbsp; q = 1/(1 + a/r)</p>", note: "q rises with notch root radius r and with material strength. Sharper notches have LOWER q, which is why K<sub>f</sub> falls short of K<sub>t</sub>, but K<sub>t</sub> rises faster, so sharp is still worse." },
      { name: "Miner cumulative damage", formula: "<p>D = &Sigma;n<sub>i</sub>/N<sub>i</sub></p>", note: "Blocks below the corrected endurance limit contribute nothing. Miner is order-blind, so overload retardation and sequence effects are outside it." },
      { name: "Crack growth", formula: "<p>&Delta;K = Y&Delta;&sigma;&radic;(&pi;a), &nbsp; da/dN = C(&Delta;K)<sup>m</sup></p>", note: "Keep the crack length in metres. Integrating from the detectable size to the critical size a<sub>c</sub> = (K<sub>IC</sub>/Y&sigma;<sub>max</sub>)<sup>2</sup>/&pi; is what sets an inspection interval." },
    ],
    interviewTips: [
      "Write down sigma_a, sigma_m and R before touching any curve; most errors are a max stress fed into an amplitude formula.",
      "Steels have an endurance-limit knee near 10^6 cycles; aluminum does not, so quote a fatigue strength at a stated life.",
      "If the part sees under about 10^6 cycles, design to the finite-life S-N point, not to S_e; that is real weight and cost.",
      "Surface finish is usually the biggest Marin correction and the cheapest to change; check k_a before adding material.",
      "A sharper notch has lower notch sensitivity q, so K_f is below K_t; that is not a licence to leave sharp corners.",
      "Read the fracture face: a large smooth zone with a small rough zone means the nominal stress was low.",
    ],
  },
  questions: [
    {
      id: "fatigue-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A steel lever in a packaging machine has run 18 months at a peak stress around 45% of yield, then broke. The failure report offers four mechanisms. Which one fits fatigue?</p>`,
      choices: [
        "The section necked visibly and tore in one event when an overload jammed the line.",
        "The part slowly stretched under a steady load until it lost its running clearance.",
        "A single crack advanced a small step on each stroke until the rest tore away.",
        "A branched network of cracks grew under steady tension in a chloride wash-down.",
      ],
      answer: 2,
      explanation: `<p>Fatigue is progressive: one crack, one small increment per cycle, then a sudden final fracture of whatever ligament is left. That is choice C. The nominal stress being well below yield is the signature, not a contradiction. The damage happens locally at a notch or surface mark where the real cyclic stress is several times the average.</p><p>The others are the mechanisms worth ruling out by name. Necking plus a one-time tear is ductile overload. Slow extension under steady load at temperature is creep. A branched crack network in a chloride environment is stress-corrosion cracking, which needs sustained tensile stress and a specific chemistry but no cycling at all. A useful discriminator on the bench: fatigue leaves a flat, smooth zone with beach marks and almost no gross plastic deformation, while overload leaves shear lips and obvious distortion.</p>`,
    },
    {
      id: "fatigue-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A bracket sees a stress that cycles between &sigma;<sub>min</sub> = 20 MPa and &sigma;<sub>max</sub> = 120 MPa once per machine stroke. What alternating stress amplitude goes into the fatigue check?</p>`,
      answer: 50,
      unit: "MPa",
      explanation: `<p>The fatigue curve wants amplitude, which is half the range, not the peak.</p><p class="eq">&sigma;<sub>a</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 = (120 &minus; 20)/2 = <strong>50 MPa</strong></p><p>Handing the peak 120 MPa to a Goodman check inflates the amplitude term 2.4&times; and still misses the tensile mean of 70 MPa entirely.</p>`,
    },
    {
      id: "fatigue-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A drawing calls out 4140 steel, S<sub>ut</sub> = 950 MPa. Before opening any handbook, what alternating stress would you expect a polished rotating-beam specimen of that steel to survive indefinitely?</p>`,
      answer: 475,
      unit: "MPa",
      explanation: `<p>For wrought steels the working estimate is half the ultimate:</p><p class="eq">S&prime;<sub>e</sub> &asymp; 0.5 S<sub>ut</sub> = 0.5(950) = <strong>475 MPa</strong></p><p>The rule saturates above roughly S<sub>ut</sub> = 1400 MPa, where it caps near 700 MPa. And this is a <em>specimen</em> number: polished, 7.6 mm, room temperature, 50% survival. The shaft you are drawing lands at 40&ndash;60% of it.</p>`,
    },
    {
      id: "fatigue-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A chart gives K<sub>t</sub> = 3.0 for a small-radius groove in a mild steel shaft. Your colleague insists the number to use in the fatigue check is smaller than 3.0. Why is that right?</p>`,
      choices: [
        "A small root radius gives low notch sensitivity, so K<sub>f</sub> falls short of K<sub>t</sub>.",
        "The published K<sub>t</sub> charts already carry a safety factor that must be removed.",
        "K<sub>t</sub> applies only to static loading and has no meaning in cyclic loading.",
        "The groove root yields on the first cycle, which erases the concentration for good.",
      ],
      answer: 0,
      explanation: `<p>Notch sensitivity is q = 1/(1 + a/r). With a &asymp; 0.25 mm for a mild steel, a 0.25 mm root radius gives q = 1/(1 + 1) = 0.50 and a 2.5 mm radius gives q = 1/(1 + 0.1) = 0.91. Sharper means <em>lower</em> q, so K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1) sits below K<sub>t</sub>. Here K<sub>f</sub> = 1 + 0.5(2.0) = 2.0 rather than 3.0. Mild steel is the least notch-sensitive case; a 1400 MPa steel with a &asymp; 0.06 mm would come much closer to the full K<sub>t</sub>.</p><p>Choice B invents a safety factor that is not in the charts. Choice C is backwards. K<sub>t</sub> is precisely where the cyclic calculation starts. Choice D is the tempting one: local yielding does redistribute a static peak, but it does not erase a notch under cycling, because the notch root simply cycles plastically and initiates a crack faster. The follow-up question is whether the sharp notch is therefore safe. It is not, because K<sub>t</sub> climbs far faster than q falls as the radius shrinks.</p>`,
    },
    {
      id: "fatigue-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel link runs at &sigma;<sub>a</sub> = 80 MPa and &sigma;<sub>m</sub> = 60 MPa at its critical surface. The corrected endurance strength is S<sub>e</sub> = 200 MPa and S<sub>ut</sub> = 500 MPa. What is the Goodman fatigue safety factor?</p>`,
      answer: 1.92,
      tolerance: 0.025,
      explanation: `<p>Goodman puts the operating point on a straight line from S<sub>e</sub> on the amplitude axis to S<sub>ut</sub> on the mean axis:</p><p class="eq">1/n = &sigma;<sub>a</sub>/S<sub>e</sub> + &sigma;<sub>m</sub>/S<sub>ut</sub> = 80/200 + 60/500 = 0.520</p><p class="eq">n = 1/0.520 = <strong>1.92</strong></p><p>The factor is measured along the load line out from the origin, so both stresses scale together by 1.92 before the point reaches the line. It is not the vertical distance to the line.</p>`,
    },
    {
      id: "fatigue-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A ground steel shaft in fully reversed bending is suspected of a fatigue crack. Four locations are candidates. Where do you put the dye penetrant first?</p>`,
      figure: figNotch,
      choices: [
        "The polished mid-span, because that is where the nominal bending moment peaks.",
        "The end of the keyway, roughly 15% down the moment diagram from the peak.",
        "The shaft core at mid-span, where the grain is coarsest after forging.",
        "The chamfered shaft end, which carries essentially no bending moment.",
      ],
      answer: 1,
      explanation: `<p>Fatigue is a local, surface phenomenon. A keyway end brings a sharp corner, interrupted load path, machining marks and often fretting all at once; K<sub>f</sub> of 1.6&ndash;2.5 is normal there. A 15% drop in nominal moment is nothing against a factor of two on local stress, so 0.85 &times; 2.0 = 1.7 times the mid-span stress lands at the keyway.</p><p>The polished mid-span is the peak on the moment diagram but has no stress raiser and the best surface on the part, which is exactly why it usually survives. The core is the wrong place twice over: bending stress is zero at the neutral axis and fatigue cracks nucleate at free surfaces where slip bands can extrude. The chamfer sees almost no stress. The transferable habit is to overlay the K<sub>f</sub> map on the nominal stress map and inspect the product, not either one alone.</p>`,
    },
    {
      id: "fatigue-q07",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A groove has an elastic stress concentration K<sub>t</sub> = 2.5 and the material and root radius give notch sensitivity q = 0.80. What fatigue notch factor multiplies the nominal alternating stress?</p>`,
      answer: 2.2,
      tolerance: 0.02,
      explanation: `<p class="eq">K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1) = 1 + 0.80(2.5 &minus; 1) = <strong>2.20</strong></p><p>The limits are worth carrying. At q = 0 the material behaves as if the notch were not there. At q = 1 it feels the full elastic peak and K<sub>f</sub> = K<sub>t</sub>. Structural steels sit between 0.5 and 0.95.</p><p>Apply it to the alternating component, not the mean, unless you can show the notch root stays elastic.</p>`,
    },
    {
      id: "fatigue-q08",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A hoist arm sees three blocks each week: 500 cycles at &sigma;<sub>a</sub> = 180 MPa (S-N life 2.0 &times; 10<sup>4</sup>), 5,000 cycles at 120 MPa (life 5.0 &times; 10<sup>5</sup>), and 200,000 cycles at 55 MPa. The corrected endurance limit is S<sub>e</sub> = 70 MPa. Using Miner's rule, how many weeks of this duty reach D = 1?</p>`,
      answer: 28.6,
      unit: "weeks",
      tolerance: 0.03,
      explanation: `<p>Start by asking which blocks count at all. The 55 MPa block sits below the corrected endurance limit of 70 MPa, so in the simple Miner form its N is infinite and it contributes zero damage, 200,000 cycles a week of it, and it drops out.</p><p class="eq">D<sub>week</sub> = 500/(2.0 &times; 10<sup>4</sup>) + 5,000/(5.0 &times; 10<sup>5</sup>) + 0</p><p class="eq">D<sub>week</sub> = 0.0250 + 0.0100 = 0.0350</p><p class="eq">weeks to D = 1: 1/0.0350 = <strong>28.6 weeks</strong></p><p>500 cycles at the high block do two and a half times the damage of 5,000 cycles at the middle one. That is the S-N slope at work and it is why load spectra are dominated by rare severe events. Miner is also order-blind, and once you add a notch or corrosion that pushes the effective S<sub>e</sub> below 55 MPa, the block you just deleted comes back and dominates by sheer count.</p>`,
    },
    {
      id: "fatigue-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Two identical steel coil springs are tested fully reversed; one of them was shot peened first and lasts about four times longer. What is actually doing the work?</p>`,
      choices: [
        "The peening cold works the wire and raises its bulk yield strength through the section",
        "The peening leaves a compressive residual layer, cutting the local mean stress",
        "The peening smooths the drawn wire surface, so the local stress concentration drops",
        "The peening relieves the coiling residual stress, leaving the finished wire stress free",
      ],
      answer: 1,
      explanation: `<p>Peening plastically stretches a thin surface layer; the elastic bulk underneath pulls it back into compression, typically 300&ndash;600 MPa deep to 0.1&ndash;0.3 mm. That compression subtracts from the applied tensile mean at exactly the depth where fatigue cracks nucleate, so the crack spends less of each cycle open. Four times life from a mean-stress shift of a few hundred MPa is entirely ordinary.</p><p>Every distractor is a real misconception. Bulk yield strength barely moves, and would not explain a high-cycle gain anyway. Peening <em>roughens</em> the surface. It wins despite a worse finish, not because of a better one. And it does not relieve residual stress, it deliberately imposes it; stress relief would remove the very thing that helps. The follow-up question is what kills the benefit: heat, an overload that relaxes the layer, or a finishing cut that machines it off.</p>`,
    },
    {
      id: "fatigue-q10",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A launch-vehicle actuator bracket sees 8,000 full-load cycles in its entire life. Your first draft sized it against the corrected endurance limit S<sub>e</sub> = 210 MPa and the bracket came out heavy. What is the defensible change?</p>`,
      choices: [
        "Keep S<sub>e</sub>; 8,000 cycles is already inside the high-cycle regime it covers.",
        "Design to the finite-life S-N point at 8,000 cycles, well above the flat S<sub>e</sub>.",
        "Delete the fatigue check; under 10<sup>4</sup> cycles static yield governs.",
        "Keep S<sub>e</sub> but drop the surface factor, since the bracket is a one-flight item.",
      ],
      answer: 1,
      explanation: `<p>The endurance limit is the allowable at and beyond the knee, near 10<sup>6</sup> cycles. At 8,000 cycles you are far up the sloped part of the S-N curve where the allowable is much higher. Fit the slope between 0.9S<sub>ut</sub> at 10<sup>3</sup> and S<sub>e</sub> at 10<sup>6</sup> and read it at 8,000; for a typical steel that lands roughly 1.6 to 1.9 times S<sub>e</sub>, which is a large mass saving on a launch item.</p><p>Choice A confuses "high-cycle" (elastic, stress-based) with "infinite life", 8,000 cycles is high-cycle but nowhere near the knee. Choice C is the dangerous one: 8,000 cycles is plenty to grow a crack from a drilled hole, and a static-only check has caught out plenty of programs. Choice D quietly removes the one correction that matters most on a machined bracket. Say the caveat too: as life drops toward 10<sup>3</sup> cycles and local plasticity appears, hand the problem to strain-life rather than stretching the S-N fit.</p>`,
    },
    {
      id: "fatigue-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A machined 4140 shaft has S<sub>ut</sub> = 1000 MPa. Estimate the specimen endurance limit as 0.5S<sub>ut</sub>, then apply k<sub>a</sub> = 0.72 (machined), k<sub>b</sub> = 0.88 (size), k<sub>c</sub> = 1.0 (bending) and k<sub>e</sub> = 0.868 (95% reliability). What corrected endurance strength should the fatigue check use?</p>`,
      answer: 275,
      unit: "MPa",
      tolerance: 0.03,
      explanation: `<p>Start from the specimen estimate and walk the Marin chain:</p><p class="eq">S&prime;<sub>e</sub> = 0.5(1000) = 500 MPa</p><p class="eq">S<sub>e</sub> = k<sub>a</sub>k<sub>b</sub>k<sub>c</sub>k<sub>e</sub>S&prime;<sub>e</sub> = 0.72(0.88)(1.0)(0.868)(500)</p><p class="eq">S<sub>e</sub> = 0.550 &times; 500 = <strong>275 MPa</strong></p><p>That is 55% of the specimen value, and the single biggest bite is the machined surface at 0.72. Grinding that one fillet would take k<sub>a</sub> to roughly 0.89 and lift S<sub>e</sub> to about 340 MPa, a 24% gain for a few minutes of machine time and no drawing change anywhere else. That is the answer to the follow-up "where would you look first for margin?".</p><p>The factors multiply. Adding them, or applying only the worst one, is the common slip. And the reliability factor is not optional padding: raw S-N data is a 50% survival line, so 0.868 is what buys you 95%. Going to 99% costs more: on the k<sub>e</sub> = 1 &minus; 0.08z model that is z = 2.33 and k<sub>e</sub> = 0.814, dropping S<sub>e</sub> to 258 MPa.</p>`,
    },
    {
      id: "fatigue-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A shot-peened steel spring works fine on the bench but loses most of its fatigue benefit within a few months in a hot exhaust-gate actuator running continuously at 280 &deg;C. What happened?</p>`,
      choices: [
        "The hot gas oxidised the wire, and the oxide film acts as a hard brittle notch.",
        "At temperature the alloy softens, so the same deflection makes more stress.",
        "The spring rate drifts with temperature, raising the alternating stress it sees.",
        "The compressive residual stress relaxed thermally, taking the mean-stress benefit.",
      ],
      answer: 3,
      explanation: `<p>Peening benefit lives entirely in a residual stress field, and residual stress is metastable. Held at temperature, the surface layer creeps and the elastic mismatch that held it in compression fades, measurable relaxation in spring steels starts well below 300 &deg;C and accelerates with time and with the applied cyclic load. Once the compression is gone the mean stress at the surface climbs back and the spring behaves like an unpeened one.</p><p>The distractors are all real effects of the wrong size. Oxidation does matter over long exposure, but it is slower than relaxation and would not produce a clean early loss of the peening gain. Steel's modulus falls only a few percent by 280 &deg;C, and a modulus drop actually <em>reduces</em> stress for a fixed deflection. Rate drift changes force, not the surface stress state. The design responses are a peening intensity chosen for the service temperature, a warm-peened or stress-relief-resistant alloy, or simply not counting on peening in a hot application.</p>`,
    },
    {
      id: "fatigue-q13",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A handbook page lists "endurance limit 300 MPa" for a steel and, on the facing page, "fatigue strength at 5 &times; 10<sup>8</sup> cycles = 96 MPa" for a 2024 aluminum. Your aluminum bracket must reach 10<sup>9</sup> cycles. How do you read that difference?</p>`,
      figure: figSN,
      choices: [
        "Aluminum keeps losing fatigue strength with cycles, so it is quoted at a stated life",
        "The aluminum entry is incomplete; use half its ultimate strength instead",
        "Aluminum has a genuine knee too, but it only appears somewhere beyond 10<sup>9</sup> cycles",
        "The two entries mean the same thing; only the publishing convention differs",
      ],
      answer: 0,
      explanation: `<p>Wrought steels have a genuine knee near 10<sup>6</sup>&ndash;10<sup>7</sup> cycles, attributed to interstitial carbon and nitrogen pinning dislocations so that sub-threshold cycles do no lasting damage. Aluminum alloys have no such mechanism: their S-N curve keeps sloping down through 10<sup>8</sup> and 10<sup>9</sup>. That is why the entry is written as a strength <em>at a stated life</em>. It is a point on a falling curve, not a plateau.</p><p>For your 10<sup>9</sup> requirement, 96 MPa at 5 &times; 10<sup>8</sup> is not conservative enough: extrapolate the slope out one more half-decade (expect roughly 85&ndash;90 MPa), then apply the surface, size and reliability factors on top. Choice B applies a ferrous rule of thumb to a non-ferrous alloy and typically overestimates by a factor of two. Choice C invents a knee that the data does not show. Choice D is the shortcut that puts cracked brackets in the field. Say the practical consequence out loud: for very-high-cycle aluminum there is no "safe forever" stress, only a life you have designed to and an inspection plan.</p>`,
    },
    {
      id: "fatigue-q14",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A steel has S<sub>ut</sub> = 700 MPa and a corrected endurance limit S<sub>e</sub> = 300 MPa at 10<sup>6</sup> cycles. Fit the finite-life line S = aN<sup>b</sup> between 0.9S<sub>ut</sub> at 10<sup>3</sup> cycles and S<sub>e</sub> at 10<sup>6</sup> cycles. What alternating stress corresponds to a life of 10<sup>5</sup> cycles?</p>`,
      figure: figSN,
      answer: 384,
      unit: "MPa",
      tolerance: 0.03,
      explanation: `<p>Two points define the log-log line. The upper anchor is 0.9(700) = 630 MPa at 10<sup>3</sup> cycles; the lower is 300 MPa at 10<sup>6</sup>.</p><p class="eq">b = log(630/300) / log(10<sup>3</sup>/10<sup>6</sup>) = log(2.10)/(&minus;3) = 0.3222/(&minus;3) = &minus;0.1074</p><p class="eq">a = 630/(10<sup>3</sup>)<sup>b</sup> = 630/10<sup>&minus;0.3222</sup> = 630/0.4762 = 1323 MPa</p><p class="eq">S(10<sup>5</sup>) = 1323(10<sup>5</sup>)<sup>&minus;0.1074</sup> = 1323(0.2904) = <strong>384 MPa</strong></p><p>384 MPa sits between the 630 and 300 anchors, nearer the lower one, which is right for a point one decade above the knee on a log scale. The payoff is the design statement, a part needing only 10<sup>5</sup> cycles can run 28% above S<sub>e</sub>. Interpolating linearly in N rather than in log N is the error: 630 &minus; 330(10<sup>5</sup>/10<sup>6</sup>) puts the answer near 597 MPa, which is 55% high and dangerously unconservative.</p>`,
    },
  ],
  qna: [
    {
      id: "fatigue-qa01",
      q: `<p>A cracked bracket comes back from the field. Walk me through how you investigate it.</p>`,
      a: `<p>First I do not touch the fracture face, no fitting the halves back together, no wire brushing. I photograph it as received, then look for the origin: beach marks are concentric about it, and ratchet marks at the surface tell me whether there was one origin or many. Where the origin sits tells me most of the story: a machining mark, a fillet root, a weld toe, a corrosion pit, a fretting scar at a clamped interface.</p><p>Second, I size the zones. A large smooth fatigue zone with a small rough final zone means the nominal stress was low and this is a detail problem; a small fatigue zone means the part was running near its static capacity and the whole section is undersized.</p><p>Third, I go get the real load history rather than the specification. Strain gauge the part in service if I can, rainflow count it, and compare against what the design assumed. Then I check the obvious process suspects: was the radius to drawing, was the surface finish to drawing, was the heat treat right, did anyone grind or stamp near the origin after the treatment that was supposed to protect it. I only start proposing redesigns once I can say where the crack started and why the stress there was higher than we thought.</p>`,
    },
    {
      id: "fatigue-qa02",
      q: `<p>Explain fatigue to someone who has only ever done static stress analysis, and tell me what you would need from them to size a part for it.</p>`,
      a: `<p>Static analysis asks whether one load event breaks the part. Fatigue asks whether ten million small events do, and they can, at stresses well below yield, because damage accumulates locally. A crack nucleates in a few grains at a free surface where a notch or a scratch raises the local stress, grows a fraction of a micron per cycle, and the part fails when the remaining section can no longer carry the peak load. Nothing in a static factor of safety sees any of that.</p><p>To size a part I need six things. The load history, not the peak load, amplitude, mean and the number of cycles, ideally as a spectrum. The geometry at the critical detail, especially root radii, so I can get K<sub>t</sub> and then K<sub>f</sub>. The material's fatigue data, or at least S<sub>ut</sub> so I can estimate S<sub>e</sub>. The manufacturing route, because surface finish is usually the largest correction. The environment and temperature, because corrosion removes an endurance limit entirely. And the required life plus a reliability target, because 50% survival is what raw S-N data means. If someone hands me only a peak stress and a yield strength, I cannot answer the question yet.</p>`,
    },
    {
      id: "fatigue-qa03",
      q: `<p>What is an S-N curve really telling you, and where does it mislead you?</p>`,
      a: `<p>It is a plot of alternating stress against cycles to failure for one specimen geometry, one surface, one load ratio, one environment and one survival probability, usually a polished 7.6 mm rotating-beam specimen at R = &minus;1 in dry air with 50% survival. Read that way it is extremely useful: it gives you the slope of the finite-life region and, for steels, the knee near 10<sup>6</sup>&ndash;10<sup>7</sup> cycles below which the curve runs flat.</p><p>It misleads in four ways. First, it is a specimen, not your part: surface, size, loading mode, temperature and reliability corrections routinely take it to 40&ndash;60% of the plotted value. Second, the flat portion is a ferrous phenomenon. Aluminum keeps falling, so an "endurance limit" read off an aluminum plot is a fiction. Third, scatter is large; a factor of three or more in life at a given stress is normal, which is why the mean curve without a reliability factor is optimistic by construction. Fourth, it says nothing about a part that already has a crack; at that point the problem is da/dN and &Delta;K, not S and N. And any corrosive environment tends to erase the knee altogether, so an endurance limit measured in dry air does not survive a salt spray.</p>`,
    },
    {
      id: "fatigue-qa04",
      q: `<p>How do you handle mean stress, and which criterion would you actually present in a design review?</p>`,
      a: `<p>A tensile mean stress makes a given amplitude more damaging because the crack spends more of the cycle open, so I never compare an amplitude against S<sub>e</sub> without accounting for it. The three standard fits are Goodman (linear to S<sub>ut</sub>), Soderberg (linear to S<sub>y</sub>) and Gerber (parabolic to S<sub>ut</sub>). For the same operating point they rank Soderberg most conservative, then Goodman, then Gerber. For example at &sigma;<sub>a</sub> = 120, &sigma;<sub>m</sub> = 200, S<sub>e</sub> = 240, S<sub>y</sub> = 400, S<sub>ut</sub> = 600 they give n = 1.00, 1.20 and 1.50.</p><p>I present Goodman by default. It is simple, it sits below almost all real data, and everyone in the room knows what it means. I use Soderberg when I also need a guarantee against first-cycle yielding, since its intercept is S<sub>y</sub>. I reach for Gerber only when Goodman is costing real weight, the material is a ductile steel where Gerber actually fits the data, and I can show test evidence, and then I say explicitly that I have spent conservatism.</p><p>Two rules I apply regardless. A compressive mean stress gets no credit: I set &sigma;<sub>m</sub> = 0 and use n = S<sub>e</sub>/&sigma;<sub>a</sub>. And tensile residual stress from welding, grinding or straightening goes straight onto &sigma;<sub>m</sub>, because the crack tip cannot tell the difference between residual and applied tension.</p>`,
    },
    {
      id: "fatigue-qa05",
      q: `<p>Talk me through K<sub>t</sub>, K<sub>f</sub> and notch sensitivity. Where do designers get this wrong?</p>`,
      a: `<p>K<sub>t</sub> is pure geometry: the ratio of peak elastic stress at the notch root to the nominal stress, read from a chart or an FE model. K<sub>f</sub> is the factor that fatigue actually feels, K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1), and q is notch sensitivity, roughly q = 1/(1 + a/r) where r is the root radius and a is a material constant, about 0.25 mm for a 700 MPa steel and about 0.06 mm for a 1400 MPa steel.</p><p>The mistake I see most often is getting the direction of q backwards. Notch sensitivity <em>falls</em> as the notch gets sharper. With a = 0.25 mm, r = 0.25 mm gives q = 0.50 and r = 2.5 mm gives q = 0.91; as r goes to zero, q goes to zero and K<sub>f</sub> goes to 1. The physical reading is that a very sharp notch has such a steep stress gradient that only a few grains ever see the peak, and a crack needs a finite volume of material to nucleate in.</p><p>The second mistake is concluding from that that sharp notches are fine. They are not: K<sub>t</sub> grows much faster as r shrinks than q falls, so K<sub>f</sub> still gets worse. Going the other way is the design lever. Opening a fillet from 0.5 mm to 3 mm might take K<sub>t</sub> from 2.8 to 1.8 while q rises from 0.67 to 0.92, and K<sub>f</sub> still drops from 2.20 to 1.74. The third mistake is forgetting that stronger material means higher q, so upgrading the alloy without touching the geometry gives back less than the strength increase suggests.</p>`,
    },
    {
      id: "fatigue-qa06",
      q: `<p>Why are rotating shafts the classic fatigue problem, and what details do you specify on the drawing?</p>`,
      a: `<p>Because the loading is fully reversed even when nothing about the load is changing. A steady transverse load from a belt, a gear mesh or an out-of-balance rotor produces a bending moment that is fixed in space, but a material point on the surface rotates through tension and compression once per revolution. At 1500 rpm that is 2.2 million cycles a day at R = &minus;1, the most damaging ratio there is, with zero mean stress to blame it on. Meanwhile the torque may be perfectly steady, so a candidate who only checks the torsional stress misses the whole failure mode.</p><p>On the drawing I specify generous shoulder fillets and call out the radius explicitly with a tolerance rather than leaving it to the machinist; I use a shoulder relief groove where the bearing seat forces a small radius; I keep keyways, cross-holes and snap-ring grooves away from the peak moment and specify a radiused sled-runner keyseat rather than a square-ended one; I call out surface finish at the critical diameters, since k<sub>a</sub> is the biggest correction; and I specify shot peening or fillet rolling where the geometry cannot be opened up. I also check that whoever grinds the journal afterwards is not removing a peened layer, and that any press fit has an edge relief so the fit boundary does not become a fretting site.</p>`,
    },
    {
      id: "fatigue-qa07",
      q: `<p>What is Miner's rule, when do you trust it, and when do you not?</p>`,
      a: `<p>Miner sums linear damage fractions: D = &Sigma;n<sub>i</sub>/N<sub>i</sub>, where n<sub>i</sub> is the cycles applied in block i and N<sub>i</sub> is the life at that block's stress from the S-N curve. Failure is assumed near D = 1. To use it on a real signal I first rainflow count the history into closed cycles, because a raw time trace has no cycles in it to count.</p><p>I trust it for comparing duty cycles, for screening a design change, and for setting a first estimate of service life on a well-characterised spectrum. I do not trust it as a number to certify against. It is order-blind by construction, which is its main weakness: a tensile overload early in life can leave compressive residual stress at the notch root and retard subsequent growth, so the real part outlives the prediction, while a compressive overload or a corrosive step can do the reverse. It also has no memory of crack closure or notch-root plasticity, and it is very sensitive to where you put the endurance limit. Blocks below S<sub>e</sub> contribute nothing, so a small change in the corrected S<sub>e</sub> can change the predicted life by an order of magnitude.</p><p>Observed damage sums at failure scatter between roughly 0.3 and 3. So for anything safety critical I use Miner to design and spectrum testing plus an inspection interval to certify.</p>`,
    },
    {
      id: "fatigue-qa08",
      q: `<p>How do you read a fatigue fracture surface?</p>`,
      a: `<p>I look for four things. The <strong>origin</strong>: beach marks curve concentrically around it, so following their curvature backwards finds it. It is nearly always at a free surface and nearly always at something, a fillet, a thread root, a weld toe, a tool mark, a pit, an inclusion just under the surface in very clean steels.</p><p>The <strong>beach marks</strong> themselves: macroscopic bands, visible to the eye, marking changes in load level or growth arrest during shutdowns. They are not the per-cycle striations, which are a micron-scale SEM feature; confusing the two in an interview is a tell.</p><p>The <strong>ratchet marks</strong>: small steps at the surface where cracks starting on slightly different planes joined up. A row of them means many origins along that edge, which points to a severe stress concentration or a high surface stress rather than a single defect.</p><p>And the <strong>zone ratio</strong>. The smooth flat area is fatigue; the rough, shear-lipped area is the final overload. A large fatigue zone with a small final zone means the nominal stress was low, so the fix is at the detail. A small fatigue zone with a large final zone means the part was running near its static capacity, so the fix is section or material. The shape of the crack front also tells you the loading: a single origin with a symmetric front suggests uniform bending or axial load, several origins around the circumference suggest rotating bending, and multiple origins on both sides suggest reversed bending.</p>`,
    },
    {
      id: "fatigue-qa09",
      q: `<p>How would you build a fatigue test that actually represents service, rather than one that passes?</p>`,
      a: `<p>I start from measured service data, not the specification. Instrument a real unit, gauge the critical detail, record for long enough to catch the rare events, then rainflow count it. The rare high-amplitude cycles usually dominate the damage sum, and a test that omits them is the classic way to pass a part that later fails in the field.</p><p>Then I match four things. The <strong>mean stress</strong>, because a shaker running an R = &minus;1 sweep on a part that in service carries a steady tensile preload is testing the wrong problem. The <strong>spectrum</strong>, or a block-loading approximation of it with the blocks interleaved rather than run smallest-to-largest, since sequence matters. The <strong>boundary conditions</strong>, because how the part is clamped changes where the load path and the fretting sites are. And the <strong>environment</strong> if corrosion, temperature or lubrication is part of the mechanism, a dry-air bench test of a part that lives in salt spray is not conservative in any useful sense.</p><p>I test to failure rather than to a pass point wherever budget allows, because the failure location is the most valuable output: if the test fails somewhere other than the service failure site, the test is wrong. I use enough samples to see the scatter, treat runouts explicitly as censored data rather than as successes, and I always ask what acceleration factor I have applied and what physics it assumes. Running the test at a higher stress to save time changes the failure mechanism if you push far enough.</p>`,
    },
    {
      id: "fatigue-qa10",
      q: `<p>A part cracked at a fillet in service. Give me your first five design moves, ranked.</p>`,
      a: `<p>One: <strong>open the radius</strong>. It is the highest-value change and usually the cheapest, because K<sub>t</sub> falls much faster than notch sensitivity rises. A fillet going from 0.5 mm to 3 mm can take K<sub>f</sub> from about 2.2 to about 1.7, which is a 20% cut in local alternating stress and, on a typical S-N slope, more than double the life.</p><p>Two: <strong>fix the surface at that fillet</strong>. Polish or grind out the tool marks, and check the drawing actually calls out a finish there. Surface is normally the biggest Marin factor and it is a process change, not a redesign.</p><p>Three: <strong>put the surface into compression</strong>. Shot peen or fillet roll. Cheap, well proven, and it attacks the mean stress exactly where the crack nucleates. I check the service temperature first, and I make sure nothing machines the layer off afterwards.</p><p>Four: <strong>reduce the alternating stress</strong>, by adding local section, moving the feature off the peak moment, or stiffening the load path. This costs weight, so it comes after the detail fixes.</p><p>Five: <strong>change material</strong>. Last, because a stronger steel raises notch sensitivity and buys less than the strength increase suggests, and because if the crack started at a machining mark then material was never the problem. Throughout, I would want the answer to one question before committing: is the driving load what we assumed, or has the duty cycle changed in service?</p>`,
    },
  ],
};

export default content;
