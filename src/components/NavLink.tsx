import type { ComponentType, ReactNode, SVGProps } from "react";

interface NavLinkProps {
  id?: string;
  underline?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: (id?: string) => void;
  children: ReactNode;
}

export function NavLink({ id, underline = false, icon: Icon, onClick, children }: NavLinkProps) {
  return (
    <button
      onClick={() => onClick?.(id)}
      className={
        `font-mono flex items-center p-2 border-b text-[12px] font-medium tracking-[.12em] uppercase opacity-75 hover:opacity-100 hover:text-[#2467D2] hover:font-bold
        ${underline ? "border-current" : "border-transparent hover:border-current"}
        `
      }
    >
      {Icon && <Icon style={{ marginRight: 6, verticalAlign: -4 }} />}
      {children}
    </button>
  );
}
