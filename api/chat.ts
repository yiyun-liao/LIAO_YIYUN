import Anthropic from "@anthropic-ai/sdk";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { readFileSync } from "node:fs";
import { join } from "node:path";

function loadSystemPrompt(): string {
  const base = process.cwd();
  const agent = readFileSync(join(base, ".claude/agents/portfolio-assistant.md"), "utf-8");
  const knowledge = readFileSync(join(base, ".claude/agents/yiyun-knowledge.md"), "utf-8");
  const scope = readFileSync(join(base, ".claude/rules/ai-scope.md"), "utf-8");
  return [agent, knowledge, scope].join("\n\n---\n\n");
}

let systemPrompt: string | null = null;
function getSystemPrompt(): string {
  if (!systemPrompt) systemPrompt = loadSystemPrompt();
  return systemPrompt;
}

const rateLimit = new Map<string, number[]>();
const RATE_WINDOW = 60_000;
const RATE_MAX = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateLimit.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW);
  if (hits.length >= RATE_MAX) return true;
  hits.push(now);
  rateLimit.set(ip, hits);
  return false;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Try again in a minute." });
  }

  const { messages } = req.body ?? {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array required" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      system: getSystemPrompt(),
      messages: messages.slice(-10).map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    return res.status(502).json({ error: "Failed to get response from AI" });
  }
}
