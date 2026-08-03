import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
// SVG element ids are prefixed ss6- … ss19- to stay unique app-wide.

const figShear = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss6-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="230" y1="40" x2="230" y2="186" stroke="#e2e8f0" stroke-width="1.5"/>
  <text x="115" y="24" text-anchor="middle" font-weight="600" fill="#334155">Single shear</text>
  <rect x="34" y="68" width="104" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="98" y="88" width="104" height="20" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="110" y="54" width="13" height="68" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="100" y1="88" x2="134" y2="88" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="34" y1="78" x2="16" y2="78" stroke="#dc2626" stroke-width="2" marker-end="url(#ss6-load)"/>
  <line x1="202" y1="98" x2="220" y2="98" stroke="#dc2626" stroke-width="2" marker-end="url(#ss6-load)"/>
  <text x="14" y="68" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="222" y="90" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="115" y="150" text-anchor="middle" fill="#334155" font-weight="600">1 cut plane</text>
  <text x="115" y="172" text-anchor="middle" fill="#334155">&tau; = P/(&pi;d&sup2;/4)</text>
  <text x="345" y="24" text-anchor="middle" font-weight="600" fill="#334155">Double shear (clevis)</text>
  <rect x="252" y="56" width="92" height="17" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="252" y="105" width="92" height="17" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="326" y="73" width="100" height="32" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="332" y="42" width="13" height="94" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="322" y1="73" x2="356" y2="73" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="322" y1="105" x2="356" y2="105" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="252" y1="64" x2="236" y2="64" stroke="#dc2626" stroke-width="2" marker-end="url(#ss6-load)"/>
  <line x1="252" y1="113" x2="236" y2="113" stroke="#dc2626" stroke-width="2" marker-end="url(#ss6-load)"/>
  <line x1="426" y1="89" x2="442" y2="89" stroke="#dc2626" stroke-width="2" marker-end="url(#ss6-load)"/>
  <text x="228" y="56" text-anchor="middle" fill="#dc2626" font-weight="600">P/2</text>
  <text x="228" y="126" text-anchor="middle" fill="#dc2626" font-weight="600">P/2</text>
  <text x="446" y="81" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="345" y="150" text-anchor="middle" fill="#334155" font-weight="600">2 cut planes</text>
  <text x="345" y="172" text-anchor="middle" fill="#334155">&tau; = P/[2(&pi;d&sup2;/4)]</text>
  <text x="230" y="212" text-anchor="middle" fill="#64748b">Same pin, same load: the second plane halves &tau;,</text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b">but the required diameter only drops by &radic;2 = 1.41&times;</text>
</svg>`;

const figClevis = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss7-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ss7-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Clevis pin: the load is cut by two planes</text>
  <rect x="70" y="84" width="120" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="136" width="120" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="70" y="84" width="20" height="72" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="170" y="104" width="190" height="32" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="178" y="66" width="18" height="108" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="168" y1="104" x2="206" y2="104" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="168" y1="136" x2="206" y2="136" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="206" y1="104" x2="248" y2="80" stroke="#64748b" stroke-width="1"/>
  <line x1="206" y1="136" x2="248" y2="164" stroke="#64748b" stroke-width="1"/>
  <text x="252" y="76" fill="#dc2626" font-weight="600">shear plane 1</text>
  <text x="252" y="170" fill="#dc2626" font-weight="600">shear plane 2</text>
  <line x1="70" y1="120" x2="38" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss7-load)"/>
  <line x1="360" y1="120" x2="396" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss7-load)"/>
  <text x="52" y="108" text-anchor="middle" fill="#dc2626" font-weight="600">P = 20 kN</text>
  <text x="406" y="112" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <line x1="178" y1="192" x2="196" y2="192" stroke="#64748b" stroke-width="1" marker-end="url(#ss7-dim)"/>
  <line x1="178" y1="186" x2="178" y2="198" stroke="#64748b"/>
  <line x1="196" y1="186" x2="196" y2="198" stroke="#64748b"/>
  <text x="187" y="214" text-anchor="middle" fill="#64748b">pin diameter d</text>
  <text x="230" y="232" text-anchor="middle" fill="#334155">each plane carries P/2 = 10 kN</text>
</svg>`;

const figLap = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss8-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Bolted lap joint: one shear plane</text>
  <rect x="50" y="80" width="200" height="22" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="210" y="102" width="200" height="22" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="216" y="52" width="30" height="10" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <rect x="224" y="62" width="14" height="80" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <rect x="216" y="142" width="30" height="10" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="204" y1="102" x2="258" y2="102" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <line x1="50" y1="91" x2="24" y2="91" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss8-load)"/>
  <line x1="410" y1="113" x2="436" y2="113" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss8-load)"/>
  <text x="40" y="70" text-anchor="middle" fill="#dc2626" font-weight="600">P = 12 kN</text>
  <text x="424" y="140" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="340" y="70" text-anchor="middle" fill="#dc2626">the dashed line is the cut plane</text>
  <text x="230" y="180" text-anchor="middle" fill="#334155">bolt d = 10 mm, plates t = 8 mm</text>
  <text x="230" y="202" text-anchor="middle" fill="#64748b">only one plane cuts the bolt, so the whole load crosses it</text>
</svg>`;

const figJoint = `<svg viewBox="0 0 460 276" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss9-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Four failure modes at one bolted lap joint</text>
  <rect x="70" y="48" width="320" height="110" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="103" r="14" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="150" cy="103" r="11" fill="#93c5fd" stroke="#334155" stroke-width="1.2"/>
  <path d="M150,89 A14,14 0 0,0 150,117" fill="none" stroke="#dc2626" stroke-width="4"/>
  <line x1="150" y1="89" x2="70" y2="89" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="150" y1="117" x2="70" y2="117" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
  <line x1="150" y1="89" x2="150" y2="48" stroke="#dc2626" stroke-width="2"/>
  <line x1="150" y1="117" x2="150" y2="158" stroke="#dc2626" stroke-width="2"/>
  <line x1="390" y1="103" x2="424" y2="103" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss9-load)"/>
  <text x="436" y="98" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="118" y="78" text-anchor="middle" fill="#dc2626" font-weight="700">1</text>
  <text x="104" y="138" text-anchor="middle" fill="#dc2626" font-weight="700">2</text>
  <text x="166" y="66" text-anchor="middle" fill="#dc2626" font-weight="700">3</text>
  <line x1="70" y1="176" x2="150" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="170" x2="70" y2="182" stroke="#64748b"/>
  <line x1="150" y1="170" x2="150" y2="182" stroke="#64748b"/>
  <text x="110" y="194" text-anchor="middle" fill="#64748b">edge distance e</text>
  <line x1="404" y1="48" x2="404" y2="158" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="48" x2="410" y2="48" stroke="#64748b"/>
  <line x1="398" y1="158" x2="410" y2="158" stroke="#64748b"/>
  <text x="420" y="107" text-anchor="middle" fill="#64748b">w</text>
  <text x="72" y="216" fill="#334155">1 bearing: A = d&middot;t</text>
  <text x="72" y="236" fill="#334155">2 tear-out: A = 2(e &minus; d/2)t</text>
  <text x="72" y="256" fill="#334155">3 net tension: A = (w &minus; d)t</text>
  <rect x="256" y="206" width="90" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="320" y="218" width="90" height="12" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <rect x="330" y="196" width="10" height="42" fill="#93c5fd" stroke="#334155" stroke-width="1.2"/>
  <line x1="318" y1="218" x2="352" y2="218" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4 3"/>
  <text x="336" y="256" text-anchor="middle" fill="#334155">4 bolt shear (side view)</text>
</svg>`;

const figPunch = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss10-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ss10-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Punching: the cut area is a cylinder wall</text>
  <rect x="60" y="140" width="140" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="260" y="140" width="140" height="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="60" y="110" width="340" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="200" y="110" width="60" height="30" fill="#fee2e2" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/>
  <rect x="200" y="46" width="60" height="64" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="32" x2="230" y2="44" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss10-load)"/>
  <line x1="200" y1="110" x2="200" y2="140" stroke="#dc2626" stroke-width="3.5"/>
  <line x1="260" y1="110" x2="260" y2="140" stroke="#dc2626" stroke-width="3.5"/>
  <text x="300" y="40" fill="#dc2626" font-weight="600">punch force F</text>
  <text x="120" y="130" fill="#334155">sheet</text>
  <text x="120" y="160" fill="#64748b">die</text>
  <line x1="200" y1="188" x2="260" y2="188" stroke="#64748b" stroke-width="1" marker-end="url(#ss10-dim)"/>
  <line x1="200" y1="182" x2="200" y2="194" stroke="#64748b"/>
  <line x1="260" y1="182" x2="260" y2="194" stroke="#64748b"/>
  <text x="230" y="208" text-anchor="middle" fill="#64748b">hole diameter d</text>
  <line x1="424" y1="110" x2="424" y2="140" stroke="#64748b" stroke-width="1"/>
  <line x1="418" y1="110" x2="430" y2="110" stroke="#64748b"/>
  <line x1="418" y1="140" x2="430" y2="140" stroke="#64748b"/>
  <text x="440" y="129" text-anchor="middle" fill="#64748b">t</text>
  <text x="230" y="230" text-anchor="middle" fill="#334155">sheared area = &pi;d&middot;t, not the hole area &pi;d&sup2;/4</text>
</svg>`;

