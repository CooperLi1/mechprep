/**
 * Interview glossary. Each entry is one term a mechanical engineering
 * candidate can be asked to define cold, with the definition written the way
 * a strong candidate would say it out loud — one or two sentences of
 * substance, not a textbook paragraph.
 *
 * `aliases` are alternative spellings/phrasings that should match the same
 * entry (both on the glossary page's search and in auto-marked prose).
 * `mark: false` opts a term out of in-prose hover marking — used for words so
 * common that underlining them everywhere would be noise.
 */
export interface GlossaryEntry {
  id: string;
  term: string;
  aliases?: string[];
  /** HTML. Keep to 1–3 sentences; this renders in a hover box. */
  def: string;
  /** Rough grouping for the glossary page. */
  group:
    | "Statics & loading"
    | "Stress & strain"
    | "Failure & fatigue"
    | "Beams & structures"
    | "Machine elements"
    | "Joining & welds"
    | "Dynamics & vibration"
    | "Thermal & fluids"
    | "Manufacturing & tolerancing";
  mark?: boolean;
}

export const GLOSSARY: GlossaryEntry[] = [
  // --- Statics & loading -----------------------------------------------------
  {
    id: "moment",
    term: "moment",
    aliases: ["moments"],
    group: "Statics & loading",
    def: `A force's tendency to cause rotation about a point or axis: <em>M = F·d</em>, where <em>d</em> is the perpendicular distance from the axis to the force's line of action. Units N·m (or lb·ft); always name the point you are taking moments about.`,
  },
  {
    id: "torque",
    term: "torque",
    group: "Statics & loading",
    def: `A moment applied about a shaft's long axis, twisting it. Same units as a moment (N·m); "torque" is the word used when the rotation axis is the axis of the member itself.`,
  },
  {
    id: "couple",
    term: "couple",
    group: "Statics & loading",
    def: `Two equal, opposite, parallel forces separated by a distance. A couple produces a pure moment — the same about every point — with zero net force.`,
  },
  {
    id: "free-body-diagram",
    term: "free-body diagram",
    aliases: ["free body diagram", "FBD"],
    group: "Statics & loading",
    def: `A sketch of one isolated body with every external force and moment acting on it — applied loads, support reactions, weight. The single most-tested skill in a mechanical interview: get the boundary and the reaction count right before writing any equations.`,
  },
  {
    id: "reaction",
    term: "reaction",
    aliases: ["reactions", "support reaction"],
    group: "Statics & loading",
    mark: false,
    def: `The force or moment a support exerts on a body. Count them by support type: a roller gives one force, a pin gives two, a fixed support gives two forces and a moment (in 2-D).`,
  },
  {
    id: "static-equilibrium",
    term: "static equilibrium",
    aliases: ["equilibrium"],
    group: "Statics & loading",
    mark: false,
    def: `The state where the resultant force and resultant moment on a body are both zero: ΣF = 0 and ΣM = 0. In 2-D that is three independent scalar equations — which is why a 2-D body with more than three unknown reactions is statically indeterminate.`,
  },
  {
    id: "statically-indeterminate",
    term: "statically indeterminate",
    aliases: ["static indeterminacy"],
    group: "Statics & loading",
    def: `Having more unknown reactions than equilibrium equations, so statics alone cannot solve the structure. You need compatibility — deformation — equations (or software) to finish the job.`,
  },
  {
    id: "two-force-member",
    term: "two-force member",
    aliases: ["two force member"],
    group: "Statics & loading",
    def: `A body loaded only at two points, with no other forces or moments. Equilibrium forces the two loads to be equal, opposite, and collinear along the line joining the points — which is what makes truss analysis work.`,
  },
  {
    id: "distributed-load",
    term: "distributed load",
    group: "Statics & loading",
    def: `A load spread over a length or area (N/m or Pa) rather than acting at a point. For equilibrium it can be replaced by its resultant: the area under the load diagram, acting through that area's centroid.`,
  },
  {
    id: "centroid",
    term: "centroid",
    group: "Statics & loading",
    def: `The geometric center of an area — the point where the area "balances". Beam bending theory measures everything from the centroidal axis, and a distributed load's resultant acts through the centroid of the load diagram.`,
  },

  // --- Stress & strain --------------------------------------------------------
  {
    id: "normal-stress",
    term: "normal stress",
    group: "Stress & strain",
    def: `Internal force per unit area acting perpendicular to the cut surface: σ = P/A for uniform axial load. Positive in tension by convention; units Pa (N/m²).`,
  },
  {
    id: "shear-stress",
    term: "shear stress",
    group: "Stress & strain",
    def: `Internal force per unit area acting parallel to the cut surface: τ = V/A on average. Peaks of shear stress rarely sit where normal stress peaks — check both locations.`,
  },
  {
    id: "strain",
    term: "strain",
    group: "Stress & strain",
    mark: false,
    def: `Deformation normalised by original length: ε = ΔL/L. Dimensionless, usually quoted in % or microstrain; the elastic part recovers on unload, the plastic part does not.`,
  },
  {
    id: "youngs-modulus",
    term: "Young's modulus",
    aliases: ["modulus of elasticity", "elastic modulus"],
    group: "Stress & strain",
    def: `The slope of the elastic part of the stress–strain curve, E = σ/ε — a material's stiffness, not its strength. ~200 GPa for steel, ~70 GPa for aluminium, and heat treatment does not change it.`,
  },
  {
    id: "poissons-ratio",
    term: "Poisson's ratio",
    group: "Stress & strain",
    def: `The ratio of lateral contraction to axial extension under uniaxial load, ν = −ε<sub>lat</sub>/ε<sub>axial</sub>. About 0.3 for metals; 0.5 means incompressible (rubber).`,
  },
  {
    id: "hookes-law",
    term: "Hooke's law",
    group: "Stress & strain",
    def: `Linear elasticity: stress proportional to strain (σ = Eε) below the proportional limit. Everything in classic machine-design formulas assumes it.`,
  },
  {
    id: "yield-strength",
    term: "yield strength",
    aliases: ["yield stress", "yield point"],
    group: "Stress & strain",
    def: `The stress at which a material begins to deform permanently, conventionally defined at 0.2% offset plastic strain. The design limit for ductile parts that must not take a permanent set.`,
  },
  {
    id: "ultimate-strength",
    term: "ultimate tensile strength",
    aliases: ["ultimate strength", "UTS", "tensile strength"],
    group: "Stress & strain",
    def: `The maximum engineering stress a specimen carries before necking begins. Past UTS the load-carrying capacity falls even as the true stress in the neck keeps rising.`,
  },
  {
    id: "ductility",
    term: "ductility",
    group: "Stress & strain",
    def: `The capacity to deform plastically before fracture, measured as % elongation or % reduction of area. Ductile parts warn before failing; brittle ones do not.`,
  },
  {
    id: "toughness",
    term: "toughness",
    group: "Stress & strain",
    def: `Energy absorbed before fracture — the whole area under the stress–strain curve. Distinct from strength (height of the curve) and from hardness; a tough material needs both strength and ductility.`,
  },
  {
    id: "resilience",
    term: "resilience",
    group: "Stress & strain",
    def: `Elastic energy stored per unit volume up to yield — the area under the elastic part of the stress–strain curve, σ<sub>y</sub>²/2E. What springs are optimised for.`,
  },
  {
    id: "hardness",
    term: "hardness",
    group: "Stress & strain",
    mark: false,
    def: `Resistance to localised plastic deformation (indentation, scratching). Correlates with tensile strength for steels; measured on Rockwell, Brinell or Vickers scales.`,
  },
  {
    id: "stress-concentration",
    term: "stress concentration",
    aliases: ["stress riser", "stress raiser"],
    group: "Stress & strain",
    def: `A local spike in stress where geometry changes abruptly — holes, fillets, notches, keyways — quantified by K<sub>t</sub> = σ<sub>max</sub>/σ<sub>nom</sub>. Barely matters for static ductile loading; dominates fatigue life.`,
  },
  {
    id: "principal-stress",
    term: "principal stress",
    aliases: ["principal stresses"],
    group: "Stress & strain",
    def: `The normal stresses on the orientation where shear vanishes — the eigenvalues of the stress state, the true maximum and minimum normal stresses at a point. Found analytically or from Mohr's circle.`,
  },
  {
    id: "mohrs-circle",
    term: "Mohr's circle",
    group: "Stress & strain",
    def: `The graphical map of how normal and shear stress at a point vary with cut orientation. Center = (σ<sub>x</sub>+σ<sub>y</sub>)/2, radius = max in-plane shear; principal stresses sit where the circle crosses the σ-axis.`,
  },
  {
    id: "von-mises",
    term: "von Mises stress",
    aliases: ["von Mises", "equivalent stress", "distortion energy"],
    group: "Stress & strain",
    def: `A single equivalent stress computed from a multiaxial state, compared against yield strength to predict ductile yielding (distortion-energy theory). The default failure criterion for ductile metals — and the default contour plot in FEA.`,
  },

  // --- Failure & fatigue --------------------------------------------------------
  {
    id: "factor-of-safety",
    term: "factor of safety",
    aliases: ["safety factor", "FoS"],
    group: "Failure & fatigue",
    def: `Capacity over demand: n = strength / applied stress (or load-based equivalents). It covers what you cannot know precisely — material scatter, load uncertainty, model error — not sloppy analysis.`,
  },
  {
    id: "fatigue",
    term: "fatigue",
    group: "Failure & fatigue",
    def: `Failure by crack initiation and growth under repeated loading at stresses below yield. Responsible for the majority of real mechanical failures; driven by stress <em>range</em> and concentrations, not peak static stress.`,
  },
  {
    id: "endurance-limit",
    term: "endurance limit",
    aliases: ["fatigue limit"],
    group: "Failure & fatigue",
    def: `The stress amplitude below which steel survives unlimited cycles (~half of UTS for polished specimens, knocked down by surface finish, size and notches). Aluminium has no true endurance limit — it is always finite-life.`,
  },
  {
    id: "sn-curve",
    term: "S-N curve",
    aliases: ["S–N curve", "Wöhler curve"],
    group: "Failure & fatigue",
    def: `Stress amplitude versus cycles-to-failure on log axes — the basic fatigue design chart. Steels flatten at the endurance limit; aluminium keeps sloping down.`,
  },
  {
    id: "creep",
    term: "creep",
    group: "Failure & fatigue",
    def: `Slow, time-dependent plastic strain under constant load, significant above roughly 0.4 of a material's absolute melting temperature. Why turbine blades and solder joints have design lives.`,
  },
  {
    id: "brittle-fracture",
    term: "brittle fracture",
    aliases: ["brittleness"],
    group: "Failure & fatigue",
    def: `Sudden fracture with little plastic deformation, typically initiating at a flaw and governed by fracture toughness K<sub>IC</sub> rather than yield strength. Favoured by low temperature, high strain rate and thick sections.`,
  },
  {
    id: "buckling",
    term: "buckling",
    group: "Failure & fatigue",
    def: `Sudden lateral instability of a slender member in compression at the critical (Euler) load P<sub>cr</sub> = π²EI/(KL)² — a stiffness failure, not a strength failure. It depends on E, geometry and end conditions, not on yield strength.`,
  },
  {
    id: "slenderness-ratio",
    term: "slenderness ratio",
    group: "Failure & fatigue",
    def: `Effective length over least radius of gyration, KL/r — the number that decides whether a column fails by Euler buckling (slender, high ratio) or by yielding (stocky, low ratio).`,
  },

  // --- Beams & structures ------------------------------------------------------
  {
    id: "shear-force",
    term: "shear force",
    group: "Beams & structures",
    mark: false,
    def: `The internal force parallel to a beam's cross-section at a cut, equal to the running sum of transverse loads to one side. Its diagram's slope is the distributed load; where V = 0, the bending moment is at an extreme.`,
  },
  {
    id: "bending-moment",
    term: "bending moment",
    group: "Beams & structures",
    def: `The internal moment at a beam cut that bends the beam, equal to the moment of all loads to one side of the cut. Peaks where shear crosses zero; drives the flexure stress σ = Mc/I.`,
  },
  {
    id: "moment-of-inertia",
    term: "area moment of inertia",
    aliases: ["second moment of area", "moment of inertia"],
    group: "Beams & structures",
    def: `The cross-section property I = ∫y²dA measuring how far material sits from the bending axis — the geometric half of bending stiffness EI. Depth cubes: doubling a rectangle's height multiplies I by eight, which is why I-beams put material in flanges.`,
  },
  {
    id: "section-modulus",
    term: "section modulus",
    group: "Beams & structures",
    def: `S = I/c, the section property that converts bending moment straight to peak stress: σ<sub>max</sub> = M/S. Compare beams by S when strength governs, by I when deflection governs.`,
  },
  {
    id: "polar-moment",
    term: "polar moment of inertia",
    aliases: ["polar moment"],
    group: "Beams & structures",
    def: `J = ∫r²dA, the twist analogue of I: shear stress in a shaft is τ = Tr/J and twist is θ = TL/GJ. For a solid round shaft J = πd⁴/32 — hollow shafts are efficient because J keeps most of its value when the core is removed.`,
  },
  {
    id: "neutral-axis",
    term: "neutral axis",
    group: "Beams & structures",
    def: `The line in a bent beam's cross-section with zero bending stress — through the centroid for linear-elastic bending. Stress grows linearly with distance from it, which is why material at the surfaces works hardest.`,
  },
  {
    id: "deflection",
    term: "deflection",
    group: "Beams & structures",
    mark: false,
    def: `Elastic displacement under load. For beams it scales with L³ (point load: δ = PL³/3EI for a cantilever tip), so span dominates everything else; stiffness problems are usually geometry problems.`,
  },
  {
    id: "truss",
    term: "truss",
    group: "Beams & structures",
    mark: false,
    def: `A structure of straight members pinned at joints and loaded only at joints, so every member is a two-force member in pure tension or compression. Analysed by the method of joints or method of sections.`,
  },

  // --- Machine elements ---------------------------------------------------------
  {
    id: "preload",
    term: "preload",
    group: "Machine elements",
    def: `The clamping force set in a bolt by tightening before service load arrives. A properly preloaded joint carries most of the external load as a <em>reduction in clamp</em> rather than extra bolt tension — which is why preload is the main defence against bolt fatigue and joint separation.`,
  },
  {
    id: "proof-strength",
    term: "proof strength",
    group: "Machine elements",
    def: `The stress a fastener must sustain without permanent set — slightly below yield. Preload specs are quoted as a fraction of proof load (commonly 0.75 for reused, 0.9 for permanent fasteners).`,
  },
  {
    id: "spring-rate",
    term: "spring rate",
    aliases: ["spring constant", "stiffness"],
    group: "Machine elements",
    mark: false,
    def: `Force per unit deflection, k = F/δ (N/m). Springs in series soften (1/k = Σ1/k<sub>i</sub>); springs in parallel stiffen (k = Σk<sub>i</sub>) — bolted joints are analysed exactly this way.`,
  },
  {
    id: "bearing",
    term: "bearing",
    group: "Machine elements",
    mark: false,
    def: `A component that constrains relative motion and carries load between moving parts. Rolling-element bearings trade higher cost for low friction and defined life (L10); journal bearings ride on a fluid film and want continuous rotation.`,
  },
  {
    id: "gear-ratio",
    term: "gear ratio",
    group: "Machine elements",
    def: `Output-to-input tooth (or radius) ratio. Torque multiplies by the ratio and speed divides by it — power stays the same minus efficiency losses.`,
  },
  {
    id: "backlash",
    term: "backlash",
    group: "Machine elements",
    def: `The clearance between mating gear teeth — necessary for lubrication and thermal growth, but it becomes lost motion on every direction reversal, which matters in positioning systems.`,
  },
  {
    id: "keyway",
    term: "keyway",
    aliases: ["key"],
    group: "Machine elements",
    mark: false,
    def: `The slot for the key that transmits torque between a shaft and a hub. Cheap and standard, but the sharp corners are a classic fatigue stress concentration on shafts.`,
  },

  // --- Joining & welds -----------------------------------------------------------
  {
    id: "weld",
    term: "weld",
    aliases: ["welds", "welding"],
    group: "Joining & welds",
    def: `A joint made by fusing the parts themselves (usually with filler metal) into one continuous piece. Strong and stiff, but it locks in residual stress, distorts parts, and creates a heat-affected zone whose properties differ from the base metal.`,
  },
  {
    id: "fillet-weld",
    term: "fillet weld",
    group: "Joining & welds",
    def: `A triangular weld laid in the corner between two surfaces (lap and T-joints) — the most common structural weld because it needs no edge preparation. Sized by its <em>leg</em>; designed by shear on its <em>throat</em> (≈ 0.707 × leg for an equal-leg fillet).`,
  },
  {
    id: "groove-weld",
    term: "groove weld",
    aliases: ["butt weld"],
    group: "Joining & welds",
    def: `A weld filling a prepared groove between abutting parts. A full-penetration groove weld restores the member's full cross-section, so a sound one is treated as being as strong as the base metal.`,
  },
  {
    id: "weld-throat",
    term: "throat",
    group: "Joining & welds",
    mark: false,
    def: `The minimum cross-section of a weld — the plane a fillet weld is assumed to shear through. For an equal-leg fillet, throat = leg × cos 45° ≈ 0.707 × leg; all fillet strength calcs run through it.`,
  },
  {
    id: "weld-leg",
    term: "leg",
    group: "Joining & welds",
    mark: false,
    def: `The side length of a fillet weld's triangular cross-section, measured along the joined surface — the dimension called out on the weld symbol and the one the welder can actually measure with a gauge.`,
  },
  {
    id: "heat-affected-zone",
    term: "heat-affected zone",
    aliases: ["HAZ"],
    group: "Joining & welds",
    def: `The band of base metal next to a weld that was not melted but was heat-treated by the weld's thermal cycle — grain growth, hardening or softening, and often the joint's weakest or most brittle region. Many weld failures are HAZ failures.`,
  },
  {
    id: "weld-penetration",
    term: "penetration",
    group: "Joining & welds",
    mark: false,
    def: `How deep the fusion zone extends into the base metal. Lack of penetration leaves an internal notch — effectively a built-in crack — which is why critical welds get inspected volumetrically (X-ray, ultrasound).`,
  },
  {
    id: "residual-stress",
    term: "residual stress",
    group: "Joining & welds",
    def: `Stress locked into a part with no external load, left by non-uniform cooling, welding or plastic forming. Welds routinely hold tensile residual stress near yield, which is why post-weld stress relief and peening exist and why welds distort parts.`,
  },
  {
    id: "brazing",
    term: "brazing",
    aliases: ["soldering"],
    group: "Joining & welds",
    def: `Joining with a filler metal that melts above 450 °C (brazing) or below (soldering) while the base metal stays solid; the joint is held by capillary-drawn filler and adhesion. No HAZ-scale metallurgy change in the parts, but joint strength is set by the filler.`,
  },

  // --- Dynamics & vibration --------------------------------------------------------
  {
    id: "natural-frequency",
    term: "natural frequency",
    group: "Dynamics & vibration",
    def: `The frequency a system oscillates at when disturbed and released: ω<sub>n</sub> = √(k/m). Stiffer raises it, heavier lowers it; every structure has one per mode.`,
  },
  {
    id: "resonance",
    term: "resonance",
    group: "Dynamics & vibration",
    def: `Excitation at (or near) a natural frequency, where response amplitude is limited only by damping. The first question about any rotating machine: where are the operating speeds relative to the natural frequencies?`,
  },
  {
    id: "damping",
    term: "damping",
    group: "Dynamics & vibration",
    def: `Any mechanism that dissipates vibration energy (viscous, friction, material hysteresis). It controls amplitude at resonance and how fast transients die out — quantified by the damping ratio ζ.`,
  },
  {
    id: "dof",
    term: "degrees of freedom",
    aliases: ["degree of freedom", "DOF"],
    group: "Dynamics & vibration",
    def: `The number of independent coordinates needed to define a system's configuration — six for a free rigid body in 3-D (three translations, three rotations). Fixturing and mechanism design are exercises in removing exactly the right ones.`,
  },

  // --- Thermal & fluids ------------------------------------------------------------
  {
    id: "conduction",
    term: "conduction",
    group: "Thermal & fluids",
    def: `Heat transfer through a material by molecular interaction, driven by a temperature gradient: q = −kA·dT/dx (Fourier's law). k ~400 W/m·K for copper, ~0.03 for insulation foam.`,
  },
  {
    id: "convection",
    term: "convection",
    group: "Thermal & fluids",
    def: `Heat transfer between a surface and a moving fluid: q = hA(T<sub>s</sub> − T<sub>∞</sub>). The film coefficient h is the hard part — natural convection in air ~5–25 W/m²K, forced liquid cooling orders of magnitude more.`,
  },
  {
    id: "radiation",
    term: "radiation",
    aliases: ["thermal radiation"],
    group: "Thermal & fluids",
    mark: false,
    def: `Heat transfer by electromagnetic emission, q = εσA(T₁⁴ − T₂⁴) — no medium needed. The T⁴ makes it negligible at room temperature differences and dominant in furnaces and space.`,
  },
  {
    id: "thermal-expansion",
    term: "thermal expansion",
    group: "Thermal & fluids",
    def: `Dimensional change with temperature, ΔL = αLΔT. Harmless if free to move; constrained, it generates stress σ = EαΔT — the source of thermal fatigue and why bridges have expansion joints.`,
  },
  {
    id: "reynolds-number",
    term: "Reynolds number",
    group: "Thermal & fluids",
    def: `The dimensionless ratio of inertial to viscous forces in a flow, Re = ρVD/µ. It predicts flow regime: below ~2300 in a pipe is laminar, above ~4000 turbulent.`,
  },
  {
    id: "bernoulli",
    term: "Bernoulli's equation",
    aliases: ["Bernoulli"],
    group: "Thermal & fluids",
    def: `Energy conservation along a streamline for steady, incompressible, frictionless flow: p + ½ρV² + ρgz = constant. Fast flow means low pressure — and every use of it should start by checking the assumptions.`,
  },

  // --- Manufacturing & tolerancing -----------------------------------------------
  {
    id: "tolerance",
    term: "tolerance",
    aliases: ["tolerances"],
    group: "Manufacturing & tolerancing",
    mark: false,
    def: `The permitted variation of a dimension. Cost rises steeply as tolerance tightens — the craft is putting tight tolerances only where the function needs them.`,
  },
  {
    id: "gdt",
    term: "GD&T",
    aliases: ["geometric dimensioning and tolerancing"],
    group: "Manufacturing & tolerancing",
    def: `The symbolic language for tolerancing geometry — flatness, position, perpendicularity and so on — against datums, controlling <em>form and location</em>, not just size. It encodes function: what must fit, seal or align.`,
  },
  {
    id: "datum",
    term: "datum",
    group: "Manufacturing & tolerancing",
    def: `A theoretically exact reference (plane, axis, point) that measurements and geometric tolerances are made from — established in practice by the part's contact with fixturing. Datum choice should mirror how the part actually mounts.`,
  },
  {
    id: "interference-fit",
    term: "interference fit",
    aliases: ["press fit", "shrink fit"],
    group: "Manufacturing & tolerancing",
    def: `A fit where the shaft is larger than the hole, so assembly (by press or thermal shrink) leaves contact pressure that transmits torque by friction alone. The interference also puts the hub in tension — check hoop stress.`,
  },
  {
    id: "clearance-fit",
    term: "clearance fit",
    group: "Manufacturing & tolerancing",
    mark: false,
    def: `A fit guaranteeing a gap between hole and shaft at all tolerance extremes — parts always assemble by hand and can move relative to each other.`,
  },
  {
    id: "anneal",
    term: "annealing",
    aliases: ["annealed", "anneal"],
    group: "Manufacturing & tolerancing",
    def: `Heating a metal and cooling it slowly to soften it, relieve residual stress and restore ductility — the opposite end of the heat-treatment spectrum from quench-and-temper hardening.`,
  },
  {
    id: "quench-temper",
    term: "quench and temper",
    aliases: ["quenching", "tempering"],
    group: "Manufacturing & tolerancing",
    def: `Hardening steel by rapid cooling (quench) to form martensite, then reheating moderately (temper) to trade some of that hardness back for toughness. Strength and hardness change; stiffness (E) does not.`,
  },
];

const byId = new Map(GLOSSARY.map((e) => [e.id, e]));

export function glossaryEntry(id: string): GlossaryEntry | undefined {
  return byId.get(id);
}
