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
  MOTIVATION_SECTION,
  SWITCH_SECTION,
  SWITCH_CODE,
  CSS_THEME_SECTION,
  CSS_THEME_CODE_HTML,
  CSS_THEME_CODE_VARS,
  CSS_THEME_TRANSITION,
  CSS_THEME_CODE_TRANSITION,
  CSS_THEME_TAKEAWAY,
  GLOW_SECTION,
  GLOW_CODE_RGB,
  GLOW_POSITION,
  GLOW_CODE_POSITION,
  GLOW_TAKEAWAY,
  KNOB_SECTION,
  KNOB_CODE_GRADIENT,
  KNOB_TRANSITION,
  KNOB_CODE_TRANSITION,
  KNOB_DARK,
  KNOB_CODE_DARK,
  KNOB_ACTIVE,
  KNOB_CODE_ACTIVE,
  KNOB_BEFORE,
  NEU_SECTION,
  NEU_CODE_CARD,
  NEU_RAISED,
  NEU_CODE_RAISED,
  NEU_HOVER,
  NEU_CODE_HOVER,
  NEU_ACTIVE_TEXT,
  NEU_CODE_ACTIVE,
  NEU_FOCUS_TEXT,
  NEU_CODE_FOCUS,
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
      <Motivation section={MOTIVATION_SECTION} />
      <Emphasis intros={intro} />

      <Sections section={SWITCH_SECTION} index={1} />
      <CodeBlockView block={SWITCH_CODE} />

      <Sections section={CSS_THEME_SECTION} index={2} />
      <CodeBlockView block={CSS_THEME_CODE_HTML} />
      <CodeBlockView block={CSS_THEME_CODE_VARS} />
      <Sections section={CSS_THEME_TRANSITION} />
      <CodeBlockView block={CSS_THEME_CODE_TRANSITION} />
      <Sections section={CSS_THEME_TAKEAWAY} />

      <Sections section={GLOW_SECTION} index={3} />
      <CodeBlockView block={GLOW_CODE_RGB} />
      <Sections section={GLOW_POSITION} />
      <CodeBlockView block={GLOW_CODE_POSITION} />
      <Sections section={GLOW_TAKEAWAY} />

      <Sections section={KNOB_SECTION} index={4} />
      <CodeBlockView block={KNOB_CODE_GRADIENT} />
      <Sections section={KNOB_TRANSITION} />
      <CodeBlockView block={KNOB_CODE_TRANSITION} />
      <Sections section={KNOB_DARK} />
      <CodeBlockView block={KNOB_CODE_DARK} />
      <Sections section={KNOB_ACTIVE} />
      <CodeBlockView block={KNOB_CODE_ACTIVE} />
      <Sections section={KNOB_BEFORE} />

      <Sections section={NEU_SECTION} index={5} />
      <CodeBlockView block={NEU_CODE_CARD} />
      <Sections section={NEU_RAISED} />
      <CodeBlockView block={NEU_CODE_RAISED} />
      <Sections section={NEU_HOVER} />
      <CodeBlockView block={NEU_CODE_HOVER} />
      <Sections section={NEU_ACTIVE_TEXT} />
      <CodeBlockView block={NEU_CODE_ACTIVE} />
      <Sections section={NEU_FOCUS_TEXT} />
      <CodeBlockView block={NEU_CODE_FOCUS} />

      <CodeSection demo={demo} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle}/>}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
