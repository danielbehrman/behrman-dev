# BRIEF.md — behrman.dev
# Source of truth. Read before every session. Do not build beyond this.

---

## Current Phase
Claude updates this block after every meaningful build session.

Phase: [Phase X — Phase Name]
Mode: [Active Build / Dogfooding / Stable / Paused / Blocked]
Last Updated: [YYYY-MM-DD]
Blocker: [None / description]
Next Action: [Specific next step]

---

## Project
**Name:** behrman.dev — Personal Portfolio & Shipyard Showcase
**One-liner:** Dan Behrman's home base — builder, writer, and chronic learner.
**Domain:** behrman.dev (registered via Porkbun)
**Repo:** ~/Shipyard/behrman-dev
**Current phase:** 2 — Brand Expansion and Repositioning

---

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Vercel (deploy, free tier)
- No database — static content + Substack RSS feed
- No auth

---

## Brand
**URL:** behrman.dev — Dan's permanent home base. Everything lives here.
**Studio name:** Shipyard — the brand name for the work and projects.
**Relationship:** "Hi, I'm Dan Behrman — welcome to Shipyard, where I build things."
Dan's name is the trust signal. Shipyard is the creative identity.
**Tone:** Founder energy. Honest, direct, warm, maker-first.
Not a corporate agency. Not a pure personal blog.

---

## PHASE 1 — Core Build ✅ COMPLETE

---

### Design System — Phase 1

#### Feel
Dark foundation, warm accents, editorial typography.
Reference: Linear.app meets a thoughtful personal blog.
Sophisticated, not sterile. Creative, not chaotic.

#### Color Palette
All color choices are audited for Protan colorblindness (Dan is Protan).
No red/green distinction is used anywhere for meaning.
All differentiation uses blue, amber, and cyan — strong channels for Protan vision.

| Role | Hex | Notes |
|---|---|---|
| Background | `#0F0F0F` | Near black |
| Surface (cards) | `#1A1A1A` | Dark grey |
| Border | `#2A2A2A` | Subtle separator |
| Primary text | `#F0EDE8` | Off white |
| Secondary text | `#888888` | Muted |
| Accent | `#F0A500` | Warm amber — Shipyard forge energy |
| Badge — Coming Soon | `#4F46E5` | Indigo |
| Badge — In Progress | `#06B6D4` | Cyan — green avoided for Protan |

Accent amber is used on: CTA buttons, hover states, wordmark, active nav links.

#### Typography
| Role | Font | Source |
|---|---|---|
| Headings | Geist | next/font (free) |
| Body | Inter | next/font (free) |

#### Layout
- Max content width: `760px` centered — editorial, not full-bleed
- Generous whitespace — sections breathe, nothing cramped
- Section labels: small caps, muted — `WORK` `ABOUT` `WRITING` `CONTACT`
- Cards: subtle border + box shadow lift on hover
- Hero: one subtle radial gradient in background only — no gradients elsewhere

#### Motion
- Fade-up on scroll for sections — subtle, not dramatic
- Hover states on cards and nav links only
- Nothing moves without user intent

#### Accessibility rule
Never use red or green as the sole signal for any meaning.
Always pair color with text labels or icons.

---

### Site Structure — Phase 1

Single scrolling page. No tabs. No separate routes.
Nav anchor links jump to sections on the same page.

#### Nav
- Sticky top
- Wordmark: **Dan Behrman**
- Anchor links: Work · About · Writing · Contact
- LinkedIn icon link (right side): https://www.linkedin.com/in/dan-behrman/
- Mobile: hamburger or simple collapsed links

---

### Section 1 — Hero ✅

**Goal:** Immediately communicate who Dan is and what Shipyard is.

**Content:**
- Name: Dan Behrman
- Tagline: *"Hi, I'm Dan Behrman — welcome to Shipyard, where I build things."*
- CTA button: "See what I'm building" → scrolls to Projects section

**Acceptance criteria:**
- Loads above the fold on desktop and mobile
- Tagline and CTA visible without scrolling
- Renders correctly on mobile + desktop

---

### Section 2 — Projects (Shipyard Showcase) ✅

**Goal:** Show what Dan is building. All projects currently coming soon or in progress.

**Projects:**

| Name | Type | Status | One-liner |
|---|---|---|---|
| Covered | Web App | Coming Soon | PTO and family calendar planner — so school days off don't catch you off guard. |
| Liftoff Lab | iOS Game | Coming Soon | A physics-based rocket builder game for kids, co-designed with a 7-year-old. |
| Dragons Don't Eat Ice Cream | Children's Book | In Progress | An anaphylaxis awareness story for kids and the parents who love them. |

**Card design (per project):**
- Project name
- One-line description
- Type badge: App / Game / Book
- Status badge: Coming Soon / In Progress
- No external links until projects are live

**Acceptance criteria:**
- All 3 cards render correctly on desktop and mobile
- Cards are visually consistent
- Type and status badges are clearly styled
- No broken links — cards do not link anywhere in Phase 1
- Dan approves card copy before build

---

