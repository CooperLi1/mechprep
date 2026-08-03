import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Heat Transfer
// ---------------------------------------------------------------------------
// SVG note: HTML <sub>/<sup> are NOT valid inside SVG <text> — the renderer
// drops their content. Every subscript below uses
// <tspan baseline-shift="sub" font-size="9">. All element ids are prefixed
// ht1-…ht11- so they stay unique across the app.
// ---------------------------------------------------------------------------

const figNetwork = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht1-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Series thermal path: the same Q crosses every element</text>
  <rect x="72" y="58" width="66" height="72" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="138" y="58" width="22" height="72" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="160" y="58" width="112" height="72" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="105" y="99" text-anchor="middle" fill="#334155">die</text>
  <text x="216" y="99" text-anchor="middle" fill="#334155">sink base</text>
  <line x1="149" y1="130" x2="149" y2="145" stroke="#64748b" stroke-width="1"/>
  <text x="149" y="158" text-anchor="middle" fill="#64748b" font-size="11">TIM</text>
  <line x1="26" y1="94" x2="66" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht1-heat)"/>
  <text x="26" y="80" fill="#dc2626" font-weight="600">Q</text>
  <line x1="278" y1="94" x2="320" y2="94" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht1-heat)"/>
  <text x="328" y="98" fill="#dc2626" font-weight="600">to air</text>
  <circle cx="72" cy="196" r="8" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="196" x2="132" y2="196" stroke="#334155" stroke-width="1.5"/>
  <rect x="132" y="184" width="54" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="186" y1="196" x2="238" y2="196" stroke="#334155" stroke-width="1.5"/>
  <rect x="238" y="184" width="54" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="292" y1="196" x2="344" y2="196" stroke="#334155" stroke-width="1.5"/>
  <circle cx="352" cy="196" r="8" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="159" y="201" text-anchor="middle" fill="#334155">R<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <text x="265" y="201" text-anchor="middle" fill="#334155">R<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="72" y="228" text-anchor="middle" fill="#64748b">T<tspan baseline-shift="sub" font-size="9">hot</tspan></text>
  <text x="352" y="228" text-anchor="middle" fill="#64748b">T<tspan baseline-shift="sub" font-size="9">cold</tspan></text>
  <text x="230" y="250" text-anchor="middle" fill="#1d4ed8" font-weight="600">Q = &Delta;T / (R<tspan baseline-shift="sub" font-size="9">1</tspan> + R<tspan baseline-shift="sub" font-size="9">2</tspan>)</text>
</svg>`;

const figLadder = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht2-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Junction-to-ambient ladder, 40 W package</text>
  <line x1="14" y1="86" x2="42" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht2-heat)"/>
  <text x="14" y="72" fill="#dc2626" font-weight="600">40 W</text>
  <circle cx="52" cy="86" r="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="59" y1="86" x2="86" y2="86" stroke="#334155" stroke-width="1.5"/>
  <rect x="86" y="74" width="52" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="138" y1="86" x2="151" y2="86" stroke="#334155" stroke-width="1.5"/>
  <circle cx="158" cy="86" r="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="165" y1="86" x2="192" y2="86" stroke="#334155" stroke-width="1.5"/>
  <rect x="192" y="74" width="52" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="244" y1="86" x2="261" y2="86" stroke="#334155" stroke-width="1.5"/>
  <circle cx="268" cy="86" r="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="275" y1="86" x2="302" y2="86" stroke="#334155" stroke-width="1.5"/>
  <rect x="302" y="74" width="62" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="364" y1="86" x2="393" y2="86" stroke="#334155" stroke-width="1.5"/>
  <circle cx="400" cy="86" r="7" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="52" y="62" text-anchor="middle" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">j</tspan></text>
  <text x="158" y="62" text-anchor="middle" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">c</tspan></text>
  <text x="268" y="62" text-anchor="middle" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">s</tspan></text>
  <text x="400" y="62" text-anchor="middle" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">a</tspan></text>
  <text x="112" y="91" text-anchor="middle" fill="#334155" font-size="11">R<tspan baseline-shift="sub" font-size="8">JC</tspan></text>
  <text x="218" y="91" text-anchor="middle" fill="#334155" font-size="11">R<tspan baseline-shift="sub" font-size="8">TIM</tspan></text>
  <text x="333" y="91" text-anchor="middle" fill="#334155" font-size="11">R<tspan baseline-shift="sub" font-size="8">SA</tspan></text>
  <text x="112" y="114" text-anchor="middle" fill="#64748b" font-size="11">0.35 K/W</text>
  <text x="218" y="114" text-anchor="middle" fill="#64748b" font-size="11">0.25 K/W</text>
  <text x="333" y="114" text-anchor="middle" fill="#64748b" font-size="11">0.90 K/W</text>
  <line x1="158" y1="93" x2="158" y2="164" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="158" y1="164" x2="190" y2="164" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
  <rect x="190" y="152" width="90" height="24" fill="#fff" stroke="#64748b" stroke-width="1.5"/>
  <line x1="280" y1="164" x2="400" y2="164" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="400" y1="164" x2="400" y2="93" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="234" y="169" text-anchor="middle" fill="#64748b" font-size="11">R<tspan baseline-shift="sub" font-size="8">board</tspan> = 14 K/W</text>
  <text x="230" y="200" text-anchor="middle" fill="#64748b" font-size="12">the board path is in parallel with the sink path</text>
  <text x="230" y="228" text-anchor="middle" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">j</tspan> = T<tspan baseline-shift="sub" font-size="9">a</tspan> + Q &middot; &Sigma;R along whichever path carries Q</text>
</svg>`;

const figParallel = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht3-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Parallel paths: conductances add, resistances do not</text>
  <rect x="52" y="104" width="64" height="44" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="84" y="131" text-anchor="middle" fill="#334155">device</text>
  <line x1="14" y1="126" x2="48" y2="126" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht3-heat)"/>
  <text x="14" y="112" fill="#dc2626" font-weight="600" font-size="12">25 W</text>
  <line x1="116" y1="126" x2="124" y2="126" stroke="#334155" stroke-width="1.5"/>
  <circle cx="124" cy="126" r="3.5" fill="#334155"/>
  <line x1="124" y1="62" x2="124" y2="190" stroke="#334155" stroke-width="1.5"/>
  <line x1="124" y1="62" x2="186" y2="62" stroke="#334155" stroke-width="1.5"/>
  <rect x="186" y="50" width="76" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="262" y1="62" x2="376" y2="62" stroke="#334155" stroke-width="1.5"/>
  <line x1="124" y1="126" x2="186" y2="126" stroke="#334155" stroke-width="1.5"/>
  <rect x="186" y="114" width="76" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="262" y1="126" x2="376" y2="126" stroke="#334155" stroke-width="1.5"/>
  <line x1="124" y1="190" x2="186" y2="190" stroke="#334155" stroke-width="1.5"/>
  <rect x="186" y="178" width="76" height="24" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="262" y1="190" x2="376" y2="190" stroke="#334155" stroke-width="1.5"/>
  <text x="224" y="67" text-anchor="middle" fill="#334155" font-size="12">sink 3.0 K/W</text>
  <text x="224" y="131" text-anchor="middle" fill="#334155" font-size="12">board 12 K/W</text>
  <text x="224" y="195" text-anchor="middle" fill="#334155" font-size="12">case 20 K/W</text>
  <text x="316" y="52" text-anchor="middle" fill="#1d4ed8" font-size="11">71% of Q</text>
  <text x="316" y="116" text-anchor="middle" fill="#1d4ed8" font-size="11">18% of Q</text>
  <text x="316" y="180" text-anchor="middle" fill="#1d4ed8" font-size="11">11% of Q</text>
  <line x1="376" y1="44" x2="376" y2="208" stroke="#1d4ed8" stroke-width="3"/>
  <text x="384" y="130" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">ambient</tspan></text>
  <text x="230" y="232" text-anchor="middle" fill="#1d4ed8" font-weight="600">1/R = 1/3.0 + 1/12 + 1/20 &rarr; R = 2.14 K/W</text>
</svg>`;

const figHRange = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Convection coefficient h you actually get</text>
  <rect x="145" y="44" width="41" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <rect x="186" y="74" width="58" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <rect x="203" y="104" width="76" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <rect x="261" y="134" width="86" height="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <rect x="302" y="164" width="93" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <rect x="319" y="194" width="76" height="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.2"/>
  <text x="100" y="55" text-anchor="end" fill="#334155" font-size="11">still air</text>
  <text x="100" y="85" text-anchor="end" fill="#334155" font-size="11">fan-forced air</text>
  <text x="100" y="115" text-anchor="end" fill="#334155" font-size="11">still water</text>
  <text x="100" y="145" text-anchor="end" fill="#334155" font-size="11">pumped water</text>
  <text x="100" y="175" text-anchor="end" fill="#dc2626" font-size="11">nucleate boiling</text>
  <text x="100" y="205" text-anchor="end" fill="#dc2626" font-size="11">condensing steam</text>
  <text x="166" y="41" text-anchor="middle" fill="#64748b" font-size="10">5 &ndash; 25</text>
  <text x="215" y="71" text-anchor="middle" fill="#64748b" font-size="10">25 &ndash; 250</text>
  <text x="241" y="101" text-anchor="middle" fill="#64748b" font-size="10">50 &ndash; 1 000</text>
  <text x="304" y="131" text-anchor="middle" fill="#64748b" font-size="10">500 &ndash; 15 000</text>
  <text x="348" y="161" text-anchor="middle" fill="#64748b" font-size="10">2 500 &ndash; 100 000</text>
  <text x="357" y="191" text-anchor="middle" fill="#64748b" font-size="10">5 000 &ndash; 100 000</text>
  <line x1="105" y1="224" x2="405" y2="224" stroke="#64748b" stroke-width="1.5"/>
  <line x1="105" y1="224" x2="105" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="163" y1="224" x2="163" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="221" y1="224" x2="221" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="279" y1="224" x2="279" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="337" y1="224" x2="337" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="395" y1="224" x2="395" y2="230" stroke="#64748b" stroke-width="1"/>
  <text x="105" y="244" text-anchor="middle" fill="#64748b" font-size="10">1</text>
  <text x="163" y="244" text-anchor="middle" fill="#64748b" font-size="10">10</text>
  <text x="221" y="244" text-anchor="middle" fill="#64748b" font-size="10">100</text>
  <text x="279" y="244" text-anchor="middle" fill="#64748b" font-size="10">1 000</text>
  <text x="337" y="244" text-anchor="middle" fill="#64748b" font-size="10">10 000</text>
  <text x="395" y="244" text-anchor="middle" fill="#64748b" font-size="10">100 000</text>
  <text x="250" y="262" text-anchor="middle" fill="#334155" font-size="11">h (W/m&sup2;&middot;K), logarithmic scale</text>
</svg>`;

const figFinProfile = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Fin temperature profile and fin efficiency</text>
  <line x1="70" y1="212" x2="352" y2="212" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht5-ax)"/>
  <line x1="70" y1="212" x2="70" y2="44" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht5-ax)"/>
  <line x1="70" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="46" y="204" text-anchor="middle" fill="#64748b" font-size="11">T<tspan baseline-shift="sub" font-size="8">&infin;</tspan></text>
  <text x="46" y="64" text-anchor="middle" fill="#64748b" font-size="11">T<tspan baseline-shift="sub" font-size="8">b</tspan></text>
  <text x="70" y="230" text-anchor="middle" fill="#64748b" font-size="11">base</text>
  <text x="340" y="230" text-anchor="middle" fill="#64748b" font-size="11">tip</text>
  <polyline points="70,60.0 104,63.8 138,67.0 171,69.7 205,71.9 239,73.7 273,74.9 306,75.6 340,75.8" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <polyline points="70,60.0 104,81.4 138,98.7 171,112.4 205,122.9 239,130.8 273,136.3 306,139.4 340,140.5" fill="none" stroke="#334155" stroke-width="2.5"/>
  <polyline points="70,60.0 104,115.0 138,148.4 171,168.6 205,180.7 239,187.9 273,192.1 306,194.2 340,194.9" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="348" y="76" fill="#1d4ed8" font-size="11">mL 0.5 &middot; &eta; 0.92</text>
  <text x="348" y="141" fill="#334155" font-size="11">mL 1.5 &middot; &eta; 0.60</text>
  <text x="348" y="190" fill="#dc2626" font-size="11">mL 4.0 &middot; &eta; 0.25</text>
  <text x="230" y="246" text-anchor="middle" fill="#64748b" font-size="11">area added past mL &asymp; 1 sits near air temperature and earns little</text>
