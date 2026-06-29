# Building an Initialize Skill

*How to write a Claude Code skill that scaffolds React projects with vibe coding — asking the right questions before the AI writes a single line.*

---

A walkthrough of building a Claude Code skill that bootstraps React projects — choosing the right tech stack for the project type, then delivering copy-pasteable prompts for environment setup, coding conventions, and per-feature kickoffs.

---

## Notices

Before starting a project, it's worth thinking through the architecture and feature scope on your own first — this helps control what gets generated and improves accuracy (avoiding unnecessary token back-and-forth). The full skill file is at the bottom of this article. The example here uses a Vite + TypeScript + Tailwind CSS React project — readers using different frameworks or stacks can treat this structure as a template and work with their own AI agent to build a version that fits. Also, the skill file itself can be written by the AI agent, which tends to produce fewer formatting errors.

---

## What This Skill Does

Skills are where Claude Code gets genuinely useful for repetitive multi-step workflows. Instead of typing the same series of instructions every time you start a new project, you write a skill once and invoke it with a slash command. A skill file lives in `.claude/commands/` (or `.claude/skills/`). It's a markdown file that describes: what the skill does, what inputs it needs, and the step-by-step instructions Claude should follow. Claude reads it, executes each step, and reports back.

```yaml
---
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
---
```

---

## The Five-Step Sequence

The value of this skill is its sequence — it ensures the important decisions happen before any code gets written.

Step 0 asks what kind of project you're building, because a SaaS dashboard and a landing page need completely different toolchains — clarifying this upfront prevents the AI from over-engineering a personal tool with enterprise-grade state management.

Step 1 is the only step you run yourself: `npm create vite@latest` (or `create-next-app` if SEO matters). TypeScript is strongly recommended here — it acts as a guardrail that lets the AI catch its own mistakes through the type system.

Step 2 hands the AI an environment setup prompt, customized to the stack you picked. The prompt explicitly tells the AI to install one thing at a time, wait for confirmation, and never add packages you didn't list.

Step 3 is the convention prompt — the most important and most skipped step. It gets saved as a file the AI reads on every future conversation. Without it, every session starts from zero.

Step 4 is the per-feature opening prompt: before writing any code, the AI lists what components it needs, maps out the data flow, and estimates which files will change. You confirm, then it builds.

```
Flow:

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
  └─────────────────────────────────────────────┘
```

---

## Step 0 — Project Type → Tech Stack

Not every project needs Zustand, React Query, and a full lint pipeline — but without asking, AI will happily install all of them for a personal tool that only needs `useState` and `localStorage`. That's why the skill starts by categorizing the project before touching any tooling.

Step 0 sorts projects into broad categories and maps each to a suitable stack. The specific libraries matter less than the principle: every dependency should have a reason, decided before the AI starts running `npm install`.

**Data-heavy dashboards** benefit from component libraries with mature table, form, and pagination primitives — Ant Design and Mantine are common choices here. Visualization libraries like Recharts, form validation with React Hook Form + Zod, and a server-state layer like React Query tend to be essential since dashboards are essentially API browsers.

**General-purpose web apps** often pair well with a flexible UI library (shadcn/ui is popular because AI tools know it well and you own the source), Tailwind for styling, and a light state split: Zustand for client state, React Query for server state.

**SEO-sensitive pages** — landing pages, marketing sites, content-driven products — usually call for a framework with SSR built in, like Next.js. Complex client state management is rarely needed.

**Prototypes and personal tools** deserve the lightest setup: `useState` is often enough, team-level tooling like Husky and Commitlint can be skipped, and `localStorage` may replace a backend entirely.

When in doubt, the SaaS combo works as a reasonable default — it covers the most ground without over-engineering.

```
Project Type          UI             Style        State             Router
─────────────────────────────────────────────────────────────────────────────
Admin / Dashboard     Ant Design     Theme sys    Zustand + RQ      React Router
SaaS / Web App        shadcn/ui      Tailwind     Zustand + RQ      React Router
Landing Page          shadcn/ui      Tailwind     useState           Next.js
Personal Tool         daisyUI        Tailwind     useState           optional
E-commerce            shadcn/ui      Tailwind     Zustand + RQ      Next.js
─────────────────────────────────────────────────────────────────────────────
Default (unsure)   →  SaaS combo: Vite + React + TS + Tailwind + shadcn/ui
                      + lucide-react + React Router + Zustand + RQ + RHF + Zod
```

