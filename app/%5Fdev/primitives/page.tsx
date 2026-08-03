import type { Metadata } from "next";
import Gallery from "./Gallery";

/**
 * Internal design-system gallery.
 *
 * Note on the folder name: an `app/_dev/` folder would be a Next.js PRIVATE
 * FOLDER — the underscore opts the folder and everything under it out of
 * routing entirely, so `/_dev/primitives` would 404. The documented way to
 * ship a URL segment that starts with an underscore is to name the folder with
 * the percent-encoded form, `%5Fdev`, which serves at `/_dev/primitives`.
 * See node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md
 * ("Private folders").
 *
 * Deliberately not linked from PrimaryNav, and marked noindex.
 */
export const metadata: Metadata = {
  title: "Primitives — MechPrep internals",
  robots: { index: false, follow: false },
};

export default function PrimitivesPage() {
  return <Gallery />;
}
