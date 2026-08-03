import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
// Figures live here as well as in the base file: this is the most
// diagram-dependent topic in the app, so the extra bank carries its share.

const figCandV = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm20-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="60" y1="20" x2="230" y2="20" stroke="#dc2626" stroke-width="2"/>
  <line x1="60" y1="24" x2="60" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <line x1="94" y1="24" x2="94" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <line x1="128" y1="24" x2="128" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <line x1="162" y1="24" x2="162" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <line x1="196" y1="24" x2="196" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <line x1="230" y1="24" x2="230" y2="40" stroke="#dc2626" stroke-width="1.6" marker-end="url(#sm20-load)"/>
  <text x="145" y="14" text-anchor="middle" fill="#dc2626" font-weight="600">w = 3 kN/m</text>
  <rect x="60" y="44" width="340" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="60,55 50,70 70,70" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="55" r="2.5" fill="#334155"/>
  <line x1="44" y1="70" x2="76" y2="70" stroke="#334155" stroke-width="1.5"/>
  <text x="36" y="66" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="400,55 390,68 410,68" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="72" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="406" cy="72" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="384" y1="76" x2="416" y2="76" stroke="#334155" stroke-width="1.5"/>
  <text x="426" y="66" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="60" y1="90" x2="230" y2="90" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="90" x2="400" y2="90" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="84" x2="60" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="84" x2="230" y2="96" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="84" x2="400" y2="96" stroke="#64748b" stroke-width="1"/>
  <text x="145" y="86" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <text x="315" y="86" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <text x="30" y="116" font-weight="600" fill="#334155">A</text>
  <line x1="30" y1="160" x2="196" y2="160" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 140 L 128 140 L 128 167 L 190 167" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="250" y="116" font-weight="600" fill="#334155">B</text>
  <line x1="250" y1="160" x2="416" y2="160" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 147 L 410 173" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="30" y="216" font-weight="600" fill="#334155">C</text>
  <line x1="30" y1="260" x2="196" y2="260" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 240 L 128 267 L 190 267" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="250" y="216" font-weight="600" fill="#334155">D</text>
  <line x1="250" y1="260" x2="416" y2="260" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 240 L 348 267 L 410 260" fill="none" stroke="#1d4ed8" stroke-width="2.2"/>
  <text x="228" y="292" text-anchor="middle" fill="#64748b" font-size="11">Four candidate shear diagrams for the beam above</text>
</svg>`;

const figVtoM = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm21-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="16" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Given: shear diagram of a 6 m simply supported beam</text>
  <line x1="60" y1="110" x2="60" y2="30" stroke="#64748b" stroke-width="1.3" marker-end="url(#sm21-ax)"/>
  <line x1="48" y1="70" x2="424" y2="70" stroke="#64748b" stroke-width="1.3" marker-end="url(#sm21-ax)"/>
  <text x="70" y="34" fill="#334155" font-weight="600" font-size="12">V (kN)</text>
  <text x="428" y="88" text-anchor="end" fill="#334155" font-weight="600" font-size="12">x (m)</text>
  <path d="M 60 48 L 173 48 L 173 70 L 287 70 L 287 92 L 400 92 L 400 70" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="116" y="42" text-anchor="middle" fill="#1d4ed8" font-weight="600">+9</text>
  <text x="230" y="64" text-anchor="middle" fill="#1d4ed8" font-weight="600">0</text>
  <text x="344" y="106" text-anchor="middle" fill="#1d4ed8" font-weight="600">&#8722;9</text>
  <line x1="173" y1="66" x2="173" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="173" y="112" text-anchor="middle" fill="#64748b" font-size="12">2</text>
  <line x1="287" y1="66" x2="287" y2="74" stroke="#64748b" stroke-width="1"/>
  <text x="287" y="112" text-anchor="middle" fill="#64748b" font-size="12">4</text>
  <text x="400" y="112" text-anchor="middle" fill="#64748b" font-size="12">6</text>
  <text x="30" y="140" font-weight="600" fill="#334155">A</text>
  <line x1="30" y1="185" x2="196" y2="185" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 185 L 113 152 L 190 185" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="250" y="140" font-weight="600" fill="#334155">B</text>
  <line x1="250" y1="185" x2="416" y2="185" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 185 L 305 152 L 361 152 L 410 185" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="30" y="216" font-weight="600" fill="#334155">C</text>
  <line x1="30" y1="260" x2="196" y2="260" stroke="#64748b" stroke-width="1"/>
  <path d="M 30 260 Q 110 200 190 260" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <text x="250" y="216" font-weight="600" fill="#334155">D</text>
  <line x1="250" y1="260" x2="416" y2="260" stroke="#64748b" stroke-width="1"/>
  <path d="M 250 260 L 305 290 L 361 290 L 410 260" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <text x="228" y="296" text-anchor="middle" fill="#64748b" font-size="11">Four candidate moment diagrams (sagging plotted up)</text>
</svg>`;

