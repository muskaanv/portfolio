"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/content";

const SESSION_KEY = "mv-intro-seen";

export default function Intro() {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setShow(true);
    }
    setReady(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(false);
  };

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(dismiss, 2600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!ready) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={dismiss}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.04, 1] }}
            exit={{ scale: 6, opacity: 0 }}
            transition={{
              scale: { duration: 1.6, repeat: 0, ease: "easeInOut" },
              exit: { duration: 0.7, ease: "easeIn" },
            }}
          >
            <motion.div
              className="flex h-28 w-28 items-center justify-center rounded-full bg-orange font-display text-4xl font-800 text-ink md:h-36 md:w-36"
              initial={{ rotate: -8 }}
              animate={{ rotate: [-8, 8, -4, 4, 0] }}
              transition={{ duration: 1.1, delay: 0.2, ease: "easeInOut" }}
            >
              {profile.initials}
            </motion.div>
            <motion.p
              className="font-accent text-2xl italic text-cream md:text-3xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Hi, I&apos;m Muskaan.
            </motion.p>
          </motion.div>

          <button
            onClick={dismiss}
            className="absolute bottom-8 right-8 text-xs uppercase tracking-widest text-mutedlight hover:text-cream"
          >
            Skip →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
