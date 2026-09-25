/**
 * Marketing content for the Bajriwala website.
 *
 * Everything a non-developer may need to change lives here: material
 * categories, app screenshots, feature claims, steps and FAQs.
 *
 * `featureFlags` gates the claims that depend on what the Customer App
 * currently ships. Switch a flag to `false` and every mention of that
 * capability disappears from the site — no component edits required.
 */

export const featureFlags = {
  /** Online payments through the in-app payment gateway. */
  onlinePayments: true,
  /** Cash on delivery at the site. */
  cashOnDelivery: true,
  /** GST invoice for business purchases. */
  gstInvoice: true,
  /** Loyalty points earned on eligible purchases. */
  loyaltyPoints: true,
  /** "3 free bike deliveries on your first three orders" launch offer. */
  bikeDeliveryPromo: true,
} as const;

/** The launch offer shown in the Customer App home banner. */
export const bikeDeliveryPromo = {
  eyebrow: "First 3 orders",
  title: "3 free bike deliveries",
  description:
    "New customers get free bike delivery on their first three orders, exactly as shown in the Bajriwala app.",
  note: "Offer as presented in the app. Terms may be updated by Bajriwala.",
} as const;

export type MaterialCategory = {
  slug: string;
  name: string;
  tabLabel: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const materialCategories: MaterialCategory[] = [
  {
    slug: "cement",
    name: "Cement & White Cement",
    tabLabel: "Cement",
    description:
      "Grey cement for structural work and white cement for finishing, available by the bag so you can order what the stage of work actually needs.",
    highlights: ["PPC & OPC grades", "White cement", "Order from 1 bag", "Bulk pricing"],
    image: "/images/categories/cement.jpg",
    imageAlt: "Branded cement sacks stacked in sunlight at a worksite",
  },
  {
    slug: "rmc",
    name: "RMC - Ready-Mix Concrete",
    tabLabel: "RMC",
    description:
      "Ready-mix concrete delivered by transit mixer for slabs, columns and foundations, so you skip on-site batching.",
    highlights: ["Transit mixer delivery", "Volume based ordering", "Grade options", "Site scheduling"],
    image: "/images/categories/rmc.jpg",
    imageAlt: "Crew pouring ready-mix concrete from a transit mixer on site",
  },
  {
    slug: "bricks",
    name: "Bricks & Blocks",
    tabLabel: "Bricks",
    description:
      "Red clay bricks and concrete or AAC blocks for walls and partitions, ordered by the quantity your masonry work needs.",
    highlights: ["Red clay bricks", "AAC blocks", "Concrete blocks", "Quantity based pricing"],
    image: "/images/categories/bricks.jpg",
    imageAlt: "Close-up of clay bricks stacked for masonry work",
  },
  {
    slug: "aggregates",
    name: "Aggregates",
    tabLabel: "Aggregates",
    description:
      "Crushed stone aggregate and blue metal chips in the grades used for concrete, PCC and filling work, priced per metric tonne.",
    highlights: ["20mm stone aggregate", "Blue metal", "Priced per MT", "Bulk price from 5 MT"],
    image: "/images/categories/aggregates.jpg",
    imageAlt: "Conveyor loading a pile of crushed stone aggregate at a quarry",
  },
  {
    slug: "sand",
    name: "Sand",
    tabLabel: "Sand",
    description:
      "Construction sand for plaster, masonry and concrete work, delivered to site in the quantity you order.",
    highlights: ["Plastering sand", "Masonry work", "Bulk quantities", "Site delivery"],
    image: "/images/categories/sand.jpg",
    imageAlt: "Piles of construction sand and crushed gravel on a building site",
  },
  {
    slug: "adhesives",
    name: "Adhesives & Chemicals",
    tabLabel: "Adhesives",
    description:
      "Construction adhesives, bonding agents, chemicals and sealants for finishing and structural work, from the brands contractors already ask for.",
    highlights: ["Tile adhesive", "Bonding agents", "Construction chemicals", "Sealants"],
    image: "/images/categories/adhesives.jpg",
    imageAlt: "Caulking gun dispensing grey sealant during finishing work",
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    tabLabel: "Waterproofing",
    description:
      "Waterproofing compounds and coatings for terraces, bathrooms and external walls, with pack sizes to match the area.",
    highlights: ["Liquid membranes", "Cementitious coatings", "Terrace & bath", "Multiple pack sizes"],
    image: "/images/categories/waterproofing.jpg",
    imageAlt: "Paint roller applying a waterproof coating to a wall surface",
  },
  {
    slug: "paint-putty",
    name: "Paint & Putty",
    tabLabel: "Paint & Putty",
    description:
      "Interior and exterior paints plus wall putty and fillers to get surfaces smooth and ready before finishing.",
    highlights: ["Emulsion & enamel", "Wall putty", "Primers", "Interior & exterior"],
    image: "/images/categories/putty.jpg",
    imageAlt: "Hands holding putty knives with white wall repair compound",
  },
  {
    slug: "electrical",
    name: "Electrical",
    tabLabel: "Electrical",
    description:
      "Wires, switches, conduits and distribution essentials for site and finishing electrical work.",
    highlights: ["Wiring & cables", "Switches", "Conduits", "MCB & distribution"],
    image: "/images/categories/electrical.jpg",
    imageAlt: "Electrical wiring and switchboard work on a construction site",
  },
  {
    slug: "hardware-kitchens-wardrobes",
    name: "Hardware Kitchens & Wardrobes",
    tabLabel: "Hardware",
    description:
      "Kitchen and wardrobe hardware fittings — hinges, channels, handles and accessories for modular interiors.",
    highlights: ["Kitchen fittings", "Wardrobe hardware", "Hinges & channels", "Handles & accessories"],
    image: "/images/categories/hardware-kitchens.jpg",
    imageAlt: "Kitchen cabinetry and hardware fittings in a modular interior",
  },
  {
    slug: "tiles-grout",
    name: "Tiles & Grout",
    tabLabel: "Tiles & Grout",
    description:
      "Floor and wall tiles with matching grout for bathrooms, kitchens and living spaces.",
    highlights: ["Floor tiles", "Wall tiles", "Tile grout", "Finishing packs"],
    image: "/images/categories/tiles-grout.jpg",
    imageAlt: "Bathroom floor tiles being laid with grout joints",
  },
  {
    slug: "safety-wears",
    name: "Safety Wears",
    tabLabel: "Safety",
    description:
      "Site safety gear for crews — helmets, gloves, reflective wear and protective footwear.",
    highlights: ["Helmets", "Gloves", "Reflective wear", "Safety footwear"],
    image: "/images/categories/safety-wears.jpg",
    imageAlt: "Construction workers wearing helmets and safety gear on site",
  },
  {
    slug: "machines-tools",
    name: "Machines & Tools",
    tabLabel: "Machines & Tools",
    description:
      "Hand tools, power tools and site machines for cutting, drilling, measuring and everyday construction work.",
    highlights: ["Hand tools", "Power tools", "Measuring tools", "Site equipment"],
    image: "/images/categories/machines-tools.jpg",
    imageAlt: "Power tools and construction equipment laid out for site use",
  },
];

/** Categories that exist in the app but are not featured as cards above. */
export const additionalCategories: string[] = [];

export type AppScreen = {
  /** Path inside /public — add new screenshots here and the UI picks them up. */
  src: string;
  /** Short caption shown under the phone. */
  caption: string;
  /** What the visitor should notice on this screen. */
  description: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Real Bajriwala Customer App screenshots. To add a screen, drop the image in
 * `public/images/app/` and append an entry — every showcase section on the page
 * reads from this array.
 */
export const appScreens: AppScreen[] = [
  {
    src: "/images/app/home-categories.jpg",
    caption: "Discover",
    description:
      "Set your delivery location, search for cement, RMC or sand, and jump straight into material categories.",
    alt: "Bajriwala app home screen showing delivery location, search bar, free bike delivery banner and material categories",
    width: 460,
    height: 1024,
  },
  {
    src: "/images/app/home-top-deals.jpg",
    caption: "Compare",
    description:
      "See top deals with brand, pack size, discount and bulk pricing before you add anything to the cart.",
    alt: "Bajriwala app home screen showing top deals with cement and stone aggregate product cards, prices, discounts and bulk pricing",
    width: 460,
    height: 1024,
  },
];

/** Interface details visible in the screenshots, used as annotated callouts. */
export const appHighlights = [
  {
    icon: "search" as const,
    title: "Search built for materials",
    description: "Type or use voice search to find cement, RMC, sand and more.",
  },
  {
    icon: "grid" as const,
    title: "Material categories",
    description:
      "Browse cement, RMC, bricks, paint, electrical, hardware, tiles, safety and tools.",
  },
  {
    icon: "tag" as const,
    title: "Prices and offers up front",
    description: "Pack size, discount and savings are on the product card itself.",
  },
  {
    icon: "layers" as const,
    title: "Bulk pricing",
    description: "Larger quantities show their own bulk rate, such as 5+ MT.",
  },
  {
    icon: "cart" as const,
    title: "Cart and checkout",
    description: "Add materials to the cart and place the order from your phone.",
  },
  {
    icon: "pin" as const,
    title: "Delivery address",
    description: "Pick the site you are delivering to before you order.",
  },
];

export const whyBajriwala = [
  {
    icon: "boxes" as const,
    title: "Wide material selection",
    description:
      "Explore essential construction materials from one platform instead of chasing several suppliers.",
  },
  {
    icon: "smartphone" as const,
    title: "Convenient ordering",
    description:
      "Find products and place orders from your phone, whether you are at the site or away from it.",
  },
  {
    icon: "receipt" as const,
    title: "Transparent pricing",
    description:
      "See product pricing, discounts and available bulk rates before you place the order.",
  },
  {
    icon: "truck" as const,
    title: "Site delivery",
    description:
      "Get materials delivered to your construction location with delivery planned around your order.",
  },
  {
    icon: "activity" as const,
    title: "Digital experience",
    description:
      "Track your construction-material orders through a modern app built for mobile.",
  },
  {
    icon: "hardhat" as const,
    title: "Construction focused",
    description:
      "Built specifically around construction-material procurement, not general retail.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Download the app",
    description: "Install Bajriwala from Google Play or the App Store and set up your account.",
  },
  {
    step: "02",
    title: "Choose your materials",
    description: "Search or browse categories and brands, then pick the variant and quantity you need.",
  },
  {
    step: "03",
    title: "Place your order",
    description: "Review the cart, confirm your delivery site and choose how you want to pay.",
  },
  {
    step: "04",
    title: "Get it delivered",
    description: "Your materials are dispatched to the site and you follow the order in the app.",
  },
];

export const discoveryJourney = [
  "Search",
  "Browse category",
  "Choose brand",
  "Select product",
  "Choose variant",
  "Add to cart",
  "Checkout",
  "Delivery",
];

export const deliveryTimeline = [
  {
    title: "Order placed",
    description: "You confirm the materials, the delivery site and the payment method.",
  },
  {
    title: "Processing",
    description: "The order is confirmed and prepared against the quantities you selected.",
  },
  {
    title: "Dispatched",
    description: "Materials leave for your site on the vehicle suited to the load.",
  },
  {
    title: "On the way",
    description: "Follow the order status from the app while it is in transit.",
  },
  {
    title: "Delivered",
    description: "Materials reach the construction location you ordered them for.",
  },
];

export type Feature = {
  icon:
    | "search"
    | "grid"
    | "layers"
    | "boxes"
    | "cart"
    | "card"
    | "wallet"
    | "route"
    | "truck"
    | "file"
    | "gift"
    | "bell";
  title: string;
  description: string;
  /** Optional flag from `featureFlags` that must be true for this to render. */
  flag?: keyof typeof featureFlags;
};

export const appFeatures: Feature[] = [
  {
    icon: "search",
    title: "Smart material discovery",
    description: "Search by material name or use voice search to reach what you need quickly.",
  },
  {
    icon: "grid",
    title: "Brand & category browsing",
    description: "Move through material categories and the brands available within them.",
  },
  {
    icon: "layers",
    title: "Bulk pricing",
    description: "Bulk rates are shown on the product where larger quantities qualify.",
  },
  {
    icon: "boxes",
    title: "Product variants",
    description: "Pick the pack size, grade or unit that matches the work at hand.",
  },
  {
    icon: "cart",
    title: "Digital cart",
    description: "Collect everything the site needs in one cart before checking out.",
  },
  {
    icon: "card",
    title: "Online payments",
    description: "Pay online through supported digital payment methods.",
    flag: "onlinePayments",
  },
  {
    icon: "wallet",
    title: "Cash on delivery",
    description: "Choose to pay on delivery where the option is available for your order.",
    flag: "cashOnDelivery",
  },
  {
    icon: "route",
    title: "Order tracking",
    description: "Follow the status of each order from confirmation to delivery.",
  },
  {
    icon: "truck",
    title: "Delivery management",
    description: "Orders are delivered to the site address saved on your account.",
  },
  {
    icon: "file",
    title: "GST invoice support",
    description: "Get a GST invoice for purchases made against your business details.",
    flag: "gstInvoice",
  },
  {
    icon: "gift",
    title: "Loyalty points",
    description: "Earn loyalty points on eligible purchases and use them as per programme rules.",
    flag: "loyaltyPoints",
  },
  {
    icon: "bell",
    title: "Order notifications",
    description: "Get notified as your order moves through each stage.",
  },
];

export const trustPillars = [
  {
    title: "Material discovery",
    description: "One place to look up the materials a construction site runs on.",
  },
  {
    title: "Digital ordering",
    description: "Orders placed and recorded in the app, not over scattered phone calls.",
  },
  {
    title: "Site delivery",
    description: "Delivery planned to the construction location you ordered for.",
  },
  {
    title: "Transparent pricing",
    description: "Pricing, discounts and bulk rates visible before you order.",
  },
  {
    title: "Customer support",
    description: "Reach the Bajriwala team when an order needs attention.",
  },
];

export const faqs = [
  {
    question: "What is Bajriwala?",
    answer:
      "Bajriwala is a construction-material marketplace app for Android and iPhone. Browse materials, place an order from your phone, and have them delivered to your construction site.",
  },
  {
    question: "What materials can I order?",
    answer:
      "Cement and white cement, ready-mix concrete, bricks and blocks, aggregates, sand, adhesives and chemicals, waterproofing, paint and putty, electrical, hardware for kitchens and wardrobes, tiles and grout, safety wears, and machines and tools. The catalogue in the app is the most up-to-date list.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Download the app, set the delivery location for your site, search or browse for the material you need, choose the variant and quantity, add it to your cart and complete checkout.",
  },
  {
    question: "How does delivery work?",
    answer:
      "After your order is confirmed it is processed and dispatched to the delivery address on the order, and you can follow its status in the app until it is delivered.",
  },
  {
    question: "Can I pay online?",
    answer:
      "Yes. Pay online with the digital methods shown at checkout. Cash on delivery is also offered where available for your order.",
  },
];
