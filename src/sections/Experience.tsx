import { useRef, useState, useEffect} from "react";

import { EXPERIENCE } from "../data/experience";

function MoreNotePanel({ moreNote, hovered }: { moreNote: string[]; hovered: boolean }) {
  return (
    <div
      className="hidden md:flex absolute top-0 right-0 bottom-0 m-4 md:left-[420px] lg:left-[520px] items-center md:border-l-2 md:border-accent md:pl-3.5 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] pointer-events-none"
      style={{
        transform: hovered ? "translateX(0)" : "translateX(100%)",
        opacity: hovered ? 1 : 0,
      }}
    >
      <ul className="m-0 pl-[14px] text-[13px] leading-[1.55] text-ink-soft list-disc flex-col">
        {moreNote.map((m) => <li key={m} className="mb-1.5">{m}</li>)}
      </ul>
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleExpand = (idx: number) => {
    setExpandedRows((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  useEffect(() => {
    const rows = ref.current?.querySelectorAll("[data-exp]") ?? [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-i"));
            setVisibleRows((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="py-[60px] md:py-20" ref={ref}>
      <div className="wrap">
        <div className="flex flex-col items-start gap-4 mb-8 md:flex-row md:items-end md:justify-between md:gap-6 md:mb-12">
          <div>
            <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">001 · Experience</div>
            <h2 className="font-serif text-[clamp(42px,6vw,96px)] leading-[.95] tracking-[-.02em] mt-2 font-normal">
              At <span className="italic">work</span>.
            </h2>
          </div>
        </div>

        {EXPERIENCE.map((row, i) => {
          const hovered = hoveredRow === i;
          return (
            <div
              key={i}
              data-exp
              data-i={i}
              className={`reveal grid grid-cols-1 gap-4 md:grid-cols-[180px_1fr_240px] md:gap-7 lg:grid-cols-[220px_1fr_280px] lg:gap-10 py-8 border-t border-ink/15 items-start relative last:border-b overflow-hidden ${visibleRows.has(i) ? "in" : ""} ${hovered ? "md:bg-[#D5DBFF]" : ""}`}
              style={{ "--d": i * 90 + "ms" } as React.CSSProperties}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <div>
                <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft flex align-top">{row.when}</div>
              </div>
              <div className="relative">
                <h3 className="m-0 mb-2.5 flex items-center gap-3">
                  <a href={row.url} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                    <img src={row.logo} alt={row.company} className="h-auto w-40 object-contain" />
                  </a>
                </h3>
                <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft mb-4">{row.role}</div>
                <div className="md:hidden">
                  <ul className="m-0 pl-[18px] text-ink-soft text-sm leading-[1.6] list-disc">
                    {row.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.2,.7,.2,1)]"
                    style={{ maxHeight: expandedRows.has(i) ? "600px" : "0" }}
                  >
                    <ul className="m-0 mt-2 pl-[18px] text-ink-soft text-sm leading-[1.6] list-disc">
                      {row.moreNote.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                  </div>
                  <button
                    className="mt-3 font-mono text-[11px] tracking-[.12em] uppercase text-accent flex items-center gap-1.5"
                    onClick={(e) => { e.stopPropagation(); toggleExpand(i); }}
                  >
                    {expandedRows.has(i) ? "Collapse" : "More"}
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`transition-transform duration-300 ${expandedRows.has(i) ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div
                  className="hidden md:block transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
                  style={{
                    transform: hovered ? "translateX(-100%)" : "translateX(0)",
                    opacity: hovered ? 0 : 1,
                  }}
                >
                  <ul className="m-0 pl-[18px] text-ink-soft text-sm leading-[1.6] list-disc">
                    {row.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
              <MoreNotePanel moreNote={row.moreNote} hovered={hovered} />
              <div
                className="hidden md:block text-[13px] leading-[1.55] text-ink-soft border-t border-ink/15 pt-4 md:border-t-0 md:border-l-2 md:border-accent md:pl-3.5 md:pt-0 transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
                style={{
                  transform: hovered ? "translateX(-100%)" : "translateX(0)",
                  opacity: hovered ? 0 : 1,
                }}
              >
                {row.note}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
