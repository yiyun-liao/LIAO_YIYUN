import type { Demo, BodySection, CodeBlock } from "@/data/demos";

export const DARKMODESWITCHDEMO: Demo = {
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
      en: "A neumorphic toggle switch built with gradients, shadows, and carefully crafted transform effects to create a tactile, physical interaction.",
      "zh-TW": "利用漸層及陰影運用，以及適當的 `transform` 效果所設計的擬物化切換按鈕。",
    },
    emphasis: [
      {
        en: "Switch Animation — he button squashes horizontally when pressed, while a gradient knob springs across the track and smoothly transitions from a sun into a moon.",
        "zh-TW": "切換動畫 — 按壓時水平擠扁、漸層旋鈕彈跳過軌道，太陽在途中淡化成月亮",
      },
      {
        en: "Theme Engine — a single `.dms-dark` class swaps the entire color palette without re-rendering or JavaScript-based color calculations.",
        "zh-TW": "主題引擎 — 一個 `.dms-dark class` 就能換掉整套調色盤，不用重新渲染、不用 JS 算顏色",
      },
      {
        en: "Glow Effect — a blurred radial-gradient trail and halo follow the knob as it moves, automatically adapting to the active theme.",
        "zh-TW": "光暈效果 — 利用模糊的 `radial-gradient` 軌跡與光環跟著旋鈕移動，顏色隨主題自動配對",
      },
    ],
    motivation: {
      en: "Back when I was a designer, I used to joke with the engineers I worked with that I'd hand them the most absurdly over-specced switch component I could dream up. Their answer was always the same: go build it yourself, then. So when I sat down to actually start this project, that's exactly where I began.",
      "zh-TW":
        "還在做設計師的時候，我常跟前端工程師開玩笑說，總有一天要出一份誇張到不行的 switch 規格書整他們。他們的回答永遠一樣：那你自己做啊。所以這次真的要動手做點東西的時候，我就想，不然就從這顆 switch 開始吧。",
    },
    refs: [
      {
        label: "MDN — Using CSS custom properties",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
      },
      {
        label: "MDN — cubic-bezier() easing function",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier",
      },
      { label: "Neumorphism.io — shadow generator & reference", url: "https://neumorphism.io/" },
      { label: "31 CSS Toggle Switch Examples", url: "https://www.frontendplanet.com/css-toggle-switch-examples/" },
    ],
  },
};

export const DARKMODESWITCHDEMO_DATA: Demo[] = [DARKMODESWITCHDEMO];

export const SWITCH_ANIMATION_SECTION: BodySection = {
  title: { en: "Switch Animation", "zh-TW": "切換動畫" },
  content: {
    en: "The knob's color comes from a radial-gradient placed off-center at 38% 38% — warm sun-orange in light mode, cool blue in dark mode — so light reads as hitting from one side instead of sitting flat. Four box-shadow layers stack on top to fake depth: an outer pair for the floating look, an inset highlight for gloss, and a soft glow for ambient light. Press it and :active fires a horizontal scaleX(1.18) squash before cubic-bezier(0.34, 1.56, 0.64, 1) launches the knob to the other side with a slight overshoot — the bounce that makes it feel like a physical part instead of a sliding div. Under the hood it's a real switch, too: role=\"switch\", a visible focus-visible ring, and full keyboard support for free, since a native <button> already handles Space.",
    "zh-TW":
      '旋鈕的顏色來自一個刻意偏移到 38% 38% 的 radial-gradient——淺色模式是溫暖的太陽橘，深色模式轉為冷調藍——讓光線看起來是從一側打過來，而不是平貼在表面上。四層 box-shadow 疊出立體感：一組外陰影營造懸浮感、一層內陰影做出光澤高光、再加一層柔和光暈模擬環境光。按下去時，:active 先用水平 scaleX(1.18) 把旋鈕擠扁，接著由 cubic-bezier(0.34, 1.56, 0.64, 1) 把它彈到另一側、帶一點點過衝——這個彈跳感讓它像個實體零件，而不只是平移的 div。底層其實是貨真價實的 switch：role="switch"、清晰可見的 focus-visible 外框，而鍵盤空白鍵操作完全不用額外寫，因為原生 <button> 本來就支援。',
  },
};

