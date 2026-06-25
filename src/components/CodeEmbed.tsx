import type { CodeEmbed as CodeEmbedData } from "@/data/demos";
import { ExternalIcon } from "@/components/Icon";

interface CodeEmbedProps {
  embed: CodeEmbedData;
  title: string;
}

/**
 * Embeds a CodeSandbox sandbox so visitors can read (and fork) the real source
 * of a demo, CodePen-style. The sandbox itself is created by
 * scripts/push-to-codesandbox.mjs — this component only renders the iframe.
 */
export function CodeEmbed({ embed, title }: CodeEmbedProps) {
  const view = embed.view ?? "editor + preview";
  const module = embed.module ?? "/public/index.html";
  const embedUrl = `https://codesandbox.io/embed/${embed.sandboxId}?view=${encodeURIComponent(view)}&module=${encodeURIComponent(module)}`;
  const editorUrl = `https://codesandbox.io/s/${embed.sandboxId}`;

  return (
    <div className="border border-ink/14 bg-paper">
      <iframe
        src={embedUrl}
        title={`${title} — source code`}
        loading="lazy"
        style={{ width: "100%", height: 480, border: 0, display: "block" }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <div className="flex justify-end px-4 py-2.5 border-t border-ink/10">
        <a
          href={editorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[.12em] uppercase text-ink-soft hover:text-accent transition-colors"
        >
          Open in CodeSandbox
          <ExternalIcon width={12} height={12} />
        </a>
      </div>
    </div>
  );
}
