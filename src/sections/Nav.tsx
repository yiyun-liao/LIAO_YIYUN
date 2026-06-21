import { useLocation, useNavigate, Link } from "react-router-dom";
import { DownloadIcon } from "../components/Icon";
import { NavLink } from "../components/NavLink";
import { RESUME_PATH } from "../data/constants";

const SECTION_LINKS = [
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
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleSectionClick = (id?: string) => {
    if (!id) return;
    if (isHome) {
      scrollTo(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 nav-blur transition-[padding] duration-[350ms]">
      <div className={`wrap flex items-center justify-between transition-[padding] duration-[350ms] ${compact ? "py-2.5" : "py-[18px]"}`}>
        <Link to="/" className="font-serif text-[22px] tracking-[.01em]">
          Yi<i className="text-accent">·</i>Yun<span className="text-accent">.</span>
        </Link>
        <ul className="hidden md:flex gap-4 list-none m-0 p-0">
          {SECTION_LINKS.map(({ id, label }) => (
            <li key={id}>
              <NavLink id={id} onClick={handleSectionClick}>{label}</NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/demos"
              className={`font-mono flex items-center p-2 border-b text-[12px] font-bold tracking-[.12em] uppercase opacity-75 hover:opacity-100 hover:text-[#2467D2] hover:font-bold ${
                location.pathname === "/demos" ? "border-current opacity-100 text-[#2467D2]" : "border-transparent hover:border-current"
              }`}
            >
              Demos
            </Link>
          </li>
        </ul>
        <NavLink underline icon={DownloadIcon} onClick={() => window.open(RESUME_PATH, "_blank")}>
          CV
        </NavLink>
      </div>
    </nav>
  );
}
