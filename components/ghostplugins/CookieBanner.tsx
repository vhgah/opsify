"use client";

import * as React from "react";

export function CookieBanner() {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-50 w-[340px] max-w-[calc(100vw-48px)]">
      <div className="pointer-events-auto rounded-[10px] border border-[var(--gp-border)] bg-white p-5 shadow-sm">
        <div className="text-[12.8px] leading-[18px] text-[var(--gp-text)]">
          We use cookies to create the best experience. By visiting, you must read
          and agree to our{" "}
          <a href="/terms-of-service" className="underline underline-offset-2">
            Terms of Service
          </a>
          ,{" "}
          <a href="/privacy-policy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          , and{" "}
          <a href="/cookie-policy" className="underline underline-offset-2">
            Cookie Policy
          </a>
          .
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            className="rounded-[6px] border border-[var(--gp-border)] bg-white px-4 py-2 text-[12.8px] font-semibold"
            onClick={() => setOpen(false)}
          >
            Accept
          </button>
          <button
            type="button"
            className="px-2 py-2 text-[12.8px] font-semibold"
            onClick={() => setOpen(false)}
          >
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}

