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
  }
};

export const REACTVIBEKICKOFFARTICLE_DATA: Demo[] = [REACTVIBEKICKOFFARTICLE];

export const INTRO_SECTION: BodySection = {
  title: {
    en: "NOTICES",
    "zh-TW": "NOTICES",
  },
  content: {
    en: "‼️Before starting a project, it's worth thinking through the architecture and feature scope on your own first — this helps control what gets generated and improves accuracy (avoiding unnecessary token back-and-forth). The full skill file is at the bottom of this article. The example here uses a Vite + TypeScript + Tailwind CSS React project — readers using different frameworks or stacks can treat this structure as a template and work with their own AI agent to build a version that fits. Also, the skill file itself can be written by the AI agent, which tends to produce fewer formatting errors.",
    "zh-TW":
      "‼️在開始專案前，建議先自行思考過架構跟功能範圍，可以有效控制生成內容和提高精準度（避免不必要的 token 來回）。完整 skill 放在文章底部，文中以 Vite + TypeScript + Tailwind CSS 的 React 專案為範例——使用不同框架或技術棧的讀者，可以把這個結構當作模板，和自己的 AI agent 討論出適合的版本。另外，skill 檔案本身也可以讓 AI agent 來撰寫，通常格式更不容易出錯。",
  },
};

export const SKILL_SECTION: BodySection = {
  title: {
    en: "What This Skill Does",
    "zh-TW": "這個 Skill 做什麼",
  },
  content: {
    en: "Skills are where Claude Code gets genuinely useful for repetitive multi-step workflows. Instead of typing the same series of instructions every time you start a new project, you write a skill once and invoke it with a slash command. A skill file lives in `.claude/commands/` (or `.claude/skills/`). It's a markdown file that describes: what the skill does, what inputs it needs, and the step-by-step instructions Claude should follow. Claude reads it, executes each step, and reports back.",
    "zh-TW":
      "Skills 是 Claude Code 在重複性多步驟工作流程中真正發揮作用的地方。不用每次開新專案都重新打一樣的指令，你只要寫一次 skill，之後用斜線指令呼叫就好。Skill 檔案放在 `.claude/commands/`（或 `.claude/skills/`）裡。它就是一個 markdown 檔，描述這個 skill 做什麼、需要什麼輸入、以及 Claude 應該依序執行的步驟。Claude 讀取後逐步執行，最後回報結果。",
  },
};

export const SKILL_DESCRIPTION_CODE_SECTION: CodeBlock = {
  codeType: "yaml",
  code: `---
name: react-vibe-kickoff
description: >
  啟動一個新的 React 專案、要用 vibe coding（讓 AI 寫程式）方式開發時的
  環境建置與規範流程。使用者只要提到「想開新的 React 專案」、「kick off React」、
  「初始化 React」、「React 新專案環境建置」、「要用 vibe coding 寫 React」、
  「React 專案要怎麼開始」這類情境，就要使用這個 skill，
  即使他沒有明確說「啟動專案」。
  這個 skill 會先了解專案類型（後台、SaaS、landing page、工具站、電商等），
  再根據類型推薦合適的技術棧組合，並提供分階段的可複製 prompt 範本
  （環境建置、規範 prompt、開場 prompt），讓使用者貼到
  Cursor / Claude Code / Windsurf 等 AI coding 工具裡，
  避免 AI 寫程式時亂裝套件、風格亂跳、覆蓋舊程式碼。
---`,
};

