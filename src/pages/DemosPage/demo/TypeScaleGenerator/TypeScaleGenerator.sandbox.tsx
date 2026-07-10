import { useState, useCallback } from "react";

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

interface SceneProps { s: (exp: number) => number; ff: string; }

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
      <p className="tsg-sc-hero" style={{ fontSize: s(4) }}>Empower Your Conversations with Next-Gen Dashboard</p>
      <p className="tsg-sc-sub" style={{ fontSize: s(0) }}>Unlock seamless communication and streamline your messaging experience with our innovative solution</p>
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
      <p style={{ fontSize: s(3), fontWeight: 700, lineHeight: 1.15, margin: "0 0 6px", letterSpacing: "-0.02em" }}>How to Stay Cool While Waiting for Your AC Repair</p>
      <p style={{ fontSize: s(-1), color: "var(--neu-text-mute)", margin: "0 0 12px" }}>A limited MOHEIM POP UP shop will be held at Mitsukoshi Nihonbashi Department</p>
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
          <p style={{ fontSize: s(5), fontWeight: 700, lineHeight: 1.0, margin: "0 0 8px", letterSpacing: "-0.04em" }}>Product Designer</p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", maxWidth: 600, lineHeight: 1.4 }}>Hi, I'm Duwy. A UI/UX Designer Creating Intuitive Digital Experiences.</p>
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
          <p style={{ fontSize: s(1), fontWeight: 500, lineHeight: 1.3, margin: "0 0 4px" }}>Design has always been more than just a job — it's my passion.</p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", margin: 0, lineHeight: 1.4 }}>Design is not just a job for me, it's a passion that drives me.</p>
        </div>
        <div style={{ textAlign: "right" as const }}>
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
          <p style={{ fontSize: s(2), fontWeight: 700, lineHeight: 1.1, margin: "0 0 8px", letterSpacing: "-0.02em" }}>THE MANHATTAN STREET SHOW INCLUDED A LOT OF ECCENTRIC FASHION.</p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", lineHeight: 1.4, margin: "0 0 6px" }}>Despite the cold weather, Manhattan's Fall street style showed designers pushing creative boundaries with bold prints and layered textures.</p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0 }}>by Cameron Alexandre</p>
        </div>
      </div>
      <p style={{ fontSize: s(2), fontWeight: 800, letterSpacing: "0.02em", margin: "14px 0 8px", borderTop: "2px solid var(--neu-text-heading)", paddingTop: 10 }}>TODAY'S STORIES</p>
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
      <p style={{ fontSize: s(6), fontWeight: 800, lineHeight: 0.95, margin: "8px 0 6px", letterSpacing: "-0.04em", textTransform: "uppercase" as const }}>The<br />Perfect<br />Home</p>
      <p style={{ fontSize: s(0), color: "var(--neu-text-body)", margin: "0 0 14px" }}>/ We craft custom homes /</p>
      <div style={{ marginBottom: 16 }}>
        <span className="tsg-sc-cta" style={{ fontSize: s(0), padding: "8px 24px", borderRadius: 24 }}>START</span>
      </div>
      <div className="tsg-sc-landing-features">
        <div className="tsg-sc-landing-card">
          <p style={{ fontSize: s(1), fontWeight: 700, margin: "0 0 4px" }}>We use best materials!</p>
          <p style={{ fontSize: s(-1), color: "var(--neu-text-body)", margin: 0 }}>Working with verified suppliers.</p>
        </div>
        <div className="tsg-sc-landing-card" style={{ textAlign: "center" as const }}>
          <p style={{ fontSize: s(3), fontWeight: 700, margin: "0 0 2px", fontStyle: "italic" }}>12m+</p>
          <p style={{ fontSize: s(-2), color: "var(--neu-text-mute)", margin: 0 }}>Customers</p>
        </div>
        <div className="tsg-sc-landing-card">
          <p style={{ fontSize: s(0), fontWeight: 800, margin: "0 0 4px", letterSpacing: "0.02em", textTransform: "uppercase" as const }}>We can combine nature & home comfort</p>
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
        <p style={{ fontSize: s(6), fontWeight: 800, lineHeight: 0.9, margin: "0 0 12px", letterSpacing: "-0.05em" }}>Build<br />Better.</p>
        <p style={{ fontSize: s(1), color: "var(--neu-text-body)", margin: "0 0 20px", lineHeight: 1.4 }}>Design tools for the modern web</p>
        <span className="tsg-sc-cta" style={{ fontSize: s(0), padding: "10px 32px" }}>Get Started →</span>
        <p style={{ fontSize: s(-1), color: "var(--neu-text-mute)", marginTop: 12 }}>Free forever · No credit card required</p>
      </div>
    </div>
  );
}