const figErrM = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm22-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="sm22-ax" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <rect x="60" y="46" width="340" height="11" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="173" y1="12" x2="173" y2="42" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm22-load)"/>
  <text x="186" y="24" fill="#dc2626" font-weight="600">12 kN</text>
  <polygon points="60,57 50,72 70,72" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="57" r="2.5" fill="#334155"/>
  <line x1="44" y1="72" x2="76" y2="72" stroke="#334155" stroke-width="1.5"/>
  <text x="36" y="68" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="400,57 390,70 410,70" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="74" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="406" cy="74" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="384" y1="78" x2="416" y2="78" stroke="#334155" stroke-width="1.5"/>
  <text x="426" y="68" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="60" y1="94" x2="173" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="173" y1="94" x2="400" y2="94" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="88" x2="60" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="173" y1="88" x2="173" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="88" x2="400" y2="100" stroke="#64748b" stroke-width="1"/>
  <text x="116" y="90" text-anchor="middle" fill="#64748b" font-size="12">2 m</text>
  <text x="286" y="90" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <line x1="60" y1="215" x2="60" y2="128" stroke="#64748b" stroke-width="1.3" marker-end="url(#sm22-ax)"/>
  <line x1="48" y1="205" x2="424" y2="205" stroke="#64748b" stroke-width="1.3" marker-end="url(#sm22-ax)"/>
  <text x="70" y="132" fill="#334155" font-weight="600" font-size="12">M (kN&#183;m)</text>
  <text x="428" y="223" text-anchor="end" fill="#334155" font-weight="600" font-size="12">x (m)</text>
  <path d="M 60 205 L 173 155 L 173 180 L 400 205" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="150" y="149" text-anchor="middle" fill="#1d4ed8" font-weight="600">16</text>
  <text x="196" y="180" fill="#1d4ed8" font-weight="600">8</text>
  <line x1="186" y1="155" x2="186" y2="180" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="228" y="248" text-anchor="middle" fill="#64748b" font-size="11">Candidate moment diagram submitted for checking</text>
  <text x="228" y="266" text-anchor="middle" fill="#64748b" font-size="11">(one feature of it is impossible)</text>
</svg>`;

const figTwoSpan = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm23-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="50" y1="50" x2="410" y2="50" stroke="#dc2626" stroke-width="2"/>
  <line x1="50" y1="54" x2="50" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="95" y1="54" x2="95" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="140" y1="54" x2="140" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="185" y1="54" x2="185" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="230" y1="54" x2="230" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="275" y1="54" x2="275" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="320" y1="54" x2="320" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="365" y1="54" x2="365" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <line x1="410" y1="54" x2="410" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm23-load)"/>
  <text x="230" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">w = 10 kN/m</text>
  <rect x="50" y="100" width="360" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="50,112 40,128 60,128" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="50" cy="112" r="2.5" fill="#334155"/>
  <line x1="34" y1="128" x2="66" y2="128" stroke="#334155" stroke-width="1.5"/>
  <text x="50" y="146" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="230,112 220,126 240,126" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="224" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="236" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="214" y1="134" x2="246" y2="134" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="152" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <polygon points="410,112 400,126 420,126" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="404" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="416" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="394" y1="134" x2="426" y2="134" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="152" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <line x1="50" y1="188" x2="230" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="188" x2="410" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="50" y1="182" x2="50" y2="194" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="182" x2="230" y2="194" stroke="#64748b" stroke-width="1"/>
  <line x1="410" y1="182" x2="410" y2="194" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="184" text-anchor="middle" fill="#64748b" font-size="12">6 m</text>
  <text x="320" y="184" text-anchor="middle" fill="#64748b" font-size="12">6 m</text>
  <text x="230" y="212" text-anchor="middle" fill="#64748b" font-size="11">Continuous over two equal spans</text>
</svg>`;

const figProp = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm24-load" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <line x1="70" y1="50" x2="410" y2="50" stroke="#dc2626" stroke-width="2"/>
  <line x1="70" y1="54" x2="70" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="127" y1="54" x2="127" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="184" y1="54" x2="184" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="240" y1="54" x2="240" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="297" y1="54" x2="297" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="354" y1="54" x2="354" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <line x1="410" y1="54" x2="410" y2="94" stroke="#dc2626" stroke-width="1.7" marker-end="url(#sm24-load)"/>
  <text x="240" y="40" text-anchor="middle" fill="#dc2626" font-weight="600">w = 8 kN/m</text>
  <rect x="70" y="100" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="82" x2="70" y2="136" stroke="#334155" stroke-width="2.5"/>
  <line x1="58" y1="96" x2="70" y2="84" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="112" x2="70" y2="100" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="128" x2="70" y2="116" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="142" x2="70" y2="130" stroke="#64748b" stroke-width="1"/>
  <text x="70" y="156" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="410,112 400,126 420,126" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="404" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="416" cy="130" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="394" y1="134" x2="426" y2="134" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="156" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="70" y1="188" x2="410" y2="188" stroke="#64748b" stroke-width="1"/>
  <line x1="70" y1="182" x2="70" y2="194" stroke="#64748b" stroke-width="1"/>
  <line x1="410" y1="182" x2="410" y2="194" stroke="#64748b" stroke-width="1"/>
  <text x="240" y="184" text-anchor="middle" fill="#64748b" font-size="12">L = 6 m</text>
  <text x="240" y="212" text-anchor="middle" fill="#64748b" font-size="11">Built in at A, propped on a roller at B</text>
</svg>`;

const figGauge = `<svg viewBox="0 0 460 235" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm25-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="264" y1="22" x2="264" y2="56" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#sm25-load)"/>
  <text x="278" y="30" fill="#dc2626" font-weight="600">P at x = ?</text>
  <rect x="60" y="60" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="60,72 50,88 70,88" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="72" r="2.5" fill="#334155"/>
  <line x1="44" y1="88" x2="76" y2="88" stroke="#334155" stroke-width="1.5"/>
  <text x="36" y="84" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="400,72 390,86 410,86" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="90" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="406" cy="90" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="384" y1="94" x2="416" y2="94" stroke="#334155" stroke-width="1.5"/>
  <text x="426" y="84" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <rect x="138" y="72" width="14" height="7" fill="#1d4ed8"/>
  <rect x="223" y="72" width="14" height="7" fill="#1d4ed8"/>
  <rect x="308" y="72" width="14" height="7" fill="#1d4ed8"/>
  <text x="145" y="110" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">G1</text>
  <text x="230" y="110" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">G2</text>
  <text x="315" y="110" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">G3</text>
  <text x="145" y="128" text-anchor="middle" fill="#334155" font-size="12">300 &#181;&#949;</text>
  <text x="230" y="128" text-anchor="middle" fill="#334155" font-size="12">600 &#181;&#949;</text>
  <text x="315" y="128" text-anchor="middle" fill="#334155" font-size="12">450 &#181;&#949;</text>
  <line x1="60" y1="166" x2="145" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="145" y1="166" x2="230" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="166" x2="315" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="315" y1="166" x2="400" y2="166" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="160" x2="60" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="145" y1="160" x2="145" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="160" x2="230" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="315" y1="160" x2="315" y2="172" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="160" x2="400" y2="172" stroke="#64748b" stroke-width="1"/>
  <text x="102" y="162" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <text x="187" y="162" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <text x="272" y="162" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <text x="357" y="162" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <text x="230" y="200" text-anchor="middle" fill="#64748b" font-size="11">Bottom-fibre strain gauges on a 6 m simply supported beam</text>
  <text x="230" y="218" text-anchor="middle" fill="#64748b" font-size="11">A single unknown load sits somewhere on the span</text>
</svg>`;

const figBogie = `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm26-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <line x1="215" y1="24" x2="215" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm26-load)"/>
  <line x1="300" y1="24" x2="300" y2="64" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm26-load)"/>
  <text x="203" y="18" text-anchor="end" fill="#dc2626" font-weight="600">40 kN</text>
  <text x="312" y="18" fill="#dc2626" font-weight="600">40 kN</text>
  <line x1="215" y1="40" x2="300" y2="40" stroke="#64748b" stroke-width="1"/>
  <text x="257" y="36" text-anchor="middle" fill="#64748b" font-size="12">1.5 m</text>
  <rect x="60" y="68" width="340" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <polygon points="60,80 50,96 70,96" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="80" r="2.5" fill="#334155"/>
  <line x1="44" y1="96" x2="76" y2="96" stroke="#334155" stroke-width="1.5"/>
  <text x="36" y="92" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="400,80 390,94 410,94" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="394" cy="98" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="406" cy="98" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="384" y1="102" x2="416" y2="102" stroke="#334155" stroke-width="1.5"/>
  <text x="426" y="92" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="230" y1="112" x2="230" y2="132" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="230" y="146" text-anchor="middle" fill="#64748b" font-size="11">midspan</text>
  <line x1="60" y1="176" x2="400" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="170" x2="60" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="400" y1="170" x2="400" y2="182" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="172" text-anchor="middle" fill="#64748b" font-size="12">6 m</text>
  <text x="230" y="204" text-anchor="middle" fill="#64748b" font-size="11">The two-axle bogie may be parked anywhere on the span</text>
</svg>`;

const figOverhang = `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="sm27-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <rect x="60" y="70" width="320" height="12" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="380" y1="26" x2="380" y2="66" stroke="#dc2626" stroke-width="2.5" marker-end="url(#sm27-load)"/>
  <text x="380" y="18" text-anchor="middle" fill="#dc2626" font-weight="600">10 kN</text>
  <polygon points="60,82 50,98 70,98" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="60" cy="82" r="2.5" fill="#334155"/>
  <line x1="44" y1="98" x2="76" y2="98" stroke="#334155" stroke-width="1.5"/>
  <line x1="48" y1="108" x2="58" y2="98" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="108" x2="70" y2="98" stroke="#64748b" stroke-width="1"/>
  <text x="60" y="126" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <polygon points="316,82 306,96 326,96" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="310" cy="100" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="322" cy="100" r="3.6" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="300" y1="104" x2="332" y2="104" stroke="#334155" stroke-width="1.5"/>
  <text x="316" y="126" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <line x1="60" y1="176" x2="316" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="316" y1="176" x2="380" y2="176" stroke="#64748b" stroke-width="1"/>
  <line x1="60" y1="170" x2="60" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="316" y1="170" x2="316" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="170" x2="380" y2="182" stroke="#64748b" stroke-width="1"/>
  <text x="188" y="172" text-anchor="middle" fill="#64748b" font-size="12">4 m</text>
  <text x="348" y="172" text-anchor="middle" fill="#64748b" font-size="12">1 m</text>
  <text x="230" y="206" text-anchor="middle" fill="#64748b" font-size="11">Beam on a pin at A and a roller at B, overhanging past B</text>
</svg>`;

const extra: Question[] = [
  {
    id: "shear-moment-q25",
    type: "mc",
    difficulty: 2,
    prompt: "<p>The 8 m simply supported beam at the top of the figure carries 3 kN/m over its left half only. Which of the four candidate shear diagrams below it is correct?</p>",
    figure: figCandV,
    choices: [
      "A &mdash; flat at +9 kN, then a step down to &minus;3 kN at midspan",
      "B &mdash; one straight ramp from +6 kN to &minus;6 kN across the span",
      "C &mdash; a ramp from +9 to &minus;3 kN, then flat at &minus;3 kN",
      "D &mdash; a ramp from +9 to &minus;3 kN, then rising back to zero",
    ],
    answer: 2,
    explanation: `<p>Reactions first. The partial load totals 3(4) = 12 kN acting 2 m from A, so &Sigma;M<sub>A</sub> = 0 gives B<sub>y</sub>(8) = 12(2) &rarr; B<sub>y</sub> = 3 kN and A<sub>y</sub> = 9 kN.</p>
