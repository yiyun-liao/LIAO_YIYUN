export type DemoType = "codepen" | "article" | "demo" | "experiment";

export interface BodySection {
  title: string;
  content: string;
  code?: string;
}

export interface Reference {
  label: string;
  url: string;
}

export interface Introduction {
  outline?: string;
  emphasis?: string[];
  sections?: BodySection[];
  motivation?: string;
  refs?: Reference[];
}

export interface CodeEmbed {
  sandboxId: string;
  view?: "editor" | "split" | "preview";
}

export interface Demo {
  date: string;
  title: string;
  description: string;
  type: DemoType;
  tags: string[];
  url: string;
  image?: string;
  introduction?: Introduction;
  codeEmbed?: CodeEmbed;
}

export const DEMOS: Demo[] = [
  {
    date: "2026-06-22",
    title: "Dark Mode Switch",
    description: "Neumorphic toggle with CSS custom-property theming, knob glow.",
    type: "demo",
    tags: ["React", "CSS", "A11y"],
    url: "/demos/dark-mode-switch",
    codeEmbed: { sandboxId: "wqn6nn" },
    introduction: {
      outline:
        "A neumorphic dark-mode toggle that drives an entire light/dark theme through CSS custom properties.",
      emphasis: [
        "Switch Animation — press deformation, gradient knob, and sun/moon icon crossfade",
        "CSS Custom-Property Theming — 15+ tokens swap palettes in one class toggle",
        "Glow Effect — radial-gradient trail and halo that follow the knob",
      ],
      sections: [
        {
          title: "Switch Animation",
          content:
            "The knob uses a radial-gradient to create a sun-to-orange gradient in light mode and a blue gradient in dark mode. Multiple layers of box-shadow add depth: outer shadow for floating, inner shadow (inset) for a glossy highlight, and a glow shadow for ambient light. On press, CSS :active applies scaleX(1.18) to squish the knob horizontally before it springs to the other side via cubic-bezier(0.34, 1.56, 0.64, 1). The switch also supports keyboard Space and has a visible focus-visible ring.",
          code: `.dms-knob {
  background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020);
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.18),
    -2px -2px 7px rgba(255, 255, 255, 0.85),
    inset 1px 1px 3px rgba(255, 210, 100, 0.6),
    0 0 18px rgba(255, 150, 40, 0.4);
  transition:
    left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.5s, box-shadow 0.5s;
}

.dms-switch:active .dms-knob {
  transform: translateY(-50%) scaleX(1.18);
}`,
        },
        {
          title: "CSS Custom-Property Theming",
          content:
            "Although this project is about the switch itself, it also builds a full token-based theme system — something I hadn't prioritized in previous work due to time and iteration costs. The .dms-scene element defines 15+ CSS custom properties for the light palette; .dms-dark overrides every token for the dark palette. A single React state toggle adds or removes the class, and every element in the scene transitions smoothly because they all reference the same tokens.",
          code: `.dms-scene {
  --neu-bg: #e0e5ec;
  --neu-shadow-dark: #b8bec7;
  --neu-shadow-light: #ffffff;
  --neu-surface: #d4d9e2;
  --neu-text-heading: #4a5060;
  --neu-accent: #8a95a8;
  /* … 15+ tokens */
}

.dms-dark {
  --neu-bg: #1a1f2e;
  --neu-shadow-dark: #0d1017;
  --neu-shadow-light: #272d3f;
  --neu-surface: #232a3c;
  --neu-text-heading: #c0cce0;
  --neu-accent: #6080f8;
}`,
        },
        {
          title: "Glow Effect",
          content:
            "I was drawn to designs that feel clean yet layered — a soft glow behind an element can add depth without visual clutter. The knob has two glow layers: a .dms-glow div that follows it across the track using a radial-gradient with filter: blur(8px), and a ::before pseudo-element halo sitting right behind the knob. Both use the --neu-glow token (an RGB triplet) so the color shifts from warm orange to cool blue along with the theme.",
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
        },
        {
          title: "Neumorphic Surface Details",
          content:
            "This project uses a lot of background and box-shadow fine-tuning to create tactile surfaces. Inset shadows (inset box-shadow from two opposite directions) make elements look pressed into the surface — used on the text card (.neu-card). Outer shadows from two opposite directions make elements look raised above the surface — used on the icon gallery tiles (.neu-raised). The icon tiles also have hover (lift + glow), active (press-in with inset glow), and focus-visible states.",
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
        },
      ],
      motivation:
        "當設計師時還會跟前端工程師開玩笑說我要出超級複雜的 switch spec，那時候他們會接著說請我自己做。所以在開始進行這個計畫時就想說，那就以這個為開頭吧。",
      refs: [],
    },
  },
];
