import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { Motivation } from "../../components/Motivation";
import { Emphasis } from "../../components/Emphasis";
import { Refs } from "../../components/Refs";
import { RelativeBlock } from "../../components/RelativeBlock";
import {
  UXFIVEELEMENTSARTICLE,
  MOTIVATION_SECTION,
  BRIEF_SECTION,
  OVERVIEW_SECTION,
  OVERVIEW_CODE,
  STRATEGY_SECTION,
  STRATEGY_CODE,
  SCOPE_SECTION,
  SCOPE_CODE,
  STRUCTURE_SECTION,
  STRUCTURE_CODE,
  SKELETON_SECTION,
  SKELETON_CODE,
  SURFACE_SECTION,
  SURFACE_CODE,
  DELIVERABLE_SECTION,
  DELIVERABLE_CODE,
  DUAL_LENS_SECTION,
  DUAL_LENS_CODE,
} from "./content";

const demo = UXFIVEELEMENTSARTICLE;
const intro = demo.introduction!;

export function UxFiveElementsArticle() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Motivation section={MOTIVATION_SECTION} />
      <Emphasis intros={intro} />
      <Sections section={BRIEF_SECTION} />

      <Sections section={OVERVIEW_SECTION} />
      <CodeBlockView block={OVERVIEW_CODE} />

      <Sections section={STRATEGY_SECTION} index={1} />
      <CodeBlockView block={STRATEGY_CODE} />

      <Sections section={SCOPE_SECTION} index={2} />
      <CodeBlockView block={SCOPE_CODE} />

      <Sections section={STRUCTURE_SECTION} index={3} />
      <CodeBlockView block={STRUCTURE_CODE} />

      <Sections section={SKELETON_SECTION} index={4} />
      <CodeBlockView block={SKELETON_CODE} />

      <Sections section={SURFACE_SECTION} index={5} />
      <CodeBlockView block={SURFACE_CODE} />

      <Sections section={DELIVERABLE_SECTION} />
      <CodeBlockView block={DELIVERABLE_CODE} />

      <Sections section={DUAL_LENS_SECTION} />
      <CodeBlockView block={DUAL_LENS_CODE} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle} />}
      {intro.refs && <Refs refs={intro.refs} imageSource={demo.image?.source} />}

      <Footer />
    </div>
  );
}
