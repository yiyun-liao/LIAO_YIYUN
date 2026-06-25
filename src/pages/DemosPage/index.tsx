import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DEMOS } from "@/data/demos-registry";
import type { DemoType } from "@/data/demos";
import { ExternalIcon } from "@/components/Icon";
import { Pill } from "@/components/Pill";
import { Footer } from "@/sections/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const FILTER_KEYS: (DemoType | "all")[] = ["all", "codepen", "article", "demo", "experiment"];

export function DemosPage() {
  const { t, l } = useLanguage();
  const [filter, setFilter] = useState<DemoType | "all">("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  const filtered = filter === "all" ? DEMOS : DEMOS.filter((d) => d.type === filter);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll("[data-demo]") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-idx"));
            setVisible((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filtered]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-[100px] pb-10 md:pt-[120px] md:pb-[60px]">
        <div className="wrap">
          <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">{t("demos.pageLabel")}</div>
          <h1 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 mb-6 font-normal">
            {t("demos.heading")} <span className="italic">{t("demos.headingIt")}</span>.
          </h1>
          <p className="text-ink-soft text-sm max-w-[560px] leading-[1.65] mb-8">
            {t("demos.description")}
          </p>

          <div className="flex gap-2 flex-wrap mb-10">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                className={`px-3.5 py-[7px] border rounded-full font-mono text-[10px] tracking-[.1em] uppercase transition-all duration-150 ${
                  filter === key
                    ? "border-accent text-accent bg-accent/8"
                    : "border-ink/20 text-ink-soft bg-paper hover:border-accent hover:text-accent"
                }`}
                onClick={() => setFilter(key)}
              >
                {t(`demos.${key}`)}
                {key !== "all" && (
                  <span className="ml-1.5 opacity-60">{DEMOS.filter((d) => d.type === key).length}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[60px] md:pb-20">
        <div className="wrap">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-serif text-[28px] text-ink-soft italic">{t("demos.comingSoon")}</div>
              <p className="font-mono text-[12px] tracking-[.12em] uppercase text-mute mt-3">{t("demos.comingSoonSub")}</p>
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((demo, i) => {
                const isInternal = demo.url.startsWith("/");
                const cardClass = `card-reveal overflow-hidden rounded-xl group block border border-ink/14 bg-paper transition-all duration-300 hover:border-ink hover:-translate-y-1 ${visible.has(i) ? "in" : ""}`;
                const cardStyle = { "--d": (i % 3) * 80 + "ms" } as React.CSSProperties;
                const cardContent = (
                  <>
                    {demo.image ? (
                      <div className="aspect-[16/10] bg-[#EDECE6] overflow-hidden border-b border-ink/10">
                        <img
                          src={demo.image}
                          alt={l(demo.title)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-[#EDECE6] border-b border-ink/10 grid place-items-center">
                        <span className="font-mono text-[11px] tracking-[.16em] uppercase text-mute">
                          {t(`demos.${demo.type}`)}
                        </span>
                      </div>
                    )}

                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[10px] tracking-[.14em] uppercase text-mute">{demo.date}</span>
                        <span className="font-mono text-[10px] tracking-[.1em] uppercase text-accent">
                          {t(`demos.${demo.type}`)}
                        </span>
                      </div>

                      <h3 className="font-serif text-[22px] leading-[1.15] m-0 mb-2 font-normal group-hover:text-accent transition-colors duration-200">
                        {l(demo.title)}
                      </h3>

                      <p className="m-0 mb-4 text-ink-soft text-sm leading-[1.55]">{l(demo.description)}</p>

                      <div className="flex justify-between items-end">
                        <div className="flex gap-1.5 flex-wrap">
                          {demo.tags.map((tag) => (
                            <Pill key={tag}>{tag}</Pill>
                          ))}
                        </div>
                        {!isInternal && (
                          <ExternalIcon className="text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </div>
                  </>
                );

                return isInternal ? (
                  <Link
                    key={`${demo.date}-${demo.url}`}
                    to={demo.url}
                    data-demo
                    data-idx={i}
                    className={cardClass}
                    style={cardStyle}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <a
                    key={`${demo.date}-${demo.url}`}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-demo
                    data-idx={i}
                    className={cardClass}
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-ink/10 text-center ">
            <span className="font-mono text-[11px] tracking-[.12em] uppercase text-mute">
              {DEMOS.length} demo{DEMOS.length !== 1 ? "s" : ""} · {t("demos.updatedWeekly")}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