<p class="eq">V(0&#8314;) = +9 kN; dV/dx = &minus;w = &minus;3 kN/m over 0 to 4 m</p>
<p class="eq">V(4) = 9 &minus; 3(4) = &minus;3 kN, then flat to B where +3 kN closes it</p>
<p>The trace ramps, crosses zero at x = 3 m, and runs flat over the unloaded half. That is diagram C. A replaces the distributed load by its resultant, legal for reactions and never for the diagrams. B assumes the load covers the whole span, which would make the reactions 6 kN each. D has V rising with no upward force acting, violating dV/dx = &minus;w.</p>
<p>You can screen all four without algebra: V must start at +A<sub>y</sub>, finish at &minus;B<sub>y</sub>, slope only where load sits, and step only at concentrated forces.</p>`,
  },
  {
    id: "shear-moment-q26",
    type: "mc",
    difficulty: 2,
    prompt: "<p>The shear diagram at the top of the figure was recorded for a 6 m simply supported beam. Which of the four candidate moment diagrams goes with it?</p>",
    figure: figVtoM,
    choices: [
      "A &mdash; triangle rising to 18 kN&middot;m at midspan, then falling",
      "B &mdash; trapezoid: 18 kN&middot;m held flat between 2 m and 4 m",
      "C &mdash; a smooth parabola peaking at 18 kN&middot;m at midspan",
      "D &mdash; trapezoid below the axis, &minus;18 kN&middot;m between loads",
    ],
    answer: 1,
    explanation: `<p>Integrate the shear segment by segment, starting from M = 0 at the simple support:</p>
<p class="eq">0 to 2 m: &Delta;M = (+9)(2) = +18 kN&middot;m &rarr; M(2) = 18 kN&middot;m</p>
<p class="eq">2 to 4 m: V = 0 so dM/dx = 0 &rarr; M stays at 18 kN&middot;m</p>
<p class="eq">4 to 6 m: &Delta;M = (&minus;9)(2) = &minus;18 &rarr; M(6) = 0 &#10003;</p>
<p>A trapezoid with a flat top, the signature of third-point loading. The plateau is the useful part: constant M with zero V is pure bending, which is why four-point bend rigs are built this way.</p>
<p>Each distractor breaks a rule. A ignores the zero-shear stretch and forces a single apex. C needs V to slope, which means a distributed load, and the shear plot is flat. D reverses the sign, but downward loads on a simply supported span produce sagging, and M cannot be negative anywhere between two simple supports with no overhang.</p>`,
  },
  {
    id: "shear-moment-q27",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A junior engineer submits the moment diagram in the figure for a 6 m simply supported beam carrying a single 12 kN load 2 m from A. One feature of it is impossible. Which?</p>",
    figure: figErrM,
    choices: [
      "M cannot jump at a point force &mdash; only a couple does that",
      "M should peak at midspan, not 2 m from A, for any point load",
      "M should be parabolic between the supports because V is constant",
      "M should be negative throughout, since the load points downward",
    ],
    answer: 0,
    explanation: `<p>Do the real diagram first. A<sub>y</sub> = 12(4)/6 = 8 kN and B<sub>y</sub> = 4 kN, so V = +8 kN up to the load and &minus;4 kN after it. Integrating:</p>
<p class="eq">M(2) = 8(2) = 16 kN&middot;m, then &Delta;M = (&minus;4)(4) = &minus;16 &rarr; M(6) = 0 &#10003;</p>
<p>The peak value and its location are both right. What is impossible is the vertical drop at x = 2 m. M is the running integral of a bounded shear, and a finite force acting over zero length contributes zero area, so the moment diagram is <strong>continuous</strong> at a point load. It only kinks, changing slope from +8 to &minus;4. Only an applied couple injects moment at a point and makes M step.</p>
<p>Closure catches it too. After the drawn jump to 8 kN&middot;m the trace falls to zero over 4 m, a slope of &minus;2 kN, but the shear diagram there reads &minus;4 kN. The two diagrams contradict each other.</p>`,
  },
  {
    id: "shear-moment-q28",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The beam in the figure runs continuously over two equal 6 m spans and carries 10 kN/m across both. What is the magnitude of the hogging moment over the centre support B, in kN&middot;m?</p>",
    figure: figTwoSpan,
    answer: 45,
    unit: "kN·m",
    explanation: `<p>The two-equal-span continuous beam under a full UDL is a standard case worth carrying in your head:</p>
<p class="eq">R<sub>A</sub> = R<sub>C</sub> = 0.375wL = 0.375(10)(6) = 22.5 kN, R<sub>B</sub> = 1.25wL = 75 kN</p>
<p>Total: 22.5 + 75 + 22.5 = 120 kN = 10(12). &#10003; Cut at B and use the left span:</p>
<p class="eq">M<sub>B</sub> = 22.5(6) &minus; 10(6)&sup2;/2 = 135 &minus; 180 = &minus;45 kN&middot;m</p>
<p class="eq">|M<sub>B</sub>| = wL&sup2;/8 = 10(36)/8 = <strong>45 kN&middot;m</strong>, hogging</p>
<p>Two <em>separate</em> 6 m simple spans would give exactly the same peak, wL&sup2;/8 = 45 kN&middot;m, only sagging at midspan. Continuity does not shrink the peak moment here. It relocates it to the support and cuts the deflection to 0.42 of the simple-span value. The tension face over B is the <strong>top</strong>, so that is where the reinforcement, the cover plate or the good weld belongs.</p>`,
  },
  {
    id: "shear-moment-q29",
    type: "mc",
    difficulty: 2,
    prompt: "<p>For that same two-span continuous beam under 10 kN/m, which moment governs the design of the section, and what are the two peak values?</p>",
    figure: figTwoSpan,
    choices: [
      "Sagging governs at 45 kN&middot;m; hogging over B reaches 25.3 kN&middot;m",
      "They are equal at 45 kN&middot;m, one sagging and one hogging",
      "Hogging governs at 45 kN&middot;m; the sagging peak is 25.3 kN&middot;m",
      "Hogging governs at 90 kN&middot;m, twice the simple-span value",
    ],
    answer: 2,
    explanation: `<p>Two numbers from the standard case, both worth memorising:</p>
<p class="eq">|M| over the centre support = wL&sup2;/8 = 45 kN&middot;m (hogging)</p>
<p class="eq">M in the span = 9wL&sup2;/128 = 9(10)(36)/128 = 25.3 kN&middot;m (sagging, at 0.375L)</p>
<p>Hogging wins by 45/25.3 = 1.78, so the critical section is over B rather than out in the spans. Trace it yourself: V starts at +22.5 kN, crosses zero at x = 2.25 m to give the sagging peak, and reaches &minus;37.5 kN just left of B, where the moment magnitude is largest.</p>
<p>90 kN&middot;m adds both spans&rsquo; loads onto one support. The reversed answer assumes continuity always relieves the support and loads up midspan, which is the opposite of what continuity does. A continuous beam needs its deepest section, or its cover plates, over the interior support, and that is also where the top fibre is in tension.</p>`,
  },
  {
    id: "shear-moment-q30",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>The 6 m beam in the figure is built in at A and propped on a roller at B, carrying 8 kN/m over its whole length. What is the vertical reaction at the prop B, in kN?</p>",
    figure: figProp,
    answer: 18,
    unit: "kN",
    explanation: `<p class="eq">B<sub>y</sub> = 3wL/8 = 3(8)(6)/8 = <strong>18 kN</strong></p>
<p>Three unknowns, A<sub>y</sub>, M<sub>A</sub> and B<sub>y</sub>, against two useful equations, so equilibrium alone will not close this. The standard result comes from making the tip deflection zero: &delta;<sub>UDL</sub> = wL&#8308;/8EI downward is cancelled by &delta;<sub>prop</sub> = B<sub>y</sub>L&sup3;/3EI upward. Then A<sub>y</sub> = 48 &minus; 18 = 30 kN and M<sub>A</sub> = &minus;wL&sup2;/8 = &minus;36 kN&middot;m.</p>
<p>Bracket the answer against two limits you already know. An unpropped cantilever puts all 48 kN at the wall; a simply supported beam splits it 24/24. The prop takes 18 kN, less than half, because the stiff clamped end hogs the load back toward itself. Anything above 24 kN is wrong on that argument alone.</p>
<p>Memorise the trio 3wL/8, 5wL/8, wL&sup2;/8. The propped cantilever is the most common indeterminate beam in interviews.</p>`,
  },
  {
    id: "shear-moment-q31",
    type: "mc",
    difficulty: 3,
    prompt: "<p>For that propped cantilever &mdash; 6 m, built in at A, roller at B, 8 kN/m &mdash; where is the largest-magnitude bending moment and what is it?</p>",
    figure: figProp,
    choices: [
      "At midspan, sagging, 36 kN&middot;m &mdash; the usual wL&sup2;/8 result",
      "At the wall, hogging, 36 kN&middot;m; sagging peak is 20.3",
      "At 3.75 m, sagging, 20.3 kN&middot;m; the wall carries only shear",
      "At the roller, hogging, 18 kN&middot;m, equal to the reaction there",
    ],
    answer: 1,
    explanation: `<p>With B<sub>y</sub> = 3wL/8 = 18 kN and A<sub>y</sub> = 30 kN, walk the diagram from the wall:</p>
<p class="eq">M<sub>A</sub> = &minus;wL&sup2;/8 = &minus;8(36)/8 = &minus;36 kN&middot;m (hogging)</p>
<p class="eq">V(x) = 30 &minus; 8x = 0 &rarr; x = 3.75 m = 5L/8</p>
<p class="eq">M(3.75) = &minus;36 + 30(3.75) &minus; 8(3.75)&sup2;/2 = &minus;36 + 112.5 &minus; 56.25 = +20.3 kN&middot;m</p>
<p>The wall governs at 36 kN&middot;m hogging, and the interior sagging peak of 20.3 kN&middot;m, which is 9wL&sup2;/128, is only 56% of it. The moment crosses zero at x = L/4 = 1.5 m, the contraflexure point.</p>
<p>The first option is worth dwelling on. wL&sup2;/8 = 36 kN&middot;m is numerically the same as the simply supported midspan value, so reaching for the familiar formula lands the right number in the wrong place and on the wrong face. Here the tension fibre at the critical section is on <em>top</em>, at the wall.</p>`,
  },
  {
    id: "shear-moment-q32",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>Three bottom-fibre strain gauges on a 6 m simply supported beam, at 1.5 m, 3.0 m and 4.5 m from A, read 300, 600 and 450 &micro;&epsilon; under a single unknown point load. How far from A is the load, in m?</p>",
    figure: figGauge,
    answer: 3.6,
    unit: "m",
    tolerance: 0.02,
    explanation: `<p>Bottom-fibre strain is proportional to the local moment, with &epsilon; = Mc/EI and c, E, I constant along the beam, so the three readings are three points on the moment diagram. For a single point load that diagram is two straight lines meeting under the load.</p>
<p><strong>Left line.</strong> G1 and G2 read 300 and 600 at 1.5 and 3.0 m, perfectly proportional to x, so both lie on the rising line M = 200x in strain units and the load is beyond 3.0 m.</p>
<p><strong>Right line.</strong> Beyond the load M falls linearly to zero at B, x = 6, so through G3: M = 450(6 &minus; x)/(6 &minus; 4.5) = 300(6 &minus; x).</p>
<p class="eq">200a = 300(6 &minus; a) &rarr; 500a = 1800 &rarr; a = <strong>3.60 m</strong></p>
<p>Peak strain under the load is 200(3.6) = 720 &micro;&epsilon;, about 20% above the largest gauge reading. Gauges rarely sit on the peak, so extrapolate along the straight lines rather than reporting the biggest number you measured. Getting the load <em>magnitude</em> needs one more piece of data, E and the section modulus, through &sigma; = E&epsilon; and M = &sigma;S.</p>`,
  },
  {
    id: "shear-moment-q33",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A two-axle bogie, 40 kN per axle with axles 1.5 m apart, crosses a 6 m simply supported span. Where do you park it to produce the largest bending moment anywhere in the beam?</p>",
    figure: figBogie,
    choices: [
      "Straddle midspan, near axle 0.375 m short: M = 91.9 kN&middot;m",
      "Put one axle exactly at midspan, which gives M = 90.0 kN&middot;m",
      "Centre the two axles symmetrically on midspan: M = 90.0 kN&middot;m",
      "Push the leading axle onto the far support: M = 45.0 kN&middot;m",
    ],
    answer: 0,
    explanation: `<p>The influence-line rule: the absolute maximum moment under a wheel group occurs when <strong>midspan bisects the distance between that wheel and the group&rsquo;s resultant</strong>. The 80 kN resultant sits midway between the axles, so the offset is 1.5/4 = 0.375 m each way.</p>
<p class="eq">Near axle at 2.625 m, far axle at 4.125 m, resultant at 3.375 m</p>
<p class="eq">R<sub>A</sub> = 80(6 &minus; 3.375)/6 = 35.0 kN</p>
<p class="eq">M = 35.0(2.625) = <strong>91.9 kN&middot;m</strong> under the near axle</p>
<p>Both intuitive placements land 2% low. One axle at midspan gives R<sub>A</sub> = 30 kN and M = 90.0 kN&middot;m; centring the pair gives R<sub>A</sub> = 40 kN and the same 90.0 kN&middot;m.</p>
<p>Two percent rarely changes a section size, so either placement is close enough in a design review. Knowing <em>why</em> the true worst case is neither of them, and that the peak sits under a wheel rather than at midspan, is what is being tested. The gap widens fast as axle spacing grows relative to the span.</p>`,
  },
  {
    id: "shear-moment-q34",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>The beam in the figure sits on a pin at A and a roller at B, 4 m apart, and overhangs 1 m past B with a 10 kN load hung on the free end. What is the vertical reaction at A, in kN, taking upward as positive?</p>",
    figure: figOverhang,
    answer: -2.5,
    unit: "kN",
    explanation: `<p>Moments about A, counterclockwise positive, with the load 5 m out:</p>
<p class="eq">B<sub>y</sub>(4) &minus; 10(5) = 0 &rarr; B<sub>y</sub> = 12.5 kN</p>
<p class="eq">&Sigma;F<sub>y</sub> = 0: A<sub>y</sub> = 10 &minus; 12.5 = <strong>&minus;2.5 kN</strong></p>
<p>B carries more than the entire applied load, and A has to pull <em>down</em> by 2.5 kN to stop the beam pivoting about B. The overhang is a lever: 10 kN at 1 m past B needs 10 kN&middot;m of restoring moment, and A is 4 m away, so 2.5 kN of hold-down does it.</p>
<p>The diagram confirms it. V = &minus;2.5 kN from A to B, jumps +12.5 to +10 kN, and the 10 kN load closes it to zero at the tip. &#10003; M runs from 0 down to &minus;10 kN&middot;m at B, then back to zero at the free end, hogging over the whole beam with no sagging anywhere.</p>
<p>A bearing pad at A does nothing here. You need a bolted-down shoe or a tie. Skipping this check is how balconies, canopies and conveyor tail sections lift off their supports.</p>`,
  },
  {
    id: "shear-moment-q35",
    type: "mc",
    difficulty: 1,
    prompt: "<p>Your reaction calculation for that overhanging beam returns A<sub>y</sub> = &minus;2.5 kN with upward taken as positive. What does the minus sign actually tell you to do?</p>",
    figure: figOverhang,
    choices: [
      "The beam is in equilibrium only if the 10 kN load is reduced",
      "The moment diagram must be redrawn with the opposite sign convention",
      "Support B is overloaded, and A carries none of the applied load",
      "A must hold the beam down &mdash; that support needs a tie-down, not just a bearing pad",
    ],
    answer: 3,
    explanation: `<p>A negative reaction is not an error message. It says the support has to act opposite to the direction you assumed, here downward. The overhang load tries to rotate the beam about B and lift the far end off its seat, and A resists that uplift with 2.5 kN of hold-down.</p>
<p>That is a hardware decision. A roller, a bearing pad or a beam resting in a pocket can push but cannot pull, so the model you solved would not describe the structure you built. Fix it with an anchor bolt, a tie rod, a clamped shoe, or enough dead weight on the back span to keep the net reaction in compression.</p>
<p>The other options misread the sign. Equilibrium is already satisfied, which is where the &minus;2.5 kN came from. Changing the sign convention changes labels, not physics. And A is very much carrying load; it is carrying it in tension.</p>`,
  },
  {
    id: "shear-moment-q36",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 6 m simply supported beam carries a drift load that grows linearly from zero at A to 6 kN/m at B. What is the maximum bending moment, in kN&middot;m?</p>",
    answer: 13.9,
    unit: "kN·m",
    tolerance: 0.025,
    explanation: `<p>Reactions from the resultant: the triangle totals &frac12;(6)(6) = 18 kN through its centroid, two-thirds of the way along at x = 4 m.</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) = 18(4) &rarr; B<sub>y</sub> = 12 kN, A<sub>y</sub> = 6 kN</p>
