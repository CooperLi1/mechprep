import type { Question } from "../types";

// Additional question bank for Assembly Strategies & Tolerance Stacks
// (merged after the base questions in content/index.ts). Authored per-question.
// SVG element ids are prefixed "asm<n>-" to stay globally unique.

// Fig — RSS assumption holds vs breaks (centred process vs drifting mean).
const figDrift = `<svg viewBox="0 0 460 234" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm13-drift" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="127" y="26" text-anchor="middle" font-weight="600" fill="#1d4ed8">Capability at launch</text>
  <text x="342" y="26" text-anchor="middle" font-weight="600" fill="#dc2626">Capability now</text>
  <text x="127" y="44" text-anchor="middle" fill="#64748b" font-size="10">mean on nominal</text>
  <text x="342" y="44" text-anchor="middle" fill="#64748b" font-size="10">mean has moved toward the USL</text>
  <line x1="232" y1="20" x2="232" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <path d="M 62 170 C 96 168 106 82 127 82 C 148 82 158 168 192 170" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="40" y1="170" x2="215" y2="170" stroke="#334155" stroke-width="1.4"/>
  <line x1="55" y1="70" x2="55" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="200" y1="70" x2="200" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="55" y="186" text-anchor="middle" fill="#64748b" font-size="11">LSL</text>
  <text x="200" y="186" text-anchor="middle" fill="#64748b" font-size="11">USL</text>
  <path d="M 288 170 C 320 168 328 96 343 96 C 358 96 366 168 398 170" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="5 3"/>
  <path d="M 350 170 C 378 168 386 90 400 90 C 414 90 422 168 446 170" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="250" y1="170" x2="440" y2="170" stroke="#334155" stroke-width="1.4"/>
  <line x1="262" y1="70" x2="262" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="425" y1="70" x2="425" y2="170" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4 3"/>
  <rect x="425" y="166" width="18" height="7" fill="#dc2626"/>
  <text x="262" y="186" text-anchor="middle" fill="#64748b" font-size="11">LSL</text>
  <text x="425" y="186" text-anchor="middle" fill="#dc2626" font-size="11">USL</text>
  <line x1="343" y1="118" x2="392" y2="118" stroke="#dc2626" stroke-width="1.8" marker-end="url(#asm13-drift)"/>
  <text x="360" y="110" text-anchor="middle" fill="#dc2626" font-size="11">drift</text>
  <text x="230" y="222" text-anchor="middle" fill="#334155" font-size="11">Same drawing limits in both panels; the spread is unchanged and the mean is not.</text>
</svg>`;

// Fig — one hole band, three candidate shaft bands.
const figBands = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">One hole band and three candidate shaft bands</text>
  <line x1="76" y1="80" x2="76" y2="200" stroke="#334155" stroke-width="1.2"/>
  <line x1="72" y1="105" x2="80" y2="105" stroke="#334155" stroke-width="1"/>
  <line x1="72" y1="150" x2="80" y2="150" stroke="#334155" stroke-width="1"/>
  <line x1="72" y1="195" x2="80" y2="195" stroke="#334155" stroke-width="1"/>
  <text x="68" y="109" text-anchor="end" fill="#64748b" font-size="11">+30</text>
  <text x="68" y="154" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="68" y="199" text-anchor="end" fill="#64748b" font-size="11">&minus;30</text>
  <text x="44" y="76" text-anchor="start" fill="#64748b" font-size="11">&mu;m</text>
  <line x1="76" y1="150" x2="430" y2="150" stroke="#334155" stroke-width="1.4" stroke-dasharray="6 4"/>
  <rect x="90" y="112.5" width="340" height="37.5" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="100" y="106" text-anchor="start" fill="#1d4ed8" font-size="11">hole: 0 to +25 &mu;m</text>
  <rect x="120" y="157.5" width="70" height="25.5" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="215" y="108" width="70" height="27" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="310" y="82.5" width="70" height="22.5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="155" y="174" text-anchor="middle" fill="#334155" font-size="10">&minus;22 / &minus;5</text>
  <text x="250" y="126" text-anchor="middle" fill="#334155" font-size="10">+10 / +28</text>
  <text x="345" y="98" text-anchor="middle" fill="#334155" font-size="10">+30 / +45</text>
  <line x1="155" y1="185" x2="155" y2="198" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="250" y1="137" x2="250" y2="198" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="345" y1="107" x2="345" y2="198" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="155" y="214" text-anchor="middle" font-weight="600" fill="#334155">P</text>
  <text x="250" y="214" text-anchor="middle" font-weight="600" fill="#334155">Q</text>
  <text x="345" y="214" text-anchor="middle" font-weight="600" fill="#334155">R</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="11">vertical axis: deviation from basic size, in &mu;m</text>
