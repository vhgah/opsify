import Image from "next/image";

type TemplateCard = {
  name: string;
  href: string;
  price: string;
  sale?: { salePrice: string; originalPrice: string };
  imageSrc: string;
  hoverImageSrc?: string;
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
    hoverImageSrc: "/ghostplugins.com/assets/better_branded_dark-9e2e64ab29.png",
  },
  {
    name: "Swell Template",
    href: "/templates",
    price: "$79.00",
    sale: { salePrice: "$79.00", originalPrice: "$99.00" },
    badge: "sale",
    imageSrc: "/ghostplugins.com/assets/upfront_paper-7e240fc0a5.png",
    hoverImageSrc: "/ghostplugins.com/assets/upfront_branded-3d710061ef.png",
  },
  {
    name: "Hurdle Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/hurdle_no_logo_paper-6d2360d1a3.png",
    hoverImageSrc: "/ghostplugins.com/assets/hurdle_no_logo-9ddb960c6e.png",
  },
  {
    name: "Noon Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/noon_paper-e19175dead.png",
    hoverImageSrc: "/ghostplugins.com/assets/noon_branded-8ae359612c.png",
  },
  {
    name: "Bench Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/bench_paper-f9a1d5b9dd.png",
    hoverImageSrc: "/ghostplugins.com/assets/bench_branded-4c4c1758b6.png",
  },
  {
    name: "Monday Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/monday_paper-e494bad676.png",
    hoverImageSrc: "/ghostplugins.com/assets/monday_branded-79ccf32b85.png",
  },
  {
    name: "Blink Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/blink_paper-4bb5aa03c7.png",
    hoverImageSrc: "/ghostplugins.com/assets/blink_branded-96eca08476.png",
  },
  {
    name: "Mayke Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/mayke_paper-34179fc76c.png",
    hoverImageSrc: "/ghostplugins.com/assets/mayke_branded_dark-28940d6aa2.png",
  },
  {
    name: "Wallet Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/wallet_paper-3ea43f6227.png",
    hoverImageSrc: "/ghostplugins.com/assets/wallet_branded-42aeebfa01.png",
  },
  {
    name: "Luna Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/luna_paper-bec7a19d5b.png",
    hoverImageSrc: "/ghostplugins.com/assets/luna_dark-04b3025236.png",
  },
  {
    name: "Clay Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/clay_paper-e0ea532ce1.png",
    hoverImageSrc: "/ghostplugins.com/assets/clay_branded-8748e6219f.png",
  },
  {
    name: "Plate Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/plate_paper-63bb180249.png",
    hoverImageSrc: "/ghostplugins.com/assets/plate_branded-05c8c9f209.png",
  },
  {
    name: "Trenton Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/trenton_paper-b61e0c5a36.png",
    hoverImageSrc: "/ghostplugins.com/assets/trenton_branded-862009e95b.png",
  },
  {
    name: "Huello Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/huello_paper-7c08ca2ffe.png",
    hoverImageSrc: "/ghostplugins.com/assets/huello_branded-68339bc034.png",
  },
  {
    name: "Kelso Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/kelso_paper-cfc64a06ee.png",
    hoverImageSrc: "/ghostplugins.com/assets/kelso_branded-46e209c49b.png",
  },
  {
    name: "Tilt Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/tilt_paper-9419bb99c6.png",
    hoverImageSrc: "/ghostplugins.com/assets/tilt_branded-511484a4d1.png",
  },
  {
    name: "Birch Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/birch_paper-f1e3220934.png",
    hoverImageSrc: "/ghostplugins.com/assets/birch_branded-0edac0e4b0.png",
  },
  {
    name: "Miso Template",
    href: "/templates",
    price: "$99.00",
    imageSrc: "/ghostplugins.com/assets/miso_paper-2973e5de91.png",
    hoverImageSrc: "/ghostplugins.com/assets/miso_branded-4b6ea94095.png",
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
            <div className="relative overflow-hidden rounded-xl border border-[var(--gp-border-soft)] bg-white">
              {t.badge === "sale" ? (
                <div className="absolute z-10 right-3 top-3 rounded-full bg-[var(--gp-text)] px-3 py-1 text-xs font-semibold text-white">
                  SALE
                </div>
              ) : null}
              
              <Image
                src={t.imageSrc}
                alt={t.name}
                width={750}
                height={805}
                className={`h-auto w-full object-cover ${t.hoverImageSrc ? "group-hover:hidden" : ""}`}
              />
              {
                t.hoverImageSrc ? (
                  <Image
                    src={t.hoverImageSrc}
                    alt={t.name}
                    width={750}
                    height={805}
                    className="h-auto w-full object-cover hidden group-hover:block"
                  />
                ) : null
              }
            </div>

            <div className="mt-3 text-sm font-semibold text-[var(--gp-text)]">
              {t.name}
            </div>

            {t.sale ? (
              <div className="mt-1 text-xs leading-normal text-[var(--gp-text)]">
                <span className="font-semibold">Sale Price:</span> {t.sale.salePrice}{" "}
                <span className="text-text-secondary">Original Price:</span>{" "}
                <span className="text-text-secondary">{t.sale.originalPrice}</span>
              </div>
            ) : (
              <div className="mt-1 text-xs leading-normal text-[var(--gp-text)]">
                {t.price}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

