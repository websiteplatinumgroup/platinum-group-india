# PLATINUM GROUP — PHASE 1 PLAN
Status: AWAITING CLIENT APPROVAL — no build started.

---

## 1. EXISTING WEBSITE ANALYSIS — EXTRACTED FACTS

### Company
- Platinum Group, Jaipur. Founded 2006 by Shri Swantantra Gupta & Shri Vijay Mehta.
- Strengthened by Shri Subhash Gupta (Kiran Modes, star export house) and Shri Vikas Lodha (NRI, jewellery).
- Vision: top-ten real estate company in India within the decade; reconnect modernism with eco-living.
- Values: Integrity, Partnership, Can-Do Attitude, Quality, Innovation.
- Promise: "On Time. Within Budget. Guaranteed." + 100% workmanship guarantee; claims 90% of work from referrals.
- CSR: Surman Sansthan (shelter for destitute children/women — Palana, Koshish projects), Akshaya Patra (mid-day meal ingredients + donations).
- Stats shown on old site (COUNTERS PARTIALLY BROKEN — need confirmation): 94+ commercial & residential units delivered / over 17,00,000 sq.ft.; 28+ units under construction / over 7,00,000 sq.ft.

### FLAGSHIP — Platinum Greens Opulence (Mansarovar Extension, Jaipur)
- Location: Near Iskcon Road, Mansarovar Extension, Jaipur. GPS approx 26.8102, 75.7589.
- Configuration: 3 BHK, 4 BHK & Penthouse — "King Size Ultra Luxurious".
- Price: OLD SITE ₹1.25 Cr → **OVERRIDDEN: ₹1.41 Cr onwards**.
- Status: OLD SITE "Construction in Full Swing" → **OVERRIDDEN: FIT-OUT STARTED**.
- RERA: RAJ/P/2023/2875. Approved by JDA & RERA.
- Land area: 15,000 sq. yd. Structure: B+G+11 floors. Flat sizes: 2,068–2,792 sq.ft.
- Parking: Basement / Stilt / Open. Vastu compliant. Seismic-zone resistant RCC frame.
- Floor height: old site says 11 ft floor height; client brief says approx. 10 ft ceilings → **CONFLICT — needs confirmation**.
- 70% open area. 50+ amenities: grand entrance lobby, waiting lounge, 112-ft covered/indoor swimming pool (inaugurated March 2026), movie theatre, banquet hall, gymnasium, guest rooms, co-working, study room, basketball, skating, cricket net, squash, tennis, pickleball, indoor badminton, table tennis, billiards, kids & toddler play, senior citizen area, meditation/aerobics, yoga corner, dedicated Hindu temple + dedicated Digambar Jain temple, society office, 24/7 security + CCTV, 100% power backup, department store, EV charging, rainwater harvesting, water recycling, landscaped gardens.
- Specs: Duravit/equiv. WC, Hansgrohe/Schell/equiv. CP fittings, Kajaria/Johnson/Orient vitrified tiles, modular switches, high-speed lifts + stretcher lift per block, wooden doors, waterproof exterior texture paint.

### CURRENT — Platinum Greens (Mansarovar Extension, Jaipur)
- 3 BHK, 4 BHK & Penthouse. Price: ₹65 Lakhs onwards. Status: POSSESSION STARTED (limited units).
- RERA: RAJ/P/2021/1631. JDA & RERA approved.
- Land 15,000 sq. yd. B+G+11. Sizes 1,260–2,396 sq.ft. 70% open area. Vastu friendly.
- Amenity/spec list largely parallels Opulence (pool, theatre, banquet, gym, co-working, guest rooms, full sports zone, temples).

### UPCOMING — The Oasis Retreat
- Retirement-cum-wellness resort; to be operated by a renowned 5-star group (Hyatt/Marriott/Hilton class).
- 200+ acres, within 75 min drive of Jaipur. Villas & apartments, limited availability.
- Helipad, OPD/hospital, 24x7 medical staff, concierge, golf course, spa, cinema, lakes, golf carts, senior-safe design, windmill/solar, zero-step/barrier-free.
- Currently EXPRESSION OF INTEREST only — not for sale, no bookings. Budget bands ₹70L–2Cr+.
- Old site About page also lists upcoming: Platinum Jaipuria Gardenia (near Dher Ke Balaji Station) and Platinum Second Innings (near Mahala, Jhag Road) → **VALIDITY NEEDS CONFIRMATION**.

