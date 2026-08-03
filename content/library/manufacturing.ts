import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Manufacturing Processes & DFM
//
// Scope note: this topic owns PROCESSES — how the part gets made, what each
// process can and cannot do, achievable tolerance and finish, cost drivers,
// and designing for the chosen process. Feature control frames, material
// condition modifiers and position arithmetic belong to `gd-and-t`; datum
// theory and 3-2-1 locating belong to `datums`; tolerance stack-up analysis,
// joining-method selection and DFA belong to `assembly-strategies`.
//
// All SVG element ids are prefixed mf<n>- to stay globally unique.
// ---------------------------------------------------------------------------

const figCrossover = `<svg viewBox="0 0 460 262" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Piece price vs. annual volume</text>
  <line x1="72" y1="212" x2="426" y2="212" stroke="#64748b" stroke-width="1.5" marker-end="url(#mf1-ax)"/>
  <line x1="72" y1="212" x2="72" y2="38" stroke="#64748b" stroke-width="1.5" marker-end="url(#mf1-ax)"/>
  <text x="252" y="252" text-anchor="middle" fill="#64748b" font-size="12">annual volume (log scale)</text>
  <text x="24" y="132" text-anchor="middle" transform="rotate(-90 24 132)" fill="#64748b" font-size="12">cost per part</text>
  <line x1="110" y1="212" x2="110" y2="217" stroke="#64748b"/>
  <line x1="190" y1="212" x2="190" y2="217" stroke="#64748b"/>
  <line x1="270" y1="212" x2="270" y2="217" stroke="#64748b"/>
  <line x1="350" y1="212" x2="350" y2="217" stroke="#64748b"/>
  <text x="110" y="231" text-anchor="middle" fill="#64748b" font-size="12">100</text>
  <text x="190" y="231" text-anchor="middle" fill="#64748b" font-size="12">1k</text>
  <text x="270" y="231" text-anchor="middle" fill="#64748b" font-size="12">10k</text>
  <text x="350" y="231" text-anchor="middle" fill="#64748b" font-size="12">100k</text>

  <path d="M92 92 C 200 98 320 102 418 106" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <path d="M92 46 C 190 130 240 180 418 198" fill="none" stroke="#dc2626" stroke-width="2.4"/>

  <line x1="268" y1="50" x2="292" y2="50" stroke="#1d4ed8" stroke-width="2.4"/>
  <text x="298" y="54" fill="#1d4ed8" font-size="12">machined (no tooling)</text>
  <line x1="268" y1="72" x2="292" y2="72" stroke="#dc2626" stroke-width="2.4"/>
  <text x="298" y="76" fill="#dc2626" font-size="12">moulded (hard tool)</text>

  <line x1="158" y1="104" x2="158" y2="208" stroke="#334155" stroke-width="1" stroke-dasharray="5 4"/>
  <circle cx="158" cy="100" r="4.5" fill="#334155"/>
  <text x="128" y="198" text-anchor="middle" fill="#64748b" font-size="12">machine</text>
  <text x="300" y="196" text-anchor="middle" fill="#64748b" font-size="12">mould</text>
  <text x="158" y="248" text-anchor="middle" fill="#334155" font-size="12">N*</text>
</svg>`;

const figMouldAnatomy = `<svg viewBox="0 0 460 268" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf2-pull" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="mf2-red" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="mf2-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Moulded part: draft, uniform wall, cored boss, ribs</text>

  <line x1="44" y1="214" x2="44" y2="46" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#mf2-pull)"/>
  <text x="52" y="52" fill="#1d4ed8" font-weight="600" font-size="12">pull</text>

  <path d="M118 214 L136 74 L324 74 L342 214 L314 214 L300 96 L160 96 L146 214 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>

  <path d="M216 96 L216 158 L226 158 L226 110 L236 110 L236 158 L246 158 L246 96 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <path d="M176 96 L184 96 L181 148 L179 148 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>
  <path d="M278 96 L286 96 L283 148 L281 148 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.2"/>

  <path d="M124 172 A 44 44 0 0 1 132 128" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <text x="96" y="156" text-anchor="middle" fill="#dc2626" font-weight="600" font-size="12">draft</text>

  <line x1="121" y1="196" x2="148" y2="196" stroke="#64748b" marker-start="url(#mf2-dim)" marker-end="url(#mf2-dim)"/>
  <text x="112" y="200" text-anchor="end" fill="#64748b" font-size="12">wall t</text>

  <line x1="380" y1="80" x2="332" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#mf2-red)"/>
  <text x="386" y="84" fill="#dc2626" font-size="12">gate</text>

  <line x1="231" y1="170" x2="231" y2="160" stroke="#334155" stroke-width="1"/>
  <text x="231" y="182" text-anchor="middle" fill="#334155" font-size="12">cored boss</text>
  <line x1="206" y1="194" x2="183" y2="152" stroke="#334155" stroke-width="1"/>
  <text x="231" y="202" text-anchor="middle" fill="#334155" font-size="12">ribs &asymp; 0.5t</text>

  <line x1="132" y1="244" x2="132" y2="220" stroke="#1d4ed8" stroke-width="2" marker-end="url(#mf2-pull)"/>
  <line x1="328" y1="244" x2="328" y2="220" stroke="#1d4ed8" stroke-width="2" marker-end="url(#mf2-pull)"/>
  <text x="230" y="256" text-anchor="middle" fill="#1d4ed8" font-size="12">ejectors push on the rib side, never on the show face</text>
</svg>`;

const figBendNeutral = `<svg viewBox="0 0 460 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf3-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Bend allowance is measured on the neutral axis</text>

  <path d="M120 154 L280 154 A34 34 0 0 0 314 120 L314 44 L344 44 L344 120 A64 64 0 0 1 280 184 L120 184 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <path d="M120 167 L280 167 A47 47 0 0 0 327 120 L327 44" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="7 4"/>

  <line x1="280" y1="120" x2="280" y2="154" stroke="#64748b" stroke-width="1"/>
  <circle cx="280" cy="120" r="2.5" fill="#64748b"/>
  <text x="272" y="140" text-anchor="end" fill="#64748b" font-size="12">R</text>

  <line x1="120" y1="154" x2="98" y2="154" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="120" y1="184" x2="98" y2="184" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="104" y1="154" x2="104" y2="184" stroke="#64748b" marker-start="url(#mf3-dim)" marker-end="url(#mf3-dim)"/>
  <text x="94" y="173" text-anchor="end" fill="#64748b" font-size="12">t</text>

  <path d="M280 198 A 78 78 0 0 0 358 120" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="336" y="184" fill="#dc2626" font-size="12">&theta;</text>

  <line x1="200" y1="167" x2="200" y2="206" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="230" y="224" text-anchor="middle" fill="#1d4ed8" font-size="12">dashed line = neutral axis at radius R + Kt</text>
  <text x="230" y="242" text-anchor="middle" fill="#64748b" font-size="12">K &asymp; 0.33 for a tight radius, &asymp; 0.45 for a generous one</text>
</svg>`;

const figCornerRadius = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">A round cutter cannot cut a square inside corner</text>

  <rect x="58" y="52" width="164" height="150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M86 178 L86 80 L194 80 L194 178 Z" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="140" y="222" text-anchor="middle" fill="#dc2626" font-size="12">drawn: sharp corner</text>
  <circle cx="94" cy="88" r="5" fill="none" stroke="#dc2626" stroke-width="1.6"/>
  <circle cx="186" cy="88" r="5" fill="none" stroke="#dc2626" stroke-width="1.6"/>

  <rect x="248" y="52" width="164" height="150" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <path d="M276 178 L276 98 A18 18 0 0 1 294 80 L366 80 A18 18 0 0 1 384 98 L384 178 Z" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="294" cy="98" r="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <circle cx="294" cy="98" r="2.5" fill="#1d4ed8"/>
  <line x1="294" y1="98" x2="307" y2="85" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="316" y="122" fill="#1d4ed8" font-size="12">r = D/2</text>
  <text x="330" y="222" text-anchor="middle" fill="#1d4ed8" font-size="12">made: corner = cutter radius</text>
</svg>`;

const figTwoSetups = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf5-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
    <marker id="mf5-tool" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="118" y="22" text-anchor="middle" font-weight="600" fill="#334155">Setup 1</text>
  <text x="342" y="22" text-anchor="middle" font-weight="600" fill="#334155">Setup 2 (part flipped)</text>

  <rect x="40" y="86" width="164" height="66" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="86" cy="119" r="15" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="158" cy="119" r="15" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="86" y1="56" x2="86" y2="100" stroke="#dc2626" stroke-width="2.2" marker-end="url(#mf5-tool)"/>
  <line x1="158" y1="56" x2="158" y2="100" stroke="#dc2626" stroke-width="2.2" marker-end="url(#mf5-tool)"/>
  <line x1="86" y1="176" x2="158" y2="176" stroke="#1d4ed8" marker-start="url(#mf5-dim)" marker-end="url(#mf5-dim)"/>
  <text x="122" y="194" text-anchor="middle" fill="#1d4ed8" font-size="12">both bores cut here</text>
  <rect x="28" y="152" width="188" height="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
  <text x="118" y="216" text-anchor="middle" fill="#64748b" font-size="12">one coordinate frame</text>

  <rect x="256" y="86" width="164" height="66" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <circle cx="302" cy="119" r="15" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <circle cx="374" cy="119" r="15" fill="#e2e8f0" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4 3"/>
  <line x1="374" y1="56" x2="374" y2="100" stroke="#dc2626" stroke-width="2.2" marker-end="url(#mf5-tool)"/>
  <rect x="244" y="152" width="188" height="12" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
  <line x1="302" y1="176" x2="374" y2="176" stroke="#dc2626" marker-start="url(#mf5-dim)" marker-end="url(#mf5-dim)"/>
  <text x="338" y="194" text-anchor="middle" fill="#dc2626" font-size="12">spacing now carries re-location error</text>
  <text x="340" y="216" text-anchor="middle" fill="#64748b" font-size="12">referenced through the fixture</text>
</svg>`;

const figDraftCompare = `<svg viewBox="0 0 460 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf6-pull" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="mf6-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="116" y="22" text-anchor="middle" font-weight="600" fill="#dc2626">0&deg; draft: drags on ejection</text>
  <text x="342" y="22" text-anchor="middle" font-weight="600" fill="#1d4ed8">1.5&deg; per side: releases</text>

  <rect x="58" y="60" width="26" height="132" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="148" y="60" width="26" height="132" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <rect x="84" y="60" width="64" height="132" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
  <text x="116" y="126" text-anchor="middle" fill="#dc2626" font-size="12">scuffs</text>
  <line x1="84" y1="212" x2="148" y2="212" stroke="#64748b" marker-start="url(#mf6-dim)" marker-end="url(#mf6-dim)"/>
  <text x="116" y="232" text-anchor="middle" fill="#64748b" font-size="12">same width top and bottom</text>

  <path d="M282 60 L308 60 L294 192 L268 192 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <path d="M376 60 L402 60 L416 192 L390 192 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <path d="M308 60 L376 60 L390 192 L294 192 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.6"/>
  <path d="M300 130 A 40 40 0 0 1 304 100" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="262" y="122" text-anchor="middle" fill="#dc2626" font-size="12">&alpha;</text>
  <line x1="294" y1="212" x2="390" y2="212" stroke="#64748b" marker-start="url(#mf6-dim)" marker-end="url(#mf6-dim)"/>
  <text x="342" y="232" text-anchor="middle" fill="#64748b" font-size="12">bottom wider by 2h&middot;tan&alpha;</text>
  <line x1="116" y1="200" x2="116" y2="44" stroke="#1d4ed8" stroke-width="2" marker-end="url(#mf6-pull)"/>
  <line x1="342" y1="200" x2="342" y2="44" stroke="#1d4ed8" stroke-width="2" marker-end="url(#mf6-pull)"/>
</svg>`;

