import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Structural Loading & Load Paths — additional question bank.
// Figures live here as well as in the base file; SVG ids are prefixed
// sl15-…sl20- for global uniqueness.
// ---------------------------------------------------------------------------

// --- Eccentrically loaded bolt group in shear ------------------------------
const figXBoltGroup = `<svg viewBox="0 0 460 266" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl15-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Bolt group in plane shear, load applied off the centroid</text>
  <rect x="90" y="90" width="140" height="140" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="230" y="152" width="130" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="120" cy="120" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="200" cy="120" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="120" cy="200" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="200" cy="200" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="160" cy="160" r="3" fill="#1d4ed8"/>
  <text x="140" y="146" fill="#1d4ed8" font-size="12">G</text>
  <line x1="360" y1="96" x2="360" y2="148" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl15-load)"/>
  <text x="360" y="88" text-anchor="middle" fill="#dc2626" font-weight="600">P = 12 kN</text>
  <line x1="120" y1="76" x2="200" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="70" x2="120" y2="82" stroke="#64748b" stroke-width="1"/>
  <line x1="200" y1="70" x2="200" y2="82" stroke="#64748b" stroke-width="1"/>
  <text x="160" y="66" text-anchor="middle" fill="#64748b" font-size="12">100 mm</text>
  <line x1="66" y1="120" x2="66" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="120" x2="72" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="200" x2="72" y2="200" stroke="#64748b" stroke-width="1"/>
  <text x="54" y="164" text-anchor="end" fill="#64748b" font-size="12">100 mm</text>
  <line x1="160" y1="252" x2="360" y2="252" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="246" x2="160" y2="258" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="246" x2="360" y2="258" stroke="#64748b" stroke-width="1"/>
  <text x="260" y="247" text-anchor="middle" fill="#64748b" font-size="12">250 mm from G</text>
</svg>`;

// --- Rail with expansion gaps ----------------------------------------------
const figXRail = `<svg viewBox="0 0 460 212" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl16-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="30" text-anchor="middle" fill="#dc2626" font-weight="600">laid at 15 &#176;C, rail heated to 65 &#176;C</text>
  <rect x="50" y="88" width="180" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="244" y="88" width="180" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="196" y1="101" x2="224" y2="101" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sl16-red)"/>
  <line x1="278" y1="101" x2="250" y2="101" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sl16-red)"/>
  <line x1="230" y1="70" x2="244" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="64" x2="230" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="244" y1="64" x2="244" y2="76" stroke="#64748b" stroke-width="1"/>
  <text x="237" y="58" text-anchor="middle" fill="#64748b" font-size="12">6 mm gap</text>
  <line x1="40" y1="126" x2="430" y2="126" stroke="#334155" stroke-width="2"/>
  <line x1="48" y1="136" x2="58" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="98" y1="136" x2="108" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="148" y1="136" x2="158" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="198" y1="136" x2="208" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="248" y1="136" x2="258" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="298" y1="136" x2="308" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="348" y1="136" x2="358" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="136" x2="408" y2="126" stroke="#64748b" stroke-width="1"/>
  <line x1="50" y1="164" x2="230" y2="164" stroke="#64748b" stroke-width="1"/>
  <line x1="50" y1="158" x2="50" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="158" x2="230" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="159" text-anchor="middle" fill="#64748b" font-size="12">25 m rail length</text>
  <text x="230" y="192" text-anchor="middle" fill="#64748b" font-size="12">steel: E = 200 GPa, &#945; = 12 &#215; 10<tspan baseline-shift="super" font-size="9">&#8722;6</tspan> per &#176;C</text>
</svg>`;

// --- Collar dropping onto the flange of a hanging rod ----------------------
const figXCollar = `<svg viewBox="0 0 460 264" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl17-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="140" y1="40" x2="260" y2="40" stroke="#334155" stroke-width="2.5"/>
  <line x1="146" y1="30" x2="156" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="30" x2="180" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="194" y1="30" x2="204" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="218" y1="30" x2="228" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="242" y1="30" x2="252" y2="40" stroke="#64748b" stroke-width="1"/>
  <rect x="190" y="40" width="20" height="172" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="160" y="212" width="80" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="248" y="224" fill="#64748b" font-size="12">flange</text>
  <rect x="148" y="110" width="104" height="34" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="132" text-anchor="middle" fill="#dc2626" font-weight="600">200 kg collar</text>
  <line x1="200" y1="152" x2="200" y2="198" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#sl17-red)"/>
  <line x1="300" y1="144" x2="300" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="294" y1="144" x2="306" y2="144" stroke="#64748b" stroke-width="1"/>
  <line x1="294" y1="212" x2="306" y2="212" stroke="#64748b" stroke-width="1"/>
  <text x="312" y="182" fill="#64748b" font-size="12">drop h = 25 mm</text>
  <line x1="112" y1="40" x2="112" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="40" x2="118" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="212" x2="118" y2="212" stroke="#64748b" stroke-width="1"/>
  <text x="102" y="126" text-anchor="middle" fill="#64748b" font-size="12" transform="rotate(-90 102 126)">L = 3 m</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">steel rod, d = 25 mm, E = 200 GPa</text>
</svg>`;

// --- Battery pack under combined g-loading ---------------------------------
const figXPack = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl18-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="110" y="80" width="240" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="170" width="320" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="178" r="6" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="310" cy="178" r="6" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="230" y1="124" x2="230" y2="40" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl18-red)"/>
  <text x="230" y="32" text-anchor="middle" fill="#dc2626" font-weight="600">20 g up</text>
  <line x1="230" y1="124" x2="398" y2="124" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl18-red)"/>
  <text x="326" y="114" text-anchor="middle" fill="#dc2626" font-weight="600">10 g lateral</text>
  <circle cx="230" cy="124" r="4" fill="#1d4ed8"/>
  <text x="212" y="140" text-anchor="end" fill="#1d4ed8" font-size="12">CG</text>
  <line x1="86" y1="124" x2="86" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="124" x2="92" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="170" x2="92" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="76" y="150" text-anchor="end" fill="#64748b" font-size="12">80 mm</text>
  <line x1="92" y1="124" x2="226" y2="124" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>
  <line x1="150" y1="212" x2="310" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="206" x2="150" y2="218" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="206" x2="310" y2="218" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="207" text-anchor="middle" fill="#64748b" font-size="12">300 mm</text>
  <text x="230" y="236" text-anchor="middle" fill="#64748b" font-size="12">60 kg pack on four M8 bolts, two per row</text>
