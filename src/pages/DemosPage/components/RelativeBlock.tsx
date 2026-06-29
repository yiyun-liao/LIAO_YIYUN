import type { RelativeArticle } from "@/data/demos";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@/components/Icon";

interface RelativeBlockProps {
  previous: boolean;
  rel: RelativeArticle;
}

export function RelativeBlock({ previous, rel }: RelativeBlockProps) {
  const { t, l } = useLanguage();
  return (
    <section className="wrap">
      <div className="flex flex-col m-auto max-w-[800px] justify-center bg-accent-light pt-4 pb-4 pr-4 pl-2 rounded-md hover:bg-accent-light-hover active:bg-accent-light-active">
        <Link
          to={rel.url}
          className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors"
        >
          <div className="font-mono text-[16px] uppercase text-accent font-bold bg-accent-light-active p-2 rounded-sm">
            {previous ? t("demos.previous") : t("demos.next")}
          </div>
          <p className="text-ink-soft text-[14px] font-bold">{l(rel.title)}</p>
          <ArrowUpRightIcon/>
        </Link>
      </div>
    </section>
  );
}
