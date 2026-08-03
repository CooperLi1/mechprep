import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per question with topic-specific scenarios.

// q17 — torque diagram for a shaft with an input and two take-offs.
const figTorqueDiagram = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to8-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to8-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Internal torque steps only where torque enters or leaves</text>
  <!-- applied torques -->
  <path d="M70,56 A34,34 0 0 1 110,56" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to8-tq)"/>
  <text x="76" y="42" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">+120</text>
  <path d="M250,56 A34,34 0 0 0 210,56" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to8-tq)"/>
  <text x="244" y="42" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&minus;40</text>
  <path d="M380,56 A34,34 0 0 0 340,56" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to8-tq)"/>
  <text x="374" y="42" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&minus;80</text>
  <!-- shaft and pulleys -->
  <rect x="60" y="76" width="340" height="24" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="80" y="62" width="20" height="52" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="220" y="62" width="20" height="52" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="350" y="62" width="20" height="52" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="90" y="126" text-anchor="middle" fill="#64748b" font-size="12">motor</text>
  <text x="230" y="126" text-anchor="middle" fill="#64748b" font-size="12">machine 1</text>
  <text x="360" y="126" text-anchor="middle" fill="#64748b" font-size="12">machine 2</text>
  <!-- construction lines -->
  <line x1="90" y1="132" x2="90" y2="196" stroke="#64748b" stroke-width="0.8" stroke-dasharray="4 4"/>
  <line x1="230" y1="132" x2="230" y2="196" stroke="#64748b" stroke-width="0.8" stroke-dasharray="4 4"/>
  <line x1="360" y1="132" x2="360" y2="196" stroke="#64748b" stroke-width="0.8" stroke-dasharray="4 4"/>
  <!-- torque diagram -->
  <polygon points="90,196 90,144 230,144 230,161 360,161 360,196" fill="#dbeafe"/>
  <path d="M60,196 H90 V144 H230 V161 H360 V196 H400" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="60" y1="196" x2="412" y2="196" stroke="#64748b" stroke-width="1.4" marker-end="url(#to8-ax)"/>
  <line x1="60" y1="196" x2="60" y2="134" stroke="#64748b" stroke-width="1.4" marker-end="url(#to8-ax)"/>
  <text x="50" y="142" text-anchor="end" fill="#64748b" font-size="12">T</text>
  <text x="422" y="201" fill="#64748b" font-size="12">x</text>
  <text x="160" y="176" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">120 N&middot;m</text>
  <text x="295" y="184" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">80 N&middot;m</text>
  <text x="382" y="190" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">0</text>
  <text x="20" y="224" fill="#64748b" font-size="12">Only the first segment sees the full motor torque.</text>
  <text x="20" y="244" fill="#64748b" font-size="12">Size each segment from its own internal torque, not from the input.</text>
</svg>`;

// q39 — where torsional stress concentration lives: sharp step vs fillet.
const figShoulder = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Torsional K<tspan baseline-shift="sub" font-size="9">t</tspan> lives in the shoulder, not in the shank</text>
  <!-- sharp shoulder -->
  <text x="70" y="82" text-anchor="middle" fill="#64748b" font-size="12">&oslash;20</text>
  <text x="170" y="66" text-anchor="middle" fill="#64748b" font-size="12">&oslash;35</text>
  <path d="M40,90 H120 V75 H200 V145 H120 V130 H40 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="34" y1="110" x2="206" y2="110" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <circle cx="120" cy="90" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <circle cx="120" cy="130" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="120" y="172" text-anchor="middle" font-weight="600" fill="#dc2626">sharp step</text>
  <text x="120" y="192" text-anchor="middle" fill="#64748b" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 2.5</text>
  <!-- filleted shoulder -->
  <text x="280" y="82" text-anchor="middle" fill="#64748b" font-size="12">&oslash;20</text>
  <text x="378" y="66" text-anchor="middle" fill="#64748b" font-size="12">&oslash;35</text>
  <path d="M250,90 H324 A16,16 0 0 1 340,74 H410 V146 H340 A16,16 0 0 1 324,130 H250 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="244" y1="110" x2="416" y2="110" stroke="#64748b" stroke-width="0.9" stroke-dasharray="8 3 2 3"/>
  <path d="M324,90 A16,16 0 0 1 340,74" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <path d="M340,146 A16,16 0 0 1 324,130" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="330" y1="86" x2="302" y2="58" stroke="#64748b" stroke-width="1"/>
  <text x="298" y="56" text-anchor="end" fill="#64748b" font-size="12">r = 8</text>
  <text x="330" y="172" text-anchor="middle" font-weight="600" fill="#1d4ed8">generous fillet</text>
  <text x="330" y="192" text-anchor="middle" fill="#64748b" font-size="12">K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 1.3</text>
  <text x="20" y="220" fill="#64748b" font-size="12">Nominal Tc/J is identical; the sharp step nearly doubles the local peak.</text>
</svg>`;

// q60 — parallel torque paths: same twist, torque splits by GJ.
const figParallel = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to9-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Parallel shafts twist together, so torque splits by GJ</text>
  <!-- fixed plate -->
  <rect x="70" y="60" width="22" height="132" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <line x1="58" y1="72" x2="70" y2="60" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="96" x2="70" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="120" x2="70" y2="108" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="144" x2="70" y2="132" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="168" x2="70" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="192" x2="70" y2="180" stroke="#64748b" stroke-width="1"/>
  <!-- shafts -->
  <rect x="92" y="76" width="248" height="30" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="92" y="134" width="248" height="42" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <!-- loaded plate -->
  <rect x="340" y="60" width="22" height="132" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <path d="M395.4,86.2 A52,52 0 0 1 395.4,165.8" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to9-tq)"/>
  <text x="402" y="76" fill="#dc2626" font-weight="600">T</text>
  <text x="216" y="66" text-anchor="middle" fill="#64748b" font-size="12">shaft A: &oslash;25 solid</text>
  <text x="216" y="198" text-anchor="middle" fill="#64748b" font-size="12">shaft B: &oslash;35 solid</text>
  <text x="20" y="222" fill="#334155" font-size="12">Equal length and material: each shaft's torque follows its own d&#8308;.</text>
  <text x="20" y="240" fill="#1d4ed8" font-size="12">&oslash;35 share = 500 &times; 35&#8308;/(25&#8308; + 35&#8308;) = 397 N&middot;m (79%).</text>
</svg>`;

// q32 — keyway root: the notch that actually sets shaft fatigue life.
const figKeyway = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to14-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">The torque path has to turn a corner at the keyway root</text>
  <circle cx="140" cy="132" r="98" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="140" cy="132" r="74" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="140" cy="132" r="3.5" fill="#334155"/>
  <rect x="122" y="44" width="36" height="36" fill="#fee2e2" stroke="#334155" stroke-width="1.6"/>
  <circle cx="122" cy="80" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <circle cx="158" cy="80" r="9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M42.3,167.6 A104,104 0 0 0 42.3,96.4" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to14-tq)"/>
  <text x="30" y="180" text-anchor="end" fill="#dc2626" font-weight="600">T</text>
  <text x="140" y="222" text-anchor="middle" fill="#64748b" font-size="12">hub</text>
  <text x="140" y="176" text-anchor="middle" fill="#64748b" font-size="12">shaft</text>
  <text x="176" y="40" fill="#334155" font-size="12">key</text>
  <line x1="164" y1="82" x2="262" y2="106" stroke="#64748b" stroke-width="1"/>
  <text x="266" y="76" fill="#334155" font-size="12">shaft &oslash;40, key 12 &times; 8 mm</text>
  <text x="266" y="102" fill="#334155" font-size="12">keyway depth t = 5 mm</text>
  <text x="266" y="128" fill="#dc2626" font-size="12">sharp root: K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 3.0</text>
  <text x="266" y="154" fill="#1d4ed8" font-size="12">radiused root: K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 2.0</text>
  <text x="266" y="180" fill="#64748b" font-size="12">nominal Tc/J: unchanged</text>
  <text x="20" y="242" fill="#64748b" font-size="12">The notch does not move the nominal stress; it moves the fatigue life.</text>
</svg>`;

// q41 — flanged coupling: torque reacted by a bolt group on a bolt circle.
const figFlange = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to18-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to18-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Torque through a bolt group: every bolt is a lever arm</text>
  <path d="M58,62 A86,86 0 0 1 182,62" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to18-tq)"/>
  <text x="192" y="60" fill="#dc2626" font-weight="600" font-size="12">T = 2.0 kN&middot;m</text>
  <circle cx="120" cy="120" r="72" fill="#e2e8f0" stroke="#334155" stroke-width="1.7"/>
  <circle cx="120" cy="120" r="50" fill="none" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="6 4"/>
  <circle cx="120" cy="120" r="26" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="120" cy="120" r="3.5" fill="#334155"/>
  <circle cx="170" cy="120" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="155.4" cy="155.4" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="120" cy="170" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="84.6" cy="155.4" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="70" cy="120" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="84.6" cy="84.6" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="120" cy="70" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="155.4" cy="84.6" r="7" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <line x1="70" y1="127" x2="70" y2="214" stroke="#64748b" stroke-width="0.9"/>
  <line x1="170" y1="127" x2="170" y2="214" stroke="#64748b" stroke-width="0.9"/>
  <line x1="70" y1="208" x2="170" y2="208" stroke="#64748b" stroke-width="1" marker-start="url(#to18-dim)" marker-end="url(#to18-dim)"/>
  <text x="120" y="228" text-anchor="middle" fill="#1d4ed8" font-size="12">bolt circle &oslash;200 mm</text>
  <text x="228" y="84" fill="#334155" font-size="12">8 bolts, each in single shear</text>
  <text x="228" y="112" fill="#334155" font-size="12">R = &oslash;200 / 2 = 100 mm</text>
  <text x="228" y="140" fill="#1d4ed8" font-weight="600" font-size="12">F = T / (n R)</text>
  <text x="228" y="168" fill="#64748b" font-size="12">shear plane: the flange faces</text>
  <text x="20" y="254" fill="#64748b" font-size="12">The trap is feeding 200 mm into R &mdash; the bolt circle is a diameter.</text>
