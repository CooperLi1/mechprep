import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Structural Loading & Load Paths
// SVG element ids are prefixed sl1-…sl14- for global uniqueness.
// ---------------------------------------------------------------------------

// --- Lesson figure 1: load path through a bracket to its bolts -------------
const figLoadPath = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl1-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sl1-path" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Load path: tip load &#8594; arm &#8594; flange couple &#8594; bolts &#8594; wall</text>
  <line x1="64" y1="42" x2="64" y2="234" stroke="#334155" stroke-width="2.5"/>
  <line x1="54" y1="54" x2="64" y2="44" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="76" x2="64" y2="66" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="98" x2="64" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="120" x2="64" y2="110" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="142" x2="64" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="164" x2="64" y2="154" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="186" x2="64" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="208" x2="64" y2="198" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="230" x2="64" y2="220" stroke="#64748b" stroke-width="1"/>
  <rect x="64" y="62" width="14" height="150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="78" y="130" width="250" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="71" cy="84" r="6.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="71" cy="190" r="6.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="300" y1="66" x2="300" y2="124" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl1-load)"/>
  <text x="300" y="58" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <line x1="292" y1="138" x2="118" y2="138" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#sl1-path)"/>
  <line x1="106" y1="132" x2="86" y2="102" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#sl1-path)"/>
  <line x1="106" y1="146" x2="86" y2="174" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#sl1-path)"/>
  <text x="204" y="120" text-anchor="middle" fill="#1d4ed8" font-size="12">arm: bending + shear</text>
  <text x="114" y="88" fill="#1d4ed8" font-size="12">bolt A: tension</text>
  <text x="114" y="202" fill="#1d4ed8" font-size="12">bolt B / flange toe: bearing</text>
  <text x="64" y="252" text-anchor="middle" fill="#64748b" font-size="12">wall (ground)</text>
  <line x1="78" y1="232" x2="300" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="226" x2="78" y2="238" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="226" x2="300" y2="238" stroke="#64748b" stroke-width="1"/>
  <text x="189" y="227" text-anchor="middle" fill="#64748b" font-size="12">offset e</text>
  <line x1="42" y1="84" x2="42" y2="190" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="84" x2="48" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="190" x2="48" y2="190" stroke="#64748b" stroke-width="1"/>
  <text x="32" y="137" text-anchor="middle" fill="#64748b" font-size="12" transform="rotate(-90 32 137)">spacing h</text>
</svg>`;

// --- Lesson figure 2: combined loading and the critical point --------------
const figCombined = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl2-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sl2-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="52" y1="56" x2="52" y2="172" stroke="#334155" stroke-width="2.5"/>
  <line x1="42" y1="68" x2="52" y2="58" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="88" x2="52" y2="78" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="108" x2="52" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="128" x2="52" y2="118" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="148" x2="52" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="42" y1="168" x2="52" y2="158" stroke="#64748b" stroke-width="1"/>
  <rect x="52" y="96" width="196" height="36" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="248" cy="114" rx="8" ry="18" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="228" y1="44" x2="228" y2="92" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl2-load)"/>
  <text x="228" y="36" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <path d="M 152 91 A 11 27 0 1 1 146 137" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl2-load)"/>
  <text x="170" y="88" fill="#dc2626" font-weight="600">T</text>
  <line x1="262" y1="114" x2="318" y2="114" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl2-load)"/>
  <text x="326" y="118" fill="#dc2626" font-weight="600">P</text>
  <line x1="52" y1="180" x2="228" y2="180" stroke="#64748b" stroke-width="1"/>
  <line x1="52" y1="174" x2="52" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="228" y1="174" x2="228" y2="186" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="175" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <circle cx="110" cy="240" r="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="58" y1="240" x2="162" y2="240" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="110" cy="240" r="2.5" fill="#334155"/>
  <circle cx="110" cy="198" r="5" fill="#1d4ed8"/>
  <text x="122" y="196" fill="#1d4ed8" font-weight="600">point A</text>
  <text x="110" y="296" text-anchor="middle" fill="#64748b" font-size="12">section at the wall</text>
  <text x="54" y="236" text-anchor="end" fill="#64748b" font-size="12">N.A.</text>
  <rect x="250" y="210" width="60" height="60" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="246" y1="240" x2="222" y2="240" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <line x1="314" y1="240" x2="338" y2="240" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <line x1="260" y1="218" x2="300" y2="218" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <line x1="300" y1="260" x2="300" y2="222" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <line x1="300" y1="262" x2="260" y2="262" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <line x1="260" y1="220" x2="260" y2="258" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl2-blue)"/>
  <text x="216" y="244" text-anchor="end" fill="#1d4ed8" font-weight="600">&#963;</text>
  <text x="346" y="244" fill="#1d4ed8" font-weight="600">&#963;</text>
  <text x="280" y="204" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#964;</text>
  <text x="280" y="290" text-anchor="middle" fill="#64748b" font-size="12">&#963; = P/A + Mc/I, &#964; = Tr/J</text>
</svg>`;

// --- Lesson figure 3: eccentric load, P/A + Mc/I superposition -------------
const figEccentric = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl3-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="46" y="88" width="64" height="132" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="78" y1="60" x2="78" y2="234" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="97" y1="42" x2="97" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl3-load)"/>
  <text x="90" y="34" text-anchor="middle" fill="#dc2626" font-weight="600">P = 90 kN</text>
  <line x1="78" y1="72" x2="97" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="66" x2="78" y2="78" stroke="#64748b" stroke-width="1"/>
  <line x1="97" y1="66" x2="97" y2="78" stroke="#64748b" stroke-width="1"/>
  <text x="87" y="62" text-anchor="middle" fill="#64748b" font-size="12">e</text>
  <line x1="36" y1="220" x2="120" y2="220" stroke="#334155" stroke-width="2"/>
  <line x1="40" y1="230" x2="50" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="56" y1="230" x2="66" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="72" y1="230" x2="82" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="230" x2="98" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="104" y1="230" x2="114" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="46" y1="260" x2="110" y2="260" stroke="#64748b" stroke-width="1"/>
  <line x1="46" y1="254" x2="46" y2="266" stroke="#64748b" stroke-width="1"/>
  <line x1="110" y1="254" x2="110" y2="266" stroke="#64748b" stroke-width="1"/>
  <text x="78" y="255" text-anchor="middle" fill="#64748b" font-size="12">h = 150 mm</text>
  <text x="78" y="282" text-anchor="middle" fill="#64748b" font-size="12">60 mm thick</text>
  <text x="302" y="60" text-anchor="middle" fill="#334155" font-size="12">P/A = &#8722;10.0 MPa (uniform)</text>
  <line x1="215" y1="72" x2="390" y2="72" stroke="#334155" stroke-width="1.5"/>
  <rect x="215" y="72" width="175" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="286" y="116" text-anchor="middle" fill="#334155" font-size="12">&#177;Mc/I = &#177;12.0 MPa</text>
  <line x1="215" y1="152" x2="390" y2="152" stroke="#334155" stroke-width="1.5"/>
  <polygon points="215,152 215,171 302,152" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <polygon points="302,152 390,133 390,152" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="286" y="204" text-anchor="middle" fill="#334155" font-size="12">sum: &#963; = P/A + Mc/I</text>
  <line x1="215" y1="232" x2="390" y2="232" stroke="#334155" stroke-width="1.5"/>
  <polygon points="215,232 215,267 375,232" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <polygon points="375,232 390,229 390,232" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <circle cx="375" cy="232" r="3.5" fill="#334155"/>
  <line x1="375" y1="236" x2="375" y2="270" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="360" y="284" text-anchor="middle" fill="#334155" font-size="12">neutral axis</text>
  <text x="211" y="284" text-anchor="end" fill="#1d4ed8" font-size="12">&#8722;22.0 MPa</text>
  <text x="396" y="222" fill="#dc2626" font-size="12">+2.0 MPa</text>
</svg>`;

// --- Lesson figure 4: free vs restrained bar under a temperature rise ------
const figThermal = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl4-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sl4-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="70" y1="40" x2="70" y2="98" stroke="#334155" stroke-width="2.5"/>
  <line x1="60" y1="52" x2="70" y2="42" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="70" x2="70" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="88" x2="70" y2="78" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="54" width="240" height="28" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="310" y="54" width="28" height="28" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="344" y1="68" x2="372" y2="68" stroke="#dc2626" stroke-width="2.2" marker-end="url(#sl4-red)"/>
  <text x="190" y="73" text-anchor="middle" fill="#dc2626" font-size="12">heated &#916;T, right end free</text>
  <text x="380" y="72" fill="#dc2626" font-size="12">&#948; = &#945;&#916;TL</text>
  <text x="190" y="108" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">grows freely: &#963; = 0</text>
  <line x1="70" y1="140" x2="70" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="60" y1="152" x2="70" y2="142" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="170" x2="70" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="188" x2="70" y2="178" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="140" x2="370" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="370" y1="152" x2="380" y2="142" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="170" x2="380" y2="160" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="188" x2="380" y2="178" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="156" width="300" height="28" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <line x1="76" y1="170" x2="108" y2="170" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl4-blue)"/>
  <line x1="364" y1="170" x2="332" y2="170" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl4-blue)"/>
  <text x="92" y="150" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  <text x="348" y="150" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  <text x="220" y="174" text-anchor="middle" fill="#dc2626" font-size="12">same bar, same &#916;T, both ends held</text>
  <line x1="70" y1="208" x2="370" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="202" x2="70" y2="214" stroke="#64748b" stroke-width="1"/>
  <line x1="370" y1="202" x2="370" y2="214" stroke="#64748b" stroke-width="1"/>
  <text x="220" y="203" text-anchor="middle" fill="#64748b" font-size="12">L</text>
  <text x="220" y="236" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">restrained: &#963; = &#8722;E&#945;&#916;T (independent of L and A)</text>
</svg>`;

// --- Lesson figure 5: drop impact and dynamic amplification ----------------
const figImpact = `<svg viewBox="0 0 460 286" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl5-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Drop impact: the load arrives carrying kinetic energy</text>
  <rect x="155" y="52" width="60" height="44" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="185" y="79" text-anchor="middle" fill="#dc2626" font-weight="600">m</text>
  <line x1="185" y1="102" x2="185" y2="150" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#sl5-red)"/>
  <rect x="105" y="166" width="160" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 130 180 l 11 8 l -22 8 l 22 8 l -22 8 l 11 8" fill="none" stroke="#334155" stroke-width="1.8"/>
  <path d="M 240 180 l 11 8 l -22 8 l 22 8 l -22 8 l 11 8" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="70" y1="220" x2="330" y2="220" stroke="#334155" stroke-width="2"/>
  <line x1="76" y1="230" x2="86" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="104" y1="230" x2="114" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="132" y1="230" x2="142" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="160" y1="230" x2="170" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="188" y1="230" x2="198" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="216" y1="230" x2="226" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="244" y1="230" x2="254" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="272" y1="230" x2="282" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="230" x2="310" y2="220" stroke="#64748b" stroke-width="1"/>
  <text x="284" y="202" fill="#334155" font-size="12">stiffness k</text>
  <line x1="330" y1="96" x2="330" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="324" y1="96" x2="336" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="324" y1="166" x2="336" y2="166" stroke="#64748b" stroke-width="1"/>
  <text x="342" y="135" fill="#64748b" font-size="12">h</text>
  <line x1="86" y1="190" x2="300" y2="190" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="60" y="194" fill="#1d4ed8" font-size="12">&#948;<tspan baseline-shift="sub" font-size="9">st</tspan></text>
  <text x="230" y="256" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">n = 1 + &#8730;(1 + 2h/&#948;<tspan baseline-shift="sub" font-size="9">st</tspan>)&#160;&#160;and&#160;&#160;F<tspan baseline-shift="sub" font-size="9">peak</tspan> = nW</text>
  <text x="230" y="276" text-anchor="middle" fill="#64748b" font-size="12">h = 0 (load released suddenly) still gives n = 2</text>
</svg>`;

