import type { ReactNode } from "react";

interface ViewsProps {
  children: ReactNode;
}

export function Views({ children }: ViewsProps) {
  return (
    <section className="wrap">
        <div className="border border-ink/14 overflow-hidden  rounded-2xl flex flex-col items-center gap-10">{children}</div>
    </section>
  );
}
