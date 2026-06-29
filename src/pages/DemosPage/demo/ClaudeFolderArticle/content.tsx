import type { Demo, BodySection, CodeBlock } from "@/data/demos";

export const CLAUDEFOLDERARTICLE: Demo = {
  date: "2026-06-27",
  title: {
    en: "Inside the .claude Folder",
    "zh-TW": "了解 .claude 資料夾",
  },
  description: {
    en: "A full tour of .claude/ and CLAUDE.md — who reads each piece, when it loads, and how agents, rules, commands, hooks, skills, and MCP servers turn a generic AI into a project-aware teammate.",
    "zh-TW":
      "完整走一遍 .claude/ 和 CLAUDE.md——每個檔案是誰在看、什麼時候被讀取，以及 agents、rules、commands、hooks、skills 和 MCP 伺服器如何讓一個通用 AI 變成懂專案脈絡的隊友。",
  },
  type: "article",
  tags: ["Claude Code", "AI", "DX"],
  url: "/demos/claude-folder-guide",
  introduction: {
    outline: {
      en: "A walkthrough of Claude Code's project configuration layer, organized around one question for each piece: who is it written for, and when does Claude actually read it? Illustrated with a real side project — an AI-powered US stock monitoring system — to show how each configuration piece plays out in practice.",
      "zh-TW":
        "一篇拆解 Claude Code 專案設定層的文章，每個部分都圍繞同一個問題：這是寫給誰看的，Claude 又是什麼時候會讀到它？全程以一個實際的 side project——AI 美股監控系統——為例，展示每個設定在真實開發中如何發揮作用。",
    },
    refs: [
      {
        label: "Claude Code — Project Configuration",
        url: "https://docs.anthropic.com/en/docs/claude-code/settings",
      },
      {
        label: "Claude Code — Custom Slash Commands",
        url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands",
      },
      {
        label: "ThisWeb — 一篇文搞懂 agents、commands、hooks 到 rules",
        url: "https://thisweb.dev/post/claude-code-structure",
      },
    ],
  },
  nextArticle: {
    title: {
      en: "Building an Initialize Skill",
      "zh-TW": "建立 Initialize Skill",
    },
    url: "/demos/react-vibe-kickoff",
  },
};

export const CLAUDEFOLDERARTICLE_DATA: Demo[] = [CLAUDEFOLDERARTICLE];

// ─── Motivation ───

export const MOTIVATION_SECTION: BodySection = {
  title: { en: "Previously on...", "zh-TW": "前情提要" },
  content: {
    en: "This is a personal learning journal — some passages may be excerpted from other articles. If I've used a snippet without proper attribution, please DM me and I'll add the source as soon as possible. The AI stock monitoring system was built mainly as a vibe-coding exercise, so there are no real realized P&L numbers to show for it yet — the focus here is entirely on the .claude architecture.",
    "zh-TW":
      "這篇是自己的學習筆記，內容可能節錄了許多文章的片段，如果有任何使用片段沒有標明出處的地方，還請 dm 我，我會儘速補上來源。AI 美股監控系統目標是拿來練習做 vibe coding，所以其實目前沒有實質的「實現損益」🤣，所以還是專注在 .claude 的架構上啦。",
  },
};

export const BRIEF_SECTION: BodySection = {
  title: { en: "About the Project", "zh-TW": "簡述專案" },
  content: {
    en: "Key features: real-time US stock price tracking, AI-powered news summaries, a composite scoring engine, and Telegram notifications. The analysis criteria are drawn from an investment philosophy distilled from eight classic stock-market books, powered by five dedicated AI Agents, four reusable workflows, and a rule-loading manifest that cuts wasted context by 67%.",
    "zh-TW":
      "主要功能：追蹤美股即時股價、AI 新聞摘要、複合評分引擎和 Telegram 通知。分析標準讀取自八本經典股票書籍的投資哲學、應用五個專職的 AI Agent、四個可重複使用的工作流，加上一份讓 context 浪費減少 67% 的規則載入清單。",
  },
};

// ─── Overview ───

export const OVERVIEW_SECTION: BodySection = {
  title: { en: "The .claude Folder at a Glance", "zh-TW": ".claude 資料夾一覽" },
  content: {
    en: "Every Claude Code project can have a `.claude/` directory at its root, plus a `CLAUDE.md` file one level up. The two together form a per-repo configuration layer — but they're not interchangeable, and neither are the folders inside `.claude/`.",
    "zh-TW":
      "每個 Claude Code 專案都可以在根目錄放一個 `.claude/` 資料夾，再加上上一層的 `CLAUDE.md` 檔案。兩者一起構成一層專案級設定——但它們並不能互相取代，`.claude/` 底下的各個資料夾之間也是。",
  },
};

export const OVERVIEW_CODE: CodeBlock = {
  codeType: "text",
  code: `.claude/
├── agents/               # Custom AI sub-agents
├── commands/             # Custom slash commands
├── hooks/                # Automation workflow triggers
├── rules/                # Topic-specific behavior rules
├── skills/               # Reusable advanced workflow scripts
└── settings.json         # Permissions and global settings

CLAUDE.md                 # Project readme and dev conventions
docs/                     # Reference docs for humans (Claude doesn't auto-read)`,
};

