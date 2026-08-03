// Internal QA gallery: renders every SVG figure in the app (lesson figures are
// extracted from section HTML; question figures rendered directly) so all
// diagrams can be visually reviewed on one page per topic.
import { TOPICS } from "@/content/topics";
import { CONTENT } from "@/content/index";

function extractSvgs(html: string): string[] {
  const out: string[] = [];
  const re = /<svg[\s\S]*?<\/svg>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) out.push(m[0]);
  return out;
}

export default function FiguresPage() {
  return (
    <div className="page-stack" data-route="roadmap">
      <div>
        <h1 className="section-title">Figure QA gallery</h1>
        <p className="body-copy mt-2 text-sm">
          A compact review surface for lesson and question diagrams.
        </p>
      </div>
      {TOPICS.map((t) => {
        const c = CONTENT[t.id];
        const lessonSvgs = [
          ...extractSvgs(c.lesson.intro),
          ...c.lesson.sections.flatMap((s) => extractSvgs(s.html)),
        ];
        const qFigs = c.questions
          .filter((q) => q.figure)
          .map((q) => ({ id: q.id, svg: q.figure! }));
        if (lessonSvgs.length === 0 && qFigs.length === 0) return null;
        return (
          <section key={t.id} id={t.id}>
            <h2 className="mb-4 border-b border-stone-200 pb-2 text-xl font-bold">
              {t.name}{" "}
              <span className="text-sm font-normal text-stone-500">
                ({lessonSvgs.length} lesson figs, {qFigs.length} question figs)
              </span>
            </h2>
            <div className="dense-grid topic-grid">
              {lessonSvgs.map((svg, i) => (
                <div key={`l${i}`} className="panel">
                  <div className="mb-1 font-mono text-xs text-stone-500">
                    {t.id} · lesson fig {i + 1}
                  </div>
                  <div className="qfig" dangerouslySetInnerHTML={{ __html: svg }} />
                </div>
              ))}
              {qFigs.map((f) => (
                <div key={f.id} className="panel">
                  <div className="mb-1 font-mono text-xs text-stone-500">{f.id}</div>
                  <div className="qfig" dangerouslySetInnerHTML={{ __html: f.svg }} />
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
