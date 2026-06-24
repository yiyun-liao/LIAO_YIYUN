import "./styles.css";

interface SwitchProps {
  leftText: string;
  rightText: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ leftText, rightText, checked, onChange }: SwitchProps) {
  return (
    <button
      className={`lang-switch${checked ? " lang-switch--on" : ""}`}
      role="switch"
      aria-checked={checked}
      aria-label={`Switch language: ${checked ? rightText : leftText}`}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <span className="lang-switch__label lang-switch__label--left">{leftText}</span>
      <span className="lang-switch__label lang-switch__label--right">{rightText}</span>
      <div className="lang-switch__knob" />
    </button>
  );
}
