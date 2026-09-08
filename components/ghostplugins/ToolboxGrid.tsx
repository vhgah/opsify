"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { TOOLBOX_CATEGORIES, TOOLBOX_ITEMS, type ToolboxItem } from "./toolboxData";

function includesCategory(item: ToolboxItem, category: string) {
  return item.categories.includes(category);
}

export function ToolboxGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const items = useMemo(() => {
    if (!activeCategory) return TOOLBOX_ITEMS;
    return TOOLBOX_ITEMS.filter((i) => includesCategory(i, activeCategory));
  }, [activeCategory]);

  return (
    <div className="mt-6">
      <div className="archive-group-list -ml-1">
        {TOOLBOX_CATEGORIES.map((cat) => {
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

      <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 w-full overflow-hidden rounded-lg bg-surface-subtle">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={169}
                className="h-auto w-full"
              />
            </div>

            <div className="summary-title mb-2 text-sm font-bold leading-4 text-[var(--gp-text)]">
              {item.title}
            </div>
            <div className="inline-block text-xs font-normal text-[var(--gp-text)]">
              {item.categories.join(", ")}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