// --- Lesson figure 6: thin-wall pressure vessel ----------------------------
const figVessel = `<svg viewBox="0 0 460 316" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl6-red" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="sl6-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Thin wall: hoop stress is twice longitudinal stress</text>
  <rect x="105" y="56" width="230" height="104" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="335" cy="108" rx="18" ry="52" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 105 56 A 18 52 0 0 0 105 160" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="112" y1="66" x2="328" y2="66" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="225" y="46" text-anchor="middle" fill="#dc2626" font-size="12">longitudinal seam weld &#8212; carries &#963;<tspan baseline-shift="sub" font-size="9">h</tspan></text>
  <line x1="250" y1="56" x2="250" y2="160" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="256" y="180" text-anchor="middle" fill="#dc2626" font-size="12">girth weld &#8212; carries &#963;<tspan baseline-shift="sub" font-size="9">L</tspan></text>
  <line x1="160" y1="108" x2="160" y2="76" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl6-red)"/>
  <line x1="160" y1="108" x2="160" y2="142" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl6-red)"/>
  <line x1="196" y1="108" x2="196" y2="76" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl6-red)"/>
  <line x1="196" y1="108" x2="196" y2="142" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl6-red)"/>
  <text x="178" y="102" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">p</text>
  <line x1="80" y1="56" x2="80" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="56" x2="86" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="108" x2="86" y2="108" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="86" text-anchor="end" fill="#64748b" font-size="12">r</text>
  <rect x="90" y="222" width="60" height="60" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="120" y1="218" x2="120" y2="198" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl6-blue)"/>
  <line x1="120" y1="286" x2="120" y2="306" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl6-blue)"/>
  <line x1="86" y1="252" x2="66" y2="252" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl6-blue)"/>
  <line x1="154" y1="252" x2="174" y2="252" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl6-blue)"/>
  <text x="120" y="192" text-anchor="middle" fill="#1d4ed8" font-size="12">&#963;<tspan baseline-shift="sub" font-size="9">h</tspan></text>
  <text x="60" y="240" text-anchor="end" fill="#1d4ed8" font-size="12">&#963;<tspan baseline-shift="sub" font-size="9">L</tspan></text>
  <text x="220" y="238" fill="#1d4ed8" font-size="12" font-weight="600">&#963;<tspan baseline-shift="sub" font-size="9">h</tspan> = pr/t</text>
  <text x="220" y="264" fill="#1d4ed8" font-size="12" font-weight="600">&#963;<tspan baseline-shift="sub" font-size="9">L</tspan> = pr/2t</text>
  <text x="220" y="292" fill="#64748b" font-size="12">valid while t &#60; r/10</text>
</svg>`;

// --- Question figure: wall bracket, 2 kN at 200 mm, bolts 150 mm apart -----
const figQBracket = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl7-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="70" y1="38" x2="70" y2="236" stroke="#334155" stroke-width="2.5"/>
  <line x1="58" y1="52" x2="68" y2="40" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="74" x2="68" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="96" x2="68" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="118" x2="68" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="140" x2="68" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="162" x2="68" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="184" x2="68" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="206" x2="68" y2="194" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="228" x2="68" y2="216" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="55" width="14" height="165" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="84" y="127" width="196" height="18" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="77" cy="68" r="6.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <circle cx="77" cy="203" r="6.5" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="95" y="66" fill="#334155" font-size="12">bolt A (upper)</text>
  <text x="95" y="207" fill="#334155" font-size="12">bolt B (lower)</text>
  <line x1="264" y1="62" x2="264" y2="123" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl7-load)"/>
  <text x="264" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">2 kN</text>
  <text x="250" y="170" text-anchor="middle" fill="#64748b" font-size="12">arm: 40 mm deep &#215; 8 mm thick</text>
  <line x1="84" y1="234" x2="264" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="84" y1="228" x2="84" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="264" y1="228" x2="264" y2="240" stroke="#64748b" stroke-width="1"/>
  <text x="174" y="229" text-anchor="middle" fill="#64748b" font-size="12">200 mm</text>
  <line x1="42" y1="68" x2="42" y2="203" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="68" x2="48" y2="68" stroke="#64748b" stroke-width="1"/>
  <line x1="36" y1="203" x2="48" y2="203" stroke="#64748b" stroke-width="1"/>
  <text x="32" y="136" text-anchor="middle" fill="#64748b" font-size="12" transform="rotate(-90 32 136)">150 mm</text>
  <text x="70" y="254" text-anchor="middle" fill="#64748b" font-size="12">wall</text>
</svg>`;

// --- Question figure: pressure vessel weld orientation ---------------------
const figQVessel = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl8-red" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <rect x="105" y="60" width="230" height="110" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="335" cy="115" rx="18" ry="55" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 105 60 A 18 55 0 0 0 105 170" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="112" y1="70" x2="328" y2="70" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="220" y="46" text-anchor="middle" fill="#dc2626" font-size="12">weld 1: longitudinal seam</text>
  <line x1="255" y1="60" x2="255" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="264" y="190" text-anchor="middle" fill="#dc2626" font-size="12">weld 2: circumferential girth</text>
  <line x1="160" y1="115" x2="160" y2="82" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl8-red)"/>
  <line x1="160" y1="115" x2="160" y2="148" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl8-red)"/>
  <line x1="196" y1="115" x2="196" y2="82" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl8-red)"/>
  <line x1="196" y1="115" x2="196" y2="148" stroke="#dc2626" stroke-width="1.8" marker-end="url(#sl8-red)"/>
  <text x="178" y="112" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">p</text>
  <line x1="80" y1="60" x2="80" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="60" x2="86" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="74" y1="170" x2="86" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="68" y="119" text-anchor="end" fill="#64748b" font-size="12">D = 1 m</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">wall t = 6 mm, closed ends, internal p = 2 MPa</text>
</svg>`;

// --- Question figure: aluminium bar between rigid walls --------------------
const figQThermalBar = `<svg viewBox="0 0 460 214" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl9-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="70" y1="52" x2="70" y2="140" stroke="#334155" stroke-width="2.5"/>
  <line x1="58" y1="66" x2="70" y2="54" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="88" x2="70" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="110" x2="70" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="132" x2="70" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="52" x2="380" y2="140" stroke="#334155" stroke-width="2.5"/>
  <line x1="380" y1="66" x2="392" y2="54" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="88" x2="392" y2="76" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="110" x2="392" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="132" x2="392" y2="120" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="76" width="310" height="34" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="225" y="98" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">aluminium, &#916;T = +80 &#176;C</text>
  <line x1="76" y1="93" x2="108" y2="93" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl9-blue)"/>
  <line x1="374" y1="93" x2="342" y2="93" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#sl9-blue)"/>
  <text x="92" y="68" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  <text x="358" y="68" text-anchor="middle" fill="#1d4ed8" font-weight="600">R</text>
  <line x1="70" y1="152" x2="380" y2="152" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="146" x2="70" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="146" x2="380" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="225" y="147" text-anchor="middle" fill="#64748b" font-size="12">L = 300 mm</text>
  <text x="225" y="180" text-anchor="middle" fill="#64748b" font-size="12">E = 69 GPa, &#945; = 23 &#215; 10<tspan baseline-shift="super" font-size="9">&#8722;6</tspan> per &#176;C</text>
  <text x="225" y="200" text-anchor="middle" fill="#64748b" font-size="12">both walls rigid and immovable</text>
</svg>`;

// --- Question figure: shaft with torque + transverse load ------------------
const figQShaft = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl10-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="70" y1="56" x2="70" y2="176" stroke="#334155" stroke-width="2.5"/>
  <line x1="58" y1="70" x2="70" y2="58" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="92" x2="70" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="114" x2="70" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="136" x2="70" y2="124" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="158" x2="70" y2="146" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="100" width="250" height="32" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="320" cy="116" rx="7" ry="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="310" y1="46" x2="310" y2="96" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl10-load)"/>
  <text x="310" y="38" text-anchor="middle" fill="#dc2626" font-weight="600">2 kN</text>
  <path d="M 180 95 A 10 24 0 1 1 174 139" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl10-load)"/>
  <text x="196" y="90" fill="#dc2626" font-weight="600">T = 500 N&#183;m</text>
  <circle cx="77" cy="100" r="4.5" fill="#1d4ed8"/>
  <text x="88" y="88" fill="#1d4ed8" font-size="12">critical point</text>
  <line x1="70" y1="186" x2="310" y2="186" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="180" x2="70" y2="192" stroke="#64748b" stroke-width="1"/>
  <line x1="310" y1="180" x2="310" y2="192" stroke="#64748b" stroke-width="1"/>
  <text x="190" y="181" text-anchor="middle" fill="#64748b" font-size="12">300 mm</text>
  <line x1="348" y1="100" x2="348" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="342" y1="100" x2="354" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="342" y1="132" x2="354" y2="132" stroke="#64748b" stroke-width="1"/>
  <text x="360" y="120" fill="#64748b" font-size="12">d = 40 mm</text>
  <text x="200" y="216" text-anchor="middle" fill="#64748b" font-size="12">solid round shaft, built in at the bearing housing</text>
</svg>`;

// --- Question figure: eccentric compression on a rectangular section -------
const figQEcc = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">Cross-section &#8212; the load acts into the page</text>
  <rect x="120" y="118" width="180" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="210" y1="104" x2="210" y2="222" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="106" y1="163" x2="314" y2="163" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="264" cy="163" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="258" y1="157" x2="270" y2="169" stroke="#dc2626" stroke-width="2"/>
  <line x1="270" y1="157" x2="258" y2="169" stroke="#dc2626" stroke-width="2"/>
  <text x="292" y="144" fill="#dc2626" font-weight="600">P = 60 kN</text>
  <line x1="210" y1="96" x2="264" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="210" y1="90" x2="210" y2="102" stroke="#64748b" stroke-width="1"/>
  <line x1="264" y1="90" x2="264" y2="102" stroke="#64748b" stroke-width="1"/>
  <text x="237" y="86" text-anchor="middle" fill="#64748b" font-size="12">e = 30 mm</text>
  <line x1="120" y1="230" x2="300" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="224" x2="120" y2="236" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="224" x2="300" y2="236" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="225" text-anchor="middle" fill="#64748b" font-size="12">h = 100 mm</text>
  <line x1="92" y1="118" x2="92" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="118" x2="98" y2="118" stroke="#64748b" stroke-width="1"/>
  <line x1="86" y1="208" x2="98" y2="208" stroke="#64748b" stroke-width="1"/>
  <text x="80" y="167" text-anchor="end" fill="#64748b" font-size="12">50 mm</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">bending occurs about the vertical centroidal axis</text>
</svg>`;

