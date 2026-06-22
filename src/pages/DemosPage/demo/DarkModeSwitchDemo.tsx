import { useState, useEffect } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DEMOS } from "@/data/demos";
import { Footer } from "@/sections/Footer";
import { Header } from "../components/Header";
import { Views } from "../components/View";
import { Emphasis } from "../components/Emphasis";
import { CodeSection } from "../components/CodeSection";

const DEMO = DEMOS.find((d) => d.title === "Dark Mode Switch")!;

export function DarkModeSwitchDemo() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="flex flex-col gap-[24px] md:gap-[60px]">
      <Header demo={DEMO} title={<>Dark Mode <span className="italic">Switch</span></>} />
      <Views>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[11px] tracking-[.12em] uppercase text-mute">
            {checked ? "Dark" : "Light"}
          </span>
          <DarkModeSwitch checked={checked} onChange={setChecked} />
        </div>

        <div
          className="w-full max-w-[400px] rounded-lg p-8 transition-colors duration-300 border"
          style={{
            background: checked ? "#1F2937" : "#F9FAFB",
            borderColor: checked ? "#374151" : "#E5E7EB",
          }}
        >
          <div
            className="h-3 rounded-full mb-3 transition-colors duration-300"
            style={{ background: checked ? "#374151" : "#E5E7EB", width: "60%" }}
          />
          <div
            className="h-3 rounded-full mb-3 transition-colors duration-300"
            style={{ background: checked ? "#374151" : "#E5E7EB", width: "80%" }}
          />
          <div
            className="h-3 rounded-full transition-colors duration-300"
            style={{ background: checked ? "#374151" : "#E5E7EB", width: "45%" }}
          />
        </div>
      </Views>
      {DEMO.introduction?.emphasis && DEMO.introduction.emphasis.length > 0 && <Emphasis intros={DEMO.introduction}/>}
      <CodeSection demo={DEMO} />
      <Footer />
    </div>
    </>
  );
}
