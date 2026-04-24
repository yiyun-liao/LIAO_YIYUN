const PHRASE = "AI accelerates the output — architectural thinking doesn't get a discount.";

export function Ticker() {
  const repeated = [PHRASE, PHRASE, PHRASE];
  return (
    <div className="overflow-hidden border-t border-b border-ink/20 py-2.5 mt-10 ticker-mask">
      <div className="inline-flex gap-120 whitespace-nowrap animate-ticker font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">
        {repeated.map((t, i) => <span key={i} className="ticker-item">{t}</span>)}
      </div>
    </div>
  );
}
