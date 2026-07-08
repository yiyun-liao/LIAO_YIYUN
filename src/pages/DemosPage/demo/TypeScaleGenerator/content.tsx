import type { Demo, BodySection, CodeBlock } from "@/data/demos";

const _ = { en: "", "zh-TW": "" };

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
    emphasis: [
      {
        en: "Modular Scale — every font size is derived from a single formula: base × ratio^exp. Change the base or ratio and the entire type hierarchy recalculates instantly.",
        "zh-TW": "模組化比例 — 所有字級都來自同一個公式：base × ratio^exp，改變基礎值或比例，整套字級階層立即重新計算。",
      },
      {
        en: "Even-Pixel Snapping — raw results are rounded to the nearest even number, producing cleaner values that align with 2px/4px spacing grids and avoid sub-pixel rendering issues.",
        "zh-TW": "偶數像素對齊 — 計算結果自動取最接近的偶數，產生乾淨的數值，對齊 2px/4px 間距網格，避免子像素渲染問題。",
      },
      {
        en: "Live CSS Output — the generated `:root` block with `--text-*` custom properties can be copied to clipboard in one click and dropped directly into any stylesheet.",
        "zh-TW": "即時 CSS 輸出 — 產生的 `:root` 區塊包含 `--text-*` 自訂屬性，一鍵複製就能直接貼進任何樣式表。",
      },
    ],
    refs: [
      { label: "Modular Scale — every designer's typographic secret", url: "https://every-layout.dev/rudiments/modular-scale/" },
      { label: "Type Scale — A Visual Calculator", url: "https://typescale.com/" },
      { label: "MDN — Using CSS custom properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
      { label: "Practical Typography — font size", url: "https://practicaltypography.com/summary-of-key-rules.html" },
    ],
  },
};

export const TYPESCALEGENERATOR_DATA: Demo[] = [TYPESCALEGENERATOR];

// ─── Motivation ───

export const MOTIVATION_SECTION: BodySection = {
  title: { en: "previously on...", "zh-TW": "previously on..." },
  content: {
    en: " This is a tool that makes the math visible: pick a ratio, see exactly how each step is derived, and walk away with production-ready CSS variables instead of a screenshot from a design tool.",
    "zh-TW": "這是一個透過數學計算的工具：選一個比例、看每一級怎麼算出來的，最後帶走的是能直接上線的 CSS 變數，而不是從設計工具截的圖。",
  },
};

// ─── 01 The Modular Scale Formula ───

export const FORMULA_SECTION: BodySection = {
  title: { en: "The Modular Scale Formula", "zh-TW": "模組化比例公式" },
  content: {
    en: "The entire tool runs on one line of math: `base × ratio^exp`. The base is your body text size — typically 16px, the browser default. The ratio is a multiplier borrowed from musical intervals: a Major Third (1.250) produces a gentle, editorial feel; a Perfect Fourth (1.333) creates stronger contrast. The exponent is simply the step index: 0 for the base size, positive numbers go larger, negative numbers go smaller.\nWhat makes this useful is that every size in the scale is mathematically related. There's no arbitrary jump between heading levels — the proportion is consistent, which is exactly what gives a page its visual rhythm.",
    "zh-TW": "整個工具只靠一行數學：`base × ratio^exp`。base 是內文字級——通常是 16px，瀏覽器預設值。ratio 是從音程借來的乘數：Major Third（1.250）產生溫和的編輯感；Perfect Fourth（1.333）則製造更強的對比。exp 就是級距索引：0 是基礎字級，正數越大、負數越小。\n這套系統好用的地方在於，每個字級之間都有數學關聯。標題層級之間不會出現隨意的跳躍——比例是一致的，這正是讓頁面產生視覺節奏感的關鍵。",
  },
};

export const FORMULA_CODE: CodeBlock = {
  codeType: "ts",
  code: `const round    = (n: number) => Math.round(n * 100) / 100;
const snapEven = (n: number) => Math.round(n / 2) * 2;

const stepSize = (exp: number, base: number, ratio: number) => {
  const raw = round(base * Math.pow(ratio, exp));
  return snapEven(raw);  // 22.5 → 22, 33.75 → 34
};`,
};

