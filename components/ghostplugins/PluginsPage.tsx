"use client";

import { useState } from "react";
import { FREE_PLUGINS, SUPER_PLUGINS } from "./pluginsData";
import { PluginsGrid } from "./PluginsGrid";

export function PluginsPage() {
  const [version, setVersion] = useState<"paper" | "branded">("paper");

  const items = version === "paper" ? SUPER_PLUGINS : FREE_PLUGINS;

  return (
    <main className="flex flex-1 flex-col" style={{ paddingTop: "120.859px" }}>
      <div className="flex-1 px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="rounded-[4px] border border-[#3c7be1] bg-white px-4 py-3 text-center text-[14.4px] font-bold text-[#3c7be1]">
            We are updating the plugin library. Check back often for new plugins
            releases.
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="text-[22.4px] font-semibold leading-[28.6541px] text-[var(--gp-text)]">
              Plugin Library
            </div>

            <a
              href="/pro-access"
              className="hidden rounded-[6.4px] border border-[var(--gp-border)] bg-white px-[17.28px] py-[14.4px] text-[14.4px] font-semibold text-[var(--gp-text)] md:block"
            >
              Pro Member Access
            </a>
          </div>

          <p className="mt-4 max-w-[680px] text-[14.4px] leading-[22.896px] text-[var(--gp-text)]">
            A growing library of complimentary and premium plugins for Squarespace –
            from simple design tweaks, to more advanced, customizable features.
          </p>

          <div className="mt-6 text-[12.8px] font-semibold text-[var(--gp-text)]">
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
                  "ghost-toggle-btn inline-flex cursor-pointer items-center rounded-[50px] px-[10px] py-[6px] text-[12.8px] font-bold leading-[20.48px]",
                  "mr-[10px] transition-colors",
                  version === "paper"
                    ? "active bg-[#f4f4f4] text-black"
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
                  "ghost-toggle-btn inline-flex cursor-pointer items-center rounded-[50px] px-[10px] py-[6px] text-[12.8px] font-bold leading-[20.48px]",
                  "mr-[10px] transition-colors",
                  version === "branded"
                    ? "active bg-[#f4f4f4] text-black"
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

