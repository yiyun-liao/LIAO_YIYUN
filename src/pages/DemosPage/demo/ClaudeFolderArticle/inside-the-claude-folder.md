# Inside the .claude Folder

*A full tour of .claude/ and CLAUDE.md — who reads each piece, when it loads, and how agents, rules, commands, hooks, skills, and MCP servers turn a generic AI into a project-aware teammate.*

---

This is a personal learning journal — some passages may be excerpted from other articles. If I've used a snippet without proper attribution, please DM me and I'll add the source as soon as possible. The AI stock monitoring system was built mainly as a vibe-coding exercise, so there are no real realized P&L numbers to show for it yet — the focus here is entirely on the .claude architecture.


A walkthrough of Claude Code's project configuration layer, organized around one question for each piece: who is it written for, and when does Claude actually read it? Illustrated with a real side project — an AI-powered US stock monitoring system — to show how each configuration piece plays out in practice.

---

## The .claude Folder at a Glance

Every Claude Code project can have a `.claude/` directory at its root, plus a `CLAUDE.md` file one level up. The two together form a per-repo configuration layer — but they're not interchangeable, and neither are the folders inside `.claude/`.

```
.claude/
├── agents/               # Custom AI sub-agents
├── commands/             # Custom slash commands
├── hooks/                # Automation workflow triggers
├── rules/                # Topic-specific behavior rules
├── skills/               # Reusable advanced workflow scripts
└── settings.json         # Permissions and global settings

CLAUDE.md                 # Project readme and dev conventions
docs/                     # Reference docs for humans (Claude doesn't auto-read)
```

Here's the actual layout from the stock monitoring project:

```
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
docs/
```

---

## 01 — CLAUDE.md — First Impressions

The project-level readme that Claude reads before anything else. Use `@path/to/file` to import other docs when needed.

**Who reads it:** AI + humans. Claude auto-reads it the moment a new session opens on this repo — you never ask it to.

**Purpose:** Let AI orient in 3 seconds — what is this project, where does it stand, what's next.

**How to use:** Keep it short. Only put "project overview + current status + next steps" here. Detailed rules go in `rules/` instead.

**Metaphor:** A company's one-page intro — not the employee handbook.

**In the stock project:** The `CLAUDE.md` lists the tech stack (FastAPI + Next.js + Claude API + Telegram), then uses `@path` references to point to each rule file — a table of contents for Claude to follow on demand, not a wall of text.

```markdown
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

See @.claude/rules/_manifest.md for the full loading strategy (~67% context savings)
```

---

## 02 — .claude/rules/ — AI's Work Rules (Auto-Effective)

Topic-specific behavior rules that fire automatically whenever Claude works in this repo.

**Who reads it:** AI only — nothing here is for humans on day one.

**Purpose:** Stop repeating yourself. Every rule applies automatically in the background, every session.

**How to use:** You don't do anything. Claude follows these rules whenever it works in this repo. Rules without a `paths` frontmatter load eagerly at session start (same as `CLAUDE.md`). Rules with a `paths` frontmatter load lazily — only when Claude touches a file matching that pattern.

**CLAUDE.md vs rules/:** For small projects, `CLAUDE.md` alone is enough. But as a project grows and accumulates domain-specific rules, splitting them into `rules/` keeps things maintainable. `CLAUDE.md` holds what the whole project should always know; `rules/` holds what only matters for a specific file or domain.

**Metaphor:** The employee handbook — the employee (Claude) follows it at work, without a manager repeating it every day.

**In the stock project:** Drop `investment-philosophy.md` in once — a 230-line knowledge base distilled from eight investment classics — and Claude applies that framework every time it analyzes a stock. You never have to say "remember to follow the investment philosophy" again.

```markdown
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
3. Competitive position: does the company have a hard-to-replicate advantage in its industry?
```

### Six Rules, Each with Its Own Trigger

To make "auto-effective" concrete, here are six rule files from the stock project, each scoped to exactly the situation it should fire in. None of these need to be invoked; Claude just behaves differently depending on what it's currently touching.

