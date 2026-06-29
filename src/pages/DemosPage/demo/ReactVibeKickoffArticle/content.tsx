import type { Demo, BodySection, CodeBlock } from "@/data/demos";

export const REACTVIBEKICKOFFARTICLE: Demo = {
  date: "2026-06-27",
  title: {
    en: "Building an Initialize Skill",
    "zh-TW": "建立 Initialize Skill",
  },
  description: {
    en: "How to write a Claude Code skill that scaffolds React projects with vibe coding — asking the right questions before the AI writes a single line.",
    "zh-TW":
      "如何撰寫一個 Claude Code skill，用 vibe coding 方式搭建 React 專案——在 AI 寫任何一行程式碼之前，先問對問題。",
  },
  type: "article",
  tags: ["Claude Code", "AI", "React", "DX"],
  url: "/demos/react-vibe-kickoff",
  introduction: {
    outline: {
      en: "A walkthrough of building a Claude Code skill that bootstraps React projects — choosing the right tech stack for the project type, then delivering copy-pasteable prompts for environment setup, coding conventions, and per-feature kickoffs.",
      "zh-TW":
        "一步步拆解如何建立一個 Claude Code skill，根據專案類型選擇合適的技術棧，再依序產出可複製貼上的 prompt：環境建置、程式碼規範、以及每個新功能的開場。",
    },
    emphasis: [
      {
        en: "Project-Type-First — the skill asks what you're building before recommending any tools, because a SaaS dashboard and a personal prototype need completely different stacks.",
        "zh-TW":
          "先問專案類型 — skill 先確認你要做什麼，再推薦工具，因為 SaaS 後台跟個人原型需要完全不同的技術棧。",
      },
      {
        en: "Convention Prompt — a persistent rules file (.cursorrules / CLAUDE.md) that the AI reads on every conversation, preventing style drift, package sprawl, and silent regressions.",
        "zh-TW":
          "規範 Prompt — 一個持久的規則檔（.cursorrules / CLAUDE.md），AI 每次對話都會讀取，防止風格漂移、套件亂裝和無聲退化。",
      },
      {
        en: "Copy-Paste Ready — every output is a prompt you can paste directly into Cursor, Claude Code, or Windsurf. No descriptions, no tutorials, just the actual text.",
        "zh-TW":
          "可直接複製貼上 — 每段輸出都能直接貼進 Cursor、Claude Code 或 Windsurf。沒有描述、沒有教學，只有實際可用的 prompt。",
      },
    ],
    refs: [
      {
        label: "Claude Code — Custom Slash Commands",
        url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands",
      },
      {
        label: "Claude Code — Project Configuration",
        url: "https://docs.anthropic.com/en/docs/claude-code/settings",
      },
    ],
  },
  previousArticle: {
    title: {
      en: "Inside the .claude Folder",
      "zh-TW": "了解 .claude 資料夾",
    },
    url: "/demos/claude-folder-guide",
  },
};

export const REACTVIBEKICKOFFARTICLE_DATA: Demo[] = [REACTVIBEKICKOFFARTICLE];

// ─── Notices ───

export const INTRO_SECTION: BodySection = {
  title: { en: "NOTICES", "zh-TW": "NOTICES" },
  content: {
    en: "Before starting a project, it's worth thinking through the architecture and feature scope on your own first — this helps control what gets generated and improves accuracy (avoiding unnecessary token back-and-forth). The full skill file is at the bottom of this article. The example here uses a Vite + TypeScript + Tailwind CSS React project — readers using different frameworks or stacks can treat this structure as a template and work with their own AI agent to build a version that fits. Also, the skill file itself can be written by the AI agent, which tends to produce fewer formatting errors.",
    "zh-TW":
      "‼️在開始專案前，建議先自行思考過架構跟功能範圍，可以有效控制生成內容和提高精準度（避免不必要的 token 來回）。完整 skill 放在文章底部，文中以 Vite + TypeScript + Tailwind CSS 的 React 專案為範例——使用不同框架或技術棧的讀者，可以把這個結構當作模板，和自己的 AI agent 討論出適合的版本。另外，skill 檔案本身也可以讓 AI agent 來撰寫，通常格式更不容易出錯。",
  },
};

