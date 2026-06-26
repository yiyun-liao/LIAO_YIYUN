import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Emphasis } from "../../components/Emphasis";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { Motivation } from "../../components/Motivation";
import { Refs } from "../../components/Refs";
import {
  CLAUDEFOLDERARTICLE,
  FOLDER_STRUCTURE_SECTION,
  FOLDER_STRUCTURE_CODE_SECTION,
  EACH_FOLDER_SECTION,
  SETTINGS_CODE_SECTION,
  MOTIVATION_SECTION,
} from "./content";

const demo = CLAUDEFOLDERARTICLE;
const intro = demo.introduction!;

export function ClaudeFolderArticle() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Emphasis intros={intro} />

      <Sections section={FOLDER_STRUCTURE_SECTION} index={0} />
      <CodeBlockView block={FOLDER_STRUCTURE_CODE_SECTION} />

      <Sections section={EACH_FOLDER_SECTION} index={1} />
      <CodeBlockView block={SETTINGS_CODE_SECTION} />

      <Motivation section={MOTIVATION_SECTION} />

      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
