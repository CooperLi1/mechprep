import type { TopicContent } from "../types";

// ---------------------------------------------------------------------------
// Controls, Sensors & Mechatronics
// ---------------------------------------------------------------------------

const figLoop = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci1-flow" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#1d4ed8"/></marker>
    <marker id="ci1-dist" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#dc2626"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Every block in the loop costs phase</text>
  <circle cx="78" cy="110" r="13" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <line x1="70" y1="110" x2="86" y2="110" stroke="#334155" stroke-width="1"/>
  <line x1="78" y1="102" x2="78" y2="118" stroke="#334155" stroke-width="1"/>
  <text x="62" y="98" fill="#334155" font-size="12">+</text>
  <text x="60" y="140" fill="#334155" font-size="12">&minus;</text>
  <line x1="26" y1="110" x2="61" y2="110" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci1-flow)"/>
  <text x="26" y="100" fill="#1d4ed8" font-size="12">r</text>
  <line x1="91" y1="110" x2="114" y2="110" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci1-flow)"/>
  <text x="100" y="100" text-anchor="middle" fill="#1d4ed8" font-size="12">e</text>
  <rect x="118" y="88" width="72" height="44" fill="#dbeafe" stroke="#334155" stroke-width="1.5"/>
  <text x="154" y="107" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Controller</text>
  <text x="154" y="123" text-anchor="middle" fill="#64748b" font-size="11">PID, 1 kHz</text>
  <line x1="190" y1="110" x2="208" y2="110" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci1-flow)"/>
  <text x="199" y="100" text-anchor="middle" fill="#1d4ed8" font-size="12">u</text>
  <rect x="212" y="88" width="72" height="44" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
  <text x="248" y="107" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Drive +</text>
  <text x="248" y="123" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">motor</text>
  <line x1="284" y1="110" x2="302" y2="110" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci1-flow)"/>
  <rect x="306" y="88" width="72" height="44" fill="#fee2e2" stroke="#334155" stroke-width="1.5"/>
  <text x="342" y="107" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Mechanics</text>
  <text x="342" y="123" text-anchor="middle" fill="#64748b" font-size="10">inertia, modes</text>
  <line x1="342" y1="50" x2="342" y2="84" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ci1-dist)"/>
  <text x="342" y="42" text-anchor="middle" fill="#dc2626" font-size="12">load disturbance</text>
  <line x1="378" y1="110" x2="428" y2="110" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#ci1-flow)"/>
  <text x="420" y="100" text-anchor="middle" fill="#1d4ed8" font-size="12">y</text>
  <line x1="404" y1="112" x2="404" y2="182" stroke="#1d4ed8" stroke-width="2.2"/>
  <line x1="404" y1="182" x2="368" y2="182" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci1-flow)"/>
  <rect x="286" y="162" width="78" height="40" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="325" y="187" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Sensor</text>
  <line x1="286" y1="182" x2="252" y2="182" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci1-flow)"/>
  <rect x="150" y="162" width="98" height="40" fill="#fff" stroke="#334155" stroke-width="1.5"/>
  <text x="199" y="180" text-anchor="middle" fill="#334155" font-weight="600" font-size="12">Filter + sample</text>
  <text x="199" y="195" text-anchor="middle" fill="#64748b" font-size="11">delay lives here</text>
  <path d="M150,182 H78 V127" fill="none" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#ci1-flow)"/>
  <text x="230" y="224" text-anchor="middle" fill="#64748b" font-size="12">Correction always arrives late; how late decides</text>
  <text x="230" y="240" text-anchor="middle" fill="#64748b" font-size="12">whether the loop damps or rings.</text>
</svg>`;

const figAlias = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci2-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="20" text-anchor="middle" font-weight="600" fill="#334155">A 60 Hz signal sampled at 100 Hz reads as 40 Hz</text>
  <line x1="40" y1="140" x2="436" y2="140" stroke="#64748b" stroke-width="1.2" marker-end="url(#ci2-ax)"/>
  <path d="M50,140 C70,80 90,80 110,140 C130,200 150,200 170,140 C190,80 210,80 230,140 C250,200 270,200 290,140 C310,80 330,80 350,140 C370,200 390,200 410,140" fill="none" stroke="#1d4ed8" stroke-width="2.4"/>
  <path d="M50,140 C80,200 110,200 140,140 C170,80 200,80 230,140 C260,200 290,200 320,140 C350,80 380,80 410,140" fill="none" stroke="#b45309" stroke-width="2.4" stroke-dasharray="7 5"/>
  <g stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3">
    <line x1="50" y1="140" x2="50" y2="208"/><line x1="122" y1="168.8" x2="122" y2="208"/><line x1="194" y1="96.8" x2="194" y2="208"/><line x1="266" y1="183.2" x2="266" y2="208"/><line x1="338" y1="111.2" x2="338" y2="208"/><line x1="410" y1="140" x2="410" y2="208"/>
  </g>
  <g fill="#dc2626">
    <circle cx="50" cy="140" r="4.5"/><circle cx="122" cy="168.8" r="4.5"/><circle cx="194" cy="96.8" r="4.5"/><circle cx="266" cy="183.2" r="4.5"/><circle cx="338" cy="111.2" r="4.5"/><circle cx="410" cy="140" r="4.5"/>
  </g>
  <g fill="#64748b" font-size="11" text-anchor="middle">
    <text x="50" y="222">0</text><text x="122" y="222">10</text><text x="194" y="222">20</text><text x="266" y="222">30</text><text x="338" y="222">40</text><text x="410" y="222">50 ms</text>
  </g>
  <line x1="46" y1="238" x2="72" y2="238" stroke="#1d4ed8" stroke-width="2.4"/>
  <text x="78" y="242" fill="#334155" font-size="11">true 60 Hz</text>
  <circle cx="166" cy="238" r="4.5" fill="#dc2626"/>
  <text x="176" y="242" fill="#334155" font-size="11">samples, 100 Hz</text>
  <line x1="286" y1="238" x2="312" y2="238" stroke="#b45309" stroke-width="2.4" stroke-dasharray="7 5"/>
  <text x="318" y="242" fill="#334155" font-size="11">40 Hz alias you record</text>
</svg>`;

const figBandwidth = `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="13">
  <defs>
    <marker id="ci3-ax" markerWidth="9" markerHeight="9" refX="7.5" refY="4.5" orient="auto"><path d="M0,0L9,4.5L0,9z" fill="#64748b"/></marker>
  </defs>
  <text x="230" y="22" text-anchor="middle" font-weight="600" fill="#334155">Bandwidth ladder: the slowest element sets the ceiling</text>
  <rect x="40" y="132" width="61" height="16" fill="#dbeafe"/>
  <line x1="34" y1="140" x2="412" y2="140" stroke="#64748b" stroke-width="1.4" marker-end="url(#ci3-ax)"/>
  <g stroke="#64748b" stroke-width="1">
    <line x1="40" y1="136" x2="40" y2="144"/><line x1="127" y1="136" x2="127" y2="144"/><line x1="214" y1="136" x2="214" y2="144"/><line x1="301" y1="136" x2="301" y2="144"/><line x1="388" y1="136" x2="388" y2="144"/>
  </g>
  <g fill="#64748b" font-size="11" text-anchor="middle">
    <text x="40" y="158">1 Hz</text><text x="127" y="158">10 Hz</text><text x="214" y="158">100 Hz</text><text x="301" y="158">1 kHz</text><text x="388" y="158">10 kHz</text>
  </g>
  <line x1="101" y1="136" x2="101" y2="100" stroke="#1d4ed8" stroke-width="2.2"/>
  <circle cx="101" cy="100" r="4" fill="#1d4ed8"/>
  <text x="101" y="92" text-anchor="middle" fill="#1d4ed8" font-size="12">loop bandwidth 5 Hz</text>
  <line x1="195" y1="136" x2="195" y2="66" stroke="#dc2626" stroke-width="2.2"/>
  <circle cx="195" cy="66" r="4" fill="#dc2626"/>
  <text x="195" y="58" text-anchor="middle" fill="#dc2626" font-size="12">first structural mode 60 Hz</text>
  <line x1="256" y1="144" x2="256" y2="172" stroke="#334155" stroke-width="2.2"/>
  <circle cx="256" cy="172" r="4" fill="#334155"/>
  <text x="256" y="186" text-anchor="middle" fill="#334155" font-size="12">anti-alias cutoff 300 Hz</text>
  <line x1="327" y1="144" x2="327" y2="196" stroke="#334155" stroke-width="2.2"/>
  <circle cx="327" cy="196" r="4" fill="#334155"/>
  <text x="327" y="210" text-anchor="middle" fill="#334155" font-size="12">sample rate 2 kHz</text>
  <text x="40" y="124" fill="#1d4ed8" font-size="10">usable band</text>
  <text x="230" y="226" text-anchor="middle" fill="#64748b" font-size="12">Sensor bandwidth &ge; 10&times; loop bandwidth;</text>
  <text x="230" y="242" text-anchor="middle" fill="#64748b" font-size="12">loop bandwidth &le; 1/5 of the first mode.</text>
</svg>`;

