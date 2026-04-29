export function AnnouncementBar() {
  return (
    <div
      className="w-full bg-[var(--gp-announcement-bg)] text-white"
      style={{ height: "45.9219px" }}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-center px-4">
        <a
          href="/pro-access"
          className="text-[14.4px] leading-[14.4px] text-white"
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

