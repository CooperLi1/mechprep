import type { Stage, Topic } from "./types";

export const STAGES: Stage[] = [
  {
    num: 1,
    name: "Foundations",
    desc: "Equilibrium, internal loads, and material behavior — the language every interview question is written in.",
  },
  {
    num: 2,
    name: "Strength of Materials",
    desc: "The core of most MechE interviews: how parts carry load, deform, and fail.",
  },
  {
    num: 3,
    name: "Thermal & Fluids",
    desc: "Energy, heat flow, and fluid behavior — common at hardware companies with thermal or fluid systems.",
  },
  {
    num: 4,
    name: "Dynamics & Machine Design",
    desc: "Moving systems and real hardware: vibrations, fasteners, gears, bearings, and the design process itself.",
  },
  {
    num: 5,
    name: "Definition, Tolerancing & Assembly",
    desc: "How a design becomes a buildable part: manufacturing processes, GD&T, datums, and assembly strategy.",
  },
  {
    num: 6,
    name: "Applied Hardware Practice",
    desc: "Controls, sensors, analysis, testing, and validation — the bridge from equations to reliable products.",
  },
];

export const TOPICS: Topic[] = [
  {
    id: "free-body-diagrams",
    name: "Free-Body Diagrams",
    short: "FBDs",
    stage: 1,
    blurb:
      "Isolating a body, replacing supports with reactions, and getting the signs right — the single most-tested skill in a mechanical interview.",
  },
  {
    id: "statics",
    name: "Statics & Equilibrium",
    short: "Statics",
    stage: 1,
    blurb:
      "Equilibrium equations, reactions, trusses, two- and three-force members, and friction — the starting point of nearly every interview problem.",
  },
  {
    id: "shear-moment",
    name: "Shear & Bending Moment Diagrams",
    short: "V & M Diagrams",
    stage: 1,
    blurb:
      "Drawing internal shear and moment diagrams for beams under point loads, distributed loads, and applied moments.",
  },
  {
    id: "stress-strain",
    name: "Stress, Strain & Axial Loading",
    short: "Stress–Strain",
    stage: 1,
    blurb:
      "Normal and shear stress, strain, Hooke's law, Poisson's ratio, thermal strain, and statically indeterminate bars.",
  },
  {
    id: "material-properties",
    name: "Material Behavior & Selection",
    short: "Materials",
    stage: 1,
    blurb:
      "Elastic, plastic, creep and rate-dependent behavior; stiffness vs. strength vs. toughness vs. hardness; heat treatment, and how to pick a material.",
  },
  {
    id: "structural-loading",
    name: "Structural Loading & Load Paths",
    short: "Loading",
    stage: 2,
    blurb:
      "Tracing load from application point to ground, combined axial + bending + torsion, thermal and constraint loads, impact factors, and pressure-vessel walls.",
  },
  {
    id: "stress-analysis",
    name: "Stress Analysis & Transformation",
    short: "Stress Analysis",
    stage: 2,
    blurb:
      "Getting from a load to the stress state at a point: transformation, principal stresses, Mohr's circle, plane stress vs. plane strain, and stress concentrations.",
  },
  {
    id: "beam-bending",
    name: "Beam Bending Stress",
    short: "Bending Stress",
    stage: 2,
    blurb:
      "Flexure formula, second moment of area, section modulus, composite sections, and why shape matters more than mass.",
  },
  {
    id: "beam-deflection",
    name: "Beam Deflection & Stiffness",
    short: "Deflection",
    stage: 2,
    blurb:
      "Classic deflection formulas, superposition, boundary conditions, and designing for stiffness instead of strength.",
  },
  {
    id: "torsion",
    name: "Torsion of Shafts",
    short: "Torsion",
    stage: 2,
    blurb:
      "Shear stress in shafts, polar moment of inertia, angle of twist, power transmission, and thin-walled tubes.",
  },
  {
    id: "buckling",
    name: "Column Buckling & Stability",
    short: "Buckling",
    stage: 2,
    blurb:
      "Euler buckling, effective length and end conditions, slenderness ratio, and buckling vs. yielding failure modes.",
  },
  {
    id: "failure-theories",
    name: "Failure Theories & Stress Concentrations",
    short: "Failure Theories",
    stage: 2,
    blurb:
      "Von Mises and Tresca criteria, principal stresses, Mohr's circle, factors of safety, and stress concentration factors.",
  },
  {
    id: "fatigue",
    name: "Fatigue & Fracture",
    short: "Fatigue",
    stage: 2,
    blurb:
      "S–N curves, endurance limit, mean-stress corrections (Goodman), fatigue design practice, and basics of fracture mechanics.",
  },
  {
    id: "thermodynamics",
    name: "Thermodynamics",
    short: "Thermo",
    stage: 3,
    blurb:
      "First and second laws, ideal gases, cycles (Carnot, Rankine, Brayton, refrigeration), and efficiency limits.",
  },
  {
    id: "heat-transfer",
    name: "Heat Transfer",
    short: "Heat Transfer",
    stage: 3,
    blurb:
      "Conduction, convection, and radiation; thermal resistance networks, fins, transient lumped analysis, and heat sinks.",
  },
  {
    id: "fluid-mechanics",
    name: "Fluid Mechanics",
    short: "Fluids",
    stage: 3,
    blurb:
      "Bernoulli, continuity, Reynolds number, laminar vs. turbulent flow, pipe losses, drag, and pump basics.",
  },
  {
    id: "dynamics-vibrations",
    name: "Dynamics & Vibrations",
    short: "Dynamics",
    stage: 4,
    blurb:
      "Newton's laws, energy and momentum methods, rotational dynamics, natural frequency, damping, and resonance.",
  },
  {
    id: "machine-elements",
    name: "Machine Elements: Fasteners, Gears & Bearings",
    short: "Machine Elements",
    stage: 4,
    blurb:
      "Bolted joints and preload, thread mechanics, gear ratios and tooth loads, bearing selection and life.",
  },
  {
    id: "mechanical-design",
    name: "Mechanical Design Process & Judgment",
    short: "Mech Design",
    stage: 4,
    blurb:
      "Requirements to hardware: concept selection, sizing and margin, constraint and locating schemes, failure-mode thinking, and defending a design in review.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing Processes & DFM",
    short: "Manufacturing",
    stage: 5,
    blurb:
      "Machining, injection molding, casting, sheet metal, and additive; process selection, achievable tolerances, cost drivers, and design for manufacturing.",
  },
  {
    id: "gd-and-t",
    name: "GD&T: Geometric Dimensioning & Tolerancing",
    short: "GD&T",
    stage: 5,
    blurb:
      "Feature control frames, form, orientation, position and profile controls, material condition modifiers, bonus tolerance, and why ± on a drawing is not enough.",
  },
  {
    id: "datums",
    name: "Datums & Datum Reference Frames",
    short: "Datums",
    stage: 5,
    blurb:
      "Datum features vs. simulators, the 3-2-1 locating scheme, datum precedence and degrees of freedom, datum shift, and choosing datums that match the assembly.",
  },
  {
    id: "assembly-strategies",
    name: "Assembly Strategies & Tolerance Stacks",
    short: "Assembly",
    stage: 5,
    blurb:
      "Joining method selection, locating and constraint schemes, tolerance stack-up analysis, fixturing, assembly sequence, and design for assembly.",
  },
  {
    id: "controls-instrumentation",
    name: "Controls, Sensors & Mechatronics",
    short: "Controls",
    stage: 6,
    blurb:
      "Feedback loops, sensors, actuators, data acquisition, bandwidth, PID intuition, and electromechanical system tradeoffs.",
  },
  {
    id: "analysis-testing",
    name: "Engineering Analysis, FEA & Test Validation",
    short: "Analysis & Test",
    stage: 6,
    blurb:
      "Model idealization, FEA sanity checks, verification vs. validation, test plans, uncertainty, and design review judgment.",
  },
];

export const TOPIC_IDS = TOPICS.map((t) => t.id);

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}
