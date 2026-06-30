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
import { RelativeBlock } from "../../components/RelativeBlock";
import {
  INFORMATIONARCHITECTUREARTICLE,
  MOTIVATION_SECTION,
  INFORMATION_SECTION,
  COMPARISON_IMAGE,
  IA_SECTION,
  IA_QUOTE_SECTION,
  VENN_IMAGE,
  THREE_ELEMENTS_SECTION,
  THREE_ELEMENTS_CODE,
  DEFINITION_SECTION,
  USER_STORY_IMAGE,
  UX_INTEGRATION_SECTION,
  UX_INTEGRATION_CODE,
} from "./content";

const demo = INFORMATIONARCHITECTUREARTICLE;
const intro = demo.introduction!;

export function InformationArchitectureArticle() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Motivation section={MOTIVATION_SECTION} />
      {demo.previousArticle && (
        <RelativeBlock previous={true} rel={demo.previousArticle} />
      )}

      <Emphasis intros={intro} />

      <Sections section={INFORMATION_SECTION} index={1} />

      <Sections section={IA_SECTION} index={2} />
      <ImageSection image={COMPARISON_IMAGE} />
      <Sections section={IA_QUOTE_SECTION} />

      <Sections section={THREE_ELEMENTS_SECTION} index={3} />
      <ImageSection image={VENN_IMAGE} />
      <CodeBlockView block={THREE_ELEMENTS_CODE} />
      <Sections section={DEFINITION_SECTION} />

      <Sections section={UX_INTEGRATION_SECTION} index={4} />
      <ImageSection image={USER_STORY_IMAGE} />
      <CodeBlockView block={UX_INTEGRATION_CODE} />

      {intro.refs && <Refs refs={intro.refs} imageSource={demo.image?.source} />}

      <Footer />
    </div>
  );
}
