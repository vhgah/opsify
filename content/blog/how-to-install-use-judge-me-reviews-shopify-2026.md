---
title: "How to Install and Use Judge.me Reviews App on Shopify (Free) 2026"
description: "Step-by-step guide to installing and setting up Judge.me on Shopify — review request emails, widgets, Google rich snippets, photo reviews, and free vs paid plan breakdown."
pubDatetime: 2026-03-04T08:00:00Z
modDatetime: 2026-03-04T08:00:00Z
author: "Editorial Team"
slug: "how-to-install-use-judge-me-reviews-shopify-2026"
featured: false
draft: false
tags: ["shopify", "judge.me", "product reviews", "social proof", "apps", "free"]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "apps"
---

Judge.me is the top free product reviews app for Shopify, used by over 100,000 stores and collecting more than 15 million reviews. It automates review request emails, displays star ratings on product pages, enables photo and video reviews, and adds Google-rich-snippet schema — all on the free plan. This guide walks through every step from install to a fully configured setup.

Product reviews are one of the highest-impact trust signals you can add to your store. For other trust elements to set up alongside reviews, see the [guide to adding trust badges and legal pages on Shopify 2026](/blog/how-to-add-trust-badges-policies-legal-pages-shopify-2026).

---

## 1. What Judge.me Does

Judge.me collects and displays product reviews. The core features available on the free plan:

- Automated review request emails sent after order fulfillment
- Star rating widget displayed on product pages
- Review carousel widget for the homepage
- Photo and video reviews (unlimited)
- Google JSON-LD schema for star ratings in search results
- Review import from AliExpress, CSV, and other apps
- Manual and automatic review moderation

The paid plan (Awesome, $15/month) adds Q&A sections, social media push notifications, and custom review forms. Most stores do not need these.

---

## 2. Installing Judge.me

1. In your Shopify admin, go to **Apps → Shopify App Store**
2. Search for **Judge.me Product Reviews**
3. Click the listing (it shows "Free plan available" and 5-star rating)
4. Click **Add app**
5. Click **Install app** on the permissions screen

Judge.me installs in under a minute. After installation, it opens the setup wizard automatically.

---

## 3. Initial Setup Wizard

The setup wizard runs on first login and covers the basics.

### Brand Colours

Judge.me lets you match the widget to your store's colour scheme. Enter your primary brand colour as a hex code (e.g. `#2D6A4F`). This affects star colour, button colour, and accent elements in the review widget.

### Review Request Email Sender

Set the sender name and email address that review request emails come from. Use your store name as the sender name (e.g. `Blue Pine Candles`) and a real email address customers will recognise (`hello@bluepinecandles.com`). Avoid generic addresses like `noreply@` — these lower open rates.

### Review Request Timing

The setup wizard asks when to send review request emails after fulfillment. The default is 14 days. This is a good starting point for most physical product stores — it gives customers time to receive and use the product before being asked to review it.

You can change this after setup at any time in **Settings → Review Request Emails**.

---

## 4. Importing Existing Reviews

If you are launching with existing product data, you can import reviews before you go live.

### From AliExpress

If your products are sourced from AliExpress suppliers:

1. In Judge.me, go to **Reviews → Import**
2. Select **AliExpress**
3. Paste the AliExpress product URL
4. Judge.me pulls available public reviews and maps them to your product

Filter imported reviews by rating — import only 4-star and 5-star reviews. Translated reviews often read awkwardly; edit any that are unclear before publishing.

### From a CSV File

If you have reviews from a previous platform or tool:

1. Go to **Reviews → Import → CSV**
2. Download the Judge.me CSV template
3. Fill in the required columns: `product_handle`, `reviewer_name`, `rating`, `body`, `created_at`
4. Upload the file

### From Other Apps

Judge.me supports migration from Yotpo, Stamped, Loox, and several other review apps. Go to **Reviews → Import → Other App** and follow the migration prompts.

---

## 5. Setting Up Automatic Review Request Emails

Review request emails are Judge.me's core automation. They send automatically after every fulfilled order.

### Configuring the Email

