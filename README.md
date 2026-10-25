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

Selected original evidence sources remain in `src/assets/evidence/originals/`, alongside optimized website assets in `src/assets/evidence/`. Four documents and four photographs are public. IELTS Academic, SAT, Sydney eligibility and ANU offer documents/previews are withheld; their text mentions remain. Private copies are kept outside this repository. Earlier Git commits may still contain these documents. Scholarship offers and eligibility remain distinct from attendance.

## Publishing

The website uses `site-status.json` as a reversible publishing control. `paused: false` builds the cleaned portfolio; `paused: true` builds only a temporary-unavailable page. The four withdrawn documents remain excluded from the site and published Git history. Restoring the website does not purge GitHub’s cached pre-rewrite URLs; that cleanup requires GitHub Support. See DEPLOYMENT.md and the history-cleanup report for the current cache status.