export const OVERVIEW_SAMPLE_CODE: CodeBlock = {
  codeType: "text",
  code: `// The actual layout from the stock monitoring project

.claude/
├── rules/
│   ├── _manifest.md          # Rule-loading strategy (saves 67% context)
│   ├── agent-guidelines.md   # React anti-pattern library, code review checklist
│   ├── code-style.md         # Naming conventions, Git workflow
│   ├── frontend-architecture.md  # Component taxonomy, Hook conventions
│   ├── api-conventions.md    # API design, caching strategy
│   ├── investment-philosophy.md  # Stock-picking philosophy (distilled from 8 classics)
│   └── scoring-reference.md  # Scoring system weights and criteria
├── agents/               # Five specialists
│   ├── scraper-agent.md      # Data collection expert
│   ├── analyzer-agent.md     # AI analysis expert
│   ├── frontend-agent.md     # Frontend expert
│   ├── merge-agent.md        # Branch integration expert
│   └── memory-agent.md       # Knowledge persistence expert
├── skills/
│   ├── review-day.md         # /project:review-day
│   ├── analyze-stock.md      # /project:analyze-stock AAPL
│   ├── debug-api.md          # /project:debug-api
│   └── pre-merge.md          # /project:pre-merge
└── settings.local.json

CLAUDE.md
docs/`,
};

// ─── 01 CLAUDE.md ───

export const CLAUDE_MD_SECTION: BodySection = {
  title: { en: "CLAUDE.md — First Impressions", "zh-TW": "CLAUDE.md — 專案的第一印象" },
  content: {
    en: "The project-level readme that Claude reads before anything else. Use `@path/to/file` to import other docs when needed.\n**Who reads it:** AI + humans. Claude auto-reads it the moment a new session opens on this repo — you never ask it to.\n**Purpose:** Let AI orient in 3 seconds — what is this project, where does it stand, what's next.\n**How to use:** Keep it short. Only put \"project overview + current status + next steps\" here. Detailed rules go in `rules/` instead.\n**Metaphor:** A company's one-page intro — not the employee handbook.\n**In the stock project:** The `CLAUDE.md` lists the tech stack (FastAPI + Next.js + Claude API + Telegram), then uses `@path` references to point to each rule file — a table of contents for Claude to follow on demand, not a wall of text.",
    "zh-TW":
      "專案級的說明文件，Claude 在開始工作之前第一個讀的東西。必要時用 `@path/to/file` 匯入其他文件。\n**給誰看：** AI + 人類都看，每次開新 session 第一個讀的就是它。\n**目的：** 讓 AI 在 3 秒內知道「這是什麼專案、現在到哪了、下一步是什麼」。\n**怎麼用：** 你不需要主動叫 AI 讀它，AI 開啟這個 repo 就自動讀。內容要保持精簡，只放「專案概覽 + 目前狀態 + 下一步」，細節規則不放在這裡。\n**比喻：** 公司的一頁式介紹，不是員工手冊。\n**美股專案怎麼用：** `CLAUDE.md` 列出技術棧（FastAPI + Next.js + Claude API + Telegram），然後用 `@path` 引用指向每個規則檔——等於給 Claude 一份按需查閱的目錄，而不是一整面文字牆。",
  },
};

export const CLAUDE_MD_CODE: CodeBlock = {
  codeType: "markdown",
  code: `// path: CLAUDE.md
# AI US Stock Monitoring System

## Project Overview
An automated stock-monitoring system integrating real-time prices,
AI news summaries, alert notifications, and a visual dashboard.

**Tech Stack**
- Backend: FastAPI + yfinance + NewsAPI + Guardian + Finnhub + Alpha Vantage
- Frontend: Next.js + TailwindCSS
- AI: Claude API (parallel analysis)
- Notifications: Telegram Bot

## AI Rule Index (.claude/rules/)

**[CRITICAL] Always load:**
- @.claude/rules/agent-guidelines.md — React anti-patterns, code review checklist
- @.claude/rules/code-style.md — Naming conventions, Git workflow

**[CONDITIONAL] Load by context:**
- @.claude/rules/frontend-architecture.md — Component taxonomy (when editing frontend/*)
- @.claude/rules/api-conventions.md — API design, caching (when editing backend/*)
- @.claude/rules/investment-philosophy.md — Stock-picking philosophy (during stock analysis)
- @.claude/rules/scoring-reference.md — Scoring weights (during score calculations)

See @.claude/rules/_manifest.md for the full loading strategy (~67% context savings)`,
};

// ─── 02 Rules ───

