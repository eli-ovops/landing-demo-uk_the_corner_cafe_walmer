# Offer / Transfer Plan — The Corner Cafe, Walmer

**Prepared:** 2026-09-02  
**Scope:** quotation gate only for the current static, one-page Concept Demo. This does not authorise sending, transfer, deployment, purchase, or any customer contact.

## Decision

`OFFER / TRANSFER PLAN = PASS`

The plan is sufficient to quote the current UK offer because the authored static code is separable from each non-final asset, and every such asset below has one explicit handover disposition. The current display demo must remain visually unchanged for this gate.

`FINAL SOURCE / ASSET TRANSFER ELIGIBILITY = NOT RUN`

That later gate must be run against the actual `SOURCE_TRANSFER_PACKAGE` immediately before any file transfer. This plan does not establish that outcome.

## Current offer boundary

- **£99 AS-SHOWN HANDOVER:** the static one-page HTML/CSS/JS direction, with only necessary corrections to confirmed facts, business name and contact details.
- **£199 ONE PERSONALISED UPDATE:** one combined implementation and QA pass after the customer sends one consolidated set of text and images.
- Neither option includes domain, hosting, deployment, CMS, back end, ecommerce, booking, payments, ongoing maintenance, or ongoing content updates.

## Asset and component dispositions

| Component | Current status | Handover disposition |
| --- | --- | --- |
| Authored HTML, CSS and small front-end JS | Local static project code; no account, token or server dependency found | `TRANSFERABLE`, subject to the final package scan. |
| Official Facebook photos and source-derived restorations (W-01–W-10) | Public official-social source and derivative chain are recorded in `IMAGE_LEDGER.md`; customer authorisation is not verified | `CUSTOMER RECONFIRMATION REQUIRED`: before transfer, the customer confirms they may continue to use each retained image. If not, use customer-supplied replacements only after agreement. |
| Original conceptual visit visual (W-11) | Concept visual, not a customer business fact | `REPLACE BEFORE HANDOVER`: agree a customer-approved replacement or explicitly exclude it before final package assembly. |
| Google Fonts imports (DM Mono, Fraunces, Manrope, Bricolage Grotesque) | Remote third-party font delivery | `REPLACE BEFORE HANDOVER`: replace with locally cleared/licensed files or an agreed system-font stack in the final package. |
| Tripadvisor excerpts, score and guest-feedback attribution | Third-party, volatile review content | `REPLACE BEFORE HANDOVER`: customer supplies approved current proof copy, or the proof module is changed only with customer agreement before final delivery. |
| Customer name, address, phone, public email, Facebook and map links | Customer facts / external destinations | `CUSTOMER RECONFIRMATION REQUIRED`: customer confirms current accuracy and continuing use before handover. |
| Build/package artefacts | Current local-preview package, not a source-transfer package | `EXCLUDE BY AGREEMENT`: do not represent a preview ZIP as the final transfer package. |

## Customer-confirmed finalisation path

If the customer buys, provide the above dispositions before assembling any final source package. Where a replacement would make the final page visibly different from the concept (notably the visit visual, fonts or review proof), obtain the customer's explicit agreement on the replacement before implementing it. Do not silently swap, delete or downgrade concept-demo content. Then assemble a separate `SOURCE_TRANSFER_PACKAGE`, run `FINAL SOURCE / ASSET TRANSFER ELIGIBILITY`, and re-run static Desktop/Mobile QA.

## Safety checks recorded

- No secrets, credentials, account access, server runtime, form handling, payment flow or database were found in the current static display scope.
- The existing `LOCAL_PREVIEW_PACKAGE` and display preview are not source-transfer promises.
- This plan changes no customer-visible HTML, assets, preview URL or deployment state.
