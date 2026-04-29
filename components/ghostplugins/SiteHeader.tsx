import Link from "next/link";
import { GhostMark } from "./GhostMark";

function IconSearch(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M7 7h15l-2 8H8L7 7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 7 6 3H2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="19" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconMenu(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="w-full border-b border-[var(--gp-border)] bg-white">
      <div
        className="mx-auto flex w-full items-center gap-6 px-4 py-3"
      >
        <Link href="/" className="flex items-center gap-2 text-[14.4px] font-semibold">
          <GhostMark size={26} />
          <span>Ghost Plugins</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-[14.4px] font-semibold text-[var(--gp-text)]" href="/plugins">
            Plugins
          </a>
          <a
            className="text-[14.4px] font-semibold text-[var(--gp-text)]"
            href="/templates"
          >
            Templates
          </a>
          <a className="text-[14.4px] font-semibold text-[var(--gp-text)]" href="/studio">
            Studio
          </a>
          <a className="text-[14.4px] font-semibold text-[var(--gp-text)]" href="/toolbox">
            Toolbox
          </a>
          <a className="text-[14.4px] font-semibold text-[var(--gp-text)]" href="/more-folder">
            …
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="/search"
            className="hidden items-center gap-2 text-[14.4px] font-semibold text-[var(--gp-text)] md:flex"
          >
            <IconSearch />
          </a>
          <a
            href="#"
            className="hidden text-[14.4px] font-semibold text-[var(--gp-text)] md:block"
          >
            Login
          </a>
          <a
            href="/cart"
            className="flex items-center gap-2 text-[14.4px] font-semibold text-[var(--gp-text)]"
          >
            <IconCart />
            <span className="md:hidden">0</span>
          </a>

          <a
            href="/pro-access"
            className="hidden rounded-[6.4px] border border-[var(--gp-border)] bg-white px-[17px] py-[10px] text-[14.4px] font-semibold text-[var(--gp-text)] md:block"
          >
            Unlock Pro Access 👻
          </a>

          <button
            type="button"
            className="ml-1 inline-flex items-center justify-center text-[var(--gp-text)] md:hidden"
            aria-label="Menu"
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