1. Go to **Settings → Review Request Emails**
2. Click **Edit** on the default email template
3. Customise:
   - **Subject line:** `How's your [Product Name]? We'd love your feedback` is a clean default. Personalised subject lines with the product name outperform generic ones.
   - **Email body:** Keep it brief. One sentence of thanks, one clear ask, and a prominent review button.
   - **Timing:** Change the days-after-fulfillment value. 14 days is standard. For consumable products (food, supplements), 7 days works better. For furniture or slow-delivery items, 21 days.
4. Click **Save**

### Adding a Coupon Incentive

Judge.me lets you attach a discount code to the review request email. Customers receive the code after submitting a review.

1. In **Settings → Coupons**, create a coupon rule (e.g. 10% off next order for any review, 15% off for a photo review)
2. Enable the coupon in your review request email template

This increases review volume significantly — typically 2–3x more reviews compared to emails without an incentive.

---

## 6. Widget Setup on Product Pages

Judge.me auto-injects the star rating widget and review section onto your product pages when you install the app. No code editing is required for most Shopify themes.

### Verifying the Widget Is Showing

1. Go to your storefront and open any product page
2. Scroll down — you should see a star rating below the product title and a full review section lower on the page
3. If the widget is not appearing, go to **Widgets → Product Page** in Judge.me and click **Re-install**

### Customising the Widget

In **Widgets → Product Page**, you can adjust:

- Widget colour and font
- Number of reviews shown before "load more"
- Sort order (most recent, highest rated, etc.)
- Whether to show reviewer photos

### Review Carousel on the Homepage

A review carousel displays a rotating selection of your best reviews on the homepage. This works well as a social proof section between the hero banner and product collections.

1. In Judge.me, go to **Widgets → Carousel**
2. Copy the embed code provided
3. In Shopify, go to **Online Store → Themes → Customise**
4. Add a **Custom HTML / Liquid** section where you want the carousel
5. Paste the embed code and save

Alternatively, Judge.me integrates with the Shopify theme editor as a section — look for the Judge.me block in your theme's section library.

---

## 7. Review Moderation

Judge.me offers two moderation modes: auto-publish and manual approval.

### Auto-Publish

All submitted reviews go live immediately without your review. This is the faster path to accumulating reviews but means occasional spam or fake reviews can appear.

**Recommended for:** Stores with an established, reputable customer base.

### Manual Approval

All reviews are held for your approval before publishing. You review each submission in **Reviews → Pending** and either approve or reject it.

**Recommended for:** New stores, stores in competitive niches, or any store where brand image is critical.

### Flagging Spam

Even on auto-publish, Judge.me runs spam filtering using keywords and patterns. You can set custom blacklist words under **Settings → Spam Filter**. Any review containing those words is held for manual review automatically.

---

## 8. Photo and Video Reviews

Photo and video reviews are available on all plans, including free. They are significantly more persuasive than text-only reviews — showing the product in real use.

### Enabling Photo and Video Reviews

1. Go to **Settings → Review Content**
2. Enable **Photo reviews** and **Video reviews**
3. Set the maximum number of media files per review (3–5 is standard)

Photo and video reviews show as thumbnails in the review widget. Clicking a thumbnail opens a full-size view. Judge.me displays a media gallery at the top of the review section if a product has multiple photo reviews.

### Requesting Photos in the Email

In your review request email template, add a line explicitly asking customers to attach a photo: `Add a photo of your order and we'll send you an extra 5% off your next purchase.` Judge.me's coupon logic can apply a higher discount for reviews that include media.

---

## 9. Google Rich Snippets: Star Ratings in Search Results

Google rich snippets show star ratings, review counts, and prices directly in search results. This significantly increases click-through rate.

Judge.me generates the JSON-LD schema required for rich snippets on the free plan.

### Enabling Google JSON-LD

1. In Judge.me, go to **Settings → Integrations → Google**
2. Enable **Google Rich Snippets (JSON-LD)**
3. Save

Judge.me injects structured data onto every product page. Google typically picks up the schema within 1–4 weeks and begins showing star ratings in search results.

**Note:** Google only shows rich snippets for products with enough reviews and a sufficient rating. Products with one or two reviews may not qualify immediately.

### Verifying Schema

To check if the schema is working:

1. Open any product page URL
2. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Paste the URL and run the test
4. You should see `Product` schema with `aggregateRating` detected