</svg>`;

// --- Neutral axis position under an eccentric load -------------------------
const figXNA = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">Where does the neutral axis land?</text>
  <rect x="90" y="90" width="216" height="108" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="198" y1="82" x2="198" y2="206" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="112" y1="84" x2="112" y2="204" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="112" y="78" text-anchor="middle" fill="#dc2626" font-size="12">N.A. = ?</text>
  <text x="112" y="248" text-anchor="middle" fill="#dc2626" font-size="11">(sketched anywhere &mdash; find it)</text>
  <circle cx="270" cy="144" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="264" y1="138" x2="276" y2="150" stroke="#dc2626" stroke-width="2"/>
  <line x1="276" y1="138" x2="264" y2="150" stroke="#dc2626" stroke-width="2"/>
  <text x="288" y="126" fill="#dc2626" font-weight="600">P (into page)</text>
  <line x1="198" y1="70" x2="270" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="198" y1="64" x2="198" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="64" x2="270" y2="76" stroke="#64748b" stroke-width="1"/>
  <text x="234" y="60" text-anchor="middle" fill="#64748b" font-size="12">e = 40 mm</text>
  <line x1="90" y1="228" x2="306" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="222" x2="90" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="306" y1="222" x2="306" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="198" y="223" text-anchor="middle" fill="#64748b" font-size="12">h = 120 mm</text>
  <line x1="64" y1="90" x2="64" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="90" x2="70" y2="90" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="198" x2="70" y2="198" stroke="#64748b" stroke-width="1"/>
  <text x="52" y="148" text-anchor="end" fill="#64748b" font-size="12">60 mm</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">rectangular column, load offset along the 120 mm axis</text>
</svg>`;

// --- Hollow shaft cross-section under bending plus torsion -----------------
const figXHollow = `<svg viewBox="0 0 460 242" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl20-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Hollow shaft: section at the loaded end</text>
  <circle cx="160" cy="130" r="72" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="160" cy="130" r="48" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="88" y1="130" x2="232" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="240" y="134" fill="#64748b" font-size="12">N.A.</text>
  <circle cx="160" cy="58" r="5" fill="#1d4ed8"/>
  <text x="172" y="52" fill="#1d4ed8" font-size="12">critical point</text>
  <path d="M 74 92 A 96 96 0 0 0 74 168" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl20-red)"/>
  <text x="52" y="134" text-anchor="end" fill="#dc2626" font-weight="600">T</text>
  <line x1="112" y1="130" x2="208" y2="130" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="124" x2="112" y2="136" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="124" x2="208" y2="136" stroke="#64748b" stroke-width="1"/>
  <text x="160" y="122" text-anchor="middle" fill="#64748b" font-size="12">ID 40 mm</text>
  <line x1="88" y1="222" x2="232" y2="222" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="216" x2="88" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="232" y1="216" x2="232" y2="228" stroke="#64748b" stroke-width="1"/>
  <text x="160" y="217" text-anchor="middle" fill="#64748b" font-size="12">OD 60 mm</text>
  <text x="350" y="112" text-anchor="middle" fill="#dc2626" font-weight="600">T = 1.2 kN&#183;m</text>
  <text x="350" y="140" text-anchor="middle" fill="#dc2626" font-weight="600">M = 900 N&#183;m</text>
</svg>`;

