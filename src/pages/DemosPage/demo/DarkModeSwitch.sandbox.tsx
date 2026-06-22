// Self-contained harness for the CodeSandbox embed on the Dark Mode Switch
// demo page. No local imports on purpose — this file is bundled as-is by
// scripts/push-to-codesandbox.mjs into a standalone sandbox, so visitors can
// read (and fork) the real interaction code, CodePen-style.
//
// Keep this in sync with DarkModeSwitch.tsx + DarkModeSwitchDemo.tsx whenever
// the real component changes.

import { useState } from "react";

interface DarkModeSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

function DarkModeSwitch({ checked, onChange }: DarkModeSwitchProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label="Toggle dark mode"
      onClick={() => onChange(!checked)}
      className={`dm-switch relative w-[52px] h-[28px] rounded-full cursor-pointer transition-colors duration-200 ease outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2467D2] ${
        checked ? "bg-[#1F2937] hover:bg-[#283548]" : "bg-[#E5E7EB] hover:bg-[#D1D5DB]"
      }`}
      style={{ "--knob-x": checked ? "24px" : "0px" } as React.CSSProperties}
    >
      <span
        className="dm-knob absolute top-[3px] left-[3px] w-[22px] h-[22px] rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)]"
        style={{ transform: `translateX(${checked ? 24 : 0}px)` }}
      />
    </button>
  );
}

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-white p-8">
      <style>{`
        .dm-knob { transition: transform 0.3s cubic-bezier(0.4, 0.1, 0.2, 1.3); }
        .dm-switch:active .dm-knob { transform: translateX(var(--knob-x, 0px)) scaleX(1.15) scaleY(0.88); }
      `}</style>

      <div className="flex items-center gap-6">
        <span className="font-mono text-[11px] tracking-[.12em] uppercase text-gray-500">
          {checked ? "Dark" : "Light"}
        </span>
        <DarkModeSwitch checked={checked} onChange={setChecked} />
      </div>

      <div
        className="w-full max-w-[400px] rounded-lg p-8 transition-colors duration-300 border"
        style={{
          background: checked ? "#1F2937" : "#F9FAFB",
          borderColor: checked ? "#374151" : "#E5E7EB",
        }}
      >
        <div
          className="h-3 rounded-full mb-3 transition-colors duration-300"
          style={{ background: checked ? "#374151" : "#E5E7EB", width: "60%" }}
        />
        <div
          className="h-3 rounded-full mb-3 transition-colors duration-300"
          style={{ background: checked ? "#374151" : "#E5E7EB", width: "80%" }}
        />
        <div
          className="h-3 rounded-full transition-colors duration-300"
          style={{ background: checked ? "#374151" : "#E5E7EB", width: "45%" }}
        />
      </div>
    </div>
  );
}
