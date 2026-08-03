import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
//
// Figures live here as well as in the base file. All SVG element ids are
// prefixed "at<n>-" so they stay unique across the whole app.

// --- fig 1: cantilever hand check before the mesh -------------------------
const figHandCheck = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at31-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Hand check before you mesh anything</text>
  <rect x="56" y="66" width="16" height="108" fill="#334155"/>
  <path d="M56 74 L40 88 M56 92 L40 106 M56 110 L40 124 M56 128 L40 142 M56 146 L40 160" stroke="#64748b" stroke-width="1.3"/>
  <rect x="72" y="108" width="292" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <path d="M72 120 C 180 122, 260 136, 364 158" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="7 5"/>
  <line x1="364" y1="60" x2="364" y2="104" stroke="#dc2626" stroke-width="2.5" marker-end="url(#at31-load)"/>
  <text x="364" y="52" text-anchor="middle" fill="#dc2626" font-weight="700">P = 200 N</text>
  <line x1="386" y1="120" x2="386" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="120" x2="392" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="158" x2="392" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="398" y="144" fill="#1d4ed8" font-weight="700">&delta;</text>
  <line x1="72" y1="192" x2="364" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="72" y1="186" x2="72" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="364" y1="186" x2="364" y2="198" stroke="#64748b" stroke-width="1"/>
  <text x="218" y="186" text-anchor="middle" fill="#64748b" font-size="12">L = 0.40 m</text>
  <text x="80" y="100" fill="#64748b" font-size="12">fixed</text>
  <text x="20" y="220" fill="#334155" font-size="12">&delta; = PL<tspan baseline-shift="super" font-size="9">3</tspan>/(3EI). If FEA is 10&times; off, suspect units and I, not the mesh.</text>
</svg>`;

// --- fig 2: two convergence curves, one settles and one does not ----------
const figConvergePair = `<svg viewBox="0 0 460 292" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at32-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two mesh studies on the same bracket</text>
  <line x1="76" y1="218" x2="430" y2="218" stroke="#334155" stroke-width="1.6" marker-end="url(#at32-axis)"/>
  <line x1="76" y1="218" x2="76" y2="42" stroke="#334155" stroke-width="1.6" marker-end="url(#at32-axis)"/>
  <text x="428" y="238" text-anchor="end" fill="#334155" font-size="12">mesh refinement 1/h</text>
  <text x="40" y="132" text-anchor="middle" transform="rotate(-90 40 132)" fill="#334155" font-size="12">peak stress (MPa)</text>
  <line x1="88" y1="128" x2="418" y2="128" stroke="#28724f" stroke-width="1.4" stroke-dasharray="6 5"/>
  <text x="416" y="120" text-anchor="end" fill="#28724f" font-weight="700" font-size="12">186 MPa</text>
  <path d="M96 178 C 118 164, 140 150, 166 138 C 196 124, 226 112, 256 102 C 300 88, 350 72, 412 56" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <path d="M96 186 C 118 174, 140 164, 166 156 C 196 148, 226 142, 256 138 C 300 133, 350 129, 412 128" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <circle cx="96" cy="178" r="4.5" fill="#dc2626"/>
  <circle cx="166" cy="138" r="4.5" fill="#dc2626"/>
  <circle cx="256" cy="102" r="4.5" fill="#dc2626"/>
  <circle cx="412" cy="56" r="4.5" fill="#dc2626"/>
  <circle cx="96" cy="186" r="4.5" fill="#1d4ed8"/>
  <circle cx="166" cy="156" r="4.5" fill="#1d4ed8"/>
  <circle cx="256" cy="138" r="4.5" fill="#1d4ed8"/>
  <circle cx="412" cy="128" r="4.5" fill="#1d4ed8"/>
  <line x1="84" y1="258" x2="112" y2="258" stroke="#dc2626" stroke-width="2.6"/>
  <text x="120" y="262" fill="#334155" font-size="12">sharp re-entrant corner, r = 0: no limit</text>
  <line x1="84" y1="280" x2="112" y2="280" stroke="#1d4ed8" stroke-width="2.6"/>
  <text x="120" y="284" fill="#334155" font-size="12">modelled r = 3 mm fillet: converged</text>
</svg>`;

// --- fig 3: sharp vs filleted re-entrant corner, both meshed --------------
const figCornerFillet = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same bracket corner, two models</text>
  <line x1="230" y1="44" x2="230" y2="180" stroke="#e2e8f0" stroke-width="1"/>
  <polygon points="58,54 106,54 106,132 194,132 194,172 58,172" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <path d="M82 54 L82 172 M130 132 L130 172 M158 132 L158 172 M58 80 L106 80 M58 106 L106 106 M58 152 L194 152" stroke="#94a3b8" stroke-width="0.9"/>
  <path d="M106 132 L92 118 M106 132 L106 112 M106 132 L124 132 M106 132 L120 146" stroke="#dc2626" stroke-width="2"/>
  <circle cx="106" cy="132" r="4" fill="#dc2626"/>
  <path d="M272 54 L320 54 L320 116 Q320 132 336 132 L408 132 L408 172 L272 172 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <path d="M296 54 L296 172 M344 132 L344 172 M372 132 L372 172 M272 80 L320 80 M272 106 L320 106 M272 152 L408 152" stroke="#94a3b8" stroke-width="0.9"/>
  <path d="M320 116 Q320 132 336 132" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <text x="126" y="198" text-anchor="middle" fill="#dc2626" font-weight="700">sharp corner, r = 0</text>
  <text x="126" y="216" text-anchor="middle" fill="#64748b" font-size="11">peak 210 / 258 / 318 MPa</text>
  <text x="126" y="231" text-anchor="middle" fill="#64748b" font-size="11">as h halves: no limit</text>
  <text x="340" y="198" text-anchor="middle" fill="#1d4ed8" font-weight="700">modelled fillet, r = 3 mm</text>
  <text x="340" y="216" text-anchor="middle" fill="#64748b" font-size="11">peak 181 / 186 / 186 MPa</text>
  <text x="340" y="231" text-anchor="middle" fill="#64748b" font-size="11">converged: reportable</text>
  <text x="230" y="250" text-anchor="middle" fill="#334155" font-size="12">Report the filleted number. The sharp-corner peak is a property of the mesh.</text>
</svg>`;

// --- fig 4: shear locking in a single linear element ----------------------
const figShearLock = `<svg viewBox="0 0 460 284" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Why one linear element through the thickness is wrong</text>
  <path d="M46 104 Q134 82 222 104 L218 144 Q134 122 50 144 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <path d="M48 124 Q134 102 220 124" fill="none" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="6 4"/>
  <path d="M210 118 L220 121 L217 131" fill="none" stroke="#28724f" stroke-width="1.6"/>
  <text x="128" y="176" text-anchor="middle" fill="#28724f" font-weight="700">real bending</text>
  <text x="128" y="194" text-anchor="middle" fill="#64748b" font-size="11">the section rotates and stays</text>
  <text x="128" y="209" text-anchor="middle" fill="#64748b" font-size="11">normal: no shear strain</text>
  <polygon points="246,100 426,100 414,144 258,144" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <line x1="252" y1="122" x2="420" y2="122" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="420" y1="100" x2="420" y2="146" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>
  <path d="M406 122 A 14 14 0 0 0 412 133" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <text x="392" y="140" fill="#dc2626" font-weight="700">&gamma;</text>
  <text x="336" y="176" text-anchor="middle" fill="#dc2626" font-weight="700">one linear element</text>
  <text x="336" y="194" text-anchor="middle" fill="#64748b" font-size="11">edges must stay straight, so a</text>
  <text x="336" y="209" text-anchor="middle" fill="#64748b" font-size="11">false shear angle &gamma; appears</text>
  <line x1="20" y1="224" x2="440" y2="224" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="242" fill="#334155" font-size="11">Shear locking: the false shear soaks up energy and the element is far too stiff.</text>
  <text x="20" y="259" fill="#64748b" font-size="11">Symptom: deflection well under beam theory, and it barely improves in-plane.</text>
  <text x="20" y="276" fill="#64748b" font-size="11">Fix: 3+ elements through thickness, quadratic elements, or incompatible modes.</text>
</svg>`;

