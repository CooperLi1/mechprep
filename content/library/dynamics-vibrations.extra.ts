import type { Question } from "../types";

// Additional question bank for this topic (merged after the base questions
// in content/index.ts). Authored per-question — no generated templates.
// Figure ids are prefixed dv6-…dv19- to stay globally unique.

// Force transmissibility T = sqrt(1+(2 z r)^2)/sqrt((1-r^2)^2+(2 z r)^2),
// computed point-by-point. Every curve passes through T = 1 at r = sqrt(2).
const figTrans = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv6-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <rect x="187" y="178" width="225" height="44" fill="#dbeafe" opacity="0.55"/>
  <line x1="64" y1="222" x2="430" y2="222" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv6-ax)"/>
  <line x1="64" y1="222" x2="64" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv6-ax)"/>
  <line x1="60" y1="178" x2="64" y2="178" stroke="#64748b"/>
  <line x1="60" y1="134" x2="64" y2="134" stroke="#64748b"/>
  <line x1="60" y1="90" x2="64" y2="90" stroke="#64748b"/>
  <line x1="60" y1="46" x2="64" y2="46" stroke="#64748b"/>
  <text x="56" y="182" text-anchor="end" fill="#64748b" font-size="12">1</text>
  <text x="56" y="138" text-anchor="end" fill="#64748b" font-size="12">2</text>
  <text x="56" y="94" text-anchor="end" fill="#64748b" font-size="12">3</text>
  <text x="56" y="50" text-anchor="end" fill="#64748b" font-size="12">4</text>
  <line x1="151" y1="222" x2="151" y2="226" stroke="#64748b"/>
  <line x1="238" y1="222" x2="238" y2="226" stroke="#64748b"/>
  <line x1="325" y1="222" x2="325" y2="226" stroke="#64748b"/>
  <line x1="412" y1="222" x2="412" y2="226" stroke="#64748b"/>
  <text x="151" y="240" text-anchor="middle" fill="#64748b" font-size="12">1</text>
  <text x="238" y="240" text-anchor="middle" fill="#64748b" font-size="12">2</text>
  <text x="325" y="240" text-anchor="middle" fill="#64748b" font-size="12">3</text>
  <text x="412" y="240" text-anchor="middle" fill="#64748b" font-size="12">4</text>
  <text x="10" y="34" fill="#64748b">transmissibility T</text>
  <text x="246" y="260" text-anchor="middle" fill="#64748b">frequency ratio r = &omega; / &omega;<tspan baseline-shift="sub" font-size="10">n</tspan></text>
  <line x1="64" y1="178" x2="412" y2="178" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <line x1="187" y1="222" x2="187" y2="60" stroke="#334155" stroke-dasharray="5 4"/>
  <text x="192" y="54" fill="#334155" font-weight="600">r = &radic;2</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="64.0,178.0 67.5,177.9 71.0,177.7 74.4,177.4 77.9,176.8 81.4,176.2 84.9,175.3 88.4,174.3 91.8,173.0 95.3,171.5 98.8,169.8 102.3,167.7 105.8,165.2 109.2,162.3 112.7,158.9 116.2,154.8 119.7,149.8 123.2,143.9 126.6,136.7 130.1,128.0 133.6,117.4 137.1,104.9 140.6,91.0 144.0,77.5 147.5,68.6 151.0,68.9 154.5,79.1 158.0,95.0 161.4,111.9 164.9,127.0 168.4,139.7 171.9,150.2 175.4,158.7 178.8,165.8 182.3,171.6 185.8,176.5 189.3,180.6 192.8,184.1 196.2,187.1 199.7,189.8 203.2,192.1 206.7,194.1 210.2,195.9 213.6,197.6 217.1,199.0 220.6,200.3 234.5,204.4 248.4,207.3 262.4,209.5 276.3,211.1 290.2,212.4 304.1,213.4 318.0,214.3 332.0,215.0 345.9,215.6 359.8,216.1 373.7,216.5 387.6,216.9 401.6,217.2 412.0,217.4"/>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="64.0,178 67.5,177.9 71.0,177.7 74.4,177.4 77.9,176.9 81.4,176.2 84.9,175.4 88.4,174.4 91.8,173.2 95.3,171.8 98.8,170.2 102.3,168.4 105.8,166.3 109.2,163.9 112.7,161.3 116.2,158.3 119.7,155.1 123.2,151.6 126.6,147.9 130.1,144.2 133.6,140.7 137.1,137.6 140.6,135.3 144.0,134.3 147.5,134.7 151.0,136.5 154.5,139.6 158.0,143.6 161.4,148.2 164.9,153 168.4,157.7 171.9,162.3 175.4,166.4 178.8,170.3 182.3,173.8 185.8,177 189.3,179.8 192.8,182.4 196.2,184.7 199.7,186.8 203.2,188.7 206.7,190.4 210.2,192 213.6,193.4 217.1,194.8 220.6,196 234.5,199.9 248.4,202.9 262.4,205.1 276.3,206.9 290.2,208.3 304.1,209.5 318.0,210.5 332.0,211.4 345.9,212.1 359.8,212.7 373.7,213.3 387.6,213.7 401.6,214.2 412.0,214.5"/>
  <polyline fill="none" stroke="#334155" stroke-width="2.5" points="64.0,178.0 67.5,177.9 71.0,177.7 74.4,177.4 77.9,176.9 81.4,176.3 84.9,175.5 88.4,174.7 91.8,173.7 95.3,172.7 98.8,171.6 102.3,170.4 105.8,169.2 109.2,168.0 112.7,166.8 116.2,165.7 119.7,164.7 123.2,163.9 126.6,163.2 130.1,162.7 133.6,162.5 137.1,162.5 140.6,162.7 144.0,163.2 147.5,163.9 151.0,164.7 154.5,165.7 158.0,166.9 161.4,168.1 164.9,169.4 168.4,170.8 171.9,172.1 175.4,173.5 178.8,174.9 182.3,176.2 185.8,177.5 189.3,178.8 192.8,180.1 196.2,181.2 199.7,182.4 203.2,183.5 206.7,184.6 210.2,185.6 213.6,186.5 217.1,187.5 220.6,188.3 234.5,191.5 248.4,194.2 262.4,196.4 276.3,198.3 290.2,200.0 304.1,201.4 318.0,202.7 332.0,203.8 345.9,204.8 359.8,205.7 373.7,206.5 387.6,207.2 401.6,207.8 412.0,208.2"/>
  <line x1="300" y1="62" x2="324" y2="62" stroke="#dc2626" stroke-width="3"/>
  <text x="330" y="66" fill="#334155" font-size="12">&zeta; = 0.15</text>
  <line x1="300" y1="84" x2="324" y2="84" stroke="#1d4ed8" stroke-width="3"/>
  <text x="330" y="88" fill="#334155" font-size="12">&zeta; = 0.30</text>
  <line x1="300" y1="106" x2="324" y2="106" stroke="#334155" stroke-width="3"/>
  <text x="330" y="110" fill="#334155" font-size="12">&zeta; = 0.60</text>
  <text x="252" y="140" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">isolation region</text>
  <path d="M252,148 C258,168 272,182 292,192" fill="none" stroke="#1d4ed8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="230" y="278" text-anchor="middle" fill="#64748b" font-size="12">every curve crosses T = 1 at r = &radic;2</text>
  <text x="230" y="294" text-anchor="middle" fill="#64748b" font-size="12">below it a mount amplifies; above it isolates</text>
</svg>`;

const figDecay = `<svg viewBox="0 0 460 252" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv7-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="dv7-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#64748b"/></marker>
  </defs>
  <line x1="64" y1="132" x2="430" y2="132" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv7-ax)"/>
  <line x1="64" y1="214" x2="64" y2="44" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv7-ax)"/>
  <text x="10" y="38" fill="#64748b">displacement</text>
  <text x="404" y="150" fill="#64748b">time</text>
  <polyline fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4" points="74,62 88,67 102,71 115,75 129,79 143,83 156,86 170,89 184,92 198,94 212,97 225,99 239,102 253,104 266,105 280,107 294,109 308,110 322,112 335,113 349,115 363,116 376,117 390,118 404,119"/>
  <polyline fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="5 4" points="74,202 88,197 102,193 115,189 129,185 143,181 156,178 170,175 184,172 198,170 212,167 225,165 239,162 253,160 266,159 280,157 294,155 308,154 322,152 335,151 349,149 363,148 376,147 390,146 404,145"/>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="74,62 76,63 78,65 80,69 81,73 83,78 85,84 87,90 89,97 90,105 92,112 94,120 96,128 98,136 100,144 102,151 103,158 105,164 107,170 109,175 111,179 112,183 114,185 116,187 118,188 120,188 122,187 124,185 125,182 127,179 129,175 131,170 133,165 134,160 136,154 138,148 140,141 142,135 144,129 146,123 147,117 149,112 151,107 153,102 155,98 156,95 158,92 160,90 162,88 164,88 166,88 168,89 169,90 171,92 173,95 175,98 177,102 178,106 180,110 182,115 184,120 186,125 188,130 190,134 191,139 193,144 195,148 197,152 199,156 200,159 202,162 204,164 206,165 208,167 210,167 212,167 213,166 215,165 217,164 219,162 221,159 223,156 224,153 226,149 228,146 230,142 232,138 234,134 235,130 237,126 239,123 241,119 243,116 245,113 246,111 248,108 250,107 252,105 254,105 256,104 257,104 259,105 261,106 263,107 265,109 266,111 268,113 270,115 272,118 274,121 276,124 278,127 279,130 281,134 283,137 285,139 287,142 288,145 290,147 292,149 294,151 296,152 298,153 300,154 301,154 303,154 305,154 307,153 309,152 310,151 312,149 314,147 316,145 318,143 320,141 322,138 323,136 325,133 327,131 329,128 331,126 332,124 334,122 336,120 338,119 340,117 342,116 344,115 345,115 347,114 349,115 351,115 353,115 354,116 356,117 358,118 360,120 362,122 364,123 366,125 367,127 369,129 371,131 373,133 375,135 376,137 378,138 380,140 382,141 384,143 386,144 388,145 389,145 391,146 393,146 395,146 397,146 398,145 400,145 402,144 404,143"/>
  <circle cx="74" cy="62" r="4" fill="#dc2626"/>
  <circle cx="166" cy="88" r="4" fill="#dc2626"/>
  <circle cx="257" cy="104" r="4" fill="#dc2626"/>
  <circle cx="349" cy="115" r="4" fill="#dc2626"/>
  <text x="74" y="52" text-anchor="middle" fill="#dc2626" font-size="12">10.0</text>
  <text x="166" y="78" text-anchor="middle" fill="#dc2626" font-size="12">6.3</text>
  <text x="257" y="94" text-anchor="middle" fill="#dc2626" font-size="12">4.0</text>
  <text x="349" y="105" text-anchor="middle" fill="#dc2626" font-size="12">2.5</text>
  <line x1="74" y1="228" x2="349" y2="228" stroke="#64748b" stroke-width="1" marker-end="url(#dv7-dim)"/>
  <line x1="349" y1="228" x2="74" y2="228" stroke="#64748b" stroke-width="1" marker-end="url(#dv7-dim)"/>
  <line x1="74" y1="222" x2="74" y2="234" stroke="#64748b" stroke-width="1"/>
  <line x1="349" y1="222" x2="349" y2="234" stroke="#64748b" stroke-width="1"/>
  <text x="212" y="246" text-anchor="middle" fill="#64748b" font-size="12">n = 3 cycles, amplitudes in mm</text>
