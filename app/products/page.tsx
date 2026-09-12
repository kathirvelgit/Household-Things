"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rating", value: "rating" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceMax, setPriceMax] = useState(1000);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "all") {
      list = list.filter(
        (p) => p.category.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-") ===
          selectedCategory
      );
    }
    list = list.filter((p) => p.price <= priceMax);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, sortBy, priceMax]);

  return (
    <>
      <Header />
      <main className="w-full pt-[6.875rem] min-h-screen bg-[var(--color-surface)]">

        {/* Page header */}
        <div className="w-full bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]">
          <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
            <nav className="flex items-center gap-[var(--spacing-space-xs)] text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
              <Link href="/" className="hover:text-[var(--color-on-surface)] transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[1rem]">chevron_right</span>
              <span className="text-[var(--color-on-surface)]">Products</span>
            </nav>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-primary)]">
              All Objects
            </h1>
            <p className="text-sm sm:text-[var(--font-size-body-lg)] leading-[var(--line-height-body-lg)] text-[var(--color-on-surface-variant)] mt-[var(--spacing-space-sm)]">
              {filtered.length} piece{filtered.length !== 1 ? "s" : ""} — crafted for considered living
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
          <div className="flex flex-col lg:flex-row gap-[var(--spacing-gutter-lg)]">

            {/* Sidebar filters */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm sticky top-[7.5rem]">

                {/* Category filter */}
                <div className="mb-[var(--spacing-space-lg)]">
                  <h3 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                    Category
                  </h3>
                  <div className="flex flex-col gap-[var(--spacing-space-sm)]">
                    {[{ id: "all", name: "All Objects" }, ...categories].map((cat) => {
                      const val = "id" in cat && cat.id === "all"
                        ? "all"
                        : "slug" in cat
                        ? cat.slug
                        : "all";
                      const isActive = selectedCategory === val;
                      return (
                        <button
                          key={val}
                          onClick={() => setSelectedCategory(val)}
                          className={`text-left px-[var(--spacing-space-md)] py-[var(--spacing-space-sm)] rounded-full text-[var(--font-size-body-sm)] font-medium transition-colors ${
                            isActive
                              ? "bg-[var(--color-primary)] text-white"
                              : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)]"
                          }`}
                        >
                          {cat.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-lg)]" />

                {/* Price filter */}
                <div className="mb-[var(--spacing-space-lg)]">
                  <h3 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                    Max Price
                  </h3>
                  <div className="flex items-center justify-between mb-[var(--spacing-space-sm)]">
                    <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">$0</span>
                    <span className="text-[var(--font-size-label-lg)] font-semibold text-[var(--color-primary)]">
                      ${priceMax}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1000}
                    step={50}
                    value={priceMax}
                    onChange={(e) => setPriceMax(Number(e.target.value))}
                    className="w-full accent-[var(--color-primary)]"
                  />
                </div>

                <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-lg)]" />

                {/* Material tags */}
                <div>
                  <h3 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                    Material
                  </h3>
                  <div className="flex flex-wrap gap-[var(--spacing-space-xs)]">
                    {["Solid Oak", "Stoneware", "Merino Wool", "Blown Glass", "Brass"].map((m) => (
                      <button
                        key={m}
                        className="px-[var(--spacing-space-sm)] py-[var(--spacing-space-xs)] rounded-full border border-[var(--color-outline-variant)] text-[var(--font-size-label-sm)] font-semibold tracking-[var(--letter-spacing-label-sm)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {/* Sort bar */}
              <div className="flex flex-col gap-[var(--spacing-space-sm)] sm:flex-row sm:items-center sm:justify-between mb-[var(--spacing-space-lg)]">
                <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
                  Showing <span className="font-semibold text-[var(--color-on-surface)]">{filtered.length}</span> items
                </p>
                <div className="flex items-center gap-[var(--spacing-space-sm)]">
                  <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="h-10 pl-[var(--spacing-space-md)] pr-8 rounded-full bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] text-[var(--font-size-body-sm)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] appearance-none cursor-pointer w-full sm:w-auto"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-[var(--spacing-space-xl)]">
                  <span className="material-symbols-outlined text-[3rem] text-[var(--color-outline)]">search_off</span>
                  <p className="text-[var(--font-size-headline-sm)] font-medium text-[var(--color-on-surface-variant)] mt-[var(--spacing-space-md)]">
                    No pieces match your filters
                  </p>
                  <button
                    onClick={() => { setSelectedCategory("all"); setPriceMax(1000); }}
                    className="mt-[var(--spacing-space-md)] text-[var(--font-size-label-lg)] font-semibold text-[var(--color-primary)] underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[var(--spacing-gutter)]">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
