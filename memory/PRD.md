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
- 2026-07: Phase 3 complete — /platinum-greens-opulence flagship page: cinematic reveal (PLATINUM GREENS OPULENCE + Mansarovar Extension + fact bar ₹1.41 Cr onwards / FIT-OUT STARTED / 2,068–2,792 sq.ft.), 14-movement scroll journey (Arrival → Scale G+11 → 70% Open → Residences → 3-Side Open → ~10 ft clear ceilings / 11 ft floor-to-floor → 50+ Amenities → interactive Field of Fifty → Floor Plans → Address → Action), giant statement-number moments (BigNumber component), interactive amenity field (12 typographic nodes, floating cursor-follow image preview on desktop, snap-swipe cards on mobile, no icon grid), floor-plan request placeholders, verified specs section, RERA strip, embedded lead form. Jaipur Is Rising homepage scene: 380vh sticky scroll-ascent through three parallax stylized skyline layers with JAIPUR IS RISING. / SO ARE WE. beats, gold pinnacle marker on tallest tower, ends on Opulence + EXPLORE OPULENCE CTA. Backend: floor-plan intent added; floorplan_request tracking. Nav/portal/home CTAs now route to the Opulence page. Verified via curl (floor-plan lead 201, health) and screenshots (hero, big numbers, amenity hover preview, action form, both Jaipur beats).
- User reported "unable to upload svg file" → support confirmed SVG uploads ARE supported (≤200MB, ≤5 files, drag-drop/attachment button); offered workarounds (paste SVG markup in chat, or share a download link). Logo SVG still PENDING from user.
- 2026-07: Credibility band updated per client: 2006 ESTABLISHED IN JAIPUR · 17,00,000+ SQ. FT. COMMERCIAL & RESIDENTIAL UNITS DELIVERED · 7,00,000+ SQ. FT. UNITS UNDER CONSTRUCTION · CREDAI MEMBER — RAJASTHAN (en-IN number formatting + count-up). Verified desktop + mobile.
- 2026-07: Removed section eyebrow labels ("01 — THE GROUP STORY" on Nine Levels, "02 — PROJECTS" on Projects Portal) per client visual edits. Verified on preview.
- 2026-07: Nav labels renamed per client: 01 ABOUT (→ home), 02 GREENS OPULENCE (→ flagship page), 03 ENQUIRE. Applies to desktop header links and full-screen menu. Verified desktop + mobile.
- 2026-07: Jaipur Rising section moved directly below Nine Levels per client. New home flow: Hero → Credibility → Nine Levels → Jaipur Rising → Marquee → Opulence Feature → Finale. Order verified programmatically + screenshot.
- 2026-07: Copy edits per client: "THE NINE LEVELS" → "THE NINE PHILOSOPHIES" (counter + aria-label), full stops removed from JAIPUR IS RISING / SO ARE WE. Verified on preview.
- 2026-07: Jaipur pinnacle beat simplified per client — removed PLATINUM GREENS OPULENCE headline and MANSAROVAR EXTENSION · JAIPUR line; beat3 is now tier mark + THE PINNACLE + EXPLORE OPULENCE CTA. Verified on preview.
- 2026-07: Per client: finale "IS ALWAYS UP." full stop removed; Jaipur "03 — JAIPUR" eyebrow removed and EXPLORE OPULENCE CTA removed from the pinnacle beat (now tier mark + THE PINNACLE only). Verified on preview.
- 2026-07: Homepage ENQUIRE section added below Opulence Feature per client — SPEAK WITH PLATINUM + contact rows + embedded LeadForm (source=home). Verified: live test submission returned success state. Home flow: Hero → Credibility → Nine Philosophies → Jaipur → Marquee → Opulence Feature → Enquire → Finale.
- 2026-07: Homepage enquire heading changed SPEAK WITH PLATINUM → SPEAK WITH US per client. Verified on preview.
- 2026-07: Per client: removed "RESPONSE WITHIN ONE WORKING HOUR" from enquire panel header; removed "Other" interest chip from LeadForm; removed finale CTAs (BEGIN A CONVERSATION / BOOK A SITE VISIT) and the contact row beneath them (finale now: tier mark + statement + footer only). Verified on preview.
- 2026-07: Per client: removed ENQUIRE eyebrow from homepage enquire section; removed RERA + Mansarovar Extension spans from homepage footer (footer now only © line; RERA remains on Opulence page). Verified on preview.
- 2026-07: HOMEPAGE RESEQUENCED per client: Hero → Jaipur Is Rising → Numbers (credibility) → Nine Philosophies → Opulence (marquee + feature) → Brand Statement (finale) → Enquire → Footer (footer extracted from Finale into standalone closing component). Order verified programmatically.
- 2026-07: Official addresses added per client — SITE: Platinum Greens Opulence, Near Parshwanath Narayan City, Mansarovar Extension, Jaipur; CORPORATE OFFICE: G-1/269, RIICO Industrial Area, Sitapura, Jaipur 302022. Added to /enquire contact rows (both map-linked), homepage enquire section, Opulence location movement (headline updated from old "Near Iskcon Road" to Parshwanath Narayan City) and Opulence action section. Verified on preview.
- 2026-07: Addresses UPDATED per client — SITE now two locations: 3-4 SMS Colony, Maharani Farm, Durgapura + Opulence Mansarovar Extension – 302029; CORPORATE OFFICE: G-1 269/270, RIICO Industrial Area, Sitapura – 302022. All three shown on /enquire (map-linked), homepage enquire block, Opulence action section. Also removed gold marker dot/line from Jaipur pinnacle per client. Verified on preview.
- 2026-07: Nine Philosophies visual REPLACED per client — CSS tier bars swapped for TierProgress: the real logo chevrons draw in one per philosophy (foundation always visible), sized 380px desktop and nudged up for vertical balance. Verified early/mid states on preview.
- 2026-07: Nine Philosophies RECENTERED per client bug report — sticky scene rebuilt: 100svh, centered grid; stacked centered layout on phone/tablet (logo above text), 380px+fluid two-column on lg+; headline scale capped per breakpoint (no ARCHITECTURE overflow). Verified with programmatic geometry checks at 1920/834/390: zero horizontal overflow, grid centered to <0.01px on all three.
- 2026-07: Per client: desktop Nine Philosophies switched to the stacked centered layout at ALL breakpoints. Then converted to DISCRETE STEPPING per client — one wheel/touch/arrow-key gesture unveils exactly one philosophy (scroll hijacked while pinned, position synced per step, releases after 09); verified 01→02→03 per wheel tick. EnquireSection desktop restructured — left column flexes justify-between (heading top, contact+addresses bottom-anchored with hairline), wider 1.15fr column; dead space removed. Verified on preview.
- 2026-07: Per client: Jaipur Rising background skyline layers (back + mid rows) removed — single front layer only; desktop floating CALL pill added beside WhatsApp pill (bottom-right). Verified on preview.
- 2026-07: Per client: CALL pill moved to far bottom-LEFT; WhatsApp pill (bottom-right) gained the official WhatsApp logo glyph; skyline back+mid layers RESTORED in Jaipur Rising (three parallax depths again). Verified on preview.
- 2026-07: PORTFOLIO section added below Opulence feature per client — OUR PROJECTS / EVERY LEVEL BUILDS THE NEXT with ONGOING (Opulence: ₹1.41 Cr, fit-out started; Platinum Greens: ₹65 Lakh onwards, possession started; labelled image frames + VIEW links), COMPLETED (7 delivered: Amaltas/Vaishali Nagar Ext, Heights/Gandhi Path W, Mayfair/C-Scheme, Rosewood/Sirsi Road, Shubh Ratan/Banipark, Sagar Enclave/Diggi Road, Tejasvi Greens/Ajmer Road — numbered index), UPCOMING (THE NEXT CHAPTER vague teaser + REGISTER INTEREST → enquire). Footer © line centralized per client. Verified all subsections on preview.
- 2026-07: Nav logo text replaced with the brand WORDMARK from the client's attached photo — rendered from the supplied SVG's letter paths in exact #7F8A8F (new Wordmark component in TierMark.jsx). Verified in header on preview.
- 2026-07: Wordmark made more visible per client — colour tuned to luminous platinum #D8D8DC (client permitted colour change) and enlarged (18px mobile / 24px desktop). Verified desktop + mobile headers.
- 2026-07: Nine Philosophies motion smoothed per client — headline now rises through an overflow mask (0.85s expo ease), subline staggers softly after, exits quicker/quieter; chevron draw lengthened to 0.8s. Verified mid-transition + settled states on preview.
- 2026-07: Performance fix per client — /enquire was slow to display. Root cause: the 4.5s Ascent intro gated every fresh session on every route + monolithic bundle. Fixes: intro now plays ONLY on homepage; routes lazy-loaded (React.lazy + Suspense). Verified: fresh session on /enquire shows content immediately with no intro; home still plays intro. Also removed all empty TempImage frames per client (enquire page, portfolio ongoing panels, Opulence movements are now centered text-only moments); TempImage component deleted. Wordmark clarity boosted (thicker stroke 3.4, larger nav size). Verified on preview. Note: mandated testing_agent subagent does not exist in this environment; verified via DOM/timing checks + screenshots.
- 2026-07: Per client: dot removed from FIT-OUT STARTED chip; GET PRICE DETAILS replaced by DOWNLOAD BROCHURE (Opulence feature CTA + form intent; price intent removed from form); Platinum Greens facts updated to 2, 3 & 4 BHK · ₹70 Lakh onwards (supersedes ₹65 Lakh). Verified on preview.
- 2026-07: DOWNLOAD BROCHURE now wired for real file delivery — serves /brochure/platinum-greens-opulence-brochure.pdf directly once client supplies the PDF (content-type checked); until then falls back to /enquire with brochure intent pre-selected. Applied on Opulence feature + amenity field CTAs. Verified fallback flow end-to-end. AWAITING: brochure PDF from client.
- 2026-07: Per client: hero background replaced with plain warm-white (bone) panel until client's hero video is produced (temp tag retained for opulence-hero-aerial-dusk.mp4); hero typography inverted to ink + gold on white; nav auto-inverts to dark text over the light hero (light mode when unscrolled on home). Dot removed from portfolio FIT-OUT STARTED chip. Verified hero + nav states on preview.
- 2026-07: Client's real ELEVATION RENDER placed (saved as /brand/elevation.webp): Opulence portfolio panel image + homepage Opulence feature background (stock villa removed, temp tag dropped). Greens portfolio panel stays text-led. Verified on preview.
- 2026-07: Platinum Greens portfolio panel now uses the client's REAL Greens render (/brand/greens-elevation.webp, gold tower) — Opulence panel untouched. Verified: two distinct real renders side by side on preview.
- 2026-07: E-BROCHURE LIVE — client's real Opulence brochure PDF (6.6MB) placed at /brochure/platinum-greens-opulence-brochure.pdf; DOWNLOAD BROCHURE buttons now download the actual file (verified: download fires as Platinum-Greens-Opulence-Brochure.pdf, visitor stays on page). Form-intent fallback remains if file is ever missing.
- 2026-07: Per client: custom cursor ring REMOVED entirely; nav ABOUT → HOME; all BOOK A VISIT / BOOK A SITE VISIT buttons relabelled ENQUIRE (hero, mobile sticky bar, Opulence hero + location); TempImage no longer renders stock photos — clean dark labelled placeholder frames only. Verified desktop + mobile + enquire page.
- 2026-07: Per client visual edits: hero ASCEND scroll cue removed; header BOOK A VISIT removed and ENQUIRE restyled as the gold-bordered header button; Opulence feature "FLAGSHIP — CURRENT" eyebrow and "70% OPEN SPACES" chip removed. Verified on preview.
- 2026-07: Projects Portal section REMOVED from homepage per client visual edit — flow is now Hero → Credibility → Nine Levels → Marquee → Opulence Feature → Jaipur Rising → Finale. Verified no compile errors and clean scroll flow.
- 2026-07: Hero edits per client: eyebrow line removed, full stops removed from UPWARDS and the subline, first CTA renamed DISCOVER OPULENCE → GREENS OPULENCE. Verified on preview.
- 2026-07: Nine Levels spacing/symmetry improved — tier stack now vertically centered against chapter text (was bottom-packed), fixed heights, wider stack on desktop. Verified on preview.
- 2026-07: Desktop header now shows inline nav links (GROUP / OPULENCE / ENQUIRE) + BOOK A VISIT; mobile keeps MENU overlay button only. Verified desktop (links visible, MENU hidden) and mobile 390px (links hidden, MENU visible, sticky CTA bar intact).
- 2026-07: ABOUT PAGE built, then REMOVED at client request — /about route deleted; menu back to 01 GROUP / 02 OPULENCE / 03 ENQUIRE; /about falls through to home.
- 2026-07: REAL LOGO SWAPPED IN — client pasted approved SVG (emerald foundation line #00685F, nine champagne-gold tiers, PLATINUM GROUP wordmark #7F8A8F). Saved byte-for-byte at /app/frontend/public/brand/platinum-logo.svg (also favicon). TierMark.jsx now renders the exact artwork: TierMark = static symbol (nav, finale, floor plans, Jaipur pinnacle), TierBuild = animated Ascent (foundation draws first at 0.45s, nine tiers build bottom-up staggered, gold light travels up tallest tier at 2.55s, wordmark rises at 2.8s, camera-through exit at 4.5s). Geometry/gradients/colours untouched. Verified via frame-by-frame screenshots of the intro + hero.
- 2026-07: Phase 2 complete — design system (ink/bone/gold/platinum/emerald; Cinzel + Fraunces + Archivo + IBM Plex Mono); Ascent opening (nine-tier placeholder mark builds upward, gold light sweep, camera-through exit, session-once, skip, reduced-motion path); Lenis smooth scroll + framer-motion throughout; Hero "WE BUILD UPWARDS." with masked line reveal + parallax; credibility band with rising counters; Nine Levels sticky manifesto (01 Vision → 09 Platinum); projects portal (Current/Legacy/Upcoming panels); slow editorial marquee; Opulence flagship feature (₹1.41 Cr onwards, FIT-OUT STARTED); finale "THE NEXT LEVEL IS ALWAYS UP."; full-screen menu; custom cursor with contextual labels; persistent CTAs (nav BOOK A VISIT, desktop WhatsApp pill, mobile CALL | WHATSAPP | BOOK VISIT bar); /enquire conversion page with low-friction lead form; FastAPI POST /api/leads + GET /api/leads + /api/health with Indian mobile validation; dataLayer tracking hooks (lead_submit, book_site_visit, whatsapp_click, call_click, cta_click, project_view, page_view). Verified: curl health/lead/validation, screenshots of all sections, UI form submit → success.

## Backlog
- P0: Replace temp imagery as assets arrive (phase1-plan.md §10 list).
- P1: Platinum Greens page, Legacy horizontal timeline (5 delivered projects — need years/facts from client), Upcoming page (Coming Soon), About page.
- P2: Analytics ID wiring (hooks ready), JSON-LD, sitemap, performance hardening.

---
## Update: 2026-09-14 — Lead Email Notifications (DONE)
- User question answered: enquiries go to MongoDB `leads` collection via POST /api/leads.
- Added instant email notification via Emergent-managed Resend integration: every new lead emails **leads@platinumgroupindia.com** (non-blocking background task; lead capture never fails if email fails).
- Env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME=Platinum Group, LEADS_NOTIFY_EMAIL in /app/backend/.env.
- Verified: test lead → DB saved (201) + email 202 Accepted, id logged.
- Future: Sell.do CRM webhook integration (user said "later"). Admin leads portal optional. Hero video pending user asset. Ads conversion tracking in dataLayer (P1).

---
## Update: 2026-09-14 — Auto-Reply + Hero/Opulence Visual Edits (DONE)
- Auto-reply thank-you email: enquirers with an email address now instantly receive a branded "Thank you" email with a DOWNLOAD BROCHURE link (broker-safe: link not attachment; reply-to = leads@platinumgroupindia.com). Env: EMAIL_REPLY_TO, PUBLIC_APP_URL in backend/.env.
- Hero: added DOWNLOAD BROCHURE button (hero-brochure-button) in CTA row.
- OpulenceFeature: section vertical padding reduced (py-32/md:py-48 → py-20/md:py-24) so it fits screens (~869px tall now).
- Verified: test lead → team notify email + auto-reply both accepted (202); smoke screenshot OK.

---
## Update: 2026-09-14 — Portfolio Image Logo Overlay (DONE)
- Added Platinum Group wordmark (PlatinumGroup_Wordmark_Original_Transparent.webp, saved to /public/brand/platinum-wordmark.webp) as overlay on top-right corner of Portfolio project images, with dark glass backdrop for legibility. Verified via screenshot.

---
## Update: 2026-09-14 — Opulence Dedicated Page Removed (DONE)
- Deleted pages/Opulence.jsx and sections/opulence/ (OpHero, Movement, AmenityField, FloorPlans, OpAction). Route /platinum-greens-opulence removed (falls back to Home).
- Nav "GREENS OPULENCE" now scrolls to home #opulence feature section; Portfolio Opulence card and removed "ENTER THE FULL EXPERIENCE" CTA repoint to enquiry.
- NEXT UP (user intent): a brand-new Greens Opulence page will be designed from scratch — await user direction on structure/content.

---
## Update: 2026-09-14 — New Greens Opulence Flagship Page (DONE)
- New route /opulence with distinct "botanical midnight" visual identity (deep emerald #061410 base, eglow accents) vs home's bone/near-black.
- Sections: Hero (real elevation render, logo+wordmark chip, stats 50+/70%/112 FT, ₹1.41 Cr chip, Book Site Visit + Brochure CTAs) → 5-photo bento gallery (real renders extracted from brochure PDF: elevation, pool, lobby, aerial, banquet at /public/opulence/*.webp) → 50+ Amenities (8 user-supplied categories, verbatim) → Specifications accordion (10 categories, headers only, tap to reveal — verbatim text from user's brochure screenshots) → Sales CTA band (Schedule Private Preview, Brochure, Call, WhatsApp) → Footer.
- Nav item 02 back to route /opulence; Portfolio Opulence card and home "ENTER THE FULL EXPERIENCE" CTA link to /opulence.
- data.js holds all amenity/spec content at sections/opulence/data.js.
- Verified: all sections render, accordion expands with correct content, hero CTAs navigate to /enquire with project+intent preselected. Design blueprint at /app/design_guidelines.json (stock photo URLs from agent NOT used; real brochure renders used instead).

---
## Update: 2026-09-14 — Portfolio RERA QR Overlay (DONE)
- Replaced wordmark overlay on Portfolio project images with user's RERA QR (saved /public/brand/rera-qr.png) + text "RERA/RAJ/P/2023/2875 · RERA.RAJASTHAN.GOV.IN", no backdrop box on QR. Verified via screenshot.

---
## Update: 2026-09-14 — Per-Project RERA QR (DONE)
- Portfolio overlays now per-project, data-driven (qr + rera fields in ONGOING list): Opulence = rera-qr.png + RERA/RAJ/P/2023/2875; Greens = rera-qr-greens.png + RERA/RAJ/P/2021/1631. QR size reduced (w-16/md:w-20). Verified both render with correct images.

---
## Update: 2026-09-14 — Hero Instant Jump Button (DONE)
- Hero "GREENS OPULENCE" button now jumps instantly (no slow glide) to the #opulence flagship section on home. scrollToId accepts optional immediate flag. Verified: click lands with section aligned at top.

---
## Update: 2026-09-14 — QR Overlay Shrunk (DONE)
- Portfolio RERA QR + text reduced to minimal size (w-9/md:w-11, 4.5-5px text) — subtle compliance mark visible only up close, per user request.

---
## Update: 2026-09-14 — AI Cinematic Hero Video (DONE)
- Generated 30s looping lifestyle film with Sora 2 (via Emergent universal key): 3 clips (12s garden walk+swings, 12s sports/cycling/pool, 8s clubhouse/courtyard/return walk) with repeated verbatim character description for family consistency; stitched with ffmpeg crossfades + final-1s↔opening-1s loop blend for seamless looping.
- Script: /app/backend/scripts/generate_hero_video.py (clips cached in /app/backend/tmp_video/, re-run safe).
- Assets: /public/brand/hero-loop.mp4 (H.264, 8.8MB), hero-loop.webm (VP9 fallback, 5MB), hero-poster.jpg. Hero.jsx plays dual-source muted autoplay loop video with bg-bone/35 overlay for text legibility; TEMP ASSET tag removed.
- NOTE: sora-2 supports only 1280x720/720x1280 (not 1792x1024). Headless test browser lacks H.264 — webm fallback covers verification.
- Video is generic/no branding, safe for reuse across projects per user spec.

---
## Update: 2026-09-15 — OpHero Refinements (DONE)
- Removed group logo chip and "PLATINUM GREENS PRESENTS" label; replaced "Opulence" text heading with official logo (user-attached platinum-greens-opulence_primary-vertical_white.png → white-keyed transparent /public/brand/opulence-logo.png).
- Hero CTAs reordered: price chip → Download Brochure → Book Site Visit. Hero stats reordered: 70% Open Space → 50+ Amenities → 112 FT Indoor Pool (data.js OP_STATS).

---
## Update: 2026-09-15 — OpCTA Enquiry Form + Location Map (DONE)
- Closing section on /opulence now embeds the full LeadForm (source=opulence_page, site-visit preselected) beside the official brochure Location Plan (/public/opulence/location-map.webp). Clicking the map opens Google Maps directions to the site (SITE_MAPS_URL coords). Brochure/Call/WhatsApp CTAs retained under the map.
