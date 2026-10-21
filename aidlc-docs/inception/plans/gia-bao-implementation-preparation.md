# Gia Bao implementation preparation

Draft inventory to inform Workflow Planning after User Stories approval. This is not an approved code-generation plan.

## Content and presentation updates

- src/data/profile.ts, about.ts, education.ts, experience.ts, awards.ts, projects.ts, skills.ts, certificates.ts, gallery.ts: replace Hung's records with supported Gia Bao records.
- src/data/blog.ts, journalPosts.ts, videos.ts and src/content/journal/first-local-journal.md: remove Hung's writing and videos; retain generic modules only if still needed by reusable infrastructure.
- src/data/navigation.ts and sectionContent.ts: enable only meaningful populated sections, omit unavailable contact actions, and label case studies/evidence clearly.
- src/components and src/templates: adapt existing sections for case-study detail, evidence previews, empty-contact handling, and Gia Bao identity.
- src/App.css, src/index.css and relevant template styles: apply the data science visual direction.
- index.html and public/vite.svg: replace generic title, metadata, and favicon with Gia Bao branding.
- Relevant existing tests: update old content expectations and cover Gia Bao identity, project navigation, resume, evidence, and missing contacts.

## Hung-specific asset removal candidates

Remove after replacing all importing data records:

- src/assets/profile.jpeg
- src/assets/photo_1.jpg through photo_8.jpg, plus photo_4.HEIC
- src/assets/documents/resume.pdf
- src/assets/nus.png, nus.svg, ut.png, sa.png, zhonghua.jpg
- src/assets/projects/coursework_and_certificates.png, program_analyzer.png, java_resume_application.png
- All existing src/assets/certificates PDFs, which belong to Hung
- Unused generic starter logos src/assets/react.svg and public/vite.svg

## Documentation cleanup

Replace README.md and relevant deployment instructions with Gia Bao-specific guidance. Remove obsolete Hung-only inception/construction artifacts after checking that retained active documents do not depend on them. Refresh reusable architecture summaries where stale. Preserve aidlc-docs/audit.md, current Gia Bao workflow artifacts, AI-DLC rules and AGENTS.md. Keep .git and original Gia Bao inputs.

## Evidence handling and verification

Inspect the archive contents visually before selecting copies; convert HEIC, resize oversized photos, and use readable filenames. Do not publish sensitive document details unnecessarily. Keep scholarship awards distinct from university attendance. Verify no broken imports or references after cleanup, then run the production build and relevant automated tests.
