# ZeroForge

Temporary **Coming Soon** marketing site for **ZeroForge** (`zeroforgelab.com`) — a Canadian software and digital product studio. Full company site under construction.

Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**. Configured for **static export** so it deploys cleanly to Cloudflare Pages (or any static host).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`. Preview locally with any static server, for example:

```bash
npx serve out
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Static export to `out/` |
| `npm run start` | Not used for static export — serve `out/` instead |
| `npm run lint` | Run ESLint |

## Cloudflare Pages

1. Connect the GitHub repo (`Masteryodagaming/zeroforgelab`) or upload the `out/` folder.
2. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) or None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20 (or current LTS)
3. Environment variables: none required for the static marketing site.
4. Custom domain: point `zeroforgelab.com` (and `www`) to the Pages project.

The notify / contact flows are **client-side `mailto:`** to `contact@zeroforgelab.com`. Wire a form backend when you are ready for inbox submissions without a mail client.

## Project structure

```
src/
  app/           # App Router: /, /about, /contact, layout, global styles
  components/    # Header, Footer, AnimatedBackground, Logo, NotifyForm
public/          # logo.png (from logo.jpeg), favicon, OG, robots, sitemap
out/             # Static export (after build)
```

## Licence

Private — © ZeroForge. All rights reserved.
