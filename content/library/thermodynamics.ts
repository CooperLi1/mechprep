import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Thermodynamics
// ---------------------------------------------------------------------------

const figPV = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="td1-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
    <marker id="td1-b" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#1d4ed8"/></marker>
    <marker id="td1-g" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#64748b"/></marker>
    <marker id="td1-i" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
    <marker id="td1-r" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#dc2626"/></marker>
  </defs>
  <!-- axes -->
  <line x1="60" y1="210" x2="433" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#td1-ax)"/>
  <line x1="60" y1="210" x2="60" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#td1-ax)"/>
  <text x="444" y="215" fill="#64748b" font-style="italic">V</text>
  <text x="50" y="42" text-anchor="middle" fill="#64748b" font-style="italic">P</text>
  <!-- start state -->
  <circle cx="140" cy="80" r="4" fill="#334155"/>
  <text x="127" y="76" text-anchor="middle" fill="#334155" font-weight="600">1</text>
  <!-- isobaric (blue, horizontal) -->
  <line x1="140" y1="80" x2="330" y2="80" stroke="#1d4ed8" stroke-width="2" marker-end="url(#td1-b)"/>
  <!-- isochoric (gray, vertical) -->
  <line x1="140" y1="80" x2="140" y2="192" stroke="#64748b" stroke-width="2" marker-end="url(#td1-g)"/>
  <!-- isothermal (ink, PV = const) -->
  <path d="M140,80 C200,128 280,158 400,177" fill="none" stroke="#334155" stroke-width="2" marker-end="url(#td1-i)"/>
  <!-- adiabatic (red, steeper) -->
  <path d="M140,80 C190,145 260,180 400,194" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#td1-r)"/>
  <!-- legend -->
  <line x1="340" y1="46" x2="362" y2="46" stroke="#1d4ed8" stroke-width="2"/>
  <text x="368" y="50" fill="#334155" font-size="12">isobaric (P const)</text>
  <line x1="340" y1="66" x2="362" y2="66" stroke="#64748b" stroke-width="2"/>
  <text x="368" y="70" fill="#334155" font-size="12">isochoric (V const)</text>
  <line x1="340" y1="86" x2="362" y2="86" stroke="#334155" stroke-width="2"/>
  <text x="368" y="90" fill="#334155" font-size="12">isothermal</text>
  <line x1="340" y1="106" x2="362" y2="106" stroke="#dc2626" stroke-width="2"/>
  <text x="368" y="110" fill="#334155" font-size="12">adiabatic</text>
  <text x="150" y="205" fill="#64748b" font-size="12">V constant, no work</text>
</svg>`;

const figRankine = `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="td2-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
    <marker id="td2-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="td2-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">Rankine cycle (steam power plant)</text>
  <!-- boiler -->
  <rect x="60" y="55" width="95" height="55" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="107" y="87" text-anchor="middle" fill="#334155" font-weight="600">Boiler</text>
  <line x1="12" y1="82" x2="52" y2="82" stroke="#dc2626" stroke-width="2.5" marker-end="url(#td2-heat)"/>
  <text x="30" y="68" text-anchor="middle" fill="#dc2626" font-weight="600">Q in</text>
  <!-- turbine -->
  <polygon points="300,52 375,38 375,132 300,118" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="337" y="90" text-anchor="middle" fill="#334155" font-weight="600">Turbine</text>
  <line x1="380" y1="85" x2="425" y2="85" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#td2-work)"/>
  <text x="402" y="70" text-anchor="middle" fill="#1d4ed8" font-weight="600">W out</text>
  <!-- condenser -->
  <rect x="295" y="175" width="95" height="50" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="342" y="203" text-anchor="middle" fill="#334155" font-weight="600">Condenser</text>
  <line x1="394" y1="200" x2="438" y2="200" stroke="#dc2626" stroke-width="2.5" marker-end="url(#td2-heat)"/>
  <text x="416" y="186" text-anchor="middle" fill="#dc2626" font-weight="600">Q out</text>
  <!-- pump -->
  <circle cx="107" cy="200" r="22" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="107" y="244" text-anchor="middle" fill="#334155" font-weight="600">Pump</text>
  <line x1="18" y1="200" x2="81" y2="200" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#td2-work)"/>
  <text x="46" y="186" text-anchor="middle" fill="#1d4ed8" font-weight="600">W in</text>
  <!-- pipes -->
  <line x1="155" y1="82" x2="296" y2="82" stroke="#334155" stroke-width="2" marker-end="url(#td2-flow)"/>
  <line x1="337" y1="126" x2="337" y2="171" stroke="#334155" stroke-width="2" marker-end="url(#td2-flow)"/>
  <line x1="295" y1="200" x2="137" y2="200" stroke="#334155" stroke-width="2" marker-end="url(#td2-flow)"/>
  <line x1="107" y1="174" x2="107" y2="114" stroke="#334155" stroke-width="2" marker-end="url(#td2-flow)"/>
  <!-- phase labels -->
  <text x="225" y="68" text-anchor="middle" fill="#64748b" font-size="12">high-P steam</text>
  <text x="349" y="152" fill="#64748b" font-size="12">wet steam</text>
  <text x="216" y="190" text-anchor="middle" fill="#64748b" font-size="12">condensate</text>
  <text x="115" y="147" fill="#64748b" font-size="12">high-P liquid</text>
</svg>`;

const figVC = `<svg viewBox="0 0 460 265" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="td3-flow" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto"><path d="M0,0L8,4L0,8z" fill="#334155"/></marker>
    <marker id="td3-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="td3-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <!-- condenser -->
  <rect x="150" y="42" width="160" height="40" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="66" text-anchor="middle" fill="#334155" font-weight="600">Condenser</text>
  <line x1="270" y1="40" x2="270" y2="14" stroke="#dc2626" stroke-width="2.5" marker-end="url(#td3-heat)"/>
  <text x="282" y="24" fill="#dc2626" font-weight="600" font-size="12">Q out (to room)</text>
  <!-- evaporator -->
  <rect x="150" y="185" width="160" height="40" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="209" text-anchor="middle" fill="#334155" font-weight="600">Evaporator</text>
  <line x1="270" y1="255" x2="270" y2="229" stroke="#dc2626" stroke-width="2.5" marker-end="url(#td3-heat)"/>
  <text x="282" y="250" fill="#dc2626" font-weight="600" font-size="12">Q in (from cold space)</text>
  <!-- compressor -->
  <rect x="345" y="105" width="72" height="52" rx="6" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="381" y="135" text-anchor="middle" fill="#334155" font-weight="600" font-size="11">Compressor</text>
  <line x1="452" y1="131" x2="421" y2="131" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#td3-work)"/>
  <text x="437" y="117" text-anchor="middle" fill="#1d4ed8" font-weight="600" font-size="12">W in</text>
  <!-- expansion valve (bowtie) -->
  <polygon points="62,120 80,132 62,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <polygon points="98,120 80,132 98,144" fill="none" stroke="#334155" stroke-width="1.5"/>
  <text x="80" y="162" text-anchor="middle" fill="#334155" font-size="12">expansion</text>
  <text x="80" y="176" text-anchor="middle" fill="#334155" font-size="12">valve</text>
  <!-- pipes: evaporator -> compressor -->
  <line x1="310" y1="205" x2="381" y2="205" stroke="#334155" stroke-width="2"/>
  <line x1="381" y1="205" x2="381" y2="161" stroke="#334155" stroke-width="2" marker-end="url(#td3-flow)"/>
  <!-- compressor -> condenser -->
  <line x1="381" y1="105" x2="381" y2="62" stroke="#334155" stroke-width="2"/>
  <line x1="381" y1="62" x2="314" y2="62" stroke="#334155" stroke-width="2" marker-end="url(#td3-flow)"/>
  <!-- condenser -> valve -->
  <line x1="150" y1="62" x2="80" y2="62" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="62" x2="80" y2="116" stroke="#334155" stroke-width="2" marker-end="url(#td3-flow)"/>
  <!-- valve -> evaporator -->
  <line x1="80" y1="144" x2="80" y2="205" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="205" x2="146" y2="205" stroke="#334155" stroke-width="2" marker-end="url(#td3-flow)"/>
  <!-- phase labels -->
  <text x="370" y="95" text-anchor="end" fill="#64748b" font-size="12">hot vapor</text>
  <text x="370" y="178" text-anchor="end" fill="#64748b" font-size="12">cold vapor</text>
  <text x="92" y="95" fill="#64748b" font-size="12">high-P liquid</text>