// ─── What This Skill Does ───

export const SKILL_SECTION: BodySection = {
  title: { en: "What This Skill Does", "zh-TW": "這個 Skill 做什麼" },
  content: {
    en: "Skills are where Claude Code gets genuinely useful for repetitive multi-step workflows. Instead of typing the same series of instructions every time you start a new project, you write a skill once and invoke it with a slash command. A skill file lives in `.claude/commands/` (or `.claude/skills/`). It's a markdown file that describes: what the skill does, what inputs it needs, and the step-by-step instructions Claude should follow. Claude reads it, executes each step, and reports back.",
    "zh-TW":
      "Skills 是 Claude Code 在重複性多步驟工作流程中真正發揮作用的地方。不用每次開新專案都重新打一樣的指令，你只要寫一次 skill，之後用斜線指令呼叫就好。Skill 檔案放在 `.claude/commands/`（或 `.claude/skills/`）裡。它就是一個 markdown 檔，描述這個 skill 做什麼、需要什麼輸入、以及 Claude 應該依序執行的步驟。Claude 讀取後逐步執行，最後回報結果。",
  },
};

export const SKILL_FRONTMATTER_CODE: CodeBlock = {
  codeType: "yaml",
  code: `---
name: react-vibe-kickoff
description: >
  Bootstrap a new React project for vibe coding (AI-driven development) —
  environment setup and conventions. Triggered whenever the user mentions
  "new React project", "kick off React", "initialize React",
  "React project setup", "vibe coding with React", or
  "how to start a React project".
  The skill first asks the project type (admin, SaaS, landing page, tool, e-commerce),
  then recommends a matching tech stack and delivers staged copy-paste prompts
  (environment setup, convention prompt, feature kickoff prompt) for
  Cursor / Claude Code / Windsurf, preventing the AI from installing
  undiscussed packages, drifting in style, or overwriting existing code.
---`,
};

// ─── 01 The Five-Step Sequence ───

export const FLOW_SECTION: BodySection = {
  title: { en: "The Five-Step Sequence", "zh-TW": "五步流程" },
  content: {
    en: "The value of this skill is its sequence — it ensures the important decisions happen before any code gets written.\nStep 0 asks what kind of project you're building, because a SaaS dashboard and a landing page need completely different toolchains — clarifying this upfront prevents the AI from over-engineering a personal tool with enterprise-grade state management.\nStep 1 is the only step you run yourself: `npm create vite@latest` (or `create-next-app` if SEO matters). TypeScript is strongly recommended here — it acts as a guardrail that lets the AI catch its own mistakes through the type system.\nStep 2 hands the AI an environment setup prompt, customized to the stack you picked. The prompt explicitly tells the AI to install one thing at a time, wait for confirmation, and never add packages you didn't list.\nStep 3 is the convention prompt — the most important and most skipped step. It gets saved as a file the AI reads on every future conversation. Without it, every session starts from zero.\nStep 4 is the per-feature opening prompt: before writing any code, the AI lists what components it needs, maps out the data flow, and estimates which files will change. You confirm, then it builds.",
    "zh-TW":
      "這個 skill 的價值在於它的順序——確保重要決策在寫程式之前就先定好。\n第 0 步確認要做什麼類型的專案，因為 SaaS 後台跟 landing page 需要完全不同的工具鏈——先問清楚才能避免 AI 幫一個個人小工具裝上企業級的狀態管理。\n第 1 步是唯一由你自己跑的步驟：`npm create vite@latest`（如果需要 SEO 就改用 `create-next-app`）。這裡建議使用 TypeScript——它是一道護欄，讓 AI 能透過型別系統抓到自己的錯。\n第 2 步把一份依選定技術棧客製化的環境建置 prompt 交給 AI。這份 prompt 明確告訴 AI 一次只裝一樣東西、等確認再繼續、絕對不加未列出的套件。\n第 3 步是規範 prompt——最重要、也最常被跳過的一步。它會被存成一個檔案，AI 在往後每次對話都會讀取。沒有這個檔案，每次對話都從零開始。\n第 4 步是每個新功能的開場 prompt：在寫任何程式碼之前，AI 先列出需要哪些元件、畫出資料流、估計會動到哪些檔案。確認了，它才開始寫。",
  },
};

