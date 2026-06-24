import { useLanguage } from "@/i18n/LanguageContext";

export function Ticker() {
  const { t } = useLanguage();
  const phrase = t("ticker.phrase");
  const repeated = [phrase, phrase, phrase];
  return (
    <div className="overflow-hidden border-t border-b border-ink/20 py-2.5 mt-10 ticker-mask">
      <div className="inline-flex gap-120 whitespace-nowrap animate-ticker font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">
        {repeated.map((text, i) => (
          <span key={i} className="ticker-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