export const SKILL_CODE_SECTION: CodeBlock = {
  codeType: "markdown",
  code: `
# React Vibe Coding Kickoff

協助使用者用 vibe coding（讓 AI 寫程式）方式啟動一個新的 React 專案。重點是在開始寫功能前，先依**專案類型**選對技術棧，並把規範定好，否則 AI 會亂裝套件、風格亂跳。

## 整體流程

依序帶使用者走完：

1. **問清楚專案類型** → 推薦技術棧
2. **階段 1**：使用者自己跑 Vite 初始化
3. **階段 2**：給 AI 的「環境建置 prompt」（依推薦技術棧客製）
4. **階段 3**：給 AI 的「規範 prompt」（最重要，存成檔案讓 AI 永遠記得）
5. **階段 4**：開始寫功能時的「開場 prompt」
每個階段都直接給使用者**可以複製貼上**的 prompt，不要只描述概念。

---

## 第 0 步：先問專案類型，再推薦技術棧

不要一上來就丟一整套技術棧。先問使用者要做什麼類型的專案，再給對應建議。

問法可以是：「你這個專案比較像哪種？後台 / SaaS 產品 / landing page / 個人工具 / 電商 / 其他？大概會有 API 嗎？需要登入嗎？」

依專案類型推薦：

### 後台 / Admin Dashboard
- **UI 庫**：Ant Design 或 Mantine（表格、表單元件最強）
- **樣式**：搭配該庫的樣式系統，Tailwind 可選
- **狀態**：Zustand（client）+ React Query（server，幾乎一定有 API）
- **路由**：React Router v6
- **表單**：React Hook Form + Zod
- **圖表**：Recharts 或 ECharts
- **必備**：權限控制、表格分頁/排序/篩選
### SaaS 產品 / 一般 Web App
- **UI 庫**：shadcn/ui（最有彈性、AI 最熟）
- **樣式**：Tailwind CSS
- **Icon**：lucide-react
- **狀態**：Zustand + React Query
- **路由**：React Router v6 或 TanStack Router
- **表單**：React Hook Form + Zod
### Landing Page / 行銷網站
- **建議改用 Next.js**（SEO、SSR 友善），不要用純 Vite
- **UI**：shadcn/ui + Tailwind + Framer Motion（動畫）
- **不需要**：複雜狀態管理、路由（Next.js 自帶）
- **重點**：圖片優化、Lighthouse 分數、SEO meta
### 個人工具站 / 原型
- **UI 庫**：daisyUI 或 shadcn/ui（看想多快做完）
- **狀態**：useState 就好，不要過度設計
- **不需要**：Husky、Commitlint 這些團隊規範
- **可選**：localStorage 存資料就好，不一定要後端
### 電商 / 內容站
- **建議**：Next.js + shadcn/ui
- **狀態**：Zustand（購物車）+ React Query（商品資料）
- **必備**：圖片優化、SEO、支付串接
### 不確定 / 不想想那麼多
預設給 **SaaS 通用組合**：Vite + React + TS + Tailwind + shadcn/ui + lucide-react + React Router + Zustand + React Query + RHF + Zod。

---

## 通用：程式碼品質工具

無論哪種專案，這些都建議裝（除非使用者說「我自己玩玩不需要」）：
- ESLint + Prettier + EditorConfig
- Husky + lint-staged（commit 前自動檢查）
- Commitlint（規範 commit message）
個人原型可以省略 Husky / Commitlint。

---

## 階段 1：Vite 初始化指令

確認技術棧後，給使用者這段，請他自己在終端機跑：

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

如果是 landing page / 電商建議用 Next.js 的話，改成：

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
\`\`\`

提醒：用 TypeScript 不是負擔，反而會讓 AI 寫得更準（型別會幫它自我檢查）。

---

## 階段 2：環境建置 Prompt

依使用者選定的技術棧，產生對應的 prompt 給他**整段複製**貼到 Cursor / Claude Code / Windsurf。

下面是 **SaaS / 通用組合**的範例，其他類型按相同結構替換套件即可：

\`\`\`\`
我剛用 Vite + React + TypeScript 初始化了一個專案，
請幫我建置以下開發環境，並說明每一步在做什麼：

【技術棧】
- 樣式：Tailwind CSS
- UI 元件庫：shadcn/ui
- Icon：lucide-react
- 路由：React Router v6
- 狀態管理：Zustand（client state）+ React Query（server state）
- 表單：React Hook Form + Zod 驗證
- HTTP client：axios

【程式碼品質】
- ESLint + Prettier（互不衝突的設定）
- EditorConfig
- Husky + lint-staged（commit 前自動檢查）
- Commitlint（規範 commit message）

【專案結構】
請幫我建立以下資料夾結構並說明用途：
src/
  components/
    ui/         # shadcn 元件放這
  pages/        # 頁面
  hooks/        # 自訂 hooks
  lib/          # 工具函式（cn、formatters 等）
  api/          # API 請求
  types/        # TypeScript 型別
  store/        # Zustand store

【執行順序】
請按以下順序進行，每一步停下來讓我確認後再繼續：
1. 安裝並設定 Tailwind CSS（跟 Vite 整合）
2. 初始化 shadcn/ui（npx shadcn@latest init）
3. 安裝 lucide-react
4. 安裝路由、狀態、表單相關套件
5. 設定 ESLint + Prettier
6. 設定 Husky + lint-staged + Commitlint
7. 建立資料夾結構

不要一次全部裝完，也不要自己加我沒提到的套件。
\`\`\`\`

**對其他類型的客製重點**：
- 後台類：把 shadcn 換成 Ant Design 或 Mantine，加上 Recharts
- Landing page：移除路由、狀態管理那塊；改用 Next.js 的話初始化指令也要改
- 原型：把 Husky / Commitlint / Zustand 拿掉，留 ESLint + Prettier 就好

---

## 階段 3：規範 Prompt（最重要）

很多人會跳過這步，結果 AI 寫出來的程式碼風格亂跳。請使用者把下面這段**存成專案根目錄的檔案**，AI 工具會自動讀：

- 用 Cursor → 存成 \`.cursorrules\`
- 用 Claude Code → 存成 \`CLAUDE.md\`
- 用 Windsurf → 存成 \`.windsurfrules\`
- 通用 → 存成 \`AGENTS.md\`
下面同樣是 **shadcn/ui + Tailwind + lucide** 的範例，使用者用其他組合時要替換對應段落：

\`\`\`\`markdown
# 專案規範

在這個專案裡，請遵守以下規範：

## 元件
- 一律用 function component + hooks
- Props 一定要定義 TypeScript interface
- 檔名用 PascalCase（如 UserCard.tsx）
- 一個檔案只 export 一個主要元件

## shadcn/ui
- 需要新元件時，用 \`npx shadcn@latest add [元件名]\` 安裝
- 不要自己重刻 shadcn 已有的元件（Button、Input、Dialog 等）
- shadcn 元件放在 src/components/ui/，自訂元件放在 src/components/
- 修改 shadcn 元件時，直接改原始碼即可（這是 shadcn 的設計）

## 樣式
- 只用 Tailwind class，不寫 inline style，不開新的 .css 檔
- 顏色用 shadcn 的 design token（bg-primary、text-muted-foreground 等），
  不要寫死 bg-[#xxx] 或 text-blue-500
- 多個 class 條件組合時，用 cn() 工具函式（src/lib/utils.ts）
- RWD 用 Tailwind 的 sm: md: lg: 前綴

## Icon
- 一律用 lucide-react，不要用 emoji 當 icon、也不要找其他 icon 套件
- import 方式：import { Search, User } from 'lucide-react'
- icon 大小用 className 控制（如 className="w-4 h-4"）

## 狀態
- 能用 useState 解決就不要用 Zustand
- Server state 一律走 React Query，不要塞進 Zustand
- 不要把 API 資料塞進全域 state

## 其他
- 寫程式前先告訴我你的計畫
- 改動超過 3 個檔案時，先列清單給我確認
- 不要自己安裝沒討論過的套件
- 寫完功能後，告訴我有沒有破壞既有的東西
\`\`\`\`

**換成其他技術棧時的調整方向**：
- 用 Ant Design / Mantine：把「shadcn/ui」段改成該庫的元件使用規則（例如「優先用 Form.Item，不要自己組」）
- 用 Chakra：拿掉 Tailwind 那段，改成 style prop / theme 規則
- 沒用 Zustand / React Query：那兩個段落也拿掉

---

## 階段 4：開場 Prompt（每個新功能都用）

當使用者要開始寫第一個（或下一個）功能時，給他這個範本：

\`\`\`\`
我要做 [功能描述]，使用者流程是 [...]，
請先：
1. 列出需要哪些頁面/元件
2. 畫出資料流（state 在哪、API 怎麼打）
3. 估計需要改哪些檔案

確認後我們再開始寫。
\`\`\`\`

---

## 實戰建議（給使用者的提醒）

呈現完四個階段的 prompt 後，補上這幾點實戰心法：

- **小步快跑**：一次只做一個功能，做完 commit，再做下一個。AI 一次寫太多東西會失控。
- **讓 AI 看得到全貌**：用 Cursor、Claude Code、Windsurf 這類能讀整個專案的工具，比單純複製貼上效果好很多。
- **TypeScript 嚴格模式打開**：\`tsconfig.json\` 裡 \`"strict": true\`，AI 亂寫會被型別系統擋下來。
- **規範 prompt 要持續更新**：踩到 AI 的雷之後，把該避免的事補進規範檔，下次它就不會再犯。

---

## 互動原則

- **先問再給**：技術棧不是預設值，要先問專案類型再推薦。但如果使用者明確說了類型或技術棧，就跳過這步直接照他的需求生 prompt。
- **直接給可貼的 prompt**：不要只說「你需要設定 ESLint」，要直接給 prompt。使用者要的是能複製的東西。
- **使用者想換套件就換**：使用者可能想換 axios → fetch、Zustand → Jotai、shadcn → Mantine。換掉指定的那項，其他保留，並更新對應的規範 prompt 段落。
- **遇到「我已經有專案了，只想加規範」時**：跳過階段 1、2，先確認他現在用什麼技術棧，再給對應的階段 3 規範 prompt。
- **不要對話裡解釋每個套件做什麼，除非使用者問**：使用者要的是快速 kick off，不是教學。
`,
};

