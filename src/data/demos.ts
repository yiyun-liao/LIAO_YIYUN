import type { L } from "@/i18n/types";

export type DemoType = "codepen" | "article" | "demo" | "experiment";

export interface BodySection {
  title: L;
  content: L;
  code?: string;
}

export interface Reference {
  label: string;
  url: string;
}

export interface Introduction {
  outline?: L;
  emphasis?: L[];
  sections?: BodySection[];
  motivation?: L;
  refs?: Reference[];
}

export interface CodeEmbed {
  sandboxId: string;
  view?: "editor" | "split" | "preview";
}

export interface Demo {
  date: string;
  title: L;
  description: L;
  type: DemoType;
  tags: string[];
  url: string;
  image?: string;
  introduction?: Introduction;
  codeEmbed?: CodeEmbed;
}

export const DEMOS: Demo[] = [
  {
    date: "2026-06-22",
    title: { en: "Dark Mode Switch", "zh-TW": "深色模式切換" },
    description: {
      en: "Neumorphic toggle with CSS custom-property theming, knob glow.",
      "zh-TW": "擬物化切換開關，搭配 CSS 自訂屬性主題與旋鈕光暈效果。",
    },
    type: "demo",
    tags: ["React", "CSS", "A11y"],
    url: "/demos/dark-mode-switch",
    codeEmbed: { sandboxId: "wqn6nn" },
    introduction: {
      outline: {
        en: "A neumorphic dark-mode toggle that drives an entire light/dark theme through CSS custom properties.",
        "zh-TW": "一個擬物化深色模式切換開關，透過 CSS 自訂屬性驅動整套明暗主題。",
      },
      emphasis: [
        {
          en: "Switch Animation — press deformation, gradient knob, and sun/moon icon crossfade",
          "zh-TW": "切換動畫 — 按壓變形、漸層旋鈕、太陽/月亮圖示交叉淡入",
        },
        {
          en: "CSS Custom-Property Theming — 15+ tokens swap palettes in one class toggle",
          "zh-TW": "CSS 自訂屬性主題 — 15+ 個 token 透過一個 class 切換完成調色盤交換",
        },
        {
          en: "Glow Effect — radial-gradient trail and halo that follow the knob",
          "zh-TW": "光暈效果 — 跟隨旋鈕的 radial-gradient 軌跡與光環",
        },
      ],
      sections: [
        {
          title: { en: "Switch Animation", "zh-TW": "切換動畫" },
          content: {
            en: "The knob uses a radial-gradient to create a sun-to-orange gradient in light mode and a blue gradient in dark mode. Multiple layers of box-shadow add depth: outer shadow for floating, inner shadow (inset) for a glossy highlight, and a glow shadow for ambient light. On press, CSS :active applies scaleX(1.18) to squish the knob horizontally before it springs to the other side via cubic-bezier(0.34, 1.56, 0.64, 1). The switch also supports keyboard Space and has a visible focus-visible ring.",
            "zh-TW":
              "旋鈕使用 radial-gradient 在淺色模式中呈現太陽橘色漸層，在深色模式中呈現藍色漸層。多層 box-shadow 增加深度：外陰影營造懸浮感、內陰影（inset）營造光澤高光、光暈陰影營造環境光。按壓時，CSS :active 透過 scaleX(1.18) 水平擠壓旋鈕，再藉由 cubic-bezier(0.34, 1.56, 0.64, 1) 彈跳到另一側。同時支援鍵盤空白鍵操作及可見的 focus-visible 外框。",
          },
          code: `.dms-knob {
  background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020);
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.18),
    -2px -2px 7px rgba(255, 255, 255, 0.85),
    inset 1px 1px 3px rgba(255, 210, 100, 0.6),
    0 0 18px rgba(255, 150, 40, 0.4);
  transition:
    left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s, box-shadow 0.5s;
}

.dms-switch:active .dms-knob {
  transform: translateY(-50%) scaleX(1.18);
}`,
        },
        {
          title: { en: "CSS Custom-Property Theming", "zh-TW": "CSS 自訂屬性主題" },
          content: {
            en: "Although this project is about the switch itself, it also builds a full token-based theme system — something I hadn't prioritized in previous work due to time and iteration costs. The .dms-scene element defines 15+ CSS custom properties for the light palette; .dms-dark overrides every token for the dark palette. A single React state toggle adds or removes the class, and every element in the scene transitions smoothly because they all reference the same tokens.",
            "zh-TW":
              "雖然這個專案的主角是切換開關，但同時也建構了一套完整的 token 主題系統——這是我在之前的工作中因為時間和迭代成本而沒有處理過的。.dms-scene 元素定義了 15+ 個 CSS 自訂屬性作為淺色調色盤；.dms-dark 覆寫所有 token 為深色調色盤。一個 React state 切換就能增減 class，場景中的所有元素都因為引用相同 token 而平滑過渡。",
          },
          code: `.dms-scene {
  --neu-bg: #e0e5ec;
  --neu-shadow-dark: #b8bec7;
  --neu-shadow-light: #ffffff;
  --neu-surface: #d4d9e2;
  --neu-text-heading: #4a5060;
  --neu-accent: #8a95a8;
  /* … 15+ tokens */
}

.dms-dark {
  --neu-bg: #1a1f2e;
  --neu-shadow-dark: #0d1017;
  --neu-shadow-light: #272d3f;
  --neu-surface: #232a3c;
  --neu-text-heading: #c0cce0;
  --neu-accent: #6080f8;
}`,
        },
        {
          title: { en: "Glow Effect", "zh-TW": "光暈效果" },
          content: {
            en: "I was drawn to designs that feel clean yet layered — a soft glow behind an element can add depth without visual clutter. The knob has two glow layers: a .dms-glow div that follows it across the track using a radial-gradient with filter: blur(8px), and a ::before pseudo-element halo sitting right behind the knob. Both use the --neu-glow token (an RGB triplet) so the color shifts from warm orange to cool blue along with the theme.",
            "zh-TW":
              "我被那種乾淨又有層次感的設計所吸引——元素背後的柔和光暈能增加深度而不造成視覺雜亂。旋鈕有兩層光暈：一個 .dms-glow div 透過 radial-gradient 搭配 filter: blur(8px) 跟隨旋鈕移動，以及一個 ::before 偽元素光環緊貼在旋鈕後方。兩者都使用 --neu-glow token（RGB 三元組），因此顏色會隨主題從暖橘轉為冷藍。",
          },
          code: `.dms-glow {
  background: radial-gradient(
    circle,
    rgba(var(--neu-glow), 0.6) 0%,
    rgba(var(--neu-glow), 0) 75%
  );
  filter: blur(8px);
  transition: left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              background 0.5s;
}

.dms-knob::before {
  background: radial-gradient(
    circle,
    rgba(var(--neu-glow), 0.5) 0%,
    rgba(var(--neu-glow), 0) 70%
  );
  filter: blur(4px);
}`,
        },
        {
          title: { en: "Neumorphic Surface Details", "zh-TW": "擬物化表面細節" },
          content: {
            en: "This project uses a lot of background and box-shadow fine-tuning to create tactile surfaces. Inset shadows (inset box-shadow from two opposite directions) make elements look pressed into the surface — used on the text card (.neu-card). Outer shadows from two opposite directions make elements look raised above the surface — used on the icon gallery tiles (.neu-raised). The icon tiles also have hover (lift + glow), active (press-in with inset glow), and focus-visible states.",
            "zh-TW":
              "這個專案大量使用 background 和 box-shadow 的微調來創造有觸感的表面。內陰影（從兩個相反方向的 inset box-shadow）讓元素看起來凹陷進表面——用於文字卡片（.neu-card）。從兩個相反方向的外陰影讓元素看起來凸出表面——用於圖示排列的磚塊（.neu-raised）。圖示磚塊還具有 hover（浮起 + 光暈）、active（按入 + 內光暈）和 focus-visible 狀態。",
          },
          code: `/* Pressed-in surface */
.neu-card {
  box-shadow:
    inset 2px 2px 5px var(--neu-surface-inset-dark),
    inset -2px -2px 5px var(--neu-surface-inset-light);
}

/* Raised surface */
.neu-raised {
  box-shadow:
    3px 3px 8px var(--neu-shadow-dark),
    -3px -3px 8px var(--neu-shadow-light);
}

/* Hover — lift + glow */
.neu-raised:hover {
  transform: translateY(-2px);
  box-shadow:
    5px 5px 24px rgba(var(--neu-glow), 0.6),
    -5px -5px 24px rgba(var(--neu-glow), 0.22);
}`,
        },
      ],
      motivation: {
        en: "Back when I was a designer, I used to joke with frontend engineers that I'd spec out the most ridiculously complex switch. They'd always say — go ahead, build it yourself. So when I started this project, I thought: why not begin right there.",
        "zh-TW":
          "當設計師時還會跟前端工程師開玩笑說我要出超級複雜的 switch spec，那時候他們會接著說請我自己做。所以在開始進行這個計畫時就想說，那就以這個為開頭吧。",
      },
      refs: [],
    },
  },
];
