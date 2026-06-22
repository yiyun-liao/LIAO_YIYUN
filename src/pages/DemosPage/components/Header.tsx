import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "@/components/Icon";
import type { Demo } from "@/data/demos";

interface HeaderProps {
  demo: Demo;
  title: ReactNode;
}

export function Header({ demo, title }: HeaderProps) {
  return (
    <section className="pt-[100px] md:pt-[120px]">
      <div className="wrap">
        <Link
          to="/demos"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[.14em] uppercase text-mute hover:text-accent transition-colors mb-8"
        >
          <ArrowIcon />
          Demos
        </Link>

        <div className="font-mono text-[12px] tracking-[.16em] uppercase text-ink-soft">{demo.type}</div>
        <h1 className="font-serif text-[clamp(36px,5vw,72px)] leading-[.95] tracking-[-.02em] mt-2 mb-4 font-normal">
            {title}
        </h1>
        {demo.introduction?.body && (
          <p className="text-ink-soft text-sm max-w-[520px] leading-[1.65] mb-12">{demo.introduction.body}</p>
        )}
      </div>
    </section>
  );
}