export default function App() {
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
    <>
      <style>{`
/* ——— Neumorphic theme tokens ——— */
.tsg-wrap {
  --neu-bg: #e0e5ec;
  --neu-shadow-dark: #b8bec7;
  --neu-shadow-light: #ffffff;
  --neu-surface: #d4d9e2;
  --neu-surface-inset-dark: #b8bec7;
  --neu-surface-inset-light: #ffffff;
  --neu-text-heading: #4a5060;
  --neu-text-body: #6a7080;
  --neu-text-mute: #8a95a8;
  --neu-text-faint: #a0aab8;
  --neu-accent: #6080f8;
  --neu-accent-rgb: 37, 99, 235;
  --neu-orange: rgb(255, 165, 69);
  --neu-orange-bg: rgba(21, 128, 61, 0.08);
  --neu-orange-border: rgba(184, 114, 39, 0.2);
  --neu-mono: 'JetBrains Mono', ui-monospace, 'Cascadia Code', monospace;
  --neu-sans: 'Inter', system-ui, -apple-system, sans-serif;
  font-family: var(--neu-sans);
  background: var(--neu-bg);
  color: var(--neu-text-heading);
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.tsg-header {
  flex-shrink: 0; height: 46px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px; background: var(--neu-bg);
  box-shadow: 0 2px 6px var(--neu-shadow-dark), 0 -1px 2px var(--neu-shadow-light);
  z-index: 1;
}
.tsg-h-left { display: flex; align-items: center; gap: 10px; }
.tsg-h-title { font-size: 13px; font-weight: 600; letter-spacing: -0.01em; color: var(--neu-text-heading); }
.tsg-h-dot { color: var(--neu-text-faint); font-size: 18px; line-height: 1; }
.tsg-h-sub { font-size: 12px; font-family: var(--neu-mono); color: var(--neu-text-mute); }
.tsg-h-pill {
  font-size: 10px; font-family: var(--neu-mono); font-weight: 500;
  padding: 2px 8px; border-radius: 100px; background: var(--neu-bg); color: var(--neu-text-mute);
  box-shadow: inset 1px 1px 2px var(--neu-shadow-dark), inset -1px -1px 2px var(--neu-shadow-light);
}
.tsg-main { display: flex; flex: 1; overflow: hidden; }
.tsg-sidebar {
  width: 260px; flex-shrink: 0; background: var(--neu-bg);
  overflow-y: auto; padding: 20px;
  display: flex; flex-direction: column; gap: 28px;
  box-shadow: 2px 0 8px var(--neu-shadow-dark);
}
.tsg-ctrl-label {
  font-size: 10px; font-weight: 600; letter-spacing: 0.09em;
  text-transform: uppercase; color: var(--neu-text-mute); margin-bottom: 12px;
}
.tsg-base-row { display: flex; align-items: baseline; gap: 4px; margin-bottom: 14px; }
.tsg-base-input {
  font-size: 30px; font-weight: 600; font-family: var(--neu-mono);
  color: var(--neu-text-heading); border: none; outline: none;
  background: transparent; width: 68px; letter-spacing: -0.03em; line-height: 1;
  -moz-appearance: textfield;
}
.tsg-base-input::-webkit-inner-spin-button,
.tsg-base-input::-webkit-outer-spin-button { -webkit-appearance: none; }
.tsg-base-unit { font-size: 15px; font-family: var(--neu-mono); color: var(--neu-text-mute); }
.tsg-wrap input[type="range"] {
  -webkit-appearance: none; appearance: none; width: 100%; height: 6px;
  border-radius: 3px; cursor: pointer; outline: none; background: var(--neu-surface);
  box-shadow: inset 1px 1px 3px var(--neu-shadow-dark), inset -1px -1px 3px var(--neu-shadow-light);
}
.tsg-wrap input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
  background: var(--neu-bg); border: none;
  box-shadow: 2px 2px 5px var(--neu-shadow-dark), -2px -2px 5px var(--neu-shadow-light);
  transition: box-shadow 0.15s;
}
.tsg-range-marks {
  display: flex; justify-content: space-between; margin-top: 7px;
  font-size: 10px; font-family: var(--neu-mono); color: var(--neu-text-mute);
}
.tsg-presets { display: flex; flex-direction: column; gap: 3px; }
.tsg-preset {
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 9px; border-radius: 8px; border: none;
  background: transparent; cursor: pointer; text-align: left;
  font-family: var(--neu-sans); transition: background 0.15s, box-shadow 0.15s;
}
.tsg-preset:hover {
  background: var(--neu-surface);
  box-shadow: inset 1px 1px 2px var(--neu-surface-inset-dark), inset -1px -1px 2px var(--neu-surface-inset-light);
}
.tsg-preset.on {
  background: var(--neu-surface);
  box-shadow: inset 2px 2px 4px var(--neu-surface-inset-dark), inset -2px -2px 4px var(--neu-surface-inset-light);
}
.tsg-pleft { display: flex; flex-direction: column; gap: 1px; }
.tsg-pname { font-size: 13px; font-weight: 500; color: var(--neu-text-body); }
.tsg-preset.on .tsg-pname { color: var(--neu-accent); }
.tsg-phint { font-size: 10px; color: var(--neu-text-faint); }
.tsg-preset.on .tsg-phint { color: var(--neu-accent); opacity: 0.5; }
.tsg-pval { font-size: 11px; font-family: var(--neu-mono); color: var(--neu-text-mute); }
.tsg-preset.on .tsg-pval { color: var(--neu-accent); opacity: 0.65; }
.tsg-custom-row {
  display: flex; align-items: center; gap: 8px; margin-top: 6px; padding: 7px 9px;
  border-radius: 8px; background: var(--neu-surface);
  box-shadow: inset 1px 1px 3px var(--neu-surface-inset-dark), inset -1px -1px 3px var(--neu-surface-inset-light);
  transition: box-shadow 0.15s;
}
.tsg-custom-row:focus-within {
  box-shadow: inset 2px 2px 4px var(--neu-surface-inset-dark), inset -2px -2px 4px var(--neu-surface-inset-light), 0 0 0 2px rgba(var(--neu-accent-rgb), 0.25);
}
.tsg-clabel { font-size: 12px; color: var(--neu-text-mute); flex: 1; }
.tsg-cinput {
  width: 56px; text-align: right; font-family: var(--neu-mono); font-size: 12px;
  border: none; background: transparent; color: var(--neu-text-heading);
  outline: none; -moz-appearance: textfield;
}
.tsg-cinput::-webkit-inner-spin-button,
.tsg-cinput::-webkit-outer-spin-button { -webkit-appearance: none; }
.tsg-preview { flex: 1; overflow-y: auto; padding: 20px 32px 56px; }
.tsg-scale-row {
  display: grid; grid-template-columns: 88px 1fr auto;
  align-items: baseline; gap: 12px; padding: 10px; border-radius: 8px;
  transition: background 0.15s, box-shadow 0.15s;
}
.tsg-scale-row:hover {
  background: var(--neu-surface);
  box-shadow: inset 1px 1px 2px var(--neu-surface-inset-dark), inset -1px -1px 2px var(--neu-surface-inset-light);
}
.tsg-scale-row.exp-one { grid-template-columns: 88px 1fr auto auto; }
.tsg-top {
  font-size: 30px; font-weight: 600; font-family: var(--neu-mono);
  color: var(--neu-text-heading); border: none; outline: none;
  background: transparent; letter-spacing: -0.03em; line-height: 1;
  display: flex; gap: 12px; margin-bottom: 4px; justify-content: space-between;
}
.tsg-current { display: flex; gap: 12px; }
.tsg-rnote {
  font-size: 11px; font-family: var(--neu-mono); font-weight: 500;
  color: var(--neu-text-mute); white-space: nowrap; margin-bottom: 8px;
}
.tsg-rkey {
  font-size: 11px; font-family: var(--neu-mono); font-weight: 500;
  color: var(--neu-text-mute); white-space: nowrap;
}
.tsg-rexp {
  font-size: 11px; font-family: var(--neu-mono); font-weight: 500;
  color: var(--neu-text-heading); white-space: nowrap;
  background-color: var(--neu-shadow-dark); border-radius: 4px;
  padding-right: 4px; padding-left: 4px; text-align: center;
}
.tsg-scale-row.body-zone .tsg-rkey { color: var(--neu-orange); }
.tsg-rtext {
  color: var(--neu-text-heading); line-height: 1.15; font-weight: 500;
  letter-spacing: -0.02em;
  transition: font-size 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}
.tsg-rmeta { display: flex; align-items: center; gap: 5px; white-space: nowrap; }
.tsg-rpx { font-size: 11px; font-family: var(--neu-mono); color: var(--neu-text-mute); }
.tsg-scale-row.body-zone .tsg-rpx { color: var(--neu-orange); }
.tsg-rbadge {
  font-size: 9px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
  padding: 1px 5px; border-radius: 3px;
  background: var(--neu-orange-bg); color: var(--neu-orange);
  border: 1px solid var(--neu-orange-border);
}
.tsg-rbutton { display: flex; gap: 12px; }
.tsg-sep {
  height: 2px; border: none; margin: 20px 0; border-radius: 1px;
  background: var(--neu-surface);
  box-shadow: inset 1px 1px 1px var(--neu-shadow-dark), 0 1px 1px var(--neu-shadow-light);
}
.tsg-out-box {
  border-radius: 12px; overflow: hidden; background: var(--neu-surface);
  box-shadow: inset 2px 2px 5px var(--neu-surface-inset-dark), inset -2px -2px 5px var(--neu-surface-inset-light);
}
.tsg-out-header {
  display: flex; align-items: center; justify-content: space-between; padding: 9px 14px;
}
.tsg-out-label { font-size: 11px; font-family: var(--neu-mono); color: var(--neu-text-mute); }
.tsg-copy-btn {
  font-size: 11px; font-family: var(--neu-mono); font-weight: 500;
  padding: 4px 12px; border-radius: 8px; border: none;
  background: var(--neu-bg); color: var(--neu-text-body); cursor: pointer;
  box-shadow: 2px 2px 5px var(--neu-shadow-dark), -2px -2px 5px var(--neu-shadow-light);
  transition: all 0.15s;
}
.tsg-copy-btn:hover { color: var(--neu-accent); }
.tsg-copy-btn:active {
  box-shadow: inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light);
}
.tsg-copy-btn.ok {
  color: var(--neu-orange);
  box-shadow: inset 2px 2px 4px var(--neu-shadow-dark), inset -2px -2px 4px var(--neu-shadow-light);
}
.tsg-out-code {
  padding: 14px 16px; font-family: var(--neu-mono); font-size: 11.5px;
  line-height: 1.75; overflow-x: auto; white-space: pre; color: var(--neu-text-body);
}
.tsg-t-sel { color: var(--neu-text-mute); }
.tsg-t-prop { color: var(--neu-accent); }
.tsg-t-val { color: #7c3aed; }
.tsg-t-px { color: #059669; }
.tsg-scene-box {
  border-radius: 12px; overflow: hidden; background: var(--neu-surface); margin-top: 20px;
  box-shadow: inset 2px 2px 5px var(--neu-surface-inset-dark), inset -2px -2px 5px var(--neu-surface-inset-light);
}
.tsg-sc { padding: 16px 20px; color: var(--neu-text-heading); line-height: 1.3; }
.tsg-sc * { transition: font-size 0.22s cubic-bezier(0.4, 0, 0.2, 1); }
.tsg-sc-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding-bottom: 12px; border-bottom: 1px solid var(--neu-shadow-dark); margin-bottom: 16px;
}
.tsg-sc-nav-links { display: flex; align-items: center; gap: 14px; }
.tsg-sc-pill { padding: 3px 12px; border-radius: 20px; border: 1px solid var(--neu-text-mute); }
.tsg-sc-center { text-align: center; margin-bottom: 10px; }
.tsg-sc-badge {
  display: inline-block; padding: 3px 12px; border-radius: 20px;
  border: 1px solid var(--neu-shadow-dark); letter-spacing: 0.06em; font-weight: 600;
}
.tsg-sc-hero { text-align: center; font-weight: 700; line-height: 1.1; margin: 0 0 10px; letter-spacing: -0.03em; }
.tsg-sc-sub { text-align: center; color: var(--neu-text-body); margin: 0 auto 14px; max-width: 80%; line-height: 1.5; }
.tsg-sc-cta {
  display: inline-block; padding: 6px 20px; border-radius: 6px;
  background: var(--neu-text-heading); color: var(--neu-bg); font-weight: 600;
}
.tsg-sc-img { background: var(--neu-shadow-dark); border-radius: 8px; margin: 12px 0; opacity: 0.2; }
.tsg-sc-logos {
  display: flex; align-items: center; justify-content: center; gap: 20px;
  color: var(--neu-text-mute); padding: 6px 0; font-weight: 700; letter-spacing: 0.02em;
}
.tsg-sc-blog-cards { display: flex; flex-direction: column; gap: 10px; margin-top: 12px; }
.tsg-sc-blog-card {
  display: flex; gap: 10px; align-items: flex-start;
  padding-bottom: 10px; border-bottom: 1px solid var(--neu-shadow-dark);
}
.tsg-sc-blog-thumb {
  width: 60px; height: 48px; flex-shrink: 0;
  background: var(--neu-shadow-dark); border-radius: 4px; opacity: 0.2;
}
.tsg-sc-blog-info { flex: 1; min-width: 0; }
.tsg-sc-corp-hero { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 14px; }
.tsg-sc-corp-stats {
  display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;
  padding-top: 12px; border-top: 1px solid var(--neu-shadow-dark);
}
.tsg-sc-editorial { background: rgba(0,0,0,0.02); }
.tsg-sc-ed-feature { display: flex; gap: 14px; align-items: flex-start; margin: 14px 0; }
.tsg-sc-ed-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.tsg-sc-ed-card { border-radius: 4px; }
.tsg-sc-landing-features { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.tsg-sc-landing-card {
  padding: 10px; border-radius: 8px; background: var(--neu-bg);
  box-shadow: inset 1px 1px 2px var(--neu-surface-inset-dark), inset -1px -1px 2px var(--neu-surface-inset-light);
}
.tsg-sc-hero-scene { display: flex; align-items: center; justify-content: center; min-height: 200px; text-align: center; }
@media (max-width: 640px) {
  .tsg-wrap { height: auto; min-height: 100vh; }
  .tsg-main { flex-direction: column; }
  .tsg-sidebar { width: 100%; box-shadow: 0 2px 8px var(--neu-shadow-dark); }
  .tsg-preview { min-height: 400px; }
  .tsg-scale-row { grid-template-columns: 72px 1fr auto; gap: 8px; }
}
      `}</style>

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
          <aside className="tsg-sidebar">
            <div>
              <div className="tsg-ctrl-label">Base Size</div>
              <div className="tsg-base-row">
                <input className="tsg-base-input" type="number" value={base} min={10} max={24} onChange={(e) => handleBaseInput(parseInt(e.target.value, 10))} />
                <span className="tsg-base-unit">px</span>
              </div>
              <input type="range" min={10} max={24} step={1} value={base} onChange={(e) => setBase(parseInt(e.target.value, 10))} />
              <div className="tsg-range-marks"><span>10</span><span>16</span><span>24</span></div>
            </div>

            <div>
              <div className="tsg-ctrl-label">Scale Ratio</div>
              <div className="tsg-presets">
                {PRESETS.map((p) => (
                  <button key={p.r} className={`tsg-preset${activePreset === p.r ? " on" : ""}`} onClick={() => handlePreset(p.r, p.scene)}>
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
                <input className="tsg-cinput" type="number" min={1.001} max={2.5} step={0.001} placeholder="1.1–2.5" value={customVal} onChange={(e) => handleCustom(e.target.value)} />
              </div>
            </div>

            <div>
              <div className="tsg-ctrl-label">Font Family</div>
              <div className="tsg-presets">
                {FONTS.map((f, i) => (
                  <button key={f.name} className={`tsg-preset${fontIdx === i ? " on" : ""}`} onClick={() => setFontIdx(i)}>
                    <span className="tsg-pname" style={{ fontFamily: f.family }}>{f.name}</span>
                    <span className="tsg-pval">{f.type}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="tsg-preview">
            <div>
              <div className="tsg-rnote">Formula: base × ratio<sup>exp</sup>, snapped to nearest even</div>
              <div className="tsg-top">
                <div className="tsg-current">
                  <p>{base} × {ratio}<sup>exp</sup> {font.name}</p>
                  <button className="tsg-copy-btn" onClick={constReset}>Reset</button>
                </div>
                <div className="tsg-rbutton">
                  <button className="tsg-copy-btn" onClick={() => setShowPreview(!showPreview)}>{showPreview ? "Hide Preview" : "Show Preview"}</button>
                  <button className="tsg-copy-btn" onClick={() => setShowExp(!showExp)}>{showExp ? "Hide Exp" : "Show Exp"}</button>
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
                    <span className="tsg-rtext" style={{ fontSize: sz, fontFamily: font.family }}>{s.text}</span>
                    {showExp && (
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
                <button className={`tsg-copy-btn${copied ? " ok" : ""}`} onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
              </div>
              <div className="tsg-out-code">
                <span className="tsg-t-sel">:root</span>
                {" {\n"}
                {"  "}<span className="tsg-t-prop">--font-body</span>: <span className="tsg-t-val">{font.family}</span>;{"\n"}
                {STEPS.map((s) => {
                  const sz = stepSize(s.exp, base, ratio);
                  return (
                    <span key={s.key}>
                      {"  "}<span className="tsg-t-prop">--text-{s.key}</span>: <span className="tsg-t-val">{sz}</span><span className="tsg-t-px">px</span>;{"\n"}
                    </span>
                  );
                })}
                {"}"}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
