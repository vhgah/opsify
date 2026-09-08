# Overview

**Opsify** (opsify.art) helps new e-commerce sellers set up and launch their first store on Shopify, WooCommerce, or Squarespace. Two product lines under one Next.js app (App Router):

- **Squarespace Toolkit** (`/plugins`, `/templates`, `/toolbox`, `components/ghostplugins/*`) — a plugin/template/toolbox product for Squarespace sites. This was the original "Ghost Plugins" product; the UI/data layer is unchanged, just recategorized under the Opsify brand in nav/copy.
- **Blog** (`/blog`, `/blog/[slug]`, `/blog/tags/[tag]`) — SEO/AI-citation-focused guides for new sellers, covering Shopify (core today), with WooCommerce/Squarespace posts added over time. No CMS/backend: posts are markdown files in `content/blog/*.md`, read at build time via `lib/blog.ts` (fs + `gray-matter` frontmatter parsing, same pattern as the old `lib/sitebuilderreport.ts`). `lib/postSchema.ts` builds real `HowTo`/`FAQPage` JSON-LD by parsing the post's `## Step N` / `## FAQ` markdown structure — don't hand-roll schema elsewhere.

**Post frontmatter** (required unless noted): `title`, `description`, `pubDatetime` (ISO, never future — future-dated posts are filtered out at build time), `modDatetime` (optional), `author`, `slug`, `featured`, `draft`, `tags[]`, `ogImage` (optional), `canonicalURL` (optional), `schemaType` (`HowTo`|`FAQPage`|`Article`), `platform[]` (`shopify`|`wix`|`squarespace`|`woocommerce`), `topic`.

**Content rules for new/edited posts**: internal links use `/blog/<slug>` (no trailing slash, no `/posts/` prefix); every post should link to 2–3 other posts; tutorials get a `## FAQ` section (H3 per question) since that's what drives FAQPage schema; stay tool-neutral — don't promote a specific paid app/product by name unless the post is explicitly a review of it.

**SEO/AI crawlers**: `app/sitemap.ts`, `app/robots.ts` (allows GPTBot/ClaudeBot/PerplexityBot/anthropic-ai/Google-Extended), and `app/llms.txt/route.ts` are all auto-generated from `lib/blog.ts` — update the data, not these files directly.

`blog.opsify.art` (a separate Astro app) is retired/superseded by `/blog` above; don't port new content there.

# Design tokens 
Never hardcode a reusable design value (color, font-size, line-height, letter-spacing, radius, spacing, etc.) as a Tailwind arbitrary value (text-[14px], bg-[#f7f6f3], ...) in JSX. Use an existing design token/shared config.

Prefer Tailwind's standard built-in scale first (text-xs/sm/base/lg/xl/2xl, rounded-sm/md/lg/xl/2xl/full, the default spacing scale p-1/2/3/4/5/6/8/10...). If a design value is close to a standard step (small visual drift, roughly ≤2px, is acceptable), snap to that standard class instead of inventing a custom one — don't preserve odd decimal values (e.g. 14.4px, 22.896px) just because that's what the source/mockup produced; those are usually cascading/em-compounding artifacts, not intentional design decisions.

Only add a new custom token (in globals.css) when the value is a deliberate design decision that doesn't fit the standard scale — e.g. a brand color, or a one-off structural layout dimension (a container max-width, a fixed sidebar width). Name custom tokens by role or scale position; avoid project-specific, source-specific, or implementation-specific names.