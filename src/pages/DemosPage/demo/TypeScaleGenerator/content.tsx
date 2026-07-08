import type { Demo } from "@/data/demos";

export const TYPESCALEGENERATOR: Demo = {
  date: "2026-07-08",
  title: { en: "Type Scale Generator", "zh-TW": "字級比例產生器" },
  description: {
    en: "Modular scale generator with live preview, ratio presets, and CSS output.",
    "zh-TW": "模組化字級比例產生器，即時預覽、比例預設與 CSS 輸出。",
  },
  type: ["design"],
  tags: ["Typography", "CSS", "Design Tool"],
  url: "/demos/type-scale-generator",
  introduction: {
    outline: {
      en: "A modular type-scale generator with sidebar controls and a live preview panel. Supports 8 musical-interval ratio presets, custom ratios, and bidirectional base-size input. Outputs copyable CSS custom properties.",
      "zh-TW": "模組化字級比例產生器，側邊控制面板搭配即時預覽。支援 8 種音程比例預設、自訂比例與雙向同步的基礎字級輸入，輸出可複製的 CSS 自訂屬性。",
    },
  },
};

export const TYPESCALEGENERATOR_DATA: Demo[] = [TYPESCALEGENERATOR];
