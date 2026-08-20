# Amol Harsh — Personal Site

Next.js 15 (App Router) · Tailwind v4 · TypeScript · React 19.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All content lives in [`content/data.ts`](content/data.ts) — profile blurb, research projects, publications, experience, education, skills, awards. No component edits needed for routine updates.

## Structure

- `app/` — layout, root page, global CSS (Tailwind v4 `@import`).
- `components/` — section components (`Hero`, `Research`, `Publications`, `Experience`, `Education`, `Nav`, `Footer`, `Section`).
- `content/data.ts` — single source of truth for site content.

## Theme

Dark zinc base with an emerald accent (defined as `--color-accent` in `app/globals.css`). To re-tint the site, change that one CSS variable.

## Deploy

`npm run build && npm start`, or push to Vercel — zero config required.
