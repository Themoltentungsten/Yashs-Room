# Yash's Room

A 3D interactive portfolio webpage built with React Three Fiber — walk through a stylized room featuring my projects, social links, and resume.

## Tech stack

- React + Vite
- three.js / @react-three/fiber / @react-three/drei
- framer-motion / framer-motion-3d
- styled-components, zustand, GSAP

## Scripts

```bash
npm install        # install dependencies
npm run dev        # start dev server (http://localhost:5173)
npm run build      # build for production (outputs to dist/)
npm run preview    # preview the production build locally
```

## Deployment

The repo is ready to deploy on both Netlify and Vercel with zero extra configuration.

### Netlify
Point Netlify at this repo. `netlify.toml` sets the build command (`npm run build`), publish directory (`dist`), Node 20, SPA redirects, and long cache headers for fingerprinted assets. Alternatively drag the `dist/` folder onto [netlify drop](https://app.netlify.com/drop).

### Vercel
Import the repo into Vercel. `vercel.json` configures the Vite framework preset, SPA rewrites, and cache headers. No environment variables or other setup required (the `VITE_*` values in `.env` are public and inlined at build time).
