import { ExternalIcon } from "@/components/Icon";
import type { Reference } from "@/data/demos";
import { useLanguage } from "@/i18n/LanguageContext";

interface RefsProps {
  refs: Reference[];
  imageSource?: string;
}

export function Refs({ refs, imageSource }: RefsProps) {
  const { t } = useLanguage();
  if (refs.length === 0 && !imageSource) return null;

  return (
    <section className="wrap">
      <div className="flex flex-col m-auto max-w-[800px] justify-center">
        <div className="font-mono text-[10px] tracking-[.14em] uppercase text-accent mb-3">
          {t("demoDetail.references")}
        </div>
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
          {imageSource && (
            <li
              className="text-sm text-ink-soft [&_a]:text-ink-soft [&_a]:underline [&_a]:hover:text-accent [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: `Cover: ${imageSource}` }}
            />
          )}
        </ul>
      </div>
    </section>
  );
}