</svg>`;

const figHalfPower = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="dv8-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="60" y1="214" x2="430" y2="214" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv8-ax)"/>
  <line x1="60" y1="214" x2="60" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv8-ax)"/>
  <text x="10" y="34" fill="#64748b">response amplitude</text>
  <text x="230" y="254" text-anchor="middle" fill="#64748b">frequency (Hz)</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="66,187 68.8,186.6 71.5,186.1 74.2,185.7 77,185.2 79.8,184.8 82.5,184.3 85.2,183.8 88,183.2 90.8,182.7 93.5,182.1 96.2,181.5 99,180.9 101.8,180.3 104.5,179.6 107.2,178.9 110,178.2 112.8,177.4 115.5,176.6 118.2,175.8 121,174.9 123.8,174 126.5,173.1 129.2,172.1 132,171.1 134.8,170 137.5,168.8 140.2,167.6 143,166.3 145.8,164.9 148.5,163.5 151.2,162 154,160.4 156.8,158.7 159.5,156.8 162.2,154.9 165,152.8 167.8,150.6 170.5,148.3 173.2,145.7 176,143 178.8,140.1 181.5,136.9 184.2,133.6 187,129.9 189.8,126 192.5,121.7 195.2,117.2 198,112.3 200.8,107 203.5,101.5 206.2,95.6 209,89.4 211.8,83.1 214.5,76.8 217.2,70.8 220,65.2 222.8,60.4 225.5,56.7 228.2,54.5 231,54 233.8,55.2 236.5,58 239.2,62.2 242,67.4 244.8,73.4 247.5,79.8 250.2,86.3 253,92.7 255.8,98.9 258.5,104.9 261.2,110.5 264,115.8 266.8,120.7 269.5,125.2 272.2,129.5 275,133.4 277.8,137 280.5,140.4 283.2,143.5 286,146.4 288.8,149.1 291.5,151.7 294.2,154 297,156.2 299.8,158.3 302.5,160.2 305.2,162 308,163.7 310.8,165.3 313.5,166.8 316.2,168.3 319,169.6 321.8,170.9 324.5,172.1 327.2,173.3 330,174.4 332.8,175.4 335.5,176.4 338.2,177.3 341,178.2 343.8,179.1 346.5,179.9 349.2,180.7 352,181.5 354.8,182.2 357.5,182.9 360.2,183.5 363,184.2 365.8,184.8 368.5,185.4 371.2,185.9 374,186.5 376.8,187 379.5,187.5 382.2,188 385,188.5 387.8,189 390.5,189.4 393.2,189.8 396,190.2"/>
  <line x1="231" y1="214" x2="231" y2="60" stroke="#64748b" stroke-dasharray="5 4"/>
  <circle cx="231" cy="54" r="4" fill="#dc2626"/>
  <text x="231" y="44" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">peak = Q</text>
  <line x1="180" y1="101" x2="282" y2="101" stroke="#1d4ed8" stroke-dasharray="4 3"/>
  <text x="174" y="105" text-anchor="end" fill="#1d4ed8" font-size="12">0.707 &times; peak</text>
  <circle cx="205" cy="101" r="3.5" fill="#1d4ed8"/>
  <circle cx="257" cy="101" r="3.5" fill="#1d4ed8"/>
  <line x1="205" y1="126" x2="257" y2="126" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#dv8-dim)"/>
  <line x1="257" y1="126" x2="205" y2="126" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#dv8-dim)"/>
  <text x="231" y="142" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">&Delta;f</text>
  <line x1="66" y1="214" x2="66" y2="218" stroke="#64748b"/>
  <line x1="231" y1="214" x2="231" y2="218" stroke="#64748b"/>
  <line x1="396" y1="214" x2="396" y2="218" stroke="#64748b"/>
  <text x="66" y="230" text-anchor="middle" fill="#64748b" font-size="12">210</text>
  <text x="231" y="230" text-anchor="middle" fill="#64748b" font-size="12">240</text>
  <text x="396" y="230" text-anchor="middle" fill="#64748b" font-size="12">270</text>
</svg>`;

const figSeries = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv9-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#64748b"/></marker>
  </defs>
  <rect x="150" y="34" width="160" height="52" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="65" text-anchor="middle" fill="#334155" font-weight="600">machine, m = 200 kg</text>
  <path d="M190,86 v8 l-12,7 l24,10 l-24,10 l24,10 l-12,7 v8" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <path d="M270,86 v8 l-12,7 l24,10 l-24,10 l24,10 l-12,7 v8" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="150" y="122" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">mount k<tspan baseline-shift="sub" font-size="9">m</tspan></text>
  <rect x="100" y="146" width="260" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="140" text-anchor="middle" fill="#334155" font-size="12">support pan / floor beam</text>
  <path d="M100,153 C160,153 200,178 230,190 C260,178 300,153 360,153" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="336" y="184" fill="#1d4ed8" font-weight="600" font-size="12">k<tspan baseline-shift="sub" font-size="9">f</tspan></text>
  <polygon points="100,160 88,182 112,182" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="80" y1="182" x2="120" y2="182" stroke="#334155" stroke-width="1.5"/>
  <line x1="86" y1="192" x2="96" y2="182" stroke="#64748b"/>
  <line x1="98" y1="192" x2="108" y2="182" stroke="#64748b"/>
  <line x1="110" y1="192" x2="120" y2="182" stroke="#64748b"/>
  <polygon points="360,160 348,182 372,182" fill="none" stroke="#334155" stroke-width="1.5"/>
  <line x1="340" y1="182" x2="380" y2="182" stroke="#334155" stroke-width="1.5"/>
  <line x1="346" y1="192" x2="356" y2="182" stroke="#64748b"/>
  <line x1="358" y1="192" x2="368" y2="182" stroke="#64748b"/>
  <line x1="370" y1="192" x2="380" y2="182" stroke="#64748b"/>
  <line x1="404" y1="86" x2="404" y2="146" stroke="#64748b" stroke-width="1" marker-end="url(#dv9-dim)"/>
  <line x1="404" y1="146" x2="404" y2="86" stroke="#64748b" stroke-width="1" marker-end="url(#dv9-dim)"/>
  <text x="412" y="120" fill="#64748b" font-size="12">mount</text>
  <text x="230" y="220" text-anchor="middle" fill="#334155" font-size="12">the two springs carry the same load in turn &rarr; series</text>
  <text x="230" y="242" text-anchor="middle" fill="#334155" font-size="12">1/k<tspan baseline-shift="sub" font-size="9">eq</tspan> = 1/k<tspan baseline-shift="sub" font-size="9">m</tspan> + 1/k<tspan baseline-shift="sub" font-size="9">f</tspan></text>
</svg>`;

const figCampbell = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv10-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="208" x2="424" y2="208" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv10-ax)"/>
  <line x1="70" y1="208" x2="70" y2="44" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv10-ax)"/>
  <text x="10" y="36" fill="#64748b">frequency (Hz)</text>
  <text x="300" y="240" fill="#64748b">shaft speed (rpm)</text>
  <line x1="70" y1="177" x2="74" y2="177" stroke="#64748b"/>
  <line x1="70" y1="146" x2="74" y2="146" stroke="#64748b"/>
  <line x1="70" y1="116" x2="74" y2="116" stroke="#64748b"/>
  <line x1="70" y1="85" x2="74" y2="85" stroke="#64748b"/>
  <line x1="70" y1="54" x2="74" y2="54" stroke="#64748b"/>
  <text x="64" y="181" text-anchor="end" fill="#64748b" font-size="12">50</text>
  <text x="64" y="150" text-anchor="end" fill="#64748b" font-size="12">100</text>
  <text x="64" y="120" text-anchor="end" fill="#64748b" font-size="12">150</text>
  <text x="64" y="89" text-anchor="end" fill="#64748b" font-size="12">200</text>
  <text x="64" y="58" text-anchor="end" fill="#64748b" font-size="12">250</text>
  <line x1="152.5" y1="208" x2="152.5" y2="212" stroke="#64748b"/>
  <line x1="235" y1="208" x2="235" y2="212" stroke="#64748b"/>
  <line x1="317.5" y1="208" x2="317.5" y2="212" stroke="#64748b"/>
  <line x1="400" y1="208" x2="400" y2="212" stroke="#64748b"/>
  <text x="152.5" y="224" text-anchor="middle" fill="#64748b" font-size="12">1000</text>
  <text x="235" y="224" text-anchor="middle" fill="#64748b" font-size="12">2000</text>
  <text x="317.5" y="224" text-anchor="middle" fill="#64748b" font-size="12">3000</text>
  <text x="400" y="224" text-anchor="middle" fill="#64748b" font-size="12">4000</text>
  <line x1="70" y1="97" x2="400" y2="97" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="120" y="90" fill="#1d4ed8" font-weight="600" font-size="12">panel mode, 180 Hz</text>
  <line x1="70" y1="208" x2="400" y2="167" stroke="#64748b" stroke-width="1.8"/>
  <line x1="70" y1="208" x2="400" y2="126" stroke="#64748b" stroke-width="1.8"/>
  <line x1="70" y1="208" x2="400" y2="85" stroke="#dc2626" stroke-width="2.2"/>
  <text x="406" y="170" fill="#64748b" font-size="12">1x</text>
  <text x="406" y="129" fill="#64748b" font-size="12">2x</text>
  <text x="406" y="88" fill="#dc2626" font-weight="600" font-size="12">3x</text>
  <circle cx="367" cy="97" r="6" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="367" y1="97" x2="330" y2="60" stroke="#dc2626" stroke-width="1.2"/>
  <text x="326" y="54" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">3x crosses at 3600 rpm</text>
</svg>`;

const figAlias = `<svg viewBox="0 0 460 226" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv11-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="64" y1="128" x2="436" y2="128" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv11-ax)"/>
  <text x="398" y="146" fill="#64748b">time</text>
  <polyline fill="none" stroke="#94a3b8" stroke-width="1.3" points="70,128 71,116 73,105 74,95 75,87 77,81 78,77 79,76 80,78 82,82 83,89 84,98 86,108 87,120 88,132 90,143 91,154 92,164 94,171 95,177 96,180 97,180 99,177 100,172 101,164 103,155 104,144 105,132 107,120 108,109 109,98 111,89 112,83 113,78 114,76 116,77 117,80 118,86 120,94 121,104 122,116 124,127 125,139 126,150 128,161 129,169 130,175 131,179 133,180 134,178 135,174 137,167 138,159 139,148 141,137 142,125 143,113 145,102 146,93 147,85 148,79 150,76 151,76 152,79 154,84 155,91 156,101 158,111 159,123 160,135 162,146 163,157 164,166 165,173 167,178 168,180 169,179 171,176 172,170 173,162 175,152 176,141 177,129 179,117 180,106 181,96 182,87 184,81 185,77 186,76 188,78 189,82 190,88 192,97 193,107 194,119 196,131 197,142 198,153 199,163 201,171 202,176 203,179 205,180 206,177 207,173 209,165 210,156 211,145 213,134 214,122 215,110 216,100 218,90 219,83 220,78 222,76 223,77 224,80 226,86 227,94 228,103 230,114 231,126 232,138 233,149 235,160 236,168 237,175 239,179 240,180 241,179 243,175 244,168 245,160 247,149 248,138 249,126 250,114 252,103 253,94 254,86 256,80 257,77 258,76 260,78 261,83 262,90 264,100 265,110 266,122 267,134 269,145 270,156 271,165 273,173 274,177 275,180 277,179 278,176 279,171 281,163 282,153 283,142 284,131 286,119 287,107 288,97 290,88 291,82 292,78 294,76 295,77 296,81 298,87 299,96 300,106 301,117 303,129 304,141 305,152 307,162 308,170 309,176 311,179 312,180 313,178 315,173 316,166 317,157 318,146 320,135 321,123 322,111 324,101 325,91 326,84 328,79 329,76 330,76 332,79 333,85 334,93 335,102 337,113 338,125 339,137 341,148 342,159 343,167 345,174 346,178 347,180 349,179 350,175 351,169 352,161 354,150 355,139 356,127 358,116 359,104 360,94 362,86 363,80 364,77 366,76 367,78 368,83 369,89 371,98 372,109 373,120 375,132 376,144 377,155 379,164 380,172 381,177 383,180 384,180 385,177 386,171 388,164 389,154 390,143 392,132 393,120 394,108 396,98 397,89 398,82 400,78 401,76 402,77 403,81 405,87 406,95 407,105 409,116 410,128"/>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="70,128 73,136 76,144 78,152 81,159 84,165 87,170 90,174 93,177 96,179 98,180 101,179 104,177 107,174 110,170 112,165 115,159 118,152 121,144 124,136 127,128 130,120 132,112 135,104 138,97 141,91 144,86 146,82 149,79 152,77 155,76 158,77 161,79 164,82 166,86 169,91 172,97 175,104 178,112 180,120 183,128 186,136 189,144 192,152 195,159 198,165 200,170 203,174 206,177 209,179 212,180 214,179 217,177 220,174 223,170 226,165 229,159 231,152 234,144 237,136 240,128 243,120 246,112 248,104 251,97 254,91 257,86 260,82 263,79 266,77 268,76 271,77 274,79 277,82 280,86 282,91 285,97 288,104 291,112 294,120 297,128 300,136 302,144 305,152 308,159 311,165 314,170 316,174 319,177 322,179 325,180 328,179 331,177 334,174 336,170 339,165 342,159 345,152 348,144 350,136 353,128 356,120 359,112 362,104 365,97 368,91 370,86 373,82 376,79 379,77 382,76 384,77 387,79 390,82 393,86 396,91 399,97 401,104 404,112 407,120 410,128"/>
  <circle cx="70" cy="128" r="4" fill="#dc2626"/>
  <circle cx="97" cy="180" r="4" fill="#dc2626"/>
  <circle cx="124" cy="135" r="4" fill="#dc2626"/>
  <circle cx="152" cy="77" r="4" fill="#dc2626"/>
  <circle cx="179" cy="115" r="4" fill="#dc2626"/>
  <circle cx="206" cy="177" r="4" fill="#dc2626"/>
  <circle cx="233" cy="147" r="4" fill="#dc2626"/>
  <circle cx="260" cy="81" r="4" fill="#dc2626"/>
  <circle cx="288" cy="103" r="4" fill="#dc2626"/>
  <circle cx="315" cy="172" r="4" fill="#dc2626"/>
  <circle cx="342" cy="159" r="4" fill="#dc2626"/>
  <circle cx="369" cy="88" r="4" fill="#dc2626"/>
  <circle cx="396" cy="92" r="4" fill="#dc2626"/>
  <text x="64" y="36" fill="#94a3b8" font-size="12">true signal 380 Hz</text>
  <text x="64" y="56" fill="#dc2626" font-size="12">samples at 500 Hz</text>
  <text x="64" y="212" fill="#1d4ed8" font-weight="600" font-size="12">what the analyser reports: 120 Hz</text>
</svg>`;