// --- fig 5: hourglassing, a zero-energy mode ------------------------------
const figHourglass = `<svg viewBox="0 0 460 292" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Hourglass mode: deformation that costs no energy</text>
  <polygon points="71,70 99,70 121,120 49,120" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="99,70 171,70 149,120 121,120" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="171,70 199,70 221,120 149,120" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="49,120 121,120 99,170 71,170" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="121,120 149,120 171,170 99,170" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="149,120 221,120 199,170 171,170" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="71,170 99,170 121,220 49,220" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <polygon points="99,170 171,170 149,220 121,220" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <polygon points="171,170 199,170 221,220 149,220" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <circle cx="85" cy="95" r="3.4" fill="#dc2626"/><circle cx="135" cy="95" r="3.4" fill="#dc2626"/><circle cx="185" cy="95" r="3.4" fill="#dc2626"/>
  <circle cx="85" cy="145" r="3.4" fill="#dc2626"/><circle cx="135" cy="145" r="3.4" fill="#dc2626"/><circle cx="185" cy="145" r="3.4" fill="#dc2626"/>
  <circle cx="85" cy="195" r="3.4" fill="#dc2626"/><circle cx="135" cy="195" r="3.4" fill="#dc2626"/><circle cx="185" cy="195" r="3.4" fill="#dc2626"/>
  <circle cx="252" cy="76" r="3.4" fill="#dc2626"/>
  <text x="264" y="80" fill="#dc2626" font-weight="700" font-size="12">one integration point</text>
  <text x="264" y="96" fill="#64748b" font-size="11">at the element centroid</text>
  <text x="248" y="128" fill="#334155" font-size="12">In this mode the centroid</text>
  <text x="248" y="144" fill="#334155" font-size="12">sees zero strain, so the</text>
  <text x="248" y="160" fill="#334155" font-size="12">element resists nothing.</text>
  <text x="248" y="188" fill="#334155" font-weight="700" font-size="12">Check the energy plot:</text>
  <text x="248" y="204" fill="#64748b" font-size="11">artificial energy &lt; 5% of</text>
  <text x="248" y="219" fill="#64748b" font-size="11">total strain energy</text>
  <line x1="20" y1="240" x2="440" y2="240" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="258" fill="#334155" font-size="11">Symptom: checkerboard deformed shape and deflection above beam theory.</text>
  <text x="20" y="275" fill="#64748b" font-size="11">Fix: hourglass control, full integration, or more elements through thickness.</text>
</svg>`;

// --- fig 6: over-constrained vs. the real fixture -------------------------
const figOverConstraint = `<svg viewBox="0 0 460 264" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at36-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="at36-free" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#28724f"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Over-constraint invents load the hardware never sees</text>
  <line x1="230" y1="44" x2="230" y2="164" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="44" y="86" width="14" height="66" fill="#334155"/>
  <path d="M44 92 L30 104 M44 108 L30 120 M44 124 L30 136 M44 140 L30 152" stroke="#64748b" stroke-width="1.2"/>
  <rect x="196" y="86" width="14" height="66" fill="#334155"/>
  <path d="M210 92 L224 104 M210 108 L224 120 M210 124 L224 136 M210 140 L224 152" stroke="#64748b" stroke-width="1.2"/>
  <rect x="58" y="108" width="138" height="24" fill="#fee2e2" stroke="#334155" stroke-width="1.8"/>
  <line x1="86" y1="120" x2="62" y2="120" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#at36-rxn)"/>
  <line x1="168" y1="120" x2="192" y2="120" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#at36-rxn)"/>
  <text x="127" y="100" text-anchor="middle" fill="#dc2626" font-weight="700" font-size="12">&Delta;T = 60 &deg;C</text>
  <rect x="258" y="86" width="14" height="66" fill="#334155"/>
  <path d="M258 92 L244 104 M258 108 L244 120 M258 124 L244 136 M258 140 L244 152" stroke="#64748b" stroke-width="1.2"/>
  <rect x="272" y="108" width="124" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="376" cy="139" r="5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="390" cy="139" r="5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="356" y1="146" x2="410" y2="146" stroke="#334155" stroke-width="1.5"/>
  <path d="M360 154 L368 146 M374 154 L382 146 M388 154 L396 146" stroke="#64748b" stroke-width="1.2"/>
  <line x1="398" y1="120" x2="428" y2="120" stroke="#28724f" stroke-width="2.4" marker-end="url(#at36-free)"/>
  <text x="330" y="100" text-anchor="middle" fill="#dc2626" font-weight="700" font-size="12">&Delta;T = 60 &deg;C</text>
  <text x="127" y="182" text-anchor="middle" fill="#334155" font-weight="700" font-size="12">model: both faces fixed</text>
  <text x="127" y="200" text-anchor="middle" fill="#1d4ed8" font-weight="700">R = 43.2 kN</text>
  <text x="127" y="218" text-anchor="middle" fill="#64748b" font-size="11">&sigma; = 144 MPa, invented</text>
  <text x="330" y="182" text-anchor="middle" fill="#334155" font-weight="700" font-size="12">hardware: slotted holes</text>
  <text x="330" y="200" text-anchor="middle" fill="#28724f" font-weight="700">R &asymp; 0</text>
  <text x="330" y="218" text-anchor="middle" fill="#64748b" font-size="11">the bar just grows</text>
  <text x="230" y="248" text-anchor="middle" fill="#334155" font-size="12">Steel bar, A = 300 mm<tspan baseline-shift="super" font-size="9">2</tspan>, E = 200 GPa, &alpha; = 12 &times; 10<tspan baseline-shift="super" font-size="9">&minus;6</tspan>/&deg;C</text>
</svg>`;

// --- fig 7: gauge placement across a stress gradient ----------------------
const figGagePlacement = `<svg viewBox="0 0 460 312" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at37-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="at37-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Where you bond the gauge decides whether correlation is possible</text>
  <path d="M60 40 L190 40 Q214 40 214 62 L400 62 L400 106 L214 106 Q214 128 190 128 L60 128 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="28" y1="84" x2="56" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#at37-load)"/>
  <line x1="432" y1="84" x2="404" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#at37-load)"/>
  <rect x="207" y="52" width="18" height="10" rx="2" fill="#fff" stroke="#28724f" stroke-width="1.6"/>
  <rect x="243" y="52" width="18" height="10" rx="2" fill="#fff" stroke="#28724f" stroke-width="1.6"/>
  <rect x="329" y="52" width="18" height="10" rx="2" fill="#fff" stroke="#28724f" stroke-width="1.6"/>
  <text x="216" y="46" text-anchor="middle" fill="#28724f" font-weight="700" font-size="12">A</text>
  <text x="252" y="46" text-anchor="middle" fill="#28724f" font-weight="700" font-size="12">B</text>
  <text x="338" y="46" text-anchor="middle" fill="#28724f" font-weight="700" font-size="12">C</text>
  <line x1="216" y1="136" x2="216" y2="166" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="252" y1="136" x2="252" y2="200" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="338" y1="136" x2="338" y2="209" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="60" y1="252" x2="424" y2="252" stroke="#334155" stroke-width="1.6" marker-end="url(#at37-axis)"/>
  <line x1="60" y1="252" x2="60" y2="158" stroke="#334155" stroke-width="1.6" marker-end="url(#at37-axis)"/>
  <path d="M64 240 L186 239 C 200 238, 208 205, 216 171 C 224 186, 236 200, 252 205 C 285 212, 310 214, 338 214 L416 214" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <circle cx="216" cy="171" r="4.5" fill="#dc2626"/>
  <circle cx="252" cy="205" r="4.5" fill="#28724f"/>
  <circle cx="338" cy="214" r="4.5" fill="#64748b"/>
  <text x="44" y="206" text-anchor="middle" transform="rotate(-90 44 206)" fill="#334155" font-size="12">surface stress</text>
  <text x="422" y="270" text-anchor="end" fill="#334155" font-size="12">distance along the bar</text>
  <text x="20" y="292" fill="#334155" font-size="11">A: steepest gradient; 1 mm of placement error shifts the reading ~20%.</text>
  <text x="20" y="306" fill="#64748b" font-size="11">B: strong signal, mild gradient. C: flat, but blind to the notch.</text>
</svg>`;