---

## Step 3 — The Convention Prompt

The convention prompt is a file that lives at the root of the project — `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, or just `AGENTS.md` depending on the tool. The AI reads it at the start of every conversation, which means it acts as persistent memory: no matter how many sessions have passed, the AI consistently follows the same patterns — same styling approach, same component library, same rules about what it can and can't install.

Without this file, every conversation starts from zero, and by the fifth feature the codebase looks like five different developers wrote it — because, in a sense, they did.

A good convention prompt typically covers four areas:

**1. Component rules:** function components only, typed props, PascalCase filenames, one main export per file. These sound obvious, but AI will happily default to unnamed default exports and `any` types without explicit guidance.

**2. Style rules:** pick one approach and enforce it. If the project uses Tailwind, say so — no inline styles, no new `.css` files. Colors should use design tokens, not hardcoded hex values. Conditional classes go through a utility like `cn()`. Consistency here prevents the slow drift where half the components follow one pattern and the other half follow whatever the AI invented that session.

**3. State rules:** define a clear hierarchy. `useState` for local state, a client store (like Zustand) only when needed, server state through a dedicated layer (like React Query) and never in the global store. The most common AI mistake is shoving API responses into global state — a rule here blocks it.

**4. Guardrail rules:** explain the plan before coding, list affected files if more than three, never install undiscussed packages, report if anything broke. These aren't about code quality — they're about keeping the human in the loop.

```markdown
# Project Conventions (.cursorrules / CLAUDE.md)

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
- After completing a feature, report whether anything broke
```

---

## Field-Tested Habits

Four habits that tend to determine whether vibe coding stays productive or spirals into a codebase no one — including the AI — can follow anymore.

**1. Small steps, fast commits.** One feature at a time, committed before moving on. When AI is asked to build three features in a single session, it starts making assumptions across all three, and those assumptions compound. One feature, one commit, one clean diff.

**2. Let the AI see everything.** Tools like Cursor, Claude Code, and Windsurf can read the entire project — file tree, imports, existing patterns. Copy-pasting snippets into a chat window strips that context away, and the AI fills the gaps with guesses. Fewer guesses, fewer surprises.

**3. TypeScript strict mode.** Setting `"strict": true` in `tsconfig.json` isn't about being pedantic — it gives the AI a second pair of eyes. When it writes `any` or forgets a null check, the type system flags it before anyone reads the code. Without strict mode, those mistakes compile silently and surface as bugs three features later.

**4. Keep the convention prompt alive.** Every time the AI does something undesirable — installs an undiscussed package, uses inline styles in a Tailwind project, puts state in the wrong layer — add a line to the convention file. The file is a living document, not a one-time setup. Each rule added is one mistake the AI will never repeat.

```
Habit                    Why it matters
────────────────────────────────────────────────────────────
1. One feature per        AI assumptions compound across
   commit                 features — isolate them

2. Full-project AI        Context > copy-paste;
   tools                  fewer guesses = fewer surprises

3. tsconfig strict:       Type system catches AI mistakes
   true                   before you read the code

4. Update convention      Every rule you add = one mistake
   file after each pain   the AI never repeats
```

---

## Interaction Principles

These are the design principles baked into the skill — the meta-layer that shapes how it delivers all the prompts above.

**1. Ask before recommending.** The tech stack isn't a default — the skill asks what type of project is being built, then recommends accordingly. But if the user has already specified "I'm building a SaaS with Mantine," it skips the question and generates prompts for exactly that.

**2. Give copy-pasteable prompts, not descriptions.** "You need to set up ESLint" is useless in a vibe-coding workflow. What's needed is the actual prompt that gets pasted into the AI tool. Every output from this skill is something that can be selected, copied, and pasted directly.

**3. Swap on request.** If someone says "I want Jotai instead of Zustand" or "swap shadcn for Mantine," the skill replaces that one item, keeps everything else, and updates the convention prompt to match. No full teardown.

**4. Handle the "I already have a project" case.** If someone already has a codebase and just wants conventions, the skill skips stages 1 and 2, asks what stack is in place, and jumps straight to the convention prompt.

**5. Don't explain unless asked.** The goal is a fast kickoff, not a tutorial. Package explanations only appear when someone asks "what does this do?"

```
Principle                Behavior
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
                         "what does this do?"