### LEGACY / COMPLETED
- Platinum Amaltas — Vaishali Nagar, Jaipur
- Platinum Rosewood — Sirsi Road, Jaipur
- Platinum Mayfair — C-Scheme, Jaipur
- Platinum Shubh Ratan — Bani Park, Jaipur
- Platinum Heights — Gandhi Path (West), Jaipur
(No years/details published on old site — request from client.)

### CONTACT
- Phone & WhatsApp: +91 96602 23377 (confirm).
- No email or postal office address found on the crawled pages → **request from client**.

---

## 2. CONFLICTS / OUTDATED INFORMATION RESOLVED OR FLAGGED
1. Opulence price: use ₹1.41 Cr onwards (₹1.25 Cr purged). RESOLVED by client override.
2. Opulence status: use FIT-OUT STARTED ("construction in full swing" purged). RESOLVED.
3. Ceiling height: brief says ~10 ft, old site says 11 ft. Possibly both true (slab-to-slab vs clear). FLAGGED.
4. Company stats/counters broken on old site (shows "1+ years", "0 projects"). Founded 2006 → ~20 years. FLAGGED — need official numbers.
5. Upcoming projects (Jaipuria Gardenia, Second Innings) — confirm if still valid. FLAGGED.
6. Old site's visual design, copy tone ("Your Dream Home Awaits"), icon grids, carousels: DISCARDED as design reference; used as data source only.

---

## 3. INFORMATION ARCHITECTURE

Routes (crawlable, semantic, SEO-ready):
- `/` — Home: The Platinum Ascent opening, group story, projects portal, flagship feature, Jaipur section, legacy strip, finale.
- `/platinum-greens-opulence` — flagship deep scroll experience (the "site within a site").
- `/platinum-greens` — current project experience.
- `/legacy` — completed projects, architectural timeline.
- `/upcoming` — The Oasis Retreat EOI + The Next Chapter teaser(s).
- `/about` — group story, philosophy, leadership, CSR.
- `/enquire` — conversion hub (lead form, call, WhatsApp, location).
- `/privacy`, `/terms` — retained.

Full-screen menu: 01 GROUP / 02 PROJECTS / 03 OPULENCE / 04 GREENS / 05 LEGACY / 06 UPCOMING / 07 ABOUT / 08 CONTACT — with hover previews on desktop.

Backend (FastAPI + MongoDB):
- `POST /api/leads` — unified lead capture (type: enquiry | site-visit | brochure | price | floor-plan | eoi; project; name; mobile; email optional; intent; source page/CTA).
- `GET /api/health`.
- Every event also pushed to `window.dataLayer` for clean GA4/Google Ads/Meta wiring later (no hard-coded IDs).

---

## 4. HOMEPAGE STORYBOARD — "THE ASCENT"

