import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Views } from "../../components/View";
import { Emphasis } from "../../components/Emphasis";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { Motivation } from "../../components/Motivation";
import { Refs } from "../../components/Refs";
import { CodeSection } from "../../components/CodeSection";
import { TypeScaleScene } from "./components";

import {
  TYPESCALEGENERATOR,
  MOTIVATION_SECTION,
  FORMULA_SECTION,
  FORMULA_CODE,
  FORMULA_SNAP,
  RATIO_SECTION,
  RATIO_CODE,
  RATIO_USAGE,
  CONTROLS_SECTION,
  CONTROLS_CODE,
  CONTROLS_PRESET,
  BODY_SECTION,
  BODY_CODE,
  SCENE_SECTION,
} from "./content";

const demo = TYPESCALEGENERATOR;
const intro = demo.introduction!;

export function TypeScaleGenerator() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Views>
        <TypeScaleScene />
      </Views>

      <Motivation section={MOTIVATION_SECTION} />
      <Emphasis intros={intro} />

      <Sections section={FORMULA_SECTION} index={1} />
      <CodeBlockView block={FORMULA_CODE} />
      <Sections section={FORMULA_SNAP} />

      <Sections section={RATIO_SECTION} index={2} />
      <CodeBlockView block={RATIO_CODE} />
      <Sections section={RATIO_USAGE} />

      <Sections section={CONTROLS_SECTION} index={3} />
      <CodeBlockView block={CONTROLS_CODE} />
      <Sections section={CONTROLS_PRESET} />

      <Sections section={BODY_SECTION} index={4} />
      <CodeBlockView block={BODY_CODE} />

      <Sections section={SCENE_SECTION} index={5} />

      <CodeSection demo={demo} />

      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
