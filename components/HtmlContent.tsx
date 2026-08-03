export default function HtmlContent({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={`prose-eng ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
