import { Highlight, themes } from "prism-react-renderer";
import type { BodySection } from "@/data/demos";

interface SectionsProps {
  sections: BodySection[];
}

export function Sections({ sections }: SectionsProps) {
  return (
    <section className="wrap flex flex-col gap-16">
      {sections.map((s, i) => (
        <div key={i} className="flex flex-col m-auto max-w-[800px] justify-center ">
          <div className="font-mono text-[12px] tracking-[.14em] uppercase font-bold text-accent mb-3">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-serif text-[clamp(20px,3vw,32px)] leading-[1.1] tracking-[-.01em] mb-4">{s.title}</h3>
          <p className="text-ink-soft text-sm leading-[1.7] mb-6">{s.content}</p>
          {s.code && (
            <Highlight theme={themes.nightOwl} code={s.code} language="css">
              {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className="rounded-lg p-5 overflow-x-auto text-[12px] leading-[1.7]"
                  style={style}
                >
                  {tokens.map((line, li) => (
                    <div key={li} {...getLineProps({ line })}>
                      {line.map((token, ti) => (
                        <span key={ti} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          )}
        </div>
      ))}
    </section>
  );
}
