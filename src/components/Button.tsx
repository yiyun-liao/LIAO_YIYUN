import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "accent" | "ghost" | "default";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ButtonHTMLAttributes<HTMLButtonElement>
);

export function Button({ variant, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center gap-2.5 rounded-full font-mono text-[12px] tracking-[.12em] uppercase transition-all duration-200";

  let cls = base;
  if (variant === "accent") {
    cls += " px-[18px] py-3 border border-accent bg-accent text-white hover:brightness-[.9]";
  } else if (variant === "ghost") {
    cls += " py-3 pr-[18px] border border-transparent hover:text-accent";
  } else {
    cls += " px-[18px] py-3 border border-ink hover:bg-ink hover:text-paper";
  }

  if ("href" in props && props.href) {
    return (
      <a className={cls} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  );
}

interface UnderlineLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function UnderlineLink({ children, ...props }: UnderlineLinkProps) {
  return (
    <a className="underline-link relative inline-block pb-[3px] font-mono text-[12px] tracking-[.12em] uppercase hover:text-accent" {...props}>
      {children}
    </a>
  );
}