export const RULES_SECTION: BodySection = {
  title: { en: ".claude/rules/ — AI's Work Rules (Auto-Effective)", "zh-TW": ".claude/rules/ — AI 的工作守則（自動生效）" },
  content: {
    en: "Topic-specific behavior rules that fire automatically whenever Claude works in this repo.\n**Who reads it:** AI only — nothing here is for humans on day one.\n**Purpose:** Stop repeating yourself. Every rule applies automatically in the background, every session.\n**How to use:** You don't do anything. Claude follows these rules whenever it works in this repo. Rules without a `paths` frontmatter load eagerly at session start (same as `CLAUDE.md`). Rules with a `paths` frontmatter load lazily — only when Claude touches a file matching that pattern.\n**CLAUDE.md vs rules/:** For small projects, `CLAUDE.md` alone is enough. But as a project grows and accumulates domain-specific rules, splitting them into `rules/` keeps things maintainable. `CLAUDE.md` holds what the whole project should always know; `rules/` holds what only matters for a specific file or domain.\n**Metaphor:** The employee handbook — the employee (Claude) follows it at work, without a manager repeating it every day.\n**In the stock project:** Drop `investment-philosophy.md` in once — a 230-line knowledge base distilled from eight investment classics — and Claude applies that framework every time it analyzes a stock. You never have to say \"remember to follow the investment philosophy\" again.",
    "zh-TW":
      "細分主題的行為規範，每次 Claude 在這個 repo 工作時都會自動生效。\n**給誰看：** 只給 AI 看——這裡完全沒有給人類第一天讀的東西。\n**目的：** 每次 AI 工作時，這些規則自動在背景運作，不需要你每次重複提醒。\n**怎麼用：** 你完全不需要主動操作。AI 在這個 repo 工作時，這些規則自動套用。沒有 `paths` frontmatter 的 rules，會在一開始就載入；有 `paths` frontmatter 的 rules，只有在 Claude 真的處理到符合的檔案時才載入。\n**CLAUDE.md 和 rules/ 的差別：** 如果是小專案，單純用 CLAUDE.md 就非常夠，但是當專案越來越大，有越來越多相關規範，就可以考慮拆分出 rules/ 來更好地維護。`CLAUDE.md` 適合放「整個專案都該知道」的事情，而 `rules/` 適合放「特定檔案或特定領域才需要」的規則。\n**比喻：** 公司的員工手冊，員工（AI）上班就要遵守，不需要主管每天唸。\n**美股專案怎麼用：** 放一份 `investment-philosophy.md` 進去——一份從八本投資經典萃取出的 230 行知識庫——Claude 分析股票時就會自動用這套框架。你再也不用說「記得根據投資哲學」。",
  },
};

export const RULES_CODE: CodeBlock = {
  codeType: "markdown",
  code: `// path: .claude/rules/investment-philosophy.md
# Investment Philosophy Knowledge Base
> Distilled from 8 investment classics for AI analysis reference
> Sources: Howard Marks, Peter Lynch, Benjamin Graham, Morgan Housel, Peter Thiel, etc.

## 1. Stock Selection Framework

### 1.1 Earnings as the Core Metric (Peter Lynch)
- Stock prices follow earnings: long-term price movement ultimately reflects earnings growth
- Daily or weekly price swings are usually just noise — review every six months at most

### 1.2 Margin of Safety (Benjamin Graham)
- Buying below intrinsic value is the investor's core protection mechanism
- The larger the discount, the higher the margin of safety, the lower the loss risk

## AI Analysis Guidelines

Primary analysis dimensions:
1. Earnings trend: is EPS growing consistently over recent quarters?
2. Valuation reasonableness: is the current P/E within a sensible range?
3. Competitive position: does the company have a hard-to-replicate advantage in its industry?`,
};

export const RULES_TABLE_SECTION: BodySection = {
  title: { en: "Six Rules, Each with Its Own Trigger", "zh-TW": "專案舉例：六個檔案各自的角色" },
  content: {
    en: "To make \"auto-effective\" concrete, here are six rule files from the stock project, each scoped to exactly the situation it should fire in. None of these need to be invoked; Claude just behaves differently depending on what it's currently touching.\nThe project also maintains a `_manifest.md` that explicitly tracks which rules load when — two rules load every time (264 lines), the other four only load conditionally. Instead of burning 1,157 lines every conversation, a typical task loads only ~487 lines. Average savings: 67%.",
    "zh-TW":
      "為了讓「自動生效」這件事更具體，這是美股專案裡實際用的六個規則檔案，各自只在該出現的情境下生效。這些都不需要手動呼叫；Claude 只是依照目前碰到的東西，自然表現出不一樣的行為。\n專案另外維護了一份 `_manifest.md`，明確記錄哪些規則在何時載入——兩個規則每次都載入（264 行），另外四個只在條件符合時才載入。不再每次對話都燒掉 1,157 行規則，一個典型任務只載入約 487 行。平均節省 67%。",
  },
};

export const RULES_TABLE_CODE: CodeBlock = {
  codeType: "text",
  code: `File                          When it auto-fires
──────────────────────────────────────────────
investment-philosophy.md      When AI gives investment advice
code-style.md                 When AI writes code
api-conventions.md            When AI designs API endpoints
frontend-architecture.md      When AI writes frontend components
agent-guidelines.md           When AI does code review
scoring-reference.md          When AI explains the scoring system

Rule                         Lines   Loading     Trigger
──────────────────────────────────────────────────────────
agent-guidelines.md          224     Always      Every session
code-style.md                 40     Always      Every session
─── Subtotal (CRITICAL)      264 ──────────────────────────
frontend-architecture.md     372     Conditional Editing frontend/*
api-conventions.md            56     Conditional Editing backend/*
investment-philosophy.md     238     Conditional Stock analysis tasks
scoring-reference.md         227     Conditional Score calculation tasks
─── Subtotal (CONDITIONAL)   893 ──────────────────────────

Scenario            Lines loaded    Savings
─────────────────────────────────────────
General code review  264            ⬇️ 77%
Frontend dev         636            ⬇️ 45%
Backend dev          320            ⬇️ 72%
Stock analysis       729            ⬇️ 37%
Average             ~487            ⬇️ 67%`,
};

// ─── 03 Commands ───

