import type { L } from "@/i18n/types";

export interface ExperienceRow {
  when: string;
  company: string;
  url: string;
  logo: string;
  role: L;
  bullets: L[];
  note: L;
  moreNote: L[];
}

export const EXPERIENCE: ExperienceRow[] = [
  {
    when: "2025.08 — 2026.03",
    company: "AmazingTalker",
    url: "https://tw.amazingtalker.com/",
    logo: "assets/logo/at.png",
    role: { en: "Front-End Engineer", "zh-TW": "前端工程師" },
    bullets: [
      {
        en: "Shipped screen-share permission control, stream reactions, and Electron desktop features end-to-end",
        "zh-TW": "端對端交付螢幕分享權限控制、直播反應和 Electron 桌面功能",
      },
      {
        en: "Owned meeting-state consistency across SDK layers — mute, camera, and role transitions behaved reliably",
        "zh-TW": "負責跨 SDK 層的會議狀態一致性——靜音、鏡頭與角色切換穩定運作",
      },
    ],
    note: {
      en: "VCaaS real-time classroom · returned as engineer after 2+ yrs as designer.",
      "zh-TW": "VCaaS 即時教室 · 設計師兩年多後以工程師身份回歸。",
    },
    moreNote: [
      "React · TypeScript · MobX · WebRTC / TRTC · NX monorepo",
      {
        en: "Decomposed PM requirements into ordered prerequisites — refactored participant panel and ChatProvider first, then built permission-state model on clean boundaries",
        "zh-TW": "將 PM 需求拆解為有序前置條件——先重構參與者面板和 ChatProvider，再於乾淨邊界上建構權限狀態模型",
      },
      {
        en: "Managed reactive state with MobX across RTC / attend / device SDK stores; wired WebSocket events through custom Providers and hooks to UI",
        "zh-TW": "使用 MobX 管理跨 RTC / attend / device SDK 的響應式狀態；透過自訂 Provider 和 hooks 將 WebSocket 事件串接到 UI",
      },
    ],
  },
  {
    when: "2024 — 2025",
    company: "WeHelp Bootcamp",
    url: "https://wehelp.tw/",
    logo: "assets/logo/wehelp.png",
    role: { en: "Full-stack training", "zh-TW": "全端培訓" },
    bullets: [
      {
        en: "Shipped Splitly as capstone — full-stack expense splitting app with three real-time split modes",
        "zh-TW": "以 Splitly 作為結業專案——全端分帳應用，具備三種即時分帳模式",
      },
      {
        en: "Six months intensive, from concept to cloud deployment across multiple projects",
        "zh-TW": "六個月密集訓練，從概念到雲端部署橫跨多個專案",
      },
    ],
    note: {
      en: "Career pivot: 3 years as product designer → full-stack intensive.",
      "zh-TW": "職涯轉向：三年產品設計師 → 全端密集訓練。",
    },
    moreNote: [
      "React · Next.js · FastAPI · PostgreSQL · AWS EC2 · Vercel · Firebase Auth",
      {
        en: "Unified data schema across individual splits, group splits, and repayments; TapPay payment and JWT auth",
        "zh-TW": "統一個人分帳、群組分帳與還款的資料結構；TapPay 金流與 JWT 身份驗證",
      },
      {
        en: "Lazy loading, skeleton animations, geolocation filtering within a fully responsive design system",
        "zh-TW": "延遲載入、骨架動畫、地理位置篩選，搭配完整的響應式設計系統",
      },
    ],
  },
  {
    when: "2022 — 2024",
    company: "AmazingTalker",
    url: "https://tw.amazingtalker.com/",
    logo: "assets/logo/at.png",
    role: { en: "Lead UI/UX Designer", "zh-TW": "首席 UI/UX 設計師" },
    bullets: [
      {
        en: "Led cart checkout redesign — +14% purchase conversion",
        "zh-TW": "主導購物車結帳重新設計——購買轉換率提升 14%",
      },
      {
        en: "Established company-wide Design Guideline, component library, and design processes",
        "zh-TW": "建立公司級 Design Guideline、元件庫與設計流程",
      },
    ],
    note: {
      en: "Industrial Design grad, NTUST — the start of the designer → engineer pipeline.",
      "zh-TW": "台科大工業設計畢業——設計師到工程師之路的起點。",
    },
    moreNote: [
      "Figma · Design Systems · UX Research · Responsive Design",
      {
        en: "Defined drop-off hypotheses with engineering, drove solution validation end-to-end for cart flow",
        "zh-TW": "與工程團隊定義流失假設，端對端推動購物車流程的方案驗證",
      },
      {
        en: "Assisted frontend in adopting microservices; defined design specs for customer-support, sales, and announcement systems",
        "zh-TW": "協助前端導入微服務架構；制定客服、銷售與公告系統的設計規格",
      },
    ],
  },
];
