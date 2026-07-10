figma.showUI(__html__, { width: 320, height: 680 });

const STEPS = [
  { key: "xs",   exp: -2 },
  { key: "sm",   exp: -1 },
  { key: "base", exp: 0 },
  { key: "lg",   exp: 1 },
  { key: "xl",   exp: 2 },
  { key: "2xl",  exp: 3 },
  { key: "3xl",  exp: 4 },
  { key: "4xl",  exp: 5 },
  { key: "5xl",  exp: 6 },
];

function snapEven(n) {
  return Math.round(n / 2) * 2;
}

function stepSize(exp, base, ratio) {
  const raw = Math.round(base * Math.pow(ratio, exp) * 100) / 100;
  return snapEven(raw);
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === "generate-styles") {
    const { base, ratio, fontFamily } = msg;

    const fontName = { family: fontFamily, style: "Regular" };
    try {
      await figma.loadFontAsync(fontName);
    } catch (e) {
      figma.notify(`Font "${fontFamily}" not found. Using "Inter" instead.`);
      try {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      } catch (e2) {
        figma.notify("Could not load fallback font either.", { error: true });
        return;
      }
    }

    const existing = figma.getLocalTextStyles();
    const styles = [];

    for (const s of STEPS) {
      const sz = stepSize(s.exp, base, ratio);
      const name = `text/${s.key}`;

      let style = existing.find((st) => st.name === name);
      if (!style) {
        style = figma.createTextStyle();
        style.name = name;
      }

      const resolvedFont = { family: fontFamily, style: "Regular" };
      try {
        await figma.loadFontAsync(resolvedFont);
        style.fontName = resolvedFont;
      } catch (e) {
        style.fontName = { family: "Inter", style: "Regular" };
      }

      style.fontSize = sz;
      style.lineHeight = { value: Math.round(sz * 1.5), unit: "PIXELS" };
      style.description = `--text-${s.key}: ${sz}px  (${base} × ${ratio}^${s.exp})`;
      styles.push({ key: s.key, size: sz, id: style.id });
    }

    figma.notify(`Created ${styles.length} text styles (text/xs → text/5xl)`);
    figma.ui.postMessage({ type: "styles-created", styles });
  }

  if (msg.type === "generate-frame") {
    const { base, ratio, fontFamily } = msg;

    let fontName = { family: fontFamily, style: "Regular" };
    try {
      await figma.loadFontAsync(fontName);
    } catch (e) {
      fontName = { family: "Inter", style: "Regular" };
      await figma.loadFontAsync(fontName);
    }

    const boldFont = { family: fontFamily, style: "Bold" };
    let useBold = false;
    try {
      await figma.loadFontAsync(boldFont);
      useBold = true;
    } catch (e) {}

    const frame = figma.createFrame();
    frame.name = `Type Scale · ${base}px × ${ratio}`;
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.counterAxisSizingMode = "AUTO";
    frame.paddingTop = 40;
    frame.paddingBottom = 40;
    frame.paddingLeft = 40;
    frame.paddingRight = 40;
    frame.itemSpacing = 12;
    frame.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.96, b: 0.96 } }];
    frame.cornerRadius = 16;

    const title = figma.createText();
    title.fontName = useBold ? boldFont : fontName;
    title.characters = `Type Scale · ${fontFamily}`;
    title.fontSize = 14;
    title.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.44, b: 0.5 } }];
    frame.appendChild(title);

    const subtitle = figma.createText();
    subtitle.fontName = fontName;
    subtitle.characters = `base ${base}px · ratio ${ratio} · snapped to even`;
    subtitle.fontSize = 11;
    subtitle.fills = [{ type: "SOLID", color: { r: 0.55, g: 0.6, b: 0.68 } }];
    frame.appendChild(subtitle);

    const divider = figma.createRectangle();
    divider.resize(400, 1);
    divider.fills = [{ type: "SOLID", color: { r: 0.8, g: 0.82, b: 0.85 } }];
    frame.appendChild(divider);

    for (const s of STEPS) {
      const sz = stepSize(s.exp, base, ratio);
      const isBody = sz >= 14 && sz <= 20;

      const row = figma.createFrame();
      row.name = `--text-${s.key}`;
      row.layoutMode = "HORIZONTAL";
      row.primaryAxisSizingMode = "AUTO";
      row.counterAxisSizingMode = "AUTO";
      row.counterAxisAlignItems = "BASELINE";
      row.itemSpacing = 16;
      row.fills = [];

      const label = figma.createText();
      label.fontName = fontName;
      label.characters = `--text-${s.key}`;
      label.fontSize = 11;
      label.fills = [
        {
          type: "SOLID",
          color: isBody
            ? { r: 1, g: 0.65, b: 0.27 }
            : { r: 0.55, g: 0.6, b: 0.68 },
        },
      ];
      label.layoutAlign = "STRETCH";
      label.textAutoResize = "WIDTH_AND_HEIGHT";
      row.appendChild(label);

      const sample = figma.createText();
      sample.fontName = fontName;
      sample.characters = `The quick brown fox · ${sz}px`;
      sample.fontSize = sz;
      sample.fills = [{ type: "SOLID", color: { r: 0.29, g: 0.31, b: 0.38 } }];
      sample.textAutoResize = "WIDTH_AND_HEIGHT";
      row.appendChild(sample);

      const meta = figma.createText();
      meta.fontName = fontName;
      meta.characters = `${sz}px${isBody ? " · body" : ""}`;
      meta.fontSize = 11;
      meta.fills = [
        {
          type: "SOLID",
          color: isBody
            ? { r: 1, g: 0.65, b: 0.27 }
            : { r: 0.55, g: 0.6, b: 0.68 },
        },
      ];
      meta.textAutoResize = "WIDTH_AND_HEIGHT";
      row.appendChild(meta);

      frame.appendChild(row);
    }

    figma.currentPage.appendChild(frame);
    figma.viewport.scrollAndZoomIntoView([frame]);
    figma.notify("Type scale frame created on canvas");
  }

  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