// --- Question figure: 10 kg dropped 50 mm onto a spring platform -----------
const figQDrop = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl12-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="150" y="40" width="70" height="46" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="185" y="69" text-anchor="middle" fill="#dc2626" font-weight="600">10 kg</text>
  <line x1="185" y1="92" x2="185" y2="140" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="6 4" marker-end="url(#sl12-red)"/>
  <rect x="105" y="154" width="160" height="14" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 130 168 l 11 8 l -22 8 l 22 8 l -22 8 l 11 8" fill="none" stroke="#334155" stroke-width="1.8"/>
  <path d="M 240 168 l 11 8 l -22 8 l 22 8 l -22 8 l 11 8" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="70" y1="208" x2="330" y2="208" stroke="#334155" stroke-width="2"/>
  <line x1="76" y1="218" x2="86" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="218" x2="116" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="136" y1="218" x2="146" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="166" y1="218" x2="176" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="196" y1="218" x2="206" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="226" y1="218" x2="236" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="256" y1="218" x2="266" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="286" y1="218" x2="296" y2="208" stroke="#64748b" stroke-width="1"/>
  <line x1="316" y1="218" x2="326" y2="208" stroke="#64748b" stroke-width="1"/>
  <text x="284" y="194" fill="#334155" font-size="12">k = 20 kN/m</text>
  <line x1="340" y1="86" x2="340" y2="154" stroke="#64748b" stroke-width="1"/>
  <line x1="334" y1="86" x2="346" y2="86" stroke="#64748b" stroke-width="1"/>
  <line x1="334" y1="154" x2="346" y2="154" stroke="#64748b" stroke-width="1"/>
  <text x="352" y="124" fill="#64748b" font-size="12">h = 50 mm</text>
  <text x="200" y="242" text-anchor="middle" fill="#64748b" font-size="12">released from rest, platform initially unloaded</text>
</svg>`;

// --- Question figure: offset crank arm, bending plus torsion ---------------
const figQCrank = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Plan view &#8212; the 1.5 kN load acts into the page</text>
  <line x1="70" y1="60" x2="70" y2="180" stroke="#334155" stroke-width="2.5"/>
  <line x1="58" y1="74" x2="70" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="96" x2="70" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="118" x2="70" y2="106" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="140" x2="70" y2="128" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="162" x2="70" y2="150" stroke="#64748b" stroke-width="1"/>
  <rect x="70" y="96" width="200" height="18" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="252" y="105" width="18" height="70" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="261" cy="175" r="10" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="254" y1="168" x2="268" y2="182" stroke="#dc2626" stroke-width="2"/>
  <line x1="268" y1="168" x2="254" y2="182" stroke="#dc2626" stroke-width="2"/>
  <text x="261" y="204" text-anchor="middle" fill="#dc2626" font-weight="600">F = 1.5 kN</text>
  <line x1="70" y1="74" x2="261" y2="74" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="68" x2="70" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="261" y1="68" x2="261" y2="80" stroke="#64748b" stroke-width="1"/>
  <text x="165" y="69" text-anchor="middle" fill="#64748b" font-size="12">250 mm</text>
  <line x1="310" y1="105" x2="310" y2="175" stroke="#64748b" stroke-width="1"/>
  <line x1="304" y1="105" x2="316" y2="105" stroke="#64748b" stroke-width="1"/>
  <line x1="304" y1="175" x2="316" y2="175" stroke="#64748b" stroke-width="1"/>
  <text x="322" y="144" fill="#64748b" font-size="12">120 mm</text>
  <circle cx="77" cy="96" r="4.5" fill="#1d4ed8"/>
  <text x="88" y="140" fill="#1d4ed8" font-size="12">critical section at the wall</text>
  <text x="230" y="232" text-anchor="middle" fill="#64748b" font-size="12">both arms solid round bar, d = 30 mm</text>
</svg>`;

