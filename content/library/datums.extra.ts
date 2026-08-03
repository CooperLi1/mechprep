import type { Question } from "../types";

// Additional question bank for Datums & Datum Reference Frames (merged after
// the base questions in content/index.ts). Figures are authored here too — a
// datum question without a diagram is nearly meaningless.

// Fig 9 — primary support layout: contact triangle vs. centre of gravity
const figPads = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two fixture layouts, three primary pads each</text>
  <!-- LEFT: good -->
  <rect x="32" y="62" width="176" height="120" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="86" x2="182" y2="86" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="182" y1="86" x2="120" y2="158" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="120" y1="158" x2="58" y2="86" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="58" cy="86" r="6.5" fill="#1d4ed8"/>
  <circle cx="182" cy="86" r="6.5" fill="#1d4ed8"/>
  <circle cx="120" cy="158" r="6.5" fill="#1d4ed8"/>
  <circle cx="118" cy="112" r="9" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <path d="M 118 103 A 9 9 0 0 1 127 112 L 118 112 Z" fill="#dc2626"/>
  <path d="M 118 121 A 9 9 0 0 1 109 112 L 118 112 Z" fill="#dc2626"/>
  <text x="132" y="108" fill="#dc2626" font-size="11">CG</text>
  <text x="120" y="212" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">layout 1</text>
  <!-- RIGHT: bad -->
  <rect x="252" y="62" width="176" height="120" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="274" y1="82" x2="332" y2="82" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="332" y1="82" x2="302" y2="128" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="302" y1="128" x2="274" y2="82" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="274" cy="82" r="6.5" fill="#1d4ed8"/>
  <circle cx="332" cy="82" r="6.5" fill="#1d4ed8"/>
  <circle cx="302" cy="128" r="6.5" fill="#1d4ed8"/>
  <circle cx="376" cy="140" r="9" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <path d="M 376 131 A 9 9 0 0 1 385 140 L 376 140 Z" fill="#dc2626"/>
  <path d="M 376 149 A 9 9 0 0 1 367 140 L 376 140 Z" fill="#dc2626"/>
  <text x="390" y="136" fill="#dc2626" font-size="11">CG</text>
  <text x="340" y="212" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">layout 2</text>
  <text x="230" y="240" text-anchor="middle" fill="#334155" font-size="12">Plan view. Dashed triangle = the three primary contacts; the marked point is the CG.</text>
</svg>`;

// Fig 10 — one hole, two datum orders, two readings
const figSwap = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same hole measured in two datum orders</text>
  <rect x="100" y="56" width="12" height="136" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="112" y="180" width="260" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="106" y="212" text-anchor="middle" fill="#334155" font-size="11">C</text>
  <text x="330" y="208" text-anchor="middle" fill="#334155" font-size="11">B</text>
  <rect x="112" y="64" width="248" height="116" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <circle cx="280" cy="118" r="12" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="280" cy="118" r="2" fill="#334155"/>
  <!-- lever arm from the datum corner -->
  <line x1="112" y1="180" x2="280" y2="118" stroke="#64748b" stroke-width="1" stroke-dasharray="5 3"/>
  <text x="188" y="140" fill="#64748b" font-size="11">90 mm from the corner</text>
  <!-- stacked readings -->
  <line x1="112" y1="222" x2="280" y2="222" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="112" y1="216" x2="112" y2="228" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="280" y1="216" x2="280" y2="228" stroke="#1d4ed8" stroke-width="1"/>
  <text x="196" y="217" text-anchor="middle" fill="#1d4ed8" font-size="12">A | B | C reads 60.00</text>
  <text x="196" y="242" text-anchor="middle" fill="#dc2626" font-size="12">A | C | B reads 60.18</text>
  <text x="300" y="70" fill="#334155" font-size="11">the part clocks by the</text>
  <text x="300" y="86" fill="#334155" font-size="11">out-of-squareness angle</text>
  <text x="300" y="102" fill="#334155" font-size="11">between B and C</text>
</svg>`;

