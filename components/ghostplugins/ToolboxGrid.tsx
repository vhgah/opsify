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
      <div className="archive-group-list -ml-[5px]">
        {TOOLBOX_CATEGORIES.map((cat) => {
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

      <div className="mt-6 grid grid-cols-1 gap-x-[40px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-[15px] w-full overflow-hidden rounded-[8px] bg-[#f6f6f6]">
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={300}
                height={169}
                className="h-auto w-full"
              />
            </div>

            <div className="summary-title mb-2 text-[13.6px] font-bold leading-[16.32px] text-[var(--gp-text)]">
              {item.title}
            </div>
            <div className="inline-block text-[13px] font-normal text-[var(--gp-text)]">
              {item.categories.join(", ")}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

