import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
// Figures live here as well as in the base file; SVG element ids are prefixed
// ci4- … ci13- so they stay unique across the whole app.

const figBode = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="ci4-ann" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="18" text-anchor="middle" font-weight="600" fill="#334155">Open-loop response of a position servo</text>
  <line x1="62" y1="34" x2="62" y2="128" stroke="#64748b" stroke-width="1.2"/>
  <line x1="62" y1="80" x2="424" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="56" y="84" text-anchor="end" fill="#64748b" font-size="11">0 dB</text>
  <text x="70" y="42" fill="#334155" font-size="12">gain</text>
  <path d="M62,47 C130,56 190,70 250,80 C280,86 305,93 320,98 C356,108 392,117 424,124" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="62" y1="146" x2="62" y2="242" stroke="#64748b" stroke-width="1.2"/>
  <line x1="62" y1="213" x2="424" y2="213" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="56" y="217" text-anchor="end" fill="#64748b" font-size="11">&minus;180&deg;</text>
  <text x="70" y="178" fill="#334155" font-size="12">phase</text>
  <path d="M62,150 C120,160 190,183 250,195 C282,201 306,208 320,213 C356,222 392,229 424,234" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="250" y1="34" x2="250" y2="242" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="320" y1="34" x2="320" y2="242" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="250" y1="196" x2="250" y2="212" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci4-ann)"/>
  <text x="258" y="209" fill="#1d4ed8" font-size="12" font-weight="600">PM</text>
  <line x1="320" y1="97" x2="320" y2="81" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci4-ann)"/>
  <text x="328" y="94" fill="#1d4ed8" font-size="12" font-weight="600">GM = 8 dB</text>
  <text x="250" y="256" text-anchor="middle" fill="#334155" font-size="12">gain crossover 12 Hz, phase &minus;155&deg;</text>
  <text x="424" y="142" text-anchor="end" fill="#64748b" font-size="11">frequency (log)</text>
</svg>`;

const figTorqueSpeed = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci5-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">DC motor torque&ndash;speed line with the load line</text>
  <rect x="66" y="158" width="334" height="42" fill="#dbeafe" opacity="0.75"/>
  <line x1="66" y1="200" x2="428" y2="200" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci5-ax)"/>
  <line x1="66" y1="206" x2="66" y2="46" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci5-ax)"/>
  <text x="66" y="38" text-anchor="middle" fill="#64748b" font-size="11">torque (N&middot;m)</text>
  <line x1="66" y1="73" x2="400" y2="200" stroke="#334155" stroke-width="2.5"/>
  <line x1="66" y1="147" x2="400" y2="147" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="7 5"/>
  <circle cx="261" cy="147" r="5.5" fill="#1d4ed8"/>
  <line x1="261" y1="147" x2="261" y2="200" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3 3"/>
  <g stroke="#64748b" stroke-width="1">
    <line x1="150" y1="197" x2="150" y2="203"/><line x1="233" y1="197" x2="233" y2="203"/><line x1="317" y1="197" x2="317" y2="203"/><line x1="400" y1="197" x2="400" y2="203"/>
  </g>
  <text x="76" y="66" fill="#334155" font-size="12">stall 0.60 N&middot;m</text>
  <text x="76" y="141" fill="#dc2626" font-size="12">load 0.25 N&middot;m</text>
  <text x="160" y="176" text-anchor="middle" fill="#1d4ed8" font-size="12">continuous limit 0.20 N&middot;m</text>
  <text x="400" y="216" text-anchor="middle" fill="#334155" font-size="11">4000 rpm (no load)</text>
  <text x="66" y="216" text-anchor="middle" fill="#64748b" font-size="11">0</text>
  <text x="261" y="216" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">2330 rpm</text>
  <text x="66" y="236" fill="#64748b" font-size="11">speed (rpm)</text>
</svg>`;

const figBridge = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="26" text-anchor="middle" font-weight="600" fill="#334155">Full bridge: four active gages, two per sign</text>
  <line x1="120" y1="56" x2="290" y2="56" stroke="#334155" stroke-width="1.6"/>
  <text x="116" y="52" text-anchor="end" fill="#dc2626" font-size="12">V<tspan baseline-shift="sub" font-size="9">ex</tspan> = 10 V</text>
  <line x1="170" y1="56" x2="170" y2="84" stroke="#334155" stroke-width="1.6"/>
  <rect x="158" y="84" width="24" height="32" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <line x1="170" y1="116" x2="170" y2="192" stroke="#334155" stroke-width="1.6"/>
  <rect x="158" y="160" width="24" height="32" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="170" y1="192" x2="170" y2="214" stroke="#334155" stroke-width="1.6"/>
  <line x1="290" y1="56" x2="290" y2="84" stroke="#334155" stroke-width="1.6"/>
  <rect x="278" y="84" width="24" height="32" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="290" y1="116" x2="290" y2="192" stroke="#334155" stroke-width="1.6"/>
  <rect x="278" y="160" width="24" height="32" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <line x1="290" y1="192" x2="290" y2="214" stroke="#334155" stroke-width="1.6"/>
  <line x1="170" y1="214" x2="290" y2="214" stroke="#334155" stroke-width="1.6"/>
  <line x1="230" y1="214" x2="230" y2="230" stroke="#334155" stroke-width="1.6"/>
  <line x1="217" y1="230" x2="243" y2="230" stroke="#334155" stroke-width="2"/>
  <line x1="222" y1="235" x2="238" y2="235" stroke="#334155" stroke-width="1.6"/>
  <line x1="226" y1="240" x2="234" y2="240" stroke="#334155" stroke-width="1.4"/>
  <line x1="170" y1="138" x2="206" y2="138" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="254" y1="138" x2="290" y2="138" stroke="#1d4ed8" stroke-width="1.6"/>
  <circle cx="230" cy="138" r="17" fill="#fff" stroke="#1d4ed8" stroke-width="1.8"/>
  <text x="230" y="143" text-anchor="middle" fill="#1d4ed8" font-weight="600">V<tspan baseline-shift="sub" font-size="9">o</tspan></text>
  <circle cx="170" cy="138" r="3.5" fill="#334155"/>
  <circle cx="290" cy="138" r="3.5" fill="#334155"/>
  <text x="152" y="104" text-anchor="end" fill="#334155" font-size="12">R<tspan baseline-shift="sub" font-size="9">1</tspan> (&minus;&epsilon;)</text>
  <text x="152" y="180" text-anchor="end" fill="#334155" font-size="12">R<tspan baseline-shift="sub" font-size="9">2</tspan> (+&epsilon;)</text>
  <text x="308" y="104" fill="#334155" font-size="12">R<tspan baseline-shift="sub" font-size="9">3</tspan> (+&epsilon;)</text>
  <text x="308" y="180" fill="#334155" font-size="12">R<tspan baseline-shift="sub" font-size="9">4</tspan> (&minus;&epsilon;)</text>
  <text x="230" y="254" text-anchor="middle" fill="#64748b" font-size="12">A uniform temperature change moves all four arms alike and cancels.</text>
</svg>`;

const figStep = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci7-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="ci7-ann" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Closed-loop step response</text>
  <rect x="60" y="105.5" width="360" height="9" fill="#e2e8f0"/>
  <line x1="54" y1="200" x2="436" y2="200" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci7-ax)"/>
  <line x1="60" y1="206" x2="60" y2="52" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci7-ax)"/>
  <line x1="60" y1="110" x2="420" y2="110" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="428" y="100" text-anchor="end" fill="#64748b" font-size="11">setpoint, &plusmn;5% band</text>
  <path d="M60,200 L68,195.5 L76,183.7 L84,167.7 L92,149.8 L100,132.4 L108,116.8 L116,104.3 L124,95.3 L132,89.9 L140,87.6 L148,88.1 L156,90.5 L164,94.3 L172,98.7 L180,103.1 L188,107.2 L196,110.6 L204,113.1 L212,114.7 L220,115.5 L228,115.6 L236,115.1 L244,114.2 L252,113.2 L260,112.0 L268,111.0 L276,110.1 L284,109.4 L292,108.9 L300,108.7 L308,108.6 L316,108.7 L324,108.9 L332,109.1 L340,109.4 L348,109.7 L356,109.9 L364,110.1 L372,110.2 L380,110.3 L388,110.4 L396,110.3 L404,110.3 L412,110.2 L420,110.2" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="142" y1="109" x2="142" y2="89" stroke="#dc2626" stroke-width="2.2" marker-end="url(#ci7-ann)"/>
  <text x="152" y="84" fill="#dc2626" font-size="12" font-weight="600">overshoot 25%</text>
  <g stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3">
    <line x1="72" y1="191" x2="72" y2="212"/><line x1="107" y1="119" x2="107" y2="212"/><line x1="240" y1="114" x2="240" y2="236"/>
  </g>
  <line x1="72" y1="212" x2="107" y2="212" stroke="#64748b" stroke-width="1"/>
  <line x1="72" y1="208" x2="72" y2="216" stroke="#64748b" stroke-width="1"/>
  <line x1="107" y1="208" x2="107" y2="216" stroke="#64748b" stroke-width="1"/>
  <text x="90" y="228" text-anchor="middle" fill="#64748b" font-size="11">t<tspan baseline-shift="sub" font-size="9">r</tspan></text>
  <line x1="60" y1="236" x2="240" y2="236" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="232" x2="60" y2="240" stroke="#64748b" stroke-width="1"/>
  <line x1="240" y1="232" x2="240" y2="240" stroke="#64748b" stroke-width="1"/>
  <text x="150" y="252" text-anchor="middle" fill="#64748b" font-size="11">t<tspan baseline-shift="sub" font-size="9">s</tspan> to &plusmn;5% = 0.50 s</text>
  <text x="436" y="216" text-anchor="end" fill="#64748b" font-size="11">t (s)</text>
</svg>`;

