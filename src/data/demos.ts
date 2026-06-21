export type DemoType = "codepen" | "article" | "demo" | "experiment";

export interface Demo {
  date: string;
  title: string;
  description: string;
  type: DemoType;
  tags: string[];
  url: string;
  image?: string;
}

export const DEMOS: Demo[] = [
  // Add one per day — newest first
  // {
  //   date: "2026-06-21",
  //   title: "Example Demo",
  //   description: "Short description of what this is.",
  //   type: "codepen",
  //   tags: ["CSS", "Animation"],
  //   url: "https://codepen.io/...",
  //   image: "assets/demos/example.png",
  // },
];