| # | Scene | Content | Motion |
|---|-------|---------|--------|
| 0 | THE PLATINUM ASCENT (opening) | Near-black. Emerald glow rises at lower centre. Emerald foundation line draws. Supplied SVG logo's nine tiers build upward sequentially; gold/platinum light travels up. "PLATINUM GROUP" sets below. | First scroll: camera pushes THROUGH the logo into the hero. Skippable after first view; never a "loader". |
| 1 | HERO | Full-bleed architectural video/image. Enormous type: WE BUILD / UPWARDS. Sub: "Architecture shaped by ambition." (alt copy options below). Slow upward drift. | Type rises in staggered lines; scroll indicator rises, not falls. |
| 2 | CREDIBILITY BAND | Quiet, dark. Four facts rise one by one: SINCE 2006 · 1.7M+ SQ.FT. DELIVERED · JAIPUR · ON TIME, WITHIN BUDGET, GUARANTEED. | Numbers count up while rising. |
| 3 | THE NINE LEVELS | Nine tiers illuminate/rise on scroll: 01 Vision → 02 Design → 03 Architecture → 04 Engineering → 05 Craftsmanship → 06 Lifestyle → 07 Community → 08 Legacy → 09 Platinum. One line of editorial copy per level. | Pinned section; each level rises and locks, assembling a tiered monolith that echoes the logo geometry WITHOUT altering the logo itself. |
| 4 | PROJECTS PORTAL | Not a grid. Three full-height panels: CURRENT / LEGACY / UPCOMING. Opulence dominates Current. | Panels rise in; hover expands a panel with imagery preview. |
| 5 | FLAGSHIP FEATURE | OPULENCE gets a cinematic strip: name, Mansarovar Extension · Jaipur, 3 & 4 BHK, ₹1.41 Cr onwards, FIT-OUT STARTED badge. CTA: EXPLORE OPULENCE. | Dark → image reveal upward via clip-path. |
| 6 | JAIPUR IS RISING | Stylized rising journey through abstracted Jaipur (layered 2.5D parallax skyline — no heavy WebGL unless assets justify). Ends pinpointing Opulence. "JAIPUR IS RISING. SO ARE WE." | Scroll-scrubbed ascent through 3–4 atmospheric layers. |
| 7 | LEGACY STRIP | Horizontal architectural timeline teaser of 5 completed projects. "EVERY LEVEL BUILDS THE NEXT." | Horizontal scrub on vertical scroll. |
| 8 | ABOUT TEASER | Statement: WE DON'T MEASURE OUR WORK ONLY IN SQUARE FEET. / WE MEASURE IT IN LEGACY. Link to About. | Two-line rise, generous quiet space. |
| 9 | FINALE | Dark. Platinum mark. THE NEXT LEVEL / IS ALWAYS UP. CTAs: BEGIN A CONVERSATION (primary), BOOK A SITE VISIT (secondary). Call/WhatsApp accessible. | Logo tiers settle upward; CTAs fade-rise last. |

Hero copy options (recommend A):
- A) WE BUILD UPWARDS. — Architecture shaped by ambition.
- B) RISE ABOVE THE ORDINARY. — Jaipur's most considered residences.
- C) THE CITY LOOKS UP TO THIS. — Platinum Group, Jaipur.
- D) ELEVATION IS A DISCIPLINE. — Two decades of building upward.

---

## 5. PLATINUM GREENS OPULENCE — STORYBOARD

Cinematic reveal: PLATINUM / GREENS / OPULENCE → MANSAROVAR EXTENSION • JAIPUR → fact bar: 3 & 4 BHK ULTRA-PREMIUM RESIDENCES · ₹1.41 CR ONWARDS · FIT-OUT STARTED.

Scroll journey (14 movements, each an environment, not a brochure block):
1. ARRIVAL — dusk aerial exterior.
2. SCALE — B+G+11 over 15,000 sq.yd. Statement number.
3. SPACE — 70% OPEN (big-number moment).
4. RESIDENCES — 3 & 4 BHK, 2,068–2,792 sq.ft.
5. LIGHT — 3-SIDE OPEN homes (big-number moment).
6. VOLUME — ~10 FT CEILINGS (big-number moment; pending confirmation vs 11 ft).
7. LIFESTYLE — 50+ AMENITIES (big-number moment) → interactive amenity field.
8. CLUB — clubhouse.
9. WELLNESS — 112-ft indoor pool, gym, yoga, meditation.
10. PLAY — pickleball, badminton, squash, tennis, cricket net, kids.
11. COMMUNITY — banquet, guest rooms, co-working.
12. LANDSCAPE — gardens, temples, senior zones.
13. HOME — interiors, floor plans (REQUEST FLOOR PLANS CTA).
14. ACTION — book site visit / price details / WhatsApp.

Amenity field: dark spatial canvas, amenity names as large typographic nodes (POOL / THEATRE / PICKLEBALL / SQUASH / BADMINTON / GYM / WELLNESS / BANQUET / CO-WORKING / GUEST ROOMS / LANDSCAPE / CHILDREN). Hover/tap reveals imagery + one line. Mobile: swipeable full-bleed cards. NO 50-icon grid.

Contextual CTAs: after price → GET PRICE DETAILS; after residences → REQUEST FLOOR PLANS; after amenities → REQUEST BROCHURE; after location → BOOK A SITE VISIT; end → SPEAK WITH PLATINUM.

---

## 6. VISUAL DESIGN SYSTEM

Colour (CSS variables, disciplined use):
- `--ink: #070708` near-black base; `--ink-2: #0E0E10` panels.
- `--bone: #F4F0E8` warm white (quiet sections only).
- `--gold: #C2A059` metallic gold — hairlines, key numbers, primary CTA. Never yellow-gold, never flooded.
- `--platinum: #D8D8DC` luminous platinum — secondary type, dividers.
- `--emerald: #0C3B2E` deep; `--emerald-glow: #1DB98B` — strategic only: foundation line, status accents, WhatsApp-brand-adjacent moments.
- Gradients: essentially banned except the single emerald ascent glow.