---

## 10. Judge.me Free vs Awesome ($15/month)

Most stores do not need the paid plan. Here is an honest breakdown of what each plan includes.

| Feature                                       | Free | Awesome ($15/mo) |
| --------------------------------------------- | ---- | ---------------- |
| Automated review request emails               | Yes  | Yes              |
| Photo and video reviews                       | Yes  | Yes              |
| Google rich snippets (JSON-LD)                | Yes  | Yes              |
| Star rating widget                            | Yes  | Yes              |
| Review carousel widget                        | Yes  | Yes              |
| Import from AliExpress / CSV                  | Yes  | Yes              |
| Q&A section on product pages                  | No   | Yes              |
| Social media push (post reviews to Instagram) | No   | Yes              |
| Custom review forms                           | No   | Yes              |
| Review sharing to Facebook Shop               | No   | Yes              |

**When to upgrade to Awesome:**

- You want a Q&A section for customer questions on product pages
- You actively run social media and want to auto-share reviews
- You sell products that benefit from detailed custom review questions (e.g. clothing: "What size did you order?")

For most product categories, the free plan handles everything you need for conversion optimisation. The [Shopify conversion rate optimisation guide 2026](/blog/shopify-conversion-rate-optimization-ai-2026) covers how reviews fit into the broader CRO picture alongside trust badges, product page layout, and checkout improvements.

---

## 11. Getting Your First Reviews Fast

An empty reviews section can hurt conversion more than having no widget at all. Here is how to seed your first reviews quickly.

**Ask existing customers directly:** If you have already made sales, email customers personally asking for a review. A personal email from the store owner gets a much higher response rate than an automated one.

**Offer a strong incentive for early reviews:** For your first 20 reviews, offer a higher discount than normal — 20% off instead of 10%.

**Import from AliExpress:** If you are dropshipping, import supplier reviews as a starting point. Only import genuine 4- and 5-star reviews. Disclose the import in your review policies if required in your jurisdiction.

**Send samples to micro-influencers:** Send free products to 5–10 nano-influencers in your niche in exchange for an honest review published to your product page. This is legal and common.

Also consider the full suite of [best free Shopify apps for new stores](/blog/best-free-shopify-apps-new-store-must-install-2026) — Judge.me pairs well with a trust badge app, a speed optimisation tool, and a upsell app running together.

---

## FAQ

### Is Judge.me really free?

Yes. The free plan is fully functional for most stores. There is no trial period — the free plan does not expire. The paid Awesome plan at $15/month adds Q&A and social features, but is optional.

### Does Judge.me slow down my Shopify store?

Judge.me's widget loads asynchronously, meaning it does not block page rendering. The impact on page speed is minimal. In some cases, switching to Judge.me from heavier apps like Yotpo actually improves page speed.

### Can I migrate from another reviews app to Judge.me?

Yes. Judge.me supports imports from Yotpo, Stamped, Loox, Okendo, and most other major review apps. Go to **Reviews → Import → Other App** and select your current app. Existing reviews, ratings, and reviewer names carry over.

### Will imported AliExpress reviews get me penalised by Google?

Importing reviews from AliExpress is a grey area. Google's guidelines say reviews should reflect genuine customer experiences with your specific store. AliExpress reviews reflect experiences with a different seller. Use imported reviews to seed a new store, but prioritise collecting real reviews from your own customers as quickly as possible.

### How many reviews do I need before star ratings appear in Google search?

Google does not publish a specific minimum, but in practice, products with at least 3–5 reviews and a rating of 3.5 or above tend to show rich snippets. The review schema must be enabled in Judge.me and Google needs to recrawl the page.

### Can customers edit or delete their reviews?

Customers can edit their reviews by clicking a link in the original review request email within a limited window. They cannot delete reviews themselves — only you (the store owner) can delete a review from the Judge.me dashboard. Handle deletion requests professionally via your support email.

### Does Judge.me work with all Shopify themes?

Judge.me works with the vast majority of Shopify themes including Dawn, Debut, Impulse, Turbo, and most third-party themes. If the widget does not auto-inject after installation, use the manual installation option in **Widgets → Product Page → Manual Install**. Judge.me's support team responds within a few hours if you run into theme-specific issues.