const content: TopicContent = {
  lesson: {
    title: "Controls, Sensors & Mechatronics",
    intro: `<p>Controls questions arrive whenever a machine has a motor and a sensor, and they are almost never about transfer-function algebra. They are about a physical loop: what gets measured, where the measurement is taken from, how much lag each element adds, what the actuator can actually deliver, and why the axis rings, droops, or drifts. Block-level reasoning and whiteboard arithmetic answer all of it.</p>
<figure class="fig">${figLoop}<figcaption>The loop is a chain of physical elements. Each one adds delay, and delay is what eventually turns negative feedback into oscillation.</figcaption></figure>`,
    sections: [
      {
        heading: "Open loop, closed loop, and what feedback actually buys",
        html: `<p>Open-loop control commands an actuator from a calibration and hopes. Closed-loop control measures the output, forms an error, and drives the actuator to shrink it.</p>
<p class="eq">e = r &minus; y</p>
<p>r is the setpoint, y the measured output, e the error the controller acts on. Feedback buys <strong>disturbance rejection and insensitivity to model error</strong>. A conveyor holds speed when a heavy tote lands. A heater holds temperature when the door opens. What it costs is the possibility of instability, sensitivity to sensor noise, and a total dependence on the sensor being honest about the quantity you care about.</p>
<p>That last cost is the one people underrate. A motor-side encoder measures the motor, not the load. Put backlash, belt stretch, or a flexible coupling between them and the loop will drive the encoder to the setpoint while the payload sits somewhere else. Feedback controls what you measure and nothing else.</p>
<div class="callout">First question on any mechatronics problem: where is the sensor relative to the thing that has to be accurate?</div>`,
      },
      {
        heading: "PID: what each term fixes and what each term costs",
        html: `<p>Three actions, three tradeoffs. Nothing here is free.</p>
<p class="eq">u = K<sub>p</sub>e + K<sub>i</sub>&int;e dt + K<sub>d</sub>de/dt</p>
<table><thead><tr><th>Term</th><th>Fixes</th><th>Costs</th></tr></thead><tbody>
<tr><td>Proportional</td><td>Stiffness, speed of response, most of the disturbance rejection</td><td>Push it too far and crossover moves into the plant lag, resonance, and delay &rarr; overshoot, then oscillation</td></tr>
<tr><td>Integral</td><td>Steady-state error from gravity, friction, valve bias, sensor offset</td><td>Adds 90&deg; of phase lag at low frequency, and winds up while the actuator saturates</td></tr>
<tr><td>Derivative</td><td>Damping, reduces overshoot, lets you carry more proportional gain</td><td>Differentiates measurement noise into actuator chatter; nearly useless against transport delay</td></tr>
</tbody></table>
<p>Integral action is the standard cure for a static droop, and the price is phase margin. An axis that was merely slow can start ringing once you add K<sub>i</sub>. Derivative gain on a noisy or coarsely quantized position signal makes the motor buzz, and the answer there is to filter the derivative path or estimate velocity over a sensible window rather than add more K<sub>d</sub>.</p>
<p>If the error is a following error at constant velocity, no amount of feedback tuning is the elegant fix. Feedforward is. The trajectory generator already knows the commanded velocity and acceleration, so hand those to the drive directly and let feedback clean up the residue.</p>`,
      },
      {
        heading: "Bandwidth: sensor, actuator, structure, loop",
        html: `<p>Bandwidth is how fast a chain can respond usefully, and a loop cannot beat its slowest serious element. Four numbers matter. Ask for all four.</p>
<figure class="fig">${figBandwidth}<figcaption>Put the numbers on a log frequency axis and the achievable loop bandwidth usually names itself.</figcaption></figure>
<ul>
<li><strong>Sensor bandwidth</strong>, a first-order sensor with cutoff f<sub>c</sub> contributes phase lag &phi; = &minus;arctan(f/f<sub>c</sub>). The usual rule is sensor bandwidth at least 10&times; loop bandwidth, which keeps that lag under about 6&deg;.</li>
<li><strong>Actuator and drive bandwidth</strong>. A current loop at 1 kHz is invisible to a 10 Hz position loop; a pneumatic cylinder at 3 Hz is not.</li>
<li><strong>Structural modes</strong>. Belts, couplings, screws, and frames set the real ceiling. A plain PID loop should close at roughly 1/5 to 1/10 of the first lightly damped mode.</li>
<li><strong>Sample rate</strong>, pick it 10&ndash;20&times; the intended loop bandwidth so the zero-order hold and computation delay do not eat the phase budget.</li>
</ul>
<p>Quoting the motor data sheet is where this goes wrong. The motor is almost never the limit; the belt, the sensor filter, or the bus latency is.</p>`,
      },
      {
        heading: "Why loops oscillate: the phase budget",
        html: `<p>Instability is a bookkeeping problem. At the frequency where open-loop gain passes through 1 (gain crossover), add up all the phase lag. Whatever is left before &minus;180&deg; is your phase margin, and a healthy servo wants 45&ndash;60&deg;.</p>
<p class="eq">PM = 180&deg; + &ang;L(j&omega;<sub>gc</sub>)</p>
<p>The single most useful formula in practical controls is the phase cost of pure delay, because delay is invisible in a magnitude plot and lethal in a phase plot:</p>
<p class="eq">&phi;<sub>delay</sub> = &minus;360&deg; &middot; f &middot; T</p>
<p>Two milliseconds of combined sensing, computation, bus, and actuation delay costs 36&deg; at 50 Hz, most of a phase-margin budget, for a number nobody put on a data sheet. Run the same arithmetic backwards to size a delay budget: with 60&deg; of margin at a 20 Hz crossover you can afford (60/360)/20 = 8.3 ms and not a microsecond more.</p>
<p>So the shortlist for "why does it oscillate" is short and physical:</p>
<ul>
<li><strong>Too much gain</strong>. Crossover moved up into the lag you already had.</li>
<li><strong>A filter you just added</strong>. Noise went away and so did 30&deg; of margin.</li>
<li><strong>Transport delay</strong>, a camera, a fieldbus, an averaged sensor, a slow thermocouple.</li>
<li><strong>A structural mode at crossover</strong>, usually a sharp, repeatable ring at one frequency.</li>
<li><strong>Integrator windup</strong>. Slow, one-sided overshoot after every saturated move, not a sustained sine.</li>
<li><strong>Quantization or stiction</strong>, a limit cycle that lives at low amplitude and low speed and never decays.</li>
</ul>
<div class="callout warn">The frequency of the oscillation is the best clue you have. Near the structural mode, blame mechanics. Near a fixed fraction of the sample rate, blame the discrete controller. Very slow with a one-sided shape, blame the integrator.</div>`,
      },
      {
        heading: "Sampling, aliasing, and the filter that has to be analog",
        html: `<p>Nyquist says a sample rate must exceed twice the highest frequency present, not the highest frequency you care about. Everything above f<sub>s</sub>/2 does not disappear, it folds down into your data at</p>
<p class="eq">f<sub>alias</sub> = |f &minus; k f<sub>s</sub>|, k chosen to land in 0 to f<sub>s</sub>/2</p>
<figure class="fig">${figAlias}<figcaption>Both curves pass through every sample. Once the data is recorded there is no way to tell them apart.</figcaption></figure>
<p>A 60 Hz mains hum sampled at 100 Hz appears at |100 &minus; 60| = 40 Hz. A 1.2 kHz gear-mesh tone sampled at 1 kHz appears at 200 Hz. Both look like real machine dynamics, and both are fiction.</p>
<div class="callout warn">The anti-alias filter must be <strong>analog and ahead of the ADC</strong>. A digital filter runs on samples that already contain the fold, so it removes nothing, the 1.9 kHz drive tone is already sitting at 100 Hz next to your real signal, indistinguishable from it. This is the single most common data-acquisition mistake in a test lab.</div>
<p>Sampling at exactly 2f is a mathematical boundary, not an engineering choice: sample a 50 Hz sine at exactly 100 Hz and, depending on phase, you can record its full amplitude or a row of zeros. Practical rule: 5&ndash;10&times; oversampling for a trace you intend to look at, 10&ndash;20&times; the loop bandwidth for control.</p>`,
      },
      {
        heading: "Sensors: resolution is not accuracy",
        html: `<p>Four words that get used interchangeably and should not be:</p>
<table><thead><tr><th>Term</th><th>Meaning</th><th>Set by</th></tr></thead><tbody>
<tr><td>Resolution</td><td>Smallest change the system can report</td><td>Encoder counts, ADC bits, interpolation</td></tr>
<tr><td>Precision / repeatability</td><td>Spread when you repeat the same measurement</td><td>Noise, stiction, backlash on reversal, thermal drift</td></tr>
<tr><td>Accuracy</td><td>Closeness to the true value</td><td>Calibration, scale factor, offset, where the sensor sits</td></tr>
</tbody></table>
<p>A 16-bit encoder on the motor of a belt axis has spectacular resolution and can still be 50 &mu;m wrong at the payload. Resolution is cheap; accuracy costs you a load-side sensor, a calibration, and a stiffer machine.</p>
<p>For the measurement chain itself, work in physical units end to end. A 500 N load cell rated 2 mV/V on 10 V excitation gives 20 mV full scale; a 12-bit 0&ndash;5 V ADC steps at 1.22 mV, which is 30 N per count, so the honest answer is that the chain needs an instrumentation amplifier, not more ADC bits. A strain-gage bridge output is</p>
<p class="eq">V<sub>o</sub>/V<sub>ex</sub> = GF &middot; &epsilon; (full bridge, four active gages)</p>
<p>and a full bridge is preferred not only for the 4&times; sensitivity but because uniform temperature changes every arm by the same fraction and cancels in the difference. Quarter bridges do not get that for free.</p>`,
      },
      {
        heading: "Actuators: the curve, the duty cycle, and the inertia",
        html: `<p>A motor is not a torque source with a single number. On a torque&ndash;speed curve, available torque falls as speed rises because back EMF eats the supply voltage:</p>
<p class="eq">V = IR + K<sub>e</sub>&omega;, T = K<sub>t</sub>I, P = T&omega;</p>
<p>On a 24 V bus with K<sub>e</sub> = K<sub>t</sub> = 0.050 and R = 1.2 &Omega;, at 3000 rpm the back EMF is already 15.7 V, so only 8.3 V is left to push current, 6.9 A, 0.35 N&middot;m. The stall number on the data sheet is irrelevant up there.</p>
<p>Three sizing checks to name without being asked:</p>
<ul>
<li><strong>Peak versus continuous.</strong> Continuous rating is a thermal limit set by I<sup>2</sup>R in the windings. Compare the <em>RMS</em> torque over the whole duty cycle, dwell included, against the continuous rating; compare the highest instantaneous torque against the peak rating.</li>
<li class="eq">T<sub>rms</sub> = &radic;(&Sigma;T<sub>i</sub><sup>2</sup>t<sub>i</sub> / &Sigma;t<sub>i</sub>)</li>
<li><strong>Inertia matching.</strong> A gearbox divides reflected load inertia by the <em>square</em> of the ratio, J<sub>ref</sub> = J<sub>L</sub>/N<sup>2</sup>. That N<sup>2</sup> is the factor candidates drop. A ratio under about 10:1 on a heavy load usually gives a tunable axis; 50:1 mismatch does not.</li>
<li><strong>Deadband, backlash, and stiction.</strong> Lost motion makes error depend on approach direction; stiction plus integral action makes a slow limit cycle that no amount of retuning removes.</li>
</ul>`,
      },
    ],
    equations: [
      { name: "Loop error", formula: "<p>e = r &minus; y</p>", note: "r is setpoint, y is the measured output. Feedback only controls the quantity the sensor actually sees." },
      { name: "PID control", formula: "<p>u = K<sub>p</sub>e + K<sub>i</sub>&int;e dt + K<sub>d</sub>de/dt</p>", note: "P gives stiffness, I removes steady-state error at the cost of phase lag, D gives damping at the cost of noise amplification." },
      { name: "Phase margin", formula: "<p>PM = 180&deg; + &ang;L(j&omega;<sub>gc</sub>)</p>", note: "Extra phase lag the loop can absorb at gain crossover before instability. Target 45&ndash;60&deg; for a servo." },
      { name: "Phase cost of delay", formula: "<p>&phi; = &minus;360&deg; &middot; f &middot; T</p>", note: "T is total loop delay (sensor + bus + compute + hold). 2 ms costs 36&deg; at 50 Hz. The number nobody puts on a data sheet." },
      { name: "First-order lag phase", formula: "<p>&phi; = &minus;arctan(f/f<sub>c</sub>)</p>", note: "Phase lag of a sensor or RC filter of cutoff f<sub>c</sub>. Why the 10&times; sensor-bandwidth rule exists: f/f<sub>c</sub> = 0.1 costs 5.7&deg;." },
      { name: "Alias fold", formula: "<p>f<sub>alias</sub> = |f &minus; k f<sub>s</sub>|</p>", note: "k is the integer that lands the result in 0 to f<sub>s</sub>/2. Prevented only by an analog filter ahead of the ADC." },
      { name: "RMS torque", formula: "<p>T<sub>rms</sub> = &radic;(&Sigma;T<sub>i</sub><sup>2</sup>t<sub>i</sub> / &Sigma;t<sub>i</sub>)</p>", note: "Compare to the motor's continuous rating; the dwell time counts in the denominator." },
      { name: "Reflected inertia", formula: "<p>J<sub>ref</sub> = J<sub>L</sub>/N<sup>2</sup></p>", note: "N is the reduction ratio. The square is the term candidates forget; inertia ratio J<sub>ref</sub>/J<sub>motor</sub> under about 10 is comfortably tunable." },
      { name: "Motor electrical balance", formula: "<p>V = IR + K<sub>e</sub>&omega;, T = K<sub>t</sub>I</p>", note: "Back EMF K<sub>e</sub>&omega; is why available torque collapses at high speed on a fixed bus voltage." },
      { name: "Full-bridge output", formula: "<p>V<sub>o</sub> = V<sub>ex</sub> &middot; GF &middot; &epsilon;</p>", note: "Four active gages, opposite arms strained the same sign. Uniform temperature change cancels; a quarter bridge does not cancel it." },
    ],
    interviewTips: [
      "Draw the loop before you answer: setpoint, controller, drive, mechanics, sensor, and the delay in the feedback path. Most controls answers fall out of that sketch.",
      "Ask where the sensor sits relative to the load. Motor-side feedback plus backlash is the single most common mechatronics failure and it never shows up in the encoder data.",
      "Quote the phase budget, not adjectives: 2 ms of delay is 36 degrees at 50 Hz, and a 45-60 degree phase margin is the target.",
      "Name the ceiling before naming a bandwidth. The first structural mode, not the motor data sheet, usually decides what the loop can do.",
      "Size actuators on RMS torque over the whole duty cycle including dwell, and check reflected inertia with the N-squared term.",
      "Treat anti-aliasing as an analog, pre-ADC problem. If someone proposes fixing aliasing in firmware, that is the answer they are testing for.",
    ],
  },
  questions: [
    {
      id: "controls-instrumentation-q01",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A packaging conveyor runs a DC gearmotor at a fixed PWM duty that was trimmed on the bench to give 0.50 m/s. In production, belt speed sags to about 0.44 m/s whenever a heavy tote lands, then recovers as the tote leaves. Which change actually holds speed under the varying load?</p>`,
      figure: figLoop,
      choices: [
        "Raise the fixed PWM duty by 12% so the loaded speed comes back to 0.50 m/s",
        "Add an encoder or tachometer and close a speed loop around the drive",
        "Fit a heavier flywheel so stored inertia carries the belt through the load step",
        "Move to a higher supply voltage, which raises the no-load speed of the motor",
      ],
      answer: 1,
      explanation: `<p>The symptom is load-dependent droop, so the fix has to be something that reacts to load. Only feedback does that: measure speed, form an error, and let the controller push more current exactly when a tote is on the belt.</p><p>Each distractor is a real mistake. Trimming the duty up by 12% simply moves the problem. The belt now runs fast when empty and still sags when loaded, because open-loop calibration cannot know the load. A flywheel helps the transient at the instant of the load step but does nothing for the sustained droop while the tote is on the belt, and it slows every acceleration. A higher bus voltage raises the no-load speed of the torque&ndash;speed curve, which again changes the calibration point without changing the slope, so the droop per newton-metre is unchanged.</p><p>What does closing the loop cost you? Answer: a sensor, tuning effort, and the risk of oscillation if you push gain past the phase margin the gearbox and filter leave you.</p>`,
    },
    {
      id: "controls-instrumentation-q02",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A servo motor is rated 2.0 N&middot;m continuous torque. What mechanical shaft power does it deliver at 3000 rpm at that torque, in W?</p>`,
      answer: 628,
      unit: "W",
      tolerance: 0.03,
      explanation: `<p>Shaft power is torque times angular speed, so convert rpm to rad/s first. The usual slip is leaving speed in rpm.</p><p class="eq">&omega; = 2&pi;(3000)/60 = 314 rad/s</p><p class="eq">P = T&omega; = 2.0(314) = <strong>628 W</strong></p><p>Two checks worth saying out loud. Electrical input is higher: at, say, 85% combined drive and motor efficiency you are drawing roughly 740 W, and the difference is heat you have to get out of the motor. And "continuous" is a thermal rating, so 628 W is available indefinitely only if the mounting actually sinks the copper and iron loss. A motor bolted to a plastic bracket will not hold its nameplate rating.</p>`,
    },
    {
      id: "controls-instrumentation-q03",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A rotary index table is driven through a 50:1 worm gearbox by a motor carrying a 1000-line incremental encoder decoded on all four edges. What is the ideal table position resolution?</p>`,
      choices: [
        "324.0 arc-seconds per count",
        "25.9 arc-seconds per count",
        "6.48 arc-seconds per count",
        "1.62 arc-seconds per count",
      ],
      answer: 2,
      explanation: `<p>Work in counts per <em>table</em> revolution, not motor revolution. Four-edge decoding gives 1000 &times; 4 = 4000 counts per motor turn, and the 50:1 gearbox means 50 motor turns per table turn:</p><p class="eq">N = 4000 &times; 50 = 200 000 counts per table revolution</p><p class="eq">&Delta;&theta; = 1 296 000 arc-sec / 200 000 = <strong>6.48 arc-sec/count</strong></p><p>Each distractor is one specific slip, and each recomputes exactly: 324.0 arc-sec drops the gearbox (1 296 000/4000), 25.9 arc-sec forgets quadrature and counts 1000 lines per motor turn (1 296 000/50 000), and 1.62 arc-sec applies the &times;4 twice (1 296 000/800 000).</p><p>Then the real interview point: this is resolution at the encoder, propagated through an ideal gearbox. A worm set with 5 arc-minutes of backlash and a transmission error of the same order makes the table's actual repeatability roughly 50&times; worse than the number you just computed. Resolution is what you can report; accuracy is what you can hit.</p>`,
    },
    {
      id: "controls-instrumentation-q04",
      type: "mc",
      difficulty: 1,
      prompt: `<p>You are specifying the servo update rate for a position axis whose target closed-loop bandwidth is 25 Hz. Which sample rate would you put in the requirement?</p>`,
      choices: [
        "50 Hz, which is twice the bandwidth, as the Nyquist rule requires",
        "100 Hz, giving four samples in each bandwidth period",
        "500 Hz to 1 kHz, keeping hold and compute delay small",
        "50 kHz, since a faster sample rate can only help the loop",
      ],
      answer: 2,
      explanation: `<p>Nyquist is a signal-reconstruction bound, not a control bound. A discrete loop pays a zero-order-hold delay of about half a sample period plus one sample of computation, and that delay costs phase at crossover.</p><p>At the 50 Hz "Nyquist" answer, T &asymp; 1.5/50 = 30 ms, so at 25 Hz the phase cost is &minus;360(25)(0.030) = &minus;270&deg;. The loop is not slow, it is unstable. At 500 Hz, T &asymp; 3 ms and the cost is &minus;360(25)(0.003) = &minus;27&deg;, still significant but affordable inside a 45&ndash;60&deg; budget. That is why the working rule is 10&ndash;20&times; the loop bandwidth.</p><p>50 kHz is not wrong physically, but it is the wrong engineering answer: it buys nothing above the mechanical bandwidth while forcing faster hardware, and it makes encoder-difference velocity estimates far noisier because fewer counts land in each sample.</p>`,
    },
    {
      id: "controls-instrumentation-q05",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A team needs a 25 Hz position loop and proposes a displacement sensor whose internal first-order response has a 30 Hz cutoff. What is the strongest objection?</p>`,
      choices: [
        "The sensor resolution will be too coarse for a 25 Hz position loop",
        "The sensor will alias the 25 Hz command down to a lower frequency",
        "The sensor cannot measure any signal below its own cutoff frequency",
        "About 40&deg; of lag at crossover, so specify nearer 250 Hz",
      ],
      answer: 3,
      explanation: `<p>A first-order element of cutoff f<sub>c</sub> contributes phase lag &phi; = &minus;arctan(f/f<sub>c</sub>). At the 25 Hz crossover:</p><p class="eq">&phi; = &minus;arctan(25/30) = &minus;39.8&deg;</p><p>That is most of a 45&ndash;60&deg; phase-margin budget spent on the sensor before the plant, the drive, or the sample-and-hold get a turn. At f/f<sub>c</sub> = 0.1 the lag is only arctan(0.1) = 5.7&deg;, which is affordable, so specify about 250 Hz.</p><p>Resolution and bandwidth are independent specifications: a sensor can be fine-grained and slow. Aliasing is a sampling artefact, not something an analog sensor does to a command.</p>`,
    },
    {
      id: "controls-instrumentation-q06",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A motor winding measures 1.2 &Omega; between terminals and carries 3.0 A RMS continuously. Estimate the copper heating in W.</p>`,
      answer: 10.8,
      unit: "W",
      tolerance: 0.03,
      explanation: `<p>Copper loss is Joule heating, and current appears squared:</p><p class="eq">P = I<sup>2</sup>R = (3.0)<sup>2</sup>(1.2) = 9.0 &times; 1.2 = <strong>10.8 W</strong></p><p>The classic error is 3.0 &times; 1.2 = 3.6 W, which is a factor of three low and would let you sign off a motor that cooks.</p><p>The squaring is why duty cycle dominates motor sizing. Doubling the acceleration torque quadruples the heating during the ramp, so a profile that is comfortable at 3 A becomes a thermal problem at 6 A even if the peak torque rating is fine. Continuous ratings are almost always thermal limits, not magnetic ones, which is why the sizing check is RMS torque over the whole cycle rather than peak torque.</p>`,
    },
    {
      id: "controls-instrumentation-q07",
      type: "mc",
      difficulty: 1,
      prompt: `<p>A vertical proportional-only axis carries a 40 N gravity load and parks 0.4 mm below its commanded height every time, repeatably. You add integral gain and the droop disappears. What did you pay for it?</p>`,
      choices: [
        "Phase lag, so the axis now overshoots and can wind up when saturated",
        "Encoder resolution, because integral action averages counts together",
        "Steady-state stiffness, because integral action reduces effective proportional gain",
        "Sample rate, because the integrator has to run slower than the proportional path",
      ],
      answer: 0,
      explanation: `<p>Proportional control needs a standing error to produce a standing output, so a constant gravity load always leaves a droop of roughly F/(K<sub>p</sub>&times;plant gain). Integral action removes it because the integrator keeps accumulating until the error is zero.</p><p>The cost is phase. An integrator contributes &minus;90&deg; of lag at low frequency, so the phase available at crossover shrinks and the step response picks up overshoot and a slower tail. The second cost is windup: while the drive sits at its current limit, the error does not shrink, so the integrator keeps growing and has to unwind afterwards, which is why anti-windup clamping is standard.</p><p>The other options invert the physics. Integral action does not change encoder resolution or sample rate, and it increases low-frequency stiffness rather than reducing it. If you want the droop gone without the phase penalty, the better answer on a gravity axis is a constant torque feedforward or a counterbalance, with integral left small to mop up the remainder.</p>`,
    },
    {
      id: "controls-instrumentation-q08",
      type: "numeric",
      difficulty: 1,
      prompt: `<p>A temperature loop responds to a small setpoint step like a first-order lag with time constant &tau; = 0.80 s. How long until it reaches 90% of the final change, in s?</p>`,
      answer: 1.84,
      unit: "s",
      tolerance: 0.03,
      explanation: `<p>For a first-order step the remaining error decays as e<sup>&minus;t/&tau;</sup>, and 90% complete means 10% remaining:</p><p class="eq">0.10 = e<sup>&minus;t/&tau;</sup> &rarr; t = &minus;&tau; ln(0.10) = 2.303&tau;</p><p class="eq">t = 2.303(0.80) = <strong>1.84 s</strong></p><p>The memorised 3&tau; rule gives 2.4 s, which is the 95% number and a 30% overestimate. Worth carrying: 1&tau; = 63%, 2.3&tau; = 90%, 3&tau; = 95%, 5&tau; = 99%.</p>`,
    },
    {
      id: "controls-instrumentation-q09",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A strain channel picks up mains hum at 60 Hz. The data logger samples that channel at 100 Hz with no analog filter ahead of the converter. At what frequency does the hum appear in the recorded trace, in Hz?</p>`,
      answer: 40,
      unit: "Hz",
      tolerance: 0.03,
      explanation: `<p>Nyquist for a 100 Hz sample rate is 50 Hz, so 60 Hz cannot be represented and folds back:</p><p class="eq">f<sub>alias</sub> = |f<sub>s</sub> &minus; f| = |100 &minus; 60| = <strong>40 Hz</strong></p><p>Over a 50 ms window the true 60 Hz signal completes three cycles, and the six samples taken every 10 ms also lie exactly on a 40 Hz sine. Both curves pass through every sample point, which is why no amount of post-processing can separate them.</p><p>By the time the firmware sees the data the hum <em>is</em> 40 Hz and sits inside the passband, so a digital 45 Hz low-pass changes nothing. The fix is an analog filter before the ADC, or sampling above 120 Hz.</p>`,
    },
    {
      id: "controls-instrumentation-q10",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A shop-air compressor runs on a pressure switch: it starts at 6.5 bar, stops at 8.0 bar, and under normal demand it starts about 6 times an hour. To hold supply pressure tighter, maintenance narrows the switch to start at 7.6 bar and stop at 8.0 bar. Regulation does improve, but within a week the motor is tripping on thermal overload. What is the correct reading?</p>`,
      choices: [
        "Starts per hour scale as 1/band, so the narrower band nearly quadruples them",
        "Duty cycle rose with the band, so the motor now runs a larger share of every hour",
        "Average discharge pressure rose, so shaft power and motor heating climbed with it",
        "The switch chatters inside the narrow band, so the starter contactor misfires",
      ],
      answer: 0,
      explanation: `<p>The receiver is the buffer, and what it stores between the two switch pressures is proportional to the pressure band. With demand roughly constant, the time to draw the receiver down from stop pressure to start pressure is proportional to that band, so the cycle rate goes as 1/&Delta;p:</p><p class="eq">&Delta;p: 8.0 &minus; 6.5 = 1.5 bar &rarr; 8.0 &minus; 7.6 = 0.4 bar</p><p class="eq">starts/h = 6 &times; (1.5/0.4) = 6 &times; 3.75 = <strong>22.5 per hour</strong></p><p>That is the whole failure. A motor of this size is rated in starts per hour. Typically 6 to 12, because each start draws five to seven times full-load current for the run-up, and the winding needs the run time between starts to shed that heat. At 22 starts an hour it never gets it, and the overload does exactly what it is there for.</p><p>The distractor worth arguing about is duty cycle. Run-time fraction is set by demand divided by compressor capacity, not by the switch band: narrowing the band changes how <em>often</em> the machine cycles, not what share of the hour it runs. Higher average discharge pressure is real but second order, a few percent on shaft power, nothing like a thermal trip.</p><p>The fixes follow from the same relation: put the band back and get tight regulation from a downstream regulator where it belongs, or add receiver volume (doubling V halves the starts at any band), or fit a variable-speed drive that modulates instead of cycling.</p>`,
    },
    {
      id: "controls-instrumentation-q11",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A servo drive PWMs a motor winding at 20 kHz from a 48 V bus. The winding inductance is 2.0 mH, and over one switching period the resistive drop is small enough to ignore. At 50% duty into a stalled motor, estimate the peak-to-peak current ripple in A.</p>`,
      answer: 0.3,
      unit: "A",
      tolerance: 0.05,
      explanation: `<p>Current in an inductor ramps at dI/dt = V<sub>L</sub>/L, so find the voltage actually across the inductance and the time it is applied. At 50% duty the winding sees a 24 V average, so during the on-time the net driving voltage is 48 &minus; 24 = 24 V:</p><p class="eq">t<sub>on</sub> = D/f<sub>sw</sub> = 0.50/20 000 = 25 &mu;s</p><p class="eq">&Delta;I = V<sub>L</sub>t<sub>on</sub>/L = 24(25&times;10<sup>&minus;6</sup>)/0.0020 = <strong>0.30 A</strong></p><p>The general form is &Delta;I = V<sub>bus</sub>D(1 &minus; D)/(L f<sub>sw</sub>) = 48(0.25)/(0.0020 &times; 20 000) = 0.30 A, and the D(1 &minus; D) term says the worst case is exactly the 50% duty asked for. The common slip is putting the full 48 V across the inductance and reporting 0.60 A, double the truth.</p><p>Ripple is invisible in the average current the drive reports, but it is real I<sup>2</sup>R and iron loss, it is where the audible whine comes from, and it decides when the current-sense ADC may sample. Take the sample at the PWM centre, at mid-ripple, or you read a value half a ripple off. The levers are proportional: 10 kHz switching doubles it to 0.60 A, and adding series inductance cuts it in the same ratio.</p>`,
    },
    {
      id: "controls-instrumentation-q12",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A test engineer needs to capture a 50 Hz shaker sine and sets the acquisition to exactly 100 Sa/s, citing Nyquist. On the first run the recorded amplitude looks correct; on the second run, same shaker settings, the trace is nearly flat. What explains it?</p>`,
      choices: [
        "The shaker amplitude actually changed between the first and second runs",
        "The second-run samples fell below one ADC count and were quantized away",
        "The analyzer&apos;s own digital filter removed the tone on the second run",
        "At exactly 2f the sample phase decides the recorded amplitude",
      ],
      answer: 3,
      explanation: `<p>Sampling at exactly twice the signal frequency puts every sample at the same phase of the sine. If that phase happens to be the peaks, you recover full amplitude; if it happens to be the zero crossings, you record a row of zeros. Anything in between gives an amplitude between the two. Nothing about the signal changed, only the arbitrary phase relationship between the shaker and the acquisition clock.</p><p>This is why Nyquist is stated as a strict inequality, f<sub>s</sub> &gt; 2f<sub>max</sub>, and why the practical rule is 5&ndash;10&times; oversampling for any trace you plan to look at or integrate. At 500 Sa/s the same 50 Hz sine is sampled ten times per cycle and the amplitude is stable regardless of phase.</p><p>The distractors are all plausible lab explanations you should be able to rule out quickly: check the drive signal for the amplitude claim, check the raw counts for quantization, and check the analyzer's configured filter cutoff. Here the tell is that the outcome flips between nominally identical runs, which points to a phase-dependent artefact rather than a physical change.</p>`,
    },
    {
      id: "controls-instrumentation-q13",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You inherit a belt-driven pick-and-place axis with these measured numbers: drive current loop 1 kHz, servo update 2 kHz, encoder plus its filter good to 200 Hz, and a hammer test showing the first structural mode at 60 Hz with very light damping. Which number caps the achievable position-loop bandwidth?</p>`,
      figure: figBandwidth,
      choices: [
        "The 2 kHz servo update, via zero-order-hold delay",
        "The 60 Hz structural mode, giving roughly 6 to 12 Hz",
        "The 200 Hz sensor bandwidth, giving roughly 20 Hz",
        "The 1 kHz current loop, giving roughly 100 Hz",
      ],
      answer: 1,
      explanation: `<p>Rank the elements by the bandwidth each one permits and take the smallest. The 2 kHz update allows perhaps 100&ndash;200 Hz; the 1 kHz current loop allows roughly 100 Hz; the 200 Hz sensor allows about 20 Hz under the 10&times; rule. The lightly damped 60 Hz mode allows only 6&ndash;12 Hz for an ordinary PID, because a plain loop has to close well below the first resonance or it will excite it.</p><p>So the mechanics win, by a factor of two over the next-worst element. This is the usual outcome and it is why quoting the motor or drive data sheet is the wrong instinct.</p><p>What if 30 Hz is a hard requirement? Then you change the ceiling, not the gains. Stiffer belt or a direct-drive screw, less moving mass, added damping, load-side feedback, or a notch at 60 Hz with the model risk that a notch implies when the payload changes and the mode moves.</p>`,
    },
    {
      id: "controls-instrumentation-q14",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A precision stage behaves like a 20 kg moving mass on a support stiffness of 80 kN/m. Using the rule that a plain PID position loop should close at about one fifth of the first mode, what closed-loop bandwidth would you target, in Hz?</p>`,
      answer: 2.01,
      unit: "Hz",
      tolerance: 0.05,
      explanation: `<p>First find the mode, then apply the separation rule.</p><p class="eq">f<sub>n</sub> = (1/2&pi;)&radic;(k/m) = (1/2&pi;)&radic;(80000/20)</p><p class="eq">&radic;4000 = 63.2 rad/s &rarr; f<sub>n</sub> = 63.2/6.283 = 10.1 Hz</p><p class="eq">f<sub>BW</sub> &asymp; f<sub>n</sub>/5 = 10.1/5 = <strong>2.01 Hz</strong></p><p>Two Hz sounds embarrassingly slow, and that is the useful part of the answer: a 20 kg mass on 80 kN/m is a soft machine, and no controller fixes soft. If the application needs 10 Hz, the honest path is stiffness. Going to 800 kN/m moves the mode to 31.8 Hz and permits about 6.4 Hz, and halving the moving mass on top of that gets you to 9 Hz.</p><p>Check the rule itself. At one fifth of the mode, the resonance sits 14 dB up in frequency from crossover, so its phase contribution at crossover is small and a modest phase margin survives. Push crossover to the mode itself and a lightly damped peak with 180&deg; of phase swing is sitting exactly where you can least afford it.</p>`,
    },
    {
      id: "controls-instrumentation-q15",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A servo axis was stable at K<sub>p</sub> = 8. At K<sub>p</sub> = 14 it holds position but hums, and a scope on the current command shows a clean, sustained 55 Hz sine that never decays. A hammer test on the same axis found a mode at 58 Hz. Which cause fits the evidence best?</p>`,
      choices: [
        "Crossover moved up into the lightly damped 58 Hz mode, losing the margin",
        "The integrator wound up during the last saturated move and has not unwound",
        "The encoder is quantizing and producing a limit cycle at the sample rate",
        "The higher gain reduced the effective plant inertia, raising the natural frequency",
      ],
      answer: 0,
      explanation: `<p>Match the signature. A sustained, clean sine at a fixed frequency that coincides with a known structural mode is a phase-margin failure at that mode: raising K<sub>p</sub> pushed gain crossover up to where the resonance contributes a large, fast phase swing, and the margin went to zero.</p><p>The other three each have a different fingerprint, which is why they are worth learning as a set. Windup produces a slow, one-sided overshoot after a saturated move, not a continuous oscillation. Encoder-quantization limit cycles are small in amplitude, appear at low speed, and typically sit near a fraction of the sample rate rather than at a mechanical frequency. And gain does not change inertia. The mode is a property of the mass and stiffness, which is exactly why it stayed at 58 Hz while the loop changed.</p><p>The fix follows from the diagnosis: back the gain off, add a notch at 58 Hz if the mode is stable and repeatable, or raise the mode by stiffening the transmission. Confirm by re-running the frequency response and reading phase margin at the new crossover rather than by ear.</p>`,
    },
    {
      id: "controls-instrumentation-q16",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A pressure loop with 45&deg; of phase margin at a 12 Hz crossover was noisy, so the team inserted a first-order 15 Hz low-pass on the transducer signal. Noise dropped, and the loop now overshoots and rings where it used to settle cleanly. What happened?</p>`,
      choices: [
        "The filter attenuated the pressure signal, so the loop gain fell and response slowed",
        "The filter cost about 39&deg; of phase at crossover, leaving roughly 6&deg;",
        "The filter aliased high-frequency noise down into the control band",
        "The filter delayed the setpoint, creating a step the loop cannot track",
      ],
      answer: 1,
      explanation: `<p>Compute the phase the filter takes at the frequency where it matters:</p><p class="eq">&phi; = &minus;arctan(f/f<sub>c</sub>) = &minus;arctan(12/15) = &minus;38.7&deg;</p><p class="eq">PM<sub>new</sub> &asymp; 45&deg; &minus; 38.7&deg; = 6.3&deg;</p><p>Six degrees of margin is a loop on the edge, which is exactly what a ringing step response looks like. Filtering is never free: every pole you add to the feedback path buys attenuation with phase.</p><p>The magnitude effect exists but is minor here, at 12 Hz a 15 Hz single pole attenuates by only 2 dB, nowhere near enough to explain the behaviour change, and lower loop gain would make the loop more sluggish rather than more oscillatory. Aliasing is a sampling phenomenon and an analog filter prevents it rather than causing it.</p><p>The repair options: move the cutoff to 100&ndash;120 Hz (10&times; crossover, roughly 6&deg;) and accept less noise reduction, attack the noise at the source with shielding and differential wiring, or keep the filter and re-tune to a lower crossover so the phase budget balances again.</p>`,
    },
    {
      id: "controls-instrumentation-q17",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A jacket-heater temperature controller runs a textbook PID at a 100 ms update. Every time an operator types a new setpoint &mdash; even a 1 &deg;C change &mdash; the heater output slams to 100% for a fraction of a second before settling back. Disturbance rejection and steady-state accuracy are both excellent. What is happening?</p>`,
      choices: [
        "Derivative is acting on the error, so a setpoint step is differentiated into a spike",
        "The integrator has wound up and dumps its stored command at the setpoint change",
        "Setpoint entry is quantized, so the controller sees a burst of small steps",
        "The measurement path is aliasing the step into a short high-frequency transient",
      ],
      answer: 0,
      explanation: `<p>The derivative term differentiates whatever it is given, and if it is given e = r &minus; y then a typed setpoint change is a step, whose derivative is an impulse. Put numbers on it: with a derivative time T<sub>d</sub> = 20 s and proportional gain 5%/&deg;C, a 1 &deg;C step arriving inside one 100 ms sample makes de/dt = 10 &deg;C/s, so the D term alone asks for</p><p class="eq">K<sub>p</sub>T<sub>d</sub>(de/dt) = 5 &times; 20 &times; 10 = 1000%</p><p>which pins the output for exactly one sample and then vanishes. That is derivative kick, and the timing is the fingerprint: it is tied to the operator's keystroke, not to a load change or a saturated move.</p><p>The fix is a one-line change of structure, not of gains: take the derivative of the <em>measurement</em> instead of the error, u<sub>d</sub> = &minus;K<sub>p</sub>T<sub>d</sub>(dy/dt). For disturbances and for steady state the two forms are identical, because y and e differ only by the constant r; for setpoint changes the kick is gone. Ramping the setpoint instead of stepping it, or the ISA form's setpoint-weighting terms, do the same job.</p><p>Rule out the others on evidence. Windup follows a <em>saturated move</em> and shows up as a slow one-sided overshoot, not a sub-second spike on a 1 &deg;C change. Quantized setpoint entry would produce a train of spikes, not one. And aliasing lives on the measurement path at the ADC. An operator keystroke never goes near it.</p>`,
    },
    {
      id: "controls-instrumentation-q18",
      type: "mc",
      difficulty: 2,
      prompt: `<p>Velocity for a servo is computed by differencing encoder position each sample. After derivative gain is raised, the motor sings audibly and draws ripple current while the load itself barely moves. What is the correct response?</p>`,
      choices: [
        "Raise derivative gain further so the noise averages out over each cycle",
        "Remove the drive current limit so the motor follows the velocity command",
        "Filter the velocity estimate, fix the wiring, and re-tune for the added lag",
        "Reduce encoder resolution so the difference changes less per sample",
      ],
      answer: 2,
      explanation: `<p>Differencing amplifies high-frequency content: one count of jitter across a 1 ms sample looks like a large velocity spike, and derivative gain multiplies it straight into the current command. The audible tone with almost no load motion is the classic signature. The energy is going into the winding, not the payload.</p><p>The correct response attacks the estimate and the signal quality together: low-pass the velocity path or estimate over a longer window, then re-tune, because that filter costs phase (a 100 Hz pole at a 10 Hz crossover is about 6&deg;; a 20 Hz pole is about 27&deg;). In parallel, fix what is injecting the jitter, shielded encoder cable routed away from motor leads, differential line receivers, solid grounding, and a check for encoder mounting runout.</p><p>The distractors are real mistakes candidates make. More derivative gain makes the command spikes larger, not smoother. Removing the current limit lets the drive deliver the noise-driven current it was safely clipping. And coarsening the encoder makes velocity quantization worse, not better. Fewer counts per sample means a blockier estimate.</p>`,
    },
    {
      id: "controls-instrumentation-q19",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A gantry tracks a 200 mm/s constant-velocity segment with a steady 3 mm following error. Raising integral gain removes the error but makes the axis ring at every corner. What is the right fix?</p>`,
      choices: [
        "Increase derivative gain to damp the ringing that the integrator caused",
        "Reduce the commanded velocity so the following error falls proportionally",
        "Widen the position tolerance band so the error is accepted as within spec",
        "Add velocity feedforward, commanding the drive from the trajectory",
      ],
      answer: 3,
      explanation: `<p>A following error proportional to velocity means feedback is being asked to do a job it is bad at. A P-type loop needs error to produce output, so at constant velocity it must sit 3 mm behind to generate the drive command that keeps the axis moving. Integral action eventually erases that error, but it does so by accumulating, which adds lag and makes the transitions at corners overshoot.</p><p>Feedforward removes the cause. The trajectory generator already knows the commanded velocity, so send K<sub>vff</sub>&middot;v straight to the drive and let feedback correct only the residual disturbance. Tune it by watching following error on a constant-velocity segment and raising K<sub>vff</sub> until the error collapses; add acceleration feedforward if the error appears during the ramps rather than the cruise.</p><p>The distractors are the three usual dodges: more derivative gain treats a symptom and amplifies noise, slowing the machine surrenders throughput to avoid the engineering, and loosening the tolerance is a specification change dressed up as a fix. The question is whether you reach for feedforward or keep twisting PID knobs.</p>`,
    },
    {
      id: "controls-instrumentation-q20",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A bending beam carries a full Wheatstone bridge of four active 350 &Omega; foil gages, gage factor 2.0, excited at 10 V. At 500 &mu;&epsilon; surface strain, what is the bridge output in mV?</p>`,
      answer: 10,
      unit: "mV",
      tolerance: 0.03,
      explanation: `<p>For a full bridge with four active gages, two strained positive and two negative in opposite arms, the fractional imbalances add:</p><p class="eq">&Delta;R/R = GF &middot; &epsilon; = 2.0(500&times;10<sup>&minus;6</sup>) = 1.0&times;10<sup>&minus;3</sup></p><p class="eq">V<sub>o</sub> = V<sub>ex</sub> &middot; GF &middot; &epsilon; = 10(1.0&times;10<sup>&minus;3</sup>) = 0.010 V = <strong>10.0 mV</strong></p><p>A quarter bridge gives one quarter of this (V<sub>o</sub> = V<sub>ex</sub>&middot;GF&middot;&epsilon;/4 = 2.5 mV), and forgetting that 500 &mu;&epsilon; means 500&times;10<sup>&minus;6</sup> gives an answer 10<sup>6</sup> out. The 350 &Omega; value never enters the ratio. It sets excitation current (10 V/700 &Omega; = 14 mA per branch) and therefore self-heating, not sensitivity.</p><p>Ten millivolts on a 10 V supply is a 0.1% imbalance, which is why the next block is always an instrumentation amplifier of gain 100&ndash;500 and why bridge excitation stability, lead resistance, and thermal EMFs all matter more than ADC bits.</p>`,
    },
    {
      id: "controls-instrumentation-q21",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A load cell must hold zero within 0.1% of full scale while its housing swings over 40&deg;C. Why does a four-active-gage full bridge handle this far better than a single-gage quarter bridge?</p>`,
      choices: [
        "A uniform temperature change shifts all four arms alike, so it cancels",
        "Full bridges draw less excitation current, so the gages self-heat less",
        "Full bridges use lower gage factor foil, inherently less temperature sensitive",
        "The extra gages average four independent noise sources, cutting drift fourfold",
      ],
      answer: 0,
      explanation: `<p>The bridge output depends on ratios of arm resistances. Uniform heating changes every gage's resistance by the same fractional amount, through both the foil's temperature coefficient and the substrate's thermal expansion, so the ratios are unchanged and the output does not move. In a quarter bridge, only one arm moves, and that thermal &Delta;R/R is indistinguishable from strain. On typical constantan foil it is worth tens of &mu;&epsilon; per &deg;C unless you use self-temperature-compensated gages matched to the substrate.</p><p>The distractors are each wrong for a specific reason worth knowing. A full bridge draws <em>more</em> total current, not less, since both branches are loaded. Gage factor is a property of the foil alloy, not of how many gages you wire. And thermal drift is a common-mode systematic shift, not four independent random noise sources, so averaging arguments do not apply.</p><p>What a full bridge does <em>not</em> reject is a thermal <em>gradient</em>. If one side of the flexure is warmer, the arms no longer track and you get real apparent strain, which is why load cells use symmetric flexures, isothermal blocks, and a specified warm-up time.</p>`,
    },
    {
      id: "controls-instrumentation-q22",
      type: "mc",
      difficulty: 2,
      prompt: `<p>You must monitor 100 cell temperatures in a battery pack over 0 to 60&deg;C with &plusmn;0.5&deg;C absolute accuracy, on a cost-sensitive product. Which sensor family fits, and why?</p>`,
      choices: [
        "Type-K thermocouples, because they are cheap and need only two wires per channel",
        "NTC thermistors, cheap per channel with high sensitivity over a narrow span",
        "Platinum RTDs, because 100 channels demand the best linearity available here",
        "Infrared spot sensors, because non-contact measurement avoids cell instrumentation",
      ],
      answer: 1,
      explanation: `<p>Match the sensor to the span and the budget. The span here is narrow (60&deg;C) and near ambient, which is exactly where thermistors win: several percent resistance change per &deg;C means &plusmn;0.5&deg;C needs no precision front end, parts cost cents, and interchangeable grades hold &plusmn;0.2&deg;C without individual calibration. Nonlinearity is real but irrelevant. It is corrected by a lookup table computed once.</p><p>Thermocouples are the wrong tool at these temperatures: roughly 40 &mu;V/&deg;C means &plusmn;0.5&deg;C is &plusmn;20 &mu;V, and every channel needs its own cold-junction reference. Delivering that 100 times over inside a warm pack, where the terminal block sits in a gradient, is the hardest version of this problem. RTDs would meet the accuracy easily but cost far more per channel and need three- or four-wire connections to beat lead resistance. That is 300&ndash;400 wires. Infrared misses entirely: it reads a surface whose emissivity varies with the cell wrap, and cells inside a pack are not in line of sight.</p><p>How do you get 100 channels into one ADC? Analog multiplexer plus a shared precision reference resistor, so that the reference error is common to all channels and cell-to-cell <em>differences</em>, which is what thermal management actually cares about, come out far better than the absolute spec.</p>`,
    },
    {
      id: "controls-instrumentation-q23",
      type: "mc",
      difficulty: 2,
      prompt: `<p>A pressure transmitter sits 30 m from the control cabinet in a plant with VFD-driven pumps. Its 0&ndash;10 V single-ended output shows a wandering offset and switching-frequency hash. Which change fixes the root cause?</p>`,
      choices: [
        "Add a 1 Hz digital low-pass in the PLC so the wander averages out",
        "Increase the ADC from 12 to 16 bits to resolve the signal under the noise",
        "Convert the loop to a 4&ndash;20 mA current signal in a shielded twisted pair",
        "Run a second 0&ndash;10 V cable in parallel and average the two readings",
      ],
      answer: 2,
      explanation: `<p>There are two independent problems, and a current loop solves both. The wandering offset is a ground-potential difference: a single-ended voltage is referenced to the sensor's ground, and 30 m of plant with VFDs guarantees the two ground points differ by volts. The hash is capacitively and inductively coupled switching noise. A 4&ndash;20 mA loop is immune to the first because current is unchanged by series voltage offsets, and largely immune to the second because the loop is low-impedance and a twisted pair makes the pickup common-mode; it also gives a live zero, so a broken wire reads 0 mA and is detectable rather than looking like zero pressure. A differential voltage input with a good instrumentation amplifier is the acceptable alternative if you must stay with voltage.</p><p>The distractors treat symptoms. A 1 Hz filter destroys the transmitter's response, and averaging does not remove a ground offset because that offset is not zero-mean. More ADC bits resolve the noise more finely. The signal-to-noise ratio is unchanged. Two parallel cables in the same tray pick up the same interference, so averaging them gains almost nothing.</p>`,
    },
    {
      id: "controls-instrumentation-q24",
      type: "numeric",
      difficulty: 2,
      prompt: `<p>A rotary axis has load inertia 0.050 kg&middot;m<sup>2</sup> driven through a 10:1 gearbox by a motor of rotor inertia 2.0&times;10<sup>&minus;4</sup> kg&middot;m<sup>2</sup>. What is the inertia ratio seen at the motor shaft (reflected load inertia divided by rotor inertia)?</p>`,
      answer: 2.5,
      tolerance: 0.03,
      explanation: `<p>A reduction gearbox divides reflected inertia by the <em>square</em> of the ratio. That square is the term candidates drop.</p><p class="eq">J<sub>ref</sub> = J<sub>L</sub>/N<sup>2</sup> = 0.050/10<sup>2</sup> = 5.0&times;10<sup>&minus;4</sup> kg&middot;m<sup>2</sup></p><p class="eq">ratio = J<sub>ref</sub>/J<sub>m</sub> = 5.0&times;10<sup>&minus;4</sup>/2.0&times;10<sup>&minus;4</sup> = <strong>2.5</strong></p><p>Dividing by N instead of N<sup>2</sup> gives 25, which would look untunable and might send you shopping for a bigger motor you do not need. Direct drive would be 0.050/2.0&times;10<sup>&minus;4</sup> = 250:1, which is genuinely hard.</p><p>What the number means: at 2.5:1 the loop is comfortably tunable and load disturbances are well attenuated at the motor, so a stiff position loop is realistic. Ratios below about 10:1 are generally fine; above 30:1 the motor struggles to see and reject what the load is doing. The catch is that the gearbox that bought you the good ratio also brought backlash and torsional compliance, so check what the ratio bought you against what the lost motion costs.</p>`,
    },
    {
      id: "controls-instrumentation-q25",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A brushed DC motor has K<sub>t</sub> = K<sub>e</sub> = 0.050 (SI units) and 1.2 &Omega; terminal resistance, running from a 24 V bus. What is the maximum torque it can produce at 3000 rpm, in N&middot;m?</p>`,
      answer: 0.346,
      unit: "N*m",
      tolerance: 0.03,
      explanation: `<p>At speed, back EMF consumes bus voltage and only the remainder can drive current.</p><p class="eq">&omega; = 2&pi;(3000)/60 = 314 rad/s</p><p class="eq">V<sub>b</sub> = K<sub>e</sub>&omega; = 0.050(314) = 15.7 V</p><p class="eq">I = (V &minus; V<sub>b</sub>)/R = (24 &minus; 15.7)/1.2 = 6.91 A</p><p class="eq">T = K<sub>t</sub>I = 0.050(6.91) = <strong>0.346 N&middot;m</strong></p><p>Compare with stall: at zero speed the full 24 V pushes 20 A and 1.0 N&middot;m. So two thirds of the nameplate torque has already vanished at 3000 rpm, purely from voltage headroom. That is the shape of the torque&ndash;speed line, and it is why a motion profile that accelerates hard at low speed can fail to hold the same acceleration near top speed.</p><p>Two caveats to state in an interview. This is the <em>electrical</em> limit; 6.91 A may still exceed the drive's current limit or the winding's continuous thermal rating (at 1.2 &Omega; it is 57 W of copper loss), so the usable number can be lower. And a real drive with PWM loses another volt or two in switches and cabling, which moves the no-load speed of 480 rad/s (4580 rpm) down a few percent.</p>`,
    },
    {
      id: "controls-instrumentation-q26",
      type: "mc",
      difficulty: 3,
      prompt: `<p>An engine-bay actuator needs shaft angle over &plusmn;90&deg; with 0.5&deg; accuracy. Ambient reaches 150&deg;C with oil mist, broadband vibration to 20 g, and the position must be valid the instant power comes up. Which feedback device would you specify?</p>`,
      choices: [
        "A resolver, which is absolute, wire-wound, and survives the temperature and vibration",
        "An optical incremental encoder with an index pulse and a homing move at power-up",
        "A conductive-plastic potentiometer, absolute and inexpensive with no electronics at the shaft",
        "A Hall-effect commutation sensor set, solid state and inherently vibration tolerant",
      ],
      answer: 0,
      explanation: `<p>Take the constraints in order and let them eliminate. "Valid the instant power comes up" kills anything incremental. An encoder with an index pulse needs a homing move, which you cannot do to a throttle or wastegate on a cold start. 150&deg;C with oil mist kills optical devices outright: LEDs degrade, glass or film discs and their local electronics are not rated there, and mist on a disc is fatal. That leaves absolute, rugged options.</p><p>A potentiometer is absolute and cheap but has a rubbing wiper, which under 20 g broadband vibration and oil mist wears, bounces, and goes noisy. It is the classic warranty return in that environment. Hall commutation sensors give 60&deg; electrical sectors, nowhere near 0.5&deg;.</p><p>A resolver is the standard answer for exactly this specification: transformer-wound copper and steel with no electronics at the shaft, routinely rated to 200&deg;C and beyond, absolute within one turn, and its ratiometric sine/cosine output rejects amplitude drift. The costs are honest. It needs excitation and a resolver-to-digital converter, and it is bulkier and more expensive than an encoder. In a cool, clean cabinet, an absolute optical encoder would be the better and cheaper choice; the environment is what decides.</p>`,
    },
    {
      id: "controls-instrumentation-q27",
      type: "mc",
      difficulty: 3,
      prompt: `<p>A 25 Hz position loop written in application code on a general-purpose OS shows position error that is small at rest and grows with commanded speed, looking like random noise on the trace. The identical gains on the identical hardware behave perfectly when the same code is driven from a hardware timer interrupt. A log of loop periods shows values scattered between 0.6 and 1.9 ms around a 1.0 ms nominal. What is the mechanism?</p>`,
      choices: [
        "The mean loop period has risen, so the axis is simply running slower than its 1 kHz nominal",
        "Jitter randomises dt, so both the velocity estimate and the loop phase wander",
        "The encoder drops counts whenever a loop period stretches past one millisecond",
        "The stretched periods alias the structural mode down into the position error trace",
      ],
      answer: 1,
      explanation: `<p>Timing jitter injures the loop twice, and the two injuries explain both observations.</p><p>First the estimate. Velocity is computed as &Delta;counts/&Delta;t, and the code divides by the nominal 1.0 ms while the true interval is anywhere from 0.6 to 1.9 ms. A sample that actually took 1.9 ms reports 90% too much velocity; one that took 0.6 ms reports 40% too little. The encoder is perfect throughout. The error is entirely in the denominator, and because &Delta;counts scales with speed while the timing error does not, the resulting noise grows with speed exactly as the trace shows.</p><p>Second the phase. The loop's transport delay is now a random variable, and at a 25 Hz crossover a &plusmn;0.9 ms swing is worth</p><p class="eq">&Delta;&phi; = &minus;360&deg;f&Delta;T = &minus;360(25)(0.0009) = &plusmn;8.1&deg;</p><p>of phase margin wandering in and out on top of the nominal 1.5-sample hold. A margin that measures 45&deg; on a Bode plot is really 45 &plusmn; 8&deg;, and the worst case is what decides stability.</p><p>The others do not fit. A slower <em>mean</em> period would degrade the loop uniformly and would not care about speed. Encoder counting happens in dedicated hardware and is indifferent to what the CPU is doing. And aliasing needs a continuous signal above Nyquist. The decisive evidence here is that nothing mechanical changed, only the scheduling.</p><p>The fix is timing, not gains: run the loop from a hardware timer or a real-time thread. If you genuinely cannot, timestamp every sample and divide by the <em>measured</em> &Delta;t, which recovers the velocity estimate even though the phase uncertainty remains.</p>`,
    },
    {
      id: "controls-instrumentation-q28",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A frequency response test on a servo shows gain crossover at 20 Hz with 60&deg; of phase margin. Your team wants to move the position command onto a shared fieldbus, which will add pure transport delay. How much added delay can the loop absorb before phase margin reaches zero, in ms?</p>`,
      answer: 8.33,
      unit: "ms",
      tolerance: 0.03,
      explanation: `<p>Pure delay costs phase in proportion to frequency and delay, and does nothing to the magnitude, so crossover stays at 20 Hz and the entire 60&deg; margin is available to spend.</p><p class="eq">&phi; = &minus;360&deg; &middot; f &middot; T &rarr; T = &phi;/(360&deg; &middot; f)</p><p class="eq">T = 60/(360 &times; 20) = 0.00833 s = <strong>8.33 ms</strong></p><p>That is the number at which the loop is exactly marginally stable, so it is a ceiling, not a budget. Spending half of it. About 4 ms, leaving 30&deg;, is the most you would actually sign off, and even that gives a visibly more oscillatory step response.</p><p>What does "shared fieldbus" really cost? The headline cycle time is not the whole story: you pay the bus period, plus jitter, plus any queueing when other traffic is present, plus the receiving node's own update phase. A bus advertising 4 ms cycle can easily present 8&ndash;10 ms worst case, and phase margin is set by the worst case, not the average. If the bus is non-negotiable, lower the crossover: at 10 Hz the same 60&deg; buys 16.7 ms.</p>`,
    },
    {
      id: "controls-instrumentation-q29",
      type: "mc",
      difficulty: 3,
      prompt: `<p>An extruder controls melt temperature with a sensor 3 m downstream of the heater, giving roughly 200 ms of transport delay before any heater change is visible. A PID tuned by trial and error keeps hunting. Which adjustment helps most?</p>`,
      choices: [
        "Raise proportional gain to react faster to the delayed measurement",
        "Cut proportional gain, keep modest integral, and drop derivative to near zero",
        "Raise derivative gain so the controller anticipates the delayed response",
        "Increase the sample rate to 1 kHz so the delay is measured more precisely",
      ],
      answer: 1,
      explanation: `<p>Transport delay sets the ceiling and no tuning removes it. At 200 ms, the phase cost is &minus;360(0.2)f, which reaches &minus;180&deg; at just 2.5 Hz, so crossover has to sit well below that, a few tenths of a hertz at most. Cutting proportional gain is the direct way to bring crossover down into that region.</p><p>Derivative is the specific problem. Its whole value is predicting where the error is heading, and with a 200 ms blind window it is predicting from information that is already stale, so it mostly amplifies noise and makes the hunting worse. On dead-time-dominant processes the standard advice is PI, not PID.</p><p>Faster sampling changes nothing here: 1 ms sampling of a 200 ms delay is still a 200 ms delay, and the extra bandwidth only lets more noise through. More gain guarantees the hunt, because the correction for an error keeps arriving after that error has already been overcorrected.</p><p>The real engineering answers are upstream: move the sensor closer to the heater (delay scales with distance and inversely with throughput), or use a model-based structure such as a Smith predictor that runs a plant model to estimate what the delayed measurement will eventually show. The question is whether you reach for the mechanical fix or keep tuning.</p>`,
    },
    {
      id: "controls-instrumentation-q30",
      type: "numeric",
      difficulty: 3,
      prompt: `<p>A 16-bit ADC digitises a &plusmn;5 V span (10 V total). The measured noise on a shorted input is 1.5 mV RMS. Using effective resolution = log<sub>2</sub>(span / RMS noise), how many bits are actually usable?</p>`,
      answer: 12.7,
      unit: "bits",
      tolerance: 0.03,
      explanation: `<p>The converter's ideal step is 10 V/2<sup>16</sup> = 153 &mu;V, but the noise floor is ten times that, so the low bits are random.</p><p class="eq">ENOB = log<sub>2</sub>(10 / 0.0015) = log<sub>2</sub>(6667) = <strong>12.7 bits</strong></p><p>You paid for 16 bits and you own about 12.7, roughly 3.3 bits, a factor of ten in resolution, thrown away by the analog front end.</p><p>The engineering conclusion is that the fix is upstream, not in the converter. Chasing an 18- or 24-bit part buys nothing while 1.5 mV of noise remains; what buys bits is scaling the signal to fill the span, differential rather than single-ended input, star grounding, shielded twisted pair away from PWM leads, and an analog low-pass that limits the bandwidth over which the noise integrates.</p><p>One useful lever if the signal is slow: averaging N independent samples improves the RMS noise by &radic;N, so 16&times; oversampling recovers about 2 bits. At the cost of bandwidth, which is exactly the trade you cannot make inside a fast control loop.</p>`,
    },
  ],
  qna: [
    {
      id: "controls-instrumentation-qa01",
      q: `<p>Walk me through a feedback loop on real hardware, and tell me where the lag lives.</p>`,
      a: `<p>I would draw six blocks: setpoint, summing junction, controller, drive and actuator, mechanics, and the sensor path back to the summing junction. The error e = r &minus; y drives the controller; the drive converts that to current; the mechanics convert current to motion; the sensor reports motion back.</p><p>The lag is almost never in the controller arithmetic. It is in the feedback path and the hold: the sensor's own dynamics (a 30 Hz load cell costs 18&deg; at a 10 Hz crossover), any anti-alias or noise filter, the zero-order hold and computation, which together run about 1.5 sample periods, and any bus transport between nodes. On the forward side, the drive's current loop and the actuator's own bandwidth add more, and the mechanics contribute the structural mode.</p><p>The number I would actually quote is the total delay in milliseconds, converted to degrees at crossover with &phi; = &minus;360&deg;fT. Two milliseconds is 36&deg; at 50 Hz. That single conversion is what turns a vague conversation about "latency" into a phase budget you can add up and defend.</p><p>The last thing I would say is that feedback only controls what the sensor sees. If the encoder is on the motor and the payload is on the far side of a belt, the loop can be perfect and the part still lands in the wrong place.</p>`,
    },
    {
      id: "controls-instrumentation-qa02",
      q: `<p>You are handed an untuned position axis and a scope. What are your first three moves, in order, and what are you looking at?</p>`,
      a: `<p><strong>Move zero, before any gains:</strong> confirm the mechanics and the signal. Back-drive the axis by hand for binding, check that encoder counts move the right direction and the right amount per millimetre of real travel, and look at the position signal with the drive disabled to see the noise floor. Tuning on top of a loose coupling or a noisy encoder wastes a day.</p><p><strong>1. Set the sample rate and the P gain.</strong> With a target bandwidth of, say, 20 Hz I want 400&ndash;800 Hz servo update. Then raise K<sub>p</sub> alone, watching the step response, until I see the first sign of overshoot or hear the axis, and back off to roughly half that. On the scope I am watching position error and current command together. If current is clipping, I am reading saturation, not tuning.</p><p><strong>2. Add derivative, filtered.</strong> D lets me carry more P. I put a low-pass on the velocity estimate first (cutoff around 10&times; crossover), then raise K<sub>d</sub> until overshoot is under about 10%, watching current ripple for the onset of noise amplification. If the motor sings, the estimate is too noisy and I fix the wiring or lengthen the estimation window rather than adding gain.</p><p><strong>3. Add integral last, with anti-windup.</strong> Only enough to kill the standing error, because I is buying that with phase. I clamp the integrator whenever the current command is at limit and verify with a long saturated move that the axis does not overshoot on arrival.</p><p>Then I verify rather than trust: a swept-sine frequency response to read actual crossover and phase margin, aiming for 45&ndash;60&deg;, and I check that the response survives the payload extremes, because the structural mode moves with mass.</p>`,
    },
    {
      id: "controls-instrumentation-qa03",
      q: `<p>An axis oscillates. How do you find out why?</p>`,
      a: `<p>The frequency of the oscillation is the diagnosis, so the first thing I do is measure it rather than describe it, scope the current command and count the period.</p><p>If it sits at a fixed mechanical frequency and matches a hammer-test mode, it is a structural resonance at crossover: gain went up, crossover moved into the mode, phase margin went to zero. Fix by lowering gain, notching if the mode is stable, or stiffening the machine.</p><p>If it sits near a fixed fraction of the sample rate and gets worse at low speed or with more derivative gain, it is a discrete-time or quantization effect, velocity estimated by differencing a coarse encoder, or a derivative path with no filter. Fix in the estimator, not the gains.</p><p>If it is slow, one-sided, and follows every saturated move, it is integrator windup: the shape is an overshoot with a long unwind, not a sustained sine. Plot the integrator state next to the current-limit flag and it is obvious.</p><p>If it only appears near zero speed and looks like slow stick-slip hunting, it is stiction fighting integral action. The integrator builds until it breaks the friction, the axis jumps past, and the cycle repeats.</p><p>And if it started right after someone added a filter, that is the answer: compute arctan(f<sub>crossover</sub>/f<sub>cutoff</sub>) and compare it with the phase margin you used to have. A 15 Hz filter on a 12 Hz loop eats 39&deg;.</p>`,
    },
    {
      id: "controls-instrumentation-qa04",
      q: `<p>How do you pick a position sensor for a machine?</p>`,
      a: `<p>I write down eight things before naming any part: measurand and range, required accuracy at the load, resolution, update rate and bandwidth, whether absolute position is needed at power-up, environment (temperature, contamination, vibration, wash-down), mounting and where in the load path it can sit, and the failure mode.</p><p>Those constraints usually eliminate most of the catalogue. Needing valid position at power-up rules out incremental encoders unless a homing move is acceptable. High temperature or oil mist rules out optical and points at resolvers or inductive devices. Wash-down with caustic points at sealed magnetic or inductive scales rather than open glass. Sub-micron accuracy over a long axis points at a linear scale on the load rather than a rotary encoder on the motor.</p><p>The judgment call that matters most is location, not device. A 16-bit motor encoder behind a belt has beautiful resolution and can still be 50 &mu;m wrong at the payload, because backlash and stretch sit between the sensor and the thing being positioned. If accuracy is specified at the load, I want the sensor at the load and I accept that this makes the loop non-collocated and harder to tune.</p><p>Then I check the numbers rather than the marketing: sensor bandwidth at least 10&times; the loop bandwidth, resolution comfortably finer than the required accuracy (a factor of 5&ndash;10), and a thermal drift figure multiplied by the real temperature swing to see whether it eats the error budget on its own.</p>`,
    },
    {
      id: "controls-instrumentation-qa05",
      q: `<p>What goes wrong in data acquisition, and how do you keep it from happening?</p>`,
      a: `<p>The failure I look for first is aliasing, because it is silent and it produces plausible-looking results. Anything above half the sample rate folds down into the record, so a 1.2 kHz mesh tone sampled at 1 kHz shows up at 200 Hz looking exactly like a shaft order. The prevention is an <em>analog</em> filter ahead of the converter, because once the data is sampled the fold cannot be undone in software. That is the point most people get wrong.</p><p>After that: single-ended inputs on long runs, which pick up ground offsets and switching noise, where differential input or a 4&ndash;20 mA loop solves the root cause; signals that use a small fraction of the ADC span, which throws away resolution that gain would have recovered; and confusing bits with accuracy, since 16 bits over a 10 V span with 1.5 mV of noise is really 12.7 usable bits.</p><p>Then the process errors: no calibration against a traceable reference, no warm-up before recording drift-sensitive channels, unsynchronised channels compared as if simultaneous, and filters applied without accounting for the phase they shift into the data.</p><p>My routine is to state the expected amplitude and bandwidth of each channel first, choose range, gain, filter, and sample rate from that, then verify with a known input, a dead weight on a load cell, a hand-turned encoder revolution, a shaker at a known frequency, before trusting a single production trace.</p>`,
    },
    {
      id: "controls-instrumentation-qa06",
      q: `<p>A load-cell channel is noisy on a machine with a servo drive. Walk me through the debug.</p>`,
      a: `<p>I want to know whether the noise is mechanical, electrical, or numerical, and there are quick tests that separate them.</p><p>First, disable the drive but leave the electronics powered. If the noise goes away, it is coupled from the drive; if it stays, it is the measurement chain itself. Then short the amplifier input at the sensor end: any remaining noise is downstream of the sensor and is an electronics or grounding problem.</p><p>Next I look at the frequency. Noise at the PWM switching frequency or its harmonics, and scaling with motor duty cycle, is capacitive coupling or a ground loop. Noise at 50/60 Hz is mains pickup. Broadband noise that tracks machine motion is real structural vibration reaching the load cell, which is not a wiring problem at all.</p><p>The fixes in order of effectiveness: shielded twisted pair with the shield grounded at one end only, cable routed away from and crossing perpendicular to motor leads, differential input, star ground with the bridge excitation returning to a single point, and a shorter run to the instrumentation amplifier so the millivolt-level signal is amplified before it travels.</p><p>Only then do I filter, and I size the filter from the loop: if that force signal closes a loop at 10 Hz, a 100 Hz analog pole costs about 6&deg; and is affordable, while a 15 Hz pole costs 34&deg; and is not. Filtering is the last resort because it hides the problem and spends phase margin to do it.</p>`,
    },
    {
      id: "controls-instrumentation-qa07",
      q: `<p>An axis with a 16-bit encoder is missing a 20 &mu;m tolerance. Where do you look?</p>`,
      a: `<p>I would start by characterising the error rather than guessing, because each cause has a different signature.</p><p>Command the same target ten times from the same direction. The spread is unidirectional repeatability. If that alone exceeds 20 &mu;m, the problem is noise, servo settling, or stiction, and I would look at the position error trace during settle and at whether the axis is stopping inside a friction deadband.</p><p>Then approach the same target from the other direction. A repeatable, sign-dependent offset is lost motion: backlash, belt stretch, or coupling wind-up between the encoder and the load. Extra encoder resolution cannot touch it because the encoder is upstream of the compliance.</p><p>Then vary payload. Error that scales with load is structural compliance or insufficient torque. Then vary speed: error that scales with velocity is following error, which feedforward fixes. Then run the machine warm and repeat: error that grows over an hour is thermal expansion of the structure or the scale.</p><p>The distinction I would state explicitly is that resolution is what the system can report, repeatability is the spread on identical attempts, and accuracy is closeness to truth at the load. A 16-bit encoder resolving 0.3 &mu;m at the motor tells you nothing about accuracy at the payload. The machine between them decides that, which is why the answer is usually a load-side sensor, a stiffer transmission, or single-direction approach, not a better encoder.</p>`,
    },
    {
      id: "controls-instrumentation-qa08",
      q: `<p>How would you size a motor for a pick-and-place move, and what do people get wrong?</p>`,
      a: `<p>I start from the move profile, not the motor. Peak torque is inertia times angular acceleration plus friction plus any gravity term, computed at the worst point of the profile. Then I compute RMS torque over the <em>whole</em> cycle including dwell, T<sub>rms</sub> = &radic;(&Sigma;T<sub>i</sub><sup>2</sup>t<sub>i</sub>/&Sigma;t<sub>i</sub>), and require peak below the motor's peak rating and RMS below its continuous rating. Then I check that the required speed is achievable on the available bus voltage, because back EMF eats headroom, at 3000 rpm a 0.050 V/(rad/s) motor is already spending 15.7 of a 24 V bus.</p><p>Then reflected inertia: J<sub>ref</sub> = J<sub>L</sub>/N<sup>2</sup>, and I want the ratio to rotor inertia comfortably under about 10 for a tunable loop. If it is far out, the ratio is the lever, and the optimum for pure acceleration is N = &radic;(J<sub>L</sub>/J<sub>m</sub>).</p><p>The four mistakes I see most: dropping the N<sup>2</sup> and getting reflected inertia wrong by the ratio; sizing on peak torque only and burning the motor on the tenth cycle, since continuous ratings are thermal and I<sup>2</sup>R goes as the square of current; forgetting the dwell in the RMS denominator, which makes the number pessimistic and oversizes the motor; and quoting stall torque as though it were available at speed.</p><p>Last, I leave margin. Typically 20&ndash;30% on RMS, because friction rises with wear, greases stiffen when cold, and the payload always grows after the design review.</p>`,
    },
    {
      id: "controls-instrumentation-qa09",
      q: `<p>How do you choose a sample rate, and what does Nyquist actually protect you from?</p>`,
      a: `<p>Nyquist protects reconstruction, not control, and it is a statement about what is <em>present</em> at the converter, not about what you care about. Everything above f<sub>s</sub>/2 folds down to |f &minus; kf<sub>s</sub>|, so a 60 Hz hum sampled at 100 Hz appears at 40 Hz and is then indistinguishable from real 40 Hz content.</p><p>So there are two different rate choices. For measurement, I pick 5&ndash;10&times; the highest frequency I want to see clearly, because at exactly 2&times; the recorded amplitude depends on sample phase. A 50 Hz sine at exactly 100 Sa/s can come back full amplitude or flat. And I put an analog anti-alias filter ahead of the ADC with cutoff below Nyquist and real attenuation at whatever loud thing lives up high, typically the drive switching frequency.</p><p>For control, the driver is not Nyquist at all but delay. A discrete loop pays about 1.5 sample periods of zero-order-hold and computation delay, and that costs &minus;360&deg;fT of phase at crossover. At 10&ndash;20&times; the loop bandwidth the cost is manageable; at 2&times; the loop is unstable regardless of gains. So a 25 Hz loop gets 500 Hz to 1 kHz.</p><p>The point I would emphasise is that the anti-alias filter must be analog. A digital filter runs on samples that already contain the fold, so it cannot remove it, and telling someone their aliasing can be fixed in firmware is the fastest way to lose an argument in a test review.</p>`,
    },
    {
      id: "controls-instrumentation-qa10",
      q: `<p>Design the sensing for a hazardous vertical axis. What does fail-safe mean in practice?</p>`,
      a: `<p>The design rule is that a broken wire, an unplugged connector, or a lost supply must produce a <em>detected fault</em>, never a signal that looks like permission to move. That single sentence drives most of the choices.</p><p>Limit switches go normally closed, so an open circuit reads as "at limit" and stops motion. A normally open switch fails silent. A cut wire looks exactly like normal travel, and the axis keeps driving into the stop. On analog channels I use a live zero such as 4&ndash;20 mA so that 0 mA is unambiguously a broken loop rather than a legitimate reading of zero.</p><p>On top of that: redundancy with diversity, so a limit switch and the encoder position are cross-checked and disagreement is a fault; plausibility checks such as commanded motion with no encoder change, or an over-travel that the software model says is impossible; safety-rated inputs with pulse testing for the hazardous functions rather than a general-purpose PLC input; and a mechanical hard stop plus a brake that engages on power loss, because software cannot be the last line of defence on a load that falls.</p><p>Finally, I would insist on testing the failure rather than assuming it. Pull the connector with the axis moving, drop the supply mid-move, short the switch, and confirm the machine goes to a safe state each time. A fail-safe design that has never been fault-injected is a claim, not a result.</p>`,
    },
  ],
};

export default content;
