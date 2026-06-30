import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { ImageSection } from "../../components/ImageSection";
import { Motivation } from "../../components/Motivation";
import { Emphasis } from "../../components/Emphasis";
import { Refs } from "../../components/Refs";
import {
  UXFIVEELEMENTSARTICLE,
  MOTIVATION_SECTION,
  BRIEF_SECTION,
  OVERVIEW_SECTION,
  OVERVIEW_IMAGE,
  OVERVIEW_B_IMAGE,
  STRATEGY_SECTION,
  STRATEGY_CODE,
  STRATEGY_IMAGE,
  SCOPE_SECTION,
  SCOPE_CODE,
  SCOPE_IMAGE,
  STRUCTURE_SECTION,
  STRUCTURE_CODE,
  STRUCTURE_IMAGE,
  SKELETON_SECTION,
  SKELETON_CODE,
  SKELETON_IMAGE,
  SURFACE_SECTION,
  SURFACE_CODE,
  SURFACE_IMAGE,
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

      <ImageSection image={OVERVIEW_IMAGE} />
      <Motivation section={MOTIVATION_SECTION} />
      <Sections section={BRIEF_SECTION} />

      <Sections section={OVERVIEW_SECTION} />
      <ImageSection image={OVERVIEW_B_IMAGE} />
      <Emphasis intros={intro} />

      <Sections section={STRATEGY_SECTION} index={1} />
      <ImageSection image={STRATEGY_IMAGE} />
      <CodeBlockView block={STRATEGY_CODE} />

      <Sections section={SCOPE_SECTION} index={2} />
      <ImageSection image={SCOPE_IMAGE} />
      <CodeBlockView block={SCOPE_CODE} />

      <Sections section={STRUCTURE_SECTION} index={3} />
      <ImageSection image={STRUCTURE_IMAGE} />
      <CodeBlockView block={STRUCTURE_CODE} />

      <Sections section={SKELETON_SECTION} index={4} />
      <ImageSection image={SKELETON_IMAGE} />
      <CodeBlockView block={SKELETON_CODE} />

      <Sections section={SURFACE_SECTION} index={5} />
      <ImageSection image={SURFACE_IMAGE} />
      <CodeBlockView block={SURFACE_CODE} />

      <Sections section={DELIVERABLE_SECTION} />
      <CodeBlockView block={DELIVERABLE_CODE} />

      <Sections section={DUAL_LENS_SECTION} />
      <CodeBlockView block={DUAL_LENS_CODE} />
      {intro.refs && <Refs refs={intro.refs} imageSource={demo.image?.source} />}

      <Footer />
    </div>
  );
}