export const SWITCH_ANIMATION_CODE_SECTION: CodeBlock = {
  codeType: `html`,
  code: `
              <button
                className="dms-switch"
                role="switch"
                aria-checked={dark}
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
              >
                <div className="dms-track-fill" />
                <div className="dms-glow" />
                <span className="dms-track-text day">Day</span>
                <span className="dms-track-text night">Night</span>
                <div className="dms-knob">
                  <div className="dms-icon">
                    <SunIcon />
                    <MoonIcon />
                  </div>
                </div>
              </button>
            `,
};

export const SWITCH_ANIMATION_CODE_A_SECTION: CodeBlock = {
  codeType: `css`,
  code: `
      .dms-switch {
        //...
        background: var(--neu-bg); //呈現出什麼效果
        box-shadow:
          6px 6px 14px var(--neu-shadow-dark), //呈現出什麼效果
          -6px -6px 14px var(--neu-shadow-light); //呈現出什麼效果
        transition: background 0.5s, box-shadow 0.5s; //呈現出什麼效果
      }
        .dms-switch:focus-visible {
        box-shadow:
          6px 6px 14px var(--neu-shadow-dark), //呈現出什麼效果
          -6px -6px 14px var(--neu-shadow-light), //呈現出什麼效果
          0 0 0 3px var(--neu-focus); //呈現出什麼效果
      }
      .dms-track-fill {
        //...
        background: linear-gradient(135deg, #1a2a5e 0%, #0d1535 100%);
        transition: opacity 0.5s;
      }
      .dms-knob {
        //...
        background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020); //呈現出什麼效果
        box-shadow:
          4px 4px 10px rgba(0, 0, 0, 0.18), //呈現出什麼效果
          -2px -2px 7px rgba(255, 255, 255, 0.85), //呈現出什麼效果
          inset 1px 1px 3px rgba(255, 210, 100, 0.6), //呈現出什麼效果
          0 0 18px rgba(255, 150, 40, 0.4); //呈現出什麼效果
        transition:
          left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), //呈現出什麼效果
          background 0.5s, box-shadow 0.5s; //呈現出什麼效果
      }
      .dms-switch:active .dms-knob {
        transform: translateY(-50%) scaleX(1.18); //呈現出什麼效果
      } 
      .dms-knob::before {
        content: "";
        position: absolute;
        inset: -10px;
        border-radius: 50%;
        z-index: -1;
        background: radial-gradient(circle, rgba(var(--neu-glow), 0.5) 0%, rgba(var(--neu-glow), 0) 70%);
        filter: blur(4px);
        transition: background 0.5s;
      }         
    `,
};

export const CSS_THEME_SECTION: BodySection = {
  title: { en: "CSS Custom-Property Theming", "zh-TW": "CSS 自訂屬性主題" },
  content: {
    en: "This project's real focus is the switch, but it doesn't stop there — it ships a full token-based theme system, the kind of infrastructure I never had the runway to build properly in past projects. .dms-scene defines 14 CSS custom properties for the light palette; .dms-dark overrides every single one for dark. Flip a boolean in React, toggle the class, and the cascade does the rest — every card, shadow, and label transitions in place because they're all reading from the same set of tokens, not hardcoded values.",
    "zh-TW":
      "這個專案的主角雖然是切換開關，但做的事不只如此——它順手建了一套完整的 token 主題系統，這種基礎設施在過去的專案裡常常因為時間壓力被擱置。.dms-scene 為淺色調色盤定義了 14 個 CSS 自訂屬性；.dms-dark 則把每一個都覆寫成深色版本。React 端只要切換一個布林值、掛上 class，剩下的交給 CSS cascade——每張卡片、每道陰影、每個標籤都會原地過渡，因為它們讀的都是同一組 token，而不是寫死的數值。",
  },
};

