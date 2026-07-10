# Building a Type Scale Generator: From Musical Intervals to Production CSS

This is a tool that makes the math visible: pick a ratio, see exactly how each step is derived, and walk away with production-ready CSS variables instead of a screenshot from a design tool.

---

## 1. The Modular Scale Formula

The entire tool runs on one line of math: `base × ratio^exp`. The base is your body text size — typically 16px, the browser default. The ratio is a multiplier borrowed from musical intervals: a Major Third (1.250) produces a gentle, editorial feel; a Perfect Fourth (1.333) creates stronger contrast. The exponent is simply the step index: 0 for the base size, positive numbers go larger, negative numbers go smaller.

What makes this useful is that every size in the scale is mathematically related. There's no arbitrary jump between heading levels — the proportion is consistent, which is exactly what gives a page its visual rhythm.

```ts
const round    = (n: number) => Math.round(n * 100) / 100;
const snapEven = (n: number) => Math.round(n / 2) * 2;

const stepSize = (exp: number, base: number, ratio: number) => {
  const raw = round(base * Math.pow(ratio, exp));
  return snapEven(raw);  // 22.5 → 22, 33.75 → 34
};
```

`snapEven` rounds every result to the nearest even number — `Math.round(n / 2) * 2`. This isn't just cosmetic: even pixel values align cleanly with 2px and 4px spacing grids, avoid sub-pixel rendering artifacts on non-retina screens, and produce font sizes that feel deliberate rather than arbitrary. A scale that outputs `22px` instead of `22.5px` is one you can hand to a developer without a footnote.

---

## 2. Musical Intervals as Ratios

The ratio presets aren't random numbers — they come from musical tuning theory, where intervals between notes follow exact frequency ratios. A Perfect Fifth is 3:2 (1.500), a Perfect Fourth is 4:3 (1.333), and the Golden Ratio is roughly 1.618. These proportions have been considered harmonious for centuries, and they translate directly to visual rhythm.

Smaller ratios like Minor Second (1.067) produce a tight, compact scale — useful for dense UIs like dashboards where you need many distinct sizes without dramatic jumps. Larger ratios like the Golden Ratio (1.618) create bold contrast — better for editorial layouts or landing pages where headings need to command attention. The tool gives you eight presets to audition, plus a custom input for anything in between.

```ts
const PRESETS = [
  { name: "Minor Second",     r: 1.067 },  // tight, compact
  { name: "Major Second",     r: 1.125 },
  { name: "Minor Third",      r: 1.200 },
  { name: "Major Third",      r: 1.250 },  // default — balanced
  { name: "Perfect Fourth",   r: 1.333 },
  { name: "Aug. Fourth (√2)", r: 1.414 },
  { name: "Perfect Fifth",    r: 1.500 },
  { name: "Golden Ratio",     r: 1.618 },  // dramatic contrast
] as const;
```

---

## 3. Bidirectional Controls

The base size has two inputs that stay in sync: a large number input for precision and a range slider for exploration. Both write to the same `base` state, so dragging the slider updates the number and typing a number moves the slider — bidirectional binding with no extra logic.

The number input runs through `handleBaseInput`, which clamps the value to 10–24px. The `v || 16` fallback handles the edge case where the user clears the input entirely — `parseInt("")` returns `NaN`, which is falsy, so the default kicks in.

```tsx
const handleBaseInput = useCallback((v: number) => {
  const clamped = Math.max(10, Math.min(24, v || 16));
  setBase(clamped);
}, []);

// Number input — type a value, slider follows
<input type="number" value={base}
  onChange={e => handleBaseInput(parseInt(e.target.value, 10))} />

// Range slider — drag to explore, number follows
<input type="range" min={10} max={24} value={base}
  onChange={e => setBase(parseInt(e.target.value, 10))} />
```

Ratio presets work the same way. Clicking a preset updates `ratio` and `activePreset` together, and clears any custom value. Typing a custom ratio between 1.001 and 2.5 does the reverse — it sets `activePreset` to 0 so no preset button appears selected. The whole sidebar is driven by three pieces of state: `base`, `ratio`, and which preset is active.

---

## 4. Body Zone Detection

Steps whose computed size falls between 14px and 20px get a green "body" badge. This range marks the comfortable reading zone — sizes that work well for body copy, form inputs, and default UI text. Below 14px, text becomes hard to read at normal viewing distance; above 20px, it starts to feel like a heading.

The detection is intentionally simple: `px >= 14 && px <= 20`. As you change the base or ratio, badges appear and disappear in real time, giving you immediate feedback on which steps in your scale are suitable for body text and which are heading territory.

```tsx
const readable = (px: number) => px >= 14 && px <= 20;

// In the render loop:
const sz = stepSize(s.exp, base, ratio);
const isBody = readable(sz);

<div className={`tsg-scale-row${isBody ? " body-zone" : ""}`}>
  <span className="tsg-rpx">{sz}px</span>
  {isBody && <span className="tsg-rbadge">body</span>}
</div>
```

---

## 5. Smooth Font-Size Transitions

When you change the base or ratio, the sample text in each row smoothly resizes instead of jumping. This works because React updates the `style.fontSize` prop on the same DOM element — no teardown and rebuild. The CSS `transition` on `.tsg-rtext` picks up the change and animates it over 0.22 seconds with an ease curve.

This is one of those details where the implementation choice matters: if you used `innerHTML` or `key` changes to force React to remount the elements, you'd get new DOM nodes every time and the transition would never fire. Keeping the same element and only patching its style is what makes the animation possible.

```css
.tsg-rtext {
  color: var(--neu-text-heading);
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: -0.02em;
  transition: font-size 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}
```

The render just sets `fontSize` directly from the computed step size. React diffs the virtual DOM, finds only the style change, and patches the real DOM in place — the CSS transition handles the rest.

```tsx
<span className="tsg-rtext" style={{ fontSize: sz }}>
  {s.text}
</span>
```

---

## 6. Scene Previews

Each ratio preset auto-switches to a wireframe scene that matches its visual character. Here's the design rationale:

- **Dashboard / Docs** — Minor Second (1.067) · Major Second (1.125). Tight scale keeps many text levels close together. Data labels, table headers, and sidebar links all need to be distinct but not competing — small jumps preserve scannability without visual noise.
- **Blog** — Minor Third (1.200). Moderate contrast separates article titles from body copy while keeping card grids readable. Enough hierarchy for a headline → excerpt → metadata pattern.
- **Corporate** — Major Third (1.250). Balanced proportion that pairs a confident hero heading with comfortable body text. Safe and versatile — the default choice when you don't know the final context.
- **Editorial / Portfolio** — Perfect Fourth (1.333) · Aug. Fourth (1.414). Strong contrast gives magazine-style layouts their dramatic headline-to-body ratio. Feature images and pull quotes benefit from the breathing room.
- **Landing** — Perfect Fifth (1.500). Bold scale makes a single CTA section impossible to miss. Feature cards and stat counters pop without needing color or weight tricks.
- **Hero** — Golden Ratio (1.618). Maximum drama — two words at display size dominate the viewport. Only works when the page has very few text elements competing for attention.

---

## References

- [Modular Scale — every designer's typographic secret](https://every-layout.dev/rudiments/modular-scale/)
- [Type Scale — A Visual Calculator](https://typescale.com/)
- [MDN — Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Practical Typography — font size](https://practicaltypography.com/summary-of-key-rules.html)