const figBacklash = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="ci8-dir" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Backlash: load position versus motor position</text>
  <line x1="60" y1="210" x2="428" y2="210" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci8-ax)"/>
  <line x1="60" y1="216" x2="60" y2="52" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci8-ax)"/>
  <text x="26" y="130" text-anchor="middle" fill="#64748b" font-size="11" transform="rotate(-90 26 130)">load position</text>
  <line x1="110" y1="178" x2="330" y2="68" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="200" y1="133" x2="232" y2="117" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#ci8-dir)"/>
  <line x1="330" y1="68" x2="290" y2="68" stroke="#1d4ed8" stroke-width="2.6" stroke-dasharray="6 4"/>
  <line x1="290" y1="68" x2="70" y2="178" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="190" y1="118" x2="158" y2="134" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#ci8-dir)"/>
  <line x1="70" y1="178" x2="110" y2="178" stroke="#1d4ed8" stroke-width="2.6" stroke-dasharray="6 4"/>
  <line x1="290" y1="60" x2="330" y2="60" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="290" y1="54" x2="290" y2="66" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="330" y1="54" x2="330" y2="66" stroke="#dc2626" stroke-width="1.2"/>
  <text x="310" y="48" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">b = lost motion</text>
  <text x="90" y="196" text-anchor="middle" fill="#64748b" font-size="11">load stalls here</text>
  <text x="244" y="228" text-anchor="middle" fill="#64748b" font-size="11">motor (encoder) position</text>
</svg>`;

const figQuad = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Quadrature: four counts per encoder line</text>
  <path d="M70,70 H110 V100 H150 V70 H190 V100 H230 V70 H270 V100 H310 V70 H350 V100 H390 V70 H420" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <path d="M70,170 H90 V140 H130 V170 H170 V140 H210 V170 H250 V140 H290 V170 H330 V140 H370 V170 H410 V140 H420" fill="none" stroke="#334155" stroke-width="2.4"/>
  <text x="56" y="90" text-anchor="end" fill="#1d4ed8" font-weight="600">A</text>
  <text x="56" y="160" text-anchor="end" fill="#334155" font-weight="600">B</text>
  <g stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3">
    <line x1="90" y1="60" x2="90" y2="200"/><line x1="110" y1="60" x2="110" y2="200"/><line x1="130" y1="60" x2="130" y2="200"/><line x1="150" y1="60" x2="150" y2="200"/>
  </g>
  <g fill="#dc2626" font-size="11" text-anchor="middle" font-weight="600">
    <text x="90" y="214">1</text><text x="110" y="214">2</text><text x="130" y="214">3</text><text x="150" y="214">4</text>
  </g>
  <line x1="70" y1="230" x2="150" y2="230" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="226" x2="70" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="226" x2="150" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="110" y="246" text-anchor="middle" fill="#64748b" font-size="11">one encoder line</text>
  <text x="320" y="214" text-anchor="middle" fill="#64748b" font-size="11">A leading B means forward travel</text>
</svg>`;

const figAAF = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci10-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="ci10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="ci10-fold" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0L10,5L0,10z" fill="#dc2626"/></marker>
  </defs>
  <rect x="26" y="44" width="78" height="36" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="65" y="67" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">Sensor</text>
  <rect x="122" y="44" width="100" height="36" fill="#dbeafe" stroke="#334155" stroke-width="1.4"/>
  <text x="172" y="61" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">Analog LPF</text>
  <text x="172" y="75" text-anchor="middle" fill="#64748b" font-size="11">f<tspan baseline-shift="sub" font-size="9">c</tspan> = 600 Hz</text>
  <rect x="240" y="44" width="90" height="36" fill="#fee2e2" stroke="#334155" stroke-width="1.4"/>
  <text x="285" y="61" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">ADC</text>
  <text x="285" y="75" text-anchor="middle" fill="#64748b" font-size="11">f<tspan baseline-shift="sub" font-size="9">s</tspan> = 2 kHz</text>
  <rect x="348" y="44" width="86" height="36" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="391" y="67" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">Firmware</text>
  <line x1="104" y1="62" x2="118" y2="62" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci10-flow)"/>
  <line x1="222" y1="62" x2="236" y2="62" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci10-flow)"/>
  <line x1="330" y1="62" x2="344" y2="62" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci10-flow)"/>
  <text x="218" y="100" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">folds back if the filter is missing</text>
  <path d="M372,152 C300,104 140,104 64,164" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="6 4" marker-end="url(#ci10-fold)"/>
  <line x1="40" y1="210" x2="436" y2="210" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci10-ax)"/>
  <rect x="40" y="192" width="89" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="217" y1="210" x2="217" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="217" y="140" text-anchor="middle" fill="#64748b" font-size="11">Nyquist 1 kHz</text>
  <line x1="377" y1="210" x2="377" y2="150" stroke="#dc2626" stroke-width="2.5"/>
  <text x="377" y="128" text-anchor="middle" fill="#dc2626" font-size="11">1.9 kHz drive tone</text>
  <line x1="58" y1="210" x2="58" y2="168" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5 4"/>
  <text x="52" y="146" text-anchor="middle" fill="#dc2626" font-size="11">alias 100 Hz</text>
  <text x="100" y="228" text-anchor="middle" fill="#1d4ed8" font-size="11">signal band 0&ndash;500 Hz</text>
  <text x="430" y="228" text-anchor="end" fill="#64748b" font-size="11">frequency</text>
</svg>`;

const figCollocated = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Where the feedback device sits changes the plant</text>
  <rect x="60" y="110" width="90" height="50" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <text x="105" y="132" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Motor</text>
  <text x="105" y="150" text-anchor="middle" fill="#64748b" font-size="11">J<tspan baseline-shift="sub" font-size="9">m</tspan></text>
  <path d="M150,135 L162,118 L174,152 L186,118 L198,152 L210,118 L222,152 L234,120 L242,135 L250,135" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="200" y="182" text-anchor="middle" fill="#1d4ed8" font-size="12">belt or coupling stiffness k</text>
  <rect x="250" y="110" width="100" height="50" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <text x="300" y="132" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Load</text>
  <text x="300" y="150" text-anchor="middle" fill="#64748b" font-size="11">J<tspan baseline-shift="sub" font-size="9">L</tspan></text>
  <circle cx="105" cy="84" r="13" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <text x="105" y="89" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">A</text>
  <line x1="105" y1="97" x2="105" y2="110" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="105" y="60" text-anchor="middle" fill="#334155" font-size="12">motor side: collocated</text>
  <circle cx="300" cy="84" r="13" fill="#fff" stroke="#dc2626" stroke-width="1.6"/>
  <text x="300" y="89" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">B</text>
  <line x1="300" y1="97" x2="300" y2="110" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="300" y="60" text-anchor="middle" fill="#dc2626" font-size="12">load side: non-collocated</text>
  <text x="230" y="198" text-anchor="middle" fill="#64748b" font-size="12">A (collocated) sees an anti-resonance, then the resonance:</text>
  <text x="230" y="216" text-anchor="middle" fill="#64748b" font-size="12">the phase dips and comes back. B (non-collocated) sees the</text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b" font-size="12">resonance alone, with no zero to recover the phase.</text>
</svg>`;

const figDeadband = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci12-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Valve deadband: the command moves, nothing flows</text>
  <line x1="60" y1="140" x2="428" y2="140" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci12-ax)"/>
  <line x1="235" y1="222" x2="235" y2="52" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci12-ax)"/>
  <text x="235" y="44" text-anchor="middle" fill="#64748b" font-size="11">flow</text>
  <path d="M70,214 L210,140 L260,140 L400,66" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="210" y1="160" x2="260" y2="160" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="210" y1="154" x2="210" y2="166" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="260" y1="154" x2="260" y2="166" stroke="#dc2626" stroke-width="1.2"/>
  <text x="235" y="180" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">deadband &plusmn;15%</text>
  <text x="404" y="60" fill="#334155" font-size="11">+100%</text>
  <text x="66" y="230" fill="#334155" font-size="11">&minus;100%</text>
  <text x="428" y="158" text-anchor="end" fill="#64748b" font-size="11">valve command</text>
