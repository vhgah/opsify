export type ToolboxItem = {
  title: string;
  href: string;
  categories: string[];
  imageSrc: string;
};

export const TOOLBOX_CATEGORIES = [
  "Accessibility",
  "Communication",
  "Digital",
  "Feedback",
  "Forms",
  "Marketing",
  "Multilingual",
  "Payments",
  "Performance",
  "Policies",
  "Scheduling",
] as const;

export const TOOLBOX_ITEMS: ToolboxItem[] = [
  {
    title: "Pluto Studio by Ghost",
    href: "https://www.plutostud.io/",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/pluto_purple-405c0eeb4f.png",
  },
  {
    title: "Typeform",
    href: "https://typeform.cello.so/iQbF8EsDQJ9",
    categories: ["Communication", "Forms"],
    imageSrc: "/ghostplugins.com/toolbox/typeform-b6ff5ad107.png",
  },
  {
    title: "Wise",
    href: "https://wise.com/invite/dic/codyj43",
    categories: ["Payments"],
    imageSrc: "/ghostplugins.com/toolbox/wise-431b804424.png",
  },
  {
    title: "SEOSpace",
    href: "https://www.seospace.co/?via=ghost",
    categories: ["Performance"],
    imageSrc: "/ghostplugins.com/toolbox/seo_space-69005b0c50.png",
  },
  {
    title: "Ghost Marketplace",
    href: "https://ghostmarketplace.com/?ref=COJU_1111",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/logo_gm-11038e8160.png",
  },
  {
    title: "Christy Price",
    href: "https://christyprice.teachable.com/a/aff_mlgkx62q/external?affcode=548856_zojbntcd",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/christy_price-7105eb35b9.png",
  },
  {
    title: "Monocle Search",
    href: "https://www.monocle-search.com/?ref=ghost",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/monocle_search-e7d3e91bc5.png",
  },
  {
    title: "Weglot",
    href: "https://weglot.com/?fp_ref=ghost",
    categories: ["Multilingual"],
    imageSrc: "/ghostplugins.com/toolbox/weglot-93bff68057.png",
  },
  {
    title: "Will Myers",
    href: "https://will-myers.peachs.co/a/ghost",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/will_myers-9202d6752e.png",
  },
  {
    title: "Peach's (Affiliates)",
    href: "https://peachs.co/?via=ghost",
    categories: ["Marketing"],
    imageSrc: "/ghostplugins.com/toolbox/peaches-5498010945.png",
  },
  {
    title: "UserWay",
    href: "https://userway.org/",
    categories: ["Accessibility"],
    imageSrc: "/ghostplugins.com/toolbox/user_Way-03d525d78f.png",
  },
  {
    title: "Fiverr Workspace",
    href: "https://www.ghostplugins.com/toolbox-list/fiverr-workspace",
    categories: ["Payments"],
    imageSrc: "/ghostplugins.com/toolbox/fiverr-79274dcea0.png",
  },
  {
    title: "Usersnap",
    href: "https://usersnap.com/",
    categories: ["Communication", "Feedback"],
    imageSrc: "/ghostplugins.com/toolbox/user_snap-cc8012fd69.png",
  },
  {
    title: "Tidio",
    href: "https://www.tidio.com/",
    categories: ["Communication"],
    imageSrc: "/ghostplugins.com/toolbox/tidio-30552ba5b4.png",
  },
  {
    title: "Zendesk",
    href: "https://www.zendesk.com/",
    categories: ["Communication"],
    imageSrc: "/ghostplugins.com/toolbox/zendesk-0bf6a1071d.png",
  },
  {
    title: "Squarestylist",
    href: "https://squarestylist.teachable.com/a/aff_llkrfs5q/external?affcode=369662_dkjqz6wv",
    categories: ["Digital"],
    imageSrc: "/ghostplugins.com/toolbox/squarestylist-b09c88fc33.png",
  },
  {
    title: "Get Terms",
    href: "https://getterms.io/?ref=zdm4yze",
    categories: ["Policies"],
    imageSrc: "/ghostplugins.com/toolbox/get_terms-387d22db28.png",
  },
  {
    title: "Honeybook",
    href: "https://www.honeybook.com/",
    categories: ["Scheduling", "Payments"],
    imageSrc: "/ghostplugins.com/toolbox/honeybook-3d1c30fad6.png",
  },
  {
    title: "Loom",
    href: "https://loom.com/invite/3b8c427a3e834bf29e923c06b62c96f7",
    categories: ["Communication"],
    imageSrc: "/ghostplugins.com/toolbox/loom-c687fbac44.png",
  },
  {
    title: "Acuity Scheduling",
    href: "https://www.acuityscheduling.com/",
    categories: ["Scheduling"],
    imageSrc: "/ghostplugins.com/toolbox/aquity-9bdbd1b57f.png",
  },
  {
    title: "TaxJar",
    href: "https://www.taxjar.com/product/integration/squarespace",
    categories: ["Payments"],
    imageSrc: "/ghostplugins.com/toolbox/taxjarlogo-f1b6e8ca6b.png",
  },
  {
    title: "Mailchimp",
    href: "https://mailchimp.com/",
    categories: ["Marketing", "Forms"],
    imageSrc: "/ghostplugins.com/toolbox/mailchimp-e3b5c1141a.png",
  },
  {
    title: "Twist",
    href: "https://twist.com/",
    categories: ["Communication"],
    imageSrc: "/ghostplugins.com/toolbox/twist-fa2139cb29.png",
  },
  {
    title: "VideoAsk",
    href: "https://www.videoask.com/ref/5tzahkxasg?utm_medium=videoask&utm_source=referral_program",
    categories: ["Communication", "Forms"],
    imageSrc: "/ghostplugins.com/toolbox/vid_ask-040e72a33f.png",
  },
  {
    title: "Inly Invoicing",
    href: "https://www.inly.com/",
    categories: ["Payments"],
    imageSrc: "/ghostplugins.com/toolbox/inly-150f6ab8f2.png",
  },
  {
    title: "Calendly",
    href: "https://calendly.com/",
    categories: ["Scheduling"],
    imageSrc: "/ghostplugins.com/toolbox/cal-48ec377fb0.png",
  },
  {
    title: "accessiBe",
    href: "https://accessibe.com/integrations/squarespace",
    categories: ["Accessibility"],
    imageSrc: "/ghostplugins.com/toolbox/accessibe-1b8f29a4fe.png",
  },
  {
    title: "Pingdom",
    href: "https://tools.pingdom.com/",
    categories: ["Performance"],
    imageSrc: "/ghostplugins.com/toolbox/pingdom-ab362dcd70.png",
  },
  {
    title: "Termly",
    href: "https://termly.io/",
    categories: ["Policies"],
    imageSrc: "/ghostplugins.com/toolbox/termly-c1e7a6c48b.png",
  },
];