</svg>`;

const figQ2 = `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="tdq2-w" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="tdq2-q" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <!-- gas -->
  <rect x="153" y="102" width="154" height="76" fill="#dbeafe"/>
  <!-- cylinder walls -->
  <line x1="150" y1="40" x2="150" y2="180" stroke="#334155" stroke-width="3"/>
  <line x1="150" y1="180" x2="310" y2="180" stroke="#334155" stroke-width="3"/>
  <line x1="310" y1="180" x2="310" y2="40" stroke="#334155" stroke-width="3"/>
  <!-- piston + rod -->
  <rect x="151" y="88" width="158" height="14" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <rect x="225" y="48" width="10" height="40" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <!-- work out (piston rises) -->
  <line x1="260" y1="84" x2="260" y2="34" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#tdq2-w)"/>
  <text x="272" y="55" fill="#1d4ed8" font-weight="600" font-size="12">W = 200 kJ (by gas)</text>
  <!-- heat in -->
  <line x1="230" y1="214" x2="230" y2="186" stroke="#dc2626" stroke-width="2.5" marker-end="url(#tdq2-q)"/>
  <text x="244" y="208" fill="#dc2626" font-weight="600" font-size="12">Q = 500 kJ in</text>
  <text x="230" y="145" text-anchor="middle" fill="#334155" font-weight="600">gas</text>
  <text x="95" y="140" text-anchor="middle" fill="#334155" font-weight="600">&#916;U = ?</text>
</svg>`;

const figQ3 = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="tdq3-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="tdq3-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="140" y="18" width="180" height="40" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="42" text-anchor="middle" fill="#334155" font-weight="600">House (warm)</text>
  <circle cx="230" cy="125" r="28" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="130" text-anchor="middle" fill="#334155" font-weight="600">HP</text>
  <rect x="140" y="195" width="180" height="40" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="219" text-anchor="middle" fill="#334155" font-weight="600">Outside (cold)</text>
  <line x1="230" y1="93" x2="230" y2="63" stroke="#dc2626" stroke-width="2.5" marker-end="url(#tdq3-heat)"/>
  <text x="244" y="80" fill="#dc2626" font-weight="600" font-size="12">Q hot = 9 kW</text>
  <line x1="230" y1="191" x2="230" y2="157" stroke="#dc2626" stroke-width="2.5" marker-end="url(#tdq3-heat)"/>
  <text x="244" y="178" fill="#dc2626" font-weight="600" font-size="12">Q cold = 6 kW</text>
  <line x1="360" y1="125" x2="262" y2="125" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#tdq3-work)"/>
  <text x="368" y="129" fill="#1d4ed8" font-weight="600" font-size="12">W = 3 kW</text>
</svg>`;

const figQ4 = `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="tdq4-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <line x1="60" y1="210" x2="433" y2="210" stroke="#64748b" stroke-width="1.5" marker-end="url(#tdq4-ax)"/>
  <line x1="60" y1="210" x2="60" y2="34" stroke="#64748b" stroke-width="1.5" marker-end="url(#tdq4-ax)"/>
  <text x="444" y="215" fill="#64748b" font-style="italic">V</text>
  <text x="50" y="42" text-anchor="middle" fill="#64748b" font-style="italic">P</text>
  <circle cx="140" cy="80" r="4" fill="#334155"/>
  <text x="130" y="68" text-anchor="end" fill="#334155" font-weight="600">start</text>
  <line x1="140" y1="80" x2="335" y2="80" stroke="#334155" stroke-width="2"/>
  <text x="345" y="84" fill="#1d4ed8" font-weight="600">A</text>
  <line x1="140" y1="80" x2="140" y2="195" stroke="#334155" stroke-width="2"/>
  <text x="150" y="202" fill="#1d4ed8" font-weight="600">B</text>
  <path d="M140,80 C200,128 280,158 405,178" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="413" y="175" fill="#1d4ed8" font-weight="600">C</text>
  <path d="M140,80 C190,145 260,180 405,196" fill="none" stroke="#334155" stroke-width="2"/>
  <text x="413" y="200" fill="#1d4ed8" font-weight="600">D</text>
</svg>`;

const figQ11 = `<svg viewBox="0 0 460 245" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="tdq11-heat" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
    <marker id="tdq11-work" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
  </defs>
  <rect x="130" y="15" width="200" height="36" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="38" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Hot reservoir&#160;&#160;T = 600 K</text>
  <line x1="230" y1="55" x2="230" y2="88" stroke="#dc2626" stroke-width="2.5" marker-end="url(#tdq11-heat)"/>
  <text x="244" y="75" fill="#dc2626" font-weight="600" font-size="12">Q hot = 1000 kJ</text>
  <circle cx="230" cy="118" r="26" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="123" text-anchor="middle" fill="#334155" font-weight="600">HE</text>
  <line x1="260" y1="118" x2="330" y2="118" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#tdq11-work)"/>
  <text x="295" y="103" text-anchor="middle" fill="#1d4ed8" font-weight="600">W = ?</text>
  <line x1="230" y1="148" x2="230" y2="182" stroke="#dc2626" stroke-width="2.5" marker-end="url(#tdq11-heat)"/>
  <text x="244" y="168" fill="#dc2626" font-weight="600" font-size="12">Q cold</text>
  <rect x="130" y="186" width="200" height="36" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="230" y="209" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Cold reservoir&#160;&#160;T = 300 K</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Thermodynamics",
    intro: `<p>Thermodynamics questions in MechE interviews are rarely property-table slogs. They test whether you can do <strong>energy bookkeeping</strong> (first law), whether you respect the <strong>direction</strong> nature imposes on processes (second law), and whether you can catch the two classic errors: forgetting to convert to <strong>kelvin</strong> in Carnot problems, and thinking a <strong>COP above 1</strong> violates physics. Nail those and you can talk credibly about steam plants, jet engines, and heat pumps.</p>
