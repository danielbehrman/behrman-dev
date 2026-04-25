# CLAUDE.md — behrman.dev

## What this project is
Personal portfolio and Shipyard showcase for Dan Behrman.
Single scrolling Next.js site hosted on Vercel at behrman.dev.

Read BRIEF.md before every session. It is the source of truth.
Do not build beyond the BRIEF without explicit instruction from Dan.

---

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Vercel (deploy)
- No database
- No auth

---

## Project structure
- `app/` — App Router pages and layouts
- `components/` — Reusable UI components
- `public/` — Static assets (images, icons, og image)

---

## Key conventions
- All content is static except the Writing section (Substack RSS, ISR 24h)
- No client components unless strictly necessary
- Mobile-first — every component must be reviewed at mobile breakpoint
- No external UI libraries — Tailwind only
- All copy must be approved by Dan before it ships

---

## Session start checklist
1. Read BRIEF.md
2. Surface a briefing to Dan: what's being built, estimated steps, any risks
3. Wait for Dan's explicit confirmation before writing any code

## Phase gates
- Dan reviews and approves all UI before merge
- No phase begins without Dan's explicit go-ahead
