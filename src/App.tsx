import { useState, useEffect } from "react";
import { RESUME_PATH } from "./data/constants";
import { PROJECTS } from "./data/projects";
import { Modal } from "./components/Modal";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Ticker } from "./sections/Ticker";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { AskYiYun } from "./sections/AskYiYun";

export default function App() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openIdx = PROJECTS.findIndex((p) => p.id === openId);
  const openProj = openIdx >= 0 ? PROJECTS[openIdx] : null;

  return (
    <>
      <Nav compact={compact} />

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
