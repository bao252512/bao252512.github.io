# GitHub Pages delivery

The cleaned public portfolio is restored with `site-status.json` set to `paused: false`. `npm run build` produces the portfolio without IELTS Academic, SAT, Sydney eligibility or ANU offer documents/previews. Only the text mentions of results/recognition remain. Tests verify the four documents are excluded. The Pages workflow deploys only `dist`.

To pause again, set `paused` to `true`, build and deploy; output then contains only a temporary-unavailable page and no portfolio assets. Native Pages unpublishing requires repository administrator access, which the connected account lacks. For local review, use `npm run dev` or `npm run build:portfolio`.

The restoration request authorizes re-enabling the GitHub Pages workflow and publishing the clean portfolio. Future pushes to main deploy the configured build. Before publishing, run `npm test` and `npm run build`; inspect output to ensure the withheld documents and private backups are absent.

The workflow derives the root base path for an owner.github.io repository and /repository/ for a project site. Case studies use hash routes and require no server rewrites. Do not copy source inputs, private backups or workflow/audit documents into `public` or `dist`.

Private IELTS, SAT, Sydney and ANU originals/previews are preserved outside this repository at `/Users/nhamhhung/gia-bao-private-evidence`. They are absent from the current GitHub files and generated site. Published history was rewritten on 25 October 2026 to remove these documents and the historical source ZIP. A fresh remote mirror verified every retained commit. GitHub still serves at least one cached old URL; a GitHub Support purge remains pending. See aidlc-docs/construction/gia-bao-portfolio/code/history-cleanup.md. Collaborators must re-clone rather than merge old history.
