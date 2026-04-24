import { useState, useEffect, useRef } from "react";

const QUICK_PROMPTS = [
  "Why designer → engineer?",
  "Open to roles?",
  "Tell me about Track Stock",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AskYiYun() {
  const [open, setOpen] = useState(false);
  const [, setTeased] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm an agent briefed on Yi-Yun. Ask me anything: stack, ways of working, projects, availability, designer→engineer transition.",
    },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setTeased(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, busy, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setBusy(true);
    try {
      const apiMessages = next
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      const { reply } = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: reply || "(no response)" }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Sorry — I couldn't reach the model just now. Try again in a moment, or email yiyun.bian.design@gmail.com.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {!open && (
        <button
          className="ask-fab ask-fab-shadow fixed right-3 bottom-3 sm:right-5 sm:bottom-5 z-75 flex items-center gap-2.5 px-3.5 py-2.5 sm:px-[18px] sm:py-3 rounded-full bg-ink text-paper font-mono text-[12px] tracking-[.12em] uppercase transition-all duration-[250ms]"
          onClick={() => setOpen(true)}
          aria-label="Ask Yi-Yun"
        >
          <span className="ask-fab-dot w-2 h-2 rounded-full bg-accent" />
          <span className="hidden sm:inline">Ask about Yi-Yun</span>
          <span className="ask-fab-arrow transition-transform duration-200">→</span>
        </button>
      )}

      {open && (
        <div className="ask-enter ask-panel-shadow fixed right-2.5 bottom-2.5 sm:right-5 sm:bottom-5 z-75 w-[calc(100vw-20px)] h-[calc(100vh-20px)] sm:w-[min(380px,calc(100vw-40px))] sm:h-[min(560px,calc(100vh-40px))] bg-paper border border-ink flex flex-col overflow-hidden" role="dialog" aria-label="Ask Yi-Yun">
          <div className="flex justify-between items-center px-4 py-3.5 border-b border-ink bg-paper">
            <div className="flex gap-3 items-center">
              <div className="relative w-10 h-10 rounded-full bg-accent text-white grid place-items-center font-serif text-base tracking-[-.02em]">
                <span className="ask-avatar-ring absolute -inset-1 rounded-full border border-accent opacity-50" />
                Y·Y
              </div>
              <div>
                <div className="font-serif text-lg leading-[1.1]">Ask about Yi-Yun</div>
                <div className="font-mono text-[10px] tracking-[.14em] uppercase text-ink-soft mt-[3px]">AI agent · answers on her behalf</div>
              </div>
            </div>
            <button
              className="w-8 h-8 rounded-full border border-ink/20 grid place-items-center text-sm text-ink-soft transition-all duration-[180ms] hover:bg-ink hover:text-paper hover:border-ink"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2.5 bg-paper-bright" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[82%] px-3.5 py-2.5 rounded-[14px] text-sm leading-[1.5] whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-accent text-white rounded-br-[4px]"
                    : "bg-paper border border-ink/14 rounded-bl-[4px] text-ink"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="bg-paper border border-ink/14 rounded-[14px] rounded-bl-[4px] text-ink ask-typing inline-flex gap-1 px-3.5 py-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft" />
                </div>
              </div>
            )}
            {messages.length <= 1 && !busy && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {QUICK_PROMPTS.map((q) => (
                  <button
                    key={q}
                    className="px-3 py-[7px] border border-ink/20 rounded-full font-mono text-[10px] tracking-[.1em] uppercase text-ink-soft bg-paper transition-all duration-150 hover:border-accent hover:text-accent"
                    onClick={() => {
                      setInput(q);
                      setTimeout(send, 0);
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="flex gap-2 p-3 border-t border-ink/15 bg-paper"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              className="flex-1 border border-ink/20 rounded-full px-3.5 py-2.5 font-sans text-base bg-paper text-ink outline-none transition-[border-color] duration-150 focus:border-accent"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something…"
              disabled={busy}
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="w-10 h-10 rounded-full bg-ink text-paper grid place-items-center transition-all duration-[180ms] hover:enabled:bg-accent disabled:opacity-35 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
          <div className="font-mono text-[9px] tracking-[.12em] uppercase text-mute text-center px-3 py-1.5 pb-2.5">Powered by Claude · may not be 100% accurate</div>
        </div>
      )}
    </>
  );
}