const figCastMachine = `<svg viewBox="0 0 460 248" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf7-lead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="mf7-grey" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Cast near-net, machine only what the function needs</text>

  <path d="M96 196 L96 92 A 66 66 0 0 1 228 92 L228 196 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <rect x="228" y="120" width="128" height="76" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <circle cx="162" cy="120" r="42" fill="#fff" stroke="#1d4ed8" stroke-width="2.6"/>
  <rect x="252" y="188" width="34" height="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <rect x="308" y="188" width="34" height="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <line x1="96" y1="196" x2="356" y2="196" stroke="#334155" stroke-width="1.6"/>

  <line x1="248" y1="64" x2="196" y2="100" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#mf7-lead)"/>
  <text x="252" y="58" fill="#1d4ed8" font-size="12">bore: machined, H7</text>
  <line x1="330" y1="228" x2="322" y2="204" stroke="#1d4ed8" stroke-width="1.4" marker-end="url(#mf7-lead)"/>
  <text x="336" y="238" text-anchor="middle" fill="#1d4ed8" font-size="12">pads: machined</text>
  <line x1="60" y1="118" x2="92" y2="132" stroke="#64748b" stroke-width="1.4" marker-end="url(#mf7-grey)"/>
  <text x="56" y="110" text-anchor="middle" fill="#64748b" font-size="12">as-cast skin</text>
  <text x="150" y="238" text-anchor="middle" fill="#64748b" font-size="12">draft and fillets everywhere else</text>
</svg>`;

const figToleranceBands = `<svg viewBox="0 0 460 254" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf8-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Tolerance a process holds without heroics</text>
  <line x1="128" y1="212" x2="440" y2="212" stroke="#64748b" stroke-width="1.5" marker-end="url(#mf8-ax)"/>
  <line x1="150" y1="212" x2="150" y2="217" stroke="#64748b"/>
  <line x1="222" y1="212" x2="222" y2="217" stroke="#64748b"/>
  <line x1="294" y1="212" x2="294" y2="217" stroke="#64748b"/>
  <line x1="366" y1="212" x2="366" y2="217" stroke="#64748b"/>
  <text x="150" y="231" text-anchor="middle" fill="#64748b" font-size="12">0.005</text>
  <text x="222" y="231" text-anchor="middle" fill="#64748b" font-size="12">0.02</text>
  <text x="294" y="231" text-anchor="middle" fill="#64748b" font-size="12">0.1</text>
  <text x="366" y="231" text-anchor="middle" fill="#64748b" font-size="12">0.5</text>
  <text x="284" y="249" text-anchor="middle" fill="#64748b" font-size="12">achievable tolerance, mm (log)</text>

  <rect x="132" y="42" width="118" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="124" y="56" text-anchor="end" fill="#334155" font-size="12">grind / hone</text>
  <rect x="176" y="70" width="140" height="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="124" y="84" text-anchor="end" fill="#334155" font-size="12">CNC mill / turn</text>
  <rect x="248" y="98" width="128" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="124" y="112" text-anchor="end" fill="#334155" font-size="12">injection mould</text>
  <rect x="266" y="126" width="130" height="18" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="124" y="140" text-anchor="end" fill="#334155" font-size="12">sheet metal bend</text>
  <rect x="280" y="154" width="128" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="124" y="168" text-anchor="end" fill="#334155" font-size="12">metal AM (as built)</text>
  <rect x="300" y="182" width="122" height="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="124" y="196" text-anchor="end" fill="#334155" font-size="12">sand casting</text>
</svg>`;

const figCannotMake = `<svg viewBox="0 0 460 264" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf9-lead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
    <marker id="mf9-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Machined block, section view</text>

  <path d="M74 62 L386 62 L386 200 L74 200 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.6"/>
  <path d="M118 62 L118 186 L166 186 L166 62" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <path d="M232 62 L232 128 L318 128 L318 62" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <path d="M318 96 L352 96 L352 118 L318 118" fill="#fff" stroke="#dc2626" stroke-width="1.6"/>

  <line x1="118" y1="216" x2="166" y2="216" stroke="#64748b" marker-start="url(#mf9-dim)" marker-end="url(#mf9-dim)"/>
  <text x="142" y="234" text-anchor="middle" fill="#64748b" font-size="12">8 wide</text>
  <line x1="118" y1="62" x2="54" y2="62" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="4 3"/>
  <line x1="118" y1="186" x2="54" y2="186" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="4 3"/>
  <line x1="60" y1="62" x2="60" y2="186" stroke="#64748b" marker-start="url(#mf9-dim)" marker-end="url(#mf9-dim)"/>
  <text x="52" y="128" text-anchor="end" fill="#64748b" font-size="12">124</text>
  <text x="275" y="118" text-anchor="middle" fill="#64748b" font-size="12">open pocket</text>
  <line x1="390" y1="146" x2="352" y2="114" stroke="#dc2626" stroke-width="1.5" marker-end="url(#mf9-lead)"/>
  <text x="418" y="160" text-anchor="middle" fill="#dc2626" font-size="12">side groove</text>
  <text x="230" y="256" text-anchor="middle" fill="#64748b" font-size="12">all internal corners drawn R0.4, general tolerance &plusmn;0.05</text>
</svg>`;

const figFlatPattern = `<svg viewBox="0 0 460 246" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mf10-dim" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M8,0L0,4L8,8" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Formed bracket, outside dimensions given</text>
  <path d="M92 148 L268 148 A22 22 0 0 0 290 126 L290 58 L312 58 L312 126 A44 44 0 0 1 268 170 L92 170 Z" fill="#dbeafe" stroke="#334155" stroke-width="1.6"/>
  <line x1="92" y1="196" x2="312" y2="196" stroke="#64748b" marker-start="url(#mf10-dim)" marker-end="url(#mf10-dim)"/>
  <text x="202" y="214" text-anchor="middle" fill="#64748b" font-size="12">A = 40.0 outside</text>
  <line x1="356" y1="58" x2="356" y2="170" stroke="#64748b" marker-start="url(#mf10-dim)" marker-end="url(#mf10-dim)"/>
  <text x="366" y="118" fill="#64748b" font-size="12">B = 25.0</text>
  <line x1="92" y1="148" x2="70" y2="148" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="92" y1="170" x2="70" y2="170" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="76" y1="148" x2="76" y2="170" stroke="#1d4ed8" marker-start="url(#mf10-dim)" marker-end="url(#mf10-dim)"/>
  <text x="66" y="164" text-anchor="end" fill="#1d4ed8" font-size="12">t</text>
  <text x="230" y="236" text-anchor="middle" fill="#1d4ed8" font-size="12">t = 2.0, inside R = 2.0, 90&deg; bend, K = 0.42</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Manufacturing Processes & DFM",
    intro: `<p>Design for manufacturing is not a checklist you run at the end. It is the set of decisions that fix what a part costs and how long it takes: which process makes it, how many setups or tool actions it needs, what tolerance and finish that process can actually hold, and which features quietly make it impossible.</p>
<p>This gets probed three ways. They ask you to <strong>choose a process</strong> for a stated volume and geometry, to <strong>call a tolerance</strong> and defend it against the cost curve, or to hand you a part and ask <strong>what blocks it from being made as drawn</strong>. This lesson gives you the numbers and the reasoning for machining, injection moulding, sheet metal, casting and additive.</p>`,
    sections: [
      {
        heading: "Choose the process before you finish the geometry",
        html: `<p>Every process trades <strong>tooling cost</strong> against <strong>piece price</strong>. Machining and additive have essentially no tooling and a high per-part cost, so their cost line is flat. Injection moulding, die casting and progressive stamping demand a hard tool up front and then make parts almost for free. The crossover volume is simple arithmetic:</p>
<p class="eq">N* = C<sub>tooling</sub> / (c<sub>no-tool</sub> &minus; c<sub>tooled</sub>)</p>
<figure class="fig">${figCrossover}<figcaption>Below N* the tool never pays back. Above it, piece price dominates and the tool is cheap insurance. Say N* out loud in an interview before you name a process.</figcaption></figure>
<table><thead><tr><th>Process</th><th>Tooling</th><th>Lead time to first part</th><th>Typically wins above</th></tr></thead><tbody>
<tr><td>CNC machining</td><td>none (soft jaws / fixture)</td><td>days</td><td>, wins <em>below</em> ~1k</td></tr>
<tr><td>Sheet metal (laser + brake)</td><td>none until a hard die</td><td>days</td><td>1&ndash;10k flat/formed parts</td></tr>
<tr><td>Progressive die stamping</td><td>high</td><td>3&ndash;6 months</td><td>~100k</td></tr>
<tr><td>Injection moulding</td><td>high</td><td>8&ndash;16 weeks</td><td>~5&ndash;20k</td></tr>
<tr><td>Die casting</td><td>high</td><td>10&ndash;20 weeks</td><td>~5&ndash;20k</td></tr>
<tr><td>Sand / investment casting</td><td>low / medium</td><td>weeks</td><td>~100&ndash;5k</td></tr>
<tr><td>Metal additive</td><td>none</td><td>days</td><td>, wins on geometry, not volume</td></tr>
</tbody></table>
<div class="callout"><strong>Interview habit:</strong> state the volume, the material and the one feature that is hard to make, in that order. "Two hundred a year, 6061, and a 40 mm deep pocket with a 1 mm corner" is a complete problem statement; "an aluminium bracket" is not.</div>`,
      },
      {
        heading: "Machining: the tool has to physically get there",
        html: `<p>Milling and turning remove material with a rotating tool of finite diameter, held in a spindle, reaching in from one direction at a time. Almost every machining DFM rule follows from those four facts.</p>
<ul>
<li><strong>Internal corners get the cutter radius.</strong> A 12 mm end mill leaves R6. A sharp inside corner needs EDM, broaching or a corner relief, a separate operation with its own setup and electrode.</li>
<li><strong>Depth limits tool diameter.</strong> Shops work to a stickout rule of roughly 3&ndash;4&times; diameter for a finishing pass, up to about 8&times; with reduced-neck tools and light cuts. A 40 mm deep pocket therefore wants a corner radius of about R5&ndash;R6, not R1.</li>
<li><strong>Deep holes are their own process.</strong> A twist drill is comfortable to about 5&times; diameter with pecking; beyond ~10&times; you are gun-drilling, which is routine but is a dedicated machine and setup.</li>
<li><strong>Every extra setup costs money and tolerance.</strong> Features cut in one clamping share one coordinate frame; features cut in two setups carry the fixture's re-location error between them. If two bores must sit 0.02 mm apart, they have to be cut without unclamping.</li>
<li><strong>Workholding is part of the design.</strong> Thin walls chatter, long plates bow when clamping is released, and a part with no flat gripping surface needs a custom fixture that shows up in the quote.</li>
</ul>
<p>Cutting parameters follow from surface speed and chip load:</p>
<p class="eq">n = V<sub>c</sub> / (&pi;D)&nbsp;&nbsp;&nbsp;&nbsp;F = f<sub>z</sub> z n&nbsp;&nbsp;&nbsp;&nbsp;t = L / F</p>
<p><strong>V<sub>c</sub></strong> is surface speed, <strong>D</strong> tool diameter, <strong>n</strong> spindle speed, <strong>f<sub>z</sub></strong> chip load per tooth, <strong>z</strong> flute count and <strong>L</strong> toolpath length. Cutting time is only part of cycle time: rapids, tool changes, probing and part handling often exceed it on small batches.</p>`,
      },
      {
        heading: "Injection moulding: design around how the tool opens",
        html: `<p>A moulded part is the negative of a steel tool that must close, fill, pack, cool and then open and release the part. Every rule below is about one of those five steps.</p>
