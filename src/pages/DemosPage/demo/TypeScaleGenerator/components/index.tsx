import { useState, useCallback } from "react";
import "./style.css";

const STEPS = [
  { key: "xs",   exp: -2, text: "Caption. Tooltip. Badge." },
  { key: "sm",   exp: -1, text: "Secondary text, timestamps, metadata." },
  { key: "base", exp:  0, text: "The foundation — body copy, inputs, and default UI text." },
  { key: "lg",   exp:  1, text: "Pull quotes and comfortable prose. This is where reading happens." },
  { key: "xl",   exp:  2, text: "Subheadings. Clear but not demanding." },
  { key: "2xl",  exp:  3, text: "Strong hierarchy. Scannable at a glance." },
  { key: "3xl",  exp:  4, text: "Page title. Commands attention." },
  { key: "4xl",  exp:  5, text: "Hero text. Four words." },
  { key: "5xl",  exp:  6, text: "Display." },
] as const;

const PRESETS = [
  { name: "Minor Second",     r: 1.067, hint: "儀表板、數據密集 UI",    scene: 0 },
  { name: "Major Second",     r: 1.125, hint: "技術文件、多層級內容",    scene: 0 },
  { name: "Minor Third",      r: 1.200, hint: "部落格、新聞網站",       scene: 1 },
  { name: "Major Third",      r: 1.250, hint: "企業官網、通用 Web App", scene: 1 },
  { name: "Perfect Fourth",   r: 1.333, hint: "編輯排版、雜誌風",       scene: 2 },
  { name: "Aug. Fourth (√2)", r: 1.414, hint: "作品集、創意工作室",     scene: 2 },
  { name: "Perfect Fifth",    r: 1.500, hint: "Landing Page、活動頁",  scene: 3 },
  { name: "Golden Ratio",     r: 1.618, hint: "Hero 主視覺、精品",     scene: 3 },
] as const;

const SCENES = [
  {
    key: "dashboard", label: "Dashboard",
    lines: [
      { exp: 3,  text: "Monthly Revenue", bold: true },
      { exp: 1,  text: "Q2 2026 Performance Overview" },
      { exp: 0,  text: "Total revenue across all channels for this quarter, including direct sales, subscriptions, and partner referrals." },
      { exp: -1, text: "+11.1% vs last quarter · $128,340 → $142,580" },
      { exp: -2, text: "Updated 5 min ago · Source: Analytics API" },
    ],
  },
  {
    key: "blog", label: "Blog",
    lines: [
      { exp: 4,  text: "Design Systems at Scale", bold: true },
      { exp: 2,  text: "How we built a type hierarchy that works" },
      { exp: 0,  text: "Typography is the foundation of any design system. Before choosing colors, spacing, or components, you need a type scale that creates clear visual hierarchy without relying on arbitrary numbers." },
      { exp: -1, text: "June 2026 · 8 min read" },
      { exp: -2, text: "Photo by Unsplash · CC BY 4.0" },
    ],
  },
  {
    key: "editorial", label: "Editorial",
    lines: [
      { exp: 5,  text: "The Future of Type", bold: true },
      { exp: 1,  text: "\"Good typography is invisible. Bad typography is everywhere.\"" },
      { exp: 0,  text: "Every design decision starts with choosing how text looks on screen. The right type scale turns a wall of words into a readable, scannable page." },
      { exp: -1, text: "By Yiyun Liao · Design Essays" },
    ],
  },
  {
    key: "landing", label: "Landing",
    lines: [
      { exp: 6,  text: "Build Better.", bold: true },
      { exp: 3,  text: "Design tools for the modern web" },
      { exp: 0,  text: "Start with a type scale that makes sense. Generate production-ready CSS variables in seconds." },
      { exp: 1,  text: "Get Started →", bold: true },
      { exp: -2, text: "Free forever · No credit card required" },
    ],
  },
];

