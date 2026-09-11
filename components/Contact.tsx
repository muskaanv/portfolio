"use client";

import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-ink py-20 text-cream dark:border-linedark">
      <div className="section-wrap">
        <div className="mb-10 flex items-center justify-between border-b border-linedark pb-4 text-xs text-mutedlight">
          <span className="eyebrow !text-mutedlight">05 — Contact</span>
          {/* <span className="eyebrow !text-mutedlight">(Final page)</span> */}
        </div>

        <h2 className="font-display text-5xl font-800 uppercase leading-[0.95] md:text-7xl">
          Let&apos;s build
        </h2>
        <p className="font-accent text-4xl italic text-orange md:text-6xl">together.</p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-sm text-mutedlight">
              Open to select roles and collaborations. Tell me what you&apos;re building — I read every
              message myself.
            </p>
            <a
              href="/resume.pdf"
              download
              aria-label="Download resume"
              className="cv-zoom mt-6 inline-flex items-center gap-2 border border-linedark px-4 py-3 font-mono text-sm hover:border-orange transform-gpu transition-transform duration-300 ease-out hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,159,28,0.16)] hover:ring-4 hover:ring-orange/10"
            >
              {/* Download icon */}
              <svg className="w-4 h-4 text-mutedlight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Download CV</span>
            </a>
            <style>{`@media (prefers-reduced-motion: reduce) { .cv-zoom { transition: none !important; transform: none !important; } }`}</style>
          </div>

          <div className="divide-y divide-linedark border-t border-linedark">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 text-lg font-medium hover:text-orange"
            >
              LinkedIn <span className="text-sm text-mutedlight">{profile.linkedin} ↗</span>
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 text-lg font-medium hover:text-orange"
            >
              GitHub <span className="text-sm text-mutedlight">{profile.github} ↗</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between py-4 text-lg font-medium hover:text-orange"
            >
              Email <span className="text-sm text-mutedlight">{profile.email} ↗</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-2 border-t border-linedark pt-6 text-xs text-mutedlight">
          <span>© 2026 {profile.name}</span>
          <span>Built with intent</span>
        </div>
      </div>
    </section>
  );
}
