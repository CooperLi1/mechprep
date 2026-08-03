import type { Question } from "../types";

// Additional question bank for Statics & Equilibrium (merged after the base
// questions in content/index.ts). Authored per-question — no generated
// templates. FBD construction itself belongs to the `free-body-diagrams`
// topic; everything here is about solving the equilibrium problem.

const figFrameQ = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxfr-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="100" y1="18" x2="100" y2="212" stroke="#334155" stroke-width="2.5"/>
  <line x1="88" y1="42" x2="100" y2="30" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="72" x2="100" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="102" x2="100" y2="90" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="132" x2="100" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="162" x2="100" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="192" x2="100" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="212" x2="100" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="176" x2="100" y2="34" stroke="#334155" stroke-width="6"/>
  <line x1="300" y1="176" x2="100" y2="34" stroke="#dbeafe" stroke-width="2.5"/>
  <rect x="100" y="168" width="300" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="100" cy="176" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="100" cy="34" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="300" cy="176" r="5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="400" y1="106" x2="400" y2="162" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxfr-load)"/>
  <text x="400" y="98" text-anchor="middle" fill="#dc2626" font-weight="600">5 kN</text>
  <text x="114" y="202" text-anchor="start" font-weight="600" fill="#334155">A</text>
  <text x="296" y="164" text-anchor="end" font-weight="600" fill="#334155">B</text>
  <text x="400" y="206" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="114" y="30" text-anchor="start" font-weight="600" fill="#334155">D</text>
  <line x1="62" y1="34" x2="62" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="34" x2="68" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="176" x2="68" y2="176" stroke="#64748b" stroke-width="1"/>
  <text x="52" y="108" text-anchor="end" fill="#64748b" font-size="12">1.5 m</text>
  <line x1="100" y1="228" x2="300" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="228" x2="400" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="100" y1="222" x2="100" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="222" x2="300" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="222" x2="400" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="223" text-anchor="middle" fill="#64748b" font-size="12">2.0 m</text>
  <text x="350" y="223" text-anchor="middle" fill="#64748b" font-size="12">1.0 m</text>
  <text x="20" y="248" fill="#64748b" font-size="12">A and D are wall pins; B is the pin between the two members.</text>
</svg>`;

const figAframe = `<svg viewBox="0 0 460 296" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxaf-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxaf-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- floor -->
  <line x1="120" y1="220" x2="340" y2="220" stroke="#334155" stroke-width="2"/>
  <line x1="126" y1="230" x2="136" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="152" y1="230" x2="162" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="178" y1="230" x2="188" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="204" y1="230" x2="214" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="230" x2="240" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="256" y1="230" x2="266" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="282" y1="230" x2="292" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="308" y1="230" x2="318" y2="220" stroke="#64748b" stroke-width="1"/>
  <!-- legs -->
  <line x1="170" y1="220" x2="230" y2="70" stroke="#334155" stroke-width="5"/>
  <line x1="290" y1="220" x2="230" y2="70" stroke="#334155" stroke-width="5"/>
  <circle cx="230" cy="70" r="5.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <!-- tie -->
  <line x1="200" y1="145" x2="260" y2="145" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="200" cy="145" r="3" fill="#1d4ed8"/>
  <circle cx="260" cy="145" r="3" fill="#1d4ed8"/>
  <text x="230" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="600">tie, T</text>
  <!-- load -->
  <line x1="230" y1="20" x2="230" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxaf-load)"/>
  <text x="230" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">4 kN</text>
  <!-- floor reactions -->
  <line x1="170" y1="258" x2="170" y2="226" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxaf-rxn)"/>
  <line x1="290" y1="258" x2="290" y2="226" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxaf-rxn)"/>
  <text x="170" y="272" text-anchor="middle" fill="#1d4ed8" font-weight="600">2 kN</text>
  <text x="290" y="272" text-anchor="middle" fill="#1d4ed8" font-weight="600">2 kN</text>
  <!-- notes -->
  <text x="20" y="40" fill="#64748b" font-size="12">Smooth floor:</text>
  <text x="20" y="56" fill="#64748b" font-size="12">vertical reactions</text>
  <text x="20" y="72" fill="#64748b" font-size="12">only.</text>
  <text x="352" y="112" fill="#64748b" font-size="12">Tie sits at</text>
  <text x="352" y="128" fill="#64748b" font-size="12">mid-height</text>
  <text x="352" y="144" fill="#64748b" font-size="12">(1.0 m up).</text>
  <!-- dimensions -->
  <line x1="352" y1="70" x2="352" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="346" y1="70" x2="358" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="346" y1="220" x2="358" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="366" y="192" text-anchor="start" fill="#64748b" font-size="12">2.0 m</text>
  <line x1="170" y1="288" x2="290" y2="288" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="282" x2="170" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="282" x2="230" y2="294" stroke="#64748b" stroke-width="1"/>
  <line x1="290" y1="282" x2="290" y2="294" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="283" text-anchor="middle" fill="#64748b" font-size="12">0.75 m</text>
  <text x="260" y="283" text-anchor="middle" fill="#64748b" font-size="12">0.75 m</text>
</svg>`;

const figPliers = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxpl-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxpl-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="170" y="100" width="250" height="16" rx="6" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="240" cy="108" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="240" cy="108" r="2.5" fill="#334155"/>
  <text x="240" y="88" text-anchor="middle" font-weight="600" fill="#334155">pivot</text>
  <!-- workpiece -->
  <circle cx="205" cy="128" r="11" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <!-- hand force -->
  <line x1="408" y1="40" x2="408" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxpl-load)"/>
  <text x="408" y="32" text-anchor="middle" fill="#dc2626" font-weight="600">80 N</text>
  <!-- jaw reaction -->
  <line x1="205" y1="178" x2="205" y2="146" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxpl-rxn)"/>
  <text x="194" y="172" text-anchor="end" fill="#1d4ed8" font-weight="600">N</text>
  <!-- pivot reaction unknown -->
  <line x1="240" y1="124" x2="240" y2="158" stroke="#1d4ed8" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#stxpl-rxn)"/>
  <text x="252" y="150" text-anchor="start" fill="#1d4ed8" font-weight="600">R = ?</text>
  <!-- dimensions -->
  <line x1="205" y1="196" x2="240" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="196" x2="408" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="205" y1="190" x2="205" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="190" x2="240" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="408" y1="190" x2="408" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="222" y="214" text-anchor="middle" fill="#64748b" font-size="12">25 mm</text>
  <text x="324" y="191" text-anchor="middle" fill="#64748b" font-size="12">120 mm</text>
  <text x="20" y="60" fill="#64748b" font-size="12">One handle,</text>
  <text x="20" y="76" fill="#64748b" font-size="12">isolated.</text>
</svg>`;

const figTackle = `<svg viewBox="0 0 460 286" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxtk-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxtk-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- ceiling -->
  <line x1="140" y1="34" x2="340" y2="34" stroke="#334155" stroke-width="2.5"/>
  <line x1="148" y1="24" x2="158" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="174" y1="24" x2="184" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="200" y1="24" x2="210" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="226" y1="24" x2="236" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="252" y1="24" x2="262" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="278" y1="24" x2="288" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="304" y1="24" x2="314" y2="34" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="34" x2="240" y2="48" stroke="#334155" stroke-width="2.5"/>
  <!-- upper block -->
  <rect x="196" y="48" width="88" height="44" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="218" cy="70" r="14" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <circle cx="262" cy="70" r="14" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <!-- lower block -->
  <rect x="196" y="168" width="88" height="44" rx="8" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="218" cy="190" r="14" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <circle cx="262" cy="190" r="14" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <!-- four supporting parts -->
  <line x1="204" y1="92" x2="204" y2="168" stroke="#334155" stroke-width="2"/>
  <line x1="232" y1="92" x2="232" y2="168" stroke="#334155" stroke-width="2"/>
  <line x1="248" y1="92" x2="248" y2="168" stroke="#334155" stroke-width="2"/>
  <line x1="276" y1="92" x2="276" y2="168" stroke="#334155" stroke-width="2"/>
  <!-- hauling line -->
  <line x1="276" y1="70" x2="330" y2="70" stroke="#334155" stroke-width="2"/>
  <line x1="330" y1="70" x2="330" y2="214" stroke="#334155" stroke-width="2"/>
  <line x1="330" y1="176" x2="330" y2="228" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxtk-load)"/>
  <text x="340" y="228" text-anchor="start" fill="#dc2626" font-weight="600">haul, T</text>
  <!-- load -->
  <line x1="240" y1="212" x2="240" y2="232" stroke="#334155" stroke-width="2.5"/>
  <rect x="206" y="232" width="68" height="38" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="240" y="256" text-anchor="middle" fill="#dc2626" font-weight="600">500 kg</text>
  <!-- anchor -->
  <line x1="158" y1="40" x2="236" y2="40" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="150" y1="80" x2="150" y2="42" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxtk-rxn)"/>
  <text x="142" y="96" text-anchor="middle" fill="#1d4ed8" font-weight="600">anchor</text>
  <text x="142" y="112" text-anchor="middle" fill="#1d4ed8" font-weight="600">force = ?</text>
  <text x="352" y="120" text-anchor="start" fill="#64748b" font-size="12">4 rope parts</text>
  <text x="352" y="136" text-anchor="start" fill="#64748b" font-size="12">support the</text>
  <text x="352" y="152" text-anchor="start" fill="#64748b" font-size="12">lower block.</text>
</svg>`;

const figWrap = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxwr-t" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxwr-b" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <circle cx="200" cy="130" r="52" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="200" cy="130" r="4" fill="#334155"/>
  <path d="M 60 64 L 200 64 A 66 66 0 0 1 200 196 L 60 196" fill="none" stroke="#334155" stroke-width="4"/>
  <path d="M 60 56 L 200 56 A 74 74 0 0 1 200 204 L 60 204" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6 5"/>
  <line x1="118" y1="42" x2="62" y2="42" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxwr-t)"/>
  <text x="126" y="38" text-anchor="start" fill="#dc2626" font-weight="600">T<tspan baseline-shift="sub" font-size="10">2</tspan> tight side</text>
  <line x1="100" y1="220" x2="62" y2="220" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxwr-b)"/>
  <text x="108" y="224" text-anchor="start" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="10">1</tspan> slack side</text>
  <path d="M 200 96 A 34 34 0 0 1 200 164" fill="none" stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="4 3"/>
  <text x="168" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="600">&beta;</text>
  <text x="300" y="86" text-anchor="start" fill="#64748b" font-size="12">Wrap angle &beta;</text>
  <text x="300" y="104" text-anchor="start" fill="#64748b" font-size="12">is measured in</text>
  <text x="300" y="122" text-anchor="start" fill="#64748b" font-size="12">radians and may</text>
  <text x="300" y="140" text-anchor="start" fill="#64748b" font-size="12">exceed 2&pi; when</text>
  <text x="300" y="158" text-anchor="start" fill="#64748b" font-size="12">the rope takes</text>
  <text x="300" y="176" text-anchor="start" fill="#64748b" font-size="12">several turns</text>
  <text x="300" y="194" text-anchor="start" fill="#64748b" font-size="12">(dashed).</text>
  <text x="20" y="248" fill="#64748b" font-size="12">Drum or bollard radius does not enter the tension ratio.</text>
