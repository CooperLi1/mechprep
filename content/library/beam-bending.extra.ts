import type { Question } from "../types";

// ---------------------------------------------------------------------------
// Figures for the beam-bending extra bank. SVG element ids are prefixed
// "bbNN-" so they stay unique across the whole app.
// ---------------------------------------------------------------------------

const figQ21 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Cast-iron T-section under a sagging moment</text>
  <!-- flange 120 x 20 (scale 1.1) -->
  <rect x="144" y="48" width="132" height="22" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- stem 20 x 100 -->
  <rect x="199" y="70" width="22" height="110" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- neutral axis at 37.3 mm below the top: y = 48 + 1.1(37.3) = 89 -->
  <line x1="120" y1="89" x2="310" y2="89" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="316" y="93" text-anchor="start" fill="#1d4ed8" font-size="12">N.A. (locate it)</text>
  <text x="330" y="60" text-anchor="middle" fill="#1d4ed8" font-size="12">compression</text>
  <text x="330" y="170" text-anchor="middle" fill="#dc2626" font-size="12">tension</text>
  <!-- width dim -->
  <line x1="144" y1="36" x2="276" y2="36" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="30" x2="144" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="276" y1="30" x2="276" y2="42" stroke="#64748b" stroke-width="1"/>
  <text x="128" y="40" text-anchor="end" fill="#64748b" font-size="12">120 mm</text>
  <!-- flange thickness -->
  <line x1="128" y1="48" x2="128" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="122" y1="48" x2="134" y2="48" stroke="#64748b" stroke-width="1"/>
  <line x1="122" y1="70" x2="134" y2="70" stroke="#64748b" stroke-width="1"/>
  <text x="116" y="63" text-anchor="end" fill="#64748b" font-size="12">20 mm</text>
  <!-- stem height -->
  <line x1="176" y1="70" x2="176" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="70" x2="182" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="180" x2="182" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="164" y="130" text-anchor="end" fill="#64748b" font-size="12">100 mm</text>
  <!-- stem width -->
  <line x1="199" y1="204" x2="221" y2="204" stroke="#64748b" stroke-width="1"/>
  <line x1="199" y1="198" x2="199" y2="210" stroke="#64748b" stroke-width="1"/>
  <line x1="221" y1="198" x2="221" y2="210" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="226" text-anchor="middle" fill="#64748b" font-size="12">20 mm</text>
</svg>`;

const figQ29 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bb29-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Screws must carry the shear flow between flange and web</text>
  <!-- cross-section, left -->
  <rect x="48" y="52" width="120" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="88" y="82" width="40" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="88" y1="82" x2="128" y2="82" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="108" cy="67" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="105" y1="64" x2="111" y2="70" stroke="#334155" stroke-width="1"/>
  <line x1="38" y1="122" x2="182" y2="122" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <text x="36" y="126" text-anchor="end" fill="#64748b" font-size="12">N.A.</text>
  <text x="180" y="80" text-anchor="start" fill="#dc2626" font-size="12">interface</text>
  <text x="108" y="205" text-anchor="middle" fill="#334155" font-size="12">cross-section</text>
  <text x="108" y="222" text-anchor="middle" fill="#64748b" font-size="12">Q = 30,000 mm&#179;</text>
  <text x="108" y="238" text-anchor="middle" fill="#64748b" font-size="12">I = 12&#215;10&#8310; mm&#8308;</text>
  <!-- elevation, right -->
  <rect x="245" y="52" width="180" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="245" y="78" width="180" height="72" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="245" y1="78" x2="425" y2="78" stroke="#dc2626" stroke-width="2"/>
  <circle cx="265" cy="65" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="305" cy="65" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="345" cy="65" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="385" cy="65" r="4" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="265" y1="172" x2="305" y2="172" stroke="#64748b" stroke-width="1" marker-end="url(#bb29-dim)"/>
  <line x1="265" y1="166" x2="265" y2="178" stroke="#64748b" stroke-width="1"/>
  <line x1="305" y1="166" x2="305" y2="178" stroke="#64748b" stroke-width="1"/>
  <text x="285" y="193" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">spacing s = ?</text>
  <text x="335" y="205" text-anchor="middle" fill="#334155" font-size="12">side elevation</text>
  <text x="335" y="222" text-anchor="middle" fill="#64748b" font-size="12">each screw carries 800 N</text>
  <text x="335" y="238" text-anchor="middle" fill="#64748b" font-size="12">V = 10 kN at this section</text>
</svg>`;

const figQ33 = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Built-up I-section welded from three plates (drawn to scale)</text>
  <rect x="160" y="42" width="80" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="196" y="54" width="8" height="120" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="160" y="174" width="80" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="130" y1="114" x2="300" y2="114" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="306" y="118" text-anchor="start" fill="#1d4ed8" font-size="12">N.A. (symmetric)</text>
  <!-- flange width -->
  <line x1="160" y1="30" x2="240" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="24" x2="160" y2="36" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="24" x2="240" y2="36" stroke="#64748b" stroke-width="1"/>
  <text x="256" y="34" text-anchor="start" fill="#64748b" font-size="12">80 &#215; 12 flange</text>
  <!-- web -->
  <text x="188" y="118" text-anchor="end" fill="#64748b" font-size="12">web 8 &#215; 120</text>
  <!-- overall depth -->
  <line x1="122" y1="42" x2="122" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="42" x2="128" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="186" x2="128" y2="186" stroke="#64748b" stroke-width="1"/>
  <text x="112" y="118" text-anchor="end" fill="#64748b" font-size="12">144 mm</text>
  <text x="230" y="212" text-anchor="middle" fill="#64748b" font-size="12">bending about the horizontal (strong) axis, dimensions in mm</text>
</svg>`;

const figQ45 = `<svg viewBox="0 0 460 235" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Rectangular box section, 8 mm wall all round</text>
  <path d="M160,45 H241 V180 H160 Z M171,56 H230 V169 H171 Z" fill="#dbeafe" fill-rule="evenodd" stroke="#334155" stroke-width="1.5"/>
  <line x1="130" y1="112" x2="300" y2="112" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="306" y="116" text-anchor="start" fill="#1d4ed8" font-size="12">N.A. at mid-depth</text>
  <line x1="160" y1="33" x2="241" y2="33" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="27" x2="160" y2="39" stroke="#64748b" stroke-width="1"/>
  <line x1="241" y1="27" x2="241" y2="39" stroke="#64748b" stroke-width="1"/>
  <text x="144" y="37" text-anchor="end" fill="#64748b" font-size="12">60 mm</text>
  <line x1="122" y1="45" x2="122" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="45" x2="128" y2="45" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="180" x2="128" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="112" y="116" text-anchor="end" fill="#64748b" font-size="12">100 mm</text>
  <line x1="171" y1="196" x2="230" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="171" y1="190" x2="171" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="190" x2="230" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="246" y="200" text-anchor="start" fill="#64748b" font-size="12">void 44 &#215; 84</text>
  <text x="230" y="224" text-anchor="middle" fill="#64748b" font-size="12">outer and inner rectangles share the same centroid</text>
</svg>`;

const figQ61 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Shaded area above the neutral axis is what goes into Q</text>
  <!-- flanges 100x15, web 10x150, depth 180 (scale 1.0), centred at x = 170 -->
  <rect x="120" y="40" width="100" height="15" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="165" y="55" width="10" height="75" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="165" y="130" width="10" height="75" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="205" width="100" height="15" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="100" y1="130" x2="330" y2="130" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="6 4"/>
  <text x="96" y="134" text-anchor="end" fill="#1d4ed8" font-size="12">N.A.</text>
  <!-- lever arms -->
  <line x1="240" y1="47" x2="240" y2="130" stroke="#dc2626" stroke-width="1"/>
  <line x1="234" y1="47" x2="246" y2="47" stroke="#dc2626" stroke-width="1"/>
  <line x1="234" y1="130" x2="246" y2="130" stroke="#dc2626" stroke-width="1"/>
  <text x="252" y="90" text-anchor="start" fill="#dc2626" font-size="12">82.5 mm to the flange centroid</text>
  <line x1="196" y1="55" x2="196" y2="130" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="202" y="152" text-anchor="start" fill="#dc2626" font-size="12">37.5 mm to the half-web centroid</text>
  <!-- dims -->
  <line x1="120" y1="30" x2="220" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="24" x2="120" y2="36" stroke="#64748b" stroke-width="1"/>
  <line x1="220" y1="24" x2="220" y2="36" stroke="#64748b" stroke-width="1"/>
  <text x="104" y="34" text-anchor="end" fill="#64748b" font-size="12">100 &#215; 15</text>
  <text x="158" y="185" text-anchor="end" fill="#64748b" font-size="12">web 10 &#215; 150</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">total depth 180 mm; internal shear V = 60 kN</text>
</svg>`;

const figQ62 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Bending and shear stress on the same I-section</text>
  <!-- section -->
  <rect x="52" y="50" width="86" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="88" y="63" width="14" height="104" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="52" y="167" width="86" height="13" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="42" y1="115" x2="150" y2="115" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <circle cx="95" cy="50" r="4" fill="#dc2626"/>
  <text x="95" y="42" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">1</text>
  <circle cx="95" cy="63" r="4" fill="#dc2626"/>
  <text x="118" y="72" text-anchor="start" fill="#dc2626" font-weight="600" font-size="12">2</text>
  <circle cx="95" cy="115" r="4" fill="#dc2626"/>
  <text x="118" y="112" text-anchor="start" fill="#dc2626" font-weight="600" font-size="12">3</text>
  <!-- bending profile -->
  <line x1="228" y1="50" x2="228" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="188" y1="50" x2="268" y2="180" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="228" y="200" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&#963; = My/I</text>
  <text x="228" y="218" text-anchor="middle" fill="#64748b" font-size="12">peaks at the faces</text>
  <!-- shear profile -->
  <line x1="360" y1="50" x2="360" y2="180" stroke="#64748b" stroke-width="1"/>
  <path d="M360,50 L366,63 L400,63 Q426,115 400,167 L366,167 L360,180" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="360" y="200" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&#964; = VQ/It</text>
  <text x="360" y="218" text-anchor="middle" fill="#64748b" font-size="12">peaks at the N.A.</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">points 1, 2 and 3 are the top face, the web junction and the neutral axis</text>
