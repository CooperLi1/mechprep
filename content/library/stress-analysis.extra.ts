import type { Question } from "../types";

// Additional question bank for Stress Analysis & Transformation (merged after
// the base questions in content/index.ts). Authored per-question.

const figXShearPair = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa14-s" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="sa14-m" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="180" y="60" width="100" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="288" y1="148" x2="288" y2="72" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa14-s)"/>
  <line x1="172" y1="72" x2="172" y2="148" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa14-s)"/>
  <line x1="192" y1="52" x2="268" y2="52" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa14-s)"/>
  <line x1="268" y1="168" x2="192" y2="168" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa14-s)"/>
  <text x="296" y="72" fill="#1d4ed8" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">xy</tspan> = 62 MPa</text>
  <text x="276" y="42" fill="#dc2626" font-weight="600">&tau;<tspan baseline-shift="sub" font-size="10">yx</tspan> = 41 MPa ?</text>
  <path d="M 258 110 A 28 28 0 1 1 230 82" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3" marker-end="url(#sa14-m)"/>
  <text x="118" y="114" text-anchor="end" fill="#dc2626" font-size="12">net moment</text>
  <line x1="124" y1="110" x2="164" y2="110" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="230" y="200" text-anchor="middle" fill="#64748b" font-size="12">reported at one point in a converged linear static run</text>
  <text x="230" y="220" text-anchor="middle" fill="#64748b" font-size="12">an element has no rotational inertia to absorb a net moment</text>
</svg>`;

const figXMohrShear = `<svg viewBox="0 0 460 275" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa15-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Mohr&#39;s circle for pure shear, &tau; = 70 MPa</text>
  <line x1="100" y1="130" x2="392" y2="130" stroke="#334155" stroke-width="1.5" marker-end="url(#sa15-ax)"/>
  <line x1="230" y1="234" x2="230" y2="46" stroke="#334155" stroke-width="1.5" marker-end="url(#sa15-ax)"/>
  <text x="398" y="134" fill="#334155" font-size="12">&sigma;</text>
  <text x="216" y="52" text-anchor="end" fill="#334155" font-size="12">&tau;</text>
  <circle cx="230" cy="130" r="70" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="230" cy="130" r="3.5" fill="#334155"/>
  <text x="222" y="122" text-anchor="end" fill="#334155" font-size="12">C = 0</text>
  <circle cx="300" cy="130" r="4" fill="#1d4ed8"/>
  <text x="308" y="124" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">1</tspan> = +70</text>
  <circle cx="160" cy="130" r="4" fill="#1d4ed8"/>
  <text x="152" y="124" text-anchor="end" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="10">2</tspan> = &minus;70</text>
  <circle cx="230" cy="200" r="4.5" fill="#dc2626"/>
  <text x="240" y="216" fill="#dc2626" font-size="12">X (0, &minus;70) &#8212; x-face</text>
  <circle cx="230" cy="60" r="4.5" fill="#dc2626"/>
  <text x="240" y="58" fill="#dc2626" font-size="12">Y (0, +70) &#8212; y-face</text>
  <path d="M 230 178 A 48 48 0 0 0 278 130" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="240" y="158" fill="#1d4ed8" font-size="12">2&theta;<tspan baseline-shift="sub" font-size="9">p</tspan></text>
  <text x="118" y="222" fill="#64748b" font-size="12">R = &tau; = 70 MPa</text>
  <text x="230" y="258" text-anchor="middle" fill="#64748b" font-size="12">centred on the origin, 2&theta;<tspan baseline-shift="sub" font-size="9">p</tspan> = 90&deg; &rarr; &sigma;<tspan baseline-shift="sub" font-size="9">1</tspan> = &minus;&sigma;<tspan baseline-shift="sub" font-size="9">2</tspan> = &tau; at 45&deg;</text>
</svg>`;

const figXElement2 = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa16-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sa16-s" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="190" y="70" width="80" height="80" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="326" y1="110" x2="276" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa16-n)"/>
  <line x1="134" y1="110" x2="184" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa16-n)"/>
  <text x="334" y="114" fill="#dc2626" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">x</tspan> = &minus;40 MPa</text>
  <text x="126" y="114" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">x</tspan></text>
  <line x1="230" y1="70" x2="230" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa16-n)"/>
  <line x1="230" y1="150" x2="230" y2="186" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa16-n)"/>
  <text x="230" y="26" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">y</tspan> = +20 MPa</text>
  <text x="230" y="204" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <line x1="270" y1="144" x2="270" y2="76" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa16-s)"/>
  <line x1="190" y1="76" x2="190" y2="144" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa16-s)"/>
  <line x1="196" y1="70" x2="264" y2="70" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa16-s)"/>
  <line x1="264" y1="150" x2="196" y2="150" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sa16-s)"/>
  <text x="278" y="62" fill="#1d4ed8" font-weight="600" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">xy</tspan> = 30 MPa</text>
  <text x="182" y="166" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">&tau;<tspan baseline-shift="sub" font-size="9">xy</tspan></text>
</svg>`;

const figXKeyway = `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa17-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="80" y="70" width="220" height="100" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="300" cy="120" rx="12" ry="50" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="150" y="70" width="100" height="18" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="88" r="5.5" fill="#dc2626"/>
  <circle cx="250" cy="88" r="5.5" fill="#dc2626"/>
  <line x1="250" y1="88" x2="274" y2="112" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6 3"/>
  <path d="M 326 88 A 22 32 0 0 1 326 152" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa17-t)"/>
  <text x="360" y="124" fill="#dc2626" font-weight="600">T</text>
  <line x1="252" y1="84" x2="316" y2="50" stroke="#64748b" stroke-width="1"/>
  <text x="322" y="46" fill="#dc2626" font-size="11">sharp keyway end</text>
  <text x="150" y="46" text-anchor="middle" fill="#334155" font-size="12">keyway</text>
  <line x1="150" y1="52" x2="180" y2="66" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="202" text-anchor="middle" fill="#64748b" font-size="12">cracks start at the keyway end, not at mid-length</text>
</svg>`;

const figXBiaxialHole = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa18-n" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="16" text-anchor="middle" font-weight="600" fill="#334155">Equal biaxial tension, &sigma; = 80 MPa each way</text>
  <rect x="150" y="55" width="160" height="160" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="230" cy="135" r="22" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="200" y1="55" x2="200" y2="28" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="260" y1="55" x2="260" y2="28" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="200" y1="215" x2="200" y2="244" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="260" y1="215" x2="260" y2="244" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="150" y1="105" x2="120" y2="105" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="150" y1="165" x2="120" y2="165" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="310" y1="105" x2="340" y2="105" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <line x1="310" y1="165" x2="340" y2="165" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa18-n)"/>
  <circle cx="208" cy="135" r="4" fill="#dc2626"/>
  <circle cx="252" cy="135" r="4" fill="#dc2626"/>
  <circle cx="230" cy="113" r="4" fill="#dc2626"/>
  <circle cx="230" cy="157" r="4" fill="#dc2626"/>
  <text x="348" y="139" fill="#64748b" font-size="11">80 MPa</text>
  <text x="112" y="139" text-anchor="end" fill="#64748b" font-size="11">80 MPa</text>
