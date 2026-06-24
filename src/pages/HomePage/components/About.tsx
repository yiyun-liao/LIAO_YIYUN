import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`py-[60px] md:py-20 relative ${inView ? "about-in" : ""}`}>
      <div className="wrap">
        <div className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:gap-6 md:mb-14">
          <div>
            <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">{t("about.label")}</div>
            <h2 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 font-normal">
              {t("about.heading")} <span className="italic">{t("about.headingIt")}</span> {t("about.headingSuffix")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-20 lg:gap-20 md:grid-cols-[1.1fr_1fr] items-start">
          <p className="font-serif text-[clamp(28px,3.2vw,46px)] leading-[1.18] tracking-[-.015em] m-0 flex flex-col gap-[2px]">
            <span className="about-line">
              <span>
                {t("about.line1")} <em className="text-accent italic">{t("about.ntust")}</em>,
              </span>
            </span>
            <span className="about-line">
              <span>{t("about.line2")}</span>
            </span>
            <span className="about-line">
              <span>{t("about.line3")}</span>
            </span>
            <span className="about-line">
              <span>{t("about.line4")}</span>
            </span>
            <span className="about-line">
              <span>
                {t("about.line5")} <em className="text-accent italic">{t("about.line5It")}</em>
              </span>
            </span>
            <span className="about-line mt-6 pt-5 border-t border-ink/18">
              <span className="text-[.62em] text-ink-soft font-sans leading-[1.55] tracking-normal font-normal">
                {t("about.paragraph")}
              </span>
            </span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div className="about-card-reveal">
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">
                {t("about.approach")}
              </h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">
                {t("about.approachText")}
              </p>
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">
                {t("about.now")}
              </h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">
                {t("about.nowText")} <strong className="text-ink font-medium">{t("about.nowBold")}</strong> {t("about.nowSuffix")}
              </p>
            </div>
            <div className="about-card-reveal">
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">
                {t("about.toolkit")}
              </h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">
                {t("about.toolkitText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
