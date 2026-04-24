# Yiyun Liao Knowledge Base

This file is the single source of truth for the portfolio assistant agent.
Keep it updated — the agent can only answer what's documented here.

---

## Personal Info

- **Name:** Yi-Yun, Liao (廖宜昀)
- **Title:** Frontend Engineer / Real-Time Platforms / Former Lead Designer
- **Location:** Taipei, Taiwan
- **Email:** yiyun.bian.design@gmail.com
- **GitHub:** https://github.com/yiyun-liao/
- **LinkedIn:** https://www.linkedin.com/in/yiyun-liao/
- **Languages:** Chinese (native), English (professional/fluent)
- **Status:** Currently seeking frontend engineer positions
- **Portfolio:** This website — built with Vite + React + TypeScript + Tailwind CSS v4

---

## Professional Summary

A Frontend Engineer with a design background. After years of formal design education and hands-on experience across multiple design disciplines (industrial design, UI/UX, graphic design for film), Yiyun transitioned to engineering — driven by a passion for crafting exceptional user experiences and achieving seamless, high-performance integration with back-end data.

Previously drove UX improvements and cross-team collaboration at a growth-stage company and independently managed end-to-end design projects in a small studio. Maintains a strong passion for continuous learning, constantly honing skills and applying new technologies to real-world development.

Self-description from portfolio site: "I think in products, not tickets. User intent first, then data model, then interface." Design-trained engineers skip a lot of ping-pong between roles — she can read a spec and feel where the UX cracks are before the first commit. Currently deep in AI-assisted development — AI accelerates output, but architectural thinking doesn't get a discount.

---

## Career Transition Story

### Why transition from design to engineering?
While working as a UI/UX designer at AmazingTalker, Yiyun got exposure to code through QA, writing PR contributions for Storybook design guidelines, and microservice documentation. These experiences sparked a genuine fascination with programming. The appeal: programming has defined rules yet allows flexibility within those rules — whether the code is well-designed depends on logical thinking, which is where Yiyun thrives.

### Why return to AmazingTalker after WeHelp?
Yiyun's short-term goal is to build solid engineering skills. Despite AI tools being available, she believes in developing fundamental abilities. Having previously collaborated with the engineering team as a designer, she already appreciated their collaboration style and team culture. She trusted that this team would be the right environment to grow as an engineer.

### Why leave AmazingTalker (2026)?
The departure was due to company layoffs, not by choice.

### Career values
- Prioritizes learning opportunities above all (learning > enjoyment > compensation > influence)
- Aspires to become an engineer who can independently deliver products from 0 to 1
- Values honest self-reflection, collaborative teamwork, and trust within teams
- Believes individual actions ultimately reflect in society as a whole

---

## Work Experience

### Frontend Engineer | AmazingTalker - VCAAS (2025.08 - 2026.03)

- 65+ merged PRs in 8 months
- Tech stack: React, TypeScript, MobX, WebRTC / TRTC, NX monorepo
- Broke down PM requirements into ordered prerequisites — e.g. screen-share-control: refactored participant panel and ChatProvider first to establish clean state boundaries, then designed and implemented ScreenShareRequestProvider's permission-state model; aligned backend API contracts directly without PM intermediary
- Maintained reactive meeting state with MobX (observer / reaction) across SDK stores (RTC / attend / device) and app-layer UI — ensured consistent mute, camera, and permission behaviors through role transitions
- Implemented whiteboard toolbar enhancements and Electron screenshot features (auto-save, save-as dialog, Document PiP) across web and desktop — resolved Windows-specific rendering issues and ensured consistent behavior across environments
- Wired WebSocket-driven SDK events (reactions, participant state, view mode) through custom Providers and hooks to UI layer; built stream reaction system and mic-activity animation end-to-end

### Full Stack Developer / Trainee | WeHelp (2025.01 - 2025.07)

- Full-stack technical training program — dedicated 50 hours per week over six months
- Developed multiple projects from concept to delivery (Splitly, Taipei Travel Search, Air Quality Monitoring Station)
- Collaborated within a team on web deployment and Git workflows
- Tech stack: React, Next.js, FastAPI, PostgreSQL, MySQL, AWS EC2

### UI/UX Designer & Designer Mentor | AmazingTalker (2022.09 - 2024.12)

- Led UX reviews and partnered with the app team to optimize shopping cart flow — **+14% purchase conversion**
- Assisted frontend team in adopting microservices; defined and maintained design guidelines for customer-support, sales, and announcement systems
- Established company-wide design processes and organized regular design-sharing sessions
- Created initial Design Guideline and planned Design Guideline 2.0, delivering comprehensive documentation aligned with token-based design
- Contributed to Storybook documentation and submitted PRs — first exposure to Git workflow and code

