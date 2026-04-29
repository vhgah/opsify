### Goal
Clone pages with high visual fidelity while keeping the codebase maintainable and consistent.
Prefer “visually indistinguishable” within constraints over hardcoded one-offs.

### Stack assumptions
- Next.js + React + Tailwind
- Keep components small and reusable
- Keep build passing at all times

---

## Styling & tokens (Tailwind-first)
- Use Tailwind semantic tokens everywhere:
  - `bg-background`, `text-foreground`, `border-border`
  - `text-muted-foreground`, `bg-muted`, `bg-card`, `text-card-foreground` (if available)
- Do NOT use `text-[var(...)]`, `bg-[var(...)]`, `border-[var(...)]` inside components unless there is no semantic token for it.
- CSS variables are defined in `app/globals.css` (single source of truth). Components should consume semantic Tailwind classes, not raw vars.
- Prefer Tailwind utilities over custom CSS. Only add CSS when:
  - Tailwind cannot express it cleanly, or
  - It is a reusable pattern (then create a utility class or shared component).

## No inline styles (strict)
- Do NOT use React inline styles (`style={{...}}`) for spacing, typography, sizing, colors, or layout.
- Allowed exceptions ONLY:
  1) CSS variable assignment: `style={{ "--x": value } as React.CSSProperties }}`
  2) Truly runtime-dependent measurements that cannot be represented via Tailwind or CSS vars.
- If an exception is used, it must be rare and justified (in the PR/commit message, not code comments).

## Rounding policy for pixel-perfect
- Avoid fractional pixel values (`14.4px`, `74.9375px`, etc.).
- Round to a sensible value and use Tailwind scale where possible.
- Keep fractional values ONLY when the visual difference is clearly noticeable and cannot be matched otherwise.

## Layout rules (fixed header / sidebars)
- No “magic offsets” like `pt-20` when a header is `fixed`.
- Define a single source of truth for header height (CSS var in `globals.css`) and use it consistently:
  - `main` top padding
  - fixed elements’ `top`
  - any sticky/fixed layout math
- Avoid overlapping fixed sidebar/header with content:
  - On `md+`, content must reserve horizontal space if sidebar is fixed.
  - On mobile, fixed sidebar must collapse or become non-fixed.

## Responsive contract (must)
- Implement and verify responsive behavior at:
  - Desktop: 1440px
  - Tablet: 768px
  - Mobile: 390px
- If a section changes layout, document the breakpoint and implement it (no “best guess”).

## Interactions baseline (must)
- Every interactive element must have:
  - hover state
  - `focus-visible` state
- Prefer semantic elements:
  - navigation: `<nav>`
  - main content: `<main>`
  - footer: `<footer>`
  - buttons for actions, anchors for navigation

## Links policy
- External links with `target="_blank"` MUST include: `rel="noopener noreferrer"`.
- Avoid `href="#"` placeholders; use real targets or a button.

## Accessibility baseline
- Icons used purely decoratively: `aria-hidden="true"`.
- Buttons must have an accessible name:
  - visible text or `aria-label`
- Images must have meaningful `alt` (or empty alt `alt=""` if purely decorative).

## Data & assets
- Prefer real extracted text/assets from the target site.
- If mock data is unavoidable:
  - keep it in a dedicated data module (e.g. `...Data.ts`)
  - make it obvious and easy to swap later
- Avoid embedding long data blobs directly in component files.

## Component architecture
- Keep components focused:
  - One component = one responsibility/section
  - Extract repeated patterns into subcomponents
- Avoid duplication of icons/SVGs:
  - centralize icons in a shared module when reused

## Quality gates before finishing a clone
- Build must pass (`npm run build`).
- Quick checks:
  - no inline styles (except allowed cases)
  - no fractional px unless justified
  - fixed header/sidebar offsets follow the contract
  - external links use `noopener noreferrer`