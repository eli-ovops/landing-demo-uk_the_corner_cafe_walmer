# Local Demo QA — The Corner Cafe, Walmer

**Status:** owner local QA complete; `READY FOR INDEPENDENT VISUAL ACCEPTANCE`. This is not a final Client-showable verdict, deployment, publication, transfer, outreach or send authorisation.

## Browser evidence

Local server: `http://127.0.0.1:8765`  
Browser: Playwright CLI, real Chromium session  
Console after final reload: `0 errors, 0 warnings`

| Check | Result | Evidence |
|---|---|---|
| Desktop 1440 × 900 | PASS | `qa/desktop-1440x900.png` |
| Desktop full-page rhythm | PASS | `qa/desktop-full.png` |
| Mobile 390 × 844 | PASS | `qa/mobile-390x844.png` |
| Mobile full-page rhythm | PASS | `qa/mobile-full.png` |
| Desktop horizontal overflow | PASS | `scrollWidth 1425 ≤ viewport 1440` |
| Mobile horizontal overflow | PASS | `scrollWidth 375 ≤ viewport 390` |
| Image load | PASS | all three local images complete, non-zero natural dimensions |
| Navigation / telephone CTA | PASS | local fragment links and `tel:+441304368681` confirmed in browser snapshot |
| Maps CTA | PASS — URL shape only | exact address is encoded in an external Google Maps search URL; external navigation not activated |
| Reduced motion | PASS | `MOTION_INTENSITY: 2`; no automatic animation. CSS removes transitions under `prefers-reduced-motion: reduce`. |

## Product and visual checks

- **Hero:** merchant name, Walmer, breakfast/lunch and call path are visible on first load; unique C-01 concept image is only hero visual.
- **Full-page visual storyboard:** C-01 supports breakfast atmosphere; C-02 is the distinct afternoon-tea/occasion visual; C-03 supports the practical visit/closing beat. No source image repeats or passes as a real Cafe image.
- **Business fidelity:** `BUSINESS_FIDELITY QA = PASS` for the bounded shown slice. The source-to-copy mapping is in `BUSINESS_FIDELITY_MAP.md`; no unverified prices, live menu, hours, award, review, owner name, booking or event-date claim is present.
- **Bottom 40% commercial QA:** PASS for owner QA. New factual information appears here (31 Dover Road / verified telephone), C-03 supplies a new visual return, and the closing continues the visit/call path without fake social proof or a generic oversized CTA-only band.
- **Client-visible internal-text scan:** PASS. Scanned `index.html` visible text for internal governance, source/rights statements, transfer language, placeholders, TODOs, price claims, booking claims and fake menu language. No prohibited internal text is visible. The required low-interference `Independent concept preview` label remains.
- **P0/P1 defects:** 0 observed in local browser QA.

## Outstanding gate

`INDEPENDENT VISUAL ACCEPTANCE = AWAITING`. A reviewer other than the producing Owner must score the final 1440×900 and 390×844 renderings against the ten-part visual rubric and first-open tests before any `CLIENT-SHOWABLE DEMO` claim.

## Production record

- Content expansion recheck: 2026-09-02. Added sourced operational facts: since-2020 family cafe, Cafe/British category, Sunday roasts (eat-in/takeaway), afternoon teas/party platters, hours, accessibility/seating/parking/payment details, and public business-email CTA. Deliberately excluded third-party traveller images/reviews, platform rating/award text, Facebook content, exact menu/prices, specials details and unconfirmed bistro cadence.
- Revised rendering evidence: `qa/desktop-facts-full.png` and `qa/mobile-facts-full.png`. Final mobile check: images loaded, `scrollWidth 390 = viewport 390`, no console errors.
- Actual Demo Minutes: 61 (research/asset selection, pre-code package, local implementation and QA; above target, therefore `SOP COST REVIEW = NOTE`, not a quality exception).
- Direction-level Rebuild Count: 0.
- Local-only authorization: PASS.
- Customer authorization: NOT VERIFIED.
- Deploy / publish / upload / outreach / send / payment / production authority: NOT AUTHORIZED.

## Rebuild 1 visual recheck — 2026-09-02

- Trigger: project owner rejected the prior repeated pure-colour blocks.
- Desktop: PASS — 1440 × 900 viewport and full-page render checked at `output/playwright/desktop-redesign-1440x900.png` and `output/playwright/desktop-redesign-full.png`.
- Mobile: PASS — 390 × 844 viewport and full-page render checked at `output/playwright/mobile-redesign-390x844.png` and `output/playwright/mobile-redesign-full.png`.
- Browser integrity: PASS — desktop `scrollWidth 1440 = clientWidth 1440`; mobile `scrollWidth 390 = clientWidth 390`; six page images loaded with non-zero natural widths; console `0 errors, 0 warnings`.
- Visual result: PASS for local owner QA — warm material substrate replaces colour panels; C-04/C-05/C-06 add three distinct, clearly conceptual service visuals; no fact/CTA/authorization scope was expanded.
- Direction-level Rebuild Count: 1. `READY FOR INDEPENDENT VISUAL ACCEPTANCE` remains unchanged.

