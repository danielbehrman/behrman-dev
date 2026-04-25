# BRIEF.md — behrman.dev
# Source of truth. Read before every session. Do not build beyond this.

---

## Project
**Name:** behrman.dev — Personal Portfolio & Shipyard Showcase
**One-liner:** Dan Behrman's home base — builder, writer, and chronic learner.
**Domain:** behrman.dev (registered via Porkbun)
**Repo:** ~/Shipyard/behrman-dev
**Phase:** 1 — Core build

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

## Visual Direction

### Feel
Dark foundation, warm accents, editorial typography.
Reference: Linear.app meets a thoughtful personal blog.
Sophisticated, not sterile. Creative, not chaotic.

### Color Palette
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

### Typography
| Role | Font | Source |
|---|---|---|
| Headings | Geist | next/font (free) |
| Body | Inter | next/font (free) |

### Layout
- Max content width: `760px` centered — editorial, not full-bleed
- Generous whitespace — sections breathe, nothing cramped
- Section labels: small caps, muted — `WORK` `ABOUT` `WRITING` `CONTACT`
- Cards: subtle border + box shadow lift on hover
- Hero: one subtle radial gradient in background only — no gradients elsewhere

### Motion
- Fade-up on scroll for sections — subtle, not dramatic
- Hover states on cards and nav links only
- Nothing moves without user intent

### Accessibility rule
Never use red or green as the sole signal for any meaning.
Always pair color with text labels or icons.

---

## Site Structure

Single scrolling page. No tabs. No separate routes.
Nav anchor links jump to sections on the same page.

---

### Nav
- Sticky top
- Wordmark: **Dan Behrman**
- Anchor links: Work · About · Writing · Contact
- LinkedIn icon link (right side): https://www.linkedin.com/in/dan-behrman/
- Mobile: hamburger or simple collapsed links

---

### 1. Hero

**Goal:** Immediately communicate who Dan is and what Shipyard is.

**Content:**
- Name: Dan Behrman
- Tagline: *"Hi, I'm Dan Behrman — welcome to Shipyard, where I build things."*
- CTA button: "See what I'm building" → scrolls to Projects section

**Acceptance criteria:**
- Loads above the fold on desktop and mobile
- Tagline and CTA visible without scrolling
- Renders correctly on mobile + desktop

**Definition of done:** Hero renders correctly on mobile + desktop,
approved by Dan.

---

### 2. Projects (Shipyard Showcase)

**Goal:** Show what Dan is building. All projects currently coming soon
or in progress.

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

**Constraints:**
- No project URLs yet — cards are display only
- New projects can be added later without a dev

**Definition of done:** All 3 cards render and are approved by Dan.

---

### 3. About / Story

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

**Definition of done:** Section renders correctly on mobile + desktop.

---

### 4. Writing

**Goal:** Surface latest Substack posts as cards. Drive readers to Substack.

**Substack profile:** https://substack.com/@danandari

**Implementation:**
- Fetch latest 3 posts via Substack RSS feed
- Fetched server-side in a Next.js Server Component
- Revalidate every 24 hours (ISR)
- Each card shows: title, publish date, short excerpt, link to full post
- "Read all posts →" link to Substack profile page
- Graceful fallback if RSS fetch fails: static "No posts yet" state,
  no broken UI

**Acceptance criteria:**
- 3 latest posts render as cards
- Cards update within 24h of a new post being published
- Each card links correctly to its post on Substack (opens new tab)
- Fallback state tested and renders cleanly
- Renders correctly on mobile + desktop

**Definition of done:** Live RSS feed rendering in production,
fallback state tested, approved by Dan.

---

### 5. Contact

**Goal:** Give visitors a clear way to reach Dan or follow his work.

**Content:**
- Email: dan@behrman.dev (Porkbun forwarding → Gmail)
- Substack subscribe link: https://substack.com/@danandari
- LinkedIn: https://www.linkedin.com/in/dan-behrman/

**Acceptance criteria:**
- Email link opens mail client with dan@behrman.dev pre-filled
- Substack and LinkedIn links open in new tab
- No contact form — mailto is sufficient for Phase 1

**Definition of done:** All links verified working in production.

---

## Unresolved Gaps
None. All decisions confirmed by Dan.

---

## Out of Scope — Phase 1
- CMS or admin UI for updating projects
- Dark mode toggle (dark is the only mode)
- Animations beyond fade-up on scroll and hover states
- Blog hosted on behrman.dev (Substack handles all writing)
- Individual project detail pages
- GitHub link (repos are private — add when projects go public)
- Contact form
- Analytics (add in Phase 2 if desired)
- Separate routes or tabs — single scroll only
