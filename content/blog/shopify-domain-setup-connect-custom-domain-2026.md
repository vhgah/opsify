---
title: "Shopify Domain Setup: How to Connect a Custom Domain in 2026"
description: "Step-by-step guide to connecting a custom domain to Shopify in 2026, covering GoDaddy, Namecheap, Cloudflare, DNS records, SSL, and email forwarding."
pubDatetime: 2026-02-19T08:00:00Z
modDatetime: 2026-02-19T08:00:00Z
author: "Editorial Team"
slug: "shopify-domain-setup-connect-custom-domain-2026"
featured: false
draft: false
tags: ["shopify", "domain", "DNS", "custom domain", "store setup"]
ogImage: ""
canonicalURL: ""
schemaType: "HowTo"
platform: ["shopify"]
topic: "setup"
---

Connecting a custom domain to Shopify replaces your default `mystore.myshopify.com` URL with something like `www.yourstore.com`. This matters for trust, branding, and SEO — customers are far less likely to trust a `.myshopify.com` URL, and Google treats your domain as the canonical identity of your site. This guide walks through every step: buying a domain, connecting it from any major registrar, understanding DNS records, and handling SSL.

If you're just getting started, work through the [complete Shopify store setup guide](/blog/shopify-store-setup-guide-beginners-2026) first. Once your domain is connected, refer to the [Shopify SEO on-page setup guide](/blog/shopify-seo-beginners-on-page-setup-guide-2026) to make sure your site is indexed correctly.

---

## Why a Custom Domain Matters

**Trust:** Shoppers see your URL before they buy. `www.nativebloom.com` looks professional. `nativebloom.myshopify.com` signals that the store is new or unfinished.

**Branding:** Your domain is in every email, social post, and ad. A branded domain is more memorable and reinforces your store's identity.

**SEO:** Google ranks domains, not platforms. All the SEO authority you build over time accrues to your custom domain. If you later migrate your store, your domain comes with you.

**Email:** A custom domain enables professional email forwarding (e.g., `hello@nativebloom.com`), which is necessary for customer support, order confirmations, and marketing.

---

## Option 1: Buy a Domain Through Shopify

Shopify sells domains directly through its admin. This is the simplest option — Shopify handles all DNS configuration automatically.

### How to buy through Shopify

1. Go to **Shopify Admin > Online Store > Domains**
2. Click **Buy new domain**
3. Search for your desired domain name
4. Select a domain (`.com` costs around $11–$14/year)
5. Complete the purchase with your Shopify billing info

DNS is configured automatically. Your store is live on the new domain within minutes.

### Pros

- Zero DNS configuration needed
- Automatic SSL provisioning
- Renewal handled through Shopify billing
- No third-party account required

### Cons

- Limited TLD options compared to dedicated registrars
- Slightly higher pricing than registrars like Namecheap
- Harder to move the domain away from Shopify if you switch platforms
- No advanced DNS management options

**Verdict:** Best for beginners who want no technical hassle. If you already own a domain or want more control, use Option 2.

---

## Option 2: Connect an Existing Domain from a Third-Party Registrar

If you already own a domain (or prefer to buy from a registrar like GoDaddy, Namecheap, or Cloudflare), you'll connect it manually by updating DNS records.

### Step 1: Get Your Shopify DNS Values

1. In Shopify Admin, go to **Online Store > Domains**
2. Click **Connect existing domain**
3. Enter your domain name (e.g., `yourstore.com`)
4. Click **Next**
5. Shopify will display the DNS values you need to enter at your registrar:
   - **A record:** Points your root domain (`@` or `yourstore.com`) to Shopify's IP: `23.227.38.65`
   - **CNAME record:** Points `www` to `shops.myshopify.com`

Keep this screen open while you update your DNS settings.

### Step 2: Update DNS at Your Registrar

The steps vary slightly by registrar but the logic is the same.

#### GoDaddy

1. Log in to GoDaddy, go to **My Products > Domains**
2. Click **DNS** next to your domain
3. Under "Records," find the existing **A record** for `@` and edit it: change the value to `23.227.38.65`
4. Find the **CNAME record** for `www` and edit it: change the value to `shops.myshopify.com`
5. Save changes

#### Namecheap

1. Log in, go to **Domain List > Manage** for your domain
2. Click **Advanced DNS**
3. Edit the A record for `@` → value: `23.227.38.65`
4. Edit the CNAME record for `www` → value: `shops.myshopify.com`
5. Save all changes