// Fig 11 — least-squares plane vs. the plane a gage actually sits on
const figCMM = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat11-d" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same probed points, two different datum planes</text>
  <!-- part with a convex (crowned) bottom face -->
  <path d="M 70 62 L 390 62 L 390 150 C 330 168, 290 176, 230 176 C 170 176, 130 168, 70 150 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <text x="230" y="104" text-anchor="middle" fill="#334155" font-size="12">datum feature A (convex, exaggerated)</text>
  <!-- probed points -->
  <circle cx="98" cy="157" r="3.2" fill="#334155"/>
  <circle cx="142" cy="166" r="3.2" fill="#334155"/>
  <circle cx="186" cy="173" r="3.2" fill="#334155"/>
  <circle cx="230" cy="176" r="3.2" fill="#334155"/>
  <circle cx="274" cy="173" r="3.2" fill="#334155"/>
  <circle cx="318" cy="166" r="3.2" fill="#334155"/>
  <circle cx="362" cy="157" r="3.2" fill="#334155"/>
  <!-- stylus -->
  <line x1="274" y1="228" x2="274" y2="182" stroke="#64748b" stroke-width="2"/>
  <circle cx="274" cy="177" r="5" fill="#fff" stroke="#64748b" stroke-width="1.8"/>
  <text x="284" y="222" fill="#64748b" font-size="11">probe</text>
  <!-- tangent plane (what a surface plate contacts) -->
  <line x1="56" y1="176" x2="404" y2="176" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="410" y="180" text-anchor="end" fill="#1d4ed8" font-size="11">&#8592; gage sits here</text>
  <!-- least squares plane -->
  <line x1="56" y1="165" x2="404" y2="165" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="7 4"/>
  <text x="410" y="158" text-anchor="end" fill="#dc2626" font-size="11">&#8592; least-squares fit</text>
  <!-- gap dimension -->
  <line x1="120" y1="165" x2="120" y2="176" stroke="#dc2626" stroke-width="1.2" marker-end="url(#dat11-d)"/>
  <text x="72" y="200" fill="#dc2626" font-size="11">&#8776; half the form error</text>
  <text x="230" y="240" text-anchor="middle" fill="#334155" font-size="12">The CMM reports smaller deviations than the hard gage, on the same part.</text>
</svg>`;


// Fig 13 — weldment: which face should be primary?
const figWeldment = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat13-ld" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Weldment: the drawing calls the as-welded face as A</text>
  <!-- base plate -->
  <rect x="92" y="164" width="278" height="22" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <!-- machined pads -->
  <rect x="124" y="186" width="46" height="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <rect x="292" y="186" width="46" height="12" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="231" y="222" text-anchor="middle" fill="#1d4ed8" font-size="11">two machined seating pads</text>
  <!-- upright -->
  <rect x="196" y="60" width="60" height="104" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="226" cy="108" r="19" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="226" cy="108" r="2.4" fill="#334155"/>
  <text x="290" y="112" fill="#334155" font-size="11">bore: locates the shaft</text>
  <line x1="286" y1="108" x2="248" y2="108" stroke="#334155" stroke-width="1"/>
  <!-- weld fillets -->
  <polygon points="196,164 196,152 184,164" fill="#94a3b8" stroke="#334155" stroke-width="1"/>
  <polygon points="256,164 256,152 268,164" fill="#94a3b8" stroke="#334155" stroke-width="1"/>
  <!-- datum feature symbol on the as-welded outer face -->
  <line x1="196" y1="86" x2="150" y2="86" stroke="#334155" stroke-width="1"/>
  <polygon points="142,78 142,94 150,86" fill="#334155"/>
  <line x1="142" y1="86" x2="122" y2="86" stroke="#334155" stroke-width="1"/>
  <rect x="98" y="75" width="24" height="22" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="110" y="91" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <line x1="110" y1="115" x2="110" y2="140" stroke="#dc2626" stroke-width="1.6" marker-end="url(#dat13-ld)"/>
  <text x="110" y="112" text-anchor="middle" fill="#dc2626" font-size="11">as-welded</text>
  <text x="110" y="156" text-anchor="middle" fill="#dc2626" font-size="11">&#177;1.5 mm distortion</text>
  <text x="230" y="246" text-anchor="middle" fill="#334155" font-size="12">The datum feature symbol is attached to the outer face of the upright.</text>
</svg>`;

