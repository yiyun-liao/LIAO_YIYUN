import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { DownloadIcon } from "@/components/Icon";
import { NavLink } from "@/components/NavLink";
import { RESUME_PATH } from "@/data/constants";
import { useLanguage } from "@/i18n/LanguageContext";
import { Switch } from "@/components/Switch";

const SECTION_IDS = ["work", "projects", "about", "contact"] as const;

const EXIT_MS = 200;

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
  const { t, locale, setLocale } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [showHome, setShowHome] = useState(isHome);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const prevHome = useRef(isHome);

  useEffect(() => {
    if (isHome === prevHome.current) return;
    prevHome.current = isHome;

    setPhase("exit");
    const timer = setTimeout(() => {
      setShowHome(isHome);
      setPhase("enter");
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [isHome]);

  const handleSectionClick = (id?: string) => {
    if (!id) return;
    if (isHome) {
      scrollTo(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const isZh = locale === "zh-TW";
  const toggleLocale = () => setLocale(isZh ? "en" : "zh-TW");

  const animClass = phase === "exit" ? "nav-item-exit" : "nav-item-enter";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 nav-blur transition-[padding] duration-[350ms]">
      <div
        className={`wrap flex items-center justify-between transition-[padding] duration-[350ms] ${compact ? "py-2.5" : "py-[18px]"}`}
      >
        <Link to="/" className="font-serif text-[22px] tracking-[.01em]">
          Yi<i className="text-accent">·</i>Yun<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center justify-center">
          <ul className="hidden md:flex gap-4 list-none m-0 p-0 items-center">
            {!showHome ? (
              <li className={`${animClass} font-bold`}>
                <NavLink onClick={() => navigate("/")}>{t("nav.about")}</NavLink>
              </li>
            ) : (
              SECTION_IDS.map((id, i) => (
                <li
                  key={id}
                  className={animClass}
                  style={
                    {
                      "--d": phase === "exit" ? `${(SECTION_IDS.length - 1 - i) * 30}ms` : `${i * 40}ms`,
                    } as React.CSSProperties
                  }
                >
                  <NavLink id={id} onClick={handleSectionClick}>
                    {t(`nav.${id}`)}
                  </NavLink>
                </li>
              ))
            )}
          </ul>
          <div className="w-[1px] h-[16px] bg-ink-soft mr-4 ml-4" />
          <ul className="flex gap-4 list-none m-0 p-0 items-center">
            <li className="font-bold">
              <NavLink onClick={() => navigate("/demos")}>{t("nav.demos")}</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <NavLink underline icon={DownloadIcon} onClick={() => window.open(RESUME_PATH, "_blank")}>
            {t("nav.cv")}
          </NavLink>
          <Switch leftText="EN" rightText="中" checked={isZh} onChange={() => toggleLocale()} />
        </div>
      </div>
    </nav>
  );
}