export const SKILL_FLOW_SECTION: BodySection = {
  title: { en: "The Five-Step Sequence", "zh-TW": "五步流程" },
  content: {
    en: "The value of this skill is its sequence — it ensures the important decisions happen before any code gets written.\nStep 0 asks what kind of project you're building, because a SaaS dashboard and a landing page need completely different toolchains — clarifying this upfront prevents the AI from over-engineering a personal tool with enterprise-grade state management.\nStep 1 is the only step you run yourself: `npm create vite@latest` (or `create-next-app` if SEO matters). TypeScript is strongly recommended here — it acts as a guardrail that lets the AI catch its own mistakes through the type system.\nStep 2 hands the AI an environment setup prompt, customized to the stack you picked. The prompt explicitly tells the AI to install one thing at a time, wait for confirmation, and never add packages you didn't list.\nStep 3 is the convention prompt — the most important and most skipped step. It gets saved as a file the AI reads on every future conversation. Without it, every session starts from zero.\nStep 4 is the per-feature opening prompt: before writing any code, the AI lists what components it needs, maps out the data flow, and estimates which files will change. You confirm, then it builds.",
    "zh-TW":
      "這個 skill 的價值在於它的順序——確保重要決策在寫程式之前就先定好。\n第 0 步確認要做什麼類型的專案，因為 SaaS 後台跟 landing page 需要完全不同的工具鏈——先問清楚才能避免 AI 幫一個個人小工具裝上企業級的狀態管理。\n第 1 步是唯一由你自己跑的步驟：`npm create vite@latest`（如果需要 SEO 就改用 `create-next-app`）。這裡建議使用 TypeScript——它是一道護欄，讓 AI 能透過型別系統抓到自己的錯。\n第 2 步把一份依選定技術棧客製化的環境建置 prompt 交給 AI。這份 prompt 明確告訴 AI 一次只裝一樣東西、等確認再繼續、絕對不加未列出的套件。\n第 3 步是規範 prompt——最重要、也最常被跳過的一步。它會被存成一個檔案，AI 在往後每次對話都會讀取。沒有這個檔案，每次對話都從零開始。\n第 4 步是每個新功能的開場 prompt：在寫任何程式碼之前，AI 先列出需要哪些元件、畫出資料流、估計會動到哪些檔案。確認了，它才開始寫。",
  },
};

