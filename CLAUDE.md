# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at localhost:3000
npm run build      # Production build (runs type-check + lint)
npm run lint       # ESLint check
npm start          # Start production server (after build)
```

## Stack

- **Next.js 16** (App Router only — no pages/ directory)
- **React 19**
- **TypeScript** (strict — no `any` types)
- **Tailwind CSS v4** (CSS-based config via `@theme` in `globals.css`, no `tailwind.config.ts`)
- **Framer Motion v12** for all animations
- **Nodemailer v8** for contact form email via Gmail SMTP

## Architecture

All pages use the **App Router** (`src/app/`). Every page exports `metadata` or `generateMetadata` for SEO.

```
src/
  app/
    layout.tsx          # Root layout: Inter font, Navbar, Footer, metadata
    page.tsx            # Homepage — composes all section components
    about/page.tsx      # Server Component (no hooks)
    services/page.tsx   # Server Component
    contact/page.tsx    # Client Component (form state)
    api/contact/route.ts # POST handler: validation, rate-limit, sanitize, sendEmail
    sitemap.ts / robots.ts
  components/
    layout/             # Navbar (sticky scroll-trigger), Footer
    sections/           # One file per homepage section
    ui/                 # Button, SectionHeading, ServiceCard, TestimonialCard
  lib/sendEmail.ts      # Nodemailer helper — builds HTML email, sends via Gmail SMTP
  types/index.ts        # All shared TypeScript interfaces
```

## Key Conventions

- `'use client'` required on any component using hooks or Framer Motion
- **Colors** use Tailwind built-in sky palette: `sky-500` (#0EA5E9), `sky-900` (#0C4A6E), `sky-100` (#E0F2FE), `slate-900` (#0F172A)
- Custom animation keyframes (marquee, float) defined in `globals.css` under `@theme`
- `<Link>` for internal routes; `<a target="_blank" rel="noopener noreferrer">` for external
- `next/image` for all images; bare `<img>` never used
- Framer Motion: use `whileInView` + `viewport={{ once: true }}` for scroll animations

## Environment Variables

Copy `.env.local.example` to `.env.local`. `EMAIL_PASS` must be a 16-character Gmail App Password. Required for `/api/contact` to send emails.

## Contact API

`POST /api/contact` — validates all fields, strips HTML, enforces 3 req/10 min per IP, checks honeypot, calls `sendContactEmail()`. Returns `{ success: boolean, message: string }`.
