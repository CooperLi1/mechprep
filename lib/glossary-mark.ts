import { GLOSSARY } from "@/content/glossary";

/**
 * Wrap the first occurrence of each glossary term in an HTML string with a
 * `.term` span that the global tooltip (components/TermTooltip) picks up.
 *
 * Rules that keep this from becoming noise:
 * - Only text OUTSIDE tags is considered, and never inside <svg>…</svg>
 *   (a marked word inside a diagram's <text> would corrupt the drawing),
 *   nor inside <a> (nested interactive content) or an existing .term span.
 * - First occurrence per term per HTML string, and at most MAX_MARKS terms
 *   per string overall.
 * - Whole-word, case-insensitive matches only.
 *
 * Pure string → string, so it runs identically on the server and during
 * hydration — no mismatch.
 */

const MAX_MARKS = 8;

interface Pattern {
  id: string;
  re: RegExp;
}

// Longest phrases first so "free-body diagram" wins over any shorter overlap.
const PATTERNS: Pattern[] = GLOSSARY.filter((e) => e.mark !== false)
  .flatMap((e) =>
    [e.term, ...(e.aliases ?? [])].map((t) => ({ id: e.id, text: t }))
  )
  .filter((p) => p.text.length >= 3)
  .sort((a, b) => b.text.length - a.text.length)
  .map((p) => ({
    id: p.id,
    re: new RegExp(
      // Escape regex chars, then let spaces/hyphens match each other so
      // "free body diagram" and "free-body diagram" both hit.
      `\\b${p.text
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/[\s-]+/g, "[\\s-]+")}\\b`,
      "i"
    ),
  }));

const TAG_SPLIT = /(<[^>]*>)/;

export function markGlossaryTerms(html: string): string {
  if (!html || !html.includes("<") && html.length < 3) return html;

  const parts = html.split(TAG_SPLIT);
  const used = new Set<string>();
  let marks = 0;
  let svgDepth = 0;
  let anchorDepth = 0;
  let termDepth = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i] ?? "";
    if (part.startsWith("<")) {
      const lower = part.toLowerCase();
      if (lower.startsWith("<svg")) svgDepth++;
      else if (lower.startsWith("</svg")) svgDepth = Math.max(0, svgDepth - 1);
      else if (lower.startsWith("<a ") || lower === "<a>") anchorDepth++;
      else if (lower.startsWith("</a")) anchorDepth = Math.max(0, anchorDepth - 1);
      else if (lower.includes('class="term"')) termDepth++;
      else if (lower.startsWith("</span") && termDepth > 0) termDepth--;
      continue;
    }
    if (svgDepth > 0 || anchorDepth > 0 || termDepth > 0 || part.trim() === "") continue;
    if (marks >= MAX_MARKS) break;

    // Chunks alternate between live text and frozen (already-marked) markup,
    // so a later pattern can never match inside markup inserted by an earlier
    // one (e.g. inside a data-term="free-body-diagram" attribute).
    let chunks: { text: string; frozen: boolean }[] = [{ text: part, frozen: false }];
    for (const p of PATTERNS) {
      if (marks >= MAX_MARKS) break;
      if (used.has(p.id)) continue;
      for (let c = 0; c < chunks.length; c++) {
        const chunk = chunks[c];
        if (!chunk || chunk.frozen) continue;
        const m = p.re.exec(chunk.text);
        if (!m) continue;
        used.add(p.id);
        marks++;
        const start = m.index;
        const end = start + m[0].length;
        chunks = [
          ...chunks.slice(0, c),
          { text: chunk.text.slice(0, start), frozen: false },
          {
            text: `<span class="term" tabindex="0" data-term="${p.id}">${m[0]}</span>`,
            frozen: true,
          },
          { text: chunk.text.slice(end), frozen: false },
          ...chunks.slice(c + 1),
        ];
        break;
      }
    }
    parts[i] = chunks.map((c) => c.text).join("");
  }

  return parts.join("");
}
