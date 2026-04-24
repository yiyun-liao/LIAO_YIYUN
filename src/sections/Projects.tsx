import { useRef, useState, useEffect } from "react";
import { Card } from "../components/Card";
import { PROJECTS } from "../data/projects";

interface ProjectsProps {
  onOpen: (id: string) => void;
}

export function Projects({ onOpen }: ProjectsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const SPEED = 40;
    const step = (ts: number) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      if (!paused && !document.hidden) {
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        if (atEnd) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += SPEED * dt;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const on = () => setPaused(true);
    const off = () => setPaused(false);
    el.addEventListener("mouseenter", on);
    el.addEventListener("mouseleave", off);
    el.addEventListener("touchstart", on, { passive: true });
    el.addEventListener("touchend", off);
    el.addEventListener("focusin", on);
    el.addEventListener("focusout", off);
    return () => {
      el.removeEventListener("mouseenter", on);
      el.removeEventListener("mouseleave", off);
      el.removeEventListener("touchstart", on);
      el.removeEventListener("touchend", off);
      el.removeEventListener("focusin", on);
      el.removeEventListener("focusout", off);
    };
  }, []);

  const headRef = useRef<HTMLDivElement>(null);
  const [headIn, setHeadIn] = useState(false);
  useEffect(() => {
    if (!headRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setHeadIn(true);
        });
      },
      { threshold: 0.25 },
    );
    io.observe(headRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="py-[60px] md:py-20">
      <div className="wrap">
        <div ref={headRef} className={`head-reveal flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:gap-6 md:mb-12 ${headIn ? "in" : ""}`}>
          <div>
            <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">002 · Selected Projects</div>
            <h2 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 font-normal">
              Cases <span className="italic">&amp; craft</span>
            </h2>
          </div>
          <div className="flex gap-2.5 items-center">
            <span className="hidden md:inline-flex items-center gap-2 font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mr-3">
              <span className={`inline-block w-2 h-2 rounded-full bg-accent ${paused ? "" : "live-dot"}`} style={paused ? { background: "var(--color-mute)" } : undefined} />
              {paused ? "Paused · hover to read" : "Hover to pause"}
            </span>
          </div>
        </div>

        <div className="relative h-[480px] md:h-[640px]">
          <div className="h-full flex gap-7 overflow-x-auto overflow-y-hidden proj-scroll-bleed" ref={scrollRef} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {PROJECTS.map((p, i) => (
              <Card key={p.id} project={p} onOpen={() => onOpen(p.id)} idx={i} headIn={headIn} />
            ))}
            <div className="flex-[0_0_40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