</svg>`;

const figProfile = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci13-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Torque over one machine cycle</text>
  <rect x="60" y="72" width="36" height="128" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="96" y="184" width="108" height="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="204" y="120" width="36" height="80" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <line x1="60" y1="200" x2="432" y2="200" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci13-ax)"/>
  <line x1="60" y1="206" x2="60" y2="50" stroke="#64748b" stroke-width="1.3" marker-end="url(#ci13-ax)"/>
  <text x="66" y="42" text-anchor="start" fill="#64748b" font-size="11">torque (N&middot;m)</text>
  <line x1="60" y1="152" x2="420" y2="152" stroke="#b45309" stroke-width="2" stroke-dasharray="7 5"/>
  <text x="424" y="140" text-anchor="end" fill="#b45309" font-size="12" font-weight="600">T<tspan baseline-shift="sub" font-size="9">rms</tspan> = ?</text>
  <text x="78" y="64" text-anchor="middle" fill="#dc2626" font-size="11">0.8</text>
  <text x="150" y="178" text-anchor="middle" fill="#1d4ed8" font-size="11">0.1</text>
  <text x="222" y="112" text-anchor="middle" fill="#1d4ed8" font-size="11">0.5</text>
  <text x="330" y="192" text-anchor="middle" fill="#64748b" font-size="11">dwell 1.0 s</text>
  <g fill="#64748b" font-size="11" text-anchor="middle">
    <text x="96" y="214">0.2</text><text x="204" y="214">0.8</text><text x="240" y="214">1.0</text><text x="420" y="214">2.0</text>
  </g>
  <text x="432" y="232" text-anchor="end" fill="#64748b" font-size="11">t (s)</text>
</svg>`;

