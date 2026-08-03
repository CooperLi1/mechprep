"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Route-level error boundary. Without this, a throw anywhere in a route tree
 * renders Next's stock error page, which offers no way back into the app and
 * loses the user's place entirely.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Local-only app: no telemetry endpoint to report to, but keep the detail
    // in the console so a failure is diagnosable rather than silent.
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="narrow-page page-stack" data-route="roadmap">
      <section className="panel" style={{ padding: "2.5rem 1.5rem" }}>
        <h1 className="section-title">Something broke on this page</h1>
        <p className="body-copy mt-3">
          Your saved progress is stored separately in this browser and has not
          been affected. Answers from a quiz that was still in progress are lost.
        </p>
        <div className="soft-callout mt-4">
          <p className="muted text-xs" style={{ fontFamily: "var(--font-mono)", wordBreak: "break-word" }}>
            {error.message || "Unknown error"}
            {error.digest ? ` · ${error.digest}` : ""}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={reset} className="btn btn-primary">
            Try again
          </button>
          <Link href="/" className="btn btn-secondary">
            Back to roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}
