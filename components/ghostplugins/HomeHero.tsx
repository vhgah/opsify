import Link from "next/link";

import { GhostMark } from "./GhostMark";

export function HomeHero() {
  return (
    <section className="flex flex-1 items-center justify-center bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[var(--size-hero)] flex-col items-center text-center">
        <GhostMark size={66} />

        <h1
          className="mt-10 mb-8 max-w-[var(--size-hero-copy)] text-2xl leading-7 font-semibold text-[var(--gp-text)]"
        >
          Opsify helps new sellers launch on Shopify, WooCommerce & Squarespace.
        </h1>

        <p
          className="max-w-[var(--size-hero-copy)] text-sm leading-relaxed font-normal text-[var(--gp-text)]"
        >
          Step-by-step setup guides for your first store, plus a Squarespace
          plugin and template toolkit trusted by over 100,000 websites.
        </p>

        <div className="mt-10 flex w-full max-w-[var(--size-hero-actions)] flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/blog"
            className="block w-full rounded-md border border-[var(--gp-border)] bg-transparent px-5.5 py-4.5 text-center text-sm font-semibold text-[var(--gp-text)]"
          >
            Read the Guides
          </Link>
          <Link
            href="/plugins"
            className="block w-full rounded-md bg-[var(--gp-text)] px-4.5 py-4.5 text-center text-sm font-semibold text-white"
          >
            Squarespace Toolkit
          </Link>
        </div>

        <div className="mt-10 text-xs font-semibold text-[var(--gp-text)]">
          Guides for Shopify, WooCommerce & Squarespace sellers.{" "}
          <span aria-hidden="true">🚀</span>
        </div>
      </div>
    </section>
  );
}

