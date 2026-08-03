import type { QnAItem, Question, TopicContent } from "./types";
import { qnaToQuizItem, type BankQnA, type BankQuestion, type QuizItem } from "@/lib/quiz";
import { TOPICS } from "./topics";

import freeBodyDiagrams from "./library/free-body-diagrams";
import statics from "./library/statics";
import structuralLoading from "./library/structural-loading";
import stressAnalysis from "./library/stress-analysis";
import mechanicalDesign from "./library/mechanical-design";
import gdAndT from "./library/gd-and-t";
import datums from "./library/datums";
import assemblyStrategies from "./library/assembly-strategies";
import shearMoment from "./library/shear-moment";
import stressStrain from "./library/stress-strain";
import materialProperties from "./library/material-properties";
import beamBending from "./library/beam-bending";
import beamDeflection from "./library/beam-deflection";
import torsion from "./library/torsion";
import buckling from "./library/buckling";
import failureTheories from "./library/failure-theories";
import fatigue from "./library/fatigue";
import thermodynamics from "./library/thermodynamics";
import heatTransfer from "./library/heat-transfer";
import fluidMechanics from "./library/fluid-mechanics";
import dynamicsVibrations from "./library/dynamics-vibrations";
import machineElements from "./library/machine-elements";
import manufacturing from "./library/manufacturing";
import controlsInstrumentation from "./library/controls-instrumentation";
import analysisTesting from "./library/analysis-testing";

import freeBodyDiagramsExtra from "./library/free-body-diagrams.extra";
import staticsExtra from "./library/statics.extra";
import structuralLoadingExtra from "./library/structural-loading.extra";
import stressAnalysisExtra from "./library/stress-analysis.extra";
import mechanicalDesignExtra from "./library/mechanical-design.extra";
import gdAndTExtra from "./library/gd-and-t.extra";
import datumsExtra from "./library/datums.extra";
import assemblyStrategiesExtra from "./library/assembly-strategies.extra";
import shearMomentExtra from "./library/shear-moment.extra";
import stressStrainExtra from "./library/stress-strain.extra";
import materialPropertiesExtra from "./library/material-properties.extra";
import beamBendingExtra from "./library/beam-bending.extra";
import beamDeflectionExtra from "./library/beam-deflection.extra";
import torsionExtra from "./library/torsion.extra";
import bucklingExtra from "./library/buckling.extra";
import failureTheoriesExtra from "./library/failure-theories.extra";
import fatigueExtra from "./library/fatigue.extra";
import thermodynamicsExtra from "./library/thermodynamics.extra";
import heatTransferExtra from "./library/heat-transfer.extra";
import fluidMechanicsExtra from "./library/fluid-mechanics.extra";
import dynamicsVibrationsExtra from "./library/dynamics-vibrations.extra";
import machineElementsExtra from "./library/machine-elements.extra";
import manufacturingExtra from "./library/manufacturing.extra";
import controlsInstrumentationExtra from "./library/controls-instrumentation.extra";
import analysisTestingExtra from "./library/analysis-testing.extra";

const EXTRA_QUESTIONS: Record<string, Question[]> = {
  "free-body-diagrams": freeBodyDiagramsExtra,
  statics: staticsExtra,
  "structural-loading": structuralLoadingExtra,
  "stress-analysis": stressAnalysisExtra,
  "mechanical-design": mechanicalDesignExtra,
  "gd-and-t": gdAndTExtra,
  datums: datumsExtra,
  "assembly-strategies": assemblyStrategiesExtra,
  "shear-moment": shearMomentExtra,
  "stress-strain": stressStrainExtra,
  "material-properties": materialPropertiesExtra,
  "beam-bending": beamBendingExtra,
  "beam-deflection": beamDeflectionExtra,
  torsion: torsionExtra,
  buckling: bucklingExtra,
  "failure-theories": failureTheoriesExtra,
  fatigue: fatigueExtra,
  thermodynamics: thermodynamicsExtra,
  "heat-transfer": heatTransferExtra,
  "fluid-mechanics": fluidMechanicsExtra,
  "dynamics-vibrations": dynamicsVibrationsExtra,
  "machine-elements": machineElementsExtra,
  manufacturing: manufacturingExtra,
  "controls-instrumentation": controlsInstrumentationExtra,
  "analysis-testing": analysisTestingExtra,
};

const RAW_CONTENT: Record<string, TopicContent> = {
  "free-body-diagrams": freeBodyDiagrams,
  statics,
  "structural-loading": structuralLoading,
  "stress-analysis": stressAnalysis,
  "mechanical-design": mechanicalDesign,
  "gd-and-t": gdAndT,
  datums,
  "assembly-strategies": assemblyStrategies,
  "shear-moment": shearMoment,
  "stress-strain": stressStrain,
  "material-properties": materialProperties,
  "beam-bending": beamBending,
  "beam-deflection": beamDeflection,
  torsion,
  buckling,
  "failure-theories": failureTheories,
  fatigue,
  thermodynamics,
  "heat-transfer": heatTransfer,
  "fluid-mechanics": fluidMechanics,
  "dynamics-vibrations": dynamicsVibrations,
  "machine-elements": machineElements,
  manufacturing,
  "controls-instrumentation": controlsInstrumentation,
  "analysis-testing": analysisTesting,
};

/** A topic module that is missing or malformed must not take down every route. */
function questionsOf(v: unknown): Question[] {
  return Array.isArray(v) ? (v as Question[]) : [];
}

/** Pre-merge module shapes, exposed so `npm run validate` can report a
 *  malformed module by name instead of silently treating it as empty. */
export const RAW_MODULE_QUESTIONS: Record<string, unknown> = Object.fromEntries(
  TOPICS.map((t) => [t.id, RAW_CONTENT[t.id]?.questions])
);
export const RAW_MODULE_EXTRA: Record<string, unknown> = EXTRA_QUESTIONS;

export const CONTENT: Record<string, TopicContent> = Object.fromEntries(
  TOPICS.map((t) => {
    const base = RAW_CONTENT[t.id];
    return [
      t.id,
      {
        ...base,
        questions: [
          ...questionsOf(base?.questions),
          ...questionsOf(EXTRA_QUESTIONS[t.id]),
        ],
      },
    ];
  })
);

/** Question pools keyed by topic id, each question tagged with its topic. */
export const QUESTION_POOLS: Record<string, BankQuestion[]> = Object.fromEntries(
  TOPICS.map((t) => [
    t.id,
    (CONTENT[t.id]?.questions ?? []).map((q) => ({ ...q, topic: t.id })),
  ])
);

export const QNA_POOLS: Record<string, BankQnA[]> = Object.fromEntries(
  TOPICS.map((t) => [
    t.id,
    (CONTENT[t.id]?.qna ?? []).map((item) => qnaToQuizItem(item, t.id)),
  ])
);

export function quizPools(includeQna: boolean): Record<string, QuizItem[]> {
  return Object.fromEntries(
    TOPICS.map((t) => [
      t.id,
      includeQna
        ? [...(QUESTION_POOLS[t.id] ?? []), ...(QNA_POOLS[t.id] ?? [])]
        : QUESTION_POOLS[t.id] ?? [],
    ])
  );
}

export const ALL_QUESTIONS: BankQuestion[] = TOPICS.flatMap(
  (t) => QUESTION_POOLS[t.id]
);

export const ALL_QNA: (QnAItem & { topic: string })[] = TOPICS.flatMap((t) =>
  (CONTENT[t.id]?.qna ?? []).map((item) => ({ ...item, topic: t.id }))
);