export const FLOW_CODE: CodeBlock = {
  codeType: "text",
  code: `Flow:

  Step 0 ─ Ask project type        → recommend stack
  Step 1 ─ User runs Vite init     → scaffold created
  Step 2 ─ AI setup prompt         → deps installed one-by-one
  Step 3 ─ Convention prompt        → saved as .cursorrules / CLAUDE.md
  Step 4 ─ Per-feature prompt       → plan first, code second

  ┌─────────────────────────────────────────────┐
  │  Step 3 is the one most people skip,        │
  │  and also the one that determines whether   │
  │  your codebase stays coherent past the      │
  │  third feature.                             │
  └─────────────────────────────────────────────┘`,
};

// ─── 02 Step 0 — Project Type → Tech Stack ───

export const TECHSTACK_SECTION: BodySection = {
  title: { en: "Step 0 — Project Type → Tech Stack", "zh-TW": "Step 0 — 專案類型 → 技術棧" },
  content: {
    en: "Not every project needs Zustand, React Query, and a full lint pipeline — but without asking, AI will happily install all of them for a personal tool that only needs `useState` and `localStorage`. That's why the skill starts by categorizing the project before touching any tooling.\nStep 0 sorts projects into broad categories and maps each to a suitable stack. The specific libraries matter less than the principle: every dependency should have a reason, decided before the AI starts running `npm install`.\n**Data-heavy dashboards** benefit from component libraries with mature table, form, and pagination primitives — Ant Design and Mantine are common choices here. Visualization libraries like Recharts, form validation with React Hook Form + Zod, and a server-state layer like React Query tend to be essential since dashboards are essentially API browsers.\n**General-purpose web apps** often pair well with a flexible UI library (shadcn/ui is popular because AI tools know it well and you own the source), Tailwind for styling, and a light state split: Zustand for client state, React Query for server state.\n**SEO-sensitive pages** — landing pages, marketing sites, content-driven products — usually call for a framework with SSR built in, like Next.js. Complex client state management is rarely needed.\n**Prototypes and personal tools** deserve the lightest setup: `useState` is often enough, team-level tooling like Husky and Commitlint can be skipped, and `localStorage` may replace a backend entirely.\nWhen in doubt, the SaaS combo works as a reasonable default — it covers the most ground without over-engineering.",
    "zh-TW":
      "不是每個專案都需要 Zustand、React Query 加上一整套 lint 流程——但不先問清楚的話，AI 會很開心地幫一個只需要 `useState` 跟 `localStorage` 的小工具全部裝上去。所以 skill 一開始就先分類專案，再決定技術棧。\n第 0 步把專案分成幾大類，為每一類對應合適的技術棧。具體選什麼套件不是重點，重點在於：每個依賴都應該有個理由，在 AI 開始跑 `npm install` 之前就先想清楚。\n**資料密集型的後台系統**，適合選有成熟表格、表單、分頁元件的 UI 庫——Ant Design 和 Mantine 是常見選擇。搭配 Recharts 等圖表庫、React Hook Form + Zod 做驗證、React Query 管理 server state，因為後台本質上就是 API 瀏覽器。\n**一般 Web App** 通常適合搭配彈性較高的 UI 庫（shadcn/ui 因為 AI 工具熟悉度高、且可直接修改原始碼而受歡迎）、Tailwind 管理樣式、Zustand 管 client state、React Query 管 server state。\n**需要 SEO 的頁面**——landing page、行銷網站、內容導向產品——通常適合內建 SSR 的框架，如 Next.js。複雜的 client state 管理在這類專案很少需要。\n**原型和個人工具**用最輕量的設定就好：`useState` 通常就夠了、可以跳過 Husky 和 Commitlint 這類團隊工具、`localStorage` 可能就足以取代後端。\n不確定的時候，SaaS 通用組合是合理的預設——涵蓋範圍最廣又不至於過度設計。",
  },
};

