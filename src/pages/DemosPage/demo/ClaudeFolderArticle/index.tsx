import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Sections } from "../../components/Sections";
import { CodeBlockView } from "../../components/CodeBlockView";
import { Motivation } from "../../components/Motivation";
import { Refs } from "../../components/Refs";
import { RelativeBlock } from "../../components/RelativeBlock";

import {
  CLAUDEFOLDERARTICLE,
  MOTIVATION_SECTION,
  BRIEF_SECTION,
  OVERVIEW_SECTION,
  OVERVIEW_CODE,
  OVERVIEW_SAMPLE_CODE,
  CLAUDE_MD_SECTION,
  CLAUDE_MD_CODE,
  RULES_SECTION,
  RULES_CODE,
  RULES_TABLE_SECTION,
  RULES_TABLE_CODE,
  COMMANDS_SECTION,
  COMMANDS_CODE,
  SKILLS_SECTION,
  SKILLS_CODE,
  SKILLS_TABLE_SECTION,
  SKILLS_TABLE_CODE,
  SKILLS_VS_CLAUDE_SECTION,
  SKILLS_VS_CLAUDE_CODE,
  SKILLS_VS_COMMANDS_SECTION,
  SKILLS_VS_COMMANDS_CODE,
  HOOKS_SECTION,
  HOOKS_EVENTS_CODE,
  HOOKS_WIRING_CODE,
  DOCS_SECTION,
  DOCS_CODE,
  AGENTS_SECTION,
  AGENTS_CODE,
  AGENTS_COMPARE_SECTION,
  AGENTS_COMPARE_CODE,
  AGENTS_EXAMPLE_SECTION,
  AGENTS_EXAMPLE_CODE,
  SETTINGS_SECTION,
  SETTINGS_CODE,
  SETTINGS_LOCATIONS_CODE,
  SUMMARY_SECTION,
  SUMMARY_CODE,
  MCP_SECTION,
  MCP_CODE,
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
      <Motivation section={MOTIVATION_SECTION} />
      <Sections section={BRIEF_SECTION} />

      <Sections section={OVERVIEW_SECTION} />
      <CodeBlockView block={OVERVIEW_CODE} />
      <CodeBlockView block={OVERVIEW_SAMPLE_CODE} />

      <Sections section={CLAUDE_MD_SECTION} index={1} />
      <CodeBlockView block={CLAUDE_MD_CODE} />

      <Sections section={RULES_SECTION} index={2} />
      <CodeBlockView block={RULES_CODE} />
      <Sections section={RULES_TABLE_SECTION} />
      <CodeBlockView block={RULES_TABLE_CODE} />

      <Sections section={COMMANDS_SECTION} index={3} />
      <CodeBlockView block={COMMANDS_CODE} />

      <Sections section={SKILLS_SECTION} index={4} />
      <CodeBlockView block={SKILLS_CODE} />
      <Sections section={SKILLS_TABLE_SECTION} />
      <CodeBlockView block={SKILLS_TABLE_CODE} />
      <Sections section={SKILLS_VS_CLAUDE_SECTION} />
      <CodeBlockView block={SKILLS_VS_CLAUDE_CODE} />
      <Sections section={SKILLS_VS_COMMANDS_SECTION} />
      <CodeBlockView block={SKILLS_VS_COMMANDS_CODE} />

      <Sections section={HOOKS_SECTION} index={5} />
      <CodeBlockView block={HOOKS_EVENTS_CODE} />
      <CodeBlockView block={HOOKS_WIRING_CODE} />

      <Sections section={DOCS_SECTION} index={6} />
      <CodeBlockView block={DOCS_CODE} />

      <Sections section={AGENTS_SECTION} index={7} />
      <CodeBlockView block={AGENTS_CODE} />
      <Sections section={AGENTS_COMPARE_SECTION} />
      <CodeBlockView block={AGENTS_COMPARE_CODE} />
      <Sections section={AGENTS_EXAMPLE_SECTION} />
      <CodeBlockView block={AGENTS_EXAMPLE_CODE} />

      <Sections section={SETTINGS_SECTION} index={8} />
      <CodeBlockView block={SETTINGS_CODE} />
      <CodeBlockView block={SETTINGS_LOCATIONS_CODE} />

      <Sections section={SUMMARY_SECTION} />
      <CodeBlockView block={SUMMARY_CODE} />

      <Sections section={MCP_SECTION} />
      <CodeBlockView block={MCP_CODE} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle} />}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
