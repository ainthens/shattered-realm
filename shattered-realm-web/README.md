# Shattered Realms Mobile

Landing page for Shattered Realms Mobile built with React, TypeScript, Vite, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel Deployment

This project is ready for Vercel.

### Important configuration

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

### SPA routing

The app uses client-side routing for `/trailer`, so `vercel.json` includes a rewrite that sends unknown routes to `index.html`. That prevents direct visits to `/trailer` from returning a 404 on Vercel.

### Deploy steps

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Confirm the framework preset is `Vite`.
4. Deploy.

## Notes

- Browser tab title is set in `index.html`.
- Static assets are bundled by Vite from `src/assets/`.
