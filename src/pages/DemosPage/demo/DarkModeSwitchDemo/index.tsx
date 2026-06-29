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
import { DarkModeSwitchScene } from "./components";
import { RelativeBlock } from "../../components/RelativeBlock";

import {
  DARKMODESWITCHDEMO,
  SWITCH_ANIMATION_SECTION,
  SWITCH_ANIMATION_CODE_SECTION,
  CSS_THEME_SECTION,
  CSS_THEME_CODE_HTML_SECTION,
  CSS_THEME_CODE_SECTION,
  GLOW_EFFECT_SECTION,
  GLOW_EFFECT_CODE_SECTION,
  KNOB_EFFECT_SECTION,
  KNOB_EFFECT_CODE_SECTION,
  NEUMORPHIC_SECTION,
  NEUMORPHIC_CODE_SECTION,
  MOVITATION_SECTION,
} from "./content";

const demo = DARKMODESWITCHDEMO;
const intro = demo.introduction!;

export function DarkModeSwitchDemo() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Views>
        <DarkModeSwitchScene />
      </Views>
      {demo.previousArticle && <RelativeBlock previous={true} rel={demo.previousArticle}/>}
      <Motivation section={MOVITATION_SECTION} />
      <Emphasis intros={intro} />

      <Sections section={SWITCH_ANIMATION_SECTION} index={0} />
      <CodeBlockView block={SWITCH_ANIMATION_CODE_SECTION} />

      <Sections section={CSS_THEME_SECTION} index={1} />
      <CodeBlockView block={CSS_THEME_CODE_HTML_SECTION} />
      <CodeBlockView block={CSS_THEME_CODE_SECTION} />

      <Sections section={GLOW_EFFECT_SECTION} index={2} />
      <CodeBlockView block={GLOW_EFFECT_CODE_SECTION} />

      <Sections section={KNOB_EFFECT_SECTION} index={3} />
      <CodeBlockView block={KNOB_EFFECT_CODE_SECTION} />

      <Sections section={NEUMORPHIC_SECTION} index={4} />
      <CodeBlockView block={NEUMORPHIC_CODE_SECTION} />

      <CodeSection demo={demo} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle}/>}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