// Fig 14 — two datum features of size at MMB: shift becomes rotation
const figTwoHoles = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dat14-rot" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two datum holes at MMB: the shift becomes a rotation</text>
  <rect x="56" y="62" width="356" height="112" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <!-- datum hole B on its pin -->
  <circle cx="116" cy="118" r="21" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="116" cy="118" r="18" fill="#e2e8f0" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="116" y="158" text-anchor="middle" fill="#1d4ed8" font-size="11">B: 0.05 radial</text>
  <!-- datum hole C on its pin -->
  <circle cx="356" cy="118" r="22" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="356" cy="118" r="16" fill="#e2e8f0" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="356" y="158" text-anchor="middle" fill="#1d4ed8" font-size="11">C: 0.10 radial</text>
  <!-- spacing dimension -->
  <line x1="116" y1="200" x2="356" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="116" y1="194" x2="116" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="194" x2="356" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="236" y="195" text-anchor="middle" fill="#64748b" font-size="12">300 mm</text>
  <!-- feature of interest -->
  <circle cx="276" cy="118" r="9" fill="#fff" stroke="#dc2626" stroke-width="1.6"/>
  <line x1="116" y1="88" x2="276" y2="88" stroke="#dc2626" stroke-width="1"/>
  <line x1="116" y1="82" x2="116" y2="94" stroke="#dc2626" stroke-width="1"/>
  <line x1="276" y1="82" x2="276" y2="94" stroke="#dc2626" stroke-width="1"/>
  <text x="196" y="78" text-anchor="middle" fill="#dc2626" font-size="11">200 mm to the feature</text>
  <!-- rotation arrow -->
  <path d="M 78 52 q 24 -16 50 -6" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#dat14-rot)"/>
  <text x="230" y="240" text-anchor="middle" fill="#334155" font-size="12">Both holes float on their simulators, so the plate can translate and clock together.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "datums-q23",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A traveller tells you to "measure the boss height to datum A", where A is the part's bottom face. What do you physically do first?</p>`,
    choices: [
      "Set the part on any three fixture pads and start probing",
      "Rest the face called A on the plate, on its own high points",
      "Clamp the part down until the face called A is pulled flat",
      "Probe the face called A and average the readings into a plane",
    ],
    answer: 1,
    explanation: `<p>The datum is established by letting the datum feature find its own rest position on the simulator: three high points on a surface plate, nothing forcing it. Everything measured afterwards references the plane those contacts define.</p>
<p>Clamping the part flat elastically deforms it, so you measure the fixture's geometry rather than the part's. The exception is a formally specified restrained condition for non-rigid parts, stated on the drawing with clamp locations and forces.</p>
<p>Averaging the probed points gives a least-squares plane through the middle of the surface, not the high-point contact plane a gage uses, which is a well-known source of CMM-versus-gage disagreement.</p>`,
  },
  {
    id: "datums-q24",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A gear blank is mounted on a long, close-fitting mandrel through its bore, and the bore is the primary datum feature. How many degrees of freedom does that mandrel remove?</p>`,
    answer: 4,
    unit: "degrees of freedom",
    tolerance: 0.01,
    explanation: `<p>A long cylindrical fit constrains both translations perpendicular to the axis and both tips about axes perpendicular to it.</p>
<p class="eq">2 translations + 2 rotations = <strong>4 DOF</strong></p>
<p>What survives is rotation about the mandrel's own axis and sliding along it, which is what the secondary datum (usually a face perpendicular to the bore) and the tertiary (a keyway, dowel or bolt hole) are for.</p>
<p>Watch the word <em>long</em>. A bore shorter than about half its diameter cannot control tipping, so it removes only the two translations and a face has to be primary instead.</p>`,
  },
  {
    id: "datums-q25",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A cover plate bolts down onto a machined boss face on a gearbox, is centred by a short spigot, and is clocked by a single dowel. Which feature should be the primary datum feature?</p>`,
    choices: [
      "The spigot diameter, because that is what centres it",
      "The dowel hole, because it fixes the cover's clocking",
      "The outer edge, being the easiest to reach with a gage",
      "The face that lands on the boss, because it seats first",
    ],
    answer: 3,
    explanation: `<p>Datums replicate the mating interface, in the order the part is actually immobilized. The cover lands on the boss face first, and that face carries the bolt load and controls squareness, so it is A, removing three degrees of freedom.</p>
<p>The <strong>short</strong> spigot then centres the cover (2 DOF), making it B, and the dowel takes the last rotation as C. Note that this is the same 3-2-1 accounting in round hardware.</p>
<p>The order matters: if you made the short spigot primary it would only remove two DOF and could not control tipping, so the cover's squareness to the gearbox would be undefined. Choosing the outer edge because it is convenient to measure is the failure this whole topic warns about. Nothing in the assembly touches it.</p>`,
  },
  {
    id: "datums-q26",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Datum feature B is a <em>pin</em> with a size range of &#8960;12.00&#8211;12.30, referenced at MMB. It is produced at &#8960;12.10. How much datum shift is available, in mm (diametral)?</p>`,
    answer: 0.2,
    unit: "mm",
    explanation: `<p>For an <strong>external</strong> feature of size, maximum material means the <em>largest</em> pin, so MMB = &#8960;12.30 and the simulator is a fixed ring or bore at 12.30.</p>
<p class="eq">shift = MMB &#8722; produced size = 12.30 &#8722; 12.10 = <strong>0.20 mm</strong> (diametral)</p>
<p>0.10, from 12.10 &#8722; 12.00, treats the smallest pin as the maximum material boundary, which is the rule for a <em>hole</em>, not a pin. Ask which limit puts the most material on the part: largest for a shaft or boss, smallest for a hole or slot.</p>`,
  },
  {
    id: "datums-q27",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A fixture builder adds a fourth support pad under the primary datum face "for extra stability", all four pads ground to the same height. What is the consequence?</p>`,
    choices: [
      "The part is held more rigidly, so repeatability improves",
      "The primary datum now removes four degrees of freedom",
      "The part can rock between rest positions, so results scatter",
      "No effect at all, since three points already define a plane",
    ],
    answer: 2,
    explanation: `<p>Three points define a plane uniquely; a real surface has form error, so a fourth pad is almost never coplanar with the contact the part actually finds. The part then has two (or more) valid rest positions and rocks between them, each with a slightly different tilt, and every measured coordinate inherits that tilt.</p>
<p>The scale is easy to estimate: form error &delta; across a span L gives a tilt of about &delta;/L, so 0.05 mm across 200 mm is 0.25 mrad, which is 0.05 mm at a feature 200 mm away. That is a gage R&amp;R failure, not a bias you can calibrate out.</p>
<p>The last option is the seductive one: three points <em>do</em> define a plane, which is exactly why the fourth pad is harmful rather than harmless. If a large part genuinely needs more support, the extra supports must be adjustable or spring-loaded so they carry load without competing for the location.</p>`,
  },
  {
    id: "datums-q28",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A casting sits on three datum target pads. Two of them are 240 mm apart along the part; the third stands only 30 mm off the line joining them. Pad heights are held to &#177;0.05 mm. In the worst case, how much can the casting tilt on that fixture, in mrad?</p>`,
    answer: 3.33,
    unit: "mrad",
    explanation: `<p>A three-pad support tilts about two independent axes, and the two are not equally sensitive: each is the worst-case height difference divided by the span <em>in that direction</em>. So the modelling decision is which span to divide by, and the answer is the small one.</p>
<p>Worst-case height difference between any pad and the plane of the other two is one pad at its high limit against another at its low limit:</p>
<p class="eq">&Delta;h = 0.05 &minus; (&minus;0.05) = 0.10 mm</p>
<p class="eq">tilt across the triangle = &Delta;h / 30 = 3.33 &times; 10<sup>&minus;3</sup> rad = <strong>3.33 mrad</strong></p>
<p>Along the long direction the same 0.10 mm gives only 0.10/240 = 0.42 mrad, eight times better. Answering 0.42 divides by the span you can see rather than the one that governs.</p>
<p>What it costs downstream: 3.33 mrad tips a feature 150 mm above the seating face by 0.50 mm. That is why the standard advice is not just "three pads" but "three pads spread as widely as the part allows in <em>both</em> directions". A long thin support triangle is barely better than a line contact, and it is also the layout most likely to let the centre of gravity fall outside it.</p>`,
  },
  {
    id: "datums-q29",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Two fixture layouts for the same casting are shown, each using three primary support pads. The layout on the right is rejected at design review. Why?</p>`,
    figure: figPads,
    choices: [
      "The centre of gravity falls outside the support triangle",
      "Three pads are too few to establish a primary datum plane",
      "The pads sit too close to a machined edge of the casting",
      "The pads are not basic-dimensioned, so they are not targets",
    ],
    answer: 0,
    explanation: `<p>Three contacts define the primary datum plane in either layout, so the DOF accounting is identical. The difference is stability: the part's weight acts through its centre of gravity, and if that point lies outside the triangle formed by the three pads, the resultant gravity moment has nothing to react against, and the casting tips onto an edge as soon as it is set down or nudged by a probe.</p>
<p>Two design rules come out of this: keep the CG comfortably inside the support triangle (with margin for the operator loading the part off-centre), and spread the pads as widely as the part allows, because the triangle's size is what divides any pad height error into an angular error.</p>
<p>The distractors are plausible-sounding rules that are simply not true here: three points is the correct number, proximity to a machined edge is not itself a fault, and targets do need basic dimensions but both layouts share that requirement.</p>`,
  },
  {
    id: "datums-q30",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A hole 90 mm from the datum corner measures 60.00 mm when the part is set up A | B | C, and 60.18 mm when it is set up A | C | B. What is the out-of-squareness between datum features B and C, in mrad?</p>`,
    figure: figSwap,
    answer: 2,
    unit: "mrad",
    explanation: `<p>Swapping secondary and tertiary re-clocks the coordinate system by the full out-of-squareness angle between the two datum features, and the reading changes by that angle times the distance from the datum corner to the feature.</p>
<p class="eq">&Delta; = L &middot; &alpha; &nbsp;&#8594;&nbsp; &alpha; = &Delta; / L = 0.18 / 90 = 0.0020 rad</p>
<p class="eq">&alpha; = <strong>2.0 mrad</strong> (about 0.11&deg;)</p>
<p>It runs usefully in reverse. If two setups of the same part disagree and the discrepancy grows with distance from the datum corner, the cause is angular. A probe offset or a tool offset would show as a constant shift everywhere.</p>`,
  },
  {
    id: "datums-q31",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A CMM program probes four points on a 300 mm primary datum face that is visibly convex, and builds datum A with the software's default fit. Parts pass on the CMM and fail the hard gage. What should change?</p>`,
    figure: figCMM,
    choices: [
      "Probe the same four points with a smaller stylus ball tip",
      "Keep the least-squares fit and tighten the flatness tolerance on datum feature A",
      "Probe many more points and average them into the same plane",
      "Probe many more points and fit a tangent plane outside material",
    ],
    answer: 3,
    explanation: `<p>Two separate defects are at work. Four points on a 300 mm face cannot represent a crowned surface. You are fitting a plane through noise. And the default fit is <strong>least squares</strong>, which passes through the middle of the probed points, while a surface plate or hard gage rests on the <strong>high points</strong>. On a convex face the two planes differ by roughly half the form error and are tilted differently, so the CMM systematically reports smaller deviations.</p>
<p>Fixing both is the answer: probe enough points to capture the form, and select a constrained fit, tangent plane and outside the material, so the software reproduces what the gage physically does. For datum features of size, the equivalent is fitting the mating envelope rather than a least-squares axis.</p>
<p>Averaging more points (option 3) makes the least-squares plane more stable and no more correct. Tightening the flatness of A would help the real hardware but does not explain or fix the correlation gap, and probe ball size is irrelevant here.</p>`,
  },
  {
    id: "datums-q32",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A rib 120 mm tall is toleranced perpendicular within 0.10 mm to primary datum A, whose contact span is 300 mm. You want the form error of A to consume no more than 25% of that 0.10 mm. What flatness must you specify on A, in mm?</p>`,
    answer: 0.0625,
    unit: "mm",
    tolerance: 0.06,
    explanation: `<p>Work backwards from the allowed contribution at the top of the rib:</p>
<p class="eq">allowed &Delta; = 0.25 &times; 0.10 = 0.025 mm</p>
<p>That displacement comes from the part re-seating and tilting, &Delta; = &alpha;&middot;h, so</p>
<p class="eq">&alpha; = 0.025 / 120 = 2.083 &times; 10<sup>&minus;4</sup> rad</p>
<p>and the tilt available from form error across the contact span is &alpha; &asymp; &delta;/L, so</p>
<p class="eq">&delta; = &alpha; &middot; L = 2.083 &times; 10<sup>&minus;4</sup> &times; 300 = <strong>0.0625 mm</strong></p>
<p>On the drawing you would write the next round value down, 0.06, but the computed requirement is 0.0625. That is where the familiar guidance comes from: hold a primary datum feature's form to roughly a quarter of the tightest tolerance referenced to it. The derivation shows what actually drives it: the ratio of feature height to datum contact span. A short, wide datum face is forgiving; a tall feature on a narrow datum is not.</p>`,
  },
  {
    id: "datums-q33",
    type: "mc",
    difficulty: 2,
    prompt: `<p>An inspector rejects a part, then asks whether the 0.25 mm by which the datum hole came out oversize can be credited as datum shift. The feature control frame reads A | B | C with no modifiers anywhere. What is your answer?</p>`,
    choices: [
      "Yes &#8212; an oversize datum hole always produces datum shift",
      "No &#8212; without the modifier the simulator must fit the hole",
      "Yes, but only half of it, since shift is a radial quantity",
      "No &#8212; datum shift only ever applies to the primary datum",
    ],
    answer: 1,
    explanation: `<p>No modifier means <strong>RMB</strong>: the datum feature simulator must contact the actual surface regardless of the produced size. Physically that is an expanding mandrel or collet; in CMM software it is the fitted mating envelope. Either way the datum axis is pinned to the feature that was made, and there is no looseness to claim, so shift is zero.</p>
<p>Datum shift exists only when the drawing puts &#9410; (or &#9409; for LMB) after the datum letter, because that is what freezes the simulator at a fixed boundary and allows the part to float on it.</p>
<p>The half-of-it option confuses the diametral and radial statements of the same freedom, and the last option is simply false. Shift applies to any datum feature <em>of size</em> referenced at a material boundary, in any precedence position. The right response to the inspector is a design conversation: if the assembly really tolerates that float, add the modifier to the drawing.</p>`,
  },
  {
    id: "datums-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A hole carries position &#8960;0.3 to A | B | C. In a cost review, someone proposes deleting C from the callout to "save inspection time". What actually changes?</p>`,
    choices: [
      "Nothing measurable, since C only supplied one contact point",
      "The zone diameter effectively doubles, from 0.3 to about 0.6",
      "The zone can slide along B, so its location is uncontrolled",
      "The hole is then controlled for orientation but not location",
    ],
    answer: 2,
    explanation: `<p>C is what removes the last translation. Delete it and the datum reference frame has an unconstrained degree of freedom, so the tolerance zone is no longer tied to a fixed origin in that direction. It is free to slide along the surface of B, and the basic dimension measured from C becomes meaningless.</p>
<p>The inspection software will still report a number, because it optimizes the fit; what you have actually bought is a rule that lets the hole sit anywhere along one axis. That is occasionally intentional (a slot or a clearance direction that genuinely does not matter), but it is never free.</p>
<p>The zone diameter is unaffected, still &#8960;0.3, which is why option 2 is wrong, and orientation to A is still controlled plus location in B's direction, which rules out option 4. If the goal really is cheaper inspection, cut the number of probed points or loosen the tolerance; do not silently delete a degree of freedom.</p>`,
  },
  {
    id: "datums-q35",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A shaft is laid in a long V-block (its cylindrical surface is the primary datum feature) and pushed up against a flat stop that contacts its end face. How many degrees of freedom have been removed?</p>`,
    answer: 5,
    unit: "degrees of freedom",
    tolerance: 0.01,
    explanation: `<p>The long V-block behaves like a long cylindrical fit: both translations perpendicular to the shaft axis and both tips about axes perpendicular to it, so <strong>4 DOF</strong>. The end stop removes translation along the axis, <strong>1 more</strong>.</p>
<p class="eq">4 + 1 = <strong>5 DOF removed</strong>, 1 remaining</p>
<p>The survivor is rotation about the shaft's own axis. For a plain shaft that often does not matter, which is why many turned-part drawings stop at two datums. Add a keyway, a flat, a cross-hole or a timing mark and you need a tertiary datum to clock it.</p>`,
  },
  {
    id: "datums-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 600 mm welded frame is inspected against its as-welded base rail. Two suppliers using two check fixtures report results that differ by 1.5 mm on the same parts. Which drawing change fixes the correlation?</p>`,
    choices: [
      "Specify three datum target areas on the rail, basic located",
      "Add a flatness tolerance of 0.5 mm to the as-welded rail",
      "Require the frame to be clamped flat before it is measured",
      "Add a profile tolerance covering the whole as-welded surface",
    ],
    answer: 0,
    explanation: `<p>The disagreement is not a measurement error. It is two fixtures contacting a distorted 600 mm surface at different high points, which produces two genuinely different datum planes. Nothing downstream of that can be made to agree.</p>
<p><strong>Datum targets</strong> remove the ambiguity by telling every fixture and every CMM exactly where to touch: three pads on the rail, located with basic dimensions, ideally placed where the frame is stiff and away from weld-affected zones. After that, both suppliers realize the same DRF and their numbers converge.</p>
<p>The alternatives all fail for the same underlying reason: a flatness callout on an as-welded rail is not producible and does not say <em>where</em> contact occurs; a profile tolerance controls the surface but again does not define the contact points; and clamping the frame flat measures the fixture, not the part, unless the drawing formally specifies a restrained condition with clamp locations and forces.</p>`,
  },
  {
    id: "datums-q37",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A thin sheet-metal bracket measures in tolerance when clamped in the check fixture and out of tolerance lying free on the CMM table. Both inspectors insist their method is right. Which drawing addition settles it?</p>`,
    choices: [
      "A tighter flatness tolerance applied to the primary datum feature",
      "A note requiring the CMM to use tangent-plane datum fitting",
      "A restraint note giving the clamp locations and the forces to use",
      "A free-state modifier so the part is never clamped for inspection",
    ],
    answer: 2,
    explanation: `<p>This is a non-rigid part: its geometry depends on how it is held, so the drawing is incomplete until it says which state applies. The standard answer is a <strong>restrained condition note</strong>: where to clamp, in what order, and with what force or torque, usually chosen to reproduce how the bracket is bolted down in the assembly. Then both inspectors measure the same part in the same state.</p>
<p>A free-state modifier is the opposite convention: it says the feature is checked unclamped. It is a legitimate choice, but for a bracket that is bolted flat in service it measures a condition the product never sees, so it is the wrong default here.</p>
<p>Tightening flatness on a floppy part just moves the argument, and the tangent-plane note addresses a different failure (fit algorithm, not restraint). For anything sheet-metal, composite, or long and slender, the datum scheme is not complete without the restraint condition.</p>`,
  },
  {
    id: "datums-q38",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A hole pattern is positioned &#8960;0.30 to A | B&#9410; | C. Every hole is produced exactly at MMC, so there is no bonus tolerance. Datum feature B departs from its MMB by 0.24 mm. What is the largest radial displacement of the pattern from true position that can still be accepted, in mm?</p>`,
    answer: 0.27,
    unit: "mm",
    explanation: `<p>Two separate allowances add, because they act on different things. Each hole's axis may lie anywhere within its own zone, and the entire framework of zones may float on the fixed-size simulator.</p>
<p class="eq">zone radius = 0.30 / 2 = 0.15 mm</p>
<p class="eq">shift radius = 0.24 / 2 = 0.12 mm</p>
<p class="eq">total = 0.15 + 0.12 = <strong>0.27 mm</strong></p>
<p>The condition is hidden in the word <em>pattern</em>. The 0.27 mm exists only if <strong>all</strong> the holes drifted in the same direction, because the 0.12 mm of shift is one rigid displacement shared by every zone. Scatter them and each hole is back to its own 0.15 mm.</p>`,
  },
  {
    id: "datums-q39",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A lobed shaft is referenced RMB as the <em>primary</em> datum feature. Four constructions of its centreline are available on the CMM and, on a lobed surface, none of them coincide. Which one is the datum axis?</p>`,
    choices: [
      "The axis of the least-squares circle fitted to the surface",
      "The axis of the smallest cylinder that will fit over the shaft",
      "The axis of the largest cylinder that fits inside the shaft",
      "The line joining the centres of the shaft's two end faces",
    ],
    answer: 1,
    explanation: `<p>For an external feature of size the datum axis is the axis of the <strong>actual mating envelope</strong>: the smallest perfect cylinder that will just contain the produced surface. Primary here, so it is the <em>unrelated</em> envelope, free to find its own orientation; had this shaft been secondary the envelope would be held square to the higher-precedence datum instead. Physically that is a ring gage or a collet closing down onto the shaft, the same thing the mating bore does in the assembly, which is exactly why the standard defines it that way.</p>
<p>For an internal feature it flips: the mating envelope of a hole is the <em>largest</em> cylinder that fits inside it, which is what catches anyone who memorized one case instead of the rule behind it.</p>
<p>The least-squares centre is what CMM software gives you by default, and on a lobed or oval shaft it does not coincide with the envelope axis, a real source of gage-versus-CMM disagreement. The end-face option describes nothing the standard recognizes.</p>`,
  },
  {
    id: "datums-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>The weldment shown is located in its assembly by the two machined pads under the base and by the bore in the upright. The drawing calls the as-welded outer face of the upright as primary datum A. What is the strongest objection?</p>`,
    figure: figWeldment,
    choices: [
      "An as-welded surface may not carry a datum feature symbol under Y14.5",
      "Primary should be the bore instead, since it is the only precision feature here",
      "A weldment must have datum targets on all three of its datums",
      "Primary A should be the seating pads &#8212; they locate it in service",
    ],
    answer: 3,
    explanation: `<p>The objection that carries weight in a design review is functional: <strong>the as-welded face touches nothing</strong>. The assembly seats on the two machined pads and is centred by the bore, so those are the features that should be A and B. Referencing everything to a face the assembly never contacts means the print controls the wrong relationships, and it also inherits &#177;1.5 mm of weld distortion into every measurement.</p>
<p>The scheme that matches function: A = the machined pads (specified as datum targets, since they are the defined contact areas), B = the bore, C = whatever clocks the frame.</p>
<p>The other options are each wrong in a specific way. An as-welded surface <em>can</em> carry a datum feature symbol. With targets it is often the only option on a casting or weldment, so there is no rule to invoke. Making the <strong>bore</strong> primary is the tempting one, because it is the precision feature; but a bore this short cannot control tipping, and the assembly seats on the pads first, so the bore belongs at B where it removes the two translations. And datum targets are used where contact would otherwise be unrepeatable, not mandated everywhere on a weldment. Here they are needed on the pads, which are the defined contact areas, and nowhere else.</p>`,
  },
  {
    id: "datums-q41",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Two separate feature control frames on the same part &#8212; one on a hole pattern, one on a boss &#8212; both reference A | B&#9410; | C with identical modifiers. Unless the drawing says otherwise, how must they be verified?</p>`,
    choices: [
      "As one simultaneous requirement, in a single common setup",
      "Separately, since each frame owns its own set of zones",
      "Separately, but the two results added into one stack-up",
      "Either way &#8212; identical datum references always agree",
    ],
    answer: 0,
    explanation: `<p>When two or more feature control frames reference the same datums, in the same order, with the same modifiers, they form a <strong>simultaneous requirement</strong> by default: the tolerance zones for all of them are treated as one rigid pattern in one datum reference frame, and the part must satisfy them all in a single setup.</p>
<p>This matters most when datum shift is available. Verified separately, the pattern could claim the shift in one direction and the boss claim it in the other, and both would pass. No single physical position of the part satisfies both, so the part will not assemble. Verified simultaneously, one displacement has to work for everything, which is what the mating hardware demands.</p>
<p>To break the link deliberately you write SEP REQT under the relevant frame; that is a design decision to be made explicitly, not by accident of inspection sequence. This is a favourite senior-level question because it exposes whether a candidate thinks of tolerance zones as a physical family or as unrelated numbers.</p>`,
  },
  {
    id: "datums-q42",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A functional gage locates a part on a &#8960;20.000 pin representing a datum hole at MMB. After a year of production the pin measures &#8960;19.985. What does that do to the decisions the gage makes?</p>`,
    choices: [
      "Nothing &#8212; the gage still accepts every conforming part",
      "It grants 0.015 mm of extra shift, so bad parts can pass",
      "It removes 0.015 mm of shift, so good parts get rejected",
      "It biases every reading by 0.0075 mm toward one side",
    ],
    answer: 1,
    explanation: `<p>The simulator is supposed to sit at the maximum material boundary. A worn pin is <em>smaller</em> than that boundary, so every part has more clearance on it than the drawing allows, so the part can float an extra 0.015 mm diametral (0.0075 mm radial) before the gage complains. The gage has become more permissive than the print, and nonconforming parts are shipped.</p>
<p>Getting the direction right is the whole question. Wear on a locating <em>pin</em> loosens the fit and passes bad parts; wear that <em>enlarges</em> a gage member has the same effect; only a simulator that has grown tighter than its nominal boundary rejects good parts.</p>
<p>This is why gage tolerance and wear allowance are taken from the part's tolerance (typically about 5&#8211;10% of it) and why functional gages are on a scheduled recertification interval. You would have caught it with periodic gage calibration, plus correlation checks against CMM results on the same parts.</p>`,
  },
  {
    id: "datums-q43",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Datum feature B is a &#8960;30.00&#8211;30.25 hole. B is itself controlled with position &#8960;0.10 to datum A. A later feature control frame references B at MMB. The hole is produced at &#8960;30.15. How much datum shift is available, in mm (diametral)?</p>`,
    answer: 0.25,
    unit: "mm",
    explanation: `<p>MMB is not MMC here. When a datum feature of size carries its own geometric tolerance relative to a higher-precedence datum, the applicable maximum material boundary is its <strong>virtual condition</strong>, the worst-case boundary the feature can present once its own position error is included. For an internal feature that boundary is smaller than MMC:</p>
<p class="eq">MMB = MMC &#8722; position tolerance = 30.00 &#8722; 0.10 = &#8960;29.90</p>
<p class="eq">shift = 30.15 &#8722; 29.90 = <strong>0.25 mm</strong> (diametral)</p>
<p>Physically, the gage pin representing B must be &#8960;29.90, because a hole at MMC that is also 0.05 mm off position would not accept anything larger. Once the pin is that size, a &#8960;30.15 hole is loose on it by 0.25 mm.</p>
<p>Answering 0.15 (from 30.15 &#8722; 30.00) is the common error and it under-reports the freedom the assembly really has. Note the sign convention flips for an external datum feature: there MMB = MMC + its own tolerance.</p>`,
  },
  {
    id: "datums-q44",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A supplier machines a part in two setups: the first cuts face A and a bore, the second flips it onto A and cuts a hole pattern. Inspection to A | B | C fails position consistently in one direction, and the error grows with distance from the datum corner. Where do you look first?</p>`,
    choices: [
      "The tool offsets used to cut the holes in the second setup",
      "The size tolerance of the bore that was cut in the first setup",
      "The CMM probe qualification between the two inspection runs",
      "How the second setup locates B and C compared with the print",
    ],
    answer: 3,
    explanation: `<p>Read the signature. An error that is consistent in direction and <em>grows with distance</em> from the datum corner is angular: something is clocking the part. Multiply the observed slope by the distance and you get the misalignment, &alpha; = &Delta;/L.</p>
<p>The usual cause is that the machine setup realizes a different datum reference frame from the print. The part is pushed against a vise jaw or a fixture rail that effectively makes C secondary while the drawing says B is secondary, so the whole coordinate system is rotated by the out-of-squareness between those two features.</p>
<p>A tool offset error is a <strong>constant</strong> shift, identical near and far from the datum corner, so it does not fit the data. Bore size affects clearance, not pattern orientation. Probe qualification would show up on every feature including those measured in the first setup. The fix is either to align the machining setup with the print's precedence or, if the machine's scheme is the functional one, to change the print, but not both independently.</p>`,
  },
  {
    id: "datums-q45",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A plate is located on two datum holes B and C, 300 mm apart, both referenced at MMB. On this part B has 0.05 mm of radial float on its simulator and C has 0.10 mm. A feature lies <em>on the line joining the two holes</em>, 200 mm from B and 100 mm from C. How far can that feature move because of the float alone, in mm?</p>`,
    figure: figTwoHoles,
    answer: 0.0833,
    unit: "mm",
    explanation: `<p>Resist the temptation to compute a rotation and swing it about B. Rotation and translation here are <em>one</em> rigid-body displacement, and the two floats are the only constraints on it, so work directly in displacements.</p>
<p>For a rigid plate, the displacement of any point on the segment BC is the linear interpolation of the displacements of its ends. With t measured from B along a span s:</p>
<p class="eq">u(P) = (1 &minus; t/s)&middot;u<sub>B</sub> + (t/s)&middot;u<sub>C</sub></p>
<p class="eq">|u(P)| &le; (1 &minus; 200/300)(0.05) + (200/300)(0.10) = 0.0167 + 0.0667 = <strong>0.0833 mm</strong></p>
<p>The bound is reached when both holes float the <em>same</em> way and to their limits: mostly translation, with only 1.7 &times; 10<sup>&minus;4</sup> rad of clocking left over.</p>
<p>The number matters less than what follows. The maximum <em>rotation</em> is &alpha; = (r<sub>B</sub> + r<sub>C</sub>)/s = 0.15/300 = 5.0 &times; 10<sup>&minus;4</sup> rad, but reaching it requires B and C to float in <em>opposite</em> directions, and then the point of zero displacement is not at B, it sits s&middot;r<sub>B</sub>/(r<sub>B</sub> + r<sub>C</sub>) = 100 mm from B. Our feature is only 100 mm beyond that pivot, so the maximum-rotation case actually gives 0.05 mm, well under the answer. Applying the maximum rotation <em>and</em> pinning the pivot at B double-counts and returns 0.10 mm, a motion no admissible float can produce. Holding B genuinely fixed gives (2/3)(0.10) = 0.0667 mm.</p>
<p>Design lever: widening the hole spacing to 450 mm leaves the translation term untouched but shrinks the clocking, and reducing the float at C, the one nearer the feature, buys twice as much as reducing it at B.</p>`,
  },
  // @@EXTRA@@
];

export default extra;