const extra: Question[] = [
  {
    id: "structural-loading-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A bolted flange on a process line sees internal pressure cycling from 0 to 3 MPa about 200 times a day for a ten-year design life. The static stress in the bolts under full pressure is comfortably below yield. Which check actually sizes the bolts?</p>`,
    choices: [
      "Static strength &mdash; 3 MPa is far below the flange yield stress",
      "Creep &mdash; the pressure is a sustained load held for ten years",
      "Fatigue &mdash; 7.3 &times; 10<sup>5</sup> cycles is high-cycle territory",
      "Buckling of the flange face under the bolt preload",
    ],
    answer: 2,
    explanation: `<p>Count the cycles first: 200 &times; 365 &times; 10 = 7.3 &times; 10<sup>5</sup>. Anything past roughly 10<sup>3</sup> cycles is a fatigue problem, and 730 000 cycles is squarely high-cycle. The governing check is the alternating bolt stress against the endurance limit, with a mean-stress correction for the preload.</p>
<p>Creep is wrong at ambient temperature for steel, since you need roughly 0.4 T<sub>melt</sub> before it matters. Static strength passes, which is exactly why it is the wrong answer: the calculation you did says nothing about the mode that will actually fail.</p>
<p>The design lever is preload. A well-preloaded joint sees only C &asymp; 0.2 of the external fluctuation until separation, so raising preload can cut the alternating bolt stress by a factor of five, the opposite of what people expect from &ldquo;the bolt is already tight&rdquo;.</p>`,
  },
  {
    id: "structural-loading-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 4 kg electronics box is mounted on four screws and must survive a 15 g inertial load normal to the mounting plane. Assuming the four screws share that load equally, what tensile force does each screw carry, in N?</p>`,
    answer: 147,
    unit: "N",
    explanation: `<p class="eq">F<sub>total</sub> = m(15g) = 4 &times; 15 &times; 9.81 = 589 N &rarr; F<sub>screw</sub> = 589/4 = <strong>147 N</strong></p>
<p>A g-load is an acceleration, so turn it into a force first. Quoting 60 N treats g as dimensionless mass. Equal sharing is only valid when the load is normal to the plane and the CG sits over the bolt pattern centroid; any offset adds an overturning couple.</p>`,
  },
  {
    id: "structural-loading-q25",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A bolted joint is assembled with 25 kN of preload. An external tensile load of 8 kN is then applied across the joint, and the joint stiffness ratio is C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>) = 0.25. What is the total bolt tension, in kN?</p>`,
    answer: 27,
    unit: "kN",
    explanation: `<p class="eq">F<sub>bolt</sub> = F<sub>i</sub> + C&middot;P = 25 + 0.25(8) = <strong>27.0 kN</strong></p>
<p>In a preloaded joint the external load does not all go into the bolt. It splits between stretching the bolt further and relieving the compression in the clamped members, in proportion to their stiffnesses. Answering 33 kN adds the whole external load, which is only right after the joint separates and the members can no longer unload. Separation needs P &gt; F<sub>i</sub>/(1 &minus; C) = 33.3 kN, so we are safe.</p>
<p>This is the most useful fact about preloaded joints and why they survive fatigue: a stiff member stack and a compliant bolt give small C, so an 8 kN fluctuation puts only a 2 kN fluctuation into the bolt. Lose the preload and the bolt suddenly sees the full swing.</p>`,
  },
  {
    id: "structural-loading-q26",
    type: "mc",
    difficulty: 1,
    prompt: `<p>You have a cylindrical vessel and a spherical vessel of the same radius, same wall thickness, and same internal pressure. What is the maximum membrane stress in the sphere wall?</p>`,
    choices: [
      "The same as the cylinder hoop stress, pr/t, in every direction",
      "Twice the cylinder hoop stress, 2pr/t, from the double curvature",
      "Half the cylinder hoop stress, pr/2t, equal in every direction",
      "pr/t one way and pr/2t the other, the same pair a cylinder carries",
    ],
    answer: 2,
    explanation: `<p>Cut a sphere through any diameter and the pressure force &pi;r&sup2;p is resisted by the wall around the cut, area 2&pi;rt:</p>
<p class="eq">&sigma; = &pi;r&sup2;p/(2&pi;rt) = pr/2t</p>
<p>Every direction gives the same cut, so the sphere carries pr/2t biaxially, exactly half the cylinder hoop stress of pr/t.</p>
<p>A sphere therefore needs half the wall of a cylinder for the same duty, which is why large gas storage vessels are spherical and why almost every cylindrical vessel has hemispherical or ellipsoidal heads rather than flat plates. Balanced biaxial tension is also a mild stress state: with &sigma;<sub>1</sub> = &sigma;<sub>2</sub>, von Mises equals the principal stress rather than exceeding it, so nothing is hiding.</p>
<p>The two directional distractors carry cylinder intuition across. A cylinder has one flat direction and one curved one, so its two membrane stresses differ by 2&times;; a sphere is curved identically on every cut, so there is no second, weaker direction to find. The real complication is elsewhere: at the weld where a hemispherical head meets a cylinder, the two shells want different radial growth, and that discontinuity produces local bending stresses the membrane formulas do not contain.</p>`,

  },
  {
    id: "structural-loading-q27",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Four bolts sit on a 100 mm &times; 100 mm square pattern, as shown. An in-plane load of 12 kN acts vertically, 250 mm from the centroid of the group. Find the resultant shear force on the most heavily loaded bolt, in kN.</p>`,
    figure: figXBoltGroup,
    answer: 12.9,
    unit: "kN",
    explanation: `<p>Split the eccentric load into a force at the centroid plus a couple, then add the two bolt-force fields vectorially.</p>
<p class="eq">Direct shear: 12 000/4 = 3.00 kN per bolt, vertical</p>
<p class="eq">Couple: M = 12 000 &times; 0.250 = 3000 N&middot;m</p>
<p class="eq">r = &radic;(50&sup2; + 50&sup2;) = 70.7 mm,&nbsp;&Sigma;r&sup2; = 4(70.7 mm)&sup2; = 0.0200 m&sup2;</p>
<p class="eq">Torsional shear: F = Mr/&Sigma;r&sup2; = 3000(0.0707)/0.0200 = 10.6 kN, perpendicular to r</p>
<p>At each bolt on the load side that 10.6 kN sits at 45&deg;, giving 7.50 kN horizontal and 7.50 kN vertical. Adding the 3.00 kN direct shear vertically:</p>
<p class="eq">R = &radic;(7.50&sup2; + 10.50&sup2;) = <strong>12.9 kN</strong></p>
<p>The two bolts on the far side only reach 8.75 kN, because there the couple opposes the direct shear. Quoting 3.00 kN ignores the eccentricity entirely; adding 3.00 + 10.6 = 13.6 kN treats vectors as scalars.</p>`,
  },
  {
    id: "structural-loading-q28",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A bracket is bolted to a relatively thin flange with the load applied outboard of the bolt line. Strain-gauged bolts read 40% more tension than the simple couple T = P&middot;e/h predicts. What is the most likely explanation?</p>`,
    choices: [
      "Over-torqued bolts: preload adds directly to the external tension",
      "Differential thermal growth across the flange has added bolt tension",
      "The couple arm h was taken to the flange edge rather than the bolt line",
      "Prying: the flange toe bears and levers extra tension into the bolt",
    ],
    answer: 3,
    explanation: `<p>The simple couple assumes the flange is rigid and rotates about the bolt line. A real flexible flange bends: its outer toe presses hard against the mating face, and that toe reaction Q acts on the far side of the bolt. Moment equilibrium of the flange then requires the bolt to carry the applied tension <em>plus</em> Q, typically 20 to 50% more.</p>
<p>Preload is the wrong answer, because preload does not add to an external tensile load. The external load mostly unloads the members, F<sub>bolt</sub> = F<sub>i</sub> + CP with C around 0.2, so a preloaded bolt sees <em>less</em> of the swing. A thermal explanation needs a temperature excursion nobody has mentioned, and it would show up as a shift in the zero rather than as a 40% error in the load-proportional part, which strain-gauged bolts distinguish immediately. The lever-arm answer deserves a tape measure before you reach for prying: measuring h to the flange edge instead of the bolt line does shorten the arm and inflate T, and 40% is exactly the size of error that produces.</p>
<p>Fixes in order of effectiveness: thicken the flange, since prying falls steeply with flange stiffness; move the bolts closer to the load; add a gusset or backing plate; or accept the prying factor explicitly in the bolt sizing. Steelwork codes tabulate this. In machine design it is usually caught the hard way, by a bolt that fatigues at half its rated load.</p>`,
  },
  {
    id: "structural-loading-q29",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Continuously welded rail is laid in 25 m lengths with 6 mm expansion gaps at 15 &deg;C, as shown. Steel has E = 200 GPa and &alpha; = 12 &times; 10<sup>&minus;6</sup>/&deg;C. What axial stress does a rail carry on a day when it reaches 65 &deg;C?</p>`,
    figure: figXRail,
    choices: [
      "72 MPa compressive",
      "120 MPa compressive",
      "48 MPa compressive",
      "Zero &mdash; the gaps absorb all of the growth",
    ],
    answer: 0,
    explanation: `<p>Two stages. First find the temperature rise that just closes the gap:</p>
<p class="eq">&Delta;T<sub>close</sub> = &delta;/(&alpha;L) = 0.006/((12 &times; 10<sup>&minus;6</sup>)(25)) = 20 &deg;C</p>
<p>The rail is free until 35 &deg;C. Beyond that it is fully restrained by its neighbours, so only the remaining rise builds stress:</p>
<p class="eq">&Delta;T<sub>eff</sub> = (65 &minus; 15) &minus; 20 = 30 &deg;C</p>
<p class="eq">&sigma; = E&alpha;&Delta;T<sub>eff</sub> = (200 &times; 10<sup>9</sup>)(12 &times; 10<sup>&minus;6</sup>)(30) = <strong>72 MPa</strong> compressive</p>
<p>Ignoring the gap gives 120 MPa; using only the 20 &deg;C absorbed gives 48 MPa. The physical consequence is the interesting part: 72 MPa of compression in a long slender rail is a buckling problem rather than a yielding one. That is the mechanism behind track buckling in a heatwave, and why rail is pre-stressed in tension at a chosen neutral temperature.</p>`,
  },
  {
    id: "structural-loading-q30",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A cantilever shaft steps down from 50 mm to 40 mm diameter 150 mm out from the wall, with a fillet giving K<sub>t</sub> = 1.8. A 1 kN transverse load acts at the free end, 350 mm from the wall and 200 mm beyond the step. Where is the peak bending stress and what is its value?</p>`,
    choices: [
      "At the wall in the 50 mm section, about 28.5 MPa",
      "At the fillet in the 40 mm section, about 57.3 MPa with K<sub>t</sub> applied",
      "At the fillet, about 31.8 MPa &mdash; K<sub>t</sub> is already in it",
      "At the load point, where the transverse force is applied",
    ],
    answer: 1,
    explanation: `<p>Bending moment grows toward the wall, but section modulus jumps at the step, so both locations need checking.</p>
<p class="eq">At the step: M = 1000(0.200) = 200 N&middot;m, S = &pi;(0.040)&sup3;/32 = 6.283 &times; 10<sup>&minus;6</sup> m&sup3;</p>
<p class="eq">&sigma;<sub>nom</sub> = 31.8 MPa &rarr; &sigma;<sub>peak</sub> = K<sub>t</sub>&sigma;<sub>nom</sub> = 1.8(31.8) = <strong>57.3 MPa</strong></p>
<p class="eq">At the wall: M = 1000(0.350) = 350 N&middot;m, S = &pi;(0.050)&sup3;/32 = 1.227 &times; 10<sup>&minus;5</sup> m&sup3; &rarr; &sigma; = 28.5 MPa</p>
<p>The fillet wins by a factor of two even though its bending moment is smaller, because it combines a smaller section with a concentration factor. Nominal stress is always computed on the <em>smaller</em> adjacent section, so option 2 misses the K<sub>t</sub> that has not yet been applied.</p>
<p>For a ductile material under static load the concentration mostly redistributes by local yielding, so 57.3 MPa is conservative. Under fatigue it is the number that matters, and that is why the fix is a bigger fillet radius rather than a bigger shaft.</p>`,
  },
  {
    id: "structural-loading-q31",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 200 kg collar slides down a 3 m long, 25 mm diameter steel rod (E = 200 GPa) and drops 25 mm onto a stop flange at the bottom, as shown. What peak tensile stress does the rod see, in MPa?</p>`,
    figure: figXCollar,
    answer: 120,
    unit: "MPa",
    explanation: `<p>Model the rod as an axial spring and use the impact factor.</p>
<p class="eq">A = &pi;(0.025)&sup2;/4 = 4.909 &times; 10<sup>&minus;4</sup> m&sup2;,&nbsp;k = EA/L = 3.272 &times; 10<sup>7</sup> N/m</p>
<p class="eq">W = 200(9.81) = 1962 N &rarr; &delta;<sub>st</sub> = W/k = 0.0600 mm,&nbsp;&sigma;<sub>st</sub> = W/A = 4.00 MPa</p>
<p class="eq">n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>) = 1 + &radic;(1 + 50/0.0600) = 1 + 28.9 = 29.9</p>
<p class="eq">&sigma;<sub>peak</sub> = n&sigma;<sub>st</sub> = 29.9 &times; 4.00 = <strong>120 MPa</strong></p>
<p>A 25 mm drop multiplies the stress thirtyfold, because a stiff steel rod has almost no static deflection to absorb energy. The design lever: doubling the rod length halves k, doubles &delta;<sub>st</sub>, and drops the peak stress by roughly &radic;2. A longer, more compliant rod is a <em>better</em> impact member even though it is no stronger statically, which is why lifting rigs use rope or long tie-rods rather than short stubby links.</p>`,
  },
  {
    id: "structural-loading-q32",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Crane and hoist standards require the static load to be multiplied by a dynamic factor of roughly 1.1 to 1.6 even for slow, smooth lifting duty. What is that factor there to cover?</p>`,
    choices: [
      "Corrosion and wear of the rope over the crane's service life",
      "Scatter in the breaking strength of the individual wires",
      "The weight of the rope and hook block, normally left out",
      "The snatch load as the sling goes taut and the mass lifts",
    ],
    answer: 3,
    explanation: `<p>The rope goes slack-to-taut at the moment of pick-up. The hoist is already moving, so it must accelerate the mass from rest, and rope tension is W(1 + a/g) plus whatever the resulting oscillation adds. Even a gentle lift produces a measurable overshoot; a fast hoist or a swinging load produces much more.</p>
<p>Material scatter and corrosion are real, but they are handled on the <em>strength</em> side of the equation, by the rope safety factor and by inspection intervals. The dynamic factor belongs on the <em>load</em> side, which is why the two are quoted separately and multiply rather than substitute.</p>
<p>A useful general pattern: any time the load is applied by something that can move, the static weight is a lower bound. Lifts, drops, elevator emergency stops and vehicle pothole strikes are all sized this way.</p>`,
  },
  {
    id: "structural-loading-q33",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 60 kg battery pack is bolted to a chassis by four M8 bolts in two rows 300 mm apart, as shown. It must survive 20 g vertical (upward, so the bolts take it in tension) and 10 g lateral applied simultaneously, with the CG 80 mm above the bolt plane. Find the tension in the most heavily loaded bolt, in kN.</p>`,
    figure: figXPack,
    answer: 3.73,
    unit: "kN",
    explanation: `<p>Two contributions superpose: the direct pull-off, and the overturning couple created by the lateral load acting above the bolt plane.</p>
<p class="eq">Vertical: F = 60(9.81)(20) = 11 772 N &rarr; 11 772/4 = 2943 N per bolt</p>
<p class="eq">Lateral: F = 60(9.81)(10) = 5886 N at 80 mm &rarr; M = 5886(0.080) = 471 N&middot;m</p>
<p class="eq">Couple across the 300 mm spacing: 471/0.300 = 1570 N per row, shared by two bolts &rarr; 785 N each</p>
<p class="eq">T<sub>max</sub> = 2943 + 785 = 3728 N = <strong>3.73 kN</strong></p>
<p>The CG height is what makes this an engineering question rather than arithmetic. With the CG in the bolt plane the lateral load would be pure shear and the tension would be 2.94 kN; raising the pack 80 mm adds 27% to the critical bolt. Two more things: the lateral 5886 N is still there as shear and must be carried by friction or by bolt bearing, and the load direction should be swept, because a lateral load the other way loads the other row.</p>`,
  },
  {
    id: "structural-loading-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>The 60 mm &times; 120 mm column section shown carries a compressive load offset 40 mm from the centroid along the 120 mm axis. Where does the neutral axis sit?</p>`,
    figure: figXNA,
    choices: [
      "30 mm from the centroid, on the side away from the load",
      "20 mm from the centroid, where the kern limit h/6 sits",
      "40 mm from the centroid, mirroring the eccentricity exactly",
      "Outside the section, so the whole face stays in compression",
    ],
    answer: 0,
    explanation: `<p>The neutral axis is where the uniform and bending terms cancel:</p>
<p class="eq">P/A = P e y/I &rarr; y<sub>NA</sub> = I/(Ae) = r&sup2;/e</p>
<p class="eq">r&sup2; = I/A = h&sup2;/12 = (0.120)&sup2;/12 = 1.20 &times; 10<sup>&minus;3</sup> m&sup2;</p>
<p class="eq">y<sub>NA</sub> = 1.20 &times; 10<sup>&minus;3</sup>/0.040 = 0.030 m = <strong>30 mm</strong> from the centroid, away from the load</p>
<p>So the far 30 mm of the section is in tension and the neutral axis is 30 mm inside the far face. The kern cross-checks it: h/6 = 20 mm and e = 40 mm exceeds it, so tension must exist, which rules out the last option.</p>
<p>Note the inverse relationship. y<sub>NA</sub> = r&sup2;/e, so a <em>smaller</em> eccentricity pushes the neutral axis <em>further</em> out. At exactly e = h/6 = 20 mm it lands on the far face and the section is on the verge of tension; below that it leaves the section entirely and everything stays in compression.</p>`,
  },
  {
    id: "structural-loading-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 25 kg gearbox hangs off the side of a frame on a bracket. The specification says the machine must survive shipping, quoted as a 3 g vertical environment, and in service the gearbox reaction pulses between 0 and 900 N vertically at 4 Hz. Treating the bracket as a series load path, what is the largest vertical force the bracket has to carry, in N? (g = 9.81 m/s&sup2;)</p>`,
    answer: 1145,
    unit: "N",
    tolerance: 0.02,
    explanation: `<p>Two independent load cases, and the job is working out which one bounds the bracket rather than adding them.</p>
<p class="eq">Shipping: F = m &middot; 3g = 25 &times; 3 &times; 9.81 = <strong>736 N</strong> (dead weight, machine not running)</p>
<p class="eq">Service: F = mg + P<sub>max</sub> = 25(9.81) + 900 = 245 + 900 = <strong>1145 N</strong></p>
<p>Service governs at <strong>1145 N</strong>, 1.15 kN to three significant figures. Adding all of it, 736 + 900 = 1636 N, combines a shipping event with a running gearbox, which cannot happen. Quoting 900 N leaves out the static weight the reaction sits on top of, since the pulse swings 0 to 900 N <em>about</em> a bracket already carrying 245 N.</p>
<p>What the stress check actually needs is not one number but two rows: 1145 N applied once and treated statically, and a 900 N range at 4 Hz, roughly 1.3 &times; 10<sup>9</sup> cycles over a ten-year life, which is a completely different check on the same bracket. Reporting a single worst-case number throws away the fact that the fluctuating half of the load is what will decide the design.</p>`,
  },
  {
    id: "structural-loading-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A cylinder of 400 mm internal diameter and 8 mm wall carries 3 MPa internal pressure and simultaneously a 300 kN axial tensile pull from the attached piping. What is the von Mises stress in the cylindrical wall?</p>`,
    choices: ["66.8 MPa", "71.3 MPa", "75.0 MPa", "104.3 MPa"],
    answer: 1,
    explanation: `<p>Build the biaxial stress state one component at a time, with r = 0.200 m and t = 0.008 m.</p>
<p class="eq">&sigma;<sub>hoop</sub> = pr/t = 75.0 MPa&nbsp;&nbsp;&nbsp;&sigma;<sub>long,p</sub> = pr/2t = 37.5 MPa</p>
<p class="eq">Wall area &asymp; &pi;D<sub>mean</sub>t = &pi;(0.408)(0.008) = 1.025 &times; 10<sup>&minus;2</sup> m&sup2;</p>
<p class="eq">&sigma;<sub>long,axial</sub> = 300 000/1.025 &times; 10<sup>&minus;2</sup> = 29.3 MPa &rarr; &sigma;<sub>long</sub> = 37.5 + 29.3 = 66.8 MPa</p>
<p class="eq">&sigma;&prime; = &radic;(75.0&sup2; &minus; 75.0(66.8) + 66.8&sup2;) = &radic;5077 = <strong>71.3 MPa</strong></p>
<p>The result is <em>lower</em> than the largest principal stress of 75 MPa, which is the whole point. Balanced biaxial tension produces little distortion, so von Mises falls below the peak principal, and at &sigma;<sub>1</sub> = &sigma;<sub>2</sub> exactly it equals them. Adding the two stresses to get 104 MPa is the common error, and using hoop alone at 75 MPa ignores the axial load.</p>`,
  },
  {
    id: "structural-loading-q37",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A fitting has a limit load of 10 kN and an ultimate factor of 1.5, so its ultimate load is 15 kN. Test shows it first yields at 12 kN and ruptures at 16 kN. Does it pass, and how comfortable is it?</p>`,
    choices: [
      "It fails: yielding at 12 kN is below the 15 kN ultimate load",
      "It fails: the margin over the 10 kN limit load is only 20%",
      "It passes comfortably, with 60% margin on ultimate load",
      "It passes both, but the ultimate margin is only 6.7%",
    ],
    answer: 3,
    explanation: `<p class="eq">Limit: no yielding below 10 kN. Yield at 12 kN &rarr; margin = 12/10 &minus; 1 = 20% &#10003;</p>
<p class="eq">Ultimate: no rupture below 15 kN. Rupture at 16 kN &rarr; margin = 16/15 &minus; 1 = <strong>6.7%</strong> &#10003;</p>
<p>The two criteria are separate and both are met, so the first two options are wrong. But 6.7% on ultimate is thin: it is inside the scatter band of most material lots and inside the tolerance band of most machined features, so a lot change or a low-side dimension could flip it. Passes on paper, no real margin on the ultimate case.</p>
<p>Note that yielding at 12 kN is <em>allowed</em> in the ultimate case. Permanent set is acceptable at ultimate load and only rupture is not. Reading the ultimate criterion as if it forbade yielding is the mistake behind the first option, and the most common misunderstanding of limit-versus-ultimate practice.</p>`,
  },
  {
    id: "structural-loading-q38",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A cylindrical vessel is fabricated with a longitudinal seam weld of 80% joint efficiency and girth welds of only 60% efficiency. Given the same allowable stress S, which weld sets the required wall thickness?</p>`,
    choices: [
      "The seam still governs: t = pr/0.8S exceeds the girth weld's t = pr/1.2S",
      "The girth weld governs, since 0.6 efficiency is the lower",
      "Joint efficiency applies only to the heads, so neither changes",
      "They govern equally once the efficiencies are applied",
    ],
    answer: 0,
    explanation: `<p>Set the required thickness from each stress with its own efficiency E in the denominator.</p>
<p class="eq">Longitudinal seam (carries hoop, pr/t): t = pr/(SE) = pr/(0.8S) = 1.25 pr/S</p>
<p class="eq">Girth weld (carries longitudinal, pr/2t): t = pr/(2SE) = pr/(1.2S) = 0.833 pr/S</p>
<p>The seam demands 1.25/0.833 = 1.5 times as much wall, so it still governs despite having the <em>better</em> joint efficiency. The 2:1 stress ratio is simply bigger than the 0.8:0.6 efficiency ratio.</p>
<p>Working out the threshold is the useful part: the girth weld only takes over when its efficiency drops below half the seam&rsquo;s. That is why ASME-style rules let girth welds be spot-radiographed while insisting on full radiography of longitudinal seams.</p>`,
  },
  {
    id: "structural-loading-q39",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A thick steel plate is quenched so that its surface sits 150 &deg;C cooler than the plate mean temperature. Taking E = 200 GPa, &alpha; = 12 &times; 10<sup>&minus;6</sup>/&deg;C and &nu; = 0.3, estimate the surface stress, in MPa.</p>`,
    answer: 514,
    unit: "MPa",
    explanation: `<p>No external restraint is needed here. The cold surface layer wants to contract and the hot bulk beneath will not let it, so the part restrains itself. Because the surface is restrained in <em>both</em> in-plane directions, the biaxial form applies:</p>
<p class="eq">&sigma; = E&alpha;&Delta;T/(1 &minus; &nu;) = (200 &times; 10<sup>9</sup>)(12 &times; 10<sup>&minus;6</sup>)(150)/0.7</p>
<p class="eq">&sigma; = 360/0.7 = <strong>514 MPa</strong> tensile at the surface</p>
<p>That exceeds the yield strength of most structural steels, which is why quench cracking happens and why the surface ends up with residual stress after the transient. The uniaxial form gives 360 MPa, and the 1/(1 &minus; &nu;) factor of 1.43 from biaxial constraint is routinely forgotten.</p>
<p>The general statement is worth carrying: a temperature <em>gradient</em> generates stress with no fixture at all, so &ldquo;the part is free to expand&rdquo; is not a defence against thermal stress. Mitigate by slowing the quench, using a less severe medium, or choosing a material with lower &alpha;E.</p>`,
  },
  {
    id: "structural-loading-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 40 kN load is carried by two struts side by side between the same pair of rigid platens, both 500 mm long. One is steel (E = 200 GPa, A = 300 mm&sup2;), the other aluminium (E = 69 GPa, A = 600 mm&sup2;). How much load does the steel strut take?</p>`,
    choices: [
      "20.0 kN &mdash; the load divides evenly between two members",
      "13.3 kN &mdash; the load divides in proportion to area",
      "23.7 kN &mdash; parallel paths divide load in proportion to stiffness EA/L",
      "40.0 kN &mdash; the stiffer path carries all of it until yield",
    ],
    answer: 2,
    explanation: `<p>Rigid platens force both struts to the same shortening, so this is a parallel load path and load divides by stiffness.</p>
<p class="eq">k<sub>steel</sub> = EA/L = (200 &times; 10<sup>9</sup>)(300 &times; 10<sup>&minus;6</sup>)/0.5 = 120 MN/m</p>
<p class="eq">k<sub>Al</sub> = (69 &times; 10<sup>9</sup>)(600 &times; 10<sup>&minus;6</sup>)/0.5 = 82.8 MN/m</p>
<p class="eq">F<sub>steel</sub> = 40 &times; 120/(120 + 82.8) = <strong>23.7 kN</strong>&nbsp;&nbsp;(aluminium takes 16.3 kN)</p>
<p>The aluminium strut has twice the area and carries less load, because stiffness is EA and steel&rsquo;s modulus is nearly three times higher. Splitting by area gives 13.3 kN.</p>
<p>In a parallel path, load follows stiffness, not strength. Add a stiff bracket alongside a compliant one hoping to share the load and the stiff one takes almost all of it and fails first. Genuine load sharing means matching stiffnesses, not areas.</p>`,
  },
  {
    id: "structural-loading-q41",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A cantilever tube is welded to a base plate at its root. FEA reports the peak stress at the weld toe. You double the tube wall thickness, which roughly doubles its section modulus, but the reported peak stress falls only 15%. What is going on?</p>`,
    choices: [
      "Bending stress goes as 1/t, so doubling the wall can only halve it",
      "The critical link is the weld at the root, which is unchanged",
      "The extra wall doubles the weight, and self-load cancels the gain",
      "The tube is in torsion, where the wall barely changes J",
    ],
    answer: 1,
    explanation: `<p>If the tube wall really were the critical section, doubling the section modulus would cut the stress by nearly half. A 15% drop says the reported peak is not a tube-wall bending stress at all. It is a local weld-toe stress governed by the weld geometry, the base-plate bending and the notch at the toe, none of which you changed.</p>
<p>The extra wall thickness sits <em>off</em> the governing link in the load path. It reduces the nominal stress feeding the notch a little, which is where the 15% comes from, and the concentration plus the plate flexibility still dominate.</p>
<p>Change the thing that governs: increase the weld throat, grind or dress the toe to soften the notch, add a transition collar or a doubler under the weld, or stiffen the base plate so it stops bending. The general form is worth saying out loud. <em>Whenever a design change produces far less improvement than the geometry predicts, the critical location is somewhere you did not touch.</em></p>`,
  },
  {
    id: "structural-loading-q42",
    type: "mc",
    difficulty: 2,
    prompt: `<p>The hollow shaft shown has 60 mm outside and 40 mm inside diameter and carries a 1.2 kN&middot;m torque together with a 900 N&middot;m bending moment. What is the von Mises stress on the outer surface at the extreme bending fibre?</p>`,
    figure: figXHollow,
    choices: ["52.9 MPa", "63.6 MPa", "80.8 MPa", "88.1 MPa"],
    answer: 2,
    explanation: `<p>Section properties for a hollow round:</p>
<p class="eq">J = &pi;(D&#8308; &minus; d&#8308;)/32 = &pi;(0.060&#8308; &minus; 0.040&#8308;)/32 = 1.021 &times; 10<sup>&minus;6</sup> m&#8308;,&nbsp;I = J/2 = 5.105 &times; 10<sup>&minus;7</sup> m&#8308;</p>
<p class="eq">&sigma; = Mc/I = 900(0.030)/(5.105 &times; 10<sup>&minus;7</sup>) = 52.9 MPa</p>
<p class="eq">&tau; = Tr/J = 1200(0.030)/(1.021 &times; 10<sup>&minus;6</sup>) = 35.3 MPa</p>
<p class="eq">&sigma;&prime; = &radic;(52.9&sup2; + 3 &times; 35.3&sup2;) = &radic;6527 = <strong>80.8 MPa</strong></p>
<p>Every distractor is a specific error: 52.9 MPa drops the torsion, 88.1 MPa adds &sigma; and &tau; arithmetically, and 63.6 MPa uses &radic;(&sigma;&sup2; + &tau;&sup2;) and loses the factor 3 on shear.</p>
<p>Notice how efficient the hollow section is. Removing the inner 40 mm takes away 44% of the area and only 20% of J, because the removed material sat close to the axis where its lever arm was small. That is the whole argument for tubular driveshafts.</p>`,
  },
  {
    id: "structural-loading-q43",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A stiff welded machine frame is bolted to a concrete floor at four feet. Over a year one corner of the floor settles 2 mm. The frame corner stiffness is about 20 MN/m. What is the consequence?</p>`,
    choices: [
      "Tens of kN redistribute diagonally; the settled corner can lift clear",
      "Nothing: the bolts stretch elastically and take up the movement",
      "The concrete cracks before the frame does, so no extra load arrives",
      "Frame stress tracks machine weight, which the settlement leaves alone",
    ],
    answer: 0,
    explanation: `<p>A four-point mount on a rigid frame is over-constrained, because three points already define a plane and the fourth is redundant. Settlement is an <em>imposed displacement</em>, and a stiff structure converts displacement into force. The scale comes straight from the stiffness:</p>
<p class="eq">k&delta; = (20 &times; 10<sup>6</sup>)(0.002) = 40 kN</p>
<p>That is the force needed to pull one foot down 2 mm if the other three were rigid. Model all four feet as springs on a rigid frame for the sharper picture. Let the frame settle into a plane u = a + bx + cy and impose &Sigma;&Delta;F = &Sigma;&Delta;M<sub>x</sub> = &Sigma;&Delta;M<sub>y</sub> = 0 with the ground under one corner dropping &delta;. The solution is a = b = c = &delta;/4, giving</p>
<p class="eq">&Delta;F = &plusmn;k&delta;/4 = &plusmn;10 kN per foot</p>
<p>and the pattern is diagonal rather than adjacent: <strong>the settled foot and the foot diagonally opposite it both shed load</strong>, while the other diagonal pair picks it up. That is the wobbly-table result. The frame rocks about the diagonal joining the two feet that gain load, and either of the unloading feet can lift clear. Expect the real number between the 10 kN per-foot redistribution and the 40 kN rigid-tripod bound, depending on how stiff the frame is against the floor.</p>
<p>Two things make this counter-intuitive. The load is independent of the machine&rsquo;s weight, coming entirely from the geometry mismatch. And <em>stiffening</em> the frame makes it worse, because &Delta;F goes as k. On a machine tool the twist destroys geometric accuracy long before anything breaks. The cures are all about constraint: a genuine three-point mount, levelling feet or shims re-set periodically, or deliberately compliant mounts at the redundant corners.</p>`,
  },
  {
    id: "structural-loading-q44",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 1500 kg vehicle rolls into a bollard at 2 m/s. The bollard and its foundation behave as a linear spring of stiffness 4 MN/m, and the vehicle body is assumed rigid. What peak force does the bollard see, in kN?</p>`,
    answer: 155,
    unit: "kN",
    explanation: `<p class="eq">&frac12;mv&sup2; = &frac12;k&delta;&sup2; &rarr; &delta; = v&radic;(m/k) = 2&radic;(1500/4 &times; 10<sup>6</sup>) = 38.7 mm</p>
<p class="eq">F = k&delta; = (4 &times; 10<sup>6</sup>)(0.0387) = 155 000 N = <strong>155 kN</strong></p>
<p>All the kinetic energy goes into the spring at maximum deflection. Equivalently F = v&radic;(km) = 2&radic;(4 &times; 10<sup>6</sup> &times; 1500) = 155 kN, the more useful form because it shows the scaling: peak force goes as &radic;k and linearly with impact speed.</p>
<p>155 kN is ten times the vehicle&rsquo;s weight from a walking-pace impact, which is why bollard foundations are so substantial. The design lever is the same as every impact problem, softening the bollard or giving it stroke. Halving k cuts the force by 29% and doubles the deflection, and a plastically crushing bollard does far better still, because a constant-force crush absorbs the same energy at a much lower peak.</p>`,
  },
  {
    id: "structural-loading-q45",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A flat steel tension link is pull-tested to qualify it. It breaks at 60% of the load your hand calculation and your FEA both predicted. On the rig it was gripped through a <strong>single-shear</strong> clevis at each end, whereas on the machine it runs in double shear, and the fracture ran from the pin-hole edge across the <em>outer</em> face. Material is in spec. What is the most likely explanation?</p>`,
    choices: [
      "The pin-hole stress concentration was left out of both calculations",
      "Single shear offsets the two load lines, adding secondary bending",
      "The clevis pin bent, driving the bearing stress at the hole edge up",
      "Grip friction carried some load and unloaded the gauge section early",
    ],
    answer: 1,
    explanation: `<p>Two analyses agreeing with each other says nothing about whether either agrees with the test. They shared a model, and the model said axial. A single-shear lap does not deliver a pure axial load: the two load lines are offset by one plate thickness, so the link carries P plus a secondary moment M = P&middot;t/2 that nobody put in the spreadsheet.</p>
<p>Work out how big that is for a flat bar of width b and thickness t:</p>
<p class="eq">&sigma;<sub>bend</sub>/&sigma;<sub>axial</sub> = (Mc/I)/(P/A) = [P(t/2)(t/2)&middot;12/(bt&sup3;)] / [P/(bt)] = <strong>3</strong></p>
<p>A completely unrestrained single-shear joint therefore quadruples the peak stress and would break the link at 25% of the axial prediction. A real clevis restrains the rotation partly, so landing at 60% is exactly the band you would expect, and the crack running across the <em>outer</em> face is the tell, because that is the tension face of the secondary bending.</p>
<p>The others do not fit. A missed hole K<sub>t</sub> would put the crack at the hole, is usually already in both calculations, and would not care which face. A bent pin raises bearing stress at the hole bore, giving elongation and galling rather than a clean transverse fracture. Grip friction unloading the section would make the article fail <em>high</em>, not low. The fix is procedural before it is structural: test in the configuration the hardware actually uses, or add a doubler at the grip so the load lines are collinear.</p>`,
  },
];

export default extra;