<figure class="fig">${figMouldAnatomy}<figcaption>Draft on every wall in the pull direction, one nominal wall thickness, bosses cored and tied to ribs, ejectors on the structural side.</figcaption></figure>
<ul>
<li><strong>Draft.</strong> 1&ndash;2&deg; per side is the default for a smooth wall; 0.5&deg; is a fight, 0&deg; scuffs the wall and can lock the part on the core. A textured wall needs roughly 1&ndash;1.5&deg; <em>extra per 0.025 mm of texture depth</em> on top of that.</li>
<li><strong>Uniform wall.</strong> Cooling time scales with the square of wall thickness, so the thickest section sets the cycle. Thick sections also shrink more than thin ones, which is what a sink mark and a warped part actually are.</li>
<li><strong>Ribs and bosses.</strong> A rib should be 40&ndash;60% of the nominal wall, taper 0.5&ndash;1&deg; per side, and stand no more than ~3&times; the wall tall. A screw boss is a cored tube tied back to the wall by gussets, not a solid lump.</li>
<li><strong>Gate and weld lines.</strong> The flow front splits around every hole, core pin and boss and re-joins downstream as a weld (knit) line, which carries a fraction of the base strength. Put the weld line where the load is not.</li>
<li><strong>Undercuts.</strong> Anything that does not release along the pull, a side hole, a snap window through a side wall, an external latch. These need a side action, a lifter, or a pass-through shutoff, each of which adds tool cost, cycle time and a witness line.</li>
<li><strong>Shrinkage.</strong> The cavity is cut oversize by the material's mould shrinkage (typically 0.4&ndash;0.7% for ABS and PC, 1&ndash;2% for unfilled semicrystallines like PP, PE and nylon).</li>
</ul>
<p class="eq">t<sub>cool</sub> &prop; h<sup>2</sup>&nbsp;&nbsp;&nbsp;&nbsp;L<sub>cavity</sub> = L<sub>part</sub>(1 + s)</p>`,
      },
      {
        heading: "Sheet metal: everything follows the bend",
        html: `<p>Sheet metal starts as constant-thickness stock, so the design problem is where the bends are and whether the tooling can reach. Material stretches on the outside of a bend and compresses on the inside; the neutral axis sits somewhere between, at radius R + Kt.</p>
<figure class="fig">${figBendNeutral}<figcaption>The flat blank length is the sum of the flat legs plus the bend allowance measured along the neutral axis, not along the inside or outside surface.</figcaption></figure>
<p class="eq">BA = (&pi;/180) &theta; (R + Kt)&nbsp;&nbsp;&nbsp;&nbsp;L<sub>flat</sub> = &Sigma;leg + &Sigma;BA</p>
<ul>
<li><strong>Bend radius.</strong> Inside radius near one material thickness is normal for mild steel and 5052 aluminium. Hard tempers crack: 6061-T6 wants roughly 3&ndash;4t, and worse if the bend line runs along the rolling grain rather than across it.</li>
<li><strong>Springback.</strong> The sheet unloads elastically and opens up, a couple of degrees in mild steel, several in a high-strength alloy. You either overbend, bottom/coin the radius, or re-strike. High volume favours a bottoming die because it removes the variation instead of correcting for it.</li>
<li><strong>Hole to bend.</strong> Keep the near edge of a hole roughly 2.5t + R from the bend line, or it will ovalise and crack.</li>
<li><strong>Minimum flange.</strong> Air bending uses a V-die about 8t wide; the flange has to be long enough to bridge it, so minimum flange &asymp; V/2 + t.</li>
<li><strong>Tool access.</strong> A press brake is a straight punch and die. A flange that would collide with the punch, or a box formed in the wrong order, cannot be bent no matter how good the flat pattern is.</li>
</ul>`,
      },
      {
        heading: "Casting and forging: control how metal solidifies",
        html: `<p>Casting fills a cavity with liquid metal and lets it freeze. Everything good and bad about a casting comes from the sequence in which regions solidify.</p>
<figure class="fig">${figCastMachine}<figcaption>Cast the bulk near-net with draft and fillets; machine only the bore and the pads that carry function. Machining an entire casting throws away the reason you cast it.</figcaption></figure>
<ul>
<li><strong>Draft and parting line.</strong> The pattern or die must withdraw, so vertical faces get 1&ndash;3&deg;. Where the parting line lands shows on the part as flash and a mismatch step, so put it off cosmetic and sealing faces.</li>
<li><strong>Uniform sections and generous fillets.</strong> A heavy lug joined to a thin wall stays liquid after its neighbours freeze, is cut off from feed metal, and ends up with shrink porosity exactly where the bolt load goes.</li>
<li><strong>Feeding.</strong> Risers and gating are sized so solidification runs directionally from the far end of the casting toward the riser. Thin-then-thick starves the feed path.</li>
<li><strong>Machining stock.</strong> As-cast surfaces carry a hard, sandy or oxidised skin and loose tolerance. Leave 1.5&ndash;3 mm of stock on any surface you intend to machine and datum the machining to features that exist on the raw casting.</li>
<li><strong>Forging.</strong> A forging is wrought: the grain flow follows the shape, porosity is closed up, and fatigue allowables are far better than a casting's. It costs a die and needs draft and generous radii, and it is the honest answer for a highly loaded lever or link.</li>
</ul>`,
      },
      {
        heading: "Additive: orientation is a design input, not a print setting",
        html: `<p>Additive earns its place on geometry, internal passages, consolidated assemblies, lattices, one-offs, not on volume. It has real constraints, and a candidate who only says "3D print it" has not answered the question.</p>
<ul>
<li><strong>Anisotropy.</strong> Fused filament parts are weakest between layers; the interlayer bond can be half the in-plane strength. Powder-bed metal is far more isotropic but still shows build-direction fatigue differences. Orient so the principal tensile stress runs within a layer, not across the layer boundaries.</li>
<li><strong>Supports.</strong> Overhangs shallower than roughly 45&deg; from the plate need support, and support has to be reachable to remove. Support scars on a tension surface are crack starters, so orient them off the fatigue-critical face or machine them away.</li>
<li><strong>Build height sets the price.</strong> Cost tracks layer count almost linearly. Lying a part down instead of standing it up can halve the build.</li>
<li><strong>Feature size and finish.</strong> Powder-bed metal holds ~0.4&ndash;0.5 mm minimum wall and delivers Ra 6&ndash;20 &mu;m as built. Anything that must fit, seal or run gets machined afterwards.</li>
<li><strong>Post-processing is not optional</strong> for load-bearing metal parts: stress relief on the plate, support removal, sometimes HIP, then machining of the functional faces.</li>
</ul>
<div class="callout warn"><strong>Watch for this:</strong> quoting an AM part on material cost alone. Build time, plate share, support removal labour, heat treat and post-machining usually dominate.</div>`,
      },
      {
        heading: "Achievable tolerance, finish, and the price of tightening",
        html: `<p>The single most useful thing to carry into a manufacturing interview is a feel for what each process holds. Ask for a tolerance a process cannot reach and you have silently added an operation.</p>
