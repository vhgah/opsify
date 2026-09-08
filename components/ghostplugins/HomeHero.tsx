import { GhostMark } from "./GhostMark";

export function HomeHero() {
  return (
    <section className="flex flex-1 items-center justify-center bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[var(--size-hero)] flex-col items-center text-center">
        <GhostMark size={66} />

        <h1
          className="mt-10 mb-8 max-w-[var(--size-hero-copy)] text-2xl leading-7 font-semibold text-[var(--gp-text)]"
        >
          Boo! Meet Ghost Plugins – The Most Loved and Used Toolkit For Squarespace.
        </h1>

        <p
          className="max-w-[var(--size-hero-copy)] text-sm leading-relaxed font-normal text-[var(--gp-text)]"
        >
          From complimentary plugins, to premium plugins and installed-for-you
          templates, Ghost is a growing toolkit for Squarespace websites.
        </p>

        <div className="mt-10 flex w-full max-w-[var(--size-hero-actions)] flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="/plugins"
            className="block w-full rounded-md border border-[var(--gp-border)] bg-transparent px-5.5 py-4.5 text-center text-sm font-semibold text-[var(--gp-text)]"
          >
            Plugin Library
          </a>
          <a
            href="/templates"
            className="block w-full rounded-md bg-[var(--gp-text)] px-4.5 py-4.5 text-center text-sm font-semibold text-white"
          >
            Template Library
          </a>
        </div>

        <div className="mt-10 text-xs font-semibold text-[var(--gp-text)]">
          Trusted and loved by over 100,000 Squarespace websites.{" "}
          <span aria-hidden="true">❤️</span>
        </div>
      </div>
    </section>
  );
}