// --- fig 8: accuracy vs precision vs resolution ---------------------------
const figAccPrec = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Accuracy, precision, and what a calibration can fix</text>
  <circle cx="78" cy="100" r="40" fill="#f1f5f9" stroke="#cbd5e1"/><circle cx="78" cy="100" r="26" fill="#e2e8f0" stroke="#cbd5e1"/><circle cx="78" cy="100" r="13" fill="#fee2e2" stroke="#fca5a5"/>
  <circle cx="186" cy="100" r="40" fill="#f1f5f9" stroke="#cbd5e1"/><circle cx="186" cy="100" r="26" fill="#e2e8f0" stroke="#cbd5e1"/><circle cx="186" cy="100" r="13" fill="#fee2e2" stroke="#fca5a5"/>
  <circle cx="294" cy="100" r="40" fill="#f1f5f9" stroke="#cbd5e1"/><circle cx="294" cy="100" r="26" fill="#e2e8f0" stroke="#cbd5e1"/><circle cx="294" cy="100" r="13" fill="#fee2e2" stroke="#fca5a5"/>
  <circle cx="402" cy="100" r="40" fill="#f1f5f9" stroke="#cbd5e1"/><circle cx="402" cy="100" r="26" fill="#e2e8f0" stroke="#cbd5e1"/><circle cx="402" cy="100" r="13" fill="#fee2e2" stroke="#fca5a5"/>
  <circle cx="75" cy="97" r="3" fill="#1d4ed8"/><circle cx="81" cy="102" r="3" fill="#1d4ed8"/><circle cx="77" cy="104" r="3" fill="#1d4ed8"/><circle cx="82" cy="96" r="3" fill="#1d4ed8"/><circle cx="79" cy="100" r="3" fill="#1d4ed8"/>
  <circle cx="166" cy="79" r="3" fill="#1d4ed8"/><circle cx="172" cy="84" r="3" fill="#1d4ed8"/><circle cx="168" cy="86" r="3" fill="#1d4ed8"/><circle cx="173" cy="78" r="3" fill="#1d4ed8"/><circle cx="170" cy="82" r="3" fill="#1d4ed8"/>
  <circle cx="276" cy="86" r="3" fill="#1d4ed8"/><circle cx="310" cy="94" r="3" fill="#1d4ed8"/><circle cx="292" cy="120" r="3" fill="#1d4ed8"/><circle cx="302" cy="78" r="3" fill="#1d4ed8"/><circle cx="286" cy="110" r="3" fill="#1d4ed8"/>
  <circle cx="374" cy="76" r="3" fill="#1d4ed8"/><circle cx="392" cy="70" r="3" fill="#1d4ed8"/><circle cx="378" cy="92" r="3" fill="#1d4ed8"/><circle cx="396" cy="88" r="3" fill="#1d4ed8"/><circle cx="366" cy="84" r="3" fill="#1d4ed8"/>
  <text x="78" y="160" text-anchor="middle" fill="#334155" font-weight="700" font-size="11">precise + accurate</text>
  <text x="78" y="176" text-anchor="middle" fill="#64748b" font-size="11">the goal</text>
  <text x="186" y="160" text-anchor="middle" fill="#334155" font-weight="700" font-size="11">precise, biased</text>
  <text x="186" y="176" text-anchor="middle" fill="#64748b" font-size="11">fix by calibration</text>
  <text x="294" y="160" text-anchor="middle" fill="#334155" font-weight="700" font-size="11">accurate, noisy</text>
  <text x="294" y="176" text-anchor="middle" fill="#64748b" font-size="11">fix by averaging</text>
  <text x="402" y="160" text-anchor="middle" fill="#334155" font-weight="700" font-size="11">neither</text>
  <text x="402" y="176" text-anchor="middle" fill="#64748b" font-size="11">fix both</text>
  <line x1="20" y1="200" x2="440" y2="200" stroke="#e2e8f0" stroke-width="1"/>
  <text x="20" y="220" fill="#334155" font-size="11">Resolution = smallest change the display shows; it is not accuracy.</text>
  <text x="20" y="238" fill="#64748b" font-size="11">Repeatability = scatter on one setup; a bias shows only against a standard.</text>
</svg>`;

// --- fig 9: rigid spider vs distributed coupling --------------------------
const figCoupling = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at39-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">How you attach the load changes the local stress</text>
  <line x1="230" y1="40" x2="230" y2="192" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="40" y="86" width="170" height="96" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="125" cy="130" r="28" fill="#fff" stroke="#dc2626" stroke-width="3.5"/>
  <path d="M125 130 L153 130 M125 130 L145 150 M125 130 L125 158 M125 130 L105 150 M125 130 L97 130 M125 130 L105 110 M125 130 L125 102 M125 130 L145 110" stroke="#dc2626" stroke-width="2.2"/>
  <circle cx="125" cy="130" r="4.5" fill="#334155"/>
  <line x1="125" y1="126" x2="125" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#at39-load)"/>
  <rect x="250" y="86" width="170" height="96" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <ellipse cx="335" cy="130" rx="28" ry="31" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <circle cx="335" cy="130" r="28" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  <path d="M335 130 L363 130 M335 130 L355 150 M335 130 L335 158 M335 130 L315 150 M335 130 L307 130 M335 130 L315 110 M335 130 L335 102 M335 130 L355 110" stroke="#1d4ed8" stroke-width="1.1" stroke-dasharray="4 3"/>
  <circle cx="335" cy="130" r="4.5" fill="#334155"/>
  <line x1="335" y1="126" x2="335" y2="46" stroke="#dc2626" stroke-width="2.5" marker-end="url(#at39-load)"/>
  <text x="125" y="208" text-anchor="middle" fill="#dc2626" font-weight="700" font-size="12">RBE2 rigid spider</text>
  <text x="125" y="224" text-anchor="middle" fill="#64748b" font-size="11">the bore cannot ovalise</text>
  <text x="125" y="239" text-anchor="middle" fill="#64748b" font-size="11">local stress 3&times; too high</text>
  <text x="335" y="208" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="12">RBE3 distributed coupling</text>
  <text x="335" y="224" text-anchor="middle" fill="#64748b" font-size="11">passes the resultant only</text>
  <text x="335" y="239" text-anchor="middle" fill="#64748b" font-size="11">the bore is free to deform</text>
  <text x="230" y="258" text-anchor="middle" fill="#334155" font-size="12">Use a distributed coupling to introduce load; rigid only where it really is.</text>
</svg>`;

// --- fig 10: submodel and its cut boundary -------------------------------
const figSubmodel = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at40-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="at40-cut" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Submodelling: the cut must sit in a smooth-stress region</text>
  <polygon points="34,48 120,48 120,132 190,132 190,176 34,176" fill="#dbeafe" stroke="#334155" stroke-width="1.7"/>
  <path d="M77 48 L77 176 M34 90 L120 90 M34 154 L190 154 M155 132 L155 176" stroke="#94a3b8" stroke-width="0.9"/>
  <rect x="98" y="110" width="76" height="62" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="136" y="104" text-anchor="middle" fill="#dc2626" font-weight="700" font-size="11">region of interest</text>
  <line x1="196" y1="142" x2="246" y2="142" stroke="#334155" stroke-width="1.8" marker-end="url(#at40-flow)"/>
  <text x="221" y="134" text-anchor="middle" fill="#64748b" font-size="11">4&times; finer</text>
  <polygon points="262,72 322,72 322,148 424,148 424,196 262,196" fill="#dbeafe" stroke="#334155" stroke-width="1.7"/>
  <path d="M277 72 L277 196 M292 72 L292 196 M307 72 L307 196 M337 148 L337 196 M352 148 L352 196 M367 148 L367 196 M382 148 L382 196 M397 148 L397 196 M412 148 L412 196 M262 90 L322 90 M262 108 L322 108 M262 126 L322 126 M262 164 L424 164 M262 180 L424 180" stroke="#94a3b8" stroke-width="0.7"/>
  <path d="M322 148 Q322 168 342 168" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="262" y1="72" x2="322" y2="72" stroke="#1d4ed8" stroke-width="3.5"/>
  <line x1="424" y1="148" x2="424" y2="196" stroke="#1d4ed8" stroke-width="3.5"/>
  <line x1="278" y1="58" x2="278" y2="70" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#at40-cut)"/>
  <line x1="302" y1="58" x2="302" y2="70" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#at40-cut)"/>
  <line x1="440" y1="160" x2="428" y2="160" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#at40-cut)"/>
  <line x1="440" y1="184" x2="428" y2="184" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#at40-cut)"/>
  <text x="292" y="52" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="11">cut boundary</text>
  <text x="20" y="222" fill="#334155" font-size="11">Displacements from the coarse run are prescribed on the blue cut faces.</text>
  <text x="20" y="240" fill="#64748b" font-size="11">Legal only if the detail does not change global stiffness or the load path.</text>
