---
title: "How to Set Up Facebook & Instagram Shop Integration on Shopify 2026"
description: "Connect your Shopify store to Facebook and Instagram in under an hour. This step-by-step guide covers catalog sync, product tagging, Meta Pixel, and common errors."
pubDatetime: 2026-03-13T12:00:00Z
modDatetime: 2026-03-13T12:00:00Z
author: "Editorial Team"
slug: "how-to-set-up-facebook-instagram-shop-shopify-2026"
featured: false
draft: false
tags: ["shopify", "facebook", "instagram", "social commerce", "meta"]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "setup"
---

You can connect your Shopify store to Facebook and Instagram and start selling directly on both platforms in under an hour. Products sync automatically from Shopify, orders come back into your Shopify admin, and customers can browse and buy without leaving the apps. This guide covers every step from installing the app to tagging your first product in an Instagram post.

---

## What You Need Before You Start

Before opening Shopify, confirm you have the following:

- A **Shopify store** with at least one published product
- A **Facebook Business Manager account** (business.facebook.com) — not a personal account
- A **Facebook Page** connected to your Business Manager
- An **Instagram Professional account** (Business or Creator) linked to your Facebook Page
- Your products must comply with [Meta's Commerce Policies](https://www.facebook.com/policies/commerce/) — covered later in this guide

If your Instagram account is personal, go to Instagram settings and switch it to a Professional account before starting.

---

## Step 1: Install the Facebook & Instagram App on Shopify

1. Log in to your **Shopify admin**
2. Go to **Apps** in the left sidebar
3. Click **Shopify App Store**
4. Search for **"Facebook & Instagram"** — the official app is published by Meta
5. Click **Install**
6. Review the permissions and click **Install** again to confirm

The app will appear in your Shopify admin under **Sales Channels** in the left sidebar.

### What the App Does

The Facebook & Instagram app acts as a bridge between your Shopify product catalogue and Meta's Commerce Manager. It syncs products, inventory, and prices in near real-time. It also handles the Meta Pixel installation and Facebook Conversions API setup.

---

## Step 2: Connect Your Facebook Business Manager Account

After installation, the app walks you through a setup flow:

1. Click **Facebook & Instagram** in your sales channels sidebar
2. Click **Get started** on the overview page
3. Click **Connect account**
4. You will be redirected to Facebook — log in with the account that has admin access to your Business Manager
5. Select the **Business Manager** you want to use
6. Grant the requested permissions — these allow Shopify to manage your catalogue and pixel

**Important:** You must be an **admin** of the Business Manager, not just an employee or advertiser. If you see a "permissions" error, check your Business Manager role at business.facebook.com/settings.

---

## Step 3: Set Up Commerce Manager

Commerce Manager is Meta's tool for managing your Facebook and Instagram shop catalogue. The Shopify app creates or connects a Commerce Manager account automatically.

During setup, you will be asked to:

1. **Select or create a Commerce Manager account** — if you have an existing one, connect it. If not, the app creates one.
2. **Accept Meta's Merchant Agreement** — required to enable shopping features
3. **Set your payout method** — only needed if you want Instagram native checkout (US only). For most merchants using Shopify checkout, skip this.
4. **Choose your checkout method:**
   - **Checkout on Instagram** — customers complete purchase inside Instagram (US only, requires Instagram Checkout approval)
   - **Checkout on your website** — customers tap a product and are redirected to your Shopify store. This is the default and works everywhere.

For most Shopify merchants outside the US, you will use **checkout on website**. This is simpler, keeps your order data in Shopify, and does not require extra approval.

---

## Step 4: Sync Your Shopify Products to the Facebook/Instagram Catalogue

Once Commerce Manager is connected, Shopify automatically begins syncing your product catalogue.

1. In the Facebook & Instagram app, go to the **Catalogue** tab
2. You will see your products listed with sync status
3. Products with a green checkmark are approved and live
4. Products with a yellow warning or red X have issues — hover to see the specific reason

### Sync Takes Time

Initial sync can take 15–30 minutes for small catalogues, and up to 24 hours for large ones. Meta also reviews new product listings before approving them. You cannot tag a product in an Instagram post until it is approved in Commerce Manager.

### Fixing Sync Issues

Common reasons a product fails to sync:

- **Missing price** — every product must have a price. Free products often fail.
- **No available inventory** — out-of-stock products may not sync.
- **Missing product image** — products need at least one image that meets Meta's requirements (minimum 500x500px, no overlay text covering more than 20% of the image).
- **Prohibited category** — covered later in this guide.

---

## Step 5: Set Up Your Facebook Shop Tab

The Facebook Shop tab lets people browse your products directly on your Facebook Page.

1. Go to your **Facebook Page**
2. Click **Edit Page** (or page settings, depending on your Facebook version)
3. Look for **Shop** in the tab list — if it is not visible, go to **Settings > Templates and Tabs > Add a Tab > Shop**
4. Once the tab is added, your synced products will appear there automatically

Meta may review your shop before making it publicly visible. This usually takes 24–48 hours for new shops. You will receive a notification in your Business Manager when approved.

---

## Step 6: Enable Instagram Shopping

1. Go to your **Instagram Professional Account** settings
2. Tap **Business** (or **Creator**) > **Shopping**
3. Connect to the Commerce Manager account you set up in Shopify
4. Submit your account for review

Instagram Shopping review typically takes 2–5 business days. Instagram will notify you via the app and email when your account is approved.

**Account eligibility requirements:**

- Account must comply with Meta's commerce and community policies
- Your domain must be verified in Business Manager
- You must have a Facebook Page linked to your Instagram account
- Your account must be in a supported country

---

## Step 7: Tag Products in Instagram Posts and Stories

Once Instagram Shopping is approved:

**In a post:**

1. Create a new Instagram post as normal
2. After adding your photo/video, tap **Tag products**
3. Tap the item in the image where you want the product tag to appear
4. Search for the product from your synced catalogue
5. Select it and post

**In Stories:**

1. Create a Story
2. Tap the sticker icon
3. Select the **Product** sticker
4. Search and select the product
5. Position the sticker and post

Tagged products show a shopping bag icon. Followers tap it to see the product name and price, then tap again to go to your Shopify store checkout.

**Reels:** Product tagging is also available in Reels — use the same Tag products step during editing.

---

## Step 8: Install the Meta Pixel

The Meta Pixel is a tracking snippet that records visitor actions on your Shopify store — page views, add-to-cart events, purchases. It is essential for running Facebook and Instagram ads and for retargeting.

The Facebook & Instagram Shopify app installs the pixel automatically during setup. To verify:

1. In the app, go to **Settings > Data Sharing**
2. You should see your Pixel ID listed as connected
3. Set the sharing level to **Maximum** to enable Conversions API alongside the pixel

**To verify the pixel is firing:**

1. Install the [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper) Chrome extension
2. Visit your Shopify store
3. Click the extension icon — it should show pixel events firing on page load

If the pixel is not firing, go back to the Facebook & Instagram app and re-run the setup flow.

---

## Checkout Options: Instagram Checkout vs Shopify Checkout

| Feature               | Instagram Checkout         | Shopify Checkout   |
| --------------------- | -------------------------- | ------------------ |
| Availability          | US only                    | Global             |
| Where customer pays   | Inside Instagram           | Your Shopify store |
| Order data in Shopify | Partial sync               | Full               |
| Approval required     | Yes (separate application) | No                 |
| Selling fees          | Meta charges a fee         | None from Meta     |

For most merchants, **Shopify checkout** is simpler and gives you full control of order data, customer emails, and post-purchase flows. Instagram Checkout makes sense only if your audience is heavily US-based and you want a fully native experience.

---

## Common Errors and How to Fix Them

**"Your account is not eligible for shopping"**
This usually means your Instagram account is too new, has violated a policy, or is in an unsupported country. Check your Business Manager for specific policy violations. Accounts under 30 days old are sometimes flagged.

**"Product not approved" or stuck in review**
Check your product listings in Commerce Manager for specific flags. Common issues: restricted category, image violations, missing required fields. Fix the issue in Shopify (the change syncs automatically) and re-submit for review.

**Catalogue not syncing**
Disconnect and reconnect the Facebook & Instagram app in Shopify. This forces a full resync. Make sure your Shopify store is password-protected (not in maintenance mode) — Meta cannot crawl a password-locked store.

**Instagram Shopping tab not showing in account settings**
Your account may not meet eligibility requirements, or you may be in a country where Instagram Shopping is not yet supported. Check Meta's list of supported countries in their Commerce Manager help centre.

---

## Products NOT Allowed on Meta Shops

Meta prohibits certain product types from being sold via Facebook and Instagram Shops. These include:

- Firearms, weapons, or ammunition
- Drugs or drug paraphernalia
- Tobacco and related products
- Adult content or services
- Gambling products
- Counterfeit goods
- Hazardous materials

Some categories (like supplements, alcohol in certain regions, and medical devices) are restricted and require approval. If your products fall into any grey area, review Meta's full Commerce Policy before investing time in setup.

---

## Tips for Organic Social Selling

Setting up the integration is only the start. These practices improve organic (non-paid) performance:

- **Tag products consistently.** Every product-related post and Reel should have product tags. This compounds over time.
- **Use carousel posts** — they get more engagement and allow tagging multiple products per post.
- **Post behind-the-scenes content** — how products are made, packaged, or used. This content performs better organically than straight product photos.
- **Use Instagram Stories daily.** They keep your account visible in followers' feeds and allow direct product sticker links.
- **Respond to every DM and comment** within the first hour — Instagram's algorithm rewards accounts with high engagement rates.

For tracking how your social traffic converts, set up Google Analytics or use Shopify's built-in analytics. The [best free analytics tools for Shopify merchants](/blog/best-free-analytics-tools-shopify-merchants-2026) guide covers your options.

Once your shop is live on social, consider setting up email capture to convert social visitors into subscribers. [Setting up email marketing with free tools](/blog/how-to-set-up-email-marketing-shopify-free-tools-2026) covers how to do that without paying for an email platform in the early stages.

If you are still completing your initial store setup, the [complete Shopify store setup guide](/blog/shopify-store-setup-guide-beginners-2026) covers the full foundation before you connect any sales channels.

---

## FAQ

### Do I need a Facebook ad account to set up a Facebook Shop?

No. A Facebook Shop is separate from Facebook ads. You need a Facebook Page and a Business Manager account, but you do not need to run ads. You can set up the shop and use it organically.

### Can I use Facebook/Instagram Shopping from any country?

Facebook Shop availability is broad, but Instagram Shopping and Instagram Checkout are restricted to certain countries. Check Meta's current list of supported countries in their Help Centre before starting.

### How long does product approval take on Meta?

Most products are approved within 24 hours. New seller accounts may take 2–5 business days. If a product is stuck in review beyond 7 days, contact Meta Business Support directly through Business Manager.

### Will my Shopify inventory update automatically on Facebook/Instagram?

Yes. When a product sells on Shopify, the inventory count updates across all connected sales channels, including Facebook and Instagram. This sync happens in near real-time.

### Can I have different prices on Facebook Shop vs my Shopify store?

No. The Facebook & Instagram app syncs your Shopify prices directly. You cannot set separate prices per channel without using a third-party app or product variants with channel-specific logic.

### What happens to orders placed through Facebook/Instagram?

If you are using Shopify checkout (the default for most merchants), orders appear in your Shopify admin exactly like any other order. You fulfil them from Shopify. Customer emails, tracking updates, and refunds all work through Shopify's normal flow.

### Does setting up a Facebook Shop affect my Shopify SEO?

No. The Facebook & Instagram integration is a sales channel connection. It does not change your Shopify storefront, URLs, or any SEO settings.