</svg>`;

const figQ63 = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same area, same mass per metre &#8212; drawn to scale</text>
  <circle cx="130" cy="112" r="40" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="112" x2="190" y2="112" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="90" y1="72" x2="170" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="66" x2="90" y2="78" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="66" x2="170" y2="78" stroke="#64748b" stroke-width="1"/>
  <text x="130" y="60" text-anchor="middle" fill="#64748b" font-size="12">&#8960;40 solid</text>
  <text x="130" y="180" text-anchor="middle" fill="#334155" font-size="12">A = 1257 mm&#178;</text>
  <text x="130" y="198" text-anchor="middle" fill="#64748b" font-size="12">solid round bar</text>
  <circle cx="320" cy="112" r="60" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="320" cy="112" r="45" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="240" y1="112" x2="400" y2="112" stroke="#64748b" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="260" y1="42" x2="380" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="36" x2="260" y2="48" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="36" x2="380" y2="48" stroke="#64748b" stroke-width="1"/>
  <text x="320" y="32" text-anchor="middle" fill="#64748b" font-size="12">&#8960;60 outside</text>
  <text x="320" y="192" text-anchor="middle" fill="#334155" font-size="12">A = 1257 mm&#178;</text>
  <text x="320" y="210" text-anchor="middle" fill="#64748b" font-size="12">tube, 7.64 mm wall</text>
</svg>`;

const figQ68 = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="bb68-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="bb68-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Wall moment resolved into a bolt-pair couple</text>
  <!-- wall -->
  <line x1="80" y1="40" x2="80" y2="200" stroke="#334155" stroke-width="2"/>
  <line x1="66" y1="56" x2="80" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="86" x2="80" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="116" x2="80" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="146" x2="80" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="176" x2="80" y2="162" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="200" x2="80" y2="186" stroke="#64748b" stroke-width="1"/>
  <!-- base plate -->
  <rect x="80" y="60" width="16" height="120" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <!-- bracket arm -->
  <rect x="96" y="112" width="230" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- bolts -->
  <circle cx="88" cy="72" r="5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="88" cy="168" r="5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <text x="104" y="68" text-anchor="start" fill="#1d4ed8" font-size="12">top row: 2 bolts in tension</text>
  <text x="104" y="188" text-anchor="start" fill="#64748b" font-size="12">bottom row bears on the wall</text>
  <!-- tension arrows -->
  <line x1="88" y1="72" x2="88" y2="42" stroke="#1d4ed8" stroke-width="2" marker-end="url(#bb68-rxn)"/>
  <!-- pattern dimension -->
  <line x1="52" y1="72" x2="52" y2="168" stroke="#64748b" stroke-width="1"/>
  <line x1="46" y1="72" x2="58" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="46" y1="168" x2="58" y2="168" stroke="#64748b" stroke-width="1"/>
  <text x="42" y="124" text-anchor="end" fill="#64748b" font-size="12">120 mm</text>
  <!-- applied moment -->
  <text x="330" y="90" text-anchor="middle" fill="#dc2626" font-weight="600">M = 400 N&#183;m</text>
  <line x1="330" y1="96" x2="330" y2="106" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bb68-load)"/>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">four bolts: two in the top row, two in the bottom row</text>