</svg>`;

const figFinArray = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht6-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ht6-air" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Fin array: thickness t, gap b, height L</text>
  <rect x="74" y="150" width="290" height="20" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
  <rect x="80" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="124" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="168" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="212" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="256" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="300" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="344" y="62" width="12" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <line x1="30" y1="80" x2="74" y2="80" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht6-air)"/>
  <line x1="30" y1="112" x2="74" y2="112" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht6-air)"/>
  <text x="30" y="66" fill="#1d4ed8" font-size="11">air in</text>
  <rect x="180" y="186" width="80" height="24" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="220" y="203" text-anchor="middle" fill="#334155" font-size="12">chip</text>
  <line x1="220" y1="186" x2="220" y2="174" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht6-heat)"/>
  <line x1="80" y1="50" x2="92" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="80" y1="46" x2="80" y2="54" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="46" x2="92" y2="54" stroke="#64748b" stroke-width="1"/>
  <text x="86" y="42" text-anchor="middle" fill="#64748b" font-size="11">t</text>
  <line x1="92" y1="50" x2="124" y2="50" stroke="#64748b" stroke-width="1"/>
  <line x1="124" y1="46" x2="124" y2="54" stroke="#64748b" stroke-width="1"/>
  <text x="108" y="42" text-anchor="middle" fill="#64748b" font-size="11">b</text>
  <line x1="386" y1="62" x2="386" y2="150" stroke="#64748b" stroke-width="1"/>
  <line x1="382" y1="62" x2="390" y2="62" stroke="#64748b" stroke-width="1"/>
  <line x1="382" y1="150" x2="390" y2="150" stroke="#64748b" stroke-width="1"/>
  <text x="398" y="110" fill="#64748b" font-size="11">L</text>
  <text x="230" y="236" text-anchor="middle" fill="#64748b" font-size="11">narrow gaps add area but merge boundary layers and kill h</text>
</svg>`;

const figHX = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht7-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="125" y="20" text-anchor="middle" font-weight="600" fill="#334155">Counterflow</text>
  <text x="335" y="20" text-anchor="middle" font-weight="600" fill="#334155">Parallel flow</text>
  <line x1="40" y1="200" x2="215" y2="200" stroke="#64748b" stroke-width="1.2"/>
  <line x1="40" y1="200" x2="40" y2="46" stroke="#64748b" stroke-width="1.2"/>
  <line x1="250" y1="200" x2="425" y2="200" stroke="#64748b" stroke-width="1.2"/>
  <line x1="250" y1="200" x2="250" y2="46" stroke="#64748b" stroke-width="1.2"/>
  <text x="28" y="62" text-anchor="middle" fill="#64748b" font-size="11">T</text>
  <text x="238" y="62" text-anchor="middle" fill="#64748b" font-size="11">T</text>
  <text x="125" y="216" text-anchor="middle" fill="#64748b" font-size="11">position along exchanger</text>
  <text x="335" y="216" text-anchor="middle" fill="#64748b" font-size="11">position along exchanger</text>
  <line x1="52" y1="60" x2="205" y2="138" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="52" y1="112" x2="205" y2="190" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="262" y1="60" x2="415" y2="118" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="262" y1="190" x2="415" y2="125" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="60" y="52" fill="#dc2626" font-size="11">hot 120</text>
  <text x="205" y="132" text-anchor="end" fill="#dc2626" font-size="11">60</text>
  <text x="60" y="106" fill="#1d4ed8" font-size="11">cold 80</text>
  <text x="205" y="184" text-anchor="end" fill="#1d4ed8" font-size="11">20</text>
  <text x="270" y="52" fill="#dc2626" font-size="11">hot 120</text>
  <text x="415" y="112" text-anchor="end" fill="#dc2626" font-size="11">75</text>
  <text x="270" y="186" fill="#1d4ed8" font-size="11">cold 20</text>
  <text x="415" y="145" text-anchor="end" fill="#1d4ed8" font-size="11">70</text>
  <line x1="52" y1="60" x2="52" y2="112" stroke="#64748b" stroke-width="1" marker-end="url(#ht7-flow)"/>
  <line x1="205" y1="138" x2="205" y2="190" stroke="#64748b" stroke-width="1" marker-end="url(#ht7-flow)"/>
  <text x="112" y="118" fill="#64748b" font-size="10">&Delta;T 40</text>
  <text x="166" y="152" fill="#64748b" font-size="10">&Delta;T 40</text>
  <line x1="262" y1="60" x2="262" y2="190" stroke="#64748b" stroke-width="1" marker-end="url(#ht7-flow)"/>
  <text x="286" y="126" fill="#64748b" font-size="10">&Delta;T 100</text>
  <text x="352" y="132" text-anchor="middle" fill="#64748b" font-size="10">&Delta;T &rarr; 5</text>
  <text x="125" y="236" text-anchor="middle" fill="#1d4ed8" font-size="10">cold out 80 &gt; hot out 60:</text>
  <text x="125" y="250" text-anchor="middle" fill="#1d4ed8" font-size="10">a temperature cross</text>
  <text x="335" y="236" text-anchor="middle" fill="#dc2626" font-size="10">outlets can only converge,</text>
  <text x="335" y="250" text-anchor="middle" fill="#dc2626" font-size="10">no cross is possible</text>
</svg>`;

const figBoiling = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Pool boiling curve for water at 1 atm</text>
  <line x1="60" y1="212" x2="424" y2="212" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht8-ax)"/>
  <line x1="60" y1="212" x2="60" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht8-ax)"/>
  <text x="240" y="250" text-anchor="middle" fill="#64748b" font-size="11">surface superheat &Delta;T (K), log scale</text>
  <text x="34" y="130" text-anchor="middle" fill="#64748b" font-size="11">q&Prime;</text>
  <path d="M60,210 C100,196 120,184 139,172 C160,152 195,120 227,94" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M227,94 C252,112 272,140 296,161" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6 4"/>
  <path d="M296,161 C325,146 365,120 400,98" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <circle cx="227" cy="94" r="4.5" fill="#dc2626"/>
  <circle cx="296" cy="161" r="4.5" fill="#1d4ed8"/>
  <text x="227" y="80" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="11">CHF &asymp; 1.2 MW/m&sup2;</text>
  <text x="316" y="176" fill="#64748b" font-size="11">Leidenfrost minimum</text>
  <text x="86" y="188" fill="#64748b" font-size="10">free</text>
  <text x="80" y="200" fill="#64748b" font-size="10">convection</text>
  <text x="150" y="120" fill="#64748b" font-size="10">nucleate</text>
  <text x="252" y="128" fill="#dc2626" font-size="10">transition</text>
  <text x="358" y="140" fill="#64748b" font-size="10">film boiling</text>
  <line x1="60" y1="212" x2="60" y2="218" stroke="#64748b" stroke-width="1"/>
  <line x1="173" y1="212" x2="173" y2="218" stroke="#64748b" stroke-width="1"/>
  <line x1="287" y1="212" x2="287" y2="218" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="212" x2="400" y2="218" stroke="#64748b" stroke-width="1"/>
  <text x="60" y="230" text-anchor="middle" fill="#64748b" font-size="10">1</text>
  <text x="173" y="230" text-anchor="middle" fill="#64748b" font-size="10">10</text>
  <text x="287" y="230" text-anchor="middle" fill="#64748b" font-size="10">100</text>
  <text x="400" y="230" text-anchor="middle" fill="#64748b" font-size="10">1000</text>
</svg>`;

const figLumped = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht9-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Lumped cooling: one time constant, valid only if Bi &lt; 0.1</text>
  <line x1="60" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht9-ax)"/>
  <line x1="60" y1="210" x2="60" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht9-ax)"/>
  <text x="404" y="228" fill="#64748b" font-size="11">time</text>
  <text x="30" y="44" fill="#64748b" font-size="11">T</text>
  <line x1="60" y1="180" x2="410" y2="180" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="416" y="184" fill="#64748b" font-size="11">T<tspan baseline-shift="sub" font-size="8">&infin;</tspan></text>
  <text x="34" y="64" fill="#64748b" font-size="11">T<tspan baseline-shift="sub" font-size="8">0</tspan></text>
  <polyline points="60,60 77,86.6 94,107.2 111,123.3 128,135.9 162,153.2 196,163.8 230,170.2 264,174.0 332,177.8 400,179.2" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="128" y1="210" x2="128" y2="135.9" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="135.9" x2="128" y2="135.9" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="128" y="226" text-anchor="middle" fill="#64748b" font-size="11">&tau;</text>
  <text x="146" y="128" fill="#1d4ed8" font-size="11">63% of the step is done at t = &tau;</text>
  <text x="230" y="246" text-anchor="middle" fill="#64748b" font-size="11">&tau; = &rho;Vc/(hA); about 3&tau; to sit within 5% of steady state</text>
</svg>`;

const figCritRadius = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Insulating a 3 mm wire: loss rises before it falls</text>
  <line x1="80" y1="210" x2="424" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht10-ax)"/>
  <line x1="80" y1="210" x2="80" y2="46" stroke="#64748b" stroke-width="1.5" marker-end="url(#ht10-ax)"/>
  <text x="250" y="246" text-anchor="middle" fill="#64748b" font-size="11">outer radius of insulation (mm)</text>
  <text x="46" y="128" text-anchor="middle" fill="#64748b" font-size="11">Q per m</text>
  <polyline points="91,160.0 102,129.8 113,109.8 124,97.1 135,89.2 146,84.4 157,81.5 168,79.9 179,79.1 190,78.9 201,79.1 212,79.5 223,80.1 234,80.8 245,81.5 256,82.3 267,83.1 278,84.0 289,84.8 300,85.6 311,86.4 322,87.2 333,88.0 344,88.8 355,89.5 366,90.2 377,90.9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="80" y1="160" x2="400" y2="160" stroke="#dc2626" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="330" y="154" fill="#dc2626" font-size="11">bare-wire loss</text>
  <line x1="190" y1="210" x2="190" y2="78.9" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <circle cx="190" cy="78.9" r="4.5" fill="#1d4ed8"/>
  <text x="190" y="226" text-anchor="middle" fill="#64748b" font-size="11">r<tspan baseline-shift="sub" font-size="8">crit</tspan> = k/h = 15</text>
  <text x="91" y="226" text-anchor="middle" fill="#64748b" font-size="11">1.5</text>
  <text x="200" y="68" fill="#1d4ed8" font-size="11">3&times; the bare loss at the peak</text>
  <text x="230" y="264" text-anchor="middle" fill="#64748b" font-size="11">added outer area beats added conduction until r = k/h</text>
</svg>`;

