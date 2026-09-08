---
title: "How to Set Up Shopify Payments and Checkout in 2026"
description: "Set up Shopify Payments to accept cards, Apple Pay, and Google Pay with 0% transaction fees. Step-by-step guide including test mode, checkout customization, and disputes."
pubDatetime: 2026-02-12T12:00:00Z
modDatetime: 2026-02-12T12:00:00Z
author: "Editorial Team"
slug: "how-to-set-up-shopify-payments-checkout-2026"
featured: false
draft: false
tags:
  [
    "shopify payments",
    "checkout",
    "shopify setup",
    "payment gateway",
    "shop pay",
  ]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "payments"
---

Shopify Payments is Shopify's built-in payment processor. Activating it lets you accept credit cards, Apple Pay, Google Pay, and Shop Pay directly — no third-party gateway required — and eliminates the extra transaction fee Shopify charges on external processors. This guide covers setup, checkout customization, test mode, and common issues.

Before setting up payments, make sure your store foundation is in place. If you haven't done that yet, start with the [Shopify store setup guide for beginners](/blog/shopify-store-setup-guide-beginners-2026).

---

## What Is Shopify Payments and Which Countries Support It?

Shopify Payments is a payment gateway built directly into Shopify. It's powered by Stripe on the backend.

**Supported countries (as of 2026):**
United States, Canada, United Kingdom, Australia, New Zealand, Ireland, Austria, Belgium, Czechia, Denmark, Finland, France, Germany, Hong Kong SAR, Italy, Japan, Netherlands, Portugal, Romania, Singapore, Spain, Sweden, Switzerland.

If your country is not on this list, you'll need a third-party gateway such as PayPal or Stripe. Both integrate easily with Shopify.

**Why use Shopify Payments over a third-party gateway?**

|                       | Shopify Payments           | Third-Party Gateway       |
| --------------------- | -------------------------- | ------------------------- |
| Transaction fee       | 0%                         | 0.5% – 2% per order       |
| Setup                 | Built-in, no extra account | Separate account required |
| Payouts               | Directly to your bank      | Via gateway then bank     |
| Chargeback management | Inside Shopify admin       | External dashboard        |

On a store doing $10,000/month in sales, a 1% transaction fee costs $1,200 per year. Shopify Payments eliminates that cost entirely.

---

## How to Activate Shopify Payments

### Step 1: Open Payment Settings

