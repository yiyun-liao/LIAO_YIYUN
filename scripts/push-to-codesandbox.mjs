#!/usr/bin/env node
/**
 * Pushes a self-contained demo "harness" file to CodeSandbox via its
 * anonymous Define API, and prints a sandboxId ready to paste into
 * src/data/demos.ts as `codeEmbed: { sandboxId: "..." }`.
 *
 * Why this exists: every 3 days a new demo ships on /demos. Each one needs a
 * CodePen-style "view code" panel. Instead of building a custom syntax
 * highlighter, the code panel is a CodeSandbox embed — this script automates
 * creating that sandbox from the demo's source so it's a one-command step in
 * the shipping routine, not a manual copy-paste into codesandbox.io's UI.
 *
 * Usage:
 *   node scripts/push-to-codesandbox.mjs <path-to-harness.tsx> [--name "Demo Name"] [--dry-run]
 *
 * Harness file requirements (see DarkModeSwitch.sandbox.tsx for an example):
 *   - One self-contained file. No local imports — only "react" / "react-dom".
 *     (It gets dropped into the sandbox as src/App.tsx, so it can't reach
 *     back into the rest of this repo.)
 *   - `export default function App() { ... }`
 *   - Tailwind utility classes work out of the box (Play CDN is baked into
 *     the sandbox's index.html). Any one-off CSS (e.g. a custom :active
 *     animation) should be inlined via a <style> tag in the harness itself.
 *
 * Convention: name the harness file `<DemoName>.sandbox.tsx` next to the real
 * component, and keep it in sync by hand whenever the real component changes.
 */

import { readFile } from "node:fs/promises";
import path from "node:path";

const DEFINE_ENDPOINT = "https://codesandbox.io/api/v1/sandboxes/define?json=1";

function parseArgs(argv) {
  const args = { dryRun: false, name: null, file: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") args.dryRun = true;
    else if (a === "--name") args.name = argv[++i];
    else if (!args.file) args.file = a;
  }
  if (!args.file) {
    console.error('Usage: node scripts/push-to-codesandbox.mjs <path-to-harness.tsx> [--name "Demo Name"] [--dry-run]');
    process.exit(1);
  }
  return args;
}

function buildFiles({ harnessSource, name }) {
  const safeName = (name || "demo").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "") || "demo";

  return {
    "package.json": {
      content: {
        name: safeName,
        version: "1.0.0",
        private: true,
        main: "src/index.tsx",
        dependencies: {
          react: "^18.3.1",
          "react-dom": "^18.3.1",
          "react-scripts": "5.0.1",
        },
        devDependencies: {
          typescript: "^5.4.0",
          "@types/react": "^18.3.1",
          "@types/react-dom": "^18.3.1",
        },
      },
    },
    "tsconfig.json": {
      content: {
        compilerOptions: {
          target: "es2020",
          lib: ["dom", "dom.iterable", "esnext"],
          jsx: "react-jsx",
          module: "esnext",
          moduleResolution: "node",
          strict: false,
          skipLibCheck: true,
          esModuleInterop: true,
          allowJs: true,
          noEmit: true,
        },
        include: ["src"],
      },
    },
    "public/index.html": {
      content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,
    },
    "src/index.tsx": {
      content: `import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
`,
    },
    "src/App.tsx": {
      content: harnessSource,
    },
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const filePath = path.resolve(args.file);
  const harnessSource = await readFile(filePath, "utf8");
  const name = args.name || path.basename(filePath).replace(/\.sandbox\.tsx?$/, "").replace(/\.tsx?$/, "");

  if (!/export default/.test(harnessSource)) {
    console.warn(
      '⚠️  No "export default" found in the harness file — src/index.tsx expects `import App from "./App"` to resolve to a default export. The sandbox will fail to build.',
    );
  }
  if (/from\s+["']\.\.?\//.test(harnessSource)) {
    console.warn(
      "⚠️  Harness file appears to import from a relative local path. The sandbox only contains this one file plus react/react-dom — local imports will fail to resolve.",
    );
  }

  const files = buildFiles({ harnessSource, name });
  const body = JSON.stringify({ files });

  if (args.dryRun) {
    console.log("— dry run — no request sent —\n");
    console.log(body);
    return;
  }

  const res = await fetch(DEFINE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  if (!res.ok) {
    console.error(`CodeSandbox define API returned ${res.status} ${res.statusText}`);
    console.error(await res.text());
    process.exit(1);
  }

  const { sandbox_id } = await res.json();
  const editorUrl = `https://codesandbox.io/s/${sandbox_id}`;
  const embedUrl = `https://codesandbox.io/embed/${sandbox_id}?view=editor&theme=light&fontsize=13&hidenavigation=1&codemirror=1`;

  console.log("\n✅ Sandbox created\n");
  console.log(`Editor:  ${editorUrl}`);
  console.log(`Embed:   ${embedUrl}\n`);
  console.log("Paste into src/data/demos.ts, on the demo's entry:\n");
  console.log(`  codeEmbed: { sandboxId: "${sandbox_id}" },\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
