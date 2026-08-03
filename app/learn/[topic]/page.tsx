import { notFound } from "next/navigation";
import { TOPIC_IDS } from "@/content/topics";
import LessonView from "./LessonView";

export function generateStaticParams() {
  return TOPIC_IDS.map((topic) => ({ topic }));
}

export default async function LearnPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  if (!TOPIC_IDS.includes(topic)) notFound();
  return <LessonView topicId={topic} />;
}
