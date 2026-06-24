import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RESUME_PATH } from "@/data/constants";
import { PROJECTS } from "@/data/projects";
import { Modal } from "@/components/Modal";
import { Footer } from "@/sections/Footer";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { AskYiYun } from "./components/AskYiYun";

export function HomePage() {
  const location = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
      window.history.replaceState({}, "");
    }
  }, [location.state]);

  const openIdx = PROJECTS.findIndex((p) => p.id === openId);
  const openProj = openIdx >= 0 ? PROJECTS[openIdx] : null;

  return (
    <>
      <section className="min-h-screen pt-[100px] pb-10 md:pt-[120px] md:pb-[60px] relative overflow-hidden" id="top">
        <div className="wrap">
          <Hero onCta={() => window.open(RESUME_PATH, "_blank")} />
          <Ticker />
        </div>
      </section>

      <Experience />
      <Projects onOpen={setOpenId} />
      <About />
      <Footer />

      {openProj && (
        <Modal
          project={openProj}
          onClose={() => setOpenId(null)}
          onPrev={() => setOpenId(PROJECTS[(openIdx - 1 + PROJECTS.length) % PROJECTS.length]!.id)}
          onNext={() => setOpenId(PROJECTS[(openIdx + 1) % PROJECTS.length]!.id)}
        />
      )}

      <AskYiYun />
    </>
  );
}
