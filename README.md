# Gia Bao — Data Atlas

A personal site about data science, machine learning and the questions behind the work. It uses a single dedicated editorial design, built with React, TypeScript, CSS and SVG. No presentation switcher, account service or backend is required.

## Local development

Use Node.js 24, the runtime used for verification, or a compatible runtime supported by the locked Vite version.

- `npm ci` — install locked dependencies.
- `npm run dev` — start local development.
- `npm test` — run interaction/content checks.
- `npm run build` — compile TypeScript and build the static site.
- `npm run preview` — inspect the production build locally.

## Edit the atlas

Public facts and evidence are in src/data and src/assets/evidence. The two case-study articles are in src/content/journal. The main sections live in src/components; App.tsx coordinates hash navigation, motion preferences and scroll-reveal behavior. App.css and index.css define the visual system.

The hero signal field, satellite input controls, ensemble workflow and process tabs are explanatory interactions. Conceptual imagery is labeled; it is not actual sensor output or a running predictive model. Reported metrics are kept separate from decorative animation. The academic chart uses the actual supplied GPA values on a zero-to-ten scale.

All continuous animation can be paused with the header control and respects the system reduced-motion preference. Project routes retain #/journal/flood-mapping and #/journal/flood-prediction. Native anchors navigate the rest of the page. Evidence uses a keyboard-accessible native dialog.

Source materials remain unchanged outside public assets. The full Evidence Folder is represented: eight documents and four photographs, tracked by src/data/evidence.ts. Originals remain unchanged. Scholarship offers and eligibility are distinct from university attendance. See aidlc-docs for source provenance and workflow history; the immutable audit is excluded from the application bundle.

## Publishing

The existing GitHub Pages workflow builds dist and derives the repository base path. See DEPLOYMENT.md. No publishing, commits or pushes are part of this local revision.
