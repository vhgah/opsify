---
title: "How to Set Up Shipping Rates and Zones on Shopify for Beginners 2026"
description: "Learn how to configure Shopify shipping zones, flat rates, free shipping thresholds, calculated carrier rates, and local delivery options step by step in 2026."
pubDatetime: 2026-02-19T12:00:00Z
modDatetime: 2026-02-19T12:00:00Z
author: "Editorial Team"
slug: "how-to-set-up-shipping-rates-zones-shopify-beginners-2026"
featured: false
draft: false
tags: ["shopify", "shipping", "shipping rates", "shipping zones", "store setup"]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "setup"
---

Shopify shipping setup controls what your customers pay for delivery and which countries you sell to. Get it wrong and you'll either lose money on every order or scare customers away at checkout. This guide covers shipping zones, flat rates, free shipping thresholds, calculated carrier rates, local delivery, and the most common beginner mistakes.

Start by completing the [Shopify store setup guide](/blog/shopify-store-setup-guide-beginners-2026) if you haven't configured your store basics yet. Shipping works alongside your payment and checkout setup — refer to the [Shopify payments and checkout setup guide](/blog/how-to-set-up-shopify-payments-checkout-2026) for the full picture. Once shipping is configured, run through [the pre-launch checklist](/blog/how-to-prepare-shopify-store-for-first-sales-2026) before going live.

---

## Understanding Shipping Zones vs Shipping Profiles

Before touching any settings, understand these two concepts.

### Shipping Zones

A shipping zone is a group of countries or regions that share the same shipping rates. For example:

- "Domestic" zone → United States → flat rate $5.99
- "International" zone → Canada, UK, Australia → flat rate $19.99

Every shipping rate must belong to a zone. You can create as many zones as you need.

### Shipping Profiles

A shipping profile is a set of zones and rates that apply to specific products. Shopify has one **General shipping profile** by default — this applies to all products unless you create custom profiles.

**When to use custom profiles:**

- You sell oversized items that cost more to ship than standard products
- You stock items from multiple warehouses in different locations
- Some products are digital (no shipping) and others are physical
- You want different rates for different product categories

For most new stores, the General shipping profile is all you need. Add custom profiles when your catalog becomes more complex.

---

## How to Access Shipping Settings in Shopify

1. Go to **Shopify Admin > Settings > Shipping and delivery**
2. Under "Shipping," click **Manage rates** next to the General shipping profile (or the profile you want to edit)
3. You'll see your shipping zones and the rates within each zone

All shipping rate configuration happens on this screen.

---

## Setting Up Domestic Shipping

Domestic shipping covers orders within your home country. This is where most of your orders will come from.

### Option 1: Flat Rate

A flat rate charges the same amount for every order, regardless of weight or cart value.

1. In your shipping profile, under your domestic zone, click **Add rate**
2. Name: "Standard Shipping" (or whatever you want customers to see)
3. Rate: Enter the dollar amount (e.g., $5.99)
4. Leave weight conditions empty for a true flat rate
5. Save

**When to use flat rate:** Works well when your products are similar in weight and size, or when you want simplicity. The risk: if you sell heavy items alongside light ones, a flat rate will either undercharge you on heavy orders or overcharge customers on light ones.

### Option 2: Free Shipping Threshold

Offer free shipping on orders above a certain value — one of the most effective ways to increase average order value.

1. Click **Add rate**
2. Name: "Free Shipping"
3. Rate: $0.00
4. Under "Add conditions," select **Based on order price**
5. Minimum order price: enter your threshold (e.g., $50)
6. Save

**Important:** Also add a paid rate for orders below the threshold. Otherwise, all orders ship free regardless of cart value.

Recommended setup: Flat rate $5.99 for orders under $50 + Free shipping for orders $50 and over. The threshold gives customers a reason to add one more item.

### Option 3: Free Shipping for All

If your margins support it, free shipping on everything removes friction at checkout and reduces cart abandonment.

1. Click **Add rate**
2. Name: "Free Shipping"
3. Rate: $0.00
4. No conditions
5. Save

Build your shipping cost into your product price. If your shipping costs $6 per order on average, raise prices by $6–$8 and offer free shipping. Most customers prefer "Free shipping" over "Price $X + $6 shipping" even when the total is the same.

---

## Setting Up International Shipping

