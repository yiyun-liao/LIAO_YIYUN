import { type ReactNode } from "react";

interface ExperienceRow {
  when: string;
  company: string;
  url:string;
  logo:string;
  role: string;
  bullets: string[];
  note: ReactNode;
  moreNote: string[];
}

export const EXPERIENCE: ExperienceRow[] = [
  {
    when: "2025.08 — 2026.03",
    company: "AmazingTalker",
    url:"https://tw.amazingtalker.com/",
    logo:"assets/logo/at.png",
    role: "Front-End Engineer",
    bullets: [
      "Shipped screen-share permission control, stream reactions, and Electron desktop features end-to-end",
      "Owned meeting-state consistency across SDK layers — mute, camera, and role transitions behaved reliably",
    ],
    note: "VCaaS real-time classroom · returned as engineer after 2+ yrs as designer.",
    moreNote: [
      "React · TypeScript · MobX · WebRTC / TRTC · NX monorepo",
      "Decomposed PM requirements into ordered prerequisites — refactored participant panel and ChatProvider first, then built permission-state model on clean boundaries",
      "Managed reactive state with MobX across RTC / attend / device SDK stores; wired WebSocket events through custom Providers and hooks to UI",
    ],
  },
  {
    when: "2024 — 2025",
    company: "WeHelp Bootcamp",
    url:"https://wehelp.tw/",
    logo:"assets/logo/wehelp.png",
    role: "Full-stack training",
    bullets: [
      "Shipped Splitly as capstone — full-stack expense splitting app with three real-time split modes",
      "Six months intensive, from concept to cloud deployment across multiple projects",
    ],
    note: "Career pivot: 3 years as product designer → full-stack intensive.",
    moreNote: [
      "React · Next.js · FastAPI · PostgreSQL · AWS EC2 · Vercel · Firebase Auth",
      "Unified data schema across individual splits, group splits, and repayments; TapPay payment and JWT auth",
      "Lazy loading, skeleton animations, geolocation filtering within a fully responsive design system",
    ],
  },
  {
    when: "2022 — 2024",
    company: "AmazingTalker",
    url:"https://tw.amazingtalker.com/",
    logo:"assets/logo/at.png",
    role: "Lead UI/UX Designer",
    bullets: [
      "Led cart checkout redesign — +14% purchase conversion",
      "Established company-wide Design Guideline, component library, and design processes",
    ],
    note: "Industrial Design grad, NTUST — the start of the designer → engineer pipeline.",
    moreNote: [
      "Figma · Design Systems · UX Research · Responsive Design",
      "Defined drop-off hypotheses with engineering, drove solution validation end-to-end for cart flow",
      "Assisted frontend in adopting microservices; defined design specs for customer-support, sales, and announcement systems",
    ],
  },
];
