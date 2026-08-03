import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Assembly Strategies & Tolerance Stacks
// SVG element ids are all prefixed "asm<n>-" to stay globally unique.
// ---------------------------------------------------------------------------

// Lesson fig 1 — the 1D loop diagram with + and - directions.
const figLoop = `<svg viewBox="0 0 460 272" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm1-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="asm1-gray" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">1D loop: G = L &minus; A &minus; B &minus; C</text>
  <text x="230" y="42" text-anchor="middle" fill="#1d4ed8" font-weight="600">+ L = 100.00 &plusmn; 0.20</text>
  <line x1="60" y1="54" x2="400" y2="54" stroke="#1d4ed8" stroke-width="2" marker-end="url(#asm1-blue)"/>
  <line x1="60" y1="54" x2="60" y2="92" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="400" y1="54" x2="400" y2="92" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="40" y="92" width="20" height="100" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="400" y="92" width="20" height="100" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="40" y="192" width="380" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="60" y="112" width="136" height="80" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="196" y="112" width="85" height="80" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="281" y="112" width="102" height="80" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="383" y="112" width="17" height="80" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="128" y="148" text-anchor="middle" font-weight="600" fill="#334155">A</text>
  <text x="128" y="166" text-anchor="middle" fill="#64748b" font-size="11">40.00</text>
  <text x="238" y="148" text-anchor="middle" font-weight="600" fill="#334155">B</text>
  <text x="238" y="166" text-anchor="middle" fill="#64748b" font-size="11">25.00</text>
  <text x="332" y="148" text-anchor="middle" font-weight="600" fill="#334155">C</text>
  <text x="332" y="166" text-anchor="middle" fill="#64748b" font-size="11">30.00</text>
  <text x="391" y="106" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">G</text>
  <line x1="196" y1="226" x2="60" y2="226" stroke="#64748b" stroke-width="1.6" marker-end="url(#asm1-gray)"/>
  <line x1="281" y1="226" x2="196" y2="226" stroke="#64748b" stroke-width="1.6" marker-end="url(#asm1-gray)"/>
  <line x1="383" y1="226" x2="281" y2="226" stroke="#64748b" stroke-width="1.6" marker-end="url(#asm1-gray)"/>
  <line x1="60" y1="220" x2="60" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="196" y1="220" x2="196" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="281" y1="220" x2="281" y2="232" stroke="#64748b" stroke-width="1"/>
  <line x1="383" y1="220" x2="383" y2="232" stroke="#64748b" stroke-width="1"/>
  <text x="128" y="244" text-anchor="middle" fill="#64748b" font-size="11">&minus;A &plusmn;0.10</text>
  <text x="238" y="244" text-anchor="middle" fill="#64748b" font-size="11">&minus;B &plusmn;0.08</text>
  <text x="332" y="244" text-anchor="middle" fill="#64748b" font-size="11">&minus;C &plusmn;0.12</text>
  <text x="230" y="264" text-anchor="middle" fill="#334155" font-size="11">worst case G = 5.00 &plusmn; 0.50&nbsp;&nbsp;&middot;&nbsp;&nbsp;RSS G = 5.00 &plusmn; 0.27</text>
</svg>`;

// Lesson fig 2 — worst case vs RSS on one gap axis.
const figWcRss = `<svg viewBox="0 0 460 266" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm2-axis" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Same stack, two answers</text>
  <text x="230" y="38" text-anchor="middle" fill="#64748b" font-size="11">L = 100.00 &plusmn;0.20 minus A &plusmn;0.10, B &plusmn;0.08, C &plusmn;0.12</text>
  <path d="M 225 138 C 262 136, 272 64, 295 64 C 318 64, 328 136, 365 138" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <line x1="150" y1="138" x2="444" y2="138" stroke="#334155" stroke-width="1.4" marker-end="url(#asm2-axis)"/>
  <line x1="204" y1="138" x2="204" y2="144" stroke="#334155" stroke-width="1"/>
  <line x1="295" y1="138" x2="295" y2="144" stroke="#334155" stroke-width="1"/>
  <line x1="386" y1="138" x2="386" y2="144" stroke="#334155" stroke-width="1"/>
  <text x="204" y="158" text-anchor="middle" fill="#64748b" font-size="11">4.50</text>
  <text x="295" y="158" text-anchor="middle" fill="#64748b" font-size="11">5.00</text>
  <text x="386" y="158" text-anchor="middle" fill="#64748b" font-size="11">5.50</text>
  <text x="424" y="128" text-anchor="middle" fill="#334155" font-size="11">gap G (mm)</text>
  <line x1="295" y1="58" x2="295" y2="232" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <rect x="204" y="176" width="182" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="247" y="208" width="96" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="142" y="190" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">Worst case</text>
  <text x="142" y="222" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">RSS (3&sigma;)</text>
  <text x="247" y="240" text-anchor="middle" fill="#1d4ed8" font-size="11">4.73</text>
  <text x="343" y="240" text-anchor="middle" fill="#1d4ed8" font-size="11">5.27</text>
  <text x="295" y="258" text-anchor="middle" fill="#64748b" font-size="11">nominal 5.00</text>
</svg>`;

// Lesson fig 3 — round pin + diamond pin locating scheme.
const figPins = `<svg viewBox="0 0 460 266" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm3-blue" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Two-pin location: one round pin, one diamond pin</text>
  <rect x="50" y="40" width="360" height="150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="60" y1="115" x2="400" y2="115" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="150" cy="115" r="20" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="330" cy="115" r="20" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="150" cy="115" r="16" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <path d="M 321 101.77 A 16 16 0 0 1 339 101.77 L 339 128.23 A 16 16 0 0 1 321 128.23 Z" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <text x="150" y="68" text-anchor="middle" font-weight="600" fill="#334155">round pin</text>
  <text x="330" y="68" text-anchor="middle" font-weight="600" fill="#334155">diamond pin</text>
  <line x1="150" y1="164" x2="330" y2="164" stroke="#64748b" stroke-width="1"/>
  <line x1="150" y1="158" x2="150" y2="170" stroke="#64748b" stroke-width="1"/>
  <line x1="330" y1="158" x2="330" y2="170" stroke="#64748b" stroke-width="1"/>
  <text x="240" y="156" text-anchor="middle" fill="#64748b" font-size="11">centre distance L (varies part to part)</text>
  <text x="150" y="212" text-anchor="middle" fill="#1d4ed8" font-size="12">locates X and Y</text>
  <text x="330" y="212" text-anchor="middle" fill="#1d4ed8" font-size="12">locates Y, floats in X</text>
  <line x1="330" y1="234" x2="372" y2="234" stroke="#1d4ed8" stroke-width="2" marker-end="url(#asm3-blue)"/>
  <line x1="330" y1="234" x2="288" y2="234" stroke="#1d4ed8" stroke-width="2" marker-end="url(#asm3-blue)"/>
  <text x="150" y="238" text-anchor="middle" fill="#64748b" font-size="11">primary locator</text>
  <text x="230" y="260" text-anchor="middle" fill="#334155" font-size="11">X = line of centres; the flats face along X so &Delta;L cannot jam the pins</text>
</svg>`;

// Lesson fig 4 — adhesive joint in shear vs peel.
const figBond = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm4-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="120" y="26" text-anchor="middle" font-weight="600" fill="#1d4ed8">Shear &mdash; strong</text>
  <text x="340" y="26" text-anchor="middle" font-weight="600" fill="#dc2626">Peel &mdash; weak</text>
  <line x1="230" y1="16" x2="230" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <rect x="28" y="88" width="130" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="78" y="108" width="120" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="78" y="104" width="80" height="4" fill="#fee2e2" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="28" y1="96" x2="6" y2="96" stroke="#dc2626" stroke-width="2.5" marker-end="url(#asm4-load)"/>
  <line x1="198" y1="116" x2="220" y2="116" stroke="#dc2626" stroke-width="2.5" marker-end="url(#asm4-load)"/>
  <text x="16" y="82" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <text x="212" y="106" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <line x1="78" y1="156" x2="158" y2="156" stroke="#64748b" stroke-width="1"/>
  <line x1="78" y1="150" x2="78" y2="162" stroke="#64748b" stroke-width="1"/>
  <line x1="158" y1="150" x2="158" y2="162" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="150" text-anchor="middle" fill="#64748b" font-size="11">overlap</text>
  <text x="118" y="180" text-anchor="middle" fill="#334155" font-size="11">whole bond area carries load, but</text>
  <text x="118" y="196" text-anchor="middle" fill="#334155" font-size="11">the ends carry most of it</text>
  <rect x="255" y="112" width="175" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="258" y1="128" x2="250" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="288" y1="128" x2="280" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="318" y1="128" x2="310" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="348" y1="128" x2="340" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="378" y1="128" x2="370" y2="138" stroke="#64748b" stroke-width="1"/>
  <line x1="408" y1="128" x2="400" y2="138" stroke="#64748b" stroke-width="1"/>
  <rect x="258" y="108" width="100" height="4" fill="#fee2e2" stroke="#dc2626" stroke-width="0.8"/>
  <path d="M 258 104 L 358 104 C 384 104 392 82 398 58" fill="none" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
  <line x1="398" y1="54" x2="398" y2="34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#asm4-load)"/>
  <text x="414" y="44" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <circle cx="358" cy="106" r="4" fill="#dc2626"/>
  <line x1="356" y1="110" x2="340" y2="152" stroke="#64748b" stroke-width="1"/>
  <text x="334" y="166" text-anchor="middle" fill="#dc2626" font-size="11">peel front</text>
  <text x="342" y="188" text-anchor="middle" fill="#334155" font-size="11">load concentrates on one line;</text>
  <text x="342" y="204" text-anchor="middle" fill="#334155" font-size="11">extra overlap buys almost nothing</text>
  <text x="230" y="228" text-anchor="middle" fill="#334155" font-size="11">Design the joint so the adhesive sees shear, not peel or cleavage.</text>
