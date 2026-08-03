import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Mechanical Design Process & Judgment
// SVG ids are all prefixed md<n>- / mdq<n>- to stay globally unique.
// ---------------------------------------------------------------------------

const figConstraint = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="md1-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="md1-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="116" y="20" text-anchor="middle" font-weight="600" fill="#334155">Over-constrained: 4 pads</text>
  <text x="344" y="20" text-anchor="middle" font-weight="600" fill="#334155">Exact constraint: 3 pads</text>
  <line x1="230" y1="32" x2="230" y2="240" stroke="#e2e8f0" stroke-width="1.5"/>
  <!-- ===== LEFT: over-constrained ===== -->
  <line x1="44" y1="46" x2="44" y2="122" stroke="#dc2626" stroke-width="2.5" marker-end="url(#md1-load)"/>
  <line x1="92" y1="46" x2="92" y2="118" stroke="#dc2626" stroke-width="2.5" marker-end="url(#md1-load)"/>
  <line x1="140" y1="46" x2="140" y2="112" stroke="#dc2626" stroke-width="2.5" marker-end="url(#md1-load)"/>
  <line x1="188" y1="46" x2="188" y2="122" stroke="#dc2626" stroke-width="2.5" marker-end="url(#md1-load)"/>
  <text x="116" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">torque all four</text>
  <!-- warped plate: dark outline then light fill drawn over it -->
  <path d="M 30 136 C 74 136 96 124 140 124 C 184 124 190 136 210 136" fill="none" stroke="#334155" stroke-width="14" stroke-linecap="round"/>
  <path d="M 30 136 C 74 136 96 124 140 124 C 184 124 190 136 210 136" fill="none" stroke="#dbeafe" stroke-width="11" stroke-linecap="round"/>
  <!-- pads: third one proud -->
  <rect x="34" y="144" width="22" height="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="82" y="144" width="22" height="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="130" y="138" width="22" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="178" y="144" width="22" height="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="26" y="152" width="184" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="141" y="200" text-anchor="middle" fill="#dc2626" font-size="12">pad 3 sits 0.5 mm proud</text>
  <line x1="141" y1="192" x2="141" y2="156" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="116" y="221" text-anchor="middle" fill="#64748b" font-size="12">plate bends to close the gap</text>
  <text x="116" y="237" text-anchor="middle" fill="#64748b" font-size="12">1 redundant constraint, built-in stress</text>
  <!-- ===== RIGHT: exact constraint ===== -->
  <line x1="272" y1="46" x2="272" y2="122" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#md1-rxn)"/>
  <line x1="344" y1="46" x2="344" y2="122" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#md1-rxn)"/>
  <line x1="416" y1="46" x2="416" y2="122" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#md1-rxn)"/>
  <text x="344" y="40" text-anchor="middle" fill="#1d4ed8" font-weight="600">torque all three</text>
  <rect x="252" y="128" width="184" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="262" y="142" width="22" height="10" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="333" y="142" width="22" height="10" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="404" y="142" width="22" height="10" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="252" y="152" width="184" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="344" y="200" text-anchor="middle" fill="#1d4ed8" font-size="12">any 3 points define a plane</text>
  <text x="344" y="221" text-anchor="middle" fill="#64748b" font-size="12">plate stays flat whatever the pads do</text>
  <text x="344" y="237" text-anchor="middle" fill="#64748b" font-size="12">0 redundant constraints, 0 built-in stress</text>
</svg>`;

const figLocating = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="md2-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="196" y="20" text-anchor="middle" font-weight="600" fill="#334155">3-2-1 locating scheme (part seen from above)</text>
  <!-- part outline -->
  <rect x="48" y="38" width="296" height="146" rx="8" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <!-- three support pads (primary plane) -->
  <circle cx="92" cy="158" r="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="92" cy="158" r="2.5" fill="#334155"/>
  <circle cx="300" cy="158" r="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="300" cy="158" r="2.5" fill="#334155"/>
  <circle cx="196" cy="62" r="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="196" cy="62" r="2.5" fill="#334155"/>
  <text x="196" y="84" text-anchor="middle" fill="#64748b" font-size="12">3 pads (primary)</text>
  <!-- round pin -->
  <circle cx="112" cy="112" r="11" fill="#fff" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="101" y1="112" x2="123" y2="112" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="112" y1="101" x2="112" y2="123" stroke="#1d4ed8" stroke-width="1"/>
  <text x="112" y="140" text-anchor="middle" fill="#1d4ed8" font-size="12">round pin</text>
  <!-- diamond pin in a slot -->
  <rect x="258" y="102" width="42" height="20" rx="10" fill="#fff" stroke="#1d4ed8" stroke-width="1.4"/>
  <polygon points="279,101 291,112 279,123 267,112" fill="#fff" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="279" y="140" text-anchor="middle" fill="#1d4ed8" font-size="12">diamond pin in slot</text>
  <!-- axis triad -->
  <line x1="374" y1="92" x2="374" y2="52" stroke="#334155" stroke-width="1.6" marker-end="url(#md2-dim)"/>
  <line x1="374" y1="92" x2="414" y2="92" stroke="#334155" stroke-width="1.6" marker-end="url(#md2-dim)"/>
  <circle cx="374" cy="92" r="6" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="374" cy="92" r="1.8" fill="#334155"/>
  <text x="368" y="48" text-anchor="end" fill="#334155" font-size="12">Y</text>
  <text x="420" y="96" fill="#334155" font-size="12">X</text>
  <text x="352" y="112" text-anchor="middle" fill="#334155" font-size="12">Z out</text>
  <!-- legend -->
  <line x1="48" y1="198" x2="412" y2="198" stroke="#e2e8f0" stroke-width="1.5"/>
  <circle cx="56" cy="214" r="4" fill="#334155"/>
  <text x="70" y="218" fill="#64748b" font-size="12">3 pads &#8594; Z, &#952;x, &#952;y &nbsp;(3 DOF)</text>
  <circle cx="56" cy="236" r="4" fill="#1d4ed8"/>
  <text x="70" y="240" fill="#64748b" font-size="12">round pin in reamed hole &#8594; X, Y &nbsp;(2 DOF)</text>
  <circle cx="56" cy="258" r="4" fill="#1d4ed8"/>
  <text x="70" y="262" fill="#64748b" font-size="12">diamond pin in slot &#8594; &#952;z only &nbsp;(1 DOF) = 6 total, none doubled</text>
</svg>`;

const figMargin = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="md3-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Where a factor of safety actually comes from</text>
  <!-- axes -->
  <line x1="48" y1="196" x2="440" y2="196" stroke="#334155" stroke-width="1.6"/>
  <line x1="48" y1="196" x2="48" y2="34" stroke="#334155" stroke-width="1.6"/>
  <text x="244" y="240" text-anchor="middle" fill="#64748b" font-size="12">stress on the part (MPa)</text>
  <text x="60" y="46" fill="#64748b" font-size="12">likelihood</text>
  <!-- overlap band -->
  <rect x="228" y="176" width="46" height="20" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <!-- load distribution (wide, red) -->
  <path d="M 62 196 C 112 196 118 84 158 84 C 202 84 214 196 274 196" fill="none" stroke="#dc2626" stroke-width="2.4"/>
  <text x="158" y="74" text-anchor="middle" fill="#dc2626" font-weight="600">applied load</text>
  <text x="158" y="58" text-anchor="middle" fill="#dc2626" font-size="12">duty cycle, misuse, &#177;40% estimate</text>
  <!-- strength distribution (narrow, blue) -->
  <path d="M 228 196 C 286 196 296 62 330 62 C 364 62 374 196 424 196" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <text x="352" y="52" text-anchor="middle" fill="#1d4ed8" font-weight="600">part strength</text>
  <text x="352" y="36" text-anchor="middle" fill="#1d4ed8" font-size="12">heat lot, surface, weld quality</text>
  <!-- nominal markers -->
  <line x1="158" y1="196" x2="158" y2="84" stroke="#dc2626" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="330" y1="196" x2="330" y2="62" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- margin dimension -->
  <line x1="158" y1="212" x2="330" y2="212" stroke="#64748b" stroke-width="1" marker-end="url(#md3-dim)"/>
  <line x1="330" y1="212" x2="158" y2="212" stroke="#64748b" stroke-width="1" marker-end="url(#md3-dim)"/>
  <line x1="158" y1="206" x2="158" y2="218" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="206" x2="330" y2="218" stroke="#64748b" stroke-width="1"/>
  <text x="244" y="207" text-anchor="middle" fill="#64748b" font-size="12">nominal FoS = mean strength / mean load</text>
  <!-- overlap callout -->
  <line x1="196" y1="164" x2="234" y2="178" stroke="#dc2626" stroke-width="1"/>
  <text x="152" y="168" text-anchor="middle" fill="#dc2626" font-size="12">overlap = failures</text>
</svg>`;

const figProcess = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="md4-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="md4-back" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Design loop: cheap decisions first, expensive ones last</text>
  <!-- row 1 -->
  <rect x="14" y="34" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="62" y="52" text-anchor="middle" fill="#334155" font-size="12">Requirements</text>
  <text x="62" y="66" text-anchor="middle" fill="#64748b" font-size="11">numbers, not adjectives</text>
  <rect x="128" y="34" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="176" y="52" text-anchor="middle" fill="#334155" font-size="12">Concepts</text>
  <text x="176" y="66" text-anchor="middle" fill="#64748b" font-size="11">diverge, then score</text>
  <rect x="242" y="34" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="290" y="52" text-anchor="middle" fill="#334155" font-size="12">Hand calcs</text>
  <text x="290" y="66" text-anchor="middle" fill="#64748b" font-size="11">size it, set margin</text>
  <rect x="356" y="34" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="404" y="52" text-anchor="middle" fill="#334155" font-size="12">Detail + FEA</text>
  <text x="404" y="66" text-anchor="middle" fill="#64748b" font-size="11">confirm, don't explore</text>
  <line x1="110" y1="54" x2="126" y2="54" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <line x1="224" y1="54" x2="240" y2="54" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <line x1="338" y1="54" x2="354" y2="54" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <line x1="404" y1="74" x2="404" y2="106" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <!-- row 2 -->
  <rect x="356" y="108" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="404" y="126" text-anchor="middle" fill="#334155" font-size="12">Prototype</text>
  <text x="404" y="140" text-anchor="middle" fill="#64748b" font-size="11">the risky part only</text>
  <rect x="242" y="108" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="290" y="126" text-anchor="middle" fill="#334155" font-size="12">Test to falsify</text>
  <text x="290" y="140" text-anchor="middle" fill="#64748b" font-size="11">not to confirm</text>
  <rect x="128" y="108" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="176" y="126" text-anchor="middle" fill="#334155" font-size="12">Design review</text>
  <text x="176" y="140" text-anchor="middle" fill="#64748b" font-size="11">state assumptions</text>
  <rect x="14" y="108" width="96" height="40" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="62" y="126" text-anchor="middle" fill="#334155" font-size="12">Release</text>
  <text x="62" y="140" text-anchor="middle" fill="#64748b" font-size="11">with known margins</text>
  <line x1="354" y1="128" x2="340" y2="128" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <line x1="240" y1="128" x2="226" y2="128" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <line x1="126" y1="128" x2="112" y2="128" stroke="#334155" stroke-width="1.6" marker-end="url(#md4-flow)"/>
  <!-- feedback -->
  <path d="M 266 108 L 266 92 L 290 92 L 290 76" fill="none" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#md4-back)"/>
  <text x="238" y="96" text-anchor="end" fill="#dc2626" font-size="11">test kills a model &#8594; resize</text>
  <!-- cost wedge -->
  <polygon points="16,206 448,190 448,232 16,216" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="120" y="216" text-anchor="middle" fill="#b91c1c" font-size="12">cost of changing your mind</text>
  <text x="384" y="216" text-anchor="middle" fill="#b91c1c" font-size="12">10&#215; to 100&#215;</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">Every loop you can close on paper is a loop you don't close in hardware.</text>
</svg>`;

