# PRD — Platinum Group Immersive Luxury Website

## Original Problem Statement
Build a production-quality, cinematic, immersive website for Platinum Group, a premium real-estate developer in Jaipur. Two simultaneous goals: (1) WOW brand experience like a global luxury/architectural brand, (2) aggressive but elegant lead generation (enquiries, site visits, brochures, WhatsApp, calls). Emotion: RISE • GROWTH • ELEVATION • PROGRESS • PROSPERITY. All motion ascends. Flagship: Platinum Greens Opulence (₹1.41 Cr onwards — overrides old ₹1.25 Cr; status FIT-OUT STARTED — overrides "construction in full swing"). Client supplies logo SVG and all media progressively; use named placeholders, never random stock. Client's latest information is always source of truth. Work iteratively — Phase 1 plan first, stop for approval.

## User Personas
- HNI home buyer (Jaipur/NRI), mobile-first, arriving via Meta/Google ads or WhatsApp — wants price, config, trust, fast contact.
- Investor evaluating developer credibility and delivery history.
- Retiree / family researching The Oasis Retreat (EOI).

## Core Requirements (static)
- Cinematic opening (client's SVG logo, nine tiers build upward), ascent-only motion language.
- Homepage: hero, Nine Levels story, projects portal (Current/Legacy/Upcoming), Opulence feature, Jaipur rising, legacy strip, about teaser, finale.
- Opulence deep scroll journey (14 movements), big-number moments, interactive amenity field (no icon grid), floor plans, contextual CTAs.
- Persistent CTAs: desktop BOOK A VISIT; mobile sticky CALL | WHATSAPP | BOOK VISIT.
- Lead form (low friction) → FastAPI + MongoDB; WhatsApp deep links with contextual prefilled text; dataLayer tracking hooks (no hard-coded IDs).
- SEO (semantic, JSON-LD, sitemap), accessibility (reduced-motion path), performance (mobile Lighthouse ≥90).
- Colours: near-black, warm white, metallic gold, luminous platinum, deep emerald (strategic). No generic luxury clichés.

## Implemented (with dates)
- 2026-07: Phase 1 complete — existing site crawled and analysed (home, Opulence, Greens, Oasis Retreat, About, Contact); all facts extracted; conflicts flagged; full plan documented at /app/memory/phase1-plan.md (IA, homepage storyboard, Opulence storyboard, design system, motion system, lead/CTA architecture, tech stack, asset request list).
- 2026-07: Phase 1 APPROVED by client with choices: placeholder logo structure (swap when SVG supplied); curated watermarked temp imagery; ceilings phrased "11-ft floor-to-floor, approx. 10-ft clear" (exact wording TBC); Upcoming = Coming Soon only.
- 2026-07: Phase 2 complete — design system (ink/bone/gold/platinum/emerald; Cinzel + Fraunces + Archivo + IBM Plex Mono); Ascent opening (nine-tier placeholder mark builds upward, gold light sweep, camera-through exit, session-once, skip, reduced-motion path); Lenis smooth scroll + framer-motion throughout; Hero "WE BUILD UPWARDS." with masked line reveal + parallax; credibility band with rising counters; Nine Levels sticky manifesto (01 Vision → 09 Platinum); projects portal (Current/Legacy/Upcoming panels); slow editorial marquee; Opulence flagship feature (₹1.41 Cr onwards, FIT-OUT STARTED); finale "THE NEXT LEVEL IS ALWAYS UP."; full-screen menu; custom cursor with contextual labels; persistent CTAs (nav BOOK A VISIT, desktop WhatsApp pill, mobile CALL | WHATSAPP | BOOK VISIT bar); /enquire conversion page with low-friction lead form; FastAPI POST /api/leads + GET /api/leads + /api/health with Indian mobile validation; dataLayer tracking hooks (lead_submit, book_site_visit, whatsapp_click, call_click, cta_click, project_view, page_view). Verified: curl health/lead/validation, screenshots of all sections, UI form submit → success.

## Backlog
- P0: Opulence 14-movement deep journey + interactive amenity field + floor plans (Phase 3); swap real SVG logo into TierBuild structure.
- P1: Platinum Greens page, Legacy horizontal timeline (5 delivered projects — need years/facts from client), Upcoming page (Coming Soon), About page, Jaipur rising scene.
- P2: Analytics ID wiring (hooks ready), JSON-LD, sitemap, performance hardening, real media replacement per asset list in phase1-plan.md §10.
