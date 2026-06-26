import type { Demo, BodySection, CodeBlock } from "@/data/demos";

export const CLAUDEFOLDERARTICLE: Demo = {
  date: "2026-06-27",
  title: {
    en: "Inside the .claude Folder",
    "zh-TW": "了解 .claude 資料夾",
  },
  description: {
    en: "Understanding the .claude folder structure — how agents, rules, commands, hooks, and skills shape Claude Code's behavior per-project.",
    "zh-TW":
      "認識 .claude 資料夾結構——agents、rules、commands、hooks、skills 如何讓 Claude Code 在每個專案中擁有量身打造的行為。",
  },
  type: "article",
  tags: ["Claude Code", "AI", "DX"],
  url: "/demos/claude-folder-guide",
  introduction: {
    outline: {
      en: "A walkthrough of the .claude configuration folder — how agents, rules, commands, hooks, and skills wire together to shape Claude Code's behavior per-project.",
      "zh-TW":
        "介紹 .claude 設定資料夾——agents、rules、commands、hooks、skills 如何搭配運作，讓 Claude Code 在每個專案中擁有量身打造的行為。",
    },
    emphasis: [
      {
        en: "Folder Structure — six subdirectories, each with a clear responsibility: agents, commands, hooks, rules, skills, and a settings.json at the root.",
        "zh-TW":
          "資料夾結構 — 六個子目錄各司其職：agents、commands、hooks、rules、skills，加上根目錄的 settings.json。",
      },
      {
        en: "Per-Project Behavior — CLAUDE.md and .claude/ together give each repo its own personality, scoping AI responses and automating workflows without global config pollution.",
        "zh-TW":
          "專案級行為 — CLAUDE.md 與 .claude/ 一起讓每個 repo 擁有獨立的個性，限定 AI 回覆範圍並自動化工作流程，不會污染全域設定。",
      },
    ],

    refs: [
      {
        label: "Claude Code — Project Configuration",
        url: "https://docs.anthropic.com/en/docs/claude-code/settings",
      },
      {
        label: "Claude Code — Custom Slash Commands",
        url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands",
      },
    ],
  },
  nextArticle: {
    title: {
      en: "Inside the .claude Folder",
      "zh-TW": "了解 .claude 資料夾",
    },
    url: "/demos/claude-folder-guide",
  }
};

export const CLAUDEFOLDERARTICLE_DATA: Demo[] = [CLAUDEFOLDERARTICLE];

export const MOTIVATION_SECTION:BodySection={
  title: {en: "MOTIVATION", "zh-TW": "MOTIVATION"},
  content: {
    en: "When I started building this portfolio site, I realized the .claude folder was doing more heavy lifting than any single component — it's what turns a generic AI assistant into a project-aware collaborator. This article is a note-to-self and a reference for anyone curious about the setup.",
    "zh-TW":
      "在做這個作品集網站時，我發現 .claude 資料夾做的事比任何一個元件都多——它把一個通用的 AI 助手變成了一個懂專案脈絡的協作者。這篇文章既是寫給自己的筆記，也給有興趣了解這套設定的人當參考。",
  },
}

export const FOLDER_STRUCTURE_SECTION: BodySection = {
  title: { en: "The .claude Folder at a Glance", "zh-TW": ".claude 資料夾一覽" },
  content: {
    en: "Every Claude Code project can have a `.claude/` directory at its root. Think of it as a per-repo configuration layer — it tells Claude who it should be, what it's allowed to do, and what shortcuts are available, all scoped to this one project.\nThe folder sits alongside `CLAUDE.md` (project-level instructions that Claude reads on every conversation start) and together they define the AI's behavior without touching any global config.",
    "zh-TW":
      "每個 Claude Code 專案都可以在根目錄放一個 `.claude/` 資料夾。你可以把它想成一層專案級設定——告訴 Claude 它應該扮演什麼角色、被允許做什麼事、有哪些快捷指令可用，而且全部只作用在這個專案裡。\n這個資料夾跟 `CLAUDE.md`（專案級指示，Claude 每次開始對話都會讀取）搭配使用，一起定義 AI 的行為，完全不需要動到全域設定。",
  },
};

export const FOLDER_STRUCTURE_CODE_SECTION: CodeBlock = {
  codeType: "text",
  code: `.claude/
├── agents/           # AI sub-agents with dedicated knowledge
│   ├── portfolio-assistant.md
│   └── yiyun-knowledge.md
├── commands/         # Custom slash commands (quick recipes)
│   └── dev.md
├── hooks/            # Shell scripts triggered by events
│   └── .gitkeep
├── rules/            # Topic-specific behavior constraints
│   └── ai-scope.md
├── skills/           # Reusable multi-step work scripts
│   └── .gitkeep
└── settings.json     # Permissions and environment config`,
};

export const EACH_FOLDER_SECTION: BodySection = {
  title: { en: "What Each Folder Does", "zh-TW": "各資料夾的用途" },
  content: {
    en: "`agents/` — sub-agent definitions. In this portfolio, `portfolio-assistant.md` defines the personality and response rules for the embedded AI chatbot, while `yiyun-knowledge.md` holds every fact it's allowed to cite. The agent can only answer what's documented here.\n`commands/` — custom slash commands. A command file is just a markdown description; typing `/dev` in Claude Code runs whatever recipe the file describes. Lightweight and version-controlled.\n`rules/` — behavioral constraints. `ai-scope.md` in this project restricts the chatbot to Yiyun-related topics only and defines the playful deflection patterns for off-topic questions.\n`hooks/` — shell commands triggered by Claude Code events (e.g., after a tool call). Currently unused in this project, but useful for auto-formatting, linting, or notifications.\n`skills/` — reusable multi-step work scripts that Claude can invoke.\n`settings.json` — permissions (which tools Claude can use without asking) and environment variables scoped to this project.",
    "zh-TW":
      "`agents/` — 子代理定義。在這個作品集裡，`portfolio-assistant.md` 定義了嵌入式 AI 聊天機器人的個性和回覆規則，`yiyun-knowledge.md` 則存放它被允許引用的所有事實。代理只能回答這裡有記錄的內容。\n`commands/` — 自訂斜線指令。指令檔就是一份 markdown 描述；在 Claude Code 裡輸入 `/dev` 就會執行檔案描述的流程。輕量且受版本控制。\n`rules/` — 行為約束。這個專案裡的 `ai-scope.md` 限制聊天機器人只能回答與宜昀相關的主題，並定義了離題時的趣味轉移回覆模式。\n`hooks/` — 由 Claude Code 事件觸發的 shell 指令（例如工具呼叫完成後）。目前在這個專案中未使用，但適合用來做自動格式化、lint 檢查或通知。\n`skills/` — 可重複使用的多步驟工作腳本，Claude 可以直接呼叫。\n`settings.json` — 權限設定（哪些工具 Claude 可以不用詢問就使用）和僅限此專案的環境變數。",
  },
};

export const SETTINGS_CODE_SECTION: CodeBlock = {
  codeType: "json",
  code: `// .claude/settings.json
{
  "permissions": {
    "allow": [
      "Read",
      "Write",
      "Edit",
      "Glob",
      "Grep",
      "Bash(ls *)",
      "Bash(cat *)",
      "Bash(npm run *)",
      "Bash(npx *)"
    ],
    "deny": []
  },
  "env": {}
}`,
};
