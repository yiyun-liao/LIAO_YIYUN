import { Button } from "../components/Button";
import { NavLink } from "../components/NavLink";
import { DownloadIcon, MailIcon, GitHubIcon, LinkedInIcon } from "../components/Icon";
import { LINKS } from "../data/constants";

interface HeroLinksProps {
  onCta: () => void;
}

function HeroLinks({ onCta }: HeroLinksProps) {
  return (
    <div className="flex gap-5 items-center flex-wrap mt-6">
      <Button variant="accent" onClick={onCta}>
        <DownloadIcon /> Download CV
      </Button>
      <NavLink underline icon={MailIcon} onClick={() => window.location.href = LINKS.email}>
        Email
      </NavLink>
      <NavLink underline icon={GitHubIcon} onClick={() => window.open(LINKS.github, "_blank")}>
        GitHub
      </NavLink>
      <NavLink underline icon={LinkedInIcon} onClick={() => window.open(LINKS.linkedin, "_blank")}>
        LinkedIn
      </NavLink>
    </div>
  );
}

interface HeroProps {
  onCta: () => void;
}

export function Hero({ onCta }: HeroProps) {
  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr] md:gap-12 items-stretch min-h-[calc(100vh-180px)]">
      <div className="flex flex-col justify-between relative z-10 h-[calc(100vh-120px)] md:z-auto md:h-auto">
        <div className="flex gap-6 items-center">
          <span className="font-mono text-[12px] tracking-[.08em] uppercase text-ink-soft">— 2026 / PORTFOLIO</span>
        </div>
        <div className="relative z-[100] [text-shadow:0_0_2px_var(--color-paper),0_0_2px_var(--color-paper)] md:static md:z-auto md:[text-shadow:none]">
          <h1 className="font-serif text-[clamp(56px,16vw,120px)] sm:text-[clamp(68px,13vw,220px)] leading-[.86] tracking-[-.02em] m-0 font-normal">
            Yi-<span className="text-[#2467D2]">Yun</span><br />
            <span className="italic">Liao</span>
          </h1>
          <div className="mt-[18px] max-w-[520px] font-sans text-[15px] leading-[1.55] text-ink-soft mb-12">
            <p>
              Frontend Engineer working on real-time platforms. Former lead designer.
            </p>
            <span className="block mt-2 text-[#2467D2] font-mono text-[12px] uppercase">
              I bring the full craft from sketch to ship.
            </span>
          </div>
          <HeroLinks onCta={onCta} />
        </div>
      </div>

      <div className="hero-portrait absolute top-0 right-0 w-[306px] h-[420px] overflow-hidden has-photo md:relative md:inset-auto md:w-auto md:h-auto md:aspect-auto md:min-h-0 md:overflow-hidden">
        <div className="absolute right-6 top-[18px] font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft [writing-mode:vertical-rl] rotate-180 z-[2] hidden md:block">Code & Design</div>
        <img src="assets/portrait.png" alt="Yi-Yun Liao" className="hero-photo absolute bottom-0 right-0 h-full w-auto max-w-none object-cover object-right-bottom md:left-1/2 md:-translate-x-1/2 md:right-auto md:object-contain md:object-bottom" />
        <div className="absolute left-[18px] bottom-8 text-ink-soft text-[10px] tracking-[.16em] z-[2] bg-paper/70 px-2 py-1 backdrop-blur-[4px] font-mono uppercase hidden md:block">Currently seeking · Frontend</div>
        <div className="absolute left-[18px] bottom-4 text-ink-soft text-[10px] tracking-[.16em] z-[2] bg-paper/70 px-2 py-1 backdrop-blur-[4px] font-mono uppercase hidden md:block">ask about me by bot ➘</div>
      </div>
    </div>
  );
}