<p>This lesson covers systems and properties, the first law for closed and steady-flow systems, ideal-gas processes on the P&#8211;V diagram, the second law and Carnot, the major power cycles, and refrigeration.</p>`,
    sections: [
      {
        heading: "Systems, properties, and state",
        html: `<p>Start every problem by declaring your <strong>system boundary</strong>, the thermodynamic equivalent of drawing an FBD:</p>
<ul>
<li><strong>Closed system (control mass)</strong>: no mass crosses the boundary; energy (heat, work) may. Example: gas sealed in a piston&#8211;cylinder.</li>
<li><strong>Open system (control volume)</strong>: mass flows through. Example: a turbine, pump, or nozzle.</li>
<li><strong>Isolated system</strong>: neither mass nor energy crosses. Example: the ideal insulated thermos, or the universe as a whole.</li>
</ul>
<p>Properties describe the state. <strong>Intensive</strong> properties (P, T, density, specific volume) don't scale with system size; <strong>extensive</strong> ones (m, V, U, H, S) do. Two independent intensive properties fix the state of a simple compressible substance. This is the <em>state postulate</em>, and it's why steam tables need only two entries to pin everything down.</p>
<div class="callout"><strong>Interview habit:</strong> before writing any equation, say what the system is and whether it's closed or open. Half of all first-law sign errors come from switching systems mid-problem.</div>`,
      },
      {
        heading: "First law — closed systems",
        html: `<p>Energy is conserved. For a closed system going through a process:</p>
<p class="eq">&Delta;U = Q &minus; W</p>
<p>with the standard mechanical-engineering sign convention: <strong>Q positive into</strong> the system, <strong>W positive done by</strong> the system (a gas expanding against a piston does positive work). State the convention out loud, because it is deliberately probed.</p>
<p><strong>U</strong> is internal energy, <strong>Q</strong> is heat transfer, and <strong>W</strong> is work; all are energies (J, kJ, or Btu). Heat and work are path quantities, so they are not stored in the system. Internal energy is a state property.</p>
<ul>
<li>Boundary work for a quasi-equilibrium process is the area under the P&#8211;V curve: W = &int;P&thinsp;dV. Different paths between the same two states do different work. <strong>work and heat are path functions</strong>; U is a state function.</li>
<li>For an ideal gas, U depends on <strong>temperature only</strong>: &Delta;U = m&thinsp;c<sub>v</sub>&thinsp;&Delta;T. So an isothermal ideal-gas process has &Delta;U = 0 and Q = W exactly.</li>
<li>Free expansion into vacuum: no piston to push, so W = 0; insulated, so Q = 0; hence &Delta;U = 0 and (ideal gas) &Delta;T = 0, a favorite conceptual check.</li>
</ul>`,
      },
      {
        heading: "First law — steady-flow devices",
        html: `<p>For a control volume at steady state, the energy balance per unit mass (neglecting elevation) is:</p>
<p class="eq">q &minus; w = &Delta;h + &Delta;(V&sup2;/2)</p>
<p>Lowercase <strong>q</strong> and <strong>w</strong> are heat and work per unit mass (kJ/kg), <strong>h</strong> is specific enthalpy, and <strong>V</strong> is flow speed. This simplified form assumes steady flow, one inlet and one outlet, and negligible potential-energy change; add terms when those assumptions are not true.</p>
<p>Enthalpy h = u + Pv appears instead of u because flowing mass carries <strong>flow work</strong> (Pv) across the boundary along with its internal energy. That's the entire reason enthalpy exists. Each classic device then reduces to one line:</p>
<table>
<thead><tr><th>Device</th><th>Idealization</th><th>Energy balance</th></tr></thead>
<tbody>
<tr><td>Turbine</td><td>Adiabatic, &Delta;KE small</td><td>w<sub>out</sub> = h<sub>1</sub> &minus; h<sub>2</sub> (enthalpy drop &rarr; shaft work)</td></tr>
<tr><td>Compressor / pump</td><td>Adiabatic</td><td>w<sub>in</sub> = h<sub>2</sub> &minus; h<sub>1</sub></td></tr>
<tr><td>Nozzle</td><td>Adiabatic, no work</td><td>V<sub>2</sub>&sup2;/2 = h<sub>1</sub> &minus; h<sub>2</sub> (enthalpy &rarr; kinetic energy)</td></tr>
<tr><td>Heat exchanger</td><td>No work, no mixing</td><td>heat lost by hot stream = heat gained by cold stream</td></tr>
<tr><td>Throttle valve</td><td>No work, no heat, &Delta;KE small</td><td>h<sub>2</sub> = h<sub>1</sub> (isenthalpic, pressure drops, nothing useful extracted)</td></tr>
</tbody>
</table>
<p>The throttle is the sleeper: constant enthalpy but <em>not</em> constant temperature for real fluids. A flashing refrigerant leaves a throttle much colder. That's the expansion valve in every fridge.</p>`,
      },
      {
        heading: "Ideal gas and the standard processes",
        html: `<p>The ideal gas law ties the properties together (use <strong>absolute</strong> pressure and temperature):</p>
<p class="eq">PV = mRT&nbsp;&nbsp;&nbsp;&nbsp;(R<sub>air</sub> = 0.287 kJ/kg&middot;K)</p>
<p><strong>P</strong> is absolute pressure, <strong>V</strong> is volume, <strong>m</strong> is mass, <strong>R</strong> is the gas constant, and <strong>T</strong> is absolute temperature. Gauge pressure and Celsius are the two fastest ways to break gas-law and isentropic calculations.</p>
<p>Four named processes cover almost every interview question. From the same start state they trace distinct paths on the P&#8211;V diagram:</p>
<figure class="fig">${figPV}<figcaption>The four standard processes from a common state. The adiabat falls <em>steeper</em> than the isotherm: with no heat inflow, an expanding gas also cools, so its pressure drops faster than PV = const.</figcaption></figure>
<ul>
<li><strong>Isobaric</strong> (P const): W = P&Delta;V; heat added via c<sub>p</sub>.</li>
<li><strong>Isochoric</strong> (V const): W = 0, so Q = &Delta;U = m&thinsp;c<sub>v</sub>&Delta;T. A rigid tank being heated.</li>
<li><strong>Isothermal</strong> (T const): PV = const; for an ideal gas &Delta;U = 0 and Q = W = mRT&thinsp;ln(V<sub>2</sub>/V<sub>1</sub>).</li>
<li><strong>Adiabatic</strong> (Q = 0). If also reversible it's <strong>isentropic</strong>: PV<sup>&gamma;</sup> = const with &gamma; = c<sub>p</sub>/c<sub>v</sub> (1.4 for air), and</li>
</ul>
<p class="eq">T<sub>2</sub>/T<sub>1</sub> = (P<sub>2</sub>/P<sub>1</sub>)<sup>(&gamma;&minus;1)/&gamma;</sup> = (V<sub>1</sub>/V<sub>2</sub>)<sup>&gamma;&minus;1</sup></p>
<div class="callout warn"><strong>Watch out:</strong> the isentropic relations demand absolute temperature and absolute pressure. Feed them &deg;C or gauge pressure and you'll get confident nonsense.</div>`,
      },
      {
        heading: "Second law, entropy, and Carnot",
        html: `<p>The first law says energy balances; the <strong>second law</strong> says which direction things actually go:</p>
<ul>
<li>Heat flows spontaneously from <strong>hot to cold</strong>, never the reverse without work input (Clausius statement).</li>
<li>No engine can convert heat to work with 100% efficiency. Some heat must be rejected to a cold sink (Kelvin&#8211;Planck statement).</li>
<li><strong>Entropy</strong> quantifies this: for any real (irreversible) process, the total entropy of system + surroundings increases; it stays constant only in the reversible limit. Friction, mixing, and heat transfer across a finite &Delta;T all generate entropy.</li>
</ul>
<p>The best possible engine between reservoirs at T<sub>H</sub> and T<sub>C</sub> is the reversible <strong>Carnot engine</strong>:</p>
<p class="eq">&eta;<sub>Carnot</sub> = 1 &minus; T<sub>C</sub>/T<sub>H</sub>&nbsp;&nbsp;&nbsp;&nbsp;(absolute temperatures, kelvin!)</p>
<p>It is a ceiling, not a target: reaching it requires reversible heat transfer across zero temperature difference (infinitely slow) and zero friction. Real plants achieve maybe half to two-thirds of Carnot. Use it as an upper bound. Any claimed efficiency above Carnot for the given reservoirs is a perpetual-motion machine of the second kind, full stop.</p>
<p>The formula also explains real design pressure: raise T<sub>H</sub> (superheat, high turbine inlet temperature) or lower T<sub>C</sub> (big condensers, cold cooling water) and the ceiling rises. Which is why jet-engine programs spend fortunes on turbine blade alloys and film cooling, every extra kelvin of turbine inlet temperature buys efficiency.</p>`,
      },
      {
        heading: "Power cycles: Rankine, Brayton, Otto, Diesel",
        html: `<p>All power cycles share a skeleton: compress the working fluid, add heat at high pressure/temperature, expand through a work-producing device, reject the leftover heat. Thermal efficiency is always &eta; = W<sub>net</sub>/Q<sub>in</sub>.</p>
<figure class="fig">${figRankine}<figcaption>The Rankine cycle. Work to pressurize the <em>liquid</em> (pump) is tiny compared with the work extracted from the <em>vapor</em> (turbine). That asymmetry is why the cycle works so well.</figcaption></figure>
<ul>
<li><strong>Rankine</strong> (steam power plants, nuclear, coal): pump &rarr; boiler &rarr; turbine &rarr; condenser. Pumping an incompressible liquid costs almost nothing (&sim;1% of turbine output), so nearly all the enthalpy drop through the turbine is net work. Superheating raises the average heat-addition temperature (closer to Carnot) and keeps moisture out of the turbine's last stages, which would erode the blades.</li>
<li><strong>Brayton</strong> (jet engines, gas turbines): compressor &rarr; combustor &rarr; turbine, working fluid stays gaseous. The compressor eats a large fraction (often &gt;50%) of turbine work, so component efficiencies and turbine inlet temperature dominate. Efficiency rises with pressure ratio.</li>
<li><strong>Otto</strong> (gasoline engines): air-standard efficiency &eta; = 1 &minus; r<sup>1&minus;&gamma;</sup>. It depends only on <strong>compression ratio</strong> r, which is why higher compression engines are more efficient and why knock (which limits r) matters.</li>
<li><strong>Diesel</strong>: higher compression ratios (no spark knock limit, fuel ignites by compression), hence the better fuel economy of diesel engines.</li>
</ul>`,
      },
      {
        heading: "Refrigerators and heat pumps",
        html: `<p>Run the cycle backwards and you <strong>move</strong> heat from cold to hot by spending work, the vapor-compression cycle:</p>
<figure class="fig">${figVC}<figcaption>Vapor-compression refrigeration. The evaporator boils cold low-pressure refrigerant by absorbing heat from the cold space; the condenser dumps heat to the surroundings; the throttle valve drops the pressure so the refrigerant gets cold again.</figcaption></figure>
<p>Performance is a <strong>coefficient of performance</strong>, not an efficiency, because the useful output is moved heat:</p>
<p class="eq">COP<sub>fridge</sub> = Q<sub>C</sub>/W&nbsp;&nbsp;&nbsp;&nbsp;COP<sub>heat pump</sub> = Q<sub>H</sub>/W = COP<sub>fridge</sub> + 1</p>
<p><strong>COP &gt; 1 is normal, not magic.</strong> The device doesn't create heat from work; it uses work to pump heat that already exists. Energy still balances: Q<sub>H</sub> = Q<sub>C</sub> + W. A household heat pump with COP = 3 delivers 3 kW of heat per kW of electricity, three times better than a resistance heater, whose "COP" is exactly 1 because it can only convert, never pump. The Carnot limits are COP<sub>fridge,max</sub> = T<sub>C</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>) and COP<sub>HP,max</sub> = T<sub>H</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>). Note both blow up as the temperature lift shrinks, and heat-pump COP degrades on the coldest days precisely when you need it most.</p>`,
      },
    ],
    equations: [
      { name: "First law (closed system)", formula: "&Delta;U = Q &minus; W", note: "&Delta;U is internal-energy change, Q is heat into the system, and W is work done by the system." },
      { name: "Steady-flow turbine work", formula: "w<sub>out</sub> = h<sub>1</sub> &minus; h<sub>2</sub>", note: "w<sub>out</sub> is specific work, h is enthalpy, and this assumes adiabatic steady flow with small kinetic/potential changes." },
      { name: "Ideal gas law", formula: "PV = mRT", note: "P is absolute pressure, V is volume, m is mass, R is gas constant, and T is absolute temperature." },
      { name: "Isentropic relations", formula: "PV<sup>&gamma;</sup> = const, &nbsp;T<sub>2</sub>/T<sub>1</sub> = (P<sub>2</sub>/P<sub>1</sub>)<sup>(&gamma;&minus;1)/&gamma;</sup>", note: "&gamma; is specific heat ratio, about 1.4 for air; use only for ideal-gas reversible adiabatic processes." },
      { name: "Carnot efficiency", formula: "&eta; = 1 &minus; T<sub>C</sub>/T<sub>H</sub>", note: "T<sub>C</sub> and T<sub>H</sub> are cold/hot reservoir temperatures in Kelvin; Celsius breaks the ratio." },
      { name: "Thermal efficiency", formula: "&eta; = W<sub>net</sub>/Q<sub>in</sub>", note: "For a heat engine, W<sub>net</sub> is useful net work out and Q<sub>in</sub> is heat supplied." },
      { name: "COP (refrigerator)", formula: "COP = Q<sub>C</sub>/W", note: "Q<sub>C</sub> is heat removed from cold space and W is work input; higher COP means less work per cooling load." },
      { name: "COP (heat pump)", formula: "COP = Q<sub>H</sub>/W = COP<sub>fridge</sub> + 1", note: "Q<sub>H</sub> is heat delivered to hot space. Energy balance gives Q<sub>H</sub> = Q<sub>C</sub> + W." },
    ],
    interviewTips: [
      "Convert every temperature to kelvin before touching Carnot or isentropic relations, quoting η = 1 − 27/527 instead of 1 − 300/800 is the single most common thermo fail.",
      "State your sign convention (Q in positive, W by the system positive) before writing the first law; problems are seeded with work done ON the gas to catch sign flips.",
      "Closed system → internal energy u; flowing system → enthalpy h. If you can say why (flow work Pv), you're ahead of most candidates.",
      "COP > 1 never violates anything. The device moves heat rather than creating it. Be ready to defend this with the energy balance QH = QC + W.",
      "Use Carnot as a smell test: given any claimed engine performance, compute the Carnot limit for its reservoirs first. Above it = impossible, near it = suspicious.",
      "Tie cycles to hardware: turbine inlet temperature for Brayton, compression ratio for Otto, condenser vacuum for Rankine. It signals you know why the numbers matter.",
    ],
  },

  questions: [
    {
      id: "thermodynamics-q01",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A heat engine operates between a hot reservoir at 527 &deg;C and a cold reservoir at 27 &deg;C. What is the maximum possible (Carnot) thermal efficiency, in percent?</p>`,
      answer: 62.5,
      unit: "%",
      explanation: `<p>Kelvin first. Carnot uses <strong>absolute</strong> temperatures.</p>
<p class="eq">&eta;<sub>Carnot</sub> = 1 &minus; T<sub>C</sub>/T<sub>H</sub> = 1 &minus; 300/800 = <strong>62.5%</strong></p>
<p>Celsius gives 1 &minus; 27/527 = 94.9%, which should smell wrong immediately. Any time a <em>ratio</em> of temperatures appears, it has to be kelvin. Differences can stay in &deg;C, because the offsets cancel.</p>`,
    },
    {
      id: "thermodynamics-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A gas sealed in a piston&#8211;cylinder receives 500 kJ of heat and does 200 kJ of work pushing the piston up, as shown. What is the change in internal energy of the gas, in kJ?</p>`,
      figure: figQ2,
      answer: 300,
      unit: "kJ",
      explanation: `<p>Closed system, so the first law applies directly with Q positive in and W positive done <em>by</em> the gas:</p>
<p class="eq">&Delta;U = Q &minus; W = 500 &minus; 200 = <strong>+300 kJ</strong></p>
<p>500 kJ entered as heat, 200 kJ left as boundary work lifting the piston, and 300 kJ stayed in the gas as a temperature rise. Change the wording to 200 kJ of work done <em>on</em> the gas and W = &minus;200, giving &Delta;U = 700 kJ.</p>`,
    },
    {
      id: "thermodynamics-q03",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>The heat pump shown draws 3 kW of electrical power and delivers 9 kW of heat into a house (absorbing 6 kW from the cold outdoor air). What is its coefficient of performance as a <strong>heat pump</strong>?</p>`,
      figure: figQ3,
      answer: 3,
      unit: "(dimensionless)",
      explanation: `<p>For a heat pump the useful effect is the heat <em>delivered</em> to the warm space:</p>
<p class="eq">COP<sub>HP</sub> = Q<sub>H</sub>/W = 9/3 = <strong>3.0</strong></p>
<p>Q<sub>H</sub> = Q<sub>C</sub> + W = 6 + 3 = 9 kW, so the first law holds and nothing is created.</p>
<p>Two things worth having ready. The same machine as a refrigerator has COP = 6/3 = 2, which is where COP<sub>HP</sub> = COP<sub>fridge</sub> + 1 comes from. And a resistance heater on the same 3 kW would deliver 3 kW, not 9, because it converts work into heat instead of moving heat.</p>`,
    },
    {
      id: "thermodynamics-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>An ideal gas in a piston&#8211;cylinder expands slowly while a heat bath holds its temperature constant. Which path on the P&#8211;V diagram shown does the process follow?</p>`,
      figure: figQ4,
      choices: [
        "Path A — horizontal line (constant pressure)",
        "Path B — vertical line (constant volume)",
        "Path C — the shallower curve, PV = const",
        "Path D — the steeper curve, PV<sup>&gamma;</sup> = const",
      ],
      answer: 2,
      explanation: `<p>Constant temperature with PV = mRT means <strong>PV = const</strong>, a hyperbola, path <strong>C</strong>.</p>
<p>Path D is the adiabat, PV<sup>&gamma;</sup> = const. It drops <em>faster</em>, because an insulated expanding gas spends internal energy on work and cools, so falling temperature pulls pressure down on top of the volume increase. B does zero work. A would need pressure to hold constant, which an ideal gas at constant T cannot do while V changes.</p>`,
    },
    {
      id: "thermodynamics-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A refrigerator's data sheet lists a COP of 3.2. Does this violate the first law of thermodynamics (energy conservation)?</p>`,
      choices: [
        "Yes: no device can put out more energy than goes in, so COP must be at most 1",
        "No: COP compares moved heat to work input, and moving heat is not creating energy",
        "No, but only nominally: once compressor losses are counted the real COP drops below 1",
        "Yes, unless the cabinet is also drawing heat in from the room to make up the difference",
      ],
      answer: 1,
      explanation: `<p>COP = Q<sub>C</sub>/W = 3.2 means each joule of compressor work <strong>pumps</strong> 3.2 J of heat out of the cold space. The energy balance is Q<sub>H</sub> = Q<sub>C</sub> + W = 3.2 + 1 = 4.2 J rejected to the kitchen. Everything is conserved; nothing is created. Efficiency (&le;100%) applies to <em>conversion</em> of one energy form into another; COP measures <em>transport</em> of heat, which work merely drives against the natural gradient.</p>
<p>The second law does impose a limit, just not 1: COP<sub>max</sub> = T<sub>C</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>). For a fridge at 275 K rejecting to a 300 K kitchen that is 275/25 = 11, so 3.2 is comfortably legal. Claiming COP &gt; the Carnot value <em>would</em> violate the second law.</p>
<p>The wrong choices are each worth naming. Capping COP at 1 applies an efficiency ceiling to a transport ratio; a heat pump moving 3.2 J per J of work is not a 320%-efficient anything. Compressor losses do not push COP below 1 either. They show up as extra work <em>and</em> as heat that mostly ends up in the rejected stream, and a real domestic fridge still runs a COP of 2 to 3. And the cabinet certainly leaks heat in from the room, but that leak is part of Q<sub>C</sub>, the load the cycle removes; it is not a hidden energy source that closes a books gap.</p>`,
    },
    {
      id: "thermodynamics-q06",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Why can no real engine reach the Carnot efficiency, even with perfect manufacturing?</p>`,
      choices: [
        "Real working fluids have finite specific heats, so they cannot hold the two isotherms Carnot's proof needs",
        "Carnot's derivation omits the work needed to drive the compression strokes back around the cycle",
        "The Carnot bound is a steam-plant result; gas turbines and piston engines obey a different limit",
        "Reversibility demands zero-&Delta;T heat transfer and zero friction, so a Carnot engine makes no power",
      ],
      answer: 3,
      explanation: `<p>The Carnot limit assumes every step is <strong>reversible</strong>: heat crosses the boundary with an infinitesimal temperature difference, and there is no friction, turbulence, or unrestrained expansion. But heat transfer at zero &Delta;T is infinitely slow. A truly reversible engine produces zero power. Any engine that runs at a finite rate needs finite temperature differences to push heat in and out, and finite &Delta;T heat transfer <em>generates entropy</em>, eating into the ideal work.</p>
<p>So the gap to Carnot is fundamental, not a manufacturing defect. Carnot's result is fluid-independent (that's its power), and the compression work is fully accounted for in the cycle. Sharp follow-up to expect: "then what's Carnot <em>for</em>?" Answer: it's the benchmark. It tells you how much room for improvement exists and instantly exposes fraudulent efficiency claims.</p>`,
    },
    {
      id: "thermodynamics-q07",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>Air at 300 K is compressed isentropically through a pressure ratio of 8 (take &gamma; = 1.4). What is the outlet temperature, in K?</p>`,
      answer: 543,
      unit: "K",
      explanation: `<p>Isentropic ideal-gas relation between temperature and pressure:</p>
<p class="eq">T<sub>2</sub> = T<sub>1</sub>(P<sub>2</sub>/P<sub>1</sub>)<sup>(&gamma;&minus;1)/&gamma;</sup> = 300 &times; 8<sup>0.4/1.4</sup> = 300 &times; 8<sup>0.2857</sup></p>
<p>8<sup>0.2857</sup> = e<sup>0.2857 &times; ln 8</sup> = e<sup>0.2857 &times; 2.079</sup> = e<sup>0.594</sup> = 1.811, so T<sub>2</sub> = 300 &times; 1.811 = <strong>543 K</strong> (about 270 &deg;C).</p>
<p>This is essentially the compressor of a small gas turbine: a pressure ratio of 8 heats the air by ~240 K before any fuel is burned. Using the exponent &gamma; gives a wild 300 &times; 8<sup>1.4</sup>. Using &gamma;&minus;1 gives 8<sup>0.4</sup> = 2.30 and 690 K. And the relation only works in kelvin. Compression must heat the gas, and 543 K &gt; 300 K. &#10003;</p>`,
    },
    {
      id: "thermodynamics-q08",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A house loses 10 kW of heat at its &minus;10 &deg;C design condition. The air-source heat pump specified for it delivers COP 3.0 at 7 &deg;C outdoors, but at &minus;10 &deg;C its COP falls to 1.8 <em>and</em> its heating capacity falls to 6 kW; resistance backup strips make up the shortfall. What total electrical power does the house draw at the design condition, in kW?</p>`,
      answer: 7.33,
      unit: "kW",
      explanation: `<p>Split the load between the two heat sources. This is the whole point of the question, and candidates who apply one COP to the whole 10 kW get it wrong.</p>
<p class="eq">Heat pump: 6 kW delivered at COP 1.8 &rarr; W = 6/1.8 = 3.33 kW</p>
<p class="eq">Strips: 10 &minus; 6 = 4 kW delivered at COP 1 &rarr; W = 4 kW</p>
<p class="eq">Total = 3.33 + 4 = <strong>7.33 kW</strong></p>
<p>The effective system COP is 10/7.33 = <strong>1.36</strong>. A heat pump advertised at 3 behaves like a 1.4 on the coldest night. Compare: the same 10 kW load at 7 &deg;C costs only 10/3.0 = 3.33 kW. That 2.2&times; jump in draw, arriving exactly when every house on the feeder is doing the same thing, is why utilities care about cold-climate heat pumps and why the strips exist at all.</p>
<p>The physics behind the capacity fade: as outdoor temperature drops, refrigerant density at the compressor suction falls, so the same compressor moves less mass and less heat, while the Carnot ceiling T<sub>H</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>) also shrinks because the lift grew. Two effects, both pushing the wrong way. Follow-up worth pre-empting: size the pump for a milder balance point and accept strip hours, or oversize it and lose part-load efficiency, the real design trade.</p>`,
    },
    {
      id: "thermodynamics-q09",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A rigid tank of volume 0.5 m&sup3; holds air at an absolute pressure of 200 kPa and 300 K. Taking R = 0.287 kJ/kg&middot;K, what mass of air is in the tank, in kg?</p>`,
      answer: 1.16,
      unit: "kg",
      explanation: `<p>Ideal gas law solved for mass, keeping kPa &times; m&sup3; = kJ:</p>
<p class="eq">m = PV/(RT) = (200 &times; 0.5)/(0.287 &times; 300) = <strong>1.16 kg</strong></p>
<p>Air at atmospheric conditions is about 1.2 kg/m&sup3;, and this is half a cubic metre at roughly twice atmospheric, so 1.16 kg lands where it should.</p>
<p>Absolute pressure and kelvin, both. A 200 kPa <em>gauge</em> reading would need 101 kPa added first.</p>`,
    },
    {
      id: "thermodynamics-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Steam flows steadily through a well-insulated turbine with negligible velocity change. Per kilogram of steam, the shaft work output equals:</p>`,
      choices: [
        "h<sub>1</sub> &minus; h<sub>2</sub>, the drop in specific enthalpy",
        "u<sub>1</sub> &minus; u<sub>2</sub>, the drop in specific internal energy",
        "T<sub>1</sub> &minus; T<sub>2</sub> multiplied by c<sub>v</sub>",
        "The heat added in the boiler upstream",
      ],
      answer: 0,
      explanation: `<p>Steady-flow energy equation with q = 0 and &Delta;KE &asymp; 0:</p>
<p class="eq">w<sub>out</sub> = h<sub>1</sub> &minus; h<sub>2</sub></p>
<p>Enthalpy, not internal energy, is the currency for flow devices. Each kilogram crossing the boundary carries flow work Pv on top of its internal energy, and h = u + Pv bundles both. Using u<sub>1</sub> &minus; u<sub>2</sub>, which is right for a <em>closed</em> system, undercounts the work. The c<sub>v</sub>&Delta;T option smuggles an ideal-gas closed-system formula into steam.</p>`,
    },
    {
      id: "thermodynamics-q11",
      type: "mc",
      difficulty: 2,
      prompt: `<p>The heat engine shown receives 1000 kJ from a 600 K reservoir and rejects heat to a 300 K reservoir. What is the <strong>maximum</strong> work it could produce?</p>`,
      figure: figQ11,
      choices: ["1000 kJ", "500 kJ", "300 kJ", "667 kJ"],
      answer: 1,
      explanation: `<p>The ceiling is Carnot:</p>
<p class="eq">&eta;<sub>max</sub> = 1 &minus; T<sub>C</sub>/T<sub>H</sub> = 1 &minus; 300/600 = 0.50</p>
<p class="eq">W<sub>max</sub> = &eta;<sub>max</sub> Q<sub>H</sub> = 0.50 &times; 1000 = <strong>500 kJ</strong></p>
<p>At least 500 kJ <em>must</em> be rejected to the cold reservoir, that's the Kelvin&#8211;Planck statement in numbers: heat can never be converted to work at 100%. A 667 kJ result usually comes from inverting the temperature ratio or inventing a 900 K reservoir, and 300 kJ mistakes the rejected heat for useful work. The numbers are intentionally clean: with T<sub>C</sub> exactly half of T<sub>H</sub>, the interview is testing the Carnot limit, not calculator endurance.</p>`,
    },
    {
      id: "thermodynamics-q12",
      type: "mc",
      difficulty: 3,
      prompt: `<p>An inventor claims a device that absorbs 100 kJ of heat from a reservoir at 400 K, produces 40 kJ of work, and rejects 60 kJ to a reservoir at 300 K. Your assessment?</p>`,
      choices: [
        "Plausible — the energy books balance, 100 kJ in = 40 kJ of work + 60 kJ rejected",
        "Impossible — the first law fails because the energy in and the energy out do not match",
        "Impossible — 40% beats the 25% Carnot ceiling for 400 K and 300 K, so it breaks the second law",
        "Plausible — a regenerative Stirling cycle legitimately exceeds Carnot for its reservoirs",
      ],
      answer: 2,
      explanation: `<p>Always run both checks. <strong>First law:</strong> 100 = 40 + 60 &#10003;. Energy balances, so the "first law fails" option is out and the claim <em>looks</em> plausible superficially. <strong>Second law:</strong> the Carnot limit for these reservoirs is</p>
<p class="eq">&eta;<sub>max</sub> = 1 &minus; 300/400 = 0.25 = 25%</p>
<p>The claimed efficiency is 40/100 = 40% &gt; 25%, <strong>impossible</strong>, a perpetual-motion machine of the second kind. Equivalently, check entropy: the hot reservoir loses 100/400 = 0.25 kJ/K of entropy while the cold one gains only 60/300 = 0.20 kJ/K, so the universe's entropy would <em>decrease</em> by 0.05 kJ/K. No cycle choice (Stirling included, it's also Carnot-limited) rescues that. This two-step audit, energy first, entropy second, is exactly how you should dismantle any "too good" efficiency claim in an interview.</p>`,
    },
    {
      id: "thermodynamics-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>In a household refrigerator's vapor-compression cycle, where is heat absorbed from the food compartment, and where is it dumped into the kitchen?</p>`,
      choices: [
        "Absorbed in the evaporator inside the cabinet; rejected in the condenser coils at the back",
        "Absorbed in the condenser inside the cabinet; rejected in the evaporator at the back",
        "Absorbed at the expansion valve, where the refrigerant flashes cold; rejected in the compressor",
        "Absorbed in the evaporator; rejected by the compressor, which is the part doing work on the gas",
      ],
      answer: 0,
      explanation: `<p>Follow the refrigerant: the <strong>expansion valve</strong> throttles high-pressure liquid to low pressure, flashing it into a cold two-phase mixture (h = const, T drops); the cold refrigerant then boils in the <strong>evaporator</strong> inside the cabinet, absorbing Q<sub>C</sub> from the food; the <strong>compressor</strong> raises its pressure (and temperature) with work W; and the hot vapor condenses in the <strong>condenser</strong>, those warm coils on the back of the fridge, rejecting Q<sub>H</sub> = Q<sub>C</sub> + W to the kitchen.</p>
<p>Two classic follow-ups: (1) leaving the fridge door open <em>warms</em> the kitchen net, because Q<sub>H</sub> &gt; Q<sub>C</sub>. The compressor work all ends up as heat in the room; (2) phase change is used in both exchangers because boiling/condensing moves large heat loads at nearly constant temperature with high heat-transfer coefficients.</p>`,
    },
    {
      id: "thermodynamics-q14",
      type: "mc",
      difficulty: 3,
      prompt: `<p>In an insulated container, 1 kg of water at 80 &deg;C is mixed with 1 kg of water at 20 &deg;C. Which statement is correct?</p>`,
      choices: [
        "50 &deg;C; energy is conserved and the total entropy of the water rises, so it is irreversible",
        "50 &deg;C; entropy is conserved, since an insulated boundary passes no heat and so no entropy",
        "50 &deg;C; entropy falls for the hot half, so the second law is violated by this mixing",
        "Below 50 &deg;C, because the irreversibility of mixing destroys some of the internal energy",
      ],
      answer: 0,
      explanation: `<p>Equal masses of the same fluid: the energy balance gives T<sub>f</sub> = (80 + 20)/2 = 50 &deg;C. The first law is satisfied and no energy is destroyed. But entropy is <em>not</em> conserved: the cold water gains more entropy than the hot water loses, because entropy transfer scales as &delta;Q/T and the cold water receives its heat at a <em>lower</em> temperature. Quantitatively &Delta;S = mc[ln(323/353) + ln(323/293)] = mc(&minus;0.0888 + 0.0975) &gt; 0.</p>
<p>Insulation prevents entropy <em>transfer</em> to the surroundings, but irreversible processes <em>generate</em> entropy internally, that's the distinction this question hunts for. The hot stream's entropy does decrease (choice C notes a true fact) but the second law constrains the <strong>total</strong>, which rises. Follow-up question: could you have extracted work instead? Yes. Run a reversible engine between the two masses and you'd end below 50 &deg;C with work out; the direct mixing squandered that availability (exergy).</p>`,
    },
  ],

  qna: [
    {
      id: "thermodynamics-qa01",
      q: `<p>State the first law for a closed system and for a steady-flow device. Why does enthalpy appear in the flow version?</p>`,
      a: `<p>Closed system: <strong>&Delta;U = Q &minus; W</strong>, the stored internal energy changes by heat in minus work out. Steady-flow control volume (per unit mass, neglecting elevation): <strong>q &minus; w = &Delta;h + &Delta;(V&sup2;/2)</strong>. Enthalpy h = u + Pv shows up because flowing mass does more than carry internal energy across the boundary. The fluid behind it must do <strong>flow work</strong> Pv to push each kilogram through the inlet, and the fluid downstream receives Pv back at the outlet. Bundling u + Pv into one property keeps the bookkeeping honest.</p><p>So an adiabatic turbine's work is the enthalpy drop h&#8321; &minus; h&#8322;, a nozzle converts enthalpy drop into V&sup2;/2, and a throttle with no work or heat is isenthalpic. Swapping u for h on a flow device, or the reverse, is the first-law error I see most often.</p>`,
    },
    {
      id: "thermodynamics-qa02",
      q: `<p>Walk me through the Rankine cycle — what does each component do, and why does the cycle produce net work?</p>`,
      a: `<p>Four components in a loop. <strong>Pump</strong>: raises the pressure of liquid condensate to boiler pressure; because liquid is nearly incompressible, this costs very little work (w = v&Delta;P, typically ~1% of turbine output). <strong>Boiler</strong>: adds heat at high pressure, turning liquid into (usually superheated) steam. <strong>Turbine</strong>: the steam expands, and the enthalpy drop h&#8321; &minus; h&#8322; comes off as shaft work. <strong>Condenser</strong>: rejects the leftover heat to cooling water, returning the steam to liquid so the pump can do its cheap job again. The cycle nets work because compressing the <em>liquid</em> is vastly cheaper than the work recovered expanding the <em>vapor</em>. The phase change is the trick.</p><p>The levers: superheat and reheat raise the average heat-addition temperature (closer to Carnot) and keep turbine exit quality high (wet steam erodes last-stage blades); pulling a vacuum in the condenser lowers T<sub>C</sub>. This is the backbone of coal, nuclear, and concentrated-solar plants.</p>`,
    },
    {
      id: "thermodynamics-qa03",
      q: `<p>Why is Carnot efficiency the absolute maximum, and what would it physically take to achieve it?</p>`,
      a: `<p>Carnot follows directly from the second law: a reversible engine between T<sub>H</sub> and T<sub>C</sub> generates zero entropy, so the entropy taken from the hot reservoir (Q<sub>H</sub>/T<sub>H</sub>) must exactly equal the entropy dumped to the cold one (Q<sub>C</sub>/T<sub>C</sub>). That fixes Q<sub>C</sub>/Q<sub>H</sub> = T<sub>C</sub>/T<sub>H</sub> and hence &eta; = 1 &minus; T<sub>C</sub>/T<sub>H</sub>. Any engine beating this would let you decrease the entropy of the universe (equivalently, build a composite device that moves heat cold&rarr;hot for free), forbidden. Achieving it would require: heat transfer across an infinitesimal &Delta;T (infinitely slow, so zero power), frictionless machinery, and no unrestrained expansions. So Carnot is a ceiling with zero power output at the limit, real engines trade efficiency for power.</p><p>The formula is independent of working fluid and mechanism, which is what makes it such a reliable audit tool for any claimed engine.</p>`,
    },
    {
      id: "thermodynamics-qa04",
      q: `<p>Explain COP. Why can it exceed 1 without violating anything, and why does a heat pump beat electric resistance heating?</p>`,
      a: `<p>COP is useful effect over work input: for a refrigerator COP = Q<sub>C</sub>/W (heat removed from the cold space), for a heat pump COP = Q<sub>H</sub>/W (heat delivered to the warm space), and the two are related by COP<sub>HP</sub> = COP<sub>fridge</sub> + 1 since Q<sub>H</sub> = Q<sub>C</sub> + W. COP &gt; 1 is fine because the device <strong>transports</strong> heat rather than converting work into it. The energy delivered indoors is mostly heat that already existed outdoors, with work paying only for the uphill pumping. The second law still caps it: COP<sub>HP,max</sub> = T<sub>H</sub>/(T<sub>H</sub> &minus; T<sub>C</sub>), which shrinks as the temperature lift grows. A resistance heater is pure conversion. 1 kWh of electricity becomes exactly 1 kWh of heat, a "COP" of 1 by definition. A heat pump at COP 3 delivers triple the heat for the same electricity.</p><p>It is not free of drawbacks. COP degrades in extreme cold, defrost cycles cost energy, and capital cost is higher, which is why cold-climate units ship with resistance backup strips.</p>`,
    },
    {
      id: "thermodynamics-qa05",
      q: `<p>What is entropy, physically, and how do you actually use the second law as an engineer?</p>`,
      a: `<p>Macroscopically, entropy is the property whose change tracks heat transfer weighted by temperature: dS = &delta;Q<sub>rev</sub>/T; it measures how "degraded" energy is. Heat at low temperature carries more entropy per joule and can do less work. Microscopically it counts the number of molecular arrangements consistent with the macrostate. Spread-out, disordered energy has more arrangements. The second law says total entropy (system + surroundings) never decreases; it's generated by friction, mixing, throttling, and heat transfer across finite &Delta;T.</p><p>Three things I actually use it for. <strong>Bounding performance</strong>: Carnot limits, isentropic efficiencies for turbines and compressors (&eta;<sub>s</sub> compares real work to the ideal entropy-constant process). <strong>Auditing claims</strong>: any device whose numbers imply net entropy destruction is fake. <strong>Locating waste</strong>: entropy generation maps exactly where a plant destroys work potential, which tells you which component to improve first.</p><p>Energy is conserved. Its <em>quality</em> is not, and entropy is the meter on that quality.</p>`,
    },
    {
      id: "thermodynamics-qa06",
      q: `<p>Compare isothermal and adiabatic compression of a gas between the same pressures. Which takes less work, and what does industry do about it?</p>`,
      a: `<p>Isothermal compression takes <strong>less</strong> work. Compressing a gas heats it; in adiabatic compression that heat stays in, so the gas is hotter and stiffer through the process. Pressure rises faster than PV = const and the &int;P&thinsp;dV area is larger. Isothermal compression continuously rejects the heat of compression, keeping the gas cool and compliant; on the P&#8211;V diagram its path (PV = const) lies below the adiabat (PV<sup>&gamma;</sup> = const), enclosing less work for the same pressure ratio. Truly isothermal compression is impossibly slow, so industry approximates it with <strong>multistage compression and intercooling</strong>: compress adiabatically part-way, cool the gas back down in an intercooler, compress again. Two or three stages capture most of the benefit, and equal pressure ratios per stage minimize total work. The same physics in reverse says you get <em>more</em> work expanding hot, which is why reheat between turbine stages helps. It is also why a bicycle pump gets hot at the outlet.</p>`,
    },
    {
      id: "thermodynamics-qa07",
      q: `<p>Why do jet-engine manufacturers fight for every extra degree of turbine inlet temperature?</p>`,
      a: `<p>A jet engine runs the Brayton cycle, and its efficiency and specific work both improve with the temperature ratio across the cycle. Turbine inlet temperature (TIT) is effectively the cycle's T<sub>H</sub>, so the Carnot logic applies: hotter source, higher ceiling. There is a brutal multiplier on top of that. The compressor consumes a huge fraction of turbine work (often more than half), so the <em>net</em> work is the difference of two large numbers. Raising TIT grows the turbine term while the compressor term stays put, so net work and thrust-per-kg-of-airflow rise disproportionately. Materials set the limit. Modern TITs (&sim;1700&#8211;2000 K) exceed the melting point of the nickel superalloy blades. Engines survive via single-crystal blades (no grain boundaries for creep), internal cooling passages fed with compressor bleed air, film cooling holes that blanket the blade in cooler air, and ceramic thermal-barrier coatings. Each of those costs money and bleed air (which itself hurts efficiency). The trade is worth it because a 1% specific-fuel-consumption gain is enormous over an airliner fleet's life.</p>`,
    },
    {
      id: "thermodynamics-qa08",
      q: `<p>How does a refrigerator actually work? Walk me through the hardware.</p>`,
      a: `<p>It's a vapor-compression cycle pumping heat from the cold cabinet to the warm kitchen. Start at the <strong>compressor</strong> (the black hump at the bottom rear): it takes low-pressure refrigerant vapor and squeezes it to high pressure, which also makes it hot. This is where the electrical energy goes in. The hot vapor flows through the <strong>condenser</strong> (the coil array on the back), rejecting heat Q<sub>H</sub> to the room and condensing to high-pressure liquid. That liquid passes through the <strong>expansion device</strong>, a capillary tube or thermostatic valve, which drops its pressure at constant enthalpy; part of the liquid flashes to vapor and the mixture chills to below cabinet temperature. It then boils through the <strong>evaporator</strong> (coils inside/behind the freezer wall), absorbing Q<sub>C</sub> from the food, and returns to the compressor as vapor. Both heat exchangers exploit phase change: boiling and condensing transfer large heat loads at nearly constant temperature with excellent heat-transfer coefficients. Energy balance: Q<sub>H</sub> = Q<sub>C</sub> + W. The kitchen receives more heat than the cabinet loses, which is why an open fridge door warms the room.</p>`,
    },
    {
      id: "thermodynamics-qa09",
      q: `<p>What happens across a throttling valve, and why does the refrigerant come out cold when no heat is removed?</p>`,
      a: `<p>A throttle (valve, orifice, capillary tube) drops pressure with no work extraction and negligible heat transfer, so the steady-flow energy equation collapses to <strong>h&#8322; = h&#8321;</strong>. Isenthalpic. Constant enthalpy is not constant temperature. For an <em>ideal gas</em>, h depends on T alone, so an ideal gas throttles with no temperature change. Worth saying explicitly, because it shows you know the model's limits. For a <em>real</em> fluid two things can happen. Near saturation, the pressure drop puts the fluid below its boiling pressure, so part of the liquid <strong>flashes</strong> to vapor; the latent heat for that vaporization is stolen from the fluid itself, and the two-phase mixture emerges much colder. This is exactly how the expansion valve chills refrigerant, using energy redistribution rather than heat removal. For gases, the Joule&#8211;Thomson effect gives modest cooling (or heating, hydrogen and helium warm at room temperature) depending on whether you're below the inversion temperature; JT cooling is the basis of gas liquefaction.</p><p>There is a second-law cost. Throttling is highly irreversible. It generates entropy and destroys work potential, which is why large plants sometimes replace valves with work-recovering expanders.</p>`,
    },
  ],
};

export default content;
