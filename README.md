# Minimalist Restaurant Template

Warm, soft, luxurious landing page for restaurants — config-driven like `my-landing-page` and `cheri-bistro`.

## Quick start

```bash
npm install
npm run dev
```

Open `/` for the preview index, or `/preview/demo-restaurant` for the demo site.

## Add a new restaurant

1. Copy `src/configs/_template.json` → `src/configs/{slug}.json`
2. Add images under `public/previews/{slug}/`
3. Visit `/preview/{slug}`

## Config fields

See `src/configs/_template.json` for colors, logo, menu, features, about section, and copy.

## Personalize for production

Fork this template (like `cheri-bistro`) and deploy with `VITE_RESTAURANT_SLUG` when you need a single-restaurant build.
