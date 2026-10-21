# Data Atlas — revised implementation summary

## Delivered design

Replaced the inherited Engineering/Business presentation engines with one custom Data Atlas. The new visual system uses warm cream, pale sage, forest green and restrained terracotta, with large editorial type and varied narrative sections. The supplied reference was inspected visually for its typographic hierarchy, expressive illustration and flow of information. No code, personal content or imagery was copied from it.

The site introduces Gia Bao through an interactive signal atlas, explains the two flood projects through different visual concepts, combines skills with an analytical-process explorer, places education alongside practical experience, and presents recognition and evidence as expandable records and a document contact sheet. Community activity has its own photographic section.

## Meaningful interactions and animation

- Three signal-field states: observations, relationships and perspective. CSS/SVG radar sweep, breathing nodes and an animated path illustrate thinking rather than measured project output.
- Satellite concept controls toggle radar/optical context; a moving scan and river illustrate the task without inventing model comparison scores.
- A four-step ensemble trace links 20 input factors, feature engineering, three models and blended prediction. Decorative bars are explicitly identified as non-data.
- Four accessible methods tabs support arrow keys, Home and End. A Python-inspired pseudocode note changes with the selected stage.
- Scroll reveal, a discipline ribbon, a reading-progress indicator and small technical motifs give the page motion. The header pauses all continuous motion. OS reduced-motion preferences are respected, including when changed during the session.
- Academic GPA bars use the actual 9.2, 9.4 and 9.6 values on a zero-to-ten scale. Pausing motion preserves their final values and fully readable process panels.
- Native document dialogs support Escape, named controls, focus containment and return to the invoking evidence button. Recognition records use native details/summary.
- Both existing case-study hash routes still work and move keyboard focus to the case heading. Unknown routes degrade gracefully; malformed URL encoding does not crash the app.

## Public-content cleanup

Removed document-download controls, the public Word asset, its profile contract and import, and all resume wording from authored public source/content, README and delivery guidance. No download links or DOCX files remain in production output. The original user-supplied root inputs and immutable historical audit remain as private workflow source materials, outside the public application assets.

Retired 48 legacy presentation files, including template selector/runtime, old layout hooks, UI wrappers and tests that checked retired template details. See data-atlas-retired-files.md. Shared factual data and project Markdown remain source-grounded. Prior public download requirements are superseded by the explicit change request.

## Changed implementation

App.tsx now coordinates the single site, hash changes, reading progress, reveal and motion behavior. main.tsx mounts React directly. Existing Navbar, Hero, About, Projects, Skills, Experience, Awards, Gallery and JournalPostPage files were rewritten in place. App.css/index.css define the new system; native SVG diagrams need no animation library. Profile/types and relevant public records were cleaned. Identity SVG and page title/theme metadata were updated.

No new dependencies were added. Existing unused installed dependencies were not removed from the lockfile in this design task; they are absent from the public runtime imports and bundle where unused.

## Verification

- 27 current tests pass across four files: real interactive states, methods-tab keyboard behavior, motion preference, evidence dialog behavior, route handling, content integrity and contrast. Retired template checks were replaced with current user journeys.
- TypeScript and Vite production build pass. Main JavaScript is about 359 kB (113 kB gzip), down from roughly 934 kB (283 kB gzip). The previous large-chunk warning no longer appears.
- GitHub Pages project-subpath build passes; root HTML references resolve to existing output assets.
- Chrome checks at 320, 390, 640, 768, 1024, 1280, 1440 and 1920 pixel widths show no horizontal document overflow and header controls fit.
- Tested stage controls, sensor controls, ensemble trace, keyboard tabs, actual mobile pointer activation plus Escape/focus return, evidence-dialog Escape/focus return, both case-study routes and malformed-route fallback.
- Motion pause freezes continuous animation. OS reduced-motion disables it and leaves content visible. Checked final static GPA transforms at identity with 92%, 94%, 96% heights; paused tab panels remain fully opaque.
- Selected images decode successfully. No public download controls or removed document wording appears in the rendered home or either project page. Authored public source scan is clean. Markdown's internal parser has an unrelated method named resume; it is not public-facing wording.
- No browser runtime exceptions in checked journeys. Source diff whitespace validation passes.

Previews: /tmp/gia-bao-atlas-final-full.png, /tmp/gia-bao-atlas-final-desktop.png, /tmp/gia-bao-atlas-final-mobile.png, /tmp/gia-bao-atlas-final-projects.png and /tmp/gia-bao-atlas-final-process.png. Browser check records are in /tmp/gia-bao-atlas-qa.json, /tmp/gia-bao-atlas-menu-qa.json and /tmp/gia-bao-atlas-static-qa.json for this session.

## Limits and next checkpoint

Project experiments were not run; diagrams are explanatory. Human review and testing with assistive technology can extend the automated/browser checks. No commits, pushes or publishing were performed. The formal AI-DLC Build and Test instruction stage remains after Code Generation result approval; implementation verification above is complete.

Extension compliance: Security Baseline N/A (disabled); PBT N/A (disabled). Full extension rules skipped. No applicable enabled-extension findings.