### Section 3 — About / Story ✅

**Goal:** Personal voice. Why Dan builds. The human thread.

**Copy (approved):**

I've been building things since I was five years old, drawing up plans
for roller coasters and dreaming about becoming a Disney Imagineer. That
dream stuck — I became a mechanical engineer, spent time as a Disney
Imagineer designing experiences meant to make people genuinely happy,
and somewhere along the way realized that's just who I am. I build
things because making someone's life a little better is the best feeling
I know.

My son Ari brought me back to something I'd always loved but never made
enough time for. We started exploring physics together — the cosmos, how
things work, why the universe behaves the way it does — and watching him
light up reminded me that curiosity is worth protecting. It's one of the
best things we do together.

My younger son Joshy has anaphylactic food allergies — dairy, eggs,
sesame, peanuts — and we're deep in an allergy program that has made our
whole family hyper-aware of what that life actually looks like. The
separate lunch tables. The birthday parties where we bring our own food
or leave early. The way a kid can feel like an outsider just because of
what they can't eat. I'm writing a children's book because I haven't
found one that makes those kids — and their parents — feel truly seen.
I want to change that.

This is Shipyard. It's where I build the things I can't stop thinking
about.

**Acceptance criteria:**
- Copy used verbatim as approved above
- Renders cleanly on mobile
- Feels human, not resume-like — no bullet points, no titles

---

### Section 4 — Writing ✅

**Goal:** Surface latest Substack posts as cards. Drive readers to Substack.

**Substack profile:** https://substack.com/@danandari

**Implementation:**
- Fetch latest 3 posts via Substack RSS feed
- Fetched server-side in a Next.js Server Component
- Revalidate every 24 hours (ISR)
- Each card shows: title, publish date, short excerpt, link to full post
- "Read all posts →" link to Substack profile page
- Graceful fallback if RSS fetch fails: static "No posts yet" state, no broken UI

**Acceptance criteria:**
- 3 latest posts render as cards
- Cards update within 24h of a new post being published
- Each card links correctly to its post on Substack (opens new tab)
- Fallback state tested and renders cleanly
- Renders correctly on mobile + desktop

---

### Section 5 — Contact ✅

**Goal:** Give visitors a clear way to reach Dan or follow his work.

**Content:**
- Email: dan@behrman.dev (Porkbun forwarding → Gmail)
- Substack subscribe link: https://substack.com/@danandari
- LinkedIn: https://www.linkedin.com/in/dan-behrman/

**Acceptance criteria:**
- Email link opens mail client with dan@behrman.dev pre-filled
- Substack and LinkedIn links open in new tab
- No contact form — mailto is sufficient for Phase 1

---

## PHASE 2 — Brand Expansion and Repositioning

**Builds on:** Phase 1 (fully executed — do not modify Phase 1 decisions, only extend)
**Scope:** Design system update, site restructure, new Consulting section, Writing section overhaul, About section update, Covered card update

---

### Design System — Phase 2

Replace Phase 1 dark palette with warm light-mode foundation. Protan colorblindness constraints carry forward — no red/green distinction anywhere.

| Role | Hex | Notes |
|---|---|---|
| Background | `#FAF8F5` | Warm off-white — replaces `#0F0F0F` |
| Surface card | `#F0EDE8` | Light card bg — replaces `#1A1A1A` |
| Border | `#E5E2DC` | Subtle separator — replaces `#2A2A2A` |
| Primary text | `#1C1C1E` | Charcoal — replaces `#F0EDE8` |
| Secondary text | `#6B7280` | Muted — replaces `#888888` |
| Accent | `#F0A500` | Amber — carries from Phase 1 |
| Navy anchor | `#1E3A5F` | New — consulting elements, section headers |
| Badge — Coming Soon | `#4F46E5` | Indigo — carries from Phase 1 |
| Badge — In Progress | `#06B6D4` | Cyan — carries from Phase 1 |
| Badge — Dogfooding | `#F0A500` | Amber — new badge type |

**Typography:** Scale up heading sizes. Increase contrast between heading and body weights. Fonts unchanged (Geist headings / Inter body).

**Layout:** Hero and section headers permitted to exceed 760px max-width. Body copy stays at 760px. Existing motion rules carry from Phase 1.

---

### Site Structure — Phase 2

Single scroll page. No tabs. No separate routes.

**Nav updated:** `Consulting · Building · Writing · About`
All nav items are anchor links to sections on the same page. LinkedIn icon link carries from Phase 1.

**Page order:**
1. Hero
2. Consulting (new)
3. Building (renamed from Projects)
4. Writing (updated)
5. About (updated)
6. Contact

---

### Section 1 — Hero (updated)

**Tagline (replaces Phase 1 tagline):**
Marketer. Writer. Builder. I've been told to pick one. I haven't.

**Sub-line (new — sits directly under tagline):**
AI marketing strategy for companies that want more than a chatbot. A physics Substack with my 7-year-old. Products that won't leave me alone. All of it lives here.

**CTA (updated):** See what I'm working on → scrolls to Consulting section

