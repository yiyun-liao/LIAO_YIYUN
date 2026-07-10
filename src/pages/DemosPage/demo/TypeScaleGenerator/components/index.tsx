import { useState, useCallback } from "react";
import "./style.css";

const STEPS = [
  { key: "xs", exp: -2, text: "Caption. Tooltip. Badge." },
  { key: "sm", exp: -1, text: "Secondary text, timestamps, metadata." },
  { key: "base", exp: 0, text: "The foundation — body copy, inputs, and default UI text." },
  { key: "lg", exp: 1, text: "Pull quotes and comfortable prose. This is where reading happens." },
  { key: "xl", exp: 2, text: "Subheadings. Clear but not demanding." },
  { key: "2xl", exp: 3, text: "Strong hierarchy. Scannable at a glance." },
  { key: "3xl", exp: 4, text: "Page title. Commands attention." },
  { key: "4xl", exp: 5, text: "Hero text. Four words." },
  { key: "5xl", exp: 6, text: "Display." },
] as const;

const PRESETS = [
  { name: "Minor Second",     r: 1.067, hint: "Dashboard",  scene: 0 },
  { name: "Major Second",     r: 1.125, hint: "Docs",       scene: 0 },
  { name: "Minor Third",      r: 1.200, hint: "Blog",       scene: 1 },
  { name: "Major Third",      r: 1.250, hint: "Corporate",  scene: 2 },
  { name: "Perfect Fourth",   r: 1.333, hint: "Editorial",  scene: 3 },
  { name: "Aug. Fourth (√2)", r: 1.414, hint: "Portfolio",   scene: 3 },
  { name: "Perfect Fifth",    r: 1.500, hint: "Landing",    scene: 4 },
  { name: "Golden Ratio",     r: 1.618, hint: "Hero",       scene: 5 },
] as const;

