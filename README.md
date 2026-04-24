# Yi-Yun Liao -- Portfolio

**Live:** [liaoyiyun.vercel.app](https://liaoyiyun.vercel.app)

## Problem

Portfolio sites are static PDFs dressed up as websites -- they list skills but don't demonstrate them. Interviewers skim for 30 seconds and leave. There's no way to ask follow-up questions or gauge how someone actually thinks.

## Solution

A single-page portfolio with an embedded AI agent. Visitors can ask freeform questions about my background, projects, and tech decisions -- the agent answers from a curated knowledge base scoped exclusively to me. The site itself is the proof of work: responsive design, TypeScript, real-time API integration, and deployment infrastructure, all in a lightweight static build.

## About Liao Yiyun

Yi-Yun Liao is a frontend engineer with a product design background.

- Industrial Design, NTUST (2015-2019)
- 3 years as UI/UX designer at AmazingTalker -- led cart checkout redesign (+14% purchase conversion), established company-wide design system
- Full-stack bootcamp at WeHelp (2025) -- React, Next.js, FastAPI, PostgreSQL, AWS
- Frontend engineer at AmazingTalker VCaaS (2025-2026) -- React, TypeScript, MobX, WebRTC, Electron, NX monorepo. 65+ merged PRs in 8 months
- Side projects: Track Stock (AI-assisted equities monitor), Daily Assistant (Telegram + iCloud calendar AI planning)

## How It Works

```
Browser (React SPA)
  |
  |-- Static sections: Hero, Experience, Projects, About, Footer
  |     rendered client-side, data from TypeScript modules
  |
  |-- "Ask Yi-Yun" floating chat widget
        |
        POST /api/chat  { messages[] }
        |
        Vercel Serverless Function (api/chat.ts)
        |
        |-- Rate limiter (10 req/min per IP, in-memory)
        |-- Loads system prompt from:
        |     .claude/agents/portfolio-assistant.md  (personality + rules)
        |     .claude/agents/yiyun-knowledge.md      (factual content)
        |     .claude/rules/ai-scope.md              (topic guardrails)
        |-- Anthropic API  -->  Claude (max 300 tokens)
        |
        { reply }  -->  Chat UI
```

The AI agent is topic-locked: it only answers questions about Yiyun. Off-topic questions trigger playful deflections that redirect visitors to LinkedIn. Every response ends with a signature line; every 3rd response adds an engagement nudge.

## Key Design Decisions

**Static SPA over SSR/SSG framework**
A portfolio site has no dynamic routes, no SEO-critical content beyond the landing page, and no data that changes between requests. Vite + React produces a fast, cacheable static bundle. Adding Next.js or Remix would mean framework overhead (server runtime, routing conventions, hydration complexity) for zero measurable benefit. Trade-off: no server-side rendering for social previews -- acceptable since the primary audience arrives via direct link.

**AI agent scoped by system prompt, not fine-tuning**
The knowledge base is a single Markdown file loaded at cold start. Updating content means editing text, not retraining a model or managing embeddings. The scope boundary (allowed/disallowed topics) is enforced through prompt rules with randomized deflection responses. Trade-off: prompt-based scoping is softer than a fine-tuned classifier -- a determined user could push boundaries. Mitigated by keeping max_tokens low (300) and rate-limiting to 10 requests per minute.

**Serverless API route over client-side SDK**
The Anthropic API key stays on the server. A client-side integration would expose the key in browser network requests, even with obfuscation. The Vercel serverless function adds ~100ms cold-start latency but keeps credentials out of the bundle entirely. Trade-off: no streaming responses (the function returns the full reply), which means slightly longer perceived wait times.

**Tailwind CSS v4 over CSS Modules or styled-components**
Utility classes colocated with JSX eliminate context-switching between style files and component logic. Tailwind v4's `@theme` tokens provide design consistency without a separate token pipeline. Trade-off: long className strings reduce JSX readability -- mitigated by keeping components small and single-purpose.

**In-memory rate limiter over Redis/external store**
For a portfolio site with low traffic, a per-instance Map is sufficient. It resets on cold start, which is acceptable -- the goal is preventing runaway API costs, not enforcing strict quotas. Trade-off: in a multi-instance deployment, limits aren't shared across instances. At this traffic scale, that's a non-issue.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Vite + React 18 + TypeScript |
| Styling | Tailwind CSS v4 with custom `@theme` tokens |
| AI | Anthropic Claude API (via serverless proxy) |
| Hosting | Vercel (static + serverless functions) |
| Linting | ESLint + typescript-eslint |

## Project Structure

```
.
├── api/
│   ├── chat.ts              # Serverless function -- Claude API proxy with rate limiting
│   └── dev-server.ts        # Local dev server for API route
├── src/
│   ├── components/          # Reusable UI: Button, Card, Modal, Icon, Pill, NavLink
│   ├── data/
│   │   ├── constants.ts     # Site-wide links and paths
│   │   ├── experience.ts    # Work history data
│   │   └── projects.ts      # Project data with types
│   ├── sections/            # Page sections: Hero, Ticker, About, Experience,
│   │   │                    #   Projects, AskYiYun, Footer, Nav
│   │   └── AskYiYun.tsx     # Chat widget -- manages conversation state, calls /api/chat
│   ├── styles/base.css      # Tailwind theme tokens and global styles
│   └── main.tsx             # Entry point
├── .claude/
│   ├── agents/
│   │   ├── portfolio-assistant.md   # Agent personality and response rules
│   │   └── yiyun-knowledge.md       # Knowledge base (single source of truth)
│   └── rules/ai-scope.md           # Topic allow/deny lists
├── index.html
├── vite.config.js
├── vercel.json              # Output dir + rewrite rules
├── tsconfig.json
└── package.json
```

## Setup

```bash
git clone <repo-url>
cd LIAO_YIYUN
npm install
```

Create a `.env` file for the AI chat feature:

```
ANTHROPIC_API_KEY=your_key_here
```

Start the dev server:

```bash
npm run dev
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (proxy API to localhost:3001) |
| `npm run build` | TypeScript check + production build |
| `npm run typecheck` | TypeScript type-check only |
| `npm run preview` | Preview production build locally |
