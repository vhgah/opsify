"use client";

import { useEffect, useMemo, useState } from "react";
import type { GhostPluginItem } from "./pluginsData";

function uniq(arr: string[]) {
  return Array.from(new Set(arr));
}

function PluginCard({ item }: { item: GhostPluginItem }) {
  const isSale = item.badge === "sale" && !!item.originalPrice && !!item.salePrice;

  return (
    <a href={item.href} className="block">
      <div className="relative mb-[15px] w-full overflow-hidden rounded-[8px] bg-[#f6f6f6]">
        {isSale ? (
          <div className="absolute right-3 top-3 rounded-full bg-[var(--gp-text)] px-3 py-1 text-[11px] font-semibold text-white">
            SALE
          </div>
        ) : null}

        <img src={item.imageSrc} alt={item.title} className="h-auto w-full object-cover" loading="lazy" />
      </div>

      <div className="summary-title mb-2 text-[13.6px] font-bold leading-[16.32px] text-[var(--gp-text)]">
        {item.title}
      </div>

      {item.categories.length > 0 ? (
        <div className="inline-block text-[13px] font-normal text-[var(--gp-text)]">
          {item.categories.join(", ")}
        </div>
      ) : null}

      {item.price ? (
        <div className="mt-1 text-[12.8px] leading-[18px] text-[var(--gp-text)]">
          {isSale ? (
            <>
              <span className="font-semibold">Sale Price:</span> {item.salePrice}{" "}
              <span className="text-[#777]">Original Price:</span>{" "}
              <span className="text-[#777]">{item.originalPrice}</span>
            </>
          ) : (
            item.price
          )}
        </div>
      ) : null}
    </a>
  );
}

export function PluginsGrid({ items }: { items: GhostPluginItem[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const all = uniq(items.flatMap((i) => i.categories));
    return all.sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    if (!activeCategory) return items;
    return items.filter((i) => i.categories.includes(activeCategory));
  }, [items, activeCategory]);

  // When user switches ghost-version-toggle, `items` will change; reset the category filter.
  useEffect(() => {
    setActiveCategory(null);
  }, [items]);

  return (
    <div className="mt-6">
      <div className="archive-group-list -ml-[5px]">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={[
            "archive-group-name-link inline-block cursor-pointer rounded-[50px] px-[10px] py-[6px] text-[12.8px] font-bold leading-[20.48px]",
            "mr-[10px] mb-[10px] transition-colors",
            activeCategory === null ? "active bg-[#f4f4f4] text-black" : "bg-transparent text-[var(--gp-text)]",
          ].join(" ")}
        >
          All
        </button>

        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory((prev) => (prev === cat ? null : cat))}
              className={[
                "archive-group-name-link inline-block cursor-pointer rounded-[50px] px-[10px] py-[6px] text-[12.8px] font-bold leading-[20.48px]",
                "mr-[10px] mb-[10px] transition-colors",
                active ? "active bg-[#f4f4f4] text-black" : "bg-transparent text-[var(--gp-text)]",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="summary-item-list-container sqs-gallery-container mt-6">
        <div className="grid grid-cols-1 gap-x-[40px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PluginCard key={`${item.version}-${item.href}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

