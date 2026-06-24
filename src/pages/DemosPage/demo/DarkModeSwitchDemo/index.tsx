import { useState, useEffect } from "react";
import { DEMOS } from "@/data/demos";
import { Footer } from "@/sections/Footer";
import { Header } from "../../components/Header";
import { Views } from "../../components/View";
import { Emphasis } from "../../components/Emphasis";
import { Sections } from "../../components/Sections";
import { Motivation } from "../../components/Motivation";
import { Refs } from "../../components/Refs";
import {
  ArrowRight,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  ExternalIcon,
  QuoteIcon,
} from "@/components/Icon";
import "./style.css";

const DEMO = DEMOS.find((d) => d.title === "Dark Mode Switch")!;

function SunIcon() {
  return (
    <svg className="sun-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4.5" fill="white" />
      <line x1="12" y1="2" x2="12" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="12" x2="5" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="moon-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="white" />
      <circle cx="17.5" cy="5" r="1" fill="white" opacity="0.8" />
      <circle cx="19.5" cy="9.5" r="0.6" fill="white" opacity="0.55" />
      <circle cx="15" cy="3" r="0.5" fill="white" opacity="0.5" />
    </svg>
  );
}

export function DarkModeSwitchDemo() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[24px] md:gap-[60px]">
        <Header demo={DEMO} title={<>Dark Mode <span className="italic">Switch</span></>} />

        <Views>
          <div
            className={`dms-scene${dark ? " dms-dark" : ""}`}
            style={{ padding: "48px 32px", width: "100%" }}
          >
            <span className="dms-label">{dark ? "Dark Mode" : "Light Mode"}</span>

            <button
              className="dms-switch"
              role="switch"
              aria-checked={dark}
              aria-label="Toggle dark mode"
              onClick={() => setDark(!dark)}
            >
              <div className="dms-track-fill" />
              <div className="dms-glow" />
              <span className="dms-track-text day">Day</span>
              <span className="dms-track-text night">Night</span>
              <div className="dms-knob">
                <div className="dms-icon">
                  <SunIcon />
                  <MoonIcon />
                </div>
              </div>
            </button>

            <span className="neu-faint">click · keyboard space · accessible</span>

            {/* Mock text + skeleton */}
            <div className="neu-card w-full max-w-[640px] rounded-lg p-6">
              <div className="neu-heading ">What is Lorem Ipsum?</div>
              <div className="neu-body leading-[1.65] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="neu-skel " style={{ width: "70%" }} />
              <div className="neu-skel " style={{ width: "100%" }} />
              <div className="neu-skel " style={{ width: "85%" }} />
              <div className="neu-skel " style={{ width: "45%" }} />
            </div>

            {/* Icon gallery */}
            <div className="flex gap-5 flex-wrap justify-center" style={{ color: "var(--neu-accent)", transition: "color 0.5s" }}>
              {[
                { Icon: ArrowRight, label: "Arrow" },
                { Icon: CloseIcon, label: "Close" },
                { Icon: GitHubIcon, label: "GitHub" },
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: MailIcon, label: "Mail" },
                { Icon: DownloadIcon, label: "Download" },
                { Icon: ExternalIcon, label: "External" },
                { Icon: QuoteIcon, label: "Quote" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className="neu-raised w-10 h-10 rounded-xl flex items-center justify-center" tabIndex={0} aria-label={label}>
                    <Icon width={18} height={18} />
                  </div>
                  <span className="neu-faint tracking-[.08em] uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Views>

        {DEMO.introduction?.emphasis && DEMO.introduction.emphasis.length > 0 && (
          <Emphasis intros={DEMO.introduction} />
        )}

        {DEMO.introduction?.sections && DEMO.introduction.sections.length > 0 && (
          <Sections sections={DEMO.introduction.sections} />
        )}

        {DEMO.introduction?.motivation && <Motivation text={DEMO.introduction.motivation} />}

        {DEMO.introduction?.refs && <Refs refs={DEMO.introduction.refs} />}

        <Footer />
      </div>
    </>
  );
}
