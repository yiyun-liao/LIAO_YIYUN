import type { Demo } from "@/data/demos";
import { CodeEmbed } from "@/components/CodeEmbed";

interface CodeSectionProps {
  demo: Demo;
}

export function CodeSection({ demo }: CodeSectionProps) {
  if (!demo.codeEmbed) return null;

  return (
    <section className="wrap">
      <div className="font-mono text-[10px] tracking-[.14em] uppercase text-mute mb-3">Code</div>
      <CodeEmbed embed={demo.codeEmbed} title={demo.title} />
    </section>
  );
}
