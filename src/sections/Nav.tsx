import { DownloadIcon } from "../components/Icon";
import { NavLink } from "../components/NavLink";
import { RESUME_PATH } from "../data/constants";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id?: string) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

interface NavProps {
  compact: boolean;
}

export function Nav({ compact }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 nav-blur transition-[padding] duration-[350ms]">
      <div className={`wrap flex items-center justify-between transition-[padding] duration-[350ms] ${compact ? "py-2.5" : "py-[18px]"}`}>
        <a href="#top" className="font-serif text-[22px] tracking-[.01em]">
          Yi<i className="text-accent">·</i>Yun<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-4 list-none m-0 p-0">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <NavLink id={id} onClick={scrollTo}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <NavLink underline icon={DownloadIcon} onClick={() => window.open(RESUME_PATH, "_blank")}>
          CV
        </NavLink>
      </div>
    </nav>
  );
}
