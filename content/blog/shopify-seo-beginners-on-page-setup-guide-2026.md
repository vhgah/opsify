---
title: "Shopify SEO for Beginners: Complete On-Page Setup Guide 2026"
description: "Set up on-page SEO for your Shopify store step by step — title tags, meta descriptions, URL handles, Google Search Console, and schema markup all covered."
pubDatetime: 2026-03-01T08:00:00Z
modDatetime: 2026-03-01T08:00:00Z
author: "Editorial Team"
slug: "shopify-seo-beginners-on-page-setup-guide-2026"
featured: false
draft: false
tags: ["shopify", "seo", "on-page seo", "beginners", "google search console"]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "seo"
---

On-page SEO is the set of changes you make directly on your store pages — title tags, meta descriptions, image alt text, URL handles — to help Google understand what each page is about. Get these basics right before spending money on ads or backlinks. This guide covers every on-page task a new Shopify store needs to complete in 2026.

If you haven't finished building your store yet, start with the [Shopify store setup guide for beginners](/blog/shopify-store-setup-guide-beginners-2026) first, then return here.

---

## 1. Homepage SEO

Your homepage is usually the most authoritative page on your site. Treat it carefully.

### Title Tag

The homepage title tag appears in Google search results as the blue clickable link. Keep it between 50 and 60 characters. Go over 60 and Google truncates it.

**Format:** `[Store Name] — [Main Keyword or Value Proposition]`

**Example:** `Blue Pine Candles — Handmade Soy Candles UK`

To edit it in Shopify: go to **Online Store → Preferences → Title and meta description**.

### Meta Description

The meta description is the grey text shown under your title in search results. It does not directly affect rankings, but a well-written one improves click-through rate.

- Length: 150–160 characters
- Write it as a direct answer or clear offer
- Include your primary keyword naturally

**Example:** `Shop handmade soy candles made in the UK. Free shipping on orders over £30. Browse 50+ scents in our online candle store.`

### H1 on the Homepage

Every page should have exactly one H1 tag. On the homepage, the H1 is usually the hero section headline. In most Shopify themes, you set this in the theme editor under the hero or banner section. Make sure it contains your primary keyword and is not identical to your title tag.

---

## 2. Product Page SEO

Product pages are where most of your organic traffic will land. Each product needs its own unique optimisation.

### Title Tag Format

Use this structure: `[Product Name] — [Brand or Store Name]`

**Example:** `Lavender & Vanilla Soy Candle — Blue Pine Candles`

Avoid stuffing multiple keywords into the product title. Keep it clean and readable.

### Meta Description

Write a 150–160 character description that includes the product's main keyword and one clear benefit or differentiator.

**Example:** `Hand-poured lavender and vanilla soy candle. Burns for 45 hours. Made with natural wicks. Free UK shipping on orders over £30.`

Edit product SEO in Shopify at the bottom of each product page: **Products → [Product] → scroll to "Search engine listing"**.

### Image Alt Text

Alt text describes your image for search engines and screen readers. Shopify does not auto-fill alt text. You must add it manually for every product image.

**How to add alt text:**

1. Go to **Products → [Product]**
2. Click on an image
3. Click **"Add alt text"**
4. Write a short, accurate description: `Lavender and vanilla soy candle in amber glass jar`

Never stuff keywords into alt text. Describe what is actually in the image.

### URL Handle

The URL handle is the slug at the end of your product URL. Shopify auto-generates one from the product title, but these are often long and messy.

**Bad:** `/products/lavender-and-vanilla-soy-candle-handmade-uk-natural`
**Good:** `/products/lavender-vanilla-soy-candle`

**How to edit:**

1. Go to **Products → [Product] → Search engine listing**
2. Click **"Edit website SEO"**
3. Change the URL handle field
4. Save — Shopify automatically creates a 301 redirect from the old URL to the new one

Keep handles short. Remove stop words (and, the, a, in, for). Include the primary keyword.

---

## 3. Collection Page SEO