const figPV = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss11-p" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="ss11-s" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Thin-wall cylinder: two cuts, two stresses</text>
  <rect x="90" y="62" width="250" height="88" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="90" cy="106" rx="17" ry="44" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="340" cy="106" rx="17" ry="44" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <path d="M130,62 L146,54 L162,62 L178,54 L194,62 L210,54 L226,62 L242,54 L258,62" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="190" y1="106" x2="190" y2="76" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ss11-p)"/>
  <line x1="190" y1="106" x2="190" y2="136" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ss11-p)"/>
  <line x1="190" y1="106" x2="160" y2="106" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ss11-p)"/>
  <line x1="190" y1="106" x2="220" y2="106" stroke="#dc2626" stroke-width="1.6" marker-end="url(#ss11-p)"/>
  <text x="190" y="160" text-anchor="middle" fill="#dc2626" font-weight="600">internal pressure p</text>
  <line x1="286" y1="56" x2="286" y2="156" stroke="#334155" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="286" y="48" text-anchor="middle" fill="#334155">cut &perp; axis</text>
  <rect x="384" y="92" width="30" height="30" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="399" y1="92" x2="399" y2="62" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss11-s)"/>
  <line x1="399" y1="122" x2="399" y2="152" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss11-s)"/>
  <line x1="384" y1="107" x2="368" y2="107" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss11-s)"/>
  <line x1="414" y1="107" x2="430" y2="107" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ss11-s)"/>
  <text x="399" y="54" text-anchor="middle" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">hoop</tspan></text>
  <text x="399" y="170" text-anchor="middle" fill="#1d4ed8" font-weight="600">&sigma;<tspan baseline-shift="sub" font-size="9">long</tspan></text>
  <text x="230" y="200" text-anchor="middle" fill="#334155">&sigma;<tspan baseline-shift="sub" font-size="9">hoop</tspan> = pr/t &nbsp; &nbsp; &sigma;<tspan baseline-shift="sub" font-size="9">long</tspan> = pr/2t &nbsp; (r = inner radius)</text>
  <text x="230" y="224" text-anchor="middle" fill="#64748b">hoop is twice longitudinal, so the wall splits lengthwise</text>
  <text x="230" y="246" text-anchor="middle" fill="#64748b">red zigzag: where an over-pressured cylinder actually tears</text>
</svg>`;

const figTwoMat = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss12-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Two materials in parallel: equal elongation</text>
  <line x1="230" y1="56" x2="230" y2="30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss12-load)"/>
  <text x="266" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">P = 30 kN</text>
  <rect x="90" y="56" width="280" height="16" fill="#334155"/>
  <rect x="90" y="170" width="280" height="16" fill="#334155"/>
  <rect x="150" y="72" width="34" height="98" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="266" y="72" width="48" height="98" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="186" x2="380" y2="186" stroke="#334155" stroke-width="2"/>
  <line x1="88" y1="196" x2="98" y2="186" stroke="#64748b"/>
  <line x1="120" y1="196" x2="130" y2="186" stroke="#64748b"/>
  <line x1="152" y1="196" x2="162" y2="186" stroke="#64748b"/>
  <line x1="184" y1="196" x2="194" y2="186" stroke="#64748b"/>
  <line x1="216" y1="196" x2="226" y2="186" stroke="#64748b"/>
  <line x1="248" y1="196" x2="258" y2="186" stroke="#64748b"/>
  <line x1="280" y1="196" x2="290" y2="186" stroke="#64748b"/>
  <line x1="312" y1="196" x2="322" y2="186" stroke="#64748b"/>
  <line x1="344" y1="196" x2="354" y2="186" stroke="#64748b"/>
  <text x="167" y="118" text-anchor="middle" fill="#334155" font-weight="600">A</text>
  <text x="290" y="118" text-anchor="middle" fill="#334155" font-weight="600">B</text>
  <text x="130" y="222" text-anchor="middle" fill="#334155">A: steel, 100 mm&sup2;</text>
  <text x="130" y="240" text-anchor="middle" fill="#64748b">E = 200 GPa</text>
  <text x="330" y="222" text-anchor="middle" fill="#334155">B: aluminum, 200 mm&sup2;</text>
  <text x="330" y="240" text-anchor="middle" fill="#64748b">E = 70 GPa</text>
  <text x="230" y="258" text-anchor="middle" fill="#64748b">rigid plates force equal &Delta;L, so load splits by AE/L</text>
</svg>`;

const figIndet = `<svg viewBox="0 0 460 234" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss13-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ss13-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Fixed at both ends: equilibrium is not enough</text>
  <line x1="70" y1="66" x2="70" y2="152" stroke="#334155" stroke-width="3"/>
  <line x1="58" y1="80" x2="70" y2="68" stroke="#64748b"/>
  <line x1="58" y1="100" x2="70" y2="88" stroke="#64748b"/>
  <line x1="58" y1="120" x2="70" y2="108" stroke="#64748b"/>
  <line x1="58" y1="140" x2="70" y2="128" stroke="#64748b"/>
  <line x1="390" y1="66" x2="390" y2="152" stroke="#334155" stroke-width="3"/>
  <line x1="390" y1="68" x2="402" y2="80" stroke="#64748b"/>
  <line x1="390" y1="88" x2="402" y2="100" stroke="#64748b"/>
  <line x1="390" y1="108" x2="402" y2="120" stroke="#64748b"/>
  <line x1="390" y1="128" x2="402" y2="140" stroke="#64748b"/>
  <rect x="70" y="96" width="320" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="177" y1="86" x2="177" y2="132" stroke="#334155" stroke-width="1.4" stroke-dasharray="5 3"/>
  <line x1="177" y1="109" x2="238" y2="109" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss13-load)"/>
  <text x="262" y="84" fill="#dc2626" font-weight="600">P = 60 kN</text>
  <text x="70" y="56" text-anchor="middle" fill="#334155" font-weight="600">A</text>
  <text x="390" y="56" text-anchor="middle" fill="#334155" font-weight="600">B</text>
  <line x1="70" y1="164" x2="177" y2="164" stroke="#64748b" stroke-width="1" marker-end="url(#ss13-dim)"/>
  <line x1="177" y1="164" x2="390" y2="164" stroke="#64748b" stroke-width="1" marker-end="url(#ss13-dim)"/>
  <line x1="70" y1="158" x2="70" y2="170" stroke="#64748b"/>
  <line x1="177" y1="158" x2="177" y2="170" stroke="#64748b"/>
  <line x1="390" y1="158" x2="390" y2="170" stroke="#64748b"/>
  <text x="123" y="184" text-anchor="middle" fill="#64748b">a = 0.4 m</text>
  <text x="283" y="184" text-anchor="middle" fill="#64748b">b = 0.8 m</text>
  <text x="230" y="212" text-anchor="middle" fill="#334155">compatibility: the two segments must stretch and shrink by the same amount</text>
</svg>`;

const figGap = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss14-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Expansion into a clearance gap</text>
  <line x1="80" y1="66" x2="80" y2="152" stroke="#334155" stroke-width="3"/>
  <line x1="68" y1="80" x2="80" y2="68" stroke="#64748b"/>
  <line x1="68" y1="100" x2="80" y2="88" stroke="#64748b"/>
  <line x1="68" y1="120" x2="80" y2="108" stroke="#64748b"/>
  <line x1="68" y1="140" x2="80" y2="128" stroke="#64748b"/>
  <line x1="382" y1="66" x2="382" y2="152" stroke="#334155" stroke-width="3"/>
  <line x1="382" y1="68" x2="394" y2="80" stroke="#64748b"/>
  <line x1="382" y1="88" x2="394" y2="100" stroke="#64748b"/>
  <line x1="382" y1="108" x2="394" y2="120" stroke="#64748b"/>
  <line x1="382" y1="128" x2="394" y2="140" stroke="#64748b"/>
  <rect x="80" y="96" width="278" height="26" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <path d="M170 84 C175 72 187 72 192 84 C197 96 209 96 214 84 C219 72 231 72 236 84" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="203" y="66" text-anchor="middle" fill="#dc2626" font-weight="600">heated by &Delta;T</text>
  <line x1="358" y1="109" x2="376" y2="109" stroke="#dc2626" stroke-width="2" marker-end="url(#ss14-load)"/>
  <line x1="358" y1="140" x2="358" y2="164" stroke="#64748b"/>
  <line x1="382" y1="140" x2="382" y2="164" stroke="#64748b"/>
  <line x1="358" y1="158" x2="382" y2="158" stroke="#64748b" stroke-width="1"/>
  <text x="370" y="182" text-anchor="middle" fill="#64748b">gap g</text>
  <text x="200" y="112" text-anchor="middle" fill="#334155">steel bar, length L</text>
  <text x="230" y="206" text-anchor="middle" fill="#334155">nothing happens until the gap closes; only the excess builds stress</text>
</svg>`;

const figHole = `<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss15-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Which section carries the load?</text>
  <rect x="70" y="70" width="320" height="90" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="230" cy="115" r="18" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <line x1="230" y1="58" x2="230" y2="172" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="70" y1="115" x2="40" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss15-load)"/>
  <line x1="390" y1="115" x2="420" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss15-load)"/>
  <text x="34" y="104" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="428" y="104" text-anchor="middle" fill="#dc2626" font-weight="600">P</text>
  <text x="230" y="50" text-anchor="middle" fill="#dc2626">critical section</text>
  <text x="120" y="120" text-anchor="middle" fill="#334155">plate</text>
  <text x="230" y="192" text-anchor="middle" fill="#334155">w = 40 mm wide, t = 6 mm thick, hole d = 12 mm</text>
  <text x="230" y="214" text-anchor="middle" fill="#64748b">the hole is on the centreline, so two ligaments remain</text>
</svg>`;

const figPad = `<svg viewBox="0 0 460 224" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss16-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="24" text-anchor="middle" font-weight="600" fill="#334155">Bonded rubber pad in simple shear</text>
  <rect x="120" y="100" width="200" height="40" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4"/>
  <polygon points="120,140 320,140 355,100 155,100" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="100" y="140" width="240" height="18" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="155" y="82" width="200" height="18" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <line x1="110" y1="168" x2="120" y2="158" stroke="#64748b"/>
  <line x1="150" y1="168" x2="160" y2="158" stroke="#64748b"/>
  <line x1="190" y1="168" x2="200" y2="158" stroke="#64748b"/>
  <line x1="230" y1="168" x2="240" y2="158" stroke="#64748b"/>
  <line x1="270" y1="168" x2="280" y2="158" stroke="#64748b"/>
  <line x1="310" y1="168" x2="320" y2="158" stroke="#64748b"/>
  <line x1="100" y1="158" x2="340" y2="158" stroke="#334155" stroke-width="2"/>
  <line x1="355" y1="91" x2="400" y2="91" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss16-load)"/>
  <text x="330" y="64" text-anchor="middle" fill="#dc2626" font-weight="600">F = 1.5 kN</text>
  <line x1="90" y1="100" x2="90" y2="140" stroke="#64748b" stroke-width="1"/>
  <line x1="84" y1="100" x2="96" y2="100" stroke="#64748b"/>
  <line x1="84" y1="140" x2="96" y2="140" stroke="#64748b"/>
  <text x="72" y="124" text-anchor="middle" fill="#64748b">t</text>
  <text x="230" y="192" text-anchor="middle" fill="#334155">bonded area 2000 mm&sup2;, t = 8 mm, G = 1.2 MPa</text>
  <text x="230" y="214" text-anchor="middle" fill="#64748b">dashed outline: the undeformed pad</text>
