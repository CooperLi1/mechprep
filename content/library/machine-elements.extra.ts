import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.

const figFatigueTrace = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex32-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same time axis, same force scale</text>
  <line x1="66" y1="210" x2="434" y2="210" stroke="#334155" stroke-width="1.6" marker-end="url(#mex32-axis)"/>
  <line x1="66" y1="210" x2="66" y2="46" stroke="#334155" stroke-width="1.6" marker-end="url(#mex32-axis)"/>
  <line x1="60" y1="158" x2="66" y2="158" stroke="#334155" stroke-width="1.2"/>
  <line x1="60" y1="107" x2="66" y2="107" stroke="#334155" stroke-width="1.2"/>
  <line x1="60" y1="55" x2="66" y2="55" stroke="#334155" stroke-width="1.2"/>
  <text x="56" y="214" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="56" y="162" text-anchor="end" fill="#64748b" font-size="11">10</text>
  <text x="56" y="111" text-anchor="end" fill="#64748b" font-size="11">20</text>
  <text x="56" y="59" text-anchor="end" fill="#64748b" font-size="11">30 kN</text>
  <line x1="66" y1="86" x2="410" y2="86" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 84 210 C 111 210 137 158 164 158 C 191 158 217 210 244 210 C 271 210 297 158 324 158 C 351 158 377 210 404 210" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <path d="M 84 86 C 111 86 137 76 164 76 C 191 76 217 86 244 86 C 271 86 297 76 324 76 C 351 76 377 86 404 86" fill="none" stroke="#1d4ed8" stroke-width="2.6"/>
  <text x="140" y="140" fill="#dc2626" font-size="12">external separating load P</text>
  <text x="140" y="64" fill="#1d4ed8" font-size="12">bolt load: barely moves</text>
  <text x="416" y="90" fill="#64748b" font-size="11">F<tspan baseline-shift="sub" font-size="9">i</tspan></text>
  <text x="430" y="232" text-anchor="end" fill="#334155" font-size="12">time</text>
  <text x="78" y="42" fill="#334155" font-size="12">force</text>
</svg>`;

const figHelicalForces = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex37-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="mex37-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Helical mesh resolves into three components</text>
  <rect x="40" y="150" width="200" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="90" y="96" width="100" height="122" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <line x1="95" y1="218" x2="128" y2="96" stroke="#334155" stroke-width="1.2"/>
  <line x1="118" y1="218" x2="151" y2="96" stroke="#334155" stroke-width="1.2"/>
  <line x1="141" y1="218" x2="174" y2="96" stroke="#334155" stroke-width="1.2"/>
  <line x1="164" y1="218" x2="190" y2="122" stroke="#334155" stroke-width="1.2"/>
  <line x1="151" y1="218" x2="151" y2="176" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M 151 200 A 24 24 0 0 0 157 184" fill="none" stroke="#64748b" stroke-width="1.3"/>
  <text x="160" y="204" fill="#64748b" font-size="12">&psi;</text>
  <line x1="140" y1="96" x2="140" y2="54" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#mex37-blue)"/>
  <text x="132" y="50" text-anchor="end" fill="#1d4ed8" font-weight="600">F<tspan baseline-shift="sub" font-size="9">r</tspan></text>
  <line x1="140" y1="86" x2="214" y2="86" stroke="#dc2626" stroke-width="2.5" marker-end="url(#mex37-red)"/>
  <text x="220" y="90" fill="#dc2626" font-weight="600">F<tspan baseline-shift="sub" font-size="9">a</tspan></text>
  <circle cx="140" cy="140" r="9" fill="none" stroke="#334155" stroke-width="1.6"/>
  <line x1="134" y1="134" x2="146" y2="146" stroke="#334155" stroke-width="1.4"/>
  <line x1="146" y1="134" x2="134" y2="146" stroke="#334155" stroke-width="1.4"/>
  <text x="156" y="144" fill="#334155" font-size="12">F<tspan baseline-shift="sub" font-size="9">t</tspan></text>
  <text x="272" y="92" fill="#334155">F<tspan baseline-shift="sub" font-size="9">t</tspan> = 2T/d</text>
  <text x="272" y="120" fill="#1d4ed8">F<tspan baseline-shift="sub" font-size="9">r</tspan> = F<tspan baseline-shift="sub" font-size="9">t</tspan> tan &phi;</text>
  <text x="272" y="148" fill="#dc2626">F<tspan baseline-shift="sub" font-size="9">a</tspan> = F<tspan baseline-shift="sub" font-size="9">t</tspan> tan &psi;</text>
  <text x="272" y="182" fill="#dc2626" font-size="12">the thrust has to be</text>
  <text x="272" y="200" fill="#dc2626" font-size="12">reacted somewhere</text>
  <text x="230" y="244" text-anchor="middle" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">t</tspan> acts into the page and does the work; F<tspan baseline-shift="sub" font-size="9">r</tspan> and F<tspan baseline-shift="sub" font-size="9">a</tspan> only load bearings</text>
</svg>`;

const figFixedFloat = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex42-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">As built: both outer rings clamped axially</text>
  <rect x="60" y="126" width="340" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="92" y="96" width="36" height="30" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <rect x="92" y="144" width="36" height="30" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="110" cy="111" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.2"/>
  <circle cx="110" cy="159" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.2"/>
  <line x1="86" y1="88" x2="86" y2="182" stroke="#334155" stroke-width="3.5"/>
  <line x1="134" y1="88" x2="134" y2="182" stroke="#334155" stroke-width="3.5"/>
  <rect x="332" y="96" width="36" height="30" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <rect x="332" y="144" width="36" height="30" fill="#fff" stroke="#334155" stroke-width="1.6"/>
  <circle cx="350" cy="111" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.2"/>
  <circle cx="350" cy="159" r="8" fill="#cbd5e1" stroke="#334155" stroke-width="1.2"/>
  <line x1="326" y1="88" x2="326" y2="182" stroke="#334155" stroke-width="3.5"/>
  <line x1="374" y1="88" x2="374" y2="182" stroke="#334155" stroke-width="3.5"/>
  <rect x="200" y="88" width="60" height="94" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <text x="230" y="140" text-anchor="middle" fill="#334155" font-size="12">gear</text>
  <text x="110" y="82" text-anchor="middle" fill="#334155" font-weight="600">A</text>
  <text x="350" y="82" text-anchor="middle" fill="#334155" font-weight="600">B</text>
  <text x="110" y="198" text-anchor="middle" fill="#64748b" font-size="12">located both sides</text>
  <text x="350" y="198" text-anchor="middle" fill="#64748b" font-size="12">located both sides</text>
  <line x1="150" y1="216" x2="310" y2="216" stroke="#dc2626" stroke-width="2" marker-end="url(#mex42-red)"/>
  <text x="230" y="238" text-anchor="middle" fill="#dc2626" font-size="12">900 mm steel span, warms 60 &deg;C in service</text>
</svg>`;

const figSpringFD = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex54-axis" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Rate line, working stroke and solid height</text>
  <rect x="294" y="48" width="32" height="164" fill="#fee2e2"/>
  <line x1="70" y1="212" x2="424" y2="212" stroke="#334155" stroke-width="1.6" marker-end="url(#mex54-axis)"/>
  <line x1="70" y1="212" x2="70" y2="46" stroke="#334155" stroke-width="1.6" marker-end="url(#mex54-axis)"/>
  <line x1="64" y1="161" x2="70" y2="161" stroke="#334155" stroke-width="1.2"/>
  <line x1="64" y1="110" x2="70" y2="110" stroke="#334155" stroke-width="1.2"/>
  <line x1="64" y1="58" x2="70" y2="58" stroke="#334155" stroke-width="1.2"/>
  <text x="60" y="216" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="60" y="165" text-anchor="end" fill="#64748b" font-size="11">100</text>
  <text x="60" y="114" text-anchor="end" fill="#64748b" font-size="11">200</text>
  <text x="60" y="62" text-anchor="end" fill="#64748b" font-size="11">300 N</text>
  <line x1="150" y1="212" x2="150" y2="171" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="294" y1="212" x2="294" y2="97" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="97" x2="294" y2="97" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="70" y1="212" x2="326" y2="81" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="326" y1="81" x2="326" y2="50" stroke="#dc2626" stroke-width="2.4" stroke-dasharray="6 4"/>
  <circle cx="150" cy="171" r="4.5" fill="#1d4ed8"/>
  <circle cx="294" cy="97" r="5" fill="#dc2626"/>
  <text x="158" y="192" fill="#1d4ed8" font-size="11">installed, 80 N</text>
  <text x="240" y="90" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">F = ?</text>
  <text x="334" y="62" fill="#dc2626" font-size="11">coil bind at 32 mm</text>
  <text x="310" y="42" text-anchor="middle" fill="#b45309" font-size="11">clash margin</text>
  <text x="70" y="230" text-anchor="middle" fill="#64748b" font-size="11">0</text>
  <text x="150" y="230" text-anchor="middle" fill="#64748b" font-size="11">10</text>
  <text x="230" y="230" text-anchor="middle" fill="#64748b" font-size="11">20</text>
  <text x="310" y="230" text-anchor="middle" fill="#64748b" font-size="11">30</text>
  <text x="390" y="230" text-anchor="middle" fill="#64748b" font-size="11">40</text>
  <text x="240" y="250" text-anchor="middle" fill="#64748b" font-size="11">deflection from free length (mm)</text>
</svg>`;

