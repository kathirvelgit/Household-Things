"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WISHLIST_STORAGE_KEY = "lumen-wishlist";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Cart", href: "/cart" },
  { label: "Checkout", href: "/checkout" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const syncWishlist = () => {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      setWishlist(stored ? JSON.parse(stored) : []);
    };

    syncWishlist();
    window.addEventListener("lumen-wishlist-change", syncWishlist);

    return () => window.removeEventListener("lumen-wishlist-change", syncWishlist);
  }, []);

  const isWishlisted = wishlist.length > 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Announcement bar */}
      <div className="w-full bg-[var(--color-primary-container)] text-[var(--color-on-primary)] text-center py-[var(--spacing-space-xs)] px-[var(--spacing-margin)]">
        <p className="text-[var(--font-size-label-sm)] font-semibold tracking-widest uppercase">
          Complimentary worldwide carbon-neutral delivery on orders over $150
        </p>
      </div>

      {/* Main nav */}
      <div
        className="h-16 md:h-20 bg-[rgba(250,249,246,0.85)] backdrop-blur-xl border-b border-[rgba(30,35,42,0.05)] transition-all"
      >
        <div className="max-w-7xl mx-auto h-full px-3 sm:px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] flex items-center justify-between gap-2 md:gap-[var(--spacing-gutter)] min-w-0">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm sm:text-lg md:text-[var(--font-size-headline-sm)] font-semibold tracking-tight text-[var(--color-on-surface)] uppercase whitespace-nowrap"
          >
            LUMEN Living
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-[var(--spacing-space-lg)] min-w-0">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    isActive
                      ? "text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase bg-[var(--color-primary-container)] text-white rounded-full px-[var(--spacing-space-md)] py-[var(--spacing-space-xs)] shadow-sm hover:text-white"
                      : "text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors py-[var(--spacing-space-xs)] px-[var(--spacing-space-sm)]"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-[var(--spacing-space-sm)] md:gap-[var(--spacing-space-md)] shrink-0">
            {/* Search — desktop */}
            <div className="relative hidden md:flex items-center">
              <span className="material-symbols-outlined absolute left-[var(--spacing-space-md)] text-[var(--color-outline)] pointer-events-none text-[1.25rem]">
                search
              </span>
              <input
                className="w-32 sm:w-40 lg:w-48 xl:w-64 h-10 pl-10 pr-[var(--spacing-space-md)] rounded-full bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-[var(--font-size-body-sm)] focus:outline-none focus:bg-[var(--color-surface-container-lowest)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                placeholder="Search catalog..."
                type="search"
              />
            </div>

            {/* Search icon — mobile */}
            <button
              aria-label="Search"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)] transition-colors"
            >
              <span className="material-symbols-outlined text-[1.25rem]">search</span>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Wishlist"
              onClick={() => {
                if (wishlist.length > 0) {
                  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([]));
                  window.dispatchEvent(new Event("lumen-wishlist-change"));
                }
              }}
              className={`relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors ${
                isWishlisted
                  ? "bg-[var(--color-surface-container-high)] text-[var(--color-secondary)]"
                  : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-high)]"
              }`}
            >
              <span
                className="material-symbols-outlined text-[1.25rem]"
                style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
              >
                favorite
              </span>
              <span className="absolute top-1.5 right-1.5 min-w-[1.125rem] h-[1.125rem] px-1 rounded-full bg-[var(--color-secondary)] text-[var(--color-on-secondary)] text-[var(--font-size-label-sm)] font-semibold flex items-center justify-center">
                {wishlist.length}
              </span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping Bag"
              className="flex items-center gap-[var(--spacing-space-xs)] bg-[var(--color-surface-container-low)] hover:bg-[var(--color-surface-container-high)] transition-colors rounded-full px-2.5 py-1.5 sm:px-[var(--spacing-space-md)] sm:py-[var(--spacing-space-xs)]"
            >
              <span className="material-symbols-outlined text-[1.25rem] text-[var(--color-on-surface)]">
                local_mall
              </span>
              <span className="text-[var(--font-size-label-md)] font-semibold text-[var(--color-on-surface)]">
                3
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-high)] transition-colors"
              aria-label="Open menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="material-symbols-outlined text-[1.25rem]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-surface-container-lowest)] border-b border-[var(--color-outline-variant)] shadow-lg">
          <nav className="flex flex-col py-[var(--spacing-space-md)]">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-[var(--spacing-margin)] py-[var(--spacing-space-md)] text-[var(--font-size-body-md)] font-medium transition-colors ${
                  pathname === href
                    ? "text-white bg-[var(--color-primary-container)]"
                    : "text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
