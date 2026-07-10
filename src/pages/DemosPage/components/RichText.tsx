import type { ReactNode } from "react";

function parseInlineCode(text: string, keyPrefix: string): ReactNode[] {
  const segments = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return segments.map((segment, i) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong
          key={`${keyPrefix}-${i}`}
          className="text-accent"
        >
          {segment.slice(2, -2)}
        </strong>
      );
    }
    if (segment.startsWith("`") && segment.endsWith("`")) {
      return (
        <code
          key={`${keyPrefix}-${i}`}
          className="text-[0.88em] px-1.5 py-[2px] bg-accent-light-hover rounded font-mono"
        >
          {segment.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = segment.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={`${keyPrefix}-${i}`}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:opacity-80"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return segment || null;
  });
}

export function renderRichText(text: string): ReactNode {
  const paragraphs = text.split("\n");

  if (paragraphs.length === 1) {
    return <>{parseInlineCode(text, "0")}</>;
  }

  return (
    <>
      {paragraphs.map((para, pi) => (
        <span key={pi} className={pi > 0 ? "block pt-3" : undefined}>
          {parseInlineCode(para, String(pi))}
        </span>
      ))}
    </>
  );
}
