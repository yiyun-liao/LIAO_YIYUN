---
name: write-article
description: >
  Build a new article page for the portfolio site. Generates content.tsx
  (Demo metadata + BodySection + CodeBlock exports) and index.tsx
  (React component composing shared components). Chinese-first workflow:
  zh-TW draft → user review → iterate → English MD for Notion → final revision.
  Triggered when the user says "new article", "write article", "add article",
  "寫文章", "新增文章", or provides article data to turn into a page.
---

# Write Article Skill

Build a new article page under `src/pages/DemosPage/demo/` following the exact
structure, types, naming conventions, and writing accent of existing articles.

---

## Workflow

1. **Collect data** — the user provides: topic, key points, code samples, and any structure preferences.
2. **Build content.tsx + index.tsx** — Chinese (zh-TW) version first.
3. **User reviews** — iterate on structure, wording, section order. Multiple rounds expected.
4. **Generate English MD** — a Notion-ready / Medium-ready English markdown file.
5. **Final revision** — update content.tsx and index.tsx with polished English translations.

---

## Types (from `@/data/demos`)

```typescript
type L = string | Record<"en" | "zh-TW", string>;

interface BodySection {
  title: L;
  content: L;
}

interface CodeBlock {
  codeType: string;  // "tsx" | "css" | "markdown" | "json" | "text" | "yaml"
  code: string;
}

interface Reference {
  label: string;
  url: string;
}

interface Introduction {
  outline?: L;
  emphasis?: L[];
  refs?: Reference[];
}

interface CodeEmbed {
  sandboxId: string;
  view?: string;
  module?: string;
}

interface RelativeArticle {
  title: L;
  url: string;
}

interface Demo {
  date: string;          // ISO format: "2026-06-27"
  title: L;
  description: L;
  type: "codepen" | "article" | "demo" | "experiment";
  tags: string[];
  url: string;           // kebab-case route: "/demos/your-slug"
  image?: string;        // "/assets/demos/ArticleName.png"
  introduction?: Introduction;
  codeEmbed?: CodeEmbed;
  previousArticle?: RelativeArticle;
  nextArticle?: RelativeArticle;
}
```

---

## File Structure

```
src/pages/DemosPage/demo/{ArticleName}/
├── content.tsx   — Demo metadata + all BodySection + CodeBlock exports
├── index.tsx     — React component composing layout with shared components
└── (optional)    — article-name.md (English MD for Notion/Medium)
```

---

## Naming Conventions

| What                  | Pattern                              | Example                          |
|-----------------------|--------------------------------------|----------------------------------|
| Folder name           | PascalCase                           | `ReactVibeKickoffArticle`        |
| Component function    | Same as folder                       | `export function ReactVibeKickoffArticle()` |
| Demo metadata export  | ALL_CAPS, no separators              | `REACTVIBEKICKOFFARTICLE`        |
| Data array export     | `{DEMO_NAME}_DATA`                   | `REACTVIBEKICKOFFARTICLE_DATA`   |
| BodySection export    | `{TOPIC}_SECTION`                    | `FLOW_SECTION`, `GLOW_SECTION`   |
| CodeBlock export      | `{TOPIC}_CODE`                       | `FLOW_CODE`, `GLOW_CODE_RGB`     |
| Untitled sub-section  | Descriptive name + `_SECTION` suffix | `CSS_THEME_TRANSITION` (BodySection with `title: _`) |
| Route URL             | kebab-case                           | `/demos/react-vibe-kickoff`      |

**Rules:**
- CodeBlock exports do NOT end in `_SECTION` — they end in `_CODE` (or `_CODE_SUFFIX` for variants).
- BodySection exports ALWAYS end in `_SECTION` (even untitled continuation sections).
- For untitled continuation sections, use `const _ = { en: "", "zh-TW": "" };` and set `title: _`.
- One `_DATA` array per article, always: `export const X_DATA: Demo[] = [X];`
- Use `// ─── Section Title ───` comment separators between groups.

---

## content.tsx Template

```typescript
import type { Demo, BodySection, CodeBlock } from "@/data/demos";

const _ = { en: "", "zh-TW": "" };

export const YOURARTICLE: Demo = {
  date: "2026-XX-XX",
  title: { en: "English Title", "zh-TW": "中文標題" },
  description: {
    en: "One-sentence teaser.",
    "zh-TW": "一句話摘要。",
  },
  type: "article",
  tags: ["Tag1", "Tag2"],
  url: "/demos/your-slug",
  image: "/assets/demos/YourArticle.png",
  introduction: {
    outline: {
      en: "A paragraph describing the article's scope.",
      "zh-TW": "描述文章範圍的段落。",
    },
    emphasis: [
      { en: "Point Title — explanation", "zh-TW": "重點標題 — 說明" },
      { en: "Point Title — explanation", "zh-TW": "重點標題 — 說明" },
      { en: "Point Title — explanation", "zh-TW": "重點標題 — 說明" },
    ],
    refs: [
      { label: "Reference Name", url: "https://..." },
    ],
  },
  // previousArticle: { title: { en: "...", "zh-TW": "..." }, url: "/demos/..." },
  // nextArticle: { title: { en: "...", "zh-TW": "..." }, url: "/demos/..." },
};

export const YOURARTICLE_DATA: Demo[] = [YOURARTICLE];

// ─── Motivation ───

export const MOTIVATION_SECTION: BodySection = {
  title: { en: "motivation", "zh-TW": "motivation" },
  content: { en: "...", "zh-TW": "..." },
};

// ─── 01 First Main Section ───

export const FIRST_SECTION: BodySection = {
  title: { en: "Section Title", "zh-TW": "段落標題" },
  content: { en: "...", "zh-TW": "..." },
};

export const FIRST_CODE: CodeBlock = {
  codeType: "tsx",
  code: `...`,
};

// continuation (untitled sub-section)
export const FIRST_DETAIL: BodySection = {
  title: _,
  content: { en: "...", "zh-TW": "..." },
};
```