<p>Now work with the real distribution rather than the resultant. The intensity is w(x) = x kN/m, so the load carried between A and the cut is the area &frac12;x&sup2;:</p>
<p class="eq">V(x) = 6 &minus; x&sup2;/2 = 0 &rarr; x = &radic;12 = 3.46 m</p>
<p class="eq">M(x) = 6x &minus; x&sup3;/6 &rarr; M(3.46) = 20.78 &minus; 6.93 = <strong>13.9 kN&middot;m</strong></p>
<p>The peak is at 3.46 m, not midspan; it always drifts toward the heavy end. And the 18 kN resultant may not be substituted into the moment calculation, because replacing a distributed load by its resultant is legal for reactions only.</p>
<p>The same total load spread uniformly at 3 kN/m would give wL&sup2;/8 = 13.5 kN&middot;m, so 13.9 kN&middot;m is right in magnitude and slightly worse, as concentrating load toward one end should be.</p>`,
  },
  {
    id: "shear-moment-q37",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 5 m simply supported beam carries 2 kN/m over its full length plus an 8 kN point load 2 m from A. What is the shear force just to the <em>right</em> of the point load, in kN?</p>",
    answer: -2.2,
    unit: "kN",
    tolerance: 0.025,
    explanation: `<p>Reactions first. The UDL totals 10 kN at 2.5 m, the point load is 8 kN at 2 m:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(5) = 8(2) + 10(2.5) = 41 &rarr; B<sub>y</sub> = 8.2 kN, A<sub>y</sub> = 9.8 kN</p>