const FONTS = [
  { name: "Inter", family: "'Inter', system-ui, sans-serif", type: "sans" },
  { name: "System UI", family: "system-ui, -apple-system, sans-serif", type: "sans" },
  { name: "Georgia", family: "Georgia, 'Times New Roman', serif", type: "serif" },
  { name: "Palatino", family: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", type: "serif" },
  { name: "Charter", family: "Charter, 'Bitstream Charter', 'Iowan Old Style', serif", type: "serif" },
] as const;

const round = (n: number) => Math.round(n * 100) / 100;
const snapEven = (n: number) => Math.round(n / 2) * 2;
const stepSize = (exp: number, base: number, ratio: number) => {
  const raw = round(base * Math.pow(ratio, exp));
  return snapEven(raw);
};
const readable = (px: number) => px >= 14 && px <= 20;

interface SceneProps {
  s: (exp: number) => number;
  ff: string;
}

function SceneDashboard({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc" style={{ fontFamily: ff }}>
      <div className="tsg-sc-nav">
        <span style={{ fontSize: s(0), fontWeight: 700 }}>Supermi</span>
        <div className="tsg-sc-nav-links">
          <span style={{ fontSize: s(-1) }}>Home</span>
          <span style={{ fontSize: s(-1) }}>About</span>
          <span style={{ fontSize: s(-1) }}>Support</span>
          <span className="tsg-sc-pill" style={{ fontSize: s(-1) }}>Login</span>
        </div>
      </div>
      <div className="tsg-sc-center">
        <span className="tsg-sc-badge" style={{ fontSize: s(-2) }}>UNLOCK CONVERSATIONAL POWER</span>
      </div>
      <p className="tsg-sc-hero" style={{ fontSize: s(4) }}>
        Empower Your Conversations with Next-Gen Dashboard
      </p>
      <p className="tsg-sc-sub" style={{ fontSize: s(0) }}>
        Unlock seamless communication and streamline your messaging experience with our innovative solution
      </p>
      <div className="tsg-sc-center">
        <span className="tsg-sc-cta" style={{ fontSize: s(0) }}>Get Started</span>
      </div>
      <div className="tsg-sc-img" style={{ height: 80 }} />
      <div className="tsg-sc-logos">
        <span style={{ fontSize: s(-1) }}>amazon</span>
        <span style={{ fontSize: s(-1) }}>ATLASSIAN</span>
        <span style={{ fontSize: s(-1) }}>GitHub</span>
        <span style={{ fontSize: s(-1) }}>Netflix</span>
        <span style={{ fontSize: s(-1) }}>Medium</span>
      </div>
    </div>
  );
}

function SceneBlog({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc" style={{ fontFamily: ff }}>
      <div className="tsg-sc-nav">
        <span style={{ fontSize: s(0), fontWeight: 700, color: "var(--neu-accent)" }}>wokka</span>
        <div className="tsg-sc-nav-links">
          <span style={{ fontSize: s(-1) }}>Home</span>
          <span style={{ fontSize: s(-1) }}>Services</span>
          <span style={{ fontSize: s(-1) }}>About</span>
          <span style={{ fontSize: s(-1), fontWeight: 600 }}>Blog</span>
          <span className="tsg-sc-cta" style={{ fontSize: s(-2), padding: "3px 10px" }}>Contact us</span>
        </div>
      </div>
      <p style={{ fontSize: s(3), fontWeight: 700, lineHeight: 1.15, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
        How to Stay Cool While Waiting for Your AC Repair
      </p>
      <p style={{ fontSize: s(-1), color: "var(--neu-text-mute)", margin: "0 0 12px" }}>
        A limited MOHEIM POP UP shop will be held at Mitsukoshi Nihonbashi Department
      </p>
      <div className="tsg-sc-img" style={{ height: 60 }} />
      <div className="tsg-sc-blog-cards">
        {["Staying Cool During Blackouts", "What Does the Texas Grid Have to Do With My AC?", "Fall HVAC Maintenance Tips"].map((title, i) => (
          <div key={i} className="tsg-sc-blog-card">
            <div className="tsg-sc-blog-thumb" />
            <div className="tsg-sc-blog-info">
              <span style={{ fontSize: s(-2), letterSpacing: "0.06em", fontWeight: 600 }}>BRAND STRATEGY</span>
              <span style={{ fontSize: s(-2), color: "var(--neu-text-mute)" }}>2024-09-20</span>
              <p style={{ fontSize: s(1), fontWeight: 700, margin: "4px 0 2px", lineHeight: 1.2 }}>{title}</p>
              <span style={{ fontSize: s(-1), color: "var(--neu-text-body)" }}>A limited MOHEIM POP UP shop will be held at Mitsukoshi Department Store from May 15th.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneCorporate({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc" style={{ fontFamily: ff }}>
      <div className="tsg-sc-nav">
        <span style={{ fontSize: s(0), fontWeight: 700 }}>◆ Duwy</span>
        <div className="tsg-sc-nav-links">
          <span style={{ fontSize: s(-1) }}>Personal</span>
          <span style={{ fontSize: s(-1) }}>Business</span>
          <span style={{ fontSize: s(-1) }}>Partner</span>
          <span style={{ fontSize: s(-1) }}>About Us</span>
          <span className="tsg-sc-pill" style={{ fontSize: s(-1) }}>Sign In</span>
        </div>
      </div>
      <div className="tsg-sc-corp-hero">
        <div>
          <p style={{ fontSize: s(5), fontWeight: 700, lineHeight: 1.0, margin: "0 0 8px", letterSpacing: "-0.04em" }}>
            Product Designer
          </p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", maxWidth: 600, lineHeight: 1.4 }}>
            Hi, I'm Duwy. A UI/UX Designer Creating Intuitive Digital Experiences.
          </p>
        </div>
        <div className="tsg-sc-img" style={{ width: 100, height: 80, flexShrink: 0 }} />
      </div>
      <div className="tsg-sc-logos" style={{ marginBottom: 14 }}>
        <span style={{ fontSize: s(-2) }}>coinbase</span>
        <span style={{ fontSize: s(-2) }}>Spotify</span>
        <span style={{ fontSize: s(-2) }}>zoom</span>
        <span style={{ fontSize: s(-2) }}>slack</span>
        <span style={{ fontSize: s(-2) }}>Dropbox</span>
      </div>
      <div className="tsg-sc-corp-stats">
        <div>
          <p style={{ fontSize: s(1), fontWeight: 500, lineHeight: 1.3, margin: "0 0 4px" }}>
            Design has always been more than just a job — it's my passion.
          </p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", margin: 0, lineHeight: 1.4 }}>
            Design is not just a job for me, it's a passion that drives me.
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: s(3), fontWeight: 700, margin: "0 0 2px" }}>+320</p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: "0 0 8px" }}>Projects Finished</p>
          <p style={{ fontSize: s(3), fontWeight: 700, margin: "0 0 2px" }}>+280</p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0 }}>Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

function SceneEditorial({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc tsg-sc-editorial" style={{ fontFamily: ff }}>
      <div className="tsg-sc-nav" style={{ borderBottom: "2px solid var(--neu-text-heading)" }}>
        <span style={{ fontSize: s(3), fontWeight: 900, letterSpacing: "-0.04em" }}>ZENITH</span>
        <div className="tsg-sc-nav-links">
          <span style={{ fontSize: s(-2), letterSpacing: "0.04em" }}>STORIES</span>
          <span style={{ fontSize: s(-2), letterSpacing: "0.04em" }}>CELEBRITY</span>
          <span style={{ fontSize: s(-2), letterSpacing: "0.04em" }}>VIDEOS</span>
          <span style={{ fontSize: s(-2), letterSpacing: "0.04em" }}>GALLERY</span>
        </div>
      </div>
      <div className="tsg-sc-ed-feature">
        <div className="tsg-sc-img" style={{ width: "45%", height: 100, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: s(2), fontWeight: 700, lineHeight: 1.1, margin: "0 0 8px", letterSpacing: "-0.02em" }}>
            THE MANHATTAN STREET SHOW INCLUDED A LOT OF ECCENTRIC FASHION.
          </p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", lineHeight: 1.4, margin: "0 0 6px" }}>
            Despite the cold weather, Manhattan's Fall street style showed designers pushing creative boundaries with bold prints and layered textures.
          </p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0 }}>by Cameron Alexandre</p>
        </div>
      </div>
      <p style={{ fontSize: s(2), fontWeight: 800, letterSpacing: "0.02em", margin: "14px 0 8px", borderTop: "2px solid var(--neu-text-heading)", paddingTop: 10 }}>
        TODAY'S STORIES
      </p>
      <div className="tsg-sc-ed-grid">
        {["WHAT STREET FASHION WAS LIKE A DECADE AGO", "MEN, PROMISE, SKIRTS AREN'T THAT SCARY!"].map((t, i) => (
          <div key={i} className="tsg-sc-ed-card">
            <div className="tsg-sc-img" style={{ height: 40, marginBottom: 6 }} />
            <p style={{ fontSize: s(0), fontWeight: 700, lineHeight: 1.2, margin: 0 }}>{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneLanding({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc" style={{ fontFamily: ff }}>
      <div className="tsg-sc-nav">
        <span style={{ fontSize: s(0), fontWeight: 700 }}>◧ RANTY</span>
        <div className="tsg-sc-nav-links">
          <span style={{ fontSize: s(-1) }}>Services</span>
          <span style={{ fontSize: s(-1) }}>Homes</span>
          <span style={{ fontSize: s(-1) }}>About us</span>
          <span style={{ fontSize: s(-1) }}>Cases</span>
        </div>
      </div>
      <p style={{ fontSize: s(6), fontWeight: 800, lineHeight: 0.95, margin: "8px 0 6px", letterSpacing: "-0.04em", textTransform: "uppercase" }}>
        The<br />Perfect<br />Home
      </p>
      <p style={{ fontSize: s(0), color: "var(--neu-text-body)", margin: "0 0 14px" }}>
        / We craft custom homes /
      </p>
      <div style={{ marginBottom: 16 }}>
        <span className="tsg-sc-cta" style={{ fontSize: s(0), padding: "8px 24px", borderRadius: 24 }}>START</span>
      </div>
      <div className="tsg-sc-landing-features">
        <div className="tsg-sc-landing-card">
          <p style={{ fontSize: s(1), fontWeight: 700, margin: "0 0 4px" }}>We use best materials!</p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", margin: 0 }}>Working with verified suppliers.</p>
        </div>
        <div className="tsg-sc-landing-card" style={{ textAlign: "center" }}>
          <p style={{ fontSize: s(3), fontWeight: 700, margin: "0 0 2px", fontStyle: "italic" }}>12m+</p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0 }}>Customers</p>
        </div>
        <div className="tsg-sc-landing-card">
          <p style={{ fontSize: s(0), fontWeight: 800, margin: "0 0 4px", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            We can combine nature & home comfort
          </p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0, textDecoration: "underline" }}>LEARN MORE</p>
        </div>
      </div>
    </div>
  );
}

function SceneHero({ s, ff }: SceneProps) {
  return (
    <div className="tsg-sc tsg-sc-hero-scene" style={{ fontFamily: ff }}>
      <div>
        <p style={{ fontSize: s(6), fontWeight: 800, lineHeight: 0.9, margin: "0 0 12px", letterSpacing: "-0.05em" }}>
          Build<br />Better.
        </p>
        <p style={{ fontSize: s(1), color: "var(--neu-text-body)", margin: "0 0 20px", lineHeight: 1.4 }}>
          Design tools for the modern web
        </p>
        <span className="tsg-sc-cta" style={{ fontSize: s(0), padding: "10px 32px" }}>Get Started →</span>
        <p style={{ fontSize: s(-1), color: "var(--neu-text-mute)", marginTop: 12 }}>Free forever · No credit card required</p>
      </div>
    </div>
  );
}

export function TypeScaleScene() {
  const [base, setBase] = useState(16);
  const [ratio, setRatio] = useState(1.25);
  const [activePreset, setActive] = useState(1.25);
  const [customVal, setCustomVal] = useState("");
  const [copied, setCopied] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [fontIdx, setFontIdx] = useState(0);
  const [activeScene, setScene] = useState(2);

  const font = FONTS[fontIdx] ?? FONTS[0];
  const sz = (exp: number) => stepSize(exp, base, ratio);
  const cssText = STEPS.map((s) => `  --text-${s.key}: ${stepSize(s.exp, base, ratio)}px;`).join("\n");
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
      const match = PRESETS.reduce((prev, curr) =>
        Math.abs(curr.r - n) < Math.abs(prev.r - n) ? curr : prev
      );
      setScene(match.scene);
    }
  }, []);

  const constReset = () => {
    setBase(16);
    setRatio(1.25);
    setActive(1.25);
    setCustomVal("");
    setFontIdx(0);
    setScene(2);
  };

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
                onChange={(e) => handleBaseInput(parseInt(e.target.value, 10))}
              />
              <span className="tsg-base-unit">px</span>
            </div>
            <input
              type="range"
              min={10}
              max={24}
              step={1}
              value={base}
              onChange={(e) => setBase(parseInt(e.target.value, 10))}
            />
            <div className="tsg-range-marks">
              <span>10</span>
              <span>16</span>
              <span>24</span>
            </div>
          </div>

          <div>
            <div className="tsg-ctrl-label">Scale Ratio</div>
            <div className="tsg-presets">
              {PRESETS.map((p) => (
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
                onChange={(e) => handleCustom(e.target.value)}
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
                  <span className="tsg-pname" style={{ fontFamily: f.family }}>
                    {f.name}
                  </span>
                  <span className="tsg-pval">{f.type}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Preview */}
        <main className="tsg-preview">
          <div>
            <div className="tsg-rnote">
              Formula: base × ratio<sup>exp</sup>, snapped to nearest even
            </div>
            <div className="tsg-top">
              <div className="tsg-current">
                <p>
                  {base} × {ratio}
                  <sup>exp</sup> {font.name}{" "}
                </p>
                <button className={`tsg-copy-btn`} onClick={constReset}>
                  Reset
                </button>
              </div>
              <div className="tsg-rbutton">
                <button
                  className={`tsg-copy-btn`}
                  onClick={() => {
                    setShowPreview(!showPreview);
                  }}
                >
                  {showPreview ? "Hide Preview" : "Show Preview"}
                </button>
                <button
                  className={`tsg-copy-btn`}
                  onClick={() => {
                    setShowExp(!showExp);
                  }}
                >
                  {showExp ? "Hide Exp" : "Show Exp"}
                </button>
              </div>
            </div>
          </div>

          {showPreview && (
            <div>
              <hr className="tsg-sep" />
              <div className="tsg-scene-box">
                {activeScene === 0 && <SceneDashboard s={sz} ff={font.family} />}
                {activeScene === 1 && <SceneBlog s={sz} ff={font.family} />}
                {activeScene === 2 && <SceneCorporate s={sz} ff={font.family} />}
                {activeScene === 3 && <SceneEditorial s={sz} ff={font.family} />}
                {activeScene === 4 && <SceneLanding s={sz} ff={font.family} />}
                {activeScene === 5 && <SceneHero s={sz} ff={font.family} />}
              </div>
            </div>
          )}

          <hr className="tsg-sep" />

          <div>
            {STEPS.map((s) => {
              const sz = stepSize(s.exp, base, ratio);
              const isBody = readable(sz);
              return (
                <div key={s.key} className={`tsg-scale-row${isBody ? " body-zone" : ""}${showExp ? " exp-one" : ""}`}>
                  <span className="tsg-rkey">--text-{s.key}</span>
                  <span className="tsg-rtext" style={{ fontSize: sz, fontFamily: font.family }}>
                    {s.text}
                  </span>
                  {!!showExp && (
                    <span className="tsg-rexp">
                      {base} × {ratio}
                      <sup>{s.exp}</sup> ={" "}
                    </span>
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
              <button className={`tsg-copy-btn${copied ? " ok" : ""}`} onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="tsg-out-code">
              <span className="tsg-t-sel">:root</span>
              {" {\n"}
              {"  "}
              <span className="tsg-t-prop">--font-body</span>: <span className="tsg-t-val">{font.family}</span>;{"\n"}
              {STEPS.map((s) => {
                const sz = stepSize(s.exp, base, ratio);
                return (
                  <span key={s.key}>
                    {"  "}
                    <span className="tsg-t-prop">--text-{s.key}</span>: <span className="tsg-t-val">{sz}</span>
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
