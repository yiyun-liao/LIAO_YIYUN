# Stop Guessing Font Sizes — Use a Type Scale Generator Instead

Every design system needs a type scale. But most of us still pick font sizes by feel — 14 for body, 24 for headings, maybe 36 for the hero... and hope the proportions look right. There's a better way.

I built a **Type Scale Generator** that takes one formula and turns it into a complete, consistent set of font sizes you can actually use in production. No plugins, no Figma files — just a browser tool that outputs CSS variables you can copy and paste.

Here's what it does and how to use it.

---

## The Problem: "Just Make It Bigger"

You've been there. A heading doesn't feel prominent enough, so you bump it from 24 to 28. Then the subheading at 20 feels too close, so you push that to 18. Now the body text at 16 looks disconnected. Before you know it, your design has seven slightly-different font sizes with no relationship between them.

The result: inconsistent hierarchy, hard-to-maintain specs, and developers asking "is this 23px or 24px?"

A modular type scale solves this by deriving every size from one formula: **base × ratio**. Change the ratio and the entire hierarchy updates — every level stays proportional.

---

## How It Works: 30-Second Walkthrough

### Step 1 — Set Your Base Size

The base is your body text size. Default is 16px (the browser standard). Use the slider to explore 10–24px, or type a precise value. This is your anchor — everything else scales from here.

### Step 2 — Pick a Ratio

This is where the magic happens. The tool offers 8 presets borrowed from musical intervals — the same proportions that make chords sound harmonious. Each one creates a different level of contrast between your text sizes:

| Ratio | Name | Best For |
|-------|------|----------|
| 1.067 | Minor Second | Dashboard, data-dense UI |
| 1.125 | Major Second | Documentation, long-form content |
| 1.200 | Minor Third | Blog, news, CMS |
| 1.250 | Major Third | Corporate sites, product pages |
| 1.333 | Perfect Fourth | Editorial, magazine layouts |
| 1.414 | Aug. Fourth | Portfolio, creative studios |
| 1.500 | Perfect Fifth | Landing pages, promotions |
| 1.618 | Golden Ratio | Hero-heavy, luxury, fashion |

Don't overthink it — click through the presets and watch the preview change. You'll feel the right one.

### Step 3 — Preview in Context

Numbers in a table don't tell you much. That's why each preset auto-switches to a **wireframe scene** that matches its use case. Pick "Minor Second" and you'll see a compact dashboard layout. Pick "Golden Ratio" and the preview becomes a bold hero section with two words dominating the screen.

Six scenes in total — Dashboard, Blog, Corporate, Editorial, Landing, Hero — each showing how your type scale performs in a realistic layout with nav bars, headings, body copy, cards, and CTAs.

### Step 4 — Choose a Font

Toggle between 5 font options (2 sans-serif, 3 serif) to see how your scale feels in different typefaces. The same ratio can look restrained in Inter and expressive in Georgia.

### Step 5 — Copy the CSS

When you're happy, hit the copy button. You get a `:root` block with `--text-xs` through `--text-5xl` — drop it into your stylesheet and you're done.

```css
:root {
  --font-body: 'Inter', system-ui, sans-serif;
  --text-xs: 10px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-3xl: 40px;
  --text-4xl: 50px;
  --text-5xl: 62px;
}
```

---

## Which Ratio Should I Pick?

If you only remember one thing:

- **Building something dense?** (Dashboard, admin, docs) → Use **1.067–1.125**. Tight scale, many levels, no dramatic jumps. Your sidebar labels and table headers stay readable without fighting each other.

- **Building something readable?** (Blog, corporate, product page) → Use **1.200–1.250**. The sweet spot — headings clearly separate from body text, cards have clean hierarchy, and nothing feels forced.

- **Building something bold?** (Landing page, editorial, portfolio) → Use **1.333–1.500**. Strong contrast lets a single headline command the page. Feature sections and stat counters pop on their own.

- **Building something dramatic?** (Hero section, fashion, luxury) → Use **1.618**. The Golden Ratio. Two words fill the viewport. Only works when the page has very few elements competing for attention.

---

## The "Body Zone" Trick

Here's a detail that saves time: any step that lands between 14–20px gets a green **"body"** badge. This tells you at a glance which sizes in your scale work for body copy, and which have crossed into heading territory.

As you adjust the base and ratio, badges appear and disappear in real time. If your scale has zero body-zone steps, your ratio is probably too aggressive for content-heavy layouts.

---

## Even-Pixel Snapping

Every generated size is automatically rounded to the nearest even number. 22.5px becomes 22px. 33.75px becomes 34px.

Why? Even values align with 2px and 4px spacing grids — the kind most design systems use. They avoid sub-pixel rendering issues on non-retina screens. And they look intentional in a spec, not like floating-point leftovers.

---

## Try It

The tool is free to use — no sign-up, no install. Pick a ratio, see it in context, copy the CSS.

**[→ Open Type Scale Generator](https://yiyun-liao.com/demos/type-scale-generator)**

---

*If you found this useful, I write about design tools and CSS at [yiyun-liao.com](https://yiyun-liao.com).*
