import type { L } from "@/i18n/types";

export type DemoType = "codepen" | "article" | "demo" | "experiment";

export interface BodySection {
  title: L;
  content: L;
}

export interface CodeBlock {
  codeType: string;
  code: string;
}

export interface Reference {
  label: string;
  url: string;
}

export interface Introduction {
  outline?: L;
  emphasis?: L[];
  motivation?: L;
  refs?: Reference[];
}

export interface CodeEmbed {
  sandboxId: string;
  view?: "editor" | "split" | "preview";
}

export interface Demo {
  date: string;
  title: L;
  description: L;
  type: DemoType;
  tags: string[];
  url: string;
  image?: string;
  introduction?: Introduction;
  codeEmbed?: CodeEmbed;
}