The project also maintains a `_manifest.md` that explicitly tracks which rules load when — two rules load every time (264 lines), the other four only load conditionally. Instead of burning 1,157 lines every conversation, a typical task loads only ~487 lines. Average savings: 67%.

```
File                          When it auto-fires
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
Average             ~487            ⬇️ 67%
```

---

## 03 — .claude/commands/ — Reusable Workflows

Custom slash commands that turn repetitive tasks into one-liners.

**Who reads it:** You (the human) trigger them, Claude executes.

**Purpose:** Turn a repetitive task you'd otherwise re-explain every time into one line typed in the chat box.

**How to use:** Type the slash command in the chat. Claude follows whatever steps that markdown file describes — you never re-explain the process.

**Metaphor:** A company SOP manual. The new hire (Claude) follows the SOP; you don't walk them through it every time.

**In the stock project:** The project doesn't have a `.claude/commands/` directory — it uses `.claude/skills/` instead (the officially recommended modern pattern). Skills offer the same slash-command experience but with smarter loading: Claude only reads a skill when the task is relevant, saving tokens. Commands are still the right choice for lightweight, quick-to-write workflows that don't need conditional loading.

```
/project:review-day           ← Summarize today's work (auto-reads git log)
/project:analyze-stock AAPL   ← Analyze AAPL using the investment philosophy framework
/project:debug-api            ← Six-step API diagnosis (connection, cache, rate limits)
/project:pre-merge            ← Pre-merge quality check (types, lint, tests, build)
```

---

## 04 — .claude/skills/ — Loaded Only When Relevant

Reusable advanced workflow scripts — like commands, but smarter about when they load.

**Who reads it:** Claude reads them automatically when relevant work comes up.

**Purpose:** Define callable workflows that Claude Code loads only when needed, and skips entirely — zero token cost — when the work doesn't match.

**How to use:** Each Skill is a folder with `SKILL.md` as the main config, plus optional templates and examples alongside it. Claude Code automatically reads the relevant content when the work actually calls for it. This is the officially recommended modern pattern.

**In the stock project:** `analyze-stock` is a Skill that defines the full output format (composite score, three-dimension breakdown, earnings analysis, valuation assessment), the data sources to pull from, and how different stock types (growth, value, cyclical) should shift the analysis emphasis.

```
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
  Cyclical (XLE)        Economic indicators, supply-demand balance
```

### Four Skills, Each with Its Own Job

The stock project has four skills, each covering a distinct workflow. Like rules, none of these need to be manually loaded — Claude reads the relevant skill only when the task matches.

```
Skill                    Invocation                          Purpose
──────────────────────────────────────────────────────────────────────────
review-day.md            /project:review-day                 Summarize the day's dev work (auto-reads git log)
analyze-stock.md         /project:analyze-stock AAPL         Analyze a stock using the investment philosophy
debug-api.md             /project:debug-api                  Six-step API diagnosis (connection, cache, rate limits)
pre-merge.md             /project:pre-merge                  Pre-merge quality check (types, lint, tests, build)
```

### CLAUDE.md vs. Skill

`CLAUDE.md` always applies and covers project-wide background; a Skill only gets consulted for the one task it describes.

```
                CLAUDE.md                          Skill
───────────────────────────────────────────────────────────────────────────────
Purpose         Tell Claude the project's background    Tell Claude how to execute a specific task
Scope           Global, always active                   Task-oriented, consulted on demand
Content         Architecture, conventions, tech choices Steps, instructions, output format
```

### Command vs. Skill

A Command is a lightweight `.md` prompt that only works in this repo. A Skill packages as a `.skill` bundle that can carry actual code and be installed into any environment.

```
                Command                    Skill
─────────────────────────────────────────────────────────
Format          .md file                    .skill bundle
Executor        Claude interprets & acts    Claude interprets + bundled scripts
Portability     This repo only              Installable anywhere
Complexity      Lightweight prompt          Heavyweight, with code
```

---

