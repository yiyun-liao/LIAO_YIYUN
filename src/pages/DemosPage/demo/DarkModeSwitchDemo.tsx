import { useState, useEffect } from "react";
import { DEMOS } from "@/data/demos";
import { Footer } from "@/sections/Footer";
import { Header } from "../components/Header";
import { Views } from "../components/View";
import { Emphasis } from "../components/Emphasis";
import {
  ArrowIcon,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  ExternalIcon,
  QuoteIcon,
} from "@/components/Icon";

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
      <style>{`
        .dms-scene { display: flex; flex-direction: column; align-items: center; gap: 28px; }

        .dms-label {
          font-size: 12px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: #8a95a8; transition: color 0.4s;
        }
        .dms-dark .dms-label { color: #4a5a7a; }

        .dms-switch {
          position: relative; width: 120px; height: 56px; border-radius: 28px;
          cursor: pointer; border: none; outline: none; overflow: visible;
          background: #e0e5ec;
          box-shadow: 6px 6px 14px #b8bec7, -6px -6px 14px #ffffff;
          transition: background 0.5s, box-shadow 0.5s;
        }
        .dms-dark .dms-switch {
          background: #1a1f2e;
          box-shadow: 6px 6px 14px #0d1017, -6px -6px 14px #272d3f;
        }
        .dms-switch:focus-visible {
          box-shadow: 6px 6px 14px #b8bec7, -6px -6px 14px #ffffff, 0 0 0 3px #7c9cf5;
        }
        .dms-dark .dms-switch:focus-visible {
          box-shadow: 6px 6px 14px #0d1017, -6px -6px 14px #272d3f, 0 0 0 3px #4a6cf7;
        }

        .dms-track-fill {
          position: absolute; inset: 0; border-radius: 28px; opacity: 0;
          background: linear-gradient(135deg, #1a2a5e 0%, #0d1535 100%);
          transition: opacity 0.5s; pointer-events: none;
        }
        .dms-dark .dms-track-fill { opacity: 1; }

        .dms-track-text {
          position: absolute; top: 50%; transform: translateY(-50%);
          font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
          pointer-events: none; transition: opacity 0.3s, color 0.4s; z-index: 1;
        }
        .dms-track-text.day  { right: 16px; color: #8a95a8; opacity: 1; }
        .dms-track-text.night { left: 16px; color: #4a6cf7; opacity: 0; }
        .dms-dark .dms-track-text.day   { opacity: 0; }
        .dms-dark .dms-track-text.night { opacity: 1; }

        .dms-knob {
          position: absolute; top: 50%; left: 7px;
          width: 42px; height: 42px; border-radius: 50%;
          transform: translateY(-50%);
          display: flex; align-items: center; justify-content: center;
          pointer-events: none; z-index: 2;
          background: radial-gradient(circle at 38% 38%, #fbbf40, #f07020);
          box-shadow:
            4px 4px 10px rgba(0,0,0,0.18),
            -2px -2px 7px rgba(255,255,255,0.85),
            inset 1px 1px 3px rgba(255,210,100,0.6),
            0 0 18px rgba(255,150,40,0.4);
          transition:
            left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
            background 0.5s, box-shadow 0.5s;
        }
        .dms-dark .dms-knob {
          left: 71px;
          background: radial-gradient(circle at 38% 38%, #6080f8, #1a30c0);
          box-shadow:
            4px 4px 10px rgba(0,0,0,0.45),
            -2px -2px 7px rgba(60,80,180,0.25),
            inset 1px 1px 3px rgba(120,150,255,0.5),
            0 0 20px rgba(60,100,255,0.5);
        }
        .dms-switch:active .dms-knob { transform: translateY(-50%) scaleX(1.18); }

        .dms-icon { width: 20px; height: 20px; position: relative; }
        .sun-icon, .moon-icon {
          position: absolute; inset: 0;
          transition: opacity 0.35s, transform 0.4s;
        }
        .moon-icon { opacity: 0; transform: rotate(-25deg) scale(0.75); }
        .dms-dark .sun-icon  { opacity: 0; transform: rotate(25deg) scale(0.75); }
        .dms-dark .moon-icon { opacity: 1; transform: rotate(0deg) scale(1); }

        .dms-hint {
          font-size: 10px; color: #a0aab8; letter-spacing: 0.04em;
          font-family: monospace; transition: color 0.4s;
        }
        .dms-dark .dms-hint { color: #3a4a6a; }
      `}</style>

      <div className="flex flex-col gap-[24px] md:gap-[60px]">
        <Header demo={DEMO} title={<>Dark Mode <span className="italic">Switch</span></>} />

        <Views>
          <div
            className={`dms-scene${dark ? " dms-dark" : ""}`}
            style={{
              background: dark ? "#1a1f2e" : "#e0e5ec",
              transition: "background 0.6s ease",
              padding: "48px 32px",
              width: "100%",
            }}
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
              <span className="dms-track-text day">Day</span>
              <span className="dms-track-text night">Night</span>
              <div className="dms-knob">
                <div className="dms-icon">
                  <SunIcon />
                  <MoonIcon />
                </div>
              </div>
            </button>

            <span className="dms-hint">click · keyboard space · accessible</span>

            {/* Mock text + skeleton */}
            <div
              className="w-full max-w-[640px] rounded-lg p-6 transition-all duration-500"
              style={{
                background: dark ? "#232a3c" : "#d4d9e2",
                boxShadow: dark
                  ? "inset 2px 2px 5px #181d2a, inset -2px -2px 5px #2e3750"
                  : "inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff",
              }}
            >
              {/* Heading */}
              <div
                className="font-semibold text-sm mb-4 transition-colors duration-500"
                style={{ color: dark ? "#c0cce0" : "#4a5060" }}
              >
                What is Lorem Ipsum?
              </div>
              {/* Body */}
              <div
                className="text-xs leading-[1.65] mb-5 transition-colors duration-500"
                style={{ color: dark ? "#7a8aa8" : "#6a7080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>

              {/* Skeleton blocks */}
              <div
                className="h-2.5 rounded-full mb-3 transition-all duration-500"
                style={{ background: dark ? "#3a4560" : "#c0c6d0", width: "70%" }}
              />
              <div
                className="h-2.5 rounded-full mb-3 transition-all duration-500"
                style={{ background: dark ? "#3a4560" : "#c0c6d0", width: "100%" }}
              />
              <div
                className="h-2.5 rounded-full mb-3 transition-all duration-500"
                style={{ background: dark ? "#3a4560" : "#c0c6d0", width: "85%" }}
              />
              <div
                className="h-2.5 rounded-full transition-all duration-500"
                style={{ background: dark ? "#3a4560" : "#c0c6d0", width: "45%" }}
              />
            </div>

            {/* Icon gallery */}
            <div className="flex gap-5 flex-wrap justify-center" style={{ transition: "color 0.5s", color: dark ? "#6080f8" : "#8a95a8" }}>
              {[
                { Icon: ArrowIcon, label: "Arrow" },
                { Icon: CloseIcon, label: "Close" },
                { Icon: GitHubIcon, label: "GitHub" },
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: MailIcon, label: "Mail" },
                { Icon: DownloadIcon, label: "Download" },
                { Icon: ExternalIcon, label: "External" },
                { Icon: QuoteIcon, label: "Quote" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                    style={{
                      background: dark ? "#232a3c" : "#d4d9e2",
                      boxShadow: dark
                        ? "3px 3px 8px #181d2a, -3px -3px 8px #2e3750"
                        : "3px 3px 8px #b8bec7, -3px -3px 8px #ffffff",
                    }}
                  >
                    <Icon width={18} height={18} />
                  </div>
                  <span
                    className="text-[9px] font-mono tracking-[.08em] uppercase transition-colors duration-500"
                    style={{ color: dark ? "#4a5a7a" : "#a0aab8" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Views>

        {DEMO.introduction?.emphasis && DEMO.introduction.emphasis.length > 0 && (
          <Emphasis intros={DEMO.introduction} />
        )}
        <Footer />
      </div>
    </>
  );
}
