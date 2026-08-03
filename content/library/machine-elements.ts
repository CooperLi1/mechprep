import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Machine Elements: Fasteners, Gears & Bearings
// ---------------------------------------------------------------------------

const figPreload = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="me1-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="me1-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Preloaded bolted joint as two springs</text>
  <rect x="96" y="86" width="268" height="34" rx="3" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="96" y="138" width="268" height="34" rx="3" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="214" y="58" width="32" height="142" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="194" y="56" width="72" height="20" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="196" y="198" width="68" height="18" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="72" x2="230" y2="112" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#me1-blue)"/>
  <line x1="230" y1="200" x2="230" y2="160" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#me1-blue)"/>
  <text x="260" y="106" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">i</tspan> bolt tension</text>
  <text x="258" y="184" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">i</tspan> clamp</text>
  <line x1="92" y1="60" x2="92" y2="32" stroke="#dc2626" stroke-width="2.5" marker-end="url(#me1-red)"/>
  <line x1="368" y1="60" x2="368" y2="32" stroke="#dc2626" stroke-width="2.5" marker-end="url(#me1-red)"/>
  <line x1="92" y1="198" x2="92" y2="226" stroke="#dc2626" stroke-width="2.5" marker-end="url(#me1-red)"/>
  <line x1="368" y1="198" x2="368" y2="226" stroke="#dc2626" stroke-width="2.5" marker-end="url(#me1-red)"/>
  <text x="52" y="48" fill="#dc2626" font-weight="600">P</text>
  <text x="386" y="48" fill="#dc2626" font-weight="600">P</text>
  <text x="52" y="224" fill="#dc2626" font-weight="600">P</text>
  <text x="386" y="224" fill="#dc2626" font-weight="600">P</text>
  <path d="M 54 88 h 26 v 10 h -18 v 10 h 18 v 10 h -18 v 10 h 18 v 10 h -26" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <path d="M 54 140 h 26 v 10 h -18 v 10 h 18 v 10 h -18 v 10 h 18 v 10 h -26" fill="none" stroke="#64748b" stroke-width="2"/>
  <text x="40" y="118" text-anchor="middle" fill="#1d4ed8">k<tspan baseline-shift="sub" font-size="9">b</tspan></text>
  <text x="40" y="170" text-anchor="middle" fill="#64748b">k<tspan baseline-shift="sub" font-size="9">m</tspan></text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">External separating load P: bolt gets C P, members unload by (1 &minus; C)P</text>
</svg>`;

const figJointDiagram = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="me2-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Joint diagram: where the external load actually goes</text>
  <line x1="60" y1="250" x2="440" y2="250" stroke="#334155" stroke-width="1.6" marker-end="url(#me2-axis)"/>
  <line x1="60" y1="250" x2="60" y2="46" stroke="#334155" stroke-width="1.6" marker-end="url(#me2-axis)"/>
  <text x="70" y="58" fill="#334155" font-size="12">force</text>
  <text x="436" y="270" text-anchor="end" fill="#334155" font-size="12">deflection</text>
  <line x1="60" y1="120" x2="330" y2="120" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="91" x2="330" y2="91" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="207" x2="330" y2="207" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="250" x2="240" y2="120" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="240" y1="120" x2="280" y2="91" stroke="#1d4ed8" stroke-width="2.6" stroke-dasharray="6 4"/>
  <line x1="300" y1="250" x2="240" y2="120" stroke="#64748b" stroke-width="2.6"/>
  <circle cx="240" cy="120" r="4.5" fill="#334155"/>
  <circle cx="280" cy="91" r="4.5" fill="#1d4ed8"/>
  <circle cx="280" cy="207" r="4.5" fill="#64748b"/>
  <line x1="280" y1="91" x2="280" y2="207" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="54" y="95" text-anchor="end" fill="#1d4ed8" font-size="12">F<tspan baseline-shift="sub" font-size="9">b</tspan></text>
  <text x="54" y="124" text-anchor="end" fill="#334155" font-size="12">F<tspan baseline-shift="sub" font-size="9">i</tspan></text>
  <text x="54" y="211" text-anchor="end" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">c</tspan></text>
  <line x1="346" y1="91" x2="346" y2="120" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="340" y1="91" x2="352" y2="91" stroke="#1d4ed8" stroke-width="1"/>
  <line x1="340" y1="120" x2="352" y2="120" stroke="#1d4ed8" stroke-width="1"/>
  <text x="358" y="110" fill="#1d4ed8" font-size="12">C P</text>
  <line x1="346" y1="120" x2="346" y2="207" stroke="#64748b" stroke-width="1"/>
  <line x1="340" y1="207" x2="352" y2="207" stroke="#64748b" stroke-width="1"/>
  <text x="358" y="168" fill="#64748b" font-size="12">(1 &minus; C)P</text>
  <line x1="418" y1="91" x2="418" y2="207" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="412" y1="91" x2="424" y2="91" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="412" y1="207" x2="424" y2="207" stroke="#dc2626" stroke-width="1.2"/>
  <text x="430" y="153" fill="#dc2626" font-weight="600" font-size="12">P</text>
  <line x1="72" y1="270" x2="94" y2="270" stroke="#1d4ed8" stroke-width="2.6"/>
  <text x="100" y="274" fill="#1d4ed8" font-size="12">bolt spring, slope k<tspan baseline-shift="sub" font-size="9">b</tspan></text>
  <line x1="240" y1="270" x2="262" y2="270" stroke="#64748b" stroke-width="2.6"/>
  <text x="268" y="274" fill="#64748b" font-size="12">members, slope k<tspan baseline-shift="sub" font-size="9">m</tspan></text>
</svg>`;

const figGearForces = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="me3-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="me3-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Spur gear mesh forces at the pitch point</text>
  <circle cx="160" cy="132" r="62" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="302" cy="132" r="80" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="160" cy="132" r="8" fill="#334155"/>
  <circle cx="302" cy="132" r="8" fill="#334155"/>
  <line x1="160" y1="132" x2="302" y2="132" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="226" cy="132" r="5" fill="#dc2626"/>
  <line x1="226" y1="132" x2="226" y2="58" stroke="#dc2626" stroke-width="2.5" marker-end="url(#me3-red)"/>
  <text x="238" y="62" fill="#dc2626" font-weight="600">F<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <line x1="226" y1="132" x2="274" y2="132" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#me3-blue)"/>
  <text x="278" y="126" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">r</tspan></text>
  <path d="M 226 132 L 282 88" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M 246 132 A 22 22 0 0 0 242 118" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="252" y="114" fill="#64748b" font-size="12">&phi;</text>
  <text x="160" y="215" text-anchor="middle" fill="#334155" font-weight="600">pinion</text>
  <text x="302" y="226" text-anchor="middle" fill="#334155" font-weight="600">gear</text>
  <text x="230" y="248" text-anchor="middle" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">t</tspan> transmits torque; F<tspan baseline-shift="sub" font-size="9">r</tspan> separates the shafts and loads the bearings</text>
</svg>`;

const figBearingLife = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="me4-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
    <marker id="me4-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Ball-bearing life falls as the cube of the load</text>
  <line x1="74" y1="210" x2="394" y2="210" stroke="#334155" stroke-width="1.8" marker-end="url(#me4-axis)"/>
  <line x1="74" y1="210" x2="74" y2="46" stroke="#334155" stroke-width="1.8" marker-end="url(#me4-axis)"/>
  <text x="394" y="254" text-anchor="end" fill="#334155">equivalent load P</text>
  <text x="86" y="56" fill="#334155">L<tspan baseline-shift="sub" font-size="9">10</tspan></text>
  <path d="M 92 72 C 132 90, 166 122, 204 160 S 296 204, 366 208" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="160" y1="210" x2="160" y2="118" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="292" y1="210" x2="292" y2="194" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="160" y1="118" x2="292" y2="194" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#me4-blue)"/>
  <text x="186" y="104" fill="#1d4ed8" font-weight="600">double the load</text>
  <text x="186" y="126" fill="#1d4ed8" font-size="12">and life drops to one eighth</text>
  <text x="160" y="230" text-anchor="middle" fill="#64748b" font-size="12">P</text>
  <text x="292" y="230" text-anchor="middle" fill="#64748b" font-size="12">2P</text>
</svg>`;

const figShaftDetail = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="me5-lead" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Where shafts actually break</text>
  <rect x="52" y="112" width="118" height="36" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="170" y="96" width="168" height="68" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="338" y="112" width="70" height="36" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="206" y="88" width="86" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <line x1="42" y1="130" x2="418" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="10 3 2 3"/>
  <circle cx="170" cy="96" r="17" fill="none" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="182" y1="84" x2="238" y2="56" stroke="#dc2626" stroke-width="1.2" marker-end="url(#me5-lead)"/>
  <text x="244" y="52" fill="#dc2626" font-size="12">shoulder fillet: small r means a big K<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <line x1="249" y1="86" x2="286" y2="52" stroke="#334155" stroke-width="1.2"/>
  <text x="292" y="76" fill="#334155" font-size="12">keyway</text>
  <text x="111" y="176" text-anchor="middle" fill="#64748b" font-size="12">bearing journal</text>
  <text x="373" y="176" text-anchor="middle" fill="#64748b" font-size="12">bearing journal</text>
  <text x="254" y="182" text-anchor="middle" fill="#64748b" font-size="12">gear / hub seat</text>
  <text x="230" y="214" text-anchor="middle" fill="#334155" font-size="12">Nominal stress rarely governs: the fillet and the keyway do.</text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b" font-size="12">Aim for fillet r/d &ge; 0.1, and never end a keyway in a fillet.</text>
</svg>`;

const figBoltSplitQ = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq04-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="meq04-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Preloaded joint under a separating load</text>
  <rect x="112" y="84" width="236" height="34" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="112" y="132" width="236" height="34" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="218" y="58" width="24" height="134" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="200" y="56" width="60" height="18" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="202" y="190" width="56" height="16" rx="4" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="78" y1="72" x2="78" y2="42" stroke="#dc2626" stroke-width="2.5" marker-end="url(#meq04-red)"/>
  <line x1="382" y1="178" x2="382" y2="208" stroke="#dc2626" stroke-width="2.5" marker-end="url(#meq04-red)"/>
  <text x="58" y="50" fill="#dc2626" font-weight="600">P = 8 kN</text>
  <text x="330" y="210" fill="#dc2626" font-weight="600">P = 8 kN</text>
  <line x1="230" y1="74" x2="230" y2="112" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#meq04-blue)"/>
  <text x="248" y="100" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">i</tspan> = 20 kN, C = 0.25</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">the separating load changes bolt tension and member compression by different amounts</text>
</svg>`;

const figJointDiagramQ = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq06-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Joint diagram for a steel flange, drawn to scale</text>
  <line x1="66" y1="250" x2="440" y2="250" stroke="#334155" stroke-width="1.6" marker-end="url(#meq06-axis)"/>
  <line x1="66" y1="250" x2="66" y2="46" stroke="#334155" stroke-width="1.6" marker-end="url(#meq06-axis)"/>
  <text x="76" y="58" fill="#334155" font-size="12">bolt / clamp force</text>
  <text x="436" y="270" text-anchor="end" fill="#334155" font-size="12">deflection</text>
  <line x1="60" y1="110" x2="66" y2="110" stroke="#334155" stroke-width="1.4"/>
  <line x1="60" y1="180" x2="66" y2="180" stroke="#334155" stroke-width="1.4"/>
  <text x="56" y="114" text-anchor="end" fill="#334155" font-size="12">30 kN</text>
  <text x="56" y="184" text-anchor="end" fill="#334155" font-size="12">15 kN</text>
  <text x="56" y="254" text-anchor="end" fill="#334155" font-size="12">0</text>
  <line x1="66" y1="110" x2="340" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="66" y1="250" x2="260" y2="110" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="260" y1="110" x2="290" y2="89" stroke="#1d4ed8" stroke-width="2.6" stroke-dasharray="6 4"/>
  <line x1="310" y1="250" x2="260" y2="110" stroke="#64748b" stroke-width="2.6"/>
  <circle cx="260" cy="110" r="4.5" fill="#334155"/>
  <circle cx="290" cy="89" r="4.5" fill="#1d4ed8"/>
  <circle cx="290" cy="166" r="4.5" fill="#64748b"/>
  <line x1="360" y1="89" x2="360" y2="166" stroke="#dc2626" stroke-width="1.3"/>
  <line x1="354" y1="89" x2="366" y2="89" stroke="#dc2626" stroke-width="1.3"/>
  <line x1="354" y1="166" x2="366" y2="166" stroke="#dc2626" stroke-width="1.3"/>
  <line x1="290" y1="89" x2="356" y2="89" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="290" y1="166" x2="356" y2="166" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="372" y="132" fill="#dc2626" font-weight="600" font-size="12">P = 12 kN</text>
  <text x="298" y="82" fill="#1d4ed8" font-size="12">F<tspan baseline-shift="sub" font-size="9">b</tspan> = ?</text>
  <text x="298" y="184" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">c</tspan> = ?</text>
  <line x1="80" y1="270" x2="102" y2="270" stroke="#1d4ed8" stroke-width="2.6"/>
  <text x="108" y="274" fill="#1d4ed8" font-size="12">k<tspan baseline-shift="sub" font-size="9">b</tspan> = 480 kN/mm</text>
  <line x1="240" y1="270" x2="262" y2="270" stroke="#64748b" stroke-width="2.6"/>
  <text x="268" y="274" fill="#64748b" font-size="12">k<tspan baseline-shift="sub" font-size="9">m</tspan> = 1920 kN/mm</text>