---

## index.tsx Template

```typescript
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
  YOURARTICLE,
  MOTIVATION_SECTION,
  FIRST_SECTION,
  FIRST_CODE,
  // ... all exports
} from "./content";

const demo = YOURARTICLE;
const intro = demo.introduction!;

export function YourArticle() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />

      <Motivation section={MOTIVATION_SECTION} />
      {demo.previousArticle && <RelativeBlock previous={true} rel={demo.previousArticle} />}

      {/* Optional: emphasis 3-col grid */}
      <Emphasis intros={intro} />

      <Sections section={FIRST_SECTION} index={1} />
      <CodeBlockView block={FIRST_CODE} />

      {/* ... more sections ... */}

      {demo.nextArticle && <RelativeBlock previous={false} rel={demo.nextArticle} />}
      {intro.refs && <Refs refs={intro.refs} />}

      <Footer />
    </div>
  );
}
```

**Shared components available:**
- `<Header demo={demo} title={l(demo.title)} />` — hero with type badge, title, outline
- `<Motivation section={...} />` — highlighted box with left accent border
- `<Sections section={...} index={N} />` — title + content; index shows as 2-digit (01, 02)
- `<CodeBlockView block={...} />` — syntax-highlighted code block
- `<Emphasis intros={intro} />` — 3-column grid from `introduction.emphasis`
- `<Refs refs={...} />` — reference link list
- `<RelativeBlock previous={bool} rel={...} />` — prev/next article navigation
- `<Footer />` — standard footer

---

## Registration (after article is finalized)

### 1. demos-registry.ts

```typescript
import { YOURARTICLE_DATA } from "@/pages/DemosPage/demo/YourArticle/content";

export const DEMOS: Demo[] = [
  ...YOURARTICLE_DATA,
  // ... existing articles
];
```

### 2. App.tsx

```typescript
import { YourArticle } from "./pages/DemosPage/demo/YourArticle";

<Route path="/demos/your-slug" element={<YourArticle />} />
```

---

## Writing Style Rules

### Chinese (zh-TW) — primary accent

- **Tone**: conversational-technical. Like explaining to a sharp friend over coffee — casual but precise.
- **Em-dash** (——) for inline explanations and asides. Used heavily.
- **Quotes**: use 「」 for Chinese quotes, not " ".
- **Technical terms**: keep in English — CSS, React, TypeScript, `useState`, Zustand, etc.
- **Code references**: always in backticks — `.dms-knob`、`transition`、`box-shadow`.
- **Pattern**: often uses "X 其實就是 Y"、"說到底就是"、"簡單來說" for demystifying.
- **Explanation flow**: state the WHAT briefly → explain the WHY at length → show HOW with code.
- **Numbered sub-points**: use emoji bullets (1️⃣ 2️⃣ 3️⃣) within paragraph content.
- **Bold emphasis**: use `**bold text**` for key concepts inline (rendered by RichText component).
- **Inline code**: keep `` `code` `` for any identifier, property, class name, or CLI command.
- **Newlines**: use `\n` within content strings to separate paragraphs.
- **Personality**: occasionally self-referential or light-hearted without being silly.

### English — added during revision phase

- **Tone**: clean, direct prose. Technical but not dry.
- **Voice**: "you" addressing the reader.
- **Flow**: explain WHY before HOW.
- **Em-dash** (—) for asides.
- **Bold**: same `**bold**` pattern for key terms.
- **No fluff**: skip "In this section we will learn..." phrasing.

### Both languages

- Content in BodySection.content uses `\n` for paragraph breaks.
- Bold text `**like this**` is parsed by the RichText component.
- Inline code `` `like this` `` is parsed by the RichText component.
- Code blocks (CodeBlock) are always in English regardless of language — they're language-agnostic.

---

## Step-by-Step Execution

When the user invokes this skill:

1. **Ask for data** if not already provided: topic, main points, code samples, number of sections, any preferences.
2. **Create the folder**: `src/pages/DemosPage/demo/{ArticleName}/`
3. **Write content.tsx**: zh-TW content first, English placeholders (can be empty strings initially).
4. **Write index.tsx**: compose sections with shared components.
5. **Register**: add to `demos-registry.ts` and `App.tsx`.
6. **Type-check**: run `npx tsc --noEmit` to verify.
7. **Present to user** for review. Expect multiple revision rounds.
8. **When user asks for MD**: generate English markdown file for Notion/Medium.
9. **Final revision**: fill in English translations in content.tsx based on the MD.
10. **Type-check again** after final revision.

Do NOT commit or push unless the user explicitly asks.
