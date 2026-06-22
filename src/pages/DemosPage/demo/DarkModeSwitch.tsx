interface DarkModeSwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export function DarkModeSwitch({ checked, onChange }: DarkModeSwitchProps) {
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