## 05 — .claude/hooks/ — Automating the Workflow

Scripts that fire automatically when specific events happen — no manual reminding needed.

**Who reads it:** The system runs these; neither you nor Claude trigger them by hand.

**Purpose:** Automate checks and actions around Claude's workflow. For example, run lint and format right before a commit, or do an extra check before a risky command.

**How to use:** Write the actual logic in a `.sh` file, then wire it up in `.claude/settings.json`. Keeping logic in a script (not inlined in JSON) makes it easy to edit and test independently.

**In the stock project:** The project doesn't have a separate `.claude/hooks/` directory — the hook logic is simple enough (`npm run lint && npm run type-check` before commit) that it's defined inline in `settings.local.json`. For more complex checks involving multiple steps or conditional logic, splitting into `.sh` files becomes worthwhile.

The event types that come up most:

```
Event              When it fires
─────────────────────────────────
PreToolUse         Before Claude executes a tool
PostToolUse        After Claude executes a tool
SubagentStart      When Claude launches a sub-agent
SubagentStop       When a sub-agent finishes
Stop               When Claude finishes a response
SessionStart       When a conversation begins
Notification       When Claude needs your input
FileChanged        When a watched file changes
// ref: https://www.thisweb.dev/articles/claude-code-structure
```

Wiring it up in settings:

```json
// .claude/settings.local.json
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
}
```

---

## 06 — docs/ — Reference Material for Humans

Long-form documentation meant to be read, not instructions meant to be followed.

**Who reads it:** Mainly you (the human). Claude only looks here occasionally, when it needs to.

**Purpose:** Store design documents, system explanations, and the full unabridged version of something like an investment philosophy — long-form material that's convenient to read.

**How to use:** You come here to refresh your memory on a system design. Claude doesn't auto-read this folder unless explicitly told to ("refer to docs/xx.md").

**Difference from rules/:** Same topic, two different jobs —
`rules/investment-philosophy.md` → condensed, instruction-style, Claude follows automatically
`docs/investment-philosophy.md` → full version, with explanations and examples, for you to read

**Metaphor:** A company knowledge base. You consult it when you need it; it's not required daily reading.

**In the stock project:** The investment philosophy lives in two places — the condensed "rule" version Claude follows automatically, and the full 230-line version with book citations from Howard Marks, Peter Lynch, Benjamin Graham, and five others.

```
rules/investment-philosophy.md  ← AI's "work rules" version — condensed, instruction-style
  → "Use earnings as the core metric, only buy when P/E < reasonable range"

docs/investment-philosophy.md   ← Your "full version" — with explanations and examples
  → "Peter Lynch argues... Benjamin Graham insists...
     Distilled from 8 classics: The Most Important Thing, The Psychology of Money,
     Zero to One, One Up on Wall Street..."
```

---

## 07 — .claude/agents/ — A Team of Specialists

Custom sub-agents that specialize in distinct parts of the project. Often wired to an MCP server, which gives them the ability to act on the outside world instead of just reading and editing files.

**Who reads it:** Claude reads agent definitions to decide when and how to delegate.

**Purpose:** Turn Claude from a single generalist into a team of specialists, each with its own expertise, dependency rules, and code patterns.

**How to use:** Three ways to trigger a sub-agent:
- **Automatic** — Claude reads the agent's `description` and decides on its own that the current task matches.
- **Direct mention** — naming it in conversation, e.g. "use `analyzer-agent` for this."
- **@-mention** — typing `@"analyzer-agent (agent)"` to hand off immediately.

**In the stock project:** Five agents — ScraperAgent for data collection across six APIs, AnalyzerAgent for investment analysis with Claude API, FrontendAgent for React component quality, MergeAgent for branch integration, and MemoryAgent for knowledge persistence.

```markdown
# Analyzer Agent (AI Analysis Expert)

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
- @.claude/rules/code-style.md — Code organization
```

### Traditional Dev vs. Agent

The cleanest way to feel the difference is comparing who decides the logic, and what happens when something unexpected shows up.