</svg>`;

const figBolts = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxbg-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxbg-m" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="120" y="70" width="180" height="120" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <!-- bolts -->
  <circle cx="160" cy="100" r="9" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="260" cy="100" r="9" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="160" cy="160" r="9" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="260" cy="160" r="9" fill="#fff" stroke="#334155" stroke-width="2"/>
  <!-- centroid. P acts downward to the RIGHT of G, so M = Pe is CLOCKWISE:
       sweep-flag 1 traces increasing angle, which in SVG's y-down space runs
       left -> top -> right, i.e. clockwise on screen. -->
  <circle cx="210" cy="130" r="3.5" fill="#1d4ed8"/>
  <text x="210" y="178" text-anchor="middle" fill="#1d4ed8" font-weight="600">G</text>
  <path d="M 186 130 A 24 24 0 0 1 234 130" fill="none" stroke="#1d4ed8" stroke-width="2" marker-end="url(#stxbg-m)"/>
  <text x="210" y="150" text-anchor="middle" fill="#1d4ed8" font-size="12">M = P e</text>
  <!-- load -->
  <line x1="360" y1="46" x2="360" y2="146" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxbg-load)"/>
  <text x="360" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">P = 5 kN</text>
  <!-- dimensions -->
  <line x1="100" y1="100" x2="100" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="94" y1="100" x2="106" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="94" y1="160" x2="106" y2="160" stroke="#64748b" stroke-width="1"/>
  <text x="88" y="134" text-anchor="end" fill="#64748b" font-size="12">60 mm</text>
  <line x1="160" y1="206" x2="260" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="200" x2="160" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="260" y1="200" x2="260" y2="212" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="201" text-anchor="middle" fill="#64748b" font-size="12">100 mm</text>
  <line x1="210" y1="230" x2="360" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="210" y1="224" x2="210" y2="236" stroke="#64748b" stroke-width="1"/>
  <line x1="360" y1="224" x2="360" y2="236" stroke="#64748b" stroke-width="1"/>
  <text x="285" y="225" text-anchor="middle" fill="#64748b" font-size="12">e = 150 mm</text>
</svg>`;

const figShelf = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxsh-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="120" y1="30" x2="120" y2="210" stroke="#334155" stroke-width="2.5"/>
  <line x1="108" y1="54" x2="120" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="84" x2="120" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="114" x2="120" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="144" x2="120" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="174" x2="120" y2="162" stroke="#64748b" stroke-width="1"/>
  <line x1="108" y1="204" x2="120" y2="192" stroke="#64748b" stroke-width="1"/>
  <rect x="120" y="60" width="18" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <rect x="120" y="90" width="220" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="129" cy="74" r="6" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="129" cy="146" r="6" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="150" y="72" text-anchor="start" fill="#334155" font-weight="600">upper bolt</text>
  <text x="150" y="150" text-anchor="start" fill="#334155" font-weight="600">lower bolt</text>
  <line x1="270" y1="44" x2="270" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxsh-load)"/>
  <text x="270" y="36" text-anchor="middle" fill="#dc2626" font-weight="600">600 N</text>
  <line x1="90" y1="74" x2="90" y2="146" stroke="#64748b" stroke-width="1"/>
  <line x1="84" y1="74" x2="96" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="84" y1="146" x2="96" y2="146" stroke="#64748b" stroke-width="1"/>
  <text x="78" y="114" text-anchor="end" fill="#64748b" font-size="12">0.12 m</text>
  <line x1="120" y1="186" x2="270" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="180" x2="120" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="180" x2="270" y2="192" stroke="#64748b" stroke-width="1"/>
  <text x="195" y="181" text-anchor="middle" fill="#64748b" font-size="12">e = 0.25 m</text>
  <text x="20" y="228" fill="#64748b" font-size="12">Moment reacted as a couple: upper bolt in tension, lower edge bearing.</text>
</svg>`;

const figLadderQ = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxld-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="stxld-rxn" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- wall -->
  <line x1="360" y1="40" x2="360" y2="240" stroke="#334155" stroke-width="2.5"/>
  <line x1="372" y1="52" x2="360" y2="64" stroke="#64748b" stroke-width="1"/>
  <line x1="372" y1="82" x2="360" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="372" y1="112" x2="360" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="372" y1="142" x2="360" y2="154" stroke="#64748b" stroke-width="1"/>
  <line x1="372" y1="172" x2="360" y2="184" stroke="#64748b" stroke-width="1"/>
  <line x1="372" y1="202" x2="360" y2="214" stroke="#64748b" stroke-width="1"/>
  <!-- floor -->
  <line x1="180" y1="240" x2="400" y2="240" stroke="#334155" stroke-width="2.5"/>
  <line x1="188" y1="250" x2="198" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="214" y1="250" x2="224" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="250" x2="250" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="266" y1="250" x2="276" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="250" x2="302" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="318" y1="250" x2="328" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="344" y1="250" x2="354" y2="240" stroke="#64748b" stroke-width="1"/>
  <!-- ladder -->
  <line x1="260" y1="240" x2="360" y2="67" stroke="#334155" stroke-width="4"/>
  <!-- ladder weight -->
  <line x1="310" y1="154" x2="310" y2="196" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxld-load)"/>
  <text x="300" y="212" text-anchor="end" fill="#dc2626" font-weight="600">200 N</text>
  <!-- person -->
  <line x1="340" y1="101" x2="340" y2="143" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxld-load)"/>
  <text x="330" y="96" text-anchor="end" fill="#dc2626" font-weight="600">600 N</text>
  <!-- wall reaction -->
  <line x1="354" y1="67" x2="304" y2="67" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxld-rxn)"/>
  <text x="298" y="60" text-anchor="end" fill="#1d4ed8" font-weight="600">N<tspan baseline-shift="sub" font-size="10">w</tspan> (smooth wall)</text>
  <!-- floor reactions -->
  <line x1="260" y1="290" x2="260" y2="250" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxld-rxn)"/>
  <text x="270" y="284" text-anchor="start" fill="#1d4ed8" font-weight="600">N<tspan baseline-shift="sub" font-size="10">f</tspan></text>
  <line x1="206" y1="262" x2="252" y2="262" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#stxld-rxn)"/>
  <text x="200" y="266" text-anchor="end" fill="#1d4ed8" font-weight="600">f</text>
  <!-- angle -->
  <path d="M 300 240 A 40 40 0 0 0 280 205.4" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="308" y="232" text-anchor="start" fill="#1d4ed8" font-size="12">60&#176;</text>
  <text x="20" y="60" fill="#64748b" font-size="12">Ladder 5 m long,</text>
  <text x="20" y="76" fill="#64748b" font-size="12">weight at midpoint.</text>
  <text x="20" y="98" fill="#64748b" font-size="12">Person stands 4 m</text>
  <text x="20" y="114" fill="#64748b" font-size="12">up from the foot.</text>
</svg>`;

const figCabinet = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxcb-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="80" y1="200" x2="320" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="86" y1="210" x2="96" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="210" x2="122" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="138" y1="210" x2="148" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="164" y1="210" x2="174" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="210" x2="200" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="216" y1="210" x2="226" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="242" y1="210" x2="252" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="268" y1="210" x2="278" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="294" y1="210" x2="304" y2="200" stroke="#64748b" stroke-width="1"/>
  <rect x="140" y="56" width="96" height="144" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="188" cy="128" r="3.5" fill="#334155"/>
  <line x1="188" y1="128" x2="188" y2="188" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxcb-load)"/>
  <text x="198" y="164" text-anchor="start" fill="#dc2626" font-weight="600">1000 N</text>
  <line x1="78" y1="66" x2="134" y2="66" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxcb-load)"/>
  <text x="70" y="62" text-anchor="end" fill="#dc2626" font-weight="600">P at top</text>
  <line x1="118" y1="66" x2="118" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="66" x2="124" y2="66" stroke="#64748b" stroke-width="1"/>
  <line x1="112" y1="200" x2="124" y2="200" stroke="#64748b" stroke-width="1"/>
  <text x="108" y="136" text-anchor="end" fill="#64748b" font-size="12">1.2 m</text>
  <line x1="140" y1="228" x2="236" y2="228" stroke="#64748b" stroke-width="1"/>
  <line x1="140" y1="222" x2="140" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="236" y1="222" x2="236" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="188" y="223" text-anchor="middle" fill="#64748b" font-size="12">0.8 m</text>
  <text x="260" y="166" text-anchor="start" fill="#64748b" font-size="12">&mu;<tspan baseline-shift="sub" font-size="9">s</tspan> = 0.50 at</text>
  <text x="260" y="182" text-anchor="start" fill="#64748b" font-size="12">the floor</text>