## Customer-content integration recheck — 2026-09-02

- Added to visible page: vegetarian/vegan/gluten-free listing, reservations/takeaway listing, a qualified recent-bistro note, sourced Tripadvisor proof snapshot (4.9/5, 468 reviews, 2025 Travellers’ Choice), recent breakfast/sandwich/tea visit signals and a direct Google Maps address route.
- Asset boundary preserved: Tripadvisor traveller photos and FSA badge remain excluded. They are not verified customer-owned assets; the existing distinct original-concept visuals remain the visible photographic story.
- Desktop and 390px mobile: PASS — `output/playwright/desktop-content-full.png` and `output/playwright/mobile-content-full.png`; both viewport checks had no horizontal overflow, and browser console returned `0 errors, 0 warnings`.
- Source boundary: all review-derived copy is attributed or explicitly time-qualified; no review was presented as a current menu, present event date, official customer testimonial, or customer-owned image.

## Official-social visual integration — 2026-09-02

- Discovery: direct read-only fetch of `https://www.facebook.com/thecornerdeal/` returned the public page title “The Corner, Dover Road, Walmer | Deal”, matching page description and image metadata. The page’s public `og:image` was downloaded as F-01, SHA-256 recorded in `IMAGE_LEDGER.md`.
- Visible result: F-01 is now a distinct customer-official visual in the “The people behind the corner” section, alongside an external Facebook-page route. No TripAdvisor/Google traveller image is used.
- Desktop and 390px mobile: PASS — `output/playwright/desktop-official-photo-full.png` and `output/playwright/mobile-official-photo-full.png`; F-01 `naturalWidth = 720`; both viewport checks had no horizontal overflow; console `0 errors, 0 warnings`.
- Boundary: F-01 is a public official-social asset used only for this local, one-to-one Concept Demo. No deployment, publication or source-transfer eligibility is implied.

## Official-photo visual storyboard recheck — 2026-09-02

- Added visible official photos: F-02–F-10 are nine distinct photos from The Corner’s public official Facebook page / Mobile uploads album. They now lead the hero, all three service cards, the occasion block and the new four-image food-and-cafe gallery. F-01 remains the people image.
- Source boundary: the public album header identifies “The Corner, Dover Road, Walmer” and lists 227 public items. The local frozen copies, SHA-256 values, source URL, retrieval date and exact placements are recorded in `IMAGE_LEDGER.md`. TripAdvisor traveller images remain excluded.
- Desktop 1440 × 900: PASS — `output/playwright/desktop-official-gallery-1440.png`; `scrollWidth 1440 = clientWidth 1440`; all 11 page images loaded with non-zero natural dimensions; console `0 errors, 0 warnings`.
- Mobile 390 × 844: PASS — `output/playwright/mobile-official-gallery-390.png`; `scrollWidth 390 = clientWidth 390`; all 11 page images loaded; console `0 errors, 0 warnings`.
- Visual result: the page now carries a real, non-repeating food/cafe visual rhythm rather than a Hero-only image treatment. No food photo is labelled as a current menu item, price, availability or customer testimonial.
- Boundary unchanged: local one-to-one Concept Demo only; customer authorisation and source-transfer eligibility remain NOT VERIFIED. No deployment, publication, outreach or sending was performed.

## Official-photo restoration recheck — 2026-09-02

