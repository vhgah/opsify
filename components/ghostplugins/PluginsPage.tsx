"use client";

import { useState } from "react";
import { FREE_PLUGINS, SUPER_PLUGINS } from "./pluginsData";
import { PluginsGrid } from "./PluginsGrid";

export function PluginsPage() {
  const [version, setVersion] = useState<"paper" | "branded">("paper");

  const items = version === "paper" ? SUPER_PLUGINS : FREE_PLUGINS;

  return (
    <main className="flex flex-1 flex-col" style={{ paddingTop: "var(--size-header-offset)" }}>
      <div className="flex-1 px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-[var(--size-content)]">
          <div className="rounded-sm border border-brand bg-white px-4 py-3 text-center text-sm font-bold text-brand">
            We are updating the plugin library. Check back often for new plugins
            releases.
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="text-2xl font-semibold leading-7 text-[var(--gp-text)]">
              Plugin Library
            </div>

            <a
              href="/pro-access"
              className="hidden rounded-md border border-[var(--gp-border)] bg-white px-4.5 py-3.5 text-sm font-semibold text-[var(--gp-text)] md:block"
            >
              Pro Member Access
            </a>
          </div>

          <p className="mt-4 max-w-[var(--size-copy)] text-sm leading-relaxed text-[var(--gp-text)]">
            A growing library of complimentary and premium plugins for Squarespace –
            from simple design tweaks, to more advanced, customizable features.
          </p>

          <div className="mt-6 text-xs font-semibold text-[var(--gp-text)]">
            <span className="font-bold">Archived Plugins:</span>{" "}
            <a
              href="/legacy-plugins"
              className="text-[var(--gp-text)] underline underline-offset-2"
            >
              Legacy Library
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <div className="ghost-version-toggle">
              <button
                type="button"
                data-version="paper"
                className={[
                  "ghost-toggle-btn inline-flex cursor-pointer items-center rounded-full px-2.5 py-1.5 text-xs font-bold leading-5",
                  "mr-2.5 transition-colors",
                  version === "paper"
                    ? "active bg-surface-muted text-black"
                    : "bg-transparent text-[var(--gp-text)]",
                ].join(" ")}
                onClick={() => setVersion("paper")}
              >
                Super Plugins
              </button>

              <button
                type="button"
                data-version="branded"
                className={[
                  "ghost-toggle-btn inline-flex cursor-pointer items-center rounded-full px-2.5 py-1.5 text-xs font-bold leading-5",
                  "mr-2.5 transition-colors",
                  version === "branded"
                    ? "active bg-surface-muted text-black"
                    : "bg-transparent text-[var(--gp-text)]",
                ].join(" ")}
                onClick={() => setVersion("branded")}
              >
                Free Plugins
              </button>
            </div>
          </div>

          <PluginsGrid items={items} />
        </div>
      </div>
    </main>
  );
}