</svg>`;

// q48 — shear flow round a single closed thin-walled cell.
const figShearFlow = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to15-q" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="to15-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">One closed cell: the shear flow q is the same all the way round</text>
  <rect x="50" y="58" width="240" height="120" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <rect x="56" y="64" width="228" height="108" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <rect x="53" y="61" width="234" height="114" fill="none" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="6 4"/>
  <line x1="100" y1="61" x2="240" y2="61" stroke="#dc2626" stroke-width="2.2" marker-end="url(#to15-q)"/>
  <line x1="287" y1="90" x2="287" y2="146" stroke="#dc2626" stroke-width="2.2" marker-end="url(#to15-q)"/>
  <line x1="240" y1="175" x2="100" y2="175" stroke="#dc2626" stroke-width="2.2" marker-end="url(#to15-q)"/>
  <line x1="53" y1="146" x2="53" y2="90" stroke="#dc2626" stroke-width="2.2" marker-end="url(#to15-q)"/>
  <text x="248" y="52" fill="#dc2626" font-weight="600" font-size="12">q</text>
  <text x="170" y="112" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">A<tspan baseline-shift="sub" font-size="9">m</tspan></text>
  <text x="170" y="134" text-anchor="middle" fill="#64748b" font-size="12">area inside the mid-wall line</text>
  <line x1="53" y1="196" x2="287" y2="196" stroke="#64748b" stroke-width="1" marker-start="url(#to15-dim)" marker-end="url(#to15-dim)"/>
  <line x1="53" y1="190" x2="53" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="287" y1="190" x2="287" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="170" y="190" text-anchor="middle" fill="#64748b" font-size="12">80 mm</text>
  <line x1="306" y1="61" x2="306" y2="175" stroke="#64748b" stroke-width="1" marker-start="url(#to15-dim)" marker-end="url(#to15-dim)"/>
  <text x="312" y="122" fill="#64748b" font-size="12">40</text>
  <text x="344" y="90" fill="#1d4ed8" font-weight="600" font-size="12">q = T / (2A<tspan baseline-shift="sub" font-size="9">m</tspan>)</text>
  <text x="344" y="118" fill="#1d4ed8" font-weight="600" font-size="12">&tau; = q / t</text>
  <text x="344" y="146" fill="#334155" font-size="12">t = 2 mm</text>
  <text x="344" y="174" fill="#334155" font-size="12">mid-wall dims</text>
  <text x="24" y="222" fill="#64748b" font-size="12">A<tspan baseline-shift="sub" font-size="9">m</tspan> is the enclosed area, not the area of metal.</text>
  <text x="24" y="240" fill="#64748b" font-size="12">q is constant, so &tau; = q/t peaks at the thinnest wall.</text>
</svg>`;

// q49 — closed tube vs the same tube slit along its length.
const figSlit = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to16-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to16-q" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same metal, same mass: one saw cut along the length</text>
  <!-- closed tube -->
  <path d="M54,68 A78,78 0 0 1 174,68" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to16-tq)"/>
  <text x="182" y="66" fill="#dc2626" font-weight="600">T</text>
  <circle cx="114" cy="116" r="60" fill="#dbeafe" stroke="#334155" stroke-width="1.7"/>
  <circle cx="114" cy="116" r="52" fill="#fff" stroke="#334155" stroke-width="1.4"/>
  <circle cx="114" cy="116" r="3" fill="#334155"/>
  <line x1="114" y1="116" x2="74.4" y2="155.6" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="84" y="148" text-anchor="end" fill="#64748b" font-size="12">R</text>
  <line x1="94" y1="60" x2="134" y2="60" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <line x1="170" y1="96" x2="170" y2="136" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <line x1="134" y1="172" x2="94" y2="172" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <line x1="58" y1="136" x2="58" y2="96" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <!-- slit tube -->
  <path d="M258,68 A78,78 0 0 1 378,68" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#to16-tq)"/>
  <text x="386" y="66" fill="#dc2626" font-weight="600">T</text>
  <path d="M323.23,56.23 A60,60 0 1 1 312.77,56.23 L313.47,64.20 A52,52 0 1 0 322.53,64.20 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.7"/>
  <circle cx="318" cy="116" r="3" fill="#334155"/>
  <line x1="318" y1="50" x2="318" y2="70" stroke="#dc2626" stroke-width="2.4"/>
  <line x1="324" y1="52" x2="352" y2="42" stroke="#64748b" stroke-width="1"/>
  <text x="356" y="42" fill="#dc2626" font-size="12">slit</text>
  <line x1="378" y1="98" x2="378" y2="140" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <line x1="370" y1="140" x2="370" y2="98" stroke="#dc2626" stroke-width="2" marker-end="url(#to16-q)"/>
  <text x="388" y="124" fill="#64748b" font-size="12">&tau; reverses</text>
  <text x="388" y="142" fill="#64748b" font-size="12">across t</text>
  <!-- numbers -->
  <text x="114" y="204" text-anchor="middle" font-weight="600" fill="#334155">closed cell</text>
  <text x="114" y="226" text-anchor="middle" fill="#1d4ed8" font-size="12">J = 2&pi;R&sup3;t = 5.09 &times; 10&#8309; mm&#8308;</text>
  <text x="318" y="204" text-anchor="middle" font-weight="600" fill="#dc2626">slit open</text>
  <text x="318" y="226" text-anchor="middle" fill="#1d4ed8" font-size="12">J = st&sup3;/3 = 1.70 &times; 10&sup3; mm&#8308;</text>
  <text x="24" y="252" fill="#64748b" font-size="12">Mean radius R = 30 mm, wall t = 3 mm. The ratio is 3(R/t)&sup2; = 300.</text>
</svg>`;

// q50 — statically indeterminate shaft: torque applied between two fixed ends.
const figIndeterminate = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="to17-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="to17-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
    <marker id="to17-dim" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Fixed at both ends: the two reactions are not equal</text>
  <path d="M128,60 A40,40 0 0 1 184,60" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#to17-tq)"/>
  <text x="138" y="38" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">T = 500 N&middot;m</text>
  <rect x="46" y="68" width="368" height="28" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="46" y1="56" x2="46" y2="112" stroke="#334155" stroke-width="3"/>
  <line x1="34" y1="68" x2="46" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="34" y1="84" x2="46" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="34" y1="100" x2="46" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="34" y1="112" x2="46" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="414" y1="56" x2="414" y2="112" stroke="#334155" stroke-width="3"/>
  <line x1="426" y1="68" x2="414" y2="56" stroke="#64748b" stroke-width="1"/>
  <line x1="426" y1="84" x2="414" y2="72" stroke="#64748b" stroke-width="1"/>
  <line x1="426" y1="100" x2="414" y2="88" stroke="#64748b" stroke-width="1"/>
  <line x1="426" y1="112" x2="414" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="156" y1="68" x2="156" y2="96" stroke="#dc2626" stroke-width="2"/>
  <text x="230" y="112" text-anchor="middle" fill="#64748b" font-size="12">solid &oslash;25 throughout</text>
  <line x1="46" y1="130" x2="156" y2="130" stroke="#64748b" stroke-width="1" marker-start="url(#to17-dim)" marker-end="url(#to17-dim)"/>
  <line x1="156" y1="130" x2="414" y2="130" stroke="#64748b" stroke-width="1" marker-start="url(#to17-dim)" marker-end="url(#to17-dim)"/>
  <line x1="46" y1="124" x2="46" y2="136" stroke="#64748b" stroke-width="1"/>
  <line x1="156" y1="124" x2="156" y2="136" stroke="#64748b" stroke-width="1"/>
  <line x1="414" y1="124" x2="414" y2="136" stroke="#64748b" stroke-width="1"/>
  <text x="101" y="124" text-anchor="middle" fill="#64748b" font-size="12">0.3 m</text>
  <text x="285" y="124" text-anchor="middle" fill="#64748b" font-size="12">0.7 m</text>
  <polygon points="46,200 46,158 156,158 156,200" fill="#dbeafe"/>
  <polygon points="156,200 156,220 414,220 414,200" fill="#fee2e2"/>
  <path d="M46,200 V158 H156 V220 H414 V200" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="40" y1="200" x2="436" y2="200" stroke="#64748b" stroke-width="1.4" marker-end="url(#to17-ax)"/>
  <line x1="40" y1="200" x2="40" y2="146" stroke="#64748b" stroke-width="1.4" marker-end="url(#to17-ax)"/>
  <text x="30" y="152" text-anchor="end" fill="#64748b" font-size="12">T</text>
  <text x="444" y="205" fill="#64748b" font-size="12">x</text>
  <text x="101" y="150" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">+350 N&middot;m</text>
  <text x="285" y="238" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&minus;150 N&middot;m</text>
  <text x="24" y="260" fill="#64748b" font-size="12">Equal and opposite twists: the shorter, stiffer side takes 70%.</text>
</svg>`;

// q51 — equal-mass solid bar vs tube, quantified.
const figEqualMass = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Equal mass, 4.6&times; the torsional stiffness</text>
  <circle cx="108" cy="98" r="34" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="108" cy="98" r="3" fill="#334155"/>
  <circle cx="300" cy="98" r="56.7" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <circle cx="300" cy="98" r="45.3" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="300" cy="98" r="3" fill="#334155"/>
  <text x="108" y="172" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">&oslash;30 solid bar</text>
  <text x="300" y="172" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">&oslash;50 / &oslash;40 tube</text>
  <text x="240" y="196" text-anchor="middle" fill="#64748b" font-weight="600" font-size="12">solid bar</text>
  <text x="380" y="196" text-anchor="middle" fill="#64748b" font-weight="600" font-size="12">hollow tube</text>
  <line x1="20" y1="204" x2="440" y2="204" stroke="#cbd5e1" stroke-width="1"/>
  <text x="150" y="224" text-anchor="end" fill="#334155" font-size="12">cross-section area</text>
  <text x="240" y="224" text-anchor="middle" fill="#334155" font-size="12">707 mm&sup2;</text>
  <text x="380" y="224" text-anchor="middle" fill="#334155" font-size="12">707 mm&sup2;</text>
  <text x="150" y="246" text-anchor="end" fill="#334155" font-size="12">polar moment J</text>
  <text x="240" y="246" text-anchor="middle" fill="#1d4ed8" font-size="12">0.795 &times; 10&#8309; mm&#8308;</text>
  <text x="380" y="246" text-anchor="middle" fill="#1d4ed8" font-size="12">3.62 &times; 10&#8309; mm&#8308;</text>
  <text x="150" y="268" text-anchor="end" fill="#334155" font-size="12">&tau; at equal torque</text>
  <text x="240" y="268" text-anchor="middle" fill="#dc2626" font-size="12">1.00 (reference)</text>
  <text x="380" y="268" text-anchor="middle" fill="#1d4ed8" font-size="12">0.37</text>