Collection pages are often the highest-traffic opportunity for Shopify stores. A well-optimised collection page for "soy candles" can rank alongside individual product pages and pull in category-level search traffic.

### Why Collection Pages Rank Well

They aggregate multiple products, giving Google a clear topical signal. They also attract more internal links naturally, as you link to collections from the homepage and product pages.

### Title + Description Setup

Go to **Products → Collections → [Collection] → Search engine listing**.

- **Title:** Use the collection category keyword. Example: `Soy Candles — Blue Pine Candles`
- **Description:** Write 100–150 words in the collection description field. Include the main keyword in the first sentence. Describe what types of products are in the collection and who they are for.

**Example collection description:**
`Browse our range of handmade soy candles. Each candle is hand-poured in small batches using 100% natural soy wax and cotton wicks. Available in over 20 scents, from lavender and vanilla to cedarwood and citrus. All orders ship within 2 business days.`

### URL Handle for Collections

Same rules as product URLs. Keep it short and keyword-focused.

**Bad:** `/collections/all-soy-wax-handmade-candles`
**Good:** `/collections/soy-candles`

---

## 4. Editing URL Handles and Redirects

When you change a URL handle in Shopify, Shopify creates a 301 redirect automatically. This preserves any existing link equity from external links or Google's index.

You can view and manage all redirects at: **Online Store → Navigation → URL Redirects**.

If you are importing products or starting fresh, edit URL handles before you launch and before Google indexes anything. This avoids the redirect step entirely.

---

## 5. Internal Linking

Internal links pass authority between pages and help Google discover your content.

**Practical tactics for Shopify stores:**

- **Product descriptions linking to collections:** In the product description, link to the parent collection. Example: `Part of our [soy candles collection](/collections/soy-candles/).`
- **Collection descriptions linking to blog posts:** If you have a blog post about "how to choose a soy candle," link to it from the collection description.
- **Blog posts linking to products and collections:** Every blog post should have at least 2–3 links to relevant product or collection pages.
- **Related products sections:** Most Shopify themes show related products automatically. Ensure your products are tagged consistently so Shopify recommends relevant items.

The [best AI SEO apps for Shopify 2026](/blog/best-ai-seo-apps-shopify-2026) can automate internal linking suggestions across your store.

---

## 6. Google Search Console Setup

Google Search Console (GSC) lets you see how your store appears in Google search, which keywords you rank for, and whether Google has any issues crawling your pages. It is free.

### Step 1: Create a GSC Account

Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with a Google account.

### Step 2: Add Your Property

Click **"Add property"** and enter your store's domain (e.g. `yourstorename.com`). Choose the **Domain** option if possible — it covers all subdomains and both HTTP/HTTPS variants.

### Step 3: Verify Your Site

The easiest method for Shopify stores is the **HTML tag** method:

1. GSC gives you a `<meta name="google-site-verification" ...>` tag
2. In Shopify, go to **Online Store → Themes → Actions → Edit code**
3. Open `theme.liquid`
4. Paste the tag inside the `<head>` section
5. Save and click **Verify** in GSC

### Step 4: Submit Your Sitemap

Shopify automatically generates a sitemap at `yourstorename.com/sitemap.xml`. This sitemap includes all products, collections, pages, and blog posts.

In GSC:

1. Click **Sitemaps** in the left menu
2. Enter `sitemap.xml`
3. Click **Submit**

GSC will start crawling within a few days. Check back weekly to review performance data and crawl errors.

---

## 7. Site Speed as a Ranking Factor

Google uses page speed as a ranking signal, particularly for mobile. A slow Shopify store will rank lower and convert worse.

Core things that slow down Shopify stores:

- Uncompressed product images
- Too many third-party apps loading JavaScript
- Heavy theme code

The full breakdown of what to fix and how to measure it is in the [Shopify store speed optimisation guide 2026](/blog/how-to-optimize-shopify-store-speed-2026).

