import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Views } from "../../components/View";
import { TypeScaleScene } from "./components";
import { TYPESCALEGENERATOR } from "./content";

const demo = TYPESCALEGENERATOR;

export function TypeScaleGenerator() {
  const { l } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={demo} title={l(demo.title)} />
      <Views>
        <TypeScaleScene />
      </Views>
      <Footer />
    </div>
  );
}
