# Pre-code Decision — The Corner Cafe, Walmer

**Date:** 2026-09-02  
**Local-only authorization:** PASS  
**Customer authorization:** NOT VERIFIED  
**Pre-code reviewer conclusion:** Project owner explicitly directed Demo execution on 2026-09-02 after reviewing this decision package. This authorises the local production phase only; final independent visual acceptance remains required.  
**PRE-CODE GATE:** PASS — local production only; no deployment, publication, outreach, transfer or sending authority.

## Customer intelligence and asset coverage

| Item | Status | Decision | Page placement / reason |
|---|---|---|---|
| Name, Walmer address, telephone | verified public facts | USE | hero, visit, footer |
| Family cafe / local ingredients / dietary choices | verified public facts | USE as original paraphrase | everyday table + values |
| Breakfast, lunch, brunch, drinks | verified public facts | USE | offer hierarchy |
| Afternoon tea / Sunday roast / bistro evenings | listing/review-supported, volatile | USE carefully | occasion story; no date/menu/availability claim |
| Hours | volatile snapshot | DO NOT USE | would need live recheck |
| Public Gmail | contact fact only | DO NOT USE | not a customer-facing CTA |
| TripAdvisor images and reviews | third-party / user-generated | DO NOT USE | rights and attribution unsuitable |
| Facebook candidate page | inaccessible, provenance unknown | DO NOT USE | no image, logo or fact claim |
| Original visuals | generated locally | CONCEPT REPLACEMENT | full-page visual storyboard; see IMAGE_LEDGER.md |

## Current UK reference register

Reference is directional only; no copied layout, copy, assets or code.

