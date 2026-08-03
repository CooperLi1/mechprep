import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Material Behavior & Selection
// ---------------------------------------------------------------------------

const figSS = `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mp1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="mp1-dim" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="215" x2="430" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp1-ax)"/>
  <line x1="62" y1="215" x2="62" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp1-ax)"/>
  <text x="404" y="234" fill="#64748b">strain &epsilon;</text>
  <text x="30" y="30" fill="#64748b">stress &sigma;</text>
  <path d="M62,215 L118,99 C128,88 140,83 152,80 C200,68 240,60 272,59 C305,58 335,72 360,95" fill="none" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="62" y1="215" x2="126" y2="83" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="85" y1="215" x2="155" y2="70" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="240" y1="60" x2="165" y2="215" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 4"/>
  <circle cx="149" cy="82" r="4" fill="#1d4ed8"/>
  <circle cx="272" cy="59" r="4" fill="#1d4ed8"/>
  <circle cx="360" cy="95" r="4" fill="#dc2626"/>
  <circle cx="118" cy="99" r="3.5" fill="#334155"/>
  <line x1="62" y1="82" x2="149" y2="82" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="56" y="86" text-anchor="end" fill="#1d4ed8" font-weight="600">S<tspan baseline-shift="sub" font-size="9">y</tspan></text>
  <text x="272" y="48" text-anchor="middle" fill="#1d4ed8" font-weight="600">UTS</text>
  <text x="366" y="88" fill="#dc2626" font-weight="600">fracture</text>
  <line x1="112" y1="62" x2="120" y2="93" stroke="#64748b" stroke-width="1"/>
  <text x="76" y="56" fill="#334155" font-size="12">proportional limit</text>
  <text x="72" y="170" fill="#334155" font-size="12" transform="rotate(-64 72 170)">slope = E</text>
  <text x="318" y="44" fill="#64748b" font-size="12">necking starts</text>
  <text x="95" y="233" text-anchor="middle" fill="#dc2626" font-size="12">0.2% offset</text>
  <line x1="62" y1="243" x2="165" y2="243" stroke="#64748b" stroke-width="1" marker-end="url(#mp1-dim)"/>
  <line x1="165" y1="228" x2="165" y2="249" stroke="#64748b" stroke-width="1"/>
  <text x="140" y="262" text-anchor="middle" fill="#64748b" font-size="12">permanent (plastic) strain</text>
  <text x="212" y="166" fill="#64748b" font-size="12">unload is parallel to the elastic line</text>
</svg>`;

const figAshby = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mp2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="215" x2="432" y2="215" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp2-ax)"/>
  <line x1="70" y1="215" x2="70" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp2-ax)"/>
  <text x="230" y="252" text-anchor="middle" fill="#64748b">density &rho; (Mg/m<tspan baseline-shift="super" font-size="9">3</tspan>)</text>
  <text x="26" y="28" fill="#64748b">E (GPa)</text>
  <line x1="152" y1="211" x2="152" y2="219" stroke="#64748b"/>
  <line x1="358" y1="211" x2="358" y2="219" stroke="#64748b"/>
  <text x="152" y="231" text-anchor="middle" fill="#64748b" font-size="12">1</text>
  <text x="358" y="231" text-anchor="middle" fill="#64748b" font-size="12">10</text>
  <line x1="66" y1="171" x2="74" y2="171" stroke="#64748b"/>
  <line x1="66" y1="128" x2="74" y2="128" stroke="#64748b"/>
  <line x1="66" y1="84" x2="74" y2="84" stroke="#64748b"/>
  <line x1="66" y1="40" x2="74" y2="40" stroke="#64748b"/>
  <text x="60" y="175" text-anchor="end" fill="#64748b" font-size="12">1</text>
  <text x="60" y="132" text-anchor="end" fill="#64748b" font-size="12">10</text>
  <text x="60" y="88" text-anchor="end" fill="#64748b" font-size="12">100</text>
  <text x="60" y="44" text-anchor="end" fill="#64748b" font-size="12">1000</text>
  <line x1="70" y1="127" x2="415" y2="53" stroke="#334155" stroke-width="1.6" stroke-dasharray="7 4"/>
  <line x1="70" y1="163" x2="356" y2="41" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="2 3"/>
  <ellipse cx="336" cy="71" rx="28" ry="15" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="336" y="75" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">steel</text>
  <ellipse cx="287" cy="84" rx="21" ry="13" fill="#e2e8f0" stroke="#334155" stroke-width="1.4"/>
  <text x="287" y="88" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">Ti</text>
  <ellipse cx="241" cy="97" rx="22" ry="13" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="241" y="101" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">Al</text>
  <ellipse cx="194" cy="76" rx="30" ry="14" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="194" y="80" text-anchor="middle" fill="#1d4ed8" font-size="12" font-weight="600">CFRP</text>
  <ellipse cx="112" cy="126" rx="27" ry="14" fill="#fef3c7" stroke="#d97706" stroke-width="1.4"/>
  <text x="112" y="130" text-anchor="middle" fill="#92400e" font-size="12" font-weight="600">wood</text>
  <ellipse cx="163" cy="156" rx="32" ry="15" fill="#fee2e2" stroke="#dc2626" stroke-width="1.4"/>
  <text x="163" y="160" text-anchor="middle" fill="#dc2626" font-size="12" font-weight="600">polymers</text>
  <rect x="228" y="164" width="196" height="44" fill="#ffffff" stroke="#cbd5e1"/>
  <line x1="236" y1="178" x2="266" y2="178" stroke="#334155" stroke-width="1.6" stroke-dasharray="7 4"/>
  <text x="272" y="182" fill="#334155" font-size="12">slope 1: E/&rho; — tie</text>
  <line x1="236" y1="197" x2="266" y2="197" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="2 3"/>
  <text x="272" y="201" fill="#dc2626" font-size="12">slope 2: E<tspan baseline-shift="super" font-size="9">1/2</tspan>/&rho; — beam</text>
  <text x="86" y="46" fill="#64748b" font-size="12">up-left along a guide line = lighter for the same stiffness</text>
</svg>`;

const figCreep = `<svg viewBox="0 0 460 255" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mp3-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="62" y1="205" x2="428" y2="205" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp3-ax)"/>
  <line x1="62" y1="205" x2="62" y2="30" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp3-ax)"/>
  <text x="382" y="224" fill="#64748b">time t</text>
  <text x="26" y="26" fill="#64748b">strain &epsilon;</text>
  <line x1="152" y1="42" x2="152" y2="205" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <line x1="300" y1="42" x2="300" y2="205" stroke="#cbd5e1" stroke-dasharray="4 4"/>
  <circle cx="62" cy="182" r="4" fill="#334155"/>
  <text x="70" y="196" fill="#334155" font-size="12">&epsilon;<tspan baseline-shift="sub" font-size="9">0</tspan> elastic on loading</text>
  <path d="M62,182 C92,152 128,140 152,136 C210,128 262,120 300,112 C336,104 368,78 392,44" fill="none" stroke="#dc2626" stroke-width="3"/>
  <line x1="176" y1="136" x2="288" y2="120" stroke="#1d4ed8" stroke-width="2"/>
  <text x="232" y="112" text-anchor="middle" fill="#1d4ed8" font-size="12">minimum creep rate d&epsilon;/dt</text>
  <text x="106" y="164" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">primary</text>
  <text x="226" y="150" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">secondary</text>
  <text x="352" y="82" text-anchor="middle" fill="#334155" font-size="12" font-weight="600">tertiary</text>
  <circle cx="392" cy="44" r="4" fill="#dc2626"/>
  <text x="398" y="38" fill="#dc2626" font-size="12">rupture</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">constant load, constant temperature — raise either and the whole curve steepens</text>