<figure class="fig">${figToleranceBands}<figcaption>Order-of-magnitude bands. Tightening past a process's band does not make it more accurate. It moves the feature to a different, slower process.</figcaption></figure>
<table><thead><tr><th>Process</th><th>Routine tolerance</th><th>Typical Ra</th></tr></thead><tbody>
<tr><td>CNC milling / turning</td><td>&plusmn;0.05 mm (&plusmn;0.01 with care)</td><td>0.8&ndash;3.2 &mu;m</td></tr>
<tr><td>Grinding / honing</td><td>&plusmn;0.002&ndash;0.01 mm</td><td>0.1&ndash;0.4 &mu;m</td></tr>
<tr><td>Injection moulding</td><td>&plusmn;0.05&ndash;0.2 mm</td><td>tool finish, 0.2&ndash;3 &mu;m</td></tr>
<tr><td>Sheet metal bending</td><td>&plusmn;0.2&ndash;0.5 mm per bend</td><td>mill finish</td></tr>
<tr><td>Die casting</td><td>&plusmn;0.1&ndash;0.3 mm</td><td>1.6&ndash;3.2 &mu;m</td></tr>
<tr><td>Sand casting</td><td>&plusmn;0.8&ndash;1.5 mm</td><td>12&ndash;25 &mu;m</td></tr>
<tr><td>Metal powder-bed AM</td><td>&plusmn;0.1&ndash;0.2 mm</td><td>6&ndash;20 &mu;m</td></tr>
</tbody></table>
<p>Capability connects the tolerance you write to the process that has to hold it. If a process runs with standard deviation &sigma; and you want a capability index C<sub>pk</sub>, the tightest half-tolerance you can honestly print is:</p>
<p class="eq">T/2 = 3 &sigma; C<sub>pk</sub></p>
<p>At C<sub>pk</sub> = 1.33. The usual release bar. That is four standard deviations of headroom on each side. Anything tighter and you are buying scrap, sorting or a second operation.</p>
<p class="eq">C<sub>unit</sub> = C<sub>material</sub> + (t<sub>cycle</sub> + t<sub>setup</sub>/N) &times; rate + C<sub>tooling</sub>/N</p>`,
      },
    ],
    equations: [
      { name: "Break-even volume", formula: "N* = C<sub>tooling</sub> / (c<sub>1</sub> &minus; c<sub>2</sub>)", note: "C<sub>tooling</sub> is the hard-tool cost, c<sub>1</sub> the untooled piece price and c<sub>2</sub> the tooled piece price." },
      { name: "Spindle speed from surface speed", formula: "n = V<sub>c</sub> / (&pi;D)", note: "V<sub>c</sub> is cutting speed and D tool diameter. Keep both in the same length unit. The 1000&times; slip is the classic error." },
      { name: "Feed rate and cutting time", formula: "F = f<sub>z</sub> z n,&nbsp; t = L / F", note: "f<sub>z</sub> is chip load per tooth, z flute count, L toolpath length. Cutting time is not cycle time." },
      { name: "Bend allowance", formula: "BA = (&pi;/180) &theta; (R + Kt)", note: "&theta; in degrees, R inside radius, t thickness, K the neutral-axis factor (0.33&ndash;0.45)." },
      { name: "Flat blank length", formula: "L<sub>flat</sub> = &Sigma;(leg &minus; R &minus; t) + &Sigma;BA", note: "Subtract the setback from each outside leg, then add the bend allowance once per bend." },
      { name: "Springback ratio", formula: "K<sub>s</sub> = &theta;<sub>final</sub> / &theta;<sub>tool</sub>", note: "Overbend by 1/K<sub>s</sub> to land on the target angle; K<sub>s</sub> falls as yield strength rises and as R/t rises." },
      { name: "Mould cooling time", formula: "t<sub>cool</sub> &prop; h<sup>2</sup>", note: "h is the local wall thickness. Halving the wall cuts cooling roughly fourfold, which is where moulding cycle time actually lives." },
      { name: "Cavity size from shrinkage", formula: "L<sub>cavity</sub> = L<sub>part</sub>(1 + s)", note: "s is mould shrinkage: ~0.5% for ABS/PC, 1&ndash;2% for PP, PE and unfilled nylon." },
      { name: "Clamp force", formula: "F<sub>clamp</sub> = p<sub>cavity</sub> &times; A<sub>projected</sub>", note: "A<sub>projected</sub> is the part area seen looking down the pull, including runners, not the wetted surface area." },
      { name: "Tightest honest tolerance", formula: "T/2 = 3&sigma;C<sub>pk</sub>", note: "&sigma; is the process standard deviation. At C<sub>pk</sub> = 1.33 you need four standard deviations of margin per side." },
    ],
    interviewTips: [
      "Open every process-selection answer with the volume, the material, and the single hardest feature. Then compute the break-even volume out loud before naming a process.",
      "Name the process-specific blocker: cutter radius and setup count for machining, draft and undercuts for moulding, springback and tool access for sheet metal, feeding and hot spots for casting, build orientation for additive.",
      "Know the tolerance bands cold: ±0.05 mm milled, ±0.01 with care, ±0.002 ground, ±0.1 moulded, ±1 mm sand cast. Quoting a number a process cannot hold is the fastest way to lose the room.",
      "When you are shown a part, look for the four classic blockers first: a sharp internal corner, an undercut, a feature with no tool access, and a thick section next to a thin one.",
      "Talk about tolerance in money. 'Going from ±0.1 to ±0.01 on that bore adds a bore-and-hone operation, a gauge check and a few percent scrap' is a much stronger answer than 'that seems tight'.",
      "Never let a design decision hide in a print note. Draft, corner radii, bend radii, machining stock and surface finish are geometry, and the person quoting the part will price whatever you drew.",
    ],
  },

  questions: [
    {
      id: "manufacturing-q01",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You need 12 prototype brackets in 6061-T6. Each has a 25 mm thick boss carrying a &oslash;12 H7 reamed bore, and a mounting face that must be flat within 0.05 mm. First articles are wanted in three weeks. Which route do you quote?</p>`,
      choices: [
        "Laser-cut and press-brake formed sheet with a welded-on machined pad",
        "DMLS in AlSi10Mg, then machine the bore and the mounting face",
        "3-axis CNC from 6061 plate, with the bore reamed and the face cut in one setup",
        "Waterjet the outline from plate, then drill and ream on a manual mill",
      ],
      answer: 2,
      explanation: `<p>Twelve parts is far below any tooling break-even, and the geometry is a solid 25 mm boss, so a folded sheet bracket cannot make it at all. That kills the sheet-metal route on geometry, not on cost.</p><p>DMLS would build it, but at 12 parts you pay build time and post-processing for no benefit, and the flat face and H7 bore still need machining afterwards. You have added a process, not removed one.</p><p>Waterjet plus a manual mill loses the one thing that matters: the bore and the flat face come off the same clamping on a CNC, so their relationship is held by the machine rather than by a re-fixturing operation. Low volume plus tight features plus a solid section points at machining.</p>`,
    },
    {
      id: "manufacturing-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 10 mm diameter carbide end mill is to run at the tooling catalogue's recommended surface speed of 180 m/min in aluminium. What spindle speed do you program, in rpm?</p>`,
      answer: 5730,
      unit: "rpm",
      tolerance: 0.03,
      explanation: `<p>Surface speed is the circumference swept per revolution times the revolutions per minute.</p><p class="eq">n = V<sub>c</sub> / (&pi;D)</p><p>Put both quantities in the same length unit: 180 m/min is 180000 mm/min.</p><p class="eq">n = 180000 / (&pi; &times; 10) = 180000 / 31.42 = <strong>5730 rpm</strong></p><p>Dividing 180 by &pi;D and programming 5.73 rpm is the classic slip, a factor of 1000 out. Small tools spin fast, big tools spin slow, and 5730 rpm on a 10 mm cutter is unremarkable on any modern machine.</p>`,
    },
    {
      id: "manufacturing-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>The pocket on the left is drawn with sharp internal corners. The shop quotes the version on the right instead. What forces the change?</p>`,
      figure: figCornerRadius,
      choices: [
        "The cutter is round, so an inside corner ends up at the tool radius",
        "Coolant flow prevents the cutter from finishing a square corner",
        "Aluminium springs back after the cut and rounds the corner itself",
        "Machine controllers interpolate arcs more accurately than straight moves",
      ],
      answer: 0,
      explanation: `<p>An end mill is a rotating cylinder. Whatever path the control drives, the material left in an inside corner is the envelope of that cylinder, so the corner radius equals the cutter radius: a 12 mm cutter leaves R6, a 6 mm cutter leaves R3.</p><p>A genuinely sharp corner needs a different process: sinker EDM with a shaped electrode, broaching, or a machined corner relief such as a dogbone or keyhole that clears the mating part's edge. Each is an extra operation with its own setup and cost.</p><p>Draw the corner radius you actually want, matched to a standard cutter, and call out a sharp corner only when the function demands it.</p>`,
    },
    {
      id: "manufacturing-q04",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A pocket must be 36 mm deep. Your shop's rule is that a finishing end mill may not stick out more than 4&times; its diameter. What is the smallest internal corner radius you should put on the drawing, in mm?</p>`,
      answer: 4.5,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>Work backwards from the depth. The tool has to reach the pocket floor, so its stickout is at least the pocket depth:</p><p class="eq">L / D &le; 4 &rarr; D &ge; L / 4 = 36 / 4 = 9.0 mm</p><p>The corner radius left behind is half the tool diameter:</p><p class="eq">R &ge; D / 2 = 9.0 / 2 = <strong>4.5 mm</strong></p><p>You would round up to a standard cutter and call R5 with a 10 mm end mill, which buys back a little rigidity. On a deep pocket the corner radius is not a styling choice. Write R1 into a 36 mm deep pocket and you have specified a 2 mm cutter hanging out 18 diameters, which will deflect, chatter and break, and the feature comes back quoted as EDM.</p>`,
    },
    {
      id: "manufacturing-q05",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A machined housing has features on five faces. Two bores must end up 60.00 mm apart to within 0.02 mm. The process planner shows you the two options in the figure. What do you insist on, and why?</p>`,
      figure: figTwoSetups,
      choices: [
        "Either plan works, provided the machine's positioning accuracy is under 0.02 mm",
        "Cut them in separate setups so each bore gets its own dedicated boring bar",
        "Cut them in separate setups and hold each bore's own diameter tighter",
        "Cut both bores in one setup: their spacing then depends only on machine positioning",
      ],
      answer: 3,
      explanation: `<p>Machine positioning accuracy is only one contributor. The moment the part is unclamped and re-fixtured, the relationship between the first bore and the second is carried by the fixture, not by the machine's scales, and fixture re-location repeatability is typically 0.01&ndash;0.03 mm on a good setup, which alone eats the whole 0.02 mm budget.</p><p>Features that must be tightly related to each other have to be cut without unclamping. Everything else can be spread across as many setups as convenient. That is why a five-face part is not automatically a five-setup part: you group the features by what has to be true between them, then plan the setups around those groups.</p><p>Tightening each bore's own diameter does nothing, because diameter and spacing are independent. Giving each bore a dedicated tool is fine but irrelevant. The error is in the re-fixturing, not the cutter. What if the geometry makes one setup impossible? Then you either buy a 4th axis, or you relax the 0.02 mm and prove the assembly still works.</p>`,
    },
    {
      id: "manufacturing-q06",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A slot 480 mm long is milled with a 12 mm, 4-flute end mill. The catalogue gives a cutting speed of 120 m/min and a chip load of 0.05 mm/tooth. Estimate the cutting time for one pass, in seconds.</p>`,
      answer: 45.2,
      unit: "s",
      tolerance: 0.03,
      explanation: `<p>Convert cutting speed into spindle speed first, which is the step people skip:</p><p class="eq">n = V<sub>c</sub>/(&pi;D) = 120000 / (&pi; &times; 12) = 3183 rpm</p><p>Then chip load into feed rate:</p><p class="eq">F = f<sub>z</sub> z n = 0.05 &times; 4 &times; 3183 = 636.6 mm/min</p><p>Then feed rate into time:</p><p class="eq">t = L/F = 480 / 636.6 = 0.754 min = <strong>45.2 s</strong></p><p>Chip load is per tooth per revolution, so dropping the flute count z gives 181 s. This is cutting time only. Rapids, tool changes, probing and load/unload are usually the larger half of the cycle on a short run.</p>`,
    },
    {
      id: "manufacturing-q07",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Three features on a machined aluminium housing are flagged in a cost review: a pocket with an 8:1 depth-to-width ratio, a &oslash;6 mm oil gallery 60 mm deep (10:1), and a set of features that forces the part through five separate setups. Which one is the dominant cost driver, and what do you attack first?</p>`,
      choices: [
        "The five setups &mdash; each adds fixturing, cycle and locating error",
        "The 10:1 hole &mdash; deep holes need EDM and cannot be drilled at all",
        "The 8:1 pocket &mdash; no standard end mill can reach that depth ratio",
        "All three are equal, because cost tracks total material removed",
      ],
      answer: 0,
      explanation: `<p>Rank them by what the shop actually has to buy. A 10:1 hole is routine: a gun drill or a peck cycle with a coolant-through drill handles it every day, and it is one operation. An 8:1 pocket is manageable with a reduced-neck tool, light radial steps and a longer cycle, expensive minutes, but no new capability.</p><p>Five setups is the one that multiplies. Each setup needs a fixture or soft jaws, a load/unload, a probe cycle and an operator touch, and it adds re-location error between every feature cut before and after it. Setup time is also amortised over the batch, so on 50 parts it can exceed the cutting time entirely.</p><p>Cost does not track material removed. That is the intuition to unlearn. The attack is to re-orient the design so features collapse onto fewer faces: move a boss to a face already being cut, replace a side hole with one reachable from the top, or accept a slightly larger envelope so the part can be cut from two sides instead of five.</p>`,
    },
    {
      id: "manufacturing-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Estimate a machined part's cost at a batch of 200. The shop bills &#36;95/hr. Cycle time is 12 min per part, the aluminium blank costs &#36;8, and the job needs three setups of 20 min each, amortised across the batch. What is the cost per part, in &#36;?</p>`,
      answer: 27.5,
      unit: "USD",
      tolerance: 0.03,
      explanation: `<p>Split it into material, run time and setup:</p><p class="eq">C<sub>run</sub> = (12/60) hr &times; 95 = 19.00</p><p class="eq">C<sub>setup</sub> = (60/60) hr &times; 95 / 200 = 95/200 = 0.475</p><p class="eq">C<sub>unit</sub> = 8.00 + 19.00 + 0.475 = <strong>27.5</strong></p><p>Machine time is 69% of the cost, material 29%, setup under 2%. The lever is cycle time, and at 200 parts the setups have already amortised away.</p><p>At a batch of 5, setup is 19.00 per part and rivals the run time, which is why prototype quotes look so bad per part. Ask the batch size before you decide what to optimise.</p>`,
    },
    {
      id: "manufacturing-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Four callouts appear on a milled 6061 plate. Which one will the supplier quote as an added operation on different equipment rather than as normal milling?</p>`,
      choices: [
        "Flatness 0.01 mm across a 300 mm face on a 4 mm thick plate",
        "A &oslash;8 H8 bore, reamed, 25 mm deep in a 20 mm thick boss",
        "Ra 1.6 &mu;m on the milled faces, with all sharp edges broken",
        "Two bores 60.00 &plusmn;0.05 mm apart, both cut in the same setup",
      ],
      answer: 0,
      explanation: `<p>Check each against what a milling machine holds routinely: &plusmn;0.05 mm on a length, Ra 1.6 &mu;m from a decent face mill, and H8 from a reamer are all everyday work. Two bores at &plusmn;0.05 mm in one setup is comfortable, since the machine's own positioning does the job.</p><p>Flatness of 0.01 mm over 300 mm is a grinding or lapping specification, and on a 4 mm thick plate it is worse than that: the part will deflect under clamping, spring when released and creep as residual stress redistributes. To hold it, the supplier has to rough, stress relieve, finish grind on a magnetic chuck and then measure free-state on a granite plate, a completely different routing from milling.</p><p>Check every callout against the process band before it leaves your desk. Milling holds about &plusmn;0.05 mm and flatness in the 0.02&ndash;0.05 mm range on a rigid part; ask for a tenth of that and you have silently moved the feature to the grinder.</p>`,
    },
    {
      id: "manufacturing-q10",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A moulded wall is 50 mm deep in the pull direction and carries 1.5&deg; of draft on each side, as shown. By how much is the open end wider than the closed end, in mm?</p>`,
      figure: figDraftCompare,
      answer: 2.62,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>Each wall leans outward by the depth times the tangent of the draft angle:</p><p class="eq">offset per side = h tan&alpha; = 50 &times; tan 1.5&deg; = 50 &times; 0.02619 = 1.31 mm</p><p>Both walls lean, so the width change is twice that:</p><p class="eq">&Delta;W = 2h tan&alpha; = 2 &times; 1.31 = <strong>2.62 mm</strong></p><p>Reporting 1.31 mm quotes draft per side when the dimension spans two of them. Over a 50 mm deep wall ordinary draft moves a dimension by more than 2.5 mm, far larger than any tolerance on the part, which is why moulded drawings dimension one specific plane and let the rest follow the draft.</p>`,
    },
    {
      id: "manufacturing-q11",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A moulded housing has 50 mm deep side walls carrying a 0.05 mm deep spark-eroded texture on the outside. The model was drafted at 1.5&deg; per side, which passed review for a smooth wall. The first tool trial scores vertical drag marks down every textured face. What went wrong?</p>`,
      choices: [
        "The texture was applied after the draft, so it removed the draft locally",
        "Textured walls need ~1&deg; extra draft per 0.025 mm of texture depth",
        "Ejection force always scales with surface area, so texture doubled it",
        "Texture raises the mould-shrink rate, closing the wall onto the core",
      ],
      answer: 1,
      explanation: `<p>Texture is cut <em>into</em> the tool steel, so every peak of the texture is an undercut of its own depth. The part has to slide past that relief before it clears the wall, and the standard tool-shop rule is about 1&ndash;1.5&deg; of extra draft per 0.025 mm (0.001 in) of texture depth, on top of the normal draft.</p><p class="eq">0.05 mm / 0.025 mm &times; ~1.5&deg; &asymp; 3&deg; extra &rarr; total &asymp; 4&ndash;4.5&deg; per side</p><p>At 1.5&deg; the part drags across the texture on the way out, which is exactly the scoring seen. Shrinkage is unaffected by texture, ejection force does not simply scale with area, and the texture is applied to the finished tool surface without erasing draft.</p><p>Note what the fix costs: taking the wall from 1.5&deg; to 4.5&deg; over 50 mm adds 2&times;50&times;(tan4.5&deg; &minus; tan1.5&deg;) &asymp; 5.2 mm of width at the open end. If the industrial design cannot absorb that, the answer is a shallower texture or a split tool, which is why texture depth belongs in the design review, not in a finishing spec issued later.</p>`,
    },
    {
      id: "manufacturing-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rib on a moulded part is 1.20 mm thick where it meets the wall, stands 25 mm tall, and is drafted 1&deg; per side so the tool can release. What is the rib thickness at its tip, in mm?</p>`,
      answer: 0.327,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>Draft removes material from both faces of the rib over its full height:</p><p class="eq">taper = 2h tan&alpha; = 2 &times; 25 &times; tan 1&deg; = 2 &times; 25 &times; 0.017455 = 0.873 mm</p><p class="eq">t<sub>tip</sub> = 1.20 &minus; 0.873 = <strong>0.327 mm</strong></p><p>Now judge it. A 0.33 mm rib tip will not fill reliably in most thermoplastics, it will be the last thing to freeze and the first thing to short-shot, and the thin steel that forms it in the tool is a fragile blade that traps gas and burns.</p><p>The real question is what you do about it. Three levers: shorten the rib (a rib taller than about 3&times; the nominal wall is asking for trouble anyway), cut the draft to 0.5&deg; per side and accept harder ejection, or thicken the base, but only up to about 60% of the nominal wall, beyond which you buy a sink mark on the show face. Usually you split one tall rib into two shorter ones.</p>`,
    },
    {
      id: "manufacturing-q13",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A moulded polypropylene tray comes out of the tool bowed: the long edges lift about 3 mm off a flat surface. The floor is 3.5 mm thick, the side walls are 2.0 mm, the tool is running balanced, and the bow is repeatable part to part. What is the cause?</p>`,
      choices: [
        "Ejector pins are pushing unevenly and bending the part on the way out",
        "Polypropylene absorbs moisture in the hopper and swells after moulding",
        "Cavity pressure is too high, over-packing the part and stretching the floor",
        "The 3.5 mm floor shrinks more than the 2.0 mm walls, so the part pulls itself curved",
      ],
      answer: 3,
      explanation: `<p>The tell is that the bow is repeatable and the sections are unequal. Mould shrinkage is a volumetric effect: a 3.5 mm section keeps shrinking long after a 2.0 mm section has frozen, and in a semicrystalline like PP the shrink rate is high (1&ndash;2%) and strongly thickness dependent. Unequal shrink across a section pulls the part into a curve exactly the way a bimetallic strip bends.</p><p>Uneven ejection leaves local marks and stress whitening, not a smooth repeatable bow. Moisture pickup affects hygroscopic resins like nylon and PC, not PP. Over-packing raises residual stress and flash but does not by itself produce a consistent one-way curl.</p><p>The fix is geometric first: bring the floor down toward the wall thickness, say 2.2 mm, and recover the stiffness you lose with ribs at 40&ndash;60% of the wall rather than with bulk. Only after the sections are balanced do you spend money on process compensation (differential mould temperature, longer pack, a warped-steel correction). Process can shave the last millimetre; it cannot undo a 1.75:1 thickness ratio.</p>`,
    },
    {
      id: "manufacturing-q14",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A moulded cover has a textured show surface on the outside and a ribbed structural side inside. Where do the ejector pins go?</p>`,
      choices: [
        "On the show surface, where the texture will hide the witness marks",
        "On unsupported spans of the thin wall, to spread the ejection load",
        "On the boss tops and rib intersections on the non-cosmetic side, where the part is stiff",
        "Wherever the tool designer has room, since pin marks polish out later",
      ],
      answer: 2,
      explanation: `<p>Every ejector pin leaves a witness mark and pushes hard on a part that is still warm and soft. So you want the pins where two things are true: the mark does not matter, and the part is stiff enough to take the push without deforming.</p><p>Boss tops and rib intersections satisfy both. They sit on the non-cosmetic side, and they are the stiffest local features on the part, so the ejection load goes straight into structure rather than into an unsupported panel.</p><p>Pushing on the show surface puts a visible dimple on the face the customer sees. Texture does not reliably hide a raised or sunken pin mark. Pushing on an unsupported thin wall is how you get blush, stress whitening, permanent bowing or a pin punched through. And pin marks do not polish out: the part is the negative of the tool, so a mark is in the geometry, not on the surface.</p><p>The design action is to put ejection into your own model. Leave flat, supported pads on the inside for pins, and agree the pin layout with the tool shop at design review rather than discovering it at first trial.</p>`,
    },
    {
      id: "manufacturing-q15",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A moulded part with a 3.0 mm nominal wall has a cooling time of 32 s. Marketing will accept a thinner part. If the wall is reduced to 2.0 mm and everything else is held constant, what is the new cooling time, in seconds?</p>`,
      answer: 14.2,
      unit: "s",
      tolerance: 0.03,
      explanation: `<p>Cooling is heat conduction out through the wall thickness, and the solution to that problem gives a cooling time that scales with the square of the wall:</p><p class="eq">t<sub>cool</sub> &prop; h<sup>2</sup> &rarr; t<sub>2</sub> = t<sub>1</sub>(h<sub>2</sub>/h<sub>1</sub>)<sup>2</sup></p><p class="eq">t<sub>2</sub> = 32 &times; (2.0/3.0)<sup>2</sup> = 32 &times; 0.4444 = <strong>14.2 s</strong></p><p>Assuming it scales linearly gives 21.3 s and badly understates the win: a 33% wall reduction cuts cooling by 56%. Cooling is typically 60&ndash;80% of the moulding cycle, which is why wall thickness is the single most valuable number on a moulded part.</p>`,
    },
    {
      id: "manufacturing-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A moulded ABS housing has a 1.2 mm nominal wall and needs a boss to take an M3 thread-forming screw. Which boss design do you release?</p>`,
      choices: [
        "A solid 6 mm cylinder blended straight into the wall with a large fillet",
        "A cored tube with ~0.7 mm walls, tied to the side wall by thin gussets",
        "A solid 6 mm cylinder standing on a locally thickened 3 mm wall pad",
        "A cored tube with 1.2 mm walls, joined to the side wall along its full height",
      ],
      answer: 1,
      explanation: `<p>The boss has to hold a screw without creating a thick section. A cored tube does that: the screw sees a wall of material around it, and the cored hole keeps the local section close to the nominal wall so it cools and shrinks with everything else.</p><p>Size it from the wall, not from the screw. A boss wall of roughly 0.5&ndash;0.6&times; the nominal, here about 0.7 mm, will not sink. A boss wall equal to the nominal is already at the limit and, if it is also joined to the side wall along its whole height, you have created a thick rib as well as a thick boss. Gussets are the standard fix: thin, drafted, spaced ribs give the boss its bending stiffness while touching the wall as little as possible.</p><p>Both solid options are the classic mistake. A solid 6 mm cylinder on a 1.2 mm wall is a 5:1 thickness ratio. Guaranteed sink on the show face, long cooling and a void in the middle. Locally thickening the wall to 3 mm makes it worse, not better: it enlarges the hot spot instead of removing it.</p>`,
    },
    {
      id: "manufacturing-q17",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A moulded ABS panel must measure 120.00 mm across after it cools. The material's mould shrinkage is 0.6%. How much oversize must the cavity steel be cut, in mm?</p>`,
      answer: 0.72,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>The part shrinks away from the steel as it cools, so the cavity has to be cut larger by the shrink allowance:</p><p class="eq">L<sub>cavity</sub> = L<sub>part</sub>(1 + s) = 120.00 &times; 1.006 = 120.72 mm</p><p class="eq">oversize = 120.72 &minus; 120.00 = <strong>0.720 mm</strong></p><p>Compare that with the tolerance you would normally put on a moulded 120 mm dimension, perhaps &plusmn;0.2 mm. The shrink allowance is more than three times the tolerance band, which is why the shrink rate has to be right before the steel is cut and why nobody cuts a production tool from a nominal CAD model.</p><p>Two things follow from that. First, shrinkage is not one number: it varies with wall thickness, pack pressure, mould temperature and, in filled grades, with flow direction. A 30% glass-filled nylon may shrink 0.3% along the flow and 1.0% across it. Second, that is why tools are cut <strong>steel-safe</strong>: leave metal on, sample the part, then cut the steel to the measured result. You can always remove steel; you cannot put it back.</p>`,
    },
    {
      id: "manufacturing-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A machined pump body has: a bore that runs an O-ring dynamic seal, four bolted mounting pads, an outer cosmetic shell, and an internal flow passage. Manufacturing asks which surfaces carry an Ra callout. What do you tell them?</p>`,
      choices: [
        "The seal bore only, with the rest at the general machining note",
        "All machined surfaces, so one finish note covers the whole drawing",
        "The cosmetic shell only, because that is what the customer inspects",
        "The seal bore and the flow passage, at the same Ra as each other",
      ],
      answer: 0,
      explanation: `<p>Ra is a functional requirement, so ask what mechanism each surface serves. The dynamic seal bore is the only one with a real answer: an O-ring running on too rough a surface abrades and leaks, and on too smooth a surface it cannot hold a lubricant film and it rolls. That is a genuine two-sided requirement, typically Ra 0.4&ndash;0.8 &mu;m with a specified lay, and it belongs on the print.</p><p>The bolted pads work by clamp force and need flatness, not finish. The flow passage cares about pressure drop, which at ordinary Reynolds numbers is insensitive to a machined finish, so an Ra callout there just adds inspection. The cosmetic shell needs an appearance standard or a boundary sample, not a roughness number a customer will never measure.</p><p>Blanket-specifying a fine finish everywhere is the expensive mistake: it adds a finishing pass, slower feeds and an inspection line item on every face for no functional gain. The other half of the answer is <em>how it is verified</em>. State the cutoff length and where on the surface it is measured, or the number is unenforceable.</p>`,
    },
    {
      id: "manufacturing-q19",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The bracket shown is bent 90&deg; from 2.0 mm sheet with an inside radius of 2.0 mm and a K-factor of 0.42. Both leg dimensions are outside dimensions: A = 40.0 mm and B = 25.0 mm. What flat blank length do you cut, in mm?</p>`,
      figure: figFlatPattern,
      answer: 61.5,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p>Take the flat legs out of the outside dimensions first. Each outside leg contains the bend region, worth R + t at that corner:</p><p class="eq">leg<sub>A</sub> = 40.0 &minus; (2.0 + 2.0) = 36.0 mm&nbsp;&nbsp;&nbsp;leg<sub>B</sub> = 25.0 &minus; (2.0 + 2.0) = 21.0 mm</p><p>Then add the bend allowance, measured along the neutral axis at radius R + Kt:</p><p class="eq">BA = (&pi;/180)&theta;(R + Kt) = 1.5708 &times; (2.0 + 0.42 &times; 2.0) = 1.5708 &times; 2.84 = 4.46 mm</p><p class="eq">L<sub>flat</sub> = 36.0 + 21.0 + 4.46 = 61.46 &rarr; <strong>61.5 mm</strong></p><p>Adding the outside legs straight (40 + 25 = 65 mm) is the classic error and gives a part 3.5 mm long. Note the bend allowance 4.46 mm is less than the 8.0 mm of bend region it replaces. That difference is the bend deduction.</p><p>One caveat: K depends on the material, the radius and whether the shop air bends or bottoms. Get the first article measured and back out the shop's real K rather than trusting the handbook value.</p>`,
    },
    {
      id: "manufacturing-q20",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 3.0 mm thick 6061-T6 bracket is drawn with a 90&deg; bend at an inside radius of 3.0 mm (1t), with the bend line running parallel to the sheet's rolling direction. The first parts crack along the outside of the bend. What is the right response?</p>`,
      choices: [
        "Increase the press tonnage so the bend forms in a single stroke",
        "Open the inside radius to about 3t and run the bend across the grain",
        "Switch to a thicker gauge so the outer fibre strain is reduced",
        "Anneal the finished bracket after forming to close the surface cracks",
      ],
      answer: 1,
      explanation: `<p>Outer-fibre strain in a bend is set by the radius-to-thickness ratio, roughly &epsilon; &asymp; t/(2R + t). At R = 1t that is about 33% strain on the outside surface. Far more than 6061-T6 will take. A precipitation-hardened aluminium in the T6 condition has little ductility left, which is why its minimum bend radius is typically 3&ndash;4t while annealed 5052 will happily go to 0.5&ndash;1t.</p><p>Grain direction is the second half. Rolled sheet is anisotropic; a bend line <em>parallel</em> to the rolling direction stretches the material across its weakest path and cracks first. Rotating the blank so the bend runs across the grain buys a meaningful improvement for free, and it only costs nesting efficiency.</p><p>More tonnage forces the same strain harder and cracks it faster. A thicker gauge makes it worse, since strain depends on R/t and increasing t at fixed R lowers the ratio. Annealing after forming does nothing about cracks that already exist, annealing the blank <em>before</em> bending (to T4 or O temper, then age) is a real option, and it is the fallback if the 3t radius will not fit.</p>`,
    },
    {
      id: "manufacturing-q21",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 1.5 mm thick steel bracket has a 90&deg; bend at an inside radius of 1.5 mm. Using the usual shop rule of 2.5t + R measured from the bend line to the near edge of the hole, what is the minimum hole-to-bend distance, in mm?</p>`,
      answer: 5.25,
      unit: "mm",
      tolerance: 0.03,
      explanation: `<p class="eq">d<sub>min</sub> = 2.5t + R = 2.5(1.5) + 1.5 = 3.75 + 1.5 = <strong>5.25 mm</strong></p><p>The rule exists because material within roughly one bend radius of the bend line sits inside the forming strain field. A hole placed there ovalises as the sheet stretches, its edge becomes a crack starter, and it can drag on the punch. The 2.5t term keeps the hole out of the stretched zone, and the R term accounts for the bend region itself growing with the radius.</p><p>If the hole is functionally critical and cannot move, a dowel or a bearing seat, pierce it <em>after</em> forming and accept the second operation.</p>`,
    },
    {
      id: "manufacturing-q22",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The sand-cast aluminium housing shown carries a bearing bore, four bolted mounting pads, and a large outer shell. The programmer asks which surfaces to machine. What do you specify?</p>`,
      figure: figCastMachine,
      choices: [
        "Machine every external surface so all dimensions come off one setup",
        "Machine nothing; specify a tighter casting tolerance on the bore instead",
        "Machine the bore and the pads, and leave the shell and ribs as cast",
        "Machine the shell for appearance and leave the bore and pads as cast",
      ],
      answer: 2,
      explanation: `<p>Machine what carries function and nothing else. The bearing bore needs roundness, size and position that no sand casting will hold. Sand casting runs about &plusmn;0.8&ndash;1.5 mm on a dimension of this size, against the H7 or better the bearing wants. The mounting pads need to be flat and coplanar so the housing does not distort when it is bolted down. Everything else is bulk metal doing a structural job, and as-cast is exactly what it should be.</p><p>Machining the whole outside destroys the economics: you have paid for a pattern and a near-net shape and then removed it, and you have exposed subsurface porosity that the as-cast skin was keeping sealed. Tightening the casting tolerance instead of machining is not available at any sensible price for a bearing fit.</p><p>The design work that goes with this decision: put 1.5&ndash;3 mm of machining stock on the surfaces you will cut, keep draft and fillets on everything you will not, and make sure the raw casting has enough of a rough locating scheme that the first machining operation can find the part consistently.</p>`,
    },
    {
      id: "manufacturing-q23",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A steel suspension link carries a fully reversed load and has a required life of 10<sup>7</sup> cycles. Volume is 40,000 per year. A supplier offers a sand casting, a closed-die forging, or a plate weldment. Which do you take to a design review, and on what grounds?</p>`,
      choices: [
        "The casting &mdash; it needs no die and the geometry is free",
        "The weldment &mdash; plate is wrought and welds can be ground smooth",
        "The casting with 100% X-ray inspection, which removes the porosity risk",
        "The forging &mdash; grain flow follows the shape, no porosity, and the best fatigue strength",
      ],
      answer: 3,
      explanation: `<p>The controlling requirement is fully reversed fatigue, and fatigue is a defect-initiation problem. A casting's fatigue strength is dominated by its worst pore: shrinkage porosity, gas porosity and oxide films are all crack starters, and the scatter is wide, so the allowable stress you can design to is a fraction of the material's nominal strength.</p><p>A closed-die forging has none of those. The metal is worked, so porosity is closed up, and the grain flow follows the part outline rather than being cut through it, which is precisely why forged links, con-rods and crankshafts exist. At 40,000 per year the die amortises easily, so the usual objection to forging does not apply.</p><p>A plate weldment starts from good wrought material but concentrates the problem in the welds: a fillet weld toe is a severe fatigue detail, typically several classes below the parent plate, and grinding it improves but does not equalise it. X-raying every casting is expensive, slow, and only catches defects above the detection threshold, it manages the risk rather than removing it. The honest summary: for a reversed-load safety-relevant link, forge it, and spend the savings on the machining of the joint faces.</p>`,
    },
    {
      id: "manufacturing-q24",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A Ti-6Al-4V fitting finishes at 0.4 kg but is currently machined from a 3.5 kg plate blank &mdash; a buy-to-fly ratio near 9:1. Annual volume is 800. Which change gives the biggest real saving?</p>`,
      choices: [
        "Move to a near-net forged or printed preform, then finish machine",
        "Negotiate a lower price per kg on the incoming titanium plate",
        "Sell the titanium chips back, since they retain scrap value",
        "Keep the plate blank but run higher feeds to shorten the cycle time",
      ],
      answer: 0,
      explanation: `<p>A 9:1 buy-to-fly means you are paying for 3.1 kg of titanium you throw away <em>and</em> paying the machine time to convert it into chips, and titanium is slow to cut, so that machine time is the larger of the two. Both costs are attached to the same root cause: the blank is the wrong shape.</p><p>A near-net preform attacks both at once. A forging or a powder-bed build gets you to something like 0.8&ndash;1.2 kg before the first cut, so you buy a third of the metal and you remove a fraction of the material. At 800 per year a forging die can amortise, and if it cannot, a DMLS preform needs no tooling at all.</p><p>The other three shave the symptom. A better plate price is a few percent on the material line. Chip scrap recovers a small fraction of the metal value and nothing of the machining. Higher feeds in titanium run into tool life and heat almost immediately. The metallurgy, not the programmer, is setting the feed.</p><p>The number to quote in review is buy-to-fly itself: anything past about 5:1 in an expensive alloy is a flag to look at the blank rather than the toolpath.</p>`,
    },
    {
      id: "manufacturing-q25",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A structural bracket is printed by fused filament fabrication in glass-filled nylon and loaded in tension along its longest dimension. Four properties of the print vary with how it is set up. Which one governs whether the bracket survives?</p>`,
      choices: [
        "Dimensional accuracy, which sets whether the mounting holes line up",
        "Moisture pickup, which softens nylon and lowers its stiffness in service",
        "The angle between the load path and the layer boundaries in the build",
        "Support-removal access, which sets how clean the underside surface is",
      ],
      answer: 2,
      explanation: `<p>All four are genuine FFF concerns, which is what makes the question worth asking. You have to rank them, not spot the odd one out.</p><p>Interlayer bonding is the one that decides the outcome. Within a layer the material is a continuous extruded bead with fibres aligned along it; between layers it is a thermally welded interface, and its strength is commonly 30&ndash;70% of the in-plane value, with far worse notch sensitivity. Print the bracket standing up and the tensile load pulls directly across those weld planes; lay it down and the same load runs along continuous beads. Same file, same material, roughly a factor of two in strength.</p><p>Dimensional accuracy affects fit, not fracture, and is fixed with a reamed hole. Moisture matters for nylon. It can drop modulus noticeably, but it is a knockdown on a part that would otherwise work, not the failure mechanism. Support scars degrade the surface and can start cracks under cyclic load, but under static tension along the build axis, the layer interface fails first.</p><p>State the load direction, orient the layers across it, and validate with coupons printed in the same orientation on the same machine. Supplier datasheet values are in-plane and will flatter you.</p>`,
    },
    {
      id: "manufacturing-q26",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A 60 mm &times; 40 mm rectangular blank is stamped from coil. The strip layout runs the 40 mm dimension across the strip with a 3 mm web on each side, and advances at a 63 mm pitch. What is the material utilisation, in percent?</p>`,
      answer: 82.8,
      unit: "%",
      tolerance: 0.03,
      explanation: `<p>Utilisation is the blank area divided by the strip area consumed per hit. Strip width is the blank plus a web on each side:</p><p class="eq">w = 40 + 2(3) = 46 mm</p><p class="eq">A<sub>strip</sub> = 46 &times; 63 = 2898 mm<sup>2</sup>&nbsp;&nbsp;&nbsp;A<sub>blank</sub> = 60 &times; 40 = 2400 mm<sup>2</sup></p><p class="eq">utilisation = 2400 / 2898 = 0.828 = <strong>82.8%</strong></p><p>Roughly one part in six of the coil you buy leaves as skeleton scrap. On a high-volume stamping material is often the largest single cost line, so nesting is a design lever and not just a tooling detail. Shrink the web and pitch, or change the outline so blanks nest into each other.</p>`,
    },
    {
      id: "manufacturing-q27",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A steel spool must run in a bore that has to be &oslash;30 mm within 0.008 mm of size, round within 0.003 mm, and finished to Ra 0.4 &mu;m. Volume is 2,000 per year. Using the process bands shown, what do you route?</p>`,
      figure: figToleranceBands,
      choices: [
        "Bore it on a CNC mill in one setup with a fine finishing pass",
        "Hard-turn it on a lathe with a ceramic insert and skip grinding",
        "Rough and semi-finish by machining, then hone the bore to size",
        "Die-cast the housing to net size and ream the bore afterwards",
      ],
      answer: 2,
      explanation: `<p>Read the requirement against the bands. An 0.008 mm size tolerance with 0.003 mm roundness and Ra 0.4 &mu;m is squarely in the grinding and honing band; CNC milling and boring live around &plusmn;0.02&ndash;0.05 mm with Ra 0.8&ndash;3.2 &mu;m, an order of magnitude away.</p><p>So the routing is a process chain, not a single process: machine the housing and rough the bore, semi-finish leaving a few hundredths of stock, then hone. Honing is the right finishing process here specifically because it corrects roundness and straightness along the bore, it floats on the surface rather than following a spindle axis, and it leaves the crosshatch that a hydraulic spool wants.</p><p>Hard turning can reach Ra 0.4 &mu;m and tight size, but it inherits the spindle's runout and the part's clamping distortion, so holding 0.003 mm roundness on a thin housing is optimistic. Die casting is nowhere near, at &plusmn;0.1&ndash;0.3 mm, and a reamer follows the hole it is given rather than correcting it.</p><p>The generalisation worth carrying: when a requirement sits outside a process's band, do not tighten the process. Add the operation that owns that band, and design in the stock it needs.</p>`,
    },
    {
      id: "manufacturing-q28",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A moulded part would cost &#36;1.20 each with a &#36;48,000 tool. The same part machined costs &#36;9.20 each with no dedicated tooling. Ignoring schedule and risk, at what quantity do the two routes cost the same in total?</p>`,
      answer: 6000,
      unit: "parts",
      tolerance: 0.01,
      explanation: `<p>Set the two total costs equal and solve:</p><p class="eq">48000 + 1.20N = 9.20N</p><p class="eq">48000 = 8.00N &rarr; N = 48000 / 8.00 = <strong>6000 parts</strong></p><p>The general form is worth memorising, because you will be expected to produce it in your head:</p><p class="eq">N* = C<sub>tooling</sub> / (c<sub>machined</sub> &minus; c<sub>moulded</sub>)</p><p>Now interrogate it. If the programme is 3,000 parts total, machining wins by a wide margin and the tool is dead money. If it is 60,000, the tool pays back ten times over and the real question is only whether the moulded part meets the tolerance and finish requirements.</p><p>Near the crossover the arithmetic stops deciding. A 14-week tool lead time, a design still likely to change, moulded tolerances of &plusmn;0.1 mm against a machined &plusmn;0.05 mm, and the possibility of a second cavity later all move the answer more than the 6,000 does. The right answer in a review is the number plus the two or three factors that would override it.</p>`,
    },
    {
      id: "manufacturing-q29",
      type: "mc",
      difficulty: 3,
      prompt: `<p>The section view shows a milled block with three features and a general tolerance of &plusmn;0.05 mm. Only one of these makes the part impossible to produce with milling operations alone. Which one, and why?</p>`,
      figure: figCannotMake,
      choices: [
        "The 8 mm wide, 124 mm deep slot &mdash; a 15:1 depth-to-width ratio",
        "The general &plusmn;0.05 mm tolerance, which milling cannot hold",
        "The R0.4 internal corners, needing a 0.8 mm cutter over the full depth",
        "The blind side groove &mdash; no straight-down tool reaches it; it needs EDM or a redesign",
      ],
      answer: 3,
      explanation: `<p>Rank the four by whether they are hard or impossible. The 15:1 slot is hard: it needs a long reduced-neck cutter, tiny radial steps and a lot of cycle time, but a shop will quote it. The &plusmn;0.05 mm general tolerance is ordinary milling work. The R0.4 corners are the sort of thing that <em>looks</em> like the answer, a 0.8 mm cutter cannot go 124 mm deep, but that corner only exists at the top of the open pocket and can be relieved or EDM'd; it is a cost problem with known workarounds.</p><p>The side groove is different in kind. It undercuts the pocket wall, so there is no orientation from which a rotating tool travelling in a straight line can enter it and cut it. Rotating the part does not help. The groove is inside a pocket, and the entry is narrower than the feature. That is a topology problem, not a tooling problem.</p><p>The options are therefore: cut it with a T-slot or lollipop cutter if the pocket is wide enough for one to swing in, wire or sinker EDM it, split the part into two pieces and join them, or. Almost always the right answer. Ask what the groove is for and put it on a separate insert or retaining ring instead. The habit to build: when you are handed a part, look for the feature with no line of sight before you look at the tolerances.</p>`,
    },
    {
      id: "manufacturing-q30",
      type: "mc",
      difficulty: 3,
      prompt: `<p>Four proposals arrive to use metal additive manufacturing. Which one is genuinely the right process rather than a novelty that a conventional route would beat?</p>`,
      choices: [
        "A flat 5 mm aluminium cover plate with a bolt pattern, 200 per year",
        "A conformally cooled mould insert with curved channels near the surface",
        "A 316L flange with a plain bore and a face seal groove, 4,000 per year",
        "A titanium bar-stock spacer, printed to avoid ordering the bar in advance",
      ],
      answer: 1,
      explanation: `<p>The test is whether the geometry is impossible or seriously compromised by conventional processes. Only the mould insert passes: cooling channels that follow the cavity surface at a constant offset cannot be gun-drilled, because drilling makes straight holes. Conformal cooling typically takes 20&ndash;40% off a moulding cycle, so the insert pays for itself in production output. That is a real business case, not a demonstration.</p><p>The cover plate is a waterjet or laser-cut blank with a drilled pattern, done in minutes for a few dollars. The 316L flange is a turned part, and at 4,000 a year it is a bar-feed lathe job at a fraction of the build cost with better surface and roundness. The titanium spacer is the purest novelty: printing something to avoid a purchase-order lead time trades a cheap wait for an expensive part with worse properties.</p><p>Additive wins on <em>geometry</em>, on consolidating an assembly into one piece, and on genuinely low volumes of expensive alloys. It does not win on flat parts, round parts, or parts whose only virtue is that they were printed. And whichever way you argue it, budget for the post-processing, stress relief, support removal and machining of every functional face.</p>`,
    },
  ],

  qna: [
    {
      id: "manufacturing-qa01",
      q: `<p>Walk me through how you pick a manufacturing process for a new part.</p>`,
      a: `<p>Three inputs before anything else: annual volume, material, and the single hardest feature. Then I compute the break-even against a tooled process, N* = tooling / (untooled piece price &minus; tooled piece price). A 48k tool against an 8-dollar piece-price gap breaks even at 6,000 parts, so if the programme is 2,000 the conversation is over.</p><p>Below roughly a thousand parts, machining or sheet metal almost always wins because there is no tooling to amortise and the lead time is days rather than months. Above ten to twenty thousand thermoplastic parts, injection moulding wins so decisively that the design should be built around it from day one. Between those, it depends on how mature the design is: if there are still revisions coming, a tool is a liability.</p><p>Then I check the geometry against the process band. Sand casting holds about &plusmn;1 mm, moulding &plusmn;0.1, milling &plusmn;0.05, grinding &plusmn;0.005. If a feature needs a tolerance the near-net process cannot reach, the answer is not a different process, it is a process chain, cast or print the bulk, machine the two surfaces that matter, and leave stock for them.</p>`,
    },
    {
      id: "manufacturing-qa02",
      q: `<p>What do you look at first when you review a machined part for manufacturability?</p>`,
      a: `<p>Setup count, then tool access, then corner radii, in that order.</p><p>Setups because they multiply everything: fixture cost, cycle, operator touches, and, the part people forget, tolerance. Features cut in one clamping share the machine's coordinate frame; features cut across a flip carry the fixture's re-location error, typically 0.01&ndash;0.03 mm. So if two bores must be 0.02 mm apart, they have to be cut without unclamping, and that constrains the whole layout. I try to collapse features onto as few faces as I can, even at the cost of a slightly larger envelope.</p><p>Tool access next: is there a line of sight to every feature from some orientation, and is there room for the tool holder as well as the tool? Undercuts and grooves inside pockets are where parts become unmakeable.</p><p>Then radii and depths. Internal corners get the cutter radius, and depth sets the tool diameter. With a 4:1 stickout rule, a 36 mm deep pocket needs a 9 mm cutter and therefore R4.5 minimum. I would rather draw R5 and use a standard 10 mm end mill than draw R1 and get an EDM line item. Last, I check that the tight tolerances are only on the faces that do something, and that there is a flat, rigid place to clamp.</p>`,
    },
    {
      id: "manufacturing-qa03",
      q: `<p>A design review hands you a moulded housing. What are you checking, and what numbers are in your head?</p>`,
      a: `<p>Draft first, and I check it against the finish: 1&ndash;2&deg; per side on a smooth wall, plus roughly 1&ndash;1.5&deg; extra per 0.025 mm of texture depth. A 0.05 mm texture on a 50 mm wall wants around 4&deg;, not the 1.5&deg; someone drafted before the texture spec arrived.</p><p>Then wall thickness, because it drives the cycle and the cosmetics at once. Cooling time goes as the square of the wall, so 3.0 mm down to 2.0 mm takes a 32 s cool to about 14 s. I look for anything more than about 1.5&times; the nominal, a solid boss on a thin wall, a thick floor against thin sides, because that is where sink and warp come from. Ribs at 40&ndash;60% of the wall, bosses cored with roughly 0.6&times;-wall tube walls and tied back with gussets.</p><p>Then how the tool opens. Everything that does not release along the pull is a side action or a lifter, so I look for side holes, snap windows and external latches and ask whether they can be redesigned to pull in the open direction. Finally gate position and where the weld lines will land, the flow splits around every boss and core pin and re-joins downstream at maybe half strength, and where the ejectors and the parting line will show. I would rather move a gate on a drawing than argue about a drop-test failure at first trial.</p>`,
    },
    {
      id: "manufacturing-qa04",
      q: `<p>You bend 6061-T6 to 90&deg; on the press brake and it relaxes to 93&deg;. Give me three ways to hit 90&deg;, and pick one for 50,000 parts a year.</p>`,
      a: `<p>Springback is elastic recovery, so the fixes either compensate for it or suppress it.</p><p>First, overbend: drive the punch past the target so the part relaxes onto 90&deg;. Treating it proportionally, the tool has to go to about 86.9&deg; included. It costs nothing but it only holds while the material, the temper, the gauge and the tool radius stay constant. A new coil with 10% higher yield changes the springback and you are back to sorting parts.</p><p>Second, bottoming or coining: close the die so the material yields through the whole thickness at the radius. That removes most of the recovery instead of correcting for it, and it makes the angle far less sensitive to incoming material variation. It needs several times the air-bending tonnage and a die matched to the radius.</p><p>Third, form and re-strike, or a dedicated forming die that includes the compensation in the tool geometry.</p><p>At 50,000 a year I take bottoming in a matched die. At that volume I am buying repeatability, not flexibility, and the cost of the die and the extra tonnage is trivial against sorting or reworking parts across coil lots. For a hundred parts on a job shop brake, I would overbend and check the first article. I would also open the radius toward 3&ndash;4t. 6061-T6 cracks at 1t anyway, and run the bend across the rolling grain.</p>`,
    },
    {
      id: "manufacturing-qa05",
      q: `<p>A moulded part has a snap window through its side wall, perpendicular to the pull. What are your options and what does each cost?</p>`,
      a: `<p>That feature is an undercut: it cannot form or release in a straight-pull two-plate tool, because the steel that makes the window would be trapped in the part.</p><p>Option one is a side action, a slide driven by angle pins as the tool opens, carrying the steel out sideways before ejection. It works for essentially any external undercut. It costs tool money, a slice of cycle time, a witness line on the part where the slide shuts off, and a mechanism that wears and eventually needs maintenance.</p><p>Option two is a lifter, an angled ejector that moves inward as it rises. Lifters suit internal undercuts such as a snap hook on an inside wall, are cheaper than slides, but have limited travel and need room inside the part.</p><p>Option three, and the one I push for first, is a pass-through shutoff: put an opening in the wall directly above the snap so a core coming down from the other half can touch off against the cavity and form the snap face on the way past. That costs a hole in the wall, which is often acceptable, and which you can see on the inside of almost any injection-moulded consumer product, and it costs nothing in tool mechanism or cycle.</p><p>So the ranked answer is: redesign so the feature pulls, then shutoff, then lifter, then slide. In review I would ask what the snap actually retains, because moving it 90&deg; to the pull direction is usually a five-minute CAD change and saves a mechanism for the life of the tool.</p>`,
    },
    {
      id: "manufacturing-qa06",
      q: `<p>How do you decide what tolerance to put on a dimension?</p>`,
      a: `<p>Start from function, then check it against process capability, then price it.</p><p>Function sets the requirement: what does this dimension do, and how much can it move before the product stops working? That is the only legitimate source of a tolerance. Everything not in that set goes to the title-block general tolerance.</p><p>Capability sets whether it is buildable. If the supplier's process runs at a standard deviation &sigma;, the tightest half-tolerance I can honestly print is 3&sigma;C<sub>pk</sub>, and I want C<sub>pk</sub> of at least 1.33 before release. With &sigma; = 0.012 mm that is &plusmn;0.048 mm, so &plusmn;0.05 is fine and &plusmn;0.02 is a scrap-and-sort plan with a tolerance printed on it.</p><p>Then price. Tightening a bore from &plusmn;0.1 to &plusmn;0.01 does not make the mill more accurate; it adds a bore-and-hone operation, a gauge check on every part and a few percent scrap. On a 12-minute part at 95 an hour, that can easily be 10 dollars. A third of the part cost, on one dimension.</p><p>What I try to avoid is spreading precision thinly. It is nearly always cheaper to hold one feature tightly and let everything else float from it than to hold five features moderately.</p>`,
    },
    {
      id: "manufacturing-qa07",
      q: `<p>A cast housing keeps showing porosity next to a bolt boss. Walk me through the diagnosis.</p>`,
      a: `<p>Porosity next to a heavy boss is almost always shrinkage porosity, and the mechanism is thermal, not chemical. As the casting solidifies, liquid metal has to keep flowing into each region to make up the volume lost on freezing. A heavy boss joined to a thinner wall stays liquid after its neighbours have frozen solid, which cuts it off from the feed path. It then shrinks with nothing to feed it, and the last liquid to freeze becomes a void. Located, unhelpfully, exactly where the bolt load goes.</p><p>The first thing I would check is the section ratio: what is the inscribed circle in the boss compared with the wall it joins? Anything much over 1.5:1 is a hot spot waiting to happen. I would also look at where the risers are and whether solidification can run directionally from the far end of the casting back toward them.</p><p>The design fixes come before the process fixes. Core out the boss so it is a tube rather than a lump, blend it into the wall with generous fillets instead of a step, and if it must be heavy, put it adjacent to the riser rather than at the end of a thin path. Process fixes such as a chill to freeze the hot spot early, a larger riser or changed gating are real, but they treat geometry the design imposed.</p><p>The last question is whether it matters. If the porosity is subsurface and the boss is only clamping, it may be acceptable with a defined limit; if the bolt hole is machined into it and the joint is fatigue loaded, it is not, and then I would look at whether that feature should be a forged or machined insert instead.</p>`,
    },
    {
      id: "manufacturing-qa08",
      q: `<p>What do you have to design around with metal powder-bed additive manufacturing?</p>`,
      a: `<p>Build orientation is the first design input, not a print setting. It sets the layer count and therefore most of the cost, lying a 80 mm part down instead of standing it up roughly halves the build. It sets where support is needed, since overhangs shallower than about 45&deg; from the plate will not self-support. And it sets the anisotropy: powder-bed metal is much more isotropic than filament, but fatigue performance still depends on build direction and on which surfaces the supports scarred.</p><p>Support removal is the constraint people forget. Support has to be physically reachable, so an internal channel full of support is a scrapped part. That is why internal passages get designed as self-supporting teardrops or diamonds rather than circles, and why channel diameter is usually kept under about 8&ndash;10 mm.</p><p>Feature size and finish: roughly 0.4&ndash;0.5 mm minimum wall, and Ra 6&ndash;20 &mu;m as built, which is far too rough for a seal, a bearing or a fatigue surface. So any functional face gets machined, and that means designing in machining stock and a way to hold the part. Often a sacrificial fixturing tab that comes off with the plate.</p><p>Then residual stress. Parts are stress relieved on the plate before cutoff, or they bow when released. For fatigue-critical work I would add HIP to close internal porosity, and I would validate with coupons built in the same orientation on the same machine, because supplier datasheet values are best case.</p>`,
    },
    {
      id: "manufacturing-qa09",
      q: `<p>Your supplier says a part is too expensive. How do you find the cost, and what do you change?</p>`,
      a: `<p>I ask for the cost broken into material, setup, run time, secondary operations and inspection, because the fix is completely different in each case and guessing wastes a revision cycle.</p><p>If run time dominates, which it usually does on a machined part. I ask which operation is longest. It is generally one feature: a deep pocket with a small corner radius forcing a small cutter, a large surface with a fine finish callout, or a slow finishing pass on a tight tolerance. Opening a corner radius so a 12 mm tool can be used instead of a 4 mm tool can halve the pocket time on its own.</p><p>If setup dominates, the batch is small or the part needs too many faces. I look for features I can move onto a face already being machined, or a redesign that lets the part be cut from two sides instead of five.</p><p>If material dominates, I look at buy-to-fly. Machining a 0.4 kg titanium fitting from a 3.5 kg plate is a 9:1 ratio, and in an expensive alloy anything past about 5:1 says the blank is wrong, not the toolpath, a forged or printed near-net preform attacks both the metal cost and the cutting time at once.</p><p>If inspection dominates, someone has over-specified. I go through the print asking what each tight callout is for, and push the ones with no answer back to the general tolerance.</p><p>And I always ask what the volume is, because at 5 parts the setup is the whole cost and at 5,000 it has vanished into the noise.</p>`,
    },
    {
      id: "manufacturing-qa10",
      q: `<p>An interviewer slides a drawing across the table and asks whether it can be made. What is your routine?</p>`,
      a: `<p>I go looking for blockers before I look at numbers, because a tolerance problem is a cost problem while a geometry problem can be fatal.</p><p>First, line of sight. For every feature, is there an orientation from which a tool can reach it, with room for the holder as well as the cutter? Undercuts, grooves inside pockets and side features in a moulded part with a straight pull all fail here.</p><p>Second, internal corners. A rotating cutter leaves its own radius, so any sharp inside corner needs EDM, broaching or a relief. And I check the corner radius against the depth: with a 4:1 stickout rule, R1 in a 40 mm deep pocket is not a small cutter, it is an impossible one.</p><p>Third, thickness transitions. On anything moulded or cast, I look for a thick section next to a thin one. That is where sink, warp and shrinkage porosity live.</p><p>Fourth, tolerances against the process band. Milling holds about &plusmn;0.05 mm, moulding &plusmn;0.1, sand casting &plusmn;1. A number an order of magnitude tighter than the band has silently added an operation.</p><p>Then I say what I would change and what it costs, because "it cannot be made" is never the full answer. Usually the honest version is: this feature needs a second process, here is what that adds, and here is the redesign that avoids it, which of those do you want?</p>`,
    },
  ],
};

export default content;