const figBracketModes = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="md5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="150" y="18" text-anchor="middle" font-weight="600" fill="#334155">Where does this bracket actually fail?</text>
  <!-- wall -->
  <line x1="60" y1="34" x2="60" y2="222" stroke="#334155" stroke-width="2.2"/>
  <line x1="48" y1="50" x2="60" y2="38" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="78" x2="60" y2="66" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="106" x2="60" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="134" x2="60" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="162" x2="60" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="190" x2="60" y2="178" stroke="#64748b" stroke-width="1"/>
  <line x1="48" y1="218" x2="60" y2="206" stroke="#64748b" stroke-width="1"/>
  <!-- wall plate -->
  <rect x="60" y="48" width="18" height="160" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- horizontal arm -->
  <rect x="60" y="56" width="164" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- gusset (slender compression diagonal) -->
  <polygon points="78,196 78,182 206,72 214,80" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- bolts -->
  <circle cx="69" cy="88" r="5.5" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <circle cx="69" cy="196" r="5.5" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <!-- load -->
  <line x1="212" y1="26" x2="212" y2="52" stroke="#dc2626" stroke-width="2.5" marker-end="url(#md5-load)"/>
  <text x="248" y="32" text-anchor="middle" fill="#dc2626" font-weight="600">F, 2 Hz cyclic</text>
  <!-- callout bubbles -->
  <circle cx="92" cy="80" r="9" fill="#dc2626"/><text x="92" y="84" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">1</text>
  <circle cx="69" cy="88" r="9" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <circle cx="48" cy="88" r="9" fill="#dc2626"/><text x="48" y="92" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">2</text>
  <circle cx="146" cy="140" r="9" fill="#dc2626"/><text x="146" y="144" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">3</text>
  <line x1="146" y1="131" x2="146" y2="120" stroke="#dc2626" stroke-width="1"/>
  <circle cx="212" cy="90" r="9" fill="#dc2626"/><text x="212" y="94" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">4</text>
  <circle cx="48" cy="196" r="9" fill="#dc2626"/><text x="48" y="200" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">5</text>
  <!-- legend -->
  <line x1="252" y1="112" x2="252" y2="252" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="264" y="130" fill="#334155" font-size="12">1 &nbsp;fillet: fatigue crack starts</text>
  <text x="276" y="146" fill="#64748b" font-size="11">at the stress riser, not the peak</text>
  <text x="264" y="168" fill="#334155" font-size="12">2 &nbsp;top bolt: preload loss</text>
  <text x="276" y="184" fill="#64748b" font-size="11">then hole fretting and shear</text>
  <text x="264" y="206" fill="#334155" font-size="12">3 &nbsp;gusset: buckles in compression</text>
  <text x="264" y="228" fill="#334155" font-size="12">4 &nbsp;tip: wear at the contact pad</text>
  <text x="264" y="250" fill="#334155" font-size="12">5 &nbsp;joint: galvanic + crevice corrosion</text>
  <text x="150" y="244" text-anchor="middle" fill="#64748b" font-size="12">Static FoS on yield covers none of these.</text>
</svg>`;

const figQBoss = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Bracket on a machined boss &#8212; shown before torque</text>
  <!-- bolts -->
  <rect x="57" y="94" width="18" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <line x1="66" y1="106" x2="66" y2="152" stroke="#334155" stroke-width="2"/>
  <rect x="161" y="94" width="18" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <line x1="170" y1="106" x2="170" y2="152" stroke="#334155" stroke-width="2"/>
  <rect x="265" y="94" width="18" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <line x1="274" y1="106" x2="274" y2="152" stroke="#334155" stroke-width="2"/>
  <rect x="369" y="94" width="18" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.3"/>
  <line x1="378" y1="106" x2="378" y2="152" stroke="#334155" stroke-width="2"/>
  <!-- bracket (flat, stiff) -->
  <rect x="46" y="112" width="360" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <text x="26" y="124" text-anchor="middle" fill="#334155" font-size="12">bracket</text>
  <!-- pads -->
  <rect x="54" y="128" width="26" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="158" y="128" width="26" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="262" y="128" width="26" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="366" y="138" width="26" height="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <!-- boss -->
  <rect x="46" y="142" width="360" height="34" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="226" y="164" text-anchor="middle" fill="#64748b" font-size="12">cast housing boss, pads flat to 0.5 mm</text>
  <!-- gap callout -->
  <line x1="412" y1="128" x2="412" y2="138" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="406" y1="128" x2="418" y2="128" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="406" y1="138" x2="418" y2="138" stroke="#dc2626" stroke-width="1.4"/>
  <text x="424" y="136" text-anchor="middle" fill="#dc2626" font-size="12">0.5</text>
  <text x="379" y="196" text-anchor="middle" fill="#dc2626" font-size="12">bolt 4 has a 0.5 mm gap to close</text>
  <!-- span dimension -->
  <line x1="66" y1="214" x2="378" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="66" y1="208" x2="66" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="378" y1="208" x2="378" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="222" y="209" text-anchor="middle" fill="#64748b" font-size="12">240 mm bolt span, M6 &#215; 4</text>
</svg>`;