</svg>`;

const figHeat = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="mp4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="70" y1="200" x2="424" y2="200" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp4-ax)"/>
  <line x1="70" y1="200" x2="70" y2="32" stroke="#64748b" stroke-width="1.5" marker-end="url(#mp4-ax)"/>
  <text x="20" y="28" fill="#64748b">S<tspan baseline-shift="sub" font-size="9">y</tspan> (MPa)</text>
  <rect x="92" y="161" width="56" height="39" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="176" y="139" width="56" height="61" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="260" y="116" width="56" height="84" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <rect x="344" y="59" width="56" height="141" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.4"/>
  <text x="120" y="155" text-anchor="middle" fill="#1d4ed8" font-size="12">415</text>
  <text x="204" y="133" text-anchor="middle" fill="#1d4ed8" font-size="12">655</text>
  <text x="288" y="110" text-anchor="middle" fill="#1d4ed8" font-size="12">900</text>
  <text x="372" y="53" text-anchor="middle" fill="#1d4ed8" font-size="12">1500</text>
  <text x="120" y="216" text-anchor="middle" fill="#334155" font-size="12">annealed</text>
  <text x="204" y="216" text-anchor="middle" fill="#334155" font-size="12">normalized</text>
  <text x="288" y="216" text-anchor="middle" fill="#334155" font-size="12">Q + temper</text>
  <text x="288" y="230" text-anchor="middle" fill="#64748b" font-size="12">600 &deg;C</text>
  <text x="372" y="216" text-anchor="middle" fill="#334155" font-size="12">Q + temper</text>
  <text x="372" y="230" text-anchor="middle" fill="#64748b" font-size="12">200 &deg;C</text>
  <line x1="70" y1="42" x2="424" y2="42" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="76" y="36" fill="#dc2626" font-size="12">E &asymp; 200 GPa in every one of these conditions</text>
  <text x="230" y="248" text-anchor="middle" fill="#64748b" font-size="12">4140 steel: heat treatment moves strength 3.6&times;, and moves E not at all</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Material Behavior & Selection",
    intro: `<p>Material selection is not a datasheet lookup. It is a chain of decisions: what the part must not do, whether that is yield, deflect, crack, sag, wear or corrode; which property controls that mode; which index ranks candidates once geometry is free to change; and what the process route does to the numbers you looked up. Half of the classic interview failures here come from confusing four words that are not synonyms, stiffness, strength, hardness and toughness. The other half come from quoting a property without the condition that produced it.</p>
<figure class="fig">${figSS}<figcaption>One tensile test carries most of the vocabulary: slope is stiffness E, the 0.2% offset construction gives yield S<sub>y</sub>, the peak is UTS, the area under the curve is toughness, and the unload line shows what is elastic versus permanent.</figcaption></figure>`,
    sections: [
      {
        heading: "Elastic, plastic, and the four words people mix up",
        html: `<p><strong>Stiffness</strong> is the elastic slope E, or G in shear. It is set by atomic bonding, so it is almost insensitive to alloying, cold work and heat treatment: every steel from annealed 1018 to 300M is E &asymp; 200 GPa. <strong>Strength</strong> is a stress level, yield S<sub>y</sub> where permanent deformation starts and ultimate S<sub>ut</sub> where the engineering curve peaks and necking begins. <strong>Hardness</strong> is resistance to indentation, roughly proportional to strength at S<sub>ut</sub> &asymp; 3.4 &times; HB in MPa, and inversely related to toughness within one alloy family. <strong>Toughness</strong> is energy per volume absorbed before fracture, the area under the curve.</p>
<p>Below the proportional limit, unloading retraces the loading line and the part springs back completely. Above yield the unload line is <em>parallel</em> to the elastic line but offset, and the strain that remains is plastic. That is why the 0.2% offset construction defines yield at all: real curves have no sharp corner, so you accept 0.002 permanent strain as the definition.</p>
<div class="callout warn">&ldquo;The part deflects too much, can we heat treat it?&rdquo; No. Heat treatment moves S<sub>y</sub> by a factor of three and E by about 1%. To cut elastic deflection you change the section, where I scales with h<sup>3</sup> for a rectangle, or the span, or the material <em>class</em>.</div>
<figure class="fig">${figHeat}<figcaption>Yield strength of one alloy, 4140, across four heat-treat conditions. Strength moves 3.6&times;; the elastic modulus does not move.</figcaption></figure>`,
      },
      {
        heading: "Numbers to know cold",
        html: `<p>Interviewers ask for these out loud, without a table. Learn the row, not the digit:</p>