#### Google Domains (now Squarespace Domains)

1. Go to **DNS > Manage custom records**
2. Edit the A record: Host = `@`, Data = `23.227.38.65`
3. Edit the CNAME: Host = `www`, Data = `shops.myshopify.com`
4. Save

#### Cloudflare

1. Go to your domain's **DNS** tab in Cloudflare
2. Edit the A record: Name = `@` (or your domain), Content = `23.227.38.65`, **Proxy status = DNS only (grey cloud)** — do NOT proxy Shopify through Cloudflare
3. Edit the CNAME: Name = `www`, Content = `shops.myshopify.com`, Proxy = DNS only
4. Save

**Important for Cloudflare users:** Cloudflare's proxy (orange cloud icon) intercepts traffic and can break Shopify's SSL certificate provisioning. Always set records to DNS only (grey cloud) for Shopify domains.

### Step 3: Verify in Shopify

After saving DNS changes, go back to **Shopify Admin > Online Store > Domains** and click **Verify connection**. Shopify will check if the DNS records are pointing correctly.

---

## DNS Records Explained Simply

DNS (Domain Name System) translates human-readable domain names into IP addresses. Two records matter for Shopify:

**A Record**

- What it does: Points your root domain (`yourstore.com`) to an IP address
- Shopify's IP: `23.227.38.65`
- This is the main record. Without it, visitors typing `yourstore.com` won't reach your store

**CNAME Record**

- What it does: Points a subdomain (like `www`) to another domain name (not an IP)
- Shopify's value: `shops.myshopify.com`
- This ensures `www.yourstore.com` also reaches your store

You do not need MX records or TXT records just to connect Shopify — those are for email. Don't delete existing MX records if you have them; they're unrelated to your store connection.

---

## What to Do If DNS Doesn't Propagate After 48 Hours

DNS propagation — the time it takes for changes to spread across global DNS servers — typically takes 30 minutes to a few hours. Occasionally it can take up to 48 hours.

**If the domain still isn't working after 48 hours:**

1. **Check your records again.** Go to your registrar's DNS settings and confirm the A record points to `23.227.38.65` and the CNAME points to `shops.myshopify.com`. Typos are the most common issue.