export const FORMULA_SNAP: BodySection = {
  title: _,
  content: {
    en: "`snapEven` rounds every result to the nearest even number — `Math.round(n / 2) * 2`. This isn't just cosmetic: even pixel values align cleanly with 2px and 4px spacing grids, avoid sub-pixel rendering artifacts on non-retina screens, and produce font sizes that feel deliberate rather than arbitrary. A scale that outputs `22px` instead of `22.5px` is one you can hand to a developer without a footnote.",
    "zh-TW": "`snapEven` 把每個結果取到最接近的偶數——`Math.round(n / 2) * 2`。這不只是好看：偶數像素值能乾淨地對齊 2px 和 4px 的間距網格、避免非 Retina 螢幕上的子像素渲染瑕疵，產出的字級看起來是刻意設計的而不是隨機的。一組輸出 `22px` 而不是 `22.5px` 的比例表，交給工程師不需要附帶說明。",
  },
};

// ─── 02 Musical Intervals as Ratios ───

export const RATIO_SECTION: BodySection = {
  title: { en: "Musical Intervals as Ratios", "zh-TW": "以音程作為比例" },
  content: {
    en: "The ratio presets aren't random numbers — they come from musical tuning theory, where intervals between notes follow exact frequency ratios. A Perfect Fifth is 3:2 (1.500), a Perfect Fourth is 4:3 (1.333), and the Golden Ratio is roughly 1.618. These proportions have been considered harmonious for centuries, and they translate directly to visual rhythm.\nSmaller ratios like Minor Second (1.067) produce a tight, compact scale — useful for dense UIs like dashboards where you need many distinct sizes without dramatic jumps. Larger ratios like the Golden Ratio (1.618) create bold contrast — better for editorial layouts or landing pages where headings need to command attention. The tool gives you eight presets to audition, plus a custom input for anything in between.",
    "zh-TW": "這些比例預設不是隨便選的數字——它們來自音樂調律理論，音符之間的音程遵循精確的頻率比。完全五度是 3:2（1.500）、完全四度是 4:3（1.333）、黃金比例大約是 1.618。這些比例幾百年來一直被認為是和諧的，而它們能直接轉換成視覺節奏。\n較小的比例如 Minor Second（1.067）會產生緊湊的字級表——適合儀表板這類密集的 UI，需要多種區分度但跳躍不能太大。較大的比例如黃金比例（1.618）則製造強烈對比——更適合編輯排版或 landing page，標題需要搶眼。工具提供了八種預設可以試聽，另外有自訂輸入可以填任何中間值。",
  },
};

export const RATIO_CODE: CodeBlock = {
  codeType: "ts",
  code: `const PRESETS = [
  { name: "Minor Second",     r: 1.067 },  // tight, compact
  { name: "Major Second",     r: 1.125 },
  { name: "Minor Third",      r: 1.200 },
  { name: "Major Third",      r: 1.250 },  // default — balanced
  { name: "Perfect Fourth",   r: 1.333 },
  { name: "Aug. Fourth (√2)", r: 1.414 },
  { name: "Perfect Fifth",    r: 1.500 },
  { name: "Golden Ratio",     r: 1.618 },  // dramatic contrast
] as const;`,
};

// ─── Ratio × Scenario mapping ───

export const RATIO_SCENARIOS = [
  { ratio: 1.067, name: "Minor Second",     contrast: "極緊湊",  usage: { en: "Dashboard, data-dense UI, admin panels",           "zh-TW": "儀表板、數據密集 UI、後台管理" },         scene: "dashboard" },
  { ratio: 1.125, name: "Major Second",     contrast: "緊湊",    usage: { en: "Documentation, long-form, multi-level content",    "zh-TW": "技術文件、長篇閱讀、多層級內容" },         scene: "dashboard" },
  { ratio: 1.200, name: "Minor Third",      contrast: "適中",    usage: { en: "Blog, news sites, CMS",                           "zh-TW": "部落格、新聞網站、CMS" },                 scene: "blog" },
  { ratio: 1.250, name: "Major Third",      contrast: "平衡",    usage: { en: "Corporate sites, product pages, general web apps", "zh-TW": "企業官網、產品頁、通用 Web App" },          scene: "blog" },
  { ratio: 1.333, name: "Perfect Fourth",   contrast: "明顯",    usage: { en: "Editorial, magazine-style, marketing pages",       "zh-TW": "編輯排版、雜誌風、行銷頁面" },             scene: "editorial" },
  { ratio: 1.414, name: "Aug. Fourth (√2)", contrast: "強烈",    usage: { en: "Portfolio, presentations, creative studios",        "zh-TW": "作品集、簡報、創意工作室" },               scene: "editorial" },
  { ratio: 1.500, name: "Perfect Fifth",    contrast: "戲劇化",  usage: { en: "Landing pages, event pages, promotions",           "zh-TW": "Landing Page、活動頁、促銷單頁" },         scene: "landing" },
  { ratio: 1.618, name: "Golden Ratio",     contrast: "極大膽",  usage: { en: "Hero-heavy, fashion, luxury, art galleries",       "zh-TW": "Hero 主視覺、時尚精品、藝廊" },            scene: "landing" },
] as const;