<table><thead><tr><th>Material</th><th>E (GPa)</th><th>&rho; (g/cm<sup>3</sup>)</th><th>Typical S<sub>y</sub> (MPa)</th></tr></thead><tbody>
<tr><td>Steel (any)</td><td>200</td><td>7.8</td><td>250 mild &rarr; 1500 alloy Q&amp;T</td></tr>
<tr><td>Aluminum (any)</td><td>70</td><td>2.7</td><td>35 annealed &rarr; 275 (6061-T6) &rarr; 500 (7075-T6)</td></tr>
<tr><td>Titanium (Ti-6Al-4V)</td><td>110</td><td>4.5</td><td>830</td></tr>
<tr><td>Magnesium</td><td>45</td><td>1.8</td><td>160</td></tr>
<tr><td>CFRP, unidirectional along fibres</td><td>130</td><td>1.6</td><td>1500 (tension, fibre direction)</td></tr>
<tr><td>Engineering polymer (nylon, ABS)</td><td>2&ndash;3</td><td>1.1</td><td>40&ndash;80</td></tr>
</tbody></table>
<p>Two consequences fall straight out. First, <strong>E/&rho; is nearly identical for steel, aluminum, and magnesium</strong>: 200/7.8 = 25.6, 70/2.7 = 25.9, 45/1.8 = 25.0 GPa/(Mg/m<sup>3</sup>). Swapping steel for aluminum in a <em>tie</em> of fixed length buys you nothing in stiffness-limited mass. Second, aluminum's yield strength spans a factor of fourteen depending on temper, so &ldquo;aluminum&rdquo; on a drawing is not a specification.</p>`,
      },
      {
        heading: "The material index depends on what the section is allowed to do",
        html: `<p>If steel and aluminium have the same specific stiffness, why is every light aircraft made of aluminium? Because <strong>the index changes when the section is free to grow</strong>. Take a component of fixed length L, required stiffness S, minimize mass.</p>
<p><strong>Tie</strong> (axial, area A free): S = EA/L and m = &rho;AL. Eliminate A: m = (SL<sup>2</sup>)(&rho;/E). Minimize mass &rarr; maximize <strong>E/&rho;</strong>.</p>
<p><strong>Beam in bending</strong> (square or scaled section, area free): S &prop; EI/L<sup>3</sup> and I &prop; A<sup>2</sup>, so A &prop; (S/E)<sup>1/2</sup> and m = &rho;AL &prop; &rho;/E<sup>1/2</sup>. Maximize <strong>E<sup>1/2</sup>/&rho;</strong>.</p>
<p><strong>Plate in bending</strong> (fixed area in plan, thickness free): I &prop; t<sup>3</sup> so t &prop; (S/E)<sup>1/3</sup> and m &prop; &rho;/E<sup>1/3</sup>. Maximize <strong>E<sup>1/3</sup>/&rho;</strong>.</p>
<p>The exponent is not decoration. It records how much extra second moment you get per unit of extra mass when the shape is allowed to inflate. A tie gets nothing from being fatter per unit area, a beam gets I &prop; A<sup>2</sup>, a plate gets I &prop; t<sup>3</sup>. Score the same three materials both ways, with E in GPa and &rho; in Mg/m<sup>3</sup>:</p>
<table><thead><tr><th>Material</th><th>E/&rho; (tie)</th><th>E<sup>1/2</sup>/&rho; (beam)</th><th>E<sup>1/3</sup>/&rho; (plate)</th></tr></thead><tbody>
<tr><td>Steel</td><td>25.6</td><td>1.81</td><td>0.750</td></tr>
<tr><td>Aluminum</td><td>25.9</td><td>3.10</td><td>1.53</td></tr>
<tr><td>Magnesium</td><td>25.0</td><td>3.73</td><td>2.02</td></tr>
<tr><td>CFRP (uni)</td><td>81.3</td><td>7.13</td><td>3.17</td></tr>
</tbody></table>
<div class="callout">Read the ties column and steel, aluminium and magnesium are indistinguishable. Read the beam column and aluminium is 1.7&times; steel, magnesium 2.1&times;. That single exponent is the reason airframes are not steel, and using E/&rho; to screen a beam is the most common Ashby mistake there is.</div>
<figure class="fig">${figAshby}<figcaption>E versus &rho; on log axes. A material index E<sup>n</sup>/&rho; plots as a straight guide line of slope 1/n: slope 1 for a tie, slope 2 for a beam, slope 3 for a plate. Slide the line up-left; the last family it touches wins.</figcaption></figure>`,
      },
      {
        heading: "Behavior changes with rate, temperature, and time",
        html: `<p>A property is a number attached to a test condition. Change the condition and the number moves, sometimes by an order of magnitude.</p>
<p><strong>Rate.</strong> Polymers are viscoelastic, so modulus and strength rise with strain rate while ductility falls. A nylon clip that bends happily over a second can snap on a 5 ms impact, because at high rate the polymer chains cannot uncoil and the material responds glassy and brittle. Metals are far less rate-sensitive at room temperature, though BCC steels do stiffen and embrittle when loaded fast.</p>
<p><strong>Temperature.</strong> Above the glass transition T<sub>g</sub> a polymer's modulus can drop 100&times; over a few tens of degrees. In metals what matters is the <em>homologous temperature</em> T/T<sub>m</sub> in kelvin: below about 0.3 creep is negligible, above roughly 0.4 it governs design. Aluminium melts at 933 K, so 150 &deg;C is 423/933 = 0.45, a creep problem. Steel melts near 1800 K, so the same 150 &deg;C is 0.24 and not a creep problem at all. Same temperature, different physics.</p>
<p><strong>Time.</strong> Creep runs through primary, decelerating; secondary, a steady minimum rate where design data lives; and tertiary, accelerating to rupture. Design against creep by cutting sustained stress, dropping temperature, or picking an alloy with creep-rupture data at your life. Never by quoting room-temperature yield.</p>
<p><strong>Ductile-to-brittle transition.</strong> BCC metals such as carbon steels lose fracture energy over a narrow temperature band; FCC metals such as aluminium and austenitic stainless do not. Welded Liberty ships cracked in North Atlantic water because the plate's transition temperature sat above the service temperature and welds made the hull one continuous crack path. The fix is written as a Charpy requirement at the minimum service temperature, not as a higher yield strength.</p>
<figure class="fig">${figCreep}<figcaption>Creep at constant load and temperature. Design allowables come from the secondary (minimum-rate) region and from rupture life, not from a short tensile test.</figcaption></figure>`,
      },
      {
        heading: "Processing writes the properties",
        html: `<p>The alloy name is one input; the process history is the other. What each treatment actually does:</p>
<table><thead><tr><th>Treatment</th><th>Microstructure</th><th>What moves</th></tr></thead><tbody>
<tr><td>Cold work / strain hardening</td><td>Dislocation density rises; they tangle and block each other</td><td>S<sub>y</sub> and hardness up, elongation down, E unchanged</td></tr>
<tr><td>Annealing</td><td>Recovery and recrystallization wipe out the dislocation forest</td><td>S<sub>y</sub> and hardness down, ductility up, residual stress relieved</td></tr>
<tr><td>Quenching (steel)</td><td>Austenite trapped as supersaturated martensite</td><td>Hardness way up, toughness way down, distortion and quench cracks</td></tr>
<tr><td>Tempering</td><td>Carbon precipitates out of martensite as fine carbides</td><td>Hardness down a little, toughness up a lot, buying back ductility</td></tr>
<tr><td>Precipitation hardening (Al, Ti, 17-4PH)</td><td>Solution treat, quench, age, so fine coherent precipitates pin dislocations</td><td>S<sub>y</sub> up 3&ndash;5&times;; over-aging coarsens the precipitates and loses it again</td></tr>
<tr><td>Case hardening / nitriding</td><td>Hard surface layer with compressive residual stress on a tough core</td><td>Wear and fatigue up, surface brittleness and distortion up</td></tr>
</tbody></table>
<p>Processing also makes materials <strong>anisotropic</strong>. Rolled plate has elongated grains and stringers, so short-transverse ductility and toughness fall far below longitudinal, and that is the direction most often ignored on a drawing. Injection-moulded glass-filled polymers align their fibres with the flow. Additive metal parts vary with build orientation because lack-of-fusion defects and columnar grains lie between layers. Welding wipes out temper, and a 6061-T6 weld heat-affected zone drops toward T4 or annealed strength.</p>`,
      },
      {
        heading: "Pick by the failure mode, not the headline number",
        html: `<p>The workflow that survives a design review: state the function and the constraint, name the failure mode, pick the property that controls it, apply the index if geometry is free, then knock the candidate down with process, environment, cost and availability.</p>
<p class="eq">function &rarr; failure mode &rarr; controlling property &rarr; index &rarr; process &amp; environment knockdown</p>
<table><thead><tr><th>Failure mode</th><th>Property that governs</th><th>Property that does not</th></tr></thead><tbody>
<tr><td>Too much elastic deflection</td><td>E, and section geometry</td><td>S<sub>y</sub>, hardness, heat treatment</td></tr>
<tr><td>Permanent set under peak load</td><td>S<sub>y</sub></td><td>S<sub>ut</sub>, E</td></tr>
<tr><td>Cracking from an existing flaw</td><td>K<sub>IC</sub> and flaw size</td><td>S<sub>y</sub> (often moves the wrong way)</td></tr>
<tr><td>Impact / drop</td><td>Notched toughness at the coldest service temperature</td><td>Static tensile strength</td></tr>
<tr><td>Sagging under sustained heat</td><td>Creep-rupture at T and life</td><td>Room-temperature yield</td></tr>
<tr><td>Wear at a sliding contact</td><td>Surface hardness, lubrication, material pairing</td><td>Bulk toughness</td></tr>
<tr><td>Spring that must store energy</td><td>Resilience S<sub>y</sub><sup>2</sup>/2E, wanting high strength and <em>low</em> E</td><td>Highest available E</td></tr>
</tbody></table>
<p>The last row catches people. A spring is the one structure where a high modulus is a liability, since energy stored per volume before yield is S<sub>y</sub><sup>2</sup>/2E. Spring steel wins on strength, and glass-fibre composite leaf springs win by having a lower E at similar strength. Whenever someone answers &ldquo;use a stronger material&rdquo;, ask which of the seven rows above they are on.</p>`,
      },
    ],
    equations: [
      { name: "Stiffness-limited tie index", formula: "<p>maximize E/&rho;</p>", note: "Fixed length, area free. Steel, aluminum and magnesium tie at about 25 GPa/(Mg/m&sup3;) — this index alone never justifies a switch between them." },
      { name: "Stiffness-limited beam index", formula: "<p>maximize E<sup>1/2</sup>/&rho;</p>", note: "Fixed length, section free to scale (I &prop; A&sup2;). This is the correct screen for the most common case; using E/&rho; here is the classic Ashby error." },
      { name: "Stiffness-limited plate index", formula: "<p>maximize E<sup>1/3</sup>/&rho;</p>", note: "Panel of fixed plan area, thickness free (I &prop; t&sup3;). The freer the section, the smaller the exponent on E." },
      { name: "0.2% offset yield", formula: "<p>S<sub>y</sub> = E(&epsilon;<sub>total</sub> &minus; 0.002)</p>", note: "Definition of yield on a curve with no sharp knee: draw the elastic line shifted by 0.002 strain and take the intersection." },
      { name: "True stress and strain", formula: "<p>&sigma;<sub>t</sub> = &sigma;<sub>e</sub>(1 + &epsilon;<sub>e</sub>) &nbsp;&nbsp; &epsilon;<sub>t</sub> = ln(1 + &epsilon;<sub>e</sub>)</p>", note: "Valid up to necking. The engineering curve turns over at UTS only because area is shrinking; true stress rises monotonically." },
      { name: "Modulus of resilience", formula: "<p>U<sub>r</sub> = S<sub>y</sub><sup>2</sup>/(2E)</p>", note: "Elastic energy stored per unit volume at yield — the spring index. High strength and low modulus both help." },
      { name: "Homologous temperature", formula: "<p>T<sub>H</sub> = T/T<sub>m</sub> (both in K)</p>", note: "Below ~0.3 creep is negligible; above ~0.4 it governs. Aluminum at 150 &deg;C is 0.45; steel at 150 &deg;C is 0.24." },
      { name: "Fracture from a flaw", formula: "<p>K = Y&sigma;&radic;(&pi;a) &le; K<sub>IC</sub></p>", note: "Once a crack exists, allowable stress falls with &radic;a. A yield check on the smooth section says nothing about this." },
      { name: "Hardness to strength", formula: "<p>S<sub>ut</sub> (MPa) &asymp; 3.4 &times; HB</p>", note: "Useful shop-floor correlation for steels only. It says nothing about toughness, and it does not apply across material classes." },
    ],
    interviewTips: [
      "Name the failure mode before naming a material. Deflection, yield, fracture, creep, wear, and fatigue each point at a different property.",
      "Say the index out loud and say why: E/rho for a tie, E^(1/2)/rho for a beam, E^(1/3)/rho for a plate. Getting the exponent right is the whole test.",
      "Know the ballparks without a table: E = 200/70/110 GPa and rho = 7.8/2.7/4.5 g/cm3 for steel/aluminum/titanium.",
      "Never claim heat treatment will stiffen a part. It moves strength and hardness; E is set by bonding and barely budges.",
      "Quote a property with its condition: temperature, strain rate, orientation, temper, and whether it is a typical or a minimum value.",
      "For anything hot, convert to homologous temperature before deciding creep matters. For anything cold, ask for Charpy data at the minimum service temperature.",
    ],
  },
  questions: [
    {
      id: "material-properties-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>Before you size anything, an interviewer asks you to quote Young's modulus and density for steel, aluminum and titanium from memory. Which set is right to engineering ballpark (densities in g/cm<sup>3</sup>)?</p>`,
      choices: [
        "Steel 70 GPa / 7.8, aluminum 200 GPa / 2.7, titanium 110 GPa / 4.5",
        "Steel 200 GPa / 2.7, aluminum 70 GPa / 7.8, titanium 110 GPa / 4.5",
        "Steel 200 GPa / 7.8, aluminum 70 GPa / 2.7, titanium 110 GPa / 4.5",
        "Steel 200 GPa / 7.8, aluminum 70 GPa / 2.7, titanium 210 GPa / 8.9",
      ],
      answer: 2,
      explanation: `<p>The row to memorise is E = 200 / 70 / 110 GPa and &rho; = 7.8 / 2.7 / 4.5 g/cm<sup>3</sup> for steel, aluminium and titanium. Option A swaps the moduli, which is a 3&times; deflection error. Option B swaps the densities. Option D quotes copper-like numbers for titanium, and if titanium were that dense its whole reason for existing would disappear.</p>`,
    },
    {
      id: "material-properties-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A junior engineer models a 6061-T6 aluminum link but leaves E = 200 GPa in the material card. Loading stays elastic. By what factor does the real deflection exceed the predicted deflection?</p>`,
      answer: 2.86,
      unit: "(ratio)",
      explanation: `<p class="eq">&delta; &prop; 1/E &nbsp;&rarr;&nbsp; &delta;<sub>real</sub>/&delta;<sub>predicted</sub> = E<sub>model</sub>/E<sub>real</sub> = 200/70 = <strong>2.86</strong></p>
<p>Elastic deflection scales as 1/E with geometry and load fixed, so the model is off by nearly a factor of three. It is invisible in a stress plot, because stress barely depends on E in a statically determinate part: the von Mises contours look fine while displacements are wrong by 186%. Hand-check one displacement after every linear static run.</p>`,
    },
    {
      id: "material-properties-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A steel bracket passes its stress check comfortably but flexes more than the customer will accept. A colleague proposes heat treating it to a higher hardness to stiffen it up. What actually happens to the deflection?</p>`,
      choices: [
        "It drops by roughly the same ratio as the yield strength increase",
        "It is essentially unchanged: E moves about 1% while S<sub>y</sub> can triple",
        "It drops in proportion to the hardness increase, since HB tracks E",
        "It rises, because hardening a steel lowers its elastic modulus",
      ],
      answer: 1,
      explanation: `<p>Young&rsquo;s modulus is set by interatomic bond stiffness. Alloying, cold work and heat treatment rearrange dislocations and precipitates, changing how easily planes <em>slip</em>, which is strength, and barely touching bond stiffness. Annealed 1018 and quenched-and-tempered 4340 both have E &asymp; 200 GPa within a couple of percent while their yield strengths differ by more than 4&times;.</p>
<p>So the deflection is unchanged and you have spent money making the part more notch-sensitive. The levers that work, in order of effect: section geometry, since a rectangular section&rsquo;s I goes as h<sup>3</sup> and 20% more depth buys 73% more stiffness; then span or support condition; then a different material class such as CFRP, or simply more aluminium.</p>
<p>Heat treatment earns its money when the part is yielding, denting, wearing or fatigue-limited. Never when it is deflecting elastically.</p>`,
    },
    {
      id: "material-properties-q04",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>Compute the specific stiffness E/&rho; of structural steel using E = 200 GPa and &rho; = 7800 kg/m<sup>3</sup>. Give the answer in MN&middot;m/kg.</p>`,
      answer: 25.6,
      unit: "MN*m/kg",
      explanation: `<p class="eq">E/&rho; = 200&times;10<sup>9</sup> Pa / 7800 kg/m<sup>3</sup> = 25.6&times;10<sup>6</sup> N&middot;m/kg = <strong>25.6 MN&middot;m/kg</strong></p>
<p>Aluminium in your head: 70&times;10<sup>9</sup>/2700 = 25.9. Magnesium: 45&times;10<sup>9</sup>/1800 = 25.0. All three land within 4%, so for a <em>tie</em> they are equivalent and the choice falls to cost, joining or corrosion. Free the section to grow in bending and the index becomes E<sup>1/2</sup>/&rho;, where aluminium beats steel 3.10 to 1.81.</p>`,
    },
    {
      id: "material-properties-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A hinge pin must show no permanent set after the worst-case handling load. The datasheet gives S<sub>y</sub> = 350 MPa and S<sub>ut</sub> = 500 MPa. Which number belongs in the check?</p>`,
      choices: [
        "S<sub>ut</sub> = 500 MPa, because the pin has not failed until it separates",
        "The average of the two, 425 MPa, since real yield lies between them",
        "S<sub>ut</sub> with a factor of 2 applied, the standard way to size ductile metal",
        "S<sub>y</sub> = 350 MPa, because permanent set begins there, well below UTS",
      ],
      answer: 3,
      explanation: `<p>The requirement is written in the prompt: no permanent set. That is the definition of yield, so the allowable is S<sub>y</sub> = 350 MPa, divided by whatever factor of safety the program uses. Sizing to UTS would let the pin take a 30% permanent bend and still be declared a pass. The hinge would bind, the hole would ovalise, and nothing would have failed by that criterion.</p>
<p>UTS earns its place in three situations: brittle materials with no meaningful yield, a hardness-to-strength correlation, and ultimate-load cases where gross permanent deformation is acceptable as long as the structure holds, such as crash structure or proof-to-burst pressure vessels.</p>
<p>The S<sub>y</sub>/S<sub>ut</sub> ratio is worth reading too. Here 0.70 is a normal ductile structural metal. Above about 0.95 you are looking at a highly worked or hardened material with very little margin between first yield and fracture, so treat its ductility and toughness with suspicion.</p>`,
    },
    {
      id: "material-properties-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>On a steel tensile test with E = 200 GPa, the 0.2% offset line meets the measured curve at a total strain of 0.0035. What yield strength does the offset construction report, in MPa?</p>`,
      figure: figSS,
      answer: 300,
      unit: "MPa",
      explanation: `<p class="eq">&epsilon;<sub>elastic</sub> = 0.0035 &minus; 0.0020 = 0.0015</p>
<p class="eq">S<sub>y</sub> = E&epsilon;<sub>elastic</sub> = 200,000 MPa &times; 0.0015 = <strong>300 MPa</strong></p>
<p>The offset line is the elastic line shifted right by 0.002, so at the intersection the elastic strain is the total minus the offset. Multiplying E by the full 0.0035 gives 700 MPa, crediting plastic strain as if it were elastic.</p>`,
    },
    {
      id: "material-properties-q07",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A cantilever of fixed length must hit a tip-stiffness target. The cross-section is free &mdash; you may scale it up as needed &mdash; and the objective is minimum mass. Which material index do you maximize?</p>`,
      figure: figAshby,
      choices: [
        "E/&rho;, the specific stiffness, since it ranks stiffness per unit mass",
        "E<sup>1/2</sup>/&rho;, because a free section makes I grow as A<sup>2</sup>, so added area buys stiffness",
        "E<sup>1/3</sup>/&rho;, which is the right index for anything loaded in bending",
        "S<sub>y</sub>/&rho;, because a beam that resists yielding also resists bending",
      ],
      answer: 1,
      explanation: `<p>Derive it rather than recall it. Cantilever stiffness is S = 3EI/L<sup>3</sup>. If the section is free to scale but keeps its shape, I &prop; A<sup>2</sup>, so A &prop; (SL<sup>3</sup>/E)<sup>1/2</sup>. Mass is m = &rho;AL &prop; L<sup>5/2</sup>S<sup>1/2</sup>(&rho;/E<sup>1/2</sup>), and minimum mass means maximum <strong>E<sup>1/2</sup>/&rho;</strong>.</p>
<p>E/&rho; is the index for a <em>tie</em>, where extra area buys nothing because stiffness is EA/L. Applying it to a beam is the most common Ashby mistake there is, and it gives the wrong answer: on E/&rho; steel scores 25.6 and aluminium 25.9, equivalent, whereas on E<sup>1/2</sup>/&rho; aluminium scores 3.10 against steel&rsquo;s 1.81, a 1.7&times; mass advantage. E<sup>1/3</sup>/&rho; belongs to a plate whose plan area is fixed and only the thickness is free.</p>
<p>The exponent is bookkeeping for how much second moment the shape gains per unit mass added: nothing for a tie, A<sup>2</sup> for a beam, t<sup>3</sup> for a plate. Say that sentence and the follow-up questions stop.</p>`,
    },
    {
      id: "material-properties-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Score aluminum against steel on the beam index E<sup>1/2</sup>/&rho;, using E = 70 and 200 GPa and &rho; = 2.7 and 7.8 Mg/m<sup>3</sup>. What is the ratio (aluminum index)/(steel index)?</p>`,
      answer: 1.71,
      unit: "(ratio)",
      explanation: `<p class="eq">aluminum: &radic;70 / 2.7 = 3.099 &nbsp;&nbsp; steel: &radic;200 / 7.8 = 1.813</p>
<p class="eq">ratio = 3.099 / 1.813 = <strong>1.71</strong></p>
<p>An aluminium beam meeting the same stiffness weighs 1/1.71 = 0.585 of the steel one, a 42% saving. On E/&rho; the same two materials sit within 1% of each other; nothing changed but the exponent. The catch is that the aluminium beam gets there by being about 1.7&times; the section area and considerably deeper.</p>`,
    },
    {
      id: "material-properties-q09",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Same stiffness target, different part: a flat cover panel whose plan dimensions are fixed by packaging but whose thickness is free. Minimum mass. Which index applies?</p>`,
      choices: [
        "E<sup>1/3</sup>/&rho;, because only thickness is free and I &prop; t<sup>3</sup>",
        "E<sup>1/2</sup>/&rho;, because every bending problem shares the same index",
        "E/&rho;, because a wide panel in bending behaves like a row of ties",
        "E<sup>3</sup>/&rho;, since panel stiffness depends on the cube of thickness",
      ],
      answer: 0,
      explanation: `<p>For a panel of fixed plan area, bending stiffness per unit width goes as Et<sup>3</sup>. Hitting a stiffness target means t &prop; (1/E)<sup>1/3</sup>, and mass per unit area is &rho;t &prop; &rho;/E<sup>1/3</sup>. Maximise <strong>E<sup>1/3</sup>/&rho;</strong>.</p>
<p>Line the three cases up and the pattern is obvious: tie gives E/&rho;, beam with free section gives E<sup>1/2</sup>/&rho;, plate with free thickness gives E<sup>1/3</sup>/&rho;. The more freedom the section has to inflate, the smaller the exponent on E, because geometry is doing more of the work and the material&rsquo;s own stiffness matters less.</p>
<p>The payoff is large. On E<sup>1/3</sup>/&rho; aluminium scores 1.53 against steel&rsquo;s 0.750, so a stiffness-matched aluminium panel is roughly half the mass, and it gets there by being about 1.5&times; thicker. Option D inverts the logic, since t<sup>3</sup> in the stiffness means a cube <em>root</em> when you solve for t.</p>`,
    },
    {
      id: "material-properties-q10",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A tensile specimen reads 500 MPa engineering stress at 12% engineering strain, still uniform and before necking. What is the true stress at that instant, in MPa?</p>`,
      answer: 560,
      unit: "MPa",
      explanation: `<p class="eq">&sigma;<sub>true</sub> = &sigma;<sub>eng</sub>(1 + &epsilon;<sub>eng</sub>) = 500(1.12) = <strong>560 MPa</strong></p>
<p>Engineering stress uses the original area, true stress the current one, and with constant volume during plastic deformation A<sub>0</sub>L<sub>0</sub> = AL gives A = A<sub>0</sub>/(1 + &epsilon;<sub>eng</sub>). True strain at the same point is ln(1.12) = 0.113, not 0.12.</p>
<p>Beyond bookkeeping, this matters because the engineering curve turns over at UTS and slopes <em>down</em>, which looks like the material getting weaker. It is not. True stress climbs monotonically to fracture, and the engineering curve falls only because the shrinking neck area is being divided into by a constant A<sub>0</sub>. Any forming, crash or large-deformation FEA model needs the true curve, and feeding it engineering data makes it predict a softening material that does not exist.</p>`,
    },
    {
      id: "material-properties-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A 1018 steel rod is cold-drawn with a 30% area reduction. Compared with the annealed rod, what happens to yield strength, elongation at break, and Young's modulus?</p>`,
      choices: [
        "Yield up, elongation up, modulus up &mdash; cold work improves all three",
        "Yield up, elongation down, modulus up in proportion to the yield gain",
        "Yield unchanged, elongation down, modulus up because grains align",
        "Yield up sharply, elongation down sharply, modulus essentially unchanged",
      ],
      answer: 3,
      explanation: `<p>Cold drawing multiplies dislocation density. Dislocations tangle and obstruct each other, so it takes more stress to move them, and the yield strength of 1018 roughly doubles from about 220 MPa annealed to 450&ndash;500 MPa cold-drawn. The dislocation forest is already partly exhausted, so remaining ductility falls hard, with elongation dropping from around 35% to around 10%. Modulus is untouched, because E depends on bond stretching rather than dislocation motion.</p>
<p>Two practical consequences. A cold-drawn bar is a poor choice where you need to form, bend or absorb impact energy, and it springs back much more when bent. And the locked-in residual stress makes it move when machined asymmetrically, the classic bowed-after-milling-one-face problem, cured by stress-relieving before finish machining.</p>
<p>Same trade as heat treating: strength and hardness go one way, ductility and toughness the other, and stiffness stays where it was.</p>`,
    },
    {
      id: "material-properties-q12",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A leaf spring must store elastic energy. For spring steel with S<sub>y</sub> = 1200 MPa and E = 200 GPa, compute the modulus of resilience U<sub>r</sub> = S<sub>y</sub><sup>2</sup>/(2E) in MJ/m<sup>3</sup>.</p>`,
      answer: 3.6,
      unit: "MJ/m^3",
      explanation: `<p class="eq">U<sub>r</sub> = S<sub>y</sub><sup>2</sup>/(2E) = (1200&times;10<sup>6</sup>)<sup>2</sup> / (2 &times; 200&times;10<sup>9</sup>)</p>
<p class="eq">= 1.44&times;10<sup>18</sup> / 4.00&times;10<sup>11</sup> = 3.60&times;10<sup>6</sup> J/m<sup>3</sup> = <strong>3.60 MJ/m<sup>3</sup></strong></p>
<p>Resilience is the elastic energy stored per unit volume at yield, the triangle under the elastic line. Run mild steel through the same formula at 250 MPa and you get 0.156 MJ/m<sup>3</sup>, twenty-three times worse, because strength enters squared.</p>
<p>Now the counter-intuitive part: E is in the <em>denominator</em>. Glass-fibre composite at S<sub>y</sub> &asymp; 1000 MPa and E &asymp; 40 GPa gives 12.5 MJ/m<sup>3</sup>, 3.5&times; better than spring steel, which is exactly why composite leaf springs exist. A spring is the one structure where a high modulus hurts, and this equation is the rebuttal to &ldquo;use the stiffest material&rdquo;.</p>`,
    },
    {
      id: "material-properties-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A bracket carries a constant bolt preload at 150 &deg;C for the life of the product. Should you expect creep to govern if it is 6061 aluminum (T<sub>m</sub> &asymp; 933 K)? What about plain carbon steel (T<sub>m</sub> &asymp; 1800 K)?</p>`,
      figure: figCreep,
      choices: [
        "Both do &mdash; any structural metal held above 100 &deg;C becomes creep-limited",
        "Neither does; 150 &deg;C is a small fraction of either melting point",
        "Aluminum yes at T/T<sub>m</sub> = 0.45; steel no at T/T<sub>m</sub> = 0.24, since creep tracks homologous temperature",
        "Steel yes and aluminum no, because steel's higher modulus drives creep",
      ],
      answer: 2,
      explanation: `<p>Creep is governed by <em>homologous</em> temperature, T/T<sub>m</sub> in kelvin, not by degrees Celsius. At 150 &deg;C = 423 K:</p>
<p class="eq">aluminum: 423/933 = 0.45 &nbsp;&nbsp; steel: 423/1800 = 0.24</p>
<p>Creep is negligible below about 0.3 and design-governing above roughly 0.4. So the same shelf temperature is a serious creep problem for the aluminium bracket, whose preload will relax over months, and a non-issue for the steel one.</p>
<p>Which is why &ldquo;150 &deg;C is not hot&rdquo; means nothing without the material. Lead creeps at room temperature, T/T<sub>m</sub> = 0.5; nickel superalloys are used at 900 &deg;C because their T<sub>m</sub> is near 1700 K. For the aluminium bracket the fixes are to drop the sustained stress, use a steel washer stack or Belleville to hold preload, switch to a creep-resistant alloy, or design the joint so relaxation does not lose function.</p>`,
    },
    {
      id: "material-properties-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>Compute the homologous temperature of aluminum (T<sub>m</sub> = 933 K) operating at 150 &deg;C. Give the dimensionless ratio T/T<sub>m</sub>.</p>`,
      answer: 0.453,
      unit: "(ratio)",
      explanation: `<p class="eq">T = 150 + 273 = 423 K</p>
<p class="eq">T/T<sub>m</sub> = 423 / 933 = <strong>0.453</strong></p>
<p>Convert to absolute temperature first. Celsius gives 150/660 = 0.227, which lands the part in the negligible-creep band and produces exactly the wrong decision. 0.45 sits above the 0.4 threshold, so this aluminium part needs creep data rather than a room-temperature yield check.</p>`,
    },
    {
      id: "material-properties-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A nylon retaining clip flexes happily when an assembler presses it home over about a second, but the same clip shatters when a packed unit is dropped on the floor. What is going on?</p>`,
      choices: [
        "At impact rates the polymer's modulus rises and its ductility collapses, so it responds glassy",
        "The clip was overloaded statically; the drop simply exceeded its yield stress",
        "Nylon absorbs moisture during the drop, which embrittles the material instantly",
        "The drop heats the clip above its T<sub>g</sub>, and above T<sub>g</sub> polymers fracture",
      ],
      answer: 0,
      explanation: `<p>Polymers are viscoelastic, so their response depends on how fast you load them. Deformation requires polymer chains to slide and uncoil, which takes time. At a slow assembly rate the chains have time to move and the material shows a low modulus with large ductile strain. At a 5 ms impact they cannot, so the clip responds glassy: higher modulus, higher peak stress, a fraction of the strain to break. Cold makes it worse, because low temperature slows chain motion the same way high rate outruns it, which is time-temperature superposition.</p>
<p>So qualify snap features with impact tests at the coldest service temperature rather than a slow bench push, use generous fillets at the hinge root because notch sensitivity is far worse at rate, and pick an impact-modified or rubber-toughened grade if the drop case governs.</p>
<p>Option D is backwards: above T<sub>g</sub> a polymer becomes rubbery and <em>more</em> ductile.</p>`,
    },
    {
      id: "material-properties-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Welded Liberty ship hulls cracked catastrophically in North Atlantic winter water while identical plate behaved fine in warm harbours. You are specifying plate for a cold-service welded structure. What do you write on the drawing?</p>`,
      choices: [
        "A higher yield strength plate, so the hull carries more stress",
        "Thicker plate, since fracture is a stress problem cured by area",
        "Post-weld heat treatment alone, which removes the transition",
        "A Charpy V-notch energy minimum, verified at the lowest service temperature",
      ],
      answer: 3,
      explanation: `<p>Body-centred-cubic metals, which includes carbon and low-alloy steels, have a ductile-to-brittle transition. Over a narrow temperature band the fracture mode switches from ductile tearing absorbing 100+ J to cleavage absorbing 10 J. The Liberty ships sat below their plate&rsquo;s transition temperature in winter water, and continuous welded construction gave a crack an uninterrupted path across the hull, where riveted hulls arrested cracks at each seam.</p>
<p>The requirement therefore has to be written as toughness at temperature: 27 J Charpy V-notch at &minus;20 &deg;C, per plate lot. Higher yield strength usually moves the transition the <em>wrong</em> way, thicker plate is worse still because through-thickness constraint promotes plane-strain cleavage, and PWHT helps residual stress without relocating the transition temperature.</p>
<p>The other lever is metallurgy. Fine grain size from killed, normalised steel lowers the transition, and FCC materials such as aluminium, austenitic stainless and nickel alloys have no transition at all, which is why cryogenic tanks are 304L or 5083.</p>`,
    },
    {
      id: "material-properties-q17",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A supplier reports only a hardness of 200 HB for a carbon steel bar. Using the shop correlation S<sub>ut</sub> (MPa) &asymp; 3.4 &times; HB, estimate its ultimate tensile strength in MPa.</p>`,
      answer: 680,
      unit: "MPa",
      explanation: `<p class="eq">S<sub>ut</sub> &asymp; 3.4 &times; HB = 3.4 &times; 200 = <strong>680 MPa</strong></p>
<p>Both the indentation test and the tensile test probe resistance to plastic flow, so for steels they track each other closely. A hardness tester on a finished part is often the only measurement available, and this correlation genuinely gets used on the shop floor for incoming inspection.</p>
<p>The limits are what the question is really after. It applies to steels, not to aluminium, copper or polymers, each of which has its own coefficient. It estimates <em>ultimate</em> strength, not yield, so you still need the S<sub>y</sub>/S<sub>ut</sub> ratio, typically 0.6&ndash;0.9 depending on treatment. And it says nothing about toughness: a case-hardened surface at 700 HB implies a 2400 MPa surface that will crack under impact. Within one alloy family high hardness even predicts <em>low</em> toughness, the opposite of what hard-means-strong-means-good suggests.</p>`,
    },
    {
      id: "material-properties-q18",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 4140 shaft is quenched to 55 HRC and then cracks at a shoulder in service. The metallurgist recommends tempering at 500 &deg;C. At the microstructural level, what does that buy you?</p>`,
      figure: figHeat,
      choices: [
        "Re-austenitizes the steel, replacing martensite with soft equiaxed ferrite grains",
        "Precipitates fine carbides out of supersaturated martensite, trading some hardness for toughness",
        "Raises hardness further by converting retained austenite into fresh martensite",
        "Leaves microstructure unchanged and only relieves the quench residual stresses",
      ],
      answer: 1,
      explanation: `<p>Quenching traps carbon in a supersaturated, heavily strained body-centred-tetragonal lattice, as-quenched martensite. That is why it is hard at 55 HRC and why it is brittle, since there is almost no mechanism to blunt a crack. Tempering holds the part below the austenitizing temperature so carbon diffuses out and precipitates as fine carbides, relieving the lattice strain. Hardness falls modestly, 55 to roughly 40 HRC at 500 &deg;C, while impact toughness climbs several-fold and quench residual stresses relax at the same time.</p>
<p>That is the whole logic of quench-and-temper: over-harden deliberately, then buy back exactly as much toughness as the application needs by choosing the tempering temperature. Higher temper means tougher and softer.</p>
<p>Two things to say next. The tempering temperature is the design knob, so it belongs on the drawing as a hardness range rather than just &ldquo;Q&amp;T&rdquo;. And avoid temper embrittlement bands around 260&ndash;370 &deg;C for many alloy steels. E is identical at 55 HRC and 40 HRC, so tempering changes strength and toughness and never stiffness.</p>`,
    },
    {
      id: "material-properties-q19",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 2 kg housing can be machined from 7075 billet at &#36;85 per part with no tooling, or cast in A356 at &#36;18 per part after a &#36;12,000 tool. Ignoring time value of money, at what annual volume does casting become cheaper? Give the breakeven number of parts.</p>`,
      answer: 179,
      unit: "parts",
      explanation: `<p class="eq">85N = 12,000 + 18N</p>
<p class="eq">67N = 12,000 &nbsp;&rarr;&nbsp; N = 179.1 &rarr; <strong>179 parts</strong></p>
<p>Machining has no fixed cost; casting has tooling plus a much lower piece price. Below roughly 180 parts a year machining wins, above it casting does, and by 1000 parts casting saves &#36;55k a year. Cost is a material-selection input rather than an afterthought, which is why this calculation gets asked.</p>
<p>Then say what the arithmetic hides. A356-T6 has roughly a third the yield strength of 7075-T6 and much lower elongation, plus porosity that hurts fatigue, so the casting needs more section and may miss the mass target. Tooling adds 8&ndash;16 weeks of lead time and locks the design, while machining lets you change the part next week. The honest answer is 179 parts, but only if the cast alloy passes the structural case.</p>`,
    },
    {
      id: "material-properties-q20",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A latch spring on an exposed marine deck fitting must hold preload for years, stay elastic through thousands of cycles, and survive salt spray. Which stainless would you propose first, and defend?</p>`,
      choices: [
        "304, because its higher carbon content makes it the strongest of the three",
        "316, since the added molybdenum also makes it the best spring material",
        "17-4PH at H1075, trading some chloride resistance for the yield a spring needs",
        "Any of them; austenitic and martensitic stainless behave alike as springs",
      ],
      answer: 2,
      explanation: `<p>Rank by the controlling requirement, which is elastic energy and preload retention, and that needs high yield strength. Annealed 304 and 316 yield around 205&ndash;240 MPa, hopeless as a spring; they take a permanent set on first use. 17-4PH is precipitation-hardening martensitic stainless, and aged at H1075 it yields near 1000 MPa, which is spring territory, while keeping meaningful chloride resistance.</p>
<p>Now the caveat that gets you the offer. 17-4PH is <em>less</em> corrosion resistant than 316 in chlorides, and in the harder conditions such as H900 it is susceptible to stress-corrosion cracking, which is exactly why you specify over-aged H1075 or H1150 rather than peak strength. If pitting turns out to dominate, the alternatives are cold-worked 316 spring temper, taking strength from work hardening rather than heat treatment, or a nickel alloy such as Inconel X-750 or Elgiloy.</p>
<p>Option B&rsquo;s molybdenum genuinely does improve pitting resistance in 316. It just does nothing for yield strength.</p>`,
    },
    {
      id: "material-properties-q21",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 316 stainless bolt seizes solid halfway into a 316 stainless nut during assembly and has to be cut off. What happened, and what are your fixes?</p>`,
      choices: [
        "Galling: matching alloys cold-weld once the oxide film is scrubbed off",
        "The bolt yielded in torsion, so the thread flanks deformed and jammed",
        "Thermal expansion mismatch closed the thread clearance during tightening",
        "Corrosion products packed the threads, which is why stainless needs plating",
      ],
      answer: 0,
      explanation: `<p>Stainless owes its corrosion resistance to a thin passive chromium-oxide film. Thread flanks slide under high contact pressure, the film is scraped through, and two chemically identical, similarly hard, ductile austenitic surfaces are pressed into clean metal-to-metal contact, so they adhere, tear and cold-weld. Austenitic stainless is the worst offender because it work-hardens rapidly and has poor thermal conductivity, keeping the heat in the contact. Aluminium and titanium gall for the same reason.</p>
<p>Three fixes are worth naming. Anti-seize compound or a dry-film lubricant such as PTFE or moly on the threads. Breaking the material symmetry with different alloys or different hardness, for instance a hardened 17-4PH or silicon-bronze nut against a 316 bolt. And slowing the assembly down with controlled torque, since galling scales with sliding speed and contact stress, plus rolled rather than cut threads for a smoother flank.</p>
<p>Torsional yield does not explain a seizure halfway down with plenty of torque capacity left, and galling happens on brand-new hardware where there are no corrosion products at all.</p>`,
    },
    {
      id: "material-properties-q22",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Two beams of equal length must meet the same bending stiffness, each free to scale its section. Using the beam index results E<sup>1/2</sup>/&rho; = 3.10 for aluminum and 1.81 for steel, what is the mass ratio m<sub>Al</sub>/m<sub>steel</sub>?</p>`,
      answer: 0.585,
      unit: "(ratio)",
      explanation: `<p class="eq">m<sub>Al</sub>/m<sub>steel</sub> = (E<sup>1/2</sup>/&rho;)<sub>steel</sub> / (E<sup>1/2</sup>/&rho;)<sub>Al</sub> = 1.81/3.10 = <strong>0.585</strong></p>
<p>Mass at fixed stiffness is inversely proportional to the index, because the index was derived as m &prop; &rho;/E<sup>1/2</sup>. The aluminium beam weighs 58.5% of the steel one, a 41.5% saving. The same pair judged on E/&rho; would look identical, and the entire aerospace case for aluminium lives in that exponent.</p>
<p>Two conditions before promising the saving. The aluminium section must be allowed to grow: same shape, area scaling as 1/&radic;(E ratio), so about 1.7&times; larger and visibly deeper. Fix the envelope and the advantage evaporates. And this is a <em>stiffness</em> result only, so recheck yield, local buckling of the now-thinner walls, fatigue, since aluminium has no endurance limit, and joints. Any of those can drive you back to steel.</p>`,
    },
  ],
  qna: [
    {
      id: "material-properties-qa01",
      q: `<p>Walk me through how you actually picked the material for a part you designed.</p>`,
      a: `<p>The last one was a camera mount arm on a drone, 180 mm long and cantilevered, where the requirement that bit was pointing stability, tip deflection under a 1.5 g manoeuvre, rather than strength. So the failure mode was elastic deflection, the controlling property was E, and because the section was free to grow inside the fairing I screened on E<sup>1/2</sup>/&rho; rather than E/&rho;. That immediately ruled steel out: it ties with aluminium on E/&rho; and scores 1.81 against aluminium&rsquo;s 3.10 on the beam index.</p>
<p>CFRP scored roughly twice aluminium again, so I priced it out. At 400 units a year the layup tooling and inspection burden did not pay back, and I would have owned a joint problem where the arm meets the aluminium body, galvanic corrosion plus a bonded interface I could not inspect. I took 6061-T6, spent the mass budget on section depth instead, and got the deflection with a 22 mm deep I-shaped extrusion.</p>
<p>Then the knockdowns: yield at the root with the drop case, fatigue from rotor vibration, where aluminium has no endurance limit so I sized to a finite-life allowable, anodise for corrosion, and confirming the extrusion die existed. The material choice took ten minutes. The knockdowns took two weeks.</p>`,
    },
    {
      id: "material-properties-qa02",
      q: `<p>A colleague says &ldquo;the bracket is flexing too much, let's switch to a stronger alloy.&rdquo; What do you say back?</p>`,
      a: `<p>Strength is not the property failing us here. I would ask what the acceptance criterion actually is, a deflection number or a stress number. If the bracket is flexing we are on the elastic part of the curve and the only material property in play is E. Switching from 6061-T6 to 7075-T6 nearly doubles yield strength and changes E by about 1%, so we would spend money and get essentially the same deflection. Heat treatment is the same story, moving dislocation behaviour rather than bond stiffness.</p>
<p>What I would do instead, in order. Geometry first, because a rectangular section&rsquo;s second moment goes as h<sup>3</sup>, so 20% more depth is 73% more stiffness and usually free. Then the load path: shorten the span, add a gusset, triangulate so the load goes axial instead of bending, or add a second attachment point. Only with geometry boxed in would I look at a material class change, meaning steel if the envelope is fixed, or CFRP if mass matters more than cost.</p>
<p>Then I would flip it round and ask whether deflection really is the requirement. If the complaint is a permanent bend after a drop, that <em>is</em> a yield problem and my colleague is right, because a stronger alloy is exactly the fix. The whole answer turns on which failure mode we are on.</p>`,
    },
    {
      id: "material-properties-qa03",
      q: `<p>Steel and aluminum have almost identical specific stiffness. So why is an airframe aluminum?</p>`,
      a: `<p>Because E/&rho; is the index for a tie, and almost nothing on an airframe is a tie. Run the numbers: steel 200/7.8 = 25.6, aluminium 70/2.7 = 25.9, magnesium 45/1.8 = 25.0. On that index all three are the same material, and if the structure were a set of fixed-length rods in pure tension they genuinely would be interchangeable on mass.</p>
<p>Airframe structure is beams, panels and skins in bending, where the section is free to grow. For a beam with a scalable section, I &prop; A<sup>2</sup>, so mass at fixed stiffness goes as &rho;/E<sup>1/2</sup> and the index is E<sup>1/2</sup>/&rho;: 1.81 for steel, 3.10 for aluminium, 3.73 for magnesium. For a panel with fixed plan area and free thickness, I &prop; t<sup>3</sup> and the index is E<sup>1/3</sup>/&rho;: 0.750 steel, 1.53 aluminium. Aluminium comes out a factor of 1.7 to 2 lighter for the same stiffness, and it buys that by being thicker and deeper, which on an aircraft you can afford because there is volume available.</p>
<p>The exponent records how much second moment the section gains per unit of mass you add: nothing for a tie, A<sup>2</sup> for a beam, t<sup>3</sup> for a plate. And if packaging fixes the envelope, none of the indices apply and the higher-E material wins.</p>`,
    },
    {
      id: "material-properties-qa04",
      q: `<p>When would you choose 7075-T6 over 6061-T6, and when would you refuse?</p>`,
      a: `<p>7075-T6 when the part is strength-limited and mass-critical and I am machining it from billet. Yield around 500 MPa against 275 MPa for 6061-T6, so nearly double the allowable stress at the same density. Machined structural fittings, high-load brackets, anything holding a load in a small envelope.</p>
<p>I would refuse it in four situations. If the part has to be welded, because 7075 is not structurally weldable and hot-cracks, while 6061 welds and can be re-heat-treated, with the caveat that the heat-affected zone drops toward T4 strength unless you post-treat. If the part is stiffness-limited, because both alloys have E = 70 GPa and I would be paying triple the material cost for a property that does not change. In a corrosive or sustained-tension environment, because high-strength 7xxx tempers are susceptible to stress-corrosion cracking and exfoliation, with T73 or T7351 over-aged tempers trading some strength back for SCC resistance. And if the part needs to be formed or bent, since 7075-T6 has poor ductility and cracks at tight bend radii, particularly across the short-transverse direction of rolled plate.</p>
<p>Default position: 6061-T6 unless the stress analysis says I need the strength.</p>`,
    },
    {
      id: "material-properties-qa05",
      q: `<p>What changes in your thinking when the part is plastic instead of metal?</p>`,
      a: `<p>Four things get promoted from footnotes to primary design drivers. <strong>Time</strong>: polymers creep at room temperature under sustained load, so a snap fit or press fit that passes a bench test can lose its preload over months. Design for a creep modulus at the service life, not a tensile modulus from a one-minute test. <strong>Rate</strong>: they are viscoelastic, so modulus and strength rise and ductility falls as loading gets faster. A clip that flexes fine during assembly can shatter in a drop, so drop cases get tested at rate and cold.</p>
<p><strong>Temperature</strong>: near the glass transition the modulus can drop by two orders of magnitude over a few tens of degrees, so you need T<sub>g</sub> or HDT relative to the hottest service condition, and you check the cold end too, because that is where impact behaviour goes brittle. <strong>Process</strong>: a moulded part is not the datasheet coupon. Glass fibres align with flow so the part is anisotropic, weld lines where flow fronts meet can be half strength, and moulded-in stress plus sharp corners is where cracks start. Nylon also absorbs several percent moisture, which plasticises it, so dry-as-moulded properties are the optimistic ones.</p>
<p>Practical habits: ribs rather than thick walls, generous radii at every hinge root, metal inserts wherever a fastener sees repeated preload, and validation on moulded parts rather than coupons.</p>`,
    },
    {
      id: "material-properties-qa06",
      q: `<p>Explain what annealing, quenching, tempering and precipitation hardening actually do, and which properties move.</p>`,
      a: `<p>All four are ways of controlling how easily dislocations move, which is what strength is. None of them changes Young&rsquo;s modulus, because E comes from interatomic bonding.</p>
<p><strong>Annealing</strong> heats the material enough for recovery and recrystallization, wiping out the dislocation tangles from cold work and growing fresh strain-free grains. Strength and hardness go down, ductility goes up, residual stress is relieved. It is the condition you want for forming, or before finish machining a part that would otherwise move.</p>
<p><strong>Quenching</strong> a steel from austenite is fast enough that carbon cannot diffuse out, so it is trapped in a distorted lattice as martensite. Hardness goes way up, toughness goes way down, and you get distortion and sometimes quench cracks. <strong>Tempering</strong> then reheats below the austenitizing temperature so carbon precipitates as fine carbides, giving back some hardness and gaining a lot of toughness, with the tempering temperature as the knob that sets where you land. Quench-and-temper is deliberate over-hardening followed by buying back exactly the toughness you need.</p>
<p><strong>Precipitation hardening</strong>, meaning the T6 tempers, 17-4PH and maraging steels, is solution treat, quench to trap solute, then age at moderate temperature so fine coherent particles form and pin dislocations. Strength can rise three to five times. Over-age it, or weld it, and the precipitates coarsen and you lose it, which is exactly what happens in a 6061-T6 heat-affected zone.</p>`,
    },
    {
      id: "material-properties-qa07",
      q: `<p>A part sags in service after a few months at temperature. How do you diagnose and fix it?</p>`,
      a: `<p>Slow permanent deformation under a load the part carries fine on day one is creep, so the first move is to convert to homologous temperature, T/T<sub>m</sub> in kelvin. Below about 0.3 creep is negligible and you should look elsewhere, at thermal ratcheting, gasket relaxation, or a bolt losing preload. Above 0.4 creep is the answer. Aluminium at 150 &deg;C is 0.45 so it creeps; carbon steel at the same 150 &deg;C is 0.24 so it does not. Polymers creep at room temperature under any sustained load.</p>
<p>Then get the right data: creep-rupture and creep-strain curves at the actual temperature for the life required, with the allowable set from the stress that gives an acceptable strain over that life, typically from the steady secondary stage. A room-temperature yield check is meaningless, because the part is below yield the whole time.</p>
<p>Fixes, cheapest first. Reduce the sustained stress with more section, a shorter moment arm, or load spread over more area. Drop the metal temperature with shielding, a standoff or a thermal break. Remove the sustained load entirely, since a Belleville stack or a steel insert holds bolt preload in a hot plastic or aluminium joint far better than the base material does. If none of that works, move up a material class to heat-resistant stainless and then nickel superalloy. Verify by test at temperature, because extrapolating a short creep run is optimistic.</p>`,
    },
    {
      id: "material-properties-qa08",
      q: `<p>How do you decide whether a part will behave in a ductile or brittle way, and what changes if it is brittle?</p>`,
      a: `<p>Four things push a part toward brittle behaviour: the material, with BCC metals, ceramics and glassy polymers on one side and FCC aluminium and austenitic stainless staying ductile on the other; low temperature relative to the transition; high loading rate; and constraint, where a thick section with a sharp notch produces triaxial tension that suppresses yielding. Any one of them can flip a material that was ductile in a coupon test.</p>
<p>If the part is going to be brittle, the design method changes. A yield check on nominal stress is no longer sufficient, because failure is set by the worst flaw rather than the average stress. You move to fracture mechanics, K = Y&sigma;&radic;(&pi;a) &le; K<sub>IC</sub>, which means you need an inspectable minimum detectable flaw size. Allowable stress then falls with the square root of flaw size, so four times the crack length halves the allowable stress. You also stop relying on ductility to redistribute stress at notches, so stress concentrations become real rather than a local detail that yields and shakes out.</p>
<p>Practically: specify Charpy energy at the minimum service temperature rather than higher yield strength, since strength usually moves the transition the wrong way; keep sections thin where you can; put generous radii everywhere; define an NDT method and acceptance limit; and prefer a lower-strength tougher alloy when the failure mode is damage tolerance rather than static load. Giving up strength to gain toughness is the whole basis of damage-tolerant design.</p>`,
    },
    {
      id: "material-properties-qa09",
      q: `<p>A supplier datasheet says &ldquo;typical tensile strength 520 MPa.&rdquo; What do you design to?</p>`,
      a: `<p>Not that number. A typical value is roughly the mean of the supplier&rsquo;s data, so by definition about half of production falls below it. For anything structural I want a statistically based minimum: in aerospace terms an A-basis allowable, 99% of the population exceeding it with 95% confidence, for a single load path, or B-basis at 90%/95% where the structure is redundant. In general engineering the equivalent is the specification minimum from the material standard, the number in ASTM or AMS, rather than the marketing sheet.</p>
<p>Then apply the knockdowns the coupon did not see: temperature, moisture absorption for polymers, ageing and UV, orientation relative to grain or fibre direction, the process route, since a casting or an AM part is not a wrought coupon, surface finish for fatigue, and the effect of any weld or heat-affected zone. Composites and plastics have far larger scatter than wrought metals, so the gap between typical and allowable is much bigger there and a 30&ndash;40% knockdown is not unusual.</p>
<p>Finally, ask what actually controls. If the part is stiffness-limited or fracture-limited, the tensile number is not the governing property anyway. And put lot traceability and incoming test requirements on the drawing, because a design allowable is only real if the material that arrives is the material you qualified.</p>`,
    },
    {
      id: "material-properties-qa10",
      q: `<p>Why does material choice change tolerances, fits and joints?</p>`,
      a: `<p>Because a dimension is only meaningful with a temperature, a load and a process attached to it. <strong>Thermal expansion</strong> is the big one. Aluminium grows at 23 &micro;m/m/&deg;C against steel&rsquo;s 12, so a 500 mm aluminium rail bolted to a steel base moves 0.44 mm relative to it over an 80 &deg;C swing. If both ends are fixed that mismatch does not vanish; it becomes fastener shear, slip, bowing or thermal stress. The fix is a design decision rather than a tolerance: one fixed datum with a slotted or flexured floating end, or matched-CTE materials.</p>
<p>Press fits are the same argument. An interference fit sized at 20 &deg;C can go loose when the outer part expands faster, or crush the inner part when it expands slower. In a plastic bushing, creep adds a second mechanism, so the interference relaxes over weeks even at constant temperature and the fit has to be designed against the creep modulus or mechanically captured instead.</p>
<p>Process capability matters too. A machined aluminium feature holds &plusmn;0.02 mm easily; an injection-moulded feature carries 0.5&ndash;2% shrink plus warp and needs tolerances that respect the gate and cooling; a casting or an AM part needs machined datums wherever anything must be accurate. Nylon absorbs a few percent moisture and grows with it. So set tolerances from the material and the process together, and use the assembly scheme, slots, floats and compliant adhesive, to absorb the movement you cannot design out.</p>`,
    },
  ],
};

export default content;