const figBase = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv12-mo" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="dv12-out" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="150" y="30" width="150" height="50" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="225" y="60" text-anchor="middle" fill="#334155" font-weight="600">instrument, mass m</text>
  <path d="M180,80 v10 l-12,8 l24,11 l-24,11 l24,11 l-12,8 v9" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
  <line x1="270" y1="80" x2="270" y2="104" stroke="#334155" stroke-width="2"/>
  <rect x="256" y="104" width="28" height="22" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <line x1="270" y1="126" x2="270" y2="148" stroke="#334155" stroke-width="2"/>
  <text x="160" y="118" text-anchor="end" fill="#1d4ed8" font-weight="600" font-size="12">k</text>
  <text x="292" y="118" fill="#334155" font-weight="600" font-size="12">c</text>
  <rect x="120" y="148" width="220" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="180" text-anchor="middle" fill="#334155" font-size="12">vehicle frame (the base)</text>
  <path d="M70,206 q22,-16 44,0 q22,16 44,0 q22,-16 44,0 q22,16 44,0 q22,-16 44,0 q22,16 44,0" fill="none" stroke="#64748b" stroke-width="2"/>
  <text x="230" y="230" text-anchor="middle" fill="#64748b" font-size="12">road profile</text>
  <line x1="94" y1="196" x2="94" y2="150" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv12-mo)"/>
  <text x="86" y="146" text-anchor="end" fill="#dc2626" font-weight="600" font-size="12">input y(t)</text>
  <line x1="376" y1="76" x2="376" y2="30" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#dv12-out)"/>
  <line x1="376" y1="30" x2="376" y2="76" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#dv12-out)"/>
  <text x="384" y="58" fill="#1d4ed8" font-weight="600" font-size="12">output x(t)</text>
</svg>`;

const figTorsion = `<svg viewBox="0 0 460 232" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv13-tq" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="dv13-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="48" x2="70" y2="160" stroke="#334155" stroke-width="3"/>
  <line x1="58" y1="62" x2="70" y2="50" stroke="#64748b"/>
  <line x1="58" y1="84" x2="70" y2="72" stroke="#64748b"/>
  <line x1="58" y1="106" x2="70" y2="94" stroke="#64748b"/>
  <line x1="58" y1="128" x2="70" y2="116" stroke="#64748b"/>
  <line x1="58" y1="150" x2="70" y2="138" stroke="#64748b"/>
  <rect x="70" y="96" width="230" height="16" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="300" cy="104" rx="16" ry="62" fill="#e2e8f0" stroke="#334155" stroke-width="1.8"/>
  <text x="300" y="184" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">disk, inertia J</text>
  <path d="M340,64 a44 44 0 0 1 0 80" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv13-tq)"/>
  <text x="392" y="108" fill="#dc2626" font-weight="600" font-size="12">&theta;(t)</text>
  <line x1="70" y1="200" x2="300" y2="200" stroke="#64748b" stroke-width="1" marker-end="url(#dv13-dim)"/>
  <line x1="300" y1="200" x2="70" y2="200" stroke="#64748b" stroke-width="1" marker-end="url(#dv13-dim)"/>
  <line x1="70" y1="194" x2="70" y2="206" stroke="#64748b" stroke-width="1"/>
  <line x1="300" y1="194" x2="300" y2="206" stroke="#64748b" stroke-width="1"/>
  <text x="185" y="220" text-anchor="middle" fill="#64748b" font-size="12">shaft length L</text>
  <text x="150" y="76" fill="#1d4ed8" font-weight="600">k<tspan baseline-shift="sub" font-size="10">t</tspan> = GJ<tspan baseline-shift="sub" font-size="10">p</tspan> / L</text>
  <text x="150" y="150" fill="#64748b" font-size="12">&omega;<tspan baseline-shift="sub" font-size="9">n</tspan> = &radic;(k<tspan baseline-shift="sub" font-size="9">t</tspan> / J)</text>
</svg>`;

const figRotor = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv14-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#64748b"/></marker>
  </defs>
  <line x1="80" y1="112" x2="380" y2="112" stroke="#334155" stroke-width="7"/>
  <ellipse cx="230" cy="112" rx="15" ry="56" fill="#dbeafe" stroke="#334155" stroke-width="1.8"/>
  <text x="230" y="52" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">disk, m = 8 kg</text>
  <path d="M80,112 C140,112 190,150 230,168 C270,150 320,112 380,112" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="286" y="176" fill="#64748b" font-size="12">whirl at N<tspan baseline-shift="sub" font-size="9">cr</tspan></text>
  <polygon points="80,120 66,144 94,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="74" cy="150" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="86" cy="150" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="58" y1="156" x2="102" y2="156" stroke="#334155" stroke-width="1.5"/>
  <line x1="64" y1="166" x2="74" y2="156" stroke="#64748b"/>
  <line x1="78" y1="166" x2="88" y2="156" stroke="#64748b"/>
  <line x1="92" y1="166" x2="102" y2="156" stroke="#64748b"/>
  <polygon points="380,120 366,144 394,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <circle cx="374" cy="150" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="386" cy="150" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <line x1="358" y1="156" x2="402" y2="156" stroke="#334155" stroke-width="1.5"/>
  <line x1="364" y1="166" x2="374" y2="156" stroke="#64748b"/>
  <line x1="378" y1="166" x2="388" y2="156" stroke="#64748b"/>
  <line x1="392" y1="166" x2="402" y2="156" stroke="#64748b"/>
  <text x="80" y="100" text-anchor="middle" fill="#334155" font-weight="600">A</text>
  <text x="380" y="100" text-anchor="middle" fill="#334155" font-weight="600">B</text>
  <line x1="80" y1="196" x2="380" y2="196" stroke="#64748b" stroke-width="1" marker-end="url(#dv14-dim)"/>
  <line x1="380" y1="196" x2="80" y2="196" stroke="#64748b" stroke-width="1" marker-end="url(#dv14-dim)"/>
  <line x1="80" y1="190" x2="80" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="230" y1="190" x2="230" y2="202" stroke="#64748b" stroke-width="1"/>
  <line x1="380" y1="190" x2="380" y2="202" stroke="#64748b" stroke-width="1"/>
  <text x="230" y="216" text-anchor="middle" fill="#64748b" font-size="12">span L, disk at mid-span</text>
  <text x="230" y="236" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">k = 48EI / L<tspan baseline-shift="super" font-size="9">3</tspan></text>
</svg>`;

const figPSD = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv15-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="dv15-dim" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0L7,3.5L0,7z" fill="#1d4ed8"/></marker>
  </defs>
  <line x1="70" y1="190" x2="430" y2="190" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv15-ax)"/>
  <line x1="70" y1="190" x2="70" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv15-ax)"/>
  <text x="10" y="36" fill="#64748b">PSD (g&sup2;/Hz)</text>
  <text x="230" y="228" text-anchor="middle" fill="#64748b">frequency (Hz)</text>
  <rect x="120" y="86" width="240" height="104" fill="#dbeafe" opacity="0.6"/>
  <line x1="70" y1="180" x2="120" y2="86" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="120" y1="86" x2="360" y2="86" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="360" y1="86" x2="410" y2="180" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="66" y1="86" x2="70" y2="86" stroke="#64748b"/>
  <text x="62" y="90" text-anchor="end" fill="#64748b" font-size="12">0.04</text>
  <line x1="120" y1="190" x2="120" y2="194" stroke="#64748b"/>
  <line x1="360" y1="190" x2="360" y2="194" stroke="#64748b"/>
  <text x="120" y="208" text-anchor="middle" fill="#64748b" font-size="12">20</text>
  <text x="360" y="208" text-anchor="middle" fill="#64748b" font-size="12">2000</text>
  <line x1="120" y1="118" x2="360" y2="118" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#dv15-dim)"/>
  <line x1="360" y1="118" x2="120" y2="118" stroke="#1d4ed8" stroke-width="1.2" marker-end="url(#dv15-dim)"/>
  <text x="240" y="138" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">bandwidth 1980 Hz</text>
  <text x="240" y="70" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">flat at 0.04 g&sup2;/Hz</text>
  <text x="230" y="252" text-anchor="middle" fill="#64748b" font-size="12">area under the curve = mean square acceleration</text>
</svg>`;

const figTMD = `<svg viewBox="0 0 460 278" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv16-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="206" x2="424" y2="206" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv16-ax)"/>
  <line x1="70" y1="206" x2="70" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv16-ax)"/>
  <text x="10" y="36" fill="#64748b">floor response</text>
  <text x="230" y="246" text-anchor="middle" fill="#64748b">excitation frequency</text>
  <line x1="66" y1="176" x2="70" y2="176" stroke="#64748b"/>
  <line x1="66" y1="146" x2="70" y2="146" stroke="#64748b"/>
  <line x1="66" y1="116" x2="70" y2="116" stroke="#64748b"/>
  <line x1="66" y1="86" x2="70" y2="86" stroke="#64748b"/>
  <line x1="66" y1="56" x2="70" y2="56" stroke="#64748b"/>
  <text x="62" y="180" text-anchor="end" fill="#64748b" font-size="12">5</text>
  <text x="62" y="150" text-anchor="end" fill="#64748b" font-size="12">10</text>
  <text x="62" y="120" text-anchor="end" fill="#64748b" font-size="12">15</text>
  <text x="62" y="90" text-anchor="end" fill="#64748b" font-size="12">20</text>
  <text x="62" y="60" text-anchor="end" fill="#64748b" font-size="12">25</text>
  <line x1="270" y1="206" x2="270" y2="212" stroke="#64748b"/>
  <text x="270" y="226" text-anchor="middle" fill="#64748b" font-size="12">8 Hz</text>
  <polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="70,200 90,200 110,200 130,199 150,199 170,198 186,197 200,196 210,194 220,192 230,189 235,187 240,184 244,181 248,178 251,173 253,170 255,166 257,161 258,155 260,148 262,137 264,123 266,104 267,80 269,59 271,60 273,83 274,107 276,126 278,140 280,151 282,158 283,164 285,169 287,173 289,176 290,179 292,181 296,184 300,186 305,190 310,192 320,195 330,197 340,199 350,200 360,201 370,201 380,202 390,202"/>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="70,200 90,200 110,200 130,199 150,199 170,198 186,197 200,195 210,193 220,190 228,186 232,183 235,180 237,177 239,175 241,171 242,168 244,164 246,160 248,158 250,158 251,160 253,165 255,169 257,174 258,178 260,181 262,184 264,186 266,187 269,189 271,189 274,189 276,188 278,188 280,187 282,185 285,183 287,181 290,179 294,179 298,180 301,182 305,185 308,187 312,189 315,191 319,193 322,194 326,195 330,196 335,197 340,198 345,199 350,199 356,200 362,200 370,201 380,201 390,202"/>
  <line x1="300" y1="60" x2="324" y2="60" stroke="#dc2626" stroke-width="3"/>
  <text x="330" y="64" fill="#334155" font-size="12">bare floor</text>
  <line x1="300" y1="82" x2="324" y2="82" stroke="#1d4ed8" stroke-width="3"/>
  <text x="330" y="86" fill="#334155" font-size="12">with 5% TMD</text>
  <circle cx="269" cy="59" r="4" fill="#dc2626"/>
  <circle cx="249" cy="158" r="4" fill="#1d4ed8"/>
  <circle cx="293" cy="179" r="4" fill="#1d4ed8"/>
  <text x="230" y="270" text-anchor="middle" fill="#64748b" font-size="12">one tall peak becomes two smaller ones straddling the tuned frequency</text>