### Industrial Designer & Project Manager | HELLO Design (2020.03 - 2022.02)

- Served as product designer, graphic/web designer, and led project management
- Drove annual project revenues of NT$2 million
- Independently managed end-to-end design and project coordination

### Graphic Designer & Art Assistant | Taiwanese Drama Productions (2019.05 - 2020.01)

- Graphic Designer for the Taiwanese drama *Seqalu: Formosa 1867* (斯卡羅)
- Graphic Designer Intern on the Chinese drama *Teresa Teng* (鄧麗君)

---

## Education

### Bachelor Degree of Industrial Design | National Taiwan University of Science and Technology (2015 - 2019)

- Graduation Exhibition: MIMU No.Tent
- Technical collaboration with BenQ — served as the conceptual precursor to the BenQ GV50

---

## Skills

### Programming Languages
JavaScript, TypeScript, Python

### Front-End Frameworks & Libraries
React 18, TypeScript, MobX, Next.js, Node.js

### Styling
CSS Modules, LESS, Tailwind CSS, Ant Design

### Back-End
FastAPI

### Databases
PostgreSQL, MySQL, SQLite

### RTC / Desktop
WebRTC, TRTC, Electron, ResizeObserver, NX Monorepo

### Cloud & Deployment
AWS EC2, AWS S3, Vercel, Firebase, Cloudinary

### Version Control
Git

### Design
Figma, Design Systems, UX Research, Responsive Design

### AI & Agents
Claude API, Claude agents, Telegram API, CalDAV, Recharts, yfinance, Finnhub, Alpha Vantage

### Certifications
- Coursera: Google Project Management
- WeHelp Bootcamp

---

## Projects

### AmazingTalker - VCaaS (Work Project)
- **Description:** Real-time classroom platform — screen sharing, whiteboard, stream reactions, Electron desktop
- **Role:** Front-End Engineer (2025.08 - 2026.03)
- **Status:** Sunset (due to layoffs)
- **Overview:** Frontend engineer on AmazingTalker's video-class-as-a-service stack — a multi-app NX monorepo (classroom, electron, whiteboard, session-recap) plus an Ant Design dashboard. Shipped screen-share permission control, stream reactions, Electron screenshot features, and maintained meeting-state consistency across multiple SDK layers.
- **Key Features:**
  - Screen-share permission model and live stream reaction system
  - Electron desktop features — screenshot auto-save, save-as, Document PiP
  - Reactive meeting state with MobX across RTC / attend / device SDK stores
  - WebSocket-driven events wired through custom Providers and hooks to UI
- **Tech:** React, TypeScript, MobX, BytePlus RTC, Electron, NX Monorepo
- **Note:** Returned to AmazingTalker as engineer after 2+ years as designer on the same team

### Track Stock (Side Project, 2026 — Building)
- **Description:** An AI-assisted US equities monitor — live quotes, news digests, alerts
- **Role:** Solo build
- **Status:** Building
- **Overview:** A personal trading cockpit — live quotes, AI news digests, technical indicators, multi-factor scoring, and smart alerts. Core dashboard shipped in eight days; now expanding with a weighted scoring engine (technical 35% + fundamental 45% + sentiment 20%) and RAG-based knowledge retrieval for investment research. Five data APIs sit behind isolated fault domains so one going down never takes the product with it.
- **Key Features:**
  - Isolated fault domains + caching across 5 data providers
  - Parallel Claude calls for multi-ticker news synthesis
  - Multi-factor scoring engine — technical, fundamental, and sentiment weighted
  - RAG-based knowledge retrieval for investment research (in development)
- **Tech:** Next.js, FastAPI, Claude API, yfinance, Finnhub, Alpha Vantage, Telegram, Recharts
- **Links:** Private GitHub (available on request)

### Daily Assistant (Side Project, 2026 — Shipped)
- **Description:** Telegram x iCloud calendar — AI-driven daily planning, automated
- **Role:** Solo build
- **Status:** Shipped
- **Overview:** A personal planning system that reads iCloud calendar over CalDAV, talks via Telegram, and plays two AI roles — a secretary for daily logistics and a career coach for long-term decisions. Daily briefings and weekly reviews run on cron, fully automated.
- **Key Features:**
  - Two-agent role separation (Secretary + Career Coach) via Claude API
  - Bidirectional iCloud sync via CalDAV — pomodoro blocks rendered back to calendar
  - Cron-driven daily & weekly scheduling with Telegram interactive adjustments
