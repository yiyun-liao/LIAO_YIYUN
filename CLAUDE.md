# LIAO YIYUN — Portfolio Website

## Project Overview

A static portfolio website for Yiyun Liao (廖宜昀). The site serves two purposes:

1. **For interviewers** — a single page to understand who Yiyun is, including background, skills, and projects.
2. **For Yiyun** — a registry of all projects with launch instructions, so every project can be verified as working before interviews.

The site includes an embedded AI agent that answers questions about Yiyun only.

## Tech Stack

- Static site (HTML / CSS / JS)
- AI agent for Q&A (scoped to Yiyun-related content only)

## Directory Structure

```
LIAO_YIYUN/
├── .claude/
│   ├── agents/       # AI sub-agents for the portfolio assistant
│   ├── commands/     # Custom shortcut commands
│   ├── hooks/        # Automation workflow triggers
│   ├── rules/        # Topic-specific behavior rules
│   ├── skills/       # Reusable advanced work scripts
│   └── settings.json # Permissions and global settings
├── CLAUDE.md         # This file — project docs & dev conventions
└── (site source)     # To be added
```

## Development Conventions

- Keep the site lightweight — no heavy frameworks unless justified.
- All AI agent responses must be scoped to Yiyun-related information only.
- Use Traditional Chinese (繁體中文) for user-facing content where appropriate.
- Commit messages in English.