</svg>`;

const figImpact = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv17-v" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="dv17-v2" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="30" y="26" fill="#334155" font-weight="600">Before</text>
  <line x1="30" y1="92" x2="430" y2="92" stroke="#334155" stroke-width="2"/>
  <rect x="70" y="52" width="52" height="34" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="82" cy="90" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="110" cy="90" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <text x="96" y="74" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">2 kg</text>
  <rect x="230" y="46" width="66" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="246" cy="90" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="280" cy="90" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <text x="263" y="71" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">4 kg</text>
  <line x1="130" y1="40" x2="186" y2="40" stroke="#dc2626" stroke-width="2.5" marker-end="url(#dv17-v)"/>
  <text x="158" y="32" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">3.0 m/s</text>
  <text x="322" y="40" fill="#64748b" font-size="12">at rest</text>
  <text x="30" y="146" fill="#334155" font-weight="600">After</text>
  <line x1="30" y1="212" x2="430" y2="212" stroke="#334155" stroke-width="2"/>
  <rect x="70" y="172" width="52" height="34" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="82" cy="210" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="110" cy="210" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <text x="96" y="194" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">2 kg</text>
  <rect x="250" y="166" width="66" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <circle cx="266" cy="210" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <circle cx="300" cy="210" r="5" fill="none" stroke="#334155" stroke-width="1.4"/>
  <text x="283" y="191" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">4 kg</text>
  <line x1="130" y1="160" x2="160" y2="160" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#dv17-v2)"/>
  <text x="146" y="152" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">v<tspan baseline-shift="sub" font-size="9">1</tspan></text>
  <line x1="324" y1="160" x2="384" y2="160" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#dv17-v2)"/>
  <text x="354" y="152" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">v<tspan baseline-shift="sub" font-size="9">2</tspan></text>
  <text x="230" y="234" text-anchor="middle" fill="#64748b" font-size="12">momentum is conserved; restitution e supplies the second equation</text>
</svg>`;

const figNode = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <line x1="60" y1="130" x2="400" y2="130" stroke="#cbd5e1" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M60,130 C110,58 160,58 230,130 C300,202 350,202 400,130" fill="none" stroke="#1d4ed8" stroke-width="2.8"/>
  <path d="M60,130 C110,202 160,202 230,130 C300,58 350,58 400,130" fill="none" stroke="#93c5fd" stroke-width="1.8" stroke-dasharray="6 4"/>
  <circle cx="230" cy="130" r="5.5" fill="#dc2626"/>
  <text x="230" y="156" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">node: no motion</text>
  <rect x="216" y="100" width="28" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="230" y="92" text-anchor="middle" fill="#dc2626" font-size="12">sensor here</text>
  <rect x="116" y="60" width="28" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="130" y="52" text-anchor="middle" fill="#1d4ed8" font-size="12">better here</text>
  <circle cx="130" cy="82" r="4" fill="#1d4ed8"/>
  <circle cx="330" cy="178" r="4" fill="#1d4ed8"/>
  <text x="330" y="198" text-anchor="middle" fill="#1d4ed8" font-size="12">antinode</text>
  <line x1="60" y1="118" x2="60" y2="142" stroke="#334155" stroke-width="3"/>
  <line x1="400" y1="118" x2="400" y2="142" stroke="#334155" stroke-width="3"/>
  <text x="230" y="30" text-anchor="middle" fill="#334155" font-weight="600">second bending mode of the bracket</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">a sensor at a node makes a real mode look absent in the FRF</text>
</svg>`;

const figStick = `<svg viewBox="0 0 460 236" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="dv19-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="66" y1="186" x2="430" y2="186" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv19-ax)"/>
  <line x1="66" y1="186" x2="66" y2="38" stroke="#64748b" stroke-width="1.5" marker-end="url(#dv19-ax)"/>
  <text x="10" y="32" fill="#64748b">drive force</text>
  <text x="392" y="204" fill="#64748b">time</text>
  <line x1="66" y1="66" x2="410" y2="66" stroke="#dc2626" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="414" y="70" fill="#dc2626" font-size="12">F<tspan baseline-shift="sub" font-size="9">static</tspan></text>
  <line x1="66" y1="118" x2="410" y2="118" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="404" y="122" fill="#64748b" font-size="12">F<tspan baseline-shift="sub" font-size="9">kinetic</tspan></text>
  <polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="66,150 116,66 116,118 166,66 166,118 216,66 216,118 266,66 266,118 316,66 316,118 366,66 366,118 400,90"/>
  <circle cx="116" cy="66" r="4" fill="#dc2626"/>
  <circle cx="216" cy="66" r="4" fill="#dc2626"/>
  <circle cx="316" cy="66" r="4" fill="#dc2626"/>
  <text x="140" y="52" text-anchor="middle" fill="#dc2626" font-size="12">breakaway</text>
  <text x="91" y="164" text-anchor="middle" fill="#1d4ed8" font-size="12">stick</text>
  <text x="141" y="104" text-anchor="middle" fill="#1d4ed8" font-size="12">slip</text>
  <text x="230" y="222" text-anchor="middle" fill="#64748b" font-size="12">force ramps while the slide sticks, then drops the instant it breaks free</text>
