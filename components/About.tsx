"use client";

import { about, education, profile } from "@/data/content";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section id="about" className="border-t border-line py-20 dark:border-linedark">
      <div className="section-wrap">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-4 dark:border-linedark">
          <span className="eyebrow">01 — About</span>
          <span className="eyebrow">(The Engineer | Aspiring Founder)</span>
        </div>

        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
          <div
            className="about-img-container relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-charcoal dark:bg-linedark shadow-[0_18px_48px_rgba(0,0,0,0.16)] group hover:shadow-[0_28px_80px_rgba(0,0,0,0.18)] transition-shadow duration-300"
            style={{ backgroundImage: "url('/me2.png')", backgroundSize: "cover", backgroundPosition: "right" }}
          >
            <style>{`.about-img-container img { transition: transform 500ms cubic-bezier(.2,.9,.2,1); will-change: transform; transform-origin: center; }
              .about-img-container:hover img { transform: scale(1.05); }
              @media (prefers-reduced-motion: reduce) { .about-img-container img { transition: none !important; transform: none !important; } }`}</style>
            {/* background-image provides an immediate visual so the portrait doesn't blink on refresh */}
            <Image
              src="/me2.png"
              alt="your photo"
              fill
              onLoadingComplete={() => setImgLoaded(true)}
              className={`${imgLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-400 object-cover object-right`}
              sizes="(max-width: 768px) 320px, 420px"
              priority
            />
            <style>{`@media (prefers-reduced-motion: reduce) { .group-hover\:scale-105, .transform-gpu, .transition-transform { transition: none !important; transform: none !important; } }`}</style>
          </div>

          <div>
            <h2 className="font-display text-4xl font-700 leading-tight md:text-5xl">
              {about.heading}{" "}
              <span className="font-accent italic text-orange">{about.accent}</span>
            </h2>

            <div className="mt-6 space-y-4 text-muted">
              {about.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <p className="mt-6 border-l-2 border-orange pl-4 text-sm italic text-muted">
              {(() => {
                const note: string = about.note || "";
                const marker = "let's talk";
                const idx = note.toLowerCase().indexOf(marker);
                if (idx === -1) return note;
                const before = note.slice(0, idx);
                const match = note.slice(idx, idx + marker.length);
                const after = note.slice(idx + marker.length);
                return (
                  <>
                    {before}
                    <span className="text-orange font-medium">{match}</span>
                    {after}
                  </>
                );
              })()}
            </p>

            <div className="mt-10 border-t border-line pt-6 text-sm dark:border-linedark">
              <p className="eyebrow mb-1">{education.eyebrow}</p>
              <p className="font-medium">{education.degree}</p>
              <p className="text-muted">
                {education.school}, {education.location} · {education.period}
              </p>
            </div>

            <div className="mt-10 space-y-2">
              {about.principles.map((p, i) => (
                <div key={i} className="grid gap-2 border-t border-line py-6 dark:border-linedark md:grid-cols-[2.5rem_minmax(0,240px)_1fr] md:gap-4">
                  <span className="font-mono text-sm text-orange md:text-base">0{i + 1}</span>
                  <h3 className="font-display text-3xl font-700 leading-[0.95] md:text-4xl">{p.title}</h3>
                  <p className="text-base leading-relaxed text-muted md:pt-1">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
