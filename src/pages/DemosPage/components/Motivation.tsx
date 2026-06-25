import type { L } from "@/i18n/types";
import { useLanguage } from "@/i18n/LanguageContext";

interface MotivationProps {
  text: L;
}

export function Motivation({ text }: MotivationProps) {
  const { l } = useLanguage();
  return (
    <section className="wrap">
      <div className="flex flex-col m-auto max-w-[800px] justify-center bg-paper-dark p-[24px] rounded-md border-l-2 border-accent">
        <div className="font-mono text-[16px] tracking-[.14em] uppercase text-accent mb-3 font-bold">Motivation</div>
        <p className="text-ink-soft text-sm leading-[1.7] ">{l(text)}</p>
      </div>
    </section>
  );
}
