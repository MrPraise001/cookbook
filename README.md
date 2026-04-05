# Keto-Vegan Secrets Landing Page

A high-converting, single-product landing page for the digital ebook "Keto-Vegan Secrets" built with Next.js (App Router) and Tailwind CSS.

## Features
- Modern, organic design with Sage Green, Cream, and Terracotta palette
- Hero section with 3D ebook mockup placeholder and CTA
- Interactive pain point flip cards
- Interactive recipe gallery
- Benefits grid with custom icons
- About the author section
- FAQ accordion
- Pricing card with discount
- Sticky header with pulsing Buy Now button
- Dynamic macro calculator
- Flutterwave V3 Standard Checkout integration
- SEO meta tags and BidVertiser pixel placeholder
- Mobile-first, fully responsive

## Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Environment variables:**
   - Copy `.env.local` and add your Flutterwave Public and Secret keys:
     ```env
     NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X
     FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-xxxxxxxxxxxxxxxxxxxxx-X
     ```
3. **Add your ebook PDF:**
   - Place `Keto-Vegan-Secrets.pdf` in the `/public` folder for auto-download after purchase.
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Payment Integration
- Uses Flutterwave Standard Checkout overlay. No card data is handled by your server.
- On successful payment, users are redirected to `/success` and the PDF auto-downloads.

## Customization
- Replace image and icon placeholders with your assets.
- Update author bio and FAQ in `app/page.tsx`.
- Add your BidVertiser pixel script in `app/layout.tsx`.

## Deployment
- Ready for deployment on Vercel or any Next.js-compatible host.

---

© 2026 Keto-Vegan Secrets. All rights reserved.