</svg>`;

const extra: Question[] = [
  {
    id: "beam-bending-q19",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A hollow circular tube has outside diameter 40 mm and inside diameter 30 mm. It carries a bending moment of 120 N&middot;m. Estimate the maximum bending stress in MPa.</p>",
    answer: 27.9,
    unit: "MPa",
    explanation: "<p>For a tube:</p><p class=\"eq\">I = &pi;(d<sub>o</sub><sup>4</sup> &minus; d<sub>i</sub><sup>4</sup>)/64 = &pi;(40<sup>4</sup> &minus; 30<sup>4</sup>)/64 = &pi;(2,560,000 &minus; 810,000)/64 = 85,900 mm<sup>4</sup></p><p>The outer fibre distance is c = 20 mm, so S = I/c:</p><p class=\"eq\">S = 85,900/20 = 4295 mm<sup>3</sup></p><p class=\"eq\">&sigma; = M/S = 120,000 N&middot;mm / 4295 mm<sup>3</sup> = <strong>27.9 MPa</strong></p><p>Two ways to get it wrong: using the inside radius for c (c is always the distance to the <em>outermost</em> fibre, 20 mm), and subtracting diameters instead of fourth powers, since &pi;(40 &minus; 30)<sup>4</sup>/64 is meaningless. Note how little the removed core cost: the solid 40 mm bar has I = 126,000 mm<sup>4</sup>, so drilling out 56% of the area lost only 32% of the stiffness. Tubes are efficient for exactly that reason, but a 5 mm wall still needs checks for local denting, ovalisation, weld quality, and crushing at clamps.</p>",
  },
  {
    id: "beam-bending-q20",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A rectangular steel tube is accidentally installed rotated 90&deg;, so its shallow dimension is vertical and it bends about its weak axis. What changes most directly?</p>",
    choices: [
      "Stress and deflection rise: I and S are smaller that way",
      "Only the mass per metre changes, since the area is unchanged",
      "Nothing changes elastically, because the material is isotropic",
      "Deflection rises, but the peak bending stress is unaffected",
    ],
    answer: 0,
    explanation: "<p>Bending cares about where the area sits relative to the bending axis, not how much area there is. Rotating a rectangular tube swaps b and h, so I drops by (h/b)<sup>2</sup> and S by (h/b). For a 50 &times; 100 tube that is 4&times; the deflection and 2&times; the stress from a single assembly mistake, at identical mass.</p><p>The unchanged-area answer is axial-load thinking misapplied to bending: in tension only A matters, in bending the distribution is everything. Isotropy is irrelevant, since the material properties did not change and the geometry did. And stress and deflection move together here, because both derive from the same section: &sigma; = M/S and &delta; &prop; 1/I.</p><p>In a real design review this error also raises questions the stress number alone will not catch: the weak-axis orientation is far more prone to lateral-torsional buckling, and the bolt pattern or bracket that introduces the load may no longer align with the intended stiff direction.</p>",
  },
  {
    id: "beam-bending-q21",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The cast-iron T-section shown has a top flange 120 &times; 20 mm and a stem 20 &times; 100 mm below it, for a total depth of 120 mm. Cast iron allowables: <strong>40 MPa in tension</strong>, 140 MPa in compression. Under a sagging moment, what is the largest moment this section can carry, in kN&middot;m?</p>",
    figure: figQ21,
    answer: 2.74,
    unit: "kN*m",
    explanation: "<p>Brittle, unsymmetric section: you must find the centroid, get I, and then check <em>both</em> extreme fibres against <em>different</em> allowables.</p><p><strong>Centroid</strong> (y measured down from the top face):</p><p class=\"eq\">Flange A = 2400 mm<sup>2</sup> at y = 10; stem A = 2000 mm<sup>2</sup> at y = 70</p><p class=\"eq\">y&#772; = (2400&middot;10 + 2000&middot;70)/4400 = 164,000/4400 = 37.3 mm from the top</p><p><strong>Second moment</strong> by the parallel axis theorem:</p><p class=\"eq\">Flange: 120(20)<sup>3</sup>/12 + 2400(27.3)<sup>2</sup> = 0.080&times;10<sup>6</sup> + 1.785&times;10<sup>6</sup> = 1.87&times;10<sup>6</sup></p><p class=\"eq\">Stem: 20(100)<sup>3</sup>/12 + 2000(32.7)<sup>2</sup> = 1.667&times;10<sup>6</sup> + 2.142&times;10<sup>6</sup> = 3.81&times;10<sup>6</sup></p><p class=\"eq\">I = 5.67&times;10<sup>6</sup> mm<sup>4</sup></p><p><strong>Two checks.</strong> Sagging puts the bottom in tension, c<sub>bot</sub> = 120 &minus; 37.3 = 82.7 mm, and the top in compression, c<sub>top</sub> = 37.3 mm:</p><p class=\"eq\">Tension: M = &sigma;I/c = 40(5.67&times;10<sup>6</sup>)/82.7 = 2.74&times;10<sup>6</sup> N&middot;mm = <strong>2.74 kN&middot;m</strong></p><p class=\"eq\">Compression: M = 140(5.67&times;10<sup>6</sup>)/37.3 = 21.3 kN&middot;m</p><p>Tension governs by a factor of 7.8, so the answer is 2.74 kN&middot;m. Checking only the compression side, the larger allowable, or only the larger c without matching each c to the right allowable. With a brittle material and an unsymmetric section, the two errors can compound into a 7&times; overestimate of capacity. Note how badly matched this section is: the material's strong direction is barely used. The obvious next question an interviewer will ask is whether the section is the right way up.</p>",
  },
  {
    id: "beam-bending-q22",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A steel strip is bonded to the tension face of an aluminium beam and the bond is perfect. In elastic bending, how should the section be analysed?</p>",
    choices: [
      "Ignore the steel: bonded layers share strain, so they share stress",
      "Transform the section: curvature is shared, but E differs, so the stress differs",
      "Average the two moduli and treat the beam as a single material",
      "Keep the neutral axis at mid-depth; bonding cannot displace it",
    ],
    answer: 1,
    explanation: "<p>A perfect bond forces both materials onto the same curvature, so strain remains linear through the whole depth and is continuous across the interface. But stress is &sigma; = E&epsilon;, and E<sub>steel</sub>/E<sub>Al</sub> &asymp; 2.9, so at the interface the steel carries roughly three times the stress of the aluminium right beside it. That jump is the whole point.</p><p>The transformed-section method handles it: replace the steel by an equivalent width n&middot;b of aluminium (n = E<sub>s</sub>/E<sub>Al</sub>), find the centroid and I of that all-aluminium section, compute stresses normally, then multiply the stresses in the transformed region by n to recover the real steel stress.</p><p>Why the others fail: shared <em>strain</em> does not mean shared <em>stress</em>, so ignoring the steel throws away both its stiffness and the fact that it is the highest-stressed material in the beam. Averaging moduli is not mechanics, because it ignores where each material sits. And adding a stiff layer to one face unavoidably pulls the neutral axis toward that face; it does not stay at mid-depth. Practical follow-ups: interface shear (the bond must carry q = VQ/I), thermal expansion mismatch, adhesive creep, and whether that steel face is on the side that actually sees tension in service.</p>",
  },
  {
    id: "beam-bending-q23",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A ductile mild-steel bar of rectangular section 50 mm wide &times; 100 mm deep is bent until the entire cross-section has yielded. What is the ratio of the fully plastic moment M<sub>p</sub> to the first-yield moment M<sub>y</sub> (the shape factor)?</p>",
    answer: 1.5,
    unit: "(dimensionless)",
    explanation: "<p>Build both moments from the two stress distributions rather than quoting a formula.</p><p><strong>First yield</strong>, with stress still linear, peaking at &sigma;<sub>y</sub> on the outer fibres:</p><p class=\"eq\">S = bh<sup>2</sup>/6 = 50(100)<sup>2</sup>/6 = 83,333 mm<sup>3</sup>, &nbsp; M<sub>y</sub> = &sigma;<sub>y</sub>S</p><p><strong>Fully plastic</strong>, where the profile has flattened into two uniform blocks at &plusmn;&sigma;<sub>y</sub>, each covering half the depth. Each block's resultant is F = &sigma;<sub>y</sub>(b&middot;h/2), acting at the centroid of its half, h/4 from the neutral axis, so the lever arm between them is h/2:</p><p class=\"eq\">M<sub>p</sub> = F(h/2) = &sigma;<sub>y</sub>(bh/2)(h/2) = &sigma;<sub>y</sub>bh<sup>2</sup>/4 &rarr; Z = 125,000 mm<sup>3</sup></p><p class=\"eq\">M<sub>p</sub>/M<sub>y</sub> = Z/S = (bh<sup>2</sup>/4)/(bh<sup>2</sup>/6) = 6/4 = <strong>1.50</strong></p><p>The 50% reserve is a pure geometry result, since &sigma;<sub>y</sub>, b and h all cancel, so every rectangle has a shape factor of 1.5. Worth knowing for comparison: a solid circle gives 1.70, and a wide-flange I-beam only about 1.12, because an I-section already has most of its material at the extreme fibres and therefore has less to gain from plastifying the middle.</p><p>Caveats to state: this reserve is only available if the material is genuinely ductile with a yield plateau, if the compression flange and web do not buckle locally first, and if the design is not fatigue- or deflection-driven, because the section is well past its elastic limit long before M<sub>p</sub> arrives.</p>",
  },
  {
    id: "beam-bending-q24",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A thin-walled channel beam carries a vertical load applied through its web centreline, but the prototype twists noticeably as it bends. What was likely missed?</p>",
    choices: [
      "An open section cannot develop a proper neutral axis, so it twists",
      "The web is redundant in a channel, so it buckles and rotates",
      "The load misses the shear centre, which for a channel lies outside the web",
      "The centroid moved because the flanges are unequal in a channel",
    ],
    answer: 2,
    explanation: "<p>Transverse load produces a shear-stress flow around the section, and the resultant of that flow passes through a specific point called the <strong>shear centre</strong>. For an open thin-walled section like a channel the shear centre lies <em>outside</em> the material, offset from the web on the side opposite the flanges. A load applied anywhere else, including through the centroid or the web centreline, is statically equivalent to a load at the shear centre plus a torque, and an open section is very weak in torsion, so you get visible twist.</p><p>Why the others are wrong: the neutral axis exists perfectly well in an open section (it is still the centroidal axis); the web is essential, carrying the shear flow that links the flanges; and the centroid is where it is regardless, since the issue is not the centroid's location but the shear centre's.</p><p>Fixes: apply the load through the shear centre with an offset bracket, switch to a closed box or tube (whose torsional stiffness is orders of magnitude higher), or add torsional restraint at the supports. This catches real hardware, because a &sigma; = Mc/I stress check can look completely safe while the assembly twists enough to jam a mechanism or fatigue a joint.</p>",
  },
  {
    id: "beam-bending-q26",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A crane hook has a thick, sharply curved cross-section. A straight-beam Mc/I estimate predicts acceptable stress, but cracks start at the inner radius. Why is the estimate suspect?</p>",
    choices: [
      "Curvature cancels the bending stress along the inner radius",
      "Straight-beam theory is exact at any radius for ductile steel",
      "The inner radius is nearest the centre, so it is the least loaded",
      "The neutral axis shifts inward and the stress goes hyperbolic",
    ],
    answer: 3,
    explanation: "<p>Straight-beam flexure assumes the unstressed fibres all have the same initial length, which is what makes strain linear in y. In a sharply curved member the inner fibres are much shorter than the outer ones to begin with, so equal rotation of the section imposes far more strain on them. So the stress distribution becomes <strong>hyperbolic</strong> rather than linear, and the neutral axis moves <em>inward</em> of the centroid, toward the centre of curvature.</p><p>The practical consequence is that the true inner-fibre stress can exceed the Mc/I prediction by 50% or more when the radius ratio R/c falls below about 5. That is exactly where hooks, chain links, C-frames and clamp bodies crack, and why the inner surface is the one you polish and inspect.</p><p>The replacement tool is the Winkler curved-beam formula, which locates the true neutral axis from the section's R-weighted geometry. Modern practice is FEA plus a fatigue assessment, but naming the violated assumption first is what the question is really testing. The distractors invert the risk: curvature intensifies inner-fibre stress, it does not cancel it, and being closest to the centre of curvature is precisely what makes that fibre critical.</p>",
  },
  {
    id: "beam-bending-q27",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A cantilever bracket is fixed to a wall at its left end and extends 0.80 m to the right. It carries a 5.0 kN downward load at the free end, plus a 1.0 kN&middot;m applied couple at the free end acting in the <em>same</em> rotational sense at the wall as the tip load does. What is the bending-moment magnitude at the wall, in kN&middot;m?</p>",
    answer: 5,
    unit: "kN*m",
    explanation: "<p>The wall must react the moment of the tip force plus the applied couple. Because the prompt fixes them in the same sense, the magnitudes add:</p><p class=\"eq\">M = P L + M<sub>applied</sub> = 5.0(0.80) + 1.0 = 4.0 + 1.0 = <strong>5.0 kN&middot;m</strong></p><p>Dropping the couple because it has no visible lever arm is the usual slip. A pure couple is a <em>free vector</em>: it contributes the same moment about every point in the body, so it transfers to the wall undiminished no matter where along the bracket it is applied. Move the 5 kN load and the first term changes; move the couple and nothing changes.</p><p>Get the sense wrong and you would compute 4.0 &minus; 1.0 = 3.0 kN&middot;m instead, a 40% error, which is why a real drawing or a stated sign convention matters before you touch the arithmetic. That wall moment then feeds &sigma; = M/S at the root section, and in a real bracket the weld toe or bolt group there usually carries a stress concentration that matters more than the nominal section modulus.</p>",
  },
  {
    id: "beam-bending-q28",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A long, deep I-beam passes the elastic bending check with a large margin. As the load rises, the unbraced compression flange swings sideways and the whole cross-section rotates, well before any fibre reaches yield. Which stability limit is that?</p>",
    choices: [
      "Local crippling of the compression flange outstand plate",
      "Lateral-torsional buckling of the beam as a whole",
      "Shear buckling of the web between the stiffeners",
      "Web crippling under the concentrated reaction load",
    ],
    answer: 1,
    explanation: "<p>All four are real instabilities of an I-beam, so the discriminator is the <em>shape</em> of the failure described: a global sideways sweep of the compression flange, accompanied by twist of the whole section, over an unbraced length. That is <strong>lateral-torsional buckling</strong>. Physically, the compression flange behaves like a long column but cannot move without dragging the tension flange, so the section rotates as it displaces, and the critical moment depends on the unbraced length L<sub>b</sub>, the weak-axis stiffness EI<sub>y</sub>, and the torsional stiffness GJ.</p><p>How the others differ. <strong>Flange local crippling</strong> is a short-wavelength wrinkle within the flange outstand itself, set by b/t, with no global displacement. <strong>Web shear buckling</strong> is a diagonal wrinkle field in the web panel between stiffeners, driven by V, not M, and it appears near supports. <strong>Web crippling</strong> is a local crush directly under a concentrated load or reaction. Each has its own geometric trigger, and naming the right one determines the right fix.</p><p>Fixes for LTB specifically: brace the compression flange laterally (that is what floor decking, purlins and bridging do), shorten the unbraced length, widen the flange to raise I<sub>y</sub>, restrain the ends against twist, or switch to a closed box section whose torsional stiffness is orders of magnitude higher. This is the caveat that belongs on every &quot;just make it deeper and thinner&quot; efficiency answer.</p>",
  },
  {
    id: "beam-bending-q29",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A built-up beam is made by screwing a flange plank onto a web, as shown. At the critical section the shear force is V = 10 kN, the first moment of the flange about the neutral axis is Q = 30,000 mm<sup>3</sup>, and the whole section has I = 12&times;10<sup>6</sup> mm<sup>4</sup>. Each screw can transfer 800 N in shear. What is the maximum screw spacing, in mm?</p>",
    figure: figQ29,
    answer: 32,
    unit: "mm",
    explanation: "<p>Step 1: the longitudinal shear flow the interface must carry, in newtons per millimetre of beam length.</p><p class=\"eq\">q = VQ/I = (10,000 N)(30,000 mm<sup>3</sup>)/(12&times;10<sup>6</sup> mm<sup>4</sup>) = 300&times;10<sup>6</sup>/12&times;10<sup>6</sup> = 25.0 N/mm</p><p>Step 2: each screw supplies 800 N of that flow, so it can cover a length</p><p class=\"eq\">s = F<sub>screw</sub>/q = 800/25.0 = <strong>32.0 mm</strong></p><p>That is a screw every 32 mm along the beam, far tighter than most people guess, and the reason built-up timber and steel members look so heavily fastened near the supports where V is largest. Because q &prop; V, you can open the spacing out toward midspan where the shear force falls; codes generally let you vary spacing in steps.</p><p>The physics behind the number: without the screws the two pieces slide past one another and you get two independent beams instead of one deep one. For two equal planks that is a 4&times; loss of stiffness and a 2&times; loss of strength. Under-fastening does not fail loudly. The section quietly degrades toward the unconnected value, and the beam sags far more than the calculation predicted. The classic mistake is computing a beautiful composite section modulus and never checking the load path that makes it real.</p>",
  },
  {
    id: "beam-bending-q30",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A beam is well below its allowable bending stress, but the optical payload it carries loses alignment because the beam tip rotates too much. What is the appropriate design response?</p>",
    choices: [
      "Use a higher-yield alloy of the same modulus, geometry unchanged",
      "Treat it as a stiffness limit, not a strength one: raise I or shorten the span",
      "Trim the section modulus, since the stress margin is generous",
      "Ignore rotation: bending stress is the only serviceability check",
    ],
    answer: 1,
    explanation: "<p>The requirement that failed is <em>functional</em>, not strength. Slope and deflection scale with 1/EI and with powers of the span; they do not care about yield strength at all. Swapping 6061-T6 for 7075-T6 raises the allowable by 60% and changes E by about 1%, so the payload still walks off target.</p><p>The levers that work: increase I (deeper section, closed tube, added flanges), shorten the cantilever or move the payload toward the support, improve end fixity (a fixed end cuts tip slope by a large factor over a pinned one), or re-route the load path so the member sees axial load instead of bending. Reducing the section modulus makes both problems worse. And rotation is very much a serviceability limit: for optics, 1 mrad of mirror rotation walks a reflected beam about 2 mm per metre of path.</p><p>The habit worth demonstrating is separating the two checks explicitly: strength, &sigma; = M/S against an allowable, and serviceability (deflection and slope against a functional budget). Precision hardware routinely runs stress margins of 5 or 10 and still fails alignment by microradians, which is why stiffness, not strength, sizes most metrology structures.</p>",
  },
  {
    id: "beam-bending-q31",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A beam has supports at A and B, 3 m apart, and a 1 m overhang beyond the right support B. A 6 kN downward load acts at the free tip of the overhang. If the section modulus is 90,000 mm<sup>3</sup>, estimate the maximum bending stress magnitude in MPa.</p>",
    answer: 66.7,
    unit: "MPa",
    explanation: "<p>The governing moment is not in the main span. It is the hogging moment at the right support, produced by the overhang load. Cut just right of B and take the overhang segment as a free body:</p><p class=\"eq\">M<sub>max</sub> = P a = 6 kN(1 m) = 6 kN&middot;m &nbsp;(hogging, at support B)</p><p class=\"eq\">&sigma; = M/S = 6&times;10<sup>6</sup> N&middot;mm / 90,000 mm<sup>3</sup> = <strong>66.7 MPa</strong></p><p>Between A and B the moment varies linearly from zero at A to &minus;6 kN&middot;m at B, so nothing in the span beats the support. Reflexively reaching for PL/4 with L = 3 m as if the load sat between the supports; that would give 4.5 kN&middot;m and a 50 MPa answer, unconservative and about the wrong section.</p><p>Two details worth volunteering. The tension side flips: under a hogging moment at B the <strong>top</strong> fibre is in tension, the opposite of midspan sagging, which decides where a brittle material cracks and where you would put reinforcement. And the reaction at A is downward here (6(1)/3 = 2 kN uplift), so an overhang can lift a support off its seat, which is why the far end of a cantilevered balcony beam gets a hold-down.</p>",
  },
  {
    id: "beam-bending-q33",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A symmetric built-up I-section is welded from two flange plates 80 mm &times; 12 mm and one web plate 8 mm &times; 120 mm between them, for a total depth of 144 mm. Find I about the horizontal centroidal axis, in units of 10<sup>6</sup> mm<sup>4</sup>.</p>",
    figure: figQ33,
    answer: 9.54,
    unit: "×10^6 mm^4",
    explanation: "<p>The section is symmetric, so the neutral axis is at mid-depth, 72 mm from either face, so no centroid calculation is needed. Each flange centroid sits at 72 &minus; 12/2 = 66 mm from that axis.</p><p><strong>Each flange</strong> (parallel axis theorem):</p><p class=\"eq\">I&#772;<sub>f</sub> = 80(12)<sup>3</sup>/12 = 11,520 mm<sup>4</sup></p><p class=\"eq\">A d<sup>2</sup> = (80 &times; 12)(66)<sup>2</sup> = 960(4356) = 4,181,760 mm<sup>4</sup></p><p class=\"eq\">I<sub>f</sub> = 4,193,280 mm<sup>4</sup> each, so 8,386,560 mm<sup>4</sup> for the pair</p><p><strong>Web</strong> (already centred on the neutral axis, so no transport term):</p><p class=\"eq\">I<sub>w</sub> = 8(120)<sup>3</sup>/12 = 1,152,000 mm<sup>4</sup></p><p class=\"eq\">I = 8,386,560 + 1,152,000 = 9,538,560 = <strong>9.54&times;10<sup>6</sup> mm<sup>4</sup></strong></p><p>Look at the split: the transport terms alone are 8.36&times;10<sup>6</sup>, or 88% of the total, while the flanges' own bh<sup>3</sup>/12 contributes 0.02&times;10<sup>6</sup>, or 0.2%. Forget Ad<sup>2</sup> and you get 1.18&times;10<sup>6</sup>, low by a factor of eight; that is the single most common error on built-up sections. The quick estimate I &asymp; 2A<sub>f</sub>d<sup>2</sup> + I<sub>web</sub> = 9.54&times;10<sup>6</sup> is accurate to better than 0.2% here, which is why experienced designers do this one in their head.</p>",
  },
  {
    id: "beam-bending-q34",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A team wants to cut lightening holes in a beam web. Where are holes least damaging for bending strength, and what must still be checked?</p>",
    choices: [
      "At the flange tips, where the bending stress happens to vanish",
      "Anywhere at all, because removing area cannot change bending",
      "Near the neutral axis, but check web shear, buckling and K<sub>t</sub> at the hole",
      "Only directly over the supports, where the shear force is zero",
    ],
    answer: 2,
    explanation: "<p>Bending stress is proportional to distance from the neutral axis, so material at mid-depth contributes almost nothing to the section modulus and removing it costs very little bending capacity. That is why aircraft ribs, machine frames and steel castellated beams are full of web holes.</p><p>The caveat is what separates a real answer from a textbook one. Transverse shear does the opposite: &tau; = VQ/It peaks exactly at the neutral axis, so a hole placed for minimum bending penalty sits right on the shear maximum. On top of that, every hole is a stress raiser (K<sub>t</sub> around 2&ndash;3 for a circular hole in a plate under tension), it reduces the web's resistance to shear buckling, and it interrupts the shear-flow path between the flanges.</p><p>The distractors invert the physics: flange tips are where bending stress is <em>largest</em>, so holes there are maximally damaging; and supports are where shear and bearing reactions are highest, not zero. Good detailing practice: keep holes in the middle third of the depth, use generous radii and edge distances, space them well apart, avoid regions of high shear near supports, and add reinforcing rings or doublers wherever concentrated loads enter.</p>",
  },
  {
    id: "beam-bending-q36",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A simply supported beam has a downward load at midspan. Which face is in tension at midspan, and how does that compare with a downward-loaded cantilever at its wall?</p>",
    choices: [
      "Both cases put the bottom face in tension at the critical section",
      "Both cases put the top face in tension at the critical section",
      "Midspan: top face in tension; cantilever wall: bottom in tension",
      "Midspan: bottom in tension; cantilever wall: top face in tension",
    ],
    answer: 3,
    explanation: "<p>Follow the curvature, not a memorised picture. A simply supported beam under a downward midspan load <strong>sags</strong>, curving like a smile, so the top fibres shorten and the bottom fibres stretch: tension on the bottom. A cantilever with a downward tip load <strong>hogs</strong> over its support, curving like a frown, so at the wall the top fibres stretch: tension on top.</p><p>This sign flip is a favourite quick-fire check because it connects the moment diagram to real hardware. Reinforced concrete puts rebar in the bottom of a simply supported span and in the <em>top</em> over a continuous support, for exactly this reason. It also tells you where to look for a crack, where to put a strain gauge, and which side of a weld sees the damaging tensile cycle.</p><p>The reliable trick: sketch the deflected shape first. Wherever the beam is concave up, the bottom is in tension; wherever it is concave down, the top is. Candidates who memorise one case and apply it everywhere get caught the moment an overhang or a fixed end appears.</p>",
  },
  {
    id: "beam-bending-q37",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A solid circular shaft must carry a bending moment M = 500 N&middot;m with an allowable bending stress of 100 MPa. What minimum diameter is required, in mm?</p>",
    answer: 37.1,
    unit: "mm",
    explanation: "<p>Convert the allowable stress into a required section modulus, then invert the round-section geometry.</p><p class=\"eq\">S<sub>req</sub> = M/&sigma;<sub>allow</sub> = 500,000 N&middot;mm / 100 N/mm<sup>2</sup> = 5000 mm<sup>3</sup></p><p class=\"eq\">S = &pi;d<sup>3</sup>/32 &rarr; d = (32S/&pi;)<sup>1/3</sup></p><p class=\"eq\">d = [32(5000)/&pi;]<sup>1/3</sup> = (50,930)<sup>1/3</sup> = <strong>37.1 mm</strong></p><p>Round up to a stock 40 mm bar, which gives S = 6283 mm<sup>3</sup> and &sigma; = 79.6 MPa. The cube root means small diameter increases buy a lot of capacity, and conversely that shaving diameter is expensive. A 10% diameter cut costs 27% of the strength.</p><p>The arithmetic slip is leaving M in N&middot;m while S is in mm<sup>3</sup>; that is a factor of 1000 and gives 3.7 mm. And this is only the bending check: a real shaft also sees torque (so you would combine &sigma; and &tau; through von Mises or a shaft-design code), stress concentrations at shoulders and keyways, fatigue rather than static yield as the governing mode, bearing fits, deflection at gear meshes, and critical speed.</p>",
  },
  {
    id: "beam-bending-q38",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A welded cantilever tab repeatedly cracks at the weld toe, even though the nominal root bending stress is well below yield. Which explanation is most plausible?</p>",
    choices: [
      "Toe geometry and residual stress raise the local cyclic stress",
      "Welded parts cannot carry bending, so the tab is simply misused",
      "Yield strength is the only fatigue property a welded joint needs",
      "The neutral axis leaves the tab because weld metal is much stiffer",
    ],
    answer: 0,
    explanation: "<p>Nominal Mc/I describes the smooth, far-field elastic field. A weld toe is none of those things: it is a sharp geometric notch, it carries near-yield tensile residual stress from solidification, it may have undercut or lack of fusion, and the heat-affected zone has different microstructure and toughness from the parent metal. Under repeated loading a fatigue crack initiates there at nominal stresses far below yield, and welded-joint fatigue classes typically allow only 50&ndash;90 MPa of stress <em>range</em> at 2 million cycles regardless of the parent metal's strength.</p><p>That last point kills the yield-strength distractor and is the single most useful fact here: <strong>upgrading to a higher-strength steel does essentially nothing for the fatigue life of a welded detail</strong>, because the notch and the residual stress dominate. Detail geometry is the lever, not material.</p><p>Credible fixes are all about the detail: grind or TIG-dress the toe to a smooth radius, reduce the moment arm or add a gusset so the weld sees less stress, move the weld out of the peak-stress region, use a full-penetration joint instead of a fillet, peen or stress-relieve to reduce residual tension, inspect for defects, and design against a welded-joint S-N class rather than parent-metal yield.</p>",
  },
  {
    id: "beam-bending-q39",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A bent arm has a nominal bending stress of 60 MPa at a hole. If K<sub>t</sub> = 2.5 and the local static allowable is 180 MPa, what is the local static safety factor?</p>",
    answer: 1.2,
    unit: "(dimensionless)",
    explanation: "<p>Estimate the local elastic peak, then compare it with the allowable.</p><p class=\"eq\">&sigma;<sub>local</sub> = K<sub>t</sub>&sigma;<sub>nom</sub> = 2.5(60) = 150 MPa</p><p class=\"eq\">n = &sigma;<sub>allow</sub>/&sigma;<sub>local</sub> = 180/150 = <strong>1.20</strong></p><p>The point of the question is the gap between the two numbers you could quote. The nominal safety factor is 180/60 = 3.0, which sounds comfortable; the real margin at the notch is 1.20, which does not. Reporting the nominal figure and claiming a 3&times; margin is exactly how parts get signed off and then crack at the hole.</p><p>Whether 1.20 is acceptable depends on what is being resisted. For static loading of a <em>ductile</em> metal, local plasticity redistributes the peak and K<sub>t</sub> is often relaxed, so net-section yielding becomes the real limit. For a <em>brittle</em> material, or for anything cyclic, you cannot relax it: fatigue uses K<sub>f</sub> (which depends on notch sensitivity), plus mean stress, surface finish and hole quality. Reaming rather than punching the hole can matter more than the safety factor you computed.</p>",
  },
  {
    id: "beam-bending-q40",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A cast-iron T-beam must carry a sagging moment. Cast iron is roughly three to four times weaker in tension than in compression. How should the T be oriented to minimise the risk?</p>",
    choices: [
      "Flange on the tension side, which pulls the N.A. that way",
      "Flange on the compression side, since cast iron is weak there",
      "Orientation is irrelevant: the total area does not change",
      "Lay the web horizontal so the section has no neutral axis",
    ],
    answer: 0,
    explanation: "<p>Sagging puts the bottom in tension, and tension is the weak direction, so the design goal is a <strong>small c on the tension side</strong>. Putting the bulky flange down there drags the centroid, and with it the neutral axis, toward the tension face, which shortens c<sub>tension</sub> and lengthens c<sub>compression</sub>. Tensile stress falls, compressive stress rises, and the material's strong direction absorbs the increase.</p><p>Put numbers on it with a worked example. Take a 150 &times; 25 mm flange on a 25 &times; 125 mm stem, total depth 150 mm: the centroid sits 46.6 mm from the flange face and 103.4 mm from the stem tip, with I = 13.9&times;10<sup>6</sup> mm<sup>4</sup>. At a 40 MPa tensile allowable, flange-up (tension at the stem tip) gives M = 40(13.9&times;10<sup>6</sup>)/103.4 = 5.36 kN&middot;m; flange-down gives M = 40(13.9&times;10<sup>6</sup>)/46.6 = <strong>11.9 kN&middot;m</strong>, 2.2&times; the capacity from turning the part over, at zero cost in mass.</p><p>This feels backwards if your rule of thumb is &quot;put material where the stress is high&quot;. With an asymmetric <em>material</em> you place area to manage the weak side, not the highly stressed side. The unchanged-area distractor is the usual axial-loading confusion, and every section has a neutral axis regardless of orientation. Then verify: after flipping, re-check the compression fibre, because it now sits at the larger c.</p>",
  },
  {
    id: "beam-bending-q41",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A simply supported round shaft has bearing supports 0.40 m apart and carries a 900 N gear force at midspan. The shaft diameter is 25 mm. Estimate the maximum bending stress in MPa.</p>",
    answer: 58.7,
    unit: "MPa",
    explanation: "<p>Treat the shaft between its bearings as a simply supported beam with a central point load.</p><p class=\"eq\">M<sub>max</sub> = PL/4 = 900(0.40)/4 = 90 N&middot;m = 90,000 N&middot;mm</p><p class=\"eq\">S = &pi;d<sup>3</sup>/32 = &pi;(25)<sup>3</sup>/32 = 1534 mm<sup>3</sup></p><p class=\"eq\">&sigma; = M/S = 90,000/1534 = <strong>58.7 MPa</strong></p><p>The interview point hides behind the arithmetic: a rotating shaft under a steady gear load sees this bending stress as a <strong>fully reversed cycle</strong> at shaft speed, because every fibre alternates between tension and compression once per revolution. So the number to compare against is not yield but the fatigue endurance limit, knocked down for surface finish, size, and any keyway or shoulder present. That is why shafts far below yield still fail after millions of cycles.</p><p>The classic candidate mistake is checking torsion only, on the grounds that the part is called a shaft. Gear separating and tangential forces routinely make bending the governing stress, and the honest answer combines the two (von Mises or a shaft code) before checking fatigue, deflection at the mesh, bearing loads, and critical speed.</p>",
  },
  {
    id: "beam-bending-q42",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A vertical post carries an axial compressive load and a lateral load that creates bending. What is the correct first stress model at an extreme fibre?</p>",
    choices: [
      "Use Mc/I alone: an axial force cannot change a beam's stress",
      "Use P/A alone: bending stress averages to zero over the area",
      "Superpose them: &sigma; = P/A &plusmn; Mc/I at the extreme fibres",
      "Subtract them everywhere: compression and bending always cancel",
    ],
    answer: 2,
    explanation: "<p>In the linear-elastic range the two load cases superpose. Axial load gives a uniform P/A across the section; bending gives a linear &plusmn;Mc/I. Adding them shifts the whole linear profile up or down:</p><p class=\"eq\">&sigma; = P/A &plusmn; Mc/I</p><p>One face sees axial compression plus bending compression, and that is the critical fibre. The opposite face sees compression minus bending, which may still be compressive, may be zero, or may go into <strong>net tension</strong> if Mc/I exceeds P/A. That crossover is the design question in disguise: it decides whether a masonry or concrete post cracks, whether a bolted base plate lifts off, and whether a preloaded joint separates.</p><p>Bending stress does integrate to zero over the area, but that says nothing about the peak at the extreme fibre, which is what fails. And the two only &quot;cancel&quot; on one face; on the other they add.</p><p>If the compression is large, check <strong>buckling</strong>, and remember the P-&delta; effect: lateral deflection adds eccentricity, which adds moment, which adds deflection (this is a beam-column, and superposition is only a first pass). For brittle materials apply a no-tension limit; and if the extreme fibre lands at a hole or weld, multiply by K<sub>t</sub>.</p>",
  },
  {
    id: "beam-bending-q43",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A sandwich beam has stiff carbon-fibre skins bonded to a light foam core. Why do the thin face sheets dominate its bending performance?</p>",
    choices: [
      "The core is structurally inert and could be deleted with no penalty",
      "Fibres running along the length cannot carry bending stress",
      "Peak bending stress is at the neutral axis, so faces are just trim",
      "Strain is largest at the faces, so stiff fibres pay off there",
    ],
    answer: 3,
    explanation: "<p>Bending strain is proportional to distance from the neutral axis, so the outer skins see the largest strain, and stress is E&epsilon;, so putting a high-modulus material where the strain is largest means and it carries a huge share of the load at almost no mass. Quantitatively, the skins' contribution is dominated by the Ad<sup>2</sup> transport term, so moving two thin faces apart with a light core buys stiffness proportional to the <em>square</em> of the separation for almost no added weight. That is the whole sandwich concept, and it is the same physics as an I-beam with the core playing the role of the web.</p><p>Which is exactly why the core is not inert. It separates the faces (without it they slide and you lose the d<sup>2</sup>), it carries the transverse shear, it stabilises the compression face against wrinkling, and it takes local load introduction. Delete it and the panel collapses to two loose sheets.</p><p>Real sandwich design therefore checks a longer list than Mc/I: face stress, <strong>core shear</strong> (often governing on short spans), face wrinkling and dimpling, skin-to-core disbond, fibre microbuckling in compression, moisture ingress, impact damage, and crushing at inserts and edge closeouts.</p>",
  },
  {
    id: "beam-bending-q44",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A load is applied to an equal-leg angle section in a direction that is not aligned with either principal centroidal axis. What is the risk of using a single simple Mc/I check?</p>",
    choices: [
      "The stress becomes uniform once the load is off the principal axis",
      "The neutral axis must stay horizontal whatever the load direction",
      "A diagonal load makes an angle stronger by engaging both its legs",
      "Both principal moments act, so the neutral axis tilts and one leg tip peaks",
    ],
    answer: 3,
    explanation: "<p>&sigma; = Mc/I is valid only for bending about a <strong>principal</strong> centroidal axis, where the product of inertia I<sub>xy</sub> vanishes and the two bending directions uncouple. An angle's principal axes are rotated roughly 45&deg; from its legs, so a load applied &quot;vertically&quot; resolves into components about <em>both</em> principal axes. The correct expression is the sum</p><p class=\"eq\">&sigma; = M<sub>1</sub>y<sub>1</sub>/I<sub>1</sub> + M<sub>2</sub>y<sub>2</sub>/I<sub>2</sub></p><p>and because I<sub>2</sub> (the weak principal axis) is much smaller than I<sub>1</sub>, even a small off-axis component contributes disproportionately. The neutral axis rotates away from horizontal and is <em>not</em> perpendicular to the load plane, so the peak stress lands at a leg tip that a single-axis check never looks at, and underestimates of 2&times; or more are routine.</p><p>There is a second failure on top of that: an angle's shear centre is at the intersection of its legs, well away from the centroid, so a transverse load generally adds torsion too, and an open thin-walled section is very weak in torsion. That is why loaded angles visibly twist and why a single-angle brace has such heavily penalised design allowables.</p><p>The right approach: rotate to principal axes, superpose the two bending terms, locate the true neutral axis, then check the shear centre and torsion. If any of that gets uncomfortable, use a symmetric or closed section instead.</p>",
  },
  {
    id: "beam-bending-q45",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>The rectangular box section shown has outer dimensions 60 mm wide &times; 100 mm deep and an inner void 44 mm wide &times; 84 mm deep (an 8 mm wall all round). For M = 3.0 kN&middot;m about the strong axis, estimate the maximum bending stress in MPa.</p>",
    figure: figQ45,
    answer: 53.1,
    unit: "MPa",
    explanation: "<p>Outer and inner rectangles share the same centroid, so I follows by straight subtraction, with no parallel axis term needed.</p><p class=\"eq\">I = (BH<sup>3</sup> &minus; bh<sup>3</sup>)/12 = [60(100)<sup>3</sup> &minus; 44(84)<sup>3</sup>]/12</p><p class=\"eq\">I = (60,000,000 &minus; 26,079,000)/12 = 2.83&times;10<sup>6</sup> mm<sup>4</sup></p><p class=\"eq\">c = 50 mm &rarr; S = I/c = 56,535 mm<sup>3</sup></p><p class=\"eq\">&sigma; = M/S = 3.0&times;10<sup>6</sup>/56,535 = <strong>53.1 MPa</strong></p><p>Worth noting how cheap the hole was: the solid 60 &times; 100 section has I = 5.0&times;10<sup>6</sup> mm<sup>4</sup>, so removing 62% of the area cost only 43% of the stiffness, because the removed material was all near the neutral axis. That trade is the whole argument for hollow sections.</p><p>Subtraction only works because the two rectangles are concentric. If the void were offset you would have to locate the composite centroid first and apply I&#772; + Ad<sup>2</sup> to each piece with the correct sign. And the usual caveats apply to any thin-walled box: check wall local buckling under the compression flange, weld or extrusion corner quality, and crushing where concentrated loads or clamps bear on the flat faces. Boxes are also vastly better in torsion than an open I or channel of the same mass, which is often the real reason they are chosen.</p>",
  },
  {
    id: "beam-bending-q46",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A crane runway beam passes its global bending check comfortably, but a concentrated wheel load dents the web just above a support. What check was missed?</p>",
    choices: [
      "Local bearing or web crippling under the concentrated load",
      "Only the midspan section modulus needed a second look here",
      "The mass of the wheel, which sets the dynamic amplification",
      "Shear force is zero at supports, so nothing needed checking",
    ],
    answer: 0,
    explanation: "<p>Global &sigma; = M/S describes the smeared elastic field over the whole cross-section. It says nothing about what happens in the few millimetres of web directly beneath a wheel or above a reaction, where the load has not yet spread out. There the web behaves like a short, very slender column loaded on its end: it can yield in bearing, crumple (web crippling), or buckle sideways (web sidesway buckling), and the flange can bend locally out of plane.</p><p>Note also that supports are where <em>shear and reaction are largest</em>, not zero. The shear force is zero at midspan of a symmetric simply supported beam, which is the opposite of the distractor. Bending is maximum at midspan; shear, bearing and crippling are maximum at the ends.</p><p>Standard fixes: bearing stiffeners welded into the web at reaction points, a thicker web or a heavier rolled section, a bearing plate to spread the load over a longer length, a larger wheel or rail to widen the contact patch, or re-routing the load into the flange rather than the web. This is one of the most common review findings on crane runways, rail supports, caster-loaded frames and machine bases. The beam is fine; the detail where the load enters is not.</p>",
  },
  {
    id: "beam-bending-q47",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A simply supported beam with a central point load has section modulus S = 30,000 mm<sup>3</sup> and an allowable stress of 150 MPa. For a span L = 1.2 m, what maximum central load P is allowed, in kN?</p>",
    answer: 15,
    unit: "kN",
    explanation: "<p>Work backwards from the allowable stress: stress gives moment, moment gives load.</p><p class=\"eq\">M<sub>allow</sub> = &sigma;<sub>allow</sub>S = 150 N/mm<sup>2</sup> (30,000 mm<sup>3</sup>) = 4.50&times;10<sup>6</sup> N&middot;mm = 4.50 kN&middot;m</p><p class=\"eq\">M<sub>max</sub> = PL/4 &rarr; P = 4M/L</p><p class=\"eq\">P = 4(4.50 kN&middot;m)/1.2 m = <strong>15.0 kN</strong></p><p>Check the direction of the answer: shortening the span raises the allowable load in inverse proportion, which matches intuition, since the same beam over 0.6 m would take 30 kN.</p><p>This is a strength limit and nothing more. Three things could easily reduce it in practice: deflection may hit a serviceability limit first (a slender beam sized by stress often does), the load applicator may crush the flange or cripple the web locally before the section reaches 150 MPa, and any hole or weld at the loaded section would multiply the nominal stress by K<sub>t</sub>. Quote the 15 kN, then name which of those you would check next.</p>",
  },
  {
    id: "beam-bending-q49",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 50 mm solid round bar is drilled through to make a tube with a 40 mm inside diameter, keeping the outside diameter the same. By what factor does the maximum bending stress increase for the same bending moment?</p>",
    answer: 1.69,
    unit: "(dimensionless)",
    explanation: "<p>The outside diameter is unchanged, so c = 25 mm in both cases and the stress ratio is just the inverse ratio of section moduli.</p><p class=\"eq\">S<sub>solid</sub> = &pi;d<sup>3</sup>/32 = &pi;(50)<sup>3</sup>/32 = 12,272 mm<sup>3</sup></p><p class=\"eq\">I<sub>tube</sub> = &pi;(50<sup>4</sup> &minus; 40<sup>4</sup>)/64 = &pi;(6,250,000 &minus; 2,560,000)/64 = 181,132 mm<sup>4</sup></p><p class=\"eq\">S<sub>tube</sub> = 181,132/25 = 7245 mm<sup>3</sup></p><p class=\"eq\">&sigma;<sub>tube</sub>/&sigma;<sub>solid</sub> = S<sub>solid</sub>/S<sub>tube</sub> = 12,272/7245 = <strong>1.69</strong></p><p>Now the interesting part: the drilling removed 64% of the <em>area</em> but only 41% of the section modulus, so specific strength improved by a factor of 1.77. Stress went up 69%; mass went down 64%.</p><p>That is the honest statement of the tube argument, and it is the opposite of the sloppy version. Tubes are not automatically stronger. Hollowing out a bar at fixed outside diameter always <em>raises</em> stress. Tubes win when you are allowed to spend the saved material on a larger diameter: at equal mass, a tube beats the solid bar it replaces (a 40 mm rod versus an equal-area 60 mm tube is 2.33&times; in S). Fixed OD means you are trading strength for mass; fixed mass means you are getting strength for free.</p>",
  },
  {
    id: "beam-bending-q50",
    type: "mc",
    difficulty: 3,
    prompt: "<p>You redesign a beam from a solid rectangle to a very thin-walled tall box at the same mass. The nominal bending stress drops sharply. What should the next review focus on?</p>",
    choices: [
      "Nothing further: a lower nominal stress proves the design is done",
      "Local wall buckling, load introduction, seams, dents and torsion",
      "Only the density, because the mass per metre has not changed",
      "Only Young's modulus, since shape cannot add new failure modes",
    ],
    answer: 1,
    explanation: "<p>Moving material outward is the correct bending move, but it converts a <em>strength</em> problem into a <em>stability and detail</em> problem. Thin walls in compression buckle locally at stresses well below yield, and that critical stress scales with (t/b)<sup>2</sup>, so halving the wall quarters the buckling capacity. Thin shells are also badly imperfection-sensitive, so a small manufacturing wave or a handling dent knocks the real capacity down further than any textbook formula suggests.</p><p>The full list for a thin-walled box: local buckling of the compression face and the webs; load introduction (a concentrated load or a clamp will dent a thin wall long before the section yields, so you need doublers, inserts or bearing plates); the longitudinal seams or welds, which must carry the shear flow q = VQ/I; fatigue at those seams; handling and impact damage; torsional loads (a closed box is good here, which is often why you chose it); and manufacturability, since thin walls have tolerance, distortion and weld-warping issues that a drawing does not show.</p><p>This is the mature version of the beam-efficiency answer. Anyone can say &quot;make it deeper and thinner&quot;. What distinguishes an engineer who has actually built hardware is naming the failure modes that the change creates, and checking them before shipping.</p>",
  },
  {
    id: "beam-bending-q61",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The welded I-section shown has flanges 100 &times; 15 mm and a web 10 &times; 150 mm, for a total depth of 180 mm. It carries an internal shear force V = 60 kN. Find the transverse shear stress at the neutral axis, in MPa. (I = 23.3&times;10<sup>6</sup> mm<sup>4</sup>.)</p>",
    figure: figQ61,
    answer: 39.1,
    unit: "MPa",
    explanation: "<p>Use &tau; = VQ/(It), with Q the first moment of everything <em>above</em> the neutral axis and t the width of the section at the cut.</p><p><strong>Q at the neutral axis</strong> = top flange + the upper half of the web:</p><p class=\"eq\">Flange: A = 100(15) = 1500 mm<sup>2</sup> at y&#772; = 75 + 7.5 = 82.5 mm &rarr; 123,750 mm<sup>3</sup></p><p class=\"eq\">Half web: A = 10(75) = 750 mm<sup>2</sup> at y&#772; = 37.5 mm &rarr; 28,125 mm<sup>3</sup></p><p class=\"eq\">Q = 123,750 + 28,125 = 151,875 mm<sup>3</sup></p><p><strong>Width at the cut</strong> is the web thickness, t = 10 mm, not the flange width. Using the flange width is the classic error and would give 3.91 MPa, ten times low.</p><p class=\"eq\">&tau; = VQ/(It) = 60,000(151,875)/(23.3&times;10<sup>6</sup> &times; 10) = 9.11&times;10<sup>9</sup>/2.33&times;10<sup>8</sup> = <strong>39.1 MPa</strong></p><p>Cross-check with the engineer's shortcut &tau; &asymp; V/A<sub>web</sub> = 60,000/(10 &times; 150) = 40.0 MPa, within 2%. That is why nobody computes Q for a rolled I-beam in practice; the web really does carry essentially all of the shear.</p><p>Compare the two ends of the web: at the flange junction Q drops to 123,750 mm<sup>3</sup> and &tau; = 31.9 MPa, only 18% below the peak. The shear is nearly uniform through the web, which is the mirror image of &quot;the flanges take all the moment&quot;. And note the junction point carries both a large &tau; and a large &sigma; simultaneously, which is where a combined von Mises check belongs.</p>",
  },
  {
    id: "beam-bending-q62",
    type: "mc",
    difficulty: 3,
    prompt: "<p>The figure shows bending and transverse shear stress on the same I-section at a section carrying both a large moment and a large shear. At which of the three marked points is a combined (von Mises) check most likely to govern?</p>",
    figure: figQ62,
    choices: [
      "Point 1, the outer flange face, where &sigma; is the largest of all",
      "Point 3, the neutral axis, where &tau; peaks and &sigma; vanishes",
      "Point 2, the web-flange junction, where both are appreciable",
      "None: &sigma; and &tau; never coexist on one cross-section",
    ],
    answer: 2,
    explanation: "<p>Look at what each point actually experiences. Point 1 has &sigma;<sub>max</sub> but &tau; = 0 (a free surface), so von Mises reduces to &sigma; alone. Point 3 has &tau;<sub>max</sub> but &sigma; = 0, so von Mises reduces to &radic;3&tau;. Point 2, the web-flange junction, has <em>both</em>: the bending stress is still around 85% of its peak (it is only 15 mm in from the face on a 180 mm section) and the shear stress is around 80% of its peak, because &tau; is nearly uniform through the web.</p><p class=\"eq\">&sigma;<sub>vm</sub> = &radic;(&sigma;<sup>2</sup> + 3&tau;<sup>2</sup>)</p><p>Plug in representative numbers, say &sigma; = 150 MPa and &tau; = 32 MPa at the junction against &sigma; = 180, &tau; = 0 at the face. Von Mises gives 160 MPa versus 180 MPa. In this case the face still wins, which is why slender beams are checked on bending alone. But make the beam stubbier (larger V, smaller M) and the junction overtakes it, and it is also where the geometry changes abruptly, where the weld or fillet sits, and where a stress concentration lives.</p><p>The reason this point gets missed is that the two profiles are usually drawn on separate diagrams and checked separately. The habit worth building: on any short, deep, or heavily loaded section, evaluate von Mises at the web-flange junction as well as at the extreme fibre. That is also the standard location for a web-buckling and stiffener check.</p>",
  },
  {
    id: "beam-bending-q63",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 40 mm diameter solid steel rod is replaced by a tube of the <strong>same cross-sectional area</strong> (so the same mass per metre) with an outside diameter of 60 mm, as shown. By what factor does the section modulus increase?</p>",
    figure: figQ63,
    answer: 2.33,
    unit: "(dimensionless)",
    explanation: "<p>First find the tube's bore from the equal-area condition:</p><p class=\"eq\">A = &pi;(40)<sup>2</sup>/4 = 1257 mm<sup>2</sup> = &pi;(60<sup>2</sup> &minus; d<sub>i</sub><sup>2</sup>)/4 &rarr; d<sub>i</sub><sup>2</sup> = 3600 &minus; 1600 = 2000 &rarr; d<sub>i</sub> = 44.7 mm</p><p>So the wall is (60 &minus; 44.7)/2 = 7.64 mm. Now the section properties:</p><p class=\"eq\">Solid: I = &pi;(40)<sup>4</sup>/64 = 126&times;10<sup>3</sup> mm<sup>4</sup>, &nbsp; S = I/20 = 6283 mm<sup>3</sup></p><p class=\"eq\">Tube: I = &pi;(60<sup>4</sup> &minus; 44.7<sup>4</sup>)/64 = &pi;(12.96&times;10<sup>6</sup> &minus; 4.00&times;10<sup>6</sup>)/64 = 440&times;10<sup>3</sup> mm<sup>4</sup></p><p class=\"eq\">S<sub>tube</sub> = 440&times;10<sup>3</sup>/30 = 14,661 mm<sup>3</sup></p><p class=\"eq\">S<sub>tube</sub>/S<sub>solid</sub> = 14,661/6283 = <strong>2.33</strong></p><p>So the same kilogram of steel carries 2.33&times; the moment, and the I ratio is 3.50&times;, meaning it also deflects less than a third as much. Both gains come from one fact: I = &int;y<sup>2</sup>dA weights area by the <em>square</em> of its distance, so moving material outward is worth far more than having more of it.</p><p>Keep the two exponents apart: the stiffness gain of 3.50 always exceeds the strength gain of 2.33, because c grows along with I. And name the limit before anyone asks. Push the diameter further at fixed mass and the wall thins until it buckles locally or ovalises (the Brazier effect), which is what actually caps tube efficiency in bikes, driveshafts and aircraft structures.</p>",
  },
  {
    id: "beam-bending-q64",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 30 mm diameter solid steel shaft carries a bending moment M = 300 N&middot;m and a torque T = 200 N&middot;m at the same section. What is the von Mises equivalent stress at the outer surface, in MPa?</p>",
    answer: 131,
    unit: "MPa",
    explanation: "<p>At the outer fibre of a round shaft the bending stress is axial and the torsional stress is pure shear on the same element, so this is a plane stress state with one normal and one shear component.</p><p class=\"eq\">S = &pi;d<sup>3</sup>/32 = &pi;(30)<sup>3</sup>/32 = 2651 mm<sup>3</sup> &rarr; &sigma; = M/S = 300,000/2651 = 113 MPa</p><p class=\"eq\">Z<sub>p</sub> = &pi;d<sup>3</sup>/16 = 5301 mm<sup>3</sup> &rarr; &tau; = T/Z<sub>p</sub> = 200,000/5301 = 37.7 MPa</p><p class=\"eq\">&sigma;<sub>vm</sub> = &radic;(&sigma;<sup>2</sup> + 3&tau;<sup>2</sup>) = &radic;(113<sup>2</sup> + 3(37.7)<sup>2</sup>) = &radic;(12,809 + 4270) = <strong>131 MPa</strong></p><p>Note the torsional section modulus is exactly twice the bending one for a solid round section (&pi;d<sup>3</sup>/16 versus &pi;d<sup>3</sup>/32), and using the wrong one is the most common error here and gives 75.4 MPa for &tau;.</p><p>Perspective worth quoting: the torque contributes only 15% on top of bending despite being two-thirds of its magnitude, because shear enters as 3&tau;<sup>2</sup> under the root. That is why, on gear and pulley shafts, <strong>bending usually governs even when the shaft's job is transmitting torque</strong>. If you prefer the alternatives: maximum principal stress here is 125 MPa and maximum shear is 68.0 MPa (Tresca equivalent 136 MPa), so von Mises sits between them as expected. And for a rotating shaft the bending part fully reverses every revolution while the torque is steady, so the real check is a fatigue one with different mean and alternating components, which is what shaft-design codes handle.</p>",
  },
  {
    id: "beam-bending-q65",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Whiteboard estimate. A 2&times;4 pine joist (actual 38 &times; 89 mm) spans 3.0 m simply supported, standing on edge. Take the modulus of rupture of the timber as roughly 40 MPa. Approximately what point load at midspan breaks it?</p>",
    choices: [
      "About 0.7 kN",
      "About 1.3 kN",
      "About 2.7 kN",
      "About 5.4 kN",
    ],
    answer: 2,
    explanation: "<p>Three lines, no calculator needed if you round sensibly.</p><p class=\"eq\">S = bh<sup>2</sup>/6 = 38(89)<sup>2</sup>/6 &asymp; 38(7900)/6 &asymp; 50&times;10<sup>3</sup> mm<sup>3</sup></p><p class=\"eq\">M<sub>fail</sub> = &sigma;S = 40(50&times;10<sup>3</sup>) = 2.0&times;10<sup>6</sup> N&middot;mm = 2.0 kN&middot;m</p><p class=\"eq\">P = 4M/L = 4(2.0)/3.0 = <strong>2.7 kN</strong></p><p>That is about 270 kg, roughly three adults standing on one joist at midspan, which matches everyday experience of how much abuse a 2&times;4 takes before it snaps. Getting the order of magnitude right and being able to sanity-check it against something physical is exactly what this kind of question tests; the interviewer does not care about the third digit.</p><p>Two things qualify it. Real timber is highly variable, and design allowables are 4&ndash;5&times; below the modulus of rupture to account for knots, moisture, duration of load and safety factor, so the <em>allowable</em> service load is closer to 0.5 kN. And this is a strength estimate only: a 3 m span at 89 mm depth has L/h = 34, so it would sag alarmingly (well past L/360) long before it broke. Wood floors are almost always sized by deflection, not fracture.</p>",
  },
  {
    id: "beam-bending-q66",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>An aluminium beam 50 mm wide &times; 100 mm deep (E = 70 GPa) has a steel strip 50 mm wide &times; 10 mm thick (E = 200 GPa) bonded to its bottom face. Using the transformed-section method, how far below the top of the aluminium does the elastic neutral axis lie, in mm?</p>",
    answer: 62.2,
    unit: "mm",
    explanation: "<p>The bond forces both materials to share the strain distribution, so replace the steel with an equivalent width of aluminium that has the same axial stiffness per unit height.</p><p class=\"eq\">n = E<sub>steel</sub>/E<sub>Al</sub> = 200/70 = 2.857</p><p class=\"eq\">transformed steel width = n &times; 50 = 142.9 mm (depth stays 10 mm)</p><p>Now find the centroid of the all-aluminium transformed section, measuring y down from the top of the aluminium:</p><p class=\"eq\">Aluminium: A = 50(100) = 5000 mm<sup>2</sup> at y = 50 mm</p><p class=\"eq\">Steel (transformed): A = 142.9(10) = 1429 mm<sup>2</sup> at y = 100 + 5 = 105 mm</p><p class=\"eq\">y&#772; = (5000&middot;50 + 1429&middot;105)/(6429) = 400,000/6429 = <strong>62.2 mm below the top</strong></p><p>The neutral axis has moved 12.2 mm down from the aluminium's own mid-height, pulled toward the stiffer material exactly as expected. It is critical to widen the steel, never to deepen it: stretching it in the y direction would change the lever arms and corrupt the geometry the whole method depends on.</p><p>The step people forget comes after: stresses computed on the transformed section are aluminium stresses. To get the real steel stress you must multiply by n. Here the transformed I is 7.54&times;10<sup>6</sup> mm<sup>4</sup>, so under a sagging moment the bottom steel fibre sits at 47.8 mm and carries n&middot;M(47.8)/I, which is 2.86&times; what a naive single-material calculation would report. Skipping that factor is how a &quot;reinforced&quot; beam gets signed off with the reinforcement three times overstressed.</p>",
  },
  {
    id: "beam-bending-q68",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A cantilever bracket delivers a 400 N&middot;m bending moment into its base plate at the wall. The plate is held by four bolts: two in a top row and two in a bottom row, the rows 120 mm apart, as shown. Estimate the tensile load in <em>each</em> top bolt, in kN.</p>",
    figure: figQ68,
    answer: 1.67,
    unit: "kN",
    explanation: "<p>Model the moment as a couple: the top bolt row pulls, and the bottom edge of the plate bears against the wall, with the two rows 120 mm apart as the lever arm.</p><p class=\"eq\">F<sub>row</sub> = M/d = 400,000 N&middot;mm / 120 mm = 3333 N</p><p class=\"eq\">F<sub>bolt</sub> = 3333/2 = 1667 N = <strong>1.67 kN per bolt</strong></p><p>This is the calculation every bracket, motor mount and machine-frame bolt group needs, and it is where the load path leaves beam theory and enters the joint. Note how much the geometry matters: halving the bolt spacing to 60 mm would <em>double</em> the bolt tension, which is why you spread a bolt pattern as far apart as the flange allows. It is the same idea as getting material away from the neutral axis, applied to fasteners.</p><p>Three refinements a good candidate raises unprompted. (1) <strong>Prying</strong>: if the base plate is flexible it bends and levers on its outer edge, amplifying bolt tension by 20&ndash;40%, so use a thick plate or add a stiffener. (2) <strong>Preload</strong>: a properly preloaded bolt sees very little of the external tension until the joint approaches separation, so the fatigue-critical quantity is the preload and the joint stiffness ratio, not the 1.67 kN alone. (3) <strong>Shear</strong>: the bracket's vertical load must also be carried, usually by friction from preload rather than by bolt shear. Treating the group as a section with a neutral axis at the pattern centroid gives the same answer for two symmetric rows, but differs as soon as you add a third row.</p>",
  },
  {
    id: "beam-bending-q69",
    type: "mc",
    difficulty: 3,
    prompt: "<p>You bend a 3 mm 6061 aluminium bracket to 90&deg; in a press brake, and when the punch lifts it relaxes to about 93&deg;. What is happening, mechanically?</p>",
    choices: [
      "The elastic part of the strain recovers when the punch lifts",
      "The aluminium creeps back over the minutes after forming",
      "Friction on the die drags the flange back a few degrees",
      "Young's modulus rises after work hardening, so the part unbends",
    ],
    answer: 0,
    explanation: "<p>Forming past yield leaves the section with a mixture of plastic and elastic strain through its depth. The plastic part is permanent; the elastic part is not. When the punch releases, the internal stresses must come back into equilibrium with zero applied moment, and the section unloads elastically along a slope of E &mdash; springing back by the elastic curvature the bend contained. That is <strong>springback</strong>, and 3&deg; on a 90&deg; aluminium bend is entirely typical.</p><p>The scaling tells you when to worry: springback grows with &sigma;<sub>y</sub>/E and with the bend radius to thickness ratio R/t. Aluminium (&sigma;<sub>y</sub>/E &asymp; 0.004) springs back roughly three times as much as mild steel (&asymp; 0.0013) for the same geometry, and high-strength or stainless sheet is worse still, which is why the same tooling gives different angles in different alloys. It is elastic recovery, immediate and load-controlled, not time-dependent creep, and it has nothing to do with die friction. E is essentially constant for a given alloy family and does not rise with cold work.</p><p>Compensation in practice: overbend the tool (bend to 87&deg; to land at 90&deg;), bottom or coin the bend to force local plastic flow through the full thickness, use a smaller punch radius, or control incoming material so &sigma;<sub>y</sub> does not vary lot to lot. On tight-tolerance parts you measure the first article and adjust, because sheet yield strength varies enough that a pure calculation will not hit the angle.</p>",
  },
  {
    id: "beam-bending-q70",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A steel rule 40 mm wide and 3 mm thick projects 200 mm past the edge of a bench. You press down on the free end with 15 N. What is the maximum bending stress, in MPa?</p>",
    answer: 50,
    unit: "MPa",
    explanation: "<p>Treat the overhang as a cantilever fixed at the bench edge, where the moment is largest.</p><p class=\"eq\">M = P L = 15 N (200 mm) = 3000 N&middot;mm</p><p class=\"eq\">S = bh<sup>2</sup>/6 = 40(3)<sup>2</sup>/6 = 60 mm<sup>3</sup></p><p class=\"eq\">&sigma; = M/S = 3000/60 = <strong>50.0 MPa</strong></p><p>Orientation is the whole trick: the cubed (or squared) dimension is always the one <em>parallel to the load</em>, so h = 3 mm here, not 40 mm. Getting it backwards gives S = 3(40)<sup>2</sup>/6 = 800 mm<sup>3</sup> and &sigma; = 3.75 MPa, a factor of 13 low, and the reason a rule feels rigid on edge and floppy flat.</p><p>Against experience: 50 MPa is well below the ~400 MPa yield of a hardened steel rule, which is why it springs back rather than staying bent. Push down 100 N instead and you would be at 333 MPa &mdash; close enough to yield that you would leave a permanent set, which matches what happens if you really lean on one.</p>",
  },
  {
    id: "beam-bending-q71",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A simply supported beam carries a uniformly distributed load. You halve the span but keep the same load per metre and the same cross-section. What happens to the peak bending stress?</p>",
    choices: [
      "Peak stress halves, because the moment is linear in the span",
      "Peak stress drops to one quarter, since M scales with L&sup2;",
      "Peak stress is unchanged: the load per metre is the same",
      "Peak stress drops to one eighth, following the deflection law",
    ],
    answer: 1,
    explanation: "<p>For a simply supported beam under a UDL, M<sub>max</sub> = wL&sup2;/8 at midspan. With w and S both unchanged,</p><p class=\"eq\">&sigma; = M/S = wL&sup2;/(8S) &prop; L&sup2; &rarr; halving L gives &sigma; &times; (1/2)&sup2; = <strong>1/4</strong></p><p>Two distractors are worth naming. The linear answer is the <em>point-load</em> result (M = PL/4 &prop; L), which is right for a fixed total load but wrong here, because halving the span under a constant w also halves the total load, so you get one factor of L from the shorter arm and one from the smaller load. The one-eighth answer is the deflection scaling: &delta; = 5wL<sup>4</sup>/(384EI) &prop; L<sup>4</sup>, so deflection actually drops to 1/16, not 1/8.</p><p>The practical lesson is the one interviewers are after: <strong>span is the most powerful variable in a beam problem</strong>. Adding a single intermediate support to halve the span cuts stress by 4&times; and deflection by 16&times; at no material cost, which almost always beats resizing the section. That is why you should always ask &quot;can I shorten the span or move the load?&quot; before you ask &quot;can I make the beam bigger?&quot;</p>",
  },
  {
    id: "beam-bending-q72",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 12 mm diameter aluminium rod is clamped at one end and projects 150 mm. Its yield strength is 270 MPa. What tip load first causes yielding at the clamp, in N?</p>",
    answer: 305,
    unit: "N",
    explanation: "<p>Work backwards from the allowable stress at the critical section, which for a cantilever is the clamp.</p><p class=\"eq\">S = &pi;d<sup>3</sup>/32 = &pi;(12)<sup>3</sup>/32 = &pi;(1728)/32 = 169.6 mm<sup>3</sup></p><p class=\"eq\">M<sub>y</sub> = &sigma;<sub>y</sub>S = 270 N/mm<sup>2</sup> (169.6 mm<sup>3</sup>) = 45,800 N&middot;mm</p><p class=\"eq\">P = M/L = 45,800/150 = <strong>305 N</strong></p><p>Note that this is <em>first</em> yield, with the outer fibre at the clamp reaching 270 MPa while the rest of the section is still elastic. The rod does not collapse there: a solid round section has a shape factor of 1.70, so it takes about 519 N to make the whole section plastic. Whether you can use that reserve depends on whether a permanent set is acceptable.</p><p>Two things worth saying next. The d<sup>3</sup> dependence is brutal in both directions: a 14 mm rod would take 484 N (59% more capacity for 36% more mass), while a 10 mm rod manages only 177 N. And the clamp is not just where the moment peaks. It is a stress concentration and a fretting site, so on a cyclically loaded rod the real failure will start there well below 305 N.</p>",
  },
  {
    id: "beam-bending-q73",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 1.2 m horizontal cantilever shelf bracket, bolted to a wall, is overstressed in bending at the root. You may add exactly one part weighing under 100 g. Which change is most effective?</p>",
    choices: [
      "Bond a 100 g steel doubler over the middle third of the span",
      "Swap the 6061-T6 bracket for 7075-T6 at identical geometry",
      "Add a diagonal tie from tip to wall so the load goes axial",
      "Add a 100 g rib along the neutral axis to raise the area",
    ],
    answer: 2,
    explanation: "<p>Every option except one is a variation on &quot;make the beam better at bending&quot;. The winning move is to stop it from bending. A diagonal tie from the shelf tip back up to the wall turns the bracket into a two-force triangle: the tie carries tension, the shelf carries mostly axial compression, and the root moment collapses from PL to almost nothing. An axially loaded member stresses its <em>entire</em> cross-section uniformly, whereas a beam wastes everything near the neutral axis, typically an order of magnitude more efficient for the same material.</p><p>Why the others lose. The doubler adds material at the <em>middle</em> of the span, where the cantilever moment is only half its peak; it should go at the root, and even then a 100 g patch on a 1.2 m arm barely moves S. The alloy swap raises the allowable roughly 1.6&times; but does nothing for the actual stress and nothing at all for deflection, since E is essentially identical between aluminium alloys. The neutral-axis rib is the classic anti-answer: that is precisely the material that does no work in bending.</p><p>Say the caveats and you have the complete answer: the tie must be in tension (a strut below the shelf would need to resist buckling instead), it needs a wall anchor that can take the vertical pull, and it eats headroom under the shelf, which is often exactly why brackets are cantilevers in the first place.</p>",
  },
];

export default extra;