```

---

## The Full Skill File

Below is the complete skill file. Drop it into `.claude/commands/react-vibe-kickoff.md` or `.claude/skills/react-vibe-kickoff/SKILL.md` and invoke it with `/project:react-vibe-kickoff`.

````markdown
# React Vibe Coding Kickoff

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

Ask something like: "What kind of project is this — admin dashboard / SaaS / landing page /
personal tool / e-commerce / other? Will it have an API? Does it need auth?"

### Admin / Dashboard
- **UI**: Ant Design or Mantine (strongest table, form, pagination primitives)
- **Style**: library's own system; Tailwind optional
- **State**: Zustand (client) + React Query (server — almost always has API)
- **Router**: React Router v6
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts or ECharts
- **Must-have**: permission control, table pagination/sort/filter

### SaaS / General Web App
- **UI**: shadcn/ui (most flexible, AI knows it best)
- **Style**: Tailwind CSS
- **Icons**: lucide-react
- **State**: Zustand + React Query
- **Router**: React Router v6 or TanStack Router
- **Forms**: React Hook Form + Zod

### Landing Page / Marketing Site
- **Recommend Next.js** (SEO, SSR friendly) instead of plain Vite
- **UI**: shadcn/ui + Tailwind + Framer Motion (animation)
- **Don't need**: complex state management, client routing (Next.js handles it)
- **Focus**: image optimization, Lighthouse score, SEO meta

### Personal Tool / Prototype
- **UI**: daisyUI or shadcn/ui (depends on speed preference)
- **State**: useState is enough — don't over-engineer
- **Don't need**: Husky, Commitlint, or other team tooling
- **Optional**: localStorage for data — may not need a backend at all

### E-commerce / Content Site
- **Recommend**: Next.js + shadcn/ui
- **State**: Zustand (cart) + React Query (product data)
- **Must-have**: image optimization, SEO, payment integration

### Not sure / Don't want to think about it
Default to **SaaS combo**: Vite + React + TS + Tailwind + shadcn/ui + lucide-react
+ React Router + Zustand + React Query + RHF + Zod.

---

## Universal: Code Quality Tools

Recommended for all project types (unless the user says "just prototyping, don't need these"):
- ESLint + Prettier + EditorConfig
- Husky + lint-staged (auto-check on commit)
- Commitlint (enforce commit message format)

Personal prototypes can skip Husky / Commitlint.

---

## Stage 1: Vite Init Command

After confirming the stack, give the user this to run in their terminal:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

If landing page / e-commerce → recommend Next.js instead:

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
```

Reminder: TypeScript isn't overhead — it actually helps the AI self-check through the type system.

---

## Stage 2: Environment Setup Prompt

Based on the chosen stack, generate a prompt the user can **copy-paste in full** into
Cursor / Claude Code / Windsurf.

SaaS / general combo example (swap packages for other project types):

````
I just initialized a Vite + React + TypeScript project.
Please set up the following dev environment, explaining each step:

[Tech Stack]
- Styling: Tailwind CSS
- UI components: shadcn/ui
- Icons: lucide-react
- Routing: React Router v6
- State: Zustand (client) + React Query (server)
- Forms: React Hook Form + Zod
- HTTP client: axios

[Code Quality]
- ESLint + Prettier (non-conflicting config)
- EditorConfig
- Husky + lint-staged (auto-check on commit)
- Commitlint (commit message format)

