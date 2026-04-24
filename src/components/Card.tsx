import { useRef, useState, useEffect } from "react";
import { ArrowIcon } from "./Icon";
import { Pill } from "./Pill";
import type { Project } from "../data/projects";

interface CardProps {
  project: Project;
  onOpen: () => void;
  idx?: number;
  headIn?: boolean;
}

export function Card({ project: p, onOpen, idx = 0, headIn = false }: CardProps) {
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
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const show = inView || headIn;

  return (
    <article
      ref={ref}
      className={`min-h-0 h-full proj-card card-reveal flex-[0_0_88vw] p-[18px] sm:flex-[0_0_300px] sm:w-[300px] sm:p-6 md:flex-[0_0_420px] md:w-[420px] bg-paper border border-ink/14 flex flex-col gap-[18px] cursor-pointer relative ${show ? "in" : ""}`}
      style={{ "--d": idx * 80 + "ms" } as React.CSSProperties}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-[12px] tracking-[.16em] text-ink-soft">N° {p.idx}</span>
        {p.vibe && <Pill vibe>⚡ Vibe-Coded</Pill>}
      </div>

      <div className="aspect-[4/3] bg-[#EDECE6] relative overflow-hidden border border-ink/10">
        <img src={p.cover} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <h3 className="font-serif text-[32px] sm:text-[38px] leading-none m-0 tracking-[-.01em] font-normal">
        {p.titleIt ? <span className="italic">{p.name}</span> : p.name}
      </h3>

      <p className="m-0 text-ink-soft text-sm leading-[1.55]">{p.tagline}</p>

      <div className="flex gap-1.5 flex-wrap">
        {p.tags.slice(0, 5).map((t) => <Pill key={t}>{t}</Pill>)}
        {p.tags.length > 5 && <Pill>+{p.tags.length - 5}</Pill>}
      </div>

      <div className="flex justify-between items-center mt-auto">
        <span className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">{p.year}</span>
        <span className="card-hint font-mono text-[10px] tracking-[.16em] uppercase text-ink-soft flex items-center gap-1.5">
          Open case{" "}
          <span className="card-arrow transition-transform duration-200"><ArrowIcon /></span>
        </span>
      </div>
    </article>
  );
}
