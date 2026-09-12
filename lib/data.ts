import type { Product, Category } from "./types";

export const categories: Category[] = [
  {
    id: "lighting",
    name: "Architectural Lighting",
    description: "Pendant lamps, desk fixtures, ambient spheres.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYcL7V9WHq1TBlDAfSQj8SNkB0JjPJNRxvlpUVHBBoCg3Vyj2bhD30x-kQluUf0gVuann6maHcHp12BXT7WhjzoPOfpA37dC2C2fbCBYPR4jsG6uYR49eVSnPyTj5n-cGXp-por41-O0KgT3E-lsF6TEkTXFb8ypPl_oiQZq2Y3lIkpu3mrlxgNn5ID8fYP4dg-SUkg1aV-LXfTO8vPYrea88NEqBzIIHd2AF55wiPctu0SvVVDYa",
    slug: "architectural-lighting",
  },
  {
    id: "ceramics",
    name: "Artisan Ceramics",
    description: "Hand-thrown vases, stoneware bowls, glazed mugs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbqIrjhmzsKWlqm2mTq45NFzgqsdLIdu0J4KBKCzWcJBnJrXmreGVvYAX4DyCRhsP6HlFpkcpjAAC5vN68I9JD3tWnG5O6EPfZteJT9HGSke6_xqt8pYvIg_yJAAxj0ZBYaUaA4h_q_uU_D9wQA7SVShK6BhF1_kjA9JKTiVmswN-ezQEz_xaPpIwmJD7I1eytUAlCR2DSZ_sIKffFOE6ltmnCfQMu-miZ1b-V28C2Qkt0MZx3STjB",
    slug: "artisan-ceramics",
  },
  {
    id: "seating",
    name: "Lounge & Seating",
    description: "Bouclé armchairs, minimalist solid oak benches.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmP_7oNmG014qXnubWbJRKi2gYaBunigxuHQ4Bx5hyZvtn74vUsG0onS2yjfGrOxXPuv9nnnOn5DQC8CEZ32nwShoJKOrazTS9BJ3fxbwkHVSjJwlgjnmR-VawTj70IZZ0Jb9AFYqU1KPG41F1prU2kqguCypSX1mJvJWLEEVnmMXlzfoYf3Stmt_57TTS1TSF8zQt1-0Ss_lIgF937hZX1KCfvCoN0AfhsNfhznwlUCBmknDuyW5l",
    slug: "lounge-seating",
  },
  {
    id: "textiles",
    name: "Woven Textiles",
    description: "Merino throws, organic washed linen cushions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFRH5OEnP1k_itwrcO2F6KLjzvTxPtsZQnDSvNvpMaWhUriO72FKP2MiuTYHhZ7VvfdeuXhoLKfWU70McCmcD2Jr1YZPh2r5BNXN-Eu08BE1IW6o06fosRnF1S0MnSMyAhjfa2l68estgyUPNfehr7q2ib4VX3ehkfjNxec3Fdqowq5I7p1aecxmOFKrnCHkUF2D4EAWNCmQEA685wMw9aLV6NZdCCAtovKgomqlwyEZ0nNk2DyU7q",
    slug: "woven-textiles",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "komorebi-fluted-lamp",
    name: "Komorebi Fluted Lamp",
    category: "Architectural Lighting",
    badge: "Ceramic Atelier",
    badgeColor: "secondary",
    description: "Fluted ceramic table lamp in warm unglazed stone with brass detailing.",
    longDescription:
      "The Komorebi Lamp draws its name from the Japanese concept of sunlight filtering through leaves — dappled, shifting, luminous. Hand-formed from unglazed stoneware clay with a rhythmically fluted profile, each lamp carries subtle finger traces from the artisan who shaped it. A warm brass-threaded stem anchors the piece, while a hand-stitched linen shade diffuses warm light into a gentle atmospheric glow. No two are identical.",
    material: "Unglazed stoneware, brass hardware, linen shade",
    origin: "Made in Copenhagen, Denmark",
    price: 240,
    rating: 4.9,
    reviewCount: 42,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDWXFON00X2avP2X3Lwps2Er-QuSdHG62yjxfFtx_0eb_guVHWj7pQP_i8L79M7S9LmeG7Gn-8r5ciOFauKWYQZHAvTiVNoD1bK_i82G-7j1mTAQ5UrahvKcuLKRjhhv1pdz0E3praSeEjmgUjC51FeLMRi0In4ypUbhKTpNQigEUGXN8pZ_LR1b1LH7IYGFI0ADBH991PL5q66f79tfFXjQ19OKXFkQWE2e_gmU7tUsYKLfKgP_TGG",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpYcL7V9WHq1TBlDAfSQj8SNkB0JjPJNRxvlpUVHBBoCg3Vyj2bhD30x-kQluUf0gVuann6maHcHp12BXT7WhjzoPOfpA37dC2C2fbCBYPR4jsG6uYR49eVSnPyTj5n-cGXp-por41-O0KgT3E-lsF6TEkTXFb8ypPl_oiQZq2Y3lIkpu3mrlxgNn5ID8fYP4dg-SUkg1aV-LXfTO8vPYrea88NEqBzIIHd2AF55wiPctu0SvVVDYa",
    ],
    colors: [
      { name: "Sand", hex: "#D4C3A3" },
      { name: "Matte Black", hex: "#1E232A" },
      { name: "Warm Clay", hex: "#A87948" },
    ],
    inStock: true,
    features: [
      "Hand-formed unglazed stoneware",
      "Brass-threaded hardware",
      "Hand-stitched linen shade",
      "E27 bulb socket (bulb not included)",
      "Cord length: 2.2m",
    ],
    reviews: [
      {
        id: "r1",
        author: "Ingrid M.",
        rating: 5,
        date: "2026-08-12",
        title: "Transforms the room",
        body: "I bought two for my reading nook. The fluted texture catches the light beautifully, and the linen shade creates the warmest glow. Absolutely worth every penny.",
      },
      {
        id: "r2",
        author: "James T.",
        rating: 5,
        date: "2026-07-29",
        title: "Museum quality",
        body: "This is genuinely the most beautiful object in my apartment. The craftsmanship is exceptional — you can feel the care that went into making it.",
      },
    ],
    related: ["arkiv-solid-oak-chair", "sora-glass-carafe", "saltholm-low-table"],
  },
  {
    id: "2",
    slug: "arkiv-solid-oak-chair",
    name: "Arkiv Solid Oak Lounge Chair",
    category: "Lounge & Seating",
    badge: "Solid Oak",
    badgeColor: "tertiary",
    description: "Solid white oak lounge chair with structured joinery and oat-colored woven fabric.",
    longDescription:
      "The Arkiv Chair is a study in structural honesty. Solid white oak is selected for its tight grain and pale, luminous warmth, then dried for 18 months before our joiners cut each mortise and tenon by hand. The seat and backrest feature a taut, hand-woven textile in undyed oat, sourced from a family-run mill in the Faroe Islands. Designed to last a lifetime and age beautifully.",
    material: "Solid white oak, undyed Faroese wool textile",
    origin: "Crafted in Aarhus, Denmark",
    price: 460,
    rating: 4.9,
    reviewCount: 88,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlzTv5IRug9oRsz0v0n6sSaSitSMvqu5uyBfdsnj0IrWXndePkp3ZLC8f0GCUUAqYoseO0Ol2MYqli8kPjYPWz4PH9jXLsJAwBLQx9Gfix8iRuadnQB477VBGyruTD9h3TtDNdoIyjdYxT2UolnrvFvA25zNssz6gCXBa8hxSQyTmWPDB2gT9kAlfRT7zOpdEDNzF61mK7zHqAiGoFaosopEOvP70OjbtD7zDf6M3L3auCmi3jnrHo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmP_7oNmG014qXnubWbJRKi2gYaBunigxuHQ4Bx5hyZvtn74vUsG0onS2yjfGrOxXPuv9nnnOn5DQC8CEZ32nwShoJKOrazTS9BJ3fxbwkHVSjJwlgjnmR-VawTj70IZZ0Jb9AFYqU1KPG41F1prU2kqguCypSX1mJvJWLEEVnmMXlzfoYf3Stmt_57TTS1TSF8zQt1-0Ss_lIgF937hZX1KCfvCoN0AfhsNfhznwlUCBmknDuyW5l",
    ],
    colors: [
      { name: "Natural Oak", hex: "#B8976C" },
      { name: "Smoked Oak", hex: "#3D2817" },
      { name: "Ebonized", hex: "#1A1C1A" },
    ],
    inStock: true,
    features: [
      "Solid white oak frame — 18-month air-dried",
      "Hand-cut mortise and tenon joints",
      "Undyed Faroese wool textile seat",
      "Dimensions: W75 × D80 × H82cm",
      "Seat height: 42cm",
    ],
    reviews: [
      {
        id: "r3",
        author: "Astrid L.",
        rating: 5,
        date: "2026-09-01",
        title: "Heirloom quality",
        body: "This chair will outlive me. The joinery is impeccable, and the oak has already started to develop a beautiful patina. Worth every cent.",
      },
    ],
    related: ["saltholm-low-table", "komorebi-fluted-lamp", "haven-merino-throw"],
  },
  {
    id: "3",
    slug: "sora-glass-carafe",
    name: "Sora Handblown Glass Carafe",
    category: "Artisan Ceramics",
    badge: "Handblown",
    badgeColor: "secondary",
    description: "Handblown amber glass carafe and tumbler set on limestone plate.",
    longDescription:
      "Sora — meaning 'sky' in Japanese — captures the quality of late afternoon light in glass. Each carafe is mouth-blown by a master glassblower at our Copenhagen studio, creating the faintest amber tint from trace iron content in the silica. Paired with two hand-finished tumblers that nest perfectly within the carafe for storage. A functional object worthy of display.",
    material: "Mouth-blown silica glass, natural iron-tinted",
    origin: "Blown in Copenhagen, Denmark",
    price: 185,
    rating: 4.8,
    reviewCount: 31,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJPazbhGGXTgEhKELK0XpWouz0ALm_Kc0uZ1s-xyVdlivKGMjx-IdbK1HCH2-YmvluC5G-DN7F32q91pE0LYWzrWbsaC6rAED5CTwgeiszN362hVUqBAoIbTlPSFaM2mz_MknQI-95c7ErXa3Bno7vLvDoSs3WQdp_9XxfpM5nHZPP3YnCzltOUZH4gMmYLUJ5YDQN3Kebx4Hc-Uzh093ZMzLcirKr753eDAI-F3GfnBLrmdGpdiFO",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbqIrjhmzsKWlqm2mTq45NFzgqsdLIdu0J4KBKCzWcJBnJrXmreGVvYAX4DyCRhsP6HlFpkcpjAAC5vN68I9JD3tWnG5O6EPfZteJT9HGSke6_xqt8pYvIg_yJAAxj0ZBYaUaA4h_q_uU_D9wQA7SVShK6BhF1_kjA9JKTiVmswN-ezQEz_xaPpIwmJD7I1eytUAlCR2DSZ_sIKffFOE6ltmnCfQMu-miZ1b-V28C2Qkt0MZx3STjB",
    ],
    colors: [
      { name: "Amber", hex: "#C8860A" },
      { name: "Clear", hex: "#E8E8E0" },
      { name: "Smoke", hex: "#6B6B72" },
    ],
    inStock: true,
    features: [
      "Mouth-blown silica glass",
      "Natural iron-tinted amber hue",
      "Includes 2 matching tumblers",
      "Carafe capacity: 1.2L",
      "Dishwasher safe (gentle cycle)",
    ],
    reviews: [
      {
        id: "r4",
        author: "Sofia K.",
        rating: 5,
        date: "2026-08-22",
        title: "More beautiful in person",
        body: "The amber glass is just extraordinary. On my dining table it catches the evening light and casts the most beautiful warm patterns. A true work of art.",
      },
    ],
    related: ["komorebi-fluted-lamp", "kinjo-stoneware-bowl", "arkiv-solid-oak-chair"],
  },
  {
    id: "4",
    slug: "saltholm-low-table",
    name: "Saltholm Low Table",
    category: "Lounge & Seating",
    badge: "Solid Oak",
    badgeColor: "tertiary",
    description: "Oiled solid oak low table with architectural joinery for living spaces.",
    longDescription:
      "Named for a small island in the Øresund Strait, the Saltholm Table honours the stripped-back, elemental quality of Nordic coastal architecture. Solid oiled oak forms a continuous surface that gently tapers at the edges, supported by four legs with a whisper of a taper. The oil finish nourishes the wood and allows the natural grain to breathe, deepening in colour with age and use.",
    material: "Solid oiled white oak",
    origin: "Crafted in Stockholm, Sweden",
    price: 640,
    rating: 4.95,
    reviewCount: 56,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRSJf0TMNtV2widsk22H3RqI8bG7Oamb32v6Dl4-FBBFIPrYdxvDhK93hWVo6eclOTobSn5zcNGNQrG5g7oClQlP6e6XAFpBXvpyz6V2hKL1SEJmy2NKvXPvhNSN6Qc70rLzY3-Pfbvnj_El2GbsJflNlQfMbXQDuLM9zllXefxGr4f34JeGqRfCksZRQ2bvO_zIKCauhCaePpKnigqfmUJFetDLdNaFTTl8OZnWbh-fRJ02iPkFQN",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlzTv5IRug9oRsz0v0n6sSaSitSMvqu5uyBfdsnj0IrWXndePkp3ZLC8f0GCUUAqYoseO0Ol2MYqli8kPjYPWz4PH9jXLsJAwBLQx9Gfix8iRuadnQB477VBGyruTD9h3TtDNdoIyjdYxT2UolnrvFvA25zNssz6gCXBa8hxSQyTmWPDB2gT9kAlfRT7zOpdEDNzF61mK7zHqAiGoFaosopEOvP70OjbtD7zDf6M3L3auCmi3jnrHo",
    ],
    colors: [
      { name: "Natural", hex: "#C4A87A" },
      { name: "Smoked", hex: "#4A3728" },
    ],
    inStock: true,
    features: [
      "Solid oiled white oak",
      "Tapered edge detail",
      "Dimensions: W120 × D60 × H38cm",
      "Weight: 18kg",
      "Annual re-oiling recommended",
    ],
    reviews: [
      {
        id: "r5",
        author: "Erik V.",
        rating: 5,
        date: "2026-09-05",
        title: "The centrepiece of our living room",
        body: "Absolutely stunning. The proportions are perfect and the oak grain is exceptional. It arrived beautifully packed with a care card for maintaining the oil finish.",
      },
    ],
    related: ["arkiv-solid-oak-chair", "komorebi-fluted-lamp", "sora-glass-carafe"],
  },
  {
    id: "5",
    slug: "kinjo-stoneware-bowl",
    name: "Kinjo Stoneware Bowl Set",
    category: "Artisan Ceramics",
    badge: "Ceramic Atelier",
    badgeColor: "secondary",
    description: "Set of four hand-thrown stoneware bowls in layered ash glaze.",
    longDescription:
      "Kinjo — 'nearby gold' — describes the way natural light illuminates these bowls at different angles, revealing shifting depths within the layered ash glaze. Each bowl is thrown individually on a kick-wheel by our ceramics team, then fire-glazed twice in a gas-reduction kiln. Minor variations between pieces are intentional marks of their handmade origin.",
    material: "High-fire stoneware, layered ash glaze",
    origin: "Thrown in Bornholm, Denmark",
    price: 120,
    rating: 4.7,
    reviewCount: 24,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbqIrjhmzsKWlqm2mTq45NFzgqsdLIdu0J4KBKCzWcJBnJrXmreGVvYAX4DyCRhsP6HlFpkcpjAAC5vN68I9JD3tWnG5O6EPfZteJT9HGSke6_xqt8pYvIg_yJAAxj0ZBYaUaA4h_q_uU_D9wQA7SVShK6BhF1_kjA9JKTiVmswN-ezQEz_xaPpIwmJD7I1eytUAlCR2DSZ_sIKffFOE6ltmnCfQMu-miZ1b-V28C2Qkt0MZx3STjB",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJPazbhGGXTgEhKELK0XpWouz0ALm_Kc0uZ1s-xyVdlivKGMjx-IdbK1HCH2-YmvluC5G-DN7F32q91pE0LYWzrWbsaC6rAED5CTwgeiszN362hVUqBAoIbTlPSFaM2mz_MknQI-95c7ErXa3Bno7vLvDoSs3WQdp_9XxfpM5nHZPP3YnCzltOUZH4gMmYLUJ5YDQN3Kebx4Hc-Uzh093ZMzLcirKr753eDAI-F3GfnBLrmdGpdiFO",
    ],
    colors: [
      { name: "Ash White", hex: "#E8E4DC" },
      { name: "Storm Grey", hex: "#72747A" },
      { name: "Clay Brown", hex: "#9B7A5E" },
    ],
    inStock: true,
    features: [
      "Set of 4 hand-thrown bowls",
      "High-fire stoneware body",
      "Layered ash reduction glaze",
      "Diameter: 16cm, Height: 8cm",
      "Dishwasher and microwave safe",
    ],
    reviews: [
      {
        id: "r6",
        author: "Mette B.",
        rating: 5,
        date: "2026-08-18",
        title: "Breathtakingly beautiful",
        body: "I use these every single day. The glaze is extraordinary — it changes colour depending on how the light hits it. They make every meal feel special.",
      },
    ],
    related: ["sora-glass-carafe", "komorebi-fluted-lamp", "haven-merino-throw"],
  },
  {
    id: "6",
    slug: "haven-merino-throw",
    name: "Haven Merino Wool Throw",
    category: "Woven Textiles",
    badge: "Merino",
    badgeColor: "secondary",
    description: "Extra-fine merino wool throw in natural undyed tones, woven in Scotland.",
    longDescription:
      "The Haven Throw is woven from extra-fine 18.5-micron merino fleece on traditional 19th-century jacquard looms at a family mill in the Scottish Borders. The yarn is minimally processed — washed in soft highland water and spun without synthetic additives — preserving the wool's natural lanolin and temperature-regulating properties. Available in four undyed colourways drawn from Nordic coastal landscapes.",
    material: "100% extra-fine merino wool (18.5 micron)",
    origin: "Woven in the Scottish Borders",
    price: 195,
    rating: 4.8,
    reviewCount: 67,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFRH5OEnP1k_itwrcO2F6KLjzvTxPtsZQnDSvNvpMaWhUriO72FKP2MiuTYHhZ7VvfdeuXhoLKfWU70McCmcD2Jr1YZPh2r5BNXN-Eu08BE1IW6o06fosRnF1S0MnSMyAhjfa2l68estgyUPNfehr7q2ib4VX3ehkfjNxec3Fdqowq5I7p1aecxmOFKrnCHkUF2D4EAWNCmQEA685wMw9aLV6NZdCCAtovKgomqlwyEZ0nNk2DyU7q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmP_7oNmG014qXnubWbJRKi2gYaBunigxuHQ4Bx5hyZvtn74vUsG0onS2yjfGrOxXPuv9nnnOn5DQC8CEZ32nwShoJKOrazTS9BJ3fxbwkHVSjJwlgjnmR-VawTj70IZZ0Jb9AFYqU1KPG41F1prU2kqguCypSX1mJvJWLEEVnmMXlzfoYf3Stmt_57TTS1TSF8zQt1-0Ss_lIgF937hZX1KCfvCoN0AfhsNfhznwlUCBmknDuyW5l",
    ],
    colors: [
      { name: "Oat", hex: "#E8DCC8" },
      { name: "Fog", hex: "#B8BCCA" },
      { name: "Charcoal", hex: "#2E3038" },
      { name: "Dune", hex: "#C4A882" },
    ],
    inStock: true,
    features: [
      "100% extra-fine merino, 18.5 micron",
      "Traditional jacquard loom woven",
      "Naturally temperature regulating",
      "Dimensions: 140 × 200cm",
      "Dry clean or hand wash cold",
    ],
    reviews: [
      {
        id: "r7",
        author: "Clara H.",
        rating: 5,
        date: "2026-07-14",
        title: "The softest thing I own",
        body: "I bought the Oat colourway and it is genuinely the softest blanket I have ever touched. Completely transforms the sofa. Using it every evening.",
      },
    ],
    related: ["arkiv-solid-oak-chair", "saltholm-low-table", "kinjo-stoneware-bowl"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}
