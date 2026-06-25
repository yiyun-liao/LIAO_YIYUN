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
  codeEmbed: { sandboxId: "skjy6h" },
  introduction: {
    outline: {
      en: "A neumorphic toggle switch built with gradients, shadows, and carefully crafted transform effects to create a tactile, physical interaction.",
      "zh-TW": "利用漸層及陰影運用，以及適當的 `transform` 效果所設計的擬物化切換按鈕。",
    },
    emphasis: [
      {
        en: "Switch Animation — the knob squashes horizontally on press, springs back across the track with a slight overshoot, and crossfades from a sun into a moon along the way.",
        "zh-TW": "切換動畫 — 按壓時旋鈕水平擠扁、帶著一點過衝彈跳過軌道，途中太陽淡化成月亮",
      },
      {
        en: "Theme Engine — flipping a single class swaps the entire color palette through CSS variables alone, no re-render and no JavaScript color math.",
        "zh-TW": "主題引擎 — 切換一個 class 就能透過 CSS 變數換掉整套調色盤，不需要重新渲染、也不用 JS 算顏色",
      },
      {
        en: "Glow Effect — a blurred radial-gradient trail and halo ride along with the knob, shifting color automatically as the theme changes.",
        "zh-TW": "光暈效果 — 模糊的 radial-gradient 軌跡與光環跟著旋鈕移動，顏色隨主題自動切換",
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
  title: { en: "Anatomy of the Switch", "zh-TW": "按鈕拆解" },
  content: {
    en: "At its core, the entire toggle is just a `<button>`: `role=\"switch\"`. Reaching for a native `<button>` instead of a `div` with a click handler means keyboard support — Space toggles it, no extra code required — and correct screen-reader semantics.\nInside that button, four layers stack on top of each other, each doing exactly one job.\n1️⃣ At the very bottom sits `.dms-track-fill`, a deep-blue gradient covering the whole track at zero opacity by default, fading in only once `.dms-dark` is applied — it's what quietly swaps the daytime track for a night-sky backdrop.\n2️⃣ Above it is `.dms-glow`, the halo trailing behind the knob. It lives as its own element rather than inside `.dms-knob` specifically because its position is calculated as a percentage of the switch's own top-left and bottom-right corners — nested inside the knob, it would inherit the knob's local coordinate space and lose that alignment.\n3️⃣ Next come the two `.dms-track-text` labels, Day and Night, toggled via `opacity`.\n4️⃣  And only at the very top sits the circular `.dms-knob` itself. So, nothing underneath ever gets visually blocked.",
    "zh-TW":
      "整顆切換開關說到底就是一個 `<button>`：`role=\"switch\"`、`aria-checked={dark}`、`aria-label=\"Toggle dark mode\"`，再用一個 `onClick` 把 `dark` 這個布林值反過來。用原生 `<button>` 而不是隨便一個 `div` 加 `onClick`（Space 直接觸發，不用額外寫程式），螢幕閱讀器也會正確念出『切換開關，已選取／未選取』。\n按鈕裡面疊了四層各司其職的子元素，由下往上分別是：\n1️⃣ 最底層的 `.dms-track-fill`，dark mode 時整片的深藍漸層，預設透明度是 0，只有切到 `.dms-dark` 才會淡入，負責把白天的淺色軌道悄悄換成夜空般的深色背景。\n2️⃣ 再上面是 `.dms-glow`，旋鈕身後那圈會移動的光暈，它特地獨立成一層、不直接做在 `.dms-knob` 裡面，是因為它的位置是用相對於整個 switch 左上角／右下角的百分比去定位的，如果放進旋鈕內部就會被旋鈕自己的座標系統綁住，沒辦法用同一套百分比對齊軌道兩端。\n3️⃣ 再上面是兩個 `.dms-track-text`，分別寫著 Day 和 Night，靠 `opacity` 切換顯示哪一個；\n4️⃣ 最上層才是真正會移動的圓形 `.dms-knob` 本體。避免視覺上才不會互相遮擋。",
  },
};

export const SWITCH_ANIMATION_CODE_SECTION: CodeBlock = {
  codeType: `tsx`,
  code: `
              <button 
                className="dms-switch"
                role="switch"
                aria-checked={dark}
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
              >
                <div className="dms-track-fill" /> //1️⃣ 
                <div className="dms-glow" /> //2️⃣
                <span className="dms-track-text day">Day</span> //3️⃣ 
                <span className="dms-track-text night">Night</span> //3️⃣ 
                <div className="dms-knob"> //4️⃣
                  <div className="dms-icon">
                    <SunIcon />
                    <MoonIcon />
                  </div>
                </div>
              </button>
            `,
};

export const CSS_THEME_SECTION: BodySection = {
  title: { en: "CSS Custom-Property Theming", "zh-TW": "CSS 自訂屬性主題" },
  content: {
    en: "The real star of this project is the switch, but along the way it also picked up a full theming system — the kind of infrastructure that usually gets cut from past projects under time pressure, so this time it got finished properly.\n1️⃣ The approach is simple: `.dms-scene`, the outermost wrapper, defines custom properties as the light palette, and `.dms-dark` redefines that exact same set of variable names with a dark set of values. In other words, the only real difference between light and dark is which values a shared set of variables happens to hold.\nThat keeps the React side almost trivially simple: flip a `dark` boolean, decide whether to attach the `dms-dark` class, and hand the rest off to the CSS cascade.\n2️⃣ But swapping a variable's value doesn't, on its own, produce an animation — a CSS custom property's value changes instantly, with no interpolation. What actually makes the color look like it's fading is a separate `transition` declared on whichever element consumes that variable. `.dms-switch`, for instance, explicitly sets `transition` so its background and shadow cross-fade together over that half-second window. That's the part of this system that's easiest to forget and most important to get right: every themed element has to opt into its own `transition`, or the color change will snap instead of fade.",
    "zh-TW":
      "這個專案的主角雖然是切換開關，但同時也一併建了一套完整的主題系統——這種基礎設施在過去的專案裡常常因為時間壓力被擱置，這次乾脆把它做完整。\n1️⃣ 作法很單純：`.dms-scene` 這個最外層的容器先定義了多個 CSS 自訂屬性，當作淺色模式的調色盤；`.dms-dark` 這個 class 則把同一組變數名稱、全部重新覆寫成深色版本的數值。換句話說，明暗主題真正的差異只在於『同一批變數被指定了哪一組數值』，元件本身完全不需要知道自己現在是淺色還是深色。\nReact 那一端因此也變得很輕：只要切換 `dark` 這個布林值，決定要不要把 `dms-dark` 這個 class 名稱掛上去，剩下的全部交給 CSS cascade 去處理，而不是寫死在各自規則裡的色碼。\n2️⃣ 但只有換變數的數值，畫面的數值改變是瞬間生效的；真正讓顏色看起來慢慢變化的，是另外加在每個會用到這些變數的元素上的 `transition`——像 `.dms-switch` 讓底色跟陰影在主題切換的那 0.5 秒裡同步淡入淡出。這也是這套主題系統最容易被忽略、卻最關鍵的一步：每一個會隨主題變色的元件，都要自己宣告該對哪些屬性做 `transition`，否則畫面就會用『跳』的方式換色，而不是『淡』過去。",
  },
};

export const CSS_THEME_CODE_HTML_SECTION: CodeBlock = {
  codeType: "tsx",
  code: [
    '    <div"className={`dms-scene${dark ? " dms-dark" : ""}`}> ',
    "      {/* ... */}",
    "    </div>",
  ].join("\n"),
};

export const CSS_THEME_CODE_SECTION: CodeBlock = {
  codeType: `css`,
  code: `.dms-scene {
--neu-bg: #e0e5ec;
--neu-shadow-dark: #b8bec7;
--neu-shadow-light: #ffffff;
/* …  */
}

.dms-dark {
--neu-bg: #1a1f2e;
--neu-shadow-dark: #0d1017;
--neu-shadow-light: #272d3f;
/* …  */

.dms-switch {
        //...
  background: var(--neu-bg); //1️⃣ 變換顏色
  transition: background 0.5s, box-shadow 0.5s; //2️⃣ 主題切換時底色與陰影同步漸變
}
}`,
};

export const GLOW_EFFECT_SECTION: BodySection = {
  title: { en: "Glow Effect", "zh-TW": "光暈效果" },
  content: {
    en: "Beyond the tactile, neumorphic feel, the other thing this project leans on is glow — I've always liked interfaces that look clean on the surface while something glows quietly underneath, layered without ever feeling cluttered.\n1️⃣  `.dms-glow` itself is really just a `div` built from a `radial-gradient` with concentric color stops, blurred at the edges.\n2️⃣  The color of that glow comes from a single token, `--neu-glow`, but instead of the usual hex string, it's stored as a plain RGB triplet (`251, 191, 64`, for example) specifically so it can drop straight into `rgba(var(--neu-glow), 0.6)` and have its opacity adjusted freely at each layer — a hex string wouldn't let you stack different opacities on top of the same variable. Because that same token gets reassigned a different set of numbers under `.dms-dark`, the moment the theme flips, the glow shifts from warm orange to cool blue automatically, with zero extra color logic in JavaScript.\n3️⃣ Positioning `.dms-glow` itself relies on a pattern that shows up constantly in CSS: `position: absolute` paired with a percentage-based `top` and `left`, then `transform: translate(-50%, -50%)` to pull the anchor point back from the default top-left corner to the element's own center — that way, changing `top` and `left` moves the center of the glow rather than its corner, which matches how you'd intuitively expect it to behave. Flip to dark mode and `top`/`left` jump from `10%` to `90%`, and the whole glow rides along with the knob to the other end of the track.\n4️⃣ And it's worth not overlooking that `.dms-glow` declares its own `transition` without which both the movement and the color change would snap instantly; the bounce and the fade you actually see both come from that one line.",
    "zh-TW":
      "這個專案除了擬物化的觸感之外，另一個重點是光暈——我一直很喜歡那種表面看起來乾淨、底下卻悄悄透出一層光的介面，有層次但不會顯得雜亂。\n1️⃣ `.dms-glow` 整個效果其實就是一個用 `radial-gradient` 疊出同心圓漸層、再加上 `blur` 模糊邊緣的 `div`。\n2️⃣ 決定這圈光暈顏色的是 `--neu-glow` 這個 token，但它存的不是平常習慣的 hex 色碼，而是單純一組 RGB 三元組（例如 `251, 191, 64`），這樣才能直接套進 `rgba(var(--neu-glow), 0.6)` 這種寫法、自由控制每一層的透明度——如果存成 hex 字串，就沒辦法在同一個變數上疊不同的透明度。也因為這個 token 在 `.dms-dark` 底下被重新指定成另一組數值，主題切換的那一刻，這圈光暈就自動從暖橘色變成冷藍色，完全不需要為了配色另外寫 JS 邏輯。\n3️⃣ `.dms-glow` 本身的定位用的是一個很常見的組合：`position: absolute` 加上 `top`、`left` 設一個百分比，再用 `transform: translate(-50%, -50%)` 把錨點從預設的左上角重新拉回中心點，這樣後面只要改 `top` / `left` 的數值，移動的就會是『中心』而不是『邊角』，定位起來才符合直覺；深色模式底下把 `top` / `left` 從 `10%` 改成 `90%`，整圈光暈就會跟著旋鈕一起跑到軌道的另一端。\n4️⃣ 最後 `.dms-glow` 自己也宣告了 `transition` ，沒有這行光暈的位移跟變色都會是瞬間跳過去。",
  },
};

export const GLOW_EFFECT_CODE_SECTION: CodeBlock = {
  codeType: `css`,
  code: `

  .dms-scene {
        //...
  --neu-glow: 251, 191, 64; //2️⃣ 僅 RGB 三元組
}
  .dms-dark {
        //...
  --neu-glow: 96, 128, 248; //2️⃣ 僅 RGB 三元組
}
  .dms-glow {
        //...
          position: absolute; //3️⃣ 
  top: 10%; //3️⃣ 
  left: 10%; //3️⃣ 
  transform: translate(-50%, -50%); //3️⃣  以自身中心點為錨點定位

  background: radial-gradient( 
    circle, //1️⃣  圓形擴散
    rgba(var(--neu-glow), 0.6) 0%, // 1️⃣ 中心最亮的光暈色
    rgba(var(--neu-glow), 0.22) 45%, // 1️⃣ 中段半透明擴散
    rgba(var(--neu-glow), 0) 75% // 1️⃣ 邊緣完全透明，自然消散
  );
  filter: blur(8px); // 1️⃣ 模糊化讓光暈邊緣柔和
  transition: left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.5s; //4️⃣ 光暈跟著旋鈕彈跳移動
}
.dms-dark .dms-glow {
  top:90%; // 深色模式時光暈移到軌道右下
  left: 90%; // 跟著旋鈕到右側位置
}
  `,
};

export const KNOB_EFFECT_SECTION: BodySection = {
    title: { en: "The Knob Itself", "zh-TW": "旋鈕本體" },
    content: {
      en: "What actually decides what the knob feels like it's made of is the 1️⃣ background: `radial-gradient` deliberately pushes its light source off-center to `38% 38%`, simulating something lit from one side rather than a flat, lightless color swatch.The sense of depth comes from four `box-shadow` layers stacked together.\n2️⃣ `left` animates over `0.45s` with `cubic-bezier` for a bounce with a slight overshoot, `transform` rides the same curve to squash in sync, and `background` and `box-shadow` each cross-fade their colors over `0.5s`. Stack all four transitions together and the knob reads as something with weight that springs into place, rather than a sprite that snaps from one side to the other.\n3️⃣ Flip to dark mode and the exact same set of properties gets repainted in cool blue.\n4️⃣ The instant you press it, `:active` layers on an additional `scaleX(1.18)`, squashing the knob horizontally to simulate the feel of a finger pressing down.\n5️⃣ And finally, `.dms-knob::before` is the small halo sitting directly behind the knob and it carries its own `transition` so that this close-in halo fades its color in step with everything else during a theme switch.",
      "zh-TW":
        "決定它『看起來像什麼材質』的是 1️⃣  `background：radial-gradient` 把光源點刻意偏到左上角的，而不是均勻無光源的平面色塊。立體感則交給四層疊在一起的 `box-shadow`。\n2️⃣ `left` 用 `0.45s` 的 `cubic-bezier` 做出帶過衝的彈跳位移，`transform` 用同一條曲線同步做擠壓變形，`background` 跟 `box-shadow` 則各自用 `0.5s` 慢慢淡換顏色，四個 `transition` 疊在一起，才會看起來像一顆有重量、會彈一下的實體零件，而不是貼圖瞬間跳到另一邊。\n3️⃣ 切到深色模式之後，同一組設定全部重新填上冷藍色版本。\n4️⃣ 按下去的瞬間，`:active` 額外疊上一個 `scaleX(1.18)`，把旋鈕水平擠扁，模擬手指按壓的回饋感。\n5️⃣ 最後，`.dms-knob::before` 是緊貼在旋鈕正後方，而它自己也掛著 `transition`，確保主題切換時這圈貼著旋鈕的光環也會跟著一起慢慢變色。",
    },
  };
  
  export const KNOB_EFFECT_CODE_SECTION: CodeBlock = {
    codeType: `css`,
    code: `
.dms-knob {
        //...
  transform: translateY(-50%); // 垂直置中在軌道內
  border: 0.2px solid rgba(255, 150, 40, 0.4); // 極細暖橘邊框，增加邊緣清晰度
  background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020); //1️⃣ 偏左上的太陽橘漸層，模擬單側光源
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.18), // 右下落地陰影，讓旋鈕浮起
    -2px -2px 7px rgba(255, 255, 255, 0.85), // 左上亮面反光，立體感
    inset 1px 1px 3px rgba(255, 210, 100, 0.6), // 內側高光，玻璃質感
    0 0 18px rgba(255, 150, 40, 0.4); // 外圈暖色散射光暈
  transition: //2️⃣ 
    left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), //位移帶過衝彈跳
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), //變形同步彈跳
    background 0.5s, // 漸層顏色柔和過渡
    box-shadow 0.5s; // 陰影顏色柔和過渡
}
.dms-dark .dms-knob { //3️⃣ 
  border: 0.2px solid rgba(60, 100, 255, 0.5); // 冷藍邊框，配合深色主題
  background: radial-gradient(circle at 38% 38%, #6080f8, #1a30c0); // 藍色月光漸層
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.45), // 更深的落地陰影（暗色背景需要更重）
    -2px -2px 7px rgba(60, 80, 180, 0.25), // 冷藍反光
    inset 1px 1px 3px rgba(120, 150, 255, 0.5), // 藍色內側高光
    0 0 20px rgba(60, 100, 255, 0.5); // 藍色外圈散射光暈
}
.dms-switch:active .dms-knob {
  transform: translateY(-50%) scaleX(1.18); //4️⃣ 按壓時水平擠扁，模擬按壓回饋
}

.dms-knob::before { //5️⃣ 旋鈕正後方的近距離光環
        //...
  inset: -10px; // 向外擴張 10px，比旋鈕本體大一圈
  background: radial-gradient(circle, rgba(var(--neu-glow), 0.5) 0%, rgba(var(--neu-glow), 0) 70%); // 從中心向外消散的光環
  filter: blur(4px); // 輕微模糊，讓光環邊緣自然
  transition: background 0.5s; // 主題切換時光環顏色漸變
}
    `,
  };


export const NEUMORPHIC_SECTION: BodySection = {
  title: { en: "Neumorphic Surface Details", "zh-TW": "擬物化表面細節" },
  content: {
    en: "Most of the tactile feel in this scene comes down to nothing more than which direction the shadows fall.\n1️⃣ Firing an `inset box-shadow` from two opposite corners at once — a dark shadow on one side, a light highlight on the other — reads as a surface that's been pressed inward, and that's exactly what `.neu-card` uses for the text block; its background is also deliberately a shade darker than the scene's base color, which deepens that sunken look.\n2️⃣ Flip the same pair of shadows to point outward from two opposite corners instead, and the surface reads as raised rather than pressed in — that's `.neu-raised` used on the icon tiles.\n3️⃣ Those icon tiles then layer three separate interaction states on top, each doing something different: on `hover`, an intentional imbalance meant to read as light hitting from one direction.\n4️⃣ On `active`, the element settles back toward its resting position while the whole shadow set flips to its `inset` version, so it genuinely looks pressed into the surface.\n5️⃣ And `focus-visible` simply layers an outline ring on top while leaving the shadow direction untouched — purely so that anyone navigating by keyboard, without a mouse to show where the cursor is, can still see exactly which tile currently has focus.",
    "zh-TW":
      "這個場景裡，大部分的觸感其實都只取決於陰影打的方向。\n1️⃣ `.neu-card` 從兩個相反角落同時打出 `inset box-shadow`——一邊往內陰影、一邊往內亮面——看起來就會像表面被『壓』進去一塊，背景色也特意比場景底色更深一階，加深那種凹陷感。\n2️⃣ 把同一組陰影方向反過來，改成從兩個相反角落打出去的外陰影，表面就會反過來讀成『凸』起來的，這是 `.neu-raised` 用在圖示上的版本。\n3️⃣ 圖示上又疊了三種互動狀態，各自做不同的事：`hover` 故意做出不對稱才會有光從一側打過來的感覺。\n4️⃣ `active` 按下去的時候，元素縮小並退回原位，陰影也整組換成 `inset` 版本，讓視覺上真的像被按進了表面。\n5️⃣ `focus-visible` 則只單純疊加一圈外框，陰影方向維持不變，純粹是為了讓用鍵盤切換焦點的人，能在不靠滑鼠的情況下，清楚看到目前選到的是哪一個。",
  },
};

export const NEUMORPHIC_CODE_SECTION: CodeBlock = {
  codeType: `css`,
  code: `
  .neu-card { //1️⃣ 
          //...
  background: var(--neu-surface); // 卡片底色，略深於背景
  box-shadow:
    inset 2px 2px 5px var(--neu-surface-inset-dark), // 左上內陰影，營造凹陷感
    inset -2px -2px 5px var(--neu-surface-inset-light); // 右下內亮面，加深凹入效果
  transition: background 0.5s, box-shadow 0.5s; // 主題切換時背景與陰影同步漸變
}
.neu-raised { //2️⃣ 
        //...
  background: var(--neu-surface); // 磚塊底色
  box-shadow:
    3px 3px 8px var(--neu-shadow-dark), // 右下陰影，凸出效果
    -3px -3px 8px var(--neu-shadow-light); // 左上亮面，擬物化浮起
  transition: background 0.5s, box-shadow 0.5s, transform 0.25s ease; // 背景、陰影、位移三重漸變
}
.neu-raised:hover { //3️⃣
  transform: translateY(-2px); // 向上浮起 2px
  background: var(--neu-surface-inset-light); // 背景變亮，暗示被選中
  color: var(--neu-focus); // 圖示顏色切換為主題焦點色
  box-shadow:
    5px 5px 24px rgba(var(--neu-glow), 0.6), // 大範圍主題色光暈
    -5px -5px 24px rgba(var(--neu-glow), 0.22); // 反向柔和光暈
}
.neu-raised:active { //4️⃣
  transform: translateY(0) scale(0.95); // 回到原位並縮小，模擬被按下
  box-shadow:
    inset 2px 2px 12px rgba(var(--neu-glow), 0.6), // 內陰影光暈，表面凹入
    inset -2px -2px 12px rgba(var(--neu-glow), 0.22); // 反向內陰影，按壓感
}
.neu-raised:focus-visible { //5️⃣
  box-shadow:
    3px 3px 8px var(--neu-shadow-dark), // 保持凸出陰影
    -3px -3px 8px var(--neu-shadow-light), // 保持凸出陰影
    0 0 0 3px var(--neu-focus); // 鍵盤聚焦外框環
}
  `,
};
