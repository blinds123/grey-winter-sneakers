# Rebuild Landing Template

This is the **production-ready template** for deploying product landing pages with the `tiktok-landing-deployer` skill.

## Quick Start

### Option 1: New Deployment (From Scratch)

1. **Duplicate this folder**
   ```bash
   cp -r rebuild-landing-template my-product-name
   ```

2. **Add your product images**
   - Place 4+ product images in `images/product/` (any format, any size - will be auto-optimized)
   - Place 15-25 testimonial avatar images in `images/testimonials/`
   - The skill will handle image optimization automatically (WebP conversion, responsive sizes)

3. **Activate the skill**
   ```
   "Deploy landing page for [PRODUCT NAME]

   Product folder: /Users/nelsonchan/Downloads/my-product-name
   Competitor: https://competitor.com/product
   Pricing: order $59, preorder $19, bump $10"
   ```

4. **The skill will:**
   - Prompt for competitor URL if not provided
   - Ask clarifying questions if needed (material, features, etc.)
   - Extract colors from your product images
   - Generate 15-25 product-specific testimonials (matching your image count)
   - Choose an appropriate order bump accessory
   - Optimize all images for sub-1.8s mobile load time
   - Deploy to GitHub + Netlify

### Option 2: Fix/Rebuild Existing Site

If you have an existing deployment that needs fixing or converting to the template standard:

```
"Fix this landing page to match the rebuild template structure"

OR

"Convert this site to use the new template design"

OR

"Fix the checkout function in this deployment"
```

The skill can:
- Convert an existing site to match template quality
- Fix specific elements (checkout, testimonials, colors, etc.)
- Rebuild with proper image optimization
- Update to latest best practices

## Folder Structure

```
rebuild-landing-template/
├── template.html                    # Main template with {{PLACEHOLDERS}}
├── README.md                        # This file
├── netlify/functions/buy-now.js     # SimpleSwap checkout integration
└── images/
    ├── product/                     # YOUR product images go here (4+ images)
    ├── testimonials/                # YOUR testimonial avatars (15-25 images)
    ├── order-bump/                  # Auto-generated from Pexels
    └── worn-by-favorites/           # FIXED influencers (always same 3)
        ├── alix-earle.webp
        ├── monet-mcmichael.webp
        └── alex-cooper.webp
```

## What's Product-Specific?

✅ **Customized for EACH product:**
- Colors (extracted from product image)
- All copy (product name, tagline, descriptions)
- 15-25 testimonials (written for specific product)
- Order bump (accessory chosen for product type)
- Product images (your images, optimized)
- Testimonial images (your avatars, optimized)
- Pricing
- Product tabs content

❌ **SAME across ALL products:**
- Worn by Favorites section (always Alix Earle, Monet McMichael, Alex Cooper)
- SVG icons (shipping, returns, platform badges)
- HTML structure
- Component designs

## Image Requirements

### Product Images
- **Minimum:** 4 images
- **Format:** Any (JPG, PNG, WebP, HEIC, etc.)
- **Size:** Any (will be auto-optimized to WebP with responsive sizes)
- **Naming:** Any (skill will standardize to product-01.png, product-02.png, etc.)

### Testimonial Images
- **Count:** 15-25 images (skill matches testimonial count to image count)
- **Format:** Any
- **Size:** Any (will be optimized to 200×200px WebP avatars)
- **Naming:** Any (skill will standardize)

### Worn by Favorites (Pre-included)
- **Already included in template** - DO NOT replace
- Alix Earle, Monet McMichael, Alex Cooper (@callherdaddy)

## Performance Guarantee

The skill guarantees **sub-1.8 second mobile load time** through:

- **WebP conversion** (40% smaller than JPEG)
- **Responsive images** (600px, 800px, 1200px sizes)
- **LQIP placeholders** (instant blur preview)
- **Lazy loading** (below-fold content)
- **Inline critical CSS**
- **Deferred non-critical JS**

Typical results: **1.2-1.6 seconds on 4G**

## Deployment Speed

**4.5-8 minutes** from activation to live URL

Execution Flow:
- **Wave 1** (1 min): Competitor analysis + color extraction (parallel)
- **Wave 2** (2 min): Order bump + testimonials + product tabs (parallel)
- **Wave 3** (2 min): Image optimization (if needed)
- **Wave 4** (1.5 min): Assembly + deployment

## Pricing Structure

The template supports 3 pricing tiers (SimpleSwap integration):

1. **$59** - Order now (full price, no popup)
2. **$19** - Pre-order (shows order bump popup, can upgrade to $29 with bump)
3. **$29** - Pre-order with bump

## Technology Stack

- **Hosting:** Netlify (free tier, instant deploy)
- **Functions:** Netlify serverless functions
- **Payment:** SimpleSwap crypto automation
- **Fonts:** Google Fonts (Cormorant Garamond + Montserrat)
- **Analytics:** TikTok Pixel
- **Images:** Auto-optimized with Sharp library

## Template Features

✅ Worn by Your Favorites section (influencer social proof)
✅ 15-25 testimonials with platform distribution (TikTok, Instagram, Facebook, Google, Trustpilot)
✅ Product details tabs (Shipping, Returns, Care, Size Guide)
✅ Order bump popup (pre-order tier only)
✅ Size selector
✅ Live viewer count
✅ Stock counter
✅ GDPR cookie consent
✅ Mobile-responsive
✅ Sticky mobile CTA
✅ Trust badges
✅ Featured review carousel
✅ Embedded SVGs
✅ Service worker caching
✅ Schema.org structured data

## Customization

The skill auto-customizes:
- Primary color from product image
- All text for product type
- Testimonials mention specific product features
- Care instructions based on material
- Order bump matches product category
- Size guide for product type

## Need Help?

Skill can fix/rebuild any existing deployment:
```
"This site's checkout is broken - can you fix it?"
"Convert this old deployment to the new template"
"The images are loading too slowly - optimize them"
"Fix the testimonials section"
```

The skill has full knowledge of the template structure and can surgically fix any element or do a complete rebuild.

---

**Version:** Rebuild Template v2.0
**Last Updated:** December 2025
**Optimized For:** Sub-1.8s mobile load, 15-25 testimonials, parallel agent execution