export const TECHSTACK_CODE: CodeBlock = {
  codeType: "text",
  code: `Project Type          UI             Style        State             Router
─────────────────────────────────────────────────────────────────────────────
Admin / Dashboard     Ant Design     Theme sys    Zustand + RQ      React Router
SaaS / Web App        shadcn/ui      Tailwind     Zustand + RQ      React Router
Landing Page          shadcn/ui      Tailwind     useState           Next.js
Personal Tool         daisyUI        Tailwind     useState           optional
E-commerce            shadcn/ui      Tailwind     Zustand + RQ      Next.js
─────────────────────────────────────────────────────────────────────────────
Default (unsure)   →  SaaS combo: Vite + React + TS + Tailwind + shadcn/ui
                      + lucide-react + React Router + Zustand + RQ + RHF + Zod`,
};

// ─── 03 Step 3 — The Convention Prompt ───

export const CONVENTION_SECTION: BodySection = {
  title: { en: "Step 3 — The Convention Prompt", "zh-TW": "Step 3 — 規範 Prompt" },
  content: {
    en: "The convention prompt is a file that lives at the root of the project — `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, or just `AGENTS.md` depending on the tool. The AI reads it at the start of every conversation, which means it acts as persistent memory: no matter how many sessions have passed, the AI consistently follows the same patterns — same styling approach, same component library, same rules about what it can and can't install.\nWithout this file, every conversation starts from zero, and by the fifth feature the codebase looks like five different developers wrote it — because, in a sense, they did.\nA good convention prompt typically covers four areas:\n1️⃣ **Component rules:** function components only, typed props, PascalCase filenames, one main export per file. These sound obvious, but AI will happily default to unnamed default exports and `any` types without explicit guidance.\n2️⃣ **Style rules:** pick one approach and enforce it. If the project uses Tailwind, say so — no inline styles, no new `.css` files. Colors should use design tokens, not hardcoded hex values. Conditional classes go through a utility like `cn()`. Consistency here prevents the slow drift where half the components follow one pattern and the other half follow whatever the AI invented that session.\n3️⃣ **State rules:** define a clear hierarchy. `useState` for local state, a client store (like Zustand) only when needed, server state through a dedicated layer (like React Query) and never in the global store. The most common AI mistake is shoving API responses into global state — a rule here blocks it.\n4️⃣ **Guardrail rules:** explain the plan before coding, list affected files if more than three, never install undiscussed packages, report if anything broke. These aren't about code quality — they're about keeping the human in the loop.",
    "zh-TW":
      "規範 prompt 是一個放在專案根目錄的檔案——根據工具不同，叫 `.cursorrules`、`CLAUDE.md`、`.windsurfrules` 或就叫 `AGENTS.md`。AI 在每次對話開始時都會讀取它，等於是一種持久記憶：不管開了幾輪對話，AI 都會一致地遵循相同的模式——同樣的樣式寫法、同樣的元件庫、同樣的安裝規則。\n沒有這個檔案，每次對話都從零開始，做到第五個功能的時候，程式碼看起來就像五個不同的開發者寫的——某種意義上，確實是。\n一份好的規範 prompt 通常涵蓋四個面向：\n1️⃣ **元件規則：**只用 function component、props 一定有型別、檔名用 PascalCase、一個檔案只有一個主要 export。這些聽起來理所當然，但沒有明確指示的話，AI 會很自然地用沒名字的 default export 和 `any` 型別。\n2️⃣ **樣式規則：**選一種方式並貫徹。如果專案用 Tailwind，就寫清楚——不寫 inline style、不開新的 `.css` 檔。顏色用 design token，不寫死色碼。條件式 class 用 `cn()` 之類的工具函式。一致性能防止那種慢性漂移——一半元件用一種寫法，另一半用 AI 那次對話自己發明的寫法。\n3️⃣ **狀態規則：**定義清楚的層級。`useState` 管 local state、client store（如 Zustand）在需要時才用、server state 走專用的管理層（如 React Query）且不塞進全域 store。AI 最常見的錯誤就是把 API 回傳的資料硬塞進全域狀態——這條規則直接擋掉。\n4️⃣ **護欄規則：**寫程式前先說計畫、改超過三個檔案先列清單、不裝沒討論過的套件、做完回報有沒有東西壞掉。這些跟程式碼品質無關——它們是為了讓人類始終在迴圈裡。",
  },
};