export const RATIO_USAGE: BodySection = {
  title: _,
  content: {
    en: "Smaller ratios like Minor Second (1.067) and Major Second (1.125) keep sizes close together — ideal for dashboards, admin panels, and documentation where you need many distinct levels without dramatic jumps. Mid-range ratios like Minor Third (1.200) through Perfect Fourth (1.333) suit blogs, corporate sites, and editorial layouts where headings need to clearly separate from body text. The largest ratios — Perfect Fifth (1.500) and Golden Ratio (1.618) — create bold, dramatic contrast that works best on landing pages, hero-heavy designs, and luxury brand sites where a single headline needs to dominate the viewport.",
    "zh-TW": "較小的比例如 Minor Second（1.067）和 Major Second（1.125）讓字級彼此接近——適合儀表板、後台管理和技術文件，需要多種區分層級但跳躍不能太大。中間比例如 Minor Third（1.200）到 Perfect Fourth（1.333）適合部落格、企業官網和編輯排版，標題需要和內文有清楚的區隔。最大的比例——Perfect Fifth（1.500）和 Golden Ratio（1.618）——製造大膽、戲劇化的對比，最適合 Landing Page、Hero 主視覺和精品品牌網站，讓單一標題就能主導整個畫面。",
  },
};

// ─── 03 Bidirectional Controls ───

export const CONTROLS_SECTION: BodySection = {
  title: { en: "Bidirectional Controls", "zh-TW": "雙向同步控制" },
  content: {
    en: "The base size has two inputs that stay in sync: a large number input for precision and a range slider for exploration. Both write to the same `base` state, so dragging the slider updates the number and typing a number moves the slider — bidirectional binding with no extra logic.\nThe number input runs through `handleBaseInput`, which clamps the value to 10–24px. The `v || 16` fallback handles the edge case where the user clears the input entirely — `parseInt(\"\")` returns `NaN`, which is falsy, so the default kicks in.",
    "zh-TW": "基礎字級有兩個保持同步的輸入：一個大數字輸入框用於精確調整、一個滑桿用於探索。兩者都寫入同一個 `base` state，所以拖動滑桿會更新數字、輸入數字也會移動滑桿——雙向綁定，不需要額外邏輯。\n數字輸入經過 `handleBaseInput`，把值限制在 10–24px。`v || 16` 的 fallback 處理使用者清空輸入框的邊界情況——`parseInt(\"\")` 回傳 `NaN`，`NaN` 是 falsy，所以預設值就會生效。",
  },
};

export const CONTROLS_CODE: CodeBlock = {
  codeType: "tsx",
  code: `const handleBaseInput = useCallback((v: number) => {
  const clamped = Math.max(10, Math.min(24, v || 16));
  setBase(clamped);
}, []);

// Number input — type a value, slider follows
<input type="number" value={base}
  onChange={e => handleBaseInput(parseInt(e.target.value, 10))} />

// Range slider — drag to explore, number follows
<input type="range" min={10} max={24} value={base}
  onChange={e => setBase(parseInt(e.target.value, 10))} />`,
};

export const CONTROLS_PRESET: BodySection = {
  title: _,
  content: {
    en: "Ratio presets work the same way. Clicking a preset updates `ratio` and `activePreset` together, and clears any custom value. Typing a custom ratio between 1.001 and 2.5 does the reverse — it sets `activePreset` to 0 so no preset button appears selected. The whole sidebar is driven by three pieces of state: `base`, `ratio`, and which preset is active.",
    "zh-TW": "比例預設的運作方式也一樣。點擊預設會同時更新 `ratio` 和 `activePreset`，並清空自訂值。輸入 1.001 到 2.5 之間的自訂比例則反過來——把 `activePreset` 設為 0，讓所有預設按鈕都不顯示選中狀態。整個側邊欄由三個 state 驅動：`base`、`ratio`、以及哪個預設被選中。",
  },
};