- Hero: F-02 was non-destructively restored as E-01 at 1086 × 1449. The edit preserved the exact plate, food, tablecloth and camera angle; it only applied restrained technical restoration. The original remains frozen as F-02.
- Remaining real photos: F-01 and F-03–F-10 each have a distinct E-series derivative at 1280px wide, using a documented deterministic upscale, mild tonal correction and restrained sharpening recipe. No objects, food, people, signage or business facts were generated or changed.
- Desktop: PASS — `output/playwright/desktop-photo-polish-1440.png`; `scrollWidth 1440 = clientWidth 1440`; all 11 images loaded at non-zero dimensions; console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-photo-polish-390.png`; `scrollWidth 390 = clientWidth 390`; all images loaded; console `0 errors, 0 warnings`.
- Provenance: original and derivative file hashes plus exact processing constraints are in `IMAGE_LEDGER.md`. Local Concept Demo scope and all customer-authorization / transfer boundaries remain unchanged.

## Rebuild 2 UI/UX and motion recheck — 2026-09-02

- Direction: owner-approved forest/mineral/brick palette and Bricolage Grotesque display typography replace the prior warm-paper/Fraunces default. The audit, protections and motion rationale are recorded in `PRE_CODE_DECISION.md`.
- Layout and copy: removed all 01/02/03 card scaffolding, all visible em-dash flourishes, and reduced eyebrow labels to 3 across the 10-section page. The existing facts, CTA targets, section order and sourced imagery remain intact.
- Interaction: sticky navigation now marks the currently viewed section; primary action, text links and wordmark expose 44px-or-larger visible targets. Hover, pressed and keyboard-focus states use one motion/elevation language.
- Motion: one-time CSS hero entrance plus `IntersectionObserver` section reveal use only opacity/transform and the Premium curve `cubic-bezier(.16,1,.3,1)`. The movement is motivated by hierarchy and reading order, has no scroll-loop listener, and is disabled when `prefers-reduced-motion: reduce` is active.
- Image performance: 10 non-hero images now use `loading="lazy"` and `decoding="async"`; the hero remains eager.
- Desktop: PASS — `output/playwright/desktop-v2-scrolled-1440.png`; `scrollWidth 1440 = clientWidth 1440`; after a normal scroll-through all 10 reveal sections were visible and all 11 images were loaded; console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-v2-scrolled-390.png`; `scrollWidth 390 = clientWidth 390`; all 10 reveal sections were visible and all images were loaded; console `0 errors, 0 warnings`.
- Reduced motion: PASS — `output/playwright/mobile-v2-reduced-motion-390.png`; browser emulation confirmed `prefers-reduced-motion: reduce`, no motion-ready class and zero hidden reveal sections.
- Finesse detector: `P0 = 0`. Its legacy palette-token hits remain in superseded stylesheets only; the final loaded `polish.css` has no detector findings. No fake screenshots, menus, prices, reviews, extra customer claims, deployment or external actions were introduced.

## 8.5 refinement recheck — 2026-09-02

- Scope: tightened the existing page only. No new external assets, factual claims, CTA targets, deployment, publication, outreach or source-transfer action were introduced.
- Hero: rebalanced the restored official food image, reduced the display scale, and added two already-sourced business identifiers (family-run since 2020; breakfast/lunch/brunch) in a quiet lower-corner information rail. This improves first-screen recognition without introducing a second hero visual.
- Proof: two short, visible guest-feedback excerpts from the owner-provided Tripadvisor capture now sit beside the existing rating/review-count/award snapshot. They are explicitly attributed as Tripadvisor guest feedback and do not assert that the comments are current menu claims or official endorsements.
- Motion: removed below-fold hide/reveal behavior so full-page capture and fast scrolling never produce blank content. The single CSS hero entrance remains; sticky navigation still tracks the current section. `prefers-reduced-motion: reduce` yields no hidden hero copy and does not add the motion-ready class.
- Desktop: PASS — `output/playwright/desktop-final-1440.png` and `output/playwright/desktop-final-full-loaded.png`; `scrollWidth 1425 = clientWidth 1425`; all 11 images loaded after a normal paced scroll-through; console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-final-390.png` and `output/playwright/mobile-final-full.png`; `scrollWidth 375 = clientWidth 375`; all 11 images loaded after a normal paced scroll-through.
- Reduced motion: PASS — browser emulation returned `reduced: true`, `motionReady: false`, and `hiddenHero: 0`.
- Client-visible internal-text scan: PASS — no TODO/TBD, governance, rights, transfer, authorization, UNKNOWN or HOLD strings found in the customer-visible HTML/CSS/JS.

## Display-image HD restoration recheck — 2026-09-02

- Scope: all 11 images currently rendered by `index.html` were replaced with new local HD derivatives in `assets/hd-restored/`; source and prior display derivatives remain intact.
- Method: deterministic 2× Lanczos enlargement plus restrained tonal correction and detail sharpening. This pass introduces no generated content, changed food, person, object, text, crop or business fact. A separate built-in image-edit trial was inspected and rejected because it introduced non-source texture; it is not used by the Demo.
- Asset resolution: nine official card/gallery images are 2560px wide, the official Hero is 2172 × 2898, the official profile is 2560 × 2560, and the existing original-concept visit image is 4400 × 2932.
- Desktop: PASS — `output/playwright/desktop-hd-restored-1440.png`; horizontal extent `1425 = 1425`; all 11 display images reported non-zero natural dimensions.
- Mobile: PASS — `output/playwright/mobile-hd-restored-390.png`; horizontal extent `375 = 375`; all 11 display images reported non-zero natural dimensions.
- Browser integrity: PASS — console `0 errors, 0 warnings` in both checks. Provenance, derivative hashes, inputs and processing bounds are recorded as H-01 through H-11 in `IMAGE_LEDGER.md`.

## Eight-photo AI visual repair — 2026-09-02

- Owner-directed scope: replaced the eight specific low-resolution images in the three offer cards, occasion panel and gallery with G-01 through G-08 in `assets/ai-restored/`. Original official-social copies and deterministic H-series versions remain preserved; no existing file was overwritten.
- Classification correction: the earlier rejected edit trial referred to an unsuitable Hero output. The eight later dedicated repairs are now used, and are correctly classified in `IMAGE_LEDGER.md` as source-derived AI restorations rather than untouched official photographs.
- Fact boundary: each result was reviewed against its source for recognisable composition and subject continuity. Since generated pixels can alter non-material texture/detail, the rendered images do not evidence current dishes, menu, price, availability, staff, or interior facts. Screen-reader labels disclose the AI-restored status.
- Desktop: PASS — `output/playwright/desktop-ai-photo-repair-full.png`; horizontal extent `1425 = 1425`; all 11 images loaded with non-zero dimensions, including all 8 G-series files; console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-ai-photo-repair-full.png`; horizontal extent `375 = 375`; all 8 G-series files loaded and no horizontal overflow occurred; console `0 errors, 0 warnings`.
- Visual review: PASS — the repaired offer, occasion and gallery images are visibly sharper and more coherent at their actual page crops. No deployment, publication, outreach or transfer action has occurred.

