# Building a Neumorphic Dark Mode Switch with Pure CSS Theming

A neumorphic toggle switch built with gradients, shadows, and carefully crafted transform effects to create a tactile, physical interaction.

---

Back when I was a designer, I used to joke with the engineers I worked with that I'd hand them the most absurdly over-specced switch component I could dream up. Their answer was always the same: go build it yourself, then. So when I sat down to actually start this project, that's exactly where I began.

---

## What makes it tick

- **Switch Animation** — the knob squashes horizontally on press, springs back across the track with a slight overshoot, and crossfades from a sun into a moon along the way.
- **Theme Engine** — flipping a single class swaps the entire color palette through CSS variables alone, no re-render and no JavaScript color math.
- **Glow Effect** — a blurred radial-gradient trail and halo ride along with the knob, shifting color automatically as the theme changes.

---

## Anatomy of the Switch

At its core, the entire toggle is just a `<button>`: `role="switch"`. Reaching for a native `<button>` instead of a `div` with a click handler means keyboard support — Space toggles it, no extra code required — and correct screen-reader semantics.

Inside that button, four layers stack on top of each other, each doing exactly one job.

1. At the very bottom sits `.dms-track-fill`, a deep-blue gradient covering the whole track at zero opacity by default, fading in only once `.dms-dark` is applied — it's what quietly swaps the daytime track for a night-sky backdrop.
2. Above it is `.dms-glow`, the halo trailing behind the knob. It lives as its own element rather than inside `.dms-knob` specifically because its position is calculated as a percentage of the switch's own top-left and bottom-right corners — nested inside the knob, it would inherit the knob's local coordinate space and lose that alignment.
3. Next come the two `.dms-track-text` labels, Day and Night, toggled via `opacity`.
4. And only at the very top sits the circular `.dms-knob` itself. So, nothing underneath ever gets visually blocked.

```tsx
<button
  className="dms-switch"
  role="switch"
  aria-checked={dark}
  aria-label="Toggle dark mode"
  onClick={() => setDark(!dark)}
>
  <div className="dms-track-fill" />   {/* 1 */}
  <div className="dms-glow" />         {/* 2 */}
  <span className="dms-track-text day">Day</span>    {/* 3 */}
  <span className="dms-track-text night">Night</span> {/* 3 */}
  <div className="dms-knob">           {/* 4 */}
    <div className="dms-icon">
      <SunIcon />
      <MoonIcon />
    </div>
  </div>
</button>
```

---

## CSS Custom-Property Theming

The real star of this project is the switch, but along the way it also picked up a full theming system — the kind of infrastructure that usually gets cut from past projects under time pressure, so this time it got finished properly.

The approach is simple: `.dms-scene`, the outermost wrapper, defines custom properties as the light palette, and `.dms-dark` redefines that exact same set of variable names with a dark set of values. In other words, the only real difference between light and dark is which values a shared set of variables happens to hold.

That keeps the React side almost trivially simple: flip a `dark` boolean, decide whether to attach the `dms-dark` class, and hand the rest off to the CSS cascade.

```tsx
<div className={`dms-scene${dark ? " dms-dark" : ""}`}>
  {/* ... */}
</div>
```

```css
.dms-scene {
  --neu-bg: #e0e5ec;
  --neu-shadow-dark: #b8bec7;
  --neu-shadow-light: #ffffff;
  /* ... */
}

.dms-dark {
  --neu-bg: #1a1f2e;
  --neu-shadow-dark: #0d1017;
  --neu-shadow-light: #272d3f;
  /* ... */
}
```

But swapping a variable's value doesn't, on its own, produce an animation — a CSS custom property's value changes instantly, with no interpolation. What actually makes the color look like it's fading is a separate `transition` declared on whichever element consumes that variable. `.dms-switch`, for instance, explicitly sets `transition` so its background and shadow cross-fade together over that half-second window.

```css
.dms-switch {
  background: var(--neu-bg);
  transition: background 0.5s, box-shadow 0.5s;
}
```

That's the part of this system that's easiest to forget and most important to get right: every themed element has to opt into its own `transition`, or the color change will snap instead of fade.

---

## Glow Effect

Beyond the tactile, neumorphic feel, the other thing this project leans on is glow — I've always liked interfaces that look clean on the surface while something glows quietly underneath, layered without ever feeling cluttered.

`.dms-glow` itself is really just a `div` built from a `radial-gradient` with concentric color stops, blurred at the edges.

The color of that glow comes from a single token, `--neu-glow`, but instead of the usual hex string, it's stored as a plain RGB triplet (`251, 191, 64`, for example) specifically so it can drop straight into `rgba(var(--neu-glow), 0.6)` and have its opacity adjusted freely at each layer — a hex string wouldn't let you stack different opacities on top of the same variable. Because that same token gets reassigned a different set of numbers under `.dms-dark`, the moment the theme flips, the glow shifts from warm orange to cool blue automatically, with zero extra color logic in JavaScript.

```css
.dms-scene {
  --neu-glow: 251, 191, 64;  /* RGB triplet only */
}
.dms-dark {
  --neu-glow: 96, 128, 248;  /* RGB triplet only */
}
```

Positioning `.dms-glow` relies on a pattern that shows up constantly in CSS: `position: absolute` paired with a percentage-based `top` and `left`, then `transform: translate(-50%, -50%)` to pull the anchor point back from the default top-left corner to the element's own center — that way, changing `top` and `left` moves the center of the glow rather than its corner. Flip to dark mode and `top`/`left` jump from `10%` to `90%`, and the whole glow rides along with the knob to the other end of the track.

