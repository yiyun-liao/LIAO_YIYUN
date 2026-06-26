import type { BodySection } from "@/data/demos";
import { useLanguage } from "@/i18n/LanguageContext";
import { renderRichText } from "./RichText";

interface SectionsProps {
  section: BodySection;
  index?: number;
}

export function Sections({ section, index }: SectionsProps) {
  const { l } = useLanguage();
  return (
    <div className="flex flex-col m-auto max-w-[800px] justify-center">
      {!!index && 
        <div className="font-mono text-[16px] tracking-[.14em] uppercase font-bold text-accent mb-3">
          {String(index + 1).padStart(2, "0")}
        </div>
      }
      <h3 className="font-serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-[-.01em] mb-4">{l(section.title)}</h3>
      <p className="text-ink-soft text-sm leading-[1.7] mb-6">{renderRichText(l(section.content))}</p>
    </div>
  );
}
