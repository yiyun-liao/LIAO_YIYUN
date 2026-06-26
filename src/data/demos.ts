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
  refs?: Reference[];
}

export interface CodeEmbed {
  sandboxId: string;
  view?: string;
  module?: string;
}

export interface RelativeArticle {
  title: L;
  url: string;
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
  previousArticle?: RelativeArticle;
  nextArticle?:RelativeArticle;
}

