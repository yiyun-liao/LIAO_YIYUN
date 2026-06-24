import { Button } from "@/components/Button";
import { NavLink } from "@/components/NavLink";
import { DownloadIcon, MailIcon, GitHubIcon, LinkedInIcon, QuoteIcon } from "@/components/Icon";
import { LINKS } from "@/data/constants";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeroLinksProps {
  onCta: () => void;
}

function HeroLinks({ onCta }: HeroLinksProps) {
  const { t } = useLanguage();
  return (
    <div className="flex gap-5 items-center flex-wrap mt-6">
      <Button variant="accent" onClick={onCta}>
        <DownloadIcon /> {t("hero.downloadCv")}
      </Button>
      <NavLink underline icon={MailIcon} onClick={() => (window.location.href = LINKS.email)}>
        {t("hero.email")}
      </NavLink>
      <NavLink underline icon={GitHubIcon} onClick={() => window.open(LINKS.github, "_blank")}>
        {t("hero.github")}
      </NavLink>
      <NavLink underline icon={LinkedInIcon} onClick={() => window.open(LINKS.linkedin, "_blank")}>
        {t("hero.linkedin")}
      </NavLink>
    </div>
  );
}

interface HeroProps {
  onCta: () => void;
}

export function Hero({ onCta }: HeroProps) {
  const { t } = useLanguage();
  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-12 items-stretch min-h-[calc(100vh-180px)]">
      <div className="flex flex-col justify-between relative z-10 h-[calc(100vh-120px)] md:z-auto md:h-auto">
        <div className="flex gap-6 items-center">
          <span className="font-mono text-[12px] tracking-[.08em] uppercase text-ink-soft">{t("hero.label")}</span>
        </div>
        <div className="relative z-[100] [text-shadow:0_0_2px_var(--color-paper),0_0_2px_var(--color-paper)] md:static md:z-auto md:[text-shadow:none]">
          <h1 className="font-serif text-[clamp(56px,16vw,120px)] sm:text-[clamp(68px,13vw,220px)] leading-[.86] tracking-[-.02em] m-0 font-normal">
            {t("hero.firstName")}
            <br />
            <span className="italic">{t("hero.lastName")}</span>
          </h1>
          <div className="mt-[16px] max-w-[520px] font-sans text-[12px] leading-[1.55] text-ink-soft mb-12">
            <p>{t("hero.description")}</p>
            <span className="block mt-4 text-[#2467D2] font-mono text-[16px] uppercase">
              <QuoteIcon /> {t("hero.cta")}
            </span>
            <span className="block text-[#2467D2] font-mono text-[12px] uppercase">
              {t("hero.tagline")}
            </span>
          </div>
          <HeroLinks onCta={onCta} />
        </div>
      </div>

      <div className="hero-portrait absolute top-0 right-0 w-[306px] h-[420px] overflow-hidden has-photo md:relative md:inset-auto md:w-auto md:h-auto md:aspect-auto md:min-h-0 md:overflow-hidden">
        <div className="absolute right-6 top-[18px] font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft [writing-mode:vertical-rl] rotate-180 z-[2] hidden md:block">
          {t("hero.sideLabel")}
        </div>
        <img
          src="assets/portrait.png"
          alt="Yi-Yun Liao"
          className="hero-photo absolute bottom-0 right-0 h-full w-auto max-w-none object-cover object-right-bottom md:left-1/2 md:-translate-x-1/2 md:right-auto md:object-contain md:object-bottom"
        />
        <div className="absolute left-[18px] bottom-8 text-ink-soft text-[10px] tracking-[.16em] z-[2] bg-paper/70 px-2 py-1 backdrop-blur-[4px] font-mono uppercase hidden md:block">
          {t("hero.status")}
        </div>
        <div className="absolute left-[18px] bottom-4 text-ink-soft text-[10px] tracking-[.16em] z-[2] bg-paper/70 px-2 py-1 backdrop-blur-[4px] font-mono uppercase hidden md:block">
          {t("hero.botHint")}
        </div>
      </div>
    </div>
  );
}
