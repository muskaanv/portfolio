"use client";

import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur dark:border-linedark dark:bg-ink/90">
      <div className="section-wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-sans text-sm font-semibold tracking-wide">
          Muskaan Verma
        </a>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-orange transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
