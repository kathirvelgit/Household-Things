import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-container)] text-[var(--color-on-primary)]">
      {/* Newsletter */}
      <div className="border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)] flex flex-col md:flex-row md:items-center justify-between gap-[var(--spacing-space-lg)]">
          <div>
            <p className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-primary-container)] mb-[var(--spacing-space-xs)]">
              The Atelier Letter
            </p>
            <h3 className="text-[var(--font-size-headline-md)] font-semibold leading-[var(--line-height-headline-md)] tracking-[var(--letter-spacing-headline-md)]">
              Stories from the studio, seasonal drops,<br className="hidden md:block" /> craft provenance.
            </h3>
          </div>
          <div className="flex items-center gap-[var(--spacing-space-sm)] w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 h-12 px-[var(--spacing-space-lg)] rounded-full bg-[rgba(255,255,255,0.1)] text-[var(--color-on-primary)] placeholder:text-[var(--color-on-primary-container)] text-[var(--font-size-body-sm)] focus:outline-none focus:ring-1 focus:ring-[rgba(255,255,255,0.4)] transition-all"
            />
            <button className="h-12 px-[var(--spacing-space-xl)] rounded-full bg-[var(--color-secondary)] text-white font-semibold text-[var(--font-size-label-lg)] tracking-[var(--letter-spacing-label-lg)] hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter-lg)]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-[var(--font-size-headline-sm)] font-semibold tracking-tight uppercase mb-[var(--spacing-space-md)]">
              LUMEN Living
            </h2>
            <p className="text-[var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] text-[var(--color-on-primary-container)] max-w-xs">
              Handcrafted Scandinavian furniture, architectural lighting, and artisan ceramics for the considered home.
            </p>
            <div className="flex items-center gap-[var(--spacing-space-sm)] mt-[var(--spacing-space-lg)]">
              {["instagram", "pinterest", "twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                >
                  <span className="material-symbols-outlined text-[1.1rem]">
                    {platform === "instagram" ? "photo_camera" : platform === "pinterest" ? "push_pin" : "chat_bubble"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase mb-[var(--spacing-space-md)] text-[var(--color-on-primary-container)]">
              Shop
            </h4>
            <ul className="space-y-[var(--spacing-space-sm)]">
              {[
                { label: "All Products", href: "/products" },
                { label: "Architectural Lighting", href: "/products?category=architectural-lighting" },
                { label: "Artisan Ceramics", href: "/products?category=artisan-ceramics" },
                { label: "Lounge & Seating", href: "/products?category=lounge-seating" },
                { label: "Woven Textiles", href: "/products?category=woven-textiles" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[var(--font-size-body-sm)] text-[var(--color-on-primary-container)] hover:text-[var(--color-on-primary)] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase mb-[var(--spacing-space-md)] text-[var(--color-on-primary-container)]">
              Company
            </h4>
            <ul className="space-y-[var(--spacing-space-sm)]">
              {["Our Story", "Craftsmanship", "Sustainability", "Ateliers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[var(--font-size-body-sm)] text-[var(--color-on-primary-container)] hover:text-[var(--color-on-primary)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase mb-[var(--spacing-space-md)] text-[var(--color-on-primary-container)]">
              Support
            </h4>
            <ul className="space-y-[var(--spacing-space-sm)]">
              {["Contact Us", "Shipping & Returns", "Care Guides", "Warranty", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[var(--font-size-body-sm)] text-[var(--color-on-primary-container)] hover:text-[var(--color-on-primary)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[var(--spacing-space-xl)] pt-[var(--spacing-space-lg)] border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-[var(--spacing-space-sm)]">
          <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-primary-container)]">
            © 2026 LUMEN Living. All rights reserved.
          </p>
          <div className="flex items-center gap-[var(--spacing-space-lg)]">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[var(--font-size-label-sm)] text-[var(--color-on-primary-container)] hover:text-[var(--color-on-primary)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