</svg>`;

const figBore = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss17-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="ss17-p" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="115" y="24" text-anchor="middle" font-weight="600" fill="#334155">Free to bulge</text>
  <line x1="115" y1="42" x2="115" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss17-load)"/>
  <text x="140" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <rect x="60" y="66" width="110" height="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <path d="M72,80 C50,106 50,148 72,174 L158,174 C180,148 180,106 158,80 Z" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="60" y="174" width="110" height="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <text x="115" y="210" text-anchor="middle" fill="#334155">shape changes, volume does not</text>
  <text x="115" y="232" text-anchor="middle" fill="#64748b">behaves like a soft spring</text>
  <text x="345" y="24" text-anchor="middle" font-weight="600" fill="#334155">Confined in a rigid bore</text>
  <line x1="345" y1="42" x2="345" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss17-load)"/>
  <text x="370" y="54" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <line x1="288" y1="66" x2="288" y2="192" stroke="#334155" stroke-width="3"/>
  <line x1="402" y1="66" x2="402" y2="192" stroke="#334155" stroke-width="3"/>
  <line x1="276" y1="84" x2="288" y2="72" stroke="#64748b"/>
  <line x1="276" y1="112" x2="288" y2="100" stroke="#64748b"/>
  <line x1="276" y1="140" x2="288" y2="128" stroke="#64748b"/>
  <line x1="276" y1="168" x2="288" y2="156" stroke="#64748b"/>
  <line x1="402" y1="72" x2="414" y2="84" stroke="#64748b"/>
  <line x1="402" y1="100" x2="414" y2="112" stroke="#64748b"/>
  <line x1="402" y1="128" x2="414" y2="140" stroke="#64748b"/>
  <line x1="402" y1="156" x2="414" y2="168" stroke="#64748b"/>
  <rect x="290" y="66" width="112" height="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <rect x="290" y="80" width="112" height="98" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <rect x="290" y="178" width="112" height="14" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
  <line x1="330" y1="112" x2="296" y2="112" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#ss17-p)"/>
  <line x1="362" y1="112" x2="396" y2="112" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#ss17-p)"/>
  <line x1="330" y1="148" x2="296" y2="148" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#ss17-p)"/>
  <line x1="362" y1="148" x2="396" y2="148" stroke="#1d4ed8" stroke-width="1.6" marker-end="url(#ss17-p)"/>
  <text x="345" y="134" text-anchor="middle" fill="#1d4ed8" font-weight="600">wall pressure</text>
  <text x="345" y="210" text-anchor="middle" fill="#334155">cannot bulge, cannot compress</text>
  <text x="345" y="232" text-anchor="middle" fill="#64748b">acts like trapped fluid: stiffness soars</text>
</svg>`;

const figFracture = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <text x="115" y="28" text-anchor="middle" font-weight="600" fill="#334155">Ductile overload</text>
  <circle cx="115" cy="104" r="60" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="115" cy="104" r="46" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <circle cx="115" cy="104" r="30" fill="#cbd5e1" stroke="#334155" stroke-width="1.2"/>
  <path d="M100,94 L106,100 L98,106 L108,112" fill="none" stroke="#64748b" stroke-width="1"/>
  <path d="M120,92 L128,98 L118,104 L128,110" fill="none" stroke="#64748b" stroke-width="1"/>
  <path d="M110,116 L118,120 L108,124" fill="none" stroke="#64748b" stroke-width="1"/>
  <text x="115" y="186" text-anchor="middle" fill="#334155">fibrous grey centre,</text>
  <text x="115" y="204" text-anchor="middle" fill="#334155">45&deg; shear lip at the rim</text>
  <text x="115" y="222" text-anchor="middle" fill="#64748b">visibly necked (dashed = original)</text>
  <text x="345" y="28" text-anchor="middle" font-weight="600" fill="#334155">Brittle fracture</text>
  <circle cx="345" cy="104" r="60" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4"/>
  <circle cx="345" cy="104" r="58" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <line x1="345" y1="104" x2="300" y2="76" stroke="#94a3b8" stroke-width="1"/>
  <line x1="345" y1="104" x2="318" y2="140" stroke="#94a3b8" stroke-width="1"/>
  <line x1="345" y1="104" x2="372" y2="150" stroke="#94a3b8" stroke-width="1"/>
  <line x1="345" y1="104" x2="396" y2="86" stroke="#94a3b8" stroke-width="1"/>
  <line x1="345" y1="104" x2="352" y2="50" stroke="#94a3b8" stroke-width="1"/>
  <line x1="345" y1="104" x2="392" y2="128" stroke="#94a3b8" stroke-width="1"/>
  <text x="345" y="186" text-anchor="middle" fill="#334155">flat and square to the load,</text>
  <text x="345" y="204" text-anchor="middle" fill="#334155">shiny cleavage facets</text>
  <text x="345" y="222" text-anchor="middle" fill="#64748b">no measurable necking</text>
</svg>`;

const figBolt = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="12">
  <defs>
    <marker id="ss19-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="118" y="28" text-anchor="middle" font-weight="600" fill="#334155">Preloaded joint</text>
  <rect x="60" y="90" width="130" height="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="60" y="116" width="130" height="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="100" y="56" width="34" height="12" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <rect x="110" y="68" width="14" height="96" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <rect x="100" y="164" width="34" height="12" fill="#93c5fd" stroke="#334155" stroke-width="1.5"/>
  <line x1="178" y1="90" x2="178" y2="58" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss19-load)"/>
  <line x1="178" y1="142" x2="178" y2="174" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ss19-load)"/>
  <text x="196" y="52" fill="#dc2626" font-weight="600">P</text>
  <text x="196" y="188" fill="#dc2626" font-weight="600">P</text>
  <text x="118" y="212" text-anchor="middle" fill="#64748b">bolt in tension,</text>
  <text x="118" y="230" text-anchor="middle" fill="#64748b">members in compression</text>
  <text x="340" y="28" text-anchor="middle" font-weight="600" fill="#334155">Stiffness model</text>
  <rect x="250" y="70" width="180" height="12" fill="#334155"/>
  <rect x="250" y="170" width="180" height="12" fill="#334155"/>
  <path d="M290,82 L278,94 L302,106 L278,118 L302,130 L278,142 L302,154 L290,166 L290,170" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <path d="M390,82 L378,94 L402,106 L378,118 L402,130 L378,142 L402,154 L390,166 L390,170" fill="none" stroke="#64748b" stroke-width="2.2"/>
  <text x="290" y="198" text-anchor="middle" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="9">b</tspan> (bolt)</text>
  <text x="390" y="198" text-anchor="middle" fill="#64748b" font-weight="600">k<tspan baseline-shift="sub" font-size="9">m</tspan> (members)</text>
  <text x="340" y="222" text-anchor="middle" fill="#334155">C = k<tspan baseline-shift="sub" font-size="9">b</tspan>/(k<tspan baseline-shift="sub" font-size="9">b</tspan> + k<tspan baseline-shift="sub" font-size="9">m</tspan>)</text>
  <text x="340" y="242" text-anchor="middle" fill="#64748b">stiff members + soft bolt keeps C small</text>
</svg>`;