</svg>`;

const figXShaftMT = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sa19-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sa19-m" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="60" y1="58" x2="60" y2="162" stroke="#334155" stroke-width="2.5"/>
  <line x1="48" y1="72" x2="60" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="96" x2="60" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="120" x2="60" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="144" x2="60" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="162" x2="60" y2="150" stroke="#64748b" stroke-width="1"/>
  <rect x="60" y="80" width="200" height="60" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="260" cy="110" rx="10" ry="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 286 84 A 22 30 0 0 1 286 136" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sa19-t)"/>
  <text x="302" y="116" fill="#dc2626" font-weight="600">T = 400 N&middot;m</text>
  <path d="M 150 54 Q 190 34 232 52" fill="none" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#sa19-m)"/>
  <text x="142" y="50" text-anchor="end" fill="#1d4ed8" font-weight="600">M = 250 N&middot;m</text>
  <line x1="110" y1="80" x2="110" y2="140" stroke="#64748b" stroke-width="1"/>
  <line x1="104" y1="80" x2="116" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="104" y1="140" x2="116" y2="140" stroke="#64748b" stroke-width="1"/>
  <text x="110" y="158" text-anchor="middle" fill="#64748b" font-size="12">d = 30 mm</text>
  <circle cx="200" cy="80" r="4" fill="#dc2626"/>
  <line x1="200" y1="84" x2="200" y2="170" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="208" y="178" fill="#64748b" font-size="11">critical surface point</text>
  <text x="230" y="206" text-anchor="middle" fill="#334155" font-size="12">&sigma;<tspan baseline-shift="sub" font-size="9">x</tspan> = 32M/(&pi;d<tspan baseline-shift="super" font-size="9">3</tspan>)&nbsp;&nbsp;&nbsp;&tau;<tspan baseline-shift="sub" font-size="9">xy</tspan> = 16T/(&pi;d<tspan baseline-shift="super" font-size="9">3</tspan>)</text>
</svg>`;

