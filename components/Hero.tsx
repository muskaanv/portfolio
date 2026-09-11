"use client";

import { hero, profile } from "@/data/content";
import { useEffect, useState } from "react";

const INTRO_KEY = "mv-intro-seen";

function TypedHeadline() {
  const [typedHeadline, setTypedHeadline] = useState("");
  const [typedAccent, setTypedAccent] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // respect reduced motion preference
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedHeadline(hero.headline);
      setTypedAccent(hero.accent);
      return;
    }

    let cancelled = false;

    const startTyping = () => {
      if (started) return;
      setStarted(true);
      const H = hero.headline;
      const A = hero.accent;
      let i = 0;
      const headInterval = setInterval(() => {
        if (cancelled) return clearInterval(headInterval);
        i += 1;
        setTypedHeadline(H.slice(0, i));
        if (i >= H.length) {
          clearInterval(headInterval);
          // small pause then type accent
          setTimeout(() => {
            let j = 0;
            const accInterval = setInterval(() => {
              if (cancelled) return clearInterval(accInterval);
              j += 1;
              setTypedAccent(A.slice(0, j));
              if (j >= A.length) clearInterval(accInterval);
            }, 45);
          }, 220);
        }
      }, 45);
    };

    // start immediately if intro already seen
    if (sessionStorage.getItem(INTRO_KEY) === "1") {
      startTyping();
      return () => {
        cancelled = true;
      };
    }

    // otherwise listen for storage events (other tabs) and poll for same-tab set
    const onStorage = (e: StorageEvent) => {
      if (e.key === INTRO_KEY && e.newValue === "1") startTyping();
    };
    window.addEventListener("storage", onStorage);
    const poll = setInterval(() => {
      if (sessionStorage.getItem(INTRO_KEY) === "1") {
        startTyping();
        clearInterval(poll);
        window.removeEventListener("storage", onStorage);
      }
    }, 200);

    return () => {
      cancelled = true;
      clearInterval(poll);
      window.removeEventListener("storage", onStorage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative inline-block">
        <span className="invisible block">{hero.headline}</span>
        <span className="absolute left-0 top-0 block">{typedHeadline}</span>
      </div>

      <div className="relative block mt-2 md:mt-4">
        <span className="invisible block font-accent not-italic font-semibold text-[5.5vw] md:text-[2.2rem]">{hero.accent}</span>
        <span className="absolute left-0 top-0 block font-accent not-italic font-semibold text-orange text-[5.5vw] md:text-[2.2rem]">{typedAccent}</span>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className="section-wrap pb-28 pt-14 md:pt-20">
      <div className="mb-10 flex items-center justify-between text-xs text-muted">
        <span className="eyebrow">{hero.eyebrow}</span>
        <span className="rounded-full border border-line px-3 py-1 dark:border-linedark availability-blink font-bold">
          {(hero as any).availability}
        </span>
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .availability-blink {
              animation: availabilityBlink 1.6s ease-in-out infinite;
            }
            @keyframes availabilityBlink {
              0%, 100% {
                background: transparent;
                border-color: var(--color-line, rgba(0,0,0,0.08));
                color: inherit;
                box-shadow: none;
              }
              50% {
                background: rgba(16,185,129,0.12);
                border-color: rgb(16,185,129);
                color: rgb(16,185,129);
                box-shadow: 0 6px 18px rgba(16,185,129,0.16);
              }
            }
          }
        `}</style>
      </div>

      <h1 className="font-display text-[7.5vw] font-800 uppercase leading-[0.92] tracking-tight md:text-[3.6rem]">
        <TypedHeadline />
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr] md:items-end">
        <p className="max-w-xl text-base text-muted md:text-lg mb-8 md:mb-12">{hero.sub}</p>
        <div className="text-sm text-muted md:text-right mb-8 md:mb-12">
          <p>{profile.role}</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