Typography (Google Fonts, self-hosted subsets):
- Display / monumental: CINZEL (uppercase, wide tracking) — logo-adjacent Roman architecture.
- Editorial statements: FRAUNCES (high-contrast serif) for sentence statements.
- Body / UI: ARCHIVO — clean, technical.
- Data labels / numbers / eyebrows: IBM PLEX MONO (uppercase, letterspaced).
- Scale: H1 clamp(3rem→7rem); statements up to 12vw; body 16–18px; mono labels 11–12px.

Form language: hairline 1px rules; nine-tier motif reused as progress indicator, dividers, section numerals; sharp corners (no pill-card grids); generous negative space (2–3× comfortable); full-bleed media with upward clip reveals.

Iconography: thin line icons only (lucide), no filled real-estate icon packs.

---

## 7. MOTION SYSTEM

Philosophy: EVERYTHING RISES. Reveals = translateY(+) → 0, clip-path inset from bottom, scaleY builds, light sweeps upward. Nothing falls.

Stack: GSAP + ScrollTrigger (scroll choreography), Lenis (smooth scroll), CSS transforms, SVG stroke/transform animation for the supplied logo, React Three Fiber ONLY for the Jaipur section if it earns its place (default: layered 2.5D parallax instead).

Rules:
- 60fps budget; transform/opacity only; `will-change` discipline.
- Pinned scenes limited to Nine Levels, big-number moments, Opulence journey beats.
- `prefers-reduced-motion`: instant premium static version, all content reachable.
- Custom cursor (ring + contextual label: EXPLORE / VIEW / DRAG) — desktop only, native cursor preserved for accessibility.
- Magnetic pull on primary CTAs, subtle (max 6px).
- Opening sequence: plays once per session, skip control, <3.5s to interactive.

---

## 8. LEAD GENERATION & CTA ARCHITECTURE

Persistent:
- Desktop nav: BOOK A VISIT ↗ always visible (gold hairline button).
- Mobile sticky thumb-bar: CALL | WHATSAPP | BOOK VISIT (custom branded, dark glass, NOT a green plugin).

Contextual CTA map (one primary per scene, never all at once):
- Price/config → GET PRICE DETAILS
- Residences → REQUEST FLOOR PLANS
- Amenities → REQUEST BROCHURE
- Location → BOOK A SITE VISIT
- Finale/footer → BEGIN A CONVERSATION
- Upcoming → REGISTER INTEREST (EOI)

Lead form (low friction): Name · Mobile (+91, 10-digit validated) · Email optional · Interested in (Opulence / Greens / Upcoming / Other) · I would like to (Site Visit / Brochure / Price / Speak to Sales). CTA: REQUEST DETAILS. Success state = elegant confirmation + WhatsApp handoff option. All submissions → MongoDB via `/api/leads`.

WhatsApp: `wa.me/919660223377` with contextual prefilled text per origin, e.g. "Hi Platinum Group, I'm interested in Platinum Greens Opulence and would like the brochure." Custom emerald-ink button.

Tracking hooks (dataLayer events, ready for GTM/GA4/Meta — no hard-coded IDs):
lead_submit, book_site_visit, whatsapp_click, call_click, brochure_request, price_request, floorplan_request, project_view, cta_click (with project + placement metadata).

---

## 9. TECHNICAL ARCHITECTURE

- Frontend: React (existing template), GSAP + ScrollTrigger, Lenis, lucide-react, Tailwind + CSS variables, react-helmet-async for per-route meta.
- Backend: FastAPI `/api/leads` + MongoDB (existing MONGO_URL/DB_NAME). Lead document: name, mobile, email, project, intent, type, message, source, created_at.
- Performance: route-level code splitting; lazy sections below fold; responsive `srcset` images; video = short muted loops (H.264/WebM, <4MB each) with poster frames; font subsetting; WebGL off on low-power/mobile (2.5D fallback); target Lighthouse ≥ 90 mobile.
- SEO: semantic HTML, per-route titles/descriptions, JSON-LD (RealEstateAgent + Residence + Offer with ₹1.41 Cr), canonical URLs, sitemap.xml + robots.txt, all storyboard copy present as real crawlable text (not canvas).
- Accessibility: keyboard-navigable menu/forms, visible focus, contrast-checked gold/bone on ink, alt text architecture, reduced-motion path.

