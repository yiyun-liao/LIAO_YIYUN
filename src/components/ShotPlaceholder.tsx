const SHOTS: Record<string, { big: string; small: string }> = {
  dashboard: { big: "Splitly · Dashboard", small: "4:3 · screenshot placeholder" },
  trading: { big: "Track Stock · Watchlist", small: "4:3 · screenshot placeholder" },
  telegram: { big: "Daily Assistant · Chat", small: "4:3 · chat or architecture diagram" },
  vcaas: { big: "AmazingTalker · vcaas", small: "4:3 · case study placeholder" },
  designer: { big: "Designer Portfolio · Archive", small: "4:3 · Wix Studio case studies" },
};

interface ShotPlaceholderProps {
  kind: string;
}

export function ShotPlaceholder({ kind }: ShotPlaceholderProps) {
  const m = SHOTS[kind] ?? SHOTS.dashboard!;
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
      <div className="font-serif text-xl text-ink-soft tracking-[-.01em]">
        {m.big}
      </div>
      <div className="font-mono text-[12px] tracking-[.16em] uppercase text-mute mt-1.5">
        {m.small}
      </div>
    </div>
  );
}