</svg>`;

const figBoltGroupQ = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq11-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Bracket bolt pattern: direct shear plus moment</text>
  <rect x="90" y="64" width="170" height="150" rx="5" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="130" cy="109" r="8" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="220" cy="109" r="8" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="130" cy="169" r="8" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="220" cy="169" r="8" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="220" cy="109" r="14" fill="none" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4 3"/>
  <circle cx="220" cy="169" r="14" fill="none" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4 3"/>
  <line x1="130" y1="50" x2="220" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="130" y1="44" x2="130" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="220" y1="44" x2="220" y2="56" stroke="#64748b" stroke-width="1"/>
  <text x="175" y="40" text-anchor="middle" fill="#64748b" font-size="12">120 mm</text>
  <line x1="68" y1="109" x2="68" y2="169" stroke="#64748b" stroke-width="1"/>
  <line x1="62" y1="109" x2="74" y2="109" stroke="#64748b" stroke-width="1"/>
  <line x1="62" y1="169" x2="74" y2="169" stroke="#64748b" stroke-width="1"/>
  <text x="58" y="143" text-anchor="end" fill="#64748b" font-size="12">80 mm</text>
  <line x1="166" y1="139" x2="184" y2="139" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="175" y1="130" x2="175" y2="148" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="175" y1="139" x2="175" y2="238" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="175" y="254" text-anchor="middle" fill="#1d4ed8" font-size="12">pattern centroid G</text>
  <line x1="175" y1="139" x2="325" y2="139" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="325" y1="133" x2="325" y2="145" stroke="#64748b" stroke-width="1"/>
  <text x="266" y="130" fill="#64748b" font-size="12">e = 200 mm</text>
  <line x1="325" y1="139" x2="325" y2="212" stroke="#dc2626" stroke-width="2.6" marker-end="url(#meq11-red)"/>
  <text x="334" y="186" fill="#dc2626" font-weight="600">P = 6 kN</text>
  <line x1="262" y1="88" x2="234" y2="102" stroke="#dc2626" stroke-width="1.2"/>
  <text x="266" y="92" fill="#dc2626" font-size="12">load-side bolts</text>
</svg>`;

const figGearTrainQ = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq16-rot" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Simple train: driver, idler, driven</text>
  <circle cx="80" cy="120" r="26" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="152" cy="120" r="45" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="275" cy="120" r="78" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="80" cy="120" r="5" fill="#334155"/>
  <circle cx="152" cy="120" r="5" fill="#334155"/>
  <circle cx="275" cy="120" r="5" fill="#334155"/>
  <line x1="62" y1="86" x2="98" y2="86" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#meq16-rot)"/>
  <text x="80" y="72" text-anchor="middle" fill="#1d4ed8" font-size="12">1500 rpm</text>
  <text x="275" y="82" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="22">?</text>
  <text x="80" y="172" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">A: 20 T</text>
  <text x="152" y="192" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">B: 35 T (idler)</text>
  <text x="275" y="216" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">C: 60 T</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">A, B and C all turn on separate fixed shafts</text>
</svg>`;

const figGearForceQ = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq17-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="meq17-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <circle cx="180" cy="112" r="58" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="180" cy="112" r="8" fill="#334155"/>
  <line x1="180" y1="112" x2="238" y2="112" stroke="#64748b" stroke-width="1.2"/>
  <text x="196" y="136" text-anchor="middle" fill="#64748b">d = 80 mm</text>
  <circle cx="238" cy="112" r="5" fill="#334155"/>
  <line x1="238" y1="112" x2="238" y2="48" stroke="#dc2626" stroke-width="2.5" marker-end="url(#meq17-red)"/>
  <text x="250" y="52" fill="#dc2626" font-weight="600">F<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <line x1="238" y1="112" x2="292" y2="112" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#meq17-blue)"/>
  <text x="296" y="106" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">r</tspan></text>
  <path d="M 238 112 L 292 72" stroke="#334155" stroke-width="1.3" stroke-dasharray="4 3"/>
  <text x="316" y="78" fill="#334155">pressure angle 20&deg;</text>
  <text x="180" y="190" text-anchor="middle" fill="#334155" font-weight="600">T = 120 N&middot;m</text>
</svg>`;

const figBearingQ = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq24-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Ball bearing: C = 30 kN, P = 6 kN, 1200 rpm</text>
  <line x1="84" y1="188" x2="390" y2="188" stroke="#334155" stroke-width="1.8" marker-end="url(#meq24-axis)"/>
  <line x1="84" y1="188" x2="84" y2="52" stroke="#334155" stroke-width="1.8" marker-end="url(#meq24-axis)"/>
  <path d="M 100 70 C 142 84, 184 116, 232 152 S 320 184, 374 187" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="186" cy="118" r="5" fill="#dc2626"/>
  <line x1="186" y1="188" x2="186" y2="118" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="84" y1="118" x2="186" y2="118" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="202" y="122" fill="#dc2626" font-weight="600">operating point, C/P = 5</text>
  <text x="390" y="212" text-anchor="end" fill="#334155">equivalent load P</text>
  <text x="96" y="62" fill="#334155">L<tspan baseline-shift="sub" font-size="9">10</tspan></text>
</svg>`;

const figKeyQ = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="meq30-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Rectangular key in shear</text>
  <rect x="112" y="88" width="236" height="52" rx="26" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <rect x="170" y="76" width="120" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="170" y="96" width="120" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="150" x2="230" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="174" x2="348" y2="174" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="168" x2="112" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="348" y1="168" x2="348" y2="180" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="170" text-anchor="middle" fill="#64748b" font-size="12">d = 25 mm shaft</text>
  <text x="230" y="72" text-anchor="middle" fill="#334155" font-weight="600">w = 8 mm, L = 40 mm</text>
  <path d="M 350 92 A 52 52 0 0 1 350 136" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#meq30-red)"/>
  <text x="372" y="118" fill="#dc2626" font-weight="600">T = 200 N&middot;m</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Machine Elements: Fasteners, Gears & Bearings",
    intro: `<p>Machine elements are the reusable building blocks that make real hardware work: bolts clamp parts before service loads arrive, gears trade speed for torque, bearings locate shafts while surviving millions of stress cycles, and keys, shafts, springs, and lubricants keep load paths honest. This topic exposes whether you can move from formulas to failure modes: preload loss, tooth forces, bearing life, fretting, wear, and assembly sensitivity.</p>
<p>The useful habit is to ask two questions for every element: <strong>what load path is intended?</strong> and <strong>what failure mode appears if the assumptions are wrong?</strong></p>`,
    sections: [
      {
        heading: "Bolted joints: preload and the joint diagram",
        html: `<p>A bolt is usually not meant to be a loose pin in shear. In a good joint it is first stretched into <strong>preload</strong>, which compresses the clamped members. Service load then has to unload that clamp before the joint opens, slips, leaks, or frets.</p>
<figure class="fig">${figPreload}<figcaption>A preloaded joint behaves like a tensile bolt spring in series with a compressed member spring.</figcaption></figure>
<p>For an axial separating load P, only a fraction goes into extra bolt tension:</p>
<p class="eq">&Delta;F<sub>b</sub> = C P, &nbsp;&nbsp; &Delta;F<sub>m</sub> = (1 &minus; C)P, &nbsp;&nbsp; C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>)</p>
<p><strong>F<sub>i</sub></strong> is initial preload, <strong>k<sub>b</sub></strong> is bolt stiffness, <strong>k<sub>m</sub></strong> is member stiffness, and <strong>C</strong> is the joint stiffness fraction. Typical steel joints land near C = 0.15 to 0.3, so the bolt sees only 15% to 30% of whatever the outside world applies.</p>
<figure class="fig">${figJointDiagram}<figcaption>The joint diagram. The bolt rides up its own spring line while the members slide down theirs; the vertical gap between the two curves is the external load P.</figcaption></figure>
<p>The bolt load becomes F<sub>b</sub> = F<sub>i</sub> + C P and the remaining clamp is F<sub>c</sub> = F<sub>i</sub> &minus; (1 &minus; C)P. Separation begins when F<sub>c</sub> reaches zero, which happens at P = F<sub>i</sub>/(1 &minus; C), noticeably <em>above</em> the preload, not at it.</p>
<div class="callout"><strong>Why preload is the whole game in fatigue.</strong> A cyclic external load &Delta;P produces a bolt-load range of only C&Delta;P while the joint stays clamped. A 10 kN swing on a C = 0.2 joint is a 2 kN swing in the bolt. Let the joint separate and the bolt suddenly eats the full 10 kN, the alternating stress jumps by 5&times; and the bolt dies in a few thousand cycles. Everything that lowers C (a longer, more compliant bolt; stiffer, thicker members) buys fatigue life.</div>`,
      },
      {
        heading: "Proof strength, property class, and the torque problem",
        html: `<p>Preload is chosen as a fraction of the bolt <strong>proof load</strong>. The load the fastener carries with no permanent set. Proof strength S<sub>p</sub> sits at roughly 85% to 90% of yield, and yield is below tensile strength. A common target for controlled tightening is 75% of proof:</p>
<p class="eq">F<sub>i</sub> &approx; 0.75 S<sub>p</sub>A<sub>t</sub></p>
<p>A<sub>t</sub> is the tensile stress area, which is smaller than the shank area because thread roots remove material. Metric property class is a two-number code: the first number is tensile strength in hundreds of MPa, the second is ten times the yield-to-tensile ratio.</p>
<table><thead><tr><th>Class</th><th>S<sub>ut</sub> (MPa)</th><th>S<sub>y</sub> (MPa)</th><th>S<sub>p</sub> (MPa)</th></tr></thead><tbody>
<tr><td>8.8</td><td>800</td><td>640</td><td>600</td></tr>
<tr><td>10.9</td><td>1000</td><td>900</td><td>830</td></tr>
<tr><td>12.9</td><td>1200</td><td>1080</td><td>970</td></tr>
</tbody></table>
<p>Torque is a poor way to <em>measure</em> preload because most of the wrench work goes into friction:</p>
<p class="eq">T &approx; K F<sub>i</sub>d</p>
<p>K is a nut factor, not a material constant, roughly 0.2 dry, 0.15 lubricated, and easily &plusmn;25% either way. Only about 10% to 15% of the input torque becomes bolt stretch; the rest is thread and under-head friction. A plating change, a hardened washer, a reused nut, or a drop of oil moves K and therefore moves preload by tens of percent at identical torque.</p>
<div class="callout warn"><strong>Do the arithmetic on the scatter.</strong> An M10 at 60 N&middot;m with K = 0.20 &plusmn;25% gives F<sub>i</sub> between 24 and 40 kN. Class 8.8 proof load for that bolt is about 35 kN. The nominal setting looks fine and the lucky-lubrication end yields the fastener.</div>
<p>Critical joints therefore use something better: torque-angle past snug, direct-tension-indicating washers, ultrasonic bolt stretch, hydraulic tensioning, or load cells during validation.</p>`,
      },
      {
        heading: "Why bolts loosen, and thread engagement",
        html: `<p>Bolts rarely "unscrew" on their own in the way people assume. Two different mechanisms get confused:</p>