export const COMMANDS_SECTION: BodySection = {
  title: { en: ".claude/commands/ — Reusable Workflows", "zh-TW": ".claude/commands/ — 可重複使用的工作流" },
  content: {
    en: "Custom slash commands that turn repetitive tasks into one-liners.\n**Who reads it:** You (the human) trigger them, Claude executes.\n**Purpose:** Turn a repetitive task you'd otherwise re-explain every time into one line typed in the chat box.\n**How to use:** Type the slash command in the chat. Claude follows whatever steps that markdown file describes — you never re-explain the process.\n**Metaphor:** A company SOP manual. The new hire (Claude) follows the SOP; you don't walk them through it every time.\n**In the stock project:** The project doesn't have a `.claude/commands/` directory — it uses `.claude/skills/` instead (the officially recommended modern pattern). Skills offer the same slash-command experience but with smarter loading: Claude only reads a skill when the task is relevant, saving tokens. Commands are still the right choice for lightweight, quick-to-write workflows that don't need conditional loading.",
    "zh-TW":
      "建立自訂快捷指令，把重複性任務變成一行指令。\n**給誰看：** 你（人類）觸發，AI 執行。\n**目的：** 把你常做的重複性任務變成一行指令。\n**怎麼用：** 在對話框輸入斜線指令。AI 會自動照著那個 md 檔的步驟執行，你不需要每次重新解釋流程。\n**比喻：** 公司的 SOP 手冊。新人（AI）照 SOP 做，你不需要每次帶著跑。\n**美股專案怎麼用：** 這個專案沒有建立 `.claude/commands/` 資料夾——而是直接用 `.claude/skills/`（官方推薦的現代寫法）。Skills 提供一樣的斜線指令體驗，但載入更聰明：Claude 只在任務相關時才讀取，節省 token。如果是輕量、快速寫好的工作流，不需要條件載入，Commands 仍然是合適的選擇。",
  },
};

export const COMMANDS_CODE: CodeBlock = {
  codeType: "text",
  code: `/project:review-day           ← Summarize today's work (auto-reads git log)
/project:analyze-stock AAPL   ← Analyze AAPL using the investment philosophy framework
/project:debug-api            ← Six-step API diagnosis (connection, cache, rate limits)
/project:pre-merge            ← Pre-merge quality check (types, lint, tests, build)`,
};

// ─── 04 Skills ───

export const SKILLS_SECTION: BodySection = {
  title: { en: ".claude/skills/ — Loaded Only When Relevant", "zh-TW": ".claude/skills/ — 可複用的進階工作腳本" },
  content: {
    en: "Reusable advanced workflow scripts — like commands, but smarter about when they load.\n**Who reads it:** Claude reads them automatically when relevant work comes up.\n**Purpose:** Define callable workflows that Claude Code loads only when needed, and skips entirely — zero token cost — when the work doesn't match.\n**How to use:** Each Skill is a folder with `SKILL.md` as the main config, plus optional templates and examples alongside it. Claude Code automatically reads the relevant content when the work actually calls for it. This is the officially recommended modern pattern.\n**In the stock project:** `analyze-stock` is a Skill that defines the full output format (composite score, three-dimension breakdown, earnings analysis, valuation assessment), the data sources to pull from, and how different stock types (growth, value, cyclical) should shift the analysis emphasis.",
    "zh-TW":
      "和 commands 類似，但更聰明地決定何時載入。\n**給誰看：** Claude 在做相關工作時自動讀取。\n**目的：** 定義可呼叫的工作流程，Claude Code 會在做相關工作時自動讀取對應內容，做不相關工作就完全不讀——不佔用任何 token。這也是 Claude Code 官方推薦的現代寫法。\n**怎麼用：** 每個 Skill 是一個資料夾，裡面放著 `SKILL.md` 作為主要設定檔，還可以附上範本、範例等補充資料。Claude Code 會在做相關工作時自動讀取。\n**美股專案怎麼用：** `analyze-stock` 是一個 Skill，定義了完整的輸出格式（綜合評分、三維度分布、盈餘分析、估值評估）、該從哪些資料源取得數據，以及不同類型的股票（成長股、價值股、周期股）該怎麼調整分析重點。",
  },
};

export const SKILLS_CODE: CodeBlock = {
  codeType: "text",
  code: `// path: .claude/skills/analyze-stock.md

# Skill: Analyze Stock

## Invocation
/project:analyze-stock AAPL

## Output Format (excerpt)

📊 Stock Analysis Report — AAPL

[Composite Score]
  Score  8.2 / 10
  Rating 🟢 Strong Buy

[Three-Dimension Breakdown]
  Dimension            Score      Rating
  ─────────────────────────────────
  📊 Technical (35%)   75/100     Bullish
  💰 Fundamental (45%) 85/100     Excellent
  📰 Sentiment (20%)   70/100     Slightly positive

[Stock-Type Adjustments]
  Scenario              Analysis emphasis
  ─────────────────────────────────
  Growth (NVDA)         EPS growth rate, competitive moat
  Value (JNJ)           P/E, dividends, cash flow
  Cyclical (XLE)        Economic indicators, supply-demand balance`,
};

