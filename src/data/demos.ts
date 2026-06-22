export type DemoType = "codepen" | "article" | "demo" | "experiment";

export interface Introduction {
  emphasis?: string[];
  body?: string;
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
}

export const DEMOS: Demo[] = [
  {
    date: "2026-06-22",
    title: "Dark Mode Switch",
    description: "A toggle with squish micro-interaction — CSS-only knob deformation on press.",
    type: "demo",
    tags: ["React", "CSS", "A11y"],
    url: "/demos/dark-mode-switch",
    introduction: {
      body: "A toggle switch with a squish micro-interaction. Press and hold to see the knob compress before snapping to the other side.",
      emphasis: [
        "Squish on press — scaleX/scaleY deformation via CSS :active",
        'Accessible — role="switch" with aria-checked and visible focus ring',
        "Zero JS animation — pure CSS transitions with cubic-bezier overshoot",
      ],
    },
  },
];