// ─── 04 Body Zone Detection ───

export const BODY_SECTION: BodySection = {
  title: { en: "Body Zone Detection", "zh-TW": "內文區間偵測" },
  content: {
    en: "Steps whose computed size falls between 14px and 20px get a green \"body\" badge. This range marks the comfortable reading zone — sizes that work well for body copy, form inputs, and default UI text. Below 14px, text becomes hard to read at normal viewing distance; above 20px, it starts to feel like a heading.\nThe detection is intentionally simple: `px >= 14 && px <= 20`. As you change the base or ratio, badges appear and disappear in real time, giving you immediate feedback on which steps in your scale are suitable for body text and which are heading territory.",
    "zh-TW": "計算出來的字級落在 14px 到 20px 之間的 step 會獲得綠色「body」標籤。這個範圍標示的是舒適閱讀區間——適合用於內文、表單輸入和預設 UI 文字的大小。低於 14px 在正常閱讀距離下會吃力；高於 20px 就開始像標題了。\n偵測邏輯刻意簡單：`px >= 14 && px <= 20`。當你改變 base 或 ratio，標籤會即時出現和消失，讓你立刻知道字級表裡哪些 step 適合當內文、哪些已經進入標題的領域。",
  },
};

export const BODY_CODE: CodeBlock = {
  codeType: "tsx",
  code: `const readable = (px: number) => px >= 14 && px <= 20;

// In the render loop:
const sz = stepSize(s.exp, base, ratio);
const isBody = readable(sz);

<div className={\`tsg-scale-row\${isBody ? " body-zone" : ""}\`}>
  <span className="tsg-rpx">{sz}px</span>
  {isBody && <span className="tsg-rbadge">body</span>}
</div>`,
};

// ─── 05 Smooth Font-Size Transitions ───

export const TRANSITION_SECTION: BodySection = {
  title: { en: "Smooth Font-Size Transitions", "zh-TW": "平滑字級轉場" },
  content: {
    en: "When you change the base or ratio, the sample text in each row smoothly resizes instead of jumping. This works because React updates the `style.fontSize` prop on the same DOM element — no teardown and rebuild. The CSS `transition` on `.tsg-rtext` picks up the change and animates it over 0.22 seconds with an ease curve.\nThis is one of those details where the implementation choice matters: if you used `innerHTML` or `key` changes to force React to remount the elements, you'd get new DOM nodes every time and the transition would never fire. Keeping the same element and only patching its style is what makes the animation possible.",
    "zh-TW": "當你改變 base 或 ratio 時，每一行的示範文字會平滑地變大變小，而不是瞬間跳過去。這能運作是因為 React 更新的是同一個 DOM 元素上的 `style.fontSize` prop——沒有拆掉重建。CSS 在 `.tsg-rtext` 上的 `transition` 偵測到變化，用 0.22 秒的緩動曲線動畫過去。\n這是實作選擇很關鍵的細節之一：如果用 `innerHTML` 或改 `key` 強迫 React 重新掛載元素，每次都會產生新的 DOM 節點，transition 就永遠不會觸發。保留同一個元素、只修補它的 style，才是動畫能動的原因。",
  },
};

export const TRANSITION_CODE: CodeBlock = {
  codeType: "css",
  code: `.tsg-rtext {
  color: var(--neu-text-heading);
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: -0.02em;
  transition: font-size 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}`,
};

export const TRANSITION_JSX: BodySection = {
  title: _,
  content: {
    en: "The render just sets `fontSize` directly from the computed step size. React diffs the virtual DOM, finds only the style change, and patches the real DOM in place — the CSS transition handles the rest.",
    "zh-TW": "render 時直接從計算出來的 step 大小設定 `fontSize`。React 對比 virtual DOM，發現只有 style 變了，就地修補真實 DOM——剩下的交給 CSS transition 處理。",
  },
};

export const TRANSITION_CODE_JSX: CodeBlock = {
  codeType: "tsx",
  code: `<span className="tsg-rtext" style={{ fontSize: sz }}>
  {s.text}
</span>`,
};
