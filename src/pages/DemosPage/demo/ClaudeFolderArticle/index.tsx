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
  BRIEF_SECTION,
  MOTIVATION_SECTION,
  OVERVIEW_SECTION,
  OVERVIEW_CODE_SECTION,
  SAMPLE_CODE_SECTION,
  CLAUDE_MD_SECTION,
  CLAUDE_MD_CODE_SECTION,
  RULES_SECTION,
  RULES_CODE_SECTION,
  RULES_TABLE_SECTION,
  RULES_TABLE_CODE_SECTION,
  COMMANDS_SECTION,
  COMMANDS_CODE_SECTION,
  HOOKS_SECTION,
  HOOKS_CODE_SECTION,
  HOOKS_WIRING_CODE_SECTION,
  DOCS_SECTION,
  DOCS_CODE_SECTION,
  AGENTS_SECTION,
  AGENTS_CODE_SECTION,
  AGENTS_COMPARE_SECTION,
  AGENTS_COMPARE_CODE_SECTION,
  AGENTS_EXAMPLE_SECTION,
  AGENTS_EXAMPLE_CODE_SECTION,
  SKILLS_SECTION,
  SKILLS_CODE_SECTION,
  SKILLS_TABLE_SECTION,
  SKILLS_TABLE_CODE_SECTION,
  SKILLS_VS_CLAUDE_SECTION,
  SKILLS_VS_CLAUDE_CODE_SECTION,
  SKILLS_VS_COMMANDS_SECTION,
  SKILLS_VS_COMMANDS_CODE_SECTION,
  SETTINGS_SECTION,
  SETTINGS_CODE_SECTION,
  SETTINGS_LOCATIONS_CODE_SECTION,
  SUMMARY_SECTION,
  SUMMARY_CODE_SECTION,
  MCP_SECTION,
  MCP_CODE_SECTION,
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
      <CodeBlockView block={OVERVIEW_CODE_SECTION} />
      <CodeBlockView block={SAMPLE_CODE_SECTION} />


      <Sections section={CLAUDE_MD_SECTION} index={1} />
      <CodeBlockView block={CLAUDE_MD_CODE_SECTION} />

      <Sections section={RULES_SECTION} index={2} />
      <CodeBlockView block={RULES_CODE_SECTION} />
      <Sections section={RULES_TABLE_SECTION} />
      <CodeBlockView block={RULES_TABLE_CODE_SECTION} />
      
      <Sections section={COMMANDS_SECTION} index={3} />
      <CodeBlockView block={COMMANDS_CODE_SECTION} />

      <Sections section={SKILLS_SECTION} index={4} />
      <CodeBlockView block={SKILLS_CODE_SECTION} />
      <Sections section={SKILLS_TABLE_SECTION} />
      <CodeBlockView block={SKILLS_TABLE_CODE_SECTION} />
      <Sections section={SKILLS_VS_CLAUDE_SECTION} />
      <CodeBlockView block={SKILLS_VS_CLAUDE_CODE_SECTION} />
      <Sections section={SKILLS_VS_COMMANDS_SECTION} />
      <CodeBlockView block={SKILLS_VS_COMMANDS_CODE_SECTION} />

      <Sections section={HOOKS_SECTION} index={5} />
      <CodeBlockView block={HOOKS_CODE_SECTION} />
      <CodeBlockView block={HOOKS_WIRING_CODE_SECTION} />

      <Sections section={DOCS_SECTION} index={6} />
      <CodeBlockView block={DOCS_CODE_SECTION} />

      <Sections section={AGENTS_SECTION} index={7} />
      <CodeBlockView block={AGENTS_CODE_SECTION} />
      <Sections section={AGENTS_COMPARE_SECTION} />
      <CodeBlockView block={AGENTS_COMPARE_CODE_SECTION} />
      <Sections section={AGENTS_EXAMPLE_SECTION} />
      <CodeBlockView block={AGENTS_EXAMPLE_CODE_SECTION} />


      <Sections section={SETTINGS_SECTION} index={8} />
      <CodeBlockView block={SETTINGS_CODE_SECTION} />
      <CodeBlockView block={SETTINGS_LOCATIONS_CODE_SECTION} />

      <Sections section={SUMMARY_SECTION} index={9} />
      <CodeBlockView block={SUMMARY_CODE_SECTION} />

      <Sections section={MCP_SECTION} index={12} />
      <CodeBlockView block={MCP_CODE_SECTION} />

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle}/>}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
