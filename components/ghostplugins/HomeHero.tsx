import { GhostMark } from "./GhostMark";

export function HomeHero() {
  return (
    <section className="flex flex-1 items-center justify-center bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[940px] flex-col items-center text-center">
        <GhostMark size={66} />

        <h1
          className="mt-10 max-w-[452px] text-[22.4px] font-semibold text-[var(--gp-text)]"
          style={{ lineHeight: "28.6541px", marginBottom: "32px" }}
        >
          Boo! Meet Ghost Plugins – The Most Loved and Used Toolkit For Squarespace.
        </h1>

        <p
          className="max-w-[452px] text-[14.4px] font-normal text-[var(--gp-text)]"
          style={{ lineHeight: "22.896px" }}
        >
          From complimentary plugins, to premium plugins and installed-for-you
          templates, Ghost is a growing toolkit for Squarespace websites.
        </p>

        <div className="mt-10 flex w-full max-w-[560px] flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="/plugins"
            className="block w-full rounded-[6.4px] border border-[var(--gp-border)] bg-transparent text-center text-[14.4px] font-semibold text-[var(--gp-text)]"
            style={{ padding: "18.72px 21.6px" }}
          >
            Plugin Library
          </a>
          <a
            href="/templates"
            className="block w-full rounded-[6.4px] bg-[var(--gp-text)] text-center text-[14.4px] font-semibold text-white"
            style={{ padding: "18.72px 17.28px" }}
          >
            Template Library
          </a>
        </div>

        <div className="mt-10 text-[13px] font-semibold text-[var(--gp-text)]">
          Trusted and loved by over 100,000 Squarespace websites.{" "}
          <span aria-hidden="true">❤️</span>
        </div>
      </div>
    </section>
  );
}