const figShaftBeam = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex57-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Gear at midspan between two bearings</text>
  <rect x="70" y="118" width="320" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <polygon points="110,134 96,162 124,162" fill="none" stroke="#334155" stroke-width="1.6"/>
  <circle cx="110" cy="134" r="3.5" fill="#334155"/>
  <line x1="90" y1="162" x2="130" y2="162" stroke="#334155" stroke-width="1.6"/>
  <line x1="94" y1="172" x2="104" y2="162" stroke="#64748b" stroke-width="1"/>
  <line x1="106" y1="172" x2="116" y2="162" stroke="#64748b" stroke-width="1"/>
  <line x1="118" y1="172" x2="128" y2="162" stroke="#64748b" stroke-width="1"/>
  <polygon points="350,134 336,156 364,156" fill="none" stroke="#334155" stroke-width="1.6"/>
  <circle cx="342" cy="162" r="6" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="358" cy="162" r="6" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="330" y1="170" x2="370" y2="170" stroke="#334155" stroke-width="1.6"/>
  <line x1="334" y1="180" x2="344" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="346" y1="180" x2="356" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="358" y1="180" x2="368" y2="170" stroke="#64748b" stroke-width="1"/>
  <circle cx="230" cy="126" r="30" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <line x1="230" y1="54" x2="230" y2="92" stroke="#dc2626" stroke-width="2.6" marker-end="url(#mex57-red)"/>
  <text x="230" y="46" text-anchor="middle" fill="#dc2626" font-weight="600">F<tspan baseline-shift="sub" font-size="9">r</tspan> = 1.2 kN</text>
  <path d="M 52 96 A 26 26 0 0 1 96 108" fill="none" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mex57-red)"/>
  <text x="74" y="72" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">T = 60 N&middot;m</text>
  <line x1="110" y1="204" x2="350" y2="204" stroke="#64748b" stroke-width="1"/>
  <line x1="110" y1="198" x2="110" y2="210" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="198" x2="230" y2="210" stroke="#64748b" stroke-width="1"/>
  <line x1="350" y1="198" x2="350" y2="210" stroke="#64748b" stroke-width="1"/>
  <text x="170" y="198" text-anchor="middle" fill="#64748b" font-size="12">100 mm</text>
  <text x="290" y="198" text-anchor="middle" fill="#64748b" font-size="12">100 mm</text>
  <text x="230" y="234" text-anchor="middle" fill="#334155" font-size="12">steel shaft, S<tspan baseline-shift="sub" font-size="9">y</tspan> = 350 MPa, design factor 2.0</text>
</svg>`;

const figShoulderKeyway = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex58-lead" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Fatigue fracture at a stepped shaft</text>
  <rect x="56" y="92" width="150" height="76" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="206" y="104" width="196" height="52" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <line x1="44" y1="130" x2="414" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="10 3 2 3"/>
  <rect x="250" y="104" width="90" height="9" fill="#fff" stroke="#334155" stroke-width="1.3"/>
  <path d="M 206 104 l -5 8 l 7 9 l -6 9 l 7 10 l -5 8 l 6 8" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <circle cx="206" cy="104" r="20" fill="none" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="220" y1="90" x2="268" y2="62" stroke="#dc2626" stroke-width="1.2" marker-end="url(#mex58-lead)"/>
  <text x="274" y="54" fill="#dc2626" font-size="11">fillet r = 0.5 mm, 30 &rarr; 25 step</text>
  <text x="274" y="70" fill="#dc2626" font-size="11">r/d = 0.02, K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 2.9 in bending</text>
  <line x1="295" y1="115" x2="332" y2="192" stroke="#334155" stroke-width="1.2"/>
  <text x="338" y="198" fill="#334155" font-size="11">keyway, K<tspan baseline-shift="sub" font-size="9">t</tspan> &asymp; 2</text>
  <text x="131" y="84" text-anchor="middle" fill="#64748b" font-size="12">30 mm</text>
  <text x="380" y="96" text-anchor="middle" fill="#64748b" font-size="12">25 mm</text>
  <text x="230" y="230" text-anchor="middle" fill="#64748b" font-size="12">Fully reversed bending, 10<tspan baseline-shift="super" font-size="9">8</tspan> cycles, nominal stress well under the endurance limit</text>
</svg>`;

const figBeltWrap = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mex60-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="mex60-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">A 180&deg; wrap: what the bearing actually carries</text>
  <path d="M 400 68 L 170 68 A 64 64 0 0 0 170 196 L 400 196" fill="none" stroke="#334155" stroke-width="5"/>
  <circle cx="170" cy="132" r="58" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="170" cy="132" r="7" fill="#334155"/>
  <path d="M 170 88 A 44 44 0 0 0 170 176" fill="none" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3"/>
  <text x="142" y="137" text-anchor="middle" fill="#64748b" font-size="12">&beta; = 180&deg;</text>
  <path d="M 139 101 A 44 44 0 0 1 201 101" fill="none" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#mex60-blue)"/>
  <line x1="300" y1="50" x2="392" y2="50" stroke="#dc2626" stroke-width="2.6" marker-end="url(#mex60-red)"/>
  <text x="294" y="54" text-anchor="end" fill="#dc2626" font-weight="600">T<tspan baseline-shift="sub" font-size="9">1</tspan> tight</text>
  <line x1="300" y1="214" x2="392" y2="214" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#mex60-blue)"/>
  <text x="294" y="218" text-anchor="end" fill="#1d4ed8" font-weight="600">T<tspan baseline-shift="sub" font-size="9">2</tspan> slack</text>
  <line x1="170" y1="132" x2="272" y2="132" stroke="#1d4ed8" stroke-width="3" marker-end="url(#mex60-blue)"/>
  <text x="278" y="128" fill="#1d4ed8" font-size="12">bearing load &asymp; T<tspan baseline-shift="sub" font-size="9">1</tspan> + T<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">&mu; = 0.30, effective tension T<tspan baseline-shift="sub" font-size="9">1</tspan> &minus; T<tspan baseline-shift="sub" font-size="9">2</tspan> = 400 N</text>