```css
.dms-glow {
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-50%, -50%);

  background: radial-gradient(
    circle,
    rgba(var(--neu-glow), 0.6) 0%,
    rgba(var(--neu-glow), 0.22) 45%,
    rgba(var(--neu-glow), 0) 75%
  );
  filter: blur(8px);
  transition: left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
              background 0.5s;
}

.dms-dark .dms-glow {
  top: 90%;
  left: 90%;
}
```

And it's worth not overlooking that `.dms-glow` declares its own `transition` — without which both the movement and the color change would snap instantly; the bounce and the fade you actually see both come from that one line.

---

## The Knob Itself

What actually decides what the knob feels like it's made of is the background: `radial-gradient` deliberately pushes its light source off-center to `38% 38%`, simulating something lit from one side rather than a flat, lightless color swatch. The sense of depth comes from four `box-shadow` layers stacked together.

```css
.dms-knob {
  background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020);
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.18),        /* drop shadow — lifts the knob */
    -2px -2px 7px rgba(255, 255, 255, 0.85),  /* highlight — 3D depth */
    inset 1px 1px 3px rgba(255, 210, 100, 0.6), /* inner glow — glassy feel */
    0 0 18px rgba(255, 150, 40, 0.4);          /* outer halo — warm scatter */
}
```

`left` animates over `0.45s` with `cubic-bezier(0.34, 1.56, 0.64, 1)` for a bounce with a slight overshoot, `transform` rides the same curve to squash in sync, and `background` and `box-shadow` each cross-fade their colors over `0.5s`. Stack all four transitions together and the knob reads as something with weight that springs into place, rather than a sprite that snaps from one side to the other.

```css
.dms-knob {
  transition:
    left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s,
    box-shadow 0.5s;
}
```

Flip to dark mode and the exact same set of properties gets repainted in cool blue.

```css
.dms-dark .dms-knob {
  background: radial-gradient(circle at 38% 38%, #6080f8, #1a30c0);
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.45),
    -2px -2px 7px rgba(60, 80, 180, 0.25),
    inset 1px 1px 3px rgba(120, 150, 255, 0.5),
    0 0 20px rgba(60, 100, 255, 0.5);
}
```

The instant you press it, `:active` layers on an additional `scaleX(1.18)`, squashing the knob horizontally to simulate the feel of a finger pressing down.

```css
.dms-switch:active .dms-knob {
  transform: translateY(-50%) scaleX(1.18);
}
```

And finally, `.dms-knob::before` is the small halo sitting directly behind the knob — it carries its own `transition` so that this close-in halo fades its color in step with everything else during a theme switch.

---

## Neumorphic Surface Details

Most of the tactile feel in this scene comes down to nothing more than which direction the shadows fall.

**Inset = sunken.** Firing an `inset box-shadow` from two opposite corners at once — a dark shadow on one side, a light highlight on the other — reads as a surface that's been pressed inward, and that's exactly what `.neu-card` uses for the text block; its background is also deliberately a shade darker than the scene's base color, which deepens that sunken look.

```css
.neu-card {
  background: var(--neu-surface);
  box-shadow:
    inset 2px 2px 5px var(--neu-surface-inset-dark),
    inset -2px -2px 5px var(--neu-surface-inset-light);
}
```

**Outward = raised.** Flip the same pair of shadows to point outward from two opposite corners instead, and the surface reads as raised rather than pressed in — that's `.neu-raised` used on the icon tiles.

```css
.neu-raised {
  background: var(--neu-surface);
  box-shadow:
    3px 3px 8px var(--neu-shadow-dark),
    -3px -3px 8px var(--neu-shadow-light);
}
```

Those icon tiles then layer three separate interaction states on top:

- **`:hover`** — the element floats up 2px with an intentional shadow imbalance, meant to read as light hitting from one direction.

```css
.neu-raised:hover {
  transform: translateY(-2px);
  background: var(--neu-surface-inset-light);
  color: var(--neu-focus);
  box-shadow:
    5px 5px 24px rgba(var(--neu-glow), 0.6),
    -5px -5px 24px rgba(var(--neu-glow), 0.22);
}
```

- **`:active`** — the element settles back while the whole shadow set flips to `inset`, so it genuinely looks pressed into the surface.

```css
.neu-raised:active {
  transform: translateY(0) scale(0.95);
  box-shadow:
    inset 2px 2px 12px rgba(var(--neu-glow), 0.6),
    inset -2px -2px 12px rgba(var(--neu-glow), 0.22);
}
```

- **`:focus-visible`** — simply layers an outline ring on top while leaving the shadow direction untouched. Purely so that anyone navigating by keyboard can still see exactly which tile currently has focus.

```css
.neu-raised:focus-visible {
  box-shadow:
    3px 3px 8px var(--neu-shadow-dark),
    -3px -3px 8px var(--neu-shadow-light),
    0 0 0 3px var(--neu-focus);
}
```

---

## References

- [MDN — Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN — cubic-bezier() easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function/cubic-bezier)
- [Neumorphism.io — shadow generator & reference](https://neumorphism.io/)
- [31 CSS Toggle Switch Examples](https://www.frontendplanet.com/css-toggle-switch-examples/)

---

*Tags: React, CSS, Accessibility*
