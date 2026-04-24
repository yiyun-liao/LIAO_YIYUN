import { useEffect, useState, useRef, useCallback } from "react";
import { CloseIcon, ExternalIcon } from "./Icon";
import { Pill } from "./Pill";
import { Button } from "./Button";
import type { Project } from "../data/projects";

interface CarouselProps {
  images: string[];
  name: string;
}

function Carousel({ images, name }: CarouselProps) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<number>(0);

  const goTo = useCallback((n: number) => {
    setIdx((n + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  return (
    <div className="relative aspect-[16/10] bg-[#EDECE6] overflow-hidden border border-ink/14 group">
      <div
        className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`${name} ${i + 1}`} className="w-full h-full object-contain flex-shrink-0 bg-[#EDECE6]" />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-paper/80 border border-ink/20 grid place-items-center text-ink-soft hover:bg-paper hover:text-ink transition-all duration-150 opacity-0 group-hover:opacity-100"
            onClick={(e) => { e.stopPropagation(); goTo(idx - 1); resetTimer(); }}
            aria-label="Previous image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-paper/80 border border-ink/20 grid place-items-center text-ink-soft hover:bg-paper hover:text-ink transition-all duration-150 opacity-0 group-hover:opacity-100"
            onClick={(e) => { e.stopPropagation(); goTo(idx + 1); resetTimer(); }}
            aria-label="Next image"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === idx ? "bg-ink" : "bg-ink/30"}`}
                onClick={(e) => { e.stopPropagation(); goTo(i); resetTimer(); }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface ModalProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Modal({ project: p, onClose, onPrev, onNext }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="modal-enter fixed inset-0 bg-ink/88 z-90 flex items-stretch justify-stretch p-0"
      onClick={onClose}
    >
      <div
        className="modal-rise bg-paper w-full max-w-[1400px] m-5 md:my-10 md:mx-auto border border-ink/20 max-h-[calc(100vh-40px)] md:max-h-[calc(100vh-80px)] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="sticky top-0 float-right mt-4.5 mr-3.5 z-5 w-11 h-11 rounded-full border border-ink bg-paper grid place-items-center hover:bg-ink hover:text-paper"
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>
        <div className="pt-7 px-[22px] pb-12 md:pt-12 md:px-14 md:pb-[72px]">
          <div className="grid grid-cols-1 gap-3 items-start md:grid-cols-[auto_1fr_auto] md:gap-7 md:items-end border-b border-ink pb-7 mb-9">
            <div className="font-serif text-[56px] md:text-[100px] leading-[.8] font-normal tracking-[-.02em]">{p.idx}</div>
            <div>
              <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mb-2.5">
                {p.role} · {p.year} · {p.status}
                {p.vibe && <Pill vibe className="ml-3">⚡ Vibe-Coded</Pill>}
              </div>
              <h2 className="font-serif text-[clamp(48px,7vw,110px)] leading-[.9] tracking-[-.02em] m-0 font-normal">
                {p.titleIt ? <span className="italic">{p.name}</span> : p.name}
              </h2>
            </div>
            <div className="hidden md:block font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft text-right">
              <div className="mt-2.5">Esc to close</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.2fr_.8fr] md:gap-14">
            <div>
              <Carousel images={p.images} name={p.name} />
              <h4 className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mt-7 mb-2.5">Tagline</h4>
              <p className="m-0 mb-3 font-serif text-[22px] leading-[1.35] text-ink">
                {p.tagline}
              </p>
              <h4 className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mt-7 mb-2.5">Overview</h4>
              <p className="m-0 mb-3 text-[15px] leading-[1.65] text-ink-soft">{p.overview}</p>
            </div>
            <div>
              <h4 className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mb-2.5">Highlights</h4>
              <ul className="m-0 pl-[18px] text-ink-soft text-sm leading-[1.7] list-disc">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <h4 className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mt-7 mb-2.5">Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
              <h4 className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mt-7 mb-2.5">Links</h4>
              <div className="flex gap-3 flex-wrap mt-7">
                {p.links.map((l) =>
                  l.disabled ? (
                    <Button key={l.label} style={{ opacity: 0.4, cursor: "not-allowed" }}>
                      {l.label}
                    </Button>
                  ) : (
                    <Button key={l.label} href={l.href} target="_blank" rel="noopener">
                      {l.label} <ExternalIcon />
                    </Button>
                  ),
                )}
              </div>
              {p.linkNote && (
                <p className="m-0 mt-3 text-[12px] leading-[1.5] text-mute font-mono tracking-[.04em]">{p.linkNote}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