export const SKILL_FLOW_CODE_SECTION: CodeBlock = {
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

export const SKILL_TECHSTACK_SECTION: BodySection = {
  title: { en: "Step 0/ Project Type → Tech Stack", "zh-TW": "Step 0/ 專案類型 → 技術棧" },
  content: {
    en: "Not every project needs Zustand, React Query, and a full lint pipeline — but without asking, AI will happily install all of them for a personal tool that only needs `useState` and `localStorage`. That's why the skill starts by categorizing the project before touching any tooling.\n0️⃣ Step 0 sorts projects into broad categories and maps each to a suitable stack. The specific libraries matter less than the principle: every dependency should have a reason, decided before the AI starts running `npm install`.\n1️⃣ Data-heavy dashboards benefit from component libraries with mature table, form, and pagination primitives — Ant Design and Mantine are common choices here. Visualization libraries like Recharts, form validation with React Hook Form + Zod, and a server-state layer like React Query tend to be essential since dashboards are essentially API browsers.\n2️⃣ General-purpose web apps often pair well with a flexible UI library (shadcn/ui is popular because AI tools know it well and you own the source), Tailwind for styling, and a light state split: Zustand for client state, React Query for server state.\n3️⃣ SEO-sensitive pages — landing pages, marketing sites, content-driven products — usually call for a framework with SSR built in, like Next.js. Complex client state management is rarely needed.\n4️⃣ Prototypes and personal tools deserve the lightest setup: `useState` is often enough, team-level tooling like Husky and Commitlint can be skipped, and `localStorage` may replace a backend entirely.\n5️⃣ When in doubt, the SaaS combo works as a reasonable default — it covers the most ground without over-engineering.",
    "zh-TW":
      "不是每個專案都需要 Zustand、React Query 加上一整套 lint 流程——但不先問清楚的話，AI 會很開心地幫一個只需要 `useState` 跟 `localStorage` 的小工具全部裝上去。所以 skill 一開始就先分類專案，再決定技術棧。\n0️⃣ 第 0 步把專案分成幾大類，為每一類對應合適的技術棧。具體選什麼套件不是重點，重點在於：每個依賴都應該有個理由，在 AI 開始跑 `npm install` 之前就先想清楚。\n1️⃣ 資料密集型的後台系統，適合選有成熟表格、表單、分頁元件的 UI 庫——Ant Design 和 Mantine 是常見選擇。搭配 Recharts 等圖表庫、React Hook Form + Zod 做驗證、React Query 管理 server state，因為後台本質上就是 API 瀏覽器。\n2️⃣ 一般 Web App 通常適合搭配彈性較高的 UI 庫（shadcn/ui 因為 AI 工具熟悉度高、且可直接修改原始碼而受歡迎）、Tailwind 管理樣式、Zustand 管 client state、React Query 管 server state。\n3️⃣ 需要 SEO 的頁面——landing page、行銷網站、內容導向產品——通常適合內建 SSR 的框架，如 Next.js。複雜的 client state 管理在這類專案很少需要。\n4️⃣ 原型和個人工具用最輕量的設定就好：`useState` 通常就夠了、可以跳過 Husky 和 Commitlint 這類團隊工具、`localStorage` 可能就足以取代後端。\n5️⃣ 不確定的時候，SaaS 通用組合是合理的預設——涵蓋範圍最廣又不至於過度設計。",
  },
};

export const SKILL_TECHSTACK_CODE_SECTION: CodeBlock = {
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

export const SKILL_CONVENTION_SECTION: BodySection = {
  title: { en: "Step 3/ The Convention Prompt", "zh-TW": "Step 3/ 規範 Prompt" },
  content: {
    en: "The convention prompt is a file that lives at the root of the project — `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, or just `AGENTS.md` depending on the tool. The AI reads it at the start of every conversation, which means it acts as persistent memory: no matter how many sessions have passed, the AI consistently follows the same patterns — same styling approach, same component library, same rules about what it can and can't install.\nWithout this file, every conversation starts from zero, and by the fifth feature the codebase looks like five different developers wrote it — because, in a sense, they did.\nA good convention prompt typically covers four areas:\n1️⃣ Component rules: function components only, typed props, PascalCase filenames, one main export per file. These sound obvious, but AI will happily default to unnamed default exports and `any` types without explicit guidance.\n2️⃣ Style rules: pick one approach and enforce it. If the project uses Tailwind, say so — no inline styles, no new `.css` files. Colors should use design tokens, not hardcoded hex values. Conditional classes go through a utility like `cn()`. Consistency here prevents the slow drift where half the components follow one pattern and the other half follow whatever the AI invented that session.\n3️⃣ State rules: define a clear hierarchy. `useState` for local state, a client store (like Zustand) only when needed, server state through a dedicated layer (like React Query) and never in the global store. The most common AI mistake is shoving API responses into global state — a rule here blocks it.\n4️⃣ Guardrail rules: explain the plan before coding, list affected files if more than three, never install undiscussed packages, report if anything broke. These aren't about code quality — they're about keeping the human in the loop.",
    "zh-TW":
      "規範 prompt 是一個放在專案根目錄的檔案——根據工具不同，叫 `.cursorrules`、`CLAUDE.md`、`.windsurfrules` 或就叫 `AGENTS.md`。AI 在每次對話開始時都會讀取它，等於是一種持久記憶：不管開了幾輪對話，AI 都會一致地遵循相同的模式——同樣的樣式寫法、同樣的元件庫、同樣的安裝規則。\n沒有這個檔案，每次對話都從零開始，做到第五個功能的時候，程式碼看起來就像五個不同的開發者寫的——某種意義上，確實是。\n一份好的規範 prompt 通常涵蓋四個面向：\n1️⃣ 元件規則：只用 function component、props 一定有型別、檔名用 PascalCase、一個檔案只有一個主要 export。這些聽起來理所當然，但沒有明確指示的話，AI 會很自然地用沒名字的 default export 和 `any` 型別。\n2️⃣ 樣式規則：選一種方式並貫徹。如果專案用 Tailwind，就寫清楚——不寫 inline style、不開新的 `.css` 檔。顏色用 design token，不寫死色碼。條件式 class 用 `cn()` 之類的工具函式。一致性能防止那種慢性漂移——一半元件用一種寫法，另一半用 AI 那次對話自己發明的寫法。\n3️⃣ 狀態規則：定義清楚的層級。`useState` 管 local state、client store（如 Zustand）在需要時才用、server state 走專用的管理層（如 React Query）且不塞進全域 store。AI 最常見的錯誤就是把 API 回傳的資料硬塞進全域狀態——這條規則直接擋掉。\n4️⃣ 護欄規則：寫程式前先說計畫、改超過三個檔案先列清單、不裝沒討論過的套件、做完回報有沒有東西壞掉。這些跟程式碼品質無關——它們是為了讓人類始終在迴圈裡。",
  },
};

export const SKILL_CONVENTION_CODE_SECTION: CodeBlock = {
  codeType: "markdown",
  code: `# 專案規範 (.cursorrules / CLAUDE.md)

## 元件
- 一律用 function component + hooks
- Props 一定要定義 TypeScript interface
- 檔名用 PascalCase（如 UserCard.tsx）
- 一個檔案只 export 一個主要元件

## 樣式
- 只用 Tailwind class，不寫 inline style，不開新的 .css 檔
- 顏色用 design token（bg-primary），不要寫死 bg-[#xxx]
- 多個 class 條件組合時，用 cn() 工具函式

## 狀態
- 能用 useState 解決就不要用 Zustand
- Server state 一律走 React Query，不要塞進 Zustand

## 護欄
- 寫程式前先告訴我你的計畫
- 改動超過 3 個檔案時，先列清單給我確認
- 不要自己安裝沒討論過的套件
- 寫完功能後，告訴我有沒有破壞既有的東西`,
};

export const SKILL_TIPS_SECTION: BodySection = {
  title: { en: "Field-Tested Habits", "zh-TW": "實戰心法" },
  content: {
    en: "Four habits that tend to determine whether vibe coding stays productive or spirals into a codebase no one — including the AI — can follow anymore.\n1️⃣ Small steps, fast commits. One feature at a time, committed before moving on. When AI is asked to build three features in a single session, it starts making assumptions across all three, and those assumptions compound. One feature, one commit, one clean diff.\n2️⃣ Let the AI see everything. Tools like Cursor, Claude Code, and Windsurf can read the entire project — file tree, imports, existing patterns. Copy-pasting snippets into a chat window strips that context away, and the AI fills the gaps with guesses. Fewer guesses, fewer surprises.\n3️⃣ TypeScript strict mode. Setting `\"strict\": true` in `tsconfig.json` isn't about being pedantic — it gives the AI a second pair of eyes. When it writes `any` or forgets a null check, the type system flags it before anyone reads the code. Without strict mode, those mistakes compile silently and surface as bugs three features later.\n4️⃣ Keep the convention prompt alive. Every time the AI does something undesirable — installs an undiscussed package, uses inline styles in a Tailwind project, puts state in the wrong layer — add a line to the convention file. The file is a living document, not a one-time setup. Each rule added is one mistake the AI will never repeat.",
    "zh-TW":
      "四個實戰心法，通常決定了 vibe coding 到底會維持高效、還是失控到連 AI 自己都追不上。\n1️⃣ 小步快跑。一次只做一個功能，做完就 commit，再做下一個。當 AI 在同一輪對話裡被要求同時做三個功能，它就會開始跨功能做假設，而這些假設會累積。一個功能、一次 commit、一份乾淨的 diff。\n2️⃣ 讓 AI 看得到全貌。Cursor、Claude Code、Windsurf 這類工具可以讀取整個專案——檔案結構、import 關係、既有的寫法。如果只是把片段程式碼貼進聊天視窗，AI 就只能靠猜來填補空白。猜得越少，驚嚇就越少。\n3️⃣ TypeScript 嚴格模式。在 `tsconfig.json` 裡設 `\"strict\": true`，不是吹毛求疵——而是給 AI 多一雙眼睛。當它寫了 `any` 或忘了 null check，型別系統會在任何人讀到那段程式碼之前就先擋下來。沒有嚴格模式，這些錯誤會默默通過編譯，然後在三個功能之後才冒出來當 bug。\n4️⃣ 規範 prompt 要持續更新。每次 AI 做了不預期的事——裝了沒討論的套件、在 Tailwind 專案裡寫了 inline style、把狀態放錯層——就在規範檔裡加一行。這個檔案是活的文件，不是一次性設定。每多一條規則，就少一種 AI 會重複犯的錯。",
  },
};

export const SKILL_TIPS_CODE_SECTION: CodeBlock = {
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

export const SKILL_PRINCIPLES_SECTION: BodySection = {
  title: { en: "Interaction Principles", "zh-TW": "互動原則" },
  content: {
    en: "These are the design principles baked into the skill — the meta-layer that shapes how it delivers all the prompts above.\n1️⃣ Ask before recommending. The tech stack isn't a default — the skill asks what type of project is being built, then recommends accordingly. But if the user has already specified \"I'm building a SaaS with Mantine,\" it skips the question and generates prompts for exactly that.\n2️⃣ Give copy-pasteable prompts, not descriptions. \"You need to set up ESLint\" is useless in a vibe-coding workflow. What's needed is the actual prompt that gets pasted into the AI tool. Every output from this skill is something that can be selected, copied, and pasted directly.\n3️⃣ Swap on request. If someone says \"I want Jotai instead of Zustand\" or \"swap shadcn for Mantine,\" the skill replaces that one item, keeps everything else, and updates the convention prompt to match. No full teardown.\n4️⃣ Handle the \"I already have a project\" case. If someone already has a codebase and just wants conventions, the skill skips stages 1 and 2, asks what stack is in place, and jumps straight to the convention prompt.\n5️⃣ Don't explain unless asked. The goal is a fast kickoff, not a tutorial. Package explanations only appear when someone asks \"what does this do?\"",
    "zh-TW":
      "這些是內建在 skill 裡的設計原則——形塑它如何產出上面那些 prompt 的後設層。\n1️⃣ 先問再給。技術棧不是預設值——skill 先問要做什麼類型的專案，再推薦。但如果使用者已經指定了「我要做 SaaS，用 Mantine」，它就跳過問題、直接照需求產生 prompt。\n2️⃣ 直接給可貼的 prompt，不要只描述。「你需要設定 ESLint」在 vibe coding 的流程裡沒有用。需要的是可以直接貼進 AI 工具的那段 prompt。這個 skill 的每一段輸出都是可以全選、複製、貼上的。\n3️⃣ 想換就換。如果有人說「我要用 Jotai 不要 Zustand」或「shadcn 換成 Mantine」，skill 只替換那一項，其他不動，並同步更新規範 prompt 裡對應的段落。不需要全部重來。\n4️⃣ 處理「我已經有專案了」的情況。如果使用者已經有程式碼、只想加規範，skill 會跳過階段 1 和 2，問目前用什麼技術棧，然後直接跳到規範 prompt。\n5️⃣ 不解釋，除非被問。目標是快速 kick off，不是教學。套件說明只在有人問「這個是幹嘛的？」時才出現。",
  },
};

export const SKILL_PRINCIPLES_CODE_SECTION: CodeBlock = {
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
