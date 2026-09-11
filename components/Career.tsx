"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { career } from "@/data/content";

export default function Career() {
  const [openId, setOpenId] = useState<string | null>(career[0]?.id ?? null);
  const [lockedId, setLockedId] = useState<string | null>(null);

  return (
    <section id="career" className="border-t border-line py-20 dark:border-linedark">
      <div className="section-wrap">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-4 dark:border-linedark">
          <span className="eyebrow">02 — Career</span>
          <span className="eyebrow">(Five years, four chapters)</span>
        </div>

        <div className="divide-y divide-line dark:divide-linedark">
          {career.map((role) => {
            const open = openId === role.id;
            return (
              <div
                key={role.id}
                onMouseEnter={() => setOpenId(role.id)}
                onMouseLeave={() => setOpenId(lockedId ?? null)}
              >
                <button
                  onClick={() => {
                    if (lockedId === role.id) {
                      setLockedId(null);
                      setOpenId(null);
                    } else {
                      setLockedId(role.id);
                      setOpenId(role.id);
                    }
                  }}
                  className="flex w-full items-center gap-4 py-6 text-left"
                  aria-expanded={open}
                >
                  <span className="w-16 shrink-0 font-mono text-xs text-orange">{role.chapter}</span>
                  <span className="w-40 shrink-0 text-xs text-muted">{role.period}</span>
                  <span className="flex-1">
                    <span className="font-display text-xl font-700 md:text-2xl">{role.title}</span>{" "}
                    <span className="text-muted">{role.org}</span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg transition-transform dark:border-linedark ${
                      open ? "rotate-45 border-orange text-orange" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 pl-0 md:grid-cols-[1fr_260px] md:pl-16">
                        <div>
                          <p className="mb-4 text-muted">{role.summary}</p>
                          <ul className="space-y-2">
                            {role.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2 text-sm">
                                <span className="text-orange">→</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {role.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-line px-3 py-1 text-xs text-muted dark:border-linedark"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {role.stats.length > 0 && (
                          <div className="flex gap-3 md:flex-col">
                            {role.stats.map((s) => (
                              <div
                                key={s.label}
                                className="flex-1 rounded-sm border border-line p-4 dark:border-linedark"
                              >
                                <p className="font-display text-2xl font-800 text-orange">{s.value}</p>
                                <p className="text-xs uppercase tracking-wide text-muted">{s.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