2. **Use a DNS checker tool.** Go to [dnschecker.org](https://dnschecker.org) and enter your domain. It shows the current DNS values being returned from global servers. If you see the wrong IP, the records weren't saved correctly.

3. **Clear your browser cache and check from a different device.** Your computer may be serving a cached (old) DNS result.

4. **Check for conflicting records.** Some registrars automatically create A records or CNAME records when a domain is registered. If there are duplicate records, delete the old ones and keep only the Shopify values.

5. **Contact Shopify Support.** If records look correct and 48 hours have passed, contact support through **Shopify Admin > Help Center**. They can check the connection from their end.

---

## Setting the Primary Domain and Redirects

Shopify lets you add multiple domains but designates one as the **primary domain**. All other domains redirect to it.

### Setting the primary domain

1. Go to **Online Store > Domains**
2. Next to your custom domain, click **Set as primary**
3. Your `myshopify.com` domain and any other connected domains will automatically redirect to the primary

**Best practice:** Use `www.yourstore.com` as your primary domain, not the root `yourstore.com`. Shopify's infrastructure handles `www` more reliably, and it's compatible with CDN caching.

### Redirects

Once your custom domain is primary, Shopify automatically:

- Redirects `yourstore.myshopify.com` → `www.yourstore.com`
- Redirects `yourstore.com` → `www.yourstore.com` (if www is primary)

You don't need to configure these manually.

---

## SSL Certificate: How Shopify Handles It

SSL (Secure Sockets Layer) is what puts the padlock icon in the browser bar and enables HTTPS. Without SSL, browsers show a "Not secure" warning — a conversion killer.

Shopify provisions SSL certificates automatically for all connected custom domains using Let's Encrypt. You don't pay extra, and you don't need to configure anything.

**How to check your SSL status:**

1. Go to **Online Store > Domains**
2. Your domain should show a green padlock and "SSL pending" (if just connected) or "SSL active"
3. If SSL is pending for more than 24 hours, it usually means DNS hasn't fully propagated yet

**Common SSL issue:** If you're using Cloudflare with the "Full (strict)" SSL mode and the proxy is enabled, certificate provisioning can fail. Keep Cloudflare in DNS-only mode for Shopify.

---

## Email Forwarding from a Custom Domain

Shopify doesn't provide email hosting. But you can set up email forwarding so emails sent to `hello@yourstore.com` arrive in your personal Gmail or Outlook inbox.

### Option 1: Use Your Registrar's Free Email Forwarding

Most registrars (Namecheap, GoDaddy, Google Domains/Squarespace) offer free email forwarding. You create a forwarding address in your registrar's dashboard and point it to any existing inbox.

1. In your registrar's email/forwarding settings, add a new forward
2. From address: `hello@yourstore.com`
3. Forward to: `yourpersonalemail@gmail.com`
4. Save

Emails to `hello@yourstore.com` land in your Gmail. Replies will show your Gmail address unless you configure Gmail's "Send mail as" feature.

### Option 2: Google Workspace

Google Workspace ($6/month) gives you a full `@yourstore.com` Gmail account. This is the professional setup — use it once your store is generating revenue. It lets you send and receive from `hello@yourstore.com` without any forwarding quirks.

### Option 3: Zoho Mail (Free Tier)

Zoho Mail offers a free plan for up to 5 users with email hosting. Set up takes about 20 minutes and involves adding MX records at your registrar.

---

## Subdomain Setup (e.g., shop.yourdomain.com)

Some store owners prefer to run their Shopify store on a subdomain like `shop.yourdomain.com`, keeping the root domain for a separate website (e.g., a portfolio or blog).

### How to set up a subdomain

1. At your registrar, add a new CNAME record:
   - Name/Host: `shop`
   - Value/Points to: `shops.myshopify.com`
2. In Shopify Admin, go to **Online Store > Domains > Connect existing domain**
3. Enter `shop.yourdomain.com`
4. Verify the connection

**Note:** You do not need to change the A record for the root domain when using a subdomain. The CNAME record for `shop` is separate.

Subdomains are useful but come with an SEO trade-off: content on `shop.yourdomain.com` is treated somewhat independently from `yourdomain.com` in Google's eyes. If building SEO authority is a priority, keep everything on the root or www domain.

---

## Final Checklist Before Going Live

Before you announce your domain to the world, work through [the full pre-launch checklist for your Shopify store](/blog/how-to-prepare-shopify-store-for-first-sales-2026) — it covers domain, payment, shipping, and legal pages. Here's the domain-specific portion:

- [ ] Custom domain connected and verified in Shopify
- [ ] Primary domain set (www preferred)
- [ ] SSL certificate active (green padlock in browser)
- [ ] `myshopify.com` URL redirects to custom domain
- [ ] Email forwarding configured and tested
- [ ] Canonical URL set in Shopify SEO settings (**Online Store > Preferences > Homepage title**)

---

## FAQ

### How long does it take to connect a domain to Shopify?

DNS changes propagate in 30 minutes to 48 hours. Most users see the connection working within 1–4 hours. Buying a domain directly through Shopify is immediate — no DNS configuration needed.

### Can I use Cloudflare with Shopify?

Yes, but with an important caveat: set all Shopify-related DNS records in Cloudflare to **DNS only** (grey cloud, not orange). Enabling Cloudflare's proxy for Shopify can break SSL provisioning and cause checkout issues. You can use Cloudflare for DNS management without the proxy.

### What happens to my myshopify.com URL after connecting a custom domain?

It stays active. Shopify automatically redirects your `.myshopify.com` URL to your primary custom domain. The `.myshopify.com` address is permanent and can't be deleted — it's your store's backend identifier.

### Do I need to pay for SSL separately on Shopify?

No. Shopify includes free SSL certificates for all plans, including free custom domain SSL via Let's Encrypt. There's nothing to configure — SSL activates automatically once DNS propagates.

### Can I connect multiple domains to one Shopify store?

Yes. You can add multiple domains under **Online Store > Domains**. All secondary domains redirect to the primary domain. This is useful if you own multiple TLD variants of your brand name (e.g., `.com`, `.co.uk`, `.net`).

### What is the difference between an A record and a CNAME record?

An A record maps a domain name directly to an IP address (e.g., `yourstore.com` → `23.227.38.65`). A CNAME record maps a domain name to another domain name (e.g., `www.yourstore.com` → `shops.myshopify.com`). Shopify requires both: the A record for the root domain and the CNAME for the `www` subdomain.

### Can I buy a domain elsewhere and still get automatic SSL from Shopify?

Yes. SSL is handled by Shopify regardless of where you bought the domain. As long as your DNS records point correctly to Shopify, SSL is provisioned automatically — usually within a few hours of DNS propagation completing.
