import { Highlight, themes } from "prism-react-renderer";
import type { CodeBlock } from "@/data/demos";

interface CodeBlockViewProps {
  block: CodeBlock;
}

export function CodeBlockView({ block }: CodeBlockViewProps) {
  return (
    <div className="flex flex-col m-auto max-w-[800px] w-full justify-center">
      <Highlight theme={themes.nightOwl} code={block.code.trim()} language={block.codeType}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="w-full rounded-lg p-5 overflow-x-auto text-[12px] leading-[1.7]"
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
    </div>
  );
}
