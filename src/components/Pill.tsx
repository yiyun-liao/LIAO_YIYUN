import type { HTMLAttributes, ReactNode } from "react";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  vibe?: boolean;
  children: ReactNode;
}

export function Pill({ vibe, children, ...props }: PillProps) {
  const base = "inline-block px-2.5 py-[5px] border rounded-full font-mono text-[10px] tracking-[.1em] uppercase";
  const cls = vibe
    ? `${base} border-accent text-accent bg-accent/8`
    : `${base} border-ink/30 text-ink-soft bg-paper-white`;

  return <span className={cls} {...props}>{children}</span>;
}