</svg>`;

// Fig — engine deck-clearance stack with signed links.
const figDeck = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Piston deck clearance stack (not to scale)</text>
  <line x1="60" y1="64" x2="400" y2="64" stroke="#334155" stroke-width="3"/>
  <text x="400" y="56" text-anchor="end" fill="#64748b" font-size="11">deck face</text>
  <rect x="150" y="76" width="120" height="60" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="210" cy="118" r="9" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="118" x2="210" y2="224" stroke="#334155" stroke-width="8"/>
  <circle cx="210" cy="224" r="9" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="224" x2="210" y2="256" stroke="#334155" stroke-width="6"/>
  <circle cx="210" cy="256" r="7" fill="#334155"/>
  <line x1="60" y1="256" x2="400" y2="256" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="66" y="272" text-anchor="start" fill="#64748b" font-size="11">crank centreline</text>
  <line x1="60" y1="64" x2="46" y2="64" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="256" x2="46" y2="256" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="64" x2="52" y2="256" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="46" y1="64" x2="58" y2="64" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="46" y1="256" x2="58" y2="256" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="64" y="158" text-anchor="start" fill="#1d4ed8" font-size="12">+ H = 220.00 &plusmn;0.10</text>
  <line x1="270" y1="76" x2="306" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="221" y1="118" x2="306" y2="118" stroke="#64748b" stroke-width="1"/>
  <line x1="221" y1="224" x2="306" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="219" y1="256" x2="306" y2="256" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="76" x2="300" y2="118" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="294" y1="76" x2="306" y2="76" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="294" y1="118" x2="306" y2="118" stroke="#dc2626" stroke-width="1.2"/>
  <text x="310" y="101" text-anchor="start" fill="#dc2626" font-size="12">&minus; C = 34.00 &plusmn;0.04</text>
  <line x1="300" y1="118" x2="300" y2="224" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="294" y1="224" x2="306" y2="224" stroke="#dc2626" stroke-width="1.2"/>
  <text x="310" y="175" text-anchor="start" fill="#dc2626" font-size="12">&minus; L = 145.00 &plusmn;0.05</text>
  <line x1="300" y1="224" x2="300" y2="256" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="294" y1="256" x2="306" y2="256" stroke="#dc2626" stroke-width="1.2"/>
  <text x="310" y="245" text-anchor="start" fill="#dc2626" font-size="12">&minus; s/2 = 40.00 &plusmn;0.03</text>
  <line x1="110" y1="64" x2="110" y2="76" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="104" y1="64" x2="116" y2="64" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="104" y1="76" x2="116" y2="76" stroke="#dc2626" stroke-width="1.5"/>
  <text x="100" y="74" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">G</text>
  <text x="230" y="284" text-anchor="middle" fill="#334155" font-size="11">G = H &minus; s/2 &minus; L &minus; C</text>
</svg>`;

// Fig — almost-symmetric part vs keyed part.
const figPokaYoke = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm16-rot" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Sensor bracket on its two mounting bolts</text>
  <text x="120" y="42" text-anchor="middle" font-weight="600" fill="#1d4ed8">as designed</text>
  <text x="340" y="42" text-anchor="middle" font-weight="600" fill="#dc2626">as found on returned units</text>
  <line x1="230" y1="34" x2="230" y2="188" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="72" y1="60" x2="72" y2="178" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="168" y1="60" x2="168" y2="178" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="292" y1="60" x2="292" y2="178" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="388" y1="60" x2="388" y2="178" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <rect x="42" y="88" width="156" height="56" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="72" cy="116" r="9" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="168" cy="116" r="9" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <rect x="176" y="70" width="22" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="187" y="64" text-anchor="middle" fill="#dc2626" font-size="10">connector</text>
  <rect x="262" y="88" width="156" height="56" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="292" cy="116" r="9" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="388" cy="116" r="9" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <rect x="262" y="70" width="22" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="273" y="64" text-anchor="middle" fill="#dc2626" font-size="10">connector</text>
  <line x1="72" y1="164" x2="168" y2="164" stroke="#64748b" stroke-width="1"/>
  <line x1="72" y1="158" x2="72" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="168" y1="158" x2="168" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="120" y="158" text-anchor="middle" fill="#64748b" font-size="11">bolt pattern, symmetric</text>
  <line x1="292" y1="164" x2="388" y2="164" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="158" x2="292" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="388" y1="158" x2="388" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="340" y="158" text-anchor="middle" fill="#64748b" font-size="11">same spacing</text>
  <path d="M 200 194 q 30 14 60 0" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="5 3" marker-end="url(#asm16-rot)"/>
  <text x="230" y="228" text-anchor="middle" fill="#334155" font-size="11">Same part, turned end for end. Both bolts still pick up; only the connector end differs.</text>