export const SKILLS_TABLE_SECTION: BodySection = {
  title: { en: "Four Skills, Each with Its Own Job", "zh-TW": "專案舉例：四個 Skill 各自的角色" },
  content: {
    en: "The stock project has four skills, each covering a distinct workflow. Like rules, none of these need to be manually loaded — Claude reads the relevant skill only when the task matches.",
    "zh-TW":
      "美股專案有四個 Skill，各自負責一個獨立的工作流。跟 rules 一樣，這些都不需要手動載入——Claude 只在任務符合時才讀取對應的 skill。",
  },
};

export const SKILLS_TABLE_CODE: CodeBlock = {
  codeType: "text",
  code: `Skill                    Invocation                          Purpose
──────────────────────────────────────────────────────────────────────────
review-day.md            /project:review-day                 Summarize the day's dev work (auto-reads git log)
analyze-stock.md         /project:analyze-stock AAPL         Analyze a stock using the investment philosophy
debug-api.md             /project:debug-api                  Six-step API diagnosis (connection, cache, rate limits)
pre-merge.md             /project:pre-merge                  Pre-merge quality check (types, lint, tests, build)`,
};

export const SKILLS_VS_CLAUDE_SECTION: BodySection = {
  title: { en: "CLAUDE.md vs. Skill", "zh-TW": "CLAUDE.md V.S. skill" },
  content: {
    en: "`CLAUDE.md` always applies and covers project-wide background; a Skill only gets consulted for the one task it describes.",
    "zh-TW":
      "`CLAUDE.md` 永遠生效、涵蓋整個專案的背景；Skill 只在它描述的那個任務上才會被參考。",
  },
};

export const SKILLS_VS_CLAUDE_CODE: CodeBlock = {
  codeType: "text",
  code: `                CLAUDE.md                          Skill
───────────────────────────────────────────────────────────────────────────────
Purpose         Tell Claude the project's background    Tell Claude how to execute a specific task
Scope           Global, always active                   Task-oriented, consulted on demand
Content         Architecture, conventions, tech choices Steps, instructions, output format`,
};

export const SKILLS_VS_COMMANDS_SECTION: BodySection = {
  title: { en: "Command vs. Skill", "zh-TW": "command V.S. skill" },
  content: {
    en: "A Command is a lightweight `.md` prompt that only works in this repo. A Skill packages as a `.skill` bundle that can carry actual code and be installed into any environment.",
    "zh-TW":
      "Command 是輕量的 `.md` prompt，只能在這個 repo 裡用；Skill 則包裝成 `.skill` 壓縮包，可以帶著實際程式碼，安裝到任何環境。",
  },
};

export const SKILLS_VS_COMMANDS_CODE: CodeBlock = {
  codeType: "text",
  code: `                Command                    Skill
─────────────────────────────────────────────────────────
Format          .md file                    .skill bundle
Executor        Claude interprets & acts    Claude interprets + bundled scripts
Portability     This repo only              Installable anywhere
Complexity      Lightweight prompt          Heavyweight, with code`,
};

// ─── 05 Hooks ───

export const HOOKS_SECTION: BodySection = {
  title: { en: ".claude/hooks/ — Automating the Workflow", "zh-TW": ".claude/hooks/ — 自動化工作流程觸發器" },
  content: {
    en: "Scripts that fire automatically when specific events happen — no manual reminding needed.\n**Who reads it:** The system runs these; neither you nor Claude trigger them by hand.\n**Purpose:** Automate checks and actions around Claude's workflow. For example, run lint and format right before a commit, or do an extra check before a risky command.\n**How to use:** Write the actual logic in a `.sh` file, then wire it up in `.claude/settings.json`. Keeping logic in a script (not inlined in JSON) makes it easy to edit and test independently.\n**In the stock project:** The project doesn't have a separate `.claude/hooks/` directory — the hook logic is simple enough (`npm run lint && npm run type-check` before commit) that it's defined inline in `settings.local.json`. For more complex checks involving multiple steps or conditional logic, splitting into `.sh` files becomes worthwhile.\nThe event types that come up most:",
    "zh-TW":
      "在特定事件發生時，自動執行某些動作，不需要每次手動提醒 Claude。\n**給誰看：** 系統自動執行，你和 Claude 都不需要手動觸發。\n**目的：** 自動化 Claude 工作流程中的檢查和動作。例如在準備提交 commit 前，自動先跑 lint 和 format；或是在 Claude 要執行某些關鍵指令前，先做額外檢查。\n**怎麼用：** 把真正的邏輯放在 `.sh` 裡，再回到 `.claude/settings.json` 把它掛上去。這種寫法的好處是，之後要改檢查流程也很直覺——改的是一支可以獨立編輯的腳本，不是一段 JSON 字串。\n**美股專案怎麼用：** 這個專案沒有另外建立 `.claude/hooks/` 資料夾——hook 邏輯夠簡單（commit 前跑 `npm run lint && npm run type-check`），直接寫在 `settings.local.json` 裡就夠了。如果檢查流程更複雜、涉及多步驟或條件判斷，拆成獨立的 `.sh` 檔案才比較值得。\n常用的事件類型：",
  },
};

export const HOOKS_EVENTS_CODE: CodeBlock = {
  codeType: "text",
  code: `Event              When it fires
─────────────────────────────────
PreToolUse         Before Claude executes a tool
PostToolUse        After Claude executes a tool
SubagentStart      When Claude launches a sub-agent
SubagentStop       When a sub-agent finishes
Stop               When Claude finishes a response
SessionStart       When a conversation begins
Notification       When Claude needs your input
FileChanged        When a watched file changes`,
};

