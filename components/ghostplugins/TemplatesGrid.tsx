import Image from "next/image";

type TemplateCard = {
  name: string;
  href: string;
  price: string;
  sale?: { salePrice: string; originalPrice: string };
  imageSrc: string;
  badge?: "sale";
};

const templates: TemplateCard[] = [
  {
    name: "Better 2.0 Template",
    href: "/templates",
    price: "$79.00",
    sale: { salePrice: "$79.00", originalPrice: "$99.00" },
    badge: "sale",
    imageSrc: "/ghostplugins.com/assets/better_paper-868a98cd6f.png",
  },
  {
    name: "Swell Template",
    href: "/templates",
    price: "$79.00",
    sale: { salePrice: "$79.00", originalPrice: "$99.00" },
    badge: "sale",
    imageSrc: "/ghostplugins.com/assets/upfront_paper-7e240fc0a5.png",
  },
  {
    name: "Hurdle Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/hurdle_no_logo_paper-6d2360d1a3.png",
  },
  {
    name: "Noon Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/noon_paper-e19175dead.png",
  },
  {
    name: "Bench Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/bench_paper-f9a1d5b9dd.png",
  },
  {
    name: "Monday Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/monday_paper-e494bad676.png",
  },
  {
    name: "Blink Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/blink_paper-4bb5aa03c7.png",
  },
  {
    name: "Mayke Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/mayke_paper-34179fc76c.png",
  },
  {
    name: "Wallet Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/wallet_paper-3ea43f6227.png",
  },
  {
    name: "Luna Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/luna_paper-bec7a19d5b.png",
  },
  {
    name: "Clay Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/clay_paper-e0ea532ce1.png",
  },
  {
    name: "Plate Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/plate_paper-63bb180249.png",
  },
  {
    name: "Trenton Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/trenton_paper-b61e0c5a36.png",
  },
  {
    name: "Huello Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/huello_paper-7c08ca2ffe.png",
  },
  {
    name: "Kelso Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/kelso_paper-cfc64a06ee.png",
  },
  {
    name: "Tilt Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/tilt_paper-9419bb99c6.png",
  },
  {
    name: "Birch Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/birch_paper-f1e3220934.png",
  },
  {
    name: "Miso Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/miso_paper-2973e5de91.png",
  },
  {
    name: "Classic Template",
    href: "/templates",
    price: "$0.00",
    imageSrc: "/ghostplugins.com/assets/classic_branded-33757648b3.png",
  },
];

export function TemplatesGrid() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10 sm:gap-y-6">
        {templates.map((t) => (
          <a key={t.name} href={t.href} className="group block">
            <div className="relative overflow-hidden rounded-[10px] border border-[var(--gp-border-soft)] bg-white">
              {t.badge === "sale" ? (
                <div className="absolute right-3 top-3 rounded-full bg-[var(--gp-text)] px-3 py-1 text-[11px] font-semibold text-white">
                  SALE
                </div>
              ) : null}
              <Image
                src={t.imageSrc}
                alt={t.name}
                width={750}
                height={805}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-3 text-[13.6px] font-semibold text-[var(--gp-text)]">
              {t.name}
            </div>

            {t.sale ? (
              <div className="mt-1 text-[12.8px] leading-[18px] text-[var(--gp-text)]">
                <span className="font-semibold">Sale Price:</span> {t.sale.salePrice}{" "}
                <span className="text-[#777]">Original Price:</span>{" "}
                <span className="text-[#777]">{t.sale.originalPrice}</span>
              </div>
            ) : (
              <div className="mt-1 text-[12.8px] leading-[18px] text-[var(--gp-text)]">
                {t.price}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