</svg>`;

// Lesson fig 5 — clearance / transition / interference bands.
const figFits = `<svg viewBox="0 0 460 258" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Fit classes: shaft band vs hole band (&#8709;25 H7)</text>
  <line x1="76" y1="92" x2="76" y2="202" stroke="#334155" stroke-width="1.2"/>
  <line x1="72" y1="105" x2="80" y2="105" stroke="#334155" stroke-width="1"/>
  <line x1="72" y1="150" x2="80" y2="150" stroke="#334155" stroke-width="1"/>
  <line x1="72" y1="195" x2="80" y2="195" stroke="#334155" stroke-width="1"/>
  <text x="68" y="109" text-anchor="end" fill="#64748b" font-size="11">+30</text>
  <text x="68" y="154" text-anchor="end" fill="#64748b" font-size="11">0</text>
  <text x="68" y="199" text-anchor="end" fill="#64748b" font-size="11">&minus;30</text>
  <text x="44" y="88" text-anchor="start" fill="#64748b" font-size="11">&mu;m</text>
  <line x1="76" y1="150" x2="430" y2="150" stroke="#334155" stroke-width="1.4" stroke-dasharray="6 4"/>
  <rect x="90" y="118.5" width="340" height="31.5" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="96" y="112" text-anchor="start" fill="#1d4ed8" font-size="11">hole H7: 0 to +21 &mu;m</text>
  <rect x="120" y="160.5" width="70" height="19.5" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="215" y="127.5" width="70" height="19.5" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="310" y="97.5" width="70" height="19.5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <line x1="155" y1="182" x2="155" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="250" y1="149" x2="250" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <line x1="345" y1="119" x2="345" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="155" y="216" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">H7/g6</text>
  <text x="250" y="216" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">H7/k6</text>
  <text x="345" y="216" text-anchor="middle" font-weight="600" fill="#334155" font-size="12">H7/p6</text>
  <text x="155" y="232" text-anchor="middle" fill="#64748b" font-size="11">clearance</text>
  <text x="250" y="232" text-anchor="middle" fill="#64748b" font-size="11">transition</text>
  <text x="345" y="232" text-anchor="middle" fill="#dc2626" font-size="11">interference</text>
  <text x="230" y="252" text-anchor="middle" fill="#334155" font-size="11">Below the hole band = clearance &middot; overlapping = transition &middot; above = interference</text>
</svg>`;

// Q figure — four spacers in a bore.
const figSpacers = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Four spacers stacked in a bore</text>
  <rect x="40" y="44" width="18" height="120" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="402" y="44" width="18" height="120" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="40" y="164" width="380" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="58" y="64" width="80" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="138" y="64" width="80" height="100" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="218" y="64" width="80" height="100" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="298" y="64" width="80" height="100" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="378" y="64" width="24" height="100" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="98" y="110" text-anchor="middle" fill="#334155" font-size="11">10.00</text>
  <text x="98" y="128" text-anchor="middle" fill="#64748b" font-size="11">&plusmn;0.10</text>
  <text x="178" y="110" text-anchor="middle" fill="#334155" font-size="11">10.00</text>
  <text x="178" y="128" text-anchor="middle" fill="#64748b" font-size="11">&plusmn;0.10</text>
  <text x="258" y="110" text-anchor="middle" fill="#334155" font-size="11">10.00</text>
  <text x="258" y="128" text-anchor="middle" fill="#64748b" font-size="11">&plusmn;0.10</text>
  <text x="338" y="110" text-anchor="middle" fill="#334155" font-size="11">10.00</text>
  <text x="338" y="128" text-anchor="middle" fill="#64748b" font-size="11">&plusmn;0.10</text>
  <text x="390" y="56" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">G</text>
  <line x1="58" y1="196" x2="378" y2="196" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="190" x2="58" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="378" y1="190" x2="378" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="218" y="190" text-anchor="middle" fill="#64748b" font-size="11">4 &times; 10.00 &plusmn; 0.10</text>
  <line x1="58" y1="220" x2="402" y2="220" stroke="#64748b" stroke-width="1"/>
  <line x1="58" y1="214" x2="58" y2="226" stroke="#64748b" stroke-width="1"/>
  <line x1="402" y1="214" x2="402" y2="226" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="214" text-anchor="middle" fill="#64748b" font-size="11">bore depth 40.50 &plusmn; 0.20</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="10">gap G shown exaggerated</text>
</svg>`;

// Q figure — bonded L-bracket loaded so the bond peels.
const figPeelBracket = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="asm7-load" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Adhesive-bonded L-bracket on a panel</text>
  <rect x="40" y="152" width="380" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="48" y1="170" x2="38" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="88" y1="170" x2="78" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="128" y1="170" x2="118" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="168" y1="170" x2="158" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="208" y1="170" x2="198" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="248" y1="170" x2="238" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="288" y1="170" x2="278" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="328" y1="170" x2="318" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="368" y1="170" x2="358" y2="182" stroke="#64748b" stroke-width="1"/>
  <line x1="408" y1="170" x2="398" y2="182" stroke="#64748b" stroke-width="1"/>
  <rect x="120" y="130" width="180" height="18" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="120" y="148" width="180" height="4" fill="#fee2e2" stroke="#dc2626" stroke-width="0.8"/>
  <rect x="280" y="52" width="20" height="78" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="300" y1="62" x2="372" y2="62" stroke="#dc2626" stroke-width="2.5" marker-end="url(#asm7-load)"/>
  <text x="390" y="66" text-anchor="middle" fill="#dc2626" font-weight="600">F</text>
  <path d="M 124 144 C 112 138 104 128 100 116" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#asm7-load)"/>
  <text x="98" y="104" text-anchor="middle" fill="#dc2626" font-size="11">bond lifts here</text>
  <text x="312" y="106" text-anchor="start" fill="#64748b" font-size="11">h = 80 mm</text>
  <line x1="120" y1="200" x2="300" y2="200" stroke="#64748b" stroke-width="1"/>
  <line x1="120" y1="194" x2="120" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="194" x2="300" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="210" y="194" text-anchor="middle" fill="#64748b" font-size="11">bonded overlap 60 mm</text>
  <text x="230" y="220" text-anchor="middle" fill="#64748b" font-size="11">flat adhesive layer, no fasteners, no mechanical stop</text>
</svg>`;

// Q figure — two round pins jam, round + diamond does not.
const figPinCompare = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="122" y="34" text-anchor="middle" font-weight="600" fill="#dc2626">Two round pins</text>
  <text x="345" y="34" text-anchor="middle" font-weight="600" fill="#1d4ed8">Round + diamond</text>
  <line x1="232" y1="26" x2="232" y2="200" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="30" y1="110" x2="215" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="60" cy="110" r="16" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="196" cy="110" r="16" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="60" cy="110" r="14" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <circle cx="185" cy="110" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <line x1="185" y1="146" x2="196" y2="146" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="185" y1="140" x2="185" y2="152" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="196" y1="140" x2="196" y2="152" stroke="#dc2626" stroke-width="1.4"/>
  <text x="190" y="168" text-anchor="middle" fill="#dc2626" font-size="11">&Delta;L</text>
  <line x1="250" y1="110" x2="435" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="280" cy="110" r="16" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="416" cy="110" r="16" fill="none" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="280" cy="110" r="14" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <path d="M 397 98.51 A 14 14 0 0 1 413 98.51 L 413 121.49 A 14 14 0 0 1 397 121.49 Z" fill="#dbeafe" stroke="#334155" stroke-width="2"/>
  <line x1="405" y1="146" x2="416" y2="146" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="405" y1="140" x2="405" y2="152" stroke="#1d4ed8" stroke-width="1.4"/>
  <line x1="416" y1="140" x2="416" y2="152" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="410" y="168" text-anchor="middle" fill="#1d4ed8" font-size="11">&Delta;L</text>
  <text x="230" y="206" text-anchor="middle" fill="#334155" font-size="11">Dashed circles are the holes in the mating part; &Delta;L is the centre-distance mismatch.</text>
</svg>`;

// Q figure — over-constrained shaft in two separately bored housings.
const figOverConstraint = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">One shaft, two rigidly located bearing seats</text>
  <rect x="60" y="106" width="72" height="70" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="328" y="106" width="72" height="70" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="40" y="176" width="380" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="48" y1="190" x2="38" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="98" y1="190" x2="88" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="148" y1="190" x2="138" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="198" y1="190" x2="188" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="248" y1="190" x2="238" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="298" y1="190" x2="288" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="348" y1="190" x2="338" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="398" y1="190" x2="388" y2="202" stroke="#64748b" stroke-width="1"/>
  <circle cx="96" cy="128" r="17" fill="none" stroke="#334155" stroke-width="1.4" stroke-dasharray="5 3"/>
  <circle cx="364" cy="146" r="17" fill="none" stroke="#334155" stroke-width="1.4" stroke-dasharray="5 3"/>
  <path d="M 46 128 C 170 126 250 148 414 146" fill="none" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round"/>
  <line x1="96" y1="128" x2="434" y2="128" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="428" y1="128" x2="428" y2="146" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="422" y1="128" x2="434" y2="128" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="422" y1="146" x2="434" y2="146" stroke="#dc2626" stroke-width="1.4"/>
  <text x="440" y="142" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">&delta;</text>
  <text x="96" y="98" text-anchor="middle" fill="#64748b" font-size="11">seat 1</text>
  <text x="364" y="98" text-anchor="middle" fill="#64748b" font-size="11">seat 2</text>
  <text x="230" y="76" text-anchor="middle" fill="#1d4ed8" font-size="11">shaft as assembled</text>
  <text x="230" y="220" text-anchor="middle" fill="#334155" font-size="11">Both pillow blocks are bolted rigidly to the base plate; &delta; is the bore-to-bore offset.</text>
</svg>`;

// Q figure — contributor bar chart for the "which tolerance to tighten" question.
const figContributors = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Five contributors in one 1D loop</text>
  <rect x="100" y="52" width="270" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="100" y="80" width="90" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="100" y="108" width="72" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="100" y="136" width="135" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="100" y="164" width="45" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="92" y="66" text-anchor="end" fill="#334155" font-size="11">A &plusmn;0.30</text>
  <text x="92" y="94" text-anchor="end" fill="#334155" font-size="11">B &plusmn;0.10</text>
  <text x="92" y="122" text-anchor="end" fill="#334155" font-size="11">C &plusmn;0.08</text>
  <text x="92" y="150" text-anchor="end" fill="#334155" font-size="11">D &plusmn;0.15</text>
  <text x="92" y="178" text-anchor="end" fill="#334155" font-size="11">E &plusmn;0.05</text>
  <line x1="100" y1="190" x2="380" y2="190" stroke="#334155" stroke-width="1.2"/>
  <line x1="100" y1="190" x2="100" y2="196" stroke="#334155" stroke-width="1"/>
  <line x1="190" y1="190" x2="190" y2="196" stroke="#334155" stroke-width="1"/>
  <line x1="280" y1="190" x2="280" y2="196" stroke="#334155" stroke-width="1"/>
  <line x1="370" y1="190" x2="370" y2="196" stroke="#334155" stroke-width="1"/>
  <text x="100" y="210" text-anchor="middle" fill="#64748b" font-size="11">0</text>
  <text x="190" y="210" text-anchor="middle" fill="#64748b" font-size="11">0.10</text>
  <text x="280" y="210" text-anchor="middle" fill="#64748b" font-size="11">0.20</text>
  <text x="370" y="210" text-anchor="middle" fill="#64748b" font-size="11">0.30</text>
  <text x="240" y="234" text-anchor="middle" fill="#334155" font-size="11">tolerance (&plusmn; mm)</text>
</svg>`;

// Q figure — fixed fastener: clearance hole in the cover, tapped hole in the housing.
const figFixedFast = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Bolt threaded into the housing (clearance exaggerated)</text>
  <text x="128" y="44" text-anchor="middle" fill="#64748b" font-size="11">plan view on the joint</text>
  <circle cx="112" cy="128" r="76" fill="#fff" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="6 4"/>
  <circle cx="150" cy="128" r="52" fill="#e2e8f0" stroke="#334155" stroke-width="2"/>
  <circle cx="112" cy="128" r="3.2" fill="#1d4ed8"/>
  <circle cx="150" cy="128" r="3.2" fill="#dc2626"/>
  <line x1="112" y1="128" x2="112" y2="212" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="150" y1="128" x2="150" y2="212" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="112" y1="216" x2="150" y2="216" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="112" y1="210" x2="112" y2="222" stroke="#dc2626" stroke-width="1.4"/>
  <line x1="150" y1="210" x2="150" y2="222" stroke="#dc2626" stroke-width="1.4"/>
  <text x="128" y="238" text-anchor="middle" fill="#dc2626" font-size="11">centre-to-centre offset</text>
  <text x="36" y="70" text-anchor="start" fill="#1d4ed8" font-size="11">clearance hole &#8960;H</text>
  <line x1="60" y1="76" x2="76" y2="92" stroke="#1d4ed8" stroke-width="1"/>
  <text x="222" y="98" text-anchor="start" fill="#334155" font-size="11">bolt shank</text>
  <line x1="220" y1="94" x2="192" y2="110" stroke="#334155" stroke-width="1"/>
  <line x1="248" y1="34" x2="248" y2="230" stroke="#cbd5e1" stroke-width="1"/>
  <text x="356" y="44" text-anchor="middle" fill="#64748b" font-size="11">section through the joint</text>
  <rect x="332" y="60" width="48" height="18" fill="#94a3b8" stroke="#334155" stroke-width="1.4"/>
  <rect x="342" y="78" width="28" height="98" fill="#94a3b8" stroke="#334155" stroke-width="1.4"/>
  <rect x="278" y="78" width="58" height="28" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="376" y="78" width="58" height="28" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <rect x="278" y="106" width="62" height="70" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="372" y="106" width="62" height="70" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="340" y1="114" x2="332" y2="118" stroke="#334155" stroke-width="1"/>
  <line x1="340" y1="128" x2="332" y2="132" stroke="#334155" stroke-width="1"/>
  <line x1="340" y1="142" x2="332" y2="146" stroke="#334155" stroke-width="1"/>
  <line x1="340" y1="156" x2="332" y2="160" stroke="#334155" stroke-width="1"/>
  <line x1="372" y1="114" x2="380" y2="118" stroke="#334155" stroke-width="1"/>
  <line x1="372" y1="128" x2="380" y2="132" stroke="#334155" stroke-width="1"/>
  <line x1="372" y1="142" x2="380" y2="146" stroke="#334155" stroke-width="1"/>
  <line x1="372" y1="156" x2="380" y2="160" stroke="#334155" stroke-width="1"/>
  <text x="272" y="96" text-anchor="end" fill="#334155" font-size="11">cover</text>
  <text x="272" y="146" text-anchor="end" fill="#334155" font-size="11">housing</text>
  <text x="356" y="196" text-anchor="middle" fill="#334155" font-size="11">threads cut in the housing,</text>
  <text x="356" y="212" text-anchor="middle" fill="#334155" font-size="11">clearance only in the cover</text>
  <text x="356" y="238" text-anchor="middle" fill="#64748b" font-size="10">bolt &#8960;8.00 at MMC; clearance hole &#8960;H</text>
</svg>`;

// Q figure — coupling alignment stack with mixed + / - directions.
const figCoupling = `<svg viewBox="0 0 460 266" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Motor and gearbox shafts joined by a rigid coupling</text>
  <rect x="30" y="196" width="400" height="16" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="42" y1="212" x2="32" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="92" y1="212" x2="82" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="142" y1="212" x2="132" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="192" y1="212" x2="182" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="242" y1="212" x2="232" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="292" y1="212" x2="282" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="342" y1="212" x2="332" y2="224" stroke="#64748b" stroke-width="1"/>
  <line x1="392" y1="212" x2="382" y2="224" stroke="#64748b" stroke-width="1"/>
  <rect x="60" y="182.7" width="120" height="13.3" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <rect x="60" y="58" width="120" height="124.7" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="290" y="64" width="130" height="132" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="180" y="107.7" width="20" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="270" y="107.7" width="20" height="10" fill="#dbeafe" stroke="#334155" stroke-width="1.2"/>
  <rect x="200" y="102.7" width="70" height="20" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <line x1="40" y1="112.7" x2="440" y2="112.7" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <line x1="120" y1="112.7" x2="120" y2="182.7" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="114" y1="112.7" x2="126" y2="112.7" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="114" y1="182.7" x2="126" y2="182.7" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="126" y="152" text-anchor="start" fill="#1d4ed8" font-size="12">+ a</text>
  <line x1="350" y1="112.7" x2="350" y2="196" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="344" y1="112.7" x2="356" y2="112.7" stroke="#1d4ed8" stroke-width="1.2"/>
  <line x1="344" y1="196" x2="356" y2="196" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="356" y="158" text-anchor="start" fill="#1d4ed8" font-size="12">&minus; b</text>
  <text x="52" y="194" text-anchor="end" fill="#dc2626" font-size="12">+ c</text>
  <text x="235" y="82" text-anchor="middle" fill="#dc2626" font-size="11">parallel offset</text>
  <line x1="235" y1="88" x2="235" y2="100" stroke="#dc2626" stroke-width="1"/>
  <text x="120" y="92" text-anchor="middle" fill="#64748b" font-size="11">motor</text>
  <text x="355" y="92" text-anchor="middle" fill="#64748b" font-size="11">gearbox</text>
  <text x="230" y="240" text-anchor="middle" fill="#334155" font-size="11">a = 42.0 &plusmn;0.4&nbsp;&nbsp;b = 50.0 &plusmn;0.3&nbsp;&nbsp;c = 8.0 &plusmn;0.5 (shim), mm</text>
  <text x="230" y="258" text-anchor="middle" fill="#334155" font-size="11">offset = a + c &minus; b, nominally zero</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Assembly Strategies & Tolerance Stacks",
    intro: `<p>Parts do not fail on the drawing. They fail on the bench, when every component is in spec and the last one still will not go in. Two questions decide whether a design survives a production line: <strong>how do these parts get joined</strong>, and <strong>will they actually go together</strong> once every feature sits at the wrong end of its tolerance.</p>
<p>The arithmetic of a stack-up is addition. Everything around it is judgement: which loop to close, whether worst case or RSS is honest for the process you actually have, which single tolerance is worth paying for. The hardware works the same way. Adhesives unzip in peel. The second locating pin is a diamond. A fastener nobody can reach is a fastener that never gets torqued.</p>`,
    sections: [
      {
        heading: "Choosing a joining method",
        html: `<p>There is no "best" joint, only the joint that matches the load, the service plan, and the production rate. Work through these drivers before you name a method:</p>
<ul>
<li><strong>Does it ever come apart?</strong> If a service manual says "replace the pump," the joint is bolted. Welds, rivets, and structural adhesive are permanent. Getting them off destroys parts.</li>
<li><strong>What kind of load?</strong> Shear, tension, or peel. Rivets and pins are happy in shear and poor in tension. Adhesives are strong in shear and weak in peel and cleavage. Bolts are the only common joint that carries big tension well, and only because preload keeps the interface closed.</li>
<li><strong>Dissimilar materials?</strong> Welding aluminium to steel is a metallurgical fight; brazing or adhesive bonding sidesteps it. But once two metals touch in a wet environment you own a <strong>galvanic cell</strong>. The less noble metal corrodes, and the area ratio sets how fast. A small anode next to a large cathode is the dangerous one.</li>
<li><strong>Thermal cycling?</strong> Different expansion coefficients across a stiff joint generate cyclic stress every time the machine warms up. Compliant joints (adhesive with a thick bond line, bolts through slotted holes, flexible couplings) absorb it; welds and press fits do not.</li>
<li><strong>Can you inspect it?</strong> A bolt has visible torque marks and can be re-checked. A bond line is invisible after cure, so bonded structure needs process control (surface prep, cure records) instead of inspection.</li>
<li><strong>Rate and cost.</strong> At 10 units a year a bolted joint is cheap. At 10 million a snap fit that assembles in half a second with no fastener at all wins on both piece cost and cycle time.</li>
</ul>
<figure class="fig">${figBond}<figcaption>An adhesive lap joint loaded in shear spreads load over the whole bond area. The same adhesive in peel concentrates load on a single line at the bond edge and fails at a small fraction of the load.</figcaption></figure>
<div class="callout warn"><strong>The adhesive rule:</strong> strong in shear and compression, weak in peel and cleavage. If the load peels, change the geometry so the bond sees shear: lap it, wrap it, add a flange. Or put a mechanical element at the peel front so the crack cannot start, such as a rivet, a screw, or a formed lip.</div>
<table>
<thead><tr><th>Method</th><th>Best at</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Bolted</td><td>Serviceable, high tension, adjustable</td><td>Preload loss, relaxation, part count, cost per joint</td></tr>
<tr><td>Welded</td><td>Stiff, permanent, full load transfer</td><td>Distortion, residual stress, HAZ, fatigue at the toe</td></tr>
<tr><td>Riveted</td><td>High-rate shear joints, thin sheet</td><td>Poor in tension, permanent, solid rivets need two-sided access</td></tr>
<tr><td>Adhesive</td><td>Thin or dissimilar materials, sealing, distributed load</td><td>Peel, surface prep, cure time, no inspection</td></tr>
<tr><td>Press fit</td><td>Concentric, no fastener, compact</td><td>Assembly force, relaxes hot, one-shot</td></tr>
<tr><td>Snap fit</td><td>Very high rate, zero fasteners</td><td>Creep, limited load, needs moulded parts</td></tr>
<tr><td>Brazed</td><td>Dissimilar metals, thin sections, leak-tight</td><td>Joint clearance is critical, filler strength limits</td></tr>
</tbody>
</table>`,
      },
      {
        heading: "Fits: clearance, transition, interference",
        html: `<p>A fit is the relationship between two tolerance <em>bands</em>, not between two numbers. Compare the shaft band with the hole band:</p>
<ul>
<li><strong>Clearance.</strong> Shaft band entirely below the hole band. There is always a gap. Use for anything that must rotate, slide, or simply assemble (H7/g6 for a located slip fit, H11/c11 for a bolt clearance hole).</li>
<li><strong>Transition.</strong> The bands overlap. Some pairs assemble with clearance, some with light interference. Use where you want good centring and are willing to tap the part in (H7/k6 for a located gear or a dowel).</li>
<li><strong>Interference.</strong> Shaft band entirely above the hole band. Always tight; you need force, cold, or heat to assemble (H7/p6, H7/s6 for a bearing inner ring or a hub).</li>
</ul>
<figure class="fig">${figFits}<figcaption>Fit class is decided by where the shaft band sits relative to the hole band, not by the nominal size.</figcaption></figure>
<p>An interference fit works because the hub is stretched and the shaft is squeezed, producing a contact pressure. For a solid shaft in a hub of the same material, outside diameter d<sub>o</sub>, with <em>diametral</em> interference &delta;:</p>
<p class="eq">p = E &delta; (d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) / (2 d d<sub>o</sub><sup>2</sup>)</p>
<p>That pressure buys friction, and friction is the only thing transmitting torque:</p>
<p class="eq">T = &mu; p &pi; d<sup>2</sup> L / 2</p>
<p>Read the consequences straight off the equations. Pressure is <em>linear</em> in interference, so a shaft at the bottom of its tolerance can lose almost all of its holding torque. On a &#8709;20 H7/p6 the interference ranges from 0.035 mm down to 0.001 mm, a factor of 35, with every part in spec. That is why an interference fit alone is rarely trusted for critical torque; you add a key, a spline, or a clamping element. Three other things move the answer: a <strong>thin hub</strong> (d<sub>o</sub> close to d) is compliant and generates little pressure; a <strong>rough surface</strong> loses real interference as the asperities flatten during pressing; and <strong>heat</strong> matters, because an aluminium hub on a steel shaft grows away from the shaft as the machine warms up.</p>
<div class="callout"><strong>Slip fit vs clearance hole.</strong> A slip fit (H7/g6, a few tens of microns) is a <em>locating</em> feature. It positions the part. A clearance hole (0.5&ndash;1 mm loose on a bolt) is an <em>assembly</em> feature. It exists so the bolt goes in, and it deliberately locates nothing. Confusing them is the classic drawing error: bolts through close-fit holes cannot be assembled, and dowels through clearance holes locate nothing.</div>`,
      },
      {
        heading: "Locating and constraint in assembly",
        html: `<p>A rigid body has six degrees of freedom. Locating a part means removing exactly the ones you want removed, no more. Remove a degree of freedom twice and you have <strong>over-constraint</strong>: the parts fight each other, and the assembly either will not go together or goes together carrying locked-in stress.</p>
<p>The workhorse scheme for one part on another is <strong>face plus two pins</strong>: the mating face takes three degrees of freedom, a <strong>round pin</strong> fixes position in X and Y, and a second pin fixes rotation about the first. That second pin must be a <strong>diamond pin</strong>, a round pin relieved by two flats.</p>
<figure class="fig">${figPins}<figcaption>The round pin sets position; the diamond pin sets rotation only. Its flats face along the line of centres, so centre-distance variation between the two parts is absorbed instead of jamming the pins.</figcaption></figure>
<p><strong>Why a diamond, and not a second round pin?</strong> The pin centre distance in the base and the hole centre distance in the mating part each carry a tolerance, so their difference &Delta;L is never zero. Two round pins in two round holes constrain the line-of-centres direction <em>twice</em>, so the parts bind unless you open the second hole up in <em>every</em> direction, which throws away the rotational location you wanted. The diamond pin's flats face along the line of centres, so it is free in that one direction and still tight perpendicular to it. You get rotation control without the fight. (The old-school equivalent is a round pin in a slot; a diamond pin is the same idea with the relief moved onto the pin.)</p>
<p>Over-constraint shows up everywhere once you look:</p>
<ul>
<li>Three or more dowels locating one plate. The third one will not enter.</li>
<li>A shaft in two rigidly mounted bearings. Separately machined bores never share a centreline, so the shaft is bent on assembly. Fix it with one locating and one floating bearing, a self-aligning bearing, or a flexible coupling.</li>
<li>A stiff bracket bolted to a warped casting on four pads. It rocks on three and the fourth bolt pulls the bracket into a distorted shape. Fix it by machining the pads in one setup, adding a shim, or making one pad compliant.</li>
</ul>
<p>The opposite philosophy is <strong>elastic averaging</strong>: deliberately use many redundant contacts (a spline, a bolt circle, a Hirth coupling, a bed of balls) so errors average out through elastic deformation. It gives higher stiffness and load capacity than exact constraint, and surprisingly good repeatability, but only if the contacts are numerous, identical and preloaded. <strong>Exact (kinematic) constraint</strong>, three balls in three vee-grooves, gives the best repeatability with zero locked-in stress, at the cost of low stiffness and high contact stress. Machine-tool spindles use elastic averaging; optical mounts and fixture pallets use exact constraint.</p>`,
      },
      {
        heading: "Tolerance stack-up: closing the 1D loop",
        html: `<p>A stack-up answers one question: <em>given every part at every allowed size, what happens to the gap I care about?</em> The discipline is entirely in setting up the loop; the arithmetic is trivial.</p>
<ol>
<li><strong>Name the gap.</strong> Write down the dimension you actually care about: clearance at a seal, end play on a shaft, flushness of a cover. If you cannot name it in one sentence, you are not ready to stack.</li>
<li><strong>Walk the chain.</strong> Start at one side of the gap and step through part features until you arrive at the other side. Every step must be a dimension that is actually toleranced on a drawing.</li>
<li><strong>Assign signs.</strong> Steps that move you in the positive direction get +, steps that move you back get &minus;. The loop must close: G = &Sigma;(+dimensions) &minus; &Sigma;(&minus;dimensions).</li>
<li><strong>Stack the tolerances.</strong> Signs do <em>not</em> matter here. Every link widens the gap distribution regardless of its direction in the loop.</li>
</ol>
<figure class="fig">${figLoop}<figcaption>Three parts inside a housing. The housing length runs one way (+), the three parts run back the other way (&minus;), and the loop closes on the gap G.</figcaption></figure>
<p>For the figure: G<sub>nominal</sub> = 100.00 &minus; (40.00 + 25.00 + 30.00) = 5.00 mm. The <strong>worst-case</strong> tolerance is the plain sum:</p>
<p class="eq">T<sub>wc</sub> = &Sigma; |t<sub>i</sub>| = 0.20 + 0.10 + 0.08 + 0.12 = 0.50 mm</p>
<p>so G runs from 4.50 to 5.50 mm. Reading the result is the part candidates skip:</p>
<ul>
<li><strong>G<sub>min</sub> &gt; 0</strong> &rarr; it always assembles.</li>
<li><strong>G<sub>min</sub> &lt; 0</strong> &rarr; interference is possible. Some fraction of builds will not go together, and "some fraction" on a line running 100 000 units is a recall.</li>
<li><strong>G<sub>max</sub></strong> matters too. Too much gap means rattle, leakage, lost preload, or a seal that does not seal.</li>
</ul>
<div class="callout warn"><strong>The three classic loop errors:</strong> getting the sign wrong on one link (your answer is off by twice that dimension); dropping a link because it "looks small"; and stacking dimensions that are not on the drawing. If you stack a dimension the inspector never measures, your analysis describes a part nobody makes.</div>`,
      },
      {
        heading: "Worst case vs RSS, and which tolerance to buy",
        html: `<p>Worst case assumes every part conspires against you at the same instant. That never happens with independent processes. The probability of five features all sitting at the same extreme is vanishingly small. The <strong>root-sum-square</strong> stack adds variances instead of tolerances:</p>
<p class="eq">T<sub>rss</sub> = &radic;(&Sigma; t<sub>i</sub><sup>2</sup>)</p>
<figure class="fig">${figWcRss}<figcaption>The same four-link loop. Worst case gives &plusmn;0.50 mm; RSS gives &plusmn;0.27 mm, nearly half the spread, from exactly the same drawings.</figcaption></figure>
<p>RSS is smaller because squaring punishes the small contributors: a tolerance one-third the size of another contributes one-ninth as much variance. For <em>n</em> equal tolerances the ratio is exactly &radic;n, so a five-link stack is 2.24&times; tighter by RSS than by worst case.</p>
<p><strong>What RSS assumes:</strong></p>
<ul>
<li>Each contributor is <strong>statistically independent</strong> of the others.</li>
<li>Each is <strong>centred</strong> on its nominal.</li>
<li>Each is roughly <strong>normal</strong>, with the &plusmn;t band representing about &plusmn;3&sigma; of the process.</li>
</ul>
<p>Every assumption has a real way to fail. Independence dies when several features are cut in one setup on one machine, or when parts come from one mould cavity. They share a common shift. Centring dies with tool wear, which drags the mean steadily toward one limit, and with any process deliberately set up near a limit for yield. Normality dies with sorted or 100%-inspected parts (the tails are cut off, so RSS is conservative) and with two-cavity or two-supplier lots (the distribution is bimodal, so RSS is optimistic). If any of those apply, use worst case, add a shift allowance (the classic 1.5&sigma; mean shift), or go and measure the real distributions.</p>
<p><strong>When the stack says "unmanufacturable."</strong> Worst case demanding &plusmn;0.02 mm on five parts is not a tolerance problem, it is a design problem. In rough order of what to try:</p>
<ol>
<li><strong>Reduce the number of links</strong> in the loop. Combine two parts into one machined part, or locate directly from the feature that matters instead of through three intermediates. This is the only fix that costs nothing per unit.</li>
<li><strong>Switch to RSS</strong> and justify it with capability data.</li>
<li><strong>Add adjustment</strong>: a shim, a jackscrew, an eccentric bushing, a set-at-assembly step.</li>
<li><strong>Add compliance</strong>: a slot, an oversized hole, a gasket, an O-ring, a spring washer that absorbs the variation instead of transmitting it.</li>
<li><strong>Selective assembly</strong>: measure, bin, and match parts. Effective (engine bearings and pistons are built this way) but it adds gauging, logistics, and leftover inventory.</li>
<li><strong>Only then</strong> tighten a tolerance, and tighten the <em>largest</em> contributor, not the easiest one.</li>
</ol>
<p>That last point deserves arithmetic. In an RSS stack the share of total variance owned by link <em>i</em> is t<sub>i</sub><sup>2</sup>/&Sigma;t<sub>j</sub><sup>2</sup>. A &plusmn;0.30 link among &plusmn;0.30/&plusmn;0.15/&plusmn;0.10/&plusmn;0.08/&plusmn;0.05 owns 68% of the variance; halving it drops the stack from &plusmn;0.362 to &plusmn;0.253 mm. Halving the &plusmn;0.10 link instead, often the cheap one, moves the stack to &plusmn;0.352 mm, a 3% improvement you paid real money for.</p>`,
      },
      {
        heading: "Design for assembly: sequence, access, and mistake-proofing",
        html: `<p>A design that analyses perfectly and cannot be built is a failed design. Walk the assembly in your head, in order, before you release drawings.</p>
<p><strong>Sequence and access.</strong> What has to go in first? Can it come out again for service without removing three other subassemblies? Every fastener needs a straight approach for the tool, a socket envelope around the head, and swing clearance for the wrench or driver body. A torque wrench needs far more room than a hex key. Blind fasteners need one-sided access. If the operator cannot see the joint, they cannot align it, so add a lead-in chamfer or a pilot feature. And ask the question that catches people out: <em>is this fastener still accessible after the neighbouring part is installed?</em></p>
<figure class="fig">${figCoupling}<figcaption>Alignment stacks mix directions. Motor foot-to-centreline (+a) and shim (+c) run up; gearbox foot-to-centreline (&minus;b) runs back down. Nominal offset is zero, but the tolerances never cancel.</figcaption></figure>
<p><strong>Part-count reduction.</strong> The cheapest part is the one you deleted: no drawing, no supplier, no inventory, no inspection, no assembly time. The standard test: a part earns separate existence only if it moves relative to its neighbour, must be a different material, or must be removable for service. Everything else is a candidate to be merged into a moulding or a machined body.</p>
<p><strong>Self-location and mistake-proofing (poka-yoke).</strong> Good parts hold themselves in position while the operator reaches for a screwdriver: locating bosses, snap tabs, hooks, chamfered lead-ins. Better parts <em>cannot</em> be fitted wrong. Two ways to get there:</p>
<ul>
<li>Make the part <strong>fully symmetric</strong>, so orientation does not matter at all.</li>
<li>Make it <strong>obviously and physically asymmetric</strong>: an offset dowel, a keyway, a connector that only mates one way, a hole pattern that is not symmetric. The failure mode to hunt for is the part that is <em>almost</em> symmetric: it looks reversible, assembles reversed, and fails in the field.</li>
</ul>
<p><strong>Reduce fastener variety.</strong> Five bolt sizes mean five torque specs, five tools, and five chances to grab the wrong one. Standardise on one or two.</p>
<p><strong>Compliance and float are tolerance absorbers.</strong> Slots and oversized holes let a bracket find its own position; the bolt clamps it wherever it lands. A gasket absorbs flatness error, but only where it is compressed, so bolt spacing governs: flanges bow between widely spaced bolts and leak at mid-span. Aim for a bolt every four to six bolt diameters of flange, and if you cannot achieve that, stiffen the flange or switch to an O-ring in a controlled groove, where sealing depends on groove geometry rather than on bolt-to-bolt clamp pressure.</p>
<div class="callout"><strong>Float has a cost.</strong> Every slot and oversized hole you add to swallow tolerance also throws away location. Decide, per feature, whether you are locating or clearing. Never ask one feature to do both.</div>`,
      },
    ],
    equations: [
      { name: "Loop closure", formula: "G = &Sigma;(+ dimensions) &minus; &Sigma;(&minus; dimensions)", note: "G is the gap of interest. Walk the chain from one side of the gap to the other; steps in the positive direction add, steps back subtract." },
      { name: "Worst-case stack", formula: "T<sub>wc</sub> = &Sigma; |t<sub>i</sub>|", note: "t<sub>i</sub> is the half-tolerance (the &plusmn; value) of link i. Signs are irrelevant, since every link widens the gap range. Guarantees fit, costs the most." },
      { name: "RSS stack", formula: "T<sub>rss</sub> = &radic;(&Sigma; t<sub>i</sub><sup>2</sup>)", note: "Valid when contributors are independent, centred, and roughly normal with &plusmn;t &asymp; &plusmn;3&sigma;. For n equal tolerances T<sub>wc</sub>/T<sub>rss</sub> = &radic;n." },
      { name: "Gap limits", formula: "G<sub>min</sub> = G<sub>nom</sub> &minus; T,&nbsp; G<sub>max</sub> = G<sub>nom</sub> + T", note: "T is whichever stack you chose. G<sub>min</sub> &lt; 0 means interference is possible; G<sub>max</sub> governs rattle, leakage, and lost preload." },
      { name: "Variance share of one link", formula: "share<sub>i</sub> = t<sub>i</sub><sup>2</sup> / &Sigma; t<sub>j</sub><sup>2</sup>", note: "Tells you which tolerance is worth buying. Squaring means the biggest link usually owns most of the stack; small links are nearly free." },
      { name: "Equal tolerance allocation", formula: "t = T<sub>target</sub> / &radic;n", note: "Splitting an RSS budget T<sub>target</sub> equally over n links. The worst-case equivalent is T<sub>target</sub>/n, which is &radic;n times tighter." },
      { name: "Press-fit contact pressure", formula: "p = E &delta; (d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) / (2 d d<sub>o</sub><sup>2</sup>)", note: "Solid shaft in a hub of the same material. &delta; is diametral interference, d the interface diameter, d<sub>o</sub> the hub outside diameter. p is linear in &delta;." },
      { name: "Press-fit torque capacity", formula: "T = &mu; p &pi; d<sup>2</sup> L / 2", note: "L is engagement length, &mu; the friction coefficient (0.1&ndash;0.2 for dry steel). Axial holding force is F = &mu; p &pi; d L." },
      { name: "Thermal loss of interference", formula: "&Delta;&delta; = d (&alpha;<sub>hub</sub> &minus; &alpha;<sub>shaft</sub>) &Delta;T", note: "An aluminium hub (&alpha; &asymp; 23 &mu;m/m&middot;K) on a steel shaft (&alpha; &asymp; 12) loses interference as it heats. Check the fit hot, not just at 20 &deg;C." },
      { name: "Floating-fastener clearance", formula: "H = F + T", note: "Both plates have clearance holes, so the bolt floats and <em>each</em> plate gets the full T = H &minus; F of diametral position tolerance. If one plate is tapped the fastener is fixed and the budget is shared: T = (H &minus; F)/2 each. H is hole diameter at MMC, F the fastener diameter at MMC." },
    ],
    interviewTips: [
      "Before touching arithmetic, say the gap out loud and draw the loop with + and - arrows. The loop is what gets scored, not the addition.",
      "Never quote an RSS number without naming its three assumptions (independent, centred, roughly normal) and one way they could fail here - shared setup, tool wear, one mould cavity.",
      "When a stack fails, reach for fewer links, adjustment, or compliance before you reach for tighter tolerances. Tightening is the expensive answer, and everyone in the room knows it.",
      "Know the diamond-pin answer cold: it avoids over-constraint from centre-distance variation while still fixing rotation. It comes up in almost every mechanical design screen.",
      "For any bonded joint, immediately ask how the load reaches the bond. If any of it peels or cleaves, redesign the geometry or add a mechanical stop at the peel front.",
      "Finish every assembly answer with the build story: what goes in first, which tool reaches the fastener, and how it comes apart for service.",
    ],
  },

  questions: [
    {
      id: "assembly-strategies-q01",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>Four spacers, each <strong>10.00 &plusmn; 0.10 mm</strong> long, stack end to end inside a bore whose depth is <strong>40.50 &plusmn; 0.20 mm</strong> (see figure). Working worst case, what is the <em>largest</em> leftover gap G, in mm?</p>`,
      figure: figSpacers,
      answer: 1.1,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>Loop: G = bore &minus; (4 &times; spacer). Nominal G = 40.50 &minus; 40.00 = 0.50 mm.</p>
<p>The gap is largest when the bore is at maximum and every spacer is at minimum:</p>
<p class="eq">G<sub>max</sub> = 40.70 &minus; 4(9.90) = 40.70 &minus; 39.60 = <strong>1.10 mm</strong></p>
<p>Or sum the half-tolerances: T<sub>wc</sub> = 0.20 + 4(0.10) = 0.60 mm, so G = 0.50 &plusmn; 0.60 mm.</p>
<p>Five toleranced links against 0.50 mm of nominal gap. The tolerance dominates the nominal, and at the other extreme the gap goes negative.</p>`,
    },
    {
      id: "assembly-strategies-q02",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Same hardware as the previous question. Manufacturing asks whether every build will go together. Using a worst-case stack, how tight can G get, and what does that mean for assembly?</p>`,
      figure: figSpacers,
      choices: [
        "&minus;0.10 mm &mdash; interference is possible, so some builds jam",
        "+0.10 mm &mdash; it always fits; the bore tolerance drops out of the loop",
        "+0.22 mm &mdash; it always fits, since RSS is the honest stack here",
        "+0.50 mm &mdash; it always fits; the &plusmn; tolerances cancel in the loop",
      ],
      answer: 0,
      explanation: `<p>Worst case for the minimum gap is the smallest bore against the longest spacers:</p>
<p class="eq">G<sub>min</sub> = 40.30 &minus; 4(10.10) = 40.30 &minus; 40.40 = <strong>&minus;0.10 mm</strong></p>
<p>A negative minimum gap means the stack can interfere. Every part is individually in spec and the assembly still will not close. That is the failure that shows up as a line stoppage rather than a scrapped part.</p>
<p>The distractors are the three standard errors. <strong>+0.10</strong> comes from stacking only the spacers and forgetting the bore tolerance. <strong>+0.22</strong> is the RSS answer (0.50 &minus; &radic;0.08 = 0.217), which is not what worst case asked for. <strong>+0.50</strong> is the nominal, which assumes tolerances vanish.</p>
<p>So what do you do about it? Fewer links (one machined spacer instead of four), a shim, opening the bore nominal to 40.9, or justifying an RSS stack with capability data.</p>`,
    },
    {
      id: "assembly-strategies-q03",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The same four 10.00 &plusmn; 0.10 spacers sit in the 40.50 &plusmn; 0.20 bore, but the supplier has now shown you capability data: every feature is centred and independently produced. Using an RSS stack, what is the minimum gap in mm at 3&sigma;?</p>`,
      answer: 0.217,
      unit: "mm",
      tolerance: 0.05,
      explanation: `<p>RSS adds variances, not tolerances:</p>
<p class="eq">T<sub>rss</sub> = &radic;(0.20<sup>2</sup> + 4 &times; 0.10<sup>2</sup>) = &radic;(0.0400 + 0.0400) = &radic;0.0800 = 0.2828 mm</p>
<p class="eq">G<sub>min</sub> = 0.50 &minus; 0.2828 = <strong>0.2172 &asymp; 0.217 mm</strong></p>
<p>The gap that was negative by worst case is comfortably positive by RSS, on identical drawings. That is the whole appeal, and the whole danger.</p>
<p>Be ready to say what you assumed: independence, centred means, and roughly normal distributions with &plusmn;0.10 &asymp; 3&sigma;. If the four spacers are four pieces parted off one bar in one setup they are not independent, and this number is fiction. Note too that the bore alone owns 0.0400 of the 0.0800 total, so tightening any one spacer barely moves the answer.</p>`,
    },
    {
      id: "assembly-strategies-q04",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You justified a design with an RSS stack. Six months later the line reports a 3% no-build rate on that joint. Which finding would <em>most</em> directly explain why the RSS prediction was optimistic?</p>`,
      choices: [
        "The parts are 100% inspected and everything outside the limits is scrapped before assembly",
        "One link in the loop carries a tolerance three times larger than any other link",
        "Three links are cut in one setup on a machine whose fixture has drifted",
        "The loop has seven links in it, not the four you analysed at concept",
      ],
      answer: 2,
      explanation: `<p>RSS rests on three assumptions: contributors are <strong>independent</strong>, <strong>centred</strong> on nominal, and roughly <strong>normal</strong> with &plusmn;t &asymp; 3&sigma;. A shared setup breaks the first two at once. A drifted fixture shifts three links in the same direction at the same time, so their errors add like a worst-case stack instead of partially cancelling. Common-cause coupling is the number-one reason real RSS predictions come up short.</p>
<p>The other options do not explain optimism. <strong>100% inspection</strong> truncates the tails, which makes RSS <em>conservative</em>, not optimistic. <strong>One dominant link</strong> is fine for RSS. It simply means that link owns most of the variance, and the more one link dominates, the closer RSS gets to worst case anyway. <strong>More links</strong> would change the number, but that is an analysis-scope error, not a statistical-assumption failure.</p>
<p>Practical response: measure the real distributions, add a mean-shift allowance (the classic 1.5&sigma;), or re-run the loop as worst case for the correlated group and RSS for the rest.</p>`,
    },
    {
      id: "assembly-strategies-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The aluminium L-bracket shown is bonded flat to a panel with a structural epoxy. The service load F is horizontal at the top of the 80 mm upright, and the bond is failing in the field at about a fifth of the load the shear-strength calculation predicted. What is the best first change?</p>`,
      figure: figPeelBracket,
      choices: [
        "Specify a tougher epoxy with double the lap-shear rating",
        "Double the bonded overlap from 60 mm to 120 mm so the area doubles",
        "Triple the bond-line thickness so the adhesive layer can flex",
        "Add a return flange at the loaded edge so the bond sees shear",
      ],
      answer: 3,
      explanation: `<p>Draw the load path. F acting 80 mm above the bond plane is a moment F &times; 80 on the joint. That moment lifts one edge of the foot and drives the bond in <strong>peel</strong>, where stress concentrates on a single line at the bond edge instead of spreading over the area. Adhesives are typically an order of magnitude weaker in peel than in shear, which is exactly the factor-of-five shortfall reported.</p>
<p>Since the problem is the <em>direction</em> of loading, only a geometry change fixes it: wrap the bond up the vertical face, add a gusset or return flange that turns the moment into a shear couple, or put a rivet or screw at the peel front so the crack cannot initiate. A mechanical stop at the leading edge is often the cheapest structural fix.</p>
<p>The distractors all keep the peel. A <strong>stronger epoxy</strong> is rated in lap shear and buys little peel strength. <strong>Doubling the overlap</strong> adds almost nothing, because peel load never reaches the far end of the bond. It unzips from the edge. A <strong>thicker bond line</strong> lowers peel stress slightly but also lowers shear strength and stiffness.</p>`,
    },
    {
      id: "assembly-strategies-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A &#8709;20 H7/p6 press fit has hole limits 20.000 / 20.021 mm and shaft limits 20.022 / 20.035 mm. What is the maximum diametral interference, in mm?</p>`,
      answer: 0.035,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>Maximum interference pairs the largest shaft with the smallest hole.</p>
<p class="eq">&delta;<sub>max</sub> = 20.035 &minus; 20.000 = <strong>0.035 mm</strong></p>
<p>The other end pairs the smallest shaft with the largest hole: &delta;<sub>min</sub> = 20.022 &minus; 20.021 = 0.001 mm.</p>
<p>That 35:1 spread is the point. Contact pressure is linear in interference, so a joint sized on nominal interference can deliver a thirty-fifth of the expected holding torque on a bad pair. Interference fits <em>locate</em> and share load. Critical torque goes through a key, a spline, or a clamping element that does not depend on where the parts landed in their bands.</p>`,
    },
    {
      id: "assembly-strategies-q07",
      type: "mc",
      difficulty: 2,
      prompt: `<p>On that same &#8709;20 H7/p6 joint, a batch of shafts runs at the bottom of the p6 band while the hubs run at the top of H7. Torque is transmitted by friction alone. What happens?</p>`,
      choices: [
        "Torque capacity falls by roughly 3%, since the diameter change is only 0.07%",
        "Torque capacity falls by a factor of about 35, tracking the loss of interference",
        "Torque capacity is unchanged, because friction depends on the coefficient, not on pressure",
        "The joint becomes a clearance fit and transmits no torque at all",
      ],
      answer: 1,
      explanation: `<p>Chain the two relationships. Contact pressure is linear in interference, p = E&delta;(d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>)/(2 d d<sub>o</sub><sup>2</sup>), and torque capacity is linear in pressure, T = &mu; p &pi; d<sup>2</sup> L / 2. So T &prop; &delta;. Interference falls from 0.035 mm to 0.001 mm, a factor of 35, and torque capacity falls with it.</p>
<p>The distractors are the interesting part. <strong>0.07%</strong> is the change in <em>diameter</em>; the joint does not care about diameter, it cares about interference, which is a difference of two nearly equal numbers and therefore hugely sensitive. <strong>Unchanged</strong> confuses the friction coefficient with the friction force. F = &mu;N still needs N. <strong>Clearance fit</strong> is wrong because p6 against H7 is interference across the whole band by construction; the minimum is small, but never negative.</p>
<p>Surface finish makes it worse still, since roughness peaks flatten during pressing and a rough shaft loses several microns of effective interference before it ever sees load.</p>`,
    },
    {
      id: "assembly-strategies-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A steel hub of 40 mm outside diameter is pressed onto a solid steel shaft at a &#8709;20 mm interface with a diametral interference of <strong>0.032 mm</strong>. Take E = 200 GPa for both parts. What is the contact pressure at the interface, in MPa?</p>`,
      answer: 120,
      unit: "MPa",
      explanation: `<p>For a solid shaft in a hub of the same material, with diametral interference &delta;:</p>
<p class="eq">p = E &delta; (d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) / (2 d d<sub>o</sub><sup>2</sup>)</p>
<p>Substituting E = 200 000 MPa, &delta; = 0.032 mm, d = 20 mm, d<sub>o</sub> = 40 mm:</p>
<p class="eq">p = 200000 (0.032)(40<sup>2</sup> &minus; 20<sup>2</sup>) / (2 &times; 20 &times; 40<sup>2</sup>) = (6400)(1200) / 64000 = <strong>120 MPa</strong></p>
<p>120 MPa is a serious fraction of steel's yield, which is why press fits are limited by hub hoop stress and not by the press. Hub tangential stress at the bore is roughly p(d<sub>o</sub><sup>2</sup> + d<sup>2</sup>)/(d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) = 120(2000/1200) = 200 MPa, fine for alloy steel and marginal for cast iron.</p>
<p>Watch the geometry term: a thin hub (d<sub>o</sub> approaching d) drives (d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) toward zero and the pressure collapses. Thin-walled hubs simply cannot hold a press fit.</p>`,
    },
    {
      id: "assembly-strategies-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>That same &#8709;20 mm interference joint has 30 mm of engagement length and a friction coefficient of 0.15 at the interface, with a contact pressure of 120 MPa. What torque can the fit transmit before it slips, in N&middot;m?</p>`,
      answer: 339,
      unit: "N&middot;m",
      explanation: `<p>Friction acts over the cylindrical interface at radius d/2:</p>
<p class="eq">T = &mu; p (&pi; d L)(d/2) = &mu; p &pi; d<sup>2</sup> L / 2</p>
<p class="eq">T = 0.15 (120)(&pi;)(20<sup>2</sup>)(30) / 2 = 0.15 &times; 120 &times; 18850 = 339 000 N&middot;mm = <strong>339 N&middot;m</strong></p>
<p>Keep the two factors of d straight: one comes from the contact area &pi;dL, the other from the moment arm d/2, so torque goes as d<sup>2</sup>. Halving the diameter cuts capacity by four, not by two.</p>
<p>Now the engineering judgement. This number assumes the &delta; = 0.032 mm given. At the &#8709;20 H7/p6 band minimum of 0.001 mm the interference is 32 times smaller, so capacity falls to roughly 10 N&middot;m (339 &times; 0.001/0.032 = 10.6). And &mu; is not a constant. It depends on surface finish, on lubricant left over from pressing, and on whether the joint was assembled by press or by shrink (thermal assembly avoids scuffing and typically gives higher friction). Design to the minimum interference, or add a key.</p>`,
    },
    {
      id: "assembly-strategies-q10",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A machined plate is located on a base by a flat face and two pins. The first pin is round. Why is the second pin a diamond pin rather than a second round pin?</p>`,
      figure: figPinCompare,
      choices: [
        "It is cheaper to grind than a round pin held to the same tolerance",
        "The flats vent trapped air, so the pin can enter a blind hole cleanly",
        "Its flats free the line of centres, so centre-distance error cannot jam it",
        "Removing material raises the projected bearing area, so it carries more shear",
      ],
      answer: 2,
      explanation: `<p>The pin centre distance in the base and the hole centre distance in the plate each carry a tolerance, so their difference &Delta;L is never exactly zero. Two round pins in two round holes constrain the line-of-centres direction <em>twice</em>. That is over-constraint, and the parts bind.</p>
<p>The diamond pin is a round pin relieved by two flats. The flats face <strong>along the line of centres</strong>, so the pin is free in that one direction while its remaining lands still fix the perpendicular direction. Result: the round pin sets position, the diamond sets rotation, nothing is constrained twice, and &Delta;L is absorbed.</p>
<p>Opening the second hole into a slot achieves the same thing with the relief on the hole instead of the pin. Note what you must <em>not</em> do: simply enlarging the second round hole frees every direction equally and throws away the rotational location you wanted.</p>
<p>Each distractor is wrong on a specific point. A diamond pin is a ground pin <em>plus</em> two extra grinding operations, so it costs more, not less. Venting a blind hole is a real concern, but it is solved with a relief groove or a vent hole in the base, not by flatting the locating lands. And removing material can only <em>reduce</em> projected bearing area. A diamond pin carries less shear than the round pin it replaces, which is exactly why the round pin is the one placed at the primary load path.</p>`,
    },
    {
      id: "assembly-strategies-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A designer insists on <em>two round</em> dowel pins. The pin centre distance in the base is toleranced &plusmn;0.10 mm and the hole centre distance in the mating plate is &plusmn;0.15 mm. The first pin/hole pair is a close fit and locates the part. What diametral clearance must the <strong>second</strong> hole have over its pin so assembly is always possible, in mm?</p>`,
      answer: 0.5,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>Worst-case centre-distance mismatch is the sum of the two tolerances:</p>
<p class="eq">&Delta;L<sub>max</sub> = 0.10 + 0.15 = 0.25 mm</p>
<p>The first pair pins the part down, so the entire mismatch has to be swallowed at the second hole. A hole with diametral clearance c lets its centre sit anywhere within a radius c/2 of the pin, so we need c/2 &ge; 0.25:</p>
<p class="eq">c &ge; 2(0.25) = <strong>0.50 mm</strong></p>
<p>Halving the mismatch instead of doubling it gives 0.25. Clearance is a diameter, offset is a radius.</p>
<p>Now look at what that 0.50 mm costs. The hole is loose by 0.50 mm in <em>every</em> direction, including perpendicular to the line of centres, so the plate can now rotate by roughly 0.25 mm over the pin spacing, and the rotational location the second pin was supposed to provide is gone. That is precisely the trade the diamond pin removes: it relieves only along the line of centres and stays tight across it.</p>`,
    },
    {
      id: "assembly-strategies-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A shaft runs in two deep-groove ball bearings, each in a rigidly bolted pillow block on the same base plate (see figure). The bores are machined in separate operations. Bearings are failing early with an inner-ring fracture pattern and the shaft runs hot. What is the most likely root cause and fix?</p>`,
      figure: figOverConstraint,
      choices: [
        "The bearings are undersized for the radial load; step up one bore size",
        "The shaft is over-constrained by two rigid seats; let one bearing float",
        "Lubricant viscosity is too low at temperature; move to a heavier grade oil",
        "The shaft runs near its first bending critical; increase the shaft diameter",
      ],
      answer: 1,
      explanation: `<p>Two rigidly located bearings on one shaft constrain the same degrees of freedom twice. The two bores are produced in separate setups, so their centrelines are offset by some &delta; and are not parallel. Bolting everything down forces the shaft to bend into the misalignment, and the bearings carry a steady moment they were never designed for. A deep-groove ball bearing tolerates only a few minutes of arc. The result is edge loading on the raceways, heat, and early fracture: exactly the symptoms described.</p>
<p>The fixes are all constraint fixes: make one bearing the locating bearing and let the other float axially and radially, use a self-aligning ball or spherical roller bearing at one end, line-bore both housings in a single setup so the bores share a centreline, or add a flexible coupling if the misalignment comes from a driven machine.</p>
<p>The distractors are the "more capacity" reflex. A bigger bearing carries more <em>radial</em> load but is <em>less</em> tolerant of misalignment. Heavier oil treats a symptom. Critical speed produces speed-dependent vibration, not the steady edge-loading pattern seen here.</p>`,
    },
    {
      id: "assembly-strategies-q13",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A fixture pallet must return to the same position on a machine table to within 2 &mu;m, thousands of times, and carries only a light workpiece. A colleague proposes bolting it down on four ground pads with two dowels. What would you propose instead, and why?</p>`,
      choices: [
        "Add two more dowels so the pallet is located in more directions and cannot shift",
        "Grind the four pads coplanar within 1 &mu;m and ream both dowel holes to H6, keeping the scheme",
        "Use a magnetic chuck so no mechanical location is needed and errors cannot accumulate",
        "Use an exactly constrained kinematic coupling &mdash; three balls in three vee-grooves",
      ],
      answer: 3,
      explanation: `<p>Repeatability is set by whether the part has a unique seating position. Four pads plus two dowels is <strong>over-constrained</strong>: the pallet can rock between three of the four pads, and which three it picks depends on dirt, clamping order, and thermal state. That indeterminacy is exactly the few-micron scatter you are trying to eliminate, and tighter tolerances do not remove it. They only make the scatter smaller while leaving it non-repeatable.</p>
<p>Three balls in three vee-grooves removes exactly six degrees of freedom with six point contacts. There is one and only one seating position, so repeatability of 0.1&ndash;1 &mu;m is routine and no stress is locked in. The trade is low stiffness and high Hertzian contact stress, acceptable here because the load is light.</p>
<p><strong>More dowels</strong> makes the over-constraint worse. <strong>Tighter tolerances</strong> attack the wrong variable. A <strong>magnetic chuck</strong> supplies clamping force but no location at all. The pallet lands wherever you put it.</p>
<p>If the pallet carried heavy cutting loads, exact constraint would deflect too much and you would switch to <strong>elastic averaging</strong>: many identical preloaded contacts such as a curvic or Hirth coupling, trading a little repeatability for a lot of stiffness.</p>`,
    },
    {
      id: "assembly-strategies-q14",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A five-link 1D loop has half-tolerances A = &plusmn;0.30, B = &plusmn;0.10, C = &plusmn;0.08, D = &plusmn;0.15, E = &plusmn;0.05 mm (see figure). You have budget to halve exactly one tolerance. Halving the one that helps most, what is the new RSS stack in mm?</p>`,
      figure: figContributors,
      answer: 0.253,
      unit: "mm",
      tolerance: 0.04,
      explanation: `<p>Start from the current stack:</p>
<p class="eq">T<sub>rss</sub> = &radic;(0.30<sup>2</sup> + 0.10<sup>2</sup> + 0.08<sup>2</sup> + 0.15<sup>2</sup> + 0.05<sup>2</sup>) = &radic;0.1314 = 0.3625 mm</p>
<p>Variance shares: A owns 0.0900/0.1314 = 68.5%, D 17.1%, B 7.6%, C 4.9%, E 1.9%. A dominates, so halve A to &plusmn;0.15:</p>
<p class="eq">T<sub>rss</sub> = &radic;(0.15<sup>2</sup> + 0.10<sup>2</sup> + 0.08<sup>2</sup> + 0.15<sup>2</sup> + 0.05<sup>2</sup>) = &radic;0.0639 = <strong>0.2528 &asymp; 0.253 mm</strong></p>
<p>That is a 30% reduction in the stack. Compare with halving B, the tempting cheap link: &radic;0.1239 = 0.352 mm, a 3% improvement. Same engineering effort, ten times less benefit.</p>
<p>The general rule falls straight out of the squares: in an RSS stack, effort should follow t<sup>2</sup>, not t. Anything contributing under about 10% of the variance is effectively free, and should be loosened rather than tightened if that saves cost elsewhere.</p>`,
    },
    {
      id: "assembly-strategies-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A worst-case stack over five machined links says you need &plusmn;0.02 mm on each to hold the required gap. Your shop's routine capability is &plusmn;0.05 mm. Which response gets you the furthest at the lowest recurring cost?</p>`,
      choices: [
        "Move the whole assembly to a grinding process so &plusmn;0.02 mm becomes routine",
        "Redesign so the loop has two links instead of five, and add a shim to absorb what is left",
        "Keep the drawings and 100%-inspect, scrapping the parts that fall outside &plusmn;0.02 mm",
        "Re-run the analysis as RSS and release the drawings with the &plusmn;0.05 mm tolerances",
      ],
      answer: 1,
      explanation: `<p>Shortening the loop is the only fix that removes variation instead of paying to control it, and it costs nothing per unit. Two links at &plusmn;0.05 stack to &plusmn;0.10 worst case instead of &plusmn;0.25, and a shim or an adjustment step then absorbs the remainder at assembly. Combining parts, locating directly from the functional feature, and machining mating faces in one setup all shorten loops.</p>
<p>The others each carry a real cost or risk. <strong>Grinding everything</strong> works but multiplies unit cost and cycle time on five parts forever. <strong>100% inspection with scrap</strong> converts a design problem into a yield problem. At &plusmn;0.05 capability against a &plusmn;0.02 limit you would scrap most of what you make. <strong>Switching to RSS</strong> is legitimate <em>only</em> with capability data showing the links are independent and centred, and even then it is a statement about most assemblies, not all. Released blind, it is how you get a 3% no-build rate.</p>
<p>Have the full menu ready: fewer links, adjustment or shim, added compliance (slot, oversized hole, gasket), selective assembly, RSS with data, and only then tighter tolerances on the biggest contributor.</p>`,
    },
    {
      id: "assembly-strategies-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A flat-gasket flange seals fine on the test bench but weeps in service. The bolts are M10, spaced 200 mm apart around the flange, and the flange plate is 10 mm thick. What is the failure mode, and what would you change first?</p>`,
      choices: [
        "The flange bows between bolts, so gasket pressure drops at mid-span; add bolts or stiffen the flange",
        "The bolts are yielding at the thread root, so clamp is lost; move to a higher-strength bolt grade",
        "The gasket is too thick to conform to the surface; specify a thinner gasket of the same material",
        "The bolts are over-torqued and crushing the gasket; reduce the torque specification",
      ],
      answer: 0,
      explanation: `<p>Clamp force enters the joint at discrete points. Between widely spaced bolts the flange acts as a beam and bows away from the gasket, so contact pressure peaks at the bolts and collapses mid-span. Sealing needs a minimum gasket stress everywhere around the perimeter, so it leaks where the pressure dips, and it leaks <em>in service</em> rather than on the bench because pressure, temperature, and gasket creep all eat the remaining margin.</p>
<p>Bolt spacing wants to be every four to six bolt diameters. At M10 that is 40&ndash;60 mm; 200 mm is three to five times too far apart. Fixes in order: more bolts, a thicker or ribbed flange, or move to an O-ring in a machined groove, where sealing depends on groove geometry and squeeze rather than on bolt-to-bolt clamp pressure.</p>
<p>The distractors mistake symptom for cause. Bolt <strong>grade</strong> raises the force available per bolt but does not fix the pressure distribution between them. A <strong>thinner gasket</strong> conforms <em>less</em> and makes bowing worse. <strong>Reducing torque</strong> lowers gasket stress everywhere, which is the opposite of what a weeping joint needs.</p>`,
    },
    {
      id: "assembly-strategies-q17",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You are reviewing a gearbox layout. A cap screw sits at the bottom of a 60 mm deep pocket with 30 mm of clear space around its head, and it must be torqued to 45 N&middot;m. Which check would you insist on before signing the drawing?</p>`,
      choices: [
        "That the screw's proof load exceeds the 45 N&middot;m torque requirement",
        "That thread engagement is at least one diameter at the base of the pocket",
        "That the socket, extension and wrench have swing clearance in the pocket",
        "That the pocket is wide enough for a gloved hand around the screw head",
      ],
      answer: 2,
      explanation: `<p>A torque spec is a promise that someone can actually apply that torque. The physical envelope is a chain of three requirements, and all three have to fit: the <strong>socket outside diameter</strong> plus clearance inside the 30 mm of side space; an <strong>extension</strong> long enough to bridge the 60 mm depth; and <strong>swing clearance</strong> for the ratchet or torque wrench head, which is the one people forget. A click-type torque wrench needs a substantial arc, far more than a hex key. If the handle fouls a wall after 20&deg; of swing, the joint gets torqued in tiny increments or, more likely, not properly at all.</p>
<p>The distractors are each a real check aimed at the wrong failure. Screw <strong>proof load</strong> is a strength question, and a torque in N&middot;m is not even dimensionally comparable to a load in N. <strong>Thread engagement</strong> of one diameter is a genuine requirement on the tapped hole, but it governs whether the threads strip, not whether a tool can reach the head. A <strong>gloved hand</strong> is the right instinct with the wrong criterion. The tool envelope is larger than the hand, so clearing the hand proves nothing.</p>
<p>Worth asking before you sign the drawing: after the neighbouring subassembly is installed, is this screw still reachable for service?</p>`,
    },
    {
      id: "assembly-strategies-q18",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A cover is fastened to a housing with M8 bolts (&#8960;8.00 mm at maximum material) that thread into <strong>tapped</strong> holes in the housing, so the bolt cannot shift sideways &mdash; a <em>fixed</em> fastener. The shop will hold the tapped pattern to &#8960;0.30 position at MMC and the drilled cover pattern to &#8960;0.50, and neither number is negotiable. What is the smallest clearance hole the cover can carry and still always assemble, in mm?</p>`,
      figure: figFixedFast,
      answer: 8.8,
      unit: "mm",
      tolerance: 0.005,
      explanation: `<p>Work from the bolt outward. Its axis sits wherever the tapped hole was actually cut, and a diametral position tolerance T lets a centre stray T/2 from true position. Worst case the two centres run apart in opposite directions:</p>
<p class="eq">max centre-to-centre offset = 0.30/2 + 0.50/2 = 0.400 mm</p>
<p>The bolt still has to pass through the cover hole, so the clearance hole must offer at least that much radius of slack, (H &minus; F)/2 &ge; 0.400:</p>
<p class="eq">H = F + T<sub>tapped</sub> + T<sub>cover</sub> = 8.00 + 0.30 + 0.50 = <strong>8.80 mm</strong></p>
<p>That is the general <strong>fixed</strong>-fastener relation; the textbook form H = F + 2T is just the equal-split case of it. Check it: a &#8960;8.80 hole on a &#8960;8.00 bolt gives 0.40 mm of radial slack, exactly the 0.40 mm the two patterns can generate between them.</p>
<p>Now the design conversation, which is the real answer. Had this been a through-bolt and nut, a <strong>floating</strong> fastener, the bolt could re-centre itself between the two holes, so each plate would get the full H &minus; F and the condition becomes T<sub>1</sub> + T<sub>2</sub> &le; 2(H &minus; F), i.e. H &ge; 8.40 mm. Tapping the housing costs you 0.40 mm of hole diameter, which on a cramped flange is edge distance you may not have. And note what this joint does <em>not</em> give you: a bolt in an 0.80 mm oversize hole locates nothing, so if the cover has to be positioned as well as clamped, add a dowel.</p>`,
    },
    {
      id: "assembly-strategies-q19",
      type: "mc",
      difficulty: 2,
      prompt: `<p>An aluminium bracket is fastened to an aluminium chassis with 316 stainless steel bolts and washers. The assembly lives outdoors near the coast. A reviewer flags galvanic corrosion. What is the correct read?</p>`,
      choices: [
        "The risk is negligible because both structural members are the same aluminium alloy",
        "The stainless bolts will corrode first, so specify a sacrificial coating on the fastener",
        "The risk is severe: the large stainless cathode drives rapid attack of the aluminium bracket",
        "Aluminium corrodes around the fasteners, but the area ratio keeps the rate low",
      ],
      answer: 3,
      explanation: `<p>Two things set galvanic damage: which metal is less noble, and the <strong>area ratio</strong>. Aluminium sits well below stainless in the galvanic series, so aluminium is the anode and corrodes while the stainless is the cathode and is protected. That immediately kills the second option.</p>
<p>The area ratio is what makes the answer benign here. The galvanic current is driven by the cathode area and consumed at the anode area. A <strong>small cathode</strong> (bolt heads and washers) next to a <strong>large anode</strong> (bracket and chassis) spreads the corrosion current over a lot of aluminium, so local penetration is slow. The dangerous configuration is the reverse: small aluminium fasteners in a large stainless plate, which eats the fasteners quickly. That is why "stainless fasteners into aluminium" is normal marine practice while "aluminium fasteners into stainless" is not.</p>
<p>The first option is wrong because same-alloy members do not stop the fastener forming a couple. Salt spray still supplies the electrolyte, so good practice is a sealant or insulating washer under the head, an anodised or primed faying surface, and drainage so water cannot sit in the joint.</p>`,
    },
    {
      id: "assembly-strategies-q20",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A steel shaft is interference-fitted into an aluminium hub at a &#8709;60 mm interface, assembled at 20 &deg;C. In service the joint reaches 100 &deg;C. Take &alpha;<sub>Al</sub> = 23 &times; 10<sup>&minus;6</sup>/K and &alpha;<sub>steel</sub> = 12 &times; 10<sup>&minus;6</sup>/K. How much diametral interference is lost, in mm?</p>`,
      answer: 0.0528,
      unit: "mm",
      explanation: `<p>Both parts grow, but the aluminium hub grows faster, so the bore opens away from the shaft. The lost interference is the difference in diametral growth:</p>
<p class="eq">&Delta;&delta; = d (&alpha;<sub>hub</sub> &minus; &alpha;<sub>shaft</sub>) &Delta;T</p>
<p class="eq">&Delta;&delta; = 60 (23 &minus; 12) &times; 10<sup>&minus;6</sup> (100 &minus; 20) = 60 &times; 11 &times; 10<sup>&minus;6</sup> &times; 80 = <strong>0.0528 mm</strong></p>
<p>Now put that in context. ISO 286 over the 50&ndash;80 mm band gives H7 = 60.000/60.030 and p6 = 60.032/60.051, so the fit has a maximum interference of 60.051 &minus; 60.000 = 0.051 mm and a minimum of 60.032 &minus; 60.030 = 0.002 mm. Losing 0.053 mm to temperature is more than the <em>maximum</em> the fit ever had: at 100 &deg;C the joint is loose for <strong>every</strong> part in the band, not just the bad ones. Size it hot, change the hub material, or add a key.</p>
<p>Two design consequences. First, always check an interference fit at its hot extreme <em>and</em> at its minimum interference, not at nominal and room temperature. Second, this asymmetry is exploited deliberately: the same physics is what lets you heat an aluminium hub to drop it onto a steel shaft, and it is why the joint must be sized to stay tight at the highest service temperature it will ever see.</p>`,
    },
    {
      id: "assembly-strategies-q21",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A motor and a gearbox are joined by a rigid coupling (see figure). Motor foot to shaft centreline a = 42.0 &plusmn; 0.4 mm; gearbox foot to shaft centreline b = 50.0 &plusmn; 0.3 mm; the motor sits on a shim plate c = 8.0 &plusmn; 0.5 mm. Nominal offset is zero. Assuming independent, centred processes, what is the 3&sigma; RSS parallel misalignment, in mm?</p>`,
      figure: figCoupling,
      answer: 0.707,
      unit: "mm",
      explanation: `<p>Close the loop first. Walking from the base up to the motor centreline and back down to the gearbox centreline:</p>
<p class="eq">offset = a + c &minus; b = 42.0 + 8.0 &minus; 50.0 = 0.00 mm</p>
<p>Note the mixed signs: a and c carry you up, b brings you back down. Signs matter for the nominal but <em>not</em> for the tolerance. Every link widens the distribution regardless of direction. That is the single most common error on this question: subtracting the b tolerance and getting &plusmn;0.6.</p>
<p class="eq">T<sub>rss</sub> = &radic;(0.4<sup>2</sup> + 0.5<sup>2</sup> + 0.3<sup>2</sup>) = &radic;0.50 = <strong>0.707 mm</strong></p>
<p>Worst case, for comparison, is 0.4 + 0.5 + 0.3 = 1.2 mm.</p>
<p>Now the engineering call. A rigid coupling typically wants parallel offset under about 0.05 mm; even the RSS figure is an order of magnitude beyond that. So the design is wrong regardless of which stack you believe: either use a flexible coupling, or align at assembly with measured shims and dial or laser alignment rather than relying on machined-in accuracy. Alignment stacks are almost always solved by adjustment, not by tolerance.</p>`,
    },
    {
      id: "assembly-strategies-q22",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A consumer product housing is going into production at 2 million units a year. The two half-shells must stay closed for the product's life, but a service centre needs to open them to replace a battery pack. What joining scheme fits best?</p>`,
      choices: [
        "Ultrasonic welding, which is fast and gives a sealed permanent joint at this volume",
        "Structural adhesive around the perimeter, cured in line to seal and bond in one step",
        "Releasable snap fits with a service access feature, plus a few screws at high-load points",
        "Self-tapping screws throughout, so the housing can be opened and closed repeatedly",
      ],
      answer: 2,
      explanation: `<p>Two requirements are in tension: 2 million units a year rewards zero-fastener assembly, while serviceability forbids a permanent joint. Snap fits win the rate argument outright: no fastener, no tool, sub-second assembly. And <em>releasable</em> snaps with a defined release feature for a service tool satisfy the service requirement. Adding a few screws where the load is genuinely high covers the snaps' main weakness, which is limited load capacity and creep under sustained stress.</p>
<p><strong>Ultrasonic welding</strong> and <strong>adhesive</strong> are both excellent at this volume, and both are permanent: opening the housing destroys it, so the battery cannot be replaced. <strong>Self-tapping screws throughout</strong> is serviceable but adds a driving operation per screw at 2 million units a year, and self-tappers in plastic bosses lose thread integrity after a few cycles. Brass heat-set inserts would be the right answer if screws were mandatory.</p>
<p>What kills snap fits in the field? Creep in the beam under permanent deflection, and fatigue if the snap is cycled often. Design the snap so it is unstressed once closed, and check creep at the top of the temperature range.</p>`,
    },
  ],

  qna: [
    {
      id: "assembly-strategies-qa01",
      q: `<p>Walk me through how you would set up a tolerance stack-up on a joint you had never seen before.</p>`,
      a: `<p>1) <strong>Name the gap</strong> in one sentence: "clearance between the gear face and the housing rib", because the whole analysis is about that one dimension. 2) <strong>Walk the loop</strong>: start at one side of the gap and step through toleranced features until I reach the other side, using only dimensions that appear on drawings and are actually inspected. 3) <strong>Assign signs</strong>: + for steps in the positive direction, &minus; for steps back, and confirm the loop closes on the gap. 4) <strong>Compute the nominal</strong> from the signed sum. 5) <strong>Stack the tolerances</strong>, ignoring signs, worst case first because it is the honest bound. 6) <strong>Read the result</strong>: is G<sub>min</sub> negative (interference possible)? Is G<sub>max</sub> too big (rattle, leak, lost preload)? 7) If it fails, look at variance shares before touching any tolerance, since usually one or two links own most of the stack. 8) Then choose between fewer links, adjustment, compliance, selective assembly, RSS with capability data, or a tighter tolerance, roughly in that order of cost.</p><p>Two things I would call out unprompted: which links I <em>excluded</em> and why, and whether any links share a machine or setup, because that decides whether RSS is even defensible.</p>`,
    },
    {
      id: "assembly-strategies-qa02",
      q: `<p>When is RSS legitimate rather than wishful thinking, and what would make you refuse to use it?</p>`,
      a: `<p>RSS assumes each contributor is <strong>statistically independent</strong>, <strong>centred</strong> on nominal, and roughly <strong>normal</strong> with the &plusmn;t band representing about &plusmn;3&sigma; of the real process. Given those, it is not optimism. It is correct, because the probability of every link simultaneously sitting at its extreme is vanishingly small. For n equal tolerances the stack is &radic;n times tighter than worst case, which at five links is 2.24&times;.</p><p>I would refuse it when several links are cut in <strong>one setup on one machine</strong> or come from <strong>one mould cavity</strong>, so they share a common shift; when <strong>tool wear</strong> drags the mean toward a limit and the process is not centred; when parts come from <strong>two suppliers or two cavities</strong> and the distribution is bimodal; when there is no capability data at all; and when the consequence of a rare no-build is severe: safety, a sealed assembly that cannot be reworked, or a joint buried deep in a build where one failure scraps everything around it.</p><p>The middle path I actually use: worst case for correlated groups, RSS across the independent groups, plus a mean-shift allowance if the process is known to drift.</p>`,
    },
    {
      id: "assembly-strategies-qa03",
      q: `<p>Your worst-case stack demands tolerances your shop cannot hold. Give me your options in order.</p>`,
      a: `<p><strong>1) Shorten the loop.</strong> Fewer links, less stack. Combine two parts into one machined body, machine mating features in a single setup, or locate directly from the functional feature instead of through three intermediates. This is the only fix with no recurring cost.</p><p><strong>2) Add adjustment.</strong> A shim, a jackscrew, an eccentric bushing, or a set-at-assembly step converts a tolerance problem into a process step. Cheap in low volume, adds labour in high volume.</p><p><strong>3) Add compliance.</strong> Slotted or oversized holes, a gasket, an O-ring, a spring washer, a flexible coupling. Something in the loop that deforms instead of transmitting the error. The cost is that you give up location wherever you add float.</p><p><strong>4) Selective assembly.</strong> Measure, bin, and match. Engine bearings and pistons are built this way. Real capability, but it buys gauging, logistics, and leftover inventory of unmatched bins.</p><p><strong>5) Justify RSS</strong> with capability data, accepting a small predicted no-build rate you are prepared to manage.</p><p><strong>6) Tighten a tolerance</strong>, last, and only the largest contributor. In an RSS stack effort should follow t<sup>2</sup>: halving the dominant link can cut the stack 30%, while halving a small one might buy 3%.</p>`,
    },
    {
      id: "assembly-strategies-qa04",
      q: `<p>Explain the round-pin-and-diamond-pin locating scheme, and what goes wrong if you use two round pins.</p>`,
      a: `<p>Locating one part on another needs six degrees of freedom removed exactly once. The mating <strong>face</strong> takes three (one translation, two rotations). A <strong>round pin</strong> in a close-fitting hole takes the two remaining translations, fixing position. The last degree of freedom is rotation about that pin, and a second pin fixes it.</p><p>The problem is that the pin centre distance in the base and the hole centre distance in the mating part each have a tolerance, so their difference &Delta;L is never zero. Two round pins in two round holes constrain the line-of-centres direction <strong>twice</strong>, which is over-constraint. The parts either will not go together or are forced together with locked-in stress and unpredictable seating.</p><p>The <strong>diamond pin</strong> is a round pin relieved by two flats, oriented so the flats face along the line of centres. It is free in that one direction and still tight perpendicular to it, so it controls rotation without fighting &Delta;L. A round pin in a slot does the same thing with the relief on the hole side instead.</p><p>What you must not do is simply enlarge the second round hole: that frees every direction equally, so &Delta;L is absorbed but the rotational location the pin existed to provide is gone.</p>`,
    },
    {
      id: "assembly-strategies-qa05",
      q: `<p>How do you decide between bolting, welding, riveting, and adhesive bonding for a bracket?</p>`,
      a: `<p>I work through five drivers. <strong>Serviceability</strong>: if anything behind the bracket is ever replaced, it is bolted, because welds and rivets are one-way. <strong>Load type</strong>: bolts are the only common joint that carries large tension well, and only because preload keeps the interface closed; rivets and pins are shear devices and poor in tension; adhesives are strong in shear and compression and weak in peel and cleavage. <strong>Materials</strong>: dissimilar metals rule out most welding and open a galvanic risk that adhesive bonding (which insulates) or brazing can dodge; thin sheet favours rivets or bonding over welding, which distorts. <strong>Environment</strong>: thermal cycling across a stiff joint drives cyclic stress, so I want compliance, meaning slotted holes or a thick bond line, rather than a weld; salt or moisture makes galvanic isolation and drainage design requirements. <strong>Rate and inspection</strong>: at high volume a rivet or an adhesive bead beats a bolt on cycle time, but a bond line cannot be inspected after cure, so bonded structure needs process control rather than inspection, which some industries will not accept.</p><p>The answer is often a hybrid: bond for stiffness and sealing, plus a couple of fasteners at the peel-critical edges to arrest the crack that starts the failure.</p>`,
    },
    {
      id: "assembly-strategies-qa06",
      q: `<p>What actually determines how much torque an interference fit can transmit, and why do designers not trust it?</p>`,
      a: `<p>Torque comes from friction over the interface: T = &mu; p &pi; d<sup>2</sup> L / 2, where the pressure comes from the interference, p = E&delta;(d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>)/(2 d d<sub>o</sub><sup>2</sup>). So capacity scales with interference, with engagement length, with the square of diameter, and with hub stiffness. A thin hub generates almost no pressure because (d<sub>o</sub><sup>2</sup> &minus; d<sup>2</sup>) collapses.</p><p>The reason nobody trusts it for critical torque is that interference is a <em>difference of two nearly equal numbers</em>, so it carries the full tolerance of both. On a &#8709;20 H7/p6 the interference ranges from 0.035 mm down to 0.001 mm, a factor of 35 in pressure and therefore in torque capacity, with every part fully in spec. On top of that, <strong>surface finish</strong> matters (roughness peaks flatten during pressing, so a rough shaft loses effective interference), <strong>assembly method</strong> matters (a thermal shrink fit avoids the scuffing a press causes and typically gives higher friction), and <strong>temperature</strong> matters (an aluminium hub on a steel shaft loses interference as it heats and can go loose).</p><p>So: size the fit on <em>minimum</em> interference at the <em>hottest</em> condition, check hub hoop stress at maximum interference, and if the torque is safety-critical, add a key, a spline, or a clamping element.</p>`,
    },
    {
      id: "assembly-strategies-qa07",
      q: `<p>What is over-constraint, where do you find it in real machines, and when is redundant constraint actually the right choice?</p>`,
      a: `<p>Over-constraint means a degree of freedom is removed more than once. The symptoms are parts that will not assemble, parts that assemble only with force and carry locked-in stress, and location that is not repeatable because which contacts take load depends on dirt, clamping order, and temperature.</p><p>Where I look for it: three or more dowels locating one plate (the third will not enter); a shaft in two rigidly mounted bearings, because separately machined bores never share a centreline, so the shaft is bent on assembly and the bearings see a moment they cannot take; a stiff bracket bolted to four pads on a warped casting, where it rocks on three and the fourth bolt distorts it; and any part located by both a pilot diameter and a bolt pattern.</p><p>Fixes all remove the duplicate: one locating bearing plus one floating bearing, a self-aligning bearing, a diamond pin instead of a second round pin, a slotted hole, or machining the mating features in one setup so they share an origin.</p><p>Redundant constraint is right when you need <strong>stiffness and load capacity</strong> more than repeatability. That is <strong>elastic averaging</strong>. Splines, bolt circles, Hirth and curvic couplings, and ball-bed supports all use many identical preloaded contacts so errors average out elastically. It works only if the contacts are numerous, nominally identical, and preloaded. At the other end, <strong>exact constraint</strong>, three balls in three vee-grooves, gives sub-micron repeatability and zero locked-in stress, at the cost of low stiffness and high contact stress. Optical mounts and fixture pallets use exact constraint; machine-tool spindles use elastic averaging.</p>`,
    },
    {
      id: "assembly-strategies-qa08",
      q: `<p>An adhesive-bonded joint is failing well below its calculated strength. How do you diagnose it?</p>`,
      a: `<p>First I check the <strong>load direction at the bond</strong>, because that is usually the answer. Adhesives are strong in shear and compression and weak in peel and cleavage, often by an order of magnitude. Any offset load, any moment, any flexible adherend, and the bond sees peel at one edge and unzips from there. Symptomatically, peel failures start at an edge and run; shear failures are more uniform across the bond.</p><p>Then I look at the <strong>failure surface</strong>. Adhesive failure (clean separation at one interface, no adhesive left on one side) points to <strong>surface preparation</strong>: contamination, mould release, oxide, no abrasion, no primer. Cohesive failure (adhesive left on both faces) means surface prep was fine and the adhesive itself was overloaded, which points back to geometry or to under-cure.</p><p>Then process: cure temperature and time, bond-line thickness (too thin starves the joint and creates stress concentrations, too thick loses strength), and whether the joint was clamped so the gap was controlled.</p><p>Fixes in order: change the geometry so the bond sees shear, so lap it, wrap it, or add a flange or gusset; add a mechanical stop, rivet, or screw at the peel front so a crack cannot initiate; fix surface prep and put it under process control, since a cured bond cannot be inspected; and only then consider a tougher adhesive. Adding overlap almost never helps a peel failure, because the far end of the bond never sees load.</p>`,
    },
    {
      id: "assembly-strategies-qa09",
      q: `<p>What does design for assembly actually mean in practice? Give me things you would change on a real drawing.</p>`,
      a: `<p><strong>Delete parts.</strong> The cheapest part is the one that does not exist: no drawing, supplier, inventory, inspection, or assembly time. The test: a part earns separate existence only if it moves relative to its neighbour, must be a different material, or must be removable for service. Everything else merges into a moulding or a machined body.</p><p><strong>Make parts self-locating.</strong> Bosses, hooks, snap tabs, and chamfered lead-ins so the part holds position while the operator picks up a tool. A lead-in chamfer is free on a moulded part and turns a fiddly insertion into a drop-in.</p><p><strong>Mistake-proof orientation.</strong> Either make the part fully symmetric so orientation cannot matter, or make it obviously and physically asymmetric: an offset dowel, a keyway, a connector that only mates one way. The dangerous case is the part that is <em>almost</em> symmetric: it looks reversible, assembles reversed, and fails in the field.</p><p><strong>Assemble in one direction.</strong> Ideally everything drops down onto a base with gravity helping. Every reorientation of the assembly costs time and introduces error.</p><p><strong>Reduce fastener variety.</strong> Five bolt sizes means five torque specs, five tools, five chances to grab the wrong one. Standardise on one or two.</p><p><strong>Design the access.</strong> Straight tool approach, socket envelope, and swing clearance for a torque wrench. Then check the fastener is still reachable after the neighbouring part is installed.</p><p><strong>Design the disassembly.</strong> Walk the service procedure and count how many parts must come off to reach the item most likely to be replaced.</p>`,
    },
    {
      id: "assembly-strategies-qa10",
      q: `<p>Where does compliance belong in an assembly, and what does it cost you?</p>`,
      a: `<p>Compliance is deliberate softness placed in the loop so variation is absorbed rather than transmitted. The common forms: <strong>slotted holes</strong> and <strong>oversized clearance holes</strong> that let a bracket find its own position before the bolt clamps it; <strong>gaskets and O-rings</strong> that absorb flatness and surface error; <strong>shims</strong> that convert a stack into a measure-and-set step; <strong>flexible couplings</strong> that swallow shaft misalignment; and <strong>compliant mounts</strong> that let a stiff part sit on a warped one without distorting.</p><p>Where it belongs: anywhere a loop is long and the gap is functionally critical, anywhere two subassemblies are made by different processes or suppliers, and anywhere differential thermal expansion would otherwise generate cyclic stress. A long aluminium rail on a steel frame should be fixed at one end and slotted at the other, sized for the differential growth over the full temperature range.</p><p>What it costs: <strong>location</strong>. Every slot and oversized hole throws away positional control in that direction, and it is easy to end up with an assembly that goes together beautifully and sits nowhere in particular. Compliance usually costs stiffness too, can introduce fretting at the sliding interface, and in the case of gaskets adds a creep and relaxation path that loses preload over time.</p><p>The discipline is to decide feature by feature whether you are <em>locating</em> or <em>clearing</em>, and never to ask one feature to do both. Locate with dowels and close-fit features; clear with slots and bolts; make sure the constraint scheme is exactly determinate before adding float anywhere.</p>`,
    },
  ],
};

export default content;
