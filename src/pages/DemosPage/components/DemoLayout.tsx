import type { ReactNode } from "react";
import type { Demo } from "@/data/demos";
import { Footer } from "@/sections/Footer";
import { Header } from "./Header";
import { Views } from "./View";
import { Emphasis } from "./Emphasis";
import { Sections } from "./Sections";
import { Motivation } from "./Motivation";
import { Refs } from "./Refs";
import { CodeSection } from "./CodeSection";

interface DemoLayoutProps {
  demo: Demo;
  title: ReactNode;
  children: ReactNode;
}

export function DemoLayout({ demo, title, children }: DemoLayoutProps) {
  const intro = demo.introduction;

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={title} />

      <Views>{children}</Views>

      {intro?.emphasis && intro.emphasis.length > 0 && (
        <Emphasis intros={intro} />
      )}

      {intro?.sections && intro.sections.length > 0 && (
        <Sections sections={intro.sections} />
      )}

      {intro?.motivation && <Motivation text={intro.motivation} />}

      {intro?.refs && <Refs refs={intro.refs} />}

      <CodeSection demo={demo} />

      <Footer />
    </div>
  );
}