// --- Question figure: tube plus flange joint, springs in series ------------
const figQTube = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sl14-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="sl14-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="66" y1="46" x2="66" y2="170" stroke="#334155" stroke-width="2.5"/>
  <line x1="54" y1="60" x2="66" y2="48" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="84" x2="66" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="108" x2="66" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="132" x2="66" y2="120" stroke="#64748b" stroke-width="1"/>
  <line x1="54" y1="156" x2="66" y2="144" stroke="#64748b" stroke-width="1"/>
  <rect x="66" y="62" width="14" height="94" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="73" cy="76" r="5" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <circle cx="73" cy="142" r="5" fill="#fff" stroke="#334155" stroke-width="1.8"/>
  <text x="90" y="58" fill="#64748b" font-size="12">bolted flange joint</text>
  <rect x="80" y="98" width="230" height="22" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <path d="M 80 109 Q 200 112 310 146" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="292" y1="50" x2="292" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sl14-red)"/>
  <text x="292" y="42" text-anchor="middle" fill="#dc2626" font-weight="600">tip load</text>
  <line x1="310" y1="146" x2="358" y2="146" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="352" y1="109" x2="352" y2="142" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#sl14-blue)"/>
  <line x1="346" y1="109" x2="358" y2="109" stroke="#1d4ed8" stroke-width="1"/>
  <text x="362" y="130" fill="#1d4ed8" font-size="12">&#948; = 5.00 mm</text>
  <text x="230" y="192" text-anchor="middle" fill="#334155" font-size="12">the joint and the tube act as two springs in series</text>
  <text x="230" y="212" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">&#948;<tspan baseline-shift="sub" font-size="9">tip</tspan> = &#948;<tspan baseline-shift="sub" font-size="9">joint</tspan> + &#948;<tspan baseline-shift="sub" font-size="9">tube</tspan></text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Structural Loading & Load Paths",
    intro: `<p>Statics gives you reactions. Beam bending gives you one stress. In between sits the question that decides whether a real part survives: <strong>how does the load actually travel from where it is applied to where it is reacted, and what does every element along the way have to carry?</strong> That chain is the <em>load path</em>, and finding its weakest link is most of structural design.</p>
<p>This lesson covers tracing load paths, the load types you must enumerate before sizing anything, combined axial plus bending plus torsion at a critical point, eccentric and offset loads, thermal and constraint loads, impact and dynamic amplification, thin-wall pressure vessels, and how factors of safety and load combinations are actually applied.</p>`,
    sections: [
      {
        heading: "Tracing the load path",
        html: `<p>Every applied force ends up in the ground. Your job is to name each element it passes through and the mode that element carries it in. For a shelf bracket: hand load &rarr; shelf plate in bending &rarr; bracket arm in bending and shear &rarr; flange in a tension/compression couple &rarr; upper bolt in tension, lower flange toe in bearing &rarr; wall anchor &rarr; building.</p>
<figure class="fig">${figLoadPath}<figcaption>A load path is a chain of elements in series. Every link carries the same load, so the weakest link sets the capacity.</figcaption></figure>
<p>Three rules do most of the work:</p>
<ul>
<li><strong>Series links all carry the same load</strong>, but each in a different mode: a bolt in shear, a weld throat in tension, a lug in bearing, a plate in net-section tension. A 10 kN path is limited by whichever of those checks fails first, not by the biggest part.</li>
<li><strong>Parallel paths share load by stiffness</strong>, not by strength: F<sub>i</sub> = F &middot; k<sub>i</sub>/&Sigma;k. The stiff path takes almost all the load and fails first, which is why putting a rigid steel pin in parallel with a rubber mount does not really share anything.</li>
<li><strong>Material off the path does nothing.</strong> A doubler welded next to a hole, a rib on a face where stress is already near zero, a thicker wall away from the critical section, all of it adds mass and no capacity. Ask "does this material lie between the load and the reaction?" before adding it.</li>
</ul>
<div class="callout"><strong>Interview habit:</strong> when handed a part, say the path out loud element by element and name the failure check for each one. That single move separates candidates who have built hardware from candidates who have only solved textbook problems.</div>`,
      },
      {
        heading: "The load types you have to enumerate",
        html: `<p>Before any stress calculation, list what actually acts on the part. Missing a load type is far more expensive than a 10% error in a stress you did compute.</p>
<table>
<thead><tr><th>Load type</th><th>What it is</th><th>What it drives</th></tr></thead>
<tbody>
<tr><td>Static</td><td>Steady applied force or pressure</td><td>Yield, buckling, ultimate strength</td></tr>
<tr><td>Sustained</td><td>Static load held for a long time</td><td>Creep, stress relaxation, preload loss</td></tr>
<tr><td>Cyclic</td><td>Repeated fluctuation, often small</td><td>Fatigue, which governs most in-service failures</td></tr>
<tr><td>Impact / shock</td><td>Energy arriving fast (drop, snatch, crash)</td><td>Peak force several times static; brittle fracture</td></tr>
<tr><td>Vibratory</td><td>Steady excitation near a natural frequency</td><td>Resonant amplification, fastener loosening</td></tr>
<tr><td>Thermal</td><td>Restrained expansion or a gradient</td><td>Stress scaling with E&alpha;&Delta;T, not with the load</td></tr>
<tr><td>Preload</td><td>Assembly tension in bolts, shrink fits</td><td>Mean stress, joint separation, fretting</td></tr>
<tr><td>Pressure</td><td>Internal or external fluid pressure</td><td>Hoop and longitudinal membrane stress</td></tr>
<tr><td>Inertial (g-load)</td><td>Mass &times; acceleration in transport or manoeuvre</td><td>Mount and fastener loads, CG offset moments</td></tr>
<tr><td>Settlement</td><td>Imposed displacement from a moving support</td><td>Large forces in stiff, over-constrained structures</td></tr>
</tbody>
</table>
<p>Two of these behave differently from the rest and catch people out. <strong>Thermal and settlement loads are displacement-driven</strong>: the structure is told how far to move, not how hard to push. Their magnitude therefore rises with stiffness. Making a part beefier improves a force-driven problem and makes a displacement-driven one <em>worse</em>.</p>`,
      },
      {
        heading: "Combined loading: finding the critical point",
        html: `<p>Real parts rarely see one load. A shaft, a crank, or a bracket typically carries axial force, bending, and torsion at the same time. The procedure is always the same four steps.</p>
<ol>
<li><strong>Reduce the loads to the critical section</strong>, usually the built-in end or the smallest section. Get P (axial), M (bending), V (transverse shear), and T (torque) there.</li>
<li><strong>Pick the critical point on the cross-section.</strong> Bending normal stress peaks at the fibre farthest from the neutral axis; torsional shear peaks everywhere on the outer surface. On a round shaft the critical point is therefore on the surface at the top or bottom fibre. Transverse shear from V peaks at the neutral axis where bending is zero, and for a slender member it is usually small, so check it and then expect the surface point to win.</li>
<li><strong>Superpose stresses of the same kind.</strong> Normal stresses add algebraically: &sigma; = P/A &plusmn; Mc/I. Shear stresses add as shear: &tau; = Tr/J (plus VQ/It if it matters).</li>
<li><strong>Combine &sigma; and &tau; through a failure criterion</strong>, never by adding them. For this stress state von Mises gives &sigma;&prime; = &radic;(&sigma;&sup2; + 3&tau;&sup2;).</li>
</ol>
<figure class="fig">${figCombined}<figcaption>A shaft under axial load, bending, and torsion. At point A the element carries a normal stress and a shear stress. Note that the shear appears on all four faces: complementary shear on the vertical faces is what stops the element spinning, and forgetting it is what makes hand-drawn stress elements wrong. Von Mises turns the &sigma;, &tau; pair into a single number to compare with yield.</figcaption></figure>
<p><strong>Worked example.</strong> A solid round bar, d = 50 mm, built in at a wall, carries P = 20 kN tension, M = 800 N&middot;m bending, and T = 600 N&middot;m torque at the wall.</p>
<p class="eq">A = &pi;d&sup2;/4 = 1.963 &times; 10<sup>&minus;3</sup> m&sup2;&nbsp;&nbsp;&nbsp;S = &pi;d&sup3;/32 = 1.227 &times; 10<sup>&minus;5</sup> m&sup3;</p>
<p class="eq">&sigma; = P/A + M/S = 10.2 + 65.2 = 75.4 MPa</p>
<p class="eq">&tau; = T/(2S) = 600/(2.454 &times; 10<sup>&minus;5</sup>) = 24.4 MPa</p>
<p class="eq">&sigma;&prime; = &radic;(75.4&sup2; + 3 &times; 24.4&sup2;) = 86.5 MPa</p>
<div class="callout warn">Adding &sigma; + &tau; = 99.8 MPa is the classic slip. Normal and shear stress are different components of the stress state; they never add arithmetically. The second slip is putting the critical point at the neutral axis because that is where shear is highest, which is true for transverse shear and wrong when torsion dominates.</div>`,
      },
      {
        heading: "Eccentric and offset loads",
        html: `<p>An axial load applied off the centroid is <em>not</em> an axial load. Move it to the centroid and you must add a moment M = P&middot;e. The stress on the section is then a superposition:</p>
<p class="eq">&sigma; = P/A &plusmn; Mc/I = (P/A)(1 &plusmn; ec/r&sup2;),&nbsp;&nbsp;&nbsp;r&sup2; = I/A</p>
<figure class="fig">${figEccentric}<figcaption>A 90 kN compressive load 30 mm off the centroid of a 60 &times; 150 mm section: uniform &minus;10.0 MPa plus &plusmn;12.0 MPa bending gives &minus;22.0 MPa on the near face and +2.0 MPa tension on the far face. e = 30 mm is just outside the kern of h/6 = 25 mm, so the tension is small but real.</figcaption></figure>
<ul>
<li><strong>The kern.</strong> For a rectangle of depth h the stress stays one sign only while e &le; h/6. Beyond that the section develops tension, which is why unreinforced masonry and bolted baseplates are checked against the middle-third rule. For a solid circle of diameter d the kern radius is d/8.</li>
<li><strong>The neutral axis moves.</strong> Setting &sigma; = 0 gives y<sub>NA</sub> = r&sup2;/e, measured from the centroid on the side away from the load. Large e pulls the neutral axis into the section; small e pushes it outside and the whole section stays in compression.</li>
<li><strong>Prying.</strong> A bracket bolted with the load outboard of the bolt line does not just see T = P&middot;e/h. The flange bends and bears on its outer toe, and that toe reaction is an extra lever that <em>amplifies</em> bolt tension, typically 20 to 50% above the simple couple. Cure it with a thicker flange, a gusset, or bolts placed closer to the load.</li>
</ul>
<p>Eccentricity is also why a "tension" member with a single-shear lap joint bends: the two load lines are offset by one plate thickness, so a secondary moment appears whether you asked for it or not.</p>`,
      },
      {
        heading: "Thermal and constraint loads",
        html: `<p>Heat a bar and it wants to grow by &delta; = &alpha;&Delta;TL. Let it, and there is no stress at all. Stop it, and the stress is whatever it takes to squeeze that growth back out:</p>
<p class="eq">&sigma; = &minus;E&alpha;&Delta;T&nbsp;&nbsp;&nbsp;(fully restrained)</p>
<figure class="fig">${figThermal}<figcaption>Thermal stress lives in the boundary condition, not in the part. Same bar, same &Delta;T: zero stress when free, E&alpha;&Delta;T when held.</figcaption></figure>
<p>Notice what is <em>missing</em> from that formula: length and area. A 10 mm bar and a 10 m bar of the same alloy, both fully restrained, see identical stress. That is the single most useful fact about thermal loading and a very common interview probe.</p>
<ul>
<li><strong>Partial restraint.</strong> If the supports allow a movement &Delta;<sub>gap</sub>, only the leftover growth is restrained: &sigma; = E(&alpha;&Delta;T &minus; &Delta;<sub>gap</sub>/L). Aluminium (E = 69 GPa, &alpha; = 23 &times; 10<sup>&minus;6</sup>/&deg;C) heated 80 &deg;C over 300 mm wants 0.552 mm; a 0.1 mm gap removes only 18% of the stress. Small clearances buy far less relief than people expect.</li>
<li><strong>Mismatch.</strong> Bolt an aluminium spacer with a steel bolt and heat the joint: the aluminium grows more, so bolt tension rises by &Delta;F = (&alpha;<sub>Al</sub> &minus; &alpha;<sub>st</sub>)&Delta;T&middot;L &middot; k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>). Cool the same joint and preload is lost, which is how outdoor and cryogenic joints go slack.</li>
<li><strong>Gradients need no external restraint.</strong> Quench a thick plate and the cold surface is restrained by the hot interior: &sigma; &asymp; E&alpha;&Delta;T/(1 &minus; &nu;), easily hundreds of MPa. The part constrains itself.</li>
<li><strong>Settlement is the same physics.</strong> An imposed support movement in a stiff, over-constrained frame produces force &asymp; k&middot;&delta;. Three-point mounts exist precisely so that an uneven floor produces tilt instead of stress.</li>
</ul>`,
      },
      {
        heading: "Impact and dynamic amplification",
        html: `<p>A load that arrives with kinetic energy does more damage than the same load placed gently. Equate the work done by the falling weight to the strain energy stored at maximum deflection and you get the <strong>impact factor</strong>:</p>
<p class="eq">n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>),&nbsp;&nbsp;&nbsp;F<sub>peak</sub> = nW,&nbsp;&nbsp;&nbsp;&delta;<sub>max</sub> = n&delta;<sub>st</sub></p>
<figure class="fig">${figImpact}<figcaption>Drop impact. &delta;<sub>st</sub> is the deflection the weight would cause if applied slowly; h is the free-fall height before contact.</figcaption></figure>
<ul>
<li><strong>h = 0 gives n = 2.</strong> A load released suddenly onto an undeflected structure, with no drop at all, still doubles the force. Interviewers like this one because it is not intuitive.</li>
<li><strong>For h much larger than &delta;<sub>st</sub></strong>, n &asymp; &radic;(2h/&delta;<sub>st</sub>) and F<sub>peak</sub> &asymp; &radic;(2kmgh). Peak force rises with &radic;k, so <em>softening</em> the structure reduces the force. That is the whole logic of crush cans, rubber mounts, and dynamic climbing rope.</li>
<li><strong>Design factors.</strong> Crane and hoist codes apply dynamic factors of roughly 1.1 to 1.6 to the static load, not because the steel is uncertain but because the rope snatches when the sling goes taut. Aircraft and vehicle work uses g-factors the same way.</li>
</ul>
<div class="callout warn">Impact analysis this simple assumes the strike is elastic, the struck body has negligible mass, and nothing yields. Real crash and drop events absorb energy plastically, so the elastic answer is a conservative upper bound on force, useful for a first cut and not for certification.</div>`,
      },
      {
        heading: "Thin-wall pressure vessels",
        html: `<p>When t &lt; r/10 the wall stress is essentially uniform through the thickness (membrane stress), and equilibrium of half a cylinder gives:</p>
<p class="eq">&sigma;<sub>hoop</sub> = pr/t&nbsp;&nbsp;&nbsp;&nbsp;&sigma;<sub>long</sub> = pr/2t&nbsp;&nbsp;&nbsp;&nbsp;(sphere: pr/2t both ways)</p>
<figure class="fig">${figVessel}<figcaption>Hoop stress is twice longitudinal stress. The longitudinal seam weld carries the hoop stress and is therefore the critical joint.</figcaption></figure>
<p>The <strong>2:1 ratio</strong> is the whole exam question. Consequences to have ready:</p>
<ul>
<li>A cylinder <strong>splits along a longitudinal line</strong>, because the hoop stress that pulls the two halves apart is the larger one. Any longitudinal seam weld therefore governs; the circumferential girth weld sees only half as much. Even with a lower joint efficiency the girth weld usually still is not critical.</li>
<li>Spherical heads and spherical vessels see only pr/2t, so for the same pressure a sphere needs half the wall, which is why pressure vessel ends are domed rather than flat.</li>
<li>Use the <strong>radius</strong>, not the diameter. Slipping d for r doubles the answer and is the single most common error on this formula.</li>
<li>Add other loads on top: piping weight, wind, and axial thrust all superpose with the longitudinal membrane stress, and the wall is then in biaxial tension, a state where von Mises is <em>lower</em> than the largest principal stress.</li>
</ul>`,
      },
      {
        heading: "Design loads, load cases and load combinations",
        html: `<p>Everything above assumed somebody had already told you the load. Usually nobody has. Defining the load, its magnitude, its direction, how often it arrives and what else is acting at the same instant, is the part of the job that decides whether the stress you compute means anything. What you then <em>do</em> with the resulting stress state (which yield criterion, which strength, which life curve) is a separate decision covered under failure theories; this section stops at handing that decision a defensible set of loads.</p>
<ul>
<li><strong>A load is not one number.</strong> Write down the nominal, the source, and the uncertainty band: "400 N side load, from the actuator's published stall torque, &plusmn;40% because stall torque is a catalogue maximum at nominal voltage." A load quoted without its provenance cannot be reviewed, traded, or retired later.</li>
<li><strong>Limit, design and ultimate load.</strong> Aerospace practice: <em>limit load</em> is the largest load expected in service; <em>ultimate load</em> = 1.5 &times; limit. Civil practice uses factored combinations such as 1.2D + 1.6L. Both split the uncertainty into a load side and a strength side, and both name the load explicitly so the two sides can be argued separately.</li>
<li><strong>Enumerate the load types before you compute.</strong> Static, cyclic, impact, thermal, and imposed displacement each drive a different check, and a missed <em>type</em> costs far more than a 10% error in a magnitude you did compute. Displacement-driven loads such as thermal restraint, settlement and misfit get worse when you add material, which reverses the usual instinct.</li>
<li><strong>Do not stack conservatisms in the load definition.</strong> Peak wind, peak thermal, peak inertia and peak pressure do not occur together; multiplying independent worst cases and then adding a multiplier on top produces a part that is heavy, expensive, and no more reliable. Define a small set of credible <em>load combinations</em>, then apply the factor once, at a stated point.</li>
</ul>
<p>The honest way to defend a load case in a design review is to say where each term came from and what would change it: "1.2 on the inertial term because the duty cycle is measured but not bounded; wind at 0.5 of peak in this combination because the machine is indoors during the crane lift."</p>`,
      },
    ],
    equations: [
      { name: "Combined normal stress at a point", formula: "&sigma; = P/A &plusmn; Mc/I", note: "P is axial force, A is area, M is the bending moment at the section, c is the distance from the neutral axis to the point, I is the second moment of area. Signs follow the sense of the load." },
      { name: "Torsional shear stress", formula: "&tau; = Tr/J", note: "T is torque, r is radius to the point, J is the polar second moment (&pi;d&#8308;/32 for a solid round). Maximum everywhere on the outer surface, so it is always live at the bending-critical fibre." },
      { name: "Von Mises for bending plus torsion", formula: "&sigma;&prime; = &radic;(&sigma;&sup2; + 3&tau;&sup2;)", note: "The plane-stress form when one normal stress and one shear stress act. Compare &sigma;&prime; with yield strength. Never add &sigma; and &tau; arithmetically." },
      { name: "Eccentric axial load", formula: "&sigma; = (P/A)(1 &plusmn; ec/r&sup2;),&nbsp;r&sup2; = I/A", note: "e is the eccentricity. Tension appears once e exceeds the kern (h/6 for a rectangle of depth h, d/8 for a solid circle)." },
      { name: "Neutral-axis position under eccentric load", formula: "y<sub>NA</sub> = r&sup2;/e", note: "Measured from the centroid, on the side away from the load. Large e brings the neutral axis into the section; small e leaves it outside and the section stays one sign." },
      { name: "Restrained thermal stress", formula: "&sigma; = &minus;E&alpha;&Delta;T", note: "E is Young's modulus, &alpha; the coefficient of thermal expansion, &Delta;T the temperature rise. Independent of length and cross-section. With a movement allowance: &sigma; = E(&alpha;&Delta;T &minus; &Delta;<sub>gap</sub>/L)." },
      { name: "Impact (dynamic amplification) factor", formula: "n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>)", note: "h is the drop height and &delta;<sub>st</sub> the static deflection under the same weight. h = 0 still gives n = 2. Peak force = nW and peak stress = n &times; static stress." },
      { name: "Thin-wall pressure vessel", formula: "&sigma;<sub>hoop</sub> = pr/t,&nbsp;&sigma;<sub>long</sub> = pr/2t", note: "p is gauge pressure, r the radius (not diameter), t the wall thickness. Valid for t &lt; r/10. A sphere carries pr/2t in every direction." },
      { name: "Parallel load-path sharing", formula: "F<sub>i</sub> = F &middot; k<sub>i</sub>/&Sigma;k", note: "Load entering parallel members divides by stiffness k = EA/L (or the relevant bending or torsional stiffness), never by strength and never by area alone." },
    ],
    interviewTips: [
      "Narrate the load path element by element before you compute anything, from load through member, joint, fastener and reaction, naming the failure check at each step.",
      "On a shaft or crank, resolve loads to the critical section first, then pick the surface fibre farthest from the bending neutral axis; that is where bending and torsion both peak.",
      "Never add a normal stress to a shear stress. Say von Mises and write the square root of sigma squared plus three tau squared.",
      "For thermal problems, ask what is restraining the growth before you touch a formula. No restraint means no stress, regardless of temperature.",
      "Remember the factors of 2: a suddenly applied load with no drop height doubles the force, and hoop stress is twice longitudinal stress.",
      "When a proposed fix adds material, ask whether that material sits between the load and the reaction. If it does not, it adds mass and nothing else.",
    ],
  },

  questions: [
    {
      id: "structural-loading-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A tie rod carries 15 kN of tension. The rod is 12 mm diameter over most of its length, but each end is threaded and the thread root (minor) diameter is 9.85 mm. What is the peak tensile stress along this load path, in MPa?</p>`,
      answer: 197,
      unit: "MPa",
      explanation: `<p class="eq">A<sub>root</sub> = &pi;d&sup2;/4 = &pi;(0.00985)&sup2;/4 = 7.62 &times; 10<sup>&minus;5</sup> m&sup2;</p>
<p class="eq">&sigma; = P/A = 15 000/(7.62 &times; 10<sup>&minus;5</sup>) = 1.97 &times; 10<sup>8</sup> Pa = <strong>197 MPa</strong></p>
<p>Every element in a series load path carries the same 15 kN, so the peak stress sits at the <strong>smallest</strong> section, the thread root rather than the shank. 133 MPa comes from the 12 mm shank, a section that is not the weak link. Fastener practice would use the tensile stress area, 84.3 mm&sup2; for M12 giving 178 MPa, which sits between root and shank because the helix carries some load. The modelling point stands either way: find the minimum section before computing anything.</p>`,
    },
    {
      id: "structural-loading-q02",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The vessel shown is 1 m internal diameter with a 6 mm wall and 2 MPa internal pressure. It has a longitudinal seam weld and a circumferential girth weld. Which weld is the more critical, and what stress does it carry?</p>`,
      figure: figQVessel,
      choices: [
        "The girth weld &mdash; hoop stress of 167 MPa pulls it apart circumferentially",
        "The seam weld &mdash; it is loaded across its length by the 167 MPa hoop stress",
        "The seam weld &mdash; it carries the longitudinal stress of 83.3 MPa",
        "Neither &mdash; using d rather than r, both welds see 83.3 MPa, so it is a tie",
      ],
      answer: 1,
      explanation: `<p class="eq">&sigma;<sub>hoop</sub> = pr/t = (2 &times; 10<sup>6</sup>)(0.5)/0.006 = 167 MPa</p>
<p class="eq">&sigma;<sub>long</sub> = pr/2t = 83.3 MPa</p>
<p>Hoop stress acts circumferentially and therefore pulls <em>across</em> a weld that runs along the axis, so the <strong>longitudinal seam weld</strong> carries the 167 MPa and governs. The girth weld only sees 83.3 MPa. This is why a burst cylinder splits along a line parallel to its axis, and why codes demand higher joint efficiency on the seam.</p>
<p>Each wrong choice is a specific slip. Naming the girth weld pairs the right magnitude with the wrong weld orientation, since hoop stress cannot pull apart a weld whose faces are normal to the axis. Giving the seam 83.3 MPa gets the weld right and the stress backwards. And the tie answer puts the 1 m <em>diameter</em> into pr/t, halving the hoop number to 83.3 and making the two welds look equal, the most common error on this formula.</p>`,

    },
    {
      id: "structural-loading-q03",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A steel pipe of 300 mm <strong>internal diameter</strong> and 5 mm wall carries water at 4 MPa gauge. Find the hoop stress in the pipe wall, in MPa.</p>`,
      answer: 120,
      unit: "MPa",
      explanation: `<p class="eq">&sigma;<sub>hoop</sub> = pr/t = (4 &times; 10<sup>6</sup>)(0.150)/0.005 = <strong>120 MPa</strong></p>
<p>t/r = 0.033, well under 0.1, so membrane theory applies with r = 150 mm. Substituting the diameter gives 240 MPa, exactly double. Longitudinal stress is half this at 60 MPa, so against a 250 MPa yield the real design drivers will be pressure cycling and corrosion allowance rather than burst.</p>`,
    },
    {
      id: "structural-loading-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A 500 kg mass rests on a jack directly above a support pad, touching it but carrying no load. The jack is released so the full weight lands on the pad instantly, with zero drop height. What peak force does the pad see?</p>`,
      choices: ["4.90 kN", "9.81 kN", "14.7 kN", "6.94 kN"],
      answer: 1,
      explanation: `<p class="eq">n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>) = 1 + &radic;1 = 2</p>
<p class="eq">F<sub>peak</sub> = nW = 2 &times; 4.90 = <strong>9.81 kN</strong></p>
<p>The pad is undeflected at first contact, so it resists nothing while the mass is still accelerating under full gravity. The mass overshoots static equilibrium by exactly the amount it started above it, and at maximum deflection the spring force is twice the weight.</p>`,
    },
    {
      id: "structural-loading-q05",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>The aluminium bar shown is clamped between two rigid, immovable walls and then heated by 80 &deg;C. Take E = 69 GPa and &alpha; = 23 &times; 10<sup>&minus;6</sup>/&deg;C. What is the magnitude of the axial stress that develops, in MPa?</p>`,
      figure: figQThermalBar,
      answer: 127,
      unit: "MPa",
      explanation: `<p class="eq">&sigma; = &minus;E&alpha;&Delta;T = (69 &times; 10<sup>9</sup>)(23 &times; 10<sup>&minus;6</sup>)(80) = <strong>127 MPa</strong> compressive</p>
<p>Full restraint means total strain is zero, so the free thermal strain is exactly cancelled by an elastic compressive strain. Neither length nor area appears: a 30 mm bar and a 3 m bar give the same answer. Whether the bar buckles first is the real question, since Euler buckling usually wins in a slender member well before yield.</p>`,
    },
    {
      id: "structural-loading-q06",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A flat steel bar in tension has a 10 mm hole through it and is failing at the net section through that hole. A colleague proposes welding a doubler plate onto the bar 100 mm away from the hole, not covering it. What happens to the failure load?</p>`,
      choices: [
        "Roughly doubles, since the bar's total cross-sectional area has doubled",
        "Essentially unchanged: the net section at the hole still governs",
        "Rises by the gross-to-net ratio at the hole, about 20% on a 50 mm bar",
        "Falls: the weld toe becomes a new discontinuity in a bar already notched",
      ],
      answer: 1,
      explanation: `<p>The load path is a chain in series: grip, bar, net section at the hole, bar, grip. The doubler is welded <em>outside</em> the critical link, so the full load still funnels through the same reduced area at the hole. Capacity is unchanged and only mass and cost go up.</p>
<p>Contrast a doubler that <em>covers</em> the hole and is welded on both sides of it. That one genuinely shares load past the discontinuity and does raise capacity, though the weld group then becomes the new link to check.</p>
<p>The rule to state out loud: <strong>material only helps if it lies between the load and the reaction at the critical section.</strong> Adding material off the load path is the most common wasted design change in real hardware.</p>
<p>The wrong answers are each a real habit. Doubling the capacity comes from adding areas anywhere in the member instead of at the governing section. The 20% answer applies the gross-to-net ratio, which tells you how much the hole cost rather than how much the doubler bought. And the fall-in-capacity answer is not silly: a fillet weld toe genuinely is a stress raiser and a fatigue detail, so a cycling bar could get worse. Under a static net-section check 100 mm away, it does neither.</p>`,

    },
    {
      id: "structural-loading-q07",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Two identical aluminium bars are heated uniformly by 100 &deg;C. Bar A hangs from one end with its other end free; bar B is clamped between rigid walls. What stress does each develop?</p>`,
      choices: [
        "Equal stress in both &mdash; thermal stress depends on material and &Delta;T",
        "Bar A is higher &mdash; it is free to expand, so it strains more",
        "Bar B only &mdash; stress comes from restrained strain, not temperature",
        "Neither is stressed &mdash; free thermal expansion is always stress-free",
      ],
      answer: 2,
      explanation: `<p>Thermal expansion by itself produces <strong>strain, not stress</strong>. Bar A grows by &alpha;&Delta;TL at zero stress. Bar B is told it may not grow, so the walls impose an equal and opposite elastic compressive strain, giving &sigma; = &minus;E&alpha;&Delta;T, about 159 MPa for aluminium at 100 &deg;C.</p>
<p>Thermal stress lives in the boundary condition, not in the part. Which is why fixing it usually means adding a slot, a flexure or an expansion joint rather than adding material.</p>`,
    },
    {
      id: "structural-loading-q08",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A gantry beam is specified for "a 5 kN hoist load". Digging into how the machine is actually used, you find the hoist is also used to snatch stuck parts free, the trolley can be parked anywhere along the span, and the shop crane occasionally sets a 3 kN fixture on the same beam. Which of these belongs in the load definition you hand to the stress check?</p>`,
      choices: [
        "5 kN at midspan, since that is the stated rating and the worst position",
        "5 kN &times; a dynamic factor, at the trolley position that maximises each reaction",
        "8 kN at midspan, adding the fixture so a single case bounds everything",
        "5 kN plus 3 kN plus a snatch factor, all applied together at midspan",
      ],
      answer: 1,
      explanation: `<p>A load definition has to name a magnitude, a position and an arrival rate, and say which of those act together. The rated 5 kN is a static magnitude only. Snatching means the load arrives with kinetic energy, which is what the hoist dynamic factor of roughly 1.1 to 1.6 exists to cover, so the hoist term is 5 kN times that factor. The trolley position is a variable rather than a constant: midspan maximises the bending moment, but a trolley near one end maximises that end&rsquo;s reaction and the bearing check there, so you sweep the position and take the envelope.</p>
<p>Taking 5 kN at midspan as read leaves out both the dynamics and the position sweep, which is how the end connection ends up unchecked. Merging the fixture into a single 8 kN case throws away the information that the two events are independent, since a maintenance fixture set down by the shop crane is not on the beam while the hoist is snatching, and it hides which requirement drove the section. Applying every term simultaneously with a snatch factor on top is the stacking error: heavy, and it makes the real driving case invisible to everyone downstream.</p>
<p>Written out, the deliverable is two or three named cases. LC1: 1.4 &times; 5 kN hoist, trolley swept over the span. LC2: 3 kN fixture at midspan, hoist unloaded. LC3: 5 kN static hoist plus 3 kN fixture, no snatch. Then the stress check runs each one and reports which governs.</p>`,
    },
    {
      id: "structural-loading-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The bracket shown is bolted to a wall by two bolts spaced 150 mm apart vertically, and a 2 kN load hangs 200 mm out from the wall face. Treating the bolt pair as a tension&ndash;compression couple, estimate the tensile force in the upper bolt, in kN.</p>`,
      figure: figQBracket,
      answer: 2.67,
      unit: "kN",
      explanation: `<p>Move the load to the wall face: it becomes a 2 kN downward force plus a moment.</p>
<p class="eq">M = P &middot; e = 2000 &times; 0.200 = 400 N&middot;m</p>
<p>That moment tries to rotate the bracket off the wall, and it is reacted by a couple: the <strong>upper bolt pulls</strong> while the flange bears on the wall near the bottom. With the couple arm equal to the bolt spacing h = 150 mm:</p>
<p class="eq">T = M/h = 400/0.150 = 2667 N = <strong>2.67 kN</strong></p>
<p>The 2 kN vertical force is separate and carried in shear, about 1 kN per bolt. Two refinements pull in <em>opposite</em> directions:</p>
<ul>
<li><strong>Where the compression really acts.</strong> The flange bears on the wall at its toe, about 19 mm below the lower bolt on this bracket, and moving the compression centre down <em>lengthens</em> the couple arm. Taking bolt forces proportional to distance from the toe, y<sub>upper</sub> = 169 mm and y<sub>lower</sub> = 18.9 mm, so T<sub>upper</sub> = My<sub>1</sub>/&Sigma;y&sup2; = 400 000(169)/(169&sup2; + 18.9&sup2;) = 2340 N, <em>less</em> than 2.67 kN.</li>
<li><strong>Prying.</strong> A flexible flange bends between the bolt and the toe, and the toe reaction levers extra tension into the bolt, typically 20 to 50% above the simple couple. This one pushes T up.</li>
</ul>
<p>Which wins depends on flange stiffness. A thick flange behaves like the rigid-couple model and lands near or below 2.67 kN; a thin one prys and goes well above it. Quote 2.67 kN as a first estimate and name both refinements rather than treating it as a bound in either direction.</p>`,

    },
    {
      id: "structural-loading-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Same wall bracket. Its arm is a flat steel bar 40 mm deep and 8 mm thick with 250 MPa yield, and the two M10 class 8.8 bolts have a tensile stress area of 58 mm&sup2; and roughly 600 MPa proof stress. Which element is closest to its own allowable, and at what stress?</p>`,
      figure: figQBracket,
      choices: [
        "The upper bolt in tension, at 46 MPa against 600 MPa proof",
        "The arm at the wall in bending, at about 188 MPa",
        "The bolts in shear, at 17 MPa each on the 58 mm&sup2; area",
        "The arm in direct shear, at 6 MPa on the 320 mm&sup2; section",
      ],
      answer: 1,
      explanation: `<p>Check every link in the path against the same 400 N&middot;m moment and 2 kN shear.</p>
<p class="eq">Arm bending: Z = bh&sup2;/6 = 8(40)&sup2;/6 = 2133 mm&sup3; &rarr; &sigma; = 400/(2.133 &times; 10<sup>&minus;6</sup>) = 188 MPa</p>
<p class="eq">Bolt tension: 2667/58 mm&sup2; = 46.0 MPa&nbsp;&nbsp;&nbsp;Bolt shear: 1000/58 = 17.2 MPa</p>
<p class="eq">Arm direct shear: 2000/(40 &times; 8) = 6.25 MPa</p>
<p>Now compare each against its own allowable. The arm sits at 188/250 = 75% of yield, n = 1.33, while the bolt is at 46/600 = 8% of proof, n = 13. The <strong>arm root in bending governs</strong>, comfortably. The biggest <em>stress</em> is not automatically the answer, since you compare each element with its own strength, though here it happens to be both. To improve this bracket you deepen the arm or add a gusset; upsizing the bolts buys nothing.</p>`,
    },
    {
      id: "structural-loading-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The 40 mm diameter solid shaft shown is built in at a bearing housing. It transmits 500 N&middot;m of torque and also carries a 2 kN transverse load 300 mm from the housing. Find the von Mises stress at the critical point, in MPa.</p>`,
      figure: figQShaft,
      answer: 118,
      unit: "MPa",
      explanation: `<p>Loads at the critical section, the housing face: M = 2000 &times; 0.300 = 600 N&middot;m and T = 500 N&middot;m. Section properties for d = 40 mm:</p>
<p class="eq">S = &pi;d&sup3;/32 = 6.283 &times; 10<sup>&minus;6</sup> m&sup3;&nbsp;&nbsp;&nbsp;J/r = 2S = 1.257 &times; 10<sup>&minus;5</sup> m&sup3;</p>
<p class="eq">&sigma; = M/S = 600/(6.283 &times; 10<sup>&minus;6</sup>) = 95.5 MPa</p>
<p class="eq">&tau; = T/(2S) = 500/(1.257 &times; 10<sup>&minus;5</sup>) = 39.8 MPa</p>
<p class="eq">&sigma;&prime; = &radic;(95.5&sup2; + 3 &times; 39.8&sup2;) = &radic;13 868 = <strong>118 MPa</strong></p>
<p>The critical point is on the surface at the top or bottom fibre, where bending peaks and torsional shear is at its maximum everywhere on the surface. The wrong answers are 95.5 MPa for bending only, 135 MPa for adding &sigma; + &tau;, and 103 MPa for using &radic;(&sigma;&sup2; + &tau;&sup2;) and losing the factor 3. Transverse shear VQ/It peaks at the neutral axis at about 2.1 MPa, negligible here as it usually is for a slender shaft.</p>`,
    },
    {
      id: "structural-loading-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A solid round shaft carries bending, torsion, and a transverse shear force at the same section. Before computing anything, where on that cross-section should you evaluate the stress state?</p>`,
      choices: [
        "At the bending neutral axis, where transverse shear peaks",
        "At the centroid, where the axial stress is uniform",
        "On the surface, at the fibre farthest from the bending neutral axis",
        "Just below the surface, where torsional shear peaks",
      ],
      answer: 2,
      explanation: `<p>Bending normal stress Mc/I is largest at the fibre farthest from the neutral axis, on the surface at top and bottom. Torsional shear Tr/J is largest at r = R, which is the <em>entire</em> outer surface, so it is fully live at that same point. That coincidence is what makes the surface fibre critical.</p>
<p>Transverse shear VQ/It does peak at the neutral axis, but there the bending stress is zero, and for anything but a very short stubby member VQ/It is an order of magnitude below Tr/J. Check it, then discard it.</p>
<p>The habit worth showing: sketch the cross-section, mark where each stress component peaks, and take the point where the worst combination coexists. If bending and torsion are comparable you evaluate the surface fibre; if V dominates because the member is very short, add the neutral axis as a second candidate.</p>`,
    },
    {
      id: "structural-loading-q13",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The 50 mm &times; 100 mm rectangular section shown carries a 60 kN compressive load applied 30 mm from the centroid along the 100 mm dimension. What is the maximum compressive stress on the section, in MPa?</p>`,
      figure: figQEcc,
      answer: 33.6,
      unit: "MPa",
      explanation: `<p>Shift the load to the centroid and add the moment it creates: M = 60 000 &times; 0.030 = 1800 N&middot;m.</p>
<p class="eq">A = 0.050 &times; 0.100 = 5.0 &times; 10<sup>&minus;3</sup> m&sup2; &rarr; P/A = 12.0 MPa</p>
<p class="eq">I = bh&sup3;/12 = 0.050(0.100)&sup3;/12 = 4.167 &times; 10<sup>&minus;6</sup> m&#8308;, c = 0.050 m</p>
<p class="eq">Mc/I = 1800(0.050)/(4.167 &times; 10<sup>&minus;6</sup>) = 21.6 MPa</p>
<p class="eq">&sigma;<sub>max</sub> = 12.0 + 21.6 = <strong>33.6 MPa</strong> compressive</p>
<p>The bending term is nearly twice the direct term even though the load looks roughly axial. That is the whole point of the eccentric-load problem. Answering 12.0 MPa treats it as pure compression and understates the stress by a factor of 2.8; answering 21.6 MPa keeps only the bending half.</p>
<p>Check the model rather than the arithmetic: the eccentricity is measured along the 100 mm dimension, so h = 100 mm and c = 50 mm are what go into I and Mc/I. Turning the load 90&deg; onto the 50 mm dimension with the same 30 mm offset would give a far larger stress on a far smaller section modulus, so check which way round the drawing has it before substituting anything.</p>`,

    },
    {
      id: "structural-loading-q14",
      type: "mc",
      difficulty: 3,
      prompt: `<p>For that same 50 &times; 100 mm section with 60 kN applied at 30 mm eccentricity, what stress acts on the face <em>away</em> from the load?</p>`,
      choices: [
        "9.6 MPa tensile &mdash; e exceeds the kern limit h/6 = 16.7 mm",
        "9.6 MPa compressive &mdash; the section stays wholly in compression",
        "Zero &mdash; the neutral axis falls exactly on that face",
        "21.6 MPa tensile &mdash; only the bending term reaches that face",
      ],
      answer: 0,
      explanation: `<p class="eq">&sigma; = &minus;P/A + Mc/I = &minus;12.0 + 21.6 = +9.6 MPa (tension)</p>
<p>On the far face the two contributions oppose. The check that tells you this before any arithmetic is the <strong>kern</strong>: for a rectangle of depth h the whole section stays in compression only while e &le; h/6 = 100/6 = 16.7 mm. Here e = 30 mm, comfortably outside, so tension is guaranteed.</p>
<p>It matters because a masonry pier, a grouted baseplate or a bolted flange cannot deliver that tension. The joint gaps open, the contact area shrinks, and the real compressive stress rises well above the 33.6 MPa the elastic formula predicts. That is the mechanism behind baseplate uplift and flange separation, and the reason design codes state the middle-third rule.</p>`,
    },
    {
      id: "structural-loading-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Take the same 300 mm aluminium bar (E = 69 GPa, &alpha; = 23 &times; 10<sup>&minus;6</sup>/&deg;C) heated 80 &deg;C, but now one wall sits on a shim stack that lets it retreat 0.10 mm before going solid. What axial stress develops, in MPa?</p>`,
      answer: 104,
      unit: "MPa",
      explanation: `<p class="eq">Free growth: &delta; = &alpha;&Delta;TL = (23 &times; 10<sup>&minus;6</sup>)(80)(0.300) = 0.552 mm</p>
<p class="eq">Restrained part: 0.552 &minus; 0.100 = 0.452 mm</p>
<p class="eq">&epsilon; = 0.452/300 = 1.507 &times; 10<sup>&minus;3</sup> &rarr; &sigma; = E&epsilon; = (69 &times; 10<sup>9</sup>)(1.507 &times; 10<sup>&minus;3</sup>) = <strong>104 MPa</strong></p>
<p>Only the growth that is <em>not</em> accommodated turns into stress. Compare with the fully restrained answer of 127 MPa: a 0.10 mm clearance, a real machinable amount, removes only 18% of the stress. Because the bar wants to move 0.552 mm, a useful clearance has to be a meaningful fraction of that, which is why expansion joints are sized in millimetres and why leaving a bit of clearance is not a thermal-stress solution.</p>`,
    },
    {
      id: "structural-loading-q16",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 10 kg mass is released from rest 50 mm above a platform carried on springs of total stiffness 20 kN/m, as shown. What peak force do the springs see, in N?</p>`,
      figure: figQDrop,
      answer: 552,
      unit: "N",
      explanation: `<p class="eq">W = mg = 10 &times; 9.81 = 98.1 N&nbsp;&nbsp;&nbsp;&delta;<sub>st</sub> = W/k = 98.1/20 000 = 4.905 mm</p>
<p class="eq">n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>) = 1 + &radic;(1 + 100/4.905) = 1 + &radic;21.39 = 5.62</p>
<p class="eq">F<sub>peak</sub> = nW = 5.62 &times; 98.1 = <strong>552 N</strong></p>
<p>A 50 mm drop multiplies the force by more than five. Energy checks it independently: mg(h + &delta;<sub>max</sub>) = &frac12;k&delta;<sub>max</sub>&sup2; gives &delta;<sub>max</sub> = 27.6 mm and F = k&delta;<sub>max</sub> = 552 N. &#10003;</p>
<p>Reducing it takes a <em>softer</em> mount, not a stiffer one, because for h much greater than &delta;<sub>st</sub> the peak force goes as &radic;k.</p>`,
    },
    {
      id: "structural-loading-q17",
      type: "mc",
      difficulty: 3,
      prompt: `<p>You need to cut the peak force in that drop event. A colleague argues for a stiffer platform, "so it deflects less". Is that right?</p>`,
      choices: [
        "Stiffer &mdash; a shorter stroke stores less energy, so the force drops",
        "Neither &mdash; peak force is set by mass and drop height alone, F = mgh/&delta;",
        "Stiffer &mdash; a smaller &delta;<sub>st</sub> shrinks 2h/&delta;<sub>st</sub> and cuts the factor n",
        "Softer &mdash; peak force goes as &radic;k, so halving k cuts it 29%",
      ],
      answer: 3,
      explanation: `<p>The drop energy mgh is fixed by the event, not by the structure. All the structure decides is <em>how far it travels</em> while absorbing that energy. For h much greater than &delta;<sub>st</sub>:</p>
<p class="eq">&frac12;k&delta;<sub>max</sub>&sup2; &asymp; mgh &rarr; F<sub>peak</sub> = k&delta;<sub>max</sub> &asymp; &radic;(2kmgh)</p>
<p>F<sub>peak</sub> is proportional to &radic;k, so halving the stiffness multiplies the force by &radic;0.5 = 0.707, a 29% reduction. A stiffer platform makes it <em>worse</em>, stopping the mass in a shorter distance, and by impulse and momentum a shorter stop means a larger force.</p>
<p>This is the design logic behind crush cans, elastomer isolators, dynamic climbing rope and shipping-crate foam. You are buying stopping distance, and the constraint is packaging: you can only go as soft as the available stroke and the acceptable static sag allow.</p>
<p>Two of the wrong answers are the same intuition dressed differently. &ldquo;Less energy is stored&rdquo; confuses the energy the structure <em>stores</em> with the energy the drop <em>delivers</em>; the delivered energy is mgh either way, and the stiff structure has to absorb all of it over a shorter stroke. The n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>) version is subtler and worth working through: a stiffer platform does shrink n, but it shrinks &delta;<sub>st</sub> faster, and F<sub>peak</sub> = nW = n&middot;k&delta;<sub>st</sub> is what you actually feel, so the k in front wins. And the mass-and-height-only answer would make the whole isolation industry pointless.</p>`,

    },
    {
      id: "structural-loading-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 20 kN load must pass from a lug into a plate. Option A is one M12 bolt in single shear (shear area 84.3 mm&sup2;, allowable shear 200 MPa). Option B is two 5 mm fillet welds, each 60 mm long (throat 0.707 &times; leg, allowable 120 MPa). Which path limits the joint?</p>`,
      choices: [
        "The bolt: 16.9 kN shear capacity, below the 20 kN load",
        "The weld: 12.7 kN throat capacity, below the 20 kN load",
        "Neither: both clear 20 kN, and the bolt has more margin",
        "The weld: fillet welds always undercut a same-size bolt",
      ],
      answer: 0,
      explanation: `<p>Size each path separately. They are alternatives, and a load path is only as good as the element it runs through.</p>
<p class="eq">Bolt: V = 84.3 mm&sup2; &times; 200 MPa = 16.9 kN</p>
<p class="eq">Weld throat: a = 0.707 &times; 5 = 3.54 mm; area = 3.54 &times; 120 mm = 424 mm&sup2;</p>
<p class="eq">Weld: V = 424 mm&sup2; &times; 120 MPa = 50.9 kN</p>
<p>The bolt path falls short of the 20 kN requirement and the weld path has 2.5 times the margin. Fix by going to M16, doubling up the bolt, or putting it in double shear, which adds a second shear plane and doubles capacity.</p>
<p>Worth saying out loud: the two paths behave differently beyond capacity. A bolt in a clearance hole can slip before it bears, so the joint moves; a weld is rigid and carries load immediately but has no slip with which to redistribute a misfit. That difference matters as much as the numbers.</p>`,
    },
    {
      id: "structural-loading-q19",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A steel bolt (&alpha; = 12 &times; 10<sup>&minus;6</sup>/&deg;C) clamps an aluminium spacer (&alpha; = 23 &times; 10<sup>&minus;6</sup>/&deg;C) over a 40 mm grip length. Bolt stiffness is 400 MN/m and clamped-member stiffness is 1600 MN/m. The joint is heated 60 &deg;C. By how much does the bolt tension increase, in kN?</p>`,
      answer: 8.45,
      unit: "kN",
      explanation: `<p>The aluminium wants to grow more than the steel bolt over the same grip, and that mismatch has to be taken up by stretching the bolt further and compressing the members further.</p>
<p class="eq">&delta;<sub>mismatch</sub> = (&alpha;<sub>Al</sub> &minus; &alpha;<sub>st</sub>)&Delta;T L = (11 &times; 10<sup>&minus;6</sup>)(60)(0.040) = 0.0264 mm</p>
<p>Bolt and members act as two springs in series absorbing that mismatch, so the effective stiffness is the series combination:</p>
<p class="eq">k<sub>eff</sub> = k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>) = (400)(1600)/2000 = 320 MN/m</p>
<p class="eq">&Delta;F = k<sub>eff</sub>&delta; = (320 &times; 10<sup>6</sup>)(2.64 &times; 10<sup>&minus;5</sup>) = 8448 N = <strong>8.45 kN</strong></p>
<p>On an M10 bolt preloaded to about 20 kN that is a 42% rise, enough to matter. The mirror-image problem is worse. Cool the same joint and you <em>lose</em> 8.45 kN of preload, which is how outdoor and cryogenic joints go slack, start to fret, and then fail in fatigue.</p>`,
    },
    {
      id: "structural-loading-q20",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A reviewer asks you to size a bracket for peak wind, peak thermal, peak inertial and peak pressure all acting simultaneously at their design maxima, and then to apply a factor of 3 on top of that combination. What is your assessment?</p>`,
      choices: [
        "Correct practice &mdash; worst-on-worst is what a safety factor means",
        "Unconservative &mdash; thermal loads are not covered by safety factors",
        "Over-conservative &mdash; independent peaks belong in defined load cases",
        "Neutral &mdash; stresses superpose linearly, so the order does not matter",
      ],
      answer: 2,
      explanation: `<p>Those four peaks are statistically independent events. The probability that all four occur at their design maxima at the same instant is far below the probability of any one of them, so combining them at full value already embeds a large hidden factor, and multiplying by 3 stacks conservatism on conservatism.</p>
<p>The disciplined approach defines a small set of <strong>load combinations</strong> representing credible simultaneous states, so 1.2D + 1.6L or 1.2D + 1.0W + 0.5L in civil practice, or limit load cases with 1.5 to ultimate in aerospace, and applies the factor once, at a defined point.</p>
<p>The cost of getting this wrong is not just mass. An over-designed bracket moves the failure into whatever it is bolted to, hides the real driving case from everyone downstream, and makes it impossible to tell later which requirement any dimension came from.</p>`,
    },
    {
      id: "structural-loading-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A cantilever tube bolted to a wall through a flange deflects 5.00 mm at its tip. You double the tube wall thickness &mdash; roughly doubling its second moment of area &mdash; and the tip deflection falls only to 4.25 mm. How much of the original 5.00 mm came from the flange joint, in mm?</p>`,
      figure: figQTube,
      answer: 3.5,
      unit: "mm",
      explanation: `<p>The joint and the tube are two springs in series, so their deflections add. Let the tube contribute x and the joint 5.00 &minus; x. Doubling I halves the tube&rsquo;s contribution and leaves the joint alone:</p>
<p class="eq">0.5x + (5.00 &minus; x) = 4.25 &rarr; 5.00 &minus; 0.5x = 4.25 &rarr; x = 1.50 mm</p>
<p class="eq">Joint contribution = 5.00 &minus; 1.50 = <strong>3.50 mm</strong>, i.e. 70% of the total</p>
<p>So 70% of the compliance is in the bolted flange, from bolt stretch, flange bending and contact take-up, and not in the tube. Stiffening the tube attacks the other 30%, which is why doubling the wall bought only 15%.</p>
<p>Attack the dominant term instead: more or larger bolts, a thicker flange, gussets between flange and tube, or a larger bolt circle. For series load paths you can only improve the total by the share the element you are touching actually owns.</p>`,
    },
    {
      id: "structural-loading-q22",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>The crank shown is a solid round bar of 30 mm diameter built into a wall. The 1.5 kN load acts perpendicular to the plane of the crank, applied 250 mm along the main arm and 120 mm off its axis. Find the von Mises stress at the critical point at the wall, in MPa.</p>`,
      figure: figQCrank,
      answer: 153,
      unit: "MPa",
      explanation: `<p>Resolve the offset load into loads on the main arm at the wall. The 250 mm distance along the arm gives bending; the 120 mm lateral offset gives torsion about the arm axis.</p>
<p class="eq">M = 1500 &times; 0.250 = 375 N&middot;m&nbsp;&nbsp;&nbsp;T = 1500 &times; 0.120 = 180 N&middot;m</p>
<p class="eq">S = &pi;d&sup3;/32 = &pi;(0.030)&sup3;/32 = 2.651 &times; 10<sup>&minus;6</sup> m&sup3;</p>
<p class="eq">&sigma; = M/S = 375/(2.651 &times; 10<sup>&minus;6</sup>) = 141 MPa&nbsp;&nbsp;&nbsp;&tau; = T/(2S) = 180/(5.301 &times; 10<sup>&minus;6</sup>) = 34.0 MPa</p>
<p class="eq">&sigma;&prime; = &radic;(141&sup2; + 3 &times; 34.0&sup2;) = &radic;23 472 = <strong>153 MPa</strong></p>
<p>The modelling step that earns the marks is recognising that one off-axis force produces <em>both</em> a bending moment and a torque on the same section: the offset perpendicular to the arm is a torque arm, the distance along the arm is a bending arm.</p>
<p>Swap the two arms and you get M = 180 N&middot;m, T = 375 N&middot;m, so &sigma; = 67.9 MPa, &tau; = 70.7 MPa and &sigma;&prime; = <strong>140 MPa</strong>, only 9% below the right answer, which is why the mistake survives a check. Torsion adds only 8% here, because 3&tau;&sup2; is small next to &sigma;&sup2; whenever the offset is well under half the arm length. In the swapped case the shear term carries three quarters of the total and that same 8% rule of thumb would have been badly wrong.</p>`,

    },
  ],

  qna: [
    {
      id: "structural-loading-qa01",
      q: `<p>Walk me through how you trace the load path in a part you have never seen before.</p>`,
      a: `<p>Start at the applied load and finish at ground, naming every element the force passes through and the mode it carries it in. For a wall-mounted shelf bracket: hand load on the shelf, shelf plate in bending, bracket arm in bending plus shear, the flange where the moment becomes a tension and compression couple, upper bolt in tension with the flange toe in bearing, wall anchor in pull-out, building structure.</p>
<p>Then write the check for each link: net-section tension, bolt shear, weld throat, bearing, bending stress, anchor capacity. Series links all carry the same load and fail in different modes, so the weakest link sets the capacity, and it is often a joint rather than a member.</p>
<p>Two things I would raise unprompted. Parallel paths share by stiffness, k<sub>i</sub>/&Sigma;k, not by strength, so the stiff path takes the load and fails first. And any material not between the load and the reaction adds mass and no capacity.</p>`,
    },
    {
      id: "structural-loading-qa02",
      q: `<p>A shaft carries axial load, bending and torsion at the same section. How do you find the governing stress?</p>`,
      a: `<p>Four steps. Reduce the external loads to the section of interest, getting P, M, V and T there. Choose the critical point on the cross-section: on a round shaft, bending normal stress peaks at the surface fibre farthest from the neutral axis, and torsional shear is maximum over the whole outer surface, so those two coincide at the top or bottom fibre. Transverse shear VQ/It peaks at the neutral axis where bending is zero and is usually an order of magnitude smaller, so check it and discard it.</p>
<p>Then superpose like with like: &sigma; = P/A &plusmn; Mc/I for normal stress, &tau; = Tr/J for shear. And combine through a failure criterion rather than by adding: &sigma;&prime; = &radic;(&sigma;&sup2; + 3&tau;&sup2;) for von Mises, compared with yield divided by the factor of safety.</p>
<p>Two errors get watched for: adding &sigma; and &tau; arithmetically, and putting the critical point at the neutral axis because shear is highest there, which is true for transverse shear and wrong when torsion is in play.</p>`,
    },
    {
      id: "structural-loading-qa03",
      q: `<p>Why does an eccentric axial load produce bending, and what is the kern?</p>`,
      a: `<p>A force applied off the centroid is statically equivalent to the same force at the centroid plus a couple M = P&middot;e. That couple is real bending, so the stress on the section is &sigma; = P/A &plusmn; Mc/I = (P/A)(1 &plusmn; ec/r&sup2;) with r&sup2; = I/A. The bending term usually dominates, and faster than people expect: the ratio of bending to direct stress is ec/r&sup2;, which for a rectangle of depth h is 6e/h, so an eccentricity of a fifth of the depth already makes bending 1.2 times the direct term.</p>
<p>The <strong>kern</strong> is the region around the centroid within which the load can be applied without producing any stress reversal: e &le; h/6 for a rectangle of depth h, e &le; d/8 for a solid circle. Outside it the far face goes into tension and the neutral axis moves into the section at y = r&sup2;/e.</p>
<p>This matters because many real interfaces cannot deliver tension. Masonry, grouted baseplates and bolted flanges simply gap open, the contact area shrinks, and the actual compressive stress exceeds the elastic prediction. Hence the middle-third rule in foundation design and the prying check in bolted brackets.</p>`,
    },
    {
      id: "structural-loading-qa04",
      q: `<p>An aluminium bar is clamped between rigid steel walls and heated 80 &deg;C. What stress develops, and what if one wall can move 0.1 mm?</p>`,
      a: `<p>Fully restrained, the total strain is zero, so the elastic strain must cancel the thermal strain: &sigma; = &minus;E&alpha;&Delta;T = (69 GPa)(23 &times; 10<sup>&minus;6</sup>)(80) = 127 MPa compressive. Neither length nor cross-sectional area appears, so a 30 mm bar and a 3 m bar give the same number, because thermal loading is displacement-driven rather than force-driven.</p>
<p>If one wall can retreat 0.1 mm and the bar is 300 mm long, the free growth is &alpha;&Delta;TL = 0.552 mm, so only 0.452 mm is restrained: &epsilon; = 1.51 &times; 10<sup>&minus;3</sup> and &sigma; = 104 MPa. An 18% reduction for a clearance that is machinable but not trivial, and that is the practical lesson. Useful relief requires a clearance comparable to the free growth, which is why expansion joints are sized in millimetres.</p>
<p>Two follow-ups I would raise. At 127 MPa compressive a slender bar may buckle long before it yields. And a temperature gradient needs no external restraint at all, because the cooler material is restrained by the hotter, giving &sigma; &asymp; E&alpha;&Delta;T/(1 &minus; &nu;).</p>`,
    },
    {
      id: "structural-loading-qa05",
      q: `<p>Why is a suddenly applied load twice as severe as a gradually applied one, and how do you handle a drop?</p>`,
      a: `<p>Because the structure is undeflected at the instant of contact, so it resists nothing while the weight is still accelerating. Equating the work done by the weight, W&delta;<sub>max</sub>, to the strain energy stored, &frac12;k&delta;<sub>max</sub>&sup2;, gives &delta;<sub>max</sub> = 2W/k = 2&delta;<sub>st</sub>, so the peak force is 2W. The mass overshoots equilibrium by exactly the amount it started above it, then rings down to the static value.</p>
<p>With a drop height h the same energy balance gives the impact factor n = 1 + &radic;(1 + 2h/&delta;<sub>st</sub>), and every response scales by n: force, deflection, stress. For h much greater than &delta;<sub>st</sub>, n &asymp; &radic;(2h/&delta;<sub>st</sub>), so F<sub>peak</sub> &asymp; &radic;(2kmgh). Peak force rises with the square root of stiffness, which is why the fix for an impact problem is a <em>softer</em> mount that buys stopping distance rather than a stiffer one.</p>
<p>Caveats worth stating: this assumes an elastic strike, a struck body of negligible mass, and no yielding, so it is a conservative first cut. Real drops absorb energy plastically.</p>`,
    },
    {
      id: "structural-loading-qa06",
      q: `<p>A pressure vessel is 1 m diameter with a 6 mm wall at 2 MPa. Which weld would you inspect first and why?</p>`,
      a: `<p>The longitudinal seam weld. Hoop stress is &sigma;<sub>h</sub> = pr/t = (2 MPa)(0.5 m)/0.006 m = 167 MPa; longitudinal stress is &sigma;<sub>L</sub> = pr/2t = 83.3 MPa. Hoop stress acts circumferentially, so it pulls across any weld running parallel to the axis, which is the seam. The circumferential girth weld only sees the longitudinal stress, half as much.</p>
<p>That 2:1 ratio is why a failed cylinder splits along a line parallel to its axis rather than ringing apart, and why pressure vessel codes demand higher joint efficiency and more radiography on longitudinal seams.</p>
<p>Note the orientation logic carefully, because it is what the question is really testing. A weld is loaded by the stress acting <em>across</em> it, so the axial seam is loaded by the circumferential hoop stress and the circumferential girth weld is loaded by the axial longitudinal stress. The naming feels inverted the first time. Two things to have ready: use the radius, not the diameter, or you double the answer; and a sphere carries only pr/2t in every direction, which is why heads are domed and why spherical storage vessels need half the wall of a cylinder at the same pressure.</p>`,
    },
    {
      id: "structural-loading-qa07",
      q: `<p>You doubled the wall thickness of a tube and the deflection barely moved. How do you diagnose that?</p>`,
      a: `<p>Treat the assembly as springs in series and find out who owns the compliance. Deflections in series add, so write &delta;<sub>total</sub> = &delta;<sub>tube</sub> + &delta;<sub>joint</sub>. Doubling the wall of a thin tube roughly doubles I, so the tube&rsquo;s own contribution should halve while the joint term is untouched: 0.5&delta;<sub>tube</sub> + &delta;<sub>joint</sub> = &delta;<sub>new</sub>. Two measurements and that one equation give you the split.</p>
<p>The general result is that a change which halves one term can only ever improve the total by half of that term&rsquo;s share. So a 15% improvement from halving the tube term means the tube owned only about 30% of the compliance to begin with, and the joint owned the rest through bolt stretch, flange bending and contact take-up.</p>
<p>Attack the dominant term: more or larger bolts, a thicker flange, gussets between flange and tube, or a bigger bolt circle. The same reasoning applies to stress. If a peak stress hardly responds to a section change, the critical location is probably not in that section at all, but at a weld toe, a hole, or a joint whose geometry you did not touch.</p>`,
    },
    {
      id: "structural-loading-qa08",
      q: `<p>How much of a "factor of safety of 3" is really about the load, and how would you defend that part of it?</p>`,
      a: `<p>Usually most of it, and it is the half people never write down. The strength side of the ratio is at least measurable: mill certificates, minimum specified against typical properties, a casting knockdown. The load side is where the real uncertainty lives, and my job when I define the load is to make that visible rather than bury it in one multiplier.</p>
<p>So I split it. What is the nominal load and where did the number come from, whether measured, calculated or taken from a supplier&rsquo;s catalogue maximum. How wide is the band around it. What is the duty: a steady hold, ten million cycles, or a once-per-lifetime snatch. And which other loads can credibly act at the same instant. Written that way, &ldquo;1.4 on the actuator side load because stall torque is a catalogue value at nominal voltage and we have not measured it&rdquo; is a statement somebody can challenge, retire with a test, or trade against mass. &ldquo;Factor of 3&rdquo; is not.</p>
<p>What a factor never covers is a load case you failed to enumerate, or a load path that is not the one you assumed. No multiplier protects you from a force you did not know was there, and those are what actually break hardware.</p>
<p>Two disciplines follow. Do not stack conservatisms, because combining peak wind, peak thermal and peak inertia at their maxima and then multiplying by 3 buys mass without buying reliability and hides which requirement drove the design. And say which quantity the factor is on, because for a nonlinear response such as contact, buckling or fatigue life, a factor on stress and a factor on load are very different numbers.</p>`,

    },
    {
      id: "structural-loading-qa09",
      q: `<p>How do you decide whether a load should be treated as static, cyclic, impact or thermal &mdash; and why does it matter so much?</p>`,
      a: `<p>Because each one drives a completely different check, and picking the wrong one means the calculation you did was irrelevant. My triage is: what is the duty cycle, how fast does the load arrive, and what is holding the part?</p>
<p>A steady force is a static yield or buckling check. A force that fluctuates, even by a small amount and even well below yield, is a fatigue check against the endurance limit with a mean-stress correction, and that is what actually kills most in-service hardware. A load arriving with kinetic energy, from a drop, a snatch or a crash, is an impact check with a dynamic factor of at least 2. A temperature change with any restraint is displacement-driven: stress goes as E&alpha;&Delta;T, independent of the part&rsquo;s size, and gets <em>worse</em> if you beef up the structure. Support settlement behaves the same way.</p>
<p>Two habits follow. Enumerate the load types explicitly before any numbers, because missing a type costs far more than a 10% error in a stress you did compute. And always ask whether the problem is force-driven or displacement-driven, because that single distinction reverses the sign of &ldquo;add more material&rdquo;.</p>`,
    },
    {
      id: "structural-loading-qa10",
      q: `<p>A test article fails at 60% of the load your hand calculation and FEA both predicted. Where do you look?</p>`,
      a: `<p>At the boundary conditions and the load path, before I question the material. The most common cause is that the real joint is softer than the model: a flange modelled as fully fixed actually rotates, so the root moment is larger than assumed and load redistributes toward a link nobody sized.</p>
<p>Second, a load path I did not model, such as an assembly preload, a thermal mismatch, or an eccentricity from a single-shear lap that adds a secondary bending moment. Third, a local feature: a weld toe, a fillet radius, or a machining undercut whose stress concentration the mesh was too coarse to resolve, or a surface finish and residual stress state worse than assumed. Fourth, the failure mode itself, because if the part actually buckled, or failed in fatigue during a long ramp, comparing against yield was never the right criterion.</p>
<p>My plan would be to instrument the rig: strain gauges either side of the joint to check whether the measured load split matches the model, a repeat test with the joint stiffened, and fractography on the origin, because where the crack started tells you immediately whether the failure began where you predicted.</p>`,
    },
  ],
};

export default content;