---

## 10. ASSET REQUEST LIST (priority order)

| # | Asset | Spec | Orientation | Use |
|---|-------|------|-------------|-----|
| 1 | `platinum-logo.svg` | final approved vector, layered if possible (nine tiers separable) | — | Opening animation, nav, finale — CRITICAL, blocks scene 0 |
| 2 | `opulence-hero-aerial-dusk.mp4` | 8–15s loop, 4K master (we compress), muted | 16:9 landscape | Home hero + Opulence ARRIVAL |
| 3 | `opulence-exterior-dusk.jpg` | ≥3840×2160 | landscape | Opulence ARRIVAL fallback/poster |
| 4 | `opulence-facade-day.jpg` | ≥3000px wide | landscape | SCALE |
| 5 | `opulence-aerial-topdown.jpg` | ≥3000px | landscape | SPACE / 70% OPEN |
| 6 | `opulence-living-wide.jpg` | ≥3000px | landscape | RESIDENCES / HOME |
| 7 | `opulence-window-light.jpg` | ≥2400px | portrait or landscape | LIGHT / 3-side open |
| 8 | `opulence-double-height.jpg` | ≥2400px | portrait preferred | VOLUME / ceilings |
| 9 | `opulence-pool-indoor.jpg` | ≥2400px | landscape | WELLNESS (112-ft pool) |
| 10 | `opulence-clubhouse.jpg`, `opulence-theatre.jpg`, `opulence-gym.jpg`, `opulence-pickleball.jpg`, `opulence-banquet.jpg`, `opulence-coworking.jpg`, `opulence-garden.jpg`, `opulence-kids.jpg`, `opulence-temple.jpg` | ≥1920×1280 each | landscape | Interactive amenity field |
| 11 | `opulence-floorplan-3bhk.png/pdf`, `opulence-floorplan-4bhk.png/pdf` | high-res, clean | — | HOME / floor-plan request |
| 12 | `opulence-brochure.pdf` | final brochure | — | REQUEST BROCHURE fulfilment |
| 13 | `greens-hero.jpg` + 4–6 amenity photos | ≥2400px | landscape | Platinum Greens page |
| 14 | `legacy-amaltas.jpg`, `legacy-rosewood.jpg`, `legacy-mayfair.jpg`, `legacy-shubh-ratan.jpg`, `legacy-heights.jpg` | ≥1920px | landscape | Legacy timeline |
| 15 | `jaipur-skyline-dusk.jpg` or drone video | ≥3000px / 10s | landscape | JAIPUR IS RISING |
| 16 | `opulence-fitout-progress.jpg/.mp4` (3–6) | ≥1920px | any | FIT-OUT STARTED proof band |
| 17 | `oasis-retreat-keyimage.jpg` | ≥2400px | landscape | Upcoming EOI |

Placeholders: dark architectural placeholder panels with filename labels will be built for every slot, swappable without restructuring.

---

## 11. INFORMATION NEEDED FROM CLIENT
1. Official stats (years, projects delivered, sq.ft. delivered, units under construction) — old counters are broken.
2. Ceiling height confirmation: ~10 ft (brief) vs 11 ft (old site).
3. Official email + registered/sales office address.
4. Confirm phone/WhatsApp: +91 96602 23377.
5. Legacy project years + one-line fact each (Amaltas, Rosewood, Mayfair, Shubh Ratan, Heights).
6. Upcoming: confirm Jaipuria Gardenia / Second Innings still valid, or Coming Soon only (+ Oasis Retreat EOI?).
7. Google/ Meta tracking IDs when ready (hooks prepared, none hard-coded).
8. Logo SVG + brand font licence (if a licensed brand font exists).

---

## 12. BUILD PHASING (after approval)
- Phase 2: Design system + opening Ascent + homepage scenes 1–5 + lead backend + persistent CTA system.
- Phase 3: Opulence full journey + amenity field + floor plans.
- Phase 4: Greens, Legacy, Upcoming, About, Enquire.
- Phase 5: Jaipur rising scene, performance hardening, SEO/JSON-LD, reduced-motion, final QA.
