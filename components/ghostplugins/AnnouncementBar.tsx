export function AnnouncementBar() {
  return (
    <div
      className="w-full bg-[var(--gp-announcement-bg)] text-white"
      style={{ height: "var(--size-banner)" }}
    >
      <div className="mx-auto flex h-full max-w-[var(--size-shell)] items-center justify-center px-4">
        <a
          href="/pro-access"
          className="text-sm leading-none text-white"
        >
          Get Unlimited Super Plugins and Templates with{" "}
          <span className="font-semibold underline underline-offset-2">
            Ghost+ Pro Access.
          </span>{" "}
          👻
        </a>
      </div>
    </div>
  );
}

