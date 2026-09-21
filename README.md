# Bajriwala — Official Marketing Website

Production marketing site for the Bajriwala Customer App: construction materials delivered to your site.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |

## Environment variables

All public configuration lives in `.env.local` (see `.env.example`).

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO, sitemap and Open Graph |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Google Play listing. Empty → badge scrolls to `#download` |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store listing. Empty → badge scrolls to `#download` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email |
| `NEXT_PUBLIC_CONTACT_PHONE` | Contact phone |
| `NEXT_PUBLIC_WHATSAPP_URL` | WhatsApp `wa.me` link |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram (footer, only if set) |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn |
| `NEXT_PUBLIC_YOUTUBE_URL` | YouTube |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | GA4 measurement ID. Empty → analytics is not loaded |

Marketing copy, categories, screenshots and feature flags live in `lib/content.ts` and `lib/site-config.ts`.

## Deploy (Vercel)

Connect the `Vikram-Website` repository. Set the same `NEXT_PUBLIC_*` variables in the Vercel project. Build command is `npm run build`; output is the default Next.js app.

## Adding app screenshots

Place files in `public/images/app/` and append an entry to `appScreens` in `lib/content.ts`. Phone mockups, the carousel and the experience section all read from that array.