1. [The Goods Shed, Canterbury](https://thegoodsshed.co.uk/) — food-led editorial warmth and practical local detail.
2. [The Hoxton Grill, London](https://thehoxton.com/london/shoreditch/restaurants/the-hoxton-grill/) — confident hospitality hierarchy without fake menu density.
3. [The Wolseley, London](https://www.thewolseley.com/) — restrained serif-led hospitality tone.
4. [The Pig at Bridge Place](https://www.thepighotel.com/at-bridge-place/) — English place identity and calm photographic pacing.

## Brand read and three dials

**Design Read:** A warm, useful local-cafe landing page for an owner who needs a first, shareable home rather than a polished chain-restaurant facade.

- `DESIGN_VARIANCE: 6` — asymmetrical image/text pairings and an offset visit panel, collapsing cleanly to one column on mobile.
- `MOTION_INTENSITY: 2` — no automatic motion; only accessible hover/focus transitions. This makes reduced-motion inherently static.
- `VISUAL_DENSITY: 4` — enough offer and practical information to support a visit, no dense fake menu.

**Brand register:** SOUL = familiar morning ritual; SPECTACLE = low, earned through tactile original photography and a strong typographic substrate; DENSITY = calm but useful.

**Rejected lazy default:** blackboard clichés, faux pub signage, generic three-card brunch layout, fake menu prices, review-score badges, food-delivery imagery and injected “artisan” language.

## Two materially different directions

### A. Selected — The everyday table

A bright, warm, editorial composition: a wide breakfast still-life makes the first impression, followed by uneven photo/text rhythm and a practical amber visit band. Bottom 40% turns the page toward a concrete call and Dover Road visit. It best expresses the everyday/occasion duality without overclaiming a real interior or menu.

### B. Rejected — The Walmer noticeboard

A darker, compact, information-led street-facing layout centred on a blank chalkboard concept image and a modular “what’s on” architecture. It risks suggesting a live specials board or current event schedule that cannot be verified, so it is less truthful and commercially useful.

## Full-page visual storyboard and implementation map

| Page task | Asset / fact role | Selector / implementation | Commercial role |
|---|---|---|---|
| Hero | original morning table image; Walmer / cafe facts | `.hero` / `morning-table.png` | immediate cafe and place recognition |
| Everyday offer | verified breakfast/lunch/dietary facts; tea detail | `.everyday` / cropped hero + CSS material | makes a visit legible without fake menu |
| Occasion | original afternoon tea image; bounded tea signal | `.occasion` / `afternoon-tea.png` | turns a regular cafe visit into an occasion cue |
| Values | family/local/dietary facts as original copy | `.values` / visual type and quiet texture | explains why it is not a generic cafe |
| Visit | original blank-board detail; address/phone | `.visit` / `visit-detail.png` | Bottom 40% practical action |
| Closing | call action and address | `.closing` | one final decision path, no duplicate CTA intent |

## Skill application receipt

- `website-delivery-sop`: local-only boundary, no deployment, scope and acceptance evidence map set.
- `finesse-brief`: produced DEMO_BRIEF with first-screen task, section hierarchy, fact floor, CTA and non-scope.
- `finesse-ui`: Brand Read/three dials/Soul–Spectacle–Density materially set the warm substrate, low-motion hero and asymmetric pacing.
- `design-taste-frontend`: explicit anti-template rejection, no three-equal-card section, one theme family, no automatic motion, mobile collapse and realistic fact floor.
- `media-use`: asset provenance decision applied; unsafe third-party/unknown assets excluded and three frozen local original-concept files ledgered.
- `imagegen`: generated the three original raster concept assets; exact prompts and hashes in IMAGE_LEDGER.md.

## Required independent reviewer check

The reviewer must confirm: (1) visual recognition of a Walmer cafe before main copy, (2) no unsupported business claim, (3) Direction A is sufficiently distinct and commercially better than Direction B, and (4) the offer thesis and Bottom 40% action are credible. Until that separate conclusion is recorded, no customer-visible HTML/CSS/JS may be created.

## Rebuild 1 — material-led correction (2026-09-02)

**Trigger:** The project owner rejected the initial multiple pure-colour-block interface.  
**Decision:** retain the verified copy and existing original-concept assets, but replace the three coloured offer panels and the large amber visit band with a continuous warm stone/paper substrate, thin ink rules, quiet material texture and three distinct service images. The dark final call remains a single purposeful contrast point rather than a repeated colour panel.

**One-to-one skill impact:** `finesse-ui` changes the Premium Substrate from flat fill to tactile restrained layers and makes the product imagery carry the service hierarchy; `design-taste-frontend` removes the equal colour-card rhythm and creates varied editorial pacing. No factual claim, CTA destination, automatic motion, customer asset or deployment boundary changes.

## Rebuild 2 — forest counterpoint and restrained motion (2026-09-02)

**Trigger and authorization:** The project owner explicitly approved the proposed primary-font and primary-palette replacement, together with UI/UX, layout and motion refinement.

**Design Read:** Walmer family cafe · collected local character and quiet confidence · `register=brand` · `SOUL=8` · `SPECTACLE=3` · `DENSITY=5` · `hero-engine=CSS editorial reveal`.

**Anti-default:** Reject the existing generic small-cafe combination of warm paper, amber/clay blocks, display serif and pervasive mono labels. The new locked system is deep forest (`#17221B`) for ink and bookend surfaces, mineral paper (`#ECEDE8`) for the main field, and restrained brick (`#B65035`) as the only action accent. Bricolage Grotesque gives the headings a more idiosyncratic, friendly tension without turning the cafe into a faux-luxury restaurant.

**Protection rules:** Preserve every verified fact, photo provenance, CTA destination, all existing sections and their order, and the local-only Concept Demo boundary. Do not add menus, prices, reservations, reviews, customer claims, third-party imagery, a CMS, a form, a carousel, a deployment, or an external dependency beyond the existing hosted font stylesheet. The primary font and color system are the only approved identity-level changes.

**Implementation map:** remove non-semantic 01/02/03 card labels and reduce eyebrow labels to hero and gallery only; use a single responsive CSS layer for palette, typography, hierarchy, touch targets, focus states and image rhythm; add a no-dependency `IntersectionObserver` for active navigation and one-time section reveals. Motion uses opacity/transform only, one Premium motion personality (`cubic-bezier(.16,1,.3,1)`), and is disabled under `prefers-reduced-motion`.

**Skill receipt:** `ask-matt` routes this bounded existing-page request to same-context implementation rather than a new multi-session build; `finesse-ui redesign` supplied the audit-first priority and anti-slop scan; `ui-ux-pro-max` supplied the image, touch-target, active-navigation, animation and reduced-motion checks; `motion-design` set the Premium 350–600ms / no-overshoot motion personality. No source fact or asset authorization was expanded.