export const CONVENTION_CODE: CodeBlock = {
  codeType: "markdown",
  code: `# Project Conventions (.cursorrules / CLAUDE.md)

## Components
- Always use function components + hooks
- Props must have a TypeScript interface
- Filenames in PascalCase (e.g. UserCard.tsx)
- One main export per file

## Styling
- Tailwind classes only — no inline styles, no new .css files
- Colors use design tokens (bg-primary), never hardcoded bg-[#xxx]
- Conditional class combinations go through cn() utility

## State
- Use useState when it's enough — don't reach for Zustand prematurely
- Server state always goes through React Query, never into Zustand

## Guardrails
- Tell me your plan before writing code
- If changing more than 3 files, list them for confirmation first
- Don't install packages we haven't discussed
- After completing a feature, report whether anything broke`,
};

// ─── 04 Field-Tested Habits ───

export const TIPS_SECTION: BodySection = {
  title: { en: "Field-Tested Habits", "zh-TW": "實戰心法" },
  content: {
    en: "Four habits that tend to determine whether vibe coding stays productive or spirals into a codebase no one — including the AI — can follow anymore.\n1️⃣ **Small steps, fast commits.** One feature at a time, committed before moving on. When AI is asked to build three features in a single session, it starts making assumptions across all three, and those assumptions compound. One feature, one commit, one clean diff.\n2️⃣ **Let the AI see everything.** Tools like Cursor, Claude Code, and Windsurf can read the entire project — file tree, imports, existing patterns. Copy-pasting snippets into a chat window strips that context away, and the AI fills the gaps with guesses. Fewer guesses, fewer surprises.\n3️⃣ **TypeScript strict mode.** Setting `\"strict\": true` in `tsconfig.json` isn't about being pedantic — it gives the AI a second pair of eyes. When it writes `any` or forgets a null check, the type system flags it before anyone reads the code. Without strict mode, those mistakes compile silently and surface as bugs three features later.\n4️⃣ **Keep the convention prompt alive.** Every time the AI does something undesirable — installs an undiscussed package, uses inline styles in a Tailwind project, puts state in the wrong layer — add a line to the convention file. The file is a living document, not a one-time setup. Each rule added is one mistake the AI will never repeat.",
    "zh-TW":
      "四個實戰心法，通常決定了 vibe coding 到底會維持高效、還是失控到連 AI 自己都追不上。\n1️⃣ **小步快跑。**一次只做一個功能，做完就 commit，再做下一個。當 AI 在同一輪對話裡被要求同時做三個功能，它就會開始跨功能做假設，而這些假設會累積。一個功能、一次 commit、一份乾淨的 diff。\n2️⃣ **讓 AI 看得到全貌。**Cursor、Claude Code、Windsurf 這類工具可以讀取整個專案——檔案結構、import 關係、既有的寫法。如果只是把片段程式碼貼進聊天視窗，AI 就只能靠猜來填補空白。猜得越少，驚嚇就越少。\n3️⃣ **TypeScript 嚴格模式。**在 `tsconfig.json` 裡設 `\"strict\": true`，不是吹毛求疵——而是給 AI 多一雙眼睛。當它寫了 `any` 或忘了 null check，型別系統會在任何人讀到那段程式碼之前就先擋下來。沒有嚴格模式，這些錯誤會默默通過編譯，然後在三個功能之後才冒出來當 bug。\n4️⃣ **規範 prompt 要持續更新。**每次 AI 做了不預期的事——裝了沒討論的套件、在 Tailwind 專案裡寫了 inline style、把狀態放錯層——就在規範檔裡加一行。這個檔案是活的文件，不是一次性設定。每多一條規則，就少一種 AI 會重複犯的錯。",
  },
};