export const HOOKS_WIRING_CODE: CodeBlock = {
  codeType: "json",
  code: `// .claude/settings.local.json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run type-check)",
      "Bash(npm run build)",
      "Bash(npm run test:*)",
      "Bash(python -m pytest)",
      "Bash(git status)",
      "Bash(git diff)"
    ]
  },
  "git": {
    "auto_commit": false,
    "show_diff_before_commit": true,
    "require_confirmation": true,
    "confirmation_keywords": ["ok", "yes", "commit", "approve", "go"]
  },
  "hooks": {
    "before_commit": "npm run lint && npm run type-check"
  }
}`,
};

// ─── 06 Docs ───

export const DOCS_SECTION: BodySection = {
  title: { en: "docs/ — Reference Material for Humans", "zh-TW": "docs/ — 給人類看的參考文件" },
  content: {
    en: "Long-form documentation meant to be read, not instructions meant to be followed.\n**Who reads it:** Mainly you (the human). Claude only looks here occasionally, when it needs to.\n**Purpose:** Store design documents, system explanations, and the full unabridged version of something like an investment philosophy — long-form material that's convenient to read.\n**How to use:** You come here to refresh your memory on a system design. Claude doesn't auto-read this folder unless explicitly told to (\"refer to docs/xx.md\").\n**Difference from rules/:** Same topic, two different jobs —\n`rules/investment-philosophy.md` → condensed, instruction-style, Claude follows automatically\n`docs/investment-philosophy.md` → full version, with explanations and examples, for you to read\n**Metaphor:** A company knowledge base. You consult it when you need it; it's not required daily reading.\n**In the stock project:** The investment philosophy lives in two places — the condensed \"rule\" version Claude follows automatically, and the full 230-line version with book citations from Howard Marks, Peter Lynch, Benjamin Graham, and five others.",
    "zh-TW":
      "儲存設計文件、系統說明等長篇說明，是「方便閱讀的內容」，不是 AI 的指令。\n**給誰看：** 主要給你（人類）看，偶爾 AI 需要時也會查。\n**目的：** 儲存設計文件、系統說明、投資哲學完整版——寫來被閱讀的長篇說明，不是要被遵循的指令。\n**怎麼用：** 你想複習某個系統設計時來翻。AI 預設不會自動讀這裡，除非你明確說「參考 docs/xx.md」。\n**跟 rules/ 的差別：** 同一個主題，兩種不同的工作——\n`rules/investment-philosophy.md` → AI 工作時的「守則版」，精簡、指令式\n`docs/investment-philosophy.md` → 你閱讀用的「完整版」，有說明、有例子\n**比喻：** 公司的知識庫，需要的時候去查，不是每天必讀的。\n**美股專案怎麼用：** 投資哲學住在兩個地方——精簡的規則版 Claude 自動遵守，完整的 230 行版本有 Howard Marks、Peter Lynch、Benjamin Graham 等八本經典的引述，是給人讀的。",
  },
};

export const DOCS_CODE: CodeBlock = {
  codeType: "text",
  code: `rules/investment-philosophy.md  ← AI's "work rules" version — condensed, instruction-style
  → "Use earnings as the core metric, only buy when P/E < reasonable range"

docs/investment-philosophy.md   ← Your "full version" — with explanations and examples
  → "Peter Lynch argues... Benjamin Graham insists...
     Distilled from 8 classics: The Most Important Thing, The Psychology of Money,
     Zero to One, One Up on Wall Street..."`,
};

// ─── 07 Agents ───

export const AGENTS_SECTION: BodySection = {
  title: { en: ".claude/agents/ — A Team of Specialists", "zh-TW": ".claude/agents/ — 連接 MCP Server，讓 Agent 有能力做事" },
  content: {
    en: "Custom sub-agents that specialize in distinct parts of the project. Often wired to an MCP server, which gives them the ability to act on the outside world instead of just reading and editing files.\n**Who reads it:** Claude reads agent definitions to decide when and how to delegate.\n**Purpose:** Turn Claude from a single generalist into a team of specialists, each with its own expertise, dependency rules, and code patterns.\n**How to use:** Three ways to trigger a sub-agent:\n• **Automatic** — Claude reads the agent's `description` and decides on its own that the current task matches.\n• **Direct mention** — naming it in conversation, e.g. \"use `analyzer-agent` for this.\"\n• **@-mention** — typing `@\"analyzer-agent (agent)\"` to hand off immediately.\n**In the stock project:** Five agents — ScraperAgent for data collection across six APIs, AnalyzerAgent for investment analysis with Claude API, FrontendAgent for React component quality, MergeAgent for branch integration, and MemoryAgent for knowledge persistence.",
    "zh-TW":
      "定義專屬的 AI 子代理，值得花心力打造的那些通常會連接一個 MCP Server，讓它們有能力對外部世界真正做事，而不只是讀寫檔案。\n**給誰看：** Claude 讀取 Agent 定義，決定什麼時候該委派以及怎麼委派。\n**目的：** 讓 Claude 從一個通才變成一個專家團隊，每個 Agent 有自己的專長、自己依賴的規則檔、自己的程式碼模式。\n**怎麼用：** 子代理常見有三種觸發方式：\n• 自動觸發 — Claude 根據 `description` 的描述，自己判斷什麼時候該交給這個 Agent。\n• 直接指定 — 在對話中說「請用 `analyzer-agent` 處理這個」。\n• @ 提及 — 手動輸入 `@\"analyzer-agent (agent)\"` 直接交辦。\n**美股專案怎麼用：** 五個 Agent——ScraperAgent 負責跨六個 API 的資料收集、AnalyzerAgent 負責用 Claude API 做投資分析、FrontendAgent 負責 React 組件品質、MergeAgent 負責分支整合、MemoryAgent 負責知識持久化。",
  },
};