<ul>
<li><strong>Preload loss without rotation</strong>, embedment of surface asperities, gasket creep, and thermal cycling. The fastener never turns; the clamp simply bleeds away. Fixes: fewer and smoother interfaces, hardened washers, a re-torque after soak, a more compliant (longer) bolt so the same settlement costs less preload.</li>
<li><strong>Rotational self-loosening</strong>. Transverse cyclic slip at the interface lets the head and threads ratchet backwards. This is a slip problem, not a friction-washer problem. Fixes: raise preload so the joint never slips, shorten the grip-to-diameter ratio conflict sensibly, add prevailing-torque nuts, adhesive, or serrated flange faces.</li>
</ul>
<div class="callout warn">Split (helical spring) lock washers are flattened solid by any real preload and then do essentially nothing. If a joint is loosening at 25% of proof, the answer is usually more preload, not more hardware.</div>
<p><strong>Thread engagement</strong> decides whether the bolt breaks or the threads strip, and stripping is the failure mode you do not want because it gives no warning and destroys the tapped part. As a working rule, engaged length should be about <strong>1&times;D in steel</strong> and <strong>2 to 2.5&times;D in aluminum or cast iron</strong>, because the shear strength of the internal-thread material is roughly a third of the bolt's tensile strength. Design so the bolt is the weak link: a broken bolt is a five-minute replacement, a stripped boss is a scrapped casting.</p>`,
      },
      {
        heading: "Bolt groups: shear, moment, and friction versus bearing",
        html: `<p>A bracket bolted to a wall does not load its bolts equally. Resolve the applied load to the <strong>pattern centroid</strong> and superpose two effects:</p>
<p class="eq">F<sub>direct</sub> = P/n, &nbsp;&nbsp; F<sub>moment,i</sub> = M r<sub>i</sub>/&Sigma;r<sub>j</sub><sup>2</sup></p>
<p>The direct term is the same on every bolt and points with the load. The moment term is perpendicular to each bolt's radius from the centroid and grows with distance. The worst bolt is where the two <strong>vectors add most nearly in line</strong>. Add magnitudes instead of vectors and you will overstate or understate the peak, depending on geometry.</p>
<p>Then decide what the bolts are actually doing:</p>
<ul>
<li><strong>Slip-critical (friction-grip)</strong>: transverse load is carried by friction between the faying surfaces, F<sub>slip</sub> = &mu; &Sigma;F<sub>clamp</sub>, with &mu; around 0.3 to 0.5 on clean steel. The bolt shank never touches the hole. Requires controlled preload and controlled surface condition, and it is the only way to get zero-play and good fatigue behaviour.</li>
<li><strong>Bearing type</strong>: the joint is allowed to slip until the shanks bear on the hole walls and carry shear. Cheaper and tolerant of sloppy tightening, but it gives up positional accuracy and invites fretting and hole elongation under reversals.</li>
</ul>
<div class="callout"><strong>Watch for this:</strong> sizing a friction-grip joint on bolt shear strength. Shear capacity is typically two to three times the slip capacity, so the calculation "passes" while the real joint slips at a third of the load.</div>`,
      },
      {
        heading: "Gears: ratios, tooth forces, and how teeth fail",
        html: `<p>A gear pair converts speed and torque through tooth count or pitch diameter. Pitch diameter follows from module: d = mN. For a pinion driving a gear:</p>
<p class="eq">&omega;<sub>out</sub> = &omega;<sub>in</sub>N<sub>in</sub>/N<sub>out</sub>, &nbsp;&nbsp; T<sub>out</sub> &approx; &eta;T<sub>in</sub>N<sub>out</sub>/N<sub>in</sub></p>
<p>Speed falls by the ratio while torque rises by the same ratio, reduced by efficiency (about 98% per spur mesh). An idler reverses rotation direction but cancels out of the ratio unless it shares a shaft with a second gear.</p>
<figure class="fig">${figGearForces}<figcaption>At the pitch point, the tangential force transmits torque and the radial force pushes the shafts apart.</figcaption></figure>
<p class="eq">F<sub>t</sub> = 2T/d, &nbsp;&nbsp; F<sub>r</sub> = F<sub>t</sub>tan &phi;, &nbsp;&nbsp; F<sub>a</sub> = F<sub>t</sub>tan &psi;</p>
<p>F<sub>t</sub> does the useful work. F<sub>r</sub> does none but is entirely real to shafts, bearings, and housings. Helical gears add axial thrust F<sub>a</sub>, which must be reacted by an angular-contact or tapered arrangement, opposed helices, or a herringbone.</p>
<p>Teeth fail in two competing ways, and the fixes are opposite:</p>
<ul>
<li><strong>Root bending fatigue</strong>. A crack at the fillet on the loaded side. Lewis: &sigma; = F<sub>t</sub>/(b m Y). Fixed by more module, more face width, a bigger root fillet, or shot peening.</li>
<li><strong>Flank pitting</strong>, rolling contact fatigue, craters clustered in a band just below the pitch line where sliding reverses. Fixed by surface hardness, better geometry, and cleaner oil, not by more module.</li>
</ul>
<p>Two more things come up constantly. <strong>Undercutting</strong>: below about 17 or 18 teeth on a 20&deg; full-depth pinion, the generating cutter removes material under the involute at the root, weakening the tooth and cutting contact ratio; profile shift or a higher pressure angle is the fix. <strong>Backlash</strong> is deliberate clearance for thermal growth and lubricant. Harmless in a one-way drive, but it becomes lost motion the instant the drive reverses.</p>
<div class="callout"><strong>Why the pinion always wears first:</strong> in a 4:1 reduction it turns four times as fast, so it accumulates four stress cycles for every one on the gear, at the same tooth load and a tighter radius of curvature. Harden the pinion one notch above the gear.</div>`,
      },
      {
        heading: "Rolling bearings: L10 life, fits, and what really kills them",
        html: `<p>Rolling bearings fail statistically by subsurface rolling contact fatigue, so catalogs quote life probabilistically. <strong>L<sub>10</sub></strong> is the life at which 90% of a large population survives under the stated conditions.</p>
<figure class="fig">${figBearingLife}<figcaption>Life is brutally load-sensitive: for ball bearings, doubling P cuts L<sub>10</sub> by a factor of eight.</figcaption></figure>
<p class="eq">L<sub>10</sub> = (C/P)<sup>p</sup> &times; 10<sup>6</sup> rev, &nbsp;&nbsp; L<sub>10h</sub> = L<sub>10</sub>/(60n)</p>
<p><strong>C</strong> is the dynamic load rating, <strong>P</strong> the equivalent dynamic load, and <strong>p</strong> is <strong>3 for ball bearings and 10/3 for roller bearings</strong>. Getting that exponent wrong is a standard screen filter. The reflex to have ready: double the load, life falls to an eighth. Industrial targets run around 20,000 h continuous, a few thousand hours for intermittent duty.</p>
<p>P is a catalog construct, usually P = XF<sub>r</sub> + YF<sub>a</sub>, not the vector magnitude of the two loads. Ignore the axial component of a helical mesh and the prediction is optimistic by a large factor.</p>
<p>Three mounting decisions matter as much as the arithmetic:</p>
<ul>
<li><strong>Which ring rotates relative to the load gets the interference fit.</strong> A rotating-load ring left loose will creep in its seat, fret, and heat. The stationary-load ring can take a looser fit so it can be assembled and so it can float.</li>
<li><strong>One bearing locates, the other floats.</strong> Clamp both outer rings and a warm shaft has nowhere to grow; a 900 mm steel shaft at +60&deg;C grows about 0.65 mm, which becomes enormous axial preload.</li>
<li><strong>Preload versus clearance.</strong> A little preload removes play and adds stiffness. Too much, including preload accidentally induced by an undersized housing bore. Raises contact stress, friction, and temperature and collapses life.</li>
</ul>
<div class="callout warn">In the field, most bearings never reach their fatigue life. Contamination and lubrication failure dominate: a failed seal that lets grit in produces dents, then spalls that grow from them, at a small fraction of the calculated L<sub>10</sub>. Modern life models carry an explicit contamination factor for exactly this reason.</div>`,
      },
      {
        heading: "Shafts, keys, and couplings",
        html: `<p>A shaft usually carries bending and torsion at once. For a ductile steel shaft on the maximum-shear-stress criterion:</p>
<p class="eq">&tau;<sub>max</sub> = 16&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;d<sup>3</sup>) &le; 0.5S<sub>y</sub>/n</p>
<p>which rearranges to d<sup>3</sup> = 32n&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;S<sub>y</sub>). Bending and torque combine as a root-sum-square, so the larger one dominates and adding the smaller one changes the diameter far less than people expect.</p>
<figure class="fig">${figShaftDetail}<figcaption>Shafts break at geometry, not at the nominal stress: shoulder fillets and keyway ends are the usual crack origins.</figcaption></figure>
<p>Then correct that nominal size for the things that actually cause failures: a sharp shoulder fillet can carry K<sub>t</sub> near 3 in bending (aim for r/d &ge; 0.1), a profiled keyway roughly K<sub>t</sub> = 2 to 3, and press-fit hub ends produce fretting fatigue. Also check <strong>critical speed</strong>, the first bending natural frequency, &omega;<sub>n</sub> = &radic;(k/m) with k = 48EI/L<sup>3</sup> for a central mass. Stay below about 0.75 of it or accelerate briskly through it.</p>
<p>Keys and splines carry the torque itself. A quick check on a rectangular key:</p>
<p class="eq">&tau;<sub>key</sub> = 2T/(d w L), &nbsp;&nbsp; &sigma;<sub>bearing</sub> = 4T/(d h L)</p>
<p>These are average stresses, not fatigue checks. Splines spread torque over many teeth, interference fits avoid the notch entirely, and set screws are for light positioning duty only.</p>
<p>Flexible couplings tolerate small parallel, angular, and axial misalignment while transmitting torque. They are not misalignment erasers: exceed the allowance and you get cyclic side loads, heat, and bearing life loss, while the coupling keeps happily transmitting torque and hiding the damage.</p>`,
      },
      {
        heading: "Springs, drives, wear, and lubrication",
        html: `<p>Linear springs obey F = kx. Springs in parallel add stiffness; springs in series add compliance. The rate is the easy part. The checks that catch people out are geometric and dynamic:</p>
<ul>
<li><strong>Solid height and clash margin</strong>: at coil bind the rate goes near-infinite and the mechanism jams or the spring takes a set. Leave real margin after tolerances.</li>
<li><strong>Spring index</strong> C = D/d, best between 5 and 12. Below 4 it is hard to coil and stress concentration at the inner fibre climbs; above 12 it tangles and buckles.</li>
<li><strong>Buckling</strong>: a compression spring between flat plates goes unstable above roughly L<sub>free</sub>/D = 5.2 at large deflections. Guide it on a rod or in a bore.</li>
<li><strong>Surge</strong>: the spring's own natural frequency must sit well above the drive frequency. A factor of 13 or more is the usual cam-design rule, because the cam event is rich in harmonics.</li>
</ul>
<p>For flexible drives, the friction limit on a wrapped belt is the capstan relation:</p>
<p class="eq">T<sub>1</sub>/T<sub>2</sub> = e<sup>&mu;&beta;</sup>, &nbsp;&nbsp; T<sub>1</sub> &minus; T<sub>2</sub> = T/r</p>
<p>Wrap angle and friction set how much pretension you need, and the <em>sum</em> T<sub>1</sub> + T<sub>2</sub> is what the pulley bearing feels, often two to three times the useful tension. Belts are quiet, cheap, tolerant of misalignment and shock, and they slip; chains are compact and positive but suffer polygonal action and need lubrication; gears are the most efficient and precise and the least forgiving of alignment.</p>
<p>Lubrication controls friction, heat, wear, and surface fatigue. In <strong>hydrodynamic</strong> or elastohydrodynamic operation a pressurised film separates the surfaces; in <strong>boundary</strong> operation asperities touch and additives carry the load. Start-stop, low speed, high load, contamination, and wrong viscosity all push a contact toward boundary. Thicker oil is not automatically safer: it raises churning loss, drag, and sump temperature and flows badly on a cold start.</p>
<p>Common wear modes: <strong>abrasive</strong> (hard particles plough), <strong>adhesive/scuffing</strong> (local welding when the film fails), <strong>fretting</strong> (micro-slip under clamped contact, red oxide debris on steel), and <strong>pitting/spalling</strong> (rolling contact fatigue). A design-level comparison model is Archard's law:</p>
<p class="eq">V = KWs/H</p>
<p>Wear volume rises linearly with load and sliding distance and falls inversely with hardness, so halving the load, halving the distance, and doubling the hardness are all worth exactly the same factor of two.</p>`,
      },
    ],
    equations: [
      { name: "Torque-preload estimate", formula: "T &approx; K F<sub>i</sub>d", note: "T is tightening torque, K the nut factor (&approx;0.2 dry, 0.15 lubricated, &plusmn;25%), F<sub>i</sub> preload, d nominal diameter." },
      { name: "Proof-load preload target", formula: "F<sub>i</sub> &approx; 0.75 S<sub>p</sub>A<sub>t</sub>", note: "S<sub>p</sub> is proof strength and A<sub>t</sub> tensile-stress area; use with controlled tightening only." },
      { name: "Bolted-joint load split", formula: "&Delta;F<sub>b</sub> = C P, &nbsp; C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>)", note: "Bolt gains CP; clamp loses (1&minus;C)P. Separation at P = F<sub>i</sub>/(1&minus;C)." },
      { name: "Torque-angle preload", formula: "F<sub>i</sub> = (&theta;/360)L &times; k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>)", note: "Turn past snug times lead gives the misfit; the bolt and members share it in series." },
      { name: "Bolt group under a moment", formula: "F<sub>i</sub> = P/n &oplus; M r<sub>i</sub>/&Sigma;r<sub>j</sub><sup>2</sup>", note: "Direct shear and the moment term are vectors; sum them vectorially at the worst-placed bolt." },
      { name: "Slip capacity of a friction joint", formula: "F<sub>slip</sub> = &mu; &Sigma;F<sub>clamp</sub>", note: "&mu; &approx; 0.3 to 0.5 on clean steel. Bolt shear capacity is a different, much larger and irrelevant number." },
      { name: "Gear ratio and pitch diameter", formula: "&omega;<sub>out</sub> = &omega;<sub>in</sub>N<sub>in</sub>/N<sub>out</sub>, &nbsp; d = mN", note: "m is module. Torque changes inversely with speed, reduced by efficiency &eta; (&approx;0.98 per mesh)." },
      { name: "Gear tooth forces", formula: "F<sub>t</sub> = 2T/d, &nbsp; F<sub>r</sub> = F<sub>t</sub>tan &phi;, &nbsp; F<sub>a</sub> = F<sub>t</sub>tan &psi;", note: "&phi; is pressure angle and &psi; helix angle; F<sub>r</sub> and F<sub>a</sub> load bearings without doing work." },
      { name: "Lewis bending stress", formula: "&sigma; = F<sub>t</sub>/(b m Y)", note: "b is face width, m module, Y the Lewis form factor (&approx;0.32 at 20 teeth, 20&deg; full depth)." },
      { name: "Bearing L10 life", formula: "L<sub>10</sub> = (C/P)<sup>p</sup> &times; 10<sup>6</sup> rev", note: "p = 3 for ball, 10/3 for roller. Hours: L<sub>10h</sub> = L<sub>10</sub>/(60n)." },
      { name: "Shaft under bending and torsion", formula: "d<sup>3</sup> = 32n&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;S<sub>y</sub>)", note: "Maximum-shear criterion with design factor n; then correct for fillet and keyway stress concentration." },
      { name: "Shaft critical speed", formula: "&omega;<sub>n</sub> = &radic;(k/m), &nbsp; k = 48EI/L<sup>3</sup>", note: "Central mass on a simply supported shaft. Keep operating speed below &asymp;0.75&omega;<sub>n</sub>." },
      { name: "Key average shear and bearing", formula: "&tau; = 2T/(d w L), &nbsp; &sigma;<sub>b</sub> = 4T/(d h L)", note: "d shaft diameter, w key width, h key height, L engaged length. Average stresses only." },
      { name: "Capstan / belt tension ratio", formula: "T<sub>1</sub>/T<sub>2</sub> = e<sup>&mu;&beta;</sup>", note: "&beta; is wrap angle in radians. The pulley bearing carries roughly T<sub>1</sub> + T<sub>2</sub>, not T<sub>1</sub> &minus; T<sub>2</sub>." },
      { name: "Archard wear", formula: "V = KWs/H", note: "Halving load, halving sliding distance, and doubling hardness are all worth the same factor of two." },
    ],
    interviewTips: [
      "For bolts, start with preload and clamp force before jumping to bolt stress; most interview mistakes put the whole external load into the bolt and ignore the member spring.",
      "Carry the anchor numbers: preload at 75% of proof, K around 0.2 dry and 0.15 lubricated with plus or minus 25% scatter, thread engagement 1 diameter in steel and 2 in aluminum.",
      "Never present torque as a preload measurement without mentioning nut-factor scatter; name at least two better methods before anyone asks.",
      "For gears, compute tangential load from torque first, then turn pressure angle and helix angle into the radial and axial loads the bearings must actually carry.",
      "For bearings, memorise the cube law reflex: double the load, life falls to one eighth. Use 10/3 for rollers, and quote 20,000 h as the industrial life target.",
      "When a bearing fails early, check contamination and fits before recalculating L10; most field failures never reach the fatigue life at all.",
      "For shafts, size on combined bending and torsion, then immediately ask about the fillet radius, the keyway, and the critical speed, because that is where the part breaks.",
      "Lubrication questions are usually failure-mode questions in disguise: decide whether the contact is full-film, mixed, or boundary before recommending a change.",
    ],
  },

  questions: [
    {
      id: "machine-elements-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A lubricated M10 bolt is tightened to 60 N&middot;m. Using the nut-factor relation T = K F<sub>i</sub>d with K = 0.20 and d = 10 mm, estimate the preload in kN.</p>`,
      answer: 30,
      unit: "kN",
      explanation: `<p>Rearrange the torque-preload estimate, keeping diameter in metres:</p>
<p class="eq">F<sub>i</sub> = T/(Kd) = 60/(0.20 &times; 0.010) = 30000 N = <strong>30.0 kN</strong></p>
<p>Working in millimetres costs a factor of 1000: 60/(0.20 &times; 10) gives 30 N. Against the fastener, a class 8.8 M10 has A<sub>t</sub> = 58 mm<sup>2</sup> and S<sub>p</sub> = 600 MPa, so proof load is 34.8 kN. Thirty kN is 86% of proof, already above the usual 75% target. How confident are you in that 30 kN? Not very. K is the whole calculation and it is not a material property.</p>`,
    },
    {
      id: "machine-elements-q02",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>An M16 class 10.9 flange bolt (A<sub>t</sub> = 157 mm<sup>2</sup>, S<sub>p</sub> = 830 MPa) is specified at 250 N&middot;m assuming a nut factor K = 0.20. A supplier change swaps the plain finish for a waxed coating, and the real nut factor becomes K = 0.13. Nobody changes the torque spec. What preload does the bolt now see, in kN?</p>`,
      answer: 120,
      unit: "kN",
      tolerance: 0.03,
      explanation: `<p>The wrench setting is unchanged, so only K moves:</p>
<p class="eq">F<sub>i</sub> = T/(Kd) = 250/(0.13 &times; 0.016) = 250/0.00208 = 120200 N = <strong>120 kN</strong></p>
<p>Compare with the design intent. At the specified K = 0.20 the bolt would have seen 250/(0.20 &times; 0.016) = 78.1 kN. The bolt's proof load is S<sub>p</sub>A<sub>t</sub> = 830 &times; 157 = 130 kN, so the spec put the bolt at 60% of proof. Comfortable, and the wax puts it at <strong>92% of proof</strong>, past the 75% design target and into the region where a bit of extra service load yields the fastener.</p>
<p>This is the whole argument against torque control. A coating change nobody thought was structural moved preload by 54% at identical torque. If preload matters, control it directly (torque-angle, tension indicators, ultrasonic) or at minimum re-qualify K whenever the fastener finish, washer, or lubricant changes.</p>`,
    },
    {
      id: "machine-elements-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An M12 bolt has tensile stress area A<sub>t</sub> = 84.3 mm<sup>2</sup> and proof strength S<sub>p</sub> = 600 MPa. What is 75% of proof load, in kN?</p>`,
      answer: 37.9,
      unit: "kN",
      explanation: `<p>Since 1 MPa = 1 N/mm<sup>2</sup>, the proof load is:</p>
<p class="eq">F<sub>proof</sub> = S<sub>p</sub>A<sub>t</sub> = 600 &times; 84.3 = 50580 N = 50.6 kN</p>
<p>The 75% target is:</p>
<p class="eq">F<sub>i</sub> = 0.75 &times; 50.6 = <strong>37.9 kN</strong></p>
<p>The detail that matters is using tensile stress area rather than the nominal shank area (113 mm<sup>2</sup> for M12), which would overstate the proof load by 34%. A<sub>t</sub> is an effective area based on the mean of the pitch and root diameters, because the thread roots are where the bolt actually breaks.</p>`,
    },
    {
      id: "machine-elements-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The preloaded joint shown has F<sub>i</sub> = 20 kN and joint stiffness factor C = 0.25. A separating external load P = 8 kN is applied. What are the resulting bolt tension and remaining clamp force?</p>`,
      figure: figBoltSplitQ,
      choices: [
        "Bolt tension 28 kN; clamp force 12 kN",
        "Bolt tension 22 kN; clamp force 14 kN",
        "Bolt tension 20 kN; clamp force 12 kN",
        "Bolt tension 24 kN; clamp force 18 kN",
      ],
      answer: 1,
      explanation: `<p>The external load is split by stiffness, not shared equally and not dumped on the bolt.</p>
<p class="eq">F<sub>b</sub> = F<sub>i</sub> + CP = 20 + 0.25(8) = <strong>22 kN</strong></p>
<p class="eq">F<sub>c</sub> = F<sub>i</sub> &minus; (1 &minus; C)P = 20 &minus; 0.75(8) = <strong>14 kN</strong></p>
<p>The 28 kN option treats the bolt as if it carried the whole 8 kN, which is what happens only <em>after</em> the joint separates. Note also that the two numbers do not sum to 28. The members are unloading while the bolt is loading, and the difference between them is exactly P. At what P does this joint open? P = F<sub>i</sub>/(1 &minus; C) = 20/0.75 = 26.7 kN.</p>`,
    },
    {
      id: "machine-elements-q05",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A bolted joint has preload F<sub>i</sub> = 18 kN and stiffness factor C = 0.20. At what separating external load P does the joint just begin to open?</p>`,
      answer: 22.5,
      unit: "kN",
      explanation: `<p>Opening starts when the remaining clamp force reaches zero:</p>
<p class="eq">F<sub>c</sub> = F<sub>i</sub> &minus; (1 &minus; C)P = 0</p>
<p class="eq">P = F<sub>i</sub>/(1 &minus; C) = 18/0.80 = <strong>22.5 kN</strong></p>
<p>Answering 18 kN assumes the joint opens when the external load equals the preload. It does not, because part of that load went into stretching the bolt rather than relieving the clamp. A <em>softer</em> bolt in stiffer members, meaning a smaller C, opens later for the same preload.</p>`,
    },
    {
      id: "machine-elements-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The joint diagram shown is for a steel flange bolt preloaded to 30 kN, with bolt stiffness k<sub>b</sub> = 480 kN/mm and member stiffness k<sub>m</sub> = 1920 kN/mm. A separating load P = 12 kN is applied. Read off the increase in bolt tension and the loss of clamp force.</p>`,
      figure: figJointDiagramQ,
      choices: [
        "Bolt tension rises 12 kN; clamp falls 12 kN",
        "Bolt tension rises 9.6 kN; clamp falls 2.4 kN",
        "Bolt tension rises 2.4 kN; clamp falls 9.6 kN",
        "Bolt tension rises 6 kN; clamp falls 6 kN",
      ],
      answer: 2,
      explanation: `<p>First get the stiffness fraction from the two slopes on the diagram:</p>
<p class="eq">C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>) = 480/(480 + 1920) = 0.20</p>
<p>Then split the 12 kN:</p>
<p class="eq">&Delta;F<sub>b</sub> = CP = 0.20(12) = <strong>2.4 kN</strong>, &nbsp;&nbsp; &Delta;F<sub>m</sub> = (1 &minus; C)P = 0.80(12) = <strong>9.6 kN</strong></p>
<p>So the bolt goes 30 &rarr; 32.4 kN and the clamp goes 30 &rarr; 20.4 kN. The three wrong answers are the three standard mistakes: giving the bolt everything, swapping the two fractions (this is the one that catches people. The <em>stiffer</em> spring takes the bigger share of a force applied in parallel, and the members are the stiff one), and assuming an even split.</p>
<p>The picture makes the design lever obvious: shallow bolt line and steep member line means the bolt barely notices the external load. That is why long grip lengths and thick, stiff flanges are fatigue medicine.</p>`,
    },
    {
      id: "machine-elements-q07",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>An M10 &times; 1.5 class 8.8 bolt clamps an 80 mm aluminum grip. Bolt stiffness is k<sub>b</sub> = 150 kN/mm and member stiffness is k<sub>m</sub> = 450 kN/mm. The assembly spec is "snug, then turn 60&deg;". Estimate the resulting preload in kN.</p>`,
      answer: 28.1,
      unit: "kN",
      tolerance: 0.04,
      explanation: `<p>Torque-angle works because past snug the nut's rigid-body advance has to be absorbed elastically. First the advance, using the lead (1.5 mm for a single-start M10 &times; 1.5):</p>
<p class="eq">&delta; = (60/360) &times; 1.5 = 0.250 mm</p>
<p>That 0.250 mm is shared between stretching the bolt and compressing the members. They are two springs in <strong>series</strong> resisting the same force, so their compliances add:</p>
<p class="eq">k<sub>eff</sub> = k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>) = 150(450)/600 = 112.5 kN/mm</p>
<p class="eq">F<sub>i</sub> = k<sub>eff</sub>&delta; = 112.5 &times; 0.250 = <strong>28.1 kN</strong></p>
<p>Using k<sub>b</sub> alone gives 150 &times; 0.25 = 37.5 kN, a 33% overestimate, and above the 34.8 kN proof load of this bolt, so you would wrongly conclude the spec yields the fastener. Check the real answer: 28.1/34.8 = 81% of proof, which is exactly where a torque-angle spec is supposed to land, and it is far tighter than torque control could ever be because no friction term appears anywhere in the calculation.</p>`,
    },
    {
      id: "machine-elements-q08",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An M10 bolt (A<sub>t</sub> = 58 mm<sup>2</sup>) in a fatigue-loaded joint is currently class 8.8 (S<sub>p</sub> = 600 MPa). The joint stays clamped throughout the load cycle. A colleague proposes upgrading to class 12.9 (S<sub>p</sub> = 970 MPa) to fix a fatigue problem. What does the upgrade actually buy?</p>`,
      choices: [
        "It scales the alternating stress down by 600/970, since the bolt carries less of its capacity",
        "Nothing at all: both classes are steel with the same modulus, so neither preload nor load sharing can move",
        "It lowers C, because the stronger bolt is stiffer and a stiffer bolt draws less of &Delta;P into itself",
        "More allowable preload and clamp margin; the alternating load stays C&Delta;P and does not move",
      ],
      answer: 3,
      explanation: `<p>While the joint stays clamped, the bolt's cyclic load amplitude is C&Delta;P/2, a function of the <em>stiffnesses</em> and the external load range, not of the bolt's strength. Changing material does not change C, so the alternating stress is essentially unchanged.</p>
<p>What does change is headroom. Proof load goes from 600 &times; 58 = 34.8 kN to 970 &times; 58 = 56.3 kN, so you can preload much harder: more clamp force, later separation, and better resistance to slip and embedment. Since bolt fatigue almost always follows joint separation, more preload is a genuine fix, but it is the preload doing the work, not the alloy.</p>
<p>Two of the wrong choices are the standard confusions. Strength does not scale stress: the alternating stress is C&Delta;P/2 divided by A<sub>t</sub>, and neither term contains S<sub>p</sub>. And C does not move either, 8.8 and 12.9 share E = 200 GPa and the same thread form, so k<sub>b</sub> is identical; what the heat treatment buys is capacity, not compliance.</p>
<p>The caveats worth saying out loud: higher-class fasteners are more notch-sensitive and more susceptible to hydrogen embrittlement and stress-corrosion cracking, and rolled-after-heat-treat threads matter more at 12.9. If the joint is already separating, the honest fix is more preload, a more compliant bolt, or stiffer members, in that order.</p>`,
    },
    {
      id: "machine-elements-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A bracket held by four M8 bolts with split (helical spring) lock washers loses most of its torque within an hour of transverse vibration testing. The bolts were installed at about 25% of proof load. What fix addresses the actual mechanism?</p>`,
      choices: [
        "Add a second split lock washer under each head to double the locking action",
        "Raise preload toward 70% of proof so the interface never slips transversely",
        "Switch to a lower property class so the bolts stretch more and grip harder",
        "Increase the hole clearance so the bolts can find their natural position",
      ],
      answer: 1,
      explanation: `<p>Transverse vibration loosening is a <strong>slip</strong> phenomenon, not an unscrewing-torque phenomenon. Once the faying surfaces micro-slip relative to each other, the head and the thread flanks alternately release and ratchet the bolt backwards; this happens even against substantial prevailing torque. Stop the slip and the loosening stops.</p>
<p>Raising preload from 25% to 70% of proof nearly triples the friction capacity &mu;F<sub>i</sub> at the interface and is usually the entire fix. Split lock washers are the classic non-answer: any real preload flattens them solid, after which they are just a washer. The standard Junker vibration test shows them performing no better than plain washers.</p>
<p>If more preload is not available, the ranked alternatives are serrated flange heads or wedge-lock washers (which resist rotation geometrically), prevailing-torque nuts, thread adhesive, or a dowel/shear pin that removes the transverse load from the friction path entirely. More clearance makes slip easier and is exactly backwards.</p>`,
    },
    {
      id: "machine-elements-q10",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A steel bolt (&alpha; = 12 &times; 10<sup>&minus;6</sup>/K) clamps a 50 mm aluminum stack (&alpha; = 23 &times; 10<sup>&minus;6</sup>/K). Bolt stiffness k<sub>b</sub> = 200 kN/mm, member stiffness k<sub>m</sub> = 800 kN/mm. The assembly is heated 80 K above assembly temperature. By how many kN does the preload change?</p>`,
      answer: 7.04,
      unit: "kN",
      tolerance: 0.04,
      explanation: `<p>The aluminum wants to grow more than the steel bolt does over the same grip length, so it forces extra stretch into the bolt. The free-expansion mismatch is:</p>
<p class="eq">&delta; = (&alpha;<sub>m</sub> &minus; &alpha;<sub>b</sub>)L&Delta;T = (23 &minus; 12) &times; 10<sup>&minus;6</sup> &times; 50 &times; 80 = 0.0440 mm</p>
<p>That misfit is absorbed by the two springs in series, exactly as in a torque-angle calculation:</p>
<p class="eq">&Delta;F = &delta; k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>) = 0.0440 &times; 200(800)/1000 = 0.0440 &times; 160 = <strong>+7.04 kN</strong></p>
<p>Sign matters more than magnitude here: preload goes <strong>up</strong> on heating, by 7 kN on top of whatever was installed. Check that the hot preload stays below proof. The genuinely dangerous case is the mirror image, cool the same joint 80 K below assembly and you <em>lose</em> 7 kN of clamp, which is how cryogenic and cold-climate joints leak. The other classic version is a steel bolt through an aluminum housing that relaxes permanently because the hot overload yielded it, leaving the joint loose when cold.</p>`,
    },
    {
      id: "machine-elements-q11",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The bracket shown is held by four bolts on a 120 mm &times; 80 mm rectangular pattern. A 6 kN downward load acts 200 mm from the pattern centroid. Treating the bolts as equal and elastic, what is the resultant shear on the most heavily loaded bolt, in kN?</p>`,
      figure: figBoltGroupQ,
      answer: 5.47,
      unit: "kN",
      tolerance: 0.04,
      explanation: `<p>Two effects superpose. <strong>Direct shear</strong> is shared equally:</p>
<p class="eq">F<sub>direct</sub> = P/n = 6/4 = 1.50 kN, downward on every bolt</p>
<p><strong>Moment</strong> about the centroid, M = 6 kN &times; 0.200 m = 1200 N&middot;m. Each bolt sits at r = &radic;(60<sup>2</sup> + 40<sup>2</sup>) = 72.1 mm, so &Sigma;r<sup>2</sup> = 4(5200) = 20800 mm<sup>2</sup> and</p>
<p class="eq">F<sub>moment</sub> = M r/&Sigma;r<sup>2</sup> = 1.2 &times; 10<sup>6</sup> &times; 72.1/20800 = 4160 N = 4.16 kN</p>
<p>directed perpendicular to r. For the two bolts on the load side, that resolves into 2.31 kN horizontal and 3.46 kN vertical, both downward-ish, so they add to the direct shear:</p>
<p class="eq">F = &radic;(2.31<sup>2</sup> + (1.50 + 3.46)<sup>2</sup>) = &radic;(5.33 + 24.6) = <strong>5.47 kN</strong></p>
<p>The far-side bolts come out at only 3.03 kN, because there the moment term partly opposes the direct shear. Three ways to get this wrong, all common: report 1.50 kN by forgetting the moment entirely (a factor of 3.6 unconservative); report 4.16 kN by forgetting the direct term; or add magnitudes scalar-wise to get 5.66 kN. On the geometry, the 200 mm arm is 2.8&times; the bolt radius, so the moment term should dominate, and it does.</p>`,
    },
    {
      id: "machine-elements-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An M8 class 10.9 steel bolt threads into a tapped boss in a 6061-T6 aluminum casting. You need the bolt to break before the boss threads strip. Roughly how deep should the engaged thread be, and why?</p>`,
      choices: [
        "About 2 to 2.5 diameters, since aluminum shears at roughly a third of the bolt's tensile strength",
        "About 0.5 diameters, since the first two engaged threads take nearly all of the load",
        "About 1 diameter, as in steel: the thread form fixes the shear area per turn, so the material does not matter",
        "About 4 diameters, dividing the 10.9 bolt's 1000 MPa tensile strength straight by 250 MPa of aluminum shear",
      ],
      answer: 0,
      explanation: `<p>Set the stripping capacity of the internal thread above the tensile capacity of the bolt. Stripping load is the shear area of the engaged internal thread, roughly 0.6&pi;D L<sub>e</sub> for a coarse metric thread, times the <em>boss</em> material's shear strength, so the required length scales inversely with that strength. 6061-T6 shears at about 207 MPa against roughly 600 MPa for the hardened steel a class-10 nut is made from, a factor of 2.9:</p>
<p class="eq">L<sub>e</sub> &ge; S<sub>ut</sub>A<sub>t</sub>/(0.6&pi;D&tau;<sub>boss</sub>) = 1000(36.6)/(0.6&pi; &times; 8 &times; 207) = 11.7 mm = 1.5&times;D</p>
<p>Add the usual allowance for loose thread fit, tolerance on depth, and the fact that a stripped boss has no margin at all, and the shop rule lands at <strong>2 to 2.5&times;D in aluminum</strong> against about <strong>1&times;D in steel</strong>. For an M8 that is 16 to 20 mm of thread.</p>
<p>The 4&times;D choice comes from dividing the bolt's tensile strength straight by the boss's shear strength as if that were a length ratio; it double-counts, because the 1&times;D steel baseline already contains most of it. The 1&times;D choice assumes the thread form alone fixes capacity. It fixes the <em>area</em>, and area times strength is what matters.</p>
<p>It is true that load is not shared evenly. The first few engaged threads carry most of it because the bolt stretches while the nut compresses, but that non-uniformity is precisely why you cannot just add a couple of threads and call it done; you need enough length that the peak-loaded region stays below the material's capacity.</p>
<p>The intent behind the rule is to make the <em>bolt</em> the weak link deliberately. A snapped bolt is a five-minute replacement; a stripped boss usually scraps a machined casting. Where depth is not available, use a threaded insert (helicoil or keylocking) rather than hoping.</p>`,
    },
    {
      id: "machine-elements-q13",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 20-tooth pinion drives a 60-tooth gear at 1800 rpm through a simple external mesh. What is the output gear speed?</p>`,
      answer: 600,
      unit: "rpm",
      explanation: `<p>Speed is inversely proportional to tooth count:</p>
<p class="eq">n<sub>out</sub> = n<sub>in</sub>N<sub>in</sub>/N<sub>out</sub> = 1800(20/60) = <strong>600 rpm</strong></p>
<p>The gear turns slower and, for an external mesh, in the opposite direction. Ideal torque rises by the same 3:1 factor before losses. One check needs no units at all: the big gear must turn slower, so if your ratio ever makes the 60-tooth gear turn faster than the pinion, you inverted it.</p>`,
    },
    {
      id: "machine-elements-q14",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 24-tooth pinion and a 72-tooth gear are cut with module m = 3 mm. What is the nominal centre distance between the shafts, in mm?</p>`,
      answer: 144,
      unit: "mm",
      explanation: `<p>Pitch diameter follows from module and tooth count, d = mN:</p>
<p class="eq">d<sub>pinion</sub> = 3(24) = 72 mm, &nbsp;&nbsp; d<sub>gear</sub> = 3(72) = 216 mm</p>
<p>For a standard external mesh the pitch circles are tangent, so the centres sit one pitch radius apart on each side:</p>
<p class="eq">a = (d<sub>1</sub> + d<sub>2</sub>)/2 = (72 + 216)/2 = <strong>144 mm</strong></p>
<p>Remember it as a = m(N<sub>1</sub> + N<sub>2</sub>)/2, which shows immediately that two gears only mesh if they share a module.</p>`,
    },
    {
      id: "machine-elements-q15",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>An 18-tooth pinion drives a 54-tooth gear. Input torque is 10 N&middot;m and mesh efficiency is 94%. What is the output torque?</p>`,
      answer: 28.2,
      unit: "N·m",
      explanation: `<p>Tooth-count ratio is N<sub>out</sub>/N<sub>in</sub> = 54/18 = 3, so ideal torque multiplication is 3 and efficiency then takes its cut:</p>
<p class="eq">T<sub>out</sub> = &eta;T<sub>in</sub>(N<sub>out</sub>/N<sub>in</sub>) = 0.94(10)(3) = <strong>28.2 N&middot;m</strong></p>
<p>Efficiency always reduces the output, so 28.2 has to sit below the ideal 30. An answer of 31.9 means you divided by &eta; instead of multiplying. 94% is pessimistic for a well-lubricated spur mesh, and the missing percent becomes heat you have to get out of the housing.</p>`,
    },
    {
      id: "machine-elements-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>In the train shown, gear A (20 teeth) is driven clockwise at 1500 rpm, meshes with idler B (35 teeth), which meshes with output gear C (60 teeth). All three run on separate fixed shafts. What is C's speed and direction?</p>`,
      figure: figGearTrainQ,
      choices: [
        "857 rpm, turning counter-clockwise",
        "500 rpm, turning counter-clockwise",
        "500 rpm, turning clockwise",
        "286 rpm, turning clockwise",
      ],
      answer: 2,
      explanation: `<p>Work the meshes in sequence. A to B: n<sub>B</sub> = 1500(20/35) = 857 rpm, counter-clockwise. B to C: n<sub>C</sub> = 857(35/60) = <strong>500 rpm</strong>. The idler's tooth count appears once in the numerator and once in the denominator and cancels:</p>
<p class="eq">n<sub>C</sub> = 1500 &times; (20/35) &times; (35/60) = 1500(20/60) = 500 rpm</p>
<p>Direction: each external mesh reverses, and there are two of them, so C turns the <strong>same way as A</strong>, clockwise. That is exactly what an idler is for: change direction (or bridge a centre distance) without touching the ratio.</p>
<p>The distractors are the three real errors. 857 rpm is stopping at the idler. Counter-clockwise at 500 rpm is counting one reversal instead of two. 286 rpm comes from multiplying 20/35 and 20/60, treating the idler as if it added a reduction stage. The way to catch that last one instantly: an idler cannot change the ratio unless it is compounded, i.e. rigidly coupled to a second gear on the same shaft.</p>`,
    },
    {
      id: "machine-elements-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A spur gear transmits T = 120 N&middot;m at pitch diameter d = 80 mm with a 20&deg; pressure angle. What is the radial separating force F<sub>r</sub>, in kN?</p>`,
      figure: figGearForceQ,
      answer: 1.09,
      unit: "kN",
      tolerance: 0.03,
      explanation: `<p>Tangential load first, with d in metres:</p>
<p class="eq">F<sub>t</sub> = 2T/d = 2(120)/0.080 = 3000 N</p>
<p>Then the pressure angle turns that into a radial component along the line of centres:</p>
<p class="eq">F<sub>r</sub> = F<sub>t</sub>tan &phi; = 3000 tan 20&deg; = 3000(0.364) = 1092 N = <strong>1.09 kN</strong></p>
<p>Two ways to get this wrong. Using radius instead of diameter doubles F<sub>t</sub>; leaving d in millimetres divides it by 1000. Remember what F<sub>r</sub> is for: it transmits no power at all, but it is 36% of the tangential load pushing the two shafts apart, and it goes straight into the bearings, the shaft bending moment, and the housing deflection. Housing flex under F<sub>r</sub> is a common root cause of bad tooth contact patterns.</p>`,
    },
    {
      id: "machine-elements-q18",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A compound gear train has A = 20 teeth driving B = 80 teeth. B shares a shaft with C = 25 teeth, which drives D = 75 teeth. If A rotates at 1200 rpm, what is D's speed?</p>`,
      answer: 100,
      unit: "rpm",
      explanation: `<p>B and C are rigidly joined, so they turn at the same speed. That is what makes the train compound and what lets the ratios multiply instead of cancel:</p>
<p class="eq">n<sub>D</sub> = 1200 &times; (20/80) &times; (25/75) = 1200(0.250)(0.3333) = <strong>100 rpm</strong></p>
<p>Overall reduction is 12:1, so ideal output torque is 12&times; the input before losses (about 11.5&times; at 98% per mesh). Contrast this with the idler case: had B and C been separate gears on separate shafts, the middle tooth counts would have cancelled and the ratio would have been just 20/75. Why compound rather than use one big pair? Because a single 12:1 spur pair needs a gear twelve times the pinion diameter, and two stages of 4:1 and 3:1 fit in a fraction of the volume.</p>`,
    },
    {
      id: "machine-elements-q19",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A helical gear carries a tangential tooth load F<sub>t</sub> = 2.5 kN with helix angle &psi; = 25&deg;. Using F<sub>a</sub> = F<sub>t</sub>tan &psi;, estimate the axial thrust in kN.</p>`,
      answer: 1.17,
      unit: "kN",
      tolerance: 0.03,
      explanation: `<p class="eq">F<sub>a</sub> = F<sub>t</sub>tan &psi; = 2.5 tan 25&deg; = 2.5(0.466) = <strong>1.17 kN</strong></p>
<p>Nearly half the tangential load turns up as thrust along the shaft, which is why helix angle is a design variable rather than a styling choice. A bigger &psi; buys smoother, quieter meshing and a higher contact ratio, and charges the bearings for it.</p>`,
    },
    {
      id: "machine-elements-q20",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A gearbox is opened for inspection. The gear flanks show small craters concentrated in a band just below the pitch line; the tooth tips and roots are still bright and undamaged, and the oil is the specified grade and clean. What is happening and what changes?</p>`,
      choices: [
        "Scuffing from film failure; switch to a higher-viscosity oil with EP additives",
        "Abrasive wear from contamination; add finer filtration and reseal the housing",
        "Root bending fatigue; increase module and face width at the next design revision",
        "Pitting from contact fatigue; raise surface hardness or reduce contact stress",
      ],
      answer: 3,
      explanation: `<p>Location is the diagnosis. Craters in a band just below the pitch line, with tips and roots clean, is textbook <strong>pitting</strong>, rolling contact fatigue. That band is the dedendum flank, where Hertzian pressure is high and the sliding direction reverses at the pitch line; sub-surface shear stress peaks there and cracks work their way to the surface.</p>
<p>The fix is on the <em>contact stress</em> side: raise surface hardness (carburise and grind to 58 to 62 HRC instead of through-hardening), increase pitch diameter or face width to drop the load per unit length, or improve the contact pattern so the load is not concentrated. Oil changes do very little for pitting once the film is already adequate.</p>
<p>Contrast the alternatives. <strong>Scuffing</strong> shows as radial scoring at the tips and roots, where sliding velocity is highest, and it <em>is</em> an oil problem, viscosity, EP additives, cooling. <strong>Abrasive wear</strong> is uniform matte scratching over the whole flank, and points to contamination. <strong>Root bending fatigue</strong> is a crack at the fillet, not craters on the flank, and that one is the module and face-width answer.</p>`,
    },
    {
      id: "machine-elements-q21",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Packaging forces a 20&deg; full-depth spur pinion down to 12 teeth. The tooling and the mating gear are otherwise standard. What is the consequence and the standard remedy?</p>`,
      choices: [
        "The cutter undercuts the root, weakening the tooth and cutting contact ratio; use profile shift",
        "The tips interfere before the flanks touch, so the mesh binds; open the centre distance",
        "Contact ratio falls below 1.0 the moment tooth count drops under 17, so the drive loses continuous contact",
        "Root stress rises only because the Lewis form factor Y falls with tooth count; widen the face to compensate",
      ],
      answer: 0,
      explanation: `<p>Below roughly 17 to 18 teeth on a 20&deg; full-depth profile, the tip of the rack-form generating cutter sweeps inside the base circle and gouges material out from under the involute flank near the root. That is <strong>undercutting</strong>. Two things get worse at once: the tooth loses section exactly where the root bending stress is highest, and the usable involute is shortened so contact ratio drops, which means noisier running and more load on a single tooth pair.</p>
<p>The standard remedies, in the order you would offer them: <strong>positive profile shift</strong> on the pinion (cut it with the tool backed off, fattening the root, and shift the gear negatively to keep the centre distance), a <strong>higher pressure angle</strong> such as 25&deg;, which lowers the theoretical minimum tooth count to about 12, or a <strong>stub-tooth</strong> proportion that reduces addendum. If none of those work, use a larger pinion and accept the packaging hit.</p>
<p>The other options are the near-misses. Undercutting is the cutter removing metal during <em>manufacture</em>, not two finished flanks fouling in service, so opening the centre distance does nothing except add backlash and worsen the contact ratio further. Contact ratio does fall, but nowhere near 1.0: the full involute of a 12&times;60 20&deg; pair gives m<sub>p</sub> = 1.60, and undercut trims that rather than killing it, so the drive keeps turning smoothly while the roots quietly crack. And Y does drop with tooth count, 0.245 at 12 teeth against 0.303 at 17, so 0.303/0.245 = 24% more root stress, but that is the <em>ordinary</em> small-tooth penalty; undercut removes section on top of it, and face width cannot buy back a gouged root fillet.</p>`,
    },
    {
      id: "machine-elements-q22",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 4:1 spur reduction runs continuously with both gears made from the same through-hardened steel. After a year the pinion teeth are visibly worn and pitted while the gear teeth look nearly new. Why, and what would you change?</p>`,
      choices: [
        "The pinion carries four times the tooth force because F<sub>t</sub> = 2T/d and its d is four times smaller",
        "The pinion's smaller pitch line velocity thins the EHL film, so it alone runs in boundary contact; use thicker oil",
        "It takes four times the stress cycles at a tighter flank curvature, so harden it a grade above the gear",
        "The gear's larger mass sinks the mesh heat away from its own flanks, so cool the pinion or slow the input shaft",
      ],
      answer: 2,
      explanation: `<p>Both members carry the <em>same</em> tangential tooth force. That is the whole point of a mesh. What differs is how often each tooth is loaded. In a 4:1 reduction the pinion turns four times per gear revolution, and each of its teeth is loaded once per revolution, so a given pinion tooth accumulates <strong>four times the stress cycles</strong> in the same operating hours. On top of that, the smaller pinion has a tighter flank radius of curvature, which raises Hertzian contact pressure for the same load.</p>
<p>The standard response is to specify the pinion harder than the gear, typically 30 to 50 HB higher on through-hardened pairs, or carburise the pinion and through-harden the gear. This also work-hardens and burnishes the softer gear flanks slightly, improving conformity. Where cycle counts are extreme you go further and make the pinion from a better alloy entirely.</p>
<p>The first option is the common misread. F<sub>t</sub> = 2T/d is right, but T scales with d in a mesh: the pinion has a quarter of the diameter <em>and</em> a quarter of the torque, so 2T/d is identical on both members. That identity is what a mesh is. Widening only the pinion would do nothing regardless, since effective face width is set by the narrower member. The lubrication option fails on the same symmetry: the two pitch circles roll together, so pitch line velocity is common to both gears; only the <em>sliding</em> velocity differs, and it is zero at the pitch line on both.</p>`,
    },
    {
      id: "machine-elements-q23",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 20-tooth steel pinion, module m = 2 mm, face width b = 20 mm, transmits T = 60 N&middot;m. Using the Lewis equation &sigma; = F<sub>t</sub>/(b m Y) with form factor Y = 0.32, estimate the root bending stress in MPa.</p>`,
      answer: 234,
      unit: "MPa",
      tolerance: 0.04,
      explanation: `<p>Pitch diameter first, since Lewis needs the tangential load at the pitch circle:</p>
<p class="eq">d = mN = 2(20) = 40 mm, &nbsp;&nbsp; F<sub>t</sub> = 2T/d = 2(60)/0.040 = 3000 N</p>
<p class="eq">&sigma; = F<sub>t</sub>/(b m Y) = 3000/(20 &times; 2 &times; 0.32) = 3000/12.8 = <strong>234 MPa</strong></p>
<p>Now answer the question behind the question: is that plausible? For a through-hardened steel gear the allowable bending number is roughly 200 to 300 MPa, and this is a nominal stress before the dynamic factor K<sub>v</sub>, the load-distribution factor K<sub>m</sub>, and any overload factor, all of which multiply it up, often by 1.5&times; or more. So 234 MPa nominal on a small pinion is <strong>marginal</strong>: it needs carburised teeth, or a wider face, or a bigger module. A quick fix check: going to m = 3 mm with the same 20 teeth drops the stress by a factor of 2.25: d goes to 60 mm so F<sub>t</sub> falls from 3000 to 2000 N (a factor of 1.5) while m itself rises 1.5&times;.</p>
<p>The classic error is dropping Y and reporting 75 MPa, which makes a marginal gear look like it has a 4&times; margin. Y is a shape factor that accounts for how much of the tooth is actually resisting the bending moment at the critical root section, and it is always well below 1.</p>`,
    },
    {
      id: "machine-elements-q24",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A ball bearing has C = 30 kN, equivalent dynamic load P = 6 kN, and runs at n = 1200 rpm. Estimate L<sub>10</sub> life in hours.</p>`,
      figure: figBearingQ,
      answer: 1740,
      unit: "h",
      tolerance: 0.03,
      explanation: `<p>Ball bearing, so the exponent is p = 3 and C/P = 30/6 = 5:</p>
<p class="eq">L<sub>10</sub> = (C/P)<sup>3</sup> &times; 10<sup>6</sup> = 125 &times; 10<sup>6</sup> revolutions</p>
<p>Convert revolutions to hours through the speed:</p>
<p class="eq">L<sub>10h</sub> = 125 &times; 10<sup>6</sup>/(60 &times; 1200) = <strong>1740 h</strong></p>
<p>Now interpret it. Industrial continuous duty is usually specified at 20,000 to 30,000 h, so 1740 h is about ten weeks of running. Nowhere near acceptable for a machine that runs all day, but perfectly reasonable for an intermittently used actuator. Note what each variable does: speed only converts revolutions into clock time, while load changes the revolution life itself, cubed. Use the roller exponent 10/3 by mistake and you would report 5<sup>10/3</sup> &times; 10<sup>6</sup>/(60 &times; 1200) = 2970 h, high by 71% from a single wrong character.</p>`,
    },
    {
      id: "machine-elements-q25",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A conveyor gearbox bearing carries an equivalent dynamic load P = 6.0 kN at 1450 rpm, and the customer requires L<sub>10</sub> = 20,000 h. What minimum dynamic load rating C must the replacement ball bearing have, in kN?</p>`,
      answer: 72.2,
      unit: "kN",
      tolerance: 0.04,
      explanation: `<p>Work backwards from the life target. Convert hours to revolutions first:</p>
<p class="eq">L<sub>10</sub> = 60 n L<sub>10h</sub> = 60(1450)(20000) = 1.74 &times; 10<sup>9</sup> rev = 1740 million rev</p>
<p>Then invert the life law, remembering the 10<sup>6</sup>:</p>
<p class="eq">C/P = (1740)<sup>1/3</sup> = 12.0</p>
<p class="eq">C = 12.0 &times; 6.0 = <strong>72.2 kN</strong></p>
<p>The design message is in the size of that number. A C = 30 kN bearing at this load and speed gives (30/6)<sup>3</sup> &times; 10<sup>6</sup>/(60 &times; 1450) = 1440 h; reaching 20,000 h needs C = 72 kN, 2.41 times the rating, which is two or three frame sizes up and probably a bigger shaft and housing. The cube law cuts both ways: 2.41<sup>3</sup> = 14.0, so a 13.9&times; life improvement costs only a 2.41&times; rating increase.</p>
<p>That is also why the alternative is often better value: cut P instead. Halving the equivalent load (shorter overhang, lower belt pretension, a second support bearing) multiplies life by eight for free. Always price both options before ordering a bigger bearing.</p>`,
    },
    {
      id: "machine-elements-q26",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A deep-groove ball bearing carries a radial load F<sub>r</sub> = 4 kN together with an axial load F<sub>a</sub> = 2 kN. How should the equivalent dynamic load P be obtained for the life calculation?</p>`,
      choices: [
        "Take the vector magnitude P = &radic;(F<sub>r</sub><sup>2</sup> + F<sub>a</sub><sup>2</sup>) = 4.47 kN, since the two act on perpendicular axes",
        "Use catalog X and Y factors, P = XF<sub>r</sub> + YF<sub>a</sub>, chosen from F<sub>a</sub>/F<sub>r</sub> against the bearing's limiting value e",
        "Take the larger component, P = 4 kN: a deep-groove bearing's internal clearance absorbs the axial share until it is seated",
        "Use the radial load with a generic 1.5 service factor, P = 6 kN, which is how combined loading is normally covered",
      ],
      answer: 1,
      explanation: `<p>Equivalent dynamic load is a catalog construct that converts a combined load into the single radial load that would give the same fatigue life. It is not a geometric resultant, because radial and axial loads do not damage a raceway equally. The contact angle shifts under thrust and the load distribution among the rolling elements changes.</p>
<p>The procedure is: form F<sub>a</sub>/F<sub>r</sub> (here 0.5), compare it with the bearing's limiting ratio e (typically 0.2 to 0.4 for a deep-groove ball bearing, itself a function of F<sub>a</sub>/C<sub>0</sub>), and read X and Y from the table. Below e, P is simply F<sub>r</sub>; above e, X drops to about 0.56 while Y runs around 1.2 to 1.8, so the axial load can dominate. Here, with F<sub>a</sub>/F<sub>r</sub> = 0.5 well above e, P lands near 0.56(4) + 1.5(2) = 5.2 kN, noticeably above both the vector magnitude and the radial load alone.</p>
<p>Each distractor is a real mistake. The vector magnitude ignores that the two directions have different damage rates. Taking the larger component ignores thrust entirely, which is exactly how helical-gear shafts get undersized bearings. A blanket 1.5 service factor is a shock allowance, not a substitute for the combined-load calculation, and it happens to be conservative here and unconservative elsewhere.</p>`,
    },
    {
      id: "machine-elements-q27",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A spindle uses a paired angular-contact bearing set. After a housing was re-bored during a repair, the set runs 40&deg;C hotter than before and the bearings fail within weeks. The re-bore measured 0.03 mm <em>under</em> nominal. What happened?</p>`,
      choices: [
        "The tight bore squeezed the outer rings, killing internal clearance and adding preload the design never allowed",
        "The undersize bore unloaded the balls at the top of the race, so they skidded instead of rolling and scuffed",
        "0.03 mm is an order below the 0.3 mm of internal clearance in a bearing this size, so the heat is from the new seals",
        "A tighter bore raises the outer ring's conduction path to the housing, so the set now runs hotter for the same friction",
      ],
      answer: 0,
      explanation: `<p>A bearing's internal clearance is a few tens of microns, the same order as the 0.03 mm interference that was accidentally introduced. Press an outer ring into a bore that is 0.03 mm small and most of that interference transfers straight through the thin ring to the raceway, shrinking it onto the balls. Clearance goes negative and the set acquires <strong>induced preload</strong> on top of whatever preload the design already specified.</p>
<p>The consequences cascade: contact load rises before any external load is applied, friction torque and heat generation climb, the inner ring runs hotter than the housing so it expands more, which adds <em>further</em> preload, and the whole thing runs away thermally. Life falls steeply because the contact load is up and the lubricant film is thinner at temperature.</p>
<p>Why the alternatives fail. Skidding is a <em>too little</em> load problem, seen in lightly loaded high-speed bearings; an interference fit adds load, so it cures skidding rather than causing it. The clearance figure in the third option is off by a factor of ten, a C3 radial internal clearance on a spindle-size bearing is roughly 0.01 to 0.03 mm, not 0.3 mm, so 0.03 mm is the entire budget, not a rounding error. And a tighter bore does improve conduction to the housing: that would make the set run <em>cooler</em> at constant friction, so it argues against itself. The fix is to re-machine to the specified housing tolerance, or select a bearing with greater initial internal clearance to compensate.</p>`,
    },
    {
      id: "machine-elements-q28",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A shaft carries a gear whose radial load direction is fixed in space; the shaft and inner ring rotate, the housing and outer ring do not. Which ring gets the interference fit, and why?</p>`,
      choices: [
        "The inner ring, since it rotates relative to the load and would otherwise creep and fret on its seat",
        "The outer ring, since its loaded zone never moves and funnels every cycle through one arc of the housing bore",
        "Both rings, because looseness at either seat lets the rolling elements skid instead of rolling cleanly",
        "Neither: a light transition fit at both seats lets each ring self-centre and avoids trapping thermal growth",
      ],
      answer: 0,
      explanation: `<p>The rule is about the <em>relative</em> motion between a ring and the load vector, not about which part spins in the room. Here the load direction is fixed in space and the inner ring rotates, so every point on the inner raceway passes through the loaded zone once per revolution. The inner ring carries a <strong>rotating load</strong>. The outer ring's loaded zone stays put, so it carries a <strong>stationary load</strong>.</p>
<p>A ring under rotating load must be an interference fit. If it is loose, the elastic bulge under the load zone travels around the seat and the ring slowly walks, classic <em>creep</em>. That produces fretting corrosion (red-brown oxide), a worn undersize shaft seat, heat, and eventually a spun inner ring that welds itself or destroys the journal. The ring under stationary load can be a transition or loose fit, which is convenient because it makes assembly possible and lets that end float axially for thermal growth.</p>
<p>The other three each get a real thing backwards. The stationary ring's fixed loaded zone is a reason to make its seat <em>looser</em>, not tighter: nothing walks, so nothing frets. Pressing both rings removes the axial float the shaft needs for thermal growth and is how a warm shaft loads its own bearings to death. And leaving both loose invites the creep the rule exists to prevent. Rolling bearings carry load on line and point contacts, so there is no hydrodynamic film at the seats to centre anything.</p>
<p>Invert the situation, a stationary shaft with a rotating housing, as in an idler pulley or a car's front wheel, and the rule flips: the outer ring gets the press fit and the inner is clamped lightly on a stub axle. That inversion separates people who learned the rule from people who learned "inner ring always tight".</p>`,
    },
    {
      id: "machine-elements-q29",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A motor delivers 5.0 kW at 600 rpm to a coupling. What torque must the coupling transmit, neglecting losses?</p>`,
      answer: 79.6,
      unit: "N·m",
      tolerance: 0.03,
      explanation: `<p>Power and torque are linked by P = T&omega;, with &omega; in rad/s:</p>
<p class="eq">&omega; = 2&pi;n/60 = 2&pi;(600)/60 = 62.8 rad/s</p>
<p class="eq">T = P/&omega; = 5000/62.8 = <strong>79.6 N&middot;m</strong></p>
<p>Feeding rpm straight into P = T&omega; gives 8.33 N&middot;m, off by 2&pi;/60. The shortcut worth carrying is T [N&middot;m] &approx; 9550 P [kW]/n [rpm], which here gives 9550(5)/600 = 79.6 N&middot;m. That is steady torque only, and coupling and key selection need the peak.</p>`,
    },
    {
      id: "machine-elements-q30",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rectangular key transmits T = 200 N&middot;m on a d = 25 mm shaft. The key is w = 8 mm wide and L = 40 mm long. Estimate the average key shear stress in MPa.</p>`,
      figure: figKeyQ,
      answer: 50,
      unit: "MPa",
      explanation: `<p>The torque appears as a tangential force at the shaft surface, F = 2T/d, which the key resists on its w &times; L shear plane. Working in N and mm, T = 200000 N&middot;mm:</p>
<p class="eq">&tau; = 2T/(d w L) = 2(200000)/(25 &times; 8 &times; 40) = 400000/8000 = <strong>50 MPa</strong></p>
<p>A plain-carbon key steel yields in shear at roughly 0.577S<sub>y</sub>, so about 140 MPa for a 240 MPa mild steel, 50 MPa leaves a factor of 2.8, which looks comfortable. Three checks still stand between you and a working joint. <strong>Bearing stress</strong> on the projected area hL/2 is usually the governing one: &sigma;<sub>b</sub> = 4T/(dhL) = 4(200000)/(25 &times; 7 &times; 40) = 114 MPa for a 7 mm high key. The <strong>keyway</strong> cuts a stress raiser of K<sub>t</sub> = 2 to 3 into the shaft, so the shaft fatigue check gets worse, not the key. And <strong>fit</strong> decides everything under reversing torque: a loose key hammers, frets, and fails at a fraction of these numbers.</p>`,
    },
    {
      id: "machine-elements-q31",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A sliding contact is wearing too fast. Archard's law V = KWs/H describes it adequately. You can halve the normal load, double the surface hardness, or halve the sliding distance &mdash; each costs about the same. Which gives the biggest wear reduction?</p>`,
      choices: [
        "Doubling the hardness, since H sits alone in the denominator while W and s only share a numerator",
        "Halving the load, since contact pressure enters through Hertz, so wear falls faster than linearly with W",
        "All three are equivalent: each one halves the wear volume, so choose on cost and on the side effects",
        "Halving the sliding distance, since wear tracks running time and the load term saturates once surfaces bed in",
      ],
      answer: 2,
      explanation: `<p>Read the equation literally. V = KWs/H is linear in W, linear in s, and inversely linear in H. Halving W halves V. Halving s halves V. Doubling H halves V. There is no hidden exponent, and recognising that is the actual insight, because it means the decision is not a physics question at all.</p>
<p>The two tempting wrong answers both smuggle in an exponent. Hertzian contact pressure really does go as W<sup>1/3</sup> for a sphere, but Archard is written in terms of <em>load</em>, not pressure, precisely because the real contact area grows in proportion to W: doubling the load doubles the number of asperity junctions rather than squeezing the existing ones harder. And wear scales with sliding distance, not elapsed time. A contact that sits still for an hour wears nothing.</p>
<p>So choose on consequences. Halving the load may mean a bigger contact area or a redesigned mechanism, and it also lowers friction heating. Halving the sliding distance usually means changing the duty cycle or the kinematics, which may be free or impossible. Doubling hardness is often the cheapest (nitride, hard-chrome, DLC) but it makes the part more brittle, may transfer wear to the softer mating part, and can change the wear <em>mode</em> entirely.</p>
<p>The health warning: K is not a constant of nature. It hides the lubrication regime, the material pair, and the debris behaviour, and it can move by orders of magnitude when any of those change. A surface treatment that doubles H and simultaneously drops K by a factor of ten is a far better answer than the linear terms suggest, which is why Archard is a comparison tool for ranking options and sizing tests, not a prediction tool.</p>`,
    },
  ],

  qna: [
    {
      id: "machine-elements-qa01",
      q: `<p>Walk me through how preload changes the way a bolted joint carries external tensile load.</p>`,
      a: `<p>Preload stretches the bolt and compresses the clamped members before service load arrives. When an external separating load P appears, the bolt does not take all of it: bolt tension rises by C P and the members lose (1 &minus; C)P of compression, where C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>). For a typical steel joint C is 0.15 to 0.3, so the bolt sees maybe a fifth of what the outside world applies. The joint opens when clamp reaches zero, at P = F<sub>i</sub>/(1 &minus; C), which is above the preload rather than equal to it.</p>
<p>The fatigue consequence is the point of the whole model. A cyclic external load of range &Delta;P gives a bolt-load range of only C&Delta;P while the joint stays clamped, a 10 kN swing on a C = 0.2 joint is 2 kN in the bolt, and the alternating amplitude is 1 kN. Let the joint separate and the bolt eats the entire 10 kN swing; the alternating stress jumps fivefold and the bolt fails quickly. That is why the design moves are: preload high (75% of proof under controlled tightening), make the bolt <em>more</em> compliant with a longer grip or a reduced-shank waisted bolt, and make the members stiffer. All three push C down and keep the joint closed.</p>`,
    },
    {
      id: "machine-elements-qa02",
      q: `<p>Why is torque-preload control unreliable, and what would you use for a critical joint?</p>`,
      a: `<p>Because the wrench is mostly measuring friction. In T = K F<sub>i</sub>d, only about 10% to 15% of the input torque becomes bolt stretch; the rest goes to thread friction and under-head friction. K is roughly 0.2 dry and 0.15 lubricated, with &plusmn;25% scatter in a controlled process and worse in the field. It moves with plating, lubricant, washer hardness, surface finish, tightening speed, reuse, and thread damage. Concretely: an M10 at 60 N&middot;m with K = 0.20 &plusmn;25% gives preload anywhere between 24 and 40 kN, and the proof load is about 35 kN. The nominal setting is fine and one end of the band yields the bolt.</p>
<p>For a critical joint I would rank the alternatives by cost. <strong>Torque-angle</strong> past snug is cheap and good, because past snug the preload follows the elastic misfit and friction drops out: F<sub>i</sub> = (&theta;/360)L k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>). <strong>Load-indicating washers</strong> or DTIs give visual verification on site. <strong>Ultrasonic bolt elongation</strong> measures the stretch directly and is the reference method for engine and turbine work. <strong>Hydraulic tensioning</strong> is standard on large flanges and removes torsion from the bolt entirely. Whatever the method, I would also fix the friction condition by specification, one lubricant, one washer, no reuse, and re-qualify K after any finish change.</p>`,
    },
    {
      id: "machine-elements-qa03",
      q: `<p>A bracket is bolted to a wall with four bolts and a load hangs off it. How do you size the bolts?</p>`,
      a: `<p>First I decide what the bolts are supposed to do, because that changes the whole calculation. If it is a friction-grip joint, the transverse load is carried by friction and the check is F<sub>service</sub> &le; &mu;&Sigma;F<sub>clamp</sub>/n<sub>safety</sub>, with &mu; around 0.3 to 0.5 on clean steel and a slip factor of 1.5. If it is a bearing-type joint, the joint is allowed to slip and the bolts carry shear on their shanks. Sizing a friction joint on shear strength is the classic error. Shear capacity is typically two to three times slip capacity, so the sums pass while the joint slips at a third of the rated load.</p>
<p>Then the load distribution. I resolve the applied load to the pattern centroid, which gives a direct shear P/n on every bolt plus a moment M = P&times;e. The moment term on each bolt is M r<sub>i</sub>/&Sigma;r<sub>j</sub><sup>2</sup>, acting perpendicular to that bolt's radius, so it grows with distance from the centroid. The two contributions are vectors and must be summed as vectors; the worst bolt is the one where they line up. For a typical overhung bracket the moment term dominates: with a 200 mm arm on a 120 &times; 80 pattern, the direct 1.5 kN per bolt becomes 5.5 kN on the load-side pair.</p>
<p>Finally I check whether there is tension too. A moment about a horizontal axis pries the top bolts in tension, and then I need the preload analysis, prying-factor allowance, and a separation check, and I would push the pattern taller rather than wider, because &Sigma;r<sup>2</sup> is what buys capacity.</p>`,
    },
    {
      id: "machine-elements-qa04",
      q: `<p>How do you get from gear torque to bearing loads?</p>`,
      a: `<p>Start with the tangential load, because that is the one doing work: F<sub>t</sub> = 2T/d at the pitch diameter. For a spur gear the pressure angle gives the radial separating load F<sub>r</sub> = F<sub>t</sub>tan &phi;, so at the standard 20&deg; you get an extra 36% of F<sub>t</sub> pushing the shafts apart along the line of centres. For a helical gear add axial thrust F<sub>a</sub> &approx; F<sub>t</sub>tan &psi;, which at &psi; = 25&deg; is another 47% of F<sub>t</sub> along the shaft.</p>
<p>Then treat the shaft as a beam. Apply F<sub>t</sub> and F<sub>r</sub> at the gear's axial location in their two perpendicular planes, add the moment F<sub>a</sub>&times;(d/2) that the thrust creates about the gear centre, and solve the bearing reactions in each plane. Combine the two plane reactions vectorially per bearing to get F<sub>r</sub> at that bearing, and decide which bearing takes the thrust. That is the locating bearing, and it is the only one that sees F<sub>a</sub>.</p>
<p>Those reactions feed the equivalent dynamic load, P = XF<sub>r</sub> + YF<sub>a</sub> from the catalog, and then L<sub>10</sub> = (C/P)<sup>p</sup> million revolutions with p = 3 for balls and 10/3 for rollers. Two things I always check. An overhung gear or pulley can make the far bearing reaction reverse sign and the near bearing carry more than the applied load, and because life goes as the cube, a 20% error in P is a 42% error in life. Industrial targets are usually 20,000 h or more.</p>`,
    },
    {
      id: "machine-elements-qa05",
      q: `<p>What does bearing L<sub>10</sub> life tell you, and what does it not tell you?</p>`,
      a: `<p>L<sub>10</sub> is a statistical rolling-contact-fatigue life: the life at which 90% of a large population of identical bearings survive under the stated load, speed, lubrication, and cleanliness. The relation is L<sub>10</sub> = (C/P)<sup>p</sup> million revolutions with p = 3 for ball bearings and 10/3 for rollers, converted to hours by dividing by 60n. The reflex worth memorising: double the load and life falls to an eighth. Industrial continuous machinery is typically specified at 20,000 to 30,000 h; intermittent duty at a few thousand.</p>
<p>What it does not tell you is most of what actually happens in the field. It says nothing about a single bearing. 10% are expected to fail before it. It does not cover static overload, so a rarely rotating joint that takes shock loads needs the static rating C<sub>0</sub> and a brinelling check, not L<sub>10</sub>. It assumes an adequate lubricant film, so a cold start, a low-viscosity oil, or a marginal speed factor can put the contact into boundary conditions the equation knows nothing about. And it assumes clean lubrication.</p>
<p>That last point dominates practice. Most bearings never reach their fatigue life; they die from contamination through a failed seal, from a wrong fit that lets a ring creep, from misalignment, or from induced preload after a bad repair. Modern life models fold this in as a<sub>ISO</sub>, a contamination and film-thickness factor that can knock an order of magnitude off the catalog answer. So when a bearing fails early my first questions are about the seal, the fit, and the grease, not the arithmetic.</p>`,
    },
    {
      id: "machine-elements-qa06",
      q: `<p>When would you choose a key, spline, shrink fit, or coupling for torque transmission?</p>`,
      a: `<p>A <strong>key</strong> is the default for moderate, mostly unidirectional torque: cheap, easy to assemble and service, and easy to inspect. The cost is a keyway that cuts a K<sub>t</sub> of 2 to 3 into the shaft exactly where the bending stress lives, plus backlash that turns reversing torque into hammering and fretting. Checks are average shear &tau; = 2T/(dwL) and bearing &sigma;<sub>b</sub> = 4T/(dhL), with bearing usually governing.</p>
<p>A <strong>spline</strong> spreads torque over many teeth, so it takes far more torque in the same diameter, keeps the hub concentric, and tolerates reversals better. It also permits axial sliding under load, which a key cannot do well. It costs more to make and needs tighter tolerances.</p>
<p>A <strong>shrink or press fit</strong> transmits by friction with no notch at all, which is the best fatigue answer, and it is why railway wheels and turbine discs use it. The trade-offs are controlled interference, assembly by heating or hydraulic pressure, a slip-torque calculation that depends on a friction coefficient you cannot measure well, difficult disassembly, and fretting fatigue at the hub ends where the contact pressure falls off.</p>
<p>A <strong>coupling</strong> is a different job: it connects two separate shafts and buys misalignment tolerance or torsional damping. Rigid couplings demand precise alignment; flexible ones tolerate a specified small parallel, angular, and axial error while still generating reaction loads if you exceed it.</p>
<p>My selection criteria, in order: torque and whether it reverses; fatigue duty and how much shaft weakening I can afford; whether the hub must slide or be serviced; concentricity requirements; and assembly process. High reversing torque with fatigue concerns pushes me to a spline or an interference fit; steady torque on a serviceable machine stays with a key.</p>`,
    },
    {
      id: "machine-elements-qa07",
      q: `<p>Size a shaft for me: a gear at midspan between two bearings, some torque, some radial load. Then tell me what you would check next.</p>`,
      a: `<p>I get the loads first. The gear gives F<sub>t</sub> = 2T/d and F<sub>r</sub> = F<sub>t</sub>tan &phi;, and I put those on the shaft as a beam to get the bending moment, for a central load between simple supports, M = FL/4, while the torque T runs from the gear to the coupling end. Then the maximum-shear criterion for a ductile shaft: &tau;<sub>max</sub> = 16&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;d<sup>3</sup>) &le; 0.5S<sub>y</sub>/n, which rearranges to d<sup>3</sup> = 32n&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;S<sub>y</sub>). With M = 60 N&middot;m, T = 60 N&middot;m, S<sub>y</sub> = 350 MPa and n = 2, that is d = 17 mm, so I would pick 20 mm stock.</p>
<p>What I check next is where shafts actually break, and it is never the nominal section. <strong>The shoulder fillet</strong>: a sharp step can carry K<sub>t</sub> near 3 in bending, so I want r/d &ge; 0.1 or an undercut relief, and I would rather add a fillet radius than 2 mm of diameter. <strong>The keyway</strong>: K<sub>t</sub> of 2 to 3, and it must never terminate in a fillet where the two concentrations superpose. <strong>Fatigue properly</strong>: this is a rotating shaft, so bending is fully reversed while torque is steady. That is a Goodman or Soderberg calculation with size, surface, and reliability factors, not a static yield check. <strong>Deflection</strong>: gears want under about 0.03 mm of misalignment across the face, and slope at the bearings must stay within what the bearing type tolerates. <strong>Critical speed</strong>: &omega;<sub>n</sub> = &radic;(k/m) with k = 48EI/L<sup>3</sup> for a central mass; I want to run below 0.75 of it, or accelerate briskly through it and know the rotor self-centres above it.</p>`,
    },
    {
      id: "machine-elements-qa08",
      q: `<p>How do springs in series and parallel behave, and what non-rate issues do you check?</p>`,
      a: `<p>For linear springs F = kx. In parallel they share the same deflection, so forces add and k<sub>eq</sub> = k<sub>1</sub> + k<sub>2</sub>. In series they carry the same force, so deflections add and 1/k<sub>eq</sub> = 1/k<sub>1</sub> + 1/k<sub>2</sub>, giving an equivalent stiffness lower than the softer spring. The same series rule is why a bolt and its clamped members combine as k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>) when you turn a nut.</p>
<p>The rate is almost never what bites you. The checks I would list are: <strong>solid height and clash margin</strong>. At coil bind the rate goes near-infinite, the mechanism jams and the spring takes a permanent set, and I want real margin after tolerance stack, plating buildup, and set. <strong>Spring index</strong> C = D/d, best kept between 5 and 12; below 4 it is hard to coil and the inner-fibre stress concentration climbs, above 12 it tangles and buckles. <strong>Buckling</strong>. A compression spring between flat plates goes unstable above roughly L<sub>free</sub>/D = 5.2 at large deflection, so guide it on a rod or in a bore. <strong>Fatigue</strong>, torsional stress in the wire with a curvature correction, and mean stress matters, so shot peening and presetting are standard. <strong>Surge</strong>. The spring's own natural frequency must sit an order of magnitude above the drive frequency; the usual cam figure is 13&times; the shaft speed, because the cam event is rich in harmonics. Plus relaxation at temperature, corrosion, and end-coil seating.</p>`,
    },
    {
      id: "machine-elements-qa09",
      q: `<p>How would you reason through a gearbox that is noisy and running hot?</p>`,
      a: `<p>I would separate load, geometry, and lubrication, and go looking for evidence before changing anything.</p>
<p><strong>Load</strong>: verify the actual transmitted torque against the design assumption, check for shock or overload events, look at the duty cycle, and recompute the bearing reactions including the radial and axial gear loads. Heat is dissipated power, so I want to know how many kilowatts are being lost. A 5 kW box at 96% efficiency is dumping 200 W into the sump, and if the case cannot reject that, temperature climbs until it can.</p>
<p><strong>Geometry</strong>: check the tooth contact pattern with marking compound, since misalignment concentrates load at one end of the face and produces both noise and local heating. Check backlash, gear runout, shaft alignment, soft foot, housing bore alignment, and bearing preload, an over-preloaded or pinched bearing generates a surprising amount of heat on its own, and I have seen a re-bored housing add 40&deg;C by itself.</p>
<p><strong>Lubrication</strong>: verify the grade against the manufacturer's spec at the actual operating temperature, check level and whether it is being churned, look for foaming, water, or contamination, and consider whether the contact is running full-film or has dropped into mixed or boundary. A thicker oil is not automatically safer. Excess viscosity adds churning loss and drag and can make the box hotter than the oil it replaced.</p>
<p>Then I would open it and read the teeth: pitting below the pitch line means contact stress, scoring at the tips means film failure, uniform matte scratching means contamination, a crack at the root fillet means bending. The damage pattern tells you which of the three buckets you are actually in, which is a lot cheaper than guessing.</p>`,
    },
    {
      id: "machine-elements-qa10",
      q: `<p>What are the main lubrication regimes, and why do they matter for wear?</p>`,
      a: `<p>In <strong>hydrodynamic</strong> lubrication, relative motion drags fluid into a converging wedge and generates enough pressure to fully separate the surfaces. Friction is set by the oil's viscous shear and wear is essentially zero; journal bearings and thrust pads live here. In <strong>elastohydrodynamic</strong> lubrication the contact is concentrated, a gear tooth or a rolling element, so pressures reach gigapascals, the surfaces deform elastically and the oil's viscosity rises by orders of magnitude, which is what allows a film only a fraction of a micron thick to survive at all. In <strong>mixed</strong> lubrication the film is comparable to the surface roughness and asperities intermittently touch. In <strong>boundary</strong> lubrication there is no meaningful film and load is carried by adsorbed layers and additive-formed surface films.</p>
<p>The practical way to place a contact is the film-thickness ratio &lambda; = h/&sigma;<sub>rms</sub>: above about 3 you are full-film, below about 1 you are boundary. Speed, viscosity, and load move you along that scale. The Stribeck curve, and the important consequence is that a machine can be perfectly safe at speed and unsafe every time it starts, which is why many failures are start-stop failures.</p>
<p>The regime determines both the failure mode and the fix. Full-film problems are about viscosity selection, heat removal, and geometry. Boundary problems are about material pair, EP and anti-wear additives, surface finish, coatings, and contamination control. Prescribing a heavier oil for a boundary problem may work; prescribing it for a full-film problem just adds churning loss and heat.</p>`,
    },
  ],
};

export default content;
