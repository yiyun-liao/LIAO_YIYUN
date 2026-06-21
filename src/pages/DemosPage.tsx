import { Footer } from "../sections/Footer";

export function DemosPage() {
  return (
    <>
      <section className="pt-[100px] pb-10 md:pt-[120px] md:pb-[60px]">
        <div className="wrap">
          <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">Demos & Experiments</div>
          <h1 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 mb-10 font-normal">
            Small <span className="italic">demos</span>.
          </h1>
          <p className="text-ink-soft text-sm max-w-[560px] leading-[1.65]">
            CodePen experiments, design snippets, and short articles — the smaller things that don't fit a full case study.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
