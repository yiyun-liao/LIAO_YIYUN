import { useRef, useState, useEffect } from "react";

export function About() {
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
            <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">003 · About</div>
            <h2 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 font-normal">
              The <span className="italic">long</span> way round.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-20 lg:gap-20 md:grid-cols-[1.1fr_1fr] items-start">
          <p className="font-serif text-[clamp(28px,3.2vw,46px)] leading-[1.18] tracking-[-.015em] m-0 flex flex-col gap-[2px]">
            <span className="about-line"><span>Industrial design grad from <em className="text-accent italic">NTUST</em>,</span></span>
            <span className="about-line"><span>three years as a website product designer,</span></span>
            <span className="about-line"><span>a full-stack bootcamp detour,</span></span>
            <span className="about-line"><span>shipping frontend code on real-time platforms,</span></span>
            <span className="about-line"><span>and <em className="text-accent italic">now looking for the next team.</em></span></span>
            <span className="about-line mt-6 pt-5 border-t border-ink/18">
              <span className="text-[.62em] text-ink-soft font-sans leading-[1.55] tracking-normal font-normal">
                Design-trained engineers skip a lot of ping-pong between roles — I can read a spec and feel where the
                UX cracks are before the first commit.
              </span>
            </span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div className="about-card-reveal">
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">Approach</h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">I think in products, not tickets. User intent first, then data model, then interface.</p>
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">Now</h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">
                Deep in <strong className="text-ink font-medium">AI-assisted development</strong> — AI accelerates output, but architectural thinking
                doesn&apos;t get a discount.
              </p>
            </div>
            <div className="about-card-reveal">
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">Toolkit</h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">React / Next / TS. Node + FastAPI. Postgres + Firebase. Figma when it matters. Claude + agents for leverage.</p>
              <h4 className="about-dash relative font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2 pl-[22px]">Outside work</h4>
              <p className="m-0 mb-5 ml-[22px] text-sm leading-[1.65] text-ink-soft">Reading on systems design & careers. Writing postmortems of my own side projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