1. Go to your Shopify admin.
2. Click **Settings → Payments**.
3. Under **Shopify Payments**, click **Complete account setup** (or **Activate Shopify Payments** if you haven't started).

### Step 2: Enter Business Details

Fill in:

- **Business type**: individual/sole trader or registered business.
- **Legal business name**: must match your bank account and government ID.
- **Business address**: your registered or operating address.
- **Business category**: choose the closest match to what you sell.
- **Business website**: your Shopify store URL.

### Step 3: Add Your Bank Account

Shopify Payments pays out to your bank account on a rolling schedule (typically 2–3 business days after a sale in the US, longer in some countries).

Enter:

- Routing number (US) or sort code (UK)
- Account number

Double-check these. Incorrect bank details delay payouts and require support to fix.

### Step 4: Identity Verification

Shopify (via Stripe) requires ID verification to comply with financial regulations.

You'll be asked to upload:

- A government-issued photo ID (passport or driver's licence)
- Sometimes: proof of address or business registration documents

Verification typically completes within minutes but can take up to 24 hours. Your store can still take payments while verification is pending — Shopify holds the funds until verified.

---

## Supported Payment Methods After Activation

Once Shopify Payments is active, the following methods are enabled automatically:

- **Visa, Mastercard, American Express, Discover**: standard card payments.
- **Shop Pay**: Shopify's accelerated checkout. Customers who've used Shop Pay anywhere can check out in two taps.
- **Apple Pay**: available to Safari users on iPhone, iPad, and Mac.
- **Google Pay**: available to Chrome users on Android and desktop.
- **PayPal Express**: can be added as an additional method alongside Shopify Payments.

To enable or disable individual methods, go to **Settings → Payments → Shopify Payments → Manage**.

---

## Transaction Fees: Shopify Payments vs Third-Party Gateways

Shopify charges a transaction fee on every order if you use a third-party payment gateway. The fee depends on your plan:

| Shopify Plan | Transaction Fee (Third-Party) | Transaction Fee (Shopify Payments) |
| ------------ | ----------------------------- | ---------------------------------- |
| Basic        | 2%                            | 0%                                 |
| Shopify      | 1%                            | 0%                                 |
| Advanced     | 0.5%                          | 0%                                 |

Credit card processing rates still apply regardless of which gateway you use. With Shopify Payments on Basic, the online card rate is typically 2.9% + 30¢ per transaction (US rates; other countries vary).

**Bottom line:** use Shopify Payments if it's available in your country. The 2% transaction fee saving on Basic alone pays for a plan upgrade within months.

---

## Alternative Payment Gateways

If Shopify Payments is not available in your country, or you need a specific gateway for your market:

### PayPal

- Available in 200+ countries.
- Customers can pay with their PayPal balance, linked card, or bank account.
- To add: **Settings → Payments → PayPal** → follow the connection flow.
- Note: PayPal Express Checkout can be added alongside Shopify Payments — they're not mutually exclusive.

### Stripe

- Available in 40+ countries not covered by Shopify Payments.
- Add via **Settings → Payments → Add payment methods → Stripe**.
- Transaction fee from Shopify still applies (see table above).

### Manual Payment Methods

For B2B or wholesale stores, add manual methods (bank transfer, money order, net terms) at **Settings → Payments → Manual payment methods → Add manual payment method**.

---

## Customizing Your Checkout

Shopify's checkout is hosted on `checkout.shopify.com` (or your custom domain). You can customize its appearance without code.

### Branding

1. Go to **Settings → Checkout**.
2. Click **Customize checkout** to open the visual checkout editor.
3. Upload your logo (appears at the top of checkout pages).
4. Set background color, accent color, and button color to match your brand.
5. Choose a form field background: white or slightly off-white is cleanest.

### Form Fields

Under **Customer information**, you can configure:

- **Full name**: first + last (two fields) or single full-name field.
- **Company name**: show, hide, or make optional.
- **Phone number**: required, optional, or hidden.

Hiding unnecessary fields reduces friction. If you don't ship to addresses that need a phone number, hide it.

### Order Processing

- **Email marketing opt-in**: show or hide the newsletter checkbox.
- **Tipping**: enable tipping at checkout (useful for service-based stores).
- **Order notes**: allow customers to leave a note on their order.

---

## Test Mode: How to Test Your Checkout

Always test your checkout before going live or after making changes.

### Enable Test Mode

1. Go to **Settings → Payments → Shopify Payments → Manage**.
2. Scroll to **Test mode** and toggle it on.
3. A yellow banner appears in your admin to remind you test mode is active.

### Place a Test Order

Use Shopify's test card details:

- **Card number**: `4242 4242 4242 4242`
- **Expiry**: any future date (e.g. `04/28`)
- **CVV**: any 3 digits (e.g. `123`)
- **Name**: any name
- **Address**: any address

Complete the checkout as a customer would. Check:

- The order appears in **Orders** in your admin.
- The confirmation email is sent correctly.
- Any automated workflows (abandoned cart, fulfillment emails) trigger as expected.

### Disable Test Mode

After testing, go back to **Settings → Payments → Shopify Payments → Manage** and toggle off test mode. Real payments cannot be taken while test mode is on.

---

## Checkout Conversion Tips

A checkout page that loses customers is a fixable problem. These changes require no apps.

### Enable Shop Pay

Shop Pay stores customer details securely. Returning customers (from any Shopify store) can complete checkout with a single tap. Shopify reports Shop Pay consistently achieves higher conversion rates than standard checkout.

Enable it at: **Settings → Payments → Shopify Payments → Manage → Accelerated checkouts → Shop Pay**.

### Reduce Form Fields

Every extra field is a reason to abandon. Hide company name and phone number if you don't need them. Fewer fields = less friction.

### Add Trust at Checkout

The checkout editor allows you to add a **custom content block** above the "Pay now" button. Use it to place:

- A short trust statement ("Secure checkout — your data is encrypted")
- Return policy reminder ("Free returns within 30 days")

For a full strategy on trust signals and policies, see [how to add trust badges and legal pages to Shopify](/blog/how-to-add-trust-badges-policies-legal-pages-shopify-2026).

### Reduce Cart Abandonment

Even with an optimized checkout, some visitors will leave mid-purchase. Set up automated recovery emails to bring them back. See [how to set up abandoned cart recovery on Shopify](/blog/how-to-set-up-abandoned-cart-recovery-free-shopify-2026) for a step-by-step walkthrough.

---

## Handling Refunds Through Shopify Payments

To issue a refund:

1. Go to **Orders** and open the relevant order.
2. Click **Refund**.
3. Enter the quantity to refund per line item, or enter a custom refund amount.
4. Choose whether to restock the item.
5. Click **Refund**.

The refund goes back to the customer's original payment method. Processing time: 5–10 business days for cards, faster for Shop Pay. Shopify Payments does not return the credit card processing fee on refunds.

---

## Handling Disputes and Chargebacks

A chargeback is when a customer disputes a charge with their bank. When this happens:

1. You receive a notification in your Shopify admin and by email.
2. Go to **Payments → Disputes**.
3. Shopify provides a pre-filled response form. Add supporting evidence: order confirmation, tracking number, delivery proof, communication history.
4. Submit before the response deadline (typically 7–21 days depending on the card network).

Winning a chargeback requires clear evidence. Shipping confirmation emails and tracking numbers are your strongest assets. For physical products, always use tracked shipping for orders above $50.

---

## FAQ

### Is Shopify Payments free to use?

There are no monthly fees for Shopify Payments beyond your Shopify plan. You pay credit card processing rates on each transaction (e.g. 2.9% + 30¢ per transaction on the Basic plan in the US). There's no extra transaction fee on top — unlike third-party gateways.

### What happens if my Shopify Payments account is suspended?

Shopify (via Stripe) can place a hold on payouts or suspend accounts for selling prohibited products, unusual sales patterns, or failed ID verification. If suspended, you'll receive an email with the reason. Resolve the issue and contact Shopify support to reinstate the account. Avoid selling restricted product categories — these are listed in Shopify's Terms of Service.

### Can I use PayPal and Shopify Payments at the same time?

Yes. PayPal Express Checkout can run alongside Shopify Payments. Customers choose at checkout. Go to **Settings → Payments → PayPal** to connect your PayPal Business account.

### How long does Shopify Payments take to pay out?

In the US, payouts typically arrive 2 business days after the sale. In the UK and Australia, it's usually 3 business days. New accounts may have longer initial payout periods (up to 7 days) while the account is being verified.

### Does Shopify Payments support multiple currencies?

Yes. Enable multi-currency at **Settings → Payments → Shopify Payments → Manage → Countries/regions**. Customers see prices in their local currency. Payouts are converted to your bank's currency at the current exchange rate minus a small conversion fee.

### What card types does Shopify Payments accept?

Visa, Mastercard, American Express, Discover, Diners Club, and JCB. Apple Pay and Google Pay are also accepted and use the customer's linked card on those platforms.

### Can I customize the checkout page design on Shopify Basic?

Yes. Basic plan merchants can access the checkout editor and change the logo, colors, and fonts. Advanced customization using checkout extensibility (custom UI components, post-purchase pages) is available on Shopify Plus.
