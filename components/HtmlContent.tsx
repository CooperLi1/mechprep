import { markGlossaryTerms } from "@/lib/glossary-mark";

/**
 * Renders a content HTML string. By default, glossary terms in the text are
 * marked with a `.term` span — hover or focus one and the global TermTooltip
 * shows its definition. Pass `glossary={false}` where marking would be noise
 * or a distraction (e.g. inside multiple-choice options).
 */
export default function HtmlContent({
  html,
  className = "",
  glossary = true,
}: {
  html: string;
  className?: string;
  glossary?: boolean;
}) {
  return (
    <div
      className={`prose-eng ${className}`}
      dangerouslySetInnerHTML={{ __html: glossary ? markGlossaryTerms(html) : html }}
    />
  );
}
