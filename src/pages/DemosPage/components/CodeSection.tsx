import type { Demo } from "@/data/demos";
import { CodeEmbed } from "@/components/CodeEmbed";
import { useLanguage } from "@/i18n/LanguageContext";

interface CodeSectionProps {
  demo: Demo;
}

export function CodeSection({ demo }: CodeSectionProps) {
  const { l } = useLanguage();
  if (!demo.codeEmbed) return null;

  return (
    <section className="wrap">
      <div className="font-mono text-[10px] tracking-[.14em] uppercase text-mute mb-3">Code</div>
      <CodeEmbed embed={demo.codeEmbed} title={l(demo.title)} />
    </section>
  );
}