**Acceptance criteria:**
- Tagline, sub-line, and CTA visible above the fold on desktop and mobile
- CTA scrolls to Consulting section anchor

---

### Section 2 — Consulting (new)

Does not exist in Phase 1. Insert between Hero and Building.

**Section label:** `CONSULTING`

**Header:** AI Marketing and GTM Strategy

**Body copy (approved, use verbatim):**

Most marketing teams using AI have noisy output they're cleaning up by hand. Nobody is thinking about hallucination rates, input design, synthesis architecture, or process QA. That is an engineering problem wearing a marketing hat, and most rooms have nobody who can see it for what it is.

I can.

I work with late-stage startups and growing marketing teams on what AI-first actually means at the process level. Not GPT wrappers. Not chatbots bolted onto the workflows you already had. The actual infrastructure that lets a team operate differently: multi-agent pipelines, automated research and synthesis, marketing that runs without a senior person in every room for every decision.

My background is an odd one on paper. Structural analysis on the Boeing 787. Rides at Walt Disney Imagineering. Then 20 years in product and marketing at Amazon, Meta, T-Mobile, Grammarly, and Highspot. I started my business career in consulting at Accenture. I've been doing this longer than the job title existed.

That instinct is why this work fits. I still write code. I maintain an active personal stack. I understand the dev cycle, the model behavior, and the positioning simultaneously. Most people in this space can do one or two of those. Not all three.

**CTA:** Let's talk → dan@behrman.dev (mailto link)

**Acceptance criteria:**
- Section renders correctly on desktop and mobile
- Copy used verbatim as approved above
- CTA opens mail client with dan@behrman.dev pre-filled
- No services menu, no pricing, no phases listed

---

### Section 3 — Building (updated)

Renamed from Projects. Label updates to `BUILDING`.

**Cards:**

| Name | Type | Status | One-liner | Link |
|---|---|---|---|---|
| Covered | Web App | Dogfooding | PTO and family calendar planner — so school days off don't catch you off guard. | https://covered.behrman.dev/signup |
| Liftoff Lab | iOS Game | Coming Soon | A physics-based rocket builder game for kids, co-designed with a 7-year-old. | none |

**Note:** Dragons Don't Eat Ice Cream moves from this section to Writing section. Remove from Building cards.

**Covered card specifics:**
- Dogfooding badge uses amber `#F0A500`
- Card is clickable and links to https://covered.behrman.dev/signup (opens new tab)
- All other cards remain non-clickable display-only — the distinction should read clearly

**Acceptance criteria:**
- Both cards render correctly on desktop and mobile
- Covered card links correctly and opens in new tab
- Liftoff Lab card is display-only with no link
- Badge styling visually distinct across all three badge types (Coming Soon / In Progress / Dogfooding)

---

### Section 4 — Writing (updated)

**Add description block above RSS cards (new — approved copy, use verbatim):**

Dan & Ari is a Substack about physics, written with my son Ari, who is 7 and wants to be an astrophysicist. Not an astronaut. He is very clear about that. We write about the cosmos, how things work, and why the universe behaves the way it does. The physics is accurate. The writing is for everyone.

**RSS cards:** Unchanged from Phase 1. Fetch latest 3 posts, revalidate every 24 hours, fallback state carries forward.

**Add Dragons Don't Eat Ice Cream card (moved from Building):**

| Name | Type | Status | One-liner | Link |
|---|---|---|---|---|
| Dragons Don't Eat Ice Cream | Children's Book | In Progress | An anaphylaxis awareness story for kids and the parents who love them. | none |

**Acceptance criteria:**
- Description block renders above RSS cards on desktop and mobile
- Dragons card renders consistently with other cards
- RSS behavior and fallback state unchanged from Phase 1

---

### Section 5 — About (updated)

Prepend the following professional origin paragraph before the existing approved Phase 1 copy. No line break or visual separator between them — they read as one continuous section.

**Prepend (approved, use verbatim):**

My first job out of engineering school was designing rides at Walt Disney Imagineering. Later, structural analysis on the Boeing 787. Somewhere along the way I realized the build wasn't the interesting part. Making people understand why it mattered was. That turned into 20 years in product and marketing at Amazon, Meta, T-Mobile, Grammarly, and Highspot.

**Then existing Phase 1 About copy runs verbatim and unchanged.**

**Acceptance criteria:**
- Prepended paragraph flows directly into existing copy with no visual break
- Existing copy used verbatim — no edits
- Renders cleanly on mobile

---

### Section 6 — Contact

Unchanged from Phase 1.

---

### Unresolved Gaps — Phase 2
None. All copy approved. All decisions confirmed by Dan.

---

## Backlog
- CMS or admin UI for updating projects
- Dark mode toggle
- Animations beyond fade-up on scroll and hover states
- Blog hosted on behrman.dev (Substack handles all writing)
- Individual project detail pages
- GitHub link (repos are private — add when projects go public)
- Contact form
- Analytics
- Separate routes or tabs — single scroll only
- Career coaching content
- GTM Brain project card (revisit Phase 3)
- Email capture