</svg>`;

// Fig — tool access and swing clearance in a deep pocket.
const figAccess = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Can the tool actually reach the fastener?</text>
  <rect x="40" y="196" width="380" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="52" y1="214" x2="42" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="102" y1="214" x2="92" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="152" y1="214" x2="142" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="202" y1="214" x2="192" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="252" y1="214" x2="242" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="302" y1="214" x2="292" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="352" y1="214" x2="342" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="402" y1="214" x2="392" y2="226" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="80" width="34" height="116" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="236" y="80" width="34" height="116" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="104" y="176" width="132" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="158" y="158" width="24" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="170" y1="176" x2="170" y2="196" stroke="#334155" stroke-width="4"/>
  <rect x="148" y="96" width="44" height="62" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5 3"/>
  <rect x="163" y="40" width="14" height="56" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <rect x="170" y="40" width="150" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 320 47 A 150 150 0 0 1 270 158.8" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="286" y="152" text-anchor="start" fill="#dc2626" font-size="11">ratchet swing arc</text>
  <text x="140" y="124" text-anchor="end" fill="#1d4ed8" font-size="11">socket</text>
  <line x1="143" y1="120" x2="150" y2="120" stroke="#1d4ed8" stroke-width="1"/>
  <text x="208" y="168" text-anchor="start" fill="#334155" font-size="11">bolt</text>
  <line x1="206" y1="164" x2="186" y2="164" stroke="#334155" stroke-width="1"/>
  <text x="250" y="32" text-anchor="middle" fill="#334155" font-size="11">ratchet handle</text>
  <text x="230" y="242" text-anchor="middle" fill="#334155" font-size="11">Drawn to scale: socket envelope, extension reach, and the arc the handle sweeps.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "assembly-strategies-q23",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Three plates are clamped face to face: 6.00 &plusmn; 0.05, 12.00 &plusmn; 0.10 and 8.00 &plusmn; 0.08 mm thick. A cover has to clear the tallest assembly that can be built. What is the worst-case maximum overall height, in mm?</p>`,
    answer: 26.23,
    unit: "mm",
    tolerance: 0.002,
    explanation: `<p>All three links run the same way, so nominal and tolerance both simply add.</p>
<p class="eq">H<sub>nom</sub> = 6.00 + 12.00 + 8.00 = 26.00 mm</p>
<p class="eq">T<sub>wc</sub> = 0.05 + 0.10 + 0.08 = 0.23 mm</p>
<p class="eq">H<sub>max</sub> = 26.00 + 0.23 = <strong>26.23 mm</strong></p>
<p>The cover has to clear 26.23 mm, not 26.00 mm. RSS would give &radic;(0.05<sup>2</sup> + 0.10<sup>2</sup> + 0.08<sup>2</sup>) = 0.137 mm and 26.14 mm. The two methods separate as &radic;n, so with three links they stay close.</p>`,
  },
  {
    id: "assembly-strategies-q24",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A stack has six independent links, each toleranced &plusmn;0.05 mm. Assuming centred, roughly normal processes, what is the 3&sigma; RSS tolerance on the resulting gap, in mm?</p>`,
    answer: 0.122,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>With n equal tolerances the RSS reduces to t&radic;n.</p>
<p class="eq">T<sub>rss</sub> = &radic;(6 &times; 0.05<sup>2</sup>) = 0.05&radic;6 = 0.05 (2.449) = <strong>0.1225 &asymp; 0.122 mm</strong></p>
<p>Worst case gives 6(0.05) = 0.30 mm, so RSS is &radic;6 = 2.45 times tighter. The advantage grows only with the <em>square root</em> of the link count, so sixteen links instead of four doubles the benefit and quadruples the parts you have to control.</p>
<p>0.30 adds linearly when RSS was asked. 0.0204 divides 0.05 by &radic;6 instead of multiplying by it. An RSS number smaller than the largest single contributor is always an arithmetic error.</p>`,
  },
  {
    id: "assembly-strategies-q25",
    type: "mc",
    difficulty: 2,
    prompt: `<p>The right-hand process in the figure is producing a link in your RSS stack. Capability studies from launch showed the distribution on the left. What is the correct engineering response?</p>`,
    figure: figDrift,
    choices: [
      "Nothing changes: the parts are still inside the limits, so the RSS stack still applies",
      "RSS is invalid for that link; re-centre the process or add a mean-shift allowance",
      "Widen the tolerance on that link so the drifted distribution sits comfortably inside it",
      "Switch the whole stack to worst case, since one link now sits close to a limit",
    ],
    answer: 1,
    explanation: `<p>RSS assumes each contributor is centred on nominal. Once tool wear has dragged the mean toward a limit, the link's contribution to the gap is no longer a symmetric variation about zero. It is a systematic <em>bias</em> plus a variation. Biases add linearly, like a worst-case stack, so the predicted gap distribution shifts and the real no-build rate exceeds the prediction.</p>
<p>The correct response is to fix the cause or account for it: re-centre the process (offset the tool setting, tighten the regrind interval), or keep the drift and model it explicitly with a mean-shift allowance, the classic 1.5&sigma; shift used in six-sigma tolerance work.</p>
<p><strong>Doing nothing</strong> confuses conformance with capability: parts inside the limits can still wreck a statistical prediction. <strong>Widening the tolerance</strong> makes the arithmetic worse, not better. <strong>Reverting the whole stack to worst case</strong> over-corrects. The other links are still independent and centred, and you would give up the RSS benefit everywhere to fix one link.</p>`,
  },
  {
    id: "assembly-strategies-q26",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A gear must sit concentric on a shaft with almost no radial play, but the service manual requires it to be removed with a puller. Three shaft bands P, Q and R are offered against the hole band shown. Which do you specify, and what happens on the bench?</p>`,
    figure: figBands,
    choices: [
      "P &mdash; clearance on every pair, so the gear runs eccentric on the shaft",
      "R &mdash; interference on every pair; it needs a press to fit and to remove",
      "None &mdash; all three bands sit clear of the hole band",
      "Q &mdash; some pairs slide on, others need a light press",
    ],
    answer: 3,
    explanation: `<p>Read each shaft band against the hole band (0 to +25 &mu;m). <strong>P</strong> (&minus;22 to &minus;5) lies entirely below it: always clearance, so the gear would rattle and run eccentric, failing the concentricity requirement. <strong>R</strong> (+30 to +45) lies entirely above it: always interference, minimum 5 &mu;m, so it needs a press to fit and a serious puller to remove, more than the service requirement wants. <strong>Q</strong> (+10 to +28) overlaps the hole band, so it is a <strong>transition fit</strong>: depending on where each pair lands you get up to 15 &mu;m of clearance or up to 28 &mu;m of interference.</p>
<p>Transition is exactly the compromise asked for: excellent centring because the play is never more than a few microns, assembly by hand press or a light tap, and removal with an ordinary puller. That is why locating fits for gears, pulleys, and dowels are typically H7/k6 or H7/m6.</p>
<p>How does the gear transmit torque if it might be a clearance fit? It does not. A transition fit locates, and a key or spline carries the torque.</p>`,
  },
  {
    id: "assembly-strategies-q27",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A plain bearing bushing has a bore of 25.000 / 25.033 mm running on a shaft of 24.959 / 24.980 mm. What is the worst-case maximum diametral clearance, in mm?</p>`,
    answer: 0.074,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>Maximum clearance pairs the largest hole with the smallest shaft.</p>
<p class="eq">c<sub>max</sub> = 25.033 &minus; 24.959 = <strong>0.074 mm</strong></p>
<p>The other end is 25.000 &minus; 24.980 = 0.020 mm, so the fit runs 0.020 to 0.074 mm diametral, which is 10 to 37 &mu;m of radial play.</p>
<p>Both ends matter for a journal bearing. Too little clearance and there is no room for the oil film or for thermal growth of the shaft, and the bearing seizes. Too much and the film pressure collapses, the shaft runs eccentric, and you get noise and vibration. Hydrodynamic journal bearings usually want a diametral clearance near 0.001 &times; diameter, which at &#8709;25 mm is 0.025 mm, so this fit is generous at its upper limit.</p>`,
  },
  {
    id: "assembly-strategies-q28",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Deck clearance G on an engine is set by the loop in the figure: block deck height H = 220.00 &plusmn; 0.10, half-stroke s/2 = 40.00 &plusmn; 0.03, rod centre distance L = 145.00 &plusmn; 0.05, and piston compression height C = 34.00 &plusmn; 0.04 mm. Assuming independent, centred processes, what is the minimum deck clearance by RSS, in mm?</p>`,
    figure: figDeck,
    answer: 0.878,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>Close the loop from the crank centreline up to the deck and back down to the piston crown:</p>
<p class="eq">G = H &minus; s/2 &minus; L &minus; C = 220.00 &minus; 40.00 &minus; 145.00 &minus; 34.00 = 1.00 mm</p>
<p>Signs matter for the nominal only. Every link widens the distribution, so the tolerances all enter positively:</p>
<p class="eq">T<sub>rss</sub> = &radic;(0.10<sup>2</sup> + 0.03<sup>2</sup> + 0.05<sup>2</sup> + 0.04<sup>2</sup>) = &radic;0.0150 = 0.1225 mm</p>
<p class="eq">G<sub>min</sub> = 1.00 &minus; 0.1225 = <strong>0.8775 &asymp; 0.878 mm</strong></p>
<p>Worst case gives 1.00 &minus; 0.22 = 0.78 mm, so the two methods differ by only 0.1 mm here. The deck height alone owns 0.0100 of the 0.0150 total variance (67%), and when one link dominates, RSS converges toward worst case.</p>
<p>Engineering read: even the worst-case 0.78 mm is a positive clearance, so the piston never kisses the head on a static basis. But this is exactly the stack where you do <em>not</em> stop at the static number. Rod stretch at speed, bearing clearance take-up, and thermal growth all eat into it, which is why deck clearance is checked by clay on a built engine and not only on paper.</p>`,
  },
  {
    id: "assembly-strategies-q29",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A sheet-metal access panel on a machine guard has to be opened by a technician once a month. A production engineer proposes replacing its eight screws with blind rivets to cut assembly time. What is your response?</p>`,
    choices: [
      "Reject it: rivets are permanent, and this panel is opened routinely for service",
      "Accept it: blind rivets need only one-sided access, which suits a thin guard panel",
      "Accept it: rivets carry shear better than screws, so the panel will be stiffer",
      "Reject it: rivets cannot be installed in sheet metal thinner than about 2 mm",
    ],
    answer: 0,
    explanation: `<p>Serviceability is the first filter on any joining decision, and it settles this one immediately: removing a blind rivet means drilling it out, which damages the hole and eventually the panel. A joint opened monthly must be releasable: screws, quarter-turn fasteners, captive fasteners, or a latched and hinged panel.</p>
<p>The two "accept" options are both true statements about rivets that are irrelevant here. Blind rivets genuinely do need only one-sided access, and they genuinely are good shear fasteners, but neither fact changes the fact that this panel has to come off. That shape of distractor tests whether you filter on the governing requirement or get pulled toward a true-but-irrelevant fact.</p>
<p>The fourth option is simply wrong: blind rivets are routinely used in sheet under 1 mm.</p>
<p>The productive counter-proposal: keep the panel releasable but cut the time anyway with quarter-turn fasteners, or captive screws so the technician does not drop hardware inside the machine.</p>`,
  },
  {
    id: "assembly-strategies-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A single-lap adhesive joint (25 mm wide, 25 mm overlap) fails in shear at 4 kN. You need it to carry 8 kN with the same adhesive and adherends. Doubling which dimension gives you the most reliable increase in capacity?</p>`,
    choices: [
      "The overlap length, because capacity scales with bonded area",
      "The adhesive thickness, since a thicker layer carries more shear",
      "The joint width, because capacity scales almost linearly with it",
      "The adherend thickness, because it raises the adhesive's shear strength",
    ],
    answer: 2,
    explanation: `<p>Shear stress in a lap joint is not uniform. Differential straining of the two adherends concentrates the stress at the two ends of the overlap while the middle is nearly unloaded. Once the overlap exceeds roughly 10&ndash;20 times the adhesive thickness, adding more overlap simply extends the dead zone in the middle, and capacity climbs far more slowly than area. Doubling from 25 mm to 50 mm might buy 20&ndash;40%, not 100%.</p>
<p><strong>Width</strong> is different. Every extra millimetre of width adds a fresh, fully loaded strip of bond with the same end-peak profile, so capacity scales essentially linearly. This is the reliable lever.</p>
<p><strong>Thicker adhesive</strong> reduces strength: thick bond lines are more compliant but also more defect-prone and lower in shear strength, and typical optimum thicknesses are 0.1&ndash;0.3 mm. <strong>Thicker adherends</strong> do help by reducing differential straining and making the stress more uniform, so the option is not absurd, but it works by changing the stress distribution, not by raising the adhesive's strength as the choice claims, and it adds weight and cost.</p>
<p>Taper or scarf the adherend ends. Tapering reduces the end stress peak and is the standard aerospace fix when overlap alone will not do it.</p>`,
  },
  {
    id: "assembly-strategies-q31",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A single-lap bonded joint 25 mm wide must carry 4.5 kN in shear with a safety factor of 2 on load. The adhesive is rated at an allowable shear stress of 15 MPa over the bond area. What overlap length does that require, in mm?</p>`,
    answer: 24,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>Design load is the service load times the safety factor: F<sub>d</sub> = 2(4.5) = 9.0 kN = 9000 N. Treating the average shear stress over the bond area:</p>
<p class="eq">&tau; = F<sub>d</sub> / (b L)&nbsp;&rarr;&nbsp;L = F<sub>d</sub> / (b &tau;)</p>
<p class="eq">L = 9000 / (25 &times; 15) = 9000 / 375 = <strong>24 mm</strong></p>
<p>Check the units: N / (mm &times; N/mm<sup>2</sup>) = mm. Forgetting the safety factor gives 12 mm; using the load in kN without converting gives 0.024 mm.</p>
<p>Now the caveat that separates a good answer from a plug-in. This uses <em>average</em> shear stress, which is only honest while the overlap is short. At 24 mm on a 25 mm wide joint the stress is already noticeably peaked at the ends, so if you later need more capacity you should add width rather than length, because extra overlap gives progressively less return. And the calculation says nothing about peel: check that no part of the service load lifts an edge.</p>`,
  },
  {
    id: "assembly-strategies-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Warranty returns show a sensor bracket assembled 180&deg; out on about 1 in 400 units, putting the connector on the wrong side of the housing. The bracket bolts up either way and looks correct from above. Which change fixes it most robustly?</p>`,
    figure: figPokaYoke,
    choices: [
      "Add a work instruction with a photograph and a sign-off check at the station",
      "Move one locating boss off the centreline so a flipped bracket cannot seat",
      "Paint an orientation arrow on the bracket and add a visual check downstream",
      "Change the two bolts to different thread sizes so a flipped part will not start",
    ],
    answer: 1,
    explanation: `<p>The part is <em>almost</em> symmetric. The hole pattern is symmetric but the function is not. That is the classic poka-yoke failure mode: it looks reversible, it assembles reversed, and nothing on the line catches it. A rate of 1 in 400 is exactly what human-dependent controls produce.</p>
<p>The durable fix makes the wrong orientation <strong>physically impossible</strong>: move a dowel, boss, or locating notch off the centreline (or make the hole spacing asymmetric) so the flipped part will not seat. The error is then detected at the moment it is made, by the hardware, with no reliance on attention.</p>
<p>The distractors are the three weaker levels of control. <strong>Work instructions</strong> and <strong>painted arrows plus inspection</strong> both depend on human vigilance and typically cut, rather than eliminate, the error rate. <strong>Different thread sizes</strong> is a mistake-proofing idea, but a poor one: it adds a second fastener type to the line, and an operator can still force or cross-thread the wrong screw.</p>
<p>The general hierarchy worth quoting: eliminate the possibility &gt; make the error self-evident at the station &gt; detect it downstream &gt; train and instruct.</p>`,
  },
  {
    id: "assembly-strategies-q33",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A moulded cover is held on by a separate steel bracket, which is fastened by two screws to a boss on the cover and two more to the chassis. The bracket never moves relative to the cover, sees light load, and is never removed on its own. What is the first design change to propose?</p>`,
    choices: [
      "Merge the bracket into the cover moulding and fasten the cover directly to the chassis",
      "Keep the bracket but change the four screws to a single larger screw at the centre",
      "Keep the bracket and switch its material to aluminium to save weight and cost",
      "Keep the bracket and bond it to the cover, removing only the two cover screws",
    ],
    answer: 0,
    explanation: `<p>Run the standard part-count test. A part earns its own existence only if it <strong>moves</strong> relative to its neighbour, must be a <strong>different material</strong>, or must be <strong>separately removable for service</strong>. This bracket fails all three, so it should not be a part. Merging it into the moulding removes a component, two screws, a supplier, an inspection, an inventory line, and three assembly operations, and moulded geometry is nearly free once the tool exists.</p>
<p>The distractors all keep the part and optimise around it. <strong>One larger screw</strong> saves three fasteners but leaves the component and creates a single-point rotational constraint problem. <strong>Aluminium</strong> optimises a part that should not exist. <strong>Bonding</strong> removes two screws but adds a cure step and makes the joint permanent, which is worse on every axis than deleting the part.</p>
<p>Raise the counter-argument yourself: merging can complicate the tool (side actions, undercuts) or force a compromise material. If the bracket carried high load and the cover is a soft polymer, keeping a steel insert is the right call. The "different material" test is exactly for that case.</p>`,
  },
  {
    id: "assembly-strategies-q34",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A shaft is &#8709;30.000 &plusmn; 0.030 mm and its mating hole is &#8709;30.050 &plusmn; 0.030 mm, so worst case allows a 0.010 mm interference. You cannot tighten either tolerance, so you sort both parts into three equal bins across their tolerance range and assemble matched bins. What is the resulting worst-case minimum clearance, in mm?</p>`,
    answer: 0.03,
    unit: "mm",
    tolerance: 0.05,
    explanation: `<p>Nominal clearance is 30.050 &minus; 30.000 = 0.050 mm. Unsorted, the worst-case tolerance is 0.030 + 0.030 = 0.060 mm, so clearance runs 0.050 &plusmn; 0.060 = &minus;0.010 to +0.110 mm, so interference is possible.</p>
<p>Sorting each part's 0.060 mm total range into three bins gives bins 0.020 mm wide, i.e. &plusmn;0.010 mm about each bin centre. Matching bin 1 shafts with bin 1 holes (and so on) means the residual variation within a matched pair is:</p>
<p class="eq">T = 0.010 + 0.010 = 0.020 mm</p>
<p class="eq">c<sub>min</sub> = 0.050 &minus; 0.020 = <strong>0.030 mm</strong></p>
<p>Clearance now runs 0.030 to 0.070 mm with no possibility of interference. The same parts, the same drawings, a three-fold reduction in the effective stack. In general n bins divide the contributing tolerance by n.</p>
<p>Say the costs out loud, because that is what is being tested: you now need 100% gauging of both parts, bin storage and traceability, matched-set logistics through the line, and you will accumulate leftover inventory whenever the two distributions are not identically shaped. Selective assembly is real engineering (engine bearings and pistons are built this way), but it is a manufacturing burden you accept when tightening tolerances is genuinely impossible.</p>`,
  },
  {
    id: "assembly-strategies-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A shaft assembly sets its axial end play with shims at build. On this unit, with no shim fitted, the measured axial gap is 1.85 mm. The drawing calls for 0.20 &plusmn; 0.05 mm of end play. What total shim thickness should the technician install, in mm?</p>`,
    answer: 1.65,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>The shim consumes gap, so:</p>
<p class="eq">shim = measured gap &minus; target end play = 1.85 &minus; 0.20 = <strong>1.65 mm</strong></p>
<p>What matters here is not the subtraction but what shimming buys. The upstream stack (housing, bearings, spacer, shoulder positions) may run &plusmn;0.5 mm or worse, and every one of those tolerances is absorbed by measuring the actual build and picking a shim. The only tolerance that survives into the final end play is the <strong>shim thickness tolerance</strong> plus the measurement uncertainty. With shims available in 0.05 mm steps and a &plusmn;0.05 mm requirement, the requirement is met.</p>
<p>That is why shimming appears so often as the answer to "worst case says we need tolerances we cannot hold": it converts a tolerance problem into an assembly-process step. The cost is a measurement operation, an inventory of shim thicknesses, and a build that is no longer interchangeable. Swap a bearing in service and the shim stack must be re-determined.</p>`,
  },
  {
    id: "assembly-strategies-q36",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A stiff machined bracket bolts to a cast housing on four pads. On the bench the bracket sits on three pads and rocks; once the fourth bolt is torqued it sits flat, but a precision bore in the bracket is then measured 40 &mu;m out of round. What is the best fix?</p>`,
    choices: [
      "Increase all four bolt torques so the bracket is clamped uniformly and cannot rock",
      "Add a fifth bolt between the two pads that are furthest apart to spread the clamp load",
      "Make the bracket stiffer so the bolt-up force can no longer distort the precision bore",
      "Machine the four pads in one setup, or design to three pads plus a shimmed fourth",
    ],
    answer: 3,
    explanation: `<p>Three points define a plane; a fourth pad is redundant. Because the cast pads are not coplanar, the bracket rocks on three, and torquing the fourth bolt does not move the casting. It bends the bracket. That distortion propagates straight into the precision bore, which is exactly the 40 &mu;m of out-of-roundness measured. This is over-constraint expressed as locked-in stress.</p>
<p>The fixes address the source. <strong>Machining the pads in one setup</strong> makes them genuinely coplanar so the fourth bolt has nothing to pull against. <strong>Three pads plus a shim</strong> (or a jackscrew, or a compliant fourth pad) keeps the load path of four bolts while removing the redundancy. Line-boring the bracket after mounting is a third option if the assembly is permanent.</p>
<p><strong>More torque</strong> increases the distorting force. A <strong>fifth bolt</strong> adds a fifth constraint to an already over-constrained interface. <strong>A stiffer bracket</strong> is the seductive wrong answer: stiffness does not remove the mismatch, it just moves the argument. A stiffer bracket resists bending, so more of the mismatch is forced into the casting and into higher bolt loads, and the bore still distorts because the mating faces still do not fit.</p>`,
  },
  {
    id: "assembly-strategies-q37",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A &#8709;40 mm steel shaft must transmit 400 N&middot;m to a steel hub, with occasional full-torque reversals, and be removable at overhaul. Which arrangement would you choose?</p>`,
    choices: [
      "An H7/p6 press fit alone, sized so the minimum interference carries 400 N&middot;m",
      "A clearance fit with a parallel key alone, so the key does all the work",
      "A light shrink or transition fit for concentricity, with a key or spline carrying the torque",
      "A clearance fit with a thread-locking compound applied to the shaft before assembly",
    ],
    answer: 2,
    explanation: `<p>Split the two jobs. <strong>Location and concentricity</strong> want an interference or transition fit; <strong>torque transmission with reversals</strong> wants a positive drive that does not depend on where the parts landed in their tolerance bands. Doing both with one feature is where designs go wrong.</p>
<p>Option 1 fails because press-fit torque capacity is linear in interference, and the minimum-to-maximum interference ratio on a standard fit can be tens to one. Sizing on <em>minimum</em> interference means the maximum case generates enormous hub hoop stress and an assembly force you may not be able to reverse at overhaul. Option 2 fails on concentricity and on life: with clearance, the load reverses through the key's clearance every cycle, which hammers the keyway and fails by fretting and impact. Option 4 fails outright. Anaerobic retaining compounds are real engineering products, but they are shear-strength-limited, not intended as the sole path for 400 N&middot;m with reversals, and they make removal harder rather than easier.</p>
<p>Option 3 is standard practice: the light interference centres the hub and carries some load by friction, and the key or spline is the deterministic torque path. A spline is preferable under reversals because it distributes load over many teeth instead of one keyway corner. For overhaul, a light shrink fit releases with heat and a puller.</p>`,
  },
  {
    id: "assembly-strategies-q38",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A housing pocket is 25.00 mm deep. Three components sit in it, 9.50 mm, 6.25 mm and 8.00 mm thick. Before any tolerances are considered, what is the nominal gap left over at the top of the pocket, in mm?</p>`,
    answer: 1.25,
    unit: "mm",
    explanation: `<p class="eq">G = 25.00 &minus; (9.50 + 6.25 + 8.00) = 25.00 &minus; 23.75 = <strong>1.25 mm</strong></p>
<p>The pocket depth runs one way and the three components run back the other, so the pocket is the positive link and the components are the negative ones. Trivial arithmetic, and it is the step everything else hangs off. Get a sign wrong and the nominal is out by twice that dimension, which no amount of careful tolerance work afterwards recovers.</p>
<p>With four links this gap will carry &plusmn;0.2 to &plusmn;0.4 mm of stack, so 1.25 mm has room. Had the nominal come out at 0.1 mm, the design would already be in trouble before a single tolerance was written down.</p>`,
  },
  {
    id: "assembly-strategies-q39",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Four independent links contribute &plusmn;0.25, &plusmn;0.12, &plusmn;0.10 and &plusmn;0.06 mm to an RSS stack. What percentage of the total stack variance is owned by the largest contributor? Give the answer in percent.</p>`,
    answer: 69.1,
    unit: "%",
    explanation: `<p>Variance share is the ratio of squares, not of tolerances.</p>
<p class="eq">&Sigma;t<sub>j</sub><sup>2</sup> = 0.25<sup>2</sup> + 0.12<sup>2</sup> + 0.10<sup>2</sup> + 0.06<sup>2</sup> = 0.0625 + 0.0144 + 0.0100 + 0.0036 = 0.0905</p>
<p class="eq">share = 0.0625 / 0.0905 = 0.6906 = <strong>69.1%</strong></p>
<p>47% comes from dividing 0.25 by the linear sum 0.53. Squaring is what makes the biggest link dominate: the &plusmn;0.25 link is roughly twice the &plusmn;0.12 link and contributes over four times the variance.</p>
<p>With 69% of the variance in one link the other three are effectively free. Deleting the &plusmn;0.06 link entirely improves the stack by 2%. Halving the &plusmn;0.25 link takes it to &radic;(0.0156 + 0.028) = 0.209 mm, a 31% improvement. Spend the money in one place.</p>`,
  },
  {
    id: "assembly-strategies-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 3 mm sheet-steel bracket carries a fully reversed load for 10<sup>7</sup> cycles. The current design fillet-welds it to a thick base plate, and cracks are appearing at the weld toe. Which change addresses the mechanism?</p>`,
    choices: [
      "Increase the fillet weld leg length so the throat area carries more load",
      "Replace the weld with a bolted joint, or dress and profile the weld toe to remove the notch",
      "Change to a higher-strength steel, which raises the fatigue limit of the welded joint",
      "Weld continuously on both sides so the load path is symmetric about the bracket",
    ],
    answer: 1,
    explanation: `<p>The weld toe is a sharp geometric notch with tensile residual stress and a coarse heat-affected microstructure. That combination sets the fatigue strength of a welded joint at a level largely <em>independent of the base material's strength</em>, which kills the "use stronger steel" instinct. Design codes classify welded details by geometry, not by material grade.</p>
<p>So the fixes must remove the notch or remove the weld. <strong>Toe dressing</strong> (grinding, TIG dressing, hammer or needle peening) reshapes the toe and pushes the residual stress compressive, typically buying a factor of two or more in fatigue life. <strong>Bolting</strong> removes the welded detail altogether, and a properly preloaded bolted joint sees very little of the cyclic load in the fastener at all.</p>
<p>The distractors all leave the toe untouched. A <strong>bigger fillet</strong> raises static capacity but does nothing about the notch where the crack starts, and can even worsen the toe angle. <strong>Higher-strength steel</strong> raises the plain-material fatigue limit and leaves the welded-detail category unchanged. <strong>Welding both sides</strong> is good practice against root cracking and eccentric loading, but it adds two more toes on a part that is already failing at a toe.</p>`,
  },
  {
    id: "assembly-strategies-q41",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The figure shows a cap screw at the bottom of a pocket, with the ratchet swing arc drawn. The design review is asked whether the joint is buildable. What is the correct conclusion?</p>`,
    figure: figAccess,
    choices: [
      "Buildable: the socket clears the pocket walls, which is the governing access check",
      "Buildable: an extension bar reaches the screw head, so the tool-length check passes",
      "Not buildable: the pocket must be at least as wide as the ratchet handle is long, and it is not",
      "Not buildable: the handle fouls the wall part-way through its swing",
    ],
    answer: 3,
    explanation: `<p>Access is a chain of three checks, and the joint is only buildable if all three pass: the <strong>socket envelope</strong> must clear the pocket walls; the <strong>extension</strong> must be long enough to reach the head; and the <strong>tool must be able to swing</strong>. The figure shows the first two passing and the third failing. The ratchet arc intersects the right-hand wall, so the handle stops part-way round.</p>
<p>Options 1 and 2 each verify one link of the chain and declare victory, which is exactly the review error this question is about. Option 3 states a requirement that is too strong: a ratchet does not need a full 360&deg; sweep, only enough arc per stroke (typically 20&ndash;30&deg;) to advance the fastener, so the pocket certainly does not have to be as wide as the handle is long.</p>
<p>Practical fixes, in rough order of cost: move the fastener outboard or reorient it; use a swivel or low-profile ratchet, or a wrench with a finer ratchet mechanism; relieve the wall locally with a clearance scallop; or change the fastener to one driven axially from above with a hex key or a nutrunner, which needs no swing at all.</p>`,
  },
  {
    id: "assembly-strategies-q42",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 1500 mm long aluminium rail is bolted to a steel frame at both ends. The machine sees a 60 K temperature swing. Take &alpha;<sub>Al</sub> = 23 &times; 10<sup>&minus;6</sup>/K and &alpha;<sub>steel</sub> = 12 &times; 10<sup>&minus;6</sup>/K. If one end is fixed and the other is slotted, how much travel must the slot allow, in mm?</p>`,
    answer: 0.99,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>Both parts expand; the slot only has to swallow the <em>difference</em>:</p>
<p class="eq">&Delta; = L (&alpha;<sub>Al</sub> &minus; &alpha;<sub>steel</sub>) &Delta;T</p>
<p class="eq">&Delta; = 1500 (23 &minus; 12) &times; 10<sup>&minus;6</sup> &times; 60 = 1500 &times; 11 &times; 10<sup>&minus;6</sup> &times; 60 = <strong>0.99 mm</strong></p>
<p>Using the aluminium coefficient alone (1500 &times; 23e&minus;6 &times; 60 = 2.07 mm), which assumes the steel frame does not move. Differential expansion is the quantity that matters in any two-material assembly.</p>
<p>Practical sizing: the slot must be at least &#8709;bolt + 0.99 mm of travel, plus the assembly tolerance stack on the two bolt positions, plus a margin, so a 2&ndash;3 mm long slot. Two details matter as much as the number. Whether the swing is symmetric about the assembly temperature decides whether the slot must be centred or biased. And the joint must be able to <em>slide</em>: bolt through a hardened washer, torque to allow controlled slip rather than full clamp, or use a shoulder bolt, otherwise the friction simply locks the joint and you buckle the rail instead.</p>`,
  },
  {
    id: "assembly-strategies-q43",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An assembly gap has an RSS budget of &plusmn;0.30 mm at 3&sigma;, and the loop has five links of similar cost and similar manufacturing difficulty. Allocating the budget equally, what half-tolerance can each link carry, in mm?</p>`,
    answer: 0.134,
    unit: "mm",
    tolerance: 0.04,
    explanation: `<p>For n equal links, T<sub>rss</sub> = t&radic;n, so:</p>
<p class="eq">t = T<sub>target</sub> / &radic;n = 0.30 / &radic;5 = 0.30 / 2.236 = <strong>0.1342 &asymp; 0.134 mm</strong></p>
<p>Check it: &radic;(5 &times; 0.1342<sup>2</sup>) = &radic;0.0900 = 0.300 mm. &#10003;</p>
<p>Compare with the worst-case allocation, T/n = 0.30/5 = 0.060 mm per link, more than twice as tight, and on five parts that is the difference between routine milling and grinding. This one factor of &radic;n is why statistical allocation is worth arguing for, and why it must be backed by capability data before you release the drawings.</p>
<p>Equal allocation is only the starting point. You re-allocate by cost and capability: give a difficult casting dimension &plusmn;0.20 and take it back from an easy turned length at &plusmn;0.08, keeping &radic;(&Sigma;t<sup>2</sup>) &le; 0.30. Since variance goes as t<sup>2</sup>, loosening one link from 0.134 to 0.20 costs 0.20<sup>2</sup> &minus; 0.134<sup>2</sup> = 0.0220 mm<sup>2</sup> of variance, which has to be recovered from the others. That is the arithmetic of the trade.</p>`,
  },
  {
    id: "assembly-strategies-q44",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 0.5 mm wall stainless steel tube must be joined leak-tight to a copper manifold block. Production rate is a few hundred a month. Which process would you specify?</p>`,
    choices: [
      "Furnace brazing, with the joint clearance held for capillary flow",
      "TIG welding the tube into a counterbore in the block, for a full-strength metal joint",
      "An interference fit, pressing the tube into a reamed bore so contact pressure seals it",
      "Anaerobic retaining compound in the annular gap, cured at room temperature after assembly",
    ],
    answer: 0,
    explanation: `<p>Three facts point to brazing. First, <strong>dissimilar metals</strong>: fusion welding stainless to copper means melting both, and the resulting weld metal is brittle and crack-prone. Brazing melts only the filler, so the base metals never mix. Second, <strong>thin wall</strong>: 0.5 mm stainless burns through readily under a TIG arc, whereas a brazed joint heats the whole assembly uniformly. Third, <strong>leak-tightness</strong>: capillary flow of filler through a controlled joint clearance produces a continuous, gas-tight seam, which is exactly why heat exchangers and refrigeration circuits are brazed.</p>
<p>The joint clearance qualifier matters: brazing depends on capillary action, so the gap must sit in a narrow window (typically 0.05&ndash;0.15 mm). Too tight and the filler will not flow; too loose and capillary action fails and the joint is starved. That makes the fit a design requirement, not a shop-floor detail.</p>
<p><strong>TIG</strong> fails on both dissimilarity and wall thickness. An <strong>interference fit</strong> gives no reliable seal. The leak path follows the surface roughness, and copper creeps and relaxes. <strong>Anaerobic adhesive</strong> can seal an annular gap and is used for exactly this geometry, but it is limited in temperature and chemical compatibility and would be a fallback, not the first choice for a metal fluid circuit.</p>`,
  },
  {
    id: "assembly-strategies-q45",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Your worst-case stack predicts a minimum gap of &minus;0.08 mm, but the RSS stack predicts +0.15 mm and the design shipped on that basis. Production data on 5000 units shows 2% of builds interfering. What does that tell you, and what is the first action?</p>`,
    choices: [
      "The parts are out of specification; tighten incoming inspection and reject the suppliers' lots",
      "Worst case was the wrong model; recompute with a wider distribution and accept the 2%",
      "The RSS assumptions have failed; measure the actual distributions of each link before changing anything",
      "The loop is wrong; add the missing links and rerun worst case as the release criterion",
    ],
    answer: 2,
    explanation: `<p>Read what the data says. Two percent interference is far too high to be the tail of a genuine 3&sigma; RSS prediction (which would be well under 0.3%), and far too low for the parts to be simply out of specification. If they were, you would see gross failures, not a 2% rate. The observed behaviour sits between the two models, which is the signature of <strong>RSS assumptions failing</strong>: correlated links from a shared setup, a mean shifted by tool wear, or a bimodal distribution from two cavities or two suppliers.</p>
<p>The first action is therefore to <em>measure</em>: pull the actual per-link distributions from production, look at means as well as spreads, and check whether any links are correlated. Only that tells you which assumption broke and therefore which fix works. Re-centring a drifted process might fix it for free; a correlated group needs to be stacked worst-case within the group; a bimodal supply needs a supplier or cavity change.</p>
<p><strong>Rejecting supplier lots</strong> attacks parts that are probably in spec. <strong>Accepting 2%</strong> abandons the design without knowing whether the cause is cheap to fix. <strong>Assuming the loop is wrong</strong> is possible but should be checked, not assumed. Reverting to worst case as a release criterion is the blunt instrument you use only after measurement shows no cheaper option.</p>
<p>So: RSS is a prediction, and a prediction that disagrees with production data is telling you which assumption was wrong. Go and find out which one.</p>`,
  },
];

export default extra;
