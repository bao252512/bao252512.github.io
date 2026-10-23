# Code Structure

main.tsx mounts React StrictMode and App directly. App owns hash navigation, system/manual motion state, scroll reveal and reading progress. One custom editorial presentation replaces the retired Engineering/Business template runtime; saved legacy preferences have no effect.

Existing component files provide the hero signal field, selected project concepts, methods tabs, learning journey, native recognition records, native evidence dialogs, community photography and Markdown case-study pages. Factual data remains in src/data; project articles are in src/content/journal; selected public evidence is in src/assets/evidence.

Routes #/journal/flood-mapping and #/journal/flood-prediction load actual case articles. In-page anchors organise the rest of the site. Navigation moves focus appropriately on case routes. Document dialogs and details use browser semantics. Animated SVG/CSS concepts use no new animation library and are identified as illustrative. System/manual reduced motion leaves content readable.

Vite produces a static dist bundle with GitHub Pages base-path compatibility. No backend, database, account service or public profile-document download. Supporting evidence includes the complete ANU PDF and all 12 source records. Raw source inputs and immutable audit remain outside the deployed application. package.json/package-lock.json define installed versions; only used runtime modules enter the build.