const figQMatrix = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Weighted concept matrix (ratings 1&#8211;5, higher is better)</text>
  <!-- grid -->
  <rect x="20" y="34" width="420" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="20" y="74" width="420" height="120" fill="#fff" stroke="#334155" stroke-width="1.2"/>
  <rect x="20" y="194" width="420" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <line x1="20" y1="104" x2="440" y2="104" stroke="#334155" stroke-width="0.8"/>
  <line x1="20" y1="134" x2="440" y2="134" stroke="#334155" stroke-width="0.8"/>
  <line x1="20" y1="164" x2="440" y2="164" stroke="#334155" stroke-width="0.8"/>
  <line x1="176" y1="34" x2="176" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="232" y1="34" x2="232" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="301" y1="34" x2="301" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="370" y1="34" x2="370" y2="224" stroke="#334155" stroke-width="0.8"/>
  <!-- header -->
  <text x="30" y="59" fill="#334155" font-weight="600" font-size="12">Criterion</text>
  <text x="204" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">w</text>
  <text x="266" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">A</text>
  <text x="335" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">B</text>
  <text x="405" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">C</text>
  <!-- rows -->
  <text x="30" y="94" fill="#334155" font-size="12">Stiffness at the tool point</text>
  <text x="204" y="94" text-anchor="middle" fill="#334155" font-size="12">0.40</text>
  <text x="266" y="94" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="335" y="94" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="405" y="94" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="30" y="124" fill="#334155" font-size="12">Mass</text>
  <text x="204" y="124" text-anchor="middle" fill="#334155" font-size="12">0.30</text>
  <text x="266" y="124" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="335" y="124" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="405" y="124" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="30" y="154" fill="#334155" font-size="12">Piece cost at 5000/yr</text>
  <text x="204" y="154" text-anchor="middle" fill="#334155" font-size="12">0.20</text>
  <text x="266" y="154" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="335" y="154" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="405" y="154" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="30" y="184" fill="#334155" font-size="12">Serviceability</text>
  <text x="204" y="184" text-anchor="middle" fill="#334155" font-size="12">0.10</text>
  <text x="266" y="184" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="335" y="184" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="405" y="184" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="30" y="214" fill="#1d4ed8" font-weight="600" font-size="12">Weighted score</text>
  <text x="204" y="214" text-anchor="middle" fill="#1d4ed8" font-size="12">1.00</text>
  <text x="266" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">3.40</text>
  <text x="335" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">3.70</text>
  <text x="405" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">?</text>
</svg>`;

const figQMatrixDone = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Completed concept matrix (ratings 1&#8211;5, higher is better)</text>
  <!-- grid -->
  <rect x="20" y="34" width="420" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="20" y="74" width="420" height="120" fill="#fff" stroke="#334155" stroke-width="1.2"/>
  <rect x="20" y="194" width="420" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <line x1="20" y1="104" x2="440" y2="104" stroke="#334155" stroke-width="0.8"/>
  <line x1="20" y1="134" x2="440" y2="134" stroke="#334155" stroke-width="0.8"/>
  <line x1="20" y1="164" x2="440" y2="164" stroke="#334155" stroke-width="0.8"/>
  <line x1="176" y1="34" x2="176" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="232" y1="34" x2="232" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="301" y1="34" x2="301" y2="224" stroke="#334155" stroke-width="0.8"/>
  <line x1="370" y1="34" x2="370" y2="224" stroke="#334155" stroke-width="0.8"/>
  <!-- header -->
  <text x="30" y="59" fill="#334155" font-weight="600" font-size="12">Criterion</text>
  <text x="204" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">w</text>
  <text x="266" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">A</text>
  <text x="335" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">B</text>
  <text x="405" y="59" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">C</text>
  <!-- rows -->
  <text x="30" y="94" fill="#334155" font-size="12">Stiffness at the tool point</text>
  <text x="204" y="94" text-anchor="middle" fill="#334155" font-size="12">0.40</text>
  <text x="266" y="94" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="335" y="94" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="405" y="94" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="30" y="124" fill="#334155" font-size="12">Mass</text>
  <text x="204" y="124" text-anchor="middle" fill="#334155" font-size="12">0.30</text>
  <text x="266" y="124" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="335" y="124" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="405" y="124" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="30" y="154" fill="#334155" font-size="12">Piece cost at 5000/yr</text>
  <text x="204" y="154" text-anchor="middle" fill="#334155" font-size="12">0.20</text>
  <text x="266" y="154" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="335" y="154" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="405" y="154" text-anchor="middle" fill="#334155" font-size="12">3</text>
  <text x="30" y="184" fill="#334155" font-size="12">Serviceability</text>
  <text x="204" y="184" text-anchor="middle" fill="#334155" font-size="12">0.10</text>
  <text x="266" y="184" text-anchor="middle" fill="#334155" font-size="12">5</text>
  <text x="335" y="184" text-anchor="middle" fill="#334155" font-size="12">2</text>
  <text x="405" y="184" text-anchor="middle" fill="#334155" font-size="12">4</text>
  <text x="30" y="214" fill="#1d4ed8" font-weight="600" font-size="12">Weighted score</text>
  <text x="204" y="214" text-anchor="middle" fill="#1d4ed8" font-size="12">1.00</text>
  <text x="266" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">3.40</text>
  <text x="335" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">3.70</text>
  <text x="405" y="214" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">3.60</text>
</svg>`;

const figQThermal = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mdq4-g" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Aluminium cover bolted to a steel housing</text>
  <!-- housing -->
  <rect x="40" y="40" width="380" height="120" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <text x="230" y="152" text-anchor="middle" fill="#64748b" font-size="12">steel housing, &#945; = 11.7 &#215; 10&#8315;&#8310; /K</text>
  <!-- cover -->
  <rect x="62" y="58" width="336" height="72" rx="4" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <text x="230" y="82" text-anchor="middle" fill="#334155" font-size="12">aluminium cover, &#945; = 23.0 &#215; 10&#8315;&#8310; /K</text>
  <!-- fasteners -->
  <circle cx="92" cy="110" r="9" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="83" y1="110" x2="101" y2="110" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="92" y1="101" x2="92" y2="119" stroke="#1d4ed8" stroke-width="1"/>
  <text x="92" y="138" text-anchor="middle" fill="#1d4ed8" font-size="12">fixed hole</text>
  <rect x="350" y="101" width="36" height="18" rx="9" fill="#fff" stroke="#1d4ed8" stroke-width="2"/>
  <circle cx="368" cy="110" r="6" fill="none" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="368" y="138" text-anchor="middle" fill="#1d4ed8" font-size="12">slot?</text>
  <!-- growth arrows -->
  <line x1="398" y1="70" x2="424" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#mdq4-g)"/>
  <text x="418" y="60" text-anchor="middle" fill="#dc2626" font-size="12">&#916;T = +60 K</text>
  <!-- span dim -->
  <line x1="92" y1="196" x2="368" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="190" x2="92" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="368" y1="190" x2="368" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="191" text-anchor="middle" fill="#64748b" font-size="12">300 mm between fastener centres</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">M5 screws in 5.5 mm clearance holes (0.25 mm radial clearance)</text>
</svg>`;

const figQCantilever = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mdq5-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="180" y="20" text-anchor="middle" font-weight="600" fill="#334155">Cantilever bracket, first-order sizing</text>
  <!-- wall -->
  <line x1="52" y1="46" x2="52" y2="170" stroke="#334155" stroke-width="2.2"/>
  <line x1="40" y1="62" x2="52" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="88" x2="52" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="114" x2="52" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="140" x2="52" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="40" y1="166" x2="52" y2="154" stroke="#64748b" stroke-width="1"/>
  <!-- arm -->
  <rect x="52" y="96" width="228" height="18" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <!-- load -->
  <line x1="272" y1="46" x2="272" y2="92" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mdq5-load)"/>
  <text x="272" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">F = 800 N</text>
  <!-- length dim -->
  <line x1="52" y1="150" x2="272" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="144" x2="52" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="144" x2="272" y2="156" stroke="#64748b" stroke-width="1"/>
  <text x="162" y="145" text-anchor="middle" fill="#64748b" font-size="12">L = 120 mm</text>
  <!-- section inset -->
  <text x="380" y="60" text-anchor="middle" fill="#334155" font-size="12">section at the wall</text>
  <rect x="336" y="74" width="88" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="336" y1="122" x2="424" y2="122" stroke="#64748b" stroke-width="1"/>
  <line x1="336" y1="116" x2="336" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="424" y1="116" x2="424" y2="128" stroke="#64748b" stroke-width="1"/>
  <text x="380" y="117" text-anchor="middle" fill="#64748b" font-size="12">b = 30 mm</text>
  <line x1="440" y1="74" x2="440" y2="104" stroke="#64748b" stroke-width="1"/>
  <line x1="434" y1="74" x2="446" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="434" y1="104" x2="446" y2="104" stroke="#64748b" stroke-width="1"/>
  <text x="432" y="94" text-anchor="end" fill="#1d4ed8" font-size="12">t = ?</text>
  <text x="230" y="192" text-anchor="middle" fill="#64748b" font-size="12">Steel, E = 200 GPa, allowable bending stress 120 MPa</text>
  <text x="230" y="212" text-anchor="middle" fill="#64748b" font-size="12">Tip deflection spec: 0.25 mm maximum at 800 N</text>
</svg>`;

const figQThreePoint = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Three-point mount, plan view (CG not centred)</text>
  <!-- instrument outline -->
  <rect x="70" y="46" width="316" height="150" rx="8" fill="#dbeafe" stroke="#334155" stroke-width="1.5" opacity="0.55"/>
  <!-- triangle of feet -->
  <polygon points="100,180 356,180 228,58" fill="none" stroke="#334155" stroke-width="1.8" stroke-dasharray="6 4"/>
  <circle cx="100" cy="180" r="9" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="356" cy="180" r="9" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="228" cy="58" r="9" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <text x="86" y="200" text-anchor="middle" fill="#334155" font-weight="600">A</text>
  <text x="370" y="200" text-anchor="middle" fill="#334155" font-weight="600">B</text>
  <text x="228" y="42" text-anchor="middle" fill="#334155" font-weight="600">C</text>
  <!-- CG -->
  <circle cx="228" cy="131" r="8" fill="#fff" stroke="#dc2626" stroke-width="2"/>
  <path d="M 228 123 A 8 8 0 0 1 236 131 L 228 131 z" fill="#dc2626"/>
  <path d="M 228 139 A 8 8 0 0 1 220 131 L 228 131 z" fill="#dc2626"/>
  <text x="252" y="128" fill="#dc2626" font-weight="600" font-size="12">CG, 60 kg</text>
  <!-- base dim -->
  <line x1="100" y1="222" x2="356" y2="222" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="216" x2="100" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="356" y1="216" x2="356" y2="228" stroke="#64748b" stroke-width="1"/>
  <text x="228" y="217" text-anchor="middle" fill="#64748b" font-size="12">AB = 600 mm</text>
  <!-- heights -->
  <line x1="404" y1="180" x2="404" y2="58" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="180" x2="410" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="58" x2="410" y2="58" stroke="#64748b" stroke-width="1"/>
  <text x="418" y="122" text-anchor="middle" fill="#64748b" font-size="12">500</text>
  <line x1="424" y1="180" x2="424" y2="131" stroke="#dc2626" stroke-width="1"/>
  <line x1="418" y1="131" x2="430" y2="131" stroke="#dc2626" stroke-width="1"/>
  <line x1="418" y1="180" x2="430" y2="180" stroke="#dc2626" stroke-width="1"/>
  <text x="440" y="160" text-anchor="middle" fill="#dc2626" font-size="12">200</text>
  <text x="230" y="245" text-anchor="middle" fill="#64748b" font-size="12">Feet A and B lie on one line; CG sits 200 mm from that line (mm).</text>
</svg>`;


const content: TopicContent = {
  lesson: {
    title: "Mechanical Design Process & Judgment",
    intro: `<p><strong>"How would you approach this?"</strong> decides more mechanical interviews than any formula does, and it is the part candidates prepare for least. Nobody is checking whether you remember the section modulus of a rectangle. They are checking whether you can take a vague ask, turn it into numbers, size it on a napkin, say where the margin came from, and name the failure mode that will actually get you.</p>
<p>What follows is the judgment that surrounds the math: requirements, concept selection, first-order sizing and margin, constraint and locating schemes, failure modes, the whole lifecycle, tests that can come out against you, and design review. Every idea here has a hardware consequence. A warped bracket. A cracked boss. A slot that should have been a hole.</p>`,
    sections: [
      {
        heading: "Requirements: turning a vague ask into numbers",
        html: `<p>"Make it stiffer." "It should be light." "It has to be reliable." You cannot pass or fail a part against an adjective. A requirement is a <strong>measurable quantity, a limit, and the condition it is measured under</strong>.</p>
<table>
<thead><tr><th>What you're handed</th><th>What you write down</th></tr></thead>
<tbody>
<tr><td>"Make the mount stiffer"</td><td>Tip deflection &le; 0.25 mm under a 400 N static side load at the tool point</td></tr>
<tr><td>"It should be light"</td><td>Assembly mass &le; 1.8 kg; mass is a goal, deflection is a limit</td></tr>
<tr><td>"It has to survive shipping"</td><td>Survives 1 m drop on any corner, packaged, with no permanent set</td></tr>
<tr><td>"Serviceable"</td><td>Sensor replaceable in &le; 10 min with a 4 mm hex key, no other part removed</td></tr>
</tbody>
</table>
<p>Separate <strong>functional requirements</strong> (what it must do: carry 400 N, hold &plusmn;0.2 mm, run at 80&nbsp;&deg;C) from <strong>constraints</strong> (the box it has to live inside: an existing 120 mm bolt circle, under &#36;40 at 5000/yr, the tooling you already own). Functional requirements are the problem. Constraints shrink the solution space. Somebody who treats a constraint as negotiable and a requirement as a nice-to-have will design the wrong thing confidently, which is why the distinction gets probed.</p>
<div class="callout"><strong>"Good enough" is a real answer.</strong> Every requirement needs a value <em>and</em> a reason. If nobody can say why the flatness is 0.05 mm rather than 0.2 mm, you are about to spend money grinding a surface for a number somebody guessed. Ask what breaks if it is 2&times; looser. If the answer is nothing, loosen it.</div>
<p><strong>Over-constrained requirements</strong> are the other failure mode. Mass &le; 1.8 kg, stiffness &ge; 40 N/&micro;m, cost &le; &#36;40 and delivery in six weeks may have no intersection at all. Grinding harder will not find one. Go back with the trade curve: "at 1.8 kg the stiffest thing I can build is 26 N/&micro;m; I can hit 40 if you give me 2.4 kg or &#36;85. Which do you want?" Showing the trade is the answer. Silently missing the target is not.</p>`,
      },
      {
        heading: "Concepts: diverge before you converge",
        html: `<p>Your first concept is the one your last project trained you to produce. That is how experience works, and it is also why the first idea samples your habits rather than the solution space. Generating three or four genuinely different architectures, not three variants of one architecture, is the cheapest engineering you will ever do: at this stage a concept costs an hour and a sketch.</p>
<p>To score them, use a <strong>Pugh matrix</strong>. Pick a datum concept, usually the incumbent design, list the criteria that actually differentiate, weight them, and rate each concept against the datum. The arithmetic is trivial:</p>
<p class="eq">S<sub>j</sub> = &Sigma; w<sub>i</sub> &middot; r<sub>ij</sub></p>
<p>where w<sub>i</sub> is the weight of criterion i (weights sum to 1) and r<sub>ij</sub> is concept j's rating on that criterion. The number that falls out matters far less than what the matrix <em>exposes</em>:</p>
<ul>
<li>If one criterion carries 60% of the weight, the matrix is theatre. That criterion has already decided, so go measure it instead of scoring.</li>
<li>If two concepts score within a few percent, the matrix cannot tell them apart. Say so, and separate them on something it never contained: technical risk, schedule, who has to build the thing.</li>
<li>Rows where every concept scores the same are not differentiators. Delete them; they only dilute weights.</li>
<li>A concept that wins on average but fails a hard constraint has not won. Constraints are filters. Screen with them before you score.</li>
</ul>
<p><strong>When to stop diverging:</strong> when new concepts stop changing the ranking, or when the next concept costs more than prototyping the leader. "I'd brainstorm many options" is a weak answer. "I'd generate three architectures that fail differently, screen them against the hard constraints, and take the two survivors to hand calcs" is the same idea with a stopping rule attached.</p>`,
      },
      {
        heading: "Sizing and margin: hand calcs before CAD",
        html: `<p>Before any CAD and long before any FEA, you should be able to say roughly how big the part is. A cantilevered bracket carrying load F at length L needs, to first order:</p>
<p class="eq">&sigma; = M/Z = 6FL / (b t&sup2;) &nbsp;&rarr;&nbsp; t = &radic;(6FL / (b &sigma;<sub>allow</sub>))</p>
<p>and if the spec is a deflection rather than a stress, &delta; = FL&sup3;/(3EI) sets the size instead. <strong>Run both.</strong> Which one governs is the most useful thing a five-minute calc tells you, because it tells you what to change. Stress-limited parts want a stronger material or a bigger section modulus. Stiffness-limited parts do not care about strength at all; they want more I, a shorter L, or a different material class, and swapping 6061 for 7075 buys nothing (both are ~70 GPa).</p>
<figure class="fig">${figMargin}<figcaption>The factor of safety exists to keep two distributions from overlapping: the load you don't know exactly and the strength you don't control exactly.</figcaption></figure>
<p>The factor of safety and the margin of safety are bookkeeping for that overlap:</p>
<p class="eq">n = &sigma;<sub>allow</sub> / &sigma;<sub>applied</sub> &nbsp;&nbsp;&nbsp;&nbsp; MS = n &minus; 1</p>
<p>A margin of safety of 0 means "exactly adequate", not "failed". The real question is where the number comes from. Four honest sources:</p>
<ol>
<li><strong>Load uncertainty.</strong> Is the load measured, calculated, or guessed? A guessed load with &plusmn;40% scatter is the dominant term, and no amount of FEA mesh refinement fixes it.</li>
<li><strong>Material and process variability.</strong> Casting porosity, weld quality, heat-lot scatter, surface finish. A machined billet part and a sand casting do not deserve the same number.</li>
<li><strong>Consequence of failure.</strong> A cracked bracket on a bench fixture is an afternoon. The same bracket over a person's head is a different number entirely.</li>
<li><strong>Inspectability.</strong> If the part can be inspected on an interval and cracks grow slowly, you can run leaner. If it is potted inside a sealed assembly and nobody will ever see it again, you cannot.</li>
</ol>
<div class="callout warn"><strong>Stacking conservatisms is bad engineering.</strong> Multiply a 1.4&times; load bump, a 1.25&times; material knockdown and a 1.15&times; analysis allowance, then apply a "design FoS of 2" on top, and you are carrying 4.0&times;. The part is twice as heavy as it needs to be, and <em>you no longer know your real margin</em>. Apply each uncertainty once, at the place it belongs, and state it. If you use a worst-case load, don't also use a worst-case FoS on top of it.</div>`,
      },
      {
        heading: "Constraint and locating: DOF, not bolts",
        html: `<p>A rigid body in space has <strong>six degrees of freedom</strong>: three translations, three rotations. A mount's job is to remove exactly the ones you want removed, <em>once each</em>.</p>
<p class="eq">R = &Sigma; C<sub>i</sub> &minus; (6 &minus; DOF<sub>free</sub>)</p>
<p>where C<sub>i</sub> is the number of DOF each feature constrains and R is the count of <strong>redundant</strong> constraints. R = 0 is exact (kinematic) constraint. R &gt; 0 is over-constraint, and every unit of R is a place where a manufacturing error has nowhere to go except into strain.</p>
<figure class="fig">${figConstraint}<figcaption>Four pads on a plane over-constrain it: the fourth pad is redundant, so the flatness error goes straight into bending the plate. Three pads always sit flat.</figcaption></figure>
<p>This is why a bracket bolted to a boss at four points, on a surface flat to only 0.5 mm, warps when you torque it. Nothing is overloaded in the usual sense. You have simply asked a stiff plate to conform to a surface it does not match, and the bolts have enough preload to make it. The stress that results is a <em>displacement-controlled</em> stress: it scales with the misfit and the part's stiffness, not with the service load, so a stiffer bracket makes it worse. Symptoms: cracked bosses, brackets that only work if you torque in a specific sequence, optics that go out of alignment when the case gets warm, parts that measure fine on the bench and out of tolerance in the assembly.</p>
<figure class="fig">${figLocating}<figcaption>The classic 3-2-1 scheme: three pads, one round pin, one diamond pin in a slot. Six DOF constrained, none constrained twice.</figcaption></figure>
<p>Three ways to handle it, and knowing when to use each is the whole skill:</p>
<ul>
<li><strong>Exact (kinematic) constraint</strong>, 3-2-1 locating, three-point mounts, kinematic couplings. Repeatable to microns, insensitive to thermal growth, and it never builds in stress. Cost: point contacts carry low load and can brinell, and it looks "flimsy" to people who count bolts.</li>
<li><strong>Elastic averaging</strong>, many contacts, deliberately compliant, so errors average out instead of fighting (a curvic coupling, a tapered pin ring, a bolted flange with a gasket). Higher load capacity and stiffness than kinematic, less repeatable, but far better than accidental over-constraint.</li>
<li><strong>Over-constraint with control</strong>. Accept the redundancy but remove the misfit: machine the mating pads in one setup so they are coplanar by construction, use a compliant shim or spherical washer, slot the extra holes, or bond/pot after clamping so the joint sets to the as-built geometry.</li>
</ul>
<p>The practical version for interviews: <strong>a hole locates, a slot constrains rotation, and everything after that is decoration.</strong> If you need a third fastener for strength, give it a clearance hole so it carries load without fighting the locators.</p>`,
      },
      {
        heading: "Failure modes and the whole lifecycle",
        html: `<p>The most common way a competent engineer ships a broken part is by calculating the failure mode they know how to calculate. Static stress against yield is easy, so it gets done; the part then fails by fatigue, wear, corrosion, loosening, creep, or buckling six weeks later.</p>
<figure class="fig">${figBracketModes}<figcaption>One bracket, five independent failure modes. Only one of them is the stress you computed.</figcaption></figure>
<p>The discipline is <strong>FMEA reasoning</strong>, and you can run it informally in two minutes per part: for each function, ask how it can fail, what that causes, how likely it is, and whether you would detect it before it mattered. Risk priority scales as severity &times; occurrence &times; detection, but the number matters far less than the habit of listing the modes at all. Two rules earn their keep:</p>
<ul>
<li><strong>Find the first failure mode, not the familiar one.</strong> Order the candidates by expected margin, not by how comfortable the math is. A slender strut with FoS 6 on yield and FoS 1.3 on buckling has an FoS of 1.3.</li>
<li><strong>Hunt single points of failure.</strong> One fastener, one weld, one sensor, one O-ring whose failure takes the whole machine down. Either add redundancy, make it inspectable, or make it fail gracefully. A bolt that stretches and leaks is better than a casting that shatters.</li>
</ul>
<p>Then widen the frame past "does it work when new and perfectly assembled":</p>
<ul>
<li><strong>Assembly:</strong> can a human reach the fastener with a real tool? Is there a wrong way to install it, and can you make that way physically impossible (poka-yoke: asymmetric bolt patterns, keyed connectors, different-length pins)?</li>
<li><strong>Service:</strong> what wears out, and how many parts must come off to reach it? Put the consumable on the outside of the stack.</li>
<li><strong>Inspection:</strong> can you see or measure the thing your margin depends on? An uninspectable joint needs more margin than an inspectable one.</li>
<li><strong>Shipping:</strong> drops, vibration, and temperature in a truck are frequently the worst load case a product ever sees, and the one nobody specified.</li>
<li><strong>Thermal cycling:</strong> dissimilar materials bolted rigidly will fight. Differential growth is &delta; = (&alpha;<sub>1</sub> &minus; &alpha;<sub>2</sub>)&middot;L&middot;&Delta;T; if that exceeds your clearance, you have designed a fatigue test.</li>
<li><strong>Tolerance:</strong> worst-case stack T = &Sigma;|t<sub>i</sub>| is what you use for safety-critical fits; RSS T = &radic;(&Sigma;t<sub>i</sub>&sup2;) is what you use when many independent parts combine and you can accept a small fallout.</li>
</ul>`,
      },
      {
        heading: "Iterate, test, and defend it in review",
        html: `<p>Iteration is not "try things until one works". It is buying information in the cheapest available currency. A hand calc costs an hour, an FEA run costs a day, a printed prototype costs a week, a tooled part costs a quarter. Spend the cheap currency first, and only escalate on the questions the cheap currency cannot answer.</p>
<figure class="fig">${figProcess}<figcaption>Analysis narrows the design space; prototypes answer the questions analysis can't. Prototype your biggest unknown, not your whole product.</figcaption></figure>
<p><strong>What to prototype:</strong> the thing you are least sure about, in isolation, as early as possible. If the risk is "will the latch hold after 10,000 cycles", you do not need the whole enclosure. You need a latch, a fixture, and a motor. If the risk is "does it fit the user's hand", a foam block beats a functional assembly.</p>
<p><strong>What makes a test worth running:</strong> it has to be able to come out <em>against</em> you. Write down the prediction and the pass/fail threshold before you run it. "We'll test it and see" is not an experiment; "I predict 0.30 mm deflection at 400 N, my model is wrong if it reads over 0.45 mm, and here's what I'd change if it does" is. Instrument the quantity your model actually predicts, hold everything else fixed, and change one variable at a time. A test that cannot distinguish between two hypotheses has told you nothing regardless of the result.</p>
<div class="callout"><strong>Defending a design in review.</strong> Reviewers are not attacking you; they are looking for the assumption you did not state. Lead with it: "I sized this for a 400 N side load with a 1.8 factor on yield; the load is an estimate from the actuator stall torque, and that is my weakest assumption." Then know your margins cold, which mode governs, what its margin is, and what the second-worst mode is. Two questions come up every time:
<ul>
<li><strong>"What if the load doubles?"</strong> Answer in order: which margin goes negative first, whether the governing mode changes (a stress-limited part can become buckling- or fatigue-limited), and what the cheapest fix is, usually geometry, not material.</li>
<li><strong>"What would change your mind?"</strong> The right answer names a measurement. "If the measured stall load is above 550 N, or if the mount pads are flatter than 0.1 mm, I'd switch back to the bolted concept." A design you cannot falsify is a design you have not thought about.</li>
</ul></div>
<p>Finally: <strong>the best technical answer is frequently not the right answer.</strong> A 12% lighter part that needs a new casting tool and eight weeks does not beat a heavier machined part that ships Monday, if the program is schedule-limited. State the technically optimal design, state what it costs in money and time, then recommend, and be explicit that you are making a business trade, not a physics one. Engineers who cannot do this get overruled; engineers who can get asked what they think.</p>`,
      },
    ],
    equations: [
      { name: "Factor of safety", formula: "n = &sigma;<sub>allow</sub> / &sigma;<sub>applied</sub>", note: "&sigma;<sub>allow</sub> is the allowable stress for the governing failure mode (yield, endurance limit, buckling load), not automatically yield." },
      { name: "Margin of safety", formula: "MS = &sigma;<sub>allow</sub> / (n<sub>req</sub> &middot; &sigma;<sub>applied</sub>) &minus; 1", note: "MS = 0 means exactly adequate against the required factor n<sub>req</sub>. Negative MS fails; report MS per failure mode, not one number for the part." },
      { name: "Composite factor from sources", formula: "n<sub>total</sub> = k<sub>load</sub> &middot; k<sub>material</sub> &middot; k<sub>analysis</sub> &middot; k<sub>consequence</sub>", note: "Each k covers one uncertainty once. Applying a lumped design factor on top of these is double-counting and hides the real margin." },
      { name: "Redundant constraints", formula: "R = &Sigma;C<sub>i</sub> &minus; (6 &minus; DOF<sub>free</sub>)", note: "C<sub>i</sub> is the DOF removed by feature i. R = 0 is exact constraint; each R &gt; 0 turns a manufacturing error into locked-in strain." },
      { name: "Weighted concept score", formula: "S<sub>j</sub> = &Sigma; w<sub>i</sub> &middot; r<sub>ij</sub>", note: "w<sub>i</sub> are criterion weights summing to 1, r<sub>ij</sub> is concept j's rating on criterion i. Screen against hard constraints before scoring. A constraint is a filter, not a criterion." },
      { name: "First-order cantilever sizing", formula: "t = &radic;(6FL / (b &middot; &sigma;<sub>allow</sub>))", note: "Rectangular section b &times; t, tip load F at length L. Run &delta; = FL&sup3;/(3EI) alongside it. Whichever demands more material is the governing requirement." },
      { name: "Differential thermal growth", formula: "&delta; = (&alpha;<sub>1</sub> &minus; &alpha;<sub>2</sub>) &middot; L &middot; &Delta;T", note: "L is the distance between the constrained features. If &delta; exceeds your clearance, one hole becomes a slot, or the joint becomes a fatigue test." },
      { name: "Tolerance stack (worst case vs RSS)", formula: "T<sub>WC</sub> = &Sigma;|t<sub>i</sub>| &nbsp;&nbsp; T<sub>RSS</sub> = &radic;(&Sigma;t<sub>i</sub>&sup2;)", note: "Worst case for safety-critical or low-volume fits; RSS for many independent contributors in volume where a small fallout is acceptable." },
    ],
    interviewTips: [
      "Restate the ask as numbers before you design anything. Load, duty cycle, environment, envelope, quantity, cost. Half of design interview questions are secretly testing whether you ask.",
      "Do the hand calc out loud before mentioning CAD or FEA. Saying \"I'd mesh it\" first reads as someone who cannot size a part without software.",
      "Never quote a factor of safety without saying where it came from and which failure mode it applies to. \"FoS 3\" is a number; \"3 because the load is a ±40% estimate and the part is uninspectable\" is engineering.",
      "Count degrees of freedom, not fasteners. If you can say \"the pads take Z and two tilts, the pin takes X and Y, the slot takes yaw,\" you are ahead of most candidates.",
      "When asked what fails first, list modes and rank them by margin. Fatigue, buckling, wear, loosening, corrosion, creep, instead of computing the one you find easiest.",
      "In review, state your weakest assumption before anyone asks, and answer \"what would change your mind?\" with a measurement and a threshold.",
    ],
  },

  questions: [
    {
      id: "mechanical-design-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A product manager tells you the camera mount on a machine is "too floppy" and asks you to make it stiffer. Before you touch CAD, which action gives you the most useful information?</p>`,
      choices: [
        "Ask for a deflection limit, the load that causes it, and where it is measured",
        "Thicken the wall by 25% and re-run the FEA to demonstrate a stiffness improvement",
        "Switch the arm from 6061 to 7075 aluminium, which is far stronger",
        "Add a gusset at the base, the standard fix for a floppy bracket",
      ],
      answer: 0,
      explanation: `<p>"Floppy" is not a requirement. You cannot pass or fail a part against an adjective. What you need is a <strong>number, a load, and a location</strong>: "tip deflection &le; 0.25 mm under a 400 N side load, measured at the lens centre." Without that you cannot tell whether you need 10% more stiffness or ten times more, and you have no way to know when to stop.</p>
<p>Choice C is the tempting wrong answer. Stiffness is governed by <em>E</em> and <em>I</em>, and 6061 and 7075 both sit at roughly 70 GPa, so swapping alloys buys strength and does essentially nothing for deflection.</p>`,
    },
    {
      id: "mechanical-design-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You are designing a replacement gearbox mount for a machine already in the field. Which of these statements belongs in the spec as a <strong>hard constraint</strong> — a pass/fail filter you screen concepts against — rather than as a weighted criterion?</p>`,
      choices: [
        "It must bolt to the existing four-hole, 160 mm pattern in the frame",
        "It should weigh as little as possible without giving up stiffness",
        "Lower vibration transmitted into the frame is worth paying for",
        "We would prefer a supplier we already have tooling and a contract with",
      ],
      answer: 0,
      explanation: `<p>A <strong>constraint</strong> is binary: a concept either fits the existing 160 mm bolt pattern or it is not a candidate. A <strong>criterion</strong> is something you trade. More of it is better, and you weigh it against other criteria. Mass, transmitted vibration, and supplier preference are all things you would happily give up a little of for a big gain somewhere else; the bolt pattern is not, because violating it means re-machining every frame in the field.</p>
<p>Why this distinction earns money: constraints go in the screening step <em>before</em> you score anything. If you put the bolt pattern into a weighted matrix as a criterion, a concept can score highest overall while being physically un-installable. A candidate who treats constraints as negotiable designs something elegant that cannot ship. Challenge each constraint once, "who owns the frame drawing, and what would it cost to add two holes?", and then stop challenging it and design inside it.</p>`,
    },
    {
      id: "mechanical-design-q03",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The steel bracket shown is bolted to a cast housing boss at four points with M6 screws. The four pads are flat to only 0.5 mm relative to each other, so before torque there is a 0.5 mm gap under bolt 4. What actually happens when you torque all four bolts to spec?</p>`,
      figure: figQBoss,
      choices: [
        "The bolts share load evenly and nothing happens until service load is applied",
        "The gap only reduces bolt 4's preload; the joint is slightly weaker but sound",
        "The soft cast housing absorbs the whole error, so the bracket stays flat",
        "The bracket bends to close the gap, locking in stress set by its own stiffness",
      ],
      answer: 3,
      explanation: `<p>An M6 screw at normal torque develops something like 8&ndash;10 kN of preload. Vastly more than it takes to bend a bracket 0.5 mm over a 240 mm span. So the bolt wins: the bracket is pulled down onto pad 4 and <strong>elastically deformed</strong> before the machine has done any work at all.</p>
<p>The critical insight is that this is a <strong>displacement-controlled</strong> stress. Its magnitude is set by the misfit (0.5 mm) and the bracket's stiffness, <em>not</em> by the service load. That inverts the usual intuition: making the bracket thicker and stiffer makes this stress <em>worse</em>, which is why "add material" as a reflex sometimes cracks the boss instead of fixing it. Four coplanar mounting points on a plane is one redundant constraint (three points already define a plane), and every redundant constraint is a place a manufacturing error has nowhere to go except into strain.</p>
<p>Fixes, cheapest first: machine all four pads in one setup so they are coplanar by construction; drop to three pads; add a compliant shim, spherical washer or bonded joint at the fourth point. Field symptoms of this defect: cracked bosses, brackets that only work if you torque in a specific sequence, and parts that measure in tolerance on the bench and out of tolerance once assembled.</p>`,
    },
    {
      id: "mechanical-design-q04",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A junior engineer sizes a bracket like this: multiply the estimated load by 1.4 "to be safe", use a 1.25 knockdown on the casting's published strength, add a 1.15 allowance because the hand calc is approximate, and then divide the allowable stress by a company design factor of 2.0. What <strong>effective factor of safety</strong> is the finished part actually carrying?</p>`,
      answer: 4.03,
      unit: "(dimensionless)",
      explanation: `<p>Multiplicative factors compound, so the effective factor is the product of all four:</p>
<p class="eq">n<sub>eff</sub> = 1.4 &times; 1.25 &times; 1.15 &times; 2.0</p>
<p class="eq">n<sub>eff</sub> = 1.75 &times; 1.15 &times; 2.0 = 2.0125 &times; 2.0 = <strong>4.03</strong></p>
<p>Nobody in that chain intended a factor of 4. Each step looked individually reasonable, and the result is a part roughly twice as heavy as it needs to be, and worse, <strong>nobody knows the real margin any more</strong>, because the conservatism is spread across four places with no record of what covers what.</p>
<p>The disciplined version: cover each uncertainty exactly once, at the place it belongs, and write it down. If the load is genuinely a &plusmn;40% estimate, apply 1.4 to the load and say so; then the "design factor of 2" must be re-derived, because part of what it was covering (load uncertainty) has already been paid for. A margin you can decompose is a margin you can defend in review; a stacked one just makes you look conservative and imprecise at the same time.</p>`,
    },
    {
      id: "mechanical-design-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Using the weighted concept matrix shown, compute the weighted score for <strong>concept C</strong>. (Ratings are 1&ndash;5, higher is better; weights sum to 1.00.)</p>`,
      figure: figQMatrix,
      answer: 3.6,
      tolerance: 0.02,
      unit: "(score)",
      explanation: `<p>The weighted score is the sum of weight &times; rating.</p>
<p class="eq">S<sub>C</sub> = &Sigma; w<sub>i</sub> r<sub>i</sub> = 0.40(5) + 0.30(2) + 0.20(3) + 0.10(4)</p>
<p class="eq">S<sub>C</sub> = 2.00 + 0.60 + 0.60 + 0.40 = <strong>3.60</strong></p>
<p>B beats C by 0.10 out of 3.7, under 3%, and ratings assigned by eye are not accurate to 3%. B and C are tied, and the matrix has run out of resolving power. What it did show is that stiffness at 0.40 dominates the outcome, so the next useful move is measuring stiffness rather than re-scoring.</p>`,
    },
    {
      id: "mechanical-design-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Your matrix finishes with A = 3.40, B = 3.70 and C = 3.60, all rated by eye on a 1&ndash;5 scale. You have to recommend one concept at tomorrow's review. What is the defensible conclusion?</p>`,
      figure: figQMatrixDone,
      choices: [
        "Pick B: it scores highest, so the matrix has made the decision for you",
        "Pick C: it wins the heaviest-weighted criterion, which outranks the total",
        "B and C are inside the rating noise; separate them on risk, schedule or build",
        "Re-weight the criteria until one concept separates clearly from the others",
      ],
      answer: 2,
      explanation: `<p>A 0.10 gap on a 3.7 scale is under 3%, and subjective 1&ndash;5 ratings are not repeatable to anything like that. Change one rating by a single point on any 0.20-weight row and the ranking flips. The correct statement is "the matrix eliminated A and cannot separate B from C". Then you decide on something the matrix never contained: which one your team can build on schedule, which has the least technical risk, which fails more gracefully.</p>
<p>Choice B misses the point of weighting, which is to let a strong showing elsewhere outweigh one criterion. If stiffness was meant to be decisive it should have been a constraint, not a 0.40 weight. Choice D is the cardinal sin of decision matrices: tuning the weights until they produce the answer you already wanted.</p>`,
    },
    {
      id: "mechanical-design-q07",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Two parts are computed to see exactly the same peak stress. Part A is a machined billet bracket on a bench fixture, loaded by a measured force, easily removed and inspected. Part B is a sand casting mounted overhead, loaded by a force estimated from a supplier data sheet, potted inside a sealed housing. What should their factors of safety be?</p>`,
      choices: [
        "The same: the stress calculation is identical, so the risk is identical",
        "B needs more: load uncertainty, casting scatter and no inspection all stack",
        "A needs more: machined parts have sharper corners and higher stress risers",
        "B needs less: cast skin puts the surface in compression and raises fatigue life",
      ],
      answer: 1,
      explanation: `<p>The calculated stress is only one input to a factor of safety. The other four are load uncertainty, material and process variability, consequence of failure, and inspectability, and part B is worse on all four. Its load is a data-sheet estimate rather than a measurement; sand castings carry porosity and heat-lot scatter that billet does not; overhead failure has a serious consequence; and once it is potted, nobody will ever see a crack before it becomes a fracture.</p>
<p>So B might carry 3&ndash;4 where A carries 1.5. Choice C confuses geometry with process. A machined part's fillets are <em>controlled</em>, whereas an as-cast fillet has an unknown radius and a rough surface. Choice D quotes a real effect (shot-peened or chill-cast surfaces do carry residual compression) but applies it as a blanket claim about sand castings, where surface roughness and subsurface porosity dominate. The interview point: quoting "FoS = 3" tells the reviewer nothing. "3, because the load is a &plusmn;40% estimate and the part is uninspectable in service" is engineering.</p>`,
    },
    {
      id: "mechanical-design-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A camera arm deflects 0.60 mm at the tip and the requirement is 0.25 mm. Two independent changes are on the table: deepening the section, which your calc says removes 40% of the deflection, and shortening the arm by 20%, which removes another 25%. If you take both, what tip deflection do you end up with, in mm?</p>`,
      answer: 0.27,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>The modelling decision is whether percentage improvements <em>add</em> or <em>multiply</em>. Each change scales the deflection that survives the previous one, so they multiply:</p>
<p class="eq">&delta; = 0.60 &times; (1 &minus; 0.40) &times; (1 &minus; 0.25) = 0.60 &times; 0.60 &times; 0.75 = <strong>0.27 mm</strong></p>
<p>That is a 55% total reduction, not the 65% you get by adding the two percentages, and the difference decides the answer. Adding gives 0.60 &times; 0.35 = 0.21 mm and a comfortable pass; multiplying gives 0.27 mm, which <strong>still misses the 0.25 mm requirement</strong> by 8%. Walking into a review saying "both changes get us there" when they do not is the whole point of the question.</p>
<p>Two things to say next. First, percentage savings only ever multiply, so a stack of "20% here, 15% there" improvements is always worth less than the sum, and the second change is always worth less in absolute terms than the first, because it acts on a smaller number. Second, you are 8% short, which is inside the noise of a hand calculation: the honest report is "0.27 mm predicted against a 0.25 mm requirement, so this architecture is marginal", followed by either a third change or a measurement on the prototype to find out which of the two estimates was optimistic.</p>`,
    },
    {
      id: "mechanical-design-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A welded steel bracket passed design review with a factor of safety of 4 on yield. In the field it cracked in six weeks. The bracket is driven by a solenoid cycling at 2 Hz, and the machine is washed down daily. What is the most likely explanation?</p>`,
      choices: [
        "The mill certificate overstated the yield strength by roughly a factor of four",
        "Creep in the steel accumulated at ambient temperature over the six weeks",
        "The elastic modulus fell as the bracket work-hardened during normal service",
        "Fatigue at the weld toe: a static yield margin says nothing about cyclic life",
      ],
      answer: 3,
      explanation: `<p>Do the cycle count first: 2 Hz for six weeks of continuous running is 2 &times; 3600 &times; 24 &times; 42 &asymp; 7 &times; 10<sup>6</sup> cycles. That is deep in high-cycle fatigue territory, and the part never saw a fatigue check. A weld toe is close to the worst detail you can offer a fatigue crack, an undercut geometric notch, tensile residual stress from cooling, and a coarse heat-affected microstructure, so the effective endurance limit of a welded joint is dramatically lower than the parent metal's. Wash-down adds corrosion-fatigue, which erodes any endurance limit further.</p>
<p>The other options fail on physics: creep needs roughly 0.3&ndash;0.4 of the melting temperature, which for steel means hundreds of degrees Celsius, not ambient; the elastic modulus of steel is essentially insensitive to cold work; and a mill certificate being wrong by 4&times; is not a failure mode, it is a fantasy. So: <strong>a static factor of safety on yield is not a life prediction</strong>. Ask "how many cycles, at what stress range, at what detail?" before you accept a margin as adequate.</p>`,
    },
    {
      id: "mechanical-design-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Do the napkin calc for the cantilever bracket shown: F = 800 N at L = 120 mm, rectangular section 30 mm wide, allowable bending stress 120 MPa. What thickness <em>t</em> does the bending stress requirement demand, in mm?</p>`,
      figure: figQCantilever,
      answer: 12.6,
      unit: "mm",
      explanation: `<p>Root bending moment:</p>
<p class="eq">M = F &middot; L = 800 N &times; 0.120 m = 96 N&middot;m</p>
<p>For a rectangle Z = b t&sup2;/6, so &sigma; = 6M/(b t&sup2;) and</p>
<p class="eq">t = &radic;(6M / (b &sigma;<sub>allow</sub>)) = &radic;(6 &times; 96 / (0.030 &times; 120 &times; 10<sup>6</sup>))</p>
<p class="eq">t = &radic;(576 / 3.6 &times; 10<sup>6</sup>) = &radic;(1.60 &times; 10<sup>&minus;4</sup>) = 0.01265 m = <strong>12.6 mm</strong></p>
<p>Ninety seconds and no software, and you now know the part is a ~13 mm plate rather than a 3 mm one or a 40 mm one. What you have <em>not</em> checked is deflection, and on a bracket like this it frequently governs.</p>`,
    },
    {
      id: "mechanical-design-q11",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The same steel bracket (E = 200 GPa, b = 30 mm, L = 120 mm, F = 800 N) must also hold tip deflection to 0.25 mm. You have already found that the stress requirement is satisfied at t = 12.6 mm. Which requirement actually governs the size?</p>`,
      figure: figQCantilever,
      choices: [
        "Stress: at t = 12.6 mm the tip moves about 0.18 mm, comfortably inside spec",
        "Deflection: at 12.6 mm the tip moves 0.46 mm, so t must grow to about 15.4 mm",
        "Neither: deflection falls as t&sup2;, so 12.6 mm already satisfies both requirements",
        "Deflection, but the right fix is a stiffer alloy rather than a thicker section",
      ],
      answer: 1,
      explanation: `<p>Compute the deflection at t = 12.6 mm. I = bt&sup3;/12 = 30(12.6)&sup3;/12 = 5.00 &times; 10<sup>3</sup> mm&#8308; = 5.00 &times; 10<sup>&minus;9</sup> m&#8308;.</p>
<p class="eq">&delta; = FL&sup3;/(3EI) = 800(0.120)&sup3; / (3 &times; 200&times;10<sup>9</sup> &times; 5.00&times;10<sup>&minus;9</sup>) = 1.382 / 3001 = 4.61 &times; 10<sup>&minus;4</sup> m = 0.46 mm</p>
<p>That is 1.8&times; the 0.25 mm allowance, so <strong>stiffness governs</strong>. Sizing on deflection instead: &delta; = 4FL&sup3;/(E b t&sup3;) gives t&sup3; = 4(800)(0.120)&sup3;/(200&times;10<sup>9</sup> &times; 0.030 &times; 0.25&times;10<sup>&minus;3</sup>) = 3.69 &times; 10<sup>&minus;6</sup> m&sup3;, so t = 15.4 mm.</p>
<p>Choice C misstates the scaling. Deflection goes as 1/t&sup3;, not 1/t&sup2;, which is exactly why a small thickness increase buys so much stiffness. Choice D is the standard material-selection error: every steel is about 200 GPa, so there is no "stiffer alloy" to buy. Recognising which requirement governs tells you what to change: a stress-limited part wants a better allowable or more section modulus, while a stiffness-limited part wants more I or a shorter arm and does not care about strength at all.</p>`,
    },
    {
      id: "mechanical-design-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The aluminium cover shown (&alpha; = 23.0 &times; 10<sup>&minus;6</sup>/K) is screwed to a steel housing (&alpha; = 11.7 &times; 10<sup>&minus;6</sup>/K) at two points 300 mm apart. The assembly sees a 60 K temperature rise. How much does the far fastener hole move relative to the housing hole, in mm?</p>`,
      figure: figQThermal,
      answer: 0.203,
      unit: "mm",
      explanation: `<p>Only the <em>difference</em> in expansion matters, because both parts are heating together:</p>
<p class="eq">&delta; = (&alpha;<sub>Al</sub> &minus; &alpha;<sub>steel</sub>) &middot; L &middot; &Delta;T</p>
<p class="eq">&delta; = (23.0 &minus; 11.7) &times; 10<sup>&minus;6</sup> &times; 300 mm &times; 60 K = 11.3 &times; 10<sup>&minus;6</sup> &times; 18000 = <strong>0.203 mm</strong></p>
<p>The common mistake is using the aluminium coefficient alone, which gives 23.0e&minus;6 &times; 300 &times; 60 = 0.414 mm. Nearly double, and it answers a question nobody asked (how much the free cover grows, not how much the joint is strained).</p>
<p>Now interpret it: the M5 screws sit in 5.5 mm clearance holes, giving 0.25 mm of radial float. 0.203 mm of differential growth eats 81% of that before any positional tolerance is spent, so on a bad-tolerance unit the screw goes hard against the hole wall and the cover starts prying the joint every thermal cycle. Sanity rule worth memorising: <strong>aluminium on steel moves roughly 11 &micro;m per metre per kelvin</strong>. A 1 m optical bench through a 20 K swing shifts about 0.23 mm, which is enormous if you are holding microns.</p>`,
    },
    {
      id: "mechanical-design-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Same aluminium cover on the steel housing: 0.20 mm of differential growth across the 300 mm fastener span, and 0.25 mm of radial clearance in each screw hole. What is the right detail decision?</p>`,
      figure: figQThermal,
      choices: [
        "Leave both holes round: 0.20 mm of growth fits inside 0.25 mm of radial clearance",
        "Keep one round hole as the locator and slot the far hole along the joint line",
        "Slot both holes so the cover is free to float in every direction as it heats",
        "Use steel screws in steel inserts so the joint expands as a matched pair",
      ],
      answer: 1,
      explanation: `<p>The arithmetic says the growth "fits", but that is the wrong test. 0.203 of 0.25 mm leaves 0.047 mm for hole position tolerance, screw-to-hole eccentricity and assembly variation. On a real unit you will run out. And the deeper problem with relying on clearance is that a clearance fit does not <strong>locate</strong> anything: the cover's position becomes whatever it happened to be when someone tightened the screws.</p>
<p>The standard detail is one <strong>round hole as the locator</strong> and a <strong>slot oriented along the line between the two fasteners</strong>, which releases exactly the one direction that grows while still constraining the perpendicular direction and rotation. Slotting both holes (choice C) throws away all in-plane location and lets the cover walk. Choice D sounds tidy but changes the wrong thing. The screws are not the problem; the aluminium-on-steel mismatch of the covers is, and steel inserts do not change either coefficient.</p>
<p>Does the joint slip? A friction joint that never slips just carries the strain instead. If the differential force can exceed the friction capacity, the cover will stick-slip and fret, so you either size the preload to guarantee slip at the slot or use a low-friction washer there.</p>`,
    },
    {
      id: "mechanical-design-q14",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A four-legged instrument stand rocks on a shop floor that is flat to about 2 mm over its footprint. Which fix removes the rocking most robustly?</p>`,
      choices: [
        "Add a fifth leg in the middle so the load is spread more evenly",
        "Stiffen the frame so the legs cannot move relative to one another",
        "Go to three feet, or make one of the four feet adjustable or compliant",
        "Increase the leg diameter so each leg deflects less under the same load",
      ],
      answer: 2,
      explanation: `<p>Three points define a plane, so a three-legged stand cannot rock on <em>any</em> floor. That is geometry, not tuning. A fourth leg is a redundant constraint: it either hangs in the air (rocking) or gets forced down (racking the frame). Adding a fifth leg makes it worse, not better, because you now have two redundancies.</p>
<p>Choice B and choice D both attack stiffness, which is exactly backwards. Rocking is a <strong>geometry</strong> problem, and increasing stiffness only converts the rock into locked-in frame stress once someone shims it. The stand stops wobbling and starts warping whatever it carries. This is the same physics as an over-constrained bolted mount, just at furniture scale.</p>
<p>Where four feet are unavoidable (stability against tipping, load capacity), the correct move is to make the fourth foot not fight: a levelling screw, a spring-loaded or elastomeric foot, or a deliberately compliant leg. Three of the feet locate; the fourth only carries load. This is the everyday version of exact constraint, and it is why precision instruments, surface plates and machine tool bases sit on three points.</p>`,
    },
    {
      id: "mechanical-design-q15",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A bracket carries a 4.0 kN service load with a factor of safety of 2.5 against its governing failure mode. In review someone asks the standard question: "what if the load doubles?" What factor of safety is left at 8.0 kN?</p>`,
      answer: 1.25,
      unit: "(dimensionless)",
      explanation: `<p>The capacity does not change; only the applied load does. From n = capacity/load the capacity is 2.5 &times; 4.0 = 10.0 kN, so at 8.0 kN:</p>
<p class="eq">n = 10.0 kN / 8.0 kN = <strong>1.25</strong></p>
<p>Factor of safety scales inversely with load, so doubling the load halves n.</p>
<p>What the number does not say is which mode it belongs to. Buckling load is independent of yield strength, contact stress grows as load<sup>1/3</sup>, fatigue damage grows far faster than linearly with stress range, and a bolted joint goes from friction-carrying to bearing once the applied shear exceeds the preload's grip. Doubling the load can change which mode governs.</p>`,
    },
    {
      id: "mechanical-design-q16",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 60 kg instrument sits on the three-point mount shown. Feet A and B are 600 mm apart on one line; foot C is 500 mm from that line; the centre of gravity lies on the perpendicular bisector of AB, 200 mm from the AB line. What vertical load does foot <strong>C</strong> carry, in N? (g = 9.81 m/s&sup2;)</p>`,
      figure: figQThreePoint,
      answer: 235,
      unit: "N",
      explanation: `<p>W = 60 &times; 9.81 = 588.6 N. A three-point mount is statically determinate, so equilibrium alone solves it. Take moments about the line AB, which eliminates both A and B reactions at once:</p>
<p class="eq">R<sub>C</sub> &middot; 500 mm = W &middot; 200 mm &rarr; R<sub>C</sub> = 588.6 &times; (200/500) = <strong>235 N</strong></p>
<p>By symmetry R<sub>A</sub> = R<sub>B</sub> = (588.6 &minus; 235.4)/2 = 177 N each, and 235.4 + 177 + 177 = 588.6 N. &#10003;</p>
<p>The CG sits 40% of the way from AB toward C, so C carries 40% of the weight. Foot loads on a three-point mount are just the CG's barycentric coordinates. With four feet you cannot say what any foot carries without knowing the frame stiffness and the floor flatness.</p>`,
    },
    {
      id: "mechanical-design-q17",
      type: "mc",
      difficulty: 2,
      prompt: `<p>During pilot build, a connector bracket got installed rotated 180&deg; three times out of forty units. In that orientation the wire harness lies against a 90&nbsp;&deg;C surface &mdash; a heat-sink face that cannot be moved without redesigning the thermal path. Which fix is the strongest?</p>`,
      choices: [
        "Make the bolt pattern asymmetric so the wrong orientation will not assemble",
        "Add a step to the work instruction with a photo showing the correct orientation",
        "Silkscreen an orientation arrow and add a visual inspection after assembly",
        "Re-route the harness clear of the hot face so either orientation is safe",
      ],
      answer: 0,
      explanation: `<p>A 7.5% defect rate on a binary orientation is not an attention problem, it is a design problem: the part <em>allows</em> the wrong assembly. The strongest countermeasure is to make the failure physically impossible. Shift one bolt 6 mm so the mirrored orientation simply does not line up. Cost: one CAD edit and no recurring expense per unit, forever.</p>
<p>Work instructions and inspection (choices B and C) are <strong>detection</strong>, not prevention. They rely on a human doing the right thing every time, they add takt time, and they degrade quietly the moment the line runs a night shift or a new hire. In FMEA terms they improve the detection score while leaving occurrence untouched, worth doing as a stopgap on units already in the field, but not a fix.</p>
<p>Re-routing the harness is the interesting one, and it deserves credit: removing the <em>consequence</em> is generally stronger than preventing one cause, because it also covers failure paths nobody enumerated. It is the right answer whenever it is available. Here the prompt closes that door on purpose. The hot face is the heat-sink path, so the harness has nowhere to go without a thermal redesign, and a route that skirts a 90 &deg;C surface by a few millimetres is not really removing the consequence anyway. When the consequence cannot be removed, the next-strongest move is to make the wrong state physically unreachable, and that is the asymmetric pattern.</p>
<p>The general hierarchy is worth having ready: eliminate the hazard, then make the wrong assembly impossible, then make it fail safe, then detect it, then instruct around it. Almost every real answer lives in the top two, and almost every proposed answer in a review lives in the bottom two.</p>`,
    },
    {
      id: "mechanical-design-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Your wear model predicts a plastic latch wears through at 24,000 cycles; the requirement is 10,000. You have one week and four prototype latches. Which test plan gives you the most information?</p>`,
      choices: [
        "Run three latches to 10,000 cycles and confirm that they all still latch",
        "Run three latches to 10,000 cycles at twice the normal closing force",
        "Run a full assembled enclosure through a 500 hour customer-use simulation",
        "Run one latch to failure, logging cycle count and wear depth against the model",
      ],
      answer: 3,
      explanation: `<p>A test earns its cost by being able to come out <strong>against</strong> you. Running to the requirement and passing (choice A) cannot distinguish a latch that dies at 10,100 cycles from one that lasts 200,000. It confirms the spec and tells you nothing about margin or about whether your model is right. Run-to-failure does both at once: the failure cycle count locates your actual margin, and the wear-depth-versus-cycles curve tests the model's <em>mechanism</em>, not just its endpoint. If it wears through at 12,000 instead of 24,000, you have learned your wear coefficient is 2&times; off and every other latch estimate you own is wrong too.</p>
<p>Choice B accelerates by changing the load, which risks changing the mechanism. Double the closing force can move plastic from mild abrasive wear into local yielding and creep, and then the result does not extrapolate back. Choice C spends the whole week testing everything at once: when it fails you cannot attribute the failure, and when it passes you do not know why.</p>
<p>State it as a prediction before you start: "I predict wear-through between 18,000 and 30,000 cycles; below 14,000 my model is wrong and I will re-derive the wear coefficient from the measured depth." Then spend the remaining three latches confirming the spread.</p>`,
    },
    {
      id: "mechanical-design-q19",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A bracket can be machined for &#36;180/unit with a two-week lead time, or die cast for &#36;40/unit plus &#36;22,000 of tooling with a ten-week tooling lead. The program builds 400 units this year and has committed to ship in eight weeks. What do you recommend?</p>`,
      choices: [
        "Cast it: break-even is 157 units and the program builds 400, so casting wins",
        "Machine everything: at only 400 units the tooling never pays for itself",
        "Machine to hit the eight-week ship, tool in parallel, switch when tooling lands",
        "Slip the ship date two weeks; the casting saves about &#36;34k, which is worth more",
      ],
      answer: 2,
      explanation: `<p>First the number, because you should always show it: break-even volume is N = C<sub>tool</sub>/(C<sub>mach</sub> &minus; C<sub>cast</sub>) = 22,000/(180 &minus; 40) = <strong>157 units</strong>. At 400 units casting saves 400(140) &minus; 22,000 = &#36;34,000, so choice B is simply wrong on the arithmetic.</p>
<p>But the constraint that actually binds is schedule, not cost: ten weeks of tooling against an eight-week commitment means the cast part cannot exist on ship day. Choice A ignores that; choice D proposes trading a customer commitment for &#36;34k, which is a decision you do not get to make alone and usually the wrong way round.</p>
<p>The engineering answer is to <strong>decouple the two decisions</strong>: machine the launch quantity to protect the date, release tooling now so it lands in week ten, and switch over for the balance of the year. You give up some savings on the first ~80 units and keep most of the &#36;34k. Draft angles, uniform wall and a parting line have to be in the model from day one, or the "switch" becomes a redesign. Say plainly that the best technical answer is not always the right answer, then show the number anyway.</p>`,
    },
    {
      id: "mechanical-design-q20",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You have two weeks and one printer before a design review. Three things are uncertain: (a) whether the PCB fits the housing, (b) whether users read the button layout correctly, (c) whether the printed corner boss survives a 1 m drop. Fit is fully checkable in CAD and layout is checkable with a paper mock-up. What do you print?</p>`,
      choices: [
        "One full working unit, so that all three unknowns get exercised together",
        "A fit-check plate at nominal dimensions, measured against the PCB with calipers",
        "A drop-test coupon of the corner boss geometry, tested repeatedly to failure",
        "A cosmetic housing shell, since the review audience judges what they can see",
      ],
      answer: 2,
      explanation: `<p>Spend the prototype on the question your cheaper tools cannot answer. Fit is deterministic geometry. CAD already answers it, and printing a plate to confirm what an interference check told you buys nothing. Button layout is a human-factors question a paper or foam mock-up answers for the cost of an afternoon. Drop survival of a printed boss, however, depends on layer adhesion, raster orientation, fillet radius and strain rate, and none of those are things you can predict reliably by analysis, so that is where physical hardware buys real information.</p>
<p>It is also the unknown with the largest consequence: if the boss cracks, you change wall sections, rib layout and possibly the whole housing split line, which invalidates everything downstream. Fit and layout problems are local edits. <strong>Prototype the risk that could force an architecture change, in isolation, as early as you can.</strong></p>
<p>Choice A is the tempting one. A full unit looks like more progress but confounds every variable, and when the corner cracks you cannot tell whether it was the geometry or the way the whole shell was oriented on the plate. Choice D optimises for the meeting rather than the product.</p>`,
    },
    {
      id: "mechanical-design-q21",
      type: "mc",
      difficulty: 3,
      prompt: `<p>In review, someone asks: "what if the duty cycle doubles — same peak load, twice as many cycles per day?" What do you re-check, and in what order?</p>`,
      choices: [
        "Re-run the static stress check first, since it is fastest and most likely to move",
        "Double every load in the model and re-run the entire analysis set from scratch",
        "The cycle-dependent margins: fatigue life, wear, thermal duty and lubrication",
        "Nothing structural changes: duty cycle affects utilisation, not stress or life",
      ],
      answer: 2,
      explanation: `<p>Sort the margins by whether they depend on cycles or on peak load. Peak load is unchanged, so <strong>static stress, buckling and deflection are untouched</strong>. Re-running them (choice A) is busywork, and doubling the loads (choice B) answers a different question entirely.</p>
<p>What does change, in the order you should attack it: (1) <strong>fatigue life</strong>. Twice the cycles per day halves the calendar life, and if you were at 10<sup>6</sup> cycles you may cross into the regime where a stress concentration you ignored now governs; (2) <strong>wear and fretting</strong> at every sliding or bolted interface, since wear volume scales with sliding distance; (3) <strong>thermal duty</strong>. Motors, actuators, brakes and dampers dissipate per cycle, so average power roughly doubles and the steady-state temperature rise with it, which then feeds back into lubricant viscosity, seal life and thermal growth; (4) <strong>service intervals</strong>, because the maintenance schedule was probably written in calendar time rather than in cycles.</p>
<p>Choice D is the answer that sinks a candidate: duty cycle is precisely the variable that separates a part that passes analysis from a part that survives a year. The strong close is to name the one you would check first and why, usually fatigue at the weld or fillet detail, because it has the least margin and the steepest sensitivity.</p>`,
    },
    {
      id: "mechanical-design-q22",
      type: "mc",
      difficulty: 3,
      prompt: `<p>You sized a mount for a 400 N side load derived from the actuator's published stall torque, with a factor of 1.8 on yield. A reviewer asks, "what would change your mind about this design?" Which answer is the strongest?</p>`,
      choices: [
        "Nothing: the analysis is complete and the margin is documented in the report",
        "A different reviewer preferring the bolted concept over the welded one",
        "A finer FEA mesh showing a higher peak stress at the fillet than my hand calc",
        "A measured stall load above 550 N, or mount pads flatter than 0.10 mm",
      ],
      answer: 3,
      explanation: `<p>"What would change your mind?" is a test of whether you know which assumption your design is actually resting on. A strong answer names <strong>a measurement and a threshold</strong>. Something the world could do tomorrow that would flip your decision. Here the design rests on a stall load inferred from a data sheet, so the number that matters is the measured stall load, and 550 N is where the 1.8 factor drops below the 1.3 you would accept. The flatness threshold is the mirror image: if the pads turn out to be genuinely flat, the compliance you designed in to dodge over-constraint is unnecessary and a simpler, stiffer bolted mount wins.</p>
<p>Choice A is the answer that ends careers quietly. A design nobody can falsify is a design nobody has stress-tested. Choice B confuses opinion with evidence. Choice C is the subtle one: a finer mesh at a re-entrant corner converges toward infinite stress because the singularity is an artefact of the idealisation, not a property of the part, so "the mesh got finer and stress went up" is not new information about the world. If the fillet genuinely worries you, the useful move is a strain gauge or a fatigue coupon, not more elements.</p>
<p>Best practice is to volunteer this before you are asked: open the review with your weakest assumption and the measurement that would settle it.</p>`,
    },
  ],

  qna: [
    {
      id: "mechanical-design-qa01",
      q: `<p>Design me a bracket that holds a 5 kg sensor off the side of a machine. Talk me through your approach.</p>`,
      a: `<p>First I'd refuse to design anything until I have five numbers, because "hold a sensor" is not a spec. <strong>Load:</strong> 5 kg is 49 N static, but what's the dynamic environment. Is the machine vibrating, and at what frequency and amplitude? A 3 g vibration input makes it a 150 N problem. <strong>Stiffness/alignment:</strong> does the sensor need to stay pointed within some angle, and over what temperature range? That usually turns out to be the real requirement and it's rarely stated. <strong>Environment:</strong> temperature, wash-down, chemicals, because that picks the material and the finish. <strong>Envelope and interface:</strong> what does it bolt to, what's the existing hole pattern, what's the access. <strong>Quantity and cost:</strong> ten of these is a machined part, ten thousand is a stamping.</p>
<p>Then a first-order calc before any CAD: treat it as a cantilever, &sigma; = 6FL/(bt&sup2;) for stress and &delta; = FL&sup3;/(3EI) for deflection, and see which governs. Nine times out of ten on a sensor mount it's deflection or the first natural frequency, not strength, and I'd want f<sub>n</sub> well clear of the machine's excitation, which for a cantilever is roughly (1/2&pi;)&radic;(k/m).</p>
<p>Only then geometry: how it locates (I'd want a hole and a slot, not four bolts on a surface I don't control), how it's assembled with real tools, and how the sensor gets swapped without pulling the bracket. Last, I'd list failure modes, fatigue at the root fillet, fastener loosening under vibration, corrosion at the joint, and check that the one with the least margin is the one I actually calculated.</p>`,
    },
    {
      id: "mechanical-design-qa02",
      q: `<p>How do you pick a factor of safety? Where does the number come from?</p>`,
      a: `<p>I try never to answer that with a single number, because the number isn't the point, its decomposition is. There are four honest sources of uncertainty and I size each one separately.</p>
<p><strong>Load uncertainty:</strong> is the load measured, calculated from first principles, or estimated? A load I've measured on a strain gauge might carry 1.1; a load I inferred from an actuator data sheet with a factor-of-two guess at duty carries 1.4 or worse. This term usually dominates, and no amount of FEA refinement touches it. <strong>Material and process variability:</strong> billet aluminium with a mill certificate is tight; a sand casting, a weld, or a 3D print has real scatter in strength and in defect population. <strong>Consequence of failure:</strong> a bench fixture that cracks costs an afternoon; the same part over someone's head is a different regime, and industry codes exist precisely so I'm not inventing that number myself. <strong>Inspectability:</strong> if it's accessible and cracks grow slowly, I can run leaner and inspect; potted inside a sealed assembly, I can't.</p>
<p>The failure mode I'm applying it to matters as much as the number. A factor of 2 on yield tells you nothing about fatigue, buckling or wear, I'd state the margin per mode.</p>
<p>The thing I actively guard against is stacking. If I bump the load 1.4&times;, knock the material down 1.25&times;, add 1.15&times; for analysis error and then apply a company factor of 2, I'm carrying 4.0&times; and I've lost track of what covers what. Each uncertainty gets covered once, in the place it belongs, and written down so a reviewer can see it.</p>`,
    },
    {
      id: "mechanical-design-qa03",
      q: `<p>What does "exact constraint" mean, and can you give me a real example of getting it wrong?</p>`,
      a: `<p>A rigid body has six degrees of freedom, three translations, three rotations, and exact or kinematic constraint means removing precisely the ones you want removed, each exactly once. The canonical scheme is 3-2-1: three pads define the primary plane and take Z plus two tilts, a round pin in a reamed hole takes X and Y, and a diamond pin in a slot takes yaw only. Six constrained, none constrained twice.</p>
<p>Getting it wrong: I've seen a stiff steel bracket bolted at four points to a cast housing boss where the pads were flat to about half a millimetre. Three points already define a plane, so the fourth is redundant. When you torque the bolts, the M6 preload is far more than enough to bend the bracket, and it deforms to close the gap before the machine does any work. What makes it nasty is that it's a <em>displacement-controlled</em> stress: it scales with the misfit and the part's own stiffness, not with the service load. So the instinctive fix, adding material, makes it worse. That job showed up as cracked bosses and as parts that only assembled correctly if you torqued in one specific sequence.</p>
<p>The fixes ranked by cost: machine all the mating pads in one setup so they're coplanar by construction; drop to three pads; or keep four and make one compliant, a spherical washer, a shim, a bonded joint that sets to the as-built geometry. And if a fourth fastener is there for strength rather than location, give it a generous clearance hole so it carries load without fighting the locators.</p>
<p>The alternative philosophy is elastic averaging, many deliberately compliant contacts so errors average out rather than fight, like a curvic coupling or a gasketed flange. It's less repeatable than kinematic but carries far more load, and it's vastly better than over-constraint you didn't notice.</p>`,
    },
    {
      id: "mechanical-design-qa04",
      q: `<p>A part passed analysis with a factor of safety of 4 and then failed in the field in six weeks. How do you investigate?</p>`,
      a: `<p>My first assumption is that the analysis was fine and the failure mode was different from the one I calculated. Static yield is the easiest mode to compute, so it's the one that always gets done, and parts fail by fatigue, wear, corrosion, fastener loosening, creep or buckling instead.</p>
<p>I'd start with the hardware, not the model. <strong>Look at the fracture surface:</strong> beach marks and a smooth crack-growth region with a small final overload zone means fatigue and tells me roughly where it initiated and how long it grew. A single rough, dimpled surface means overload. Corrosion products or fretting debris at the origin tells its own story. <strong>Then reconstruct the real duty:</strong> what load actually occurred, how many cycles, at what temperature? Six weeks at 2 Hz is about seven million cycles, which no static check covers. Very often the field load isn't the design load at all, someone stands on it, or a transient at startup dwarfs the steady case.</p>
<p>Then I'd go back through the mode list explicitly rather than reaching for the calculation I'm comfortable with: fatigue at the worst detail (a weld toe or a sharp fillet, not the peak-stress location in the FEA), buckling if anything is slender, loosening if there's vibration, galvanic or crevice corrosion at dissimilar-metal joints, wear at any sliding interface, creep only if the temperature justifies it.</p>
<p>Finally I'd ask what would have caught it earlier, usually a cycle count in the requirements and a run-to-failure coupon test rather than a test to the requirement. And I'd fix the process, not just the part: if the spec never stated a duty cycle, the next bracket has the same hole in it.</p>`,
    },
    {
      id: "mechanical-design-qa05",
      q: `<p>Your stakeholder gives you a one-line ask. How do you turn that into requirements you can design against?</p>`,
      a: `<p>I convert every adjective into a quantity, a limit and a measurement condition. "Stiffer" becomes "tip deflection &le; 0.25 mm under a 400 N side load, measured at the tool point." "Light" becomes "assembly mass &le; 1.8 kg." "Survives shipping" becomes "1 m drop on any corner, packaged, no permanent set." If I can't say how I'd test it, it isn't a requirement yet.</p>
<p>Then I split the list in two. <strong>Functional requirements</strong> are what it must do. Carry the load, hold the alignment, run at temperature. <strong>Constraints</strong> are the box it lives in. The existing bolt pattern, the &#36;40 unit cost at 5,000/year, the tooling we already own. That split matters operationally: constraints are pass/fail filters I screen concepts against before scoring anything, whereas functional requirements and goals get traded. A concept that scores best overall but violates a constraint hasn't won.</p>
<p>For every number I ask two questions. "Where did this come from?". If nobody can say why the flatness is 0.05 mm rather than 0.2, we're about to pay for grinding somebody guessed at. And "what breaks if it's twice as loose?" If the answer is nothing, I loosen it, because tolerance is money.</p>
<p>The last check is whether the set is over-constrained: 1.8 kg, 40 N/&micro;m, &#36;40 and six weeks may have no intersection. If so I don't quietly miss one. I go back with the trade curve: "at 1.8 kg the stiffest thing I can build is 26 N/&micro;m; 40 costs you either 2.4 kg or &#36;85. Which do you want?" Presenting the trade is the deliverable.</p>`,
    },
    {
      id: "mechanical-design-qa06",
      q: `<p>You have four concepts on the whiteboard. How do you decide which one to build?</p>`,
      a: `<p>First I screen, then I score, and I keep the two steps separate. Screening is against the hard constraints. Envelope, interface, cost ceiling, anything binary. Concepts that fail get dropped without a score, because a weighted average can otherwise let an un-installable concept win.</p>
<p>Then a Pugh matrix on the survivors: pick a datum, usually the incumbent or the most conventional option, list only criteria that actually <em>differentiate</em>, weight them, and rate each concept relative to the datum. Rows where everything scores the same get deleted, they only dilute the weights.</p>
<p>What I care about is what the matrix exposes, not the number that falls out. If one criterion carries 60% of the weight, the matrix is theatre and the decision is really "go measure that criterion." If two concepts land within a few percent, the matrix has run out of resolution and I say so out loud rather than pretending a 0.1 difference on subjective 1-to-5 ratings is real, then I separate them on things the matrix doesn't contain: technical risk, schedule, who has to build and service it, how each one fails. The one dishonest move I watch for in myself is re-weighting until the answer I already wanted comes out on top.</p>
<p>On when to stop generating: when new concepts stop changing the ranking, or when the next concept costs more than prototyping the leader. And I deliberately generate architectures that <em>fail differently</em> rather than three variants of the same idea. The first concept is usually just the one my last project trained me to draw.</p>`,
    },
    {
      id: "mechanical-design-qa07",
      q: `<p>When do you reach for FEA, and when is a hand calculation the right tool?</p>`,
      a: `<p>My rule is that hand calcs <em>size</em> the part and FEA <em>confirms</em> it. If I can't predict roughly what the FEA will say before I run it, I'm not ready to run it. I'm using the solver to think for me, and I have no way to spot a bad boundary condition or a units error in the result.</p>
<p>Hand calcs are right when the load path is understandable: beams, shafts, bolted joints, pressure vessels, anything I can decompose into bending, torsion and axial. They're fast enough to explore. I can sweep thickness and see whether stress or deflection governs in a couple of minutes, and that single question determines what I change next. They also give me sensitivities, which a single FEA run doesn't: knowing deflection goes as 1/t&sup3; is worth more than one number.</p>
<p>FEA earns its keep on genuinely 2D or 3D stress states, contact, complex geometry where the section properties aren't obvious, thermal-structural coupling, modal analysis of anything non-trivial, and optimisation once the architecture is fixed. Also when I need to defend a specific stress concentration or justify removing material from a casting.</p>
<p>The failure modes I watch for: trusting a peak stress at a re-entrant corner, which is a singularity that grows without bound as you refine the mesh rather than a property of the part; over-stiff boundary conditions that hide the compliance doing the real work; and letting mesh refinement substitute for load accuracy, when a &plusmn;40% load estimate makes a 5% stress refinement meaningless. If I quote an FEA result in review, I want a hand calc within about 20% of it, or I want to know why not.</p>`,
    },
    {
      id: "mechanical-design-qa08",
      q: `<p>What does designing for assembly and service actually change about a part? Give me specifics.</p>`,
      a: `<p>It changes the geometry, not just the documentation, and it starts with imagining a real person with a real tool.</p>
<p><strong>Assembly:</strong> can a hand and a driver reach every fastener, with clearance for the tool's swing? Are the fasteners the same size and drive so nobody swaps tools? Is there a wrong way to install it, and can I make that way physically impossible rather than writing an instruction about it? An asymmetric bolt pattern, a keyed connector, two dowel pins of different diameters: those cost nothing per unit and remove the defect permanently, where a work instruction and an inspection only improve detection while the error keeps happening. I also try to build gravity into the sequence, so parts stack downward and nothing has to be held while it's fastened.</p>
<p><strong>Service:</strong> I ask what wears out and how many parts have to come off to reach it, then put the consumable at the top of the disassembly stack. If a filter or a sensor is a 2,000-hour item and it sits under the manifold, that's a design defect even if it assembles beautifully. I'd also check that service doesn't require re-establishing an alignment that took a fixture to set the first time. If it does, add a locating feature so it goes back the same way.</p>
<p><strong>Inspection</strong> ties back to margin: a joint you can see and check can run leaner than one that's potted and invisible forever. And <strong>shipping</strong> is the load case people forget. Drop, vibration and thermal cycling in a truck are frequently the worst environment the product ever experiences, and it's usually not in anyone's requirements document until something arrives broken.</p>`,
    },
    {
      id: "mechanical-design-qa09",
      q: `<p>You're in a design review and someone says "what if the load doubles?" How do you handle it?</p>`,
      a: `<p>I don't treat it as an attack, it's a request for my sensitivity analysis, and if I've done my job I already have the answer.</p>
<p>I answer in three steps. <strong>First, which margin goes negative first.</strong> Factor of safety scales inversely with load, so if I was at 2.5 I'm at 1.25, and I say that plainly for the governing mode. <strong>Second, whether the governing mode changes</strong>. This is the part most people miss. Buckling doesn't care about yield strength, contact stress grows roughly as load to the one-third, fatigue damage rises far faster than linearly with stress range, and a friction-grip bolted joint hands over to bearing the moment applied shear exceeds what the preload can hold. So the mode that governs at 4 kN may not be the mode that governs at 8 kN, and I'd re-rank before I trusted any number. <strong>Third, what the cheapest fix is</strong>. Usually geometry, not material: section modulus goes as t&sup2; and stiffness as t&sup3;, so a couple of millimetres or a rib often beats an alloy change that buys 40% strength and no stiffness at all.</p>
<p>More generally, I try to get ahead of the question by opening with my weakest assumption: "I sized this for 400 N derived from stall torque with 1.8 on yield; the load is the number I'm least sure of." Then when someone asks "what would change your mind?", I have a real answer, a measurement and a threshold, like "a measured stall load above 550 N, or pad flatness better than 0.10 mm, and I'd switch concepts." A design you can't falsify is a design you haven't finished thinking about.</p>`,
    },
    {
      id: "mechanical-design-qa10",
      q: `<p>Tell me about a situation where the best technical answer wasn't the right answer.</p>`,
      a: `<p>The pattern I've hit most often is a bracket that was clearly better as a casting: about 12% lighter, half the piece cost at volume, and cleaner load paths. The arithmetic supported it. &#36;22,000 of tooling against &#36;140 per unit of savings breaks even at about 157 units, and the program was building 400 that year, so casting saved roughly &#36;34,000. But the tooling lead was ten weeks and we'd committed to ship in eight.</p>
<p>The right answer wasn't the casting and it wasn't giving up the savings either. It was decoupling the two decisions. Machine the launch quantity from billet to protect the ship date, release the tool immediately so it lands in week ten, and switch over for the balance of the year. We gave up the savings on the first eighty units and kept most of the &#36;34k. The one thing that had to be right on day one was designing the machined part with draft, uniform wall and a sensible parting line already in the model, so the changeover was a process change and not a redesign.</p>
<p>What I took from it: state the technically optimal design, state what it costs in money and schedule, and then make a recommendation, and be explicit that the recommendation is a business trade rather than a physics one, so nobody thinks I've been overruled on engineering. Engineers who can't do that get decisions made for them; engineers who can get asked what they think. The other half of it is that schedule and cost are requirements with the same standing as stress and stiffness. A part that's 12% lighter and ships two months late has failed a requirement, it just isn't the requirement we like to write in the analysis report.</p>`,
    },
  ],
};

export default content;
