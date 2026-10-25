# Gia Bao portfolio code-generation plan

Approved for implementation. This is the single source of truth for Code Generation once explicitly approved.

## Unit and contracts

Workspace: /Users/nhamhhung/bao252512.github.io. Unit: gia-bao-portfolio. All seven GB stories belong to this one React/TypeScript/Vite package. Reuse current typed portfolio records, template maps, journal/hash routing, media previews and GitHub Pages handling. No new API, database, business algorithm or service boundary. Conditional design stages are recommended skipped in the execution plan.

## Planning checklist

- [x] Review workspace/state, architecture, approved requirements and stories.
- [x] Identify dependencies, exact paths, interfaces and story coverage.
- [x] Prepare numbered executable steps and verification criteria.
- [x] Receive approval covering this plan and workflow stage recommendations.
- [x] Record approval and advance to Step 1.

## Step 1: Inspect sources and prepare assets

- [x] Inspect actual image/PDF evidence before choosing captions and claims; archive filenames alone are insufficient.
- [x] Copy the supplied resume into src/assets/documents/gia-bao-resume.docx; preserve original root DOCX and ZIP.
- [x] Create selected, resized browser-compatible evidence under src/assets/evidence, converting HEIC with available local tooling.
- [x] Create src/assets/gia-bao-mark.svg and public/gia-bao.svg for monogram identity; create explanatory project art under src/assets/projects only if useful. Do not invent observed flood masks, model results or identified portraits.

Stories: GB-01, GB-05, GB-06. Keep scholarship offers distinct from enrollment and retain source provenance.

## Step 2: Replace typed content

- [x] Update src/data/profile.ts, about.ts, education.ts, experience.ts, awards.ts, projects.ts, skills.ts, certificates.ts, gallery.ts, sectionContent.ts and navigation.ts with source-based Gia Bao records.
- [x] Keep missing contact email/social data empty and disable the contact section; repair consumers so no empty actions appear.
- [x] Replace src/data/blog.ts and videos.ts personal records with typed empty arrays where reusable imports remain.
- [x] Preserve src/data/portfolio.ts aggregation and existing src/types/portfolio.ts contracts; retain source wording or omit ambiguous specifics rather than inventing resolutions.

Stories: GB-01, GB-04, GB-05, GB-07.

## Step 3: Write case studies with existing journal routes

- [x] Replace src/content/journal/first-local-journal.md with flood-mapping.md and flood-prediction.md.
- [x] Update src/data/journalPosts.ts to import those articles; point src/data/projects.ts actions to their real internal routes.
- [x] Describe resume-reported methods, datasets, evaluation, results and practical limitations. Label IoU, R-squared and ranking separately. Do not claim reproduction or supply invented external URLs/charts.
- [x] Adapt existing src/components/Projects.tsx, Journal.tsx, JournalPostPage.tsx and src/templates/business/BusinessProjects.tsx, BusinessJournal.tsx, BusinessJournalPostPage.tsx as needed for case-study navigation and readable detail.

Stories: GB-02, GB-03, GB-06.

## Step 4: Adapt existing views and interactions

- [x] Update src/components/Hero.tsx, About.tsx, Education.tsx, Experience.tsx, Awards.tsx, Skills.tsx, Gallery.tsx, Contact.tsx and Navbar.tsx and corresponding existing Business components for new content and monogram.
- [x] Render selected evidence as its actual image/PDF type. Use existing previews or accessible native open/download links; retained modals need keyboard dismissal, focus handling and descriptive controls.
- [x] Repair src/components/shared/SectionShell.tsx and existing template shells/maps as needed so CTAs/next-section links never target hidden contacts or empty data.
- [x] Retain meaningful test IDs and add stable test IDs to new/changed interactive controls.

Stories: GB-01, GB-04, GB-05, GB-06. Stay within existing component boundaries.

## Step 5: Apply visual identity

- [x] Update src/App.css, src/index.css and src/templates/business/business.css for consistent navy/teal analytics styling, readable hierarchy and responsive spacing.
- [x] Present real labeled metrics, restrained grid motifs, visible focus and reduced-motion support; preserve both existing color modes.
- [x] Update index.html title/description/favicon and ensure public/gia-bao.svg resolves correctly.
- [x] Retain the Engineering default in src/data/template.ts; ensure retained Business presentation also contains Gia Bao content and no inherited identity.

Stories: GB-01, GB-06.

## Step 6: Remove obsolete material and refresh documentation

- [x] Remove replaced Hung portrait, photo_1 through photo_8 images and photo_4.HEIC, old resume PDF, nus/ut/sa/zhonghua logos, old project covers and all existing Hung certificate PDFs after fixing imports. Exact candidates are in the implementation-preparation inventory.
- [x] Remove unused src/assets/react.svg and public/vite.svg after reference checks.
- [x] Replace existing README.md and DEPLOYMENT.md with accurate Gia Bao site guidance; put substantive workflow documentation in aidlc-docs.
- [x] Remove obsolete Hung-only inception/construction artifacts while preserving current Gia Bao artifacts, approved stories/personas, reusable refreshed architecture context and immutable audit. Update aidlc-docs/README.md and retained reverse-engineering summaries.
- [x] Preserve .git, AGENTS.md, .aidlc-rule-details, GitHub Actions, original Gia Bao inputs and unrelated user edits. Review targeted deletion diffs.

Story: GB-07.

## Step 7: Update meaningful tests and verify