Selling internationally adds complexity but opens up your customer base. Here's how to approach it.

### Creating an International Zone

1. In your shipping profile, scroll below your domestic zone
2. Click **Create shipping zone**
3. Name it (e.g., "Europe," "Canada," "Rest of World")
4. Select the countries or regions to include
5. Add rates to this zone

For a simple international setup, create two zones: "Canada" and "Rest of World." Canada often has different rates than other countries due to proximity (if you're US-based).

### International Rate Strategy

**Flat rate international:** Easiest to manage. Set a single flat rate that covers your average international shipping cost. You'll lose a little on heavy orders and gain a little on light ones.

**Weight-based rates:** More accurate. You set different rates for different weight ranges (e.g., 0–0.5 kg = $12, 0.5–2 kg = $18). Requires your products to have correct weights entered.

**Calculated rates:** Shopify fetches real-time carrier rates based on product weight and destination. Requires Shopify Shipping or a carrier-calculated rates add-on (available on Shopify plan and above).

### When to Disable International Shipping

If you're not ready to handle international orders — customs forms, higher return rates, longer delivery windows — simply don't create international zones. Orders from countries without a zone assigned will see no shipping options at checkout and cannot complete purchase.

This is not a great UX, but it's better than accepting international orders you can't fulfill. Consider adding a banner or notice explaining that you ship domestically only.

---

## Calculated Carrier Rates (USPS, UPS, FedEx, Canada Post)

Calculated rates pull real-time shipping prices directly from carriers at checkout. Customers see the actual cost based on their address, the package weight, and dimensions.

### Requirements

- Calculated rates are available on **Shopify plan** and above (not on Basic by default)
- Basic plan users can add calculated rates through Shopify Shipping or by paying for the carrier-calculated rates add-on ($20/month)
- Your products must have accurate weights entered

### How to Add Calculated Rates

1. In your shipping zone, click **Add rate**
2. Select **Use carrier or app to calculate rates**
3. Choose your carrier (USPS, UPS, FedEx, Canada Post)
4. Select which services to offer (e.g., USPS Priority Mail, USPS Ground Advantage)
5. Optionally add a handling fee (flat or percentage) to cover packaging costs
6. Save

**Tip:** Show 2–3 service levels to give customers a choice (e.g., Ground = cheapest, Priority = 2-day). Don't show every available service — too many options create decision fatigue.

### Shopify Shipping Discounts

Shopify negotiates discounted rates with USPS, UPS, DHL Express, and Canada Post. These discounts are available to all Shopify merchants and are applied automatically when you use Shopify Shipping. Discounts vary by plan — higher plans get better rates.

---

## Local Delivery and Local Pickup Options

If you run a physical store or serve a local area, Shopify supports two options:

### Local Pickup

Customers select "Pick up in store" at checkout and collect their order themselves. No shipping fee.

1. Go to **Settings > Shipping and delivery > Local pickup**
2. Toggle on your store location
3. Set an expected pickup time (e.g., "Usually ready in 2 hours")
4. Add pickup instructions if needed

### Local Delivery

Customers in a defined radius get a delivery option (free or paid) instead of standard shipping.

1. Go to **Settings > Shipping and delivery > Local delivery**
2. Select your location and toggle on local delivery
3. Set a delivery radius (distance from your location) or enter specific zip/postal codes
4. Set your delivery fee ($0 for free local delivery, or a flat fee)
5. Set a minimum order value if desired
6. Add delivery instructions

Local delivery and local pickup appear as separate options at checkout alongside any standard shipping rates.

---

## Product Weight Setup: Why It Matters

If you use weight-based or calculated shipping rates, every product needs an accurate weight.

### How to Set Product Weights

1. Go to **Products > [Product Name]**
2. Scroll to the **Shipping** section
3. Enter the weight in your preferred unit (lbs, kg, oz, g)
4. Enter the weight of the product only, not the packaging — you'll account for packaging separately

**Entering weight correctly:** If your product is 0.8 lbs, enter 0.8 lbs. If you're unsure, weigh the item with a kitchen scale. Inaccurate weights lead to undercharging on heavy orders.

For products with variants (different sizes or configurations), you can set different weights per variant in the variant editor.

---

## Packaging Dimensions Setup

For box-rate or dimensional weight shipping, packaging dimensions affect the price.

1. Go to **Settings > Shipping and delivery > Packages**
2. Click **Add package**
3. Enter the package name (e.g., "Small Box"), dimensions (L x W x H), and empty box weight
4. Set this package as default if it's your most commonly used box

Shopify uses this information when calculating carrier rates. If you use multiple box sizes, add each one. The system will use the most appropriate package for the items in the cart.

---

## Shipping Label Printing Through Shopify Shipping

Shopify Shipping lets you buy and print shipping labels directly from the Shopify Admin. No third-party shipping software needed.

### How it works

1. When an order comes in, go to **Orders > [Order]**
2. Click **Create shipping label**
3. Confirm the shipping address and package details
4. Select a carrier and service level
5. Purchase the label — cost is charged to your Shopify billing
6. Print the label (4x6" thermal printer or standard printer)

Labels are automatically marked as fulfilled in Shopify and customers receive tracking number notifications.

**Supported carriers:** USPS, UPS, DHL Express (US); Canada Post (Canada); Sendle (Australia).

**Cost:** You pay discounted carrier rates (passed through from Shopify's carrier agreements). No markup, no subscription fee for the label printing feature itself.

---

## Common Shipping Mistakes Beginners Make

**Forgetting to set shipping on digital products.** If you sell digital downloads, those products should not have shipping enabled. In the product editor, uncheck "This is a physical product" under Shipping. Otherwise, customers are prompted for a shipping address and rate at checkout — for a product that has no physical delivery.

**Inconsistent zone coverage.** If a customer's country isn't included in any shipping zone, they'll see no shipping options at checkout and can't complete their order. They'll just abandon. Regularly review your zone coverage, especially if you're seeing traffic from countries not in your zones.

**Not testing checkout from different countries.** Use Shopify's order simulation or ask someone in another country to attempt checkout. Verify that the correct rates appear.

**Setting weights to zero.** Products default to 0 weight in Shopify. If you're using weight-based or calculated rates, zero-weight products will calculate $0 shipping or cause errors. Always enter actual weights.

**No free shipping incentive.** Offering free shipping above a threshold is consistently one of the highest-converting tactics in e-commerce. If you're not doing this, you're likely leaving money on the table.

**Using a flat rate too low.** If your flat rate doesn't cover your actual shipping costs, you lose money on every order. Calculate your average shipping cost and set the flat rate at or above that amount.

---

## FAQ

### What is the difference between a shipping zone and a shipping profile in Shopify?

A shipping zone is a group of countries/regions with rates attached to them. A shipping profile is a container that holds zones and rates, and can be applied to specific products. The General profile applies to all products by default. Custom profiles apply to specific products you assign to them.

### Do I need the Shopify plan to get calculated carrier rates?

By default, yes — calculated rates require the Shopify plan or higher. Basic plan users can access calculated rates through Shopify Shipping (which is built in) or by adding the carrier-calculated rates feature for an additional monthly fee. Check Shopify's current plan pages for exact pricing.

### How do I offer free shipping without losing money?

The most reliable approach is to build shipping costs into your product prices and advertise free shipping as a feature. If your average order ships for $6, add $6–$8 to your product prices and offer free shipping on everything. Alternatively, set a free shipping threshold at a cart value where your margins comfortably absorb the shipping cost.

### What happens if a customer's country isn't in any of my shipping zones?

They will not see any shipping options at checkout and won't be able to complete their purchase. The checkout will show no available shipping methods and the customer cannot proceed. Add a "Rest of World" zone if you're willing to ship anywhere, or add targeted zones for the specific countries you want to ship to.

### Can I set up different shipping rates for different products?

Yes, using custom shipping profiles. Assign heavy or oversized products to a custom profile with higher rates. Assign standard products to the General profile. Products can only belong to one profile at a time.

### How do I handle shipping for digital products on Shopify?

In the product editor, scroll to the Shipping section and uncheck "This is a physical product." This removes all shipping requirements from the product. Customers won't be asked for a shipping address or shown shipping rates when purchasing digital-only items.

### What is Shopify Shipping and is it free to use?

Shopify Shipping is a built-in feature that lets you buy and print carrier labels at discounted rates directly from your Shopify admin. It is included with all Shopify plans at no extra cost. You only pay for the labels you purchase, which are billed at discounted carrier rates. No subscription or third-party software is required.