The short version: compress all images before upload, limit apps to only what you actively use, and test your score at [PageSpeed Insights](https://pagespeed.web.dev/).

---

## 8. Schema Markup: What Shopify Generates Automatically

Schema markup is structured data that helps search engines display rich results — star ratings, prices, and breadcrumbs — directly in search results.

Shopify automatically generates the following schema types on your store:

| Page Type     | Schema Generated                            |
| ------------- | ------------------------------------------- |
| Product pages | `Product` (with price, availability, image) |
| All pages     | `BreadcrumbList`                            |
| Homepage      | `Organization`                              |

You do not need to add these manually. They are built into the theme's Liquid templates.

**What Shopify does NOT generate automatically:**

- `FAQPage` schema for blog posts with FAQ sections
- `HowTo` schema for tutorial content
- `Review` aggregate ratings (requires a reviews app like Judge.me)

If you write blog content, adding FAQ or HowTo schema manually or via an app improves your chances of appearing as a rich result in Google.

---

## 9. Free SEO Apps Worth Installing

### Avada SEO

Avada SEO handles several on-page tasks automatically:

- Bulk editing of meta titles and descriptions across products
- Auto-generating alt text using product names
- Broken link detection

Free plan covers most stores under 500 products.

### TinyIMG

TinyIMG compresses product images and auto-fills alt text. Image compression alone can improve page speed by 20–40%, which has a direct effect on both rankings and conversions.

Both apps are available in the Shopify App Store at no cost for basic use.

---

## 10. What NOT to Do

These mistakes are common among new store owners and will harm your rankings.

**Duplicate title tags:** Every page must have a unique title tag. Do not use your store name alone as the title on multiple pages. Shopify sometimes pre-fills product titles as SEO titles — check and customise each one.

**Keyword stuffing:** Repeating a keyword five times in a product description does not help you rank. It makes the page worse for users and Google penalises it. Write naturally.

**Thin product descriptions:** Descriptions under 100 words give Google almost nothing to work with. Write at least 150–200 words for each product. Describe the product, its materials, dimensions, use cases, and who it is for.

**Ignoring collection pages:** Many store owners only optimise product pages. Collection pages often have higher ranking potential for category keywords. Do not skip them.

**Not verifying GSC:** Without Search Console, you have no visibility into ranking problems, manual penalties, or crawl errors. Set it up before you launch.

---

## FAQ

### Does Shopify handle SEO automatically?

Shopify generates canonical tags, sitemaps, and basic product schema automatically. But title tags, meta descriptions, image alt text, and URL handles all require manual input. The defaults Shopify fills in are rarely optimised.

### How long does it take to rank on Google with a new Shopify store?

For new domains with no backlinks, expect 3–6 months before seeing meaningful organic traffic. Focus on on-page SEO first, then build content and links. Sites with existing domain authority can rank faster.

### Should I change URL handles after launch?

Only if the existing handles are very poor (e.g. contain auto-generated numbers). Shopify handles the redirect automatically, but changing URLs after indexing always carries some temporary ranking fluctuation. Get URL handles right before you launch.

### What is the best free SEO app for Shopify?

Avada SEO and TinyIMG are the most capable free options for on-page tasks. For deeper keyword research and link building, you will need external tools like Google Search Console (free) or Ahrefs/Semrush (paid).

### Do I need a blog for Shopify SEO?

A blog is not required, but it significantly expands the number of keywords you can target. Product and collection pages target transactional keywords ("buy soy candles"). Blog posts target informational keywords ("how to make a candle last longer"), which bring in earlier-stage buyers.

### Is duplicate content a problem on Shopify?

Yes. Shopify can create duplicate URLs if you access products through collection paths (e.g. `/collections/candles/products/lavender-candle` vs `/products/lavender-candle`). Shopify adds a canonical tag pointing to the `/products/` URL, which prevents a Google penalty, but keep this in mind when building internal links.

### How do I check if my SEO changes are working?

Use Google Search Console to track impressions, clicks, and average position for your target keywords. Allow at least 4–6 weeks after making changes before drawing conclusions. Ahrefs Webmaster Tools (free) also shows backlinks and organic keyword data.
