import { notFound } from "next/navigation";
import { TOPIC_IDS } from "@/content/topics";
import PracticeClient from "./PracticeClient";

export function generateStaticParams() {
  return TOPIC_IDS.map((topic) => ({ topic }));
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  if (!TOPIC_IDS.includes(topic)) notFound();
  return <PracticeClient topicId={topic} />;
}
