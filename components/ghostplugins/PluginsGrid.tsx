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
      <div className="relative mb-4 w-full overflow-hidden rounded-lg bg-surface-subtle">
        {isSale ? (
          <div className="absolute right-3 top-3 rounded-full bg-[var(--gp-text)] px-3 py-1 text-xs font-semibold text-white">
            SALE
          </div>
        ) : null}

        <img src={item.imageSrc} alt={item.title} className="h-auto w-full object-cover" loading="lazy" />
      </div>

      <div className="summary-title mb-2 text-sm font-bold leading-4 text-[var(--gp-text)]">
        {item.title}
      </div>

      {item.categories.length > 0 ? (
        <div className="inline-block text-xs font-normal text-[var(--gp-text)]">
          {item.categories.join(", ")}
        </div>
      ) : null}

      {item.price ? (
        <div className="mt-1 text-xs leading-normal text-[var(--gp-text)]">
          {isSale ? (
            <>
              <span className="font-semibold">Sale Price:</span> {item.salePrice}{" "}
              <span className="text-text-secondary">Original Price:</span>{" "}
              <span className="text-text-secondary">{item.originalPrice}</span>
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
      <div className="archive-group-list -ml-1">
        <button
          type="button"
          onClick={() => setActiveCategory(null)}
          className={[
            "archive-group-name-link inline-block cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-bold leading-5",
            "mr-2.5 mb-2.5 transition-colors",
            activeCategory === null ? "active bg-surface-muted text-black" : "bg-transparent text-[var(--gp-text)]",
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
                "archive-group-name-link inline-block cursor-pointer rounded-full px-2.5 py-1.5 text-xs font-bold leading-5",
                "mr-2.5 mb-2.5 transition-colors",
                active ? "active bg-surface-muted text-black" : "bg-transparent text-[var(--gp-text)]",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="summary-item-list-container sqs-gallery-container mt-6">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PluginCard key={`${item.version}-${item.href}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