</svg>`;

const extra: Question[] = [
  {
    id: "dynamics-vibrations-q21",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A payload sits on a scale inside an elevator. While the elevator accelerates upward at a, the scale reads high. Which free-body result explains the reading?</p>",
    choices: [
      "N = mg &minus; ma, because acceleration always subtracts from the weight.",
      "N = m(g + a), because the floor must hold the weight and accelerate it.",
      "N is independent of acceleration for any rigid body on a rigid floor.",
      "N drops to zero the moment the elevator starts moving upward at all."
    ],
    answer: 1,
    explanation: "<p>Draw the payload alone: normal force N up, weight mg down, acceleration a up. Newton's second law along the vertical gives N &minus; mg = ma, so N = m(g + a). The scale reads force, not mass, so a 10 kg payload in an elevator accelerating at 2 m/s<sup>2</sup> reads 10(9.81 + 2) = 118 N, equivalent to 12 kg.</p><p>Choice A has the sign for <em>downward</em> acceleration. That is the free-fall case, and taking a = g gives N = 0, which is weightlessness. Choice C applies a statics habit to a dynamics problem. Choice D confuses velocity with acceleration: once the elevator is cruising at constant speed the reading returns to mg, however fast it is moving. The habit worth carrying: define the positive acceleration direction on the diagram before writing any equation.</p>"
  },
  {
    id: "dynamics-vibrations-q22",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A shaft rotates at 2400 rpm. Convert this speed to angular velocity in rad/s.</p>",
    answer: 251,
    unit: "rad/s",
    tolerance: 0.03,
    explanation: "<p class=\"eq\">&omega; = 2400(2&pi;)/60 = 80&pi; = <strong>251 rad/s</strong></p><p>The same speed is 40 Hz. Those three numbers, 2400 rpm and 40 Hz and 251 rad/s, are one physical thing in three unit systems.</p><p>E = &frac12;I&omega;<sup>2</sup>, F = me&omega;<sup>2</sup> and gyroscopic M = I&omega;&Omega; all want the rad/s version. Dropping 2400 straight in inflates a speed-linear result by 9.55&times; and a speed-squared result by 91&times;, which is how a benign unbalance calculation turns into a nonsense force.</p>"
  },
  {
    id: "dynamics-vibrations-q23",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 12 kg machine sits on mounts with a combined vertical stiffness of 4800 N/m. What viscous damping coefficient would make the system critically damped?</p>",
    answer: 480,
    unit: "N*s/m",
    tolerance: 0.03,
    explanation: "<p class=\"eq\">c<sub>c</sub> = 2&radic;(km) = 2&radic;(4800 &times; 12) = <strong>480 N&middot;s/m</strong></p><p>Scale from there: 48 N&middot;s/m gives &zeta; = 0.10, and a realistic elastomer mount at &zeta; = 0.07 is about 34 N&middot;s/m.</p><p>Critical damping is a reference point, almost never the design target for isolation. Damper force follows relative velocity, so heavy damping transmits high-frequency energy straight through the mount.</p>"
  },
  {
    id: "dynamics-vibrations-q24",
    type: "mc",
    difficulty: 2,
    prompt: "<p>On a shaker test, displacement is nearly in phase with the drive force below resonance, about 90&deg; behind at resonance, and nearly 180&deg; out of phase above it. Why does a test engineer care about the phase channel?</p>",
    choices: [
      "Phase is a display option on the analyser and cannot change a diagnosis.",
      "Phase is zero at every frequency for any linear mechanical structure.",
      "Phase separates stiffness-, damping-, and mass-controlled response.",
      "Phase carries information only in electrical circuits, not in structures."
    ],
    answer: 2,
    explanation: "<p>Forced response is complex: amplitude and phase each carry physics. Below resonance the spring term dominates and the mass follows the force, so phase is near 0&deg;. At resonance the stiffness and inertia terms cancel exactly and only the damper resists, so phase is 90&deg; and amplitude is set entirely by &zeta;. Above resonance inertia dominates and the response inverts to 180&deg;.</p><p>That makes phase the cleanest way to locate a resonance. The 90&deg; crossing is sharp even when the amplitude peak is broad and buried in noise. It also separates real modes from measurement artefacts, which show no orderly phase roll. Balancing depends on it outright: the influence coefficient is a vector, and without phase you know how much correction mass to add but not where to put it.</p>"
  },
  {
    id: "dynamics-vibrations-q25",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A precision instrument is mounted on a truck frame that moves vertically with the road. Which model belongs in a first-pass isolation analysis?</p>",
    figure: figBase,
    choices: [
      "Apply the road force directly to the instrument mass and ignore the base.",
      "Use base excitation: support motion is the input, response follows r and &zeta;.",
      "Use static equilibrium, since the frame displacement is already prescribed.",
      "Use impulse-momentum for road input, including steady sinusoidal content."
    ],
    answer: 1,
    explanation: "<p>Here the input is a prescribed <em>displacement</em> of the base, not a force applied to the mass. The spring and damper see the relative motion across them, and that relative motion generates the force that shakes the payload. Displacement transmissibility takes the same form as force transmissibility, so the design targets are identical: get the frequency ratio above &radic;2 and preferably above 3.</p><p>Choice A is a legitimate model for a different problem, a motor applying harmonic force to a foundation, but reversing input and output here gives the wrong sensitivity to mass. Choice C throws away every dynamic effect, including the resonance you must survive when the truck hits a pothole. Choice D suits a discrete shock, not continuous broadband road input. Picking the right idealisation is frequently the whole interview question; the numbers afterwards are the easy part.</p>"
  },
  {
    id: "dynamics-vibrations-q26",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A gearbox passes every static torque check, yet reversing direction produces an audible knock and a spike in encoder following error. Which dynamic effect is the prime suspect?</p>",
    choices: [
      "A static factor of safety above 2 removes transient dynamic behaviour.",
      "The gear teeth become effectively massless whenever torque changes sign.",
      "Encoder error at reversal proves the bearing supports are perfectly rigid.",
      "Backlash plus drivetrain compliance gives impact and torsional ringing."
    ],
    answer: 3,
    explanation: "<p>Backlash is a dead zone: at reversal the driving flank leaves contact and the input rotates freely until the opposite flank is picked up. Meanwhile the shafts and couplings store elastic energy, so re-engagement is an impact, not a hand-off. The result is a knock, a burst of torsional ringing at the drivetrain natural frequency &radic;(k<sub>t</sub>/J), and a following error the controller cannot see coming because the load is momentarily disconnected from the motor.</p><p>Static capacity is irrelevant to all of this. A joint can be strong and still behave badly. The fixes act on backlash or on the energy: preloaded or split gears, anti-backlash mechanisms, a torque-ramp through zero crossing, added damping, a direct-drive or harmonic-drive architecture, or closing the loop on the load rather than the motor. Treating a gear train as a rigid kinematic ratio is the mistake when it is really inertia, stiffness, clearance, damping, and friction.</p>"
  },
  {
    id: "dynamics-vibrations-q27",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 3.0 kg slider travelling at 2.0 m/s is brought to rest by a bumper in 0.040 s. Estimate the average stopping force magnitude in N.</p>",
    answer: 150,
    unit: "N",
    tolerance: 0.03,
    explanation: "<p>The question gives a stopping <em>time</em>, so reach for impulse-momentum rather than energy.</p><p class=\"eq\">F<sub>avg</sub> = m|&Delta;v|/&Delta;t = 3.0(2.0)/0.040 = <strong>150 N</strong></p><p>About 5 times the slider's weight, which tells you the bumper bracket needs real fasteners.</p><p>Two things to say out loud. This is the average, and the peak can be two or three times higher depending on how the bumper's stiffness builds. And the force is inversely proportional to contact time, so doubling the stopping time to 80 ms halves it.</p><p>Energy needs a stopping <em>distance</em>; impulse needs a stopping <em>time</em>. Mixing them is the standard slip.</p>"
  },
  {
    id: "dynamics-vibrations-q28",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A rotor-bearing lateral mode is approximated as m = 18 kg on a lateral stiffness of 7.2 &times; 10<sup>5</sup> N/m. Estimate the critical speed in rpm.</p>",
    figure: figRotor,
    answer: 1910,
    unit: "rpm",
    tolerance: 0.03,
    explanation: "<p>Critical speed is the speed at which the once-per-revolution unbalance excitation coincides with a lateral natural frequency, so it is the same &radic;(k/m) calculation dressed in rpm.</p><p>&omega;<sub>n</sub> = &radic;(7.2 &times; 10<sup>5</sup>/18) = &radic;40000 = 200 rad/s</p><p>N = 200 &times; 60/(2&pi;) = <strong>1910 rpm</strong> (equivalently 31.8 Hz)</p><p>Running continuously near 1910 rpm would need careful balance, damping at the bearings, and a check that whirl amplitude stays inside the seal clearances. The usual practice is a separation margin of 15&ndash;20% from any continuous operating speed. Watch the unit chain: 200 is rad/s, 31.8 is Hz, and 1910 is rpm; picking the wrong one is a factor of 2&pi; or 60. The model is deliberately crude. Real critical speeds depend on distributed shaft mass, bearing support stiffness and damping, gyroscopic effects, and overhung components.</p>"
  },
  {
    id: "dynamics-vibrations-q29",
    type: "mc",
    difficulty: 3,
    prompt: "<p>An accelerometer is sampled at 500 Hz. The machine has a genuine vibration component at 380 Hz, but the plotted spectrum shows a strong line near 120 Hz and nothing at 380. What is going on?</p>",
    figure: figAlias,
    choices: [
      "Critical damping, since heavily damped systems always read lower in Hz.",
      "Rigid-body motion, because flexible modes cannot reach the accelerometer.",
      "Aliasing: 380 Hz folds about the 500 Hz sample rate down to 120 Hz.",
      "A static calibration error, because sample rate cannot alter frequency."
    ],
    answer: 2,
    explanation: "<p>Nyquist frequency is half the sample rate, 250 Hz here. Anything above that folds back into the measurable band unless an anti-alias filter removes it first. The fold is about the sample rate:</p><p>f<sub>alias</sub> = |f<sub>s</sub> &minus; f| = |500 &minus; 380| = <strong>120 Hz</strong></p><p>The plot looks perfectly clean. That is what makes aliasing dangerous. You would chase a 120 Hz structural problem that does not exist while missing a real 380 Hz one. The tell in the field is that the peak moves the <em>wrong way</em> when you change sample rate: raise f<sub>s</sub> to 600 Hz and the false line jumps to 220 Hz, while a real 120 Hz component would not budge.</p><p>Damping changes amplitude and decay rate, never the frequency of a measured component. The fixes are an analogue anti-alias filter ahead of the ADC, a sample rate of 5&ndash;10&times; the highest frequency of interest rather than the bare 2&times;, and a check that the sensor and mount bandwidth actually cover the band you claim to measure.</p>"
  },
  {
    id: "dynamics-vibrations-q30",
    type: "mc",
    difficulty: 3,
    prompt: "<p>During a run-up a vibration peak sits at 30 Hz when the shaft turns 1800 rpm, 40 Hz at 2400 rpm, and 50 Hz at 3000 rpm. What does that pattern indicate?</p>",
    choices: [
      "A fixed structural natural frequency that does not move with shaft speed.",
      "Electrical line frequency, which stays pinned near a constant 60 Hz.",
      "A 1x order: the peak equals shaft speed, pointing at unbalance.",
      "Aliasing is ruled out simply because the observed frequency changes."
    ],
    answer: 2,
    explanation: "<p>Convert each speed to Hz: 1800/60 = 30, 2400/60 = 40, 3000/60 = 50. The peak lands exactly on shaft speed at all three points, so it is a once-per-revolution (1x) order. Unbalance is the classic source; misalignment, a bent shaft, a cracked rotor, and mechanical looseness are the other synchronous candidates, and phase measurement is what separates them (pure unbalance gives a steady phase relative to a key-phasor).</p><p>A fixed structural mode behaves completely differently: it stays put in Hz while its <em>amplitude</em> peaks whenever an order sweeps through it. Line frequency would sit at 50 or 60 Hz regardless of speed. That distinction, does the frequency track speed, or does the amplitude peak at one speed, is the first question in any rotating-machinery diagnosis, and it is exactly why order tracking and Campbell diagrams exist for variable-speed equipment.</p>"
  },
  {
    id: "dynamics-vibrations-q31",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A rubber-mounted assembly shows a natural frequency that drops steadily as the drive amplitude is increased, and run-up and run-down sweeps do not overlay. Which modelling assumption has broken down?</p>",
    choices: [
      "Linearity: rubber stiffness and damping vary with amplitude and preload.",
      "Momentum conservation, which stops applying to soft polymer materials.",
      "Mass participation, since effective mass falls toward zero at high drive.",
      "Measurement units, because frequency cannot be defined for rubber parts."
    ],
    answer: 0,
    explanation: "<p>A linear SDOF model assumes k and c are constants. Elastomers violate that badly: dynamic modulus falls with strain amplitude (the Payne effect), rises with frequency, and falls with temperature, and it also depends on static preload. Frictional joints, wire-rope isolators, cable harnesses, and any system that reaches a hard stop misbehave the same way.</p><p>A frequency that <em>falls</em> as amplitude rises is a softening nonlinearity, and the non-overlaying sweeps are its fingerprint: the response curve leans over far enough that the system jumps between two stable branches at different points going up and coming down. You will also see harmonics of the drive frequency that a linear system cannot produce.</p><p>Newton's laws are not in question here, so choice B is nonsense; the model is what failed, not the physics. The practical response is to test across the amplitude, preload, and temperature range the product actually sees, and to quote mount data at the operating strain rather than at whatever tiny excitation makes the numbers look repeatable.</p>"
  },
  {
    id: "dynamics-vibrations-q32",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A damped system has undamped natural frequency &omega;<sub>n</sub> = 25 rad/s and damping ratio &zeta; = 0.30. Estimate the damped natural frequency &omega;<sub>d</sub> in rad/s.</p>",
    answer: 23.8,
    unit: "rad/s",
    tolerance: 0.03,
    explanation: "<p>Substitute into the damped-frequency expression:</p><p>&omega;<sub>d</sub> = &omega;<sub>n</sub>&radic;(1 &minus; &zeta;<sup>2</sup>) = 25&radic;(1 &minus; 0.09) = 25&radic;0.91 = 25(0.954) = <strong>23.8 rad/s</strong></p><p>Note how little the frequency moved: &zeta; = 0.30 is <em>moderate</em> damping, well beyond the 1&ndash;5% typical of metal structures, and it still only pulls the frequency down 4.6%. At &zeta; = 0.10 the shift is 0.5% and at &zeta; = 0.05 it is 0.1%, which is why measured damped frequencies are quoted as natural frequencies without apology.</p><p>The design consequence is the important one: <strong>damping does not move modes</strong>. If a mode is sitting on an excitation, adding damping lowers the peak but leaves the coincidence in place. You have to change k or m. The formula only reaches zero at &zeta; = 1, where oscillation stops entirely. Two algebra slips are worth naming. Writing (1 &minus; &zeta;) under the radical gives 25&radic;0.70 = 20.9 rad/s; dropping the radical altogether and writing &omega;<sub>d</sub> = &omega;<sub>n</sub>(1 &minus; &zeta;) gives 17.5 rad/s, 27% low.</p>"
  },
  {
    id: "dynamics-vibrations-q33",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A positioning axis behaves like a second-order system with &zeta; = 0.50 and &omega;<sub>n</sub> = 40 rad/s. Estimate the 2% settling time using T<sub>s</sub> &asymp; 4/(&zeta;&omega;<sub>n</sub>), in seconds.</p>",
    answer: 0.200,
    unit: "s",
    tolerance: 0.03,
    explanation: "<p>The settling time of a dominant second-order response is governed by the exponential envelope e<sup>&minus;&zeta;&omega;t</sup>, and reaching 2% takes about four time constants:</p><p>T<sub>s</sub> &asymp; 4/(&zeta;&omega;<sub>n</sub>) = 4/(0.50 &times; 40) = 4/20 = <strong>0.200 s</strong></p><p>Notice that only the product &zeta;&omega;<sub>n</sub> matters. That is the real part of the pole. Doubling either one halves the settling time, so a stiffer mechanism and a better-damped loop buy exactly the same thing on paper. They do not: raising &omega;<sub>n</sub> by stiffening the mechanism is nearly free, while raising loop gain to get damping eventually excites the first structural mode and the axis starts to ring instead of settle. The rule of thumb is to keep the closed-loop bandwidth well below the lowest structural mode. Backlash, stiction, and actuator saturation all make real settling slower than this tidy estimate predicts.</p>"
  },
  {
    id: "dynamics-vibrations-q34",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A product passes sinusoidal vibration qualification but cracks during drop testing. Why is passing the sine sweep not sufficient evidence of ruggedness?</p>",
    choices: [
      "Drops are transients: high peak g and broad content load parts differently.",
      "A drop applies no acceleration at all because the event is over so quickly.",
      "Sine qualification is by definition more severe than any shock event.",
      "Impact damage follows directly from the steady-state sine amplitude."
    ],
    answer: 0,
    explanation: "<p>The two tests excite the hardware in fundamentally different ways. A sine sweep dwells at one frequency at a time at modest amplitude, and its damage mechanism is high-cycle fatigue. A drop delivers a short pulse whose spectrum is broad: it lights up every mode at once, drives peak strain in a single event, and adds contact nonlinearity, stress-wave effects, and rigid-body rebound. A latch, solder joint, or bracket can survive millions of low-amplitude cycles and still fracture on the first 500 g pulse.</p><p>Choice B inverts the physics: a short stopping time means <em>high</em> acceleration, since a = &Delta;v/&Delta;t. Choice C is simply false as a general claim. Choice D ignores that shock response depends on the pulse duration relative to the part's natural period. That ratio is exactly what a shock response spectrum plots.</p><p>The right qualification plan covers both: sine or random vibration for fatigue, plus drop and shock testing for peak survivability, with the analysis matched to each (fatigue accumulation for one, SRS or explicit transient simulation for the other).</p>"
  },
  {
    id: "dynamics-vibrations-q35",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A handheld power tool meets every structural stress limit, but users report that it feels harsh and buzzy at 120 Hz. Which requirement was most likely missing?</p>",
    choices: [
      "Human vibration limits, which are stricter than structural survival here.",
      "Static factor of safety, since comfort is governed by yield stress alone.",
      "Gravity compensation, because hand vibration comes from the tool weight.",
      "Nyquist sampling, since perceived harshness cannot be measured at all."
    ],
    answer: 0,
    explanation: "<p>Vibration can be mechanically safe and commercially unacceptable. Hand-arm sensitivity peaks in the 100&ndash;300 Hz region, so 120 Hz is close to the worst place to put a tonal component. Standards such as ISO 5349 quantify hand-arm exposure in frequency-weighted m/s<sup>2</sup>, and it is the weighted acceleration at the grip, not the stress in the housing, that governs.</p><p>120 Hz is also a diagnostic clue: it is 2&times; a 60 Hz line frequency, or the running speed of a 7200 rpm motor, or a gear mesh order. Chasing it means finding the source (imbalance, mesh, bearing, commutation ripple), then deciding whether to reduce the excitation, isolate the grip with an elastomer, add damping, or move a housing mode off 120 Hz.</p><p>The blind spot choice B names is a common one: survival requirements are easy to write and easy to pass, and they say nothing about perceived quality. The requirement set should include grip acceleration limits, sound quality, and tonality across the real duty cycle.</p>"
  },
  {
    id: "dynamics-vibrations-q36",
    type: "mc",
    difficulty: 2,
    prompt: "<p>During single-plane balancing a trial weight added at 0&deg; makes the 1x amplitude larger and shifts its phase. What have you actually gained from that run?</p>",
    choices: [
      "It proves this rotor cannot be balanced in a single correction plane.",
      "It gives the influence coefficient, so correction mass and angle follow.",
      "It removes any need to measure phase during the balancing procedure.",
      "It makes the rotor response identical at every speed in the range."
    ],
    answer: 1,
    explanation: "<p>Balancing is vector algebra. The original run gives a vibration vector V<sub>0</sub> (amplitude and phase). Adding a known trial mass at a known angle gives a second vector V<sub>1</sub>. The difference V<sub>1</sub> &minus; V<sub>0</sub> is the response caused by the trial mass alone, so the influence coefficient is &alpha; = (V<sub>1</sub> &minus; V<sub>0</sub>)/W<sub>trial</sub>, vibration per unit mass at a given angle. The correction is then W = &minus;V<sub>0</sub>/&alpha;, which sets both the size of the correction and where to put it.</p><p>Amplitude going <em>up</em> is not a failure; it simply means the trial mass landed near the heavy side, and the run is just as informative either way. Choice C gets it backwards: phase is precisely what fixes the angular location, and amplitude alone leaves you guessing around the full circle.</p><p>The method assumes linear response and a stable speed, which is why you balance at a fixed speed away from a critical. A rotor long enough to carry a couple unbalance needs two planes and a 2&times;2 influence-coefficient matrix.</p>"
  },
  {
    id: "dynamics-vibrations-q37",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 2.0 kg instrument is dropped from 0.50 m onto a foam pad that stops it over 5.0 mm of crush. Neglecting rebound, estimate the average force on the instrument in N.</p>",
    answer: 1960,
    unit: "N",
    tolerance: 0.04,
    explanation: "<p>The question gives a stopping <em>distance</em>, so energy is the right tool. The drop energy is</p><p>mgh = 2.0(9.81)(0.50) = 9.81 J</p><p>All of it must be absorbed over s = 0.0050 m of crush, so F<sub>avg</sub>s = mgh:</p><p>F<sub>avg</sub> = 9.81/0.0050 = <strong>1960 N</strong></p><p>That is 100&times; the instrument's own weight, which is the whole lesson: peak deceleration scales as h/s, so the ratio of drop height to crush distance <em>is</em> the g-level. Getting to a survivable 50 g here would need 10 mm of effective crush per 0.5 m of drop, and real foam only uses about 70% of its thickness before bottoming out, so you specify roughly 15 mm.</p><p>Two refinements: including the weight during the stop adds mg for a 1% correction, and the peak force exceeds the average by a factor that depends on how square the foam's stress-strain curve is (2&times; for a linear spring, close to 1 for ideal crushable foam).</p>"
  },
  {
    id: "dynamics-vibrations-q38",
    type: "mc",
    difficulty: 1,
    prompt: "<p>A block slides from rest down a frictionless curved track, and the only quantity asked for is its speed at the bottom. Which method is cleanest?</p>",
    choices: [
      "Impulse-momentum, since the contact force history along the track is known.",
      "A static force balance with the acceleration term set equal to zero.",
      "Energy: gravity does work over the drop and the normal force does none.",
      "A frequency response function, since every moving body vibrates somewhat."
    ],
    answer: 2,
    explanation: "<p>Energy wins because the normal force is always perpendicular to the motion and therefore does no work, and there is no friction to account for. Everything reduces to mgh = &frac12;mv<sup>2</sup>, giving v = &radic;(2gh), independent of the track's shape and of the block's mass.</p><p>Newton's second law would work but you would have to track a tangential acceleration that changes continuously with slope angle, then integrate along the path, all to recover a result energy gives in one line. Impulse-momentum needs the force history you do not have. Static equilibrium is simply invalid on an accelerating body.</p><p>The method-selection habit is what is being tested: energy when the question asks for a speed or a position and time is irrelevant; impulse-momentum when a force acts briefly and you want the change in motion; Newton or Euler when you need an acceleration, an internal reaction, or a time history. And if the block were rolling rather than sliding, energy still wins. You just add the &frac12;I&omega;<sup>2</sup> term.</p>"
  },
  {
    id: "dynamics-vibrations-q39",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A turbine must cross its first critical speed on every startup but operates well above it. Which practice is most defensible?</p>",
    choices: [
      "Dwell at the critical speed so the rotor can settle into steady resonance.",
      "Remove damping so the peak is large enough to be easy to detect.",
      "Ramp through it promptly, with balance, damping, and clearances checked.",
      "Ignore the crossing entirely, since steady operating speed sits above it."
    ],
    answer: 2,
    explanation: "<p>Supercritical operation is normal, and the risk lives entirely in the transit. Resonant amplitude takes time to build, roughly Q cycles, so a fast ramp means the rotor never reaches steady-state response at the critical. That is a real, quantifiable benefit, not a shortcut.</p><p>Everything else supports it. Balance quality sets the excitation, and response at the critical is directly proportional to residual unbalance. Damping (squeeze-film dampers, bearing support design) sets the peak, since at resonance amplitude is controlled by &zeta; alone. Then you verify that the peak transient orbit stays inside seal and blade-tip clearances, and back it up with proximity probes and vibration trip logic.</p><p>Dwelling at the critical is only ever done as a controlled test. Removing damping makes the peak worse and is exactly backwards. Ignoring the crossing misses the rubs, seal damage, and fatigue cycles that accumulate on every start and stop. A machine with many starts can see the critical thousands of times over its life.</p>"
  },
  {
    id: "dynamics-vibrations-q40",
    type: "mc",
    difficulty: 2,
    prompt: "<p>A modal hammer test fails to show a bracket mode that FE predicts and that the machine clearly excites. The accelerometer happened to be mounted at a point that barely moves in that mode. What went wrong?</p>",
    figure: figNode,
    choices: [
      "The hammer impulse was too short in duration to excite any bending mode.",
      "The sensor sat near a node, so that mode barely moved at that location.",
      "Accelerometers cannot resolve modes of thin flexible sheet structures.",
      "Mode shapes do not depend on where the response sensor is mounted."
    ],
    answer: 1,
    explanation: "<p>Every mode shape has nodes where motion is near zero and antinodes where it is maximum. A frequency response function is the product of the excitation at the drive point and the response at the measurement point, so putting <em>either</em> one at a node makes the mode nearly vanish from the measurement even though it is fully present in the structure.</p><p>A short hammer impulse is the opposite of a problem. A short contact time gives broad, flat frequency content, which is exactly why hammers are used. Choice C is false, and choice D confuses the mode shape (a property of the structure) with what a single sensor can see of it.</p><p>The fix is measurement design, not equipment: measure several response points, or roving-hammer many drive points against one reference, and choose locations from a preliminary FE mode shape so no target mode has both ends at a node. This cuts the other way too, if you want to sense a specific mode for control, mount the sensor at its antinode deliberately.</p>"
  },
  {
    id: "dynamics-vibrations-q41",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A heavily damped isolation mount controls the startup resonance beautifully, but transmits more high-frequency motor buzz than the lightly damped mount it replaced. Why can that happen?</p>",
    figure: figTrans,
    choices: [
      "Damper force scales with relative velocity, so it grows at high frequency.",
      "Damping improves transmissibility at every frequency without exception.",
      "High-frequency vibration is physically unable to pass through a damper.",
      "Adding damping drives the mount natural frequency toward infinity."
    ],
    answer: 0,
    explanation: "<p>Look at the numerator of transmissibility: T = &radic;[1 + (2&zeta;r)<sup>2</sup>] / &radic;[(1 &minus; r<sup>2</sup>)<sup>2</sup> + (2&zeta;r)<sup>2</sup>]. The damper contributes a term that <em>grows</em> with r, so at high frequency T rolls off as 2&zeta;/r instead of the 1/r<sup>2</sup> an undamped mount would give. At r = 4 the numbers on the plot are T = 0.10 for &zeta; = 0.15 but T = 0.31 for &zeta; = 0.60, three times worse.</p><p>Physically, the damper is a velocity-proportional force path bridging the isolator. High-frequency motion means high relative velocity, and that force goes straight through.</p><p>So isolation is a genuine tradeoff, not a free lunch. Low damping gives the best high-frequency isolation but a violent resonance crossing; high damping tames the crossing and pays for it in buzz. Typical elastomer mounts land at &zeta; = 0.05&ndash;0.10 for exactly this reason, and where both ends matter the answer is often a frequency-dependent element: a soft primary path with a snubber or a tuned secondary stage.</p>"
  },
  {
    id: "dynamics-vibrations-q42",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A flywheel with mass moment of inertia I = 0.10 kg&middot;m<sup>2</sup> spins at 3000 rpm. Estimate the stored rotational kinetic energy in joules.</p>",
    answer: 4930,
    unit: "J",
    tolerance: 0.03,
    explanation: "<p>Convert the speed before anything else: &omega; = 2&pi;(3000)/60 = 314 rad/s.</p><p class=\"eq\">E = &frac12;I&omega;<sup>2</sup> = 0.5(0.10)(314<sup>2</sup>) = <strong>4930 J</strong></p><p>That is roughly the muzzle energy of a rifle round, stored in a part you can hold in one hand. Energy goes as &omega;<sup>2</sup>, so a 20% overspeed carries 44% more of it, which is why flywheels get containment housings, spin tests and overspeed trips.</p><p>Putting 3000 in directly returns 450,000 in meaningless units, off by the square of 9.55.</p>"
  },
  {
    id: "dynamics-vibrations-q43",
    type: "mc",
    difficulty: 3,
    prompt: "<p>An FE model predicts a 220 Hz bracket mode; the shaker test finds it at 170 Hz. What do you check before concluding the solver is wrong?</p>",
    choices: [
      "Joint and boundary stiffness, sensor and cable mass, and as-built geometry.",
      "Only the colour scale used to render the animated mode-shape plot.",
      "Whether gravity was suppressed, since modes require a zero-g solution.",
      "Nothing at all: test data are wrong whenever the FE mesh is finer."
    ],
    answer: 0,
    explanation: "<p>Quantify the gap first. Frequency goes as &radic;(k/m), so (170/220)<sup>2</sup> = 0.60: the real assembly has 40% less effective stiffness-to-mass than the model. That is far too big for mesh refinement and points straight at modelling assumptions.</p><p>Work the list in order of likely magnitude. Boundary conditions come first, a bolted or spot-welded joint modelled as bonded contact is dramatically stiffer than reality, and a fixture that is not much stiffer than the part becomes part of the mode. Then added mass: a 10 g accelerometer plus cable on a 100 g bracket shifts a mode several percent, and the sensor is usually at the antinode where it does the most damage. Then as-built geometry, material properties, and any preload or stress-stiffening.</p><p>Then compare <em>mode shapes</em>, not just frequencies, matching one number by coincidence proves nothing. The productive outcome is a correlated model: add joint stiffness elements, include sensor masses and a realistic fixture, re-test at the same points, and only then trust the model for the load cases you cannot test.</p>"
  },
  {
    id: "dynamics-vibrations-q44",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A drivetrain is modelled as a disk of polar inertia J = 0.050 kg&middot;m<sup>2</sup> on a shaft of torsional stiffness k<sub>t</sub> = 200 N&middot;m/rad. Estimate the torsional natural frequency in Hz.</p>",
    figure: figTorsion,
    answer: 10.1,
    unit: "Hz",
    tolerance: 0.03,
    explanation: "<p>Torsional vibration mirrors the translational case exactly, with torsional stiffness in place of k and mass moment of inertia in place of m:</p><p>&omega;<sub>n</sub> = &radic;(k<sub>t</sub>/J) = &radic;(200/0.050) = &radic;4000 = 63.2 rad/s</p><p>f<sub>n</sub> = 63.2/(2&pi;) = <strong>10.1 Hz</strong></p><p>The units check out because radians are dimensionless: (N&middot;m/rad)/(kg&middot;m<sup>2</sup>) reduces to 1/s<sup>2</sup>. If the shaft is a solid round bar you can build k<sub>t</sub> yourself from GJ<sub>p</sub>/L with J<sub>p</sub> = &pi;d<sup>4</sup>/32, and note that d<sup>4</sup> again, which makes shaft diameter the dominant lever.</p><p>Now do the engineering step: 10.1 Hz is 606 rpm expressed as a shaft order. Ask what excites it. A 4-cylinder 4-stroke engine fires at 2 orders, so 10.1 Hz lands at 303 rpm, inside the cranking range. Gear mesh, motor commutation ripple, and drive PWM are the other suspects. Couplings shift k<sub>t</sub> deliberately, and backlash makes the whole response amplitude-dependent.</p>"
  },
  {
    id: "dynamics-vibrations-q45",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A variable-speed machine is quiet except in a narrow band where a 3x running-speed order crosses a 180 Hz panel mode. Which set of levers attacks the root cause?</p>",
    figure: figCampbell,
    choices: [
      "Reduce the machine's static weight, which is the only frequency lever.",
      "Remove the accelerometers, since instrumenting the panel causes the peak.",
      "Lower the sampling rate until the 180 Hz peak disappears from the plot.",
      "Move the panel mode, shift the speed schedule, or damp that one mode."
    ],
    answer: 3,
    explanation: "<p>This is an order crossing, and a Campbell diagram makes it obvious: order lines rise linearly with speed while structural modes stay horizontal, and trouble lives at the intersections. The 3x order reaches 180 Hz at 180 &times; 60/3 = 3600 rpm, which is the noisy band.</p><p>Fixes attack either side of the crossing. Move the mode, a rib or a bead pattern raising panel stiffness by 2&times; takes 180 Hz to 255 Hz, and 3x would then need 5100 rpm. Move the excitation, skip that speed in the duty cycle, or ramp through it. Reduce the source of the 3x content, three-lobed geometry, a three-bladed impeller, a three-phase commutation artefact, whatever is generating it. Or add damping so the crossing is survivable.</p><p>Lowering the sample rate hides the evidence without changing a single newton of load. Static weight only helps if the added mass sits where the mode actually moves. Mass at a node does nothing. This is precisely why Campbell diagrams are standard practice for variable-speed equipment: they let you see every crossing in the operating range before the machine is built.</p>"
  },
  {
    id: "dynamics-vibrations-q46",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A slow positioning slide moves in visible jumps although the commanded velocity is constant. The measured drive force ramps up, drops suddenly, and repeats. Which phenomenon fits?</p>",
    figure: figStick,
    choices: [
      "Pure viscous damping, which yields perfectly smooth motion at constant speed.",
      "Rotor critical speed, even though this axis only translates on its rails.",
      "Aliasing, since any discontinuous-looking motion is a sampling artefact.",
      "Stick-slip: static friction holds until elastic force breaks it free."
    ],
    answer: 3,
    explanation: "<p>Stick-slip needs two ingredients: static friction larger than kinetic friction, and compliance somewhere in the drive path. While the slide sticks, the drive keeps advancing and winds up the compliant element, so force ramps linearly. When force reaches the breakaway threshold the slide lets go, friction immediately drops to the kinetic value, the stored elastic energy launches the slide forward, it overshoots and re-sticks, and the cycle repeats. That sawtooth force trace is the fingerprint.</p><p>Viscous damping gives force proportional to velocity with no breakaway threshold, so it cannot produce the discontinuity. Aliasing distorts sampled data but does not make a machine physically lurch, and you can feel this one with a hand on the axis.</p><p>The fixes attack either ingredient: lubricants or PTFE-filled ways that make kinetic friction equal or exceed static, rolling elements instead of sliding ways, higher drive stiffness (shorter, fatter ballscrew, direct drive), preload to keep contacts loaded, dither injected into the command, or velocity feedforward. It is worst at low speed, which is why the problem often disappears the moment you speed the axis up.</p>"
  },
  {
    id: "dynamics-vibrations-q47",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A rotating assembly may transmit no more than 20 N of unbalance force at its 3600 rpm service speed. What residual unbalance U = me does that allow, in g&middot;mm?</p>",
    answer: 141,
    unit: "g*mm",
    tolerance: 0.03,
    explanation: "<p>Invert the unbalance force relation. First convert speed:</p><p>&omega; = 2&pi;(3600)/60 = 377 rad/s</p><p>U = F/&omega;<sup>2</sup> = 20/(377<sup>2</sup>) = 20/142,100 = 1.41 &times; 10<sup>&minus;4</sup> kg&middot;m</p><p>Convert to the units a balancing machine actually reports (1 kg&middot;m = 10<sup>6</sup> g&middot;mm):</p><p>U = <strong>141 g&middot;mm</strong></p><p>This is an <em>equivalent</em> unbalance, not a specific correction mass: 14.1 g at 10 mm radius, 1.41 g at 100 mm, and 0.7 g at 200 mm all satisfy it. That is why balance corrections are made at the largest convenient radius. The mass you add gets small enough to drill or grind away accurately.</p><p>Note how fast the spec tightens with speed. Double to 7200 rpm and the same 20 N limit allows only 35 g&middot;mm, because &omega;<sup>2</sup> quadrupled. Always write the requirement against the maximum service speed, and if the rotor is long enough to carry a couple unbalance, specify two correction planes rather than one.</p>"
  },
  {
    id: "dynamics-vibrations-q48",
    type: "mc",
    difficulty: 2,
    prompt: "<p>Switching to a softer mount improves high-frequency isolation, but now the machine sags noticeably and slams its travel stops during startup. Which tradeoff is on display?</p>",
    choices: [
      "Lower stiffness lowers f<sub>n</sub> but raises sag and resonance travel.",
      "Lower stiffness reduces motion at every frequency and every load case.",
      "Static deflection under load is unrelated to the chosen mount stiffness.",
      "Travel stops reduce impact loads by making the system more linear."
    ],
    answer: 0,
    explanation: "<p>Static sag and natural frequency are two views of the same number: &delta; = W/k and f<sub>n</sub> = (1/2&pi;)&radic;(g/&delta;). Halving stiffness doubles the sag and drops the frequency by &radic;2, so you cannot buy isolation without buying travel. Going from 5 Hz to 2.5 Hz means moving from 10 mm of sag to 40 mm.</p><p>Worse, the relative motion at the resonance you cross on startup is roughly Q times the static excursion, so a soft, lightly damped mount can need many times its static sag in clearance. When the stops engage, the system stiffness jumps by orders of magnitude and the impact transmits a shock far larger than anything the mount was fitted to prevent, the opposite of choice D, since a hard stop is the most nonlinear element in the assembly.</p><p>Good mount selection checks static load and sag, dynamic travel through resonance, shock and transport cases, rocking and roll modes as well as the vertical one, and creep, temperature, and ageing of the elastomer. Adding damping or a progressive-rate snubber is the usual way to keep the crossing survivable.</p>"
  },
  {
    id: "dynamics-vibrations-q49",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A bearing housing spectrum shows a broad high-frequency band with sidebands spaced at shaft speed around a bearing defect frequency, and only a modest 1x line. What diagnosis fits better than rotor unbalance?</p>",
    choices: [
      "Pure static unbalance, since unbalance shows up as broadband random noise.",
      "A perfectly rigid shaft running with no metal-to-metal contact events.",
      "A sample-rate choice that guarantees bearing faults vanish from the plot.",
      "A rolling-element or lubrication fault exciting repeated impacts."
    ],
    answer: 3,
    explanation: "<p>Unbalance is synchronous and narrow: a strong 1x line with stable phase and very little else. What is described here is the opposite signature. A spall on a race or rolling element produces a sharp impact each time an element passes it, at a non-integer multiple of shaft speed (BPFO, BPFI, BSF, all set by bearing geometry). Those impacts ring the housing's own high-frequency resonances, which is where the broad band comes from, and because the impact amplitude is modulated as the defect rotates through the load zone you get sidebands spaced at shaft or cage frequency.</p><p>Lubrication starvation gives similar broadband energy without discrete defect lines, and is worth ruling out first because it is cheap to fix.</p><p>The follow-up is envelope (demodulation) analysis, which strips the carrier resonance and exposes the repetition rate directly, plus order tracking, temperature and lubricant checks, and comparison against the calculated defect frequencies for that bearing part number. Adding balance weights here would waste a shift and fix nothing. The mistake is forcing every vibration complaint into an unbalance story.</p>"
  },
  {
    id: "dynamics-vibrations-q50",
    type: "mc",
    difficulty: 2,
    prompt: "<p>An FE modal run reports that the effective modal mass of a bracket's first bending mode is about 40% of the bracket's physical mass. Your hand calculation used the full physical mass. How should you read that?</p>",
    choices: [
      "The FE model lost 60% of the mass and should be remeshed before use.",
      "Nothing useful; modal mass is a solver artefact with no physical meaning.",
      "Only part of the structure moves in that mode, so use the modal mass.",
      "Modal mass equals physical mass whenever the mode shape is normalised."
    ],
    answer: 2,
    explanation: "<p>In a distributed structure, different parts of the mode shape move by different amounts. Material near a clamped root barely moves and contributes almost no kinetic energy, while material at the antinode contributes the most. Effective modal mass weights the physical mass by the square of the mode shape, and it is the number that belongs in &omega;<sub>n</sub> = &radic;(k/m) for that mode.</p><p>The mass is not lost, summing effective masses over all modes recovers the total, it is just distributed across them. Using the full physical mass in a hand calculation therefore <em>underestimates</em> the frequency: with 40% participation the true frequency is &radic;(1/0.4) = 1.58&times; higher than the naive estimate.</p><p>The practical version of this is the classic uniform-cantilever result: lumping about 0.24 of the beam's own mass at the tip reproduces the exact first-mode frequency. Effective modal mass also tells you where a mode matters, a mode with tiny effective mass in the excitation direction may be perfectly visible in a modal test and still be irrelevant to the load case you care about.</p>"
  },
  {
    id: "dynamics-vibrations-q51",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A motor turning at 1440 rpm is carried on mounts whose vertical natural frequency is 6.0 Hz. Assuming light damping, what fraction of the motor's unbalance force reaches the floor?</p>",
    figure: figTrans,
    answer: 0.0667,
    tolerance: 0.05,
    explanation: "<p>Get both frequencies into the same units, then form the ratio:</p><p>f = 1440/60 = 24 Hz, &nbsp; r = f/f<sub>n</sub> = 24/6.0 = 4.0</p><p>For a lightly damped mount well above resonance:</p><p>T &asymp; 1/(r<sup>2</sup> &minus; 1) = 1/(16 &minus; 1) = 1/15 = <strong>0.0667</strong>, about 6.7%</p><p>So roughly 93% of the unbalance force is stopped, which is a good isolator. Sanity-check the hardware implied: 6 Hz needs about 7 mm of static sag, an ordinary elastomer mount.</p><p>Two things to push on. Damping degrades this, at &zeta; = 0.3 the transmissibility at r = 4 is 0.17, not 0.067, because the damper adds a velocity-proportional force path. Second, the mount only earns its keep above r = &radic;2, and this machine passes through 6 Hz on every start and stop, where it amplifies instead. The unit error is comparing 24 Hz against 6 rad/s, or against 6 rpm; a frequency ratio is only meaningful when both quantities share units.</p>"
  },
  {
    id: "dynamics-vibrations-q52",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A rotor with polar mass moment of inertia I = 0.030 kg&middot;m<sup>2</sup> spins at 600 rad/s while its axis is forced to precess at 2.0 rad/s. Estimate the gyroscopic moment magnitude in N&middot;m.</p>",
    answer: 36.0,
    unit: "N*m",
    tolerance: 0.03,
    explanation: "<p>Use the gyroscopic moment magnitude:</p><p>M = I&omega;&Omega; = 0.030(600)(2.0) = <strong>36.0 N&middot;m</strong></p><p>Direction matters as much as magnitude: the moment acts about the axis perpendicular to <em>both</em> the spin and precession axes, so in a real design it has to be handled as a vector cross product. That moment shows up as an equal and opposite couple on the bearings. If they are 200 mm apart, 36 N&middot;m becomes a 180 N radial load added to one and subtracted from the other, which is exactly the kind of load that shortens the life of the bearing on one end only.</p><p>Two things to remember: use rad/s for both rates (rpm would give a nonsense answer inflated by 9.55 per term), and no gyroscopic moment exists unless the spin axis is actually changing direction, a rotor spinning in a fixed direction produces none, however fast it turns. Which is why high-speed rotors resist steering, and why gyroscopic stiffening raises the critical speeds of overhung rotors as speed increases.</p>"
  },
  {
    id: "dynamics-vibrations-q53",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A free-decay trace from a bump test shows the amplitude falling from 10.0 mm to 2.5 mm over 3 complete cycles. Estimate the damping ratio &zeta;.</p>",
    figure: figDecay,
    answer: 0.0733,
    tolerance: 0.04,
    explanation: "<p>This is how damping is actually measured, rather than looked up. Take the logarithmic decrement over n cycles:</p><p>&delta; = (1/n) ln(x<sub>0</sub>/x<sub>n</sub>) = (1/3) ln(10.0/2.5) = (1/3) ln 4 = 1.386/3 = 0.462</p><p>Then convert to damping ratio:</p><p>&zeta; = &delta;/&radic;(4&pi;<sup>2</sup> + &delta;<sup>2</sup>) = 0.462/&radic;(39.48 + 0.214) = 0.462/6.300 = <strong>0.0733</strong></p><p>For small &zeta; the shortcut &zeta; &asymp; &delta;/(2&pi;) gives 0.0735, close enough for a first pass. Cross-check the implication: Q = 1/(2&zeta;) = 6.8, so this structure will amplify about 7&times; at resonance.</p><p>Using several cycles rather than one averages out noise. Two things to verify before trusting the number: plot log-amplitude against cycle count and confirm it is a straight line. Curvature means amplitude-dependent damping from friction or an elastomer, not viscous damping, and check that the trace holds one mode rather than two beating, which shows up as a pulsing envelope instead of a clean decay.</p>"
  },
  {
    id: "dynamics-vibrations-q54",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A swept-sine test shows a bracket resonance at 240 Hz that amplifies the input 25&times;. Estimate the half-power bandwidth of that peak in Hz.</p>",
    figure: figHalfPower,
    answer: 9.6,
    unit: "Hz",
    tolerance: 0.04,
    explanation: "<p>The resonant magnification is the quality factor, so Q = 25 and</p><p>&zeta; = 1/(2Q) = 1/50 = 0.020</p><p>The half-power bandwidth, the width between the two frequencies where the response falls to 0.707 of the peak, follows directly:</p><p>&Delta;f = f<sub>n</sub>/Q = 240/25 = <strong>9.6 Hz</strong></p><p>so the peak spans roughly 235.2 to 244.8 Hz. Two useful consequences. First, this is a genuinely sharp peak: &zeta; = 2% is typical of a bolted metal bracket, and it means a sine sweep must step finely enough to land inside a 9.6 Hz window or the resonance will be missed entirely. Second, sharp peaks are fragile, a 4% shift in frequency from a temperature change or a bolt torque difference moves the excitation right off the peak, which is why measured amplitudes at lightly damped resonances scatter so badly between units.</p><p>The relationship runs both ways: measure &Delta;f off a plot and you get &zeta; without any decay trace at all.</p>"
  },
  {
    id: "dynamics-vibrations-q55",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A random vibration specification is flat at 0.04 g&sup2;/Hz from 20 Hz to 2000 Hz. What overall level in G<sub>rms</sub> does that profile represent?</p>",
    figure: figPSD,
    answer: 8.9,
    unit: "Grms",
    tolerance: 0.03,
    explanation: "<p>The area under a power spectral density curve is the mean square of the signal, so the overall level is the square root of that area. For a flat profile the area is just height times bandwidth:</p><p>mean square = 0.04 g&sup2;/Hz &times; (2000 &minus; 20) Hz = 0.04 &times; 1980 = 79.2 g&sup2;</p><p>G<sub>rms</sub> = &radic;79.2 = <strong>8.9 G<sub>rms</sub></strong></p><p>Two things follow immediately. Random vibration is Gaussian, so instantaneous peaks reach 3&sigma; = 26.7 g and test controllers typically clip there, you size structure against the 3&sigma; level, not the rms. And because the area is dominated by the wide high-frequency end, trimming the top octave matters far more than trimming the bottom: dropping the profile from 2000 to 1000 Hz removes half the area and takes the level to 6.3 G<sub>rms</sub>.</p><p>The natural follow-up is Miles' equation: a mode at 300 Hz with Q = 20 responds at &radic;(&pi;/2 &times; f<sub>n</sub> Q &times; PSD) = &radic;(1.571 &times; 300 &times; 20 &times; 0.04) = 19.4 G<sub>rms</sub>, or about 58 g at 3&sigma;, which is why the resonant response, not the input level, sizes the bracket.</p>"
  },
  {
    id: "dynamics-vibrations-q56",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A mezzanine floor resonates at 8 Hz under a pump and the floor cannot be stiffened. An engineer proposes a tuned mass damper of 5% of the floor's modal mass. What does it do, and what has to be right?</p>",
    figure: figTMD,
    choices: [
      "The absorber adds mass, so the single 8 Hz peak simply moves lower.",
      "Tuned to 8 Hz it pushes back on the floor, splitting one peak into two.",
      "It works by dissipating energy, so tuning frequency is not important.",
      "It removes the resonance entirely at every frequency near 8 Hz."
    ],
    answer: 1,
    explanation: "<p>A tuned mass damper is a second spring-mass system tuned to the troublesome frequency. At 8 Hz the absorber mass moves large and almost exactly out of phase with the floor, so the spring force it applies opposes the excitation. In the ideal undamped case the floor response at the tuning frequency goes to zero; what replaces the original peak is two new coupled modes, one below and one above 8 Hz, each far smaller than the original.</p><p>For a 5% mass ratio those peaks sit near 0.89 and 1.12 times the tuning frequency, about 7.1 and 9.0 Hz. Three things must be right. <strong>Tuning:</strong> the absorber frequency must match the target, and it is narrowband, so a floor mode that drifts with occupancy or temperature detunes it. <strong>Mass ratio:</strong> bigger mass gives wider, broader suppression; below about 2% the device becomes too sensitive to be practical. <strong>Absorber damping:</strong> optimally damped, it flattens the two peaks to equal height and buys tolerance to mistuning; undamped, it works perfectly at one frequency and adds two new resonances everywhere else.</p><p>The absorber mass itself moves a lot, so it needs real stroke and fatigue life. The mass ratio is small but the motion is not.</p>"
  },
  {
    id: "dynamics-vibrations-q57",
    type: "numeric",
    difficulty: 1,
    prompt: "<p>A 7-bladed fan and a 24-tooth gear are mounted on the same shaft, which turns at 1800 rpm. At what frequency, in Hz, do you expect the gear mesh line in the spectrum?</p>",
    answer: 720,
    unit: "Hz",
    tolerance: 0.03,
    explanation: "<p>Start from shaft speed in Hz, then multiply by the number of events per revolution:</p><p>f<sub>shaft</sub> = 1800/60 = 30 Hz</p><p>f<sub>mesh</sub> = 24 teeth &times; 30 Hz = <strong>720 Hz</strong></p><p>The same shaft also produces a blade-pass line at 7 &times; 30 = 210 Hz, a 1x unbalance line at 30 Hz, and typically a 2x line at 60 Hz from misalignment. Being able to write that list before you look at the spectrum is what turns a plot into a diagnosis: any peak you cannot assign to a known order is either a structural mode or a genuine fault.</p><p>Gear mesh lines usually carry sidebands spaced at shaft speed, 690 and 750 Hz here, because each tooth's contribution is modulated once per revolution by runout or a local defect. Growing sidebands are a better early warning of gear wear than the mesh line itself. Multiplying 1800 by 24 directly and quoting 43,200 is the error. That is teeth per minute, not Hz.</p>"
  },
  {
    id: "dynamics-vibrations-q58",
    type: "mc",
    difficulty: 3,
    prompt: "<p>A high-speed rotor is rough while passing its first critical speed but noticeably smoother once it is running well above it. What is the mechanism?</p>",
    choices: [
      "Damping in the bearings rises steeply with speed above the critical.",
      "Unbalance force falls once the shaft passes through its critical speed.",
      "The shaft stiffens under centrifugal load, moving the mode out of range.",
      "Above the critical the shaft whirls about the mass centre, self-centring."
    ],
    answer: 3,
    explanation: "<p>Think of it as forced response of a mass-spring system with r = &omega;/&omega;<sub>n</sub>. Below the critical the shaft deflection is in phase with the heavy spot, so the rotor bows outward and the unbalance is amplified. At the critical the phase passes through 90&deg; and amplitude is limited only by damping. Above it, phase reaches 180&deg;: the shaft deflects <em>opposite</em> the heavy spot by an amount that converges on the eccentricity e, so the mass centre settles onto the bearing axis and the rotor spins about its own centre of mass. That is self-centring, and the residual whirl amplitude tends to e rather than growing.</p><p>Choice B is the tempting wrong answer. Unbalance <em>force</em> keeps rising as &omega;<sup>2</sup> forever; what falls is the dynamic <em>response</em>, because the system is now mass-controlled. Bearing damping does not conveniently increase with speed, and centrifugal stiffening is a real effect in bladed disks but not the reason a shaft smooths out above its critical.</p><p>The practical consequence is that supercritical operation is a legitimate design choice, and the engineering effort goes into the transit: balance quality, damping at the bearings, clearance checks, and a ramp rate fast enough that resonant amplitude never fully develops.</p>"
  },
  {
    id: "dynamics-vibrations-q59",
    type: "numeric",
    difficulty: 2,
    prompt: "<p>A 200 kg machine is installed on isolators rated 50,000 N/m total. The sheet-metal pan they bolt to has a vertical stiffness of 30,000 N/m at that location. Estimate the natural frequency actually achieved, in Hz.</p>",
    figure: figSeries,
    answer: 1.54,
    unit: "Hz",
    tolerance: 0.03,
    explanation: "<p>The isolator and the support pan carry the same load one after the other, so they are <strong>in series</strong> and their compliances add:</p><p>1/k<sub>eq</sub> = 1/50,000 + 1/30,000 = 2.0 &times; 10<sup>&minus;5</sup> + 3.33 &times; 10<sup>&minus;5</sup> = 5.33 &times; 10<sup>&minus;5</sup></p><p>k<sub>eq</sub> = 18,750 N/m</p><p>&omega;<sub>n</sub> = &radic;(18,750/200) = &radic;93.75 = 9.68 rad/s, &nbsp; f<sub>n</sub> = 9.68/(2&pi;) = <strong>1.54 Hz</strong></p><p>Ignoring the pan gives &radic;(50,000/200)/(2&pi;) = 2.52 Hz, a 64% error, and in this case an error in the <em>useful</em> direction, since the softer real system isolates better. That is not always so: the same compliance can drop a rocking mode into the excitation band, and 200 kg on 18,750 N/m sags 105 mm, which almost certainly exceeds the isolator's travel.</p><p>The general lesson: the softest element in the load path dominates, and a catalogue isolator bolted to flexible sheet metal never performs as advertised. Check the mounting structure is at least 10&times; stiffer than the isolator before trusting the data sheet.</p>"
  },
  {
    id: "dynamics-vibrations-q60",
    type: "numeric",
    difficulty: 3,
    prompt: "<p>A 2.0 kg carriage travelling at 3.0 m/s strikes a stationary 4.0 kg carriage on the same frictionless rail. The coefficient of restitution is 0.40. What is the velocity of the 4.0 kg carriage immediately after impact, in m/s?</p>",
    figure: figImpact,
    answer: 1.4,
    unit: "m/s",
    tolerance: 0.03,
    explanation: "<p>Two unknowns need two equations. Momentum is conserved through the impact:</p><p>(2.0)(3.0) + 0 = 2.0v<sub>1</sub> + 4.0v<sub>2</sub> &rarr; 6.0 = 2.0v<sub>1</sub> + 4.0v<sub>2</sub></p><p>Restitution supplies the second, relating separation speed to approach speed:</p><p>e = (v<sub>2</sub> &minus; v<sub>1</sub>)/(3.0 &minus; 0) = 0.40 &rarr; v<sub>2</sub> &minus; v<sub>1</sub> = 1.2</p><p>Substitute v<sub>1</sub> = v<sub>2</sub> &minus; 1.2 into the momentum equation: 6.0 = 2.0(v<sub>2</sub> &minus; 1.2) + 4.0v<sub>2</sub> = 6.0v<sub>2</sub> &minus; 2.4, so v<sub>2</sub> = <strong>1.40 m/s</strong> and v<sub>1</sub> = 0.20 m/s.</p><p>Check both ends: momentum is 2(0.20) + 4(1.40) = 6.0 &#10003;. Kinetic energy falls from 9.0 J to 0.04 + 3.92 = 3.96 J, so 56% was lost to permanent deformation, heat, and sound, expected, since e = 0.4 is a fairly inelastic contact. The two limits are worth carrying: e = 1 is perfectly elastic with energy conserved, and e = 0 means the carriages move off together at 1.0 m/s. Real values depend on material, impact speed, and temperature, so e is measured, not looked up.</p>"
  }
];

export default extra;