export const CSS_THEME_CODE_SECTION: CodeBlock = {
  codeType: `css`,
  code: `.dms-scene {
--neu-bg: #e0e5ec;
--neu-shadow-dark: #b8bec7;
--neu-shadow-light: #ffffff;
--neu-surface: #d4d9e2;
--neu-text-heading: #4a5060;
--neu-accent: #8a95a8;
/* … 14 tokens total */
}

.dms-dark {
--neu-bg: #1a1f2e;
--neu-shadow-dark: #0d1017;
--neu-shadow-light: #272d3f;
--neu-surface: #232a3c;
--neu-text-heading: #c0cce0;
--neu-accent: #6080f8;
}`,
};

export const GLOW_EFFECT_SECTION: BodySection = {
  title: { en: "Glow Effect", "zh-TW": "光暈效果" },
  content: {
    en: "A flat toggle would've worked fine. But I kept coming back to UI that looks clean on the surface while something glows quietly underneath — depth without clutter. The knob carries two separate glow layers: .dms-glow is a blurred radial-gradient div riding the same track as the knob, and .dms-knob::before is a tighter halo sitting directly behind it via a negative z-index. Both pull their color from one shared token, --neu-glow, stored as a raw RGB triplet instead of a hex string specifically so it can drop into rgba() at different opacities. Flip the theme and both layers shift from warm orange to cool blue for free.",
    "zh-TW":
      "純粹的平面切換開關也能用，但我一直很喜歡那種表面乾淨、底下卻悄悄發著光的介面——有層次但不雜亂。旋鈕身上疊了兩層光暈：.dms-glow 是用 radial-gradient 加 blur 做出的 div，跟著旋鈕在軌道上移動；.dms-knob::before 則是緊貼在旋鈕正後方、用負 z-index 卡位的小光環。兩者顏色都來自同一個 token——--neu-glow，刻意存成 RGB 三元組而不是 hex 字串，這樣才能直接丟進不同透明度的 rgba() 裡用。切換主題的瞬間，這兩層光暈就跟著從暖橘變成冷藍，完全不用額外寫邏輯。",
  },
};

export const GLOW_EFFECT_CODE_SECTION: CodeBlock = {
  codeType: `css`,
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
};

export const NEUMORPHIC_SECTION: BodySection = {
  title: { en: "Neumorphic Surface Details", "zh-TW": "擬物化表面細節" },
  content: {
    en: "Most of the tactile feel in this scene comes down to which direction the shadows fall. An inset box-shadow pair from two opposite corners reads as a surface pressed in — that's .neu-card, used for the text block. Flip the same pair to outer shadows and the surface reads as raised — that's .neu-raised, used for the icon tiles. The icon tiles go a step further with three states layered on top: hover lifts the tile and swaps in a colored glow, active presses it back down with an inset version of that same glow, and focus-visible adds a ring so keyboard users aren't left guessing what's selected.",
    "zh-TW":
      "這個場景裡大部分的觸感都取決於陰影的方向。從兩個相反角落打出的 inset box-shadow 組合，看起來就像表面被壓進去——這是 .neu-card，用在文字區塊上。把同一組陰影改成外陰影，表面就變成凸起的——這是 .neu-raised，用在圖示磚塊上。圖示磚塊還疊了三種狀態：hover 時浮起並換上有色光暈、active 時用同一個光暈的 inset 版本把它按下去、focus-visible 則加上一圈外框，讓用鍵盤操作的人不會搞不清楚目前選到哪一個。",
  },
};

export const NEUMORPHIC_CODE_SECTION: CodeBlock = {
  codeType: `css`,
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
};