const figHeatPipe = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ht11-vap" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ht11-liq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Heat pipe: vapour out, liquid back through the wick</text>
  <rect x="60" y="66" width="340" height="88" fill="#fff" stroke="#334155" stroke-width="2"/>
  <rect x="60" y="66" width="340" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
  <rect x="60" y="138" width="340" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1"/>
  <text x="230" y="78" text-anchor="middle" fill="#64748b" font-size="10">wick</text>
  <text x="230" y="150" text-anchor="middle" fill="#64748b" font-size="10">wick</text>
  <line x1="120" y1="110" x2="330" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht11-vap)"/>
  <text x="225" y="102" text-anchor="middle" fill="#dc2626" font-size="11">vapour</text>
  <line x1="330" y1="146" x2="120" y2="146" stroke="#1d4ed8" stroke-width="2" marker-end="url(#ht11-liq)"/>
  <text x="225" y="168" text-anchor="middle" fill="#1d4ed8" font-size="11">liquid return, driven only by capillary pressure</text>
  <line x1="90" y1="196" x2="90" y2="162" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ht11-vap)"/>
  <line x1="370" y1="162" x2="370" y2="196" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ht11-liq)"/>
  <text x="90" y="212" text-anchor="middle" fill="#dc2626" font-size="11">heat in</text>
  <text x="370" y="212" text-anchor="middle" fill="#1d4ed8" font-size="11">heat out</text>
  <line x1="60" y1="52" x2="130" y2="52" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="52" x2="310" y2="52" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="52" x2="400" y2="52" stroke="#64748b" stroke-width="1"/>
  <text x="95" y="48" text-anchor="middle" fill="#64748b" font-size="10">evaporator</text>
  <text x="230" y="48" text-anchor="middle" fill="#64748b" font-size="10">adiabatic</text>
  <text x="365" y="48" text-anchor="middle" fill="#64748b" font-size="10">condenser</text>
  <text x="230" y="238" text-anchor="middle" fill="#64748b" font-size="11">tilt the evaporator above the condenser and capacity collapses</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Heat Transfer",
    intro: `<p>Heat-transfer interviews are not about memorising correlations. They test whether you can turn a physical package into a thermal circuit, put a defensible number on every resistance in it, find the one that dominates, and say what you would change. The three modes, conduction, convection, radiation, are just three ways of producing a resistance in K/W, and once they are in a network you reason about them exactly like resistors.</p>
<p>The single most valuable habit is number sense. A candidate who knows that still air gives h &asymp; 5&ndash;25 W/m&sup2;K, that a thermal grease joint is worth roughly 0.1&ndash;0.5 K/W, and that FR4 conducts about 1000&times; worse than copper will beat a candidate who can derive the Nusselt correlation but cannot say whether an answer is plausible.</p>
<figure class="fig">${figNetwork}<figcaption>Thermal networks make heat flow look like Ohm's law: Q = &Delta;T/R, and the same Q crosses every element of a series path.</figcaption></figure>`,
    sections: [
      {
        heading: "Conduction: plane walls, cylinders, and diffusivity",
        html: `<p>Steady one-dimensional conduction through a flat wall follows Fourier's law, which rearranges into a resistance:</p>
<p class="eq">Q = kA(T<sub>hot</sub> &minus; T<sub>cold</sub>)/L, &nbsp;&nbsp; R<sub>cond</sub> = L/(kA)</p>
<p>Radial conduction through a pipe wall or a wire's insulation is not the same formula, because the area grows with radius. Integrating 2&pi;rL as the flow area gives a logarithm:</p>
<p class="eq">R<sub>cyl</sub> = ln(r<sub>2</sub>/r<sub>1</sub>) / (2&pi;kL)</p>
<p>That growing area is why insulation on a small cylinder can <em>increase</em> heat loss. Adding thickness raises conduction resistance but also enlarges the convecting outer surface. The two effects balance at the critical radius:</p>
<p class="eq">r<sub>crit</sub> = k/h &nbsp;(cylinder), &nbsp;&nbsp; r<sub>crit</sub> = 2k/h &nbsp;(sphere)</p>
<figure class="fig">${figCritRadius}<figcaption>A 3 mm wire with PVC (k = 0.15) in still air (h = 10) has r<sub>crit</sub> = 15 mm, far outside the wire, so the first few millimetres of insulation make it run cooler by losing <em>more</em> heat.</figcaption></figure>
<p>You must also know conductivities by heart, because most bad thermal models come from a wrong k rather than wrong algebra:</p>
<table><thead><tr><th>Material</th><th>k (W/m&middot;K)</th><th>Where it bites</th></tr></thead><tbody>
<tr><td>Copper</td><td>400</td><td>spreaders, vias, heat-pipe walls</td></tr>
<tr><td>Aluminium</td><td>150&ndash;200</td><td>extruded sinks, chassis</td></tr>
<tr><td>Stainless 304</td><td>15</td><td>a thermal insulator wearing a metal costume</td></tr>
<tr><td>Thermal grease</td><td>1&ndash;5</td><td>only useful because the bond line is thin</td></tr>
<tr><td>FR4, through-plane</td><td>0.3</td><td>why boards need vias, not just copper pours</td></tr>
<tr><td>Still air</td><td>0.026</td><td>every unfilled gap you left in the stack</td></tr>
</tbody></table>
<p>Transient behaviour is set by thermal diffusivity, which compares how fast a material conducts heat with how much heat it must absorb to change temperature:</p>
<p class="eq">&alpha; = k/(&rho;c), &nbsp;&nbsp; diffusion time t &asymp; L&sup2;/&alpha;</p>
<p>Aluminium has &alpha; &asymp; 8.4 &times; 10<sup>&minus;5</sup> m&sup2;/s, so a 5 mm section equilibrates in a fraction of a second; a 5 mm polymer section takes minutes.</p>`,
      },
      {
        heading: "Convection and the h you actually get",
        html: `<p>Convection is bookkept with Newton's law of cooling:</p>
<p class="eq">Q = hA(T<sub>s</sub> &minus; T<sub>&infin;</sub>), &nbsp;&nbsp; R<sub>conv</sub> = 1/(hA)</p>
<p><strong>h is not a material property.</strong> It is the answer to a fluid-mechanics problem, and it moves by three orders of magnitude with velocity, geometry, orientation, fluid and phase. Quoting "h for air" without saying still or forced is the single most common error in a thermal review.</p>
<figure class="fig">${figHRange}<figcaption>Learn these bands. Most first-cut thermal answers only need the right decade.</figcaption></figure>
<div class="callout"><p><strong>Numbers to carry into the room.</strong> Still air 5&ndash;25, fan-forced air 25&ndash;250, still water 50&ndash;1000, pumped water 500&ndash;15 000, nucleate boiling 2 500&ndash;100 000, condensing steam 5 000&ndash;100 000 W/m&sup2;K. A small PCB in a sealed box sits at the bottom of the first band: 5&ndash;8, not 25.</p></div>
<p>Two things follow. <strong>A must be the wetted, flow-exposed area</strong>, not the total surface you can measure with callipers. A fin channel that the air bypasses contributes nothing. Second, T<sub>&infin;</sub> is the <em>local</em> fluid temperature, which inside an enclosure is not room temperature: air that has already crossed two hot boards arrives pre-heated, and the air-side energy balance sets that rise:</p>
<p class="eq">Q = m&#775; c<sub>p</sub> &Delta;T<sub>air</sub></p>
<p>For air at 1.2 kg/m&sup3;, roughly 1 kW needs 1.7 m&sup3;/min (about 60 CFM) for a 30 K rise. That converts a heat load straight into a fan size.</p>`,
      },
      {
        heading: "Radiation, view factors and surface selectivity",
        html: `<p>Radiation matters when temperatures are high, convection is weak, or there is no fluid at all:</p>
<p class="eq">Q = &epsilon;&sigma;A(T<sub>s</sub><sup>4</sup> &minus; T<sub>sur</sub><sup>4</sup>), &nbsp;&nbsp; &sigma; = 5.67 &times; 10<sup>&minus;8</sup> W/m&sup2;K<sup>4</sup></p>
<p>Temperatures are absolute. Putting Celsius into a fourth-power law is the classic common mistake, and it does not merely shift the answer, it changes it by a factor of tens.</p>
<div class="callout warn"><p>That equation has a hidden assumption: it is the <strong>small object in a large enclosure</strong> case, where the view factor F<sub>12</sub> = 1 and the surroundings behave as a blackbody at T<sub>sur</sub>. Between two comparable surfaces you need view factors and surface resistances instead.</p></div>
<p>For two large parallel plates the net flux uses the series surface resistances:</p>
<p class="eq">q&Prime; = &sigma;(T<sub>1</sub><sup>4</sup> &minus; T<sub>2</sub><sup>4</sup>) / (1/&epsilon;<sub>1</sub> + 1/&epsilon;<sub>2</sub> &minus; 1)</p>
<p>Slide a low-emissivity shield between them and you add two more such terms in series; one &epsilon; = 0.05 shield between two &epsilon; = 0.8 plates cuts the flux by roughly 27&times;. Stack twenty of them and you have multilayer insulation.</p>
<p>Around room temperature radiation is easy to linearise, which lets it enter the resistance network directly:</p>
<p class="eq">h<sub>rad</sub> &asymp; 4&epsilon;&sigma;T<sup>3</sup></p>
<p>At 325 K with &epsilon; = 0.9 that is about 7 W/m&sup2;K, comparable to natural convection, so a black-anodised enclosure in still air roughly doubles its heat rejection. A polished aluminium one does not.</p>
<p>Finally, emissivity is <strong>wavelength dependent</strong>. A black-anodised box outdoors absorbs most of a 1000 W/m&sup2; solar load because its solar absorptivity is high. What you want outdoors is a selective surface: low &alpha; in the visible, high &epsilon; in the infrared, which is why white paint, not black, goes on the outside of a roadside cabinet.</p>`,
      },
      {
        heading: "Building the network: series, parallel, contact, spreading",
        html: `<p>Series elements add resistance; parallel paths add <em>conductance</em>. Almost every real package rejects heat through several paths at once, and treating them as a chain is the mistake that produces the classic 2&times; error.</p>
<p class="eq">R<sub>series</sub> = &Sigma;R<sub>i</sub>, &nbsp;&nbsp; 1/R<sub>par</sub> = &Sigma;(1/R<sub>i</sub>)</p>
<figure class="fig">${figParallel}<figcaption>A device rejects heat through the sink, the board copper and the case at the same time. The sink carries most of it, but the other two are worth 26% of the total conductance.</figcaption></figure>
<p><strong>Contact resistance</strong> is a real network element, not a fudge factor. Two nominally flat metal surfaces touch only at asperities, so the joint is characterised by an area-normalised resistance:</p>
<p class="eq">R<sub>c</sub> = R&Prime;<sub>c</sub>/A</p>
<p>Bare bolted aluminium at moderate pressure runs R&Prime;<sub>c</sub> &asymp; 1&ndash;5 &times; 10<sup>&minus;4</sup> m&sup2;K/W; doubling the contact pressure roughly halves it. Filling the gap with grease, a phase-change film or a gap pad replaces air (k = 0.026) with something 40&ndash;200&times; better. Note that with a thermal interface material the <em>bond line</em>, not the bulk k, usually wins: a 0.05 mm grease line at k = 1 beats a 0.20 mm pad at k = 3.</p>
<p><strong>Spreading resistance</strong> appears whenever a small source feeds a large plate. The one-dimensional L/kA model has two obvious bounds, using the die footprint (far too pessimistic) and using the full base area (far too optimistic), and the truth sits between them, usually much closer to the optimistic bound but never at it. If a model underpredicts a measured hot spot directly over the die while the fin tips are cold, spreading is the missing term.</p>
<figure class="fig">${figLadder}<figcaption>The junction-to-ambient ladder every electronics thermal budget is built from, with the board path drawn where it belongs: in parallel.</figcaption></figure>`,
      },
      {
        heading: "Dimensionless groups and where h comes from",
        html: `<p>Correlations are how a geometry and a flow become an h. You do not need to memorise many, but you must know what each group compares and roughly where the thresholds sit.</p>
<table><thead><tr><th>Group</th><th>Definition</th><th>What it decides</th></tr></thead><tbody>
<tr><td>Reynolds Re</td><td>&rho;VL/&mu;</td><td>laminar or turbulent; flat plate transitions near 5 &times; 10<sup>5</sup></td></tr>
<tr><td>Prandtl Pr</td><td>&nu;/&alpha;</td><td>relative thickness of velocity and thermal layers</td></tr>
<tr><td>Nusselt Nu</td><td>hL/k</td><td>the dimensionless answer: h = Nu&middot;k/L</td></tr>
<tr><td>Rayleigh Ra</td><td>g&beta;&Delta;TL&sup3;/(&nu;&alpha;)</td><td>natural convection strength; turbulent above ~10<sup>9</sup></td></tr>
<tr><td>Biot Bi</td><td>hL<sub>c</sub>/k</td><td>whether the solid can be treated as one temperature</td></tr>
<tr><td>Fourier Fo</td><td>&alpha;t/L&sup2;</td><td>how far a transient has progressed</td></tr>
</tbody></table>
<p>Pr is 0.7 for air, about 7 for water and 0.01 for liquid sodium. Since &delta;<sub>t</sub>/&delta; &asymp; Pr<sup>&minus;1/3</sup>, the thermal layer in sodium is far <em>thicker</em> than the velocity layer, and in water it is thinner. Three workhorse correlations:</p>
<p class="eq">Flat plate, laminar: Nu = 0.664 Re<sup>1/2</sup> Pr<sup>1/3</sup></p>
<p class="eq">Flat plate, turbulent: Nu = 0.037 Re<sup>0.8</sup> Pr<sup>1/3</sup></p>
<p class="eq">Vertical plate, natural: Nu = 0.59 Ra<sup>1/4</sup> &nbsp;(10<sup>4</sup> &lt; Ra &lt; 10<sup>9</sup>)</p>
<p>The turbulent exponent is the practical one to remember: h &prop; V<sup>0.8</sup>. Doubling fan speed buys only 2<sup>0.8</sup> = 1.74&times; the h, while fan power goes as V&sup3;, eight times the power and roughly 9 dB more noise for a 74% improvement. That trade is why more fan is usually the last lever, not the first.</p>`,
      },
      {
        heading: "Fins, fin efficiency and fin arrays",
        html: `<p>A fin only helps if heat can conduct out to the area it adds. For a straight fin of thickness t and length L with convection h on both faces, the fin parameter and efficiency are:</p>
<p class="eq">m = &radic;(hP/kA<sub>c</sub>) &asymp; &radic;(2h/kt), &nbsp;&nbsp; &eta;<sub>f</sub> = tanh(mL)/(mL)</p>
<figure class="fig">${figFinProfile}<figcaption>Temperature along the fin for three values of mL. Past mL &asymp; 1 the added length is nearly at air temperature and contributes almost nothing.</figcaption></figure>
<p>Use the corrected length L<sub>c</sub> = L + t/2 to account for tip convection. As a design rule, mL &asymp; 1 is the sweet spot: &eta;<sub>f</sub> &asymp; 0.76 and you are not paying for metal that does nothing. An aluminium fin 25 mm long and 1.5 mm thick in 40 W/m&sup2;K air has m = 17.2 m<sup>&minus;1</sup>, mL = 0.43 and &eta;<sub>f</sub> = 0.94, comfortably efficient, and a hint that this fin could afford to be longer or thinner.</p>
<p>A whole heat sink is scored by overall surface efficiency, which weights the fin area by &eta;<sub>f</sub> and leaves the exposed base at full effectiveness:</p>
<p class="eq">&eta;<sub>o</sub> = 1 &minus; (A<sub>f</sub>/A<sub>t</sub>)(1 &minus; &eta;<sub>f</sub>), &nbsp;&nbsp; R<sub>sink</sub> = 1/(&eta;<sub>o</sub> h A<sub>t</sub>)</p>
<figure class="fig">${figFinArray}<figcaption>Fin count is a compromise between area and airflow: halve the gap and you double the area but choke the channel.</figcaption></figure>
<p>Adding fins can make a sink <em>worse</em>. It happens when the gap gets so narrow that boundary layers merge and h collapses; when the extra pressure drop pushes a fan back along its curve so the flow rate falls; when the fin material is low-k so &eta;<sub>f</sub> is already poor; and when the channels foul with dust. In natural convection the optimum gap is a real number, typically 6&ndash;10 mm for a 50&ndash;100 mm tall sink, far wider than the 2 mm spacing that works under a fan.</p>`,
      },
      {
        heading: "Heat exchangers: LMTD and effectiveness-NTU",
        html: `<p>When both fluids change temperature, the driving &Delta;T varies along the exchanger, so you cannot use an arithmetic mean. Integrating gives the log-mean:</p>
<p class="eq">Q = UA &middot; &Delta;T<sub>lm</sub>, &nbsp;&nbsp; &Delta;T<sub>lm</sub> = (&Delta;T<sub>1</sub> &minus; &Delta;T<sub>2</sub>) / ln(&Delta;T<sub>1</sub>/&Delta;T<sub>2</sub>)</p>
<p>U comes from the same network logic, area-normalised:</p>
<p class="eq">1/U = 1/h<sub>i</sub> + L/k + R&Prime;<sub>fouling</sub> + 1/h<sub>o</sub></p>
<figure class="fig">${figHX}<figcaption>Counterflow holds a nearly constant &Delta;T and can push the cold outlet above the hot outlet. Parallel flow cannot: its outlets can only converge.</figcaption></figure>
<p>That last point, the <strong>temperature cross</strong>, is the classic screening question. In parallel flow both streams march toward the same mixed temperature, so T<sub>c,out</sub> &lt; T<sub>h,out</sub> always. Only counterflow (or enough counterflow-like passes with an F correction factor below 1) can cross them.</p>
<p>When you do not know the outlet temperatures, LMTD forces iteration; effectiveness-NTU does not. Define the capacity rates C = m&#775;c<sub>p</sub>, take C<sub>min</sub> and C<sub>r</sub> = C<sub>min</sub>/C<sub>max</sub>:</p>
<p class="eq">NTU = UA/C<sub>min</sub>, &nbsp;&nbsp; Q = &epsilon; C<sub>min</sub>(T<sub>h,in</sub> &minus; T<sub>c,in</sub>)</p>
<p class="eq">Counterflow: &epsilon; = [1 &minus; e<sup>&minus;NTU(1&minus;C<sub>r</sub>)</sup>] / [1 &minus; C<sub>r</sub>e<sup>&minus;NTU(1&minus;C<sub>r</sub>)</sup>]</p>
<p>The shape of that curve is the design lesson: &epsilon; climbs steeply to NTU &asymp; 2, then flattens. Going from NTU 1 to 2 is worth a lot of duty; going from 3 to 6 doubles the hardware for a few percent. And if doubling the flow on one side barely changes duty, that side was never the controlling resistance, look at the other film, or at fouling.</p>`,
      },
      {
        heading: "Boiling, condensation, PCM and heat pipes",
        html: `<p>Phase change moves enormous heat flux at small &Delta;T, which is why it appears in every high-power thermal solution. It also has a cliff.</p>
<figure class="fig">${figBoiling}<figcaption>Free convection, nucleate boiling, the critical heat flux peak, transition, and film boiling. Power devices live in nucleate boiling with margin to CHF.</figcaption></figure>
<p>In nucleate boiling, bubbles grow and depart while liquid rewets the surface, and the effective h is enormous. At the <strong>critical heat flux</strong> (roughly 1.2 MW/m&sup2; for water at 1 atm) vapour blankets the surface, liquid contact fails, and the surface temperature jumps by hundreds of kelvin for a tiny increase in heat input. Anything power-controlled rather than temperature-controlled destroys itself at that point, so immersion-cooled designs are typically sized for 50&ndash;70% of CHF.</p>
<p>A <strong>phase-change material</strong> buffers a pulse rather than rejecting heat: paraffin absorbs ~200 kJ/kg of latent heat near its melt point, clamping temperature during a burst. It is a capacitor, not a resistor; the energy still has to leave during the off period, and a PCM that never fully re-freezes stops helping on the second cycle.</p>
<figure class="fig">${figHeatPipe}<figcaption>A heat pipe is an evaporator, a vapour core, a condenser and a wick that must pump the condensate back.</figcaption></figure>
<p>A <strong>heat pipe</strong> moves 30&ndash;100 W over 200 mm at 0.1&ndash;0.2 K/W in a 6 mm tube. The equivalent solid copper would need a cross-section of order 0.2/(400 &times; 0.15) = 3.3 &times; 10<sup>&minus;3</sup> m&sup2;, i.e. 33 cm&sup2;, which is why heat pipes exist. The catch is that the liquid return is driven only by capillary pressure in the wick, so exceeding the capillary limit dries out the evaporator and the "effective conductivity" collapses without warning. Mounting the evaporator above the condenser makes gravity fight the wick and can halve the capacity; sub-freezing start-up and flattening the pipe below its design thickness do similar damage. Treat a quoted "effective k = 5000 W/m&middot;K" as a rating at one orientation, one power and one temperature.</p>`,
      },
      {
        heading: "Electronics thermal design, end to end",
        html: `<p>Almost every electronics thermal problem is one budget:</p>
<p class="eq">T<sub>j</sub> = T<sub>ambient</sub> + Q(R<sub>&theta;JC</sub> + R<sub>TIM</sub> + R<sub>SA</sub>)</p>
<p>Each term has a different provenance and a different uncertainty. R<sub>&theta;JC</sub> comes from the datasheet and <strong>stops at the case</strong>. It does not include your interface material, so budgeting the datasheet number from junction to sink silently loses 0.2&ndash;0.5 K/W. R<sub>&theta;JA</sub> is worse: it is measured on a JEDEC 2s2p test board in a still-air chamber, and your two-layer board in a sealed enclosure will not reproduce it. Measuring 68 K/W against a datasheet 40 K/W usually means the board, not the part.</p>
<div class="callout"><p><strong>Where the copper goes.</strong> FR4 conducts 0.3 W/m&middot;K through thickness, so a QFN's thermal pad reaches the inner planes only through vias. A 0.30 mm via with 25 &mu;m plating through 1.6 mm of FR4 is about 185 K/W on its own; you need roughly 38 of them in parallel to get under 5 K/W. Via count, not copper pour area, is what moves that number.</p></div>
<p>Two effects the model usually forgets. <strong>Altitude</strong>: at 3000 m the air density is about 70% of sea level, so for the same fan (which moves nearly the same volumetric flow) both the mass flow and h drop, and the m&#775;c<sub>p</sub>&Delta;T budget shrinks with them, hence the derating curve on every industrial supply. <strong>Thermal runaway</strong>: if device losses rise with junction temperature at a rate dP/dT, the loop gain around the thermal path is</p>
<p class="eq">G = (dP/dT) &middot; R<sub>&theta;JA</sub>, &nbsp;&nbsp; stable only while G &lt; 1</p>
<p>A MOSFET with dP/dT = 0.4 W/K on a 2.0 K/W path has G = 0.8: stable, but every kelvin of ambient becomes 1/(1&minus;G) = 5 K at the junction. That design runs away at R<sub>&theta;JA</sub> = 2.5 K/W, which a dusty filter can easily produce.</p>`,
      },
      {
        heading: "Transient response and thermal mass",
        html: `<p>If internal conduction is fast compared with surface convection, the part has essentially one temperature and follows a single exponential. The admission ticket is the Biot number:</p>
<p class="eq">Bi = hL<sub>c</sub>/k &lt; 0.1, &nbsp;&nbsp; L<sub>c</sub> = V/A<sub>s</sub></p>
<p class="eq">(T &minus; T<sub>&infin;</sub>)/(T<sub>0</sub> &minus; T<sub>&infin;</sub>) = e<sup>&minus;t/&tau;</sup>, &nbsp;&nbsp; &tau; = &rho;Vc/(hA)</p>
<figure class="fig">${figLumped}<figcaption>One time constant covers 63% of the step; about 3&tau; gets within 5% of steady state.</figcaption></figure>
<p>Read &tau; = &rho;Vc/(hA) as capacitance over conductance, exactly like an RC circuit: R = 1/(hA) in K/W, C = &rho;Vc in J/K, &tau; = RC. That decomposition tells you which lever to pull. <strong>For a steady load, R sets the temperature and C is irrelevant. For a short pulse, C sets the temperature and R is irrelevant.</strong></p>
<p>Take a 30 W device that runs in 10 s bursts every 5 minutes on a sink with R = 4 K/W and &tau; = 400 s. Average power is 1 W, so the steady rise is only 4 K. The per-burst rise is set by the mass: C = &tau;/R = 100 J/K, so &Delta;T &asymp; Qt/C = 300/100 = 3 K. Sizing that sink for 30 W steady would be a 120 K design error in the wrong direction. You would buy fins you do not need and no extra mass, which is the thing that actually holds the peak down.</p>
<p>When Bi &gt; 0.1 the lumped model is invalid and gradients matter: use a multi-node model, a Heisler chart, or a semi-infinite solution with the diffusion length &radic;(&alpha;t). And remember the measurement side of transients: a thermocouple bead with its own mass and a wire heat leak will read a small hot spot low, often by 10&ndash;20 K.</p>`,
      },
    ],
    equations: [
      { name: "Conduction, plane wall", formula: "<p>Q = kA&Delta;T/L, &nbsp; R<sub>cond</sub> = L/(kA)</p>", note: "Steady, one-dimensional, constant k. R in K/W: shorter path, bigger area and higher k all lower it." },
      { name: "Conduction, cylindrical shell", formula: "<p>R<sub>cyl</sub> = ln(r<sub>2</sub>/r<sub>1</sub>)/(2&pi;kL)</p>", note: "Radial conduction through pipe walls and wire insulation. The logarithm comes from the flow area 2&pi;rL growing with radius." },
      { name: "Critical radius of insulation", formula: "<p>r<sub>crit</sub> = k/h</p>", note: "Below r<sub>crit</sub> a cylinder loses more heat as insulation is added, because outer area grows faster than conduction resistance." },
      { name: "Convection", formula: "<p>Q = hA(T<sub>s</sub> &minus; T<sub>&infin;</sub>), &nbsp; R<sub>conv</sub> = 1/(hA)</p>", note: "A is the wetted, flow-exposed area. h is a flow result, not a material property: 5&ndash;25 still air, 25&ndash;250 forced air." },
      { name: "Radiation to large surroundings", formula: "<p>Q = &epsilon;&sigma;A(T<sub>s</sub><sup>4</sup> &minus; T<sub>sur</sub><sup>4</sup>)</p>", note: "Absolute temperatures only, and it assumes view factor F<sub>12</sub> = 1 (small object inside a big enclosure)." },
      { name: "Linearised radiation coefficient", formula: "<p>h<sub>rad</sub> &asymp; 4&epsilon;&sigma;T<sup>3</sup></p>", note: "Lets radiation join the resistance network. About 7 W/m&sup2;K at 325 K with &epsilon; = 0.9, on par with natural convection." },
      { name: "Parallel radiation plates and shields", formula: "<p>q&Prime; = &sigma;(T<sub>1</sub><sup>4</sup> &minus; T<sub>2</sub><sup>4</sup>)/(1/&epsilon;<sub>1</sub> + 1/&epsilon;<sub>2</sub> &minus; 1)</p>", note: "Each shield inserts two more surface-resistance terms in series. One &epsilon; = 0.05 shield cuts the flux ~27&times;." },
      { name: "Series and parallel networks", formula: "<p>R<sub>series</sub> = &Sigma;R<sub>i</sub>, &nbsp; 1/R<sub>par</sub> = &Sigma;(1/R<sub>i</sub>)</p>", note: "Sink, board and case paths are in parallel. Adding them as if in series is a routine factor-of-two error." },
      { name: "Contact / interface resistance", formula: "<p>R<sub>c</sub> = R&Prime;<sub>c</sub>/A</p>", note: "Bare bolted aluminium R&Prime;<sub>c</sub> &asymp; 1&ndash;5 &times; 10<sup>&minus;4</sup> m&sup2;K/W; doubling contact pressure roughly halves it." },
      { name: "Fin parameter and fin efficiency", formula: "<p>m = &radic;(2h/kt), &nbsp; &eta;<sub>f</sub> = tanh(mL)/(mL)</p>", note: "Use L<sub>c</sub> = L + t/2 for a tip-convecting fin. mL &asymp; 1 is the practical sweet spot (&eta;<sub>f</sub> &asymp; 0.76)." },
      { name: "Overall surface efficiency", formula: "<p>&eta;<sub>o</sub> = 1 &minus; (A<sub>f</sub>/A<sub>t</sub>)(1 &minus; &eta;<sub>f</sub>), &nbsp; R<sub>sink</sub> = 1/(&eta;<sub>o</sub>hA<sub>t</sub>)</p>", note: "Weights the fin area by its efficiency and keeps the exposed base at full value." },
      { name: "Heat exchanger, LMTD form", formula: "<p>Q = UA&Delta;T<sub>lm</sub>, &nbsp; &Delta;T<sub>lm</sub> = (&Delta;T<sub>1</sub> &minus; &Delta;T<sub>2</sub>)/ln(&Delta;T<sub>1</sub>/&Delta;T<sub>2</sub>)</p>", note: "1/U = 1/h<sub>i</sub> + L/k + R&Prime;<sub>f</sub> + 1/h<sub>o</sub>. Use an F factor below 1 for multipass shells." },
      { name: "Effectiveness-NTU", formula: "<p>NTU = UA/C<sub>min</sub>, &nbsp; Q = &epsilon;C<sub>min</sub>(T<sub>h,in</sub> &minus; T<sub>c,in</sub>)</p>", note: "Avoids iterating when outlet temperatures are unknown. &epsilon; flattens hard above NTU &asymp; 2&ndash;3." },
      { name: "Biot number and lumped time constant", formula: "<p>Bi = hL<sub>c</sub>/k, &nbsp; &tau; = &rho;Vc/(hA) = RC</p>", note: "Bi &lt; 0.1 licenses a one-temperature model. 3&tau; puts you within 5% of steady state." },
      { name: "Thermal diffusivity and Fourier number", formula: "<p>&alpha; = k/(&rho;c), &nbsp; Fo = &alpha;t/L&sup2;</p>", note: "&alpha; sets how fast a disturbance travels; t &asymp; L&sup2;/&alpha; is the diffusion time. Aluminium 8.4 &times; 10<sup>&minus;5</sup> m&sup2;/s." },
      { name: "Airflow energy balance", formula: "<p>Q = m&#775;c<sub>p</sub>&Delta;T<sub>air</sub></p>", note: "Turns a heat load into a fan size. Air c<sub>p</sub> = 1005 J/kg&middot;K; the coolant warms up, so T<sub>&infin;</sub> downstream is not room temperature." },
      { name: "Thermal runaway stability", formula: "<p>G = (dP/dT)&middot;R<sub>&theta;JA</sub> &lt; 1</p>", note: "Loop gain of the temperature-dependent-loss feedback. Ambient rises are amplified by 1/(1 &minus; G)." },
    ],
    interviewTips: [
      "Draw the network before you calculate, and mark which paths are parallel. Sink, board and case almost never form a single chain.",
      "Carry h by heart: still air 5-25, forced air 25-250, still water 50-1000, pumped water 500-15 000, boiling and condensing far above. Most first-cut answers only need the right decade.",
      "Find the dominant resistance and say what you would change about it. Improving a 0.02 K/W term next to a 6 K/W term is the classic wrong answer.",
      "Radiation and transient ratios use kelvin. Celsius in a fourth-power law is the mistake that gets made most often.",
      "Check Biot before going lumped, and ask whether the load is steady or pulsed: steady loads are a resistance problem, pulses are a thermal-mass problem.",
      "State the assumption behind every number you quote - datasheet R_thetaJC stops at the case, R_thetaJA assumes a JEDEC board, and a heat-pipe rating assumes one orientation.",
      "Finish with a check: does the predicted temperature rise scale sensibly with power, and would a 20% error in h change your decision?",
    ],
  },
  questions: [
    {
      id: "heat-transfer-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A wall has k = 200 W/m&middot;K, area A = 0.001 m<sup>2</sup>, thickness L = 0.10 m, and &Delta;T = 10 K across it. What steady conduction heat rate flows, in W?</p>`,
      answer: 20,
      unit: "W",
      explanation: `<p class="eq">Q = kA&Delta;T/L = 200(0.001)(10)/0.10 = <strong>20 W</strong></p><p>Or as a resistance: R = L/(kA) = 0.5 K/W, and Q = 10/0.5 = 20 W.</p><p>The interesting part is what else sits in series. A 0.1 mm unfilled epoxy bond line at k &asymp; 0.2 W/m&middot;K over the same area is also 0.5 K/W, identical to 100 mm of this metal. An invisible glue line doubles the total.</p>`,
    },
    {
      id: "heat-transfer-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A plate in air has h = 10 W/m<sup>2</sup>&middot;K, exposed area A = 0.50 m<sup>2</sup>, and a surface-to-air temperature difference of 30 K. Estimate the convective heat transfer in W.</p>`,
      answer: 150,
      unit: "W",
      explanation: `<p class="eq">Q = hA(T<sub>s</sub> &minus; T<sub>&infin;</sub>) = 10(0.50)(30) = <strong>150 W</strong></p><p>Units check: W/m<sup>2</sup>K &times; m<sup>2</sup> &times; K = W. An h of 10 is a natural-convection value, so this is a passive plate.</p><p>Two ways to overstate it: counting area the air never touches, since a fin channel the flow bypasses transfers nothing, and treating h as a property of air rather than of the flow. Put a fan on it and h moves to 40&ndash;60.</p>`,
    },
    {
      id: "heat-transfer-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You need first-cut convection coefficients before any CFD exists. Which set of h values, in W/m<sup>2</sup>&middot;K, has the right order of magnitude for still air, fan-forced air, pumped water and nucleate boiling?</p>`,
      choices: [
        "still air 50, forced air 500, pumped water 5 000, boiling 50 000",
        "still air 0.03, forced air 0.3, pumped water 0.6, boiling 5",
        "still air 8, forced air 80, pumped water 4 000, boiling 20 000",
        "still air 8, forced air 25, pumped water 60, boiling 200",
      ],
      answer: 2,
      explanation: `<p>The bands every thermal engineer carries: still air 5&ndash;25, fan-forced air 25&ndash;250, still water 50&ndash;1000, pumped water 500&ndash;15 000, nucleate boiling 2 500&ndash;100 000, condensing steam 5 000&ndash;100 000 W/m<sup>2</sup>&middot;K. Only the third set lands in those bands.</p><p>The first set is about 6&times; the right answer on both air entries and sits a factor of 2 above the top of each band. Still air is never 50. The second set is the thermal <em>conductivity</em> of air (0.026) and water (0.6) in place of h, a genuine and common confusion. The fourth set compresses five decades into one, which would make water cooling pointless.</p><p>The reason this matters: with A = 0.05 m<sup>2</sup>, h = 8 gives R = 1/(hA) = 2.5 K/W, while h = 50 gives 0.40 K/W. At 20 W that is the difference between a 50 K rise and an 8 K rise, a pass and a fail from one assumed number.</p>`,
    },
    {
      id: "heat-transfer-q04",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A thermal path has two resistances in series: R<sub>1</sub> = 0.5 K/W and R<sub>2</sub> = 1.5 K/W. With &Delta;T = 60 K across the whole path, what heat rate flows?</p>`,
      figure: figNetwork,
      answer: 30,
      unit: "W",
      explanation: `<p>Same Q crosses every element of a series path, so resistances add:</p><p class="eq">Q = &Delta;T/(R<sub>1</sub> + R<sub>2</sub>) = 60/2.0 = <strong>30 W</strong></p><p>Then split the drop, because that is where the temperature actually goes. R<sub>1</sub> takes 15 K and R<sub>2</sub> takes 45 K. Three quarters of the budget sits in one element, so halving R<sub>2</sub> recovers 22.5 K where halving R<sub>1</sub> recovers 7.5 K.</p>`,
    },
    {
      id: "heat-transfer-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 10 mm aluminium spreader (k = 200 W/m&middot;K, A = 0.002 m<sup>2</sup>) contributes R = L/kA = 0.025 K/W. Copper would halve that. The air-side resistance on the same path is 6.0 K/W, the part runs 8 K too hot, and it dissipates 40 W. What does the copper upgrade buy?</p>`,
      choices: [
        "About 4 K: copper roughly halves the resistance of the whole path.",
        "About 0.5 K: it removes 0.0125 K/W from a 6.03 K/W total.",
        "About 8 K: the spreader is what sets the junction temperature here.",
        "Nothing: conduction and convection resistances do not add in series.",
      ],
      answer: 1,
      explanation: `<p>Total path resistance is 6.025 K/W. Copper halves only the 0.025 conduction term, saving 0.0125 K/W.</p><p class="eq">&Delta;T saved = Q &middot; &Delta;R = 40(0.0125) = <strong>0.5 K</strong></p><p>You need 8 K, so that is 6% of the requirement at several times the cost and three times the mass. The 8 K has to come off the 6.0 K/W air side, where you need &Delta;R = 0.20 K/W. Trivial there, impossible in the metal.</p>`,
    },
    {
      id: "heat-transfer-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 25 W package on a heat sink in still air measures: die-to-base 0.15 K/W, TIM 0.30 K/W, base spreading 0.20 K/W, sink-to-air 4.5 K/W. Which single change removes the most junction temperature?</p>`,
      figure: figFinArray,
      choices: [
        "Double the base thickness to spread heat further before the fins.",
        "Change the TIM to a grease with three times the conductivity.",
        "Machine the mating faces flatter to cut the mounting contact term.",
        "Add a small fan so the air side moves from natural to forced.",
      ],
      answer: 3,
      explanation: `<p>Total is 5.15 K/W, of which the air side is 4.5 K/W, 87% of the budget. At 25 W the whole rise is 129 K, and 113 K of it is sink-to-air.</p><p>Going from natural to forced convection typically moves h from ~8 to ~40 W/m<sup>2</sup>&middot;K, which drops the air-side term by roughly 4&times;, to about 1.1 K/W. That is 3.4 K/W &times; 25 W = <strong>85 K</strong> of junction temperature.</p><p>Now price the others honestly. A perfect TIM (0.30 &rarr; 0.10) buys 0.20 K/W = 5 K. Perfect flatness buys less, since the contact term is already inside the 0.30. Doubling the base thickness helps spreading a little and hurts it a little (more metal, longer path) and is worth a couple of kelvin at best. Every one of those is a legitimate engineering action. They are just aimed at 13% of the problem.</p><p>Rule: rank your resistances first, and only then choose a lever.</p>`,
    },
    {
      id: "heat-transfer-q07",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A small metal part has characteristic length L<sub>c</sub> = V/A<sub>s</sub> = 5 mm, sits in air with h = 20 W/m<sup>2</sup>&middot;K, and has k = 100 W/m&middot;K. What is its Biot number?</p>`,
      answer: 0.001,
      explanation: `<p>L<sub>c</sub> in metres, then</p><p class="eq">Bi = hL<sub>c</sub>/k = 20(0.005)/100 = <strong>0.001</strong></p><p>100&times; below the 0.1 guideline, so the part is effectively isothermal and a single-node model is safe.</p><p>Swap the metal for a plastic at k = 0.3 and Bi = 0.33. Biot is about the pairing of material and boundary condition, not about size.</p>`,
    },
    {
      id: "heat-transfer-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A 25 W device rejects heat through three parallel paths to the same ambient: the heat sink at 3.0 K/W, the board copper at 12 K/W, and the case and cable path at 20 K/W. What is the combined junction-to-ambient resistance, in K/W?</p>`,
      answer: 2.14,
      unit: "K/W",
      tolerance: 0.03,
      explanation: `<p>Parallel paths add <em>conductances</em>, not resistances:</p><p class="eq">1/R = 1/3.0 + 1/12 + 1/20 = 0.4667 W/K &nbsp;&rarr;&nbsp; R = <strong>2.14 K/W</strong></p><p>So the rise is 25(2.14) = 53.6 K, not 25(3.0) = 75 K. The two minor paths are worth 21 K.</p><p>Adding 3.0 + 12 + 20 = 35 K/W as if the paths were a chain gives 875 K of rise, wrong by a factor of sixteen.</p>`,
    },
    {
      id: "heat-transfer-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A surface radiates to large surroundings. Use &epsilon; = 0.8, A = 0.10 m<sup>2</sup>, T<sub>s</sub> = 400 K, T<sub>sur</sub> = 300 K, and &sigma; = 5.67&times;10<sup>&minus;8</sup> W/m<sup>2</sup>K<sup>4</sup>. Estimate the net radiation heat transfer in W.</p>`,
      answer: 79.4,
      unit: "W",
      tolerance: 0.04,
      explanation: `<p>Absolute temperatures throughout:</p><p class="eq">Q = &epsilon;&sigma;A(T<sub>s</sub><sup>4</sup> &minus; T<sub>sur</sub><sup>4</sup>) = 0.8(5.67&times;10<sup>&minus;8</sup>)(0.10)(1.75&times;10<sup>10</sup>) = <strong>79.4 W</strong></p><p>Celsius instead of kelvin gives 1.18 W, low by a factor of 67, because the fourth power punishes the offset enormously.</p><p>The formula also assumes a view factor of 1, meaning a small object inside a much larger enclosure. Between two comparable facing surfaces you need view factors and surface resistances instead.</p><p>Put it beside convection: 79.4 W over 0.10 m<sup>2</sup> and 100 K is an effective h of 7.9 W/m<sup>2</sup>&middot;K, the same size as natural convection. Which is exactly why hot enclosures get painted, not polished.</p>`,
    },
    {
      id: "heat-transfer-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A vendor offers the same extrusion with fins twice as long at the same thickness and spacing, and quotes double the surface area. Measured thermal resistance improves by only 15%. What is the main reason?</p>`,
      figure: figFinProfile,
      choices: [
        "Convection stops working on the outer half of each fin.",
        "The extra length raises pressure drop, which lowers the air's k.",
        "Fin efficiency falls: the added length sits near air temperature.",
        "Aluminium conductivity drops as the fin becomes longer and thinner.",
      ],
      answer: 2,
      explanation: `<p>The fin parameter m = &radic;(2h/kt) is unchanged by length, so doubling L doubles mL. Efficiency &eta;<sub>f</sub> = tanh(mL)/(mL) falls roughly like 1/(mL) once mL &gt; 1: going from mL = 1 (&eta; = 0.76) to mL = 2 (&eta; = 0.48) means the effective area &eta;<sub>f</sub>A<sub>f</sub> rises by only 2 &times; 0.48/0.76 = 1.26&times;, not 2&times;.</p><p>The outer half still convects (option A is false). It just has almost no temperature difference left to convect <em>with</em>, because the base-to-tip drop has eaten it. Air conductivity is a property and does not care about pressure drop, and aluminium's k does not depend on the shape you extrude it into.</p><p>The design response is to work on m rather than L: thicker fins, higher-k material, or accept the length and raise h so the whole array runs closer to base temperature. And check the flow. Twice the fin length is also twice the channel length and more pressure drop, which can push a fan back along its curve and give some of the 15% straight back.</p>`,
    },
    {
      id: "heat-transfer-q11",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A straight aluminium fin is L = 25 mm long and t = 1.5 mm thick, with k = 180 W/m&middot;K and h = 40 W/m<sup>2</sup>&middot;K on both faces. Using m = &radic;(2h/kt), compute the fin efficiency &eta;<sub>f</sub> = tanh(mL)/(mL).</p>`,
      figure: figFinProfile,
      answer: 0.943,
      tolerance: 0.03,
      explanation: `<p>For a wide straight fin the perimeter-to-area ratio P/A<sub>c</sub> reduces to 2/t, so:</p><p class="eq">m = &radic;(2h/kt) = &radic;(2 &times; 40 / (180 &times; 0.0015)) = &radic;(80/0.27) = &radic;296 = 17.2 m<sup>&minus;1</sup></p><p class="eq">mL = 17.2(0.025) = 0.430</p><p class="eq">&eta;<sub>f</sub> = tanh(0.430)/0.430 = 0.4056/0.430 = <strong>0.943</strong></p><p>Using the corrected length L<sub>c</sub> = L + t/2 = 25.75 mm gives mL<sub>c</sub> = 0.443 and &eta;<sub>f</sub> = 0.939, a half-percent change, so tip convection is not worth arguing about here.</p><p>What the number means: this fin is <em>too short</em>, not too long. At &eta; = 0.94 the metal is nearly isothermal, so you have room to make the fins longer or thinner and buy more area almost for free. The interesting follow-up is what happens under a fan: at h = 200 the same fin gives m = 38.5, mL = 0.96 and &eta;<sub>f</sub> = 0.77. Fin efficiency is not a property of the fin. It depends on the h you design to.</p>`,
    },
    {
      id: "heat-transfer-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>An IGBT dissipates 40 W. Its datasheet gives R<sub>&theta;JC</sub> = 0.35 K/W, the interface material adds 0.25 K/W, and the sink is rated 0.90 K/W to ambient. Maximum ambient is 55 &deg;C. What is the junction temperature, in &deg;C?</p>`,
      figure: figLadder,
      answer: 115,
      unit: "°C",
      tolerance: 0.03,
      explanation: `<p>Three resistances in series along the only significant path:</p><p class="eq">&Delta;T = Q(0.35 + 0.25 + 0.90) = 40(1.50) = 60 K</p><p class="eq">T<sub>j</sub> = 55 + 60 = <strong>115 &deg;C</strong></p><p>Against a typical 150 &deg;C limit that leaves 35 K, and the ambient at which you run out is 90 &deg;C.</p><p>Look at the split. The sink owns 36 K of the 60, the TIM 10 K, the die 14 K. Let the TIM degrade to 0.50 K/W over life, entirely normal for a pumped-out grease, and T<sub>j</sub> goes to 125 &deg;C. A third of the margin surrendered to a component nobody was tracking. And 0.90 K/W is a sink rating at some specific airflow; in a sealed enclosure it may be twice that.</p>`,
    },
    {
      id: "heat-transfer-q13",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Four IGBTs (40 W each, R<sub>&theta;JC</sub> = 0.35, R<sub>TIM</sub> = 0.25 K/W) are bolted to one shared heat sink rated R<sub>SA</sub> = 0.90 K/W, in a 55 &deg;C ambient. What junction temperature does each device reach, in &deg;C?</p>`,
      figure: figLadder,
      answer: 223,
      unit: "°C",
      tolerance: 0.03,
      explanation: `<p>The network is series-parallel, and the sink is the shared element. It carries the <em>total</em> load, while each device's own junction-to-case and interface resistances carry only its own 40 W.</p><p class="eq">Q<sub>sink</sub> = 4(40) = 160 W</p><p class="eq">T<sub>sink</sub> = 55 + 160(0.90) = 55 + 144 = 199 &deg;C</p><p class="eq">T<sub>j</sub> = 199 + 40(0.35 + 0.25) = 199 + 24 = <strong>223 &deg;C</strong></p><p>This design fails: 223 &deg;C is far above any silicon rating, and the part would go into thermal runaway long before reaching it. The seductive wrong answer is to reuse the single-device result of 115 &deg;C, which treats R<sub>SA</sub> as if each device had its own sink.</p><p>The fix has to attack the shared term. To hold T<sub>j</sub> at 150 &deg;C you need T<sub>sink</sub> = 126 &deg;C, so R<sub>SA</sub> &le; (126 &minus; 55)/160 = 0.44 K/W, roughly half the present sink, meaning forced air or liquid. Note also that in the shared case, halving <em>each device's</em> TIM resistance buys only 5 K, while halving the sink buys 72 K.</p>`,
    },
    {
      id: "heat-transfer-q14",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Rank these by thermal conductivity, highest first: FR4 through-plane, copper, thermal grease, still air, 304 stainless, aluminium. Which set of values is right, in W/m&middot;K?</p>`,
      choices: [
        "Cu 400, Al 200, steel 15, grease 3, FR4 0.3, air 0.026",
        "Cu 400, Al 200, grease 40, steel 15, FR4 3, air 0.26",
        "Al 400, Cu 200, steel 50, FR4 3, grease 0.5, air 0.026",
        "Cu 400, steel 200, Al 150, grease 3, air 0.3, FR4 0.026",
      ],
      answer: 0,
      explanation: `<p>Copper 400, aluminium 150&ndash;200, 304 stainless about 15, thermal grease 1&ndash;5, FR4 through-plane about 0.3, still air 0.026 W/m&middot;K.</p><p>Grease is the surprise. A thermal material sounds like a good conductor, but at k = 1&ndash;5 it is closer to plastic than to metal, roughly 100&times; worse than aluminium. It only works because you use it 50 &mu;m thick: R = L/kA punishes thickness, so the design rule is thin bond line first, high k second. That is also why a thick pad with impressive k loses to a thin grease line.</p><p>Two other numbers worth locking in. Stainless at 15 is a thermal insulator dressed as metal. A stainless standoff is a poor heat path. And FR4 at 0.3 through-plane is why a QFN's thermal pad needs a via array: 1.6 mm of board under an 8 &times; 8 mm pad is about 84 K/W of bare FR4, which no copper pour on the far side can rescue.</p>`,
    },
    {
      id: "heat-transfer-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Oil enters a heat exchanger at 120 &deg;C and leaves at 80 &deg;C; water enters at 20 &deg;C and leaves at 60 &deg;C. If the unit is piped in <em>parallel flow</em>, what is the log-mean temperature difference, in K?</p>`,
      figure: figHX,
      answer: 49.7,
      unit: "K",
      tolerance: 0.03,
      explanation: `<p>In parallel flow both streams enter at the same end, so the terminal differences are:</p><p class="eq">&Delta;T<sub>1</sub> = 120 &minus; 20 = 100 K, &nbsp; &Delta;T<sub>2</sub> = 80 &minus; 60 = 20 K</p><p class="eq">&Delta;T<sub>lm</sub> = (100 &minus; 20)/ln(100/20) = 80/1.609 = <strong>49.7 K</strong></p><p>Now do the counterflow version of the same duty: &Delta;T<sub>1</sub> = 120 &minus; 60 = 60 K and &Delta;T<sub>2</sub> = 80 &minus; 20 = 60 K, so &Delta;T<sub>lm</sub> = 60 K exactly. Counterflow gives 60/49.7 = 21% more driving force for identical inlet and outlet temperatures, and since UA = Q/&Delta;T<sub>lm</sub> it needs 49.7/60 = 17% less UA, less area, less metal, less cost, for the price of routing one pipe the other way round.</p><p>The arithmetic mean, (100 + 20)/2 = 60 K, overstates the parallel-flow driving force by 21% and would undersize the exchanger. LMTD and the arithmetic mean agree only when the two terminal differences are close; here they differ by 5&times;, which is exactly the case where the shortcut hurts.</p>`,
    },
    {
      id: "heat-transfer-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A process needs the cold stream to leave at 80 &deg;C while the hot stream leaves at 60 &deg;C. The streams enter at 120 &deg;C and 20 &deg;C. Which arrangement can do this?</p>`,
      figure: figHX,
      choices: [
        "Parallel flow, provided the area is increased far enough.",
        "Counterflow only; parallel flow cannot cross the temperatures.",
        "Either one, since the overall energy balance is satisfied.",
        "Neither: the second law forbids a cold outlet above 60 &deg;C.",
      ],
      answer: 1,
      explanation: `<p>This is a <strong>temperature cross</strong>: the cold outlet (80 &deg;C) is hotter than the hot outlet (60 &deg;C).</p><p>In parallel flow both fluids enter together and march toward a common mixed temperature, so the local &Delta;T shrinks monotonically toward zero and T<sub>c,out</sub> can only approach T<sub>h,out</sub> from below. Infinite area gets you to equality, never past it. In counterflow the cold outlet sits at the <em>hot inlet</em> end, where it is exposed to 120 &deg;C fluid, so leaving at 80 &deg;C is perfectly legal.</p><p>Nothing in the second law is violated: at every axial position the heat still flows hot-to-cold, which is the only requirement. The bookkeeping check is the counterflow LMTD, &Delta;T<sub>1</sub> = 120 &minus; 80 = 40 K and &Delta;T<sub>2</sub> = 60 &minus; 20 = 40 K, both positive.</p><p>The practical corollary: a 1-2 shell-and-tube unit has one shell pass with mixed flow, so it can only partly cross, which is exactly what the LMTD correction factor F penalises. If your design needs a cross, specify true counterflow or multiple shells in series.</p>`,
    },
    {
      id: "heat-transfer-q17",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 3 mm diameter wire runs in still air with h = 10 W/m<sup>2</sup>&middot;K. You are asked whether adding PVC insulation (k = 0.15 W/m&middot;K) will make it run cooler. What is the critical radius r<sub>crit</sub>, in mm?</p>`,
      answer: 15,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>For a cylinder, adding insulation raises conduction resistance as ln(r<sub>2</sub>/r<sub>1</sub>)/(2&pi;kL) but lowers convection resistance as 1/(h &middot; 2&pi;r<sub>2</sub>L) because the outer area grows. Differentiating the total and setting it to zero:</p><p class="eq">r<sub>crit</sub> = k/h = 0.15/10 = 0.015 m = <strong>15 mm</strong></p><p>The wire radius is only 1.5 mm, ten times smaller, so you are on the rising side of the curve. Check it directly, per metre of wire. Bare: R&prime; = 1/(10 &middot; 2&pi; &middot; 0.0015) = 10.6 m&middot;K/W. With 1 mm of PVC (r<sub>2</sub> = 2.5 mm): R&prime; = ln(2.5/1.5)/(2&pi; &middot; 0.15) + 1/(10 &middot; 2&pi; &middot; 0.0025) = 0.54 + 6.37 = 6.91 m&middot;K/W.</p><p>Resistance <em>fell</em> by 35%, so heat loss rises by 54% and the wire runs cooler with insulation on it. At r = r<sub>crit</sub> the loss peaks at about 3&times; the bare value, and because the logarithm grows so slowly you would need metres of PVC before the loss came back down to the bare-wire number.</p><p>The engineering conclusion depends on what you want. For current-carrying capacity this is good news. For a steam pipe it never applies: with k = 0.04 and h = 10, r<sub>crit</sub> = 4 mm, far inside any real pipe, so insulation always helps there.</p>`,
    },
    {
      id: "heat-transfer-q18",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A MOSFET's conduction losses rise by 0.4 W for every kelvin of junction temperature. Its junction-to-ambient path is 2.0 K/W today. Above what junction-to-ambient resistance does the design run away thermally, in K/W?</p>`,
      answer: 2.5,
      unit: "K/W",
      tolerance: 0.03,
      explanation: `<p>Treat it as a feedback loop. A junction temperature rise &Delta;T causes extra dissipation (dP/dT)&Delta;T, which causes a further rise R<sub>&theta;JA</sub>(dP/dT)&Delta;T. The loop gain is:</p><p class="eq">G = (dP/dT) &middot; R<sub>&theta;JA</sub></p><p>Runaway is G &ge; 1, so the critical resistance is:</p><p class="eq">R<sub>crit</sub> = 1/(dP/dT) = 1/0.4 = <strong>2.5 K/W</strong></p><p>At today's 2.0 K/W the gain is 0.8, stable, but only just. The steady-state amplification is 1/(1 &minus; G) = 5, so every kelvin of ambient rise becomes 5 K at the junction, and a 10 K hot day costs you 50 K of junction temperature.</p><p>That margin is thinner than it looks, because R<sub>&theta;JA</sub> is not a constant. A clogged filter, a failed fan, a dusty sink or 3000 m of altitude can each add 25% to the air-side term, which is exactly the 0.5 K/W that takes this design past the cliff. The interview follow-up is what you would do about it: shrink R (better sink, forced air), shrink dP/dT (a lower-R<sub>DS(on)</sub> part, paralleled devices, lower current), or add protection (temperature-derated current limit, thermal shutdown). Note that paralleling helps twice, since it cuts both the loss and its slope per device.</p>`,
    },
    {
      id: "heat-transfer-q19",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>An 8 &times; 8 mm die sits at the centre of a 120 &times; 120 mm aluminium base 6 mm thick (k = 180 W/m&middot;K). Compute the one-dimensional resistance L/kA using the <em>die footprint</em> as the area, in K/W.</p>`,
      answer: 0.521,
      unit: "K/W",
      tolerance: 0.03,
      explanation: `<p>Using the die footprint A = (0.008)<sup>2</sup> = 6.4 &times; 10<sup>&minus;5</sup> m<sup>2</sup>:</p><p class="eq">R = L/(kA) = 0.006/(180 &times; 6.4&times;10<sup>&minus;5</sup>) = 0.006/0.01152 = <strong>0.521 K/W</strong></p><p>Now the other bound, using the full base area A = 0.0144 m<sup>2</sup>: R = 0.006/(180 &times; 0.0144) = 0.00231 K/W. The two answers differ by the area ratio, 14 400/64 = 225&times;, so quoting either as "the" conduction resistance is meaningless.</p><p>Which is which: the footprint calculation is the <strong>pessimistic upper bound</strong>, because it assumes heat travels straight down in an 8 mm column and never spreads. The full-area calculation is the <strong>optimistic lower bound</strong>, because it assumes heat is already uniformly distributed the instant it leaves the die. Reality is in between, and it is not near the middle: with only 6 mm of aluminium for the heat to fan out in, the true value sits much closer to the pessimistic bound than to the optimistic one. The whole of that gap is spreading resistance, and no one-dimensional stack model contains a term for it.</p><p>The design levers follow from the geometry: spreading improves with a thicker or higher-k base (copper insert, vapour chamber) and with a larger source footprint. It is the missing term whenever a model matches the average sink temperature but underpredicts the hot spot directly over the die while the fin tips run cold.</p>`,
    },
    {
      id: "heat-transfer-q20",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You must specify an interface material for a lapped CPU lid clamped to a copper base with about 0.05 mm of clearance, in a high-volume product that is never serviced. The options are grease, a 1.5 mm gap pad, a phase-change film and a graphite sheet. Which do you pick?</p>`,
      choices: [
        "Gap pad, because it fills the joint with the least mounting force.",
        "Graphite sheet, because its in-plane conductivity is the highest.",
        "Grease, because pump-out is not a real failure mode when clamped.",
        "Phase-change film: it wets out thin on first heat-up and resists pump-out.",
      ],
      answer: 3,
      explanation: `<p>The joint is flat and tight, so the winning strategy is the thinnest possible bond line. A phase-change film ships as a solid pad (easy to place on a line), melts at 45&ndash;60 &deg;C on first power-up and flows to a 25&ndash;50 &mu;m bond line, then stays put because it re-solidifies when cold. That is grease-like performance without grease's migration.</p><p>A 1.5 mm gap pad is the wrong tool: it is designed to span variable gaps, and here it would add roughly 1.5 mm / (3 W/m&middot;K) of bond line where 0.05 mm was available, typically 10&times; the resistance. A graphite sheet has spectacular in-plane conductivity (hundreds of W/m&middot;K) but only 5&ndash;15 through-plane, and through-plane is the direction that matters here. Grease would perform well but pump-out under thermal cycling is absolutely a real failure mode, and in an unserviceable product it is the one that shows up as slow junction-temperature creep in the field.</p><p>The general rule: match the TIM to the <em>gap</em>, not to the datasheet k. Small controlled gap &rarr; grease or phase-change; large or variable gap &rarr; pad; heat spreading sideways &rarr; graphite.</p>`,
    },
    {
      id: "heat-transfer-q21",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A TO-247 datasheet gives R<sub>&theta;JC</sub> = 0.35 K/W. An engineer budgets 0.35 K/W from junction to heat sink surface. What is wrong with that?</p>`,
      choices: [
        "R<sub>&theta;JC</sub> ends at the case; the mounting interface adds 0.2&ndash;0.5 K/W.",
        "R<sub>&theta;JC</sub> already includes a mica washer, so it is being double counted.",
        "R<sub>&theta;JC</sub> is measured in still air and is invalid once a sink is fitted.",
        "R<sub>&theta;JC</sub> is a junction-to-ambient figure and cannot be split into stages.",
      ],
      answer: 0,
      explanation: `<p>R<sub>&theta;JC</sub> is measured with the case clamped to a cold plate, so it covers die, die attach, lead frame and package only, ending at the outside of the case. Everything between the case and the sink, grease or pad, flatness, burrs, mounting pressure, an insulating washer if you need isolation, is yours and is not in the number.</p><p>Typical additions: bare metal-to-metal with grease 0.1&ndash;0.3 K/W, a thermal pad 0.3&ndash;0.8, a mica washer with grease 0.5&ndash;1.0. On a 0.35 K/W part that is a 30&ndash;300% error in the junction-to-sink term, and it is always in the optimistic direction.</p><p>The distractors describe real datasheet entries that this one is not. R<sub>&theta;JA</sub> is the still-air, JEDEC-board number and it does assume no heat sink. Isolated packages quote R<sub>&theta;JC</sub> both with and without the internal insulator, which is worth reading carefully. The habit to build: for every resistance in your budget, say out loud where it starts and where it stops.</p>`,
    },
    {
      id: "heat-transfer-q22",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Prandtl number is about 0.7 for air, 7 for water and 0.01 for liquid sodium. For a heated plate in each fluid, what does that imply about the thermal boundary layer relative to the velocity boundary layer?</p>`,
      choices: [
        "In sodium it is much thinner than the velocity layer, so h stays low.",
        "In water it is thicker than the velocity layer, so heat spreads widely.",
        "In sodium it is much thicker than the velocity layer; in water, thinner.",
        "It is the same in all three, because Pr only rescales wall friction.",
      ],
      answer: 2,
      explanation: `<p>Pr = &nu;/&alpha; compares momentum diffusivity with thermal diffusivity, and the boundary layers scale as &delta;<sub>t</sub>/&delta; &asymp; Pr<sup>&minus;1/3</sup>.</p><p>Liquid sodium, Pr = 0.01: heat diffuses ~100&times; faster than momentum, so &delta;<sub>t</sub>/&delta; &asymp; 4.6, the thermal layer extends far beyond the velocity layer. Water, Pr = 7: &delta;<sub>t</sub>/&delta; &asymp; 0.52, a thermal layer half the thickness of the velocity layer. Air, Pr = 0.7: the two are nearly the same thickness, which is why air is the textbook's favourite fluid.</p><p>The practical payoff is in the Nu correlations, where Nu &prop; Pr<sup>1/3</sup>. A thin thermal layer means a steep wall gradient and a high h, so at equal Re water transfers far more than air, a factor of about 2 from Pr alone, on top of a 20&times; advantage in k. Liquid metals are the exception that proves the rule: despite a tiny Pr they still have huge h, because k is enormous and Nu&middot;k/L wins anyway. That combination is exactly why sodium cools fast reactors.</p>`,
    },
    {
      id: "heat-transfer-q23",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 6 mm heat pipe rated 0.15 K/W at 60 W is run at 80 W with the evaporator mounted above the condenser. The evaporator temperature spikes and the quoted resistance no longer applies. Which limit was hit?</p>`,
      figure: figHeatPipe,
      choices: [
        "Sonic limit: vapour in the core reached the local speed of sound.",
        "Capillary limit: the wick cannot return liquid fast enough uphill.",
        "Viscous limit: vapour pressure drop exceeds the available driving head.",
        "Boiling limit: nucleation inside the wick blocked the vapour passage.",
      ],
      answer: 1,
      explanation: `<p>All four are genuine heat-pipe limits, which is what makes this a real question. The one that fits the symptoms is the <strong>capillary (dry-out) limit</strong>: the wick's capillary pressure must overcome the vapour and liquid pressure drops <em>plus</em> any gravitational head. Turning the pipe so the evaporator sits above the condenser makes gravity oppose the return, and for a typical sintered wick that alone cuts capacity by 30&ndash;60%. Add 33% more power and the evaporator wick starves, dries out and the effective conductivity collapses. The temperature spike is the signature.</p><p>The others belong to different regimes: the sonic limit appears at start-up from a frozen or very cold state with low vapour density; the viscous limit only matters at very low temperature where vapour pressure is tiny; the boiling limit occurs at high <em>radial</em> flux when bubbles form inside the wick, which is a flux-density problem rather than an orientation problem.</p><p>Design rules that follow: always ask for the vendor's capacity curve at <em>your</em> orientation and temperature, never at the headline "0 mm adverse" figure; keep 30&ndash;50% margin; and remember that flattening or bending a pipe reduces capacity too. If gravity-opposed operation is unavoidable, specify a thicker sintered wick or a loop heat pipe.</p>`,
    },
    {
      id: "heat-transfer-q24",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A datasheet lists R<sub>&theta;JA</sub> = 40 K/W. On your board you measure 68 K/W at the same power. Before you call the vendor, which explanation is most likely?</p>`,
      choices: [
        "The die attach in your lot is defective and adds 28 K/W of resistance.",
        "Your power measurement reads high, so true dissipation is 40/68 of it.",
        "Ambient in the chamber was recorded in Celsius rather than in kelvin.",
        "The datasheet uses a JEDEC 2s2p board in still air, not your PCB.",
      ],
      answer: 3,
      explanation: `<p>R<sub>&theta;JA</sub> is not a property of the package; it is a property of the package <em>plus the board it sits on</em>. JEDEC JESD51 fixes that board so parts can be compared: 2s2p means two signal layers and two full internal planes, 76 &times; 114 mm, in a still-air chamber. A four-layer product board with a small copper pour, or a two-layer board, routinely measures 1.5&ndash;2&times; the datasheet value, because most of the heat leaves through the board and you gave it less copper to leave through.</p><p>Work the numbers as two parallel paths. On the JEDEC board, call the path into the planes 67 K/W and everything else (case to air, leads) 100 K/W: in parallel that is 1/(1/67 + 1/100) = 40 K/W, with 60% of the heat leaving through the board. Now strip the planes so that board path degrades to 200 K/W, leaving the other path untouched: 1/(1/200 + 1/100) = 67 K/W. That is the number you measured, with nothing whatever wrong with the part.</p><p>The distractors are the accusations engineers actually make. A defective die attach would show up as a batch failure and usually as a much larger R<sub>&theta;JC</sub>, which you can measure separately. A power meter error big enough to explain 70% would be obvious. And a temperature <em>difference</em> is identical in K and &deg;C, so the third option cannot change a resistance. Before escalating, rebuild the measurement on a JEDEC board, or ask the vendor for &Psi;<sub>JT</sub> and R<sub>&theta;JB</sub> so you can model your own board properly.</p>`,
    },
  ],
  qna: [
    {
      id: "heat-transfer-qa01",
      q: `<p>Walk me through sizing a heat sink for a 40 W part in a sealed enclosure at 50 &deg;C ambient.</p>`,
      a: `<p>I work backwards from the junction limit. Say T<sub>j,max</sub> = 125 &deg;C and I want 20 K of margin, so I design to 105 &deg;C. That gives a total budget of (105 &minus; 50)/40 = 1.38 K/W from junction to ambient. Datasheet R<sub>&theta;JC</sub> is typically 0.3&ndash;0.5 K/W and a grease or phase-change joint adds 0.2&ndash;0.3, so about 0.7 K/W is already spent and the sink must be around 0.7 K/W or better.</p><p>Then I check whether that is achievable. In a <em>sealed</em> box there is no external air path, so the real question is enclosure-to-ambient, not sink-to-air. With h &asymp; 5&ndash;8 W/m<sup>2</sup>K on the outside plus h<sub>rad</sub> &asymp; 6 if I black-anodise it, an enclosure with 0.15 m<sup>2</sup> of outer surface gives roughly 1/((12)(0.15)) = 0.55 K/W, workable, but only if heat actually reaches the wall. Internal still air is the killer: a 5 mm air gap over 40 cm<sup>2</sup> is about 0.026 W/m&middot;K over that path, roughly 48 K/W, which is fatal.</p><p>So the design is: bolt the part to the chassis wall through a thin TIM, treat the chassis as the sink, black-anodise the outside, orient fins vertically for the chimney, and confirm with a thermal test at worst-case ambient. If the numbers do not close, my order of escalation is more wall area or external fins, then a heat pipe from the part to a cooler wall, then a fan and a vent path, then derating the part.</p>`,
    },
    {
      id: "heat-transfer-qa02",
      q: `<p>Your thermal model says 85 &deg;C and the thermocouple on the part says 103 &deg;C. How do you debug that?</p>`,
      a: `<p>18 K is too big to hand-wave, so I split it into three buckets: the measurement, the boundary conditions, and the network.</p><p><strong>Measurement first</strong>, because it is cheapest. Is the bead actually on the hot feature, or on a lead 3 mm away? Is it bonded with something conductive, or taped over with an insulating patch that is now reading a mini-oven? A bead with tape can easily read 10&ndash;20 K off in either direction on a small package. I would cross-check with an IR camera using a known-emissivity dot of black tape, and check the reference-junction and ambient reading too.</p><p><strong>Boundary conditions second.</strong> What was the real ambient at the part, not at the chamber wall? Downstream of two other boards the local air can be 15 K above room. What was the actual dissipation, measured, or assumed from a datasheet typical? Is the airflow what the model assumed, or is there a bypass path around the sink?</p><p><strong>Network last.</strong> The usual missing terms are contact and interface resistance, spreading from a small die, and a parallel path the model assumed carried more heat than it does. At 40 W, 18 K is 0.45 K/W, almost exactly the size of one badly applied TIM joint, which is my first suspect.</p><p>The way I would isolate it is a power sweep: measure &Delta;T versus Q. If the discrepancy is proportional to power, it is a missing resistance. If it is a constant offset, it is ambient or the sensor.</p>`,
    },
    {
      id: "heat-transfer-qa03",
      q: `<p>What value of h would you assume for still air, and how confident are you in it?</p>`,
      a: `<p>For a vertical surface at a 30&ndash;50 K rise I use 5&ndash;8 W/m<sup>2</sup>&middot;K, and I quote it as a range, not a number. Natural convection on a plate scales as Nu = 0.59 Ra<sup>1/4</sup>, so h &prop; (&Delta;T/L)<sup>1/4</sup>, a 200 mm plate 40 K above 20 &deg;C air works out to Ra &asymp; 2.4 &times; 10<sup>7</sup>, Nu &asymp; 41 and h &asymp; 5.6 W/m<sup>2</sup>&middot;K, which is where that band comes from.</p><p>Then I list what moves it. Orientation: a horizontal plate facing down can be half the vertical value, facing up somewhat more. Size: h falls as L<sup>&minus;1/4</sup>, so a tall panel is worse per unit area than a small one. Confinement: inside a box with 10 mm clearances the plume cannot develop and I would drop to 3&ndash;4. Temperature: at a 5 K rise instead of 40, h drops by 40%.</p><p>I also always add radiation, because at these levels it is not a correction, it is comparable. h<sub>rad</sub> = 4&epsilon;&sigma;T<sup>3</sup> is about 6 W/m<sup>2</sup>&middot;K at 325 K for &epsilon; = 0.9, so a painted surface roughly doubles the total and a polished one gives you nothing. If someone hands me a memo assuming h = 200 for still air, that is a 30&ndash;40&times; error in the air-side resistance, and every temperature downstream of it is fiction.</p><p>Confidence: I would defend &plusmn;30% on the natural-convection number and treat anything tighter as requiring a measurement.</p>`,
    },
    {
      id: "heat-transfer-qa04",
      q: `<p>Why is h not a material property, and what would you measure to pin it down for your own geometry?</p>`,
      a: `<p>h is a bookkeeping coefficient that hides an entire fluid-mechanics solution. It is defined by q = h(T<sub>s</sub> &minus; T<sub>&infin;</sub>), but its value comes out of the boundary layer: h = Nu&middot;k/L, and Nu depends on Re, Pr, geometry, orientation, surface roughness, and whether the flow is laminar, turbulent, natural or forced. The same aluminium plate in the same air gives h &asymp; 6 hanging still and h &asymp; 60 with a fan on it. Nothing about the aluminium changed.</p><p>To pin it down experimentally I would run a steady calorimetric test: apply a known electrical power to a well-instrumented sample, let it reach steady state, measure surface temperature at several points and the local fluid temperature upstream, subtract the conduction and radiation losses, and back out h = Q<sub>conv</sub>/(A&Delta;T). Guard heaters and a low-emissivity surface reduce the corrections I have to trust. I would repeat at three or four flow rates to get the exponent, because h &prop; V<sup>0.8</sup> in turbulent forced convection is what lets me extrapolate to the fan I have not chosen yet.</p><p>A transient method also works and is quicker: heat the sample, cut power, and fit the cooling curve. If Bi &lt; 0.1, &tau; = &rho;Vc/(hA) gives h directly from the measured time constant and the known mass and specific heat.</p><p>What I would report is h with an area definition attached, "h = 35 W/m<sup>2</sup>&middot;K based on the 0.08 m<sup>2</sup> wetted fin area at 2.5 m/s", because an h without its reference area is meaningless.</p>`,
    },
    {
      id: "heat-transfer-qa05",
      q: `<p>When would you reach for a heat pipe instead of more copper, and what would make you regret it?</p>`,
      a: `<p>When the heat has to travel a distance. A 6 mm heat pipe carrying 30&ndash;60 W over 200 mm runs about 0.1&ndash;0.2 K/W. To match 0.15 K/W in solid copper over that length you would need A = L/(kR) = 0.2/(400 &times; 0.15) = 3.3 &times; 10<sup>&minus;3</sup> m<sup>2</sup>, 33 cm<sup>2</sup> of cross-section, several kilograms. So the case for a heat pipe is: the source is in a bad location, the sink or the vent is somewhere else, and mass or volume matters. Laptops, sealed industrial boxes and satellite panels all fit that pattern. Vapour chambers are the same argument in two dimensions, for spreading rather than transport.</p><p>What makes me regret it: <strong>orientation</strong>. Capacity can halve with the evaporator above the condenser, and product returns come from customers mounting the box the other way up. <strong>Overpower</strong>. Past the capillary limit the wick dries out and resistance collapses non-gracefully, with no warning in a datasheet plot taken at rated power. <strong>Start-up temperature</strong>. A water-charged pipe below 0 &deg;C is a solid copper tube until it thaws. <strong>Assembly</strong>, flattening or bending a pipe past its spec cuts capacity, and a poor joint at either end throws away the benefit, since a 0.15 K/W pipe with two 0.3 K/W interfaces is a 0.75 K/W path.</p><p>So I ask the vendor for a capacity-versus-orientation curve at my temperature, design to 50&ndash;70% of it, and I make sure the failure mode is caught in test at worst-case tilt, not in the field.</p>`,
    },
    {
      id: "heat-transfer-qa06",
      q: `<p>How do you decide whether a thermal problem is steady-state or transient?</p>`,
      a: `<p>I compare the load's timescale with the system's time constant. &tau; = &rho;Vc/(hA), which is the RC of the thermal circuit: C = &rho;Vc in J/K and R = 1/(hA) in K/W. If the load varies slowly compared with &tau;, the system tracks it and steady-state analysis is right. If the load's features are much shorter than &tau;, the mass filters them and only the average matters for R, but the peak is set by C.</p><p>The concrete version: a 30 W device running 10 s bursts every 5 minutes on a sink with R = 4 K/W and &tau; = 400 s. Average power is 1 W, so the steady rise is 4 K. The burst rise uses the capacitance, C = &tau;/R = 100 J/K, giving &Delta;T &asymp; Qt/C = 300/100 = 3 K. Total peak about 7 K. If I had sized the sink for 30 W steady I would have specified something 30&times; too large.</p><p>This drives the design lever directly: <strong>steady loads are a resistance problem, pulsed loads are a mass problem.</strong> For pulses I add thermal mass or a phase-change material near the die; more fins do almost nothing. For continuous loads I add fins or flow; more mass only delays the answer.</p><p>Two checks I never skip. Bi = hL<sub>c</sub>/k &lt; 0.1 before I use a single node, otherwise the surface and core differ and one temperature is a lie. And duty-cycle realism, if the "10 s every 5 minutes" turns into ten bursts back to back during a fault, the system sees close to full power and my mass argument evaporates.</p>`,
    },
    {
      id: "heat-transfer-qa07",
      q: `<p>A heat sink datasheet says 0.8 K/W. What does that number hide?</p>`,
      a: `<p>Four things, and each of them can be worth tens of percent.</p><p><strong>Airflow.</strong> Sink resistance is quoted at a stated velocity or volumetric flow, often 2 m/s or 10 CFM. The same extrusion in natural convection is typically 2&ndash;3&times; worse. If the curve is not shown, the number is nearly useless.</p><p><strong>Bypass.</strong> Catalogue numbers come from a ducted wind tunnel where all the air goes through the fins. In a real chassis air takes the low-impedance route around the sink; 30&ndash;50% bypass is normal and it can add half the quoted resistance back.</p><p><strong>Source size and spreading.</strong> The rating usually assumes a heat source covering most of the base. A 10 &times; 10 mm die on a 100 &times; 100 mm base adds spreading resistance the datasheet never saw, easily 0.1&ndash;0.3 K/W, comparable to the sink itself.</p><p><strong>The interface.</strong> "0.8 K/W" is sink-to-air, base surface outward. Your grease or pad, plus mounting flatness and pressure, adds another 0.1&ndash;0.5 K/W that belongs in the budget separately.</p><p>So when I read 0.8 K/W I write down 0.8 at the stated flow, then add a bypass derate, a spreading term and an interface term, and I look for the sink-resistance-versus-flow curve. Last, the air side of the energy balance: at 50 W with 10 CFM (0.0057 kg/s) the air itself warms by Q/(m&#775;c<sub>p</sub>) = 8.7 K, and that rise sits on top of the sink resistance no matter how good the fins are.</p>`,
    },
    {
      id: "heat-transfer-qa08",
      q: `<p>Talk me through the thermal resistance network of a power module, and say where each number comes from.</p>`,
      a: `<p>Junction to ambient, node by node. <strong>R<sub>&theta;JC</sub>, 0.2&ndash;0.5 K/W</strong>: die, die attach, baseplate. From the datasheet, measured with the case on a cold plate, and it stops at the case surface. <strong>R<sub>TIM</sub>, 0.1&ndash;0.5 K/W</strong>: mine, not the vendor's. It is R&Prime;<sub>c</sub>/A, so it depends on bond line, flatness, mounting pressure and the material; I compute it from thickness/k over the contact area and then sanity-check against vendor joint data. <strong>R<sub>SA</sub>, 0.3&ndash;3 K/W</strong>: sink to air, from the sink curve at my actual flow, derated for bypass. Plus a <strong>spreading</strong> term if the source is much smaller than the base.</p><p>Then the parts people forget. The <strong>board path</strong> is in parallel, not in series. On a 40 W module it may carry 10&ndash;20% of the heat through the baseplate bolts and copper. <strong>Radiation</strong> from the sink and enclosure adds an effective 5&ndash;8 W/m<sup>2</sup>&middot;K if surfaces are painted. And the <strong>air temperature rise</strong> from Q = m&#775;c<sub>p</sub>&Delta;T sits in series with everything, because the sink rejects into pre-heated air.</p><p>With 40 W, 0.35 + 0.25 + 0.90 gives 60 K of rise on a 55 &deg;C ambient, so T<sub>j</sub> = 115 &deg;C. I then run the sensitivities: which term dominates (the sink), what happens if the TIM degrades 2&times; over life (+10 K), what happens if the fan fails (R<sub>SA</sub> triples, +72 K, so I need a fault response). And if several modules share a sink, R<sub>SA</sub> carries the <em>sum</em> of their powers. That single mistake is the one I check first in anyone else's budget.</p>`,
    },
    {
      id: "heat-transfer-qa09",
      q: `<p>An enclosure is overheating and there is no room for a fan. What are your options, in order?</p>`,
      a: `<p>First I quantify, because "overheating" is not a number. I need the dissipation, the worst-case ambient, the hottest component's limit, and the measured temperature rise. That gives me the required &Delta;R and tells me whether I need 10% or 300%.</p><p>Then, cheapest first. <strong>Emissivity</strong>: black-anodise or paint the enclosure. At 325 K that is h<sub>rad</sub> &asymp; 6&ndash;7 W/m<sup>2</sup>&middot;K where natural convection gives 5&ndash;8, close to a doubling of external heat rejection for the cost of a finish. <strong>Orientation and internal layout</strong>: get the hot parts near the top wall, keep the chimney path clear, do not let a cable loom block the plume. <strong>Bridge the internal air gap</strong>: still air at k = 0.026 is the usual bottleneck, so I bolt or gap-pad the hot components directly to the chassis wall and let the wall be the sink. <strong>External area</strong>: add fins or a finned wall section; in natural convection I space them 6&ndash;10 mm, not 2 mm, because narrow channels choke the buoyant flow.</p><p>If that is not enough: <strong>heat pipe</strong> from the hot part to a cooler wall with more area; <strong>spread the load</strong> across more devices or more board copper; <strong>reduce the load</strong> by improving efficiency, lowering switching frequency or duty-cycling; finally <strong>derate</strong> the product's ambient rating and say so in the manual.</p><p>Throughout I watch against improving a resistance that is not the bottleneck. If the internal air gap is 40 K/W and the outside wall is 1 K/W, no amount of external finning will help until the inside path is bridged.</p>`,
    },
    {
      id: "heat-transfer-qa10",
      q: `<p>What mistakes do you look for first when reviewing someone else's thermal calculation?</p>`,
      a: `<p>I have a checklist, roughly in order of how often it pays off.</p><p><strong>Parallel paths added as series.</strong> Sink, board and case go to the same ambient. Adding 3 + 12 + 20 K/W instead of combining them to 2.1 K/W is a sixteen-fold error, and I have seen it in production budgets.</p><p><strong>Celsius in a fourth-power law.</strong> Radiation and any absolute-temperature ratio need kelvin. It is the single most common numerical blunder in the subject.</p><p><strong>h treated as a property.</strong> "h for air = 25" with no statement of still or forced, geometry or orientation. Related: an h quoted without the area it refers to.</p><p><strong>Total area instead of wetted area.</strong> Fin area the flow bypasses, or the underside of a board pressed against a bracket, counted as if it convected.</p><p><strong>Datasheet resistances used past their boundaries.</strong> R<sub>&theta;JC</sub> budgeted as junction-to-sink, or R<sub>&theta;JA</sub> from a JEDEC board applied to a two-layer product board.</p><p><strong>A shared element loaded with one device's power.</strong> Four parts on one sink means that sink sees 4Q.</p><p><strong>Lumped capacitance without a Biot check</strong>, and ambient taken as room temperature when the component is downstream of other heat sources.</p><p>Then I ask two closing questions: what is the largest resistance and is that where the effort went, and how would the answer change if h were 30% lower? If neither has been considered, the model is arithmetic rather than engineering.</p>`,
    },
  ],
};

export default content;
