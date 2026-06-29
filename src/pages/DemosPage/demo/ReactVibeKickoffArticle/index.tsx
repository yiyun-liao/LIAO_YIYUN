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
  SKILL_DESCRIPTION_CODE_SECTION,
  SKILL_CODE_SECTION,
  SKILL_FLOW_SECTION,
  SKILL_FLOW_CODE_SECTION,
  SKILL_TECHSTACK_SECTION,
  SKILL_TECHSTACK_CODE_SECTION,
  SKILL_CONVENTION_SECTION,
  SKILL_CONVENTION_CODE_SECTION,
  SKILL_TIPS_SECTION,
  SKILL_TIPS_CODE_SECTION,
  SKILL_PRINCIPLES_SECTION,
  SKILL_PRINCIPLES_CODE_SECTION,
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
      {demo.previousArticle && <RelativeBlock previous={true} rel={demo.previousArticle}/>}
      <Sections section={SKILL_SECTION} />
      <Emphasis intros={intro} />

      <Sections section={SKILL_FLOW_SECTION} index={0} />
      <CodeBlockView block={SKILL_FLOW_CODE_SECTION} />

      <Sections section={SKILL_TECHSTACK_SECTION} index={1} />
      <CodeBlockView block={SKILL_TECHSTACK_CODE_SECTION} />

      <Sections section={SKILL_CONVENTION_SECTION} index={2} />
      <CodeBlockView block={SKILL_CONVENTION_CODE_SECTION} />

      <Sections section={SKILL_TIPS_SECTION} index={3} />
      <CodeBlockView block={SKILL_TIPS_CODE_SECTION} />

      <Sections section={SKILL_PRINCIPLES_SECTION} index={4} />
      <CodeBlockView block={SKILL_PRINCIPLES_CODE_SECTION} />

      <CodeBlockView block={SKILL_DESCRIPTION_CODE_SECTION} />
      <CodeBlockView block={SKILL_CODE_SECTION} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle}/>}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