export const TIPS_CODE: CodeBlock = {
  codeType: "text",
  code: `Habit                    Why it matters
────────────────────────────────────────────────────────────
1. One feature per        AI assumptions compound across
   commit                 features — isolate them

2. Full-project AI        Context > copy-paste;
   tools                  fewer guesses = fewer surprises

3. tsconfig strict:       Type system catches AI mistakes
   true                   before you read the code

4. Update convention      Every rule you add = one mistake
   file after each pain   the AI never repeats`,
};

// ─── 05 Interaction Principles ───

export const PRINCIPLES_SECTION: BodySection = {
  title: { en: "Interaction Principles", "zh-TW": "互動原則" },
  content: {
    en: "These are the design principles baked into the skill — the meta-layer that shapes how it delivers all the prompts above.\n1️⃣ **Ask before recommending.** The tech stack isn't a default — the skill asks what type of project is being built, then recommends accordingly. But if the user has already specified \"I'm building a SaaS with Mantine,\" it skips the question and generates prompts for exactly that.\n2️⃣ **Give copy-pasteable prompts, not descriptions.** \"You need to set up ESLint\" is useless in a vibe-coding workflow. What's needed is the actual prompt that gets pasted into the AI tool. Every output from this skill is something that can be selected, copied, and pasted directly.\n3️⃣ **Swap on request.** If someone says \"I want Jotai instead of Zustand\" or \"swap shadcn for Mantine,\" the skill replaces that one item, keeps everything else, and updates the convention prompt to match. No full teardown.\n4️⃣ **Handle the \"I already have a project\" case.** If someone already has a codebase and just wants conventions, the skill skips stages 1 and 2, asks what stack is in place, and jumps straight to the convention prompt.\n5️⃣ **Don't explain unless asked.** The goal is a fast kickoff, not a tutorial. Package explanations only appear when someone asks \"what does this do?\"",
    "zh-TW":
      "這些是內建在 skill 裡的設計原則——形塑它如何產出上面那些 prompt 的後設層。\n1️⃣ **先問再給。**技術棧不是預設值——skill 先問要做什麼類型的專案，再推薦。但如果使用者已經指定了「我要做 SaaS，用 Mantine」，它就跳過問題、直接照需求產生 prompt。\n2️⃣ **直接給可貼的 prompt，不要只描述。**「你需要設定 ESLint」在 vibe coding 的流程裡沒有用。需要的是可以直接貼進 AI 工具的那段 prompt。這個 skill 的每一段輸出都是可以全選、複製、貼上的。\n3️⃣ **想換就換。**如果有人說「我要用 Jotai 不要 Zustand」或「shadcn 換成 Mantine」，skill 只替換那一項，其他不動，並同步更新規範 prompt 裡對應的段落。不需要全部重來。\n4️⃣ **處理「我已經有專案了」的情況。**如果使用者已經有程式碼、只想加規範，skill 會跳過階段 1 和 2，問目前用什麼技術棧，然後直接跳到規範 prompt。\n5️⃣ **不解釋，除非被問。**目標是快速 kick off，不是教學。套件說明只在有人問「這個是幹嘛的？」時才出現。",
  },
};