const extra: Question[] = [
  {
    id: "stress-strain-q25",
    type: "mc",
    difficulty: 1,
    prompt: "<p>Two joints carry the same 20 kN through the same pin. In the first the pin passes through a two-plate lap; in the second the same pin sits in a clevis. Compared with the lap joint, what shear stress does the clevis pin see?</p>",
    figure: figShear,
    choices: [
      "The same, because the pin and the load are identical",
      "Half, because the load is shared by two cut planes",
      "Double, because two planes each carry the full load",
      "A quarter, because area and planes both double",
    ],
    answer: 1,
    explanation: `<p>Pass a section through the lap joint and one plane transmits all 20 kN. Pass sections through the clevis and two planes each transmit 10 kN over the same pin area, so &tau; halves.</p>
<p class="eq">&tau;<sub>single</sub> = P/(&pi;d&sup2;/4) &nbsp; &nbsp; &tau;<sub>double</sub> = P/[2(&pi;d&sup2;/4)]</p>
<p>That does not let you halve the pin diameter. Required area halves and area goes as d&sup2;, so the diameter drops by only &radic;2: a 16 mm single-shear pin becomes 11.3 mm, not 8 mm.</p>`,
  },
  {
    id: "stress-strain-q26",
    type: "mc",
    difficulty: 2,
    prompt: "<p>The clevis pin shown must carry 20 kN with an allowable shear stress of 100 MPa. What is the smallest pin diameter that works?</p>",
    figure: figClevis,
    choices: ["8.0 mm", "16.0 mm", "11.3 mm", "22.6 mm"],
    answer: 2,
    explanation: `<p class="eq">A = P/(2&tau;) = 20000/(2 &times; 100) = 100 mm&sup2;</p>
<p class="eq">d = &radic;(4A/&pi;) = &radic;(400/&pi;) = <strong>11.3 mm</strong></p>
<p>Two planes carry 10 kN each, so size the area per plane. 16.0 mm treats it as single shear, 8.0 mm halves the area twice, and 22.6 mm doubles the diameter instead of the area.</p>`,
  },
  {
    id: "stress-strain-q27",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>In the lap joint shown a single 10 mm diameter bolt transfers 12 kN between two plates. What is the average shear stress in the bolt, in MPa?</p>",
    figure: figLap,
    answer: 153,
    unit: "MPa",
    tolerance: 0.03,
    explanation: `<p class="eq">A = &pi;d&sup2;/4 = &pi;(10)&sup2;/4 = 78.5 mm&sup2;</p>
<p class="eq">&tau; = P/A = 12000/78.5 = <strong>153 MPa</strong></p>
<p>Only one plane cuts this bolt, so the whole 12 kN crosses one bolt cross-section. The double-shear formula gives 76.4 MPa and would let you fit a bolt half as strong as the joint needs. Using &pi;d&sup2; instead of &pi;d&sup2;/4 gives 38.2 MPa; the area of a 10 mm circle is about 79 mm&sup2;, not 314.</p>`,
  },
  {
    id: "stress-strain-q28",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A bolted lap joint is redesigned by doubling the plate thickness while keeping the same bolt diameter, the same plate width, and the same edge distance. Which failure mode gains nothing from that change?</p>",
    figure: figJoint,
    choices: [
      "Bolt shear, since the pin cross-section does not change",
      "Bearing, since the projected area stays exactly the same",
      "Tear-out, since the edge distance has not been changed",
      "Net tension, since the hole diameter has not changed",
    ],
    answer: 0,
    explanation: `<p>Walk each mode and ask whether t appears in its area. Bearing uses d&middot;t, so it doubles. Tear-out uses 2(e &minus; d/2)t, doubles. Net tension uses (w &minus; d)t, doubles. Bolt shear uses &pi;d&sup2;/4, which contains no plate thickness at all, so it is completely unaffected.</p>
<p>Three of the four modes are plate modes and scale with thickness; the fourth is a fastener mode and scales with bolt diameter. If your joint is bolt-shear-limited, adding plate is wasted mass.</p>
<p>The distractors are each true statements about the <em>wrong</em> mode, which is how this gets asked: the point is whether you can enumerate the modes rather than recite one formula. A well-proportioned joint keeps the four capacities within about 20% of each other so no material is wasted.</p>`,
  },
  {
    id: "stress-strain-q29",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 10 mm bolt transfers 12 kN through an 8 mm thick plate at a bolted joint. What bearing stress does the hole wall see, and by what area?</p>",
    figure: figJoint,
    choices: [
      "47.7 MPa, using the hole circumference times thickness",
      "95.5 MPa, using half the circumference times thickness",
      "76.4 MPa, using two shear planes on the bolt shank",
      "150 MPa, using the projected area d times t",
    ],
    answer: 3,
    explanation: `<p class="eq">&sigma;<sub>b</sub> = P/(d&middot;t) = 12000/(10 &times; 8) = <strong>150 MPa</strong></p>
<p>Bearing stress is a contact pressure, and the convention smears the load over the <em>projected</em> area of the hole, the rectangle you see looking along the load direction. It is a nominal number rather than the true peak contact stress: the real distribution is roughly cosine-shaped over the loaded half of the hole and peaks about 4/&pi; higher. The projected-area convention survives because it is repeatable and code allowables are calibrated to it.</p>
<p>The distractors use the circumference, &pi;dt = 251 mm&sup2;, and half of it, 126 mm&sup2;. Both are areas of the hole <em>surface</em> rather than the projection, and both under-predict. 76.4 MPa is the double-shear bolt stress, a different mode entirely.</p>
<p>Bearing is what makes holes go oval in service, so aluminium and composite joints, with their low bearing allowables, are usually bearing-limited rather than bolt-limited.</p>`,
  },
  {
    id: "stress-strain-q30",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 10 mm bolt in an 8 mm thick plate carries 12 kN, with the hole centred 20 mm from the free edge. Estimate the average tear-out shear stress on the two planes running from the hole to that edge, in MPa.</p>",
    figure: figJoint,
    answer: 50,
    unit: "MPa",
    explanation: `<p>Tear-out is the bolt ripping a plug of plate material out toward the free edge. Two shear planes resist it, each running from the edge of the hole to the plate edge, a length of e &minus; d/2.</p>
<p class="eq">A = 2(e &minus; d/2)t = 2(20 &minus; 5)(8) = 240 mm&sup2;</p>
<p class="eq">&tau; = P/A = 12000/240 = <strong>50 MPa</strong></p>
<p>Using the full edge distance e = 20 mm gives 320 mm&sup2; and 37.5 MPa, unconservative, because the material between hole edge and plate edge is all there is.</p>
<p>Hence edge distance rules, with most practice specifying e &ge; 1.5d to 2d. At e = 2d = 20 mm the tear-out stress here is a third of the bolt shear stress, so tear-out is not critical. Drop e to 12 mm and the area falls to 112 mm&sup2;, &tau; jumps to 107 MPa, and tear-out becomes the governing mode.</p>`,
  },
  {
    id: "stress-strain-q31",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A machine has been in service two years. The bolts come out undamaged, no plate is cracked, but every hole has gone oval and the joint now rattles under load reversal. What was undersized, and what is the fix?</p>",
    figure: figJoint,
    choices: [
      "Bolt shear area; fit a larger bolt and enlarge the holes",
      "Bearing area; the hole wall was overstressed, so add plate thickness or more bolts",
      "Net section; widen the plate so the ligament beside the hole grows",
      "Tear-out length; move the holes further from the free plate edge",
    ],
    answer: 1,
    explanation: `<p>Read the evidence. Ovalled holes with intact bolts and intact plates is the signature of <strong>bearing</strong>: the hole wall was locally yielding under the bolt every cycle and slowly extruding material. Bolt shear would have sheared or bent bolts. Net-section failure would have cracked the plate through the ligament. Tear-out would have opened a slot to the free edge.</p>
<p>The fix follows from &sigma;<sub>b</sub> = P/(dt): raise d&middot;t, or cut P per bolt by adding fasteners. Thicker plate is usually cheapest, and a bushing or a larger-diameter bolt also works. A stronger bolt does nothing, because the bolt was never the limiting part.</p>
<p>Two things worth adding. Bearing allowables are often quoted at a permanent 2% hole elongation rather than at any fracture, so this is a serviceability limit. And the resulting clearance turns a friction joint into a bearing joint, letting the load reverse through the clearance, hammering the hole further and driving fretting fatigue.</p>`,
  },
  {
    id: "stress-strain-q32",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A press punches a 20 mm diameter hole through 3 mm steel sheet whose ultimate shear strength is 350 MPa. What press force is required, in kN?</p>",
    figure: figPunch,
    answer: 66.0,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p class="eq">A = &pi;d&middot;t = &pi;(20)(3) = 188 mm&sup2;</p>
<p class="eq">F = &tau;<sub>u</sub>A = 350(188) = 66,000 N = <strong>66.0 kN</strong></p>
<p>The punch shears the sheet on a cylindrical surface, the hole perimeter swept through the thickness. Using the hole&rsquo;s face area &pi;d&sup2;/4 = 314 mm&sup2; gives 110 kN and a badly oversized press. Nothing is being crushed through the face; a ring of material is being cut.</p>
<p>Two consequences. Punch force scales with d and t rather than d&sup2;, so a hole twice the diameter costs twice the force and not four times. And the same &pi;dt area governs shear-out of a boss around a pin, blanking, and hole-saw torque. Shaving the punch face to an angle spreads the cut over time and drops peak force substantially without changing the total work.</p>`,
  },
  {
    id: "stress-strain-q33",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A cylindrical air receiver has a 1.0 m inside diameter and an 8 mm wall, and runs at 1.5 MPa gauge. What hoop stress does the shell see?</p>",
    figure: figPV,
    choices: ["93.8 MPa", "187.5 MPa", "46.9 MPa", "23.4 MPa"],
    answer: 0,
    explanation: `<p class="eq">&sigma;<sub>hoop</sub> = pr/t = (1.5)(500)/8 = <strong>93.8 MPa</strong></p>
<p>Hoop stress uses the inside <em>radius</em>, half the 1.0 m bore, and the units work directly because MPa &times; mm / mm = MPa.</p>
<p>Every distractor is a real slip. 187.5 MPa replaces r with the diameter, the most common pressure-vessel error, and it happens to double the answer. 46.9 MPa is the longitudinal stress pr/2t, the right formula for the wrong cut. 23.4 MPa is both mistakes at once.</p>
<p>Check the model before the number: r/t = 500/8 = 62.5, comfortably above 10, so thin-wall membrane theory applies. And 94 MPa against a 240 MPa allowable for a mild-steel vessel is a sensible working level.</p>`,
  },
  {
    id: "stress-strain-q34",
    type: "mc",
    difficulty: 1,
    prompt: "<p>Heat a sausage in a pan and it splits along its length. Over-pressure a plastic bottle or a section of pipe and the same thing happens: a long axial tear, essentially never a clean break around the circumference. What does that behaviour tell you?</p>",
    choices: [
      "Longitudinal stress is twice hoop, so it tears the ends first",
      "Both stresses are equal, so the skin decides the tear direction",
      "Hoop stress is twice longitudinal, so cracks run axially",
      "Hoop stress is half longitudinal, so cracks run circumferentially",
    ],
    answer: 2,
    explanation: `<p>Take two cuts. Slice the cylinder lengthwise: pressure pushes on the projected area 2rL and two wall strips of area tL hold it, giving &sigma;<sub>hoop</sub> = pr/t. Slice it across: pressure acts on &pi;r&sup2; and a ring of area 2&pi;rt holds it, giving &sigma;<sub>long</sub> = pr/2t. The ratio is exactly 2:1 for any pressure and any material.</p>
<p>A crack opens perpendicular to the largest tensile stress, and hoop stress acts circumferentially, so the crack it drives runs <em>along</em> the axis. Hence the lengthwise split.</p>
<p>Design follows straight from this. Hoop governs wall thickness. Longitudinal weld seams in rolled-and-welded pipe see the full hoop stress and get the strictest inspection, which is exactly why spiral-welded pipe exists, since a helical seam only sees a resolved component. The ratio also explains why you can often pull a soda can apart end-to-end but cannot squeeze it flat once pressurised.</p>`,
  },
  {
    id: "stress-strain-q35",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A compressed-air receiver with a 600 mm inside diameter must hold 1.2 MPa gauge with an allowable membrane stress of 100 MPa. Ignoring corrosion allowance and weld efficiency, what minimum wall thickness does the cylindrical shell need, in mm?</p>",
    figure: figPV,
    answer: 3.6,
    unit: "mm",
    explanation: `<p class="eq">t = pr/&sigma;<sub>allow</sub> = (1.2)(300)/100 = <strong>3.6 mm</strong></p>
<p>Size against hoop, always the larger of the two membrane stresses. Sizing against the longitudinal stress gives 1.8 mm, exactly half the wall, and the shell tears open lengthwise at design pressure. Afterwards r/t = 83, so thin-wall theory was valid, and a real design adds corrosion allowance and a weld joint efficiency before rounding to stock plate.</p>`,
  },
  {
    id: "stress-strain-q36",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A colleague applies &sigma; = pr/t to the bore of a hydraulic manifold: 20 mm inside diameter, 15 mm of steel around it, 40 MPa internal pressure. He gets 26.7 MPa and declares it trivially safe. What is wrong?</p>",
    choices: [
      "The pressure is too high for any closed-form membrane solution",
      "The formula wants gauge pressure, and 40 MPa is absolute here",
      "The bore is too small, so surface finish dominates the stress",
      "r/t is 0.67, far below 10, so thick-wall equations are needed",
    ],
    answer: 3,
    explanation: `<p>Membrane theory assumes uniform stress through the wall, reasonable only when the wall is thin compared with the radius, with the usual cut-off at r/t &ge; 10. Here r/t = 10/15 = 0.67, so the assumption fails badly.</p>
<p>Use the thick-wall Lam&eacute; result instead. For a cylinder with internal pressure only, the hoop stress peaks at the <em>bore</em>:</p>
<p class="eq">&sigma;<sub>&theta;</sub> = p(r<sub>o</sub>&sup2; + r<sub>i</sub>&sup2;)/(r<sub>o</sub>&sup2; &minus; r<sub>i</sub>&sup2;) = 40(625 + 100)/(625 &minus; 100) = 55.2 MPa</p>
<p>More than double the thin-wall estimate, and it sits at the bore surface where machining marks and cross-drillings live. The pressure also adds a &minus;40 MPa radial stress there, so the bore is in a biaxial state and by Tresca the effective stress is 55.2 &minus; (&minus;40) = 95 MPa, nearly four times the number he quoted.</p>
<p>Thin-wall formulas are unconservative for thick vessels, and adding wall gives diminishing returns, which is why very high pressure containment uses autofrettage or compound cylinders rather than more steel.</p>`,
  },
  {
    id: "stress-strain-q37",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Two equal-length struts run side by side between the same pair of rigid end fittings, so whatever load the frame applies is shared between them. Strut A is steel with 100 mm<sup>2</sup> of section; strut B is aluminum with 200 mm<sup>2</sup>. Which one takes the bigger share?</p>",
    figure: figTwoMat,
    choices: [
      "A, because its AE product is larger despite less area",
      "B, because it has twice the cross-sectional area of A",
      "They share equally, since the two lengths are the same",
      "It depends on yield strength, which is not given here",
    ],
    answer: 0,
    explanation: `<p>Rigid fittings force both struts to change length by the same amount, so this is a parallel arrangement and load splits by axial stiffness k = AE/L. Lengths match, so compare AE:</p>
<p class="eq">steel: 100 &times; 200 = 20,000 &nbsp; &nbsp; aluminum: 200 &times; 70 = 14,000</p>
<p>Steel takes 20,000/34,000 = 59% of the load with half the section. <strong>The stiffer path attracts the load</strong>, and stiffness means AE, not A.</p>
<p>Splitting by area is the classic error, correct only when E and L also match. Yield strength is a red herring: it tells you when the elastic split stops being valid, not how the split works. Steel does yield first, for a separate reason. Equal strain makes the stress ratio equal the modulus ratio, 200/70 = 2.9, so the steel is working almost three times harder per unit area.</p>`,
  },
  {
    id: "stress-strain-q38",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>Two bars of equal length are clamped in parallel between rigid end plates. The steel bar has A = 100 mm<sup>2</sup> and E = 200 GPa; the aluminum bar has A = 200 mm<sup>2</sup> and E = 70 GPa. A total tensile load of 30 kN is applied to the plates. How much of it does the steel bar carry, in kN?</p>",
    figure: figTwoMat,
    answer: 17.6,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p>Equilibrium gives P<sub>s</sub> + P<sub>a</sub> = 30 kN, one equation and two unknowns, so this is indeterminate. Compatibility supplies the second: equal length change means equal strain, so each bar&rsquo;s share is proportional to its AE/L.</p>
<p class="eq">k<sub>s</sub> &prop; A<sub>s</sub>E<sub>s</sub> = (100)(200) = 20,000</p>
<p class="eq">k<sub>a</sub> &prop; A<sub>a</sub>E<sub>a</sub> = (200)(70) = 14,000</p>
<p class="eq">P<sub>s</sub> = 30 &times; 20000/(20000 + 14000) = 30(0.5882) = <strong>17.6 kN</strong></p>
<p>Aluminium takes the remaining 12.4 kN. Splitting by area alone would give the steel 30(100/300) = 10.0 kN, a 43% underestimate on the member working hardest.</p>
<p>The stresses check it: 17,600/100 = 176 MPa in the steel against 12,400/200 = 62 MPa in the aluminium, a ratio of 2.86, exactly E<sub>s</sub>/E<sub>a</sub> as equal strain requires.</p>`,
  },
  {
    id: "stress-strain-q39",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A steel member (E = 200 GPa, yield 250 MPa) and an aluminum member (E = 70 GPa, yield 270 MPa) of equal length are bonded between rigid plates so they always stretch together. Their areas are not given. As the applied load is raised, which one yields first?</p>",
    figure: figTwoMat,
    choices: [
      "Aluminum, since its lower modulus makes it strain more",
      "Steel, since equal strain makes its stress 2.9x higher",
      "Whichever has the smaller area, which is not given here",
      "Both at once, because they are forced to strain equally",
    ],
    answer: 1,
    explanation: `<p>Equal strain is the key, and it makes the areas irrelevant. With &epsilon; common to both,</p>
<p class="eq">&sigma;<sub>steel</sub>/&sigma;<sub>alum</sub> = E<sub>steel</sub>/E<sub>alum</sub> = 200/70 = 2.86</p>
<p>When the steel reaches its 250 MPa yield the aluminium is only at 250/2.86 = 87.5 MPa, nowhere near its 270 MPa. Steel yields first, and it would still yield first for any pair of areas.</p>
<p>Option 0 inverts the physics, since a lower modulus means less stress at the same strain. Option 2 reaches for area, which controls the load split but cancels out of the stress ratio.</p>
<p>Putting a stiff material in parallel with a compliant one concentrates stress in the stiff path. It is why a steel insert moulded into a plastic part takes almost all the load, why a rigid adhesive at the end of a lap joint sees the peak, and why carbon fibre spliced alongside aluminium reaches its limit first unless you deliberately soften the load introduction.</p>`,
  },
  {
    id: "stress-strain-q40",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A uniform steel bar 1.2 m long is welded to rigid walls at both ends. An axial load of 60 kN is applied at an interior section 0.4 m from the left wall. What reaction does the left wall provide?</p>",
    figure: figIndet,
    choices: [
      "30 kN, since a two-support structure splits the load evenly",
      "20 kN, in proportion to the 0.4 m distance from that wall",
      "40 kN, in proportion to the 0.8 m far segment",
      "60 kN, since the nearer wall must take the whole load",
    ],
    answer: 2,
    explanation: `<p>Two unknown reactions and one equilibrium equation, so write compatibility. The load point cannot move relative to the walls, so whatever the left segment stretches, the right segment shortens by the same amount. With the same A and E throughout:</p>
<p class="eq">R<sub>A</sub>a/(AE) = R<sub>B</sub>b/(AE) &nbsp;&rarr;&nbsp; R<sub>A</sub>a = R<sub>B</sub>b</p>
<p>Combine with R<sub>A</sub> + R<sub>B</sub> = P:</p>
<p class="eq">R<sub>A</sub> = Pb/L = 60(0.8)/1.2 = <strong>40 kN</strong>, &nbsp; R<sub>B</sub> = Pa/L = 20 kN</p>
<p>The inversion trips people. The reaction is proportional to the length of the <em>far</em> segment, because the <em>short</em> segment is the stiff one, k = AE/L, and stiff paths take load. Reading 0.4 m off the sketch and scaling by it directly gives the 20 kN distractor, a factor-of-two error on the critical wall. Shorten a to zero and the left wall should take everything: Pb/L &rarr; P, and it does.</p>`,
  },
  {
    id: "stress-strain-q41",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A steel bolt (A<sub>t</sub> = 84.3 mm<sup>2</sup>, E = 200 GPa, &alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C) clamps an aluminum spacer (A = 300 mm<sup>2</sup>, E = 70 GPa, &alpha; = 23&times;10<sup>&minus;6</sup>/&deg;C) over a 50 mm grip. It is tightened to 20 kN cold, then the whole assembly is heated 80 &deg;C uniformly. What is the new bolt tension, in kN?</p>",
    answer: 28.2,
    unit: "kN",
    tolerance: 0.03,
    explanation: `<p>The aluminium wants to grow more than the steel bolt does. Blocked from doing so, it pushes the bolt further open and preload <em>rises</em>. The driver is the mismatch, not either &alpha; alone.</p>
<p class="eq">free mismatch = (&alpha;<sub>a</sub> &minus; &alpha;<sub>b</sub>)&Delta;T&middot;L = (11&times;10<sup>&minus;6</sup>)(80)L</p>
<p>Compatibility: the extra bolt stretch plus the extra spacer compression must absorb that mismatch, so L cancels:</p>
<p class="eq">&Delta;F = (&alpha;<sub>a</sub> &minus; &alpha;<sub>b</sub>)&Delta;T / [1/(A<sub>b</sub>E<sub>b</sub>) + 1/(A<sub>s</sub>E<sub>s</sub>)]</p>
<p class="eq">1/(A<sub>b</sub>E<sub>b</sub>) = 1/(1.686&times;10<sup>7</sup>) = 5.93&times;10<sup>&minus;8</sup>; &nbsp; 1/(A<sub>s</sub>E<sub>s</sub>) = 1/(2.10&times;10<sup>7</sup>) = 4.76&times;10<sup>&minus;8</sup></p>
<p class="eq">&Delta;F = 8.80&times;10<sup>&minus;4</sup>/1.069&times;10<sup>&minus;7</sup> = 8230 N</p>
<p class="eq">F = 20.0 + 8.23 = <strong>28.2 kN</strong></p>
<p>A 41% preload jump from an 80 &deg;C soak. Aluminium-on-steel joints get checked hot for bolt overload and cold for loss of clamp, and cylinder-head and turbo-flange bolts so often have a long grip or a waisted shank because extra bolt compliance shrinks &Delta;F for the same mismatch.</p>`,
  },
  {
    id: "stress-strain-q42",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 500 mm steel bar is anchored at one end; its free end sits 0.30 mm short of a rigid stop. The bar is then heated 90 &deg;C. Use E = 200 GPa and &alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C. What compressive stress develops, in MPa?</p>",
    figure: figGap,
    answer: 96,
    unit: "MPa",
    explanation: `<p>Two stages. The bar expands freely and closes the gap; only the expansion beyond that point is resisted.</p>
<p class="eq">free growth = &alpha;&Delta;T&middot;L = (12&times;10<sup>&minus;6</sup>)(90)(500) = 0.54 mm</p>
<p>The gap is 0.30 mm, so 0.24 mm of growth is blocked. Convert that to a mechanical strain:</p>
<p class="eq">&epsilon; = 0.24/500 = 4.80&times;10<sup>&minus;4</sup></p>
<p class="eq">&sigma; = E&epsilon; = (200&times;10<sup>9</sup>)(4.80&times;10<sup>&minus;4</sup>) = <strong>96 MPa</strong> compressive</p>
<p>Equivalently, only the excess temperature counts: the gap closes at &Delta;T = 0.30/(500 &times; 12&times;10<sup>&minus;6</sup>) = 50 &deg;C, and &sigma; = E&alpha;(90 &minus; 50) = 96 MPa.</p>
<p>Applying E&alpha;&Delta;T to the full 90 &deg;C gives 216 MPa, more than double, and would send you specifying a much heavier section. Unlike the fully restrained case, length now matters: a longer bar closes the same gap at a lower temperature and ends up more stressed.</p>`,
  },
  {
    id: "stress-strain-q43",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 1.0 m bar (A = 200 mm<sup>2</sup>, E = 200 GPa, &alpha; = 12&times;10<sup>&minus;6</sup>/&deg;C) is anchored at one end and bears at the other against a support that deflects like a spring of stiffness 40 MN/m. The bar is heated 50 &deg;C. What compressive stress develops in it, in MPa?</p>",
    answer: 60,
    unit: "MPa",
    explanation: `<p>The support is not rigid, so the bar gets to expand a little and the thermal force falls. Model the bar and the support in series against the free thermal growth.</p>
<p class="eq">k<sub>bar</sub> = AE/L = (200&times;10<sup>&minus;6</sup>)(200&times;10<sup>9</sup>)/1.0 = 40 MN/m</p>
<p class="eq">free growth = &alpha;&Delta;T&middot;L = (12&times;10<sup>&minus;6</sup>)(50)(1.0) = 6.00&times;10<sup>&minus;4</sup> m</p>
<p class="eq">F = 6.00&times;10<sup>&minus;4</sup>/(1/40&times;10<sup>6</sup> + 1/40&times;10<sup>6</sup>) = 6.00&times;10<sup>&minus;4</sup>/5.0&times;10<sup>&minus;8</sup> = 12,000 N</p>
<p class="eq">&sigma; = F/A = 12000/(200&times;10<sup>&minus;6</sup>) = <strong>60 MPa</strong></p>
<p>Full restraint would give E&alpha;&Delta;T = 120 MPa. A support exactly as stiff as the bar halves the thermal stress, which is worth memorising, because it is the whole argument for compliant mounts, slotted holes and flexure feet on anything that gets hot. The general form &sigma; = E&alpha;&Delta;T &middot; k<sub>s</sub>/(k<sub>s</sub> + k<sub>bar</sub>) correctly gives zero for a free end and E&alpha;&Delta;T for an infinitely stiff one.</p>`,
  },
  {
    id: "stress-strain-q44",
    type: "mc",
    difficulty: 3,
    prompt: "<p>An aluminum cover plate is bolted at four corners to a steel chassis. The assembly is heated 100 &deg;C uniformly and comes back with elongated bolt holes and fretting marks around them. Where did the load come from?</p>",
    choices: [
      "From aluminum's own E&alpha;&Delta;T; the plate yields across mid-span",
      "From steel's higher modulus; the chassis buckles between bolts",
      "From trapped air pressure; the cover lifts away at the corners",
      "From the CTE mismatch between aluminum and steel, which the bolts have to resist in shear",
    ],
    answer: 3,
    explanation: `<p>Uniform heating on a free part produces displacement and no stress. What creates load here is that the two parts want different displacements. Over a bolt spacing L the aluminium grows (&alpha;<sub>a</sub> &minus; &alpha;<sub>s</sub>)&Delta;T&middot;L more than the steel beneath it, so for a 300 mm spacing that is (23 &minus; 12)&times;10<sup>&minus;6</sup> &times; 100 &times; 300 = 0.33 mm of relative slip demanded at the fastener.</p>
<p>The bolts are the only things tying the two together, so they take that mismatch as in-plane shear and bearing. Which is exactly the damage found: ovalled holes and fretting from repeated micro-slip on every thermal cycle.</p>
<p>Option 0 applies &sigma; = E&alpha;&Delta;T to the aluminium alone. That formula needs full external restraint, and here the restraint is another expanding part with its own compliance, so the driver is <strong>&Delta;&alpha;</strong> rather than &alpha;.</p>
<p>The standard fixes all let the mismatch happen: slotted or oversized holes away from one datum fastener, a floating shoulder-bolt and washer stack, a compliant gasket, or matching the CTEs. The same physics governs a PCB with a ceramic package soldered to it, where the solder joints play the role of the bolts and eventually crack.</p>`,
  },
  {
    id: "stress-strain-q45",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A rubber puck works well as a soft vibration mount when it sits in the open. The design is changed so the same puck sits inside a close-fitting steel bore with a piston pressing on it. The mount suddenly feels almost rigid. Why?</p>",
    figure: figBore,
    choices: [
      "&nu; near 0.5 means almost no volume change, so confinement leaves only bulk stiffness",
      "Rubber's shear modulus rises sharply once it touches steel",
      "The steel bore now carries the load in parallel with rubber",
      "Friction at the bore wall raises the rubber's elastic modulus",
    ],
    answer: 0,
    explanation: `<p>Rubber deforms easily by changing shape and hardly at all by changing volume. A Poisson&rsquo;s ratio near 0.4995 makes &Delta;V/V = &epsilon;(1 &minus; 2&nu;) essentially zero, and the bulk modulus K = E/[3(1 &minus; 2&nu;)] runs around 2 GPa, roughly water. The shear modulus is about 1 MPa.</p>
<p>In the open the puck squats and bulges sideways, which is shape change and costs almost nothing, so the mount is soft. Confine it in a bore and there is nowhere to bulge. The only way to move is to compress in volume, three orders of magnitude stiffer, so the rubber stops behaving like a spring and starts behaving like trapped fluid, transmitting near-hydrostatic pressure to the bore wall.</p>
<p>Elastomer mounts are therefore specified by shape factor, loaded area over free-to-bulge area, rather than by durometer alone, an O-ring groove is sized for roughly 75&ndash;85% fill, and overfilling a groove can hydraulically split a gland. It is also a well-known FEA pitfall, since standard displacement elements lock as &nu; approaches 0.5 and you need a hybrid formulation.</p>`,
  },
  {
    id: "stress-strain-q46",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A steel bar with &nu; = 0.30 is pulled to 2000 microstrain along its axis, free to contract sideways. What fractional volume change does that produce?</p>",
    choices: [
      "2000 microstrain, since volume follows the axial strain",
      "800 microstrain, from &epsilon;(1 &minus; 2&nu;)",
      "1400 microstrain, from &epsilon;(1 &minus; &nu;)",
      "Zero, because metals conserve volume when they are strained",
    ],
    answer: 1,
    explanation: `<p class="eq">&Delta;V/V = &epsilon; &minus; &nu;&epsilon; &minus; &nu;&epsilon; = &epsilon;(1 &minus; 2&nu;)</p>
<p class="eq">&Delta;V/V = 2000(1 &minus; 0.60) = <strong>800 microstrain</strong></p>
<p>Volumetric strain is the sum of the three direct strains, one axial &epsilon; and two lateral &minus;&nu;&epsilon;. The bar does get bigger, but only 40% as much as the axial strain suggests, because the sideways contraction eats the rest. Option 2 counts only one lateral direction.</p>
<p>The (1 &minus; 2&nu;) factor is the whole story of Poisson&rsquo;s ratio. At &nu; = 0, cork, volume follows the axial strain exactly. At &nu; = 0.5, rubber, it is identically zero and the material is incompressible. Metals sit around 0.3, which is also why 0.5 is the thermodynamic upper bound: a positive bulk modulus K = E/[3(1 &minus; 2&nu;)] requires &nu; &lt; 0.5. This is <em>elastic</em> volume change; plastic flow in metals is incompressible regardless of &nu;, which is why yield criteria depend on deviatoric stress only.</p>`,
  },
  {
    id: "stress-strain-q47",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 20.0 mm diameter rod is stretched to an axial strain of 1500 microstrain, with &nu; = 0.29. By how much does its diameter change, in mm? Report a decrease as a negative number.</p>",
    answer: -0.0087,
    unit: "mm",
    tolerance: 0.03,
    explanation: `<p class="eq">&epsilon;<sub>lat</sub> = &minus;&nu;&epsilon;<sub>axial</sub> = &minus;0.29(1500&times;10<sup>&minus;6</sup>) = &minus;435&times;10<sup>&minus;6</sup></p>
<p class="eq">&Delta;d = &epsilon;<sub>lat</sub>d = (&minus;435&times;10<sup>&minus;6</sup>)(20.0) = <strong>&minus;0.00870 mm</strong></p>
<p>Under nine microns, and the sign matters: a bar in tension necks down, so the diameter shrinks. Forget the microstrain conversion and you get a diameter change of 8.7 metres, which is the useful part of the exercise, since the answer should always be a small fraction of the original dimension.</p>
<p>Where 8.7 microns actually matters: an interference fit relaxing as the shaft is loaded, a pin losing clearance in a bore, a strain-gauged load cell whose transverse gauges read this contraction on purpose, and any precision fit with a tolerance band a few microns wide.</p>`,
  },
  {
    id: "stress-strain-q48",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A tensile coupon is recorded at an engineering stress of 300 MPa and an engineering strain of 0.20, still uniformly deforming with no neck. What is the true stress at that instant?</p>",
    choices: ["300 MPa", "250 MPa", "360 MPa", "330 MPa"],
    answer: 2,
    explanation: `<p class="eq">&sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>) = 300(1.20) = <strong>360 MPa</strong></p>
<p>Engineering stress divides by the original area, true stress by the current smaller one. Assuming constant volume and uniform deformation, A<sub>0</sub>L<sub>0</sub> = AL gives A = A<sub>0</sub>/(1 + &epsilon;).</p>
<p>The 250 MPa option divides by 1.2 instead of multiplying. True stress is always the larger of the two in tension, because the load is carried by less material than the original area implies. The matching strain conversion is &epsilon;<sub>true</sub> = ln(1 + 0.20) = 0.182, slightly smaller than the engineering value. Both conditions, uniform deformation and volume conservation, hold up to the ultimate point and only one survives past it, which is why the formula is invalid once a neck forms.</p>`,
  },
  {
    id: "stress-strain-q49",
    type: "mc",
    difficulty: 3,
    prompt: "<p>An engineer builds an FEA hardening card by applying &sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>) to the whole recorded curve, including everything past the ultimate point. What is wrong with the numbers beyond that point?</p>",
    choices: [
      "Nothing; that relation is exact at any strain in a metal",
      "Volume stops being conserved as soon as plastic flow starts",
      "Engineering strain can no longer be measured after the UTS",
      "Strain localizes into the neck, so gauge strain no longer describes every section",
    ],
    answer: 3,
    explanation: `<p>The conversion assumes deformation is <em>uniform</em> over the gauge length, so that the extensometer reading describes every cross-section equally. Necking destroys that. After the ultimate point deformation concentrates into a short region, the neck thins far faster than the gauge average, and the recorded engineering strain no longer represents what the material in the neck is doing. The converted stresses come out far too low, and an FEA card built from them predicts a part much weaker at large strain than reality.</p>
<p>Volume conservation is not the problem. Plastic flow in metals is essentially incompressible, and that assumption still holds.</p>
<p>How it is actually done: fit a hardening law such as Hollomon, Swift or Voce to the uniform region up to the UTS and extrapolate; or measure the minimum neck diameter directly and apply a Bridgman correction for the triaxial stress state that develops there; or run inverse FE, adjusting the hardening curve until the simulated load-displacement matches the test. Any competent forming or crash card does one of these.</p>`,
  },
  {
    id: "stress-strain-q50",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 6061 aluminum alloy has E = 70 GPa and &nu; = 0.33. What shear modulus does isotropic elasticity imply, in GPa?</p>",
    answer: 26.3,
    unit: "GPa",
    tolerance: 0.025,
    explanation: `<p class="eq">G = E/[2(1 + &nu;)] = 70/[2(1.33)] = 70/2.66 = <strong>26.3 GPa</strong></p>
<p>For an isotropic linear elastic material only two of E, G and &nu; are independent. The number to carry is that G is roughly E/2.6 for ordinary metals, never E/2: steel 200/2.6 = 77 GPa, aluminium 26 GPa. Guessing G = E/2 = 35 GPa here overpredicts torsional and shear stiffness by a third.</p>
<p>It bites in torsional deflection, TL/(GJ), in shear deflection of a short beam, and in any FEA material card that takes E and &nu; and silently computes this G for you. Type in a G inconsistent with your E and &nu; and an isotropic solver will ignore it. The relation is isotropic-only: for unidirectional composites or rolled sheet with strong texture, G is an independent measured property.</p>`,
  },
  {
    id: "stress-strain-q51",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>The bonded rubber pad shown has a 2000 mm<sup>2</sup> bonded area, is 8 mm thick, and has G = 1.2 MPa. A lateral force of 1.5 kN shears it. Estimate the lateral deflection of the top plate, in mm.</p>",
    figure: figPad,
    answer: 5.0,
    unit: "mm",
    explanation: `<p class="eq">&tau; = F/A = 1500/2000 = 0.750 MPa</p>
<p class="eq">&gamma; = &tau;/G = 0.750/1.2 = 0.625</p>
<p class="eq">&delta; = &gamma;t = 0.625(8) = <strong>5.0 mm</strong></p>
<p>A shear strain of 62.5% would be absurd in a metal and is routine for rubber, which is why elastomer mounts are designed to work in shear rather than compression. The deflection is large, linear over a wide range, and the stiffness F/&delta; = GA/t is easy to tune with geometry.</p>
<p>Three caveats. The simple-shear model ignores the bending a tall pad also sees, rubber goes noticeably nonlinear above roughly &gamma; = 1, and the effective stiffness rises if the pad is confined so it cannot bulge. For fatigue life, most mount specifications cap working shear strain near 0.25 to 0.5.</p>`,
  },
  {
    id: "stress-strain-q52",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 25 mm by 25 mm epoxy bond line, 0.20 mm thick, transmits 4.5 kN in shear between two aluminum tabs. The cured adhesive has G = 1.0 GPa. What shear strain does that imply, in microstrain?</p>",
    answer: 7200,
    unit: "microstrain",
    explanation: `<p class="eq">&tau; = F/A = 4500/(25 &times; 25) = 4500/625 = 7.20 MPa</p>
<p class="eq">&gamma; = &tau;/G = 7.20/1000 = 7.20&times;10<sup>&minus;3</sup> = <strong>7200 microstrain</strong></p>
<p>Average shear stress over the bonded area, then Hooke&rsquo;s law in shear with the modulus in matching units, G = 1.0 GPa = 1000 MPa. The movement across the bond line is &gamma;t = 0.0072(0.20) = 1.4 microns, which is why a well-made adhesive joint feels rigid even though the adhesive is a hundred times more compliant than the metal.</p>
<p>Structural epoxies have G around 0.5 to 2 GPa, not the 80 GPa of steel, so an adhesive quoted with a steel-class modulus means the problem is wrong. And the uniform-shear assumption is optimistic: real single-lap bonds peak at the overlap ends, typically at 2 to 3 times the average, which is why overlap length gives diminishing returns and why bond failures start at the edges.</p>`,
  },
  {
    id: "stress-strain-q53",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A tie must carry 8 kN. Its critical section is notched with K<sub>t</sub> = 3.0, and the material yields at 480 MPa. What net-section area puts the notch root exactly at yield, in mm<sup>2</sup>?</p>",
    answer: 50,
    unit: "mm^2",
    explanation: `<p>Work backwards from the local peak rather than the nominal stress. The condition is K<sub>t</sub>&sigma;<sub>nom</sub> = S<sub>y</sub>, with &sigma;<sub>nom</sub> = P/A on the net section:</p>
<p class="eq">K<sub>t</sub>P/A = S<sub>y</sub> &nbsp;&rarr;&nbsp; A = K<sub>t</sub>P/S<sub>y</sub></p>
<p class="eq">A = 3.0(8000)/480 = <strong>50 mm&sup2;</strong></p>
<p>Forward it checks: &sigma;<sub>nom</sub> = 8000/50 = 160 MPa and 3.0(160) = 480 MPa, at yield exactly. Ignoring K<sub>t</sub> would size the tie at 8000/480 = 16.7 mm&sup2;, a third of the area, putting the notch root at 1440 MPa nominal elastic stress, three times yield.</p>
<p>Handbook K<sub>t</sub> charts are almost always referenced to the <em>net</em> section, so a gross-section stress with the same chart double-counts the hole. And for a ductile material under static load, local yielding at the root redistributes and the tie will not fail here. Under cyclic load this sizing becomes the real one, and there you would use K<sub>f</sub> rather than K<sub>t</sub>.</p>`,
  },
  {
    id: "stress-strain-q54",
    type: "mc",
    difficulty: 3,
    prompt: "<p>Two identical ductile-steel brackets differ only at one shoulder: one has a generous fillet with K<sub>t</sub> = 1.6, the other a sharp one with K<sub>t</sub> = 3.2. Under a purely static load, how much does the sharp fillet actually cost?</p>",
    choices: [
      "Little statically; local yielding blunts and redistributes it",
      "Half the static capacity, since peak stress is exactly doubled",
      "Nothing at all, because K<sub>t</sub> applies only to brittle materials",
      "All of it; the bracket fails once the notch root reaches yield",
    ],
    answer: 0,
    explanation: `<p>Under a static load on a ductile metal the notch root reaches yield, flows a little, and hands its excess load to the material beside it. The section keeps carrying until the <em>whole</em> net section yields, so static capacity is governed by net area and yield strength rather than by K<sub>t</sub>. Static design codes for ductile materials generally ignore stress concentration for that reason.</p>
<p>The distractors mark the two ways this gets over-read. Doubling K<sub>t</sub> does double the elastic peak, but elastic peak is not static capacity. And first yield at a notch root is a long way from failure in a ductile part; ask any bolt, whose thread roots run at K<sub>t</sub> near 3 by design.</p>
<p>Change the duty and the answer flips. Under cyclic load the notch root is where the crack starts, and fatigue strength scales roughly as 1/K<sub>f</sub>, so going from 1.6 to 3.2 can cut the endurance limit of that bracket by close to half. The same doubling is nearly free statically and brutal in fatigue, which is why &ldquo;is this load static or cyclic?&rdquo; comes before spending money on a radius.</p>`,
  },
  {
    id: "stress-strain-q55",
    type: "mc",
    difficulty: 1,
    prompt: "<p>The plate shown is 40 mm wide and 6 mm thick with a 12 mm hole on its centreline, pulled in tension. Which area belongs in the first-pass P/A check at the hole?</p>",
    figure: figHole,
    choices: [
      "40 &times; 6 = 240 mm&sup2;, the full gross section",
      "(40 &minus; 12) &times; 6 = 168 mm&sup2;, the net section",
      "12 &times; 6 = 72 mm&sup2;, the material the hole removed",
      "(40 &minus; 24) &times; 6 = 96 mm&sup2;, deducting two hole widths",
    ],
    answer: 1,
    explanation: `<p class="eq">A<sub>net</sub> = (w &minus; d)t = 28(6) = <strong>168 mm&sup2;</strong></p>
<p>Cut the plate on the section through the hole and ask what metal is actually there. Two ligaments remain, together (40 &minus; 12) = 28 mm wide, over the 6 mm thickness.</p>
<p>The gross area 240 mm&sup2; counts metal that has been drilled away and under-predicts stress by 30%. 72 mm&sup2; uses the hole itself, which carries nothing. 96 mm&sup2; deducts the hole twice, from thinking of a ligament on each side and subtracting d from each.</p>
<p>This is still <em>nominal</em> stress; the peak at the hole edge is roughly K<sub>t</sub> times it, with K<sub>t</sub> near 2.4 at this d/w ratio. And the net section is not automatically critical, since a hole close to a free edge can let tear-out govern first.</p>`,
  },
  {
    id: "stress-strain-q56",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 40 mm wide, 6 mm thick plate with a 12 mm centreline hole carries 30 kN in tension. Handbook charts give K<sub>t</sub> = 2.4 for this hole-to-width ratio, referenced to the net section. What elastic peak stress sits at the hole edge?</p>",
    figure: figHole,
    choices: [
      "300 MPa, from K<sub>t</sub> applied to the gross-section stress",
      "179 MPa, the net-section stress with no K<sub>t</sub> applied",
      "429 MPa, from K<sub>t</sub> times the net-section stress",
      "125 MPa, the gross-section stress with no K<sub>t</sub>",
    ],
    answer: 2,
    explanation: `<p class="eq">&sigma;<sub>net</sub> = P/A<sub>net</sub> = 30000/[(40 &minus; 12)(6)] = 30000/168 = 179 MPa</p>
<p class="eq">&sigma;<sub>peak</sub> = K<sub>t</sub>&sigma;<sub>net</sub> = 2.4(179) = <strong>429 MPa</strong></p>
<p>The chart&rsquo;s reference tells you which area to use in the first step. The 300 MPa option applies a net-referenced K<sub>t</sub> to the gross-section stress of 125 MPa, 30% low, and easy to do because chart axes rarely shout which convention they use. Read the caption: some sources publish K<sub>t</sub> on gross area, and the two differ by exactly w/(w &minus; d).</p>
<p>The other two stop halfway. 179 MPa is the right nominal stress with no concentration applied, and 125 MPa is neither.</p>
<p>In a ductile steel under static load, local yielding blunts 429 MPa and the plate will not fail. Under fatigue that hole edge is the crack site, and cold-expanding the hole to leave compressive residual stress is the standard aerospace fix.</p>`,
  },
  {
    id: "stress-strain-q57",
    type: "mc",
    difficulty: 1,
    prompt: "<p>An aluminum bracket is bolted to a chassis through a 6 mm thick rubber grommet. Tested on its own the bracket deflects 0.05 mm under service load, but the installed assembly measures 0.9 mm at the same load. What is going on?</p>",
    choices: [
      "The bolt preload was lost, so the joint is sliding not deflecting",
      "The aluminum yielded, adding permanent set to the measurement",
      "The grommet is stiffer than the bracket and takes the load",
      "Compliances add in series, so the soft grommet dominates",
    ],
    answer: 3,
    explanation: `<p>The load passes through the bracket and then through the grommet, one after the other, so the two are in series. Series members carry the same force and their deflections add: 0.05 mm from the bracket plus about 0.85 mm from the grommet.</p>
<p>In stiffness terms 1/k<sub>total</sub> = 1/k<sub>bracket</sub> + 1/k<sub>grommet</sub>, and the smallest stiffness dominates. Rubber at G near 1 MPa against aluminium at E = 70 GPa is not a close contest.</p>
<p>Which tells you what to do next. Stiffening the bracket cannot recover more than 0.05 mm however much metal you add. If the motion is unacceptable the grommet is the only lever: a harder durometer, a thinner section, a larger bearing area, or a metal crush sleeve so the bolt clamps metal to metal. Compliance audits walk the whole load path for this reason, because bearing clearances, gaskets, shims and thin adhesive layers routinely swamp the machined parts everyone blames.</p>`,
  },
  {
    id: "stress-strain-q58",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 25 mm wide, 3 mm thick aluminum strap is used as a tie in a test fixture. Its stress must not exceed 120 MPa. What is the largest load it may carry, in kN?</p>",
    answer: 9.0,
    unit: "kN",
    explanation: `<p class="eq">A = 25 &times; 3 = 75 mm&sup2;</p>
<p class="eq">P = &sigma;A = (120 N/mm&sup2;)(75 mm&sup2;) = 9000 N = <strong>9.0 kN</strong></p>
<p>Read 1 MPa as 1 N/mm<sup>2</sup> and no unit conversion is needed at all. Going through SI gives 120&times;10<sup>6</sup> &times; 75&times;10<sup>&minus;6</sup>, the same answer with two more chances to lose a factor of 10<sup>6</sup>.</p>
<p>Before quoting 9.0 kN, check the assumptions out loud. The strap must have no holes or slots in the loaded length, or you work on the net section; the load must be genuinely axial with no eccentricity adding bending; and 120 MPa must already include whatever safety factor the fixture requires.</p>`,
  },
  {
    id: "stress-strain-q59",
    type: "mc",
    difficulty: 3,
    prompt: "<p>You are handed two failed tensile specimens of the same nominal size. One is visibly narrowed at the break with a dull fibrous centre and a bright rim; the other is flat, square to the load, full diameter, and sparkles under a light. What do you conclude?</p>",
    figure: figFracture,
    choices: [
      "The first failed ductile, the second brittle by cleavage",
      "The first was loaded faster, which produced the necking",
      "The first was fatigue; beach marks make the fibrous look",
      "Both are ductile; only the surface finish differs here",
    ],
    answer: 0,
    explanation: `<p>Read the two signatures. Necking plus a fibrous grey centre plus a bright rim is ductile overload: voids nucleate and coalesce in the middle, then the remaining rim tears on planes of maximum shear at roughly 45&deg;, giving the classic cup-and-cone with its shear lip. Flat, square to the load, full diameter and sparkling is transgranular cleavage, where the facets are flat crystallographic planes reflecting light and the absence of any diameter change says essentially no plastic strain occurred.</p>
<p>Loading rate does matter, since high rate, low temperature and triaxial constraint all push a steel toward brittle behaviour, but it is a cause rather than a description and it would not make the necked specimen necked. Fatigue looks quite different: a smooth burnished region with beach marks radiating from one initiation site, then a rough final zone, and usually no necking at all.</p>
<p>What each conclusion buys you. Ductile overload means the load case was underestimated, so go back to the duty cycle. Cleavage in a steel that should be ductile means you are below its transition temperature, or the section is thick enough to impose plane strain, or the material is embrittled: a metallurgical investigation, not a load recalculation.</p>`,
  },
  {
    id: "stress-strain-q60",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A preloaded bolt of stiffness k<sub>b</sub> = 337 MN/m clamps a flange pair whose combined stiffness is k<sub>m</sub> = 1350 MN/m. A 10 kN external tensile load is then applied across the joint. How much of it reaches the bolt?</p>",
    figure: figBolt,
    choices: [
      "10 kN; the external load passes straight through the bolt",
      "2.0 kN, from C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>)",
      "8.0 kN, from the member share of the joint stiffness",
      "5.0 kN, because bolt and members split it evenly",
    ],
    answer: 1,
    explanation: `<p>In a preloaded joint the external load is shared. It stretches the bolt a little more and simultaneously un-compresses the clamped members by the same amount. Equal deflection means the split follows stiffness, exactly like two parallel bars, except the members&rsquo; share shows up as lost clamp force rather than as added bolt tension.</p>
<p class="eq">C = k<sub>b</sub>/(k<sub>b</sub> + k<sub>m</sub>) = 337/(337 + 1350) = 0.200</p>
<p class="eq">&Delta;F<sub>bolt</sub> = C&middot;P = 0.200(10) = <strong>2.0 kN</strong></p>
<p>The other 8.0 kN simply relieves the clamp. That is the whole reason preload exists: a bolt in a properly designed joint sees only about a fifth of any external load, so its fatigue stress range is a fifth of what you would naively assume.</p>
<p>The design lever runs opposite to intuition. You want C <em>small</em>, so a compliant bolt with a long grip or reduced waist, and stiff members with thick flanges and no soft gasket. Adding a soft gasket raises C and can quadruple the bolt&rsquo;s fatigue load. All of it holds only while the joint stays clamped: once the external load exceeds the preload the members separate, C jumps to 1.0, and the bolt takes everything.</p>`,
  },
];

export default extra;
