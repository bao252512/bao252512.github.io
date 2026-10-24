# GitHub Pages delivery

The public portfolio is temporarily paused. `site-status.json` has `paused: true`; `npm run build` produces only `index.html`, `404.html` and `robots.txt`. No portfolio JavaScript, images or documents are deployed while paused. The unpublished portfolio can still be reviewed locally with `npm run dev` or built with `npm run build:portfolio`.

The GitHub Pages workflow builds and deploys `dist`. The workflow is disabled after the one-time shutdown deployment to prevent automatic updates. The connected account has push access but lacks administrator access, so native Pages unpublishing was unavailable; the hosted URL serves a temporary-unavailable page instead.

To restore the portfolio when requested, set `paused` to `false`, run `npm test` and `npm run build`, review the output, then commit/push and re-enable/run the Pages workflow. Keep the four withdrawn documents excluded. Native Pages unpublishing, if desired, must be performed by a repository administrator in Settings > Pages > Unpublish site.

The workflow derives the root base path for an owner.github.io repository and /repository/ for a project site. Case studies use hash routes and require no server rewrites. Do not copy source inputs, private backups or workflow/audit documents into `public` or `dist`.

Private IELTS, SAT, Sydney and ANU originals/previews are preserved outside this repository at `/Users/nhamhhung/gia-bao-private-evidence`. They are absent from the current GitHub files and generated site. Old commits (including the historical source ZIP) may still contain them; history rewriting and GitHub cache/support cleanup were not performed.