[Project Structure]
Create these folders and explain their purpose:
src/
  components/
    ui/         # shadcn components go here
  pages/        # pages
  hooks/        # custom hooks
  lib/          # utilities (cn, formatters, etc.)
  api/          # API requests
  types/        # TypeScript types
  store/        # Zustand stores

[Execution Order]
Install in this order, pausing after each step for my confirmation:
1. Install and configure Tailwind CSS (Vite integration)
2. Initialize shadcn/ui (npx shadcn@latest init)
3. Install lucide-react
4. Install routing, state, and form packages
5. Configure ESLint + Prettier
6. Set up Husky + lint-staged + Commitlint
7. Create folder structure

Don't install everything at once, and don't add packages I haven't listed.
````

---

## Stage 3: Convention Prompt (Most Important)

Many people skip this step — and then the AI's code style drifts across sessions.
Have the user save this as a file in the project root:

- Cursor → `.cursorrules`
- Claude Code → `CLAUDE.md`
- Windsurf → `.windsurfrules`
- Universal → `AGENTS.md`

SaaS / shadcn + Tailwind + lucide example (swap sections for other stacks):

````markdown
# Project Conventions

## Components
- Always use function components + hooks
- Props must have a TypeScript interface
- Filenames in PascalCase (e.g. UserCard.tsx)
- One main export per file

## shadcn/ui
- Install new components with `npx shadcn@latest add [name]`
- Don't re-implement components shadcn already has (Button, Input, Dialog, etc.)
- shadcn components in src/components/ui/, custom components in src/components/
- To customize shadcn components, edit the source directly (that's by design)

## Styling
- Tailwind classes only — no inline styles, no new .css files
- Colors use shadcn design tokens (bg-primary, text-muted-foreground),
  never hardcoded bg-[#xxx] or text-blue-500
- Conditional class combinations go through cn() utility (src/lib/utils.ts)
- RWD uses Tailwind's sm: md: lg: prefixes

## Icons
- Always use lucide-react — no emoji icons, no other icon packages
- Import: import { Search, User } from 'lucide-react'
- Size via className (e.g. className="w-4 h-4")

## State
- Use useState when it's enough — don't reach for Zustand prematurely
- Server state always goes through React Query, never into Zustand
- Don't shove API responses into global state

## Guardrails
- Tell me your plan before writing code
- If changing more than 3 files, list them for confirmation first
- Don't install packages we haven't discussed
- After completing a feature, report whether anything broke
````

---

## Stage 4: Feature Kickoff Prompt (Use for Every New Feature)

When the user is ready to build their first (or next) feature:

````
I want to build [feature description], the user flow is [...].
Before coding, please:
1. List what pages/components are needed
2. Map out the data flow (where state lives, how APIs are called)
3. Estimate which files will change

I'll confirm before we start writing.
````

---

## Field-Tested Tips

After presenting all four stages, add these practical reminders:

- **Small steps, fast commits**: one feature at a time, commit when done, then move on.
  AI loses coherence when asked to build too much in one session.
- **Let the AI see everything**: use Cursor, Claude Code, Windsurf — tools that read
  the whole project. Copy-pasting snippets strips context.
- **TypeScript strict mode**: `"strict": true` in tsconfig.json. The AI writes `any`
  and forgets null checks — the type system catches it before you do.
- **Keep the convention prompt alive**: every time the AI does something undesirable,
  add a rule to the convention file. Next time, it won't repeat the mistake.

---

## Interaction Principles

- **Ask first**: tech stack isn't a default — ask project type first. But if the user
  already specified their type or stack, skip the question and generate prompts directly.
- **Copy-paste ready**: don't say "you need ESLint" — give the actual prompt.
  Users want something they can select, copy, and paste.
- **Swap on request**: user wants Jotai instead of Zustand? Swap that one item,
  keep everything else, update the convention prompt section. No full teardown.
- **"I already have a project"**: skip stages 1 and 2, ask current stack,
  jump to the convention prompt.
- **Don't explain unless asked**: the goal is a fast kickoff, not a tutorial.
````

---

## References

- [Claude Code — Custom Slash Commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)
- [Claude Code — Project Configuration](https://docs.anthropic.com/en/docs/claude-code/settings)