const extra: Question[] = [
  {
    id: "stress-analysis-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A converged linear static FEA reports &tau;<sub>xy</sub> = 62 MPa and &tau;<sub>yx</sub> = 41 MPa at the same point inside a solid element, as sketched. What do you conclude?</p>`,
    figure: figXShearPair,
    choices: [
      "Nothing is wrong: the two shear components are independent in a 3D state",
      "The element is rotating, so the model needs another constraint to balance",
      "Something is wrong: moment balance on the element forces the two to be equal",
      "The mesh is too coarse: refine until the two shear components agree closely",
    ],
    answer: 2,
    explanation: `<p>Moment balance on the element forces &tau;<sub>xy</sub> = &tau;<sub>yx</sub>. The x-face pair contributes &tau;<sub>xy</sub>(dy&middot;t)dx and the y-face pair &tau;<sub>yx</sub>(dx&middot;t)dy; an infinitesimal element has no rotational inertia to absorb the difference. So the stress tensor is <strong>symmetric</strong>, with six independent components in 3D rather than nine.</p>
<p>A mismatch like this is never physics. Look for a coordinate-frame mix-up between the element and global systems, or an averaging bug in the post-processor. Refining the mesh will not help, because the symmetry holds exactly at every integration point whatever the element size.</p>`,
  },
  {
    id: "stress-analysis-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A thin-walled tube carries pure torque, giving &tau; = 70 MPa on the transverse and longitudinal planes with no normal stress on them. What is the maximum principal stress, in MPa?</p>`,
    figure: figXMohrShear,
    answer: 70,
    unit: "MPa",
    explanation: `<p class="eq">C = 0,&nbsp;&nbsp;R = &radic;(0 + 70<sup>2</sup>) = 70 MPa</p>
<p class="eq">&sigma;<sub>1</sub> = C + R = <strong>70 MPa</strong>, &sigma;<sub>2</sub> = &minus;70 MPa</p>
<p>Pure shear centres the circle on the origin, so the principal stresses are &plusmn;&tau; on planes at 45&deg;. A torqued tube is in tension somewhere even though nothing pulls on it.</p>`,
  },
  {
    id: "stress-analysis-q25",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A point in a plate is under &sigma;<sub>x</sub> = 90 MPa, &sigma;<sub>y</sub> = 30 MPa and &tau;<sub>xy</sub> = 0. What acts on the plane whose normal lies 45&deg; from the x-axis?</p>`,
    choices: [
      "&sigma; = 90 MPa and &tau; = 30 MPa",
      "&sigma; = 30 MPa and &tau; = 60 MPa",
      "&sigma; = 60 MPa and &tau; = 0",
      "&sigma; = 60 MPa and &tau; = 30 MPa",
    ],
    answer: 3,
    explanation: `<p class="eq">&sigma;<sub>&theta;</sub> = 60 + 30cos90&deg; = <strong>60 MPa</strong>, &tau;<sub>&theta;</sub> = &minus;30sin90&deg; = <strong>&minus;30 MPa</strong></p>
<p>With &tau;<sub>xy</sub> = 0 the given values are already principal, and 45&deg; on the part is 90&deg; on the circle: the top, where normal stress is the average and shear is maximum. Answering &tau; = 0 assumes no applied shear means no shear anywhere.</p>`,
  },
  {
    id: "stress-analysis-q26",
    type: "mc",
    difficulty: 1,
    prompt: `<p>Two brackets are machined to identical geometry, one from 6061-T6 aluminium and one from 4340 steel, each with the same shoulder fillet. How do their elastic stress concentration factors compare?</p>`,
    choices: [
      "Steel has the lower K<sub>t</sub>, because its modulus is about three times higher",
      "They are identical: K<sub>t</sub> is fixed by geometry alone, not by the material",
      "Aluminium has the lower K<sub>t</sub>, because it yields and blunts the notch sooner",
      "You cannot compare them without knowing the yield strength of each alloy",
    ],
    answer: 1,
    explanation: `<p>Identical. K<sub>t</sub> comes out of the linear-elastic problem for the shape, and in a homogeneous isotropic body the solution for a <em>ratio</em> of stresses does not contain E at all. What differs is tolerance of it: the ductile alloy yields at the notch and redistributes, and notch sensitivity q in K<sub>f</sub> = 1 + q(K<sub>t</sub> &minus; 1) runs lower for aluminium than for high-strength steel.</p>`,
  },
  {
    id: "stress-analysis-q27",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A shaft shoulder steps from 50 mm to 40 mm with a 1 mm fillet, and keeps cracking at the fillet under rotating bending. Which single change cuts the local elastic peak stress the most?</p>`,
    choices: [
      "Increase the fillet radius from 1 mm to 4 mm",
      "Switch to a steel with 40% higher yield strength",
      "Polish the fillet to a finer surface finish",
      "Increase the large diameter from 50 mm to 60 mm",
    ],
    answer: 0,
    explanation: `<p>At r/d = 1/40 = 0.025 the fillet sits on the steep left branch of the K<sub>t</sub> curve, around 2.4 in bending. Taking r/d to 4/40 = 0.10 drops K<sub>t</sub> to roughly 1.7, close to a 30% cut in peak stress for the price of a tool radius.</p>
<p>The other three all do something, just not this. Higher yield strength leaves the stress untouched, and stronger steels are <em>more</em> notch sensitive. Polishing improves the surface factor in a fatigue calculation but not K<sub>t</sub>. Enlarging D raises D/d, nudging K<sub>t</sub> slightly <em>up</em> while adding mass.</p>`,
  },
  {
    id: "stress-analysis-q28",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A 35 mm shaft has a circumferential groove machined to a 30 mm root diameter. The chart gives K<sub>t</sub> = 2.1 referenced to the groove-root section, and the shaft carries 55 kN of axial tension. What is the peak stress at the groove root?</p>`,
    choices: [
      "78 MPa",
      "120 MPa",
      "163 MPa",
      "343 MPa",
    ],
    answer: 2,
    explanation: `<p>Use the area the chart is referenced to, which is the groove root and not the full shaft:</p>
<p class="eq">A = &pi;d<sup>2</sup>/4 = &pi;(30)<sup>2</sup>/4 = 707 mm<sup>2</sup></p>
<p class="eq">&sigma;<sub>nom</sub> = 55 000/707 = 77.8 MPa</p>
<p class="eq">&sigma;<sub>max</sub> = 2.1 &times; 77.8 = <strong>163 MPa</strong></p>
<p>78 MPa forgets K<sub>t</sub>. 120 MPa uses the 35 mm gross diameter (962 mm<sup>2</sup>, 57.2 MPa) with a root-referenced K<sub>t</sub> and under-predicts by 26%. 343 MPa applies K<sub>t</sub> twice. Write the reference area beside every K<sub>t</sub> you pull off a chart and most of this class of error disappears.</p>`,
  },
  {
    id: "stress-analysis-q29",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The element shown carries &sigma;<sub>x</sub> = &minus;40 MPa (compression), &sigma;<sub>y</sub> = +20 MPa and &tau;<sub>xy</sub> = 30 MPa. Report the <strong>magnitude</strong> of the most compressive principal stress, in MPa.</p>`,
    figure: figXElement2,
    answer: 52.4,
    unit: "MPa",
    explanation: `<p class="eq">C = (&minus;40 + 20)/2 = &minus;10 MPa</p>
<p class="eq">R = &radic;{[(&minus;40 &minus; 20)/2]<sup>2</sup> + 30<sup>2</sup>} = &radic;(30<sup>2</sup> + 30<sup>2</sup>) = 42.4 MPa</p>
<p class="eq">&sigma;<sub>2</sub> = C &minus; R = &minus;10 &minus; 42.4 = &minus;52.4 MPa &rarr; magnitude <strong>52.4 MPa</strong></p>
<p>&sigma;<sub>1</sub> comes out at +32.4 MPa, and 32.4 &minus; 52.4 = &minus;20, which matches &sigma;<sub>x</sub> + &sigma;<sub>y</sub>. &#10003; The most compressive principal stress is 31% larger than the applied &sigma;<sub>x</sub>, because shear pushes both ends of the circle outward. Lose the minus sign on &sigma;<sub>x</sub> and C becomes +30, giving 72.4 and &minus;12.4 instead. Write the centre down with its sign before anything else.</p>`,
  },
  {
    id: "stress-analysis-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>On a Mohr&rsquo;s circle drawn for a bracket, the point representing the x-face sits 70&deg; around the circle from the &sigma;<sub>1</sub> crossing. Through what angle must the physical element be rotated to line up with the principal directions?</p>`,
    choices: ["70&deg;", "140&deg;", "17.5&deg;", "35&deg;"],
    answer: 3,
    explanation: `<p class="eq">&theta;<sub>p</sub> = 70&deg;/2 = <strong>35&deg;</strong></p>
<p>Circle angles are 2&theta;, so a 70&deg; arc is a 35&deg; rotation of the element in the same sense. 140&deg; doubles instead of halving; 17.5&deg; halves twice. Rotating the part 90&deg; only swaps the x and y faces, which on the circle is the diametrically opposite point, 180&deg; away.</p>`,
  },
  {
    id: "stress-analysis-q31",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A thin-wall cylinder holds 2 MPa gauge pressure; the mean diameter is 800 mm and the wall is 8 mm thick. At a point on the <strong>outer</strong> surface, what is the absolute maximum shear stress?</p>`,
    choices: [
      "50 MPa &mdash; the free outer surface makes &sigma;<sub>3</sub> = 0 the minimum",
      "25 MPa &mdash; half the difference of the two in-plane stresses",
      "100 MPa &mdash; the hoop stress is itself the maximum shear stress",
      "75 MPa &mdash; the average of the hoop and longitudinal stresses",
    ],
    answer: 0,
    explanation: `<p class="eq">&sigma;<sub>hoop</sub> = pD/(2t) = 2(800)/(2&times;8) = 100 MPa,&nbsp;&nbsp;&sigma;<sub>long</sub> = pD/(4t) = 50 MPa</p>
<p>The outer surface is free, so &sigma;<sub>3</sub> = 0 and the ordered set is 100, 50, 0 MPa.</p>
<p class="eq">&tau;<sub>abs</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 = (100 &minus; 0)/2 = <strong>50 MPa</strong></p>
<p>25 MPa is the in-plane circle, (100 &minus; 50)/2, and it is exactly half the truth. When both in-plane principal stresses share a sign, the governing circle runs all the way down to &sigma;<sub>3</sub>, and the critical plane cuts through the wall instead of lying in it.</p>`,
  },
  {
    id: "stress-analysis-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A drive shaft repeatedly cracks at the end of its keyway under reversing torque, even though the nominal torsional shear is only 40% of the allowable. Which change attacks the cause most directly?</p>`,
    figure: figXKeyway,
    choices: [
      "Increase the shaft diameter by 10% to reduce the nominal shear stress",
      "Radius the keyway corners and blend the runout instead of leaving them sharp",
      "Change to a higher-strength alloy steel, keeping the shaft geometry as it is",
      "Add a second keyway 180&deg; opposite so two keys share the transmitted torque",
    ],
    answer: 1,
    explanation: `<p>The nominal stress is fine at 40% of allowable. The multiplier is the problem. A profiled end-milled keyway with sharp corners runs K<sub>t</sub> &asymp; 3 in torsion, while a sled-runner keyway with a generous end radius is nearer 2. Reversing load means fatigue starts at that local peak, so cutting K<sub>t</sub> attacks the actual cause.</p>
<p>A 10% diameter increase lowers nominal shear by about 25% and leaves the concentration alone, and it may not fit inside the bearing bore anyway. Higher-strength steel raises the fatigue limit but is more notch sensitive, so much of the gain is eaten. A second keyway adds a second raiser and removes more section. If the keyway itself cannot change, remove it: a shrink fit or a polygon connection carries the torque with no notch at all.</p>`,
  },
  {
    id: "stress-analysis-q33",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>At the critical surface point of a cantilevered handle you have axial tension 30 MPa, bending 50 MPa (tensile, same direction), and torsional shear 40 MPa. What is the maximum principal stress &sigma;<sub>1</sub>, in MPa?</p>`,
    answer: 96.6,
    unit: "MPa",
    explanation: `<p>Assemble the state in one frame before transforming anything. Axial and bending are both &sigma;<sub>x</sub> so they add; torsion is &tau;<sub>xy</sub> and cannot join them.</p>
<p class="eq">&sigma;<sub>x</sub> = 30 + 50 = 80 MPa,&nbsp;&nbsp;&sigma;<sub>y</sub> = 0,&nbsp;&nbsp;&tau;<sub>xy</sub> = 40 MPa</p>
<p class="eq">C = 40 MPa,&nbsp;&nbsp;R = &radic;(40<sup>2</sup> + 40<sup>2</sup>) = 56.6 MPa</p>
<p class="eq">&sigma;<sub>1</sub> = 40 + 56.6 = <strong>96.6 MPa</strong>&nbsp;&nbsp;(&sigma;<sub>2</sub> = &minus;16.6 MPa)</p>
<p>Adding all three magnitudes gives 120 MPa, a 24% over-prediction that treats shear as though it were a normal stress. Notice that &sigma;<sub>2</sub> is compressive even though every applied component was tension or shear. Then check the opposite surface fibre, where bending subtracts and the state is &minus;20 / 0 / 40 MPa.</p>`,
  },
  {
    id: "stress-analysis-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 25 mm thick steel plate with a through-hole is loaded in tension. How do the stress states at the hole edge compare between the free surface of the plate and the mid-thickness?</p>`,
    choices: [
      "Both are plane stress, since the hole edge is a free surface right through",
      "Surface is plane strain; mid-thickness is plane stress because nothing holds it",
      "Surface is plane stress; mid-thickness is closer to plane strain, &sigma;<sub>z</sub> &ne; 0",
      "Both are plane strain, since the surrounding plate restrains every direction",
    ],
    answer: 2,
    explanation: `<p>At a free surface nothing can apply traction, so &sigma;<sub>z</sub> = 0 and the state is plane stress. At mid-thickness the material above and below resists the through-thickness contraction that in-plane tension wants to cause. That restraint drives &epsilon;<sub>z</sub> toward zero and generates &sigma;<sub>z</sub> &rarr; &nu;(&sigma;<sub>x</sub>+&sigma;<sub>y</sub>), which is plane strain.</p>
<p>The state therefore varies across the thickness, and the interior pays for it. Extra constraint raises triaxiality and suppresses shear yielding, so the middle of a thick plate behaves in a more brittle way. Fracture toughness falls as thickness rises until it plateaus at the plane-strain value K<sub>IC</sub>. It is the same reason a thin sheet tears with 45&deg; shear lips while a thick plate gives a flat square fracture with only small lips at the surfaces.</p>`,
  },
  {
    id: "stress-analysis-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Measurements at a weld toe show +240 MPa of longitudinal residual tension. In service the joint sees a fully reversed nominal cycle of &plusmn;90 MPa in the same direction. Ignoring any relaxation, what is the actual peak stress at the toe, in MPa?</p>`,
    answer: 330,
    unit: "MPa",
    explanation: `<p>Residual and applied stress are both stress at the same point in the same direction, so they add:</p>
<p class="eq">&sigma;<sub>max</sub> = 240 + 90 = <strong>330 MPa</strong>,&nbsp;&nbsp;&sigma;<sub>min</sub> = 240 &minus; 90 = 150 MPa</p>
<p>Look at what that did to the cycle. Nominal loading was fully reversed, R = &minus;1 with zero mean. The real cycle at the toe is entirely tensile, mean 240 MPa, R = 150/330 = 0.45. The amplitude is unchanged at 90 MPa, but the operating point has slid far to the right on a Goodman diagram and the allowable amplitude drops with it.</p>
<p>Weld fatigue classes are quoted without reference to mean stress for exactly this reason: the residual field already pins the joint near yield, so the designer&rsquo;s R-ratio hardly matters. It is also the argument for stress relief, toe peening or a toe grind before anyone pays for a stronger alloy.</p>`,
  },
  {
    id: "stress-analysis-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A colleague reports &sigma;<sub>1</sub> = 140 MPa and &sigma;<sub>2</sub> = 20 MPa for a point where the model gives &sigma;<sub>x</sub> = 100 MPa, &sigma;<sub>y</sub> = 40 MPa and &tau;<sub>xy</sub> = 30 MPa. Without redoing the algebra, what can you say?</p>`,
    choices: [
      "It is consistent: shear on rotated planes lets &sigma;<sub>1</sub> exceed &sigma;<sub>x</sub>",
      "It cannot be right: &sigma;<sub>1</sub> + &sigma;<sub>2</sub> must equal &sigma;<sub>x</sub> + &sigma;<sub>y</sub> = 140 MPa",
      "It cannot be right: &sigma;<sub>1</sub> may never exceed the larger of &sigma;<sub>x</sub> and &sigma;<sub>y</sub>",
      "It is consistent only if the point is in plane strain rather than plane stress",
    ],
    answer: 1,
    explanation: `<p>The numbers cannot both be right. &sigma;<sub>x</sub> + &sigma;<sub>y</sub> = 140 MPa, the reported principals sum to 160 MPa, and that sum is an <strong>invariant</strong>. It is twice the centre of Mohr&rsquo;s circle, and the centre does not move when the element rotates.</p>
<p>The algebra confirms it: C = 70, R = &radic;(30<sup>2</sup> + 30<sup>2</sup>) = 42.4, so &sigma;<sub>1</sub> = 112 MPa and &sigma;<sub>2</sub> = 27.6 MPa, summing to 140. &#10003;</p>
<p>Option 2 is worth killing separately. &sigma;<sub>1</sub> <em>can</em> exceed both &sigma;<sub>x</sub> and &sigma;<sub>y</sub> whenever shear is present, because shear feeds normal stress onto rotated planes. The invariant is a five-second audit on any transformation, including your own.</p>`,
  },
  {
    id: "stress-analysis-q37",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A wide plate with a small circular hole is loaded to 80 MPa of tension in <strong>both</strong> in-plane directions at once, as shown. What is the peak stress at the hole edge?</p>`,
    figure: figXBiaxialHole,
    choices: ["80 MPa", "240 MPa", "160 MPa", "320 MPa"],
    answer: 2,
    explanation: `<p>Superpose the two uniaxial solutions at the hole edge, taking the point at the end of the vertical diameter. The horizontal 80 MPa puts 3&sigma; = +240 MPa there. The vertical 80 MPa puts &minus;&sigma; = &minus;80 MPa at the same point, because the hole edge lying <em>on</em> the load axis goes into compression.</p>
<p class="eq">&sigma;<sub>max</sub> = 3(80) &minus; 80 = 2(80) = <strong>160 MPa</strong>,&nbsp;&nbsp;so K<sub>t</sub> = 2</p>
<p>Symmetry then makes every point on the boundary see the same 160 MPa: equal biaxial loading gives a uniform edge stress rather than two hot spots. Answering 240 MPa applies the uniaxial factor and ignores the second load, a 50% over-prediction. It matters most in pressure vessels and pressurized fuselage skins, where the field is typically 2:1 hoop to longitudinal and K<sub>t</sub> = 3 &minus; 0.5 = 2.5.</p>`,
  },
  {
    id: "stress-analysis-q38",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A mild-steel tensile coupon shows slip bands at 45&deg; to the load axis &mdash; the planes of maximum shear. What normal stress acts on those same planes?</p>`,
    choices: [
      "Zero &mdash; planes of maximum shear carry no normal stress at all",
      "&sigma;<sub>1</sub>, the maximum principal stress, acts on those planes too",
      "(&sigma;<sub>1</sub> &minus; &sigma;<sub>2</sub>)/2, numerically the same as the shear there",
      "(&sigma;<sub>1</sub> + &sigma;<sub>2</sub>)/2, the average of the principal stresses",
    ],
    answer: 3,
    explanation: `<p>The maximum-shear points sit at the top and bottom of Mohr&rsquo;s circle, directly above and below the centre, so their &sigma; coordinate is the centre itself: (&sigma;<sub>1</sub>+&sigma;<sub>2</sub>)/2, not zero. In simple tension the 45&deg; plane carries &sigma;/2 of normal stress alongside &sigma;/2 of shear.</p>
<p>The confusion runs the other way round. It is the <em>principal</em> planes that are shear-free, by definition. Nothing requires the max-shear planes to be traction-free.</p>
<p>This is also the whole story behind hydrostatic pressure not causing yield in metals. Adding hydrostatic stress slides the circle sideways without changing its radius, so the shear driving slip is untouched while the normal stress on the slip plane moves freely. Von Mises and Tresca both depend only on differences of principal stresses.</p>`,
  },
  {
    id: "stress-analysis-q39",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>At a bolted flange face the stress state is &sigma;<sub>x</sub> = 70 MPa, &sigma;<sub>y</sub> = &minus;10 MPa and &tau;<sub>xy</sub> = 25 MPa. What is the maximum in-plane shear stress, in MPa?</p>`,
    answer: 47.2,
    unit: "MPa",
    explanation: `<p class="eq">&tau;<sub>max</sub> = &radic;{[(&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>)/2]<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>} = &radic;(40<sup>2</sup> + 25<sup>2</sup>) = &radic;2225 = <strong>47.2 MPa</strong></p>
<p>Maximum in-plane shear is the radius of Mohr&rsquo;s circle, so the centre never enters it. Forgetting to halve (&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>) gives 83.8 MPa; dropping the sign on &sigma;<sub>y</sub> gives 39.1 MPa. Sketching the circle catches both: C = 30, &sigma;<sub>1</sub> = 77.2, &sigma;<sub>2</sub> = &minus;17.2 MPa, and half their difference is 47.2 MPa. &#10003;</p>
<p>The two in-plane principals straddle zero, so this circle is the largest of the three and 47.2 MPa is the absolute maximum shear as well.</p>`,
  },
  {
    id: "stress-analysis-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>You rerun the 2D cross-section of a long press-fitted hub as plane strain instead of plane stress. The loads are unchanged, but peak von Mises stress drops about 15%. Is that believable?</p>`,
    choices: [
      "No &mdash; introducing a third stress component can only push von Mises stress up",
      "Yes &mdash; &sigma;<sub>z</sub> moves the state toward hydrostatic and cuts the deviatoric part",
      "No &mdash; the two idealizations must return identical stresses for identical loads",
      "Yes &mdash; plane strain sets &sigma;<sub>z</sub> = 0, so one stress component disappears",
    ],
    answer: 1,
    explanation: `<p>The result is believable. Plane strain generates &sigma;<sub>z</sub> = &nu;(&sigma;<sub>x</sub>+&sigma;<sub>y</sub>), which for &nu; = 0.3 lands between the two in-plane stresses when they share a sign. Von Mises depends only on the <em>differences</em> of principal stresses, so a third value sitting in the middle of the range shrinks those differences and lowers &sigma;<sub>vM</sub>. Adding stress can reduce von Mises. The extreme case is pure hydrostatic loading, where every difference vanishes and &sigma;<sub>vM</sub> = 0 at any pressure.</p>
<p>So the real question is which idealization matches the hardware. A long hub restrained at mid-length is genuinely close to plane strain. A short bushing with free ends is not, and assuming plane strain there is unconservative.</p>
<p>Plane strain also makes something worse. The added triaxiality raises constraint, which lowers fracture toughness and promotes brittle behaviour at any flaw. Less yielding, less crack tolerance.</p>`,
  },
  {
    id: "stress-analysis-q41",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Below a rolling-element contact the three principal stresses at the critical depth are all compressive: &minus;2400, &minus;2200 and &minus;1800 MPa. What is the absolute maximum shear stress there, in MPa?</p>`,
    answer: 300,
    unit: "MPa",
    explanation: `<p class="eq">&tau;<sub>abs</sub> = (&sigma;<sub>max</sub> &minus; &sigma;<sub>min</sub>)/2 = [&minus;1800 &minus; (&minus;2400)]/2 = 600/2 = <strong>300 MPa</strong></p>
<p>Only the extremes matter, and here they sit close together. That is the whole point of Hertzian contact: 2.4 GPa of pressure, far above any bearing steel&rsquo;s uniaxial yield, produces only 300 MPa of shear because the state is nearly hydrostatic. Von Mises agrees, &radic;{&frac12;[400<sup>2</sup> + 200<sup>2</sup> + 600<sup>2</sup>]} = 529 MPa against roughly 2 GPa yield for hardened 52100.</p>
<p>Quoting 2400 MPa, or 1200 MPa as half the largest stress, leads straight to declaring the bearing failed. Metals yield on shear, and hydrostatic compression carries none. Note where the shear peaks: a short distance <em>below</em> the surface, which is exactly where subsurface spalling in bearings and gear flanks begins.</p>`,
  },
  {
    id: "stress-analysis-q42",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Strain gauges on two perpendicular faces of a bracket give &sigma;<sub>x</sub> = 90 MPa and &sigma;<sub>y</sub> = 30 MPa. A separate measurement puts the maximum in-plane shear at that point at 50 MPa. What is the magnitude of &tau;<sub>xy</sub>, in MPa?</p>`,
    answer: 40,
    unit: "MPa",
    explanation: `<p>Run Mohr&rsquo;s circle backwards. The maximum in-plane shear <em>is</em> the radius, and the horizontal offset from the centre to the x-face point is (&sigma;<sub>x</sub>&minus;&sigma;<sub>y</sub>)/2.</p>
<p class="eq">R = 50 MPa,&nbsp;&nbsp;(&sigma;<sub>x</sub> &minus; &sigma;<sub>y</sub>)/2 = (90 &minus; 30)/2 = 30 MPa</p>
<p class="eq">&tau;<sub>xy</sub> = &radic;(R<sup>2</sup> &minus; 30<sup>2</sup>) = &radic;(2500 &minus; 900) = &radic;1600 = <strong>40 MPa</strong></p>
<p>A 3-4-5 triangle, with the radius as hypotenuse and the half-difference and the shear as legs. Forward it closes: C = 60, R = &radic;(30<sup>2</sup>+40<sup>2</sup>) = 50, so &sigma;<sub>1</sub> = 110 and &sigma;<sub>2</sub> = 10 MPa, and 2&theta;<sub>p</sub> = atan(80/60) = 53.1&deg; gives &theta;<sub>p</sub> = 26.6&deg;.</p>
<p>There is a floor hiding in the geometry. With those two normal stresses the shear can be anything at all, but R can never fall below 30 MPa. A reported maximum shear smaller than half the difference of the normal stresses means the data are inconsistent.</p>`,
  },
  {
    id: "stress-analysis-q43",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A shot-peened gear tooth eventually fails in fatigue, and fractography puts the crack origin about 0.4 mm below the root surface rather than at it. What does that indicate?</p>`,
    choices: [
      "The peening was ineffective and the surface layer must be re-processed",
      "The crack really started at the surface and the fracture face is misread",
      "The compressive layer pushed initiation below it, where residual stress turns tensile",
      "The gear ran above its static rating, which forces cracks to start subsurface",
    ],
    answer: 2,
    explanation: `<p>Peening leaves compression only a few tenths of a millimetre deep, and residual stress self-equilibrates, so that layer is balanced by tension just beneath it. Lay the applied bending gradient over that profile: the surface total is suppressed, and the highest net tension moves to a depth just past the compressive zone. Cracks nucleate where the total driving stress is largest, so they start there.</p>
<p>A subsurface origin is evidence the treatment worked. The part outlived the surface-initiation mode and found the next one. It also explains why peening has diminishing returns, since pushing surface compression higher only moves the origin deeper; the useful limit is set by the depth of the layer against the applied stress gradient.</p>
<p>Fixing it is a design conversation rather than a process one. Reduce the root bending stress, deepen the treated layer with deep rolling or carburizing instead of light peening, or improve core cleanliness, because subsurface origins usually nucleate at inclusions.</p>`,
  },
  {
    id: "stress-analysis-q44",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The 30 mm diameter solid shaft shown carries a bending moment of 250 N&middot;m and a torque of 400 N&middot;m at the same section. What is the maximum in-plane shear stress at the critical surface point, in MPa?</p>`,
    figure: figXShaftMT,
    answer: 89,
    unit: "MPa",
    explanation: `<p>Compute the two surface components first, with &pi;d<sup>3</sup> = &pi;(0.030)<sup>3</sup> = 8.482&times;10<sup>&minus;5</sup> m<sup>3</sup>:</p>
<p class="eq">&sigma;<sub>x</sub> = 32M/(&pi;d<sup>3</sup>) = 8000/8.482&times;10<sup>&minus;5</sup> = 94.3 MPa</p>
<p class="eq">&tau;<sub>xy</sub> = 16T/(&pi;d<sup>3</sup>) = 6400/8.482&times;10<sup>&minus;5</sup> = 75.5 MPa</p>
<p>The critical point is the outer fibre on the tension side, where bending peaks and torsional shear is fully present. With &sigma;<sub>y</sub> = 0:</p>
<p class="eq">&tau;<sub>max</sub> = &radic;{(&sigma;<sub>x</sub>/2)<sup>2</sup> + &tau;<sub>xy</sub><sup>2</sup>} = &radic;(47.2<sup>2</sup> + 75.5<sup>2</sup>) = <strong>89.0 MPa</strong></p>
<p>That gives &sigma;<sub>1</sub> = 47.2 + 89.0 = 136 MPa and &sigma;<sub>2</sub> = &minus;41.8 MPa. They straddle zero, so 89.0 MPa is also the absolute maximum shear, which is the number a Tresca check consumes directly. Notice which load dominates: J = 2I for a circle, so a given torque produces half the surface stress that a numerically equal bending moment would, and torque still wins here.</p>`,
  },
  {
    id: "stress-analysis-q45",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A quenched steel shaft ends up with compressive residual stress at the surface and balancing tension in the core. In service it sees rotating bending. What is the net effect?</p>`,
    choices: [
      "Surface fatigue improves, but the tensile core can drive subsurface cracking",
      "Both surface and core improve, since residual stresses cancel under load",
      "Surface fatigue gets worse, because the surface holds the residual tension",
      "There is no effect: residual stress relaxes fully on the first load cycle",
    ],
    answer: 0,
    explanation: `<p>Residual stress adds algebraically and must self-equilibrate over the section, so surface compression requires core tension. Rotating bending puts its highest applied tension at the surface, exactly where the compressive layer subtracts. That is a genuine fatigue benefit, the same mechanism as peening but delivered by the quench.</p>
<p>The core is the other side of the ledger. It sits in tension with no service load applied, and bending gives it very little applied stress to fight, but any internal defect now lives in a tensile field: an inclusion, a forging burst, a hydrogen flake. Hence subsurface-origin fatigue in through-hardened shafts, and quench cracking during manufacture, where the transient tension peaks before the part ever reaches service.</p>
<p>Managing it is mostly process discipline. Temper promptly after quench, control section-thickness transitions to limit the gradient, use induction or case hardening to keep the tension shallow, and specify core cleanliness or ultrasonic inspection where the consequence is high.</p>`,
  },
];

export default extra;
