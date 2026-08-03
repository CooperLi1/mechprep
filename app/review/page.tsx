import type { Metadata } from "next";
import ReviewClient from "./ReviewClient";

export const metadata: Metadata = {
  title: "Review — MechPrep",
  description:
    "Spaced-repetition drill over the questions you are due to see again. Questions you get wrong come back tomorrow; questions you keep getting right stop coming back.",
};

export default function ReviewPage() {
  return <ReviewClient />;
}
