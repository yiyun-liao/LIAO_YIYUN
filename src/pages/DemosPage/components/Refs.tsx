import { ExternalIcon } from "@/components/Icon";
import type { Reference } from "@/data/demos";
import { useLanguage } from "@/i18n/LanguageContext";

interface RefsProps {
  refs: Reference[];
}

export function Refs({ refs }: RefsProps) {
  const { t } = useLanguage();
  if (refs.length === 0) return null;

  return (
    <section className="wrap">
      <div className="font-mono text-[10px] tracking-[.14em] uppercase text-accent mb-3">{t("demoDetail.references")}</div>
      <ul className="flex flex-col gap-2">
        {refs.map((r, i) => (
          <li key={i}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-accent transition-colors"
            >
              {r.label}
              <ExternalIcon width={12} height={12} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