</svg>`;

// --- fig 11: proof and ultimate test profile ------------------------------
const figProofProfile = `<svg viewBox="0 0 460 288" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="at41-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">One test profile, three articles, three different claims</text>
  <line x1="60" y1="212" x2="348" y2="212" stroke="#334155" stroke-width="1.6" marker-end="url(#at41-axis)"/>
  <line x1="60" y1="212" x2="60" y2="44" stroke="#334155" stroke-width="1.6" marker-end="url(#at41-axis)"/>
  <line x1="60" y1="164" x2="344" y2="164" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="60" y1="122" x2="344" y2="122" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="60" y1="80" x2="344" y2="80" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="352" y="168" fill="#64748b" font-size="12">limit, 8 kN</text>
  <text x="352" y="126" fill="#1d4ed8" font-size="12">1.5&times; proof</text>
  <text x="352" y="84" fill="#dc2626" font-size="12">2.0&times; ultimate</text>
  <path d="M62 212 L92 164 L124 164 L148 212 L172 212 L204 122 L236 122 L258 212 L278 212 L306 80 L322 80" fill="none" stroke="#334155" stroke-width="2.4"/>
  <path d="M316 74 L328 86 M328 74 L316 86" stroke="#dc2626" stroke-width="2.6"/>
  <text x="346" y="232" text-anchor="end" fill="#334155" font-size="12">time</text>
  <text x="40" y="128" text-anchor="middle" transform="rotate(-90 40 128)" fill="#334155" font-size="12">applied load</text>
  <text x="20" y="252" fill="#334155" font-size="11">Article 1: limit load and strain survey. Proves the model, not the margin.</text>
  <text x="20" y="268" fill="#334155" font-size="11">Article 2: 1.5&times; proof, hold, release, then inspect for permanent set.</text>
  <text x="20" y="284" fill="#64748b" font-size="11">Article 3: load to failure. Only this one measures the real ultimate margin.</text>
</svg>`;

// --- fig 12: 0/45/90 rectangular rosette ---------------------------------
const figRosette = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">0/45/90 rosette: three grids, one unknown direction</text>
  <rect x="40" y="44" width="200" height="184" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="140" y1="150" x2="226" y2="150" stroke="#94a3b8" stroke-width="1"/>
  <line x1="140" y1="150" x2="140" y2="64" stroke="#94a3b8" stroke-width="1"/>
  <g transform="translate(140 150)">
    <rect x="18" y="-11" width="44" height="22" rx="2" fill="#fff" stroke="#28724f" stroke-width="1.6"/>
    <path d="M24 8 L30 -8 L36 8 L42 -8 L48 8 L54 -8" fill="none" stroke="#28724f" stroke-width="1.3"/>
  </g>
  <g transform="rotate(-45 140 150)">
    <g transform="translate(140 150)">
      <rect x="18" y="-11" width="44" height="22" rx="2" fill="#fff" stroke="#1d4ed8" stroke-width="1.6"/>
      <path d="M24 8 L30 -8 L36 8 L42 -8 L48 8 L54 -8" fill="none" stroke="#1d4ed8" stroke-width="1.3"/>
    </g>
  </g>
  <g transform="rotate(-90 140 150)">
    <g transform="translate(140 150)">
      <rect x="18" y="-11" width="44" height="22" rx="2" fill="#fff" stroke="#b45309" stroke-width="1.6"/>
      <path d="M24 8 L30 -8 L36 8 L42 -8 L48 8 L54 -8" fill="none" stroke="#b45309" stroke-width="1.3"/>
    </g>
  </g>
  <circle cx="140" cy="150" r="4" fill="#334155"/>
  <text x="212" y="172" text-anchor="middle" fill="#28724f" font-weight="700" font-size="12">a, 0&deg;</text>
  <text x="196" y="98" text-anchor="middle" fill="#1d4ed8" font-weight="700" font-size="12">b, 45&deg;</text>
  <text x="118" y="76" text-anchor="middle" fill="#b45309" font-weight="700" font-size="12">c, 90&deg;</text>
  <text x="262" y="70" fill="#28724f" font-weight="700" font-size="12">&epsilon;<tspan baseline-shift="sub" font-size="9">a</tspan> = 300 &mu;&epsilon;</text>
  <text x="262" y="94" fill="#1d4ed8" font-weight="700" font-size="12">&epsilon;<tspan baseline-shift="sub" font-size="9">b</tspan> = 150 &mu;&epsilon;</text>
  <text x="262" y="118" fill="#b45309" font-weight="700" font-size="12">&epsilon;<tspan baseline-shift="sub" font-size="9">c</tspan> = &minus;100 &mu;&epsilon;</text>
  <text x="262" y="150" fill="#334155" font-size="11">The principal direction is</text>
  <text x="262" y="165" fill="#334155" font-size="11">not known in advance.</text>
  <text x="262" y="187" fill="#64748b" font-size="11">That is the whole reason</text>
  <text x="262" y="202" fill="#64748b" font-size="11">for the third grid.</text>
  <text x="20" y="246" fill="#334155" font-size="11">&epsilon;<tspan baseline-shift="sub" font-size="9">1,2</tspan> = (&epsilon;<tspan baseline-shift="sub" font-size="9">a</tspan>+&epsilon;<tspan baseline-shift="sub" font-size="9">c</tspan>)/2 &plusmn; (1/&radic;2)&radic;[(&epsilon;<tspan baseline-shift="sub" font-size="9">a</tspan>&minus;&epsilon;<tspan baseline-shift="sub" font-size="9">b</tspan>)&sup2; + (&epsilon;<tspan baseline-shift="sub" font-size="9">b</tspan>&minus;&epsilon;<tspan baseline-shift="sub" font-size="9">c</tspan>)&sup2;]</text>
</svg>`;