const FONTS = [
  { name: "Inter",      family: "'Inter', system-ui, sans-serif",                          type: "sans" },
  { name: "System UI",  family: "system-ui, -apple-system, sans-serif",                    type: "sans" },
  { name: "Georgia",    family: "Georgia, 'Times New Roman', serif",                       type: "serif" },
  { name: "Palatino",   family: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",    type: "serif" },
  { name: "Charter",    family: "Charter, 'Bitstream Charter', 'Iowan Old Style', serif",  type: "serif" },
] as const;

const round    = (n: number) => Math.round(n * 100) / 100;
const snapEven = (n: number) => Math.round(n / 2) * 2;
const stepSize = (exp: number, base: number, ratio: number) => {
  const raw = round(base * Math.pow(ratio, exp));
  return snapEven(raw);
};
const readable = (px: number) => px >= 14 && px <= 20;

export function TypeScaleScene() {
  const [base, setBase]           = useState(16);
  const [ratio, setRatio]         = useState(1.25);
  const [activePreset, setActive] = useState(1.25);
  const [customVal, setCustomVal] = useState("");
  const [copied, setCopied]       = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [fontIdx, setFontIdx]     = useState(0);
  const [activeScene, setScene]   = useState(1);

  const font = FONTS[fontIdx] ?? FONTS[0];
  const cssText = STEPS.map(s => `  --text-${s.key}: ${stepSize(s.exp, base, ratio)}px;`).join("\n");
  const fontLine = `  --font-body: ${font.family};`;
  const fullCss = `:root {\n${fontLine}\n${cssText}\n}`;

  const handleBaseInput = useCallback((v: number) => {
    const clamped = Math.max(10, Math.min(24, v || 16));
    setBase(clamped);
  }, []);

  const handlePreset = useCallback((r: number, scene: number) => {
    setRatio(r);
    setActive(r);
    setCustomVal("");
    setScene(scene);
  }, []);

  const handleCustom = useCallback((v: string) => {
    setCustomVal(v);
    const n = parseFloat(v);
    if (n >= 1.001 && n <= 2.5) {
      setRatio(n);
      setActive(0);
    }
  }, []);

  const constReset = (() => {
    setBase(16);
    setRatio(1.25);
    setActive(1.25);
    setCustomVal("");
    setFontIdx(0);
    setScene(1);
  })

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(fullCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [fullCss]);

  return (
    <div className="tsg-wrap">
      <div className="tsg-header">
        <div className="tsg-h-left">
          <span className="tsg-h-title">Type Scale</span>
          <span className="tsg-h-dot">·</span>
          <span className="tsg-h-sub">modular scale generator</span>
        </div>
        <span className="tsg-h-pill">CSS variables</span>
      </div>

      <div className="tsg-main">
        {/* Sidebar */}
        <aside className="tsg-sidebar">
          <div>
            <div className="tsg-ctrl-label">Base Size</div>
            <div className="tsg-base-row">
              <input
                className="tsg-base-input"
                type="number"
                value={base}
                min={10}
                max={24}
                onChange={e => handleBaseInput(parseInt(e.target.value, 10))}
              />
              <span className="tsg-base-unit">px</span>
            </div>
            <input
              type="range"
              min={10}
              max={24}
              step={1}
              value={base}
              onChange={e => setBase(parseInt(e.target.value, 10))}
            />
            <div className="tsg-range-marks"><span>10</span><span>16</span><span>24</span></div>
          </div>

          <div>
            <div className="tsg-ctrl-label">Scale Ratio</div>
            <div className="tsg-presets">
              {PRESETS.map(p => (
                <button
                  key={p.r}
                  className={`tsg-preset${activePreset === p.r ? " on" : ""}`}
                  onClick={() => handlePreset(p.r, p.scene)}
                >
                  <div className="tsg-pleft">
                    <span className="tsg-pname">{p.name}</span>
                    <span className="tsg-phint">{p.hint}</span>
                  </div>
                  <span className="tsg-pval">{p.r.toFixed(3)}</span>
                </button>
              ))}
            </div>
            <div className="tsg-custom-row">
              <span className="tsg-clabel">Custom</span>
              <input
                className="tsg-cinput"
                type="number"
                min={1.001}
                max={2.5}
                step={0.001}
                placeholder="1.1–2.5"
                value={customVal}
                onChange={e => handleCustom(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="tsg-ctrl-label">Font Family</div>
            <div className="tsg-presets">
              {FONTS.map((f, i) => (
                <button
                  key={f.name}
                  className={`tsg-preset${fontIdx === i ? " on" : ""}`}
                  onClick={() => setFontIdx(i)}
                >
                  <span className="tsg-pname" style={{ fontFamily: f.family }}>{f.name}</span>
                  <span className="tsg-pval">{f.type}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>



        {/* Preview */}
        <main className="tsg-preview">

          <div>
            <div className="tsg-rnote">Formula: base × ratio<sup>exp</sup>, snapped to nearest even</div>
            <div className="tsg-top">
              <div className="tsg-current">
                <p>{base} × {ratio}<sup>exp</sup> {font.name} </p>
                <button
                  className={`tsg-copy-btn`}
                  onClick={constReset}
                >
                  Reset
                </button>
              </div>
              <button
                className={`tsg-copy-btn`}
                onClick={()=>{setShowExp(!showExp)}}
              >
                {showExp ? "Hide Exp":"Show Exp"}
              </button>
            </div>
          </div>

          <hr className="tsg-sep" />

          <div>
            {STEPS.map(s => {
              const sz = stepSize(s.exp, base, ratio);
              const isBody = readable(sz);
              return (
                <div key={s.key} className={`tsg-scale-row${isBody ? " body-zone" : ""}${showExp ? " exp-one" : ""}`}>
                  <span className="tsg-rkey">--text-{s.key}</span>
                  <span className="tsg-rtext" style={{ fontSize: sz, fontFamily: font.family }}>{s.text}</span>
                  {!!showExp && (
                    <span className="tsg-rexp">{base} × {ratio}<sup>{s.exp}</sup> = </span>
                  )}
                  <span className="tsg-rmeta">
                    <span className="tsg-rpx">{sz}px</span>
                    {isBody && <span className="tsg-rbadge">body</span>}
                  </span>
                </div>
              );
            })}
          </div>

          <hr className="tsg-sep" />

          <div className="tsg-scene-box">
            <div className="tsg-scene-tabs">
              {SCENES.map((s, i) => (
                <button
                  key={s.key}
                  className={`tsg-scene-tab${activeScene === i ? " on" : ""}`}
                  onClick={() => setScene(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="tsg-scene-content" style={{ fontFamily: font.family }}>
              {SCENES[activeScene]?.lines.map((line, i) => (
                <p
                  key={i}
                  className="tsg-scene-line"
                  style={{
                    fontSize: stepSize(line.exp, base, ratio),
                    fontWeight: line.bold ? 700 : 400,
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>

          <hr className="tsg-sep" />

          <div className="tsg-out-box">
            <div className="tsg-out-header">
              <span className="tsg-out-label">CSS output</span>
              <button
                className={`tsg-copy-btn${copied ? " ok" : ""}`}
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="tsg-out-code">
              <span className="tsg-t-sel">:root</span>{" {\n"}
              {"  "}<span className="tsg-t-prop">--font-body</span>:{" "}
              <span className="tsg-t-val">{font.family}</span>;{"\n"}
              {STEPS.map(s => {
                const sz = stepSize(s.exp, base, ratio);
                return (
                  <span key={s.key}>
                    {"  "}<span className="tsg-t-prop">--text-{s.key}</span>:{" "}
                    <span className="tsg-t-val">{sz}</span>
                    <span className="tsg-t-px">px</span>;{"\n"}
                  </span>
                );
              })}
              {"}"}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