export const PRINCIPLES_CODE: CodeBlock = {
  codeType: "text",
  code: `Principle                Behavior
────────────────────────────────────────────────────────────
Ask first                "What type of project?" before
                         any stack recommendation

Copy-paste ready         Every output is a prompt you can
                         paste directly into your AI tool

Swap, don't rebuild      Change one package → update that
                         item + its convention rules only

"Already have code"      Skip init, ask current stack,
                         jump to convention prompt

No unsolicited lessons   Explain only when the user asks
                         "what does this do?"`,
};

// ─── The Full Skill File ───

export const FULL_SKILL_SECTION: BodySection = {
  title: { en: "The Full Skill File", "zh-TW": "完整 Skill 檔案" },
  content: {
    en: "Below is the complete skill file. Drop it into `.claude/commands/react-vibe-kickoff.md` or `.claude/skills/react-vibe-kickoff/SKILL.md` and invoke it with `/project:react-vibe-kickoff`.",
    "zh-TW":
      "以下是完整的 skill 檔案。放到 `.claude/commands/react-vibe-kickoff.md` 或 `.claude/skills/react-vibe-kickoff/SKILL.md`，用 `/project:react-vibe-kickoff` 呼叫即可。",
  },
};

export const FULL_SKILL_CODE: CodeBlock = {
  codeType: "markdown",
  code: `# React Vibe Coding Kickoff

Help the user bootstrap a new React project for vibe coding (AI-driven development).
The key is to choose the right tech stack based on project type and lock in conventions
before any features get built — otherwise the AI will install random packages,
drift in style, and overwrite existing code.

## Overall Flow

Walk the user through these stages in order:

1. **Ask the project type** → recommend tech stack
2. **Stage 1**: User runs Vite init themselves
3. **Stage 2**: AI "environment setup prompt" (customized to the recommended stack)
4. **Stage 3**: AI "convention prompt" (the most important step — saved as a file the AI always reads)
5. **Stage 4**: "Feature kickoff prompt" for each new feature

Every stage delivers a **copy-pasteable** prompt — don't just describe concepts.

---

## Step 0: Ask Project Type, Then Recommend Stack

Don't lead with a full stack. Ask what the user is building first, then match.

### Admin / Dashboard
- **UI**: Ant Design or Mantine (strongest table, form, pagination primitives)
- **State**: Zustand (client) + React Query (server)
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts or ECharts

### SaaS / General Web App
- **UI**: shadcn/ui + Tailwind CSS + lucide-react
- **State**: Zustand + React Query
- **Router**: React Router v6 or TanStack Router
- **Forms**: React Hook Form + Zod

### Landing Page / Marketing Site
- **Recommend Next.js** (SEO, SSR friendly)
- **UI**: shadcn/ui + Tailwind + Framer Motion

### Personal Tool / Prototype
- **UI**: daisyUI or shadcn/ui
- **State**: useState is enough — don't over-engineer

### Not sure → Default to SaaS combo

---

## Stage 1: Vite Init Command

npm create vite@latest my-app -- --template react-ts

---

## Stage 2: Environment Setup Prompt

Generate a copy-paste prompt customized to the chosen stack.

---

## Stage 3: Convention Prompt (Most Important)

Save as .cursorrules / CLAUDE.md / .windsurfrules:

## Components
- Function components + hooks only
- Props must have TypeScript interface
- PascalCase filenames, one main export per file

## Styling
- Tailwind only — no inline styles, no new .css files
- Colors use design tokens, not hardcoded hex

## State
- useState first, Zustand only when needed
- Server state → React Query, never global store

## Guardrails
- Plan before coding, list files if > 3 changes
- No undiscussed packages, report breakages

---

## Stage 4: Feature Kickoff Prompt

I want to build [feature]. Before coding:
1. List needed components
2. Map data flow
3. Estimate affected files

---

## Interaction Principles
- Ask project type first, then recommend
- Give copy-paste prompts, not descriptions
- Swap one package on request, don't rebuild
- Skip init for existing projects
- Don't explain unless asked`,
};