export const AGENTS_CODE: CodeBlock = {
  codeType: "markdown",
  code: `# Analyzer Agent (AI Analysis Expert)

## Role & Responsibilities
AI analysis and investment decision expert. Uses Claude API for stock analysis,
generates investment recommendations, writes news summaries, calculates composite scores.

## Expertise
- Investment analysis — analyze individual stocks using the investment philosophy framework
- AI prompt engineering — design high-quality system prompts, inject financial metrics
- Parallel API calls — analyze multiple stocks concurrently, optimize token usage
- Scoring system — calculate Technical 35% + Fundamental 45% + Sentiment 20%

## Required Rules
Must read:
- @.claude/rules/investment-philosophy.md — Stock-picking philosophy
- @.claude/rules/scoring-reference.md — Scoring system weights
- @.claude/rules/code-style.md — Code organization`,
};

export const AGENTS_COMPARE_SECTION: BodySection = {
  title: { en: "Traditional Dev vs. Agent", "zh-TW": "傳統開發 vs Agent" },
  content: {
    en: "The cleanest way to feel the difference is comparing who decides the logic, and what happens when something unexpected shows up.",
    "zh-TW":
      "感受這個差異最直接的方式，是比較邏輯由誰決定，以及遇到沒想到的情況時會發生什麼事。",
  },
};

export const AGENTS_COMPARE_CODE: CodeBlock = {
  codeType: "text",
  code: `                Traditional Dev            Agent
──────────────────────────────────────────────────
Who decides     Engineer writes rules       AI decides at runtime
New situation   Follows existing logic       Decides how to handle it
                (may break)
Flow            Fixed                       Dynamic
Maintenance     Change code                 Change prompt or goal`,
};

export const AGENTS_EXAMPLE_SECTION: BodySection = {
  title: { en: "The Same Feature, Two Ways", "zh-TW": "用專案當例子" },
  content: {
    en: "Take the stock-monitoring project. The traditional way means enumerating every rule in advance — every case the engineer didn't think of is a case that breaks or gets silently skipped. The agent way replaces the rule list with a goal, and lets the AnalyzerAgent decide what \"important\" means based on the investment philosophy rules.\nIn practice, the project actually runs both: fixed schedules still fire the traditional way, and only the part that needs real semantic judgment — is this particular news item actually important? — gets handed to the agent.",
    "zh-TW":
      "傳統開發的寫法：每一種情況都要工程師事先想到、寫進去。沒想到的情況就會出錯或漏掉。\nAgent 的寫法：Agent 自己決定什麼叫「重要變化」、什麼時候該發、發什麼內容。\n美股專案其實是混合使用的：固定排程用傳統方式觸發，判斷「這則新聞重不重要」這種需要理解語意的部分交給 Agent。",
  },
};

export const AGENTS_EXAMPLE_CODE: CodeBlock = {
  codeType: "text",
  code: `# Traditional dev: rules must be enumerated upfront
if price_change > 5%            → send Telegram alert
if market_close_time            → send daily report
if new_article                  → summarize and send
if RSI > 70                     → flag overbought
if P/E > 2x industry average    → flag overvalued
...every new case = another if

# Agent: give the goal, let AI decide details using the investment philosophy
Goal: monitor these stocks, following the framework in investment-philosophy.md,
      and notify me via Telegram whenever something important changes`,
};

// ─── 08 Settings ───

export const SETTINGS_SECTION: BodySection = {
  title: { en: "settings.json — Permissions and Behavior", "zh-TW": "settings.json — 專案權限與行為設定" },
  content: {
    en: "The config file controlling what Claude can and can't do.\n**Who reads it:** The Claude Code system — it enforces permissions and triggers hooks.\n**Purpose:** Control Claude's allowed actions, restrict dangerous commands, set environment variables, adjust UI theme, and wire up hooks.\n**How to use:** Edit the JSON file. You can limit Claude from running destructive commands, configure which rules to load, and set up automatic checks.\n**Three locations (matters for teams):**\n`~/.claude/settings.json` → your personal settings for all projects\n`.claude/settings.json` → this project (can be committed to git for sharing)\n`.claude/settings.local.json` → this project, local only (not committed)\n**In the stock project:** Allow safe read-only commands and build tools by default, enforce a strict Git workflow (never auto-commit, always show diff first), and use `rules_loading` to tell Claude which rules to load eagerly vs. defer.",
    "zh-TW":
      "Claude Code 的設定檔，控制 Claude 可以做什麼、不可以做什麼。\n**給誰看：** Claude Code 系統——它根據這個檔案執行權限控制和觸發 hooks。\n**目的：** 控制 Claude 被允許的操作、限制危險指令、設定環境變數、調整 UI 主題、掛載 hooks。\n**怎麼用：** 編輯 JSON 檔案。你可以限制 Claude 不能執行某些危險指令，設定哪些規則要載入，以及設定自動化檢查。\n**三個位置（對團隊很重要）：**\n`~/.claude/settings.json` → 你個人的所有專案\n`.claude/settings.json` → 當前資料夾的專案（可提交到 git 共享）\n`.claude/settings.local.json` → 當前資料夾的專案（本機私用，不提交）\n**美股專案怎麼用：** 預設允許安全的唯讀指令和建置工具，強制嚴格的 Git 工作流（永遠不自動提交、一定先展示 diff），並用 `rules_loading` 告訴 Claude 哪些規則要提前載入、哪些延後載入。",
  },
};

