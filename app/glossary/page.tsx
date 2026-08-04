import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "Glossary — MechPrep",
  description:
    "Interview-ready definitions of the terms that come up in mechanical engineering interviews: moments, welds, fatigue, fits, and more.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
