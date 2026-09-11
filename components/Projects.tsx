"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectCategories, projects } from "@/data/content";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="work" className="border-t border-line py-20 dark:border-linedark">
      <style>{`@media (prefers-reduced-motion: reduce) { .hover\:scale-105, .group:hover { transition: none !important; transform: none !important; } }`}</style>
      <div className="section-wrap">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-4 dark:border-linedark">
          <span className="eyebrow">03 — Work</span>
          <span className="eyebrow">(Selected projects)</span>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                filter === c
                  ? "border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink"
                  : "border-line text-muted hover:border-orange hover:text-orange dark:border-linedark"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group transform-gpu transition-transform duration-500 ease-out hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] will-change-transform flex flex-col justify-between border border-line p-6 dark:border-linedark"
            >
              <div>
                <div className="mb-3 flex items-center justify-between text-xs text-muted">
                  <span className="uppercase tracking-wide text-orange">{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-2xl font-700">{p.title}</h3>
                <p className="mt-3 text-sm text-muted">{p.description}</p>
              </div>

              <div className="mt-6">
                <ul className="mb-4 space-y-1">
                  {p.stats.map((s) => (
                    <li key={s} className="text-xs text-muted">
                      · {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted dark:border-linedark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
