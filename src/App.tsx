import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./sections/Nav";
import { HomePage } from "./pages/HomePage/index";
import { DemosPage } from "./pages/DemosPage/index";
import { DarkModeSwitchDemo } from "./pages/DemosPage/demo/DarkModeSwitchDemo";
import { ClaudeFolderArticle } from "./pages/DemosPage/demo/ClaudeFolderArticle";
import { ReactVibeKickoffArticle } from "./pages/DemosPage/demo/ReactVibeKickoffArticle";
import { UxFiveElementsArticle } from "./pages/DemosPage/demo/UxFiveElementsArticle";

export default function App() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Nav compact={compact} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/demos/dark-mode-switch" element={<DarkModeSwitchDemo />} />
        <Route path="/demos/claude-folder-guide" element={<ClaudeFolderArticle />} />
        <Route path="/demos/react-vibe-kickoff" element={<ReactVibeKickoffArticle />} />
        <Route path="/demos/ux-five-elements" element={<UxFiveElementsArticle />} />
      </Routes>
    </>
  );
}
