# GitHub Pages delivery

The existing .github/workflows/deploy.yml installs locked dependencies, builds Vite, and deploys dist when changes are pushed to main or the workflow is run manually. Publishing is outside this local revision.

The workflow uses the root base path for an owner.github.io repository and /repository/ for a project site. Keep Pages configured to use GitHub Actions. Project case studies use hash routes and require no server rewrites.

Before a future publish, run `npm ci`, `npm test` and `npm run build`. Check the generated output, evidence links and project routes after deployment. Do not copy raw source inputs or workflow/audit documents into public or dist.

This checkout is verified with Node 24. The inherited workflow uses Node 20; use a compatible runtime when reproducing the build.
