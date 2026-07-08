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
  { name: "Minor Second",     r: 1.067 },
  { name: "Major Second",     r: 1.125 },
  { name: "Minor Third",      r: 1.200 },
  { name: "Major Third",      r: 1.250 },
  { name: "Perfect Fourth",   r: 1.333 },
  { name: "Aug. Fourth (√2)", r: 1.414 },
  { name: "Perfect Fifth",    r: 1.500 },
  { name: "Golden Ratio",     r: 1.618 },
] as const;

const round    = (n: number) => Math.round(n * 100) / 100;
const stepSize = (exp: number, base: number, ratio: number) => round(base * Math.pow(ratio, exp));
const readable = (px: number) => px >= 14 && px <= 20;

export function TypeScaleScene() {
  const [base, setBase]           = useState(16);
  const [ratio, setRatio]         = useState(1.25);
  const [activePreset, setActive] = useState(1.25);
  const [customVal, setCustomVal] = useState("");
  const [copied, setCopied]       = useState(false);
  const [showExp, setShowExp] = useState(false);

  const cssText = STEPS.map(s => `  --text-${s.key}: ${stepSize(s.exp, base, ratio)}px;`).join("\n");
  const fullCss = `:root {\n${cssText}\n}`;

  const handleBaseInput = useCallback((v: number) => {
    const clamped = Math.max(10, Math.min(24, v || 16));
    setBase(clamped);
  }, []);

  const handlePreset = useCallback((r: number) => {
    setRatio(r);
    setActive(r);
    setCustomVal("");
  }, []);

  const handleCustom = useCallback((v: string) => {
    setCustomVal(v);
    const n = parseFloat(v);
    if (n >= 1.001 && n <= 2.5) {
      setRatio(n);
      setActive(0);
    }
  }, []);

  const constReset = (()=>{
    setBase(16);
    setRatio(1.25)
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
                  onClick={() => handlePreset(p.r)}
                >
                  <span className="tsg-pname">{p.name}</span>
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
        </aside>



        {/* Preview */}
        <main className="tsg-preview">

          <div>
            <div className="tsg-rnote">Formula: base × ratio^exp</div>
            <div className="tsg-top">
              <div className="tsg-current">
                <p>{base} × {ratio}<sup>exp</sup></p>
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
                  <span className="tsg-rtext" style={{ fontSize: sz }}>{s.text}</span>
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
