# TikTok Video Downloader

![App Preview](https://imgix.cosmicjs.com/5ab13080-2463-11f1-9fcd-efadd08ad6da-autopilot-photo-1554224155-6726b3ff858f-1774014456702.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, beautifully designed TikTok video downloader that lets users paste a TikTok link and download the video without the TikTok watermark. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com/docs) for dynamic content management.

## Features

- 🎬 **Watermark-Free Downloads** — Download TikTok videos without the watermark overlay
- ⚡ **Instant Processing** — Fast server-side video extraction
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ❓ **Dynamic FAQ** — CMS-managed FAQ section with smooth accordion animations
- 🎨 **CMS-Powered Content** — Site name, tagline, descriptions, and branding managed in Cosmic
- 🔒 **Secure Architecture** — All processing handled server-side via API routes
- 🌙 **Modern Dark Theme** — TikTok-inspired gradient design with glassmorphism effects

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69bd4fd53704c8f1904d4118&clone_repository=69bd50e43704c8f1904d4144)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want a website that can take a tiktok link and then let you download that video without the tiktok watermark"

### Code Generation Prompt

> "Build a Next.js application for a website called 'tiktok link'. The content is managed in Cosmic CMS with the following object types: site-settings, faqs. Create a beautiful, modern, responsive design with a homepage and pages for each content type. I want a website that can take a tiktok link and then let you download that video without the tiktok watermark"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **CMS**: [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- **Runtime**: [Bun](https://bun.sh/)
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed
- A [Cosmic](https://www.cosmicjs.com) account with the content model set up

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tiktok-video-downloader
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Site Settings
```typescript
import { cosmic } from '@/lib/cosmic'

const { object } = await cosmic.objects.findOne({
  type: 'site-settings',
  slug: 'site-settings'
}).depth(1)
```

### Fetching FAQs
```typescript
const { objects: faqs } = await cosmic.objects
  .find({ type: 'faqs' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses two content types from Cosmic:

| Object Type | Purpose | Metafields |
|---|---|---|
| `site-settings` | Global site configuration | site_name, tagline, hero_description, logo, seo_description, footer_text |
| `faqs` | Frequently Asked Questions | question, answer, order |

All content is fetched server-side using the Cosmic SDK for optimal performance and SEO.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->