const extra: Question[] = [
  {
    id: "analysis-testing-q31",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Before meshing anything you hand-check the cantilever below: end load P = 200 N, length L = 0.40 m, E = 70 GPa, I = 2.0 &times; 10<sup>&minus;8</sup> m<sup>4</sup>. Using &delta; = PL<sup>3</sup>/(3EI), what tip deflection in mm should the FEA come back with?</p>`,
    figure: figHandCheck,
    answer: 3.05,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Use the cantilever end-load formula in consistent SI units:</p><p class="eq">&delta; = PL<sup>3</sup>/(3EI)</p><p class="eq">&delta; = 200(0.40)<sup>3</sup> / [3(70 &times; 10<sup>9</sup>)(2.0 &times; 10<sup>&minus;8</sup>)]</p><p class="eq">&delta; = 12.8 / 4200 = 0.00305 m = <strong>3.05 mm</strong></p><p>This is the gate the FEA has to pass. A model returning 0.3 mm or 30 mm is almost never a mesh problem. It is the unit system, the second moment of area the mesher actually built, or a restraint that is not a true encastre.</p>`,
  },
  {
    id: "analysis-testing-q32",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Three successive refinements at a perfectly sharp inside corner give peak von Mises 210, 258 and 318 MPa. Stress averaged over 3 mm either side of the same corner stays between 184 and 186 MPa throughout. What number goes in the report?</p>`,
    figure: figConvergePair,
    choices: [
      "318 MPa, the finest-mesh peak, because the finest mesh is the most accurate one",
      "210 MPa, the coarse-mesh peak, because a coarse mesh smooths out numerical noise",
      "186 MPa from a model with the drawing radius meshed; the sharp peak has no limit",
      "262 MPa, the average of the three peaks, since the truth lies somewhere between",
    ],
    answer: 2,
    explanation: `<p>A re-entrant corner with zero radius is a mathematical singularity in linear elasticity: the exact solution is unbounded, so the computed peak simply tracks element size and rises for ever. 318 MPa is a property of your mesh, not of the bracket. Averaging the three peaks averages three meaningless numbers.</p><p>The averaged stress holding at 184&ndash;186 MPa is the tell that the far field is converged and only the corner is misbehaving. The fix is to model the geometry the drawing actually calls out. Put the real fillet radius in, mesh it with six to eight elements around the arc, and converge that peak, or take net-section stress times a handbook K<sub>t</sub>. Reporting the singular peak gets a design rejected for a stress that does not exist; hiding it behind a coarse mesh is the same error with the sign flipped.</p>`,
  },
  {
    id: "analysis-testing-q33",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A 60 mm long, 6 mm thick steel strip in bending is meshed with a single layer of fully integrated linear hex elements through the thickness. FEA tip deflection is 0.42 mm; beam theory gives 1.70 mm. What is happening?</p>`,
    figure: figShearLock,
    choices: [
      "Shear locking: straight-edged linear elements add false shear, so bending is far too stiff",
      "Hourglassing: a zero-energy deformation mode in these elements adds no stiffness at all here",
      "The beam formula does not apply, because a 10:1 strip is too short for beam theory",
      "The modulus was entered four times too high, which stiffens the strip in bending",
    ],
    answer: 0,
    explanation: `<p>A linear hex has straight edges. In pure bending the section should rotate and stay normal to a curved mid-surface; a straight-edged element cannot curve, so the only way it can carry the axial strain gradient is to develop a shear strain that is not physically there. That parasitic shear absorbs strain energy, and the element comes out roughly four times too stiff, exactly the 1.70/0.42 = 4.0 ratio seen here.</p><p>Hourglassing is the opposite symptom (too flexible, checkerboard deformed shape) and needs reduced integration to occur. A 10:1 span-to-depth strip is squarely inside beam theory. A 4&times; modulus error is a real possibility, but it would also shift the stress and the modal frequencies, which is the next thing to check. The fix is element formulation, not mesh density in plane: use three or four elements through the thickness, quadratic elements, incompatible modes, or shells.</p>`,
  },
  {
    id: "analysis-testing-q34",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A new FEA workflow reproduces the textbook cantilever deflection to within 1%. The production bracket built with the same workflow still measures 18% more deflection in test than the model predicts. What does that pair of results support?</p>`,
    choices: [
      "The test article must be re-run, because a passing benchmark cannot be contradicted",
      "The benchmark is verification only; the bracket model can still misrepresent hardware",
      "Lower the modulus in every model until predicted and measured deflections agree",
      "Verification and validation are the same evidence, so no further work is justified",
    ],
    answer: 1,
    explanation: `<p>The benchmark shows the solver, element library and post-processing reproduce a known answer. That is verification, and it says nothing about whether the bracket model represents the bracket. Validation is the 18%, and 18% on deflection is a stiffness story: fixture compliance, bolt slip, an as-built thickness under nominal, a weld that is not the fillet you modelled, or a bonded interface that really slips.</p><p>Tuning modulus is the wrong move. Steel modulus varies by a couple of percent, not 18, so a modulus that closes the gap is a fudge factor wearing a material property's name, and it will not transfer to the next bracket. Work the physical causes first, measure the fixture, and only then change the model, with a reason attached.</p>`,
  },
  {
    id: "analysis-testing-q35",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A cantilever meshed with reduced-integration linear hex elements deflects 30% more than beam theory, and the deformed mesh shows a zigzag checkerboard pattern. The energy summary lists artificial energy at 14% of total strain energy. What do you change?</p>`,
    figure: figHourglass,
    choices: [
      "Reduce the load increment so the solver steps more slowly through the applied load",
      "Move to a linear static solver, since the checkerboard means the run went nonlinear",
      "Turn on hourglass control or full integration, and use 3-4 elements through thickness",
      "Coarsen the mesh until the checkerboard no longer shows up on the deformed plot",
    ],
    answer: 2,
    explanation: `<p>A reduced-integration hex has one integration point, at the centroid. There is a deformation pattern, the hourglass mode. In which every strain component is exactly zero at that point, so the element resists it with no stiffness at all. The mesh folds into the classic zigzag for free, and the structure reads as 30% too soft.</p><p>The diagnostic is the artificial (hourglass) energy: the working rule is that it must stay under about 5% of total strain energy, and 14% means the answer is contaminated. Fixes are hourglass stiffness/viscosity control, switching to full integration, moving to quadratic elements, or simply putting more elements through the thickness so the mode cannot develop. Load stepping is irrelevant in a linear run, and coarsening only makes the mode invisible while it is still eating the answer.</p>`,
  },
  {
    id: "analysis-testing-q36",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A linear static model carries a single 2.0 kN downward load, but the reported vertical reactions sum to 1.6 kN. The solver reports a converged residual. What do you do first?</p>`,
    choices: [
      "Check load direction, constraints, contact status, units, and whether a body is free",
      "Accept the plot, because a converged solver residual already guarantees equilibrium",
      "Raise the material yield strength until the reported reaction sum matches the load",
      "Refine the mesh at the supports until the missing 0.4 kN shows up in the reactions",
    ],
    answer: 0,
    explanation: `<p>A linear static model is still a statics problem: reactions must balance applied load to solver round-off, typically better than 0.1%. Missing 20% means the model is not solving the problem you think it is. Usual culprits are a load applied in a local coordinate system, a load spread onto a face that is partly unconnected, a contact pair that never closed, a body held only by weak springs, or reading one support out of several.</p><p>A converged residual only says the linear system was solved; it cannot tell you that you assembled the right one. Yield strength does not enter a linear static run at all, and mesh density does not create or destroy load. Reaction balance costs ten seconds and catches more bad models than any other single check.</p>`,
  },
  {
    id: "analysis-testing-q37",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>The corner your model drew sharp is called out on the drawing as a 3 mm radius. Net-section nominal stress there is 80 MPa and the handbook gives K<sub>t</sub> = 1.9 for that radius and section change. What peak stress do you report, in MPa?</p>`,
    figure: figCornerFillet,
    answer: 152,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>Stress concentration factors multiply the nominal stress at the net section:</p><p class="eq">&sigma;<sub>max</sub> = K<sub>t</sub> &sigma;<sub>nom</sub> = 1.9(80 MPa) = <strong>152 MPa</strong></p><p>That replaces the unusable sharp-corner FEA peak. Apply K<sub>t</sub> to the <em>net</em> section, through the reduced material, not the gross section. And K<sub>t</sub> is elastic: if 152 MPa is above yield the local material redistributes and you need Neuber rather than a straight multiply.</p>`,
  },
  {
    id: "analysis-testing-q38",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You are correlating FEA strain on a bolted aluminium bracket. The largest predicted gradient runs across the first 2 mm out from a bolt-hole edge. Why is a gauge bonded right there a poor correlation choice?</p>`,
    figure: figGagePlacement,
    choices: [
      "Strain gauges cannot be bonded within 10 mm of a hole in any aluminium part",
      "The gauge averages over its grid, and that average always equals the true peak",
      "Correlation is only meaningful when the gauge sits exactly on the modelled peak",
      "In a steep gradient, 1 mm of placement error moves the reading more than the model error",
    ],
    answer: 3,
    explanation: `<p>A gauge has a finite grid, a finite adhesive footprint, and a placement tolerance of roughly a millimetre by hand. Where stress falls 20% per millimetre, that tolerance alone swamps the difference you are trying to measure, and burrs, washer contact and the exact modelled hole radius add more. You end up unable to say whether a 15% mismatch means the model is wrong or the gauge is 1 mm off.</p><p>Bond the correlation gauge where the signal is strong but the gradient is mild. A few millimetres of shift changes the reading by 1-2%, so any disagreement is real information about the model. If the hole edge is the failure feature, attack it deliberately: model the radius, use a small-grid gauge or a strain-gauge chain, or move to DIC, and state the placement uncertainty in the report.</p>`,
  },
  {
    id: "analysis-testing-q39",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A linear analysis predicts 140 MPa at the critical location. For a conservative review you inflate that by 10% for load uncertainty and a further 5% for mesh/model uncertainty. Yield strength is 300 MPa. What adjusted yield factor of safety results?</p>`,
    answer: 1.86,
    tolerance: 0.03,
    explanation: `<p>Apply the uncertainty multipliers to demand, not to capacity:</p><p class="eq">&sigma;<sub>adj</sub> = 140(1 + 0.10 + 0.05) = 140(1.15) = 161 MPa</p><p class="eq">n = S<sub>y</sub>/&sigma;<sub>adj</sub> = 300/161 = <strong>1.86</strong></p><p>The nominal factor was 300/140 = 2.14, so 15% of stress uncertainty ate 0.28 of margin. Adding the terms linearly is deliberately pessimistic; root-sum-square gives 1.11 and n = 1.93 if you can argue the two are independent.</p>`,
  },
  {
    id: "analysis-testing-q40",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A bolted cover plate is modelled with every mating face bonded. In test one edge lifts visibly and the bolt strain gauges climb sharply once pressure passes about 60% of proof. What is the modelling error?</p>`,
    choices: [
      "Too many elements through the cover thickness stiffen the bolted interface locally",
      "Bonded contact cannot open, so the model missed separation and bolt-load redistribution",
      "The pressure load was applied in psi while the material data was entered in MPa",
      "The bolt preload is set too high, which is exactly why the cover edge lifted in test",
    ],
    answer: 1,
    explanation: `<p>Bonded contact welds the interface: it carries tension across the joint and cannot slip or gap. The test is telling you the joint separates, and once it does the load path changes completely. The flange stops sharing compression and the bolts take a much larger share of every further increment of pressure. That is why the bolt strains take off partway up the ramp instead of climbing linearly from zero.</p><p>The realistic model needs bolt preload, frictional contact at the flange, and a pressure load that follows the opening. Note the sign of the preload argument: too <em>little</em> preload causes early separation, not too much. A units error would scale everything uniformly and would not produce a knee in the bolt-strain curve at 60% load. Once separation is in the model, the fatigue question changes too: the bolt stress range after separation is far larger than before.</p>`,
  },
  {
    id: "analysis-testing-q41",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>An accelerometer has sensitivity 100 mV/g. During a shaker sweep the sine amplitude in the recorded channel is 0.250 V. What acceleration amplitude is that, in m/s<sup>2</sup>? Use 1 g = 9.81 m/s<sup>2</sup>.</p>`,
    answer: 24.5,
    unit: "m/s^2",
    tolerance: 0.03,
    explanation: `<p>Convert voltage to g through the sensitivity, then g to SI:</p><p class="eq">a = 0.250 V / (0.100 V/g) = 2.50 g</p><p class="eq">a = 2.50(9.81) = <strong>24.5 m/s<sup>2</sup></strong></p><p>Reading 100 mV/g as 100 V/g lands you three orders of magnitude out. Then check the amplitude convention, peak or RMS or peak-to-peak, before comparing anything to a specification.</p>`,
  },
  {
    id: "analysis-testing-q42",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A bracket FEA predicts 1.2 mm tip deflection. The test stand measures 1.7 mm. A dial indicator reading between the fixture base and the floor shows the fixture itself moving 0.4 mm under the same load. What is the useful next step?</p>`,
    choices: [
      "Lower the bracket modulus in the model until it also predicts 1.7 mm of tip motion",
      "Ignore the dial indicator, since only the bracket is the article under test here",
      "Refine the mesh at the bracket fillets until predicted deflection climbs to 1.7 mm",
      "Compare on one basis: subtract or model the 0.4 mm of fixture motion, then re-judge",
    ],
    answer: 3,
    explanation: `<p>The dial indicator has already found the discrepancy. The test measures bracket plus fixture, so bracket-only deflection is about 1.7 &minus; 0.4 = 1.3 mm against a predicted 1.2 mm. Roughly 8%, which is normal correlation, not a model failure. Either measure bracket motion relative to the fixture (put the reference on the fixture, not the floor) or add the fixture stiffness to the model so both sides describe the same system.</p><p>Tuning modulus to hit 1.7 mm bakes the test stand into the part's material card and will mispredict the next fixture. Mesh refinement makes a structure slightly more flexible, not 40% more. The general rule: when test exceeds model on deflection, suspect series compliance in the load train before you suspect the part.</p>`,
  },
  {
    id: "analysis-testing-q43",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 5.00 kN load measurement has independent uncertainty terms of 25 N, 40 N and 30 N. Express the combined standard uncertainty as a percent of the measured load.</p>`,
    answer: 1.12,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>Combine independent terms by root-sum-square, then normalise:</p><p class="eq">U = &radic;(25<sup>2</sup> + 40<sup>2</sup> + 30<sup>2</sup>) = &radic;(625 + 1600 + 900) = &radic;3125 = 55.9 N</p><p class="eq">U/P = 55.9/5000 &times; 100% = <strong>1.12%</strong></p><p>Carry that into the accept/reject decision. A part that passes its requirement by 0.5% against 1.12% measurement uncertainty has not demonstrated a pass, it has a coin flip. Adding the terms linearly gives 95 N (1.90%), defensible only if the errors are correlated, and a shared calibration bias must be treated that way rather than buried inside the square root.</p>`,
  },
  {
    id: "analysis-testing-q44",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A sheet-metal cover is 2 mm thick, 300 mm across, and loaded mainly in bending. Which meshing strategy gives an efficient model whose result you can defend in review?</p>`,
    choices: [
      "One layer of linear tetrahedra through the thickness, to keep the element count low",
      "Beams for the screw bosses only, since the panel itself carries almost no bending",
      "Shells at 2 mm thickness, or solids with at least three elements through the wall",
      "Lumped masses at the corners, because stress is not the quantity of interest here",
    ],
    answer: 2,
    explanation: `<p>With a 150:1 span-to-thickness ratio this is textbook shell territory: shells carry bending and membrane behaviour with the thickness as a property instead of as geometry, so you get the right stiffness with a fraction of the elements and a clean top/bottom surface stress output.</p><p>One layer of linear tets is the classic junior mistake, constant-strain tetrahedra cannot represent bending curvature, so the cover comes out far too stiff and deflection is badly under-predicted. If you must use solids, three or four elements through the wall with sensible aspect ratios is the minimum. Beams for the bosses answer a different question, and lumped masses answer none. The review question that follows is always "what did you converge?", on a shell model, converge deflection and membrane stress, not the stress at a rigid-constraint node.</p>`,
  },
  {
    id: "analysis-testing-q45",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An aluminium coupon of cross-section 80 mm<sup>2</sup> reads 400 microstrain on an axial gauge. With E = 70 GPa, what axial force does that imply, in N? Use it to cross-check the load cell.</p>`,
    answer: 2240,
    unit: "N",
    tolerance: 0.03,
    explanation: `<p>Work in N and mm so the units take care of themselves. E = 70 GPa = 70 000 N/mm<sup>2</sup> and &epsilon; = 400 &times; 10<sup>&minus;6</sup>:</p><p class="eq">&sigma; = E&epsilon; = 70000(0.000400) = 28.0 N/mm<sup>2</sup></p><p class="eq">F = &sigma;A = 28.0(80) = <strong>2240 N</strong></p><p>This is a genuinely useful cross-check: two independent instruments, a strain gauge and a load cell, that should agree within a couple of percent. If they do not, the suspects are gauge misalignment (a 5&deg; error costs about 1% on a uniaxial field, more if the state is biaxial), the actual machined area, load-train friction or side load, and load-cell calibration drift. It only holds while the coupon is elastic and the stress state is genuinely uniaxial.</p>`,
  },
  {
    id: "analysis-testing-q46",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A lifting-lug model applies the whole cable load to a single node on the hole edge. Peak stress lands on that node and swings by a factor of two between mesh versions. What has to change before the peak can be used for acceptance?</p>`,
    choices: [
      "Spread the load over the bearing area, or couple it to the bore through a distribution",
      "Delete the hole, so the applied load no longer has a stress raiser to concentrate at",
      "Keep the coarsest mesh, which reports the lowest and therefore the safest peak stress",
      "Rescale the contour legend so the red region covers a smaller part of the lug face",
    ],
    answer: 0,
    explanation: `<p>A force on a single node is a point load on a continuum: the exact elasticity solution is unbounded there, so the reported peak is set by element size and nothing else. That is why it halves and doubles with remeshing. Real cable load arrives through a shackle pin bearing on an arc of the bore, over a finite contact patch.</p><p>Model that: a bearing pressure distribution over the loaded half of the bore, a pin with contact, or a distributed coupling that transmits the correct resultant force and moment without welding the hole shut. Deleting the hole removes the load path you are trying to size. Coarsening the mesh chooses a number by picking the mesh that flatters it. Once the load introduction is physical, the checks that matter are bearing stress on the bore, net-section tension across the hole, and tear-out to the free edge, plus a fatigue check if the lift is cyclic.</p>`,
  },
  {
    id: "analysis-testing-q47",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A modal run on a 2 kg steel bracket returns a first mode at 3900 Hz. An SDOF estimate from the measured static stiffness gives about 125 Hz. The ratio is 31, which is close to &radic;1000. What do you check first?</p>`,
    choices: [
      "Element order, since linear elements are known to over-predict natural frequencies",
      "Density in the model unit system: an mm-N-tonne model needs 7.85e-9, not 7.85e-6",
      "Mesh density at the fillets, which is what sets the first bending mode of a bracket",
      "The restraints, since an over-fixed mounting face can raise a mode by a large factor",
    ],
    answer: 1,
    explanation: `<p>Frequency goes as &radic;(k/m), so a factor of 31 in frequency is a factor of about 1000 in mass or stiffness. Factors of exactly 1000 are not physics, they are unit systems. In an mm-N-tonne model steel density is 7.85 &times; 10<sup>&minus;9</sup> tonne/mm<sup>3</sup>; typing 7.85 &times; 10<sup>&minus;6</sup> makes the model 1000 times too light and every frequency &radic;1000 = 31.6 times too high.</p><p>The one-line check is the model's reported total mass: it should read 2 kg in whatever unit the system uses. Linear elements do stiffen a model and over-fixing does raise frequencies, but both are tens of percent effects, not 3000%. Whenever a discrepancy is close to a round power of ten, look at units before you look at physics.</p>`,
  },
  {
    id: "analysis-testing-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Gasket leakage may depend on bolt torque, temperature and gasket lot. You can afford 12 runs, not the full set of combinations. How should the 12 runs be spent?</p>`,
    choices: [
      "Twelve repeats of the easiest room-temperature condition, to build confidence in it",
      "Change torque, temperature and lot together on every run and reason from the pattern",
      "Set the pass/fail leak limit afterwards, once you see which of the twelve leaked",
      "A planned factorial over torque, temperature and lot against a measured leak rate",
    ],
    answer: 3,
    explanation: `<p>Three factors at two levels is eight runs for a full factorial, leaving four for centre points or replication, comfortably inside a budget of 12. That buys you the main effect of each factor and the two-factor interactions, which is exactly the question ("what drives leakage?") the team is asking.</p><p>Twelve repeats of one condition measure repeatability at that condition and tell you nothing about sensitivity. Changing everything at once confounds the factors so no effect can be attributed. Setting the limit after seeing the data is not a test, it is a description. Randomise run order or block by day so drift in the leak-rate instrument does not masquerade as a temperature effect, and record torque as measured, not as commanded.</p>`,
  },
  {
    id: "analysis-testing-q49",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A linear eigenvalue buckling run predicts 18 kN. Design practice applies a 0.45 knockdown for imperfections. Required service load is 6.0 kN. What is the ratio of knocked-down buckling load to service load?</p>`,
    answer: 1.35,
    tolerance: 0.03,
    explanation: `<p>Apply the knockdown, then compare to service load:</p><p class="eq">P<sub>allow</sub> = 0.45(18 kN) = 8.10 kN</p><p class="eq">margin = 8.10/6.0 = <strong>1.35</strong></p><p>The raw eigenvalue ratio is 18/6.0 = 3.0, which looks like a comfortable design. The knockdown takes it to 1.35, and that is the number to defend. The gap between 3.0 and 1.35 is the whole reason knockdowns exist: an eigenvalue solution assumes perfect geometry, perfectly aligned load and linear elastic prebuckling behaviour, none of which survive contact with a fabrication shop. For a thin shell the true knockdown can be harsher still, which is when you move to a nonlinear run with a seeded imperfection, or to test.</p>`,
  },
  {
    id: "analysis-testing-q50",
    type: "mc",
    difficulty: 2,
    prompt: `<p>FEA predicts +500 microstrain on the top surface of a beam at midspan. The test report compares that to a gauge on the <em>bottom</em> surface at the same station, reads &minus;520 microstrain, and concludes the model is wrong. What is the review comment?</p>`,
    choices: [
      "The model is wrong, because strain cannot change sign through the thickness in bending",
      "Discard the gauge channel, since a single physical reading cannot beat a solved model",
      "Double the modulus in the model so that the predicted and measured signs line up",
      "Compare the same surface: top and bottom bending strains are opposite in sign",
    ],
    answer: 3,
    explanation: `<p>In bending one surface is in tension and the other in compression, so +500 on top and &minus;520 on the bottom is 4% agreement, not a failure, and 4% is about as good as strain correlation gets. The report compared two different physical locations and called the difference a modelling error.</p><p>Before declaring disagreement, a correlation table has to match surface, station, gauge axis, sign convention, load level and data reduction. Changing modulus scales magnitude and cannot flip a sign. Check that the two magnitudes are close: if the top read +500 and the bottom &minus;700, the neutral axis is not where you put it, which points at an unmodelled doubler, an offset load or a section that is not what the drawing says.</p>`,
  },
  {
    id: "analysis-testing-q51",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A load cell sitting on a dead-weight standard of 900.0 N reads 1002, 1003, 1002, 1003 N over four trials. Its display resolution is 1 N. What is the right reading of that data?</p>`,
    figure: figAccPrec,
    choices: [
      "Precise but biased by about 102 N: recalibrate, because averaging will not help here",
      "Accurate but imprecise: average more trials and the reading will settle near 900 N",
      "Acceptable, because 1 N of display resolution means the value is good to about 1 N",
      "Random noise of about 102 N: filter the channel and use a longer sample window",
    ],
    answer: 0,
    explanation: `<p>The scatter is 1 N on a 900 N standard, so the instrument is extremely precise. It is also 102 N high every single time, which is a systematic bias, not noise. Averaging reduces random error and does nothing at all to a bias. Taking a thousand readings would still give 1002.5 N.</p><p>The fix is calibration against the traceable standard, either a new calibration constant or a documented correction. The fourth option treats a repeatable offset as noise; the third confuses resolution with accuracy. Resolution is only the smallest change the instrument can show; an instrument can display to 0.1 N and be 100 N wrong. This is exactly the failure that makes model-test correlation look like a modelling problem when it is an instrumentation problem.</p>`,
  },
  {
    id: "analysis-testing-q52",
    type: "mc",
    difficulty: 3,
    prompt: `<p>You attached the pin load at a lug hole with a rigid spider tied to every node on the bore. Local stress at the bore came out three times the value from a bearing-pressure model, and the deformed shape shows the hole staying perfectly round. What went wrong?</p>`,
    figure: figCoupling,
    choices: [
      "The spider is too coarse; tie it to more nodes around the bore and run the model again",
      "Nothing: a rigid spider is the conservative way to introduce a pin load into a lug",
      "A rigid spider stiffens the bore; use a coupling that passes only the resultant load",
      "The load should have been applied as a point force at the hole centre node instead",
    ],
    answer: 2,
    explanation: `<p>A rigid (RBE2-style) spider makes every node it touches move as a rigid body with the reference node. Tied to the whole bore, it forbids ovalisation. The deformation a loaded hole must undergo, so the surrounding material has to absorb that constraint, and the local stress inflates. The perfectly round deformed hole is the giveaway.</p><p>A distributed (RBE3-style) coupling instead distributes the reference-node force and moment to the bore nodes as a weighted load and adds no stiffness, so the hole is free to deform. Use rigid connections only where the hardware really is rigid relative to the part, a thick clevis, a solid pin sized to the bore. Adding more nodes to a rigid spider makes the over-stiffening worse, not better, and a point force at the centre node has no load path at all until something connects it. Whichever you use, the local stress at the coupling is suspect; read stress a fastener diameter away, or model the pin with contact.</p>`,
  },
  {
    id: "analysis-testing-q53",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You want to submodel a fillet by applying displacements from a coarse global run onto the cut boundary of a fine local model. Which condition makes that legitimate?</p>`,
    figure: figSubmodel,
    choices: [
      "The submodel must use the same element size as the global model along the cut faces",
      "The cut must lie where global stress is smooth and the detail changes nothing globally",
      "The submodel must instead be loaded with reactions read off the global support nodes",
      "The global run must already resolve the fillet stress itself to within a few percent",
    ],
    answer: 1,
    explanation: `<p>Submodelling rests on Saint-Venant: far enough from the detail, the displacement field does not care how the detail is resolved. Two things must hold. The cut has to sit in a region where the global stress field is smooth and already converged, typically two or three characteristic dimensions away from the feature. And the local detail must not alter global stiffness or load distribution. Adding a fillet is fine, cutting a large hole or changing a joint is not, because then the global displacements you are importing are wrong.</p><p>Matching element size at the cut defeats the point of submodelling. Support reactions are the wrong quantity to drive a cut boundary. And if the global run already resolved the fillet, you would not need a submodel. The check afterwards is simple: compare stress along the cut boundary between global and submodel. If they disagree, the cut is too close.</p>`,
  },
  {
    id: "analysis-testing-q54",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Requirement: 1.5&times; proof with no detectable permanent set, and 2.0&times; ultimate without rupture. Limit load is 8 kN and you have three articles. Which plan gets the most evidence?</p>`,
    figure: figProofProfile,
    choices: [
      "Load all three to 16 kN at once; if none ruptures, both requirements are demonstrated",
      "Load all three to 12 kN, hold and release; ultimate can then be shown by analysis",
      "Take one to 12 kN, then reuse that same article to 16 kN, keeping the other two spare",
      "Article 1 to 12 kN and inspect, article 2 to failure, article 3 held as the reserve",
    ],
    answer: 3,
    explanation: `<p>Proof and ultimate answer different questions and should not be stacked on one article. Proof demonstrates that the structure survives 1.5&times; limit with no permanent set, which requires a before-and-after dimensional or strain check on an undamaged article. Ultimate demonstrates that it does not rupture below 2.0&times; limit, which requires taking an article past the point of no return, and knowing the actual failure load and mode is worth far more than knowing it survived 16 kN.</p><p>Reusing the proof article for ultimate confounds the result: if it fails at 15 kN you cannot say whether proof loading damaged it. Loading all three to ultimate first destroys the proof evidence. Proving ultimate purely by analysis is exactly what the test was meant to replace. The reserve article covers a fixture failure, an instrumentation loss, or a retest after a design change, and running out of articles halfway through a campaign is the most common way test programmes slip.</p>`,
  },
  {
    id: "analysis-testing-q55",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 0/45/90 rectangular rosette reads &epsilon;<sub>a</sub> = 300, &epsilon;<sub>b</sub> = 150 and &epsilon;<sub>c</sub> = &minus;100 microstrain. What is the maximum principal strain &epsilon;<sub>1</sub>, in microstrain?</p>`,
    figure: figRosette,
    answer: 306,
    unit: "microstrain",
    tolerance: 0.03,
    explanation: `<p>For a rectangular (0/45/90) rosette the principal strains are:</p><p class="eq">&epsilon;<sub>1,2</sub> = (&epsilon;<sub>a</sub> + &epsilon;<sub>c</sub>)/2 &plusmn; (1/&radic;2)&radic;[(&epsilon;<sub>a</sub> &minus; &epsilon;<sub>b</sub>)<sup>2</sup> + (&epsilon;<sub>b</sub> &minus; &epsilon;<sub>c</sub>)<sup>2</sup>]</p><p>Centre term: (300 + (&minus;100))/2 = 100. Radius term:</p><p class="eq">(1/&radic;2)&radic;[(300 &minus; 150)<sup>2</sup> + (150 &minus; (&minus;100))<sup>2</sup>] = 0.7071&radic;(22500 + 62500) = 0.7071(291.5) = 206</p><p class="eq">&epsilon;<sub>1</sub> = 100 + 206 = <strong>306 microstrain</strong>, &epsilon;<sub>2</sub> = 100 &minus; 206 = &minus;106 microstrain</p><p>Maximum shear strain is &epsilon;<sub>1</sub> &minus; &epsilon;<sub>2</sub> = 412 microstrain. The principal angle is tan 2&theta; = (2&epsilon;<sub>b</sub> &minus; &epsilon;<sub>a</sub> &minus; &epsilon;<sub>c</sub>)/(&epsilon;<sub>a</sub> &minus; &epsilon;<sub>c</sub>) = 100/400, giving &theta; = 7.0&deg;. So the a-grid is close to the principal axis but not on it, which is why &epsilon;<sub>a</sub> = 300 slightly understates &epsilon;<sub>1</sub> = 306, and why a single uniaxial gauge would have quietly reported the wrong peak.</p>`,
  },
  {
    id: "analysis-testing-q56",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A nonlinear contact run stops at 40% of load with "excessive element distortion" reported at the interface. What is the right order of moves?</p>`,
    choices: [
      "Move to a linear static run, then scale the 40% result up to the full applied load",
      "Refine the contact mesh first, then raise the friction coefficient to 0.6 and re-run",
      "Check initial gaps and rigid-body motion, then soften contact and cut the load step",
      "Raise the solver force tolerance until the increment is accepted, then keep going",
    ],
    answer: 2,
    explanation: `<p>Excessive distortion at 40% load almost always means a body is moving in a way it should not, not that the mesh is too coarse. Order matters. First check geometry: initial penetration or a gap that the solver has to close with a huge stiffness, and whether every body is restrained in all six degrees of freedom before contact engages (a part held only by contact is free until it touches something). Then stabilise: soft or augmented-Lagrange contact, a small contact stabilisation damping, or a temporary weak spring to ground. Then cut the increment size so the solver takes the contact change in smaller steps.</p><p>Only after that does mesh refinement help. Raising friction makes convergence harder, not easier. Loosening the force tolerance buys a run that finishes and is wrong, the worst outcome of the four. And extrapolating a nonlinear contact result linearly discards the exact nonlinearity you ran the model to capture.</p>`,
  },
  {
    id: "analysis-testing-q57",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A hammer test on a bracket gives a first mode at 210 Hz. The FEA model says 260 Hz. If the modelled mass is correct and f is proportional to &radic;k, by what percent must the model stiffness be reduced to match the test?</p>`,
    answer: 34.8,
    unit: "%",
    tolerance: 0.03,
    explanation: `<p>With f proportional to &radic;k, stiffness scales as the square of the frequency ratio:</p><p class="eq">k<sub>test</sub>/k<sub>model</sub> = (f<sub>test</sub>/f<sub>model</sub>)<sup>2</sup> = (210/260)<sup>2</sup> = 0.652</p><p class="eq">reduction = (1 &minus; 0.652) &times; 100% = <strong>34.8%</strong></p><p>A 19% frequency error is a 35% stiffness error. The square is why modal correlation is such a sensitive test. Now the judgement: a 35% stiffness change cannot come from steel modulus, which is known to a couple of percent. Look at joints first. Bolted and welded interfaces modelled as bonded or rigid are routinely 30-50% stiffer than the real thing, and that is the usual answer.</p><p>Order of suspicion: joint and mount stiffness, then unmodelled mass (fixture, cables, accelerometers. Note that added mass lowers the test frequency and would mimic a soft model), then boundary conditions, then material. Change one at a time and re-correlate, otherwise you have fitted two errors against each other.</p>`,
  },
  {
    id: "analysis-testing-q58",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A steel bar (A = 300 mm<sup>2</sup>, E = 200 GPa, &alpha; = 12 &times; 10<sup>&minus;6</sup>/&deg;C) is modelled with both end faces fully fixed and heated 60 &deg;C. The model reports 43.2 kN of axial reaction and 144 MPa. In hardware the bar is bolted through slotted holes. What is the model telling you?</p>`,
    figure: figOverConstraint,
    choices: [
      "The 43.2 kN comes from the restraint, not the hardware: release the slotted end axially",
      "The bar yields at 144 MPa, so the cross-section has to grow before this design ships",
      "The reaction is real but conservative, so 144 MPa is a safe number to put in the report",
      "Thermal load always needs a nonlinear run, so this linear result cannot be interpreted",
    ],
    answer: 0,
    explanation: `<p>Check the number first: &sigma; = E&alpha;&Delta;T = 200000(12 &times; 10<sup>&minus;6</sup>)(60) = 144 N/mm<sup>2</sup>, and F = &sigma;A = 144(300) = 43.2 kN. The arithmetic is right, which is what makes this dangerous. The model is internally consistent and completely unphysical, because a slotted hole cannot generate axial restraint.</p><p>Over-constraint is the most productive source of fake load in FEA. The 43.2 kN would drive a bigger section, a heavier bolt pattern and a fictitious fatigue problem, all invented by a boundary condition. Model the slot as free (or as friction-limited: the real axial force is capped by bolt clamp load times friction coefficient, often a few kN, not 43). "Conservative" is not a defence when the invented load changes which failure mode you design against. And the run being linear is correct here; thermal expansion against a restraint is a linear problem until you reach yield.</p>`,
  },
  {
    id: "analysis-testing-q59",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 10 mm pin transfers 12 kN through an 8 mm thick lug. What projected bearing stress should the corrected FEA reproduce once the load is spread over the bore, in MPa?</p>`,
    answer: 150,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p>Bearing stress uses the projected area of the bore, diameter times thickness, not the curved surface area:</p><p class="eq">A<sub>proj</sub> = d t = 10(8) = 80 mm<sup>2</sup></p><p class="eq">&sigma;<sub>br</sub> = P/A<sub>proj</sub> = 12000/80 = <strong>150 MPa</strong></p><p>This is the hand check that tells you whether a corrected load-introduction model is sane. The true contact pressure is not uniform. It peaks near the load line and falls to zero at the edges of contact, so the local FEA value will run higher than 150 MPa, typically by a factor of around 1.3 to 1.6 for a close-fitting pin. If your model reports 20 MPa or 2000 MPa, the load is not entering the way you think. The two companion checks are net-section tension across the hole and shear tear-out to the free edge.</p>`,
  },
  {
    id: "analysis-testing-q60",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You have four strain channels for a bracket proof test. FEA puts the hot spot at a fillet root with a steep gradient, and the bracket bolts to a welded steel fixture. How do you allocate the channels?</p>`,
    choices: [
      "All four inside the fillet root, because that is the only location that can actually fail",
      "Two beside the hot spot in a mild gradient, one on the far load path, one on the fixture",
      "Four spread evenly over the bracket face so that the whole part is covered equally",
      "Two on the fixture and two on the load cell, so that the applied load is confirmed twice",
    ],
    answer: 1,
    explanation: `<p>Instrumentation should be chosen to answer questions, and a proof test has three. Is the model right near the critical feature? Two gauges just outside the steep gradient answer that with readings that survive a millimetre of placement error, and the pair gives you a redundancy check on each other. Is the load going where you think? One gauge on a clean far-field section of the load path, where P/A or Mc/I gives an unambiguous prediction, answers that. Is the fixture behaving? One gauge or displacement channel on the fixture catches the compliance and slip that otherwise show up as a "modelling error".</p><p>Four gauges crowded into the fillet root give four copies of the same uncertain measurement. Spreading them evenly optimises coverage rather than information. Instrumenting only the fixture and the load cell verifies the test rig and tells you nothing about the part. Write the predicted value for every channel before the test runs, so a bad channel is obvious on the day rather than in the report.</p>`,
  },
];

export default extra;
