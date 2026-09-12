import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";

export default function HomePage() {
  const bestSellers = products.slice(0, 4);

  return (
    <>
      <Header />
      <main className="w-full pt-[6.875rem] min-h-screen bg-[var(--color-surface)]">

        {/* ── Editorial Hero ── */}
        <section className="relative w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] pt-4 sm:pt-[var(--spacing-space-md)] md:pt-[var(--spacing-space-xl)] pb-10 sm:pb-[var(--spacing-space-xl)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-[var(--spacing-gutter-lg)] items-center">

              {/* Hero copy */}
              <div className="lg:col-span-5 flex flex-col items-start z-10">
                <div className="inline-flex items-center gap-[var(--spacing-space-xs)] bg-[var(--color-surface-container-high)] px-3 py-1.5 sm:px-[var(--spacing-space-md)] sm:py-[var(--spacing-space-xs)] rounded-full mb-5 sm:mb-[var(--spacing-space-lg)] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]" />
                  <span className="text-[0.65rem] sm:text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface)]">
                    Release 04 / Autumn Equinox
                  </span>
                </div>

                <h1 className="text-4xl sm:text-[var(--font-size-display-lg-mobile)] md:text-[var(--font-size-display-lg)] font-semibold leading-tight tracking-[var(--letter-spacing-display-lg)] text-[var(--color-primary)] mb-4 sm:mb-[var(--spacing-space-md)]">
                  Designed for Serene Living
                </h1>

                <p className="text-sm sm:text-[var(--font-size-body-lg)] leading-6 sm:leading-[var(--line-height-body-lg)] text-[var(--color-on-surface-variant)] mb-6 sm:mb-[var(--spacing-space-xl)] max-w-lg">
                  Crafted Scandinavian furniture, architectural lighting, and artisan ceramics designed to elevate everyday rituals into tactile meditations.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-[var(--spacing-space-md)] w-full sm:w-auto">
                  <Link
                    href="/products"
                    className="h-12 px-5 sm:px-[var(--spacing-space-xl)] rounded-full bg-[var(--color-primary)] text-white text-sm sm:text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] shadow-md hover:bg-[var(--color-primary-container)] hover:text-white transition-all w-full sm:w-auto"
                  >
                    <span>Explore New Collection</span>
                    <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                  </Link>
                </div>

                {/* Stats strip */}
                <div className="mt-8 sm:mt-[var(--spacing-space-xl)] pt-4 sm:pt-[var(--spacing-space-lg)] w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[var(--spacing-space-xl)]">
                  <div>
                    <p className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)]">100%</p>
                    <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">FSC-Certified Solid Timber</p>
                  </div>
                  <div className="w-px h-8 bg-[var(--color-surface-container-high)] rounded-full" />
                  <div>
                    <p className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)]">10-Year</p>
                    <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">Atelier Craft Guarantee</p>
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="lg:col-span-7 relative w-full">
                <div className="relative w-full h-[22rem] sm:h-[30rem] md:h-[34rem] lg:h-[38rem] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl bg-[var(--color-surface-container)]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRSJf0TMNtV2widsk22H3RqI8bG7Oamb32v6Dl4-FBBFIPrYdxvDhK93hWVo6eclOTobSn5zcNGNQrG5g7oClQlP6e6XAFpBXvpyz6V2hKL1SEJmy2NKvXPvhNSN6Qc70rLzY3-Pfbvnj_El2GbsJflNlQfMbXQDuLM9zllXefxGr4f34JeGqRfCksZRQ2bvO_zIKCauhCaePpKnigqfmUJFetDLdNaFTTl8OZnWbh-fRJ02iPkFQN"
                    alt="Serene Scandinavian interior with natural morning light"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  {/* Gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge — top */}
                  <div className="absolute top-4 left-4 sm:top-[var(--spacing-space-lg)] sm:left-[var(--spacing-space-lg)] bg-[rgba(250,249,246,0.9)] backdrop-blur-md px-3 py-2 sm:px-[var(--spacing-space-md)] sm:py-[var(--spacing-space-sm)] rounded-full shadow-lg flex items-center gap-[var(--spacing-space-xs)] max-w-[calc(100%-2rem)]">
                    <span className="material-symbols-outlined text-[var(--color-secondary)] text-[1rem] sm:text-[1.1rem]">architecture</span>
                    <span className="text-[0.6rem] sm:text-[var(--font-size-label-sm)] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Handcrafted in Copenhagen
                    </span>
                  </div>

                  {/* Floating badge — bottom left */}
                  <div className="absolute bottom-4 left-4 sm:bottom-[var(--spacing-space-lg)] sm:left-[var(--spacing-space-lg)] bg-[rgba(250,249,246,0.9)] backdrop-blur-md px-3 py-2 sm:px-[var(--spacing-space-md)] sm:py-[var(--spacing-space-sm)] rounded-full shadow-lg flex items-center gap-[var(--spacing-space-xs)] max-w-[calc(100%-2rem)]">
                    <span className="material-symbols-outlined text-[var(--color-tertiary-fixed-dim)] text-[1rem] sm:text-[1.1rem]">eco</span>
                    <span className="text-[0.6rem] sm:text-[var(--font-size-label-sm)] font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Sustainable Solid Oak
                    </span>
                  </div>

                  {/* Featured piece CTA */}
                  <Link
                    href="/products/saltholm-low-table"
                    className="group absolute bottom-4 right-4 sm:bottom-[var(--spacing-space-xl)] sm:right-[var(--spacing-space-lg)] bg-[rgba(8,13,19,0.8)] hover:bg-[var(--color-primary)] text-white backdrop-blur-lg px-4 py-2.5 sm:px-[var(--spacing-space-lg)] sm:py-[var(--spacing-space-sm)] rounded-full shadow-2xl flex items-center gap-2 sm:gap-[var(--spacing-space-sm)] transition-all hover:-translate-y-1"
                  >
                    <div className="text-left">
                      <p className="text-[var(--font-size-label-sm)] text-[var(--color-outline-variant)]">Featured Piece</p>
                      <p className="text-[var(--font-size-label-lg)] font-semibold">Saltholm Low Table</p>
                    </div>
                    <span className="material-symbols-outlined text-[1.2rem] group-hover:translate-x-1 transition-transform">arrow_outward</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Curated Categories ── */}
        <section className="w-full bg-[var(--color-surface-container-low)] py-[var(--spacing-space-xl)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)]">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-[var(--spacing-space-xl)] gap-[var(--spacing-space-sm)]">
              <div>
                <span className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-secondary)]">
                  Atelier Spectrum
                </span>
                <h2 className="text-3xl sm:text-[var(--font-size-headline-xl)] font-semibold leading-tight sm:leading-[var(--line-height-headline-xl)] tracking-[var(--letter-spacing-headline-xl)] text-[var(--color-primary)] mt-[var(--spacing-space-xs)]">
                  Curated Living Disciplines
                </h2>
              </div>
              <Link
                href="/products"
                className="text-[var(--font-size-label-lg)] font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] flex items-center gap-[var(--spacing-space-xs)] transition-colors"
              >
                <span>View All Disciplines</span>
                <span className="material-symbols-outlined text-[1.1rem]">north_east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)]">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.slug}`}
                  className="group flex flex-col bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface-container)]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-[var(--spacing-space-md)] right-[var(--spacing-space-md)] w-8 h-8 rounded-full bg-[rgba(250,249,246,0.8)] backdrop-blur-sm flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-on-primary)] transition-colors">
                      <span className="material-symbols-outlined text-[1.1rem]">arrow_forward</span>
                    </div>
                  </div>
                  <div className="p-[var(--spacing-space-lg)] flex flex-col">
                    <h3 className="text-[var(--font-size-headline-sm)] font-medium leading-[var(--line-height-headline-sm)] text-[var(--color-primary)] mb-[var(--spacing-space-xs)]">
                      {cat.name}
                    </h3>
                    <p className="text-[var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] text-[var(--color-on-surface-variant)]">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Best Sellers ── */}
        <section className="w-full py-[var(--spacing-space-xl)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-[var(--spacing-space-xl)] gap-[var(--spacing-space-sm)]">
              <div>
                <span className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-secondary)]">
                  Living Essentials
                </span>
                <h2 className="text-3xl sm:text-[var(--font-size-headline-xl)] font-semibold leading-tight sm:leading-[var(--line-height-headline-xl)] tracking-[var(--letter-spacing-headline-xl)] text-[var(--color-primary)] mt-[var(--spacing-space-xs)]">
                  Permanent Best Sellers
                </h2>
              </div>
              <Link
                href="/products"
                className="text-[var(--font-size-label-lg)] font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] flex items-center gap-[var(--spacing-space-xs)] transition-colors"
              >
                View All Products
                <span className="material-symbols-outlined text-[1.1rem]">north_east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)]">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Brand Story Banner ── */}
        <section className="w-full bg-[var(--color-surface-container)] py-[var(--spacing-space-xl)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[var(--spacing-gutter-lg)] items-center">
              <div className="relative h-72 sm:h-80 lg:h-[30rem] rounded-[var(--radius-md)] overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmP_7oNmG014qXnubWbJRKi2gYaBunigxuHQ4Bx5hyZvtn74vUsG0onS2yjfGrOxXPuv9nnnOn5DQC8CEZ32nwShoJKOrazTS9BJ3fxbwkHVSjJwlgjnmR-VawTj70IZZ0Jb9AFYqU1KPG41F1prU2kqguCypSX1mJvJWLEEVnmMXlzfoYf3Stmt_57TTS1TSF8zQt1-0Ss_lIgF937hZX1KCfvCoN0AfhsNfhznwlUCBmknDuyW5l"
                  alt="LUMEN Living atelier craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-secondary)] mb-[var(--spacing-space-md)]">
                  Our Philosophy
                </span>
                <h2 className="text-3xl sm:text-[var(--font-size-headline-lg)] font-semibold leading-tight sm:leading-[var(--line-height-headline-lg)] tracking-[var(--letter-spacing-headline-lg)] text-[var(--color-primary)] mb-4 sm:mb-[var(--spacing-space-lg)]">
                  Craft is not a virtue. It is a practice.
                </h2>
                <p className="text-sm sm:text-[var(--font-size-body-lg)] leading-6 sm:leading-[var(--line-height-body-lg)] text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                  Every LUMEN Living piece begins as a conversation between material and maker. Our ateliers work with sustainably sourced timber, hand-dug clay, and foraged natural fibres — materials with memory.
                </p>
                <p className="text-sm sm:text-[var(--font-size-body-lg)] leading-6 sm:leading-[var(--line-height-body-lg)] text-[var(--color-on-surface-variant)] mb-6 sm:mb-[var(--spacing-space-xl)]">
                  We do not design for trends. We design for decades. For the child who inherits the chair. For the morning ritual made beautiful.
                </p>
                <div className="flex flex-wrap gap-[var(--spacing-space-sm)]">
                  {["FSC-Certified Timber", "Zero-Waste Atelier", "Carbon Neutral Shipping", "10-Year Guarantee"].map((tag) => (
                    <span
                      key={tag}
                      className="px-[var(--spacing-space-md)] py-[var(--spacing-space-xs)] rounded-full bg-[var(--color-surface-container-lowest)] text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase text-[var(--color-on-surface-variant)] border border-[var(--color-outline-variant)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Full Product Grid Preview ── */}
        <section className="w-full py-[var(--spacing-space-xl)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)]">
            <div className="text-center mb-[var(--spacing-space-xl)]">
              <span className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-secondary)]">
                The Full Catalog
              </span>
              <h2 className="text-3xl sm:text-[var(--font-size-headline-xl)] font-semibold leading-tight sm:leading-[var(--line-height-headline-xl)] tracking-[var(--letter-spacing-headline-xl)] text-[var(--color-primary)] mt-[var(--spacing-space-xs)]">
                All LUMEN Objects
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)]">
              {products.slice(2).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-[var(--spacing-space-xl)]">
              <Link
                href="/products"
                className="inline-flex items-center gap-[var(--spacing-space-xs)] h-12 px-[var(--spacing-space-xl)] rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] transition-all"
              >
                Browse Full Collection
                <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
