"use client";

import { motion } from "framer-motion";
import { certifications, skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 dark:border-linedark">
      <div className="section-wrap">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-4 dark:border-linedark">
          <span className="eyebrow">04 — Skills</span>
          <span className="eyebrow">(Stack &amp; tools)</span>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 font-display text-lg font-700">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-muted">{s.level}%</span>
                    </div>
                    <div className="h-[3px] w-full bg-line dark:bg-linedark">
                      <motion.div
                        className="h-full bg-orange"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6 dark:border-linedark">
          <p className="eyebrow mb-3">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-orange px-3 py-1 text-xs text-muted dark:border-orange"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
