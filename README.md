# Muskaan Verma — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + next-themes.

## Run it locally (VS Code)

1. **Install Node.js 18.18+** (LTS 20 recommended) if you don't have it — nodejs.org.
2. **Unzip this project** and open the folder in VS Code.
3. Open the built-in terminal (`` Ctrl+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open **http://localhost:3000** — you should see the intro animation, then the site.
5. Edit and save any file — the dev server hot-reloads automatically.

## Where everything lives

- `data/content.ts` — **all your text content in one file**: bio, career chapters, projects,
  skills, contact info. Edit this file for 90% of future updates; you won't need to touch
  components for a new job, project, or skill.
- `components/Intro.tsx` — the landing wave/zoom-out sequence. Change the delay, the
  avatar, or swap it for a real photo/Lottie animation here.
- `components/Career.tsx` — the accordion timeline.
- `components/Projects.tsx` — the filterable project grid.
- `components/Skills.tsx` — the scroll-triggered proficiency bars.
- `components/Contact.tsx` — email/LinkedIn + copy-to-clipboard.
- `app/globals.css` / `tailwind.config.ts` — colors, fonts, spacing tokens.
- `next-themes` handles the light/dark toggle (see `components/ThemeToggle.tsx`).

## Deploy for free

The easiest path with a domain you already own:

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, **Import Project**, pick the repo.
   Framework preset auto-detects as Next.js — just click Deploy.
3. In the Vercel project → **Settings → Domains**, add your domain.
4. In your domain registrar's DNS settings, add the CNAME/A record Vercel shows you.
5. Done — every future `git push` auto-deploys.

Netlify works the same way if you'd rather use that.

## Things you'll likely want to change first

- Swap the initials-in-a-circle avatar (`About.tsx`, `Intro.tsx`) for a real photo.
- Add a GitHub link and resume-PDF download link in `Contact.tsx` if you want them.
- Add a favicon in `/public`.
- Tune the color tokens in `tailwind.config.ts` (`orange`, `cream`, `ink`) if you want a
  different accent than the orange/cream/black used here.

## Notes on scope

- Everything here is static — no backend, no database, free to host indefinitely.
- The intro plays once per browser session (via `sessionStorage`) so repeat visits skip
  straight to the site.
- Reduced-motion preferences are respected globally in `globals.css`.
