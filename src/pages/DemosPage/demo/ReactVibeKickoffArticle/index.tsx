import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Emphasis } from "../../components/Emphasis";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { Motivation } from "../../components/Motivation";
import { Refs } from "../../components/Refs";
import { RelativeBlock } from "../../components/RelativeBlock";
import {
  REACTVIBEKICKOFFARTICLE,
  INTRO_SECTION,
  SKILL_SECTION,
  SKILL_FRONTMATTER_CODE,
  FLOW_SECTION,
  FLOW_CODE,
  TECHSTACK_SECTION,
  TECHSTACK_CODE,
  CONVENTION_SECTION,
  CONVENTION_CODE,
  TIPS_SECTION,
  TIPS_CODE,
  PRINCIPLES_SECTION,
  PRINCIPLES_CODE,
  FULL_SKILL_SECTION,
  FULL_SKILL_CODE,
} from "./content";

const demo = REACTVIBEKICKOFFARTICLE;
const intro = demo.introduction!;

export function ReactVibeKickoffArticle() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Motivation section={INTRO_SECTION} />
      {demo.previousArticle && <RelativeBlock previous={true} rel={demo.previousArticle} />}
      <Sections section={SKILL_SECTION} />
      <Emphasis intros={intro} />
      <CodeBlockView block={SKILL_FRONTMATTER_CODE} />

      <Sections section={FLOW_SECTION} index={1} />
      <CodeBlockView block={FLOW_CODE} />

      <Sections section={TECHSTACK_SECTION} index={2} />
      <CodeBlockView block={TECHSTACK_CODE} />

      <Sections section={CONVENTION_SECTION} index={3} />
      <CodeBlockView block={CONVENTION_CODE} />

      <Sections section={TIPS_SECTION} index={4} />
      <CodeBlockView block={TIPS_CODE} />

      <Sections section={PRINCIPLES_SECTION} index={5} />
      <CodeBlockView block={PRINCIPLES_CODE} />

      <Sections section={FULL_SKILL_SECTION} />
      <CodeBlockView block={FULL_SKILL_CODE} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle} />}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