- [x] Update src/App.test.tsx, src/test/data/portfolio.test.ts, src/test/data/navigation.test.ts, src/templates/journalPostPages.test.tsx and src/templates/business/businessTemplate.test.tsx where old identity/content assumptions change; preserve applicable reusable tests.
- [x] Verify Gia Bao identity, both case-study routes, correctly labeled metrics, resume download, omitted contacts and evidence controls under affected templates.
- [x] Install missing locked dependencies with npm ci, then run npm test and npm run build; fix change-related failures. No lint run is requested.
- [x] Scan source/build for Hung identity/URLs, stale imports and broken asset paths; check static base-path handling where affected.
- [x] Perform supported preview checks for mobile/desktop and keyboard access when available; record exact verification limits. Inspect asset sizes and bundle warnings.

Stories: GB-01 through GB-07. Avoid implementation-mirroring CSS tests or unrelated infrastructure tests.

## Step 8: Complete documentation and present implementation review

- [x] Write aidlc-docs/construction/gia-bao-portfolio/code/code-generation-summary.md describing changes, deletions, verification and limits.
- [x] Track each completed step and implemented story immediately in this plan/story progress and aidlc-state.md.
- [x] Present required Code Generation completion review; await Request Changes or Continue to Next Stage before the final Build and Test stage.

## Following stage

After implementation approval, load construction/build-and-test.md and write the five required build/test instructions and summary files under aidlc-docs/construction/build-and-test/. Record actual results, mark load testing N/A for this static portfolio, and retain the prescribed Operations placeholder review. This plan does not authorize commits, pushes or publishing.

## Extension compliance

Security Baseline N/A (disabled); PBT N/A (disabled). Full rules not loaded. No applicable enabled extension findings.

## Requested revision: Data Atlas design

User requested a more independent design, provided https://beetranngoclinhanh-cmyk.github.io/ as a quality reference, removal of all public resume mentions, and technical animation with clever information organisation. This is explicit Request Changes at the existing implementation review, superseding the earlier download and retained-template requirements. Proceed within the current Code Generation revision; no repeated opt-ins or new initial workflow. Security/PBT remain disabled.

- [x] Inspect the reference visually and review current content/architecture.
- [x] Replace the inherited template-led runtime with one coherent Data Atlas presentation, responsive navigation, large editorial type and new palette.
- [x] Implement animated signal illustration, interactive project diagrams, methods exploration, learning/experience timeline, recognition and evidence views.
- [x] Remove public download assets/contracts/controls and all public resume mentions; preserve original user input and immutable historical audit.
- [x] Preserve factual claims, real case-study routes, source distinction, accessible interactions and reduced-motion support.
- [x] Replace retired-template tests with meaningful current-user-journey checks; run build/tests and browser desktop/mobile/keyboard checks.
- [x] Update current documentation and return to the required two-option result review.

## Requested revision: Complete evidence coverage and cleanup

The user explicitly requested inclusion of every Evidence Folder file and cleanup of extra folders. The source ZIP has been replaced by an extracted folder in the user workspace; preserve that user change. Current scope supersedes the earlier selected-evidence-only scope.

- [x] Inventory all current source documents/photos and establish a one-to-one source-to-site manifest.
- [x] Convert missing images with readable browser formats and include the complete original PDF.
- [x] Display all eight documents and all four photos with accessible navigation/previews and accurate labels.
- [x] Add a meaningful source-coverage regression check; verify build, tests and actual browser loading.
- [x] Remove unused assets/data and empty obsolete folders while preserving user sources, active code and AI-DLC/audit.
- [x] Update current summary/state and present the required result review.

## Requested revision: Awards spacing and alignment

- [x] Expand the awards and evidence area toward the left by narrowing the introductory column and reducing the gap.
- [x] Remove all evidence-card rotations, including hover rotation, while preserving responsive layouts.
- [x] Verify the production build and desktop/mobile layout; update state and audit.

## Requested revision: Consolidate evidence into assets

- [x] Move all 12 unchanged originals into src/assets/evidence/originals and update manifest/test references.
- [x] Update current documentation to reflect the consolidated paths.
- [x] Run source-integrity tests and production build; record results.

## Requested revision: Larger, readable typography

- [x] Increase small text sizes across navigation, body copy, interactive diagrams, labels, awards, evidence and case studies.
- [x] Adjust responsive layouts and wrapping for larger text.
- [x] Verify desktop/mobile rendering, existing tests and production build; record results.

## Requested revision: Temporary shutdown and exam-document privacy

- [x] Disable automatic deployment and replace the live portfolio with a document-free unavailable page (unpublish requires unavailable admin permission); verify hosting status.
- [x] Preserve exam originals/previews outside repository and remove IELTS Academic, SAT, Sydney and ANU documents from public evidence while retaining result mentions.
- [x] Update coverage tests/documentation and verify build excludes withheld files/details.
- [x] Publish the document removals to GitHub and verify remote files absent; record history limitations and restoration instructions.

## Requested revision: Remove documents from older commits

- [x] Inspect remote refs, identify all historical file paths and verify private copies.
- [x] Back up original history privately and rewrite a separate clean clone to remove the four documents, duplicate blobs and containing ZIP.
- [x] Verify every retained commit is clean and current application tree is unchanged, then force-update main with an explicit lease.
- [x] Synchronize the workspace, verify a fresh remote clone and paused hosting, and record cache/clone cleanup limitations.

## Requested revision: Restore cleaned website

- [x] Recheck the four withdrawn documents and cached-copy status; unpause only the cleaned portfolio.
- [x] Run tests and production build; verify no withdrawn files, certificate details or private data in output.
- [x] Publish the cleaned website and verify live content, evidence assets and removed-document URLs.
- [x] Document restored status and the remaining GitHub Support cache-purge action.