const extra: Question[] = [
  {
    id: "controls-instrumentation-q31",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A motor carries a 1024-line incremental encoder and the drive decodes all four edges. The motor turns a 5.0 mm lead screw directly, with no gearbox. What is the ideal linear resolution in mm per count?</p>`,
    figure: figQuad,
    answer: 0.00122,
    unit: "mm/count",
    tolerance: 0.03,
    explanation: `<p>Quadrature gives two channels 90&deg; apart, so each line boundary produces four distinguishable edges:</p><p class="eq">N = 1024 &times; 4 = 4096 counts per motor revolution</p><p>One motor revolution advances the nut by one lead:</p><p class="eq">&Delta;x = 5.0 mm / 4096 = <strong>0.00122 mm/count</strong> (1.22 &mu;m)</p><p>Forgetting the &times;4 gives 4.88 &mu;m. Some drives only decode &times;1 or &times;2, so check the configuration rather than the encoder label.</p><p>None of this is accuracy. Screw lead error over the travel runs to tens of microns, the nut has axial play unless it is preloaded, the thrust bearings deflect under load, and the screw grows about 12 &mu;m per metre per &deg;C.</p>`,
  },
  {
    id: "controls-instrumentation-q32",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The figure shows the torque&ndash;speed line for a brushed DC motor on a fixed bus, with the shaded band marking its continuous rating. A process needs 0.25 N&middot;m held indefinitely. What does the chart tell you?</p>`,
    figure: figTorqueSpeed,
    choices: [
      "The motor cannot reach 0.25 N&middot;m at all, since stall torque is only 0.60 N&middot;m",
      "The motor delivers 0.25 N&middot;m at any speed up to 4000 rpm on this bus",
      "The requirement is fine because 0.25 N&middot;m is well below the 0.60 N&middot;m stall figure",
      "The motor makes 0.25 N&middot;m up to 2330 rpm, but that is above its continuous rating",
    ],
    answer: 3,
    explanation: `<p>Two separate limits are drawn and both matter. The sloped line is the <em>electrical</em> limit: available torque falls linearly with speed because back EMF eats the bus voltage, so 0.25 N&middot;m is reachable only below the intersection at 2330 rpm. The shaded band is the <em>thermal</em> limit, 0.20 N&middot;m continuous, and 0.25 N&middot;m sits above it.</p><p>So the honest answer is that the motor can produce the torque but not hold it. Run it there continuously and the windings will exceed their rated rise; the number is only allowable for a fraction of a duty cycle, sized by RMS torque over the whole period including dwell.</p><p>The third distractor is the one that catches people, because comparing a requirement against stall torque feels natural and is wrong twice over: stall is not available at speed, and stall is a peak, not a continuous, rating. What you actually check is (a) does the operating point sit under the sloped line at the required speed, and (b) does the RMS of the duty cycle sit under the continuous band.</p>`,
  },
  {
    id: "controls-instrumentation-q33",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>Treat the motor in the figure as a straight torque&ndash;speed line: 0.60 N&middot;m at stall and 4000 rpm at no load. A bigger fan is fitted and the steady load rises to 0.30 N&middot;m. At what speed does the motor now settle, in rpm?</p>`,
    figure: figTorqueSpeed,
    answer: 2000,
    unit: "rpm",
    tolerance: 0.03,
    explanation: `<p>The operating point is where the motor line meets the load line. For a straight torque&ndash;speed characteristic:</p><p class="eq">T = T<sub>stall</sub>(1 &minus; N/N<sub>0</sub>)</p><p class="eq">0.30 = 0.60(1 &minus; N/4000)</p><p class="eq">1 &minus; N/4000 = 0.500 &rarr; N = 4000(0.500) = <strong>2000 rpm</strong></p><p>At exactly half the stall torque the motor sits at exactly half the no-load speed, which is the cleanest possible check on the straight-line model. Check the two ends as well: 0.60 N&middot;m must give 0 rpm and zero torque must give 4000 rpm.</p><p>The common slip is computing 4000 &times; 0.30/0.60 the wrong way round, or reading the torque ratio directly instead of the <em>fraction of stall that is left over</em>. On this line those happen to coincide at half torque, which is exactly why the general form is worth writing out before substituting.</p><p>The physical reading of the slope: this motor droops 6.7 rpm for every milli-newton-metre of extra load, so the 0.05 N&middot;m the new fan added cost 330 rpm. Open loop, that droop <em>is</em> your speed regulation, and it is what a speed loop exists to remove.</p>`,
  },
  {
    id: "controls-instrumentation-q34",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A pressure transducer spans 0 to 200 kPa over a 0.5 to 4.5 V output. The conditioned signal carries 3.0 mV RMS of noise. What pressure noise does that correspond to, in kPa RMS?</p>`,
    answer: 0.15,
    unit: "kPa",
    tolerance: 0.03,
    explanation: `<p>Sensitivity is set by the output <em>span</em>, not by the endpoints:</p><p class="eq">S = (4.5 &minus; 0.5) V / 200 kPa = 0.020 V/kPa</p><p class="eq">p<sub>noise</sub> = 0.0030 V / 0.020 V/kPa = <strong>0.150 kPa</strong></p><p>The 0.5 V live zero is there so a broken wire or dead sensor reads 0 V and is distinguishable from a genuine zero-pressure reading. It shifts the offset but not the slope, so dividing 3.0 mV by 4.5 V/200 kPa is the slip to avoid.</p><p>0.15 kPa is 0.075% of full scale, fine for a process loop and possibly not for a leak test resolving a few pascals. Filtering it down costs bandwidth, and if that signal closes a loop, every pole you add spends phase margin.</p>`,
  },
  {
    id: "controls-instrumentation-q35",
    type: "mc",
    difficulty: 1,
    prompt: `<p>The figure shows a measured closed-loop step response. Peak overshoot is 25%, and the axis settles into the &plusmn;5% band at about 0.50 s. The application needs the same speed with under 10% overshoot. What is the first thing to try?</p>`,
    figure: figStep,
    choices: [
      "Raise proportional gain, which shortens rise time and cuts overshoot",
      "Raise integral gain so the response is pulled back to the setpoint sooner",
      "Add filtered derivative action to damp the response without slowing the rise",
      "Lower the setpoint so the peak lands where the target used to be",
    ],
    answer: 2,
    explanation: `<p>Overshoot at fixed speed is a damping problem, and derivative action is the term that adds damping. Applied to the measurement and filtered, it opposes fast approach to the target, pulling the peak down while leaving crossover, and therefore rise time, roughly where it is. Getting from a peak this large down under 10% means moving the closed-loop damping up by roughly half again, which is exactly the range where a bit of D earns its keep.</p><p>More proportional gain does shorten rise time but it raises crossover into more phase lag, so overshoot goes <em>up</em>, not down. More integral gain adds low-frequency lag and makes the peak worse, which is the opposite of what is wanted. Lowering the setpoint is a defect masquerading as a fix: the axis still overshoots by 25% of its own step, and now it settles in the wrong place.</p><p>The realistic order in practice: add filtered D first, and if the noise cost is unacceptable, back the proportional gain off and accept the slower rise, then recover speed with feedforward instead of feedback gain.</p>`,
  },
  {
    id: "controls-instrumentation-q36",
    type: "numeric",
    difficulty: 1,
    prompt: `<p>A force sensor calibrates at 0.40 V with no load and 2.90 V at 500 N. During a test it reads 1.65 V. Assuming a linear calibration, what force is indicated in N?</p>`,
    answer: 250,
    unit: "N",
    tolerance: 0.03,
    explanation: `<p>Compute the slope from the two calibration points, then subtract the zero before dividing.</p><p class="eq">S = (2.90 &minus; 0.40)/500 = 2.50/500 = 0.00500 V/N</p><p class="eq">&Delta;V = 1.65 &minus; 0.40 = 1.25 V</p><p class="eq">F = &Delta;V/S = 1.25/0.00500 = <strong>250 N</strong></p><p>Dividing 1.65 V by the slope reports 330 N, a 32% error from ignoring the offset. It is the commonest mistake in a hand-checked calibration, and it is why calibration records always carry two coefficients.</p>`,
  },
  {
    id: "controls-instrumentation-q37",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>The measured open-loop response in the figure crosses 0 dB at 12 Hz, where the phase is &minus;155&deg;. What is the phase margin, in degrees?</p>`,
    figure: figBode,
    answer: 25,
    unit: "deg",
    tolerance: 0.05,
    explanation: `<p>Phase margin is measured at gain crossover, as the distance from the phase there to &minus;180&deg;:</p><p class="eq">PM = 180&deg; + &ang;L(j&omega;<sub>gc</sub>) = 180 &minus; 155 = <strong>25&deg;</strong></p><p>Twenty-five degrees is poor. As a working correlation, damping ratio &zeta; &asymp; PM/100, so 25&deg; implies &zeta; &asymp; 0.25 and roughly 45% overshoot on a step, an axis that rings visibly. A servo target is 45&ndash;60&deg;.</p><p>Two things worth saying next. First, the margin has to survive the plant's variation: if this axis carries a payload that ranges 1&times; to 3&times;, crossover moves and 25&deg; can become zero. Second, the number is easy to spend accidentally. Adding a 15 Hz sensor filter at this crossover would cost arctan(12/15) = 39&deg; and take the loop straight past instability. And quote gain margin alongside it. The two numbers fail independently, and a loop can show a healthy one while the other is gone.</p>`,
  },
  {
    id: "controls-instrumentation-q38",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A pressure transmitter is specified 0.10% FS nonlinearity, 0.05% FS repeatability, and 0.02% FS per &deg;C of zero drift; the acquisition chain adds 0.02% FS of quantization. The transmitter lives in a cabinet that swings 30 &deg;C between night and mid-shift. The measurement has to hold 0.25% FS. Which change gets you there?</p>`,
    choices: [
      "Buy a transmitter with half the nonlinearity, removing the largest term from the budget",
      "Move to a 16-bit acquisition card, since quantization is what sets the floor here",
      "Hold or log the cabinet temperature, since zero drift alone is 0.60% FS",
      "Average 100 readings per sample, cutting the combined error by a factor of ten",
    ],
    answer: 2,
    explanation: `<p>The first move on any error budget is to multiply every <em>per-unit</em> spec by the environment it will actually see. The drift spec is worth nothing until you do:</p><p class="eq">0.02%/&deg;C &times; 30 &deg;C = 0.60% FS</p><p>That one term is already 2.4&times; the whole requirement. Combining the independent terms in RSS:</p><p class="eq">&radic;(0.10<sup>2</sup> + 0.05<sup>2</sup> + 0.60<sup>2</sup> + 0.02<sup>2</sup>) = <strong>0.611% FS</strong></p><p>Take the thermal term out and the same sum gives &radic;(0.10<sup>2</sup> + 0.05<sup>2</sup> + 0.02<sup>2</sup>) = 0.114% FS, comfortably inside spec. Nothing else moves the needle: halving nonlinearity takes 0.611% to 0.605%, and a 16-bit card takes the 0.02% quantization term to 0.0015%, both invisible under a 0.60% dominator. That is the general lesson of an RSS budget, that the largest term owns the answer and shaving the small ones is wasted money.</p><p>The averaging distractor is the instructive one. Averaging reduces <em>random</em> error as 1/&radic;N, and zero drift is not random. It is a slow systematic offset. Averaging 100 readings of the same wrong number returns the same wrong number.</p><p>So the fixes are all thermal: get the transmitter out of the cabinet, stabilise the cabinet, or log its temperature and apply the manufacturer's zero-drift coefficient as a correction. If the process ever presents a known zero, an automatic tare between cycles removes it outright.</p>`,
  },
  {
    id: "controls-instrumentation-q39",
    type: "numeric",
    difficulty: 2,
    prompt: `<p>An RC low-pass with R = 10 k&Omega; and C = 1.0 &mu;F is placed on a feedback signal. The loop crosses over at 20 Hz. How much phase lag does the filter contribute at crossover, in degrees?</p>`,
    answer: 51.5,
    unit: "deg",
    tolerance: 0.03,
    explanation: `<p>First the cutoff, then the phase it costs at the frequency that matters.</p><p class="eq">f<sub>c</sub> = 1/(2&pi;RC) = 1/[2&pi;(10<sup>4</sup>)(10<sup>&minus;6</sup>)] = 15.9 Hz</p><p class="eq">&phi; = &minus;arctan(f/f<sub>c</sub>) = &minus;arctan(20/15.9) = <strong>&minus;51.5&deg;</strong></p><p>Fifty-one degrees is more than a typical servo's entire phase margin, so this filter does not merely degrade the loop, it destabilises it. Anyone who drops this part in "to clean up the signal" will hand back a ringing axis.</p><p>Note what is <em>not</em> the problem: at 20 Hz the ratio f/f<sub>c</sub> is 1.26, so the magnitude is 1/&radic;(1 + 1.26<sup>2</sup>) = 0.623, about &minus;4.1 dB, and the signal still gets through. Filters kill loops with phase, not with amplitude, which is why a magnitude-only check misses this entirely.</p><p>The right sizing rule is to put the cutoff about 10&times; crossover: 200 Hz here, which costs arctan(0.1) = 5.7&deg;. With C = 1.0 &mu;F that means R = 796 &Omega;.</p>`,
  },
  {
    id: "controls-instrumentation-q40",
    type: "mc",
    difficulty: 2,
    prompt: `<p>An oven controller holds the heater at 100% for four minutes during warm-up. When the setpoint is finally reached the temperature sails 15&deg;C past it before coming back. Steady-state control afterwards is excellent. What is the specific fix?</p>`,
    choices: [
      "Lower the setpoint by 15&deg;C so the overshoot lands on the target",
      "Increase the heater power so warm-up finishes before the integrator grows",
      "Switch the sensor from a thermocouple to an RTD for better accuracy",
      "Clamp or back-calculate the integrator while the output is saturated",
    ],
    answer: 3,
    explanation: `<p>The signature is unmistakable: a long saturated interval, then a large one-sided overshoot, then normal behaviour. That is integral windup. While the heater is pinned at 100% the error stays large, so the integrator keeps accumulating even though extra output cannot be delivered. By the time the setpoint arrives the integrator holds a huge stored command that has to be worked off by <em>negative</em> error, which means overshooting.</p><p>Anti-windup fixes the cause: stop integrating whenever the output is at limit, or back-calculate the integrator from the difference between the requested and actual outputs so it tracks reality. Either way the controller arrives at the setpoint with a sane internal state.</p><p>Each distractor fails for its own reason. Biasing the setpoint down is a fudge that breaks the moment the ambient or the load changes. More heater power makes warm-up shorter but saturation deeper, so the wind-up per second is worse. And sensor accuracy is irrelevant. Steady-state control is already excellent, which tells you the measurement is fine and the problem is controller state.</p>`,
  },
  {
    id: "controls-instrumentation-q41",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A pick-and-place axis has its encoder on the motor, ahead of a toothed belt. Motor position repeats to within one count in both directions, but the payload lands 60 &mu;m apart depending on which way it approached. The figure shows the measured load-versus-motor curve. What do you conclude?</p>`,
    figure: figBacklash,
    choices: [
      "The encoder resolution is insufficient and should be increased fourfold",
      "Lost motion sits after the encoder, so measure at the load or remove it",
      "The servo needs higher proportional gain to force the load to the commanded point",
      "The ADC input range is set too wide, coarsening the position feedback",
    ],
    answer: 1,
    explanation: `<p>The flat segments in the hysteresis curve are the whole story: over that span the motor moves and the load does not. Because the encoder sits upstream of the belt, the servo sees a perfect motor and is genuinely satisfied, while the payload sits 60 &mu;m away. The error is invisible in the control loop's own data, which is why it survives commissioning.</p><p>Sign-dependence is the fingerprint. Noise is random, thermal drift is slow, following error scales with speed. Only lost motion produces a repeatable offset that flips with direction.</p><p>Fixes, in order of durability: put an encoder or linear scale on the load so the loop measures what is specified; remove the clearance with a preloaded or anti-backlash transmission and correct belt tension; or, if neither is possible, always approach from the same direction, which is why machine-tool probing routines are written that way. Software backlash compensation is a last resort because the value drifts with tension, temperature, and wear.</p><p>Higher gain cannot help. There is no error signal to act on. Extra resolution measures the wrong shaft more finely.</p>`,
  },
  {
    id: "controls-instrumentation-q42",
    type: "mc",
    difficulty: 1,
    prompt: `<p>A servo estimates velocity by differencing a 2000-count/rev encoder every 1 ms. At a creep speed of 30 rpm, how many counts arrive per sample, and what does that mean for the estimate?</p>`,
    choices: [
      "About 1 count, so each estimate jumps between 0 and 1000 counts/s",
      "About 33 counts, fine enough for a smooth velocity estimate",
      "About 60 counts, one for every revolution the motor makes",
      "About 0.03 counts, so the differencer always reports zero",
    ],
    answer: 0,
    explanation: `<p>Convert to counts per second, then per sample:</p><p class="eq">30 rpm = 0.5 rev/s &rarr; 0.5(2000) = 1000 counts/s</p><p class="eq">1000 &times; 0.001 s = <strong>1 count per sample</strong></p><p>So each sample delivers either 0 or 1 count, and the differenced velocity is either 0 or 1000 counts/s, a square wave centred on the truth, with 100% peak error. Feeding that into derivative gain is what makes servos growl at low speed.</p><p>This is the standard low-speed velocity problem and there are four real answers. Estimate over a longer window (10 samples gives 10% quantization, at the cost of 5 ms of lag). Use timer capture between edges rather than counts per fixed interval, which resolves speed to the clock rather than the encoder. Fit a model-based observer that blends the encoder with the commanded current. Or fit a finer encoder, and note that this is the one case where more resolution genuinely is the fix, unlike the accuracy problems where it never is.</p>`,
  },
  {
    id: "controls-instrumentation-q43",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A machine homes by driving onto a home switch and zeroing the axis there; the zero repeats to about 0.4 mm. Changing the routine to trip the switch, creep back off it, and zero on the next encoder index pulse instead gives 3 &mu;m &mdash; same switch, same encoder, same servo. Why?</p>`,
    choices: [
      "The creep move takes out the backlash, and backlash was the whole 0.4 mm",
      "The switch trip point moves with approach speed and hysteresis; the index does not",
      "Zeroing twice averages two independent readings, which is what cuts the spread",
      "The second approach is slower, so the servo settles well inside its own following error",
    ],
    answer: 1,
    explanation: `<p>The two references are not the same kind of thing. A switch trip point is a mechanical or magnetic event with real actuation hysteresis, a cam ramp, and a temperature coefficient, and on top of that the controller only notices it at the next loop tick, so approach speed alone converts into position error: at 100 mm/s on a 1 ms loop that is 0.1 mm before anything mechanical is considered. Hundreds of microns is a perfectly normal switch.</p><p>An index pulse is a single physical mark on the encoder disc, latched <em>in hardware</em> at the exact count where it occurs. Its repeatability is one count plus latch jitter, so microns, and it does not care how fast you were going when you crossed it. That is the 130&times; improvement (0.4 mm / 3 &mu;m) in one sentence: the switch's only job is to decide <em>which</em> index revolution to use, and the index does the metrology.</p><p>The distractors each fail on a number. Backlash acts on direction reversals, and both routines approach the target the same way, so it cannot account for the difference. Averaging two independent readings improves a spread by &radic;2, not by 130. And following error is a systematic lag, not a scatter. Creeping reduces it, but nowhere near to 3 &mu;m.</p><p>The failure mode to check at commissioning: if the index happens to sit very close to the switch trip point, some cycles will latch the <em>next</em> index instead and the machine will be off by exactly one screw lead. Home twenty times, log the raw index count, and confirm it never jumps by a lead; if it is marginal, move the switch cam by half a revolution of the screw.</p>`,
  },
  {
    id: "controls-instrumentation-q44",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A DC servo tracks position well during slow moves but falls 4 mm behind during fast ones. Logs show the current command pinned at the drive limit for most of the acceleration ramp, then coming off the limit at constant velocity. What is the bottleneck?</p>`,
    choices: [
      "The commanded acceleration needs more torque than the drive can deliver",
      "The encoder has too many counts for the loop to keep up numerically",
      "The position loop gain is too low during the acceleration segment",
      "The sample rate drops during fast moves because of computation load",
    ],
    answer: 0,
    explanation: `<p>Torque follows current, so a pinned current command means the actuator is saturated: the controller is asking for more acceleration than the motor and drive can produce. Once saturated the loop is open. The error can grow as large as it likes and the output does not change, which is why the following error appears only on the fast profile and clears once the ramp ends.</p><p>The diagnostic detail is that the current comes off the limit during constant velocity. That says the steady-state torque demand is comfortably inside the capability and the shortfall is purely in the acceleration term.</p><p>The distractors do not fit the evidence. Loop gain is irrelevant while the output is clipped; raising it just winds the integrator faster. Encoder counts do not produce torque. And a sample-rate collapse would show up as jitter in the timing, not as a clean, sustained current limit.</p><p>The engineering options are all on the mechanical side of the problem: lower the commanded acceleration, add acceleration feedforward so the profile is at least matched to reality, reduce load inertia or change the gear ratio, or fit a larger motor and drive. And whatever you do, verify anti-windup is active, because a saturated ramp is exactly where the integrator runs away.</p>`,
  },
  {
    id: "controls-instrumentation-q45",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A thermocouple channel reads about 12&deg;C high whenever the electronics enclosure warms up, while an RTD taped to the same metal block stays put. What should you check first?</p>`,
    choices: [
      "The gearbox ratio used to scale the recorded temperature channel",
      "Back EMF from the servo drive coupling into the signal cable",
      "Cold-junction compensation and terminal-block temperature",
      "Quadrature decoding direction on the associated motion axis",
    ],
    answer: 2,
    explanation: `<p>A thermocouple generates a voltage from the temperature <em>difference</em> between its measuring junction and the reference junction where it meets copper, usually the terminal block. The instrument must measure that terminal temperature and add it back. If the compensation sensor is misplaced, poorly coupled, or reading a different part of a warm enclosure, then enclosure temperature appears directly as process temperature error. The RTD staying stable is the confirming clue: it is a two-terminal resistance measurement with no reference junction at all, so it is blind to this failure mode.</p><p>What to check, in order: is the compensation sensor thermally bonded to the actual terminals, is the terminal block isothermal or sitting in a gradient, is the correct thermocouple type selected in software, is polarity right, and the classic one: has someone extended the run with plain copper wire instead of matching extension wire, which creates an unintended junction wherever the copper meets the alloy in a temperature gradient.</p><p>The other options belong to unrelated subsystems and are there to test whether you can localise a fault to the right physics before touching anything.</p>`,
  },
  {
    id: "controls-instrumentation-q46",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A ball-screw axis must supply 200 N of process force while accelerating an 8.0 kg carriage at 2.0 m/s<sup>2</sup>. The screw lead is 5.0 mm/rev and screw efficiency is 0.85. Estimate the required motor torque in N&middot;m, ignoring rotor inertia and any friction beyond the efficiency term.</p>`,
    answer: 0.202,
    unit: "N*m",
    tolerance: 0.03,
    explanation: `<p>Sum the linear forces first, then convert through the screw.</p><p class="eq">F = F<sub>process</sub> + ma = 200 + 8.0(2.0) = 216 N</p><p>A screw converts torque to thrust through the lead, and the lead per <em>radian</em> is L/2&pi;:</p><p class="eq">T = FL/(2&pi;&eta;) = 216(0.0050)/(2&pi; &times; 0.85)</p><p class="eq">T = 1.08/5.341 = <strong>0.202 N&middot;m</strong></p><p>Three ways to get this wrong. Dropping the inertial term gives 0.187 N&middot;m. Using the screw radius instead of the lead is a factor-of-ten error and is the most common one. And dividing by efficiency rather than multiplying, which makes the motor look smaller than it is, always in the unsafe direction.</p><p>What is deliberately missing: the rotor and screw inertia, which for a long screw is often comparable to the reflected carriage inertia and can add 30&ndash;50% to the acceleration torque. So 0.202 N&middot;m is a floor. The full check adds screw inertia, computes RMS torque over the duty cycle, and confirms the required speed (2.0 m/s at a 5 mm lead is 24 000 rpm, which is the number that usually kills a direct-drive fine-lead design).</p>`,
  },
  {
    id: "controls-instrumentation-q47",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A hydraulic axis uses a proportional valve whose measured flow curve is shown. Under a P-only position loop the axis holds within about 1 mm of target but drifts inside that band and never converges. What is happening?</p>`,
    figure: figDeadband,
    choices: [
      "Inside the valve deadband the loop is open, so small errors give no flow",
      "The proportional gain is too high, driving the valve into saturation near target",
      "The position sensor lacks the resolution to detect errors below about 1 mm",
      "The valve is aliasing the command signal into a slow low-frequency drift",
    ],
    answer: 0,
    explanation: `<p>Read the curve: for commands inside roughly &plusmn;15% the flow is zero, because the spool lands are overlapped and no port is uncovered. A P-only loop turns a small position error into a small command, and if that command falls inside the deadband nothing happens. The axis therefore parks anywhere within the band of positions whose error maps below the threshold, and then drifts with load and leakage, with no restoring action until the error grows large enough to reach the edge.</p><p>This is a nonlinearity, not a tuning error. More gain makes the deadband narrower in position terms but does not remove it, and it will destabilise the loop outside the band where authority is high. Sensor resolution is unrelated. The sensor sees the error perfectly well; the actuator simply refuses to respond.</p><p>The standard fixes are a deadband compensator that adds the known offset to any non-zero command so the spool starts from the edge of the overlap, a zero-lapped or critically lapped valve if the leakage penalty is acceptable, or a small integral term with anti-windup so the accumulating error eventually crosses the threshold. The compensator is preferred because the integral route converges slowly and can hunt.</p>`,
  },
  {
    id: "controls-instrumentation-q48",
    type: "mc",
    difficulty: 2,
    prompt: `<p>You must resolve content up to 500 Hz and the ADC is fixed at 2 kSa/s. The rig has a servo drive switching at 1.9 kHz that couples into the cable. What do you specify, and what happens if the filter is left out?</p>`,
    figure: figAAF,
    choices: [
      "A digital 500 Hz filter in firmware, which removes the 1.9 kHz tone from the samples",
      "An analog filter near 600 Hz with steep roll-off; without it, 1.9 kHz lands at 100 Hz",
      "A higher ADC resolution, so the 1.9 kHz tone occupies fewer of the useful bits",
      "An analog notch at 1.9 kHz on the drive tone, leaving the rest of the band",
    ],
    answer: 1,
    explanation: `<p>Two constraints set the cutoff. It must pass 500 Hz with little attenuation and it must be well down by Nyquist at 1 kHz, so a corner near 600 Hz with a multi-pole roll-off is the standard choice. A 4-pole Butterworth falls at 4 &times; 6 = 24 dB per octave, which puts it 17.8 dB down at the 1 kHz Nyquist and 40.0 dB down at 1.9 kHz.</p><p>Without it, the switching tone folds:</p><p class="eq">f<sub>alias</sub> = |f<sub>s</sub> &minus; f| = |2000 &minus; 1900| = <strong>100 Hz</strong></p><p>which lands squarely inside the band you came to measure and is then permanently indistinguishable from real 100 Hz motion.</p><p>The firmware answer is the classic misconception and the one this question is really testing: a digital filter runs on samples that already contain the fold, so by the time the code sees the data the tone <em>is</em> 100 Hz. There is no signal processing that recovers it. More ADC bits are equally beside the point, they resolve the corrupted signal more finely. A notch at 1.9 kHz is a defensible supplement if that one tone dominates, but it is not sufficient on its own, since every other frequency above 1 kHz still folds.</p>`,
  },
  {
    id: "controls-instrumentation-q49",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A proportional-only position loop has controller gain K<sub>p</sub> = 8 V/mm driving a plant of static gain 0.5 mm/V, with unity feedback. For a 10 mm step command, what is the steady-state position error in mm?</p>`,
    answer: 2,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p>Form the open-loop DC gain, then use the unity-feedback closed-loop relationship.</p><p class="eq">K = K<sub>p</sub>G = 8 V/mm &times; 0.5 mm/V = 4 (dimensionless)</p><p class="eq">y = [K/(1+K)]r = (4/5)(10) = 8.0 mm</p><p class="eq">e = 10 &minus; 8.0 = <strong>2.0 mm</strong></p><p>Equivalently e = r/(1+K) = 10/5. The structural point is that a P-only loop on a plant with no integrator <em>must</em> keep a standing error, because the actuator command is K<sub>p</sub>e and a zero error would mean zero command. The residual error is 1/(1+K) of the step, so ten times more gain gives 0.24 mm, not zero, and by then the phase margin is usually gone.</p><p>That is the argument for integral action or feedforward rather than brute gain. Note also that this plant is a pure gain, which is why the step settles at all; a real position axis with a motor already has an integrator from velocity to position, so it has zero error to a step and a constant error to a <em>ramp</em> instead. Knowing which case you are in is the point of system type.</p>`,
  },
  {
    id: "controls-instrumentation-q50",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The servo in the figure crosses over at 12 Hz today, and the team proposes retuning it to a 50 Hz crossover to hit a new throughput target. Sensing, computation, bus transport, and actuation together add 2.0 ms of pure delay that was never in the model. How much phase would that delay cost at the proposed 50 Hz crossover, in degrees?</p>`,
    figure: figBode,
    answer: 36,
    unit: "deg",
    tolerance: 0.03,
    explanation: `<p>Pure delay costs phase in proportion to both frequency and delay, and costs nothing in magnitude:</p><p class="eq">&phi; = &minus;360&deg; &middot; f &middot; T = &minus;360(50)(0.0020) = <strong>&minus;36&deg;</strong></p><p>Thirty-six degrees is most of a phase-margin budget, spent on a number that appears on no data sheet. It is also why the same 2 ms is nearly harmless at the figure's 12 Hz crossover, where it costs only 8.6&deg;: delay is a frequency-dependent tax, and it is the reason high-bandwidth loops need deterministic, short-latency hardware rather than merely fast processors.</p><p>Where the 2 ms typically comes from: half a sample of zero-order hold plus one sample of computation (1.5 ms at a 1 kHz update), a sensor filter, and a fieldbus cycle. Note that magnitude-based intuition misses all of it. The Bode magnitude plot is unchanged, so crossover stays at 50 Hz and the entire cost lands on phase.</p><p>Run it backwards for design: if you need 45&deg; of margin at 50 Hz and the plant alone leaves you 70&deg;, your total delay budget is (25/360)/50 = 1.4 ms for everything combined.</p>`,
  },
  {
    id: "controls-instrumentation-q51",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>The measured step response in the figure overshoots its final value by 25%. Treating the closed loop as second order, what damping ratio does that imply?</p>`,
    figure: figStep,
    answer: 0.404,
    tolerance: 0.03,
    explanation: `<p>For a second-order system the peak overshoot depends only on damping ratio:</p><p class="eq">M<sub>p</sub> = exp[&minus;&pi;&zeta;/&radic;(1&minus;&zeta;<sup>2</sup>)]</p><p>Invert it with L = ln(M<sub>p</sub>) = ln(0.25) = &minus;1.386:</p><p class="eq">&zeta; = &minus;L/&radic;(&pi;<sup>2</sup> + L<sup>2</sup>) = 1.386/&radic;(9.87 + 1.92)</p><p class="eq">&zeta; = 1.386/3.434 = <strong>0.404</strong></p><p>Two shortcuts worth carrying so you can do this on a whiteboard: &zeta; &asymp; 0.6 gives about 10% overshoot, &zeta; = 0.7 gives about 5%, and phase margin in degrees is roughly 100&zeta;. So this loop has about 40&deg; of phase margin, consistent, and a little light for a servo.</p><p>The measurement is also a free estimate of bandwidth: settling into &plusmn;5% at 0.50 s means 3/(&zeta;&omega;<sub>n</sub>) = 0.50, so &omega;<sub>n</sub> &asymp; 15 rad/s, about 2.4 Hz. That combination, one step response giving you damping, margin and bandwidth, is why it gets asked for before any frequency-response test.</p>`,
  },
  {
    id: "controls-instrumentation-q52",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>In the figure, the open-loop magnitude is &minus;8 dB at the frequency where the phase crosses &minus;180&deg;. By what factor may the loop gain be raised before the system becomes marginally stable?</p>`,
    figure: figBode,
    answer: 2.51,
    tolerance: 0.03,
    explanation: `<p>Gain margin is the reciprocal of the loop magnitude at the phase crossover, expressed as a factor:</p><p class="eq">GM<sub>dB</sub> = 0 &minus; (&minus;8) = 8 dB</p><p class="eq">factor = 10<sup>8/20</sup> = 10<sup>0.40</sup> = <strong>2.51</strong></p><p>So the gain can rise by 151% before the &minus;180&deg; point reaches unity magnitude. The common slip is 10<sup>8/10</sup> = 6.3, which is the <em>power</em> ratio; amplitude ratios use 20 log.</p><p>Whether 2.5&times; is comfortable depends on what varies. A servo whose payload swings from empty to three times loaded sees its plant gain move by roughly that factor, so 8 dB would be entirely consumed by normal operation. Typical design targets are 6&ndash;12 dB of gain margin alongside 45&ndash;60&deg; of phase margin.</p><p>Quote both, always. A loop can show a healthy gain margin and terrible phase margin, or the reverse, and a lightly damped resonance can produce several &minus;180&deg; crossings so that raising gain destabilises the loop while <em>lowering</em> it does too. That is the case where a single-number margin is misleading and you need the whole plot.</p>`,
  },
  {
    id: "controls-instrumentation-q53",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A servo running a 1 kHz update loop hums at roughly 330 Hz. The tone appears only when derivative gain is non-zero, gets worse at low speed, and does not match any mode from the hammer test. What is going on?</p>`,
    choices: [
      "A structural mode at 330 Hz that the hammer test simply failed to excite",
      "Mains harmonics coupling into the encoder cable from the servo drive",
      "A discrete-time limit cycle from differentiating quantized position",
      "Aliasing of a 1330 Hz mechanical tone down into the control band",
    ],
    answer: 2,
    explanation: `<p>Three clues point the same way, and none of them point at the mechanics. The tone sits at a fixed fraction of the sample rate rather than at a mechanical frequency; it exists only with derivative gain; and it is worse at low speed, which is where the fewest encoder counts arrive per sample. That is a discrete-time limit cycle: the differenced position signal toggles between adjacent counts, derivative gain converts each toggle into a current spike, the axis twitches, and the sequence repeats with a period set by the loop rate and its delay rather than by any spring and mass.</p><p>Rule the others out on evidence. A missed structural mode would be speed-independent and would not care whether K<sub>d</sub> is zero. Mains coupling would sit at 50 or 60 Hz and their harmonics, not at a third of the servo rate. And aliasing is not available as an explanation here. The servo loop rate and the encoder counter are not sampling a continuous waveform in a way that folds a 1330 Hz mechanical tone into the current command.</p><p>Confirm it by logging raw counts at low speed and looking for single-count toggling, then fix it in the estimator: filter the velocity path, estimate over a longer window or by timing edges, or fit a finer encoder. Lowering K<sub>d</sub> makes it go away and is the diagnosis, not the cure.</p>`,
  },
  {
    id: "controls-instrumentation-q54",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A greased linear axis holds position by creeping about 30 &mu;m past target, stopping, then creeping back &mdash; a slow cycle every few seconds that never decays. It only happens when the axis is nearly stopped, and only with integral gain enabled. What is the mechanism?</p>`,
    choices: [
      "The encoder is drifting thermally, so the integrator chases a moving zero",
      "Stiction holds the axis until the integrator builds enough force to slip",
      "The loop crossover has moved onto a lightly damped structural mode",
      "Windup from a previous saturated move is still unwinding through the integrator",
    ],
    answer: 1,
    explanation: `<p>This is stick-slip hunting, and the ingredients are exactly the two named in the prompt. Static friction exceeds kinetic friction, so while the axis is stuck the position error is constant and non-zero; the integrator therefore ramps steadily upward. Eventually the commanded force exceeds breakaway, friction drops to its lower sliding value, and the axis lurches. Overshooting, because the integrator is now holding far more command than the moving axis needs. It sticks on the other side and the cycle repeats. The period is set by the integrator ramp rate against the friction band, which is why it is slow and why it never decays.</p><p>The tells that separate it from the alternatives: it happens only near zero speed (kinetic friction dominates once moving), only with integral action (nothing else ramps like that), and at a period unrelated to any mechanical mode. Thermal drift would be one-directional and slow, not oscillatory. A resonance would ring at a fixed mechanical frequency and be worse at higher gain, not at lower speed. Windup follows a saturated move and unwinds once; it does not repeat indefinitely.</p><p>Fixes attack friction or the integrator: better lubrication and preload, recirculating elements instead of plain ways, a small dither, an integral deadband or reduced K<sub>i</sub> near zero error, or friction feedforward. Retuning P and D alone will not remove it.</p>`,
  },
  {
    id: "controls-instrumentation-q55",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>A 500 N load cell is rated 2.0 mV/V and excited at 10 V. Its output goes straight into a 12-bit ADC spanning 0 to 5 V with no amplifier. What force does one ADC count represent, in N?</p>`,
    figure: figBridge,
    answer: 30.5,
    unit: "N",
    tolerance: 0.03,
    explanation: `<p>Work out the two ends of the chain and divide.</p><p class="eq">V<sub>FS</sub> = 2.0 mV/V &times; 10 V = 20 mV at 500 N</p><p class="eq">sensitivity = 20 mV/500 N = 0.040 mV/N</p><p class="eq">LSB = 5 V/2<sup>12</sup> = 5/4096 = 1.22 mV</p><p class="eq">&Delta;F = 1.22/0.040 = <strong>30.5 N per count</strong></p><p>That is 6% of full scale in a single step, from a converter advertised as 12-bit. The reason is a span mismatch: the sensor uses 20 mV of a 5000 mV input range, so the whole 0&ndash;500 N signal occupies about 16 of the 4096 available codes. Log<sub>2</sub>(5000/20) = 8 of the 12 bits thrown away before noise is even considered.</p><p>The fix is gain ahead of the converter, not bits inside it. An instrumentation amplifier of gain 250 maps 20 mV onto the full 5 V span and brings the step to 0.12 N. Going to a 16-bit converter instead would give 1.9 N per count while still throwing away the same 8 bits, more expensive and 16&times; worse than the amplifier.</p><p>The amplifier has to be an instrumentation amplifier specifically, because the bridge output is differential and sits on a 5 V common-mode pedestal that a single-ended stage would amplify along with the signal.</p>`,
  },
  {
    id: "controls-instrumentation-q56",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A food-plant filler needs slide position to &plusmn;50 &mu;m over 300 mm of travel, updated at 100 Hz, and the machine is hosed down daily with hot caustic. Which measurement approach do you specify?</p>`,
    choices: [
      "A draw-wire encoder, since the compact body mounts outside the wet zone",
      "An open optical linear scale, which gives the best resolution over 300 mm",
      "Laser triangulation, because non-contact sensing avoids all sealing problems",
      "A sealed magnetostrictive or inductive linear scale rated for wash-down",
    ],
    answer: 3,
    explanation: `<p>The accuracy requirement is loose by metrology standards. 50 &mu;m over 300 mm is 170 ppm, and 100 Hz is slow. Nothing here is technically hard, so the environment decides, and the environment is the harshest constraint on the page.</p><p>An open optical scale is eliminated immediately: hot caustic and an exposed graduated scale with a read head riding above it is a maintenance failure waiting to happen, whatever its resolution. Laser triangulation reads a surface, so it depends on the reflectivity of a wet stainless slide, and its window fouls with the same spray the rest of the machine gets. Non-contact does not mean environment-proof. A draw-wire has the right idea about keeping the body dry, but the wire itself must pass through the wet zone, the spool and spring collect product, and typical linearity of 0.1% of 300 mm is 300 &mu;m, six times worse than the requirement, before hysteresis.</p><p>A sealed magnetostrictive or inductive scale is what these machines actually use: IP69K stainless housings designed for hot high-pressure wash-down, no optical window, no rubbing contact to wear, absolute output so no homing is needed after a power cycle, and 10&ndash;20 &mu;m accuracy over this travel. The costs are honest. More expensive than a draw-wire and lower resolution than optical, but both are irrelevant against a specification this loose and an environment this hostile.</p>`,
  },
  {
    id: "controls-instrumentation-q57",
    type: "mc",
    difficulty: 3,
    prompt: `<p>An axis has a compliant belt between motor and load. Moving the feedback encoder from the motor to the load removes the steady-state positioning error, but the loop that was stable at the motor now goes unstable at half the gain. Why does load-side feedback make stabilisation harder?</p>`,
    figure: figCollocated,
    choices: [
      "Non-collocated feedback loses the anti-resonance that kept the phase bounded",
      "The load-side encoder has coarser resolution, so quantization destabilises the loop",
      "The load moves less than the motor, so the effective loop gain is lower",
      "Load-side signals travel further, and the added cable delay dominates the phase",
    ],
    answer: 0,
    explanation: `<p>The two measurement points give genuinely different plants. Measured at the motor, the flexible mode appears as an anti-resonance (a dip) followed by a resonance (a peak). The phase dives at the peak but comes straight back at the notch, so the net phase never runs away and a modest loop stays stable even with the mode inside the bandwidth. This is the collocated case.</p><p>Measured at the load, that pole&ndash;zero pair is reversed: the zero moves out of the useful region, and what is left is a resonance with no compensating anti-resonance. The phase drops through &minus;180&deg; and stays there, so the loop goes unstable at a much lower gain. That is the non-collocated case, and it is a structural property of where you measure, not a wiring or resolution issue.</p><p>The distractors are the plausible wrong answers. Cable delay from a couple of metres is nanoseconds and irrelevant next to a mechanical mode. A load-side scale is usually finer, not coarser, in position terms. And lower loop gain would make the loop <em>more</em> stable, not less.</p><p>The engineer's resolution is not to pick one: use dual-loop feedback, closing a fast inner velocity loop on the motor where collocation buys stability, and a slower outer position loop on the load where accuracy is specified. That is standard on machine-tool axes with linear scales, and knowing it is what separates a memorised answer from a working one.</p>`,
  },
  {
    id: "controls-instrumentation-q58",
    type: "mc",
    difficulty: 3,
    prompt: `<p>During a long hot endurance run a load-cell channel drifts steadily upward. A dead-weight check before and after the run agrees to within 0.1%, the cell body rose 25&deg;C, and the signal cable runs alongside the servo drive leads. How do you investigate?</p>`,
    choices: [
      "Treat the recorded values as correct, since digital data cannot drift by itself",
      "Quantify thermal zero and span drift, then check excitation and shielding",
      "Raise the position-loop gain on the servo so the fixture holds the specimen more firmly",
      "Discard the calibration record entirely, because it was taken at room temperature",
    ],
    answer: 1,
    explanation: `<p>The dead-weight check bracketing the run is the key evidence: the cell reads correctly cold both before and after, so the structure was not overloaded and the calibration has not shifted permanently. That points at something that varies during the run, and the two candidates named in the prompt are temperature and electrical environment.</p><p>Load cells drift with temperature through gage temperature coefficient, mismatched thermal expansion between the gage and the flexure, adhesive creep, and bridge excitation changes. A typical cell specifies a few tens of ppm of full scale per &deg;C for zero, so 25&deg;C can easily produce a drift comparable to what is being measured. Separately, running a millivolt-level differential signal beside PWM leads invites both common-mode injection and a ground loop.</p><p>The investigation is a sequence, not a guess: characterise the cell in an oven at constant load to separate zero drift from span drift; log cell body temperature alongside force so drift can be correlated and, if repeatable, compensated; verify excitation voltage stability at the bridge rather than at the supply; move the cable to a separate tray, use shielded twisted pair grounded at one end; and if the test permits, tare at known intervals to remove slow zero motion. Then put the residual into an uncertainty budget rather than pretending it is zero, which is exactly what the first distractor does.</p>`,
  },
  {
    id: "controls-instrumentation-q59",
    type: "numeric",
    difficulty: 3,
    prompt: `<p>One machine cycle demands 0.80 N&middot;m for 0.20 s of acceleration, 0.10 N&middot;m for 0.60 s of cruise, 0.50 N&middot;m for 0.20 s of braking, then 1.00 s of dwell at zero torque. What continuous torque rating does the motor need, in N&middot;m?</p>`,
    figure: figProfile,
    answer: 0.303,
    unit: "N*m",
    tolerance: 0.03,
    explanation: `<p>Heating goes as I<sup>2</sup>R and torque is proportional to current, so the thermally equivalent steady torque is the RMS over the whole cycle, dwell included in the denominator.</p><p class="eq">&Sigma;T<sub>i</sub><sup>2</sup>t<sub>i</sub> = 0.80<sup>2</sup>(0.20) + 0.10<sup>2</sup>(0.60) + 0.50<sup>2</sup>(0.20)</p><p class="eq">= 0.128 + 0.006 + 0.050 = 0.184</p><p class="eq">&Sigma;t<sub>i</sub> = 0.20 + 0.60 + 0.20 + 1.00 = 2.00 s</p><p class="eq">T<sub>rms</sub> = &radic;(0.184/2.00) = &radic;0.092 = <strong>0.303 N&middot;m</strong></p><p>Two errors are common and they pull in opposite directions. Taking a plain time-weighted average, (0.80&times;0.20 + 0.10&times;0.60 + 0.50&times;0.20)/2.00, gives 0.16 N&middot;m and undersizes the motor, because squaring weights the acceleration spike far more heavily. Leaving the dwell out of the denominator gives 0.429 N&middot;m and oversizes it. The dwell is real cooling time and you are entitled to it.</p><p>So the motor needs a continuous rating above 0.303 N&middot;m and a peak rating above 0.80 N&middot;m; those are two separate checks against two separate numbers on the data sheet. Note braking contributes heat just like accelerating, because I<sup>2</sup>R does not care about sign, and if the drive dumps regenerated energy into a resistor rather than the bus, that resistor needs sizing too. Add 20&ndash;30% margin for friction growth and a warm cabinet.</p>`,
  },
  {
    id: "controls-instrumentation-q60",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A lift axis has one upper limit switch wired normally open. In a fault-injection test the signal wire is cut, and the controller keeps commanding upward motion because the input reads exactly as it does during normal travel. What is the design lesson?</p>`,
    choices: [
      "Limit switches should not be fault-injected; the test itself risks the machine",
      "A software position estimate can replace the physical limit for hazardous travel",
      "Wire limits normally closed and add plausibility checks, redundancy, and hard stops",
      "Increase motor torque so the axis reaches and trips the limit more decisively",
    ],
    answer: 2,
    explanation: `<p>The failure is that a broken wire produces the safe-looking state. With a normally open contact, "not at limit" and "not connected" are the same electrical condition, so the most likely fault in the field, a chafed cable, a corroded terminal, an unplugged connector, is silent. Wiring the contact normally closed inverts that: the healthy state holds the circuit closed, and any break reads as at-limit and stops motion.</p><p>Normally closed wiring alone is not the whole answer for a hazardous vertical axis. The layered design is: NC limits into safety-rated inputs with pulse testing, a plausibility check cross-comparing the switch against encoder position so disagreement raises a fault, diverse redundancy so one failure mode cannot take out both channels, a mechanical hard stop, and a brake that engages on loss of power. On analog channels the same principle gives you 4&ndash;20 mA rather than 0&ndash;10 V, so zero current is unambiguously a broken loop.</p><p>The other options fail on principle. Fault injection is precisely how this defect was found, and skipping it means shipping it. Software estimates share the same failure path as the controller that acts on them and cannot be the last line of defence on a falling load. More torque makes the hazard worse. The design goal is not just correct behaviour when everything works. It is <em>detectable</em> behaviour when something breaks.</p>`,
  },
  {
    id: "controls-instrumentation-q61",
    type: "mc",
    difficulty: 3,
    prompt: `<p>A hydraulic pressure transducer is plumbed through 1.5 m of narrow dead-ended tubing. During fast valve events it shows delayed ringing that a flush-mounted reference transducer at the same port does not. Which change most directly improves fidelity?</p>`,
    choices: [
      "Mount the transducer at the port, or characterise and damp the tube",
      "Average the delayed trace over a longer window and report that as peak pressure",
      "Increase the logger display from three significant figures to six digits",
      "Convert the recorded pressure units from kPa to psi before doing analysis",
    ],
    answer: 0,
    explanation: `<p>A dead-ended tube is not a neutral extension cord. The fluid column has inertia and the trapped volume has compliance, so the tube plus transducer forms a Helmholtz-type resonator with its own natural frequency and very little damping. For a 1.5 m line that resonance can easily sit in the hundreds of hertz, right where a valve transient lives, so the transducer faithfully reports the <em>tube's</em> response rather than the port pressure. Trapped air makes it dramatically worse by softening the compliance.</p><p>Mounting flush at the port removes the resonator entirely and is the correct answer where it is mechanically possible. Where it is not, the honest alternative is to characterise the line. Measure its response, confirm it is bled of air, and if necessary add a calibrated restrictor or snubber, while accepting that a snubber protects the sensor and attenuates real peaks at the same time, which is only acceptable if the peak is not the measurand.</p><p>The distractors are all ways of dressing up bad data. Averaging a ringing signal reports neither the true peak nor the true mean, and calling it a peak is simply wrong. Display digits and unit conversion change the presentation and not one thing about bandwidth or phase. The general lesson: the plumbing is part of the instrument, exactly as cable and grounding are part of an electrical measurement.</p>`,
  },
  {
    id: "controls-instrumentation-q62",
    type: "mc",
    difficulty: 2,
    prompt: `<p>A load-cell channel picks up a 20 kHz buzz whose amplitude tracks the servo drive's duty cycle. The buzz is absent when the drive is powered but disabled. What are your first three actions, in order?</p>`,
    choices: [
      "Add a 10 Hz digital filter, re-tune the loop, then re-run the whole test",
      "Replace the load cell, then the amplifier, then the acquisition module",
      "Increase ADC resolution, raise excitation voltage, then lengthen averaging",
      "Reroute the cable, fit shielded twisted pair, then go differential",
    ],
    answer: 3,
    explanation: `<p>The evidence localises the fault before you touch anything: the interference is at the switching frequency, it scales with duty cycle, and it vanishes when the drive stops switching. That is coupling from the drive into the measurement, not a defective sensor.</p><p>So attack the coupling path in order of effectiveness and cost. First, geometry: get the signal cable out of the same tray as the motor leads and cross them at right angles where they must meet. This alone often removes most of it, and it is free. Second, the cable: shielded twisted pair, shield bonded at one end only so it drains interference without forming a ground loop, with the twist rejecting magnetic pickup. Third, the receiver: a differential instrumentation amplifier so whatever common-mode voltage remains is subtracted rather than amplified, and check that bridge excitation returns to a single star point.</p><p>Only after that should filtering be considered, and then it is analog and sized from the loop bandwidth. A 20 kHz problem needs a cutoff far above any control frequency, so it is cheap here. The distractors are the three classic wrong moves: filtering first, which hides the symptom and spends phase margin; swapping parts without a hypothesis, which is expensive and usually proves nothing; and reaching for resolution or averaging, neither of which improves signal-to-noise against a coherent interferer.</p>`,
  },
];

export default extra;
