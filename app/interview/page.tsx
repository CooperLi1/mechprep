import type { Metadata } from "next";
import InterviewClient from "./InterviewClient";

export const metadata: Metadata = {
  title: "Mock interview — MechPrep",
  description:
    "A timed mock mechanical engineering interview with no feedback until the end, followed by a report card covering per-topic accuracy, difficulty breakdown, pacing, and what to study next.",
};

export default function InterviewPage() {
  return <InterviewClient />;
}
