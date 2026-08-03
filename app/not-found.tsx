import Link from "next/link";

export default function NotFound() {
  return (
    <div className="narrow-page page-stack" data-route="roadmap">
      <section className="panel" style={{ textAlign: "center", padding: "3rem 1.5rem" }}>
        <p className="muted text-sm" style={{ fontFamily: "var(--font-mono)" }}>
          404
        </p>
        <h1 className="section-title mt-3">That page does not exist</h1>
        <p className="body-copy mt-3" style={{ marginInline: "auto" }}>
          The link may be stale, or the topic id may have changed. Everything is
          reachable from the roadmap.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link href="/" className="btn btn-primary">
            Back to roadmap
          </Link>
          <Link href="/bank" className="btn btn-secondary">
            Question bank
          </Link>
          <Link href="/test" className="btn btn-secondary">
            Build a test
          </Link>
        </div>
      </section>
    </div>
  );
}