</svg>`;

// q43 — the crossover-height crate. Deliberately NOT the q42 cabinet: the
// numbers are q43's own (400 N, 0.5 m, mu = 0.35) and the push height is left
// as the unknown h, which is the quantity the question asks for.
const figCrateH = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxcr-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- floor -->
  <line x1="60" y1="196" x2="350" y2="196" stroke="#334155" stroke-width="2.5"/>
  <line x1="66" y1="206" x2="76" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="206" x2="102" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="118" y1="206" x2="128" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="144" y1="206" x2="154" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="170" y1="206" x2="180" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="196" y1="206" x2="206" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="222" y1="206" x2="232" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="248" y1="206" x2="258" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="274" y1="206" x2="284" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="206" x2="310" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="326" y1="206" x2="336" y2="196" stroke="#64748b" stroke-width="1"/>
  <!-- crate -->
  <rect x="150" y="46" width="80" height="150" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="190" cy="121" r="3.5" fill="#334155"/>
  <text x="176" y="117" text-anchor="end" fill="#64748b" font-size="11">CG</text>
  <line x1="190" y1="121" x2="190" y2="170" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxcr-load)"/>
  <text x="190" y="186" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">W = 400 N</text>
  <!-- push, at an unspecified height -->
  <line x1="104" y1="96" x2="146" y2="96" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxcr-load)"/>
  <text x="125" y="88" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <path d="M119 74 L125 68 L131 74" fill="none" stroke="#94a3b8" stroke-width="1.4"/>
  <path d="M119 114 L125 120 L131 114" fill="none" stroke="#94a3b8" stroke-width="1.4"/>
  <!-- push height: the unknown -->
  <line x1="96" y1="96" x2="96" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="96" x2="102" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="90" y1="196" x2="102" y2="196" stroke="#64748b" stroke-width="1"/>
  <text x="88" y="150" text-anchor="end" fill="#64748b" font-size="12">h = ?</text>
  <!-- leading corner: where N and f migrate as tipping impends -->
  <circle cx="230" cy="196" r="7" fill="none" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="244" y1="150" x2="234" y2="190" stroke="#1d4ed8" stroke-width="1"/>
  <text x="248" y="138" text-anchor="start" fill="#1d4ed8" font-size="12">at tipping, N and f</text>
  <text x="248" y="154" text-anchor="start" fill="#1d4ed8" font-size="12">migrate to this corner</text>
  <text x="244" y="186" text-anchor="start" fill="#64748b" font-size="12">&mu;<tspan baseline-shift="sub" font-size="9">s</tspan> = 0.35 at the floor</text>
  <!-- width -->
  <line x1="150" y1="216" x2="230" y2="216" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="210" x2="150" y2="222" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="210" x2="230" y2="222" stroke="#64748b" stroke-width="1"/>
  <text x="190" y="211" text-anchor="middle" fill="#64748b" font-size="12">0.5 m</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">the worker can push anywhere up the face &mdash; h is the unknown</text>
</svg>`;

const figIncline = `<svg viewBox="0 0 460 224" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxin-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <polygon points="60,196 400,196 400,80" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
  <line x1="70" y1="206" x2="80" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="110" y1="206" x2="120" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="206" x2="160" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="190" y1="206" x2="200" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="206" x2="240" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="270" y1="206" x2="280" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="206" x2="320" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="350" y1="206" x2="360" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="206" x2="400" y2="196" stroke="#64748b" stroke-width="1"/>
  <polygon points="248.3,83.1 263.1,126.7 196.9,149.3 182.1,105.7" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="222.6" cy="116.2" r="3.5" fill="#334155"/>
  <line x1="222.6" y1="116.2" x2="222.6" y2="180" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxin-load)"/>
  <text x="234" y="176" text-anchor="start" fill="#dc2626" font-weight="600">W</text>
  <text x="208" y="84" text-anchor="middle" fill="#64748b" font-size="12">b</text>
  <text x="274" y="114" text-anchor="start" fill="#64748b" font-size="12">h</text>
  <path d="M 100 196 A 40 40 0 0 0 97.9 183.1" fill="none" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="110" y="188" text-anchor="start" fill="#1d4ed8" font-weight="600">&theta;</text>
  <text x="20" y="40" fill="#64748b" font-size="12">Ramp angle &theta;. Block of base width b</text>
  <text x="20" y="56" fill="#64748b" font-size="12">and height h, uniform, CG at centre.</text>
</svg>`;

const figStack = `<svg viewBox="0 0 460 222" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxst-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="110" y1="190" x2="350" y2="190" stroke="#334155" stroke-width="2.5"/>
  <line x1="116" y1="200" x2="126" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="146" y1="200" x2="156" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="176" y1="200" x2="186" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="206" y1="200" x2="216" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="236" y1="200" x2="246" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="266" y1="200" x2="276" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="296" y1="200" x2="306" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="326" y1="200" x2="336" y2="190" stroke="#64748b" stroke-width="1"/>
  <rect x="150" y="110" width="160" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <text x="230" y="156" text-anchor="middle" fill="#334155" font-weight="600">50 kg</text>
  <rect x="180" y="50" width="100" height="60" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <text x="230" y="86" text-anchor="middle" fill="#334155" font-weight="600">20 kg</text>
  <line x1="110" y1="80" x2="174" y2="80" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxst-load)"/>
  <text x="102" y="76" text-anchor="end" fill="#dc2626" font-weight="600">P</text>
  <line x1="318" y1="108" x2="286" y2="110" stroke="#64748b" stroke-width="1"/>
  <text x="324" y="108" text-anchor="start" fill="#64748b" font-size="12">&mu; = 0.30</text>
  <text x="324" y="124" text-anchor="start" fill="#64748b" font-size="12">between blocks</text>
  <line x1="348" y1="188" x2="330" y2="190" stroke="#64748b" stroke-width="1"/>
  <text x="354" y="184" text-anchor="start" fill="#64748b" font-size="12">&mu; = 0.25</text>
  <text x="354" y="200" text-anchor="start" fill="#64748b" font-size="12">at the floor</text>
</svg>`;

const figHinge = `<svg viewBox="0 0 460 224" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxhg-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="70" y="113" width="320" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="260" y1="109" x2="260" y2="131" stroke="#fff" stroke-width="4"/>
  <circle cx="260" cy="120" r="7" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="260" y="96" text-anchor="middle" fill="#1d4ed8" font-weight="600">internal hinge</text>
  <polygon points="70,127 58,150 82,150" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="70" cy="127" r="3" fill="#334155"/>
  <line x1="50" y1="150" x2="90" y2="150" stroke="#334155" stroke-width="1.5"/>
  <line x1="56" y1="160" x2="66" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="68" y1="160" x2="78" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="160" x2="90" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="178" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="190,127 178,146 202,146" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="183" cy="152" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="197" cy="152" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="170" y1="158" x2="210" y2="158" stroke="#334155" stroke-width="1.5"/>
  <text x="190" y="178" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <polygon points="390,127 378,146 402,146" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="383" cy="152" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="397" cy="152" r="4.5" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="370" y1="158" x2="410" y2="158" stroke="#334155" stroke-width="1.5"/>
  <text x="390" y="178" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <line x1="325" y1="56" x2="325" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#stxhg-load)"/>
  <text x="325" y="48" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="20" y="212" fill="#64748b" font-size="12">Cutting at the hinge gives two bodies that share the hinge force.</text>
</svg>`;

const figSag = `<svg viewBox="0 0 460 214" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="stxsg-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="70" y1="26" x2="390" y2="26" stroke="#dc2626" stroke-width="2"/>
  <line x1="70" y1="30" x2="70" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="123" y1="30" x2="123" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="176" y1="30" x2="176" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="229" y1="30" x2="229" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="282" y1="30" x2="282" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="335" y1="30" x2="335" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <line x1="390" y1="30" x2="390" y2="52" stroke="#dc2626" stroke-width="1.8" marker-end="url(#stxsg-load)"/>
  <text x="230" y="20" text-anchor="middle" fill="#dc2626" font-weight="600">w = 200 N/m of span</text>
  <line x1="70" y1="70" x2="390" y2="70" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <path d="M 70 70 Q 230 230 390 70" fill="none" stroke="#334155" stroke-width="3"/>
  <rect x="56" y="56" width="16" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="388" y="56" width="16" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="252" y1="70" x2="252" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="246" y1="70" x2="258" y2="70" stroke="#64748b" stroke-width="1"/>
  <line x1="246" y1="150" x2="258" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="260" y="104" text-anchor="start" fill="#64748b" font-size="12">sag h = 0.6 m</text>
  <line x1="70" y1="186" x2="390" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="180" x2="70" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="390" y1="180" x2="390" y2="192" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="181" text-anchor="middle" fill="#64748b" font-size="12">span L = 30 m</text>
  <text x="20" y="208" fill="#64748b" font-size="12">Sag is exaggerated: the real curve is only 0.6 m deep over 30 m.</text>
</svg>`;