- **Tech:** Node.js, Claude API, Telegram API, CalDAV, iCloud

### Splitly
- **Description:** Helping users quickly split bills and track expenses with multiple splitting methods
- **Role:** Research, design, project management, and development (2 months)
- **Key Features:**
  - Scoped global state using multiple React Contexts with custom hooks for data fetching and business logic
  - Three real-time split calculators: actual, percentage, and adjusted
  - Unified data schema across individual splits, group splits, and repayments — dynamically derives split methods from repayment values
  - Client-side caching, refetching data only on manual browser refresh
  - Firebase third-party authentication, Fetch API and Axios for robust data-fetching
- **Status:** Live (backend migrated from EC2 to Render — initial request may take ~30s to cold-start)
- **Tech:** React, TypeScript, Next.js, Tailwind CSS | FastAPI, PostgreSQL, SQLite | AWS EC2, Vercel, Firebase Auth | MVC Architecture
- **Live Demo:** https://splitly-steel.vercel.app/
- **GitHub:** https://github.com/yiyun-liao/Splitly
- **Presentation:** https://www.figma.com/proto/SK132yqquO5w5M3UPLGu1N/wehelp?page-id=0%3A1&node-id=82-2&viewport=-3647%2C169%2C0.21&t=kEbRTEOd8nIkbLum-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=82%3A2&show-proto-sidebar=1

### Taipei Travel Search
- **Description:** Helping users quickly discover Taipei's attractions and plan trips
- **Role:** Full-stack training and development (1 month)
- **Key Features:**
  - Front-End/Back-End MVC architecture deployed to AWS EC2
  - JWT middleware for secure registration and login
  - Real-time fuzzy keyword search for attractions near MRT stations
  - Lazy loading and skeleton-loading animations for optimized UX
  - Complete booking flow with TapPay payment integration
- **Tech:** FastAPI, MySQL, JWT | AWS EC2, TapPay | Taipei Attractions API, Taipei Metro API | MVC Architecture
- **GitHub:** https://github.com/yiyun-liao/bootcamp-work-taipei-day-trip

### Air Quality Monitoring Station
- **Description:** Real-time monitoring of Taiwan's air pollution index
- **Role:** Collaboratively researched, developed, and provided design (1 week)
- **Key Features:**
  - Integrated Taiwan EPA Open Data APIs for hourly air quality metrics
  - Discord webhook routes in FastAPI for automated notifications
  - User geolocation for nearest monitoring station data
  - Interactive, responsive visualizations using Chart.js, D3.js, and SVG animations — real-time and 7-day historical trends
  - Git collaboration with PR merges and conflict resolution
- **Tech:** FastAPI | Chart.js, D3.js, SVG Graph | Taiwan EPA Open Data APIs, Discord API | Git Collaboration
- **Website:** https://www.airpullution.site/
- **GitHub:** https://github.com/yiyun-liao/WeHelp_Stage2_Week8_Group3_Air_Pollution_Observation_Station

### Designer Portfolio (Archive, 2015 - 2021)
- **Description:** The chapter before engineering — product design, branding, TV drama graphics, and a BenQ collaboration
- **Role:** Designer — Archive
- **Status:** Archive, Live
- **Key Highlights:**
  - MIMU No.Tent. graduation project — technical collaboration with BenQ, precursor to BenQ GV50
  - Product design and project management at HELLO Design — NT$2M annual project revenue
  - Graphic designer for Seqalu: Formosa 1867 (Golden Bell Award-winning Taiwanese drama)
- **Tech:** Industrial Design, Product Design, Branding, Graphic Design, Project Management
- **Website:** https://yiyunbiandesign.wixstudio.com/home

### BUKKU (Side Project, 2023)
- **Description:** A time-based booking platform for creators and freelancers
- **Role:** PM & Designer — collaborated with engineer friends
- **Note:** Pre-engineering career project; demonstrates cross-functional collaboration

---

## About This Portfolio Site

- **Tech:** Vite + React + TypeScript + Tailwind CSS v4
- **Sections:** Hero, Ticker, About, Experience, Projects, Ask Yi-Yun (AI chatbot), Footer
- **Features:** Embedded AI agent for Q&A about Yiyun, modal carousel for project images, responsive design
- **Tagline:** "I bring the full craft from sketch to ship."
- **Outside work:** Reading on systems design & careers. Writing postmortems of own side projects.