## Hero v2 visual repair — 2026-09-02

- Owner-directed scope: the original Hero remains preserved as H-01. The page now uses distinct local G-09 (`assets/ai-restored/official-sandwich-hero-ai-restored-v2.png`), derived from the official source chain F-02 → E-01 → H-01.
- Visual goal: retain the factual food arrangement and portrait framing while giving the Hero more controlled daylight, cleaner tonal separation, and a calmer upper image field for headline legibility.
- Source boundary: G-09 is a source-derived AI restoration, not an untouched official photo. Its alt text discloses this; the visual makes no menu, price, availability or other current-business claim.
- Pending browser verification: run fresh desktop and mobile rendering after the Hero source swap; no deployment, publication, outreach or transfer action has occurred.
- Desktop: PASS — `output/playwright/desktop-hero-v2-1440.png`; Hero G-09 loaded at 1086px natural width, horizontal extent `1425 = 1425`, console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-hero-v2-390.png`; Hero G-09 loaded at 1086px natural width, horizontal extent `375 = 375`, console `0 errors, 0 warnings`.
- Visual review: PASS — G-09 provides a clearer, calmer Hero treatment at the actual Desktop and Mobile crops while retaining the original food scene's recognisable arrangement.

## Local preview package — 2026-09-02

- Package: `packages/The-Corner-Cafe-Walmer-LOCAL-PREVIEW-20260902-v3.zip` (39MB), SHA-256 `4e5c9cc07fa008d73c77697d7a303ff87e4b541fb4e94937d7a197bd03593de3`.
- Classification: `LOCAL_PREVIEW_PACKAGE` only. It is not a Cloudflare upload package and not a source-transfer package.
- Root contract: the archive root contains `index.html`, its four CSS files, `motion.js`, `assets/`, and `MANIFEST.sha256`; no nested `demo/` directory, `.DS_Store`, `._*`, or `__MACOSX` entry is present.
- Integrity: `unzip -tqq` passed; an isolated extraction verified every manifest SHA-256 entry; local-browser test of that extraction loaded all 11 images with `1425 = 1425` horizontal extent and console `0 errors, 0 warnings`.

## WebP media conversion — 2026-09-02

- Scope: all 11 images rendered by `index.html` now resolve from `assets/webp/` (W-01–W-11). The source PNG/JPEG assets are retained; no existing image was overwritten.
- Compression: 3.7MB total for the rendered WebP image set, versus 55MB across the retained source derivative directories. Pixel dimensions are preserved; source hashes, settings and W-series output hashes are in `IMAGE_LEDGER.md`.
- Desktop: PASS — `output/playwright/desktop-webp-1440-full.png`; `1425 = 1425`, all 11 images loaded as WebP at their expected dimensions, console `0 errors, 0 warnings`.
- Mobile: PASS — `output/playwright/mobile-webp-390-full.png`; `375 = 375`, all 11 WebP files loaded without horizontal overflow, console `0 errors, 0 warnings`.
- Updated package: `packages/The-Corner-Cafe-Walmer-LOCAL-PREVIEW-20260902-v4-WEBP.zip` (3.7MB), SHA-256 `33a26ad0f0de167edccf51751d21aeefa8d4198f7ad42ef45193b8353dcf92a9`. Its isolated extraction passed every `MANIFEST.sha256` hash and Mobile browser check (`375 = 375`, 11/11 WebP images loaded, console `0 errors, 0 warnings`). The previous v3 package remains a valid older PNG/JPEG snapshot.