const extra: Question[] = [
  {
    id: "statics-q27",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>In the frame shown, member ABC is pinned to the wall at A and carries a 5 kN load at its free end C. Strut BD runs from the pin at B up to a second wall pin at D, 1.5 m above A. Find the force in <strong>BD</strong>, in kN.</p>`,
    figure: figFrameQ,
    answer: 12.5,
    unit: "kN",
    explanation: `<p>Spot the two-force member first. BD is pinned at both ends with nothing loading it in between, so its force acts <strong>along BD</strong>. From B(2, 0) to D(0, 1.5) the run is 2 m across and 1.5 m up, so the length is 2.5 m and the unit direction is (&minus;0.8, +0.6).</p>
<p>Now take member ABC alone and sum moments about A, which kills both unknown pin components there. Only the vertical part of the strut force has an arm about A:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: F(0.6)(2.0) &minus; 5(3.0) = 0</p>
<p class="eq">F = 15/1.2 = <strong>12.5 kN (tension)</strong></p>
<p>Positive confirms tension, which matches physical sense: the load at C rotates the beam clockwise about A, so B swings down and the strut has to hold it up.</p>
<p>Watch the amplification. A 5 kN load puts 12.5 kN in the strut, 2.5 times over, because the strut works on a 2 m arm with only its 0.6 vertical fraction while the load has the full 3 m. Steep, short braces are cheap in geometry and expensive in force. That ratio is the first thing to tell whoever is sizing the pin.</p>`,
  },
  {
    id: "statics-q28",
    type: "mc",
    difficulty: 1,
    prompt: `<p>Look at the same frame. Which member can be treated as a <strong>two-force member</strong>, and what does that tell you?</p>`,
    figure: figFrameQ,
    choices: [
      "ABC, because it is the longer of the two members",
      "BD, so its force acts along the line from B to D",
      "Both, because every pinned member is two-force",
      "Neither, since the frame carries an external load",
    ],
    answer: 1,
    explanation: `<p><strong>BD</strong> touches the world at exactly two places, the pins at B and D, with nothing in between, so its force lies along BD: one unknown scalar instead of two components. ABC sees three things, the two pins and the 5 kN load at C, so it bends. Spotting BD first makes the frame a one-equation problem instead of a six-equation one.</p>`,
  },
  {
    id: "statics-q29",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Same frame, now size the pin at A. With the strut force known, what is the <strong>magnitude</strong> of the resultant pin reaction at A, in kN?</p>`,
    figure: figFrameQ,
    answer: 10.3,
    unit: "kN",
    tolerance: 0.025,
    explanation: `<p>The strut carries 12.5 kN in tension, pulling B toward D along (&minus;0.8, +0.6):</p>
<p class="eq">F<sub>B</sub> = 12.5(&minus;0.8, +0.6) = (&minus;10.0, +7.5) kN</p>
<p>Apply force equilibrium to member ABC, which also carries (0, &minus;5) kN at C:</p>
<p class="eq">&Sigma;F<sub>x</sub>: A<sub>x</sub> &minus; 10.0 = 0 &rarr; A<sub>x</sub> = +10.0 kN</p>
<p class="eq">&Sigma;F<sub>y</sub>: A<sub>y</sub> + 7.5 &minus; 5.0 = 0 &rarr; A<sub>y</sub> = &minus;2.5 kN</p>
<p class="eq">|A| = &radic;(10.0&sup2; + 2.5&sup2;) = <strong>10.3 kN</strong></p>
<p>Two things worth saying out loud. The pin reaction is <strong>twice</strong> the applied load and almost entirely <em>horizontal</em>, even though the only external load is vertical. The strut's horizontal thrust has to go somewhere, and it goes into the pin. And A<sub>y</sub> is negative, so the pin pulls the member <em>down</em>, because the strut over-lifts B.</p>
<p>Size that pin from the 5 kN load and you under-spec it by a factor of two. A bolt group at A designed only for downward shear would be loaded the wrong way round.</p>`,
  },
  {
    id: "statics-q30",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An A-frame stand carries 4 kN at its apex pin. Each leg foot is 0.75 m from the centreline, the apex is 2.0 m above the floor, and a horizontal tie joins the two legs at mid-height. The floor is smooth. What tension does the <strong>tie</strong> carry, in kN?</p>`,
    figure: figAframe,
    answer: 1.5,
    unit: "kN",
    explanation: `<p>By symmetry each foot carries half the load: N = 2 kN vertical (the floor is smooth, so it supplies nothing horizontal).</p>
<p>Isolate one leg and sum moments about the <strong>apex pin</strong>, which eliminates the unknown pin force there. Taking the left leg with its foot 0.75 m out and 2.0 m below the apex, and the tie acting horizontally 1.0 m below the apex:</p>
<p class="eq">N(0.75) = T(1.0)</p>
<p class="eq">T = 2(0.75)/1.0 = <strong>1.5 kN</strong></p>
<p>The general form is T = N&middot;b/(h&minus;y), with b the half-base and (h&minus;y) the tie's distance below the apex. Drop the tie lower and that arm gets longer, so the tension falls. Move it to 0.5 m above the floor and the arm becomes 1.5 m, with T down to 1.0 kN. Slide it up under the apex and the tension runs away to infinity.</p>
<p>Which is why stepladder spreaders sit low, and why a tie near the top of an A-frame is the member that fails first.</p>`,
  },
  {
    id: "statics-q31",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>Same A-frame, same 4 kN apex load and 1.5 kN tie tension. What is the <strong>magnitude</strong> of the force the apex pin exerts on one leg, in kN?</p>`,
    figure: figAframe,
    answer: 2.5,
    unit: "kN",
    explanation: `<p>Isolate one leg. Three things act on it: the floor normal N = 2 kN up at the foot, the tie pulling it inward with T = 1.5 kN, and the apex pin force (B<sub>x</sub>, B<sub>y</sub>).</p>
<p class="eq">&Sigma;F<sub>x</sub>: 1.5 + B<sub>x</sub> = 0 &rarr; B<sub>x</sub> = &minus;1.5 kN</p>
<p class="eq">&Sigma;F<sub>y</sub>: 2.0 + B<sub>y</sub> = 0 &rarr; B<sub>y</sub> = &minus;2.0 kN</p>
<p class="eq">|B| = &radic;(1.5&sup2; + 2.0&sup2;) = <strong>2.5 kN</strong></p>
<p>Read the signs. The pin pushes each leg <em>outward</em> and <em>downward</em>. Downward is unsurprising, since half the 4 kN comes down each leg. Outward is the interesting half: the legs are trying to splay, and the pin and the tie together stop them.</p>
<p>Assume the apex pin only carries the 2 kN vertical share and you are 25% light, with the whole shortfall horizontal. In service that shows up as a sheared apex rivet on a stand that "only" held its rated load. The three leg forces close a 1.5-2.0-2.5 triangle, which is a 3-4-5.</p>`,
  },
  {
    id: "statics-q32",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A hand squeezes one plier handle with 80 N applied 120 mm from the pivot. The workpiece sits 25 mm from the pivot on the other side. What force does the <strong>pivot pin</strong> carry, in N?</p>`,
    figure: figPliers,
    answer: 304,
    unit: "N",
    explanation: `<p>Isolate one handle. Moments about the pivot give the jaw force first:</p>
<p class="eq">80(120) = N(25) &rarr; N = 9600/25 = 384 N</p>
<p>That is the gripping force, mechanical advantage 120/25 = 4.8. Now force equilibrium on the same handle, hand pushing down at 80 N and workpiece pushing back up at 384 N:</p>
<p class="eq">&Sigma;F<sub>y</sub>: &minus;80 + 384 + R = 0 &rarr; R = &minus;304 N</p>
<p>So the pivot carries <strong>304 N</strong>, acting downward on the handle.</p>
<p>464 N is the wrong answer that feels right, from adding input to output. They <em>subtract</em> here, because hand and workpiece sit on <strong>opposite sides</strong> of the pivot. First-class lever, so the pin sees the difference. Switch to a nutcracker layout, load and hand on the same side of the hinge, and the pin force becomes the sum.</p>
<p>Pivot force always comes in under jaw force in pliers, so the pin can be smaller than the jaw section. It is still a shear-loaded pin in a loose-fit hole, where bearing usually governs rather than shear.</p>`,
  },
  {
    id: "statics-q33",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A block and tackle with four supporting rope parts lifts a 500 kg load at constant speed; the hauling line runs down from the upper block. Ignoring sheave friction, what force does the <strong>ceiling anchor</strong> carry? Use g = 9.81 m/s&sup2;.</p>`,
    figure: figTackle,
    choices: [
      "4.91 kN &mdash; just the weight of the load",
      "1.23 kN &mdash; the same as the line tension",
      "6.13 kN &mdash; load plus haul force",
      "9.81 kN &mdash; twice the weight of the load",
    ],
    answer: 2,
    explanation: `<p>Work the whole system as one body hanging from the anchor. Its weight is W = 500(9.81) = 4905 N, and with four supporting parts the line tension is</p>
<p class="eq">T = W/4 = 4905/4 = 1226 N</p>
<p>Blocks, rope and load are all in equilibrium under the anchor force up, the weight down, and the <strong>haul force down</strong>, because the hauler pulls the rope downward:</p>
<p class="eq">F<sub>anchor</sub> = W + T = 4905 + 1226 = <strong>6.13 kN</strong></p>
<p>The anchor sees 25% <em>more</em> than the load being lifted. Mechanical advantage buys a lower hand force, and the force you took off the hand has to react somewhere.</p>
<p>Reeve it the other way, hauling <em>upward</em> off the moving block, and the anchor sees W &minus; T instead. Real sheave friction pushes it the other way, which is why rigging tables assume 1.3&times;W or worse.</p>`,
  },
  {
    id: "statics-q34",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A mooring line takes <strong>1.5 full turns</strong> around a steel bollard, with &mu; = 0.30 between rope and bollard. The ship pulls on the line with 5.0 kN. What force must the deckhand hold on the other end, in kN?</p>`,
    figure: figWrap,
    answer: 0.296,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p>Capstan equation, with the wrap angle in <strong>radians</strong>:</p>
<p class="eq">&beta; = 1.5 turns &times; 2&pi; = 9.425 rad</p>
<p class="eq">&mu;&beta; = 0.30(9.425) = 2.827 &rarr; e<sup>2.827</sup> = 16.9</p>
<p class="eq">T<sub>1</sub> = T<sub>2</sub>/e<sup>&mu;&beta;</sup> = 5.0/16.9 = <strong>0.296 kN</strong></p>
<p>296 N, about the weight of a 30 kg bag, holds a 5 kN pull. The two usual errors are putting &beta; in degrees (540), which gives an absurd exponent, and counting half a turn because the rope looks like it goes round once.</p>
<p>With &mu; = 0.30 each full turn multiplies your grip by e<sup>0.3&times;2&pi;</sup> = 6.6. One turn holds 33 kN with 5 kN; two turns 43&times;; three turns 286&times;. Nothing about the bollard's <em>radius</em> enters, so a thin post works as well as a fat one for the same wrap. The answer is turns, not size.</p>`,
  },
  {
    id: "statics-q35",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A winch drum is smooth and its motor has failed. You need a 100 N hand pull on a rope to restrain a 10 kN load, with &mu; = 0.25 between rope and drum. How many <strong>full turns</strong> of rope round the drum do you need?</p>`,
    figure: figWrap,
    choices: ["2 full turns", "3 full turns", "5 full turns", "8 full turns"],
    answer: 1,
    explanation: `<p>Required tension ratio: 10000/100 = 100. Invert the capstan equation:</p>
<p class="eq">e<sup>&mu;&beta;</sup> = 100 &rarr; &mu;&beta; = ln 100 = 4.605</p>
<p class="eq">&beta; = 4.605/0.25 = 18.42 rad</p>
<p class="eq">turns = 18.42/(2&pi;) = 2.93 &rarr; <strong>3 full turns</strong></p>
<p>Two turns gives e<sup>0.25(4&pi;)</sup> = 23.1, so a 100 N hand holds only 2.3 kN, a factor of four short. Three turns gives 111, comfortably past the 100 needed. Round <em>up</em>. The exponent is unforgiving in the wrong direction, and a wet or oily rope drops &mu; sharply.</p>
<p>Because the ratio is exponential, buying capacity with wrap is cheap and buying it with grip is not. Two turns to three multiplies capacity by 4.8. Doubling &mu; from 0.25 to 0.5 at two turns would multiply it by 23, but you cannot double the friction of rope on a steel drum by asking nicely. Wrap is the variable you actually control.</p>`,
  },
  {
    id: "statics-q36",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A band brake wraps 270&deg; around a 300 mm diameter drum with &mu; = 0.35. The actuator holds the tight side at 2.0 kN. What braking torque does the drum see, in N&middot;m?</p>`,
    figure: figWrap,
    answer: 242,
    unit: "N*m",
    tolerance: 0.03,
    explanation: `<p>Convert the wrap and get the tension ratio:</p>
<p class="eq">&beta; = 270&deg; = 4.712 rad, &nbsp; &mu;&beta; = 0.35(4.712) = 1.649</p>
<p class="eq">T<sub>2</sub>/T<sub>1</sub> = e<sup>1.649</sup> = 5.20 &rarr; T<sub>1</sub> = 2000/5.20 = 384 N</p>
<p>Only the <strong>difference</strong> in band tension produces torque, acting at the drum radius r = 0.150 m:</p>
<p class="eq">T<sub>brake</sub> = (T<sub>2</sub> &minus; T<sub>1</sub>) r = (2000 &minus; 384)(0.150) = <strong>242 N&middot;m</strong></p>
<p>Use the full 2.0 kN and you report 300 N&middot;m, which ignores the slack side pulling back and overstates the brake by 24%.</p>
<p>Design levers, most useful first: more wrap (270&deg; to 300&deg; gains 3%, but 180&deg; to 270&deg; gains 24%), then higher &mu; from the lining, then a bigger drum, since radius scales torque linearly and is the only term not stuck in an exponent. One more thing to raise. This brake is <strong>directional</strong>. Reverse the drum and the tight and slack sides swap, so capacity changes by the same ratio. Band brakes suit one-way rotation, and a self-energising band can grab violently.</p>`,
  },
  {
    id: "statics-q37",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A flat-belt drive is slipping. You can either specify a lining that raises &mu; by 50%, or add an idler that raises the wrap angle by 50%. Which does more for the transmissible torque?</p>`,
    figure: figWrap,
    choices: [
      "Raising the friction coefficient wins by a clear margin",
      "Adding wrap wins, because the angle enters directly",
      "Neither helps; belt tension alone sets the capacity",
      "Identical &mdash; only the product of the two enters the exponent",
    ],
    answer: 3,
    explanation: `<p>The tension ratio depends on &mu; and &beta; only through their <strong>product</strong>, because that product is the exponent:</p>
<p class="eq">T<sub>2</sub>/T<sub>1</sub> = e<sup>&mu;&beta;</sup></p>
<p>Multiplying either factor by 1.5 multiplies &mu;&beta; by 1.5, giving the same new ratio and, for a fixed allowable T<sub>2</sub>, the same torque. Concretely: 200 mm pulley, 165&deg; wrap, &mu; = 0.35, belt limit 900 N gives 57.2 N&middot;m. Raise &mu; to 0.525 and you get 70.2 N&middot;m. Instead raise wrap to 247.5&deg; and you get 70.2 N&middot;m. Same number.</p>
<p>The physics says tie, so the <strong>engineering</strong> decision is made on everything else. Wrap is geometry: stable, cheap, does not wear, survives oil and water. Friction coefficient is a surface property: it glazes, it drops when hot, it collapses when contaminated, and the published value already carries scatter. That is why the standard fix for a slipping belt is an idler, not a new compound.</p>
<p>One caution on wrap. An idler bends the belt the wrong way, adding a reverse-flex fatigue cycle, and it reduces wrap on the pulley it is pushed against. Check both pulleys, not just the driver.</p>`,
  },
  {
    id: "statics-q38",
    type: "mc",
    difficulty: 3,
    prompt: `<p>Four bolts in a 100 &times; 60 mm rectangular pattern resist a 5 kN in-plane load whose line of action passes 150 mm from the pattern centroid. What shear does the <strong>most heavily loaded bolt</strong> carry?</p>`,
    figure: figBolts,
    choices: [
      "1.25 kN &mdash; direct shear on each bolt",
      "3.22 kN &mdash; the torsional term alone",
      "4.34 kN &mdash; the vector sum",
      "4.47 kN &mdash; the two added as magnitudes",
    ],
    answer: 2,
    explanation: `<p>Move the load to the centroid and carry a couple with it. Direct shear splits four ways:</p>
<p class="eq">F<sub>direct</sub> = P/n = 5000/4 = 1250 N (parallel to P on every bolt)</p>
<p>Torsional moment M = Pe = 5000(150) = 750&thinsp;000 N&middot;mm. Each bolt sits at (&plusmn;50, &plusmn;30) mm from the centroid, so r = &radic;(50&sup2; + 30&sup2;) = 58.3 mm and</p>
<p class="eq">&Sigma;r&sup2; = 4(50&sup2; + 30&sup2;) = 13&thinsp;600 mm&sup2;</p>
<p class="eq">F<sub>tors</sub> = M r / &Sigma;r&sup2; = 750000(58.3)/13600 = 3216 N, &perp; to r</p>
<p>At the two bolts on the loaded side, the torsional vector is (1654, &minus;2757) N and the direct is (0, &minus;1250) N. Adding as <strong>vectors</strong>:</p>
<p class="eq">F = &radic;(1654&sup2; + 4007&sup2;) = <strong>4.34 kN</strong></p>
<p>Every distractor is a real mistake. 1.25 kN ignores the eccentricity entirely, a 3.5&times; under-design. 3.22 kN forgets the direct shear. 4.47 kN adds the two magnitudes instead of vectors, a 3% overestimate that happens to be conservative here and is not in general.</p>
<p>&Sigma;r&sup2; grows with the <em>square</em> of the bolt spread, so widening the pattern beats adding a fifth bolt near the centroid, which contributes almost nothing.</p>`,
  },
  {
    id: "statics-q39",
    type: "mc",
    difficulty: 2,
    prompt: `<p>Same bolt group and same off-centre load. Which bolts are the critical ones, and why?</p>`,
    figure: figBolts,
    choices: [
      "The pair nearest the load, where the two terms align",
      "The two bolts furthest from the load line of action",
      "The bolts diagonally opposite the applied load point",
      "All four carry the same shear, since the plate is rigid",
    ],
    answer: 0,
    explanation: `<p>Two components act on every bolt. <strong>Direct shear</strong> P/n is identical on all four and points the same way as the load. <strong>Torsional shear</strong> M r/&Sigma;r&sup2; is perpendicular to each bolt's radius from the centroid, so it points a different way at every bolt.</p>
<p>The critical bolts are where those two vectors point most nearly the same way. Here that is the pair on the same side as the load: they carry (1654, &minus;4007) N &rarr; 4.34 kN. The far pair get (1654, +1507) N &rarr; 2.24 kN, because there the torsional component partly <em>cancels</em> the direct shear. Nearly 2:1 across a symmetric bolt pattern.</p>
<p>Distance from the centroid sets only the torsional magnitude, not the resultant, and all four bolts here are equidistant, so distance alone cannot pick a winner. "All four equally" ignores the moment completely. Rather than reasoning about it, draw both vectors at each bolt to scale and look.</p>`,
  },
  {
    id: "statics-q40",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A wall shelf carries a 600 N downward load 0.25 m out from the wall. Two bolts, one above the other and 0.12 m apart, resist the overturning as a tension&ndash;compression couple. Estimate the tensile force in the <strong>upper bolt</strong>, in N.</p>`,
    figure: figShelf,
    answer: 1250,
    unit: "N",
    explanation: `<p>The load's offset from the wall creates an overturning moment:</p>
<p class="eq">M = Pe = 600(0.25) = 150 N&middot;m</p>
<p>The bracket cannot rotate, so that moment is resisted by a couple: the upper bolt pulls the bracket back against the wall while the lower edge bears in compression. With a 0.12 m lever arm between the two:</p>
<p class="eq">T = M/h = 150/0.12 = <strong>1250 N</strong></p>
<p>The upper bolt sees more than <strong>twice</strong> the applied load. Check only direct shear, 600/2 = 300 N per bolt, and the bolts look fine. The tension is four times that, and pull-out from drywall or a light anchor is exactly how these fail.</p>
<p>Two things make it worse still. <strong>Prying</strong> amplifies bolt tension if the bracket flange is flexible, often by 20&ndash;40%, and the true compression centre sits somewhere on the bearing face rather than at the lower bolt, which shortens h. The fix is more lever arm, a taller bracket or wider spacing, because T goes as 1/h.</p>`,
  },
  {
    id: "statics-q41",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 5 m ladder leans at 60&deg; to the floor against a frictionless wall. It weighs 200 N acting at its midpoint, and a 600 N person stands 4 m up from the foot. What is the minimum floor friction coefficient that prevents slip?</p>`,
    figure: figLadderQ,
    answer: 0.419,
    unit: "(dimensionless)",
    tolerance: 0.025,
    explanation: `<p>The wall is smooth, so its reaction N<sub>w</sub> is purely horizontal. Take moments about the <strong>foot</strong>, which eliminates both floor unknowns at once. The top contact is 5 sin 60&deg; = 4.330 m up; the ladder's weight acts 2.5 cos 60&deg; = 1.25 m out; the person is 4 cos 60&deg; = 2.0 m out.</p>
<p class="eq">N<sub>w</sub>(4.330) = 200(1.25) + 600(2.0) = 250 + 1200 = 1450</p>
<p class="eq">N<sub>w</sub> = 335 N</p>
<p>Horizontal equilibrium gives f = N<sub>w</sub> = 335 N; vertical gives N<sub>floor</sub> = 200 + 600 = 800 N. So</p>
<p class="eq">&mu;<sub>min</sub> = f/N = 335/800 = <strong>0.419</strong></p>
<p>0.419 is a demanding value. Rubber on dry concrete manages it. Rubber on dusty tile often does not.</p>
<p>The person's contribution to N<sub>w</sub> is proportional to how far <em>up</em> they are. Standing at 1 m instead of 4 m drops N<sub>w</sub> to 161 N and &mu;<sub>min</sub> to 0.20. So the ladder is most likely to slip when the climber is near the top, which is the opposite of most people's instinct. It is also why the ladder-angle rule exists, foot out one quarter of the height, about 75&deg;, where the same problem needs only &mu; = 0.22.</p>`,
  },
  {
    id: "statics-q42",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A 1000 N cabinet is 0.8 m wide and 1.2 m tall, standing on a floor with &mu;<sub>s</sub> = 0.50. A horizontal force is applied at the very top and slowly increased. What happens first, and at what force?</p>`,
    figure: figCabinet,
    choices: [
      "Tipping, at P = 333 N",
      "Sliding, at P = 500 N",
      "Tipping, at P = 667 N",
      "Tipping, at P = 750 N",
    ],
    answer: 0,
    explanation: `<p>Compute both thresholds and take the smaller.</p>
<p class="eq">Sliding: P = &mu;<sub>s</sub>W = 0.50(1000) = 500 N</p>
<p>Tipping begins when the normal reaction has migrated all the way to the leading bottom edge and the applied moment balances the weight moment about that edge:</p>
<p class="eq">P h = W(b/2) &rarr; P = 1000(0.4)/1.2 = <strong>333 N</strong></p>
<p>333 &lt; 500, so it <strong>tips first, at 333 N</strong>. The wrong answers are specific slips: 500 N is the sliding threshold, right number and wrong mode; 667 N drops the factor of two and uses the full width b; 750 N swaps b and h.</p>
<p>It tips before it slides whenever <strong>h &gt; b/(2&mu;)</strong>. Here b/(2&mu;) = 0.8 m and the push is at 1.2 m. W cancels entirely, so loading the cabinet with heavy files changes nothing.</p>
<p>What helps: push lower, since halving h doubles the tipping force and costs nothing; widen the base; lower the centre of gravity. And decide which failure you would rather have. A cabinet that skids is a nuisance, one that topples is an injury, so on a tall unit you sometimes <em>want</em> the slippier floor.</p>`,
  },
  {
    id: "statics-q43",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A 400 N crate is 0.5 m wide with &mu;<sub>s</sub> = 0.35 on the floor. A worker pushes horizontally at height h. Above what h does the crate tip instead of slide?</p>`,
    figure: figCrateH,
    choices: ["0.357 m", "0.714 m", "1.00 m", "1.43 m"],
    answer: 1,
    explanation: `<p>Set the two thresholds equal and solve for the crossover height:</p>
<p class="eq">P<sub>slide</sub> = &mu;W&nbsp;&nbsp;&nbsp;P<sub>tip</sub> = W b / 2h</p>
<p class="eq">&mu;W = W b/(2h) &rarr; h = b/(2&mu;) = 0.5/(2 &times; 0.35) = <strong>0.714 m</strong></p>
<p>Push below 0.714 m and the crate slides (P = 0.35 &times; 400 = 140 N). Push above it and the crate tips before the force ever reaches 140 N.</p>
<p>Notice what dropped out. The weight cancels completely, so the crossover is pure geometry against friction. A heavier crate needs more force for both modes, in the same ratio.</p>
<p>The distractors are arithmetic slips: 1.43 m uses the full width b instead of b/2, 0.357 m divides by 2 once too often, and 1.00 m is the "sounds about right" guess. Warehouse training reaches the same answer without the algebra: push low, at hip height or below, and a crate that would topple will slide instead.</p>`,
  },
  {
    id: "statics-q44",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A cabinet 1.8 m tall and 0.7 m wide sits unrestrained on a truck ramp with &mu;<sub>s</sub> = 0.55. As the ramp is raised, at what angle does it <strong>tip</strong>?</p>`,
    figure: figIncline,
    choices: ["28.8&deg;", "68.7&deg;", "21.3&deg;", "38.9&deg;"],
    answer: 2,
    explanation: `<p>On an incline, tipping impends when the weight vector through the centre of gravity falls outside the downhill bottom edge. For a uniform block that happens when</p>
<p class="eq">tan &theta; = b/h = 0.7/1.8 = 0.3889 &rarr; &theta; = <strong>21.3&deg;</strong></p>
<p>Check the other mode: sliding impends at tan &theta; = &mu; = 0.55, i.e. 28.8&deg;. 21.3&deg; comes first, so the cabinet <strong>tips before it slides</strong>. On a grippy ramp a tall cabinet goes over rather than skidding down.</p>
<p>The distractors are the three standard slips. 28.8&deg; is the sliding angle, the mode that does not happen. 68.7&deg; inverts the ratio to h/b. And 38.9&deg; reads tan &theta; = 0.389 as if it were already an angle in degrees, which is a genuinely common calculator error.</p>
<p>On an incline the two modes are just <strong>tan &theta; = b/h</strong> against <strong>tan &theta; = &mu;</strong>, so it tips first whenever b/h &lt; &mu;. Grippy ramp and tall load, it topples. Which is why appliance dollies have straps.</p>`,
  },
  {
    id: "statics-q45",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A crate rests on a ramp inclined at 30&deg;. What is the <strong>minimum coefficient of static friction</strong> that keeps it from sliding? Give three significant figures.</p>`,
    figure: figIncline,
    answer: 0.577,
    unit: "(dimensionless)",
    tolerance: 0.02,
    explanation: `<p>&mu;<sub>s</sub> = tan &theta;, and everything else is detail. Driving component W sin &theta;, normal force N = W cos &theta;, friction fully mobilised at impending slip:</p>
<p class="eq">W sin &theta; = &mu;<sub>s</sub> W cos &theta; &rarr; &mu;<sub>s</sub> = tan &theta; = tan 30&deg; = <strong>0.577</strong></p>
<p>The weight cancels, so a heavier crate does not slide sooner. Neither does contact area, in the Coulomb model.</p>
<p>Said the other way round, 30&deg; is the <strong>angle of repose</strong> for &mu;<sub>s</sub> = 0.577, which is why conveyor incline limits are quoted as angles rather than forces. What does change the answer is any force not proportional to W: a rope tension, vibration that momentarily unloads the contact, a lubricant film.</p>`,
  },
  {
    id: "statics-q46",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 200 N block sits on a horizontal surface with &mu;<sub>s</sub> = 0.40. Someone pushes horizontally with 50 N and the block does not move. What is the friction force, in N?</p>`,
    answer: 50,
    unit: "N",
    explanation: `<p>50 N. Static friction is a <strong>limit</strong>, not a formula:</p>
<p class="eq">f<sub>max</sub> = &mu;<sub>s</sub>N = 0.40(200) = 80 N</p>
<p>The push is only 50 N, so equilibrium demands 50 N and gets it. Answering 80 N would leave 30 N of net force on a block that is not moving.</p>`,
  },
  {
    id: "statics-q47",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A crate rides on a flatbed truck. The truck accelerates gently forward and the crate does not slip. In which direction does static friction act <em>on the crate</em>?</p>`,
    choices: [
      "Backward, because friction always opposes vehicle motion.",
      "Forward, because friction is the only horizontal force available to accelerate the crate.",
      "Zero, because static friction only acts after sliding begins.",
      "Downward, because friction is proportional to normal force.",
    ],
    answer: 1,
    explanation: `<p>Ask what would happen without friction. The bed slides forward underneath the crate, so the crate's motion <em>relative to the bed</em> is backward, and static friction opposes that. It is also the only horizontal force available, so it has to be what accelerates the crate along with the truck.</p>
<p>"Friction opposes motion" is the phrase that causes the error. Friction opposes <em>relative sliding at the contact</em>, not the vehicle's motion through the world.</p>
<p>Magnitude follows the same discipline: f = ma, whatever that happens to be, up to the limit &mu;<sub>s</sub>N. Which makes the acceleration you can get away with before the load shifts a<sub>max</sub> = &mu;<sub>s</sub>g, about 4 m/s&sup2; for &mu; = 0.4, and independent of the crate's mass.</p>`,
  },
  {
    id: "statics-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A 20 kg block sits on a 50 kg block that rests on the floor. Friction is &mu; = 0.30 between the blocks and &mu; = 0.25 between the lower block and the floor. A horizontal force is applied to the <strong>upper</strong> block and slowly increased. What happens first?</p>`,
    figure: figStack,
    choices: [
      "58.9 N, and both blocks slide together",
      "172 N, and the top block slips first",
      "172 N, and both blocks slide together",
      "58.9 N, and the top block slips first",
    ],
    answer: 3,
    explanation: `<p>Two competing limits. Slip of the upper block on the lower one is capped by the friction available at that interface, where the normal force is only the upper block's own weight:</p>
<p class="eq">f<sub>1,max</sub> = 0.30(20)(9.81) = <strong>58.9 N</strong></p>
<p>For the pair to move together across the floor, the floor friction must be overcome, and there the normal force is the full 70 kg:</p>
<p class="eq">f<sub>2,max</sub> = 0.25(70)(9.81) = 172 N</p>
<p>The upper interface gives up at 58.9 N, long before the 172 N needed to shift the stack, so <strong>the top block slides off and the bottom one never moves</strong>.</p>
<p>Comparing the coefficients is what catches people: 0.30 &gt; 0.25 makes the top interface look grippier. It is not, because those coefficients act on very different normal forces, 20 kg against 70 kg. Compare &mu;N, never &mu;.</p>
<p>Flip the problem and the answer flips. Push the <em>lower</em> block and the floor limit is reached first at 172 N, at which point the stack starts to move together and the question becomes whether the top block's required friction (m a = 20a) stays under 58.9 N. It does, so they move as one.</p>`,
  },
  {
    id: "statics-q49",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A steel wedge with a 12&deg; taper is tapped under a machine foot to level it. Friction acts on the tapered face with &mu;<sub>s</sub> = 0.30; the top face runs on a low-friction shim. Will the wedge stay put once the hammer is put down?</p>`,
    choices: [
      "Yes &mdash; 12&deg; is below the friction angle",
      "No &mdash; any wedge slides out unless held",
      "No &mdash; self-locking needs more than 45&deg;",
      "Yes &mdash; wedge locking is friction-independent",
    ],
    answer: 0,
    explanation: `<p>Compute the friction angle and compare it with the taper:</p>
<p class="eq">&phi; = tan<sup>&minus;1</sup>&mu;<sub>s</sub> = tan<sup>&minus;1</sup>(0.30) = 16.7&deg;</p>
<p>With friction on one face, the wedge is self-locking while its taper is <strong>less than &phi;</strong>. Here 12&deg; &lt; 16.7&deg;, so it holds, on a thin margin of 4.7&deg;.</p>
<p>This is the incline problem wearing a different hat. A block stays on a slope while tan &theta; &le; &mu;, and a wedge stays put for the same reason, with the contact face playing the role of the slope. The 45&deg; answer is folklore with no statics behind it, and "friction-independent" contradicts the only mechanism holding it up.</p>
<p>On a real machine foot the caveats matter, because this is a <em>static</em> result. Vibration momentarily unloads the contact and lets the wedge creep out, which is why levelling wedges under rotating equipment get a jam nut or a tack weld. Oil ingress drops &mu; toward 0.1 (&phi; = 5.7&deg;) and the wedge is not self-locking at all. And &mu; = 0.30 for dry steel on steel already carries &plusmn;30% scatter, so 12&deg; against a nominal 16.7&deg; is not a margin you would design to.</p>`,
  },
  {
    id: "statics-q50",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A packing wedge with a 22&deg; included angle is driven between a beam and its support. Unlike the levelling wedge, this one has friction on <strong>both</strong> faces, &mu;<sub>s</sub> = 0.25 on each. Does it hold when the driving force is removed?</p>`,
    choices: [
      "No &mdash; 22&deg; already exceeds the 14&deg; friction angle",
      "No &mdash; two faces double the tendency to slip",
      "Yes &mdash; 22&deg; is under twice the friction angle",
      "Yes &mdash; any wedge under 45&deg; is self-locking",
    ],
    answer: 2,
    explanation: `<p>The friction angle here is &phi; = tan<sup>&minus;1</sup>(0.25) = 14.04&deg;. With friction on <strong>two</strong> faces, the wedge must overcome friction at both to escape, and the self-locking criterion becomes</p>
<p class="eq">&alpha; &le; 2&phi; = 28.1&deg;</p>
<p>Since 22&deg; &lt; 28.1&deg;, it holds. Answer (0) applies the one-face criterion and reaches the wrong conclusion, which is the interesting mistake, because the one-face rule is what most people memorise.</p>
<p>Why two faces double the allowance: as the wedge tries to back out both surfaces slide, and each contributes a friction force whose resisting effect adds to the geometry term. Force triangles at both contacts give the force needed to <em>extract</em> the wedge as proportional to tan(&alpha; &minus; 2&phi;), which turns negative, meaning you have to pull it out, exactly when &alpha; &lt; 2&phi;.</p>
<p>Whether one face or two are active is a modelling decision you have to justify out loud. Put a roller or a greased shim on one face and you have halved your self-locking allowance without changing a single dimension. That is a real failure mode on shimmed machine mounts.</p>`,
  },
  {
    id: "statics-q51",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A square-thread screw jack has a 36 mm mean thread diameter, a single start, and 6 mm pitch, with &mu; = 0.12 at the threads. A load is raised and the handle released. Does the jack back-drive?</p>`,
    choices: [
      "Yes &mdash; a 6 mm lead is far too coarse to hold it",
      "Yes, unless the load is under about 1 kN",
      "No, because square threads never back-drive",
      "No &mdash; lead angle below friction angle",
    ],
    answer: 3,
    explanation: `<p>Unwrap one turn of the thread into an inclined plane. The lead angle is</p>
<p class="eq">tan &lambda; = L/(&pi;d<sub>m</sub>) = 6/(&pi; &times; 36) = 0.0531 &rarr; &lambda; = 3.04&deg;</p>
<p>The friction angle is &phi; = tan<sup>&minus;1</sup>(0.12) = 6.84&deg;. For a square thread the jack is self-locking while &lambda; &lt; &phi;, i.e. while tan &lambda; &lt; &mu;. Here 0.053 &lt; 0.12 with better than 2&times; margin, so it <strong>holds</strong>.</p>
<p>The wedge and the incline again: a thread is a ramp wrapped round a cylinder, decided by the same tan &theta; &le; &mu; test. The load never entered the calculation, because self-locking is pure geometry against friction, so "unless the load is under 1 kN" is backwards reasoning.</p>
<p>Two extensions worth having ready. An <strong>Acme</strong> thread has its flank inclined at 14.5&deg;, which effectively raises the friction to &mu;/cos 14.5&deg; and makes it lock slightly more readily. A <strong>ball screw</strong> has &mu; near 0.003, so &phi; &asymp; 0.17&deg; and essentially no practical lead angle is self-locking. That is exactly why ball-screw axes carry a fail-safe brake and Acme jacks do not.</p>`,
  },
  {
    id: "statics-q52",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A force <strong>F</strong> = (0, &minus;200, 0) N is applied at position <strong>r</strong> = (0.30, 0, 0.20) m from a mounting bolt. What is the magnitude of the moment about the bolt, in N&middot;m?</p>`,
    answer: 72.1,
    unit: "N*m",
    tolerance: 0.025,
    explanation: `<p>Use the cross product <strong>M</strong> = <strong>r</strong> &times; <strong>F</strong>. With r = (0.30, 0, 0.20) m and F = (0, &minus;200, 0) N:</p>
<p class="eq">M<sub>x</sub> = r<sub>y</sub>F<sub>z</sub> &minus; r<sub>z</sub>F<sub>y</sub> = 0 &minus; (0.20)(&minus;200) = 40 N&middot;m</p>
<p class="eq">M<sub>y</sub> = r<sub>z</sub>F<sub>x</sub> &minus; r<sub>x</sub>F<sub>z</sub> = 0</p>
<p class="eq">M<sub>z</sub> = r<sub>x</sub>F<sub>y</sub> &minus; r<sub>y</sub>F<sub>x</sub> = (0.30)(&minus;200) &minus; 0 = &minus;60 N&middot;m</p>
<p class="eq">|M| = &radic;(40&sup2; + 60&sup2;) = <strong>72.1 N&middot;m</strong></p>
<p>Both offsets matter, and they load the bolt in <em>different ways</em>, which is why you keep the components rather than the magnitude. The 60 N&middot;m about z bends the joint about one axis; the 40 N&middot;m about x bends it about the other. If the bolt pattern is a line, one of those it can resist and the other it cannot.</p>
<p>Using only the 0.30 m arm and reporting 60 N&middot;m misses 17% of the resultant. In 3D take the cross product every time. Eyeballing perpendicular distances stops working the moment the force leaves the plane.</p>`,
  },
  {
    id: "statics-q53",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>A 150 N force acts on a plate at the point (x, y) = (0.40, 0.25) m from bolt O, directed 40&deg; above the +x axis. What is the <strong>signed</strong> moment about O, in N&middot;m, counterclockwise positive?</p>`,
    answer: 9.84,
    unit: "N*m",
    tolerance: 0.025,
    explanation: `<p>Resolve the force, then use the coordinate form of the moment:</p>
<p class="eq">F<sub>x</sub> = 150 cos 40&deg; = 114.9 N, &nbsp; F<sub>y</sub> = 150 sin 40&deg; = 96.4 N</p>
<p class="eq">M<sub>O</sub> = x F<sub>y</sub> &minus; y F<sub>x</sub> = (0.40)(96.4) &minus; (0.25)(114.9)</p>
<p class="eq">M<sub>O</sub> = 38.57 &minus; 28.73 = <strong>+9.84 N&middot;m (counterclockwise)</strong></p>
<p>The two terms very nearly cancel, and that is the real content of the question. The force's line of action passes close to the bolt: the perpendicular distance is only |M|/F = 9.84/150 = 0.066 m, even though the application point sits 0.47 m away. Multiply 150 N by that 0.47 m slant distance and you get 70 N&middot;m, seven times too big.</p>
<p>Two habits this rewards. Use M = xF<sub>y</sub> &minus; yF<sub>x</sub> rather than hunting for a perpendicular distance, because it cannot pick the wrong arm and it hands you the sign. And when two terms nearly cancel, keep an extra digit through the subtraction. Rounding to 38.6 &minus; 28.7 gives 9.9, a 0.6% error introduced purely by rounding early.</p>`,
  },
  {
    id: "statics-q54",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A bracket is welded to a wall. It carries a 500 N downward force applied 0.80 m out from the weld, and a 300 N force pointing <em>left</em> (toward the wall) applied 0.40 m above the weld. What reaction moment must the weld supply, in N&middot;m?</p>`,
    answer: 280,
    unit: "N*m",
    explanation: `<p>Put the origin at the weld, counterclockwise positive, and use M = xF<sub>y</sub> &minus; yF<sub>x</sub> for each load.</p>
<p>Downward 500 N at (0.80, 0), so F = (0, &minus;500):</p>
<p class="eq">M<sub>1</sub> = (0.80)(&minus;500) &minus; 0 = &minus;400 N&middot;m</p>
<p>Leftward 300 N at (0, 0.40), so F = (&minus;300, 0):</p>
<p class="eq">M<sub>2</sub> = 0 &minus; (0.40)(&minus;300) = +120 N&middot;m</p>
<p>The applied loads total &minus;280 N&middot;m, so the weld must supply <strong>+280 N&middot;m</strong> to close equilibrium.</p>
<p>Everything turns on the horizontal force. It is easy to dismiss as "just axial into the wall", but it acts 0.40 m <em>above</em> the weld, so it has a real moment arm, and it happens to act in the <strong>relieving</strong> direction, cutting the weld moment by 30%. Ignore it and you size the weld for 400 N&middot;m.</p>
<p>Would you take the credit? Usually not. If that 300 N is a service load that can disappear while the 500 N stays, the design case is 400 N&middot;m. Load-relieving effects only count when the loads are guaranteed to arrive together.</p>`,
  },
  {
    id: "statics-q55",
    type: "mc",
    difficulty: 1,
    prompt: `<p>At a truss joint, exactly two members meet, they are not collinear, and there is no applied load and no support at that joint. What can you conclude for this load case?</p>`,
    choices: [
      "Only the steeper of the two carries force",
      "The two carry equal and opposite force",
      "One is zero and the other takes the reaction",
      "Both members are zero-force here",
    ],
    answer: 3,
    explanation: `<p>Set up axes along one member. Its own force has no component perpendicular to itself, so the perpendicular equilibrium equation contains only the <em>other</em> member's force, which must therefore be zero. Repeat along the other member and the first one is zero too. <strong>Both are zero-force.</strong></p>
<p>"Equal and opposite" is the answer that feels right and is wrong. That needs the two members to be <em>collinear</em>, so the forces can cancel along a common line. Non-collinear is the whole hypothesis.</p>
<p>Applied iteratively it pays: knock out both and a neighbouring four-member joint now has two or three, often exposing the next one. They still matter, though, bracing compression chords and picking up load under wind or an unsymmetric live load.</p>`,
  },
  {
    id: "statics-q56",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A long beam has an ideal internal hinge between its two spans. You cut the structure at that hinge to solve it. Which statement is correct?</p>`,
    figure: figHinge,
    choices: [
      "It transmits bending moment but no shear force.",
      "It transmits nothing, so the spans are independent.",
      "Moment is zero there, but shear and axial force still transfer across.",
      "It makes all reactions solvable without equilibrium.",
    ],
    answer: 2,
    explanation: `<p>An ideal hinge releases rotation, so it cannot carry bending moment. That is what "hinge" means. It still connects the two spans structurally, so it transmits horizontal and vertical <strong>force</strong> components between them. Cut there and those appear as equal-and-opposite unknowns on the two free bodies.</p>
<p>The bookkeeping is what makes the hinge useful. Each cut adds two unknowns (H<sub>x</sub>, H<sub>y</sub>) but also gives you a third equilibrium equation for the second body, plus the condition M = 0 at the hinge. Net effect: <strong>one extra equation</strong>, which is why a hinge converts a beam that is indeterminate to the first degree into a determinate one.</p>
<p>Answer (1) is the tempting mistake and it breaks the solution outright. Assume no force transfers and the loaded span has nothing to push against, so force equilibrium fails.</p>
<p>Expansion joints and Gerber cantilever-suspended bridge spans are deliberately hinged so that thermal growth and support settlement do not generate stress. The price is a moment diagram pinned to zero at that point, so the peak moment moves and you cannot reuse the continuous-beam answer.</p>`,
  },
  {
    id: "statics-q57",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>Two people carry a 2.4 m plank between them, one at each end. A 90 kg motor sits 0.7 m from the left end, and the plank itself weighs 150 N acting at midspan. What upward force does the <strong>right-hand</strong> person supply, in N? Use g = 9.81 m/s&sup2;.</p>`,
    answer: 333,
    unit: "N",
    tolerance: 0.025,
    explanation: `<p>Motor weight: W<sub>m</sub> = 90(9.81) = 883 N. Take moments about the <strong>left</strong> hand so that reaction drops out:</p>
<p class="eq">R<sub>R</sub>(2.4) &minus; 883(0.7) &minus; 150(1.2) = 0</p>
<p class="eq">R<sub>R</sub> = (618 + 180)/2.4 = 798/2.4 = <strong>333 N</strong></p>
<p>The left-hand person takes the rest: 883 + 150 &minus; 333 = 700 N, more than twice as much. The load is nowhere near shared, because the motor sits at 29% of the span.</p>
<p>A second route, worth having under time pressure: the motor alone splits 1.7/2.4 left and 0.7/2.4 right, giving the right end 883(0.7/2.4) = 258 N, and the plank splits evenly at 75 N each. 258 + 75 = 333 N.</p>
<p>Moving the motor just 0.5 m toward centre shifts about 184 N from one person to the other. Small position changes make large load changes, which is why "shuffle it toward me" works.</p>`,
  },
  {
    id: "statics-q58",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A 1.5 m wide gate is held shut by a latch at its free edge. Wind produces a uniform pressure whose resultant is 900 N at the gate's centre. What horizontal latch force balances the moment about the hinge line, in N?</p>`,
    answer: 450,
    unit: "N",
    explanation: `<p class="eq">F<sub>latch</sub>(1.5) = 900(0.75)</p>
<p class="eq">F<sub>latch</sub> = 675/1.5 = <strong>450 N</strong></p>
<p>Moments about the hinge: the wind resultant sits at the gate's centroid with a 0.75 m arm, the latch at the free edge with 1.5 m. Twice the arm, half the load.</p>`,
  },
  {
    id: "statics-q59",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A teammate replaces a full-span uniform load with a single resultant at midspan, then uses that point load to size a simply supported beam for bending. By what factor does the predicted maximum bending moment change?</p>`,
    choices: [
      "It is unchanged",
      "It doubles",
      "It halves",
      "It quadruples",
    ],
    answer: 1,
    explanation: `<p>For a full-span uniform load, M<sub>max</sub> = wL&sup2;/8 at midspan. For the equivalent point load wL placed at midspan, M<sub>max</sub> = (wL)L/4 = wL&sup2;/4. The ratio is <strong>2</strong>, so the point-load model predicts twice the real moment.</p>
<p>The substitution is not wrong, it is being used outside its validity. Replacing a distributed load with its resultant preserves the net force and the net moment <em>about any external point</em>, so it gives the correct <strong>support reactions</strong> every time. What it does not preserve is how the load enters along the span, which is precisely what internal shear and moment depend on.</p>
<p>Resultants for external equilibrium, actual distribution for anything internal. Deflection is even more sensitive: 5wL&#8308;/384EI against PL&sup3;/48EI gives a ratio of 1.6. The error is conservative here, so nothing falls down, but a beam sized for double the real moment is roughly 40% heavier than it needs to be on every unit shipped.</p>`,
  },
  {
    id: "statics-q60",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An FEA model of a bracket uses a support you intended to be a pin, but the reaction report shows a large moment reaction there. What should you check first?</p>`,
    choices: [
      "The rotational DOF at that node is also constrained",
      "The mesh is too coarse around the bolt hole to converge",
      "Material nonlinearity has introduced a reaction moment",
      "The reactions are reported in a rotated local frame",
    ],
    answer: 0,
    explanation: `<p>An ideal pin restrains translation and releases rotation, so by definition it cannot report a reaction moment. A nonzero one means the boundary condition is <strong>not the pin you think it is</strong>, and the rotational degrees of freedom at that node or node set are constrained.</p>
<p>The usual culprits, in the order I would check them: an all-DOF (encastre) constraint applied instead of a pinned one; a rigid RBE2-type spider tying the hole to a reference node whose rotations are then fixed, which clamps the hole against ovalising; a node set on the whole bore rather than a single reference point; a bonded contact on a washer face that behaves as a clamp.</p>
<p>The distractors are all real modelling concerns and all wrong here. Mesh density changes stress accuracy but cannot create a reaction the constraint equations do not permit. Material nonlinearity redistributes stress without adding a restrained DOF. A rotated output frame changes the <em>components</em> of a reaction, never its existence.</p>
<p>Behind all of it: a bolted joint is neither a perfect pin nor a perfect clamp. Usually the right move is to bracket the answer, run it pinned and run it fixed, and see whether the design decision changes. If it does, model the joint stiffness properly rather than picking a favourite.</p>`,
  },
  {
    id: "statics-q61",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A catenary support wire spans 30 m with a sag of only 0.6 m at midspan and carries 200 N/m of load along the span. What is the horizontal tension in the wire, in kN?</p>`,
    figure: figSag,
    answer: 37.5,
    unit: "kN",
    tolerance: 0.025,
    explanation: `<p>For a shallow cable under a load uniform in the horizontal direction, the shape is parabolic and the horizontal component of tension is constant along the wire. Take half the span as a free body and sum moments about the support:</p>
<p class="eq">H = wL&sup2;/(8h) = 200(30&sup2;)/(8 &times; 0.6)</p>
<p class="eq">H = 180&thinsp;000/4.8 = 37&thinsp;500 N = <strong>37.5 kN</strong></p>
<p>The total load on the wire is only 200 &times; 30 = 6 kN, yet the wire carries <strong>six times that</strong> in tension. Same mechanism as the shallow sling: a nearly straight cable has almost no vertical component available, so the tension has to grow until the small angle multiplies out.</p>
<p>Maximum tension is at the supports, T = &radic;(H&sup2; + V&sup2;) with V = wL/2 = 3 kN, giving 37.6 kN. Barely above H, which confirms the wire is almost horizontal everywhere.</p>
<p>H scales as 1/h, so <em>halving</em> the sag doubles the tension and the anchor load. Pulling a span "nice and tight" during installation is how anchors get torn out, and how conductors go past their tensile limit on a cold night when thermal contraction removes the sag you had.</p>`,
  },
  {
    id: "statics-q62",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A flat belt runs on a 200 mm diameter pulley with 165&deg; of wrap and &mu; = 0.35. The belt is rated for a maximum tension of 900 N. What is the largest torque the pulley can transmit without slipping?</p>`,
    figure: figWrap,
    choices: [
      "57.2 N&middot;m",
      "90.0 N&middot;m",
      "123 N&middot;m",
      "32.9 N&middot;m",
    ],
    answer: 0,
    explanation: `<p>Wrap in radians: &beta; = 165&deg; = 2.880 rad, so &mu;&beta; = 1.008 and the limiting tension ratio is e<sup>1.008</sup> = 2.740. With the tight side at its 900 N rating,</p>
<p class="eq">T<sub>1</sub> = 900/2.740 = 328 N</p>
<p>Torque comes from the <strong>difference</strong> in the two tensions acting at the pulley radius r = 0.100 m:</p>
<p class="eq">T<sub>q</sub> = (T<sub>2</sub> &minus; T<sub>1</sub>) r = (900 &minus; 328)(0.100) = <strong>57.2 N&middot;m</strong></p>
<p>Each distractor is a specific slip. 90.0 N&middot;m uses the full 900 N and forgets that the slack side pulls back. 123 N&middot;m adds the two tensions instead of subtracting. 32.9 N&middot;m uses the slack side alone.</p>
<p>If 57.2 N&middot;m is not enough, a bigger pulley scales torque linearly and is the only lever not trapped inside an exponent. More wrap via an idler raises the ratio. Raising belt tension helps only up to the rating and loads the shaft bearings with T<sub>2</sub> + T<sub>1</sub> = 1228 N of side pull, which is usually what really limits a belt drive.</p>`,
  },
  {
    id: "statics-q63",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A hand winch has a 60 mm radius drum and a crank handle 300 mm long. Ignoring friction, what force at the handle balances a 400 N pull in the rope, in N?</p>`,
    answer: 80,
    unit: "N",
    explanation: `<p class="eq">F(0.300) = 400(0.060)</p>
<p class="eq">F = 24/0.300 = <strong>80 N</strong></p>
<p>Drum and handle turn together about one shaft, so a single moment sum about the shaft axis does it. Mechanical advantage is the ratio of radii, 300/60 = 5, and the handle travels five times as far as the rope, so work in equals work out.</p>
<p>A real winch is nowhere near frictionless: bearing and gear losses of 20&ndash;30% are normal, so budget 100&ndash;110 N at the handle. And the shaft bearing carries the vector sum of the two forces, not the difference.</p>`,
  },
  {
    id: "statics-q64",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A rope passes over a fixed post with a half-turn of contact (180&deg;) and &mu; = 0.30. What is the ratio of the tight-side tension to the slack-side tension at impending slip?</p>`,
    answer: 2.57,
    unit: "(ratio)",
    tolerance: 0.025,
    explanation: `<p class="eq">T<sub>2</sub>/T<sub>1</sub> = e<sup>&mu;&beta;</sup> = e<sup>0.30&pi;</sup> = e<sup>0.9425</sup> = <strong>2.57</strong></p>
<p>A half turn is &pi; radians, not 180. Put 180 into the exponent and you get a number with 23 digits. Worth carrying the rest: a full turn gives 6.6, two turns 43, three turns 286.</p>`,
  },
];

export default extra;