</svg>`;

const extra: Question[] = [
  {
    id: "torsion-q17",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A shaft has three pulleys. The motor applies 120 N&middot;m at the left pulley, a machine removes 40 N&middot;m at the middle pulley, and another machine removes 80 N&middot;m at the right pulley. Which torque diagram is correct?</p>",
    figure: figTorqueDiagram,
    choices: [
      "120 N&middot;m in every segment, because the motor torque is the input to the whole shaft",
      "120 N&middot;m between the left and middle pulleys, then 80 N&middot;m to the right pulley",
      "40 N&middot;m between the left and middle pulleys, then 80 N&middot;m to the right pulley",
      "0 N&middot;m everywhere, because the three external torques already sum to zero",
    ],
    answer: 1,
    explanation: "<p>March rightward from the motor and cut. Before anything is extracted a cut sees the full 120 N&middot;m. After the middle machine takes 40 N&middot;m, 80 N&middot;m continues into the right segment, and past the last pulley the internal torque is zero.</p><p>The three externals summing to zero only proves the shaft is in rotational equilibrium. It says nothing about internal torque, which is what sizes the metal.</p><p>So this shaft can be stepped. Sizing every segment from the motor rating wastes mass; sizing the whole shaft from a downstream number leaves the input segment 50% overstressed.</p>",
  },
  {
    id: "torsion-q18",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A solid 30 mm diameter steel shaft carries T = 180 N&middot;m. What is the torsional shear stress at radius r = 10 mm from the axis, in MPa?</p>",
    answer: 22.6,
    unit: "MPa",
    explanation: "<p class=\"eq\">&tau;(r) = Tr/J = 180(0.010)/(7.95&times;10<sup>&minus;8</sup>) = <strong>22.6 MPa</strong></p><p>with J = &pi;(0.030)&#8308;/32 = 7.95&times;10<sup>&minus;8</sup> m&#8308;. The question asks for r = 10 mm, so use 10 mm.</p><p>Against the surface value of 33.9 MPa the ratio is 22.6/33.9 = 0.667 = 10/15, exactly what a linear distribution demands. Substituting d = 30 mm as the radius gives 45.3 MPa, higher than the surface stress, which cannot happen at an interior point.</p>",
  },
  {
    id: "torsion-q19",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A flat belt applies a net tangential force of 600 N to a pulley of 80 mm pitch radius. What torque reaches the shaft, in N&middot;m?</p>",
    answer: 48.0,
    unit: "N*m",
    explanation: "<p class=\"eq\">T = Fr = 600(0.080) = <strong>48.0 N&middot;m</strong></p><p>Radius, in metres. Quoting the pulley by its 160 mm diameter and substituting that gives 96 N&middot;m.</p><p>The prompt hands you the <em>net</em> tangential force, already F<sub>1</sub> &minus; F<sub>2</sub>. The same belt also pulls the shaft sideways with F<sub>1</sub> + F<sub>2</sub>, two to three times larger, so a belt-driven shaft is never a pure-torsion problem.</p>",
  },
  {
    id: "torsion-q20",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A valve hand wheel is 300 mm in diameter. An operator grips it with both hands at opposite ends of a diameter and pushes each hand tangentially with 90 N, in opposite directions. What torque goes into the valve stem, in N&middot;m?</p>",
    answer: 27.0,
    unit: "N*m",
    explanation: "<p>Two equal and opposite parallel forces make a couple, and a couple's moment is force times the distance between the lines of action. Here that is the full 0.300 m diameter.</p><p class=\"eq\">T = Fd = 90(0.300) = <strong>27.0 N&middot;m</strong></p><p>Or sum moments about the stem: each hand gives 90(0.150) = 13.5 N&middot;m and the two act in the same rotational sense, so 27.0 N&middot;m again. Count one hand and you get 13.5 N&middot;m, which would be the right answer if the operator had one hand on the rim.</p>",
  },
  {
    id: "torsion-q21",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A motor drives a pump through a shaft with a rigid coupling in the middle. The shaft is 30 mm diameter solid steel; the coupling hub over it is 60 mm outside diameter solid steel. Where is the nominal torsional shear stress highest, and by how much?</p>",
    choices: [
      "In the coupling hub, which is 8&times; the shaft value because it has more radius",
      "Equal in both of them, because the same internal torque passes through each",
      "In the 30 mm shaft, about 8&times; the hub value, because &tau; goes as 1/d&sup3;",
      "In the coupling hub, which is 2&times; the shaft value because its diameter doubled",
    ],
    answer: 2,
    explanation: "<p>The same internal torque passes through both, so only the section property differs. &tau;<sub>max</sub> = 16T/(&pi;d&sup3;) falls as 1/d&sup3;:</p><p class=\"eq\">&tau;<sub>shaft</sub>/&tau;<sub>hub</sub> = (60/30)&sup3; = 8</p><p>The small shaft is the stressed part and the big hub loafs at an eighth of the stress. Equal torque does not mean equal stress.</p><p>Saying more radius means more stress confuses where stress peaks <em>within</em> a section with how stress varies <em>between</em> sections. Tc/J has c on top and d&#8308; underneath, so a bigger diameter always wins.</p><p>Torque paths fail at their smallest section, and in a drivetrain that is rarely the part you were looking at. Check the shaft under the coupling, the neck at a snap-ring groove, the root diameter of a spline.</p>",
  },
  {
    id: "torsion-q22",
    type: "mc",
    difficulty: 1,
    prompt: "<p>Two shafts have identical geometry and carry the same torque. One is steel (G = 80 GPa), one is 6061-T6 aluminium (G = 26 GPa). Which statement is correct?</p>",
    choices: [
      "The aluminium shaft has 3&times; the shear stress and the same angle of twist",
      "Both have exactly the same shear stress and exactly the same angle of twist",
      "The steel shaft has 3&times; the shear stress and 3&times; the angle of twist",
      "Both have the same shear stress, but the aluminium twists about 3&times; more",
    ],
    answer: 3,
    explanation: "<p>Two separate checks. Shear stress is &tau; = Tc/J, geometry and load only, with no material property in it at all. Identical geometry and identical torque give identical stress. Twist is &theta; = TL/(GJ), which does carry the material:</p><p class=\"eq\">&theta;<sub>Al</sub>/&theta;<sub>steel</sub> = G<sub>steel</sub>/G<sub>Al</sub> = 80/26 = 3.08</p><p>Same stress, three times the wind-up.</p><p>What differs is the margin, since the aluminium allowable is far lower. Whether that matters depends on which limit governs. Grow the diameter by 3.08<sup>0.25</sup> = 1.33&times; and you match steel stiffness at about 60% of the mass, which is why aluminium torque tubes exist.</p>",
  },
  {
    id: "torsion-q23",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A solid 25 mm diameter shaft twists too much. It is replaced by a solid 30 mm shaft, same length, same material, same torque. By what factor does the angle of twist change? (Enter the ratio of new twist to old twist.)</p>",
    answer: 0.482,
    explanation: "<p class=\"eq\">&theta;<sub>new</sub>/&theta;<sub>old</sub> = (25/30)&#8308; = <strong>0.482</strong></p><p>&theta; = TL/(GJ) with J = &pi;d&#8308;/32, so with everything else fixed &theta; &prop; 1/d&#8308;.</p><p>One 20% size step doubles torsional stiffness. Mass only rose 1.44&times; for a 2.07&times; stiffness gain, which is the same argument that leads to hollow shafts.</p><p>Using the cube gives 0.579, applying the <em>stress</em> scaling to a stiffness question.</p>",
  },
  {
    id: "torsion-q24",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 12 mm diameter solid steel torsion bar is 250 mm long, with G = 79 GPa. What is its torsional stiffness k = T/&theta; in N&middot;m per radian?</p>",
    answer: 643,
    unit: "N*m/rad",
    explanation: "<p class=\"eq\">J = &pi;d&#8308;/32 = &pi;(0.012)&#8308;/32 = 2.04&times;10<sup>&minus;9</sup> m&#8308;</p><p class=\"eq\">k = GJ/L = (79&times;10<sup>9</sup>)(2.04&times;10<sup>&minus;9</sup>)/0.250 = <strong>643 N&middot;m/rad</strong></p><p>Suspension work quotes this per degree: 643 &times; &pi;/180 = 11.2 N&middot;m per degree. You get handed one unit and asked for the other, and 57.3 is where it goes wrong.</p><p>This bar yields around 238 N&middot;m, which is 0.37 rad, or 21&deg; of twist. Torsion bars run at large angles on small diameters, and that is what makes them compact springs.</p>",
  },
  {
    id: "torsion-q25",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A solid 40 mm diameter shaft is bored out with a 30 mm diameter hole down its centre. What fraction of the original polar second moment J does it retain?</p>",
    answer: 0.684,
    explanation: "<p>With the outer diameter unchanged the constants cancel:</p><p class=\"eq\">J<sub>tube</sub>/J<sub>solid</sub> = 1 &minus; (30/40)&#8308; = 1 &minus; 0.316 = <strong>0.684</strong></p><p>Put that beside the mass. The bore removes 43.8% of the metal, so you keep 68.4% of the torsional capability for 56.2% of the weight, and you get an oil passage down the middle.</p><p>Peak stress rises by 1/0.684 = 1.46&times;, since the outer diameter did not change. A bore is a mass trade. Growing the outside diameter improves both at once.</p>",
  },
  {
    id: "torsion-q26",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A steel shaft has two solid circular segments in series carrying the same 200 N&middot;m torque. Segment A is 25 mm diameter and 0.40 m long; segment B is 40 mm diameter and 0.60 m long. Use G = 80 GPa. What is the total twist in degrees?</p>",
    answer: 1.84,
    unit: "deg",
    explanation: "<p>Rotations in series add, so compute each segment separately.</p><p class=\"eq\">J<sub>A</sub> = &pi;(0.025)&#8308;/32 = 3.83&times;10<sup>&minus;8</sup> m&#8308;, &nbsp; J<sub>B</sub> = &pi;(0.040)&#8308;/32 = 2.51&times;10<sup>&minus;7</sup> m&#8308;</p><p class=\"eq\">&theta;<sub>A</sub> = 200(0.40)/[(80&times;10<sup>9</sup>)(3.83&times;10<sup>&minus;8</sup>)] = 0.02610 rad</p><p class=\"eq\">&theta;<sub>B</sub> = 200(0.60)/[(80&times;10<sup>9</sup>)(2.51&times;10<sup>&minus;7</sup>)] = 0.00597 rad</p><p class=\"eq\">&theta; = 0.03204 rad = <strong>1.84&deg;</strong></p><p>Look at the split: the thin segment is shorter but contributes 81% of the twist. That is d&#8308; at work. Segment A is 2.6&times; less stiff per unit length than B despite being only 37% smaller in diameter.</p><p>Averaging the diameters to 32.5 mm and treating the whole thing as one 1.0 m shaft gives 1.13&deg; and hides the weak link entirely. Series compliances add. Never average the geometry.</p>",
  },
  {
    id: "torsion-q27",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A solid circular shaft must carry 250 N&middot;m with an allowable torsional shear stress of 55 MPa. What minimum diameter is required, in mm?</p>",
    answer: 28.5,
    unit: "mm",
    explanation: "<p>Start from the solid-shaft relation and invert it:</p><p class=\"eq\">&tau;<sub>max</sub> = 16T/(&pi;d&sup3;) &nbsp;&rarr;&nbsp; d = [16T/(&pi;&tau;<sub>allow</sub>)]<sup>1/3</sup></p><p class=\"eq\">d = [16(250)/(&pi; &times; 55&times;10<sup>6</sup>)]<sup>1/3</sup> = (2.315&times;10<sup>&minus;5</sup>)<sup>1/3</sup> = 0.0285 m = <strong>28.5 mm</strong></p><p>Rounding up to a stock 30 mm bar gives &tau; = 47.2 MPa, a 17% cushion for the cost of nothing.</p><p>The reason a cube root is comforting here: your torque estimate can be off by 30% and the required diameter only moves by 9%. That insensitivity is why shaft sizing tolerates rough load estimates, and also why increasing diameter is an inefficient way to buy strength once you are close.</p><p>This is a nominal torsion screen only. A keyway takes roughly 25% off the section and adds a K<sub>t</sub> near 3, a rotating bending load brings fatigue into play, and a twist limit may force a bigger bar regardless of stress.</p>",
  },
  {
    id: "torsion-q28",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>An aluminium tube has 50 mm outside diameter, 44 mm inside diameter, is 1.2 m long, and carries 300 N&middot;m. Use G = 27 GPa. What is the angle of twist in degrees?</p>",
    answer: 3.11,
    unit: "deg",
    explanation: "<p>Compute the tube polar moment first, subtracting fourth powers:</p><p class=\"eq\">J = &pi;(D&#8308; &minus; d&#8308;)/32 = &pi;(0.050&#8308; &minus; 0.044&#8308;)/32 = 2.46&times;10<sup>&minus;7</sup> m&#8308;</p><p>Then apply &theta; = TL/(GJ):</p><p class=\"eq\">&theta; = 300(1.2)/[(27&times;10<sup>9</sup>)(2.46&times;10<sup>&minus;7</sup>)] = 0.0543 rad = <strong>3.11&deg;</strong></p><p>Meanwhile the peak stress is only Tc/J = 300(0.025)/2.46&times;10<sup>&minus;7</sup> = 30.5 MPa, comfortably inside a 6061-T6 allowable. This shaft passes strength easily and is nowhere near acceptable on stiffness. More than 2.5&deg; per metre would upset any gear mesh or encoder.</p><p>That gap is the point. Aluminium's G is a third of steel's, so aluminium designs are usually stiffness-limited rather than strength-limited, and the fix is diameter (J &prop; d&#8308;), not a stronger temper.</p>",
  },
  {
    id: "torsion-q29",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 30 mm <strong>diameter</strong> solid shaft carries 180 N&middot;m. If the allowable torsional shear stress is 90 MPa, what is the nominal shear factor of safety?</p>",
    answer: 2.65,
    explanation: "<p>Compute the demand, then divide the capacity by it.</p><p class=\"eq\">&tau;<sub>max</sub> = 16T/(&pi;d&sup3;) = 16(180)/[&pi;(0.030)&sup3;] = 33.95 MPa</p><p class=\"eq\">n = &tau;<sub>allow</sub>/&tau;<sub>max</sub> = 90/33.95 = <strong>2.65</strong></p><p>Read the dimension carefully: 30 mm here is a diameter. If you take it as a radius you use d = 60 mm, the stress drops by 8&times; to 4.24 MPa, and the factor of safety comes out as 21.2, a result that should immediately look wrong for a shaft this size. Always restate the given dimension as a diameter or radius in the first line of your working.</p><p>And be clear what 2.65 covers: a smooth section under static torque only. Put a keyway under the hub and the local peak roughly triples, taking the notch factor of safety below 1. Add rotating bending and the governing check becomes fatigue, not yield. A nominal margin of 2.65 is where a shaft review starts, not where it ends.</p>",
  },
  {
    id: "torsion-q30",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 25 mm diameter solid steel shaft carries 80 N&middot;m, with G = 80 GPa. What is the maximum length that keeps the twist below 1.00 degree?</p>",
    answer: 0.669,
    unit: "m",
    explanation: "<p>Rearrange &theta; = TL/(GJ) for length, converting the angle to radians first.</p><p class=\"eq\">J = &pi;(0.025)&#8308;/32 = 3.83&times;10<sup>&minus;8</sup> m&#8308;, &nbsp; &theta; = 1.00&deg; = 0.01745 rad</p><p class=\"eq\">L = &theta;GJ/T = 0.01745(80&times;10<sup>9</sup>)(3.83&times;10<sup>&minus;8</sup>)/80 = <strong>0.669 m</strong></p><p>The commonest slip is leaving &theta; in degrees, which inflates L by 57&times; to 38 m, a number that should fail your smell test instantly.</p><p>If the layout demands a longer shaft, the levers are J and G, not strength: going to 30 mm diameter raises J by 2.07&times; and stretches the allowable length to 1.39 m. The twist limit sets a maximum length for a given diameter, so long drive lines end up either fat, hollow, or split into shorter sections with intermediate bearings.</p>",
  },
  {
    id: "torsion-q31",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A solid shaft diameter is increased by 10% while torque, length, and material stay the same. What fraction of the original maximum torsional shear stress remains?</p>",
    answer: 0.751,
    explanation: "<p>For a solid circular shaft under fixed torque, &tau;<sub>max</sub> = 16T/(&pi;d&sup3;), so stress varies as 1/d&sup3;. With d<sub>new</sub> = 1.10d:</p><p class=\"eq\">&tau;<sub>new</sub>/&tau;<sub>old</sub> = 1/(1.10)&sup3; = <strong>0.751</strong></p><p>So 10% more diameter buys a 24.9% stress reduction, not 10%. The twist falls further, to 1/(1.10)&#8308; = 0.683, because stiffness carries the fourth power.</p><p>Committing the two scalings to memory turns most shaft questions into mental arithmetic: stress goes as 1/d&sup3;, twist as 1/d&#8308;, and mass as d&sup2;. A 10% step costs 21% more mass; a 20% step costs 44% more mass and doubles the stiffness.</p><p>Quoting 0.9 treats the change as linear; 0.826 applies the square. The inverse form is worth having ready: to halve the stress, d must grow by 2<sup>1/3</sup> = 26%.</p>",
  },
  {
    id: "torsion-q32",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A keyed hub on a shaft is developing small cracks at the bottom corner of the keyway after many start-stop cycles. Nominal Tc/J in that section is 40 MPa against a 250 MPa yield. What is the most relevant design issue?</p>",
    figure: figKeyway,
    choices: [
      "The keyway root is a notch, and cyclic torque makes it a fatigue crack starter",
      "The shaft cannot fatigue, because the mean torque is far below the yield torque",
      "Cutting the keyway lowered the shear modulus G, so that region became softer",
      "The cracks prove the torque diagram was actually zero at the hub location",
    ],
    answer: 0,
    explanation: "<p>A keyway cuts into the shaft, forces the torsional shear flow around a sharp internal corner, and raises the local stress by a torsional K<sub>t</sub> of roughly 3 (about 2 if the root is radiused). Forty megapascals nominal becomes 120 MPa at the root, and under reversing or pulsing torque that is exactly where a crack initiates. A large static margin is no defence: high-cycle fatigue is controlled by the alternating stress at the notch and the corrected endurance limit, not by the distance to yield.</p><p>G is a lattice property that machining cannot change. And a crack at the hub proves the opposite of zero torque there. The hub is precisely where torque is transferred in or out.</p><p>Cheapest fixes first: specify a radius at the keyway root instead of a square corner, improve the surface finish in the slot, use a Woodruff or profiled key rather than a sled-runner slot ending in a step, shot peen the root, and move the keyway away from the section that also carries peak bending. On a drawing that is a radius callout and a finish symbol. Not a bigger shaft.</p>",
  },
  {
    id: "torsion-q33",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A robot joint shaft sees +60 N&middot;m during acceleration and &minus;60 N&middot;m during braking, thousands of times per shift. Static shear stress is far below yield. What should be checked next?</p>",
    choices: [
      "Only material density, since a reversing torque averages out to zero anyway",
      "Torsional fatigue at notches, shoulders, spline roots, and surface defects",
      "Euler buckling of the shaft, since negative torque acts like axial compression",
      "Nothing further, because a yield factor of safety already covers cyclic loading",
    ],
    answer: 1,
    explanation: "<p>Fully reversed torque means a mean shear of zero and an alternating shear of 60 N&middot;m worth, the worst case for crack initiation, not the best. Zero mean stress removes the Goodman mean-stress penalty but does nothing about the alternating component, which is what drives fatigue.</p><p>Cracks start at local peaks: keyways, snap-ring grooves, shoulder fillets, spline roots, machining marks, and fretting interfaces under a press-fit hub. Static yield margin only tells you the first overload will not shear the shaft plastically.</p><p>Negative torque is a reversed twist, not compression, so buckling is irrelevant for a solid shaft. Density is not a fatigue property.</p><p>What I would ask for: the actual torque spectrum rather than the peak, expected cycles over the life, surface finish and hardness, the fillet radii as manufactured, K<sub>f</sub> at each feature, and whether the joint also carries a rotating bending load from the arm, because combined alternating bending plus torsion is a very different calculation from torsion alone.</p>",
  },
  {
    id: "torsion-q34",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A spur gear transmits torque through a shaft. The tooth force acts tangentially at the pitch radius, and the gear is mounted overhung outside the nearest bearing. What is the realistic stress state at the shaft shoulder next to the gear?</p>",
    choices: [
      "Combined torsional shear and bending, amplified by the shoulder stress concentration",
      "Pure torsion only, because a gear tooth force is just another way to state torque",
      "Pure axial tension only, because helical gear teeth pull along the shaft axis",
      "Essentially zero stress, because the bearings absorb all of the gear tooth loads",
    ],
    answer: 0,
    explanation: "<p>The tangential tooth force W<sub>t</sub> does two things at once. It produces the torque T = W<sub>t</sub>r that you designed for, and it acts as a transverse point load on the shaft. With the gear overhung, that transverse load has a moment arm back to the nearest bearing, so the shoulder sees a bending moment M = W<sub>t</sub>a on top of the torsion. There is also a radial component W<sub>t</sub>tan(&phi;) &asymp; 0.36W<sub>t</sub> for a 20&deg; pressure angle, which bends the shaft in the perpendicular plane.</p><p>The shoulder fillet then multiplies both. The correct check is &sigma;<sub>vm</sub> = &radic;(&sigma;&sup2; + 3&tau;&sup2;) with K<sub>f</sub> applied, and for a rotating shaft the bending component fully reverses every revolution while the torque stays steady, so this is a fatigue problem with a mean-shear, alternating-bending stress state.</p><p>Power-transmission hardware essentially always generates bearing reactions and bending, so a gear shaft sized on Tc/J alone has skipped half its loading.</p>",
  },
  {
    id: "torsion-q35",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A steel shaft is heat treated from 300 MPa yield strength to 900 MPa, with geometry unchanged. Which torsion property is <em>least</em> likely to change appreciably?</p>",
    choices: [
      "The static torque at which the shaft first yields at its surface",
      "The overload torque it survives without taking a permanent set",
      "The surface hardness, and with it the resistance to galling and wear",
      "The elastic angle of twist under a 100 N&middot;m service torque",
    ],
    answer: 3,
    explanation: "<p>Elastic twist is &theta; = TL/(GJ). Heat treatment triples yield strength and changes hardness dramatically, but the shear modulus of steel sits between about 77 and 82 GPa across every alloy and every temper. It is set by interatomic bonding, which heat treatment does not alter. With T, L and J unchanged, the service twist moves by a couple of percent at most.</p><p>The other three all scale with strength: first-yield torque is &tau;<sub>y</sub>J/c with &tau;<sub>y</sub> = S<sub>y</sub>/&radic;3, the permanent-set threshold is the same quantity, and surface hardness is what heat treatment is <em>for</em>.</p><p>&ldquo;We need a stiffer shaft, so let us upgrade the steel&rdquo; is the tempting move, and it buys nothing. To reduce elastic twist you increase J, shorten the span, or leave steel entirely. The only common structural material with a meaningfully higher G is a carbon-fibre layup with fibres at &plusmn;45&deg;.</p>",
  },
  {
    id: "torsion-q36",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A small pulley is retained on a smooth round shaft by a single cup-point set screw. Static torque testing passes easily, but the drive reverses thousands of times a day. What is the main concern?</p>",
    choices: [
      "Slip and fretting under reversal, since the joint relies on a small dent and friction",
      "The shaft carries no torque at all unless the pulley is keyed or the shaft is hollow",
      "The set screw eliminates stress concentration, because its dent is small and rounded",
      "Transmitted torque is independent of shaft radius and of the interface contact pressure",
    ],
    answer: 0,
    explanation: "<p>A set screw on a smooth shaft transmits torque through friction plus the mechanical interlock of the dent it raises. That capacity is small, uncertain, and degrades: the screw relaxes, the dent burnishes, and every torque reversal breaks and remakes the friction grip. The result is a pulley that slowly walks or rocks, fretting the shaft surface and losing phase, and the fretted patch becomes a fatigue initiation site.</p><p>The dent is a stress raiser, not a remover, and a smooth shaft plainly carries torque without being hollow or keyed. Torque capacity clearly does depend on radius and contact pressure. Roughly T = &mu;pAr for a friction joint.</p><p>What I would specify instead, depending on load and serviceability: a key in a proper keyway for repeatable torque, a taper-lock or clamp hub for a smooth shaft that must not be machined, a spline for high reversing duty, or a shrink fit if the joint is permanent. If a set screw must stay, flat the shaft, use two screws at 90&deg;, and add thread locker. The general lesson: torque transfer is a system problem, and the interface usually governs before the shaft body does.</p>",
  },
  {
    id: "torsion-q37",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An engineer applies J = &pi;d&#8308;/32 to a rectangular aluminium bar in torsion, on the grounds that the bar has the same cross-sectional area as the round shaft it replaced. What is wrong with that model?</p>",
    choices: [
      "Nothing is wrong, because equal cross-sectional area gives equal torsional stiffness",
      "The estimate is far too conservative, because a rectangular bar cannot twist at all",
      "Non-circular sections warp, so they need their own torsion constant, not the polar moment",
      "Only Young's modulus E matters in torsion, which makes the section shape irrelevant",
    ],
    answer: 2,
    explanation: "<p>The circular-shaft formula rests on cross-sections staying plane and shear varying linearly with radius. Neither holds for a rectangle: the section warps out of plane, the shear stress is zero at the corners and maximum at the middle of the long side, and the effective torsion constant is</p><p class=\"eq\">K = &beta;bt&sup3; &nbsp; (&beta; &asymp; 0.141 for a square, &rarr; 1/3 for a long thin strip)</p><p>The error is not small. A 40 &times; 10 mm bar has the same area as a 22.6 mm round bar, whose J is 1.28&times;10<sup>&minus;8</sup> m&#8308;; the rectangle's K is about 0.312(0.040)(0.010)&sup3; = 1.25&times;10<sup>&minus;8</sup>... but a 100 &times; 4 mm strip of the same area has K = (1/3)(0.100)(0.004)&sup3; = 2.1&times;10<sup>&minus;9</sup>, six times less. The thinner the section, the worse the assumption.</p><p>Equal area is a useless proxy for torsional performance. Any section built from thin flat elements is poor in torsion no matter how much metal it contains: angles, channels, tees, an unwelded folded box. Use handbook torsion constants, then check warping restraint, corner radii, and stress concentrations at re-entrant corners.</p>",
  },
  {
    id: "torsion-q38",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A shaft carries +100 N&middot;m of internal torque over the first 0.4 m and &minus;100 N&middot;m over the next 0.4 m, because a 200 N&middot;m external torque is applied at the junction between the two segments. How should the twist be handled?</p>",
    choices: [
      "Take absolute values of each contribution, because a twist angle cannot be negative",
      "Ignore both segments entirely, because the applied external torques cancel out",
      "Add signed values of TL/GJ per segment; opposite torque sense unwinds earlier twist",
      "Average the two torques first and apply the mean over the whole 0.8 m length",
    ],
    answer: 2,
    explanation: "<p>Angle of twist is a signed rotation. Each segment contributes &theta;<sub>i</sub> = T<sub>i</sub>L<sub>i</sub>/(G<sub>i</sub>J<sub>i</sub>), and the relative rotation between the two ends is the signed sum along the path. Here the two contributions are equal and opposite, so the end-to-end rotation is zero, but the junction itself has rotated, and every fibre in both segments is fully stressed at &tau; = Tc/J the whole time.</p><p>That is the important distinction. Zero <em>net</em> end rotation does not mean zero internal torque, zero stress, or zero strain energy. If you were tracking a shaft encoder mounted at each end you would read no relative angle at all, while a strain gauge in either segment would read full load.</p><p>Taking absolute values gives a rotation of the wrong magnitude and hides any cancellation, which matters when a design deliberately uses opposing segments to null out wind-up. Averaging the torques (giving zero) throws away the stress entirely. And &ldquo;the externals cancel&rdquo; is just the statement of global equilibrium, which every stable structure satisfies.</p>",
  },
  {
    id: "torsion-q39",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A shaft steps from 20 mm to 35 mm diameter at a sharp shoulder next to a bearing. Nominal torsional shear in the 20 mm section is acceptable. What detail should be changed first to improve fatigue life?</p>",
    figure: figShoulder,
    choices: [
      "Move the bearing farther from the step while leaving the shoulder corner sharp",
      "Add a generous fillet radius or an undercut relief at the diameter transition",
      "Use the diameter rather than the radius in Tc/J, which lowers the calculated stress",
      "Reduce the larger diameter to 25 mm so that the step in section is less abrupt",
    ],
    answer: 1,
    explanation: "<p>A sharp shoulder is a torsional stress concentration of roughly K<sub>t</sub> = 2.5. Adding a fillet of r/d &asymp; 0.1 drops it to about 1.3, nearly a factor of two on the local stress, for a change that costs a single dimension on a drawing and no extra material. That is the highest-value change available, and it is why shaft drawings always call out fillet radii explicitly.</p><p>Moving the bearing changes the bending moment distribution but leaves the notch severity untouched, so it treats a symptom. Reducing the large diameter to 25 mm makes the D/d ratio milder, which does lower K<sub>t</sub> slightly, but it also removes material from the bigger section and does nothing about the sharp corner itself, so it is a poor first move. Substituting diameter for radius in Tc/J is simply an arithmetic error dressed up as a fix.</p><p>One constraint caps how far you can take this. The bearing inner race needs a shoulder to seat against, and its corner radius limits the fillet you can cut. The usual way out is an undercut relief groove, or a large fillet plus a spacer ring to give the bearing a square face.</p>",
  },
  {
    id: "torsion-q40",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 1.2 m long solid shaft must carry 100 N&middot;m with no more than 0.50&deg; of twist. The shop wants to make it from 6061-T6 aluminium, G = 26 GPa. What minimum solid diameter does the aluminium version need, in mm?</p>",
    answer: 48.2,
    unit: "mm",
    explanation: "<p>This is a stiffness requirement, so work from &theta; = TL/(GJ). Convert the angle first: 0.50&deg; = 0.008727 rad.</p><p class=\"eq\">J<sub>req</sub> = TL/(G&theta;) = 100(1.2)/[(26&times;10<sup>9</sup>)(0.008727)] = 5.29&times;10<sup>&minus;7</sup> m&#8308;</p><p class=\"eq\">d = (32J/&pi;)<sup>1/4</sup> = (32 &times; 5.29&times;10<sup>&minus;7</sup>/&pi;)<sup>1/4</sup> = 0.0482 m = <strong>48.2 mm</strong></p><p>Run the same calculation for steel at G = 80 GPa and you get 36.4 mm. So aluminium needs a 33% larger diameter, exactly (80/26)<sup>1/4</sup> = 1.32.</p><p>Now the part that decides the design: mass scales as &rho;d&sup2;. Steel gives 7850 &times; 36.4&sup2; and aluminium 2700 &times; 48.2&sup2;, so the aluminium shaft is 60% of the steel shaft's mass despite being visibly fatter. If the package can take the extra diameter, aluminium wins on mass; if it cannot, the answer is a steel tube.</p><p>Nothing here involves strength. At 48.2 mm the peak shear is only 4.5 MPa, so reaching for the aluminium allowable answers a question nobody asked.</p>",
  },
  {
    id: "torsion-q41",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A flanged coupling transmits 2.0 kN&middot;m through 8 bolts equally spaced on a 200 mm <strong>diameter</strong> bolt circle. Assuming the bolts share the load equally, what shear force does each bolt carry, in N?</p>",
    figure: figFlange,
    answer: 2500,
    unit: "N",
    explanation: "<p>Each bolt sits at radius R = 200/2 = 100 mm and reacts a tangential force F. Summing moments about the shaft axis:</p><p class=\"eq\">T = n F R &nbsp;&rarr;&nbsp; F = T/(nR) = 2000/[8(0.100)] = <strong>2500 N</strong></p><p>Substituting the bolt circle <em>diameter</em> as R halves the answer to 1250 N and leaves every bolt at twice its assumed load. Restate the given dimension as a radius before you use it.</p><p>Now the design half of the question. If two adjacent bolts are missing the remaining six do not simply take T/(6R) = 3333 N each. The load no longer balances symmetrically, so the flange tries to slide as well as rotate, and the bolts nearest the gap pick up the most, a bolt-group analysis with both a direct and a torsional component. Worse, if the coupling was designed as a friction joint (bolts clamping the flange faces, torque carried by friction, bolts in tension not shear), losing two bolts cuts the clamp force by 25% and the joint can slip entirely, dumping the whole torque onto bolt shanks that were never sized for it.</p><p>So the first thing to establish is whether this is a friction coupling or a fitted-bolt coupling. The answer changes the failure mode completely.</p>",
  },
  {
    id: "torsion-q42",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A motor delivers 100 hp at 1750 rpm into a 1.5 in diameter solid steel shaft. What is the maximum torsional shear stress in the shaft, in ksi?</p>",
    answer: 5.43,
    unit: "ksi",
    explanation: "<p>US units, US shortcut. Torque in pound-feet is</p><p class=\"eq\">T = 5252 &times; hp/rpm = 5252(100)/1750 = 300 lb&middot;ft = 3600 lb&middot;in</p><p>(The 5252 comes from 33000 ft&middot;lb/min per hp divided by 2&pi;.) Then the solid-shaft formula, with everything in inches and pounds:</p><p class=\"eq\">&tau; = 16T/(&pi;d&sup3;) = 16(3600)/[&pi;(1.5)&sup3;] = 57600/10.60 = 5430 psi = <strong>5.43 ksi</strong></p><p>Leaving torque in lb&middot;ft while the diameter is in inches is off by 12.</p><p>Commercial shafting under steady torque is usually allowed around 8 ksi, so 5.43 ksi is a sensible working level with room for a keyway. The same thing in SI: 300 lb&middot;ft is 407 N&middot;m on 38.1 mm, giving 37.5 MPa, and 37.5/6.895 = 5.44 ksi.</p>",
  },
  {
    id: "torsion-q43",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A torsion-bar suspension needs a rate of 220 N&middot;m per degree of arm rotation. The bar is 900 mm long solid spring steel with G = 80 GPa. What bar diameter is required, in mm?</p>",
    answer: 34.7,
    unit: "mm",
    explanation: "<p>First convert the rate into consistent units, because the spec is per degree and the physics is per radian:</p><p class=\"eq\">k = 220 &times; (180/&pi;) = 12,605 N&middot;m/rad</p><p>Then invert k = GJ/L:</p><p class=\"eq\">J<sub>req</sub> = kL/G = 12605(0.900)/(80&times;10<sup>9</sup>) = 1.418&times;10<sup>&minus;7</sup> m&#8308;</p><p class=\"eq\">d = (32J/&pi;)<sup>1/4</sup> = (1.444&times;10<sup>&minus;6</sup>)<sup>1/4</sup> = 0.0347 m = <strong>34.7 mm</strong></p><p>Skipping the degree-to-radian conversion is a 57&times; error in k and a 2.7&times; error in diameter, which is exactly the kind of mistake that makes a suspension undriveable.</p><p>Then check the stress, because a suspension bar works at large angles. At 10&deg; of arm travel the torque is 2200 N&middot;m and &tau; = 16(2200)/[&pi;(0.0347)&sup3;] = 268 MPa, fine for a spring steel with a shear yield near 700 MPa, but the reason these bars are always shot peened and pre-set. Note the strong lever the fourth power gives you: a 5% diameter change moves the rate by 22%, so torsion bars are trimmed by length or by arm geometry, not by diameter.</p>",
  },
  {
    id: "torsion-q44",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A design review sheet lists a steel tube of 45 mm outside diameter and 39 mm inside diameter carrying 300 N&middot;m, and gives the shear stress as 16T/&pi;d&sup3; = 16.8 MPa using the outside diameter. What is the correct maximum shear stress, in MPa?</p>",
    answer: 38.5,
    unit: "MPa",
    explanation: "<p>The sheet applied a <em>solid</em>-shaft formula to a tube, which silently assumes all the removed metal is still there. Do it properly:</p><p class=\"eq\">J = &pi;(D&#8308; &minus; d&#8308;)/32 = &pi;(0.045&#8308; &minus; 0.039&#8308;)/32 = 1.755&times;10<sup>&minus;7</sup> m&#8308;</p><p class=\"eq\">&tau;<sub>max</sub> = Tc/J = 300(0.0225)/(1.755&times;10<sup>&minus;7</sup>) = <strong>38.5 MPa</strong></p><p>The review sheet is wrong by a factor of 2.3, and wrong in the unconservative direction. It reports less than half the real stress. That is the dangerous kind of error: it never trips an alarm, it just quietly consumes the safety factor.</p><p>The reason the gap is so large: the 39 mm bore removes 75% of the area and 56% of J, and the solid formula credits the shaft with all of it. The check that catches this in one line is J<sub>tube</sub>/J<sub>solid</sub> = 1 &minus; (39/45)&#8308; = 0.44. If the section is hollow and your J is not obviously reduced, you used the wrong formula.</p><p>The neighbouring error on the same sheet is J = &pi;(D &minus; d)&#8308;/32, subtracting diameters before raising to the fourth power. That gives 1.0&times;10<sup>&minus;9</sup> m&#8308; and a nonsense 6700 MPa.</p>",
  },
  {
    id: "torsion-q45",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 40 mm diameter shaft transmits 600 N&middot;m to a hub through a parallel key 12 mm wide and 50 mm long. What is the average shear stress on the key's shear plane, in MPa?</p>",
    answer: 50.0,
    unit: "MPa",
    explanation: "<p>The key transfers torque as a tangential force acting at the shaft surface, so the moment arm is the shaft <em>radius</em>:</p><p class=\"eq\">F = T/r = 600/0.020 = 30,000 N</p><p>The key shears across the plane between shaft and hub, of area (width &times; length):</p><p class=\"eq\">&tau; = F/(bL) = 30000/(0.012 &times; 0.050) = 5.00&times;10<sup>7</sup> Pa = <strong>50.0 MPa</strong></p><p>Using the shaft diameter as the moment arm halves F. Using the key's cross-sectional area (12 &times; 8 mm) instead of its shear plane confuses shear with the separate bearing-stress check on the side face.</p><p>Now compare with the shaft itself: &tau;<sub>shaft</sub> = 16(600)/[&pi;(0.040)&sup3;] = 47.7 MPa. The key and the shaft are almost equally stressed, and that is deliberate. Standard key sizes are proportioned to the shaft so the key is the sacrificial element: it is cheap, it is accessible, and shearing a key is a far better outcome than twisting off a shaft inside a gearbox. If someone hardens the key to &ldquo;fix&rdquo; a failure, ask them what they now expect to break instead.</p>",
  },
  {
    id: "torsion-q46",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A shaft passed its static torsion check with a factor of safety of 3, then snapped after six months of start-stop duty. The fracture is flat and square to the axis, with curved beach marks fanning out from one keyway corner and a small rough zone on the far side. What was missed?</p>",
    choices: [
      "The material was brittle, which is why the fracture surface came out flat and square",
      "The static torque was underestimated, so the true factor of safety was below one",
      "The shaft resonated, and the beach marks are a record of the vibration amplitude",
      "Fatigue at the keyway notch: the static margin says nothing about K<sub>f</sub> and S<sub>e</sub>",
    ],
    answer: 3,
    explanation: "<p>Read the surface. Beach marks are the signature of progressive crack growth under cyclic load, the single initiation site at a keyway corner identifies the notch that started it, and the small final fast-fracture zone says the crack grew a long way before the remaining ligament let go, which means the nominal load was <em>low</em>, not high. A large static margin and a fatigue failure are entirely compatible.</p><p>A brittle overload in torsion gives a 45&deg; helix, not a flat face, and would show no beach marks. If the static torque had been underestimated enough to give a factor of safety below one, the shaft would have failed on the first cycle with a large final-fracture area. Resonance can supply the cycles, but it is a load source, not the failure mechanism, and beach marks do not record amplitude.</p><p>The calculation that was skipped: take the alternating nominal shear, apply the keyway K<sub>f</sub> (about 2 to 3), and compare with a corrected endurance limit S<sub>e</sub> knocked down for surface finish, size and reliability. A shaft at 40 MPa nominal with K<sub>f</sub> = 3 is running at 120 MPa alternating against an S<sub>e</sub> that may be 100 MPa. Failure in a few hundred thousand cycles, which is exactly six months of start-stops.</p>",
  },
  {
    id: "torsion-q47",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A variable-speed drive reports 40 N&middot;m of motor torque from its current estimate, while a calibrated strain-gauge bridge on the driven shaft reads 34 N&middot;m at steady speed. Which explanation should you check first?</p>",
    choices: [
      "Drive losses and parasitic drag between motor and gauge account for the difference",
      "The gauge is wrong, because a torque bridge cannot read steady torque, only transients",
      "The shaft polar moment J was mis-entered, which scales the strain reading by 18%",
      "Motor current is a direct measurement of shaft torque, so the shaft must be cracked",
    ],
    answer: 0,
    explanation: "<p>The two instruments are not measuring the same thing. A drive infers <em>motor air-gap</em> torque from current and a flux model; the gauge measures the actual torque in the shaft, downstream of bearing drag, seal friction, any coupling or gearbox losses, and windage. A 15% shortfall at steady speed is a plausible loss budget for a small drive train, and the sign is right. The shaft should read <em>less</em> than the motor.</p><p>So my first move is to check the loss path: spin the train uncoupled and log the no-load current, warm it up (grease drag falls a lot in the first minutes), and see whether the gap closes.</p><p>A full-bridge torque gauge reads steady torque perfectly well. That is its primary use. A mis-entered J would be a real calibration error worth checking second, but the torque bridge is calibrated against applied torque, not computed from J. And motor current is not a direct torque measurement: it depends on flux, temperature, and the drive's model, which is exactly why people fit torque transducers.</p><p>When two numbers disagree, ask what each one physically measures before deciding which is wrong.</p>",
  },
  {
    id: "torsion-q48",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A thin-walled closed rectangular tube has mid-wall dimensions of 80 mm &times; 40 mm and a uniform 2 mm wall. It carries 300 N&middot;m of torque. What is the shear stress in the wall, in MPa?</p>",
    figure: figShearFlow,
    answer: 23.4,
    unit: "MPa",
    explanation: "<p>For a single closed thin-walled cell, use Bredt's formula. The shear flow q (force per unit length of wall) is constant all the way round:</p><p class=\"eq\">A<sub>m</sub> = 0.080 &times; 0.040 = 3.20&times;10<sup>&minus;3</sup> m&sup2;</p><p class=\"eq\">q = T/(2A<sub>m</sub>) = 300/(2 &times; 3.20&times;10<sup>&minus;3</sup>) = 46,900 N/m</p><p class=\"eq\">&tau; = q/t = 46900/0.002 = 2.34&times;10<sup>7</sup> Pa = <strong>23.4 MPa</strong></p><p>A<sub>m</sub> is the area <em>enclosed by the mid-wall line</em>, not the area of metal, which is only 460 mm&sup2; here, and not the outside area. The factor of 2 is there because the shear flow makes a complete circuit, so each element of the loop contributes q dA<sub>m</sub> twice over.</p><p>Because q is constant while &tau; = q/t, the thinnest wall is always the most stressed. If this tube had a 2 mm top and a 1.5 mm bottom, the bottom would run at 31.3 MPa. That is why extruded torque boxes keep the wall uniform, and why a local thin spot from a weld undercut or corrosion is more serious in torsion than the average thickness suggests.</p>",
  },
  {
    id: "torsion-q49",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A closed circular tube has a 30 mm mean radius and a 3 mm wall. A 1 mm slit is machined along its full length, turning it into an open section. By what factor does the torsional stiffness fall? (Enter the ratio of closed to open.)</p>",
    figure: figSlit,
    answer: 300,
    explanation: "<p>Two different mechanisms, so two different formulas. Closed, the torque is carried by a shear flow circulating round the cell, and the thin-wall torsion constant is</p><p class=\"eq\">J<sub>closed</sub> = 2&pi;R&sup3;t = 2&pi;(0.030)&sup3;(0.003) = 5.09&times;10<sup>&minus;7</sup> m&#8308;</p><p>Slit, the loop is broken. The wall can only develop a through-thickness shear couple, exactly like a flat strip of width s = 2&pi;R rolled into a circle:</p><p class=\"eq\">J<sub>open</sub> = st&sup3;/3 = (2&pi; &times; 0.030)(0.003)&sup3;/3 = 1.70&times;10<sup>&minus;9</sup> m&#8308;</p><p class=\"eq\">ratio = 2&pi;R&sup3;t &divide; (2&pi;Rt&sup3;/3) = 3(R/t)&sup2; = 3(10)&sup2; = <strong>300</strong></p><p>The closed-form result 3(R/t)&sup2; is worth carrying: for any thin tube, slitting it costs a factor of three times the square of the radius-to-thickness ratio. A 50:1 tube loses a factor of 7500.</p><p>The stress penalty is separate and smaller but still severe, 3R/t = 30&times; here. And the practical warning: this applies to any accidental slit. A longitudinal weld that fails, a seam tube that unzips, a bolted cover plate whose fasteners loosen, or a lightening slot cut along a torque tube all convert a closed section into an open one, and the twist you measure afterwards will look like a completely different structure.</p>",
  },
  {
    id: "torsion-q50",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A solid 25 mm diameter steel shaft is rigidly fixed at both ends, 1.00 m apart. A 500 N&middot;m torque is applied at a section 0.30 m from the left-hand end. What torque does the left-hand support react, in N&middot;m?</p>",
    figure: figIndeterminate,
    answer: 350,
    unit: "N*m",
    explanation: "<p>One equilibrium equation, two unknowns, so this is statically indeterminate and needs a compatibility condition.</p><p><strong>Equilibrium:</strong> T<sub>A</sub> + T<sub>B</sub> = 500 N&middot;m.</p><p><strong>Compatibility:</strong> the loaded section rotates by one definite amount, and both ends are fixed, so the twist computed through the left segment must equal the twist computed through the right segment:</p><p class=\"eq\">T<sub>A</sub>a/(GJ) = T<sub>B</sub>b/(GJ) &nbsp;&rarr;&nbsp; T<sub>A</sub>(0.30) = T<sub>B</sub>(0.70)</p><p>GJ is the same throughout and cancels. The diameter never enters the answer, which is the tell that this is a stiffness-ratio problem. Substituting T<sub>B</sub> = 500 &minus; T<sub>A</sub>:</p><p class=\"eq\">0.30T<sub>A</sub> = 0.70(500 &minus; T<sub>A</sub>) &rarr; T<sub>A</sub> = 500(0.70/1.00) = <strong>350 N&middot;m</strong></p><p>and T<sub>B</sub> = 150 N&middot;m. Note the geometry: the reaction at each end is proportional to the length of the <em>far</em> segment, so the short, stiff side takes the larger share, 70% here. Splitting 250/250 is the classic wrong answer.</p><p>Consequence for design: the 0.30 m segment carries 350 N&middot;m and reaches &tau; = 16(350)/[&pi;(0.025)&sup3;] = 114 MPa, while the long segment sits at 49 MPa. Fixing both ends does not share the load evenly, and if you later shift the input point you redistribute the reactions completely.</p>",
  },
  {
    id: "torsion-q51",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 30 mm diameter solid steel bar is to be replaced by a steel tube of the same length, same material and identical mass. The tube is 50 mm outside diameter with a 40 mm bore. By what factor is the tube's torsional stiffness greater than the solid bar's?</p>",
    figure: figEqualMass,
    answer: 4.56,
    explanation: "<p>First confirm the mass really is equal, since that is the premise the whole comparison rests on:</p><p class=\"eq\">A<sub>solid</sub> = &pi;(30)&sup2;/4 = 707 mm&sup2;; &nbsp; A<sub>tube</sub> = &pi;(50&sup2; &minus; 40&sup2;)/4 = 707 mm&sup2;</p><p>Same material and length, so same mass. Now the polar moments:</p><p class=\"eq\">J<sub>solid</sub> = &pi;(0.030)&#8308;/32 = 7.95&times;10<sup>&minus;8</sup> m&#8308;</p><p class=\"eq\">J<sub>tube</sub> = &pi;(0.050&#8308; &minus; 0.040&#8308;)/32 = 3.62&times;10<sup>&minus;7</sup> m&#8308;</p><p class=\"eq\">GJ ratio = 3.62&times;10<sup>&minus;7</sup>/7.95&times;10<sup>&minus;8</sup> = <strong>4.56</strong></p><p>The tube is also less stressed, despite its larger outer radius: &tau; = Tc/J gives a ratio of (0.025/3.62&times;10<sup>&minus;7</sup>) &divide; (0.015/7.95&times;10<sup>&minus;8</sup>) = 0.37, so the tube runs at 37% of the solid bar's peak shear. Better on both counts for zero mass.</p><p>So why is any shaft solid? Because the tube is 67% larger in envelope, which often does not fit; because you cannot cut a keyway, a bearing journal or a snap-ring groove into a 5 mm wall; because seamless tube in the exact size costs more than bar stock; because a thin wall dents, ovalises under a clamp, and can buckle locally under high torque; and because welding or splining the ends reintroduces the mass you saved. Name at least two of those and you have answered the interview question, not just the arithmetic.</p>",
  },
  {
    id: "torsion-q52",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 30 mm diameter shaft is built in two 0.5 m halves joined end to end and carries 200 N&middot;m through both. The first half is steel (G = 80 GPa), the second is aluminium (G = 26 GPa). What is the total twist across the 1.0 m assembly, in degrees?</p>",
    answer: 3.67,
    unit: "deg",
    explanation: "<p>Same torque passes through both segments (series), and both have the same J, so only G differs.</p><p class=\"eq\">J = &pi;(0.030)&#8308;/32 = 7.95&times;10<sup>&minus;8</sup> m&#8308;</p><p class=\"eq\">&theta;<sub>steel</sub> = 200(0.5)/[(80&times;10<sup>9</sup>)(7.95&times;10<sup>&minus;8</sup>)] = 0.01572 rad = 0.901&deg;</p><p class=\"eq\">&theta;<sub>Al</sub> = 200(0.5)/[(26&times;10<sup>9</sup>)(7.95&times;10<sup>&minus;8</sup>)] = 0.04837 rad = 2.771&deg;</p><p class=\"eq\">&theta;<sub>total</sub> = 0.0641 rad = <strong>3.67&deg;</strong></p><p>The aluminium half supplies 75% of the twist while occupying half the length. Series compliances add, so the softest element dominates, the same reason a stiff steel shaft bolted to a flexible elastomeric coupling behaves like the coupling.</p><p>Averaging the moduli to 53 GPa and treating the assembly as one uniform shaft gives 2.77&deg;, understating the twist by 25%. Averaging only works for quantities that add in parallel. Here the compliances L/(GJ) add, so it is the <em>reciprocals</em> that average.</p><p>Note also that the shear stress is identical in both halves at 37.7 MPa, since &tau; = Tc/J has no material term. Same stress, wildly different twist.</p>",
  },
  {
    id: "torsion-q53",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A solid torsion bar is deliberately overloaded once past first yield in the service direction, then unloaded. What has the pre-setting operation actually done?</p>",
    choices: [
      "It raised the bar's shear modulus G, so subsequent elastic twist per newton-metre falls",
      "It removed the residual stresses left by heat treatment, giving a purely elastic bar",
      "It left residual shear opposing the overload, raising the elastic limit in that direction",
      "It work-hardened the core, which is where torsional shear stress is highest anyway",
    ],
    answer: 2,
    explanation: "<p>During the overload the outer fibres yield and flow while the elastic core does not. On unloading, the whole section tries to spring back <em>elastically</em>, and because the loaded and unloading stress distributions have different shapes they do not cancel. What is left is a self-equilibrating residual field: shear at the surface opposing the applied direction, balanced by shear of the opposite sign in the core.</p><p>The consequence is exactly what a spring designer wants. Reloading in the service direction must first overcome that residual before the surface reaches yield again, so the elastic capacity in that direction rises, typically 20 to 30% for a solid round bar. The bar also takes a small permanent set, which is why pre-set bars are made slightly over-length in angle and are marked for handedness.</p><p>G is unchanged. Plastic flow does not alter elastic modulus. Pre-setting adds residual stress rather than relieving it. And the core is where shear is <em>lowest</em>, not highest, so it is the last region to yield and the least work-hardened.</p><p>The price: the benefit is directional. Load a pre-set torsion bar backwards and it yields <em>sooner</em> than a virgin bar would. That is why suspension torsion bars are stamped left and right, and installing one on the wrong side is a real failure mode. The same physics underlies autofrettage of gun barrels and pressure vessels, and shot peening does a shallower version of it at the surface only.</p>",
  },
  {
    id: "torsion-q54",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 20 mm diameter shaft sees a fully reversing torque of &plusmn;100 N&middot;m next to a keyway whose fatigue notch factor is K<sub>f</sub> = 1.6. The corrected shear endurance limit is S<sub>se</sub> = 105 MPa. What is the nominal alternating shear stress amplitude at the surface, in MPa?</p>",
    answer: 63.7,
    unit: "MPa",
    explanation: "<p>Use the solid-shaft surface formula with the torque <em>amplitude</em>, not the peak-to-peak swing:</p><p class=\"eq\">&tau;<sub>a</sub> = 16T<sub>a</sub>/(&pi;d&sup3;) = 16(100)/[&pi;(0.020)&sup3;] = 6.37&times;10<sup>7</sup> Pa = <strong>63.7 MPa</strong></p><p>Taking the full 200 N&middot;m swing as the amplitude doubles this to 127 MPa, the most common error in a fatigue screen, and it is conservative here but wrong.</p><p>The keyway then multiplies the local alternating stress:</p><p class=\"eq\">&tau;<sub>a,local</sub> = K<sub>f</sub>&tau;<sub>a</sub> = 1.6(63.7) = 102 MPa</p><p class=\"eq\">n<sub>f</sub> = S<sub>se</sub>/&tau;<sub>a,local</sub> = 105/102 = 1.03</p><p>A fatigue factor of safety of 1.03 is not a design. It is a coin toss, because S<sub>se</sub> itself carries scatter of &plusmn;20% or more. The mean shear is zero here, so there is no Goodman mean-stress penalty on top; if the torque had a steady component you would need one, and the margin would be worse.</p><p>The nominal number looked comfortable: 63.7 MPa against a 105 MPa limit, a margin of 1.65. The notch ate almost all of it. Fix it by radiusing the keyway root (K<sub>f</sub> to about 1.3), going up one diameter step (which cuts &tau;<sub>a</sub> by 42% for a 20% size increase), or moving the keyway out of the fully-reversed section.</p>",
  },
  {
    id: "torsion-q55",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A torque transducer built from strain gauges on a shaft reads 4% high after the shop warms from 15&deg;C to 35&deg;C. The mechanical load is unchanged. Which explanation is most likely?</p>",
    choices: [
      "The shaft polar moment J grew enough with temperature to change the calibration",
      "The applied torque genuinely vanished, because thermal expansion is unconstrained",
      "The shaft became measurably non-circular, but only underneath the gauge grid",
      "Imperfect temperature compensation or bridge drift is contaminating the reading",
    ],
    answer: 3,
    explanation: "<p>Work out what the physics could possibly contribute. Over 20 K, steel expands by 12&times;10<sup>&minus;6</sup> &times; 20 = 240 ppm, so J changes by four times that, about 0.1%. G falls by roughly 0.5%. Neither can produce a 4% shift. The measurement chain can, easily: gauge factor drifts with temperature, the foil's own resistance changes, the adhesive and backing creep, the bridge excitation and amplifier offset drift, and any mismatch in the thermal output of the four arms shows up as apparent strain.</p><p>So the shift lives in the instrumentation, not in the shaft. Confirm it directly: unload the shaft completely and see whether the zero has moved. If the zero drifted, it is bridge or apparent-strain compensation; if the zero is stable but the span changed, it is gauge factor or excitation.</p><p>Good practice for a shaft torque bridge: a full four-arm bridge with gauges at &plusmn;45&deg;, which cancels bending, axial load and first-order thermal output by symmetry; gauges from one batch, matched to the substrate's expansion coefficient; a stable, remotely-sensed excitation; and periodic dead-weight calibration at the operating temperature.</p><p>Before hunting for a physical explanation of a data shift, check whether the instrument can account for it. A model validated against untrustworthy data is worse than no model.</p>",
  },
  {
    id: "torsion-q56",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A spline coupling passes its nominal shaft stress check comfortably, but test parts show reddish-brown debris and polished wear patches on the spline flanks after vibration testing. What should be investigated first?</p>",
    choices: [
      "Euler buckling of the shaft core under the compressive part of the torque cycle",
      "Hydrostatic yielding, since equal pressure acts on all flanks simultaneously",
      "A reduced polar moment in the smooth span between the spline and the bearing",
      "Fretting and contact stress at the spline flanks, where micro-slip is occurring",
    ],
    answer: 3,
    explanation: "<p>Reddish-brown debris is iron oxide. The classic signature of fretting. Small oscillatory relative motion at a loaded interface, typically only micrometres, breaks the oxide film, exposes fresh metal, and grinds the debris into an abrasive. Fretting reduces the local fatigue strength by a factor of two to five, so a spline can initiate cracks at nominal stresses that the smooth-shaft calculation calls trivial.</p><p>The Tc/J check never sees this, because it describes the shaft body, not the tooth contact. What matters instead: contact pressure on the flanks, how many teeth actually share the load (rarely more than half, because of pitch and lead errors), flank surface finish and hardness, lubrication and whether it can reach the interface, misalignment between the mating parts, and the root fillet at each tooth.</p><p>Buckling needs axial compression, which a torque does not supply to a solid shaft; hydrostatic stress causes no yielding at all under either von Mises or Tresca; and the smooth span's polar moment is irrelevant to damage happening at the teeth.</p><p>Typical fixes: switch to a crowned spline to tolerate misalignment, specify a surface treatment (nitriding, phosphate plus a dry-film lubricant, or a soft plating), improve lubrication or seal the joint, tighten fit tolerances so more teeth share, or move to a fixed-fit interference joint where the relative motion is designed out entirely. Torque hardware usually fails at its interfaces, not in its shafts.</p>",
  },
  {
    id: "torsion-q57",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A finite-element model of a smooth round shaft under pure torque reports a peak shear stress of 40 MPa, while a hand calculation of Tc/J gives 38 MPa. What is the most appropriate response?</p>",
    choices: [
      "Discard the hand calculation, since a converged FEA result is exact by construction",
      "Adjust the material properties in the model until the two results agree exactly",
      "Treat the 5% gap as mutual validation, then check mesh, loading and result averaging",
      "Reject the model, because circular-shaft torsion cannot be solved by finite elements",
    ],
    answer: 2,
    explanation: "<p>For a geometry that matches closed-form theory exactly, 40 versus 38 MPa is agreement, not a discrepancy, and that is the whole reason to run the hand calculation. It is the benchmark that tells you the model is set up correctly before you point it at geometry the formula cannot handle.</p><p>Then you explain the 5%. The usual sources, in order of likelihood: the peak was sampled at a node where the solver extrapolated and averaged element results (nodal averaging near a free surface routinely overshoots by a few percent); the torque was applied through a rigid coupling or a set of point loads that produces a local end effect; the constraint at the far end restrains warping or radial motion; or the mesh has too few elements through the radius to resolve a linear stress gradient. Re-query the result away from both ends, refine the mesh once, and confirm the number converges.</p><p>FEA is a numerical approximation, not an oracle. Discretisation, element formulation, and boundary conditions all inject error. Tuning material properties to force a match is fitting the answer, which destroys the model's predictive value. And torsion is one of the easiest problems in solid mechanics for FEA.</p><p>First-principles estimate, model setup checked against it, mesh convergence, then the model used only for what the formula cannot reach. The shoulder fillet, the keyway root, the cross-hole.</p>",
  },
  {
    id: "torsion-q58",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A designer keeps increasing tube diameter and thinning the wall to save mass, holding the nominal polar moment J roughly constant. Which limit should move up the concern list?</p>",
    choices: [
      "Local wall buckling, denting, ovalisation, and crushing at clamps and bearing seats",
      "A sudden rise in the shear modulus G once the wall drops below a critical thickness",
      "Centreline stress overtaking surface stress once the section becomes thin enough",
      "Loss of torque equilibrium along the tube, since a thin wall cannot transmit moment",
    ],
    answer: 0,
    explanation: "<p>Nominal torsion rewards radius without limit, but the tube's <em>stability</em> does not. A thin-walled tube in torsion buckles into a diagonal wrinkle pattern, and the critical shear stress falls roughly as (t/R)<sup>3/2</sup>, so every step you take toward a thinner wall attacks the very failure mode you are creating. Alongside that: the tube dents from handling or stone impact, ovalises under clamp or bearing loads (and an ovalised tube has less torsional capacity), and crushes where a hub or a strap grips it.</p><p>The joints also refuse to scale down with the wall. Welded end fittings, splined stubs and flange plates all need local thickness, so past some point every gram taken out of the tube goes straight back into the ends plus a doubler.</p><p>G is a material constant and geometry cannot change it; centreline stress in a circular section is always zero; and equilibrium is not something a thin wall can violate.</p><p>Push material outward for J, then stop when local stability, damage tolerance, packaging, and the joint details start controlling. Automotive driveshafts settle around D/t of 20 to 40 for exactly this reason, and the check you must add is the torsional buckling stress alongside the yield check.</p>",
  },
  {
    id: "torsion-q59",
    type: "mc",
    difficulty: 3,
    prompt: "<p>Two parallel shafts connect the same pair of rigid plates, so their two ends rotate together. Shaft A is much stiffer in torsion than shaft B. How is the applied torque shared?</p>",
    choices: [
      "Each shaft must carry exactly half, since they connect the same pair of plates",
      "The flexible shaft carries almost all of it, because it deflects to take up the load",
      "The split is indeterminate unless both shafts are made from the same material",
      "In proportion to torsional stiffness GJ/L, because both shafts twist by the same angle",
    ],
    answer: 3,
    explanation: "<p>Parallel load paths are governed by compatibility: rigid plates at both ends force both shafts to twist through the same angle &theta;. Each then carries T<sub>i</sub> = k<sub>i</sub>&theta; with k<sub>i</sub> = G<sub>i</sub>J<sub>i</sub>/L<sub>i</sub>, so</p><p class=\"eq\">T<sub>i</sub>/T<sub>total</sub> = k<sub>i</sub>/(k<sub>A</sub> + k<sub>B</sub>)</p><p>This is the torsional analogue of springs in parallel: stiffness adds, and load follows stiffness. Equal sharing happens only if the stiffnesses happen to be equal, and the split is perfectly determinate for any materials. G appears in k, so mixed materials are handled without difficulty.</p><p>Option 1 inverts the physics and is the more interesting wrong answer, because it is the intuition people carry from series systems, where the softest element dominates the <em>deflection</em>. In parallel it is the stiffest element that dominates the <em>load</em>.</p><p>This bites when a team adds a second load path as a backup and assumes it halves the load on the original. If the backup is a slender strut alongside a heavy shaft, it may pick up 5% of the torque and provide almost no redundancy, while a stiff addition can steal 80% of the load from a part that was never sized for the new distribution. Redundancy has to be designed by stiffness, not by counting members, and the same argument applies to bolt groups, weld patterns, and multiple bearings on one shaft.</p>",
  },
  {
    id: "torsion-q60",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Two solid steel shafts of equal length run in parallel between rigid plates. Their diameters are 25 mm and 35 mm, and together they carry 500 N&middot;m. How much torque goes into the 35 mm shaft, in N&middot;m?</p>",
    figure: figParallel,
    answer: 397,
    unit: "N*m",
    explanation: "<p>Equal length and equal material means stiffness is proportional to J, and for solid shafts J &prop; d&#8308;. So the split is a pure d&#8308; ratio:</p><p class=\"eq\">T<sub>35</sub> = 500 &times; 35&#8308;/(25&#8308; + 35&#8308;) = 500 &times; 1,500,625/(390,625 + 1,500,625)</p><p class=\"eq\">T<sub>35</sub> = 500(0.7935) = <strong>397 N&middot;m</strong></p><p>and the 25 mm shaft takes only 103 N&middot;m. A 40% larger diameter attracts nearly four times the torque.</p><p>Now check the stresses, because the answer is not what the load split suggests. &tau;<sub>35</sub> = 16(397)/[&pi;(0.035)&sup3;] = 47.2 MPa and &tau;<sub>25</sub> = 16(103)/[&pi;(0.025)&sup3;] = 33.6 MPa. The big shaft is both more loaded <em>and</em> more stressed, because torque redistributes as d&#8308; while capacity only grows as d&sup3;. Adding a small parallel shaft to help a large one is nearly useless.</p><p>250 N&middot;m splits by count; 292 N&middot;m splits by area. Both appear regularly and both under-load the part that governs. Dual driveshafts, a torque tube beside a backup strut, multi-fastener torque joints: all of them need stiffness-based load sharing.</p>",
  },
  {
    id: "torsion-q61",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A high-cycle torsion specimen lasts far longer after shot peening, with diameter and nominal stress unchanged. What changed mechanically?</p>",
    choices: [
      "The polar moment J roughly doubled, halving the stress for the same applied torque",
      "Compressive residual stress at the surface delayed crack initiation and early growth",
      "The shear modulus G rose, so the same torque now produces less strain at the surface",
      "The applied torque was partly converted into axial tension, which is less damaging",
    ],
    answer: 1,
    explanation: "<p>Shot peening plastically deforms a thin surface layer, which the elastic bulk underneath then holds in compression, typically 0.1 to 0.5 mm deep at magnitudes approaching half the yield strength. Torsional fatigue cracks initiate at or just below the surface, at machining marks, inclusions, and notch roots, and they need a tensile stress to open. Superimposing a compressive residual field means the applied load must first cancel it, so initiation is delayed and small cracks are held closed during early growth.</p><p>Peening also work-hardens the surface and can improve the finish slightly, both of which help. What it does not do is change J, G, or the nominal Tc/J stress at all. The calculation is identical before and after, which is precisely why the improvement surprises people who only look at the stress number.</p><p>Geometry is unchanged, so J is unchanged; G is a material constant; and torque does not convert into axial load.</p><p>Nominal torsion formulas are one input to fatigue life among many. Surface finish, residual stress, heat treatment, inclusion content, corrosion, decarburisation, and fretting can move life by an order of magnitude without touching Tc/J. The limits of peening are worth knowing too. It is a shallow treatment, so it does nothing for subsurface initiation, and the residual field relaxes at elevated temperature or under overload.</p>",
  },
  {
    id: "torsion-q62",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A long drivetrain shaft passes both static stress and static twist checks, but test data show large oscillatory twist confined to a narrow engine speed band. What should be analysed?</p>",
    choices: [
      "Only the static shear stress, evaluated at the maximum torque the engine can deliver",
      "Torsional natural frequency, damping, and excitation from torque ripple or gear mesh",
      "The mass and adhesion of the paint layer on the outside surface of the shaft",
      "The direct compressive buckling load of the shaft treated as an Euler column",
    ],
    answer: 1,
    explanation: "<p>Large response confined to a narrow speed band is a resonance signature, and no static calculation can predict it. The drivetrain is a torsional spring-inertia system: the shaft supplies stiffness k = GJ/L, and the flywheel, clutch, gears and driven machine supply inertias. For a two-inertia model &omega;<sub>n</sub> = &radic;[k(J<sub>1</sub> + J<sub>2</sub>)/(J<sub>1</sub>J<sub>2</sub>)], and at resonance the dynamic torque can be many times the mean even though the mean is comfortable.</p><p>The first job is identifying which excitation order it is, because that names the source: engine firing (0.5 &times; cylinders per revolution for a four-stroke), gear mesh (teeth &times; rpm), motor cogging or drive PWM harmonics, universal-joint second-order at large working angles, or a control loop whose bandwidth overlaps the mode. Order-tracked torque or strain data answers this faster than any model.</p><p>Fixes, roughly in cost order: retune the mode by changing shaft stiffness (length, diameter, or a tube) or by adding or removing inertia; add damping with an elastomeric or viscous coupling or a tuned absorber; detune the excitation (tooth count, joint angle, control gains); and, as a last resort, define a forbidden speed band.</p><p>Whatever the fix, the fatigue check must then use the <em>resonant</em> torque amplitude, not the mean. That is the load the shaft has actually been living with. A complete shaft review covers strength, stiffness, fatigue, critical speed, and torsional vibration.</p>",
  },
];

export default extra;