<p>Walk to the cut, subtracting everything you pass:</p>
<p class="eq">V(2&#8315;) = 9.8 &minus; 2(2) = +5.8 kN</p>
<p class="eq">V(2&#8314;) = 5.8 &minus; 8 = <strong>&minus;2.2 kN</strong></p>
<p>The 8 kN load appears as an 8 kN step straight down, exactly as &Delta;V = &minus;P demands, and the shear changes sign through that step, so the moment peaks right at the load even though V is never zero. When a point load is big enough to flip the sign of V by itself, do not bother solving V(x) = 0.</p>
<p>+5.8 kN takes the cut on the wrong side of the load; &minus;4.2 kN forgets the UDL already carried over the first 2 m.</p>`,
  },
  {
    id: "shear-moment-q38",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 4 m simply supported shaft carries no vertical load at all, only an 8 kN&middot;m clockwise couple applied at midspan by a belt drive. What is the reaction at the right support B, in kN, upward positive?</p>",
    answer: 2,
    unit: "kN",
    explanation: `<p>A couple has zero resultant force, so vertical equilibrium gives A<sub>y</sub> + B<sub>y</sub> = 0 and the two reactions must be equal and opposite. They form a couple of their own, which has to balance the applied one. Counterclockwise moments about A as positive:</p>
<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(4) &minus; 8 = 0 &rarr; B<sub>y</sub> = <strong>+2 kN</strong>, so A<sub>y</sub> = &minus;2 kN</p>
<p>The couple&rsquo;s position along the span never entered the calculation. A couple is a free vector, so sliding the belt drive along the shaft changes the moment <em>diagram</em> and not the reactions.</p>
<p>V = &minus;2 kN constant across the whole span, with no step at the couple. M falls linearly to &minus;4 kN&middot;m just left of midspan, jumps the full 8 kN&middot;m to +4 kN&middot;m, then falls back to zero at B. Even a pure torque transfer into a shaft produces real bearing loads, 2 kN up at one end and 2 kN down at the other. Assuming no vertical load means no reaction is how the retaining hardware gets undersized.</p>`,
  },
  {
    id: "shear-moment-q39",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 2 m cantilevered sign bracket carries a uniform 5 kN/m along its length from the sign panel it supports. What is the magnitude of the bending moment at the wall, in kN&middot;m?</p>",
    answer: 10,
    unit: "kN·m",
    explanation: `<p class="eq">|M|<sub>wall</sub> = (wL)(L/2) = wL&sup2;/2 = 5(2&sup2;)/2 = <strong>10 kN&middot;m</strong></p>
<p>For the wall reaction the load can be replaced by its resultant, 10 kN at 1 m out. The diagram is a different matter: V ramps from 10 kN to zero and M is a <em>parabola</em>, flattening at the free end because V = 0 there. The same 10 kN at the tip would give 20 kN&middot;m, since distributing halves the average lever arm.</p>`,
  },
  {
    id: "shear-moment-q40",
    type: "mc",
    difficulty: 1,
    prompt: "<p>You are handed a beam with an ideal internal hinge at H and asked to sketch its moment diagram. What must the diagram do at H?</p>",
    choices: [
      "Jump by the shear force being carried through the hinge",
      "Reach the largest positive moment anywhere in the beam",
      "Pass through zero: a hinge transmits no bending couple",
      "Be undefined, because hinges cannot appear on a diagram",
    ],
    answer: 2,
    explanation: `<p>An ideal hinge is free to rotate, so it cannot transmit a bending couple: M = 0 there by construction. It does still transmit shear and axial force, which is what separates it from a free end.</p>
<p>That single condition is the practical payoff. A beam with more reactions than equilibrium equations becomes solvable once you add M<sub>H</sub> = 0 as an extra equation, or equivalently split the structure at the hinge and treat each piece as its own free body with a shear force passed between them. Gerber girders, drop-in spans and link-and-hanger bridges are all built this way on purpose, because the hinge makes a long multi-span beam determinate and immune to support settlement.</p>
<p>Treating a hinge like a free end and zeroing the shear as well loses the entire load path on a drop-in span. The hinge is precisely how the load gets from one segment into the next.</p>`,
  },
  {
    id: "shear-moment-q41",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>Over a 3 m stretch of beam the shear diagram falls linearly from +12 kN to &minus;6 kN. What is the signed change in bending moment across that stretch, in kN&middot;m?</p>",
    answer: 9,
    unit: "kN·m",
    explanation: `<p class="eq">&Delta;M = [(V&#8321; + V&#8322;)/2]L = [(12 + (&minus;6))/2](3) = (3)(3) = <strong>+9 kN&middot;m</strong></p>
<p>&Delta;M is the <em>signed</em> area under V, so the trapezoid formula works directly on a straight shear line provided each ordinate keeps its sign.</p>
<p>Splitting at the zero crossing checks it. V hits zero at 12/(18/3) = 2 m in, so the positive triangle is &frac12;(2)(12) = +12 kN&middot;m and the negative one is &frac12;(1)(6) = &minus;3 kN&middot;m, giving 9. &#10003; That also places the moment peak 2 m into the stretch, 12 kN&middot;m above where it started.</p>
<p>Adding the triangles as magnitudes gives 15 kN&middot;m; pushing |V| through the trapezoid formula gives 27 kN&middot;m. Below-axis shear removes moment, it does not add it.</p>`,
  },
  {
    id: "shear-moment-q42",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 10 m simply supported runway girder carries a single 20 kN wheel standing 3 m from column A. What is the peak bending moment in the girder, in kN&middot;m?</p>",
    answer: 42,
    unit: "kN·m",
    explanation: `<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(10) = 20(3) &rarr; B<sub>y</sub> = 6 kN, A<sub>y</sub> = 14 kN</p>
<p>Shear is +14 kN up to the wheel and &minus;6 kN after it, so the sign change, and the peak, sit under the wheel:</p>
<p class="eq">M<sub>max</sub> = A<sub>y</sub>(3) = 14(3) = <strong>42 kN&middot;m</strong></p>
<p>The standard off-centre result agrees: M = Pab/L = 20(3)(7)/10 = 42 kN&middot;m. &#10003;</p>
<p>The wheel sits nearer A, and A takes the larger reaction precisely because its lever arm to the far support is longer. The same wheel at midspan would give PL/4 = 50 kN&middot;m, so parking it 3 m in costs the girder only 84% of the design moment. Runway girders are checked with the wheel at midspan for that reason, and Pab/L is the formula to reach for whenever the load is not centred.</p>`,
  },
  {
    id: "shear-moment-q43",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 6 m simply supported beam carries two unequal loads: 8 kN at 2 m from A and 12 kN at 4 m from A. What is the maximum bending moment, in kN&middot;m?</p>",
    answer: 21.3,
    unit: "kN·m",
    tolerance: 0.025,
    explanation: `<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) = 8(2) + 12(4) = 64 &rarr; B<sub>y</sub> = 10.67 kN, A<sub>y</sub> = 9.33 kN</p>
<p>With two loads the peak is not obvious by inspection, so track the shear:</p>
<p class="eq">V = +9.33 kN (0 to 2 m), +1.33 kN (2 to 4 m), &minus;10.67 kN (4 to 6 m)</p>
<p>The sign change happens at the <em>second</em> load, so that is where M peaks. Not under the first load, and not at midspan:</p>
<p class="eq">M(4) = 9.33(4) &minus; 8(4 &minus; 2) = 37.33 &minus; 16 = <strong>21.3 kN&middot;m</strong></p>
<p>M under the first load is only 9.33(2) = 18.7 kN&middot;m. With several point loads, walk the shear diagram and stop at the first sign change. The peak is always under a load, though not necessarily under the biggest one. From 4 m to B the area is &minus;10.67(2) = &minus;21.3, returning M to zero. &#10003;</p>`,
  },
  {
    id: "shear-moment-q44",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 2 m cantilever carries a 3 kN downward load at its tip, and at that same tip an applied couple of 4 kN&middot;m acting in the sense that <em>opposes</em> the bending the load causes at the wall. What is the magnitude of the wall reaction moment, in kN&middot;m?</p>",
    answer: 2,
    unit: "kN·m",
    explanation: `<p class="eq">M<sub>load</sub> = &minus;3(2) = &minus;6 kN&middot;m; M<sub>couple</sub> = +4 kN&middot;m</p>
<p class="eq">Net applied = &minus;6 + 4 = &minus;2, so |M<sub>wall</sub>| = <strong>2 kN&middot;m</strong></p>
<p>The couple cancels two-thirds of the load&rsquo;s demand. Adding magnitudes instead of signed values gives 10 kN&middot;m, a five-fold over-design.</p>
<p>Plot the whole diagram before settling on 2 kN&middot;m, though. M is +4 kN&middot;m at the tip, where the couple acts, falls linearly at 3 kN per metre, crosses zero 1.33 m from the tip, and reaches &minus;2 kN&middot;m at the wall. The <strong>largest</strong> magnitude in the beam is 4 kN&middot;m at the tip, not the 2 kN&middot;m at the wall, and the tension face switches sides partway along. The fixed end does not always govern.</p>`,
  },
  {
    id: "shear-moment-q45",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A beam sits on supports at A and B, 4 m apart, and overhangs to x = 5 m. It carries 20 kN at x = 2 m and 10 kN at the free end. Where between A and B does the moment change sign, measured from A, in m?</p>",
    answer: 3.2,
    unit: "m",
    tolerance: 0.025,
    explanation: `<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(4) = 20(2) + 10(5) = 90 &rarr; B<sub>y</sub> = 22.5 kN, A<sub>y</sub> = 7.5 kN</p>
<p>Between the 20 kN load and B, the moment from the left segment is</p>
<p class="eq">M(x) = 7.5x &minus; 20(x &minus; 2) = 40 &minus; 12.5x</p>
<p class="eq">40 &minus; 12.5x = 0 &rarr; x = <strong>3.20 m</strong></p>
<p>Left of that point the span sags with tension on the bottom; right of it the overhang&rsquo;s pull takes over and the beam hogs, reaching &minus;10 kN&middot;m at B. Check the far end: M(4) = 40 &minus; 50 = &minus;10 kN&middot;m, and the overhang alone gives &minus;10(1) = &minus;10 kN&middot;m from the other side. &#10003;</p>
<p>The tension face switches at x = 3.2 m. Bottom-face reinforcement, cover plates or weld details go left of it, top-face detailing right of it, and a strain gauge placed near 3.2 m would read almost nothing. It is also the natural splice location, since the section carries shear but essentially no bending there.</p>`,
  },
  {
    id: "shear-moment-q46",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A short, deep cast bracket is bolted to a machine frame through two bolts and stiffened by a rib. Why is a one-dimensional V-M beam diagram not enough to size it?</p>",
    choices: [
      "Beam theory assumes slenderness, so the resultants themselves come out wrong",
      "The V and M resultants are still right, but near the rib and bolt holes the stress field is 3-D",
      "Short parts carry load only in shear, so bending moment is not defined for them",
      "A casting has no definable neutral axis, so M/S simply cannot be evaluated",
    ],
    answer: 1,
    explanation: `<p>Equilibrium is equilibrium. Cut the bracket anywhere and the internal force and moment resultants are exactly what statics says, so the V-M diagram remains the right first step for understanding the load path and sizing the bolt group. What fails is the step <em>after</em> the resultants, turning M into stress with &sigma; = Mc/I.</p>
<p>That formula rests on assumptions a stubby ribbed casting breaks: plane sections staying plane, a span long compared with the depth, roughly L/h &gt; 10 before the error gets small, no abrupt section change, and load introduced far from the section of interest. A bracket has none of these. Its load spreads three-dimensionally through the rib, bolt bearing crushes locally, prying pulls on the bolt heads, the fillet radius concentrates stress, and cast defects and draft angles move the real critical section.</p>
<p>So: start with the beam diagram to find the load path and the reaction sizes, hand-check the local modes for bolt shear, bearing, prying and rib buckling, then use FEA for the stress field, and validate it with a strain gauge on the fillet.</p>`,
  },
  {
    id: "shear-moment-q47",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A beam is <strong>built in at A</strong> and rests on a roller at C, 6 m away, with an ideal internal hinge at B halfway between them. A 12 kN downward load acts midway between B and C. What is the reaction at C, in kN?</p>",
    answer: 6,
    unit: "kN",
    explanation: `<p>The hinge unlocks the structure. M<sub>B</sub> = 0 gives the extra equation the fixed end would otherwise deny you. Split the beam there and take the right-hand piece B-C as its own free body: 3 m long, carrying the hinge shear at B, the 12 kN load at its midpoint, and C<sub>y</sub> at the far end.</p>
<p class="eq">&Sigma;M<sub>B</sub> = 0: C<sub>y</sub>(3) &minus; 12(1.5) = 0 &rarr; C<sub>y</sub> = <strong>6 kN</strong></p>
<p>By symmetry of that segment the hinge passes 6 kN of shear into the left piece, which the built-in end at A carries along with the moment 6(3) = 18 kN&middot;m it generates.</p>
<p>The support types had to be stated for a reason. With a <em>pin</em> at A instead of a fixed end, the left segment would give &Sigma;M<sub>B</sub> = A<sub>y</sub>(3) = 0, so A<sub>y</sub> = 0, the hinge could pass no shear, and the whole assembly becomes a mechanism with no answer at all. Reactions plus the hinge condition must equal the available equilibrium equations, or the structure either moves or is indeterminate.</p>`,
  },
  {
    id: "shear-moment-q48",
    type: "mc",
    difficulty: 2,
    prompt: "<p>You have a beam's shear diagram in front of you and want the maximum bending moment without writing M(x) anywhere. Where do you look?</p>",
    choices: [
      "Under the largest applied load, whatever the shear does there",
      "Where V crosses zero, plus couples, supports and free ends",
      "At midspan, which is the extremum for any symmetric loading",
      "Where the distributed load intensity peaks along the member",
    ],
    answer: 1,
    explanation: `<p>dM/dx = V, so a zero crossing of shear is a horizontal tangent on the moment diagram, a smooth interior extremum. That is the main candidate and on its own it misses two families:</p>
<ul>
<li><strong>Applied couples</strong>, where M steps discontinuously and the extreme value can sit at the jump with V nowhere near zero.</li>
<li><strong>Fixed ends and interior supports</strong>, boundary points where the derivative test does not apply. The tip-loaded cantilever is the standing counterexample: V = P everywhere, never zero, yet |M| peaks at the wall.</li>
</ul>
<p>So mark every V sign change, every couple, and every support or boundary; evaluate M at each; take the largest magnitude, counting hogging and sagging equally, because a beam does not care which way it is bent.</p>
<p>The largest load is not the rule, since a big load near a support produces a small moment. And midspan only wins for symmetric cases.</p>`,
  },
  {
    id: "shear-moment-q49",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A design review claims that spreading a load uniformly and hanging the same total weight at midspan put the same peak moment into a simply supported beam, because the reactions come out identical. By what factor is the concentrated case actually worse?</p>",
    answer: 2,
    explanation: `<p>The reactions really are identical. Both cases put W/2 on each support, because reactions depend only on the resultant and its position. That is what makes the argument seductive and what makes it wrong: reactions are a rigid-body result and carry no information about how load is distributed inside the member.</p>
<p class="eq">Point load W at midspan: M<sub>max</sub> = WL/4</p>
<p class="eq">Uniform load w = W/L: M<sub>max</sub> = wL&sup2;/8 = WL/8</p>
<p class="eq">Ratio = (WL/4)/(WL/8) = <strong>2.00</strong></p>
<p>The shapes differ too. The point load gives a triangular moment diagram with a sharp apex; the UDL gives a flatter parabola. Deflection tells the same story at 5/8 as large for the UDL, 5wL&#8308;/384EI against WL&sup3;/48EI.</p>
<p>Never model a distributed load as its resultant when drawing V and M. It is legal for reactions only. And when you can choose, spread the load. That is why machine feet get pads, why shelves get ledger strips, and why a pallet beats a single crate leg.</p>`,
  },
  {
    id: "shear-moment-q50",
    type: "mc",
    difficulty: 2,
    prompt: "<p>For most beams, bending stress governs and transverse shear is a formality. When does shear actually take over the design?</p>",
    choices: [
      "When the span-to-depth ratio is large, as in a long floor joist",
      "When the load is uniform rather than concentrated at midspan",
      "Whenever the beam is steel, since steel is weaker in shear",
      "In short deep members, thin webs, and wood loaded along the grain &mdash; low span-to-depth",
    ],
    answer: 3,
    explanation: `<p>Compare the two demands for a rectangular section with a midspan point load. With &sigma; = 1.5PL/bh&sup2; and &tau; = 0.75P/bh,</p>
<p class="eq">&sigma;/&tau; = 2L/h</p>
<p>Bending grows with the span-to-depth ratio; shear does not care about span at all. Bending therefore dominates long slender beams and loses its lead as members get short and deep. A bracket with L/h = 1 has &sigma; and &tau; of the same order, and then the relative <em>allowables</em> decide.</p>
<p>Shear wins in three real cases. <strong>Short deep members</strong> such as brackets, corbels, lugs and coupon supports. <strong>Thin webs</strong>, where the web area is small even though the flanges give plenty of section modulus, which is why plate girders get web stiffeners near supports. And <strong>materials weak in shear</strong>: timber splitting along the grain, unidirectional composites delaminating, adhesive joints peeling.</p>
<p>The first option is backwards, and steel is not shear-critical. Its shear allowable runs around 0.6 of the tensile allowable, comfortably above the &tau; a normal beam sees.</p>`,
  },
  {
    id: "shear-moment-q51",
    type: "mc",
    difficulty: 1,
    prompt: "<p>On a beam's moment diagram the curve climbs steeply at first and then flattens out toward a smooth crest. What is the shear force doing over that stretch?</p>",
    choices: [
      "Rising steadily, since M curves upward as V accumulates",
      "Stepping down at the point where the curve flattens out",
      "Staying constant, because M is changing continuously",
      "Falling toward zero: the slope of M is the shear force",
    ],
    answer: 3,
    explanation: `<p>dM/dx = V, so reading the moment diagram is reading the shear diagram. A steep climb means large positive V, a flattening curve means V is shrinking, a horizontal crest means V has reached zero. Falling steadily toward zero is the signature of a distributed load, since dV/dx = &minus;w must be non-zero for V to change smoothly. Rising V would make M steeper, not flatter.</p>`,
  },
  {
    id: "shear-moment-q52",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A 3 m cantilever's shear diagram is a constant +6 kN along its whole length, with nothing applied between wall and tip except the tip load. What is the bending moment at the wall?</p>",
    choices: [
      "&minus;18 kN&middot;m, from the 6 kN &times; 3 m area under V",
      "&minus;6 kN&middot;m, since shear and moment share a magnitude",
      "0, because a constant shear produces no change in moment",
      "&minus;9 kN&middot;m, half the shear area as for a triangular V",
    ],
    answer: 0,
    explanation: `<p>Start where M is known. The free tip carries no couple, so M = 0 there, and the area rule takes you back to the wall:</p>
<p class="eq">&Delta;M = area under V = 6 kN &times; 3 m = 18 kN&middot;m</p>
<p>Hogging, so M<sub>wall</sub> = &minus;18 kN&middot;m with tension on top. Constant shear means a straight moment line. The half-area answer belongs to a triangular shear diagram, which is what a uniform load gives.</p>`,
  },
  {
    id: "shear-moment-q53",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A 6 m beam under uniform load w rests on two supports. Instead of putting them at the very ends, you move each one 0.75 m inboard. What happens to the peak bending moment?</p>",
    choices: [
      "Peak moment is unchanged; only the reactions redistribute",
      "Peak moment rises, because the overhangs add hogging demand",
      "Peak sagging halves, 4.50w to 2.25w, with 0.28w hogging",
      "Peak moment falls to zero once overhangs balance the span",
    ],
    answer: 2,
    explanation: `<p>With supports at the ends, M<sub>max</sub> = wL&sup2;/8 = w(36)/8 = 4.50w. Move them inboard by a = 0.75 m and the clear span becomes s = 4.5 m, with each overhang producing a hogging moment at its support:</p>
<p class="eq">M<sub>hog</sub> = wa&sup2;/2 = w(0.5625)/2 = 0.28w</p>
<p class="eq">M<sub>sag</sub> = ws&sup2;/8 &minus; wa&sup2;/2 = 2.53w &minus; 0.28w = 2.25w</p>
<p>The governing moment drops by exactly half for free, with no extra material, just two supports moved 12.5% of the length inboard. The overhang moment subtracts from the span moment because the cantilevered load pushes the ends down and the middle up, opposing the sagging.</p>
<p>The optimum is a = 0.207L = 1.24 m, where hogging and sagging balance at 0.77w, less than a fifth of the end-supported value. Tanker trailers, pipe racks, transported vessels and crane outriggers all sit on supports set inboard for exactly this reason. Push it too far and the ends deflect visibly, and any live load out there reverses the tension face.</p>`,
  },
  {
    id: "shear-moment-q54",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 4 m cantilevered platform arm carries 5 kN at its free tip and an 8 kN motor mounted 1.5 m out from the wall. What is the magnitude of the bending moment at the wall, in kN&middot;m?</p>",
    answer: 32,
    unit: "kN·m",
    explanation: `<p>Cut at the wall and take moments of everything outboard, each load on its own arm:</p>
<p class="eq">M<sub>tip</sub> = 5 &times; 4 = 20 kN&middot;m</p>
<p class="eq">M<sub>motor</sub> = 8 &times; 1.5 = 12 kN&middot;m</p>
<p class="eq">|M|<sub>wall</sub> = 20 + 12 = <strong>32 kN&middot;m</strong></p>
<p>Both loads bend the arm the same way, so they add. The diagram is piecewise linear: V is +5 kN from the tip to the motor, steps to +13 kN and stays there to the wall; M runs 0 at the tip, &minus;12.5 kN&middot;m at the motor, and &minus;32 kN&middot;m at the wall, kinking where V changed.</p>
<p>The 5 kN tip load contributes more moment than the 8 kN motor despite being smaller. On a cantilever the arm matters as much as the force, so moving heavy equipment inboard is far cheaper than beefing up the arm. Adding the forces first, to 13 kN, and applying one arm gives 52 or 19.5 kN&middot;m depending on which arm you pick, and both are wrong.</p>`,
  },
  {
    id: "shear-moment-q55",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A canopy beam is designed for downward snow load. The site review adds a wind uplift case of almost the same magnitude acting upward. What does that change?</p>",
    choices: [
      "Nothing: the magnitudes match, so the same section already works",
      "The tension face swaps, so check the other flange and the fixings",
      "Only the reactions reverse; the internal moments keep their sign",
      "Deflection reverses, but the bending stresses are unaffected by it",
    ],
    answer: 1,
    explanation: `<p>Reversing the load reverses the whole moment diagram. Every value keeps its magnitude and flips its sign, so the fibre that was in compression is now in tension. Three consequences follow:</p>
<ul>
<li><strong>Tension face swaps.</strong> Welds, bolt holes, notches and section changes that were safely in compression are now in tension, where fatigue cracks start and where a flaw actually propagates.</li>
<li><strong>Lateral bracing moves.</strong> The compression flange is the one that buckles sideways, and it is now the other flange. Bracing that restrained the top flange may do nothing for the bottom one.</li>
<li><strong>Connections reverse.</strong> Bearing supports that only push are useless in uplift, so hold-down bolts, ties and anchor capacity become the governing check.</li>
</ul>
<p>An equal-and-opposite load case is therefore <em>not</em> automatically covered by the original design, even though the peak stress number is identical. Light canopies, awnings, solar racking and signage are usually governed by uplift rather than by gravity load.</p>`,
  },
  {
    id: "shear-moment-q56",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A services run forces you to cut a 40 mm hole through the web of a simply supported I-beam that carries a uniform load. Where do you put it?</p>",
    choices: [
      "Near midspan, where shear is least, and centred on the neutral axis",
      "Near a support, where the bending moment is close to zero",
      "At the quarter point, where both V and M are middling values",
      "Anywhere: a small hole cannot affect a beam's load capacity",
    ],
    answer: 0,
    explanation: `<p>Ask what the web does and what the hole takes away. The web carries essentially all the transverse shear and the flanges carry the bending, so a web hole costs shear area and belongs where V is smallest. On a uniformly loaded simply supported beam that is midspan, where V passes through zero, with |V| largest right at the supports.</p>
<p>Sitting on the neutral axis costs almost nothing in bending either, since the contribution to I goes as y&sup2; and removing a strip at y = 0 barely moves the second moment of area. Midspan is where M is largest, which sounds like the wrong place until you notice the hole removes no flange.</p>
<p>The near-support option is backwards. It puts the hole in the peak-shear region, where the web resists both shear and web crippling over the bearing. Answering &ldquo;anywhere&rdquo; ignores the stress concentration: even a well-placed hole needs rounded corners or a sleeve, and a rule of thumb caps unreinforced web openings at roughly 40% of web depth, kept clear of the support zone.</p>`,
  },
  {
    id: "shear-moment-q57",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A long stretch of a beam's shear diagram is perfectly flat at a non-zero value. What is acting on the beam over that stretch, and what is the moment doing?</p>",
    choices: [
      "No load at all; M runs as a straight line with slope V",
      "A uniform load; M is a parabola over that whole stretch",
      "A point load at each end; M holds constant across it",
      "An applied couple; M jumps at the middle of the stretch",
    ],
    answer: 0,
    explanation: `<p>dV/dx = &minus;w and V is flat, so w = 0 and nothing is applied along that stretch. Then dM/dx = V, a non-zero constant, so M is a straight line: climbing if V is positive, falling if negative.</p>
<p>This is the most common segment in any real diagram, the unloaded run between two point loads. Recognising it lets you draw that part with a ruler.</p>`,
  },
  {
    id: "shear-moment-q58",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A beam 8 m long overall rests on supports at A (x = 0) and B (x = 6 m), overhanging 2 m past B, and carries 4 kN/m over its entire length. What is the shear force just to the <em>left</em> of B, in kN?</p>",
    answer: -13.3,
    unit: "kN",
    tolerance: 0.025,
    explanation: `<p class="eq">&Sigma;M<sub>A</sub> = 0: B<sub>y</sub>(6) = 32(4) = 128 &rarr; B<sub>y</sub> = 21.33 kN, A<sub>y</sub> = 10.67 kN</p>
<p>The load totals 4(8) = 32 kN acting at x = 4 m. Walk from A to just left of B, shedding load as you go:</p>
<p class="eq">V(6&#8315;) = 10.67 &minus; 4(6) = 10.67 &minus; 24 = <strong>&minus;13.33 kN</strong></p>
<p>Checking from the other side is faster: just right of B the shear equals the load still hanging on the overhang, 4(2) = +8 kN, and the reaction supplies the step, &minus;13.33 + 21.33 = +8 kN. &#10003;</p>
<p>B is the peak-shear section of the whole beam, not A, because the overhang pushes load onto B from both sides. That is the usual pattern for an overhanging beam, and it is why the web check, the bearing stiffener and the connection design all get done at the interior support.</p>`,
  },
  {
    id: "shear-moment-q59",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A conveyor idler shaft runs in two bearings 0.6 m apart and carries a 4 kN belt load midway between them. An engineer models it as a cantilever off one bearing. What does that do?</p>",
    choices: [
      "It halves the moment and puts the peak at the wrong bearing",
      "It leaves the peak unchanged but moves it to the bearing face",
      "It doubles the peak and moves it from midspan to a bearing",
      "It has no effect: both models give PL/4 at the same location",
    ],
    answer: 2,
    explanation: `<p>Run both models on the same numbers.</p>
<p class="eq">Simply supported: M<sub>max</sub> = PL/4 = 4(0.6)/4 = 0.600 kN&middot;m at midspan</p>
<p class="eq">Cantilever from one bearing: M = P(L/2) = 4(0.3) = 1.20 kN&middot;m at that bearing</p>
<p>The cantilever idealisation is 2&times; conservative on magnitude and puts the critical section in the wrong place. For a shaft that matters, because the section you actually worry about is the one carrying a stress raiser, a keyway, a snap-ring groove or a shoulder fillet, and those sit near the bearings rather than at midspan.</p>
<p>This is about boundary conditions, not arithmetic. A shaft in two bearings is supported at both ends, and treating one bearing as a wall throws away half the load path. The mirror-image error is worse: modelling a genuinely cantilevered overhung pulley as simply supported under-predicts the bearing-adjacent moment. Draw the supports before the diagram, and say out loud which one carries moment.</p>`,
  },
  {
    id: "shear-moment-q60",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A 4 m simply supported walkway plank carries 6 kN/m along its whole length. What is the largest shear force anywhere in the plank, and where does it act?</p>",
    choices: [
      "12 kN at both supports, dropping to zero at midspan",
      "24 kN at midspan, where the whole load has accumulated",
      "12 kN, uniform along the plank because the load is uniform",
      "6 kN at the supports, equal to the load intensity value",
    ],
    answer: 0,
    explanation: `<p class="eq">V<sub>max</sub> = wL/2 = 6(4)/2 = 12 kN, at each support</p>
<p>Total load 24 kN, split evenly, so V starts at +12 kN and ramps at &minus;6 kN/m through zero at midspan to &minus;12 kN. Peak shear and peak moment sit at opposite places: |V| largest at the supports where M = 0, M largest at midspan where V = 0. 24 kN forgets the supports share the load; 6 kN is an intensity, not a force.</p>`,
  },
];

export default extra;