```
                Traditional Dev            Agent
──────────────────────────────────────────────────
Who decides     Engineer writes rules       AI decides at runtime
New situation   Follows existing logic       Decides how to handle it
                (may break)
Flow            Fixed                       Dynamic
Maintenance     Change code                 Change prompt or goal
```

### The Same Feature, Two Ways

Take the stock-monitoring project. The traditional way means enumerating every rule in advance — every case the engineer didn't think of is a case that breaks or gets silently skipped. The agent way replaces the rule list with a goal, and lets the AnalyzerAgent decide what "important" means based on the investment philosophy rules.

In practice, the project actually runs both: fixed schedules still fire the traditional way, and only the part that needs real semantic judgment — is this particular news item actually important? — gets handed to the agent.

```
# Traditional dev: rules must be enumerated upfront
if price_change > 5%            → send Telegram alert
if market_close_time            → send daily report
if new_article                  → summarize and send
if RSI > 70                     → flag overbought
if P/E > 2x industry average    → flag overvalued
...every new case = another if

# Agent: give the goal, let AI decide details using the investment philosophy
Goal: monitor these stocks, following the framework in investment-philosophy.md,
      and notify me via Telegram whenever something important changes
```

---

## 08 — settings.json — Permissions and Behavior

The config file controlling what Claude can and can't do.

**Who reads it:** The Claude Code system — it enforces permissions and triggers hooks.

**Purpose:** Control Claude's allowed actions, restrict dangerous commands, set environment variables, adjust UI theme, and wire up hooks.

**How to use:** Edit the JSON file. You can limit Claude from running destructive commands, configure which rules to load, and set up automatic checks.

**Three locations (matters for teams):**
- `~/.claude/settings.json` → your personal settings for all projects
- `.claude/settings.json` → this project (can be committed to git for sharing)
- `.claude/settings.local.json` → this project, local only (not committed)

**In the stock project:** Allow safe read-only commands and build tools by default, enforce a strict Git workflow (never auto-commit, always show diff first), and use `rules_loading` to tell Claude which rules to load eagerly vs. defer.

```json
// .claude/settings.local.json
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
}
```

```
Location                          Scope
────────────────────────────────────────────────────
~/.claude/settings.json           Your personal settings for all projects
.claude/settings.json             This project (committable, shareable via git)
.claude/settings.local.json       This project, local only (not committed)
```

---

## One Diagram to Sum It Up

Group everything by how often you actually have to think about it, and the whole folder collapses into three zones: what you interact with daily, what runs automatically in the background, and what you only check when you need it.

The single most useful thing to remember: anything in `rules/` doesn't need a daily reminder — it just works. That's exactly why the investment philosophy, the code-style guide, and the frontend architecture rules belong there — you stop saying "remember to follow X" forever.

```
You interact with daily ↓
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
└──────────────────────────────────────────────┘
```

---

## Bonus — MCP: A Standard Way for AI to Call Services

A standard format that wraps a service so any AI can use it directly.

**The shift:** A traditional API is called by an engineer writing code against a specific endpoint, with specific parameters and auth. An MCP server is called by an AI in plain language — no client library, no endpoint to memorize.

**In the stock project:** Imagine wiring up market data and Telegram as MCP servers — the AnalyzerAgent could call `mcp__market-data__get_quote` and `mcp__telegram__send_message` the same way it calls `Read` or `Edit`. No integration code, just a tool name and natural language.

```
                Traditional API            MCP
──────────────────────────────────────────────────
Called by       Engineer writing code       AI using natural language
User            Human developer             AI Agent
Format          REST, GraphQL, etc.         Unified MCP format
Requires        Endpoints, params, auth     Just describe what you want
```

---

## References

- [Claude Code — Project Configuration](https://docs.anthropic.com/en/docs/claude-code/settings)
- [Claude Code — Custom Slash Commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- [ThisWeb — 一篇文搞懂 agents、commands、hooks 到 rules](https://thisweb.dev/post/claude-code-structure)