export const SETTINGS_CODE: CodeBlock = {
  codeType: "json",
  code: `// .claude/settings.local.json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run type-check)",
      "Bash(npm run build)",
      "Bash(npm run test:*)",
      "Bash(python -m pytest)",
      "Bash(git status)",
      "Bash(git diff)"
    ]
  },
  "rules_loading": {
    "strategy": "selective",
    "always_load": ["agent-guidelines.md", "code-style.md"],
    "conditional": {
      "frontend/": "frontend-architecture.md",
      "backend/": "api-conventions.md",
      "stock_analysis": ["investment-philosophy.md", "scoring-reference.md"]
    }
  }
}`,
};

export const SETTINGS_LOCATIONS_CODE: CodeBlock = {
  codeType: "text",
  code: `Location                          Scope
────────────────────────────────────────────────────
~/.claude/settings.json           Your personal settings for all projects
.claude/settings.json             This project (committable, shareable via git)
.claude/settings.local.json       This project, local only (not committed)`,
};

// ─── Summary ───

export const SUMMARY_SECTION: BodySection = {
  title: { en: "One Diagram to Sum It Up", "zh-TW": "一張圖總結" },
  content: {
    en: "Group everything by how often you actually have to think about it, and the whole folder collapses into three zones: what you interact with daily, what runs automatically in the background, and what you only check when you need it.\nThe single most useful thing to remember: anything in `rules/` doesn't need a daily reminder — it just works. That's exactly why the investment philosophy, the code-style guide, and the frontend architecture rules belong there — you stop saying \"remember to follow X\" forever.",
    "zh-TW":
      "把所有東西按「你實際需要想到它的頻率」分組，整個資料夾就會收斂成三個區域：你每天會互動的、AI 自動在背景運作的、以及你需要時才會去查的。\n最關鍵的觀念是：rules/ 裡的東西你不需要每次提醒 AI，它自動生效。這就是為什麼要把投資哲學、代碼規範放進去——省掉你每次都要說「記得按照 X 原則做」的麻煩。",
  },
};

export const SUMMARY_CODE: CodeBlock = {
  codeType: "text",
  code: `You interact with daily ↓
┌──────────────────────────────────────────────────┐
│  CLAUDE.md              ← Shared map for you & AI │
│  .claude/skills/        ← /project:analyze-stock   │
│  .claude/commands/      ← /project:review-day      │
└──────────────────────────────────────────────────┘

AI runs automatically ↓
┌────────────────────────────────────────────────────────┐
│  .claude/rules/         ← Investment philosophy, code   │
│                            style (you don't manage it)  │
│  .claude/agents/        ← Five specialists, each with   │
│                            their own job                │
│  settings.local.json    ← Permissions + hooks           │
└────────────────────────────────────────────────────────┘

You check when needed ↓
┌──────────────────────────────────────────────┐
│  docs/                  ← Full investment philosophy  │
│  _manifest.md           ← Loading strategy (tweak     │
│                            occasionally)              │
└──────────────────────────────────────────────┘`,
};

// ─── Bonus: MCP ───

export const MCP_SECTION: BodySection = {
  title: { en: "MCP — A Standard Way for AI to Call Services", "zh-TW": "MCP (Model Context Protocol)" },
  content: {
    en: "A standard format that wraps a service so any AI can use it directly.\n**The shift:** A traditional API is called by an engineer writing code against a specific endpoint, with specific parameters and auth. An MCP server is called by an AI in plain language — no client library, no endpoint to memorize.\n**In the stock project:** Imagine wiring up market data and Telegram as MCP servers — the AnalyzerAgent could call `mcp__market-data__get_quote` and `mcp__telegram__send_message` the same way it calls `Read` or `Edit`. No integration code, just a tool name and natural language.",
    "zh-TW":
      "把某個服務包裝成標準格式，讓別人的 AI 可以使用。\n**帶來的轉變：** 傳統 API 是工程師針對特定 endpoint、特定參數和認證方式寫程式碼去呼叫；MCP 伺服器則是 AI 用自然語言呼叫，不需要 client library，也不用記住任何 endpoint。\n**美股專案怎麼用：** 想像把市場資料和 Telegram 接成 MCP 伺服器——AnalyzerAgent 可以像呼叫 `Read` 或 `Edit` 一樣呼叫 `mcp__market-data__get_quote` 和 `mcp__telegram__send_message`——不需要整合程式碼，只要工具名稱加上自然語言。",
  },
};

export const MCP_CODE: CodeBlock = {
  codeType: "text",
  code: `                Traditional API            MCP
──────────────────────────────────────────────────
Called by       Engineer writing code       AI using natural language
User            Human developer             AI Agent
Format          REST, GraphQL, etc.         Unified MCP format
Requires        Endpoints, params, auth     Just describe what you want`,
};
