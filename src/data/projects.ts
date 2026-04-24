export interface ProjectLink {
  label: string;
  href: string;
  disabled: boolean;
}

export interface Project {
  id: string;
  idx: string;
  name: string;
  titleIt: boolean;
  tagline: string;
  vibe: boolean;
  tags: string[];
  role: string;
  year: string;
  status: string;
  overview: string;
  highlights: string[];
  links: ProjectLink[];
  linkNote?: string;
  cover: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "at",
    idx: "01",
    name: "AmazingTalker - VCaaS",
    titleIt: false,
    tagline:
      "Real-time classroom platform — screen sharing, whiteboard, stream reactions, Electron desktop.",
    vibe: false,
    tags: ["React", "TypeScript", "MobX", "BytePlus RTC", "Electron", "NX Monorepo"],
    role: "Front-End Engineer",
    year: "2025.08 — 2026.03",
    status: "Sunset",
    overview:
      "Frontend engineer on AmazingTalker's video-class-as-a-service stack — a multi-app NX monorepo (classroom, electron, whiteboard, session-recap) plus an Ant Design dashboard. Shipped screen-share permission control, stream reactions, Electron screenshot features, and maintained meeting-state consistency across multiple SDK layers.",
    highlights: [
      "Screen-share permission model and live stream reaction system",
      "Electron desktop features — screenshot auto-save, save-as, Document PiP",
      "Reactive meeting state with MobX across RTC / attend / device SDK stores",
      "WebSocket-driven events wired through custom Providers and hooks to UI",
    ],
    links: [
      {
        label: "Contact for details",
        href: "",
        disabled: true,
      },
    ],
    cover: "assets/at/cover.png",
    images: ["assets/at/cover.png", "assets/at/dashboard.png", "assets/at/screenshare.png", "assets/at/chat.gif", "assets/at/mute.gif"],
  },
  {
    id: "trackstock",
    idx: "02",
    name: "Track Stock",
    titleIt: false,
    tagline:
      "An AI-assisted US equities monitor — live quotes, news digests, alerts.",
    vibe: true,
    tags: [
      "Next.js",
      "FastAPI",
      "Claude API",
      "yfinance",
      "Finnhub",
      "Alpha Vantage",
      "Telegram",
      "Recharts",
    ],
    role: "Solo build",
    year: "2026 —",
    status: "Building",
    overview:
      "A personal trading cockpit — live quotes, AI news digests, technical indicators, multi-factor scoring, and smart alerts. Core dashboard shipped in eight days; now expanding with a weighted scoring engine (technical 35 % + fundamental 45 % + sentiment 20 %) and RAG-based knowledge retrieval for investment research. Five data APIs sit behind isolated fault domains so one going down never takes the product with it.",
    highlights: [
      "Isolated fault domains + caching across 5 data providers",
      "Parallel Claude calls for multi-ticker news synthesis",
      "Multi-factor scoring engine — technical, fundamental, and sentiment weighted",
      "RAG-based knowledge retrieval for investment research (in development)",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yiyun-liao/track-stock",
        disabled: false,
      },
      {
        label: "website WIP",
        href: "",
        disabled: true,
      },
    ],
    cover: "assets/trackstock/cover.png",
    images: ["assets/trackstock/cover.png", "assets/trackstock/截圖 2026-04-21 晚上11.26.10.png", "assets/trackstock/截圖 2026-04-21 晚上11.26.51.png", "assets/trackstock/截圖 2026-04-21 晚上11.26.59.png"],
  },
  {
    id: "daily",
    idx: "03",
    name: "Daily Assistant",
    titleIt: true,
    tagline:
      "Telegram × iCloud calendar — AI-driven daily planning, automated.",
    vibe: true,
    tags: ["Node.js", "Claude API", "Telegram API", "CalDAV", "iCloud"],
    role: "Solo build",
    year: "2026",
    status: "Shipped",
    overview:
      "A personal planning system that reads my iCloud calendar over CalDAV, talks to me on Telegram, and plays two AI roles — a secretary for daily logistics and a career coach for long-term decisions. Daily briefings and weekly reviews run on cron, fully automated.",
    highlights: [
      "Two-agent role separation (Secretary + Career Coach) via Claude API",
      "Bidirectional iCloud sync via CalDAV — pomodoro blocks rendered back to calendar",
      "Cron-driven daily & weekly scheduling with Telegram interactive adjustments",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yiyun-liao/daily-assistant",
        disabled: false,
      },
    ],
    cover: "assets/daily/cover.png",
    images: ["assets/daily/cover.png", "assets/daily/截圖 2026-04-21 晚上11.00.18.png"],
  },
  {
    id: "splitly",
    idx: "04",
    name: "Splitly",
    titleIt: true,
    tagline:
      "Help friends settle bills fast — three split modes, real-time math.",
    vibe: false,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Firebase Auth",
    ],
    role: "Solo build · Full-stack",
    year: "2025",
    status: "Live",
    overview:
      "A bill-splitting tool for trips, shared flats, and group expenses. One unified data model drives personal splits, group splits, and repayments — three real-time calculators (actual, percentage, adjusted) so users never need pen-and-paper math again.",
    highlights: [
      "Unified schema across personal splits, group splits, and settlements — split method derived dynamically from repayment values",
      "Three real-time split calculators with client-side caching",
      "Firebase third-party auth + JWT-verified FastAPI routes",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://splitly-steel.vercel.app/",
        disabled: false,
      },
      {
        label: "GitHub",
        href: "https://github.com/yiyun-liao/Splitly",
        disabled: false,
      },
      {
        label: "Presentation",
        href: "https://www.figma.com/proto/SK132yqquO5w5M3UPLGu1N/wehelp?page-id=0%3A1&node-id=82-2&viewport=-3647%2C169%2C0.21&t=kEbRTEOd8nIkbLum-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=82%3A2&show-proto-sidebar=1",
        disabled: false,
      },
    ],
    linkNote: "Backend migrated from EC2 to Render — initial request may take ~30s to cold-start.",
    cover: "assets/splitly/cover.jpg",
    images: ["assets/splitly/cover.jpg", "assets/splitly/video_create_and_join.gif", "assets/splitly/video_create_group_expense.gif", "assets/splitly/video_create_personal_expense.gif", "assets/splitly/video_create_transfer.gif", "assets/splitly/video_device_all.gif", "assets/splitly/video_read.gif", "assets/splitly/video_settle.gif", "assets/splitly/video_split_by_item.gif"],
  },
  {
    id: "designer-portfolio",
    idx: "05",
    name: "Designer Portfolio",
    titleIt: true,
    tagline:
      "The chapter before engineering — product design, branding, TV drama graphics, and a BenQ collaboration.",
    vibe: false,
    tags: ["Industrial Design", "Product Design", "Branding", "Graphic Design", "Project Management"],
    role: "Designer — Archive",
    year: "2015 — 2021",
    status: "Archive · Live",
    overview:
      "Work from my design years — industrial product design at Design Studio, graphic design for two Taiwanese TV dramas , brand identity systems, and my NTUST graduation project MIMU No.Tent. which became the conceptual precursor to the BenQ GV50.",
    highlights: [
      "MIMU No.Tent. graduation project — technical collaboration with BenQ, precursor to BenQ GV50",
      "Product design and project management at HELLO Design — NT$2M annual project revenue",
      "Graphic designer for Seqalu: Formosa 1867 (Golden Bell Award-winning Taiwanese drama)",
    ],
    links: [
      {
        label: "Visit",
        href: "https://yiyunbiandesign.wixstudio.com/home",
        disabled: false,
      },
    ],
    cover: "assets/designer-portfolio/cover.png",
    images: ["assets/designer-portfolio/cover.png", "assets/designer-portfolio/截圖 2026-04-21 晚上11.11.07.png", "assets/designer-portfolio/截圖 2026-04-21 晚上11.11.37.png"],
  },
];
