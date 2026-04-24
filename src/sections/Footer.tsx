import { LINKS } from "../data/constants";

export function Footer() {
  return (
    <footer id="contact" className="py-20 pb-10 border-t border-ink/20 mt-10">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8 items-end">
          <h3 className="font-serif text-[clamp(48px,7vw,110px)] leading-[.9] tracking-[-.02em] m-0 font-normal sm:col-span-full md:col-auto">
            Let&apos;s <span className="italic text-accent">talk</span>.
          </h3>
          <div>
            <h5 className="font-mono text-[10px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2.5">Email</h5>
            <a href={LINKS.email} className="block text-sm py-1">yiyun.bian.design<br />@gmail.com</a>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2.5">GitHub</h5>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="block text-sm py-1">
              github.com/<br />yiyun-liao
            </a>
          </div>
          <div>
            <h5 className="font-mono text-[10px] tracking-[.16em] uppercase text-ink-soft m-0 mb-2.5">LinkedIn</h5>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="block text-sm py-1">
              linkedin.com/in/<br />liao-yi-yun
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start sm:flex-row sm:justify-between mt-10 pt-5 border-t border-ink/15 font-mono text-[10px] tracking-[.12em] uppercase text-ink-soft">
          <span>© 2026 Yi-Yun Liao · Taipei</span>
          <span>Built with React · Type set in Instrument Serif &amp; IBM Plex</span>
        </div>
      </div>
    </footer>
  );
}
