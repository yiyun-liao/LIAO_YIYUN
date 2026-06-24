import type { L } from "@/i18n/types";

export interface ProjectLink {
  label: L;
  href: string;
  disabled: boolean;
}

export interface Project {
  id: string;
  idx: string;
  name: string;
  titleIt: boolean;
  tagline: L;
  vibe: boolean;
  tags: string[];
  role: L;
  year: string;
  status: L;
  overview: L;
  highlights: L[];
  links: ProjectLink[];
  linkNote?: L;
  cover: string;
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "at",
    idx: "01",
    name: "AmazingTalker - VCaaS",
    titleIt: false,
    tagline: {
      en: "Real-time classroom platform — screen sharing, whiteboard, stream reactions, Electron desktop.",
      "zh-TW":
        "即時教室平台——螢幕分享、白板、串流互動反應、Electron 桌面應用。",
    },
    vibe: false,
    tags: [
      "React",
      "TypeScript",
      "MobX",
      "BytePlus RTC",
      "Electron",
      "NX Monorepo",
    ],
    role: { en: "Front-End Engineer", "zh-TW": "前端工程師" },
    year: "2025.08 — 2026.03",
    status: { en: "Sunset", "zh-TW": "已下線" },
    overview: {
      en: "Frontend engineer on AmazingTalker's video-class-as-a-service stack — a multi-app NX monorepo (classroom, electron, whiteboard, session-recap) plus an Ant Design dashboard. Shipped screen-share permission control, stream reactions, Electron screenshot features, and maintained meeting-state consistency across multiple SDK layers.",
      "zh-TW":
        "擔任 AmazingTalker 視訊教室即服務（VCaaS）的前端工程師——基於 NX monorepo 的多應用架構（教室、Electron、白板、課後回顧）搭配 Ant Design 後台。交付螢幕分享權限控制、串流互動反應、Electron 截圖功能，並維護跨多個 SDK 層的會議狀態一致性。",
    },
    highlights: [
      {
        en: "Screen-share permission model and live stream reaction system",
        "zh-TW": "螢幕分享權限模型與即時串流互動反應系統",
      },
      {
        en: "Electron desktop features — screenshot auto-save, save-as, Document PiP",
        "zh-TW":
          "Electron 桌面功能——截圖自動儲存、另存新檔、Document PiP",
      },
      {
        en: "Reactive meeting state with MobX across RTC / attend / device SDK stores",
        "zh-TW":
          "透過 MobX 在 RTC / attend / device SDK stores 之間實現響應式會議狀態管理",
      },
      {
        en: "WebSocket-driven events wired through custom Providers and hooks to UI",
        "zh-TW":
          "WebSocket 驅動的事件透過自訂 Providers 與 hooks 串接至 UI",
      },
    ],
    links: [
      {
        label: { en: "Contact for details", "zh-TW": "聯繫了解詳情" },
        href: "",
        disabled: true,
      },
    ],
    cover: "assets/at/cover.png",
    images: [
      "assets/at/cover.png",
      "assets/at/dashboard.png",
      "assets/at/screenshare.png",
      "assets/at/chat.gif",
      "assets/at/mute.gif",
    ],
  },
  {
    id: "trackstock",
    idx: "02",
    name: "Track Stock",
    titleIt: false,
    tagline: {
      en: "An AI-assisted US equities monitor — live quotes, news digests, alerts.",
      "zh-TW": "AI 輔助美股監控工具——即時報價、新聞摘要、警報通知。",
    },
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
    role: { en: "Solo build", "zh-TW": "獨立開發" },
    year: "2026 —",
    status: { en: "Building", "zh-TW": "開發中" },
    overview: {
      en: "A personal trading cockpit — live quotes, AI news digests, technical indicators, multi-factor scoring, and smart alerts. Core dashboard shipped in eight days; now expanding with a weighted scoring engine (technical 35 % + fundamental 45 % + sentiment 20 %) and RAG-based knowledge retrieval for investment research. Five data APIs sit behind isolated fault domains so one going down never takes the product with it.",
      "zh-TW":
        "個人交易駕駛艙——即時報價、AI 新聞摘要、技術指標、多因子評分與智慧警報。核心儀表板於八天內交付；目前正擴展加權評分引擎（技術面 35% + 基本面 45% + 情緒面 20%）以及基於 RAG 的知識檢索用於投資研究。五個資料 API 各自隔離於獨立的容錯區域，單一 API 故障不會影響整體產品運作。",
    },
    highlights: [
      {
        en: "Isolated fault domains + caching across 5 data providers",
        "zh-TW": "跨 5 個資料來源的獨立容錯區域與快取機制",
      },
      {
        en: "Parallel Claude calls for multi-ticker news synthesis",
        "zh-TW": "平行 Claude 呼叫實現多股票新聞綜合分析",
      },
      {
        en: "Multi-factor scoring engine — technical, fundamental, and sentiment weighted",
        "zh-TW": "多因子評分引擎——技術面、基本面與情緒面加權",
      },
      {
        en: "RAG-based knowledge retrieval for investment research (in development)",
        "zh-TW": "基於 RAG 的知識檢索用於投資研究（開發中）",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yiyun-liao/track-stock",
        disabled: false,
      },
      {
        label: { en: "website WIP", "zh-TW": "網站開發中" },
        href: "",
        disabled: true,
      },
    ],
    cover: "assets/trackstock/cover.png",
    images: [
      "assets/trackstock/cover.png",
      "assets/trackstock/截圖 2026-04-21 晚上11.26.10.png",
      "assets/trackstock/截圖 2026-04-21 晚上11.26.51.png",
      "assets/trackstock/截圖 2026-04-21 晚上11.26.59.png",
    ],
  },
  {
    id: "daily",
    idx: "03",
    name: "Daily Assistant",
    titleIt: true,
    tagline: {
      en: "Telegram × iCloud calendar — AI-driven daily planning, automated.",
      "zh-TW":
        "Telegram × iCloud 日曆——AI 驅動的每日規劃，全自動化。",
    },
    vibe: true,
    tags: ["Node.js", "Claude API", "Telegram API", "CalDAV", "iCloud"],
    role: { en: "Solo build", "zh-TW": "獨立開發" },
    year: "2026",
    status: { en: "Shipped", "zh-TW": "已上線" },
    overview: {
      en: "A personal planning system that reads my iCloud calendar over CalDAV, talks to me on Telegram, and plays two AI roles — a secretary for daily logistics and a career coach for long-term decisions. Daily briefings and weekly reviews run on cron, fully automated.",
      "zh-TW":
        "個人規劃系統——透過 CalDAV 讀取 iCloud 日曆，在 Telegram 上與我對話，扮演兩個 AI 角色：負責日常事務的秘書與負責長期決策的職涯教練。每日簡報與每週回顧透過 cron 排程全自動執行。",
    },
    highlights: [
      {
        en: "Two-agent role separation (Secretary + Career Coach) via Claude API",
        "zh-TW":
          "透過 Claude API 實現雙代理角色分離（秘書 + 職涯教練）",
      },
      {
        en: "Bidirectional iCloud sync via CalDAV — pomodoro blocks rendered back to calendar",
        "zh-TW":
          "透過 CalDAV 實現 iCloud 雙向同步——番茄鐘區塊回寫至日曆",
      },
      {
        en: "Cron-driven daily & weekly scheduling with Telegram interactive adjustments",
        "zh-TW":
          "Cron 驅動的每日與每週排程，搭配 Telegram 互動調整",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yiyun-liao/daily-assistant",
        disabled: false,
      },
    ],
    cover: "assets/daily/cover.png",
    images: [
      "assets/daily/cover.png",
      "assets/daily/截圖 2026-04-21 晚上11.00.18.png",
    ],
  },
  {
    id: "splitly",
    idx: "04",
    name: "Splitly",
    titleIt: true,
    tagline: {
      en: "Help friends settle bills fast — three split modes, real-time math.",
      "zh-TW":
        "幫朋友快速結算帳單——三種分帳模式，即時計算。",
    },
    vibe: false,
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Firebase Auth",
    ],
    role: { en: "Solo build · Full-stack", "zh-TW": "獨立開發 · 全端" },
    year: "2025",
    status: { en: "Live", "zh-TW": "運行中" },
    overview: {
      en: "A bill-splitting tool for trips, shared flats, and group expenses. One unified data model drives personal splits, group splits, and repayments — three real-time calculators (actual, percentage, adjusted) so users never need pen-and-paper math again.",
      "zh-TW":
        "旅行、合租與團體消費的分帳工具。統一資料模型驅動個人分帳、團體分帳與還款——三種即時計算器（實際金額、百分比、調整金額），讓使用者不再需要紙筆計算。",
    },
    highlights: [
      {
        en: "Unified schema across personal splits, group splits, and settlements — split method derived dynamically from repayment values",
        "zh-TW":
          "統一 schema 涵蓋個人分帳、團體分帳與結算——分帳方式根據還款值動態推導",
      },
      {
        en: "Three real-time split calculators with client-side caching",
        "zh-TW": "三種即時分帳計算器搭配客戶端快取",
      },
      {
        en: "Firebase third-party auth + JWT-verified FastAPI routes",
        "zh-TW": "Firebase 第三方驗證 + JWT 驗證的 FastAPI 路由",
      },
    ],
    links: [
      {
        label: { en: "Live Demo", "zh-TW": "線上展示" },
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
    linkNote: {
      en: "Backend migrated from EC2 to Render — initial request may take ~30s to cold-start.",
      "zh-TW":
        "後端已從 EC2 遷移至 Render——首次請求可能需要約 30 秒冷啟動。",
    },
    cover: "assets/splitly/cover.jpg",
    images: [
      "assets/splitly/cover.jpg",
      "assets/splitly/video_create_and_join.gif",
      "assets/splitly/video_create_group_expense.gif",
      "assets/splitly/video_create_personal_expense.gif",
      "assets/splitly/video_create_transfer.gif",
      "assets/splitly/video_device_all.gif",
      "assets/splitly/video_read.gif",
      "assets/splitly/video_settle.gif",
      "assets/splitly/video_split_by_item.gif",
    ],
  },
  {
    id: "at-design",
    idx: "05",
    name: "AmazingTalker — Designer",
    titleIt: false,
    tagline: {
      en: "Led UI/UX across cart checkout, design system, classroom UI, and 70+ product design tasks over two years.",
      "zh-TW":
        "主導 UI/UX 涵蓋購物車結帳、設計系統、教室介面，以及兩年間 70+ 項產品設計任務。",
    },
    vibe: false,
    tags: [
      "Figma",
      "Design Systems",
      "UX Research",
      "Storybook",
      "Responsive Design",
      "A/B Testing",
    ],
    role: { en: "Lead UI/UX Designer", "zh-TW": "首席 UI/UX 設計師" },
    year: "2022 — 2024",
    status: { en: "Shipped", "zh-TW": "已上線" },
    overview: {
      en: "Lead UI/UX designer at AmazingTalker, an online language-learning marketplace. Owned end-to-end design for the cart checkout redesign that lifted purchase conversion by 14%. Established the company-wide Design Guideline and Storybook component library used across web and app. Delivered 70+ design tasks spanning group-purchase flows, teacher-wall experiments, AT classroom UI (loading animations, header, error pages), GDPR consent patterns, and cross-platform specs for iOS, Android, and web.",
      "zh-TW":
        "擔任 AmazingTalker（線上語言學習平台）首席 UI/UX 設計師。負責購物車結帳改版的端到端設計，使購買轉換率提升 14%。建立全公司通用的 Design Guideline 與 Storybook 元件庫，供 web 與 app 使用。交付 70+ 項設計任務，涵蓋團購流程、教師牆實驗、AT 教室 UI（載入動畫、頁首、錯誤頁面）、GDPR 同意機制，以及 iOS、Android 與 web 跨平台規格。",
    },
    highlights: [
      {
        en: "Cart checkout redesign — +14% purchase conversion, validated with data-driven drop-off analysis",
        "zh-TW":
          "購物車結帳改版——購買轉換率 +14%，透過數據驅動的流失分析驗證",
      },
      {
        en: "Built company-wide Design Guideline and Storybook component library adopted by all frontend teams",
        "zh-TW":
          "建立全公司 Design Guideline 與 Storybook 元件庫，所有前端團隊採用",
      },
      {
        en: "Designed AT classroom UI — loading animation, header with help-center entry, onboarding tooltips",
        "zh-TW":
          "設計 AT 教室 UI——載入動畫、含幫助中心入口的頁首、新手引導提示",
      },
      {
        en: "70+ shipped design tasks across group-purchase, teacher-wall, pricing cards, and GDPR compliance",
        "zh-TW":
          "交付 70+ 項設計任務，涵蓋團購、教師牆、價格卡片與 GDPR 合規",
      },
      {
        en: "Bridged design-to-engineering handoff for micro-frontend architecture adoption",
        "zh-TW":
          "銜接設計到工程的交接流程，推動微前端架構的導入",
      },
    ],
    links: [
      {
        label: "Presentation",
        href: "https://www.figma.com/proto/SK132yqquO5w5M3UPLGu1N/wehelp?node-id=494-4963&p=f&viewport=-297%2C233%2C0.03&t=sbFb36x754Ygcn30-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=494%3A4963&show-proto-sidebar=1&page-id=0%3A1",
        disabled: false,
      },
      {
        label: "Storybook",
        href: "https://res.staging.amazingtalker.com/storybook-ui/index.html?path=/docs/button--docs",
        disabled: false,
      },
    ],
    cover: "assets/at-designer/cover.png",
    images: [
      "assets/at-designer/cover.png",
      "assets/at-designer/cart.gif",
      "assets/at-designer/Announcements system.gif",
      "assets/at-designer/notion.png",
      "assets/at-designer/sharing.png",
    ],
  },
  {
    id: "designer-portfolio",
    idx: "06",
    name: "Designer Portfolio",
    titleIt: true,
    tagline: {
      en: "The chapter before engineering — product design, branding, TV drama graphics, and a BenQ collaboration.",
      "zh-TW":
        "工程師之前的篇章——產品設計、品牌識別、電視劇視覺設計，以及與 BenQ 的合作。",
    },
    vibe: false,
    tags: [
      "Industrial Design",
      "Product Design",
      "Branding",
      "Graphic Design",
      "Project Management",
    ],
    role: { en: "Designer — Archive", "zh-TW": "設計師 — 作品集" },
    year: "2015 — 2021",
    status: { en: "Archive · Live", "zh-TW": "作品集 · 運行中" },
    overview: {
      en: "Work from my design years — industrial product design at Design Studio, graphic design for two Taiwanese TV dramas , brand identity systems, and my NTUST graduation project MIMU No.Tent. which became the conceptual precursor to the BenQ GV50.",
      "zh-TW":
        "設計師時期的作品——在設計工作室的工業產品設計、兩部台灣電視劇的視覺設計、品牌識別系統，以及台科大畢業專題 MIMU No.Tent.，後來成為 BenQ GV50 的概念前身。",
    },
    highlights: [
      {
        en: "MIMU No.Tent. graduation project — technical collaboration with BenQ, precursor to BenQ GV50",
        "zh-TW":
          "MIMU No.Tent. 畢業專題——與 BenQ 技術合作，BenQ GV50 的概念前身",
      },
      {
        en: "Product design and project management at HELLO Design — NT$2M annual project revenue",
        "zh-TW":
          "在 HELLO Design 負責產品設計與專案管理——年專案營收達新台幣 200 萬",
      },
      {
        en: "Graphic designer for Seqalu: Formosa 1867 (Golden Bell Award-winning Taiwanese drama)",
        "zh-TW":
          "擔任《斯卡羅》（金鐘獎得獎台灣電視劇）視覺設計師",
      },
    ],
    links: [
      {
        label: { en: "Visit", "zh-TW": "前往" },
        href: "https://yiyunbiandesign.wixstudio.com/home",
        disabled: false,
      },
    ],
    cover: "assets/designer-portfolio/cover.png",
    images: [
      "assets/designer-portfolio/cover.png",
      "assets/designer-portfolio/截圖 2026-04-21 晚上11.11.07.png",
      "assets/designer-portfolio/截圖 2026-04-21 晚上11.11.37.png",
    ],
  },
];
