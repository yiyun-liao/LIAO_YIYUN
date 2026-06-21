import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./sections/Nav";
import { HomePage } from "./pages/HomePage";
import { DemosPage } from "./pages/DemosPage";

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
      </Routes>
    </>
  );
}