</svg>`;

const extra: Question[] = [
  {
    id: "machine-elements-q32",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A preloaded joint has F<sub>i</sub> = 24 kN and stiffness factor C = 0.20. The external separating load cycles between 0 and 10 kN, as traced in red. What is the alternating <em>amplitude</em> of the bolt load, in kN?</p>",
    figure: figFatigueTrace,
    answer: 1.0,
    unit: "kN",
    tolerance: 0.05,
    explanation: "<p>While the joint stays clamped, the bolt only picks up the stiffness fraction of whatever the outside world applies:</p><p class=\"eq\">&Delta;F<sub>b,range</sub> = C(P<sub>max</sub> &minus; P<sub>min</sub>) = 0.20(10 &minus; 0) = 2.0 kN</p><p>Fatigue works on amplitude, which is half the range:</p><p class=\"eq\">F<sub>a</sub> = 2.0/2 = <strong>1.0 kN</strong></p><p>So the bolt oscillates between 24.0 and 26.0 kN, exactly as the flat blue trace shows. Two ways to get this wrong. Reporting 10 kN treats the bolt as if it carried the whole external load. That is the un-preloaded case, and it is ten times worse. Reporting 2.0 kN confuses range with amplitude, a factor of two that matters because fatigue diagrams are plotted in amplitude.</p><p>Check that the joint really does stay clamped: separation needs P = F<sub>i</sub>/(1 &minus; C) = 24/0.8 = 30 kN, well above the 10 kN peak. If it did separate, the amplitude would jump to 5 kN and this bolt's life would collapse. That single fact, a factor of five in alternating stress hanging on whether the joint opens, is why preload exists.</p>"
  },
  {
    id: "machine-elements-q33",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A bolted flange is designed as a friction-grip joint: the plates must not slip under transverse service load. Which check directly protects that load path?</p>",
    choices: [
      "Check bolt shank shear against the service load, since shear is the governing strength of any bolt",
      "Compare service shear with &mu; times the clamp force, allowing for preload scatter and slip factor",
      "Reduce the clamp force so the plates settle into bearing early and share the load across all bolts",
      "Check hole clearance and edge distance, since slip is limited by how far a plate can move before bearing"
    ],
    answer: 1,
    explanation: "<p>In a slip-critical joint the transverse load never reaches the bolt shanks: it is carried by friction across the faying surfaces, F<sub>slip</sub> = &mu;&Sigma;F<sub>clamp</sub>, with &mu; around 0.3 to 0.5 on clean, unpainted steel. The bolts exist purely to generate normal force. The governing check is therefore service shear against slip capacity, divided by a slip factor of about 1.5, with the clamp force taken at the <em>low</em> end of the preload scatter band.</p><p>Checking shank shear describes a bearing-type joint. The state the connection reaches only <em>after</em> it has already slipped, by which point you have lost alignment and started fretting and hole elongation. It also flatters the design badly: shear capacity typically runs two to three times slip capacity, so the calculation passes while the real joint moves at a third of the rated load.</p><p>Reducing clamp force attacks the very mechanism you are relying on. And thread form has nothing to do with it. Friction capacity depends on normal force and surface condition, so the things to specify alongside the bolts are the faying-surface treatment (blast-cleaned, not painted or galvanised without qualification), the tightening method, and an embedment allowance.</p>"
  },
  {
    id: "machine-elements-q34",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Six M12 class 8.8 bolts (A<sub>t</sub> = 84.3 mm<sup>2</sup>, S<sub>p</sub> = 600 MPa) clamp a single-shear lap joint, each preloaded to 70% of proof. The faying surfaces give &mu; = 0.35. What transverse load will the joint carry before it slips, in kN?</p>",
    answer: 74.4,
    unit: "kN",
    tolerance: 0.04,
    explanation: "<p>Preload per bolt first:</p><p class=\"eq\">F<sub>i</sub> = 0.70 S<sub>p</sub>A<sub>t</sub> = 0.70(600)(84.3) = 35406 N = 35.4 kN</p><p>Each bolt's clamp generates friction on the one faying surface:</p><p class=\"eq\">F<sub>slip</sub> = &mu; n F<sub>i</sub> = 0.35(6)(35.4) = <strong>74.4 kN</strong></p><p>Compare that with what a bearing-type check would have given. Bolt shear capacity at roughly 0.6S<sub>p</sub>A<sub>t</sub> per bolt is about 30 kN each, 182 kN for six, two and a half times the slip load. Size this joint on shear and you would confidently ship a connection that starts moving at 41% of its &ldquo;rated&rdquo; capacity, then frets, elongates the holes, and loses its preload.</p><p>Two refinements matter here. Apply a slip factor of about 1.5, so the usable service load is nearer 50 kN. And use the <em>low</em> end of the preload band: with torque control at &plusmn;25%, the honest clamp is 0.75 &times; 35.4 = 26.6 kN per bolt, dropping slip capacity to 56 kN before any factor. If the joint also carries external tension, subtract the clamp loss (1 &minus; C)P first, tension and shear interact through the same preload.</p>"
  },
  {
    id: "machine-elements-q35",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A gasketed flange passes its leak test at assembly, then leaks after a week at operating temperature. No external overload occurred and no bolt is broken. What should be investigated first?</p>",
    choices: [
      "Bolt tensile strength, since the fasteners must have weakened at temperature",
      "The gasket's chemical compatibility, since leakage always means material attack",
      "Preload loss from gasket creep, embedment, and differential thermal expansion",
      "Bolt shear capacity, since the flange faces slid relative to one another"
    ],
    answer: 2,
    explanation: "<p>Sealing needs a minimum gasket contact pressure, and the joint delivered it at assembly. A week later it does not, with nothing external having changed, so the clamp force went away on its own. That is a <strong>preload retention</strong> problem, and there are three usual contributors, all time and temperature driven.</p><p><strong>Embedment</strong>: surface asperities at the head, the nut, and the faying faces flatten under load, typically costing 5 to 15 microns per interface. On a short-grip bolt, 30 microns of settlement on a 200 kN/mm effective stiffness is 6 kN of preload gone. <strong>Gasket creep and stress relaxation</strong>: soft and fibrous gaskets keep flowing under sustained pressure, worse at temperature. <strong>Differential expansion</strong>: mismatched materials shift preload up or down, and the up direction can plastically yield the bolt so that the joint comes back loose when it cools.</p><p>The fixes follow directly: a hot re-torque after the first thermal soak, a longer or waisted bolt so the same settlement costs less preload, fewer and smoother interfaces, a stiffer gasket or a metal-seated design, Belleville live-loading, or higher initial preload within proof limits. Bolt strength is irrelevant here. Nothing broke, and shear is the wrong load path for a sealing face.</p>"
  },
  {
    id: "machine-elements-q36",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A spur pinion transmits 8.0 kW at 1200 rpm through a 60 mm pitch diameter. Estimate the tangential tooth load F<sub>t</sub> in kN.</p>",
    answer: 2.12,
    unit: "kN",
    tolerance: 0.03,
    explanation: "<p>Power to torque first, with speed in rad/s:</p><p class=\"eq\">&omega; = 2&pi;(1200)/60 = 125.7 rad/s</p><p class=\"eq\">T = P/&omega; = 8000/125.7 = 63.7 N&middot;m</p><p>Then torque to tooth load at the pitch circle:</p><p class=\"eq\">F<sub>t</sub> = 2T/d = 2(63.7)/0.060 = 2123 N = <strong>2.12 kN</strong></p><p>The classic slip is putting rpm straight into P = T&omega;, which understates the torque by 60/2&pi; and gives T = 8000/1200 = 6.67 N&middot;m and F<sub>t</sub> = 222 N, low by a factor of 9.55. The shortcut worth carrying is T [N&middot;m] &approx; 9550 P [kW]/n [rpm].</p><p>This is only the start of the load path. At a 20&deg; pressure angle there is another 0.77 kN of radial separating load, and that is what the shaft and bearings see. A useful reasonableness check on the gear itself: with a 3 mm module and 20 mm face width, 2.12 kN gives a Lewis bending stress around 110 MPa, which is comfortable for a hardened steel pinion.</p>"
  },
  {
    id: "machine-elements-q37",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A helical gear reducer repeatedly overheats the locating bearing on the pinion shaft. Tooth contact pattern is good and the oil is correct, but the bearing was selected from the radial load alone. What was missed?</p>",
    figure: figHelicalForces,
    choices: [
      "Helical teeth transmit pure torque, so any bearing heat must come from the seals",
      "The locating bearing should never carry axial load; the float bearing takes it",
      "Bearing heat always indicates low lubricant viscosity, independent of the load path",
      "Helical teeth generate axial thrust F<sub>a</sub> = F<sub>t</sub> tan &psi; that the bearing must react"
    ],
    answer: 3,
    explanation: "<p>The price of a helical gear's smooth, high-contact-ratio mesh is a third force component along the shaft axis: F<sub>a</sub> = F<sub>t</sub>tan &psi;. At a 25&deg; helix that is 47% of the tangential load, and at 30&deg; it is 58%. Select the bearing on F<sub>r</sub> alone and the equivalent dynamic load P = XF<sub>r</sub> + YF<sub>a</sub> can be double what you assumed, which, cubed, is an eightfold error in life.</p><p>The thrust has to go somewhere. Real options: an angular-contact pair or a tapered-roller set at the locating position, a dedicated thrust bearing, opposed helices on a countershaft so the two meshes cancel, or a herringbone gear that cancels internally. A deep-groove ball bearing can take modest thrust but its contact ellipse climbs the shoulder of the raceway, contact stress rises, friction torque rises, and it heats, exactly the reported symptom.</p><p>Note why the second option is wrong and tempting: the locating bearing is precisely the one that <em>must</em> take axial load, because the float bearing is deliberately free to slide. Getting that backwards is a common answer, and it is the reverse of the design rule.</p>"
  },
  {
    id: "machine-elements-q38",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A servo-driven positioning axis holds position accurately in one direction but overshoots and settles slowly on reversal. The motor-mounted encoder reads the commanded position correctly throughout. What is the mechanism?</p>",
    choices: [
      "Gearbox backlash: the load stays behind while the motor crosses the tooth clearance",
      "Bearing L<sub>10</sub> fatigue, since spalled raceways make positioning direction-dependent",
      "Insufficient lubricant viscosity, which lets the teeth slip on the reversing stroke",
      "Motor cogging torque, which acts only when the drive changes direction of rotation"
    ],
    answer: 0,
    explanation: "<p>The decisive clue is that the <em>motor</em> encoder is correct. Whatever is losing position sits between the encoder and the load, and the classic candidate is mesh backlash, the deliberate circumferential clearance built into every gear pair for thermal growth, lubricant, and manufacturing tolerance. Drive one way and the flanks stay loaded and rigid; reverse, and the motor turns through the clearance while the load does not move at all. To the control loop that reads as dead time, which eats phase margin and produces exactly the overshoot-and-hunt behaviour described.</p><p>The fixes, roughly in cost order: close the loop on the <strong>load</strong> side with a second encoder so the controller sees the truth; approach every target from the same direction so the backlash is always taken up (standard practice on machine tools); use an anti-backlash arrangement. Split spring-loaded gears, a preloaded dual-motor drive, a duplex or preloaded ballscrew, or a strain-wave (harmonic) gearbox, which is near-zero backlash by construction; or reduce the ratio between the encoder and the load.</p><p>The distractors describe real phenomena that do not fit the evidence: bearing spalling causes roughness and noise, not direction-dependent lost motion; viscosity does not make teeth slip in a positive drive; and cogging is a continuous ripple, not a reversal-only offset.</p>"
  },
  {
    id: "machine-elements-q39",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A robot joint bearing rotates through a small arc a few times an hour but occasionally absorbs a hard impact when the arm hits a hard stop. Which catalog rating governs the selection?</p>",
    choices: [
      "Dynamic rating C, since L<sub>10</sub> is the only rating with a load exponent and the arc still adds cycles",
      "Neither &mdash; for arcs this small you size on false-brinelling resistance, which no catalog rates",
      "The limiting speed, since a joint that barely turns never reaches the speeds C is defined at",
      "Static rating C<sub>0</sub>: a hard-stop impact can brinell the raceway at very low cycle counts"
    ],
    answer: 3,
    explanation: "<p>Total revolutions here are tiny, so the fatigue calculation is meaningless. L<sub>10</sub> will come out at decades no matter what bearing you pick. What limits the choice is <strong>permanent deformation</strong> at the rolling-element contacts. The static rating C<sub>0</sub> is defined as the load producing a permanent indentation of about 0.0001 of the rolling-element diameter, and a single impact past it brinells the raceway. Those dents then become noise, roughness, and stress raisers that seed spalling.</p><p>Practice is to apply a static safety factor s<sub>0</sub> = C<sub>0</sub>/P<sub>0</sub>: around 1 to 1.5 for smooth, non-critical duty, and 2 to 3 or more where shock is expected or where running smoothness matters, as on a robot joint. Note also that a bearing that barely rotates cannot build a hydrodynamic film and cannot redistribute the load among the elements, so it is doubly exposed. False brinelling from micro-oscillation under vibration is a second failure mode for exactly this duty cycle.</p><p>Checking only C is a genuinely common catalog misuse, and it is the one this question is built to catch: the two ratings answer completely different questions, and low-speed, high-shock applications are governed by the one most people skip.</p><p>The limiting-speed option inverts the logic. A speed limit is a ceiling, and being far below it removes a constraint rather than creating one. And false brinelling is real for this duty, but it is a wear mechanism under micro-oscillation, not the hard-stop impact the prompt describes; you mitigate it with grease selection and periodic full rotations, after you have already sized on C<sub>0</sub>.</p>"
  },
  {
    id: "machine-elements-q40",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A rectangular sunk key transmits T = 150 N&middot;m on a 30 mm shaft. Key height h = 7 mm and engaged length L = 45 mm. Using &sigma;<sub>b</sub> = 4T/(dhL), estimate the bearing stress in MPa.</p>",
    answer: 63.5,
    unit: "MPa",
    tolerance: 0.03,
    explanation: "<p>Work in N and mm, so T = 150 N&middot;m = 150000 N&middot;mm:</p><p class=\"eq\">&sigma;<sub>b</sub> = 4T/(dhL) = 4(150000)/(30 &times; 7 &times; 45) = 600000/9450 = <strong>63.5 MPa</strong></p><p>The factor of 4 has a physical origin worth being able to explain: the torque appears as a tangential force F = 2T/d at the shaft surface, and for a standard sunk key only half the key height bears against the hub, so the projected bearing area is hL/2. Dividing gives 4T/(dhL).</p><p>Against a mild-steel hub this is comfortable, but the corresponding shear check uses a different area (wL, giving 2T/(dwL)) and the two rarely agree. Bearing usually governs, which is why keys are made wider than they are tall in shear-limited designs. Neither check says anything about the shaft, which now has a keyway carrying a stress-concentration factor of 2 to 3, nor about fit: a loose key under reversing torque hammers and frets long before either average stress becomes interesting.</p>"
  },
  {
    id: "machine-elements-q41",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A flexible coupling is installed with angular misalignment well beyond its published allowance. It runs and transmits full torque without complaint, but bearings either side fail within months. Why?</p>",
    choices: [
      "The flexible element takes the whole offset, so the shafts see pure torque and the fault lies elsewhere",
      "Misalignment only wears the coupling element; bearing loads are set by the gear and belt loads alone",
      "It absorbed the misalignment by feeding cyclic side loads and bending moments into both shaft ends",
      "The extra angle raised rubbing speed inside the coupling, and that heat conducted along into the bearings"
    ],
    answer: 2,
    explanation: "<p>A flexible coupling does not make misalignment disappear; it <em>absorbs</em> it by deflecting its flexible element, and deflecting an elastic element takes force. That force is reacted at the shaft ends as a side load and a bending moment, and because the coupling rotates, the load is <strong>cyclic</strong> at running speed, one or two cycles per revolution depending on the coupling type. Add heat generated in the elastomer or the gear teeth and you get a package that quietly destroys bearings while the torque path looks perfectly healthy.</p><p>The bearing arithmetic makes it brutal. Life goes as (C/P)<sup>3</sup>, so an extra reaction that raises the equivalent load by only 40% cuts life to a third; double it and you are at one eighth. That is precisely the pattern reported. A drive that runs fine but eats bearings in months instead of years, with no obvious symptom until something seizes.</p><p>What to check in the field: alignment measured cold <em>and</em> corrected for thermal growth from ambient to running temperature, soft foot on the machine feet, pipe strain pulling the casing, the coupling's published parallel, angular, and axial allowances taken together rather than one at a time, and whether the coupling's radial stiffness is appropriate for the shafts it connects. What would you measure first? A vibration spectrum. Misalignment shows up strongly at 2&times; running speed with high axial amplitude.</p>"
  },
  {
    id: "machine-elements-q42",
    type: "mc",
    difficulty: 3,
    prompt: "<p>The 900 mm shaft shown runs between two deep-groove ball bearings, both with outer rings shouldered and end-capped as drawn. After the gearbox warms about 60 &deg;C in service, both bearings run hot and fail. What is wrong with the arrangement?</p>",
    figure: figFixedFloat,
    choices: [
      "The shaft is too long, so its critical speed has dropped below the running speed",
      "Deep-groove ball bearings cannot be used in pairs on a single rotating shaft",
      "The outer rings need a tighter housing fit, which would stop them creeping when hot",
      "Both bearings locate axially, so thermal growth of the shaft has nowhere to go"
    ],
    answer: 3,
    explanation: "<p>A shaft that gets hotter than its housing grows, and the growth is not small. For steel at &alpha; = 12 &times; 10<sup>&minus;6</sup>/K:</p><p class=\"eq\">&Delta;L = &alpha;L&Delta;T = 12 &times; 10<sup>&minus;6</sup> &times; 900 &times; 60 = 0.65 mm</p><p>With both outer rings clamped between a shoulder and an end cap, that 0.65 mm has nowhere to go. It is reacted as pure axial force through the bearings, and the axial stiffness of a mounted ball bearing is on the order of hundreds of kN per mm, so the induced thrust runs into tens of kN, dwarfing the design loads. Contact stress rises, friction rises, temperature rises further, and the arrangement runs away.</p><p>The standard fix is a <strong>locating and non-locating (fixed and float)</strong> pair. One bearing is clamped on both sides of both rings and carries all the axial load and the shaft's position. The other has its outer ring free to slide in the housing bore (or is a cylindrical roller bearing whose rollers slide on one raceway), so growth is simply taken up. Only when the span is short and the temperature rise is small can you use an adjusted or cross-located pair.</p><p>The other options are real concepts pointed at the wrong evidence: critical speed produces vibration, not warm-up-dependent seizure; paired deep-groove bearings are ordinary; and a tighter housing fit is the exact opposite of what the float side needs.</p>"
  },
  {
    id: "machine-elements-q43",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A compression spring is specified only by working load and spring rate. In testing it goes solid before the mechanism reaches the end of its travel. Which design check was skipped?</p>",
    choices: [
      "Gear pressure angle, because the spring is driven through a geared mechanism",
      "Bearing L<sub>10</sub> life, because the coils roll against one another as they close",
      "Thread lead, because a coiled spring advances one pitch per turn of the coil",
      "Solid height and clash margin at maximum deflection, including tolerance stack"
    ],
    answer: 3,
    explanation: "<p>A compression spring cannot deflect past its solid height. The coils touch and the rate goes effectively infinite. Beyond that point the mechanism either jams or drives enough force into the spring to take a permanent set, and either way the specification &ldquo;working load and rate&rdquo; gave no warning. Rate tells you the slope of the line; solid height tells you where the line stops.</p><p>The full geometric check is: free length, installed length, working deflection, <strong>solid height</strong> L<sub>s</sub> &approx; n<sub>t</sub>d for squared-and-ground ends, and a clash margin of typically 10 to 15% of the working deflection left over at maximum travel. Then the tolerance stack, because free length carries a manufacturing tolerance, plating adds thickness, and springs take set in service.</p><p>Two related checks belong in the same breath: <strong>buckling</strong> if the free-length-to-diameter ratio exceeds about 5.2 between flat plates, and <strong>surge</strong> if the spring cycles fast, where its own natural frequency must sit far above the drive frequency. The three distractors are deliberately from other domains. If any of them looked plausible, the giveaway is that none of them contains a length.</p>"
  },
  {
    id: "machine-elements-q44",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A belt pulley of radius 50 mm transmits 20 N&middot;m. What tight-side minus slack-side tension difference is required?</p>",
    answer: 400,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>Only the <em>difference</em> in belt tension produces torque, because the two spans pull in opposite directions about the shaft centre:</p><p class=\"eq\">T = (T<sub>1</sub> &minus; T<sub>2</sub>)r</p><p class=\"eq\">&Delta;T = T/r = 20/0.050 = <strong>400 N</strong></p><p>This is the effective tension, and it is the number that sizes the belt's power capacity. It is emphatically <em>not</em> the number that sizes the shaft and bearings: those carry roughly the vector sum of the two span tensions, which for a 180&deg; wrap is T<sub>1</sub> + T<sub>2</sub>. How large that sum is depends on friction and wrap angle through the capstan relation T<sub>1</sub>/T<sub>2</sub> = e<sup>&mu;&beta;</sup>, and for typical flat-belt numbers it lands around two to three times the effective tension.</p><p>That gap is why belt drives quietly overload bearings: the drive is rated at 400 N of useful tension while the bearing is carrying nearer 900 N, permanently, whether the machine is loaded or not.</p>"
  },
  {
    id: "machine-elements-q45",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A chain drive shows speed ripple and vibration although the average ratio is exactly right. The driven sprocket has only 11 teeth and the drive runs fast. What effect dominates?</p>",
    choices: [
      "Hydrodynamic film collapse, since a chain behaves like a series of journal bearings",
      "Polygonal action: the chain wraps a polygon, so effective radius and speed vary per tooth",
      "Rolling contact fatigue scatter, since chain vibration comes from pin and bush pitting",
      "Lead error in the sprocket cutting, since a chain advances like a multi-start screw"
    ],
    answer: 1,
    explanation: "<p>A chain cannot wrap a circle. It wraps a polygon whose corners are the sprocket teeth, so as each link engages, the effective pitch radius oscillates between the circumscribed radius R and R&nbsp;cos(180&deg;/N). The chain's linear velocity therefore rises and falls once per tooth engagement even at perfectly constant sprocket speed. This is <strong>polygonal</strong> or <strong>chordal action</strong>.</p><p>The magnitude depends only on tooth count, and it falls away fast: 1 &minus; cos(180&deg;/N) gives 4.1% variation at 11 teeth, 1.7% at 17, 1.4% at 19, and 0.8% at 25. That is why the standard guidance is a minimum of 17 to 19 teeth on the driving sprocket for anything running at speed, and 23 or more where smoothness matters. The excitation frequency is the tooth-passing frequency, which readily coincides with a shaft or chain-span natural frequency and turns a small ripple into a resonance.</p><p>The design responses, in order: more teeth, lower chain speed, an odd number of teeth paired with an even link count so wear is distributed, guides and tensioners to damp the slack span, or a switch to a toothed synchronous belt if the ripple cannot be tolerated. The other three options describe mechanisms that exist elsewhere but cannot produce a per-tooth periodic speed error.</p>"
  },
  {
    id: "machine-elements-q46",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Ignoring friction entirely, what torque is required to raise a 1000 N load with a single-start power screw of lead 5.0 mm?</p>",
    answer: 0.796,
    unit: "N·m",
    tolerance: 0.03,
    explanation: "<p>With no friction, all the input work goes into lifting the load. Over one revolution the input is T(2&pi;) and the output is F times the lead:</p><p class=\"eq\">T = FL/(2&pi;) = 1000(0.0050)/6.283 = <strong>0.796 N&middot;m</strong></p><p>Two things to say about this number. First, it is a lower bound and a badly optimistic one: real Acme power screws run at 20% to 40% efficiency because thread friction and collar friction dominate, so the actual torque is typically three to five times this. Second, that inefficiency is a feature. It is exactly what makes a screw jack <strong>self-locking</strong>, so the load does not wind itself back down when you let go. A ball screw at 90% efficiency lifts this load for about 0.88 N&middot;m but will happily back-drive and needs a brake.</p><p>Using pitch instead of lead is the usual slip. They are equal only for a single-start thread, and on a two-start screw the lead is double, which doubles the torque and halves the mechanical advantage.</p>"
  },
  {
    id: "machine-elements-q47",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A press-fit hub on a shaft shows reddish-brown debris and surface damage after service under small oscillatory torque reversals. No gross slip was ever observed and the fit was measured correct. What is the mechanism?</p>",
    choices: [
      "Hydrodynamic wear, since the interference fit traps oil that pressurises under load",
      "Rolling contact spalling, since red debris is characteristic of subsurface fatigue",
      "Fretting: micro-slip of a few microns under high contact pressure, oxidising the debris",
      "Adhesive scuffing, since press-fit surfaces weld locally whenever they are loaded"
    ],
    answer: 2,
    explanation: "<p>Fretting needs three things that this joint has all of: two surfaces clamped together under pressure, a cyclic load, and relative motion of only a few microns. That is far too little to look like sliding. The fit is genuinely tight and nothing visibly moves, but it is enough to break the oxide film, generate fine wear particles, and re-oxidise them. On steel the product is haematite, hence the red-brown &ldquo;cocoa&rdquo; debris. The particles are harder than the parent metal and abrasive, so the process feeds itself.</p><p>The reason it matters more than ordinary wear is <strong>fretting fatigue</strong>: the damaged surface nucleates cracks, and the endurance limit of a fretted shaft can drop by half or more. The usual locations are the ends of press-fit hubs, bearing inner-ring seats, spline flanks, and bolted faying surfaces. Anywhere contact pressure falls off at the edge of the contact so slip becomes possible there first.</p><p>The fixes split by intent. To <em>prevent</em> slip: raise the interference or the clamp force, add a key or spline to carry the torque reversals, or relieve the hub ends so the contact pressure tapers rather than ending abruptly. To <em>tolerate</em> slip: low-friction coatings, MoS<sub>2</sub> or phosphate surfaces, a soft interlayer, or a shrink-disc that spreads the pressure. Assuming that no visible movement means no damage is what sinks people here.</p>"
  },
  {
    id: "machine-elements-q48",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A shaft runs in bearings A and B spaced 300 mm apart. A 1.0 kN downward belt load acts on an overhung pulley 100 mm outboard of bearing A. Treating the shaft as a beam, what radial reaction does bearing A carry, in kN?</p>",
    answer: 1.33,
    unit: "kN",
    tolerance: 0.03,
    explanation: "<p>Put A at x = 0, B at x = 0.300 m, and the 1.0 kN downward load at x = &minus;0.100 m. Moments about A:</p><p class=\"eq\">R<sub>B</sub>(0.300) = &minus;1.0(0.100) &rarr; R<sub>B</sub> = &minus;0.333 kN</p><p>Vertical equilibrium then gives</p><p class=\"eq\">R<sub>A</sub> = 1.0 &minus; R<sub>B</sub> = 1.0 + 0.333 = <strong>1.33 kN</strong></p><p>The negative sign on R<sub>B</sub> is the whole point: the far bearing reaction acts <em>downward</em>. The overhung load levers the shaft about A, so B is holding the shaft down while A carries more than the entire applied load. A candidate who assumes the two bearings share 0.5 kN each has understated bearing A by a factor of 2.7, and cubed, that is a factor of 19 in predicted life.</p><p>Two design consequences. Shorten the overhang or lengthen the bearing span, because the amplification is (1 + e/L). And check that bearing B stays loaded: if the overhung load is the only load, B may unload completely at some operating point and its rolling elements will skid rather than roll, which scuffs raceways. Real belt drives make this worse still, since the bearing carries T<sub>1</sub> + T<sub>2</sub> rather than the effective tension.</p>"
  },
  {
    id: "machine-elements-q49",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A small hub is retained on a shaft by a single cup-point set screw. The application applies reversing torque and the hub is expected to hold position precisely. What concern do you raise?</p>",
    choices: [
      "The set screw guarantees zero backlash at any torque, so no concern arises",
      "Reversing torque work-hardens the shaft dimple and improves holding over time",
      "The set screw removes the need to check shaft stress, since torque bypasses the shaft",
      "It relies on a local dimple and friction, so reversals rock it loose and mar the shaft"
    ],
    answer: 3,
    explanation: "<p>A cup-point set screw holds by digging a small crater into the shaft and by the friction its preload generates. Both are marginal against reversing torque. The hub rocks within the clearance of the dimple, the screw backs off, the crater grows and frets, and the joint develops backlash. Then the raised burr around the crater makes the hub difficult to remove without damaging the shaft.</p><p>Set screws are perfectly good for light, unidirectional, non-critical positioning duty: a fan hub, an encoder wheel, a knob. Once the torque reverses, or the hub must hold a precise angular position, or a loose hub would be a safety issue, the better options are a keyed joint (positive drive), a spline (positive plus higher capacity), a clamping or split hub (friction over a large area with no shaft damage), a taper-lock bushing (high capacity, self-centring, removable), or a shrink fit.</p><p>Practical mitigations if a set screw must stay: use two screws at 90&deg;, flat the shaft so the point bears on a prepared surface, add a thread-locking compound, or use a soft-tip screw to avoid marring. The choice depends on torque, reversals, concentricity, how often it is disassembled, and how much shaft weakening a keyway would cost.</p>"
  },
  {
    id: "machine-elements-q50",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A cylindrical roller bearing has C/P = 4.0. Using the roller exponent p = 10/3, estimate L<sub>10</sub> life in millions of revolutions.</p>",
    answer: 102,
    unit: "million rev",
    tolerance: 0.03,
    explanation: "<p>Apply the life law with the roller exponent:</p><p class=\"eq\">L<sub>10</sub> = (C/P)<sup>10/3</sup> &times; 10<sup>6</sup> = 4<sup>3.333</sup> &times; 10<sup>6</sup></p><p class=\"eq\">4<sup>10/3</sup> = e<sup>(10/3)ln4</sup> = e<sup>4.621</sup> = 101.6</p><p>so L<sub>10</sub> = <strong>102 million revolutions</strong>. Using the ball exponent p = 3 by mistake gives 64 million. A 37% underestimate, and the error runs the other way at high C/P, so it is not conservatively safe either.</p><p>The physical reason for the different exponent is contact geometry: a roller makes line contact and a ball makes point contact, so for the same load the roller spreads it over a larger area and its life is even more sensitive to load ratio. Practically, rollers carry much more radial load for a given envelope but tolerate misalignment far worse and generally take no thrust unless they are tapered or have a flanged design.</p><p>As always this is catalog fatigue life only. Contamination, film thickness, and misalignment can knock an order of magnitude off it, which is what the ISO life-modification factor exists to capture.</p>"
  },
  {
    id: "machine-elements-q51",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A gearbox runs hotter after the oil was changed to a much higher viscosity grade than specified. The stated intent was to thicken the film and reduce wear. What was traded away?</p>",
    choices: [
      "Nothing: a thicker film separates the flanks better and the extra oil mass carries heat to the case",
      "Grade only sets the additive package, so the heat has to be coming from the new seals or the breather",
      "Churning and viscous drag rise with grade, and together they add more heat than the thicker film saves",
      "Nothing at the mesh &mdash; gear efficiency is set by tooth geometry, so the bearings must be over-preloaded"
    ],
    answer: 2,
    explanation: "<p>Viscosity is an optimisation, not a monotonic good. Raising it does thicken the elastohydrodynamic film. Film thickness scales roughly with viscosity to the 0.67 power, but every other consequence goes the wrong way. Viscous shear in the mesh and the bearings rises roughly linearly with viscosity, churning and windage losses in a splash-lubricated sump climb steeply, and bearing drag torque increases. All of that is dissipated power, so sump temperature rises until the case can reject it.</p><p>There is a self-correcting irony worth pointing out: the hotter sump thins the oil back down, so some of the intended film gain evaporates while the drag penalty remains. And cold start is strictly worse. A heavy grade may not fling or flow to the upper bearings at all for the first minutes, which is when a large share of wear actually happens.</p><p>The right method is to work from the manufacturer's required viscosity <em>at operating temperature</em>, compute the film-thickness ratio &lambda; = h/&sigma;<sub>rms</sub>, and aim for &lambda; above about 1.5 to 2 for gears. If &lambda; is short, the better levers are usually surface finish (halving roughness doubles &lambda; for free), a synthetic base oil with a higher viscosity index, or EP and anti-wear additives, not simply a thicker oil, and certainly not the thickest available.</p>"
  },
  {
    id: "machine-elements-q52",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Two springs with k<sub>1</sub> = 10 N/mm and k<sub>2</sub> = 15 N/mm are stacked in series. What is the equivalent spring rate?</p>",
    answer: 6,
    unit: "N/mm",
    explanation: "<p>Springs in series carry the same force and their deflections add, so compliances add:</p><p class=\"eq\">1/k<sub>eq</sub> = 1/10 + 1/15 = 0.1000 + 0.0667 = 0.1667</p><p class=\"eq\">k<sub>eq</sub> = 1/0.1667 = <strong>6.00 N/mm</strong></p><p>A series combination must be <em>softer</em> than the softest member: 6.00 is below 10, so the arithmetic is the right way up. In parallel the same two springs would give 25 N/mm, stiffer than either.</p><p>This is the same relation that governs a bolt and its clamped members when you turn the nut, k<sub>b</sub>k<sub>m</sub>/(k<sub>b</sub> + k<sub>m</sub>), and the same one that governs thermal-misfit load sharing, which is why it is worth being fluent in it rather than memorising three separate formulas. The physical rule to carry: elements that see the same <em>force</em> add compliance; elements that see the same <em>deflection</em> add stiffness.</p>"
  },
  {
    id: "machine-elements-q53",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A spring-return cam follower is fine at 1200 rpm but the follower bounces off the cam at 3000 rpm. The spring's measured surge (natural) frequency is 100 Hz and it is not going solid. What is the diagnosis?</p>",
    choices: [
      "The spring rate is too high at speed, so the follower is being pushed off the cam profile",
      "Surge: at 50 Hz cam speed the spring is only 2&times; above the excitation and resonates",
      "Coil fatigue has lowered the rate, so preload dropped and the follower lost contact",
      "Follower inertia is irrelevant below 5000 rpm; the cam profile must be miscut"
    ],
    answer: 1,
    explanation: "<p>Get the excitation frequency first: 3000 rpm is 50 rev/s, so the cam's fundamental is 50 Hz. The spring's own surge frequency is 100 Hz, only a factor of 2 above it. That is nowhere near enough, because a cam event is not a sine wave: it is a short, sharp acceleration pulse rich in harmonics, and its 2nd harmonic sits exactly on the spring's resonance. Standing compression waves then travel along the coils, the spring's instantaneous force at the follower end bears little relation to its static rate, and at some point it goes to zero and the follower jumps.</p><p>The design rule is to keep the spring's fundamental at least <strong>13 times</strong> the camshaft rotational frequency, so here you would want 650 Hz or more. Since f<sub>n</sub> scales with d/(nD<sup>2</sup>), the levers are heavier wire, fewer active coils, or a smaller mean diameter. All of which raise the rate too, so you trade against stress and packaging. The other standard answers are a nested inner spring with a different natural frequency, a variable-pitch or conical spring that has no single resonance, a damper coil, or eliminating the problem entirely with a desmodromic or hydraulic follower.</p><p>Note what the diagnosis rules out: the spring is not going solid (given), so this is not a clash-margin problem, and it was fine at 1200 rpm. A fatigue-softened spring or a miscut cam would have misbehaved at both speeds.</p>"
  },
  {
    id: "machine-elements-q54",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>The spring plotted has free length 60 mm, rate 8 N/mm and solid height 28 mm. It is installed at 50 mm and the mechanism then compresses it a further 18 mm. What force does the spring exert at the end of the stroke, in N?</p>",
    figure: figSpringFD,
    answer: 224,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>Spring force depends on deflection from the <em>free</em> length, not from the installed length. Installed deflection is 60 &minus; 50 = 10 mm, and the stroke adds 18 mm:</p><p class=\"eq\">x<sub>total</sub> = 10 + 18 = 28 mm</p><p class=\"eq\">F = kx = 8(28) = <strong>224 N</strong></p><p>The common error is using only the 18 mm of stroke and reporting 144 N, which ignores the 80 N of installed preload the spring already carried at the start of travel.</p><p>Now do the check the plot is really about. Solid height is 28 mm, which corresponds to a deflection of 60 &minus; 28 = 32 mm. The stroke ends at 28 mm of deflection, so there are <strong>4 mm of clash margin</strong> left. About 22% of the 18 mm working stroke, which is acceptable but not generous. Free-length tolerance, plating buildup, and permanent set in service all eat into that margin, and if the mechanism can overtravel at all the spring will bind at 256 N and the rate will go vertical.</p>"
  },
  {
    id: "machine-elements-q55",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A compression spring is wound from 3.0 mm wire to a mean coil diameter of 24 mm. What is its spring index?</p>",
    answer: 8,
    unit: "dimensionless",
    explanation: "<p>Spring index is the ratio of mean coil diameter to wire diameter:</p><p class=\"eq\">C = D/d = 24/3.0 = <strong>8.0</strong></p><p>That is comfortably inside the practical band of 5 to 12, which is why the number is worth computing early. Below about 4 the spring is hard to coil without cracking the wire, and the Wahl curvature correction factor climbs steeply, at C = 4 it is about 1.40, so the real inner-fibre shear stress is 40% above the simple &tau; = 8FD/(&pi;d<sup>3</sup>) estimate, and fatigue cracks start on the inside of the coil. Above about 12 the spring becomes floppy: it tangles in a parts bin, buckles readily, and needs a guide.</p><p>Index also drives the rate, since k = Gd/(8nC<sup>3</sup>). The cube is the useful lever: a small change in index moves stiffness a great deal, which is why a designer with a fixed wire size and a fixed envelope adjusts coil diameter first and active coil count second.</p>"
  },
  {
    id: "machine-elements-q56",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A compression spring with free length 120 mm and mean coil diameter 20 mm is compressed 50% of its free length between two flat parallel plates. What behaviour should you expect, and what is the fix?</p>",
    choices: [
      "It will take a permanent set at that deflection; specify a higher tensile wire grade",
      "It will surge and resonate at that deflection; add a damper coil inside the spring",
      "At L/D = 6 it will buckle sideways at large deflection; guide it on a rod or in a bore",
      "It will bind before 50% deflection; increase the active coil count to gain travel"
    ],
    answer: 2,
    explanation: "<p>Compute the slenderness first: L<sub>free</sub>/D = 120/20 = 6.0. A compression spring behaves like a column, and between flat parallel plates (which cannot resist end rotation, so the ends behave as pinned) the critical slenderness is about <strong>5.2</strong>. Above that, there is a deflection ratio at which the spring goes unstable and bows sideways. At L/D = 6 that happens near 50% deflection, so this spring is right at the boundary and will buckle.</p><p>The consequences are worse than they sound: the rate drops non-linearly, the spring rubs whatever is around it, side loads appear on the follower or piston, and the coils fatigue in a bending mode they were not designed for. It is also intermittent and load-dependent, which makes it a nightmare to diagnose from a test log.</p><p>The fixes: <strong>guide it</strong> on a rod through the middle or inside a bore. With the caveat that the spring diameter grows as it compresses, so leave clearance and expect some rubbing. Otherwise change the geometry: a shorter, fatter spring at the same rate, or two shorter springs in series with a guided spacer plate between them. Fixing both ends properly (squared, ground, and located in counterbores) raises the critical ratio to about 10.5, which is the cheapest fix if the design allows it.</p>"
  },
  {
    id: "machine-elements-q57",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The shaft shown carries a gear at midspan between bearings 200 mm apart. It transmits T = 60 N&middot;m and the gear applies a 1.2 kN radial load. For a steel with S<sub>y</sub> = 350 MPa and a design factor of 2.0 on the maximum-shear criterion, what minimum shaft diameter is required, in mm?</p>",
    figure: figShaftBeam,
    answer: 17.0,
    unit: "mm",
    tolerance: 0.04,
    explanation: "<p>Bending moment for a central load between simple supports:</p><p class=\"eq\">M = FL/4 = 1200(0.200)/4 = 60 N&middot;m</p><p>Bending and torsion combine as a root-sum-square in the maximum-shear-stress criterion:</p><p class=\"eq\">&radic;(M<sup>2</sup> + T<sup>2</sup>) = &radic;(60<sup>2</sup> + 60<sup>2</sup>) = 84.9 N&middot;m</p><p class=\"eq\">d<sup>3</sup> = 32n&radic;(M<sup>2</sup> + T<sup>2</sup>)/(&pi;S<sub>y</sub>) = 32(2.0)(84.9)/(&pi; &times; 350 &times; 10<sup>6</sup>) = 4.94 &times; 10<sup>&minus;6</sup> m<sup>3</sup></p><p class=\"eq\">d = <strong>17.0 mm</strong></p><p>Check it back: &tau;<sub>max</sub> = 16(84.9)/(&pi;(0.0170)<sup>3</sup>) = 87.5 MPa, exactly 0.5S<sub>y</sub>/2. Note how little the second load contributes, bending alone would give 15.2 mm, so adding an equal torque only costs 12% in diameter, because the root-sum-square is inside a cube root. Adding M and T arithmetically instead gives 19.1 mm, unnecessarily heavy.</p><p>Then do what the number does not cover, which is where the interview goes next. Pick 20 mm stock. This is a rotating shaft, so bending is fully reversed and torque is steady. That needs a proper fatigue calculation, not a static yield check. The keyway under the gear brings K<sub>t</sub> of 2 to 3, the shoulder fillets at the bearing seats another 2 to 3, and gear meshes want less than about 0.03 mm of misalignment, so deflection may well govern before stress does.</p>"
  },
  {
    id: "machine-elements-q58",
    type: "mc",
    difficulty: 3,
    prompt: "<p>The shaft shown broke at the shoulder, not in the keyway, after about 10<sup>8</sup> cycles of fully reversed bending. The nominal bending stress was well below the material's endurance limit. What is the most likely explanation and fix?</p>",
    figure: figShoulderKeyway,
    choices: [
      "The 0.5 mm fillet gives r/d = 0.02 and K<sub>t</sub> near 2.9, so local stress exceeded the limit",
      "The keyway was cut too shallow, transferring all the torque into the shoulder region",
      "The shaft material was too hard, and hard steels always fail at geometric transitions",
      "The bearing at that end was undersized, so its contact load drove the crack directly"
    ],
    answer: 0,
    explanation: "<p>The clue is the phrase &ldquo;nominal stress well below the endurance limit&rdquo;. Nominal stress is computed on the plain section and knows nothing about geometry. At a step from 30 to 25 mm with a 0.5 mm fillet, the ratios are D/d = 1.2 and r/d = 0.02, which puts the bending stress-concentration factor around 2.9. Multiply a comfortable nominal stress by 2.9 and it stops being comfortable, and fatigue cares about the local peak, not the average.</p><p>The fix is almost free: increase the fillet radius. Going to r = 2.5 mm gives r/d = 0.1 and drops K<sub>t</sub> to roughly 1.6, nearly halving the local stress, at the cost of a slightly larger bearing chamfer or a shouldered spacer. Where the bearing must seat square against a sharp corner, use an undercut relief groove or a tapered shoulder instead. Shot peening the fillet adds compressive residual stress and buys more margin still.</p><p>The keyway is the plausible-looking wrong answer, and that is the point: it carries a similar K<sub>t</sub> but it sits in a region of lower bending moment here, so the shoulder wins. That comparison, concentration factor times local nominal stress rather than concentration factor alone, is how you decide which feature actually governs. Note also that a hard steel is <em>more</em> notch-sensitive, not immune, so higher strength without a better fillet buys much less than the tensile numbers suggest.</p>"
  },
  {
    id: "machine-elements-q59",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 25 mm diameter steel shaft (E = 207 GPa) spans 500 mm between simple supports and carries a 12 kg disc at midspan. Neglecting shaft mass, estimate the first critical speed in rpm.</p>",
    answer: 3400,
    unit: "rpm",
    tolerance: 0.04,
    explanation: "<p>Critical speed is the rotational speed that coincides with the first bending natural frequency, so treat it as a single-degree-of-freedom mass on the shaft's lateral stiffness.</p><p class=\"eq\">I = &pi;d<sup>4</sup>/64 = &pi;(0.025)<sup>4</sup>/64 = 1.917 &times; 10<sup>&minus;8</sup> m<sup>4</sup></p><p class=\"eq\">k = 48EI/L<sup>3</sup> = 48(207 &times; 10<sup>9</sup>)(1.917 &times; 10<sup>&minus;8</sup>)/0.125 = 1.524 &times; 10<sup>6</sup> N/m</p><p class=\"eq\">&omega;<sub>n</sub> = &radic;(k/m) = &radic;(1.524 &times; 10<sup>6</sup>/12) = 356 rad/s</p><p class=\"eq\">N<sub>crit</sub> = 356(60)/(2&pi;) = 3403 rpm &asymp; <strong>3400 rpm</strong></p><p>Two things follow. Run below about 0.75 N<sub>crit</sub> (here 2550 rpm) or above roughly 1.4 N<sub>crit</sub>, passing through the resonance quickly on run-up and run-down. The stiffness scales as d<sup>4</sup>/L<sup>3</sup>, so shortening the span is a far more powerful lever than fattening the shaft: halving L multiplies k by eight and &omega;<sub>n</sub> by 2.8.</p><p>The counter-intuitive part worth volunteering: above the critical speed the rotor runs <em>smoother</em>, because the disc rotates about its own mass centre rather than the geometric shaft axis. That is why high-speed turbomachinery is deliberately supercritical, and it is also why bearing damping during run-up matters more than steady-state balance quality.</p>"
  },
  {
    id: "machine-elements-q60",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The flat-belt drive shown has a 180&deg; wrap and a friction coefficient &mu; = 0.30. The drive must transmit an effective tension T<sub>1</sub> &minus; T<sub>2</sub> = 400 N with the belt on the point of slipping. What radial load does the pulley bearing carry, in N?</p>",
    figure: figBeltWrap,
    answer: 911,
    unit: "N",
    tolerance: 0.04,
    explanation: "<p>At the slip limit the capstan relation fixes the tension ratio:</p><p class=\"eq\">T<sub>1</sub>/T<sub>2</sub> = e<sup>&mu;&beta;</sup> = e<sup>0.30&pi;</sup> = e<sup>0.942</sup> = 2.57</p><p>Combine with the effective tension:</p><p class=\"eq\">T<sub>2</sub>(2.57 &minus; 1) = 400 &rarr; T<sub>2</sub> = 255 N, &nbsp; T<sub>1</sub> = 655 N</p><p>For a 180&deg; wrap both spans leave the pulley in the same direction, so their tensions add at the shaft:</p><p class=\"eq\">F<sub>bearing</sub> = T<sub>1</sub> + T<sub>2</sub> = <strong>911 N</strong></p><p>That is <strong>2.3 times</strong> the useful tension, and unlike the effective tension it is there whether the machine is loaded or not. Sizing the bearing on the 400 N that the drive actually transmits understates P by a factor of 2.3, and cubed, that is a factor of twelve in predicted life.</p><p>The design levers all move the same way. More wrap or a higher friction coefficient (a V-belt's wedge gives an effective &mu; around 3&times; a flat belt's) raises the ratio and drops both tensions for the same output. Less wrap, a small pulley on a short centre distance, or a drive with an idler on the wrong side, forces pretension up steeply. A toothed synchronous belt escapes the relation entirely, which is exactly why it needs so little pretension and is kind to bearings.</p>"
  },
  {
    id: "machine-elements-q61",
    type: "mc",
    difficulty: 2,
    prompt: "<p>You need a 3:1 reduction over a 600 mm centre distance on a dusty outdoor conveyor with a shock-loaded start, and the drive must be cheap and serviceable. Which transmission fits best and why?</p>",
    choices: [
      "A V-belt drive: it spans the distance cheaply, damps shock, and slips instead of breaking",
      "A spur gear train: it is the most efficient option and always the correct engineering choice",
      "A roller chain: it is the only drive able to bridge a centre distance beyond about 300 mm",
      "A synchronous belt: shock loads and dust are irrelevant once the teeth are engaged"
    ],
    answer: 0,
    explanation: "<p>Match the drive to the constraints rather than to a ranking. Long centre distance rules out gears immediately. A 600 mm gap needs either enormous gears or an idler train, both expensive. Shock loading and dust then decide between the two flexible options.</p><p>A <strong>V-belt</strong> is cheap, needs no lubrication, is tolerant of dust and mild misalignment, damps torsional shock, and slips harmlessly under a jam instead of breaking a shaft or a tooth, effectively a built-in torque limiter. The costs are 2 to 5% slip, so it cannot hold exact ratio, a required pretension that loads the bearings, and periodic re-tensioning.</p><p>A <strong>roller chain</strong> is more compact and positive and takes more load per unit width, but it needs lubrication, and lubricated chain in a dusty environment turns into a grinding paste; it also suffers polygonal action at low tooth counts and stretches with wear. A <strong>synchronous belt</strong> is efficient and holds ratio exactly, but the whole point of its teeth is that it cannot slip, so shock goes straight into the machine, and dust and debris in the tooth grooves cause ratcheting.</p><p>The general shape of the trade: gears for efficiency, compactness, and precision at short centres; chain for high load at moderate centres with lubrication available; belts for long centres, cheapness, shock tolerance, and quiet running where exact ratio is not required.</p>"
  },
  {
    id: "machine-elements-q62",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A conveyor bearing calculated at 40,000 h L<sub>10</sub> fails after 3,000 h. Teardown shows dents on the raceways with spalls growing outward from them, and the grease is gritty. What happened?</p>",
    choices: [
      "The dynamic rating C was misread from the catalog, so the whole life calculation was wrong",
      "Contamination entered past a failed seal; L<sub>10</sub> assumes clean lubrication and does not cover it",
      "The equivalent load P was underestimated, since a 13&times; life error needs only a small load error",
      "The bearing exceeded its limiting speed, so the cage failed and released the rolling elements"
    ],
    answer: 1,
    explanation: "<p>The evidence names the mechanism. Dents with spalls radiating from them are the signature of hard particles being rolled over: each particle produces an indentation, the raised lip around it becomes a stress raiser, and surface-initiated fatigue starts there. Gritty grease confirms the ingress path. This is contamination damage, not classical subsurface fatigue, which starts below the surface and shows no dents.</p><p>The important conceptual point is that L<sub>10</sub> = (C/P)<sup>p</sup> assumes adequate, clean lubrication. It has no term for dirt, water, or a thin film. That is why modern practice uses the modified life L<sub>nm</sub> = a<sub>1</sub>a<sub>ISO</sub>L<sub>10</sub>, where a<sub>ISO</sub> folds in a contamination factor and the viscosity ratio &kappa;, and a<sub>ISO</sub> can legitimately be 0.1 or lower for a poorly sealed bearing in a dirty environment, which is precisely the 13&times; discrepancy observed.</p><p>The distractor about underestimating P is worth taking seriously, because it is arithmetically possible: a 13&times; life error needs only a 2.4&times; load error. But it does not explain dents, and it does not explain grit. The fix here is sealing and lubrication practice, better seal type, a flinger or labyrinth, correct grease and re-greasing interval, cleanliness at assembly, not a bigger bearing.</p>"
  },
  {
    id: "machine-elements-q63",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A screw jack has a thread lead angle &lambda; = 4&deg; and a thread friction coefficient &mu; = 0.15. Will it hold the load when the input torque is removed?</p>",
    choices: [
      "Yes: tan &lambda; = 0.0699 is below &mu; = 0.15, so friction alone holds the load with no brake",
      "No: every power screw back-drives once the input torque is removed, so a jack always needs a brake",
      "Yes: single-start threads are self-locking by definition, so the lead angle never enters the check",
      "No: self-locking needs &mu; above 0.20, so at 0.15 the load lowers itself on its own"
    ],
    answer: 0,
    explanation: "<p>The self-locking criterion compares the thread's helix slope with its friction:</p><p class=\"eq\">tan &lambda; &lt; &mu; (approximately, ignoring the thread-flank angle correction)</p><p class=\"eq\">tan 4&deg; = 0.0699 &lt; 0.15 &rarr; <strong>self-locking</strong></p><p>Physically it is the inclined-plane result: the load pushing down the helix generates a driving component F&nbsp;tan&nbsp;&lambda; and a friction resistance &mu;F, and while friction wins the screw cannot turn itself. The margin here is comfortable. Friction is more than twice the driving component, which is why acme-threaded jacks, vices, and leadscrews hold position with no brake at all.</p><p>Two qualifications that make this an interview answer rather than a formula. Self-locking is <strong>static</strong>: under vibration the effective friction collapses and a nominally self-locking screw can walk down, so safety-critical lifts still get a mechanical lock. And self-locking guarantees efficiency below 50%, the two are the same physics viewed twice. That is exactly the trade you make with a ball screw: efficiency around 90%, and it back-drives freely, so it needs a brake.</p><p>For a real V or acme thread, divide &mu; by cos of the half thread angle, which makes self-locking slightly <em>easier</em> to achieve than the square-thread formula suggests.</p>"
  }
];

export default extra;
