"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductBySlug, getRelatedProducts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

const accordionItems = [
  { label: "Description", icon: "article" },
  { label: "Materials & Craftsmanship", icon: "precision_manufacturing" },
  { label: "Shipping & Delivery", icon: "local_shipping" },
  { label: "Returns & Warranty", icon: "assignment_return" },
];

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("Description");
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) return notFound();

  const related = getRelatedProducts(product.related ?? []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-[6.875rem] min-h-screen bg-[var(--color-surface)]">

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] pt-[var(--spacing-space-lg)]">
          <nav className="flex items-center gap-[var(--spacing-space-xs)] text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
            <Link href="/" className="hover:text-[var(--color-on-surface)] transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[1rem]">chevron_right</span>
            <Link href="/products" className="hover:text-[var(--color-on-surface)] transition-colors">Products</Link>
            <span className="material-symbols-outlined text-[1rem]">chevron_right</span>
            <span className="text-[var(--color-on-surface)]">{product.name}</span>
          </nav>
        </div>

        {/* Product layout */}
        <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-margin-lg)] items-start">

            {/* Gallery */}
            <div className="flex flex-col gap-[var(--spacing-space-md)]">
              {/* Main image */}
              <div className="relative aspect-square rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface-container-low)]">
                <Image
                  src={product.images[selectedImage] ?? product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Badges */}
                {product.badge && (
                  <div className="absolute top-[var(--spacing-space-lg)] left-[var(--spacing-space-lg)] bg-[rgba(250,249,246,0.95)] backdrop-blur-md px-[var(--spacing-space-md)] py-[var(--spacing-space-xs)] rounded-full shadow-md">
                    <span className={`text-[var(--font-size-label-sm)] font-semibold ${product.badgeColor === "tertiary" ? "text-[var(--color-on-tertiary-container)]" : "text-[var(--color-secondary)]"}`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-[var(--spacing-space-lg)] right-[var(--spacing-space-lg)] bg-[rgba(250,249,246,0.9)] backdrop-blur-md px-[var(--spacing-space-sm)] py-[var(--spacing-space-xs)] rounded-full shadow-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[var(--color-on-tertiary-container)] text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  <span className="text-[var(--font-size-label-sm)] font-semibold text-[var(--color-on-tertiary-container)]">Sustainable</span>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-[var(--spacing-space-sm)]">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-[var(--radius-sm)] overflow-hidden flex-shrink-0 transition-all ${
                      selectedImage === i
                        ? "ring-2 ring-[var(--color-primary)]"
                        : "ring-1 ring-[var(--color-outline-variant)] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">

              {/* Rating */}
              <div className="flex items-center gap-[var(--spacing-space-sm)] mb-[var(--spacing-space-md)]">
                <div className="flex text-[var(--color-secondary)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-surface-variant)]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Name */}
              <h1 className="text-[var(--font-size-headline-lg)] font-semibold leading-[var(--line-height-headline-lg)] tracking-[var(--letter-spacing-headline-lg)] text-[var(--color-primary)] mb-[var(--spacing-space-sm)]">
                {product.name}
              </h1>

              {/* Origin */}
              <div className="flex items-center gap-[var(--spacing-space-xs)] mb-[var(--spacing-space-md)]">
                <span className="material-symbols-outlined text-[var(--color-on-tertiary-container)] text-[1rem]">location_on</span>
                <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">{product.origin}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-[var(--spacing-space-sm)] mb-[var(--spacing-space-lg)]">
                <span className="text-[var(--font-size-headline-md)] font-semibold text-[var(--color-primary)]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-lg)]" />

              {/* Color selector */}
              <div className="mb-[var(--spacing-space-lg)]">
                <p className="text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                  Finish — <span className="text-[var(--color-on-surface)] normal-case tracking-normal">{product.colors[selectedColor]?.name}</span>
                </p>
                <div className="flex items-center gap-[var(--spacing-space-sm)]">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      title={color.name}
                      className={`w-9 h-9 rounded-full transition-all ${
                        selectedColor === i
                          ? "ring-2 ring-offset-2 ring-[var(--color-primary)] scale-110"
                          : "ring-1 ring-[var(--color-outline-variant)] hover:scale-110"
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-[var(--spacing-space-lg)]">
                <p className="text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">
                  Quantity
                </p>
                <div className="inline-flex items-center gap-0 rounded-full border border-[var(--color-outline-variant)] overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[1.1rem]">remove</span>
                  </button>
                  <span className="w-12 text-center text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[1.1rem]">add</span>
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-[var(--spacing-space-sm)] mb-[var(--spacing-space-xl)]">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 h-14 rounded-full text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] transition-all shadow-md ${
                    addedToCart
                      ? "bg-[var(--color-on-tertiary-container)] text-white"
                      : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-container)] hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[1.2rem]">
                    {addedToCart ? "check_circle" : "shopping_bag"}
                  </span>
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </button>
                <Link
                  href="/checkout"
                  className="flex-1 h-14 rounded-full bg-[var(--color-secondary)] text-white text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] hover:opacity-90 transition-opacity shadow-md"
                >
                  <span className="material-symbols-outlined text-[1.2rem]">bolt</span>
                  Buy Now
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-[var(--spacing-space-md)] mb-[var(--spacing-space-lg)]">
                {[
                  { icon: "local_shipping", text: "Free shipping over $150" },
                  { icon: "assignment_return", text: "30-day returns" },
                  { icon: "verified", text: "10-year guarantee" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-[var(--spacing-space-xs)]">
                    <span className="material-symbols-outlined text-[var(--color-on-tertiary-container)] text-[1rem]">{icon}</span>
                    <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">{text}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-[var(--color-outline-variant)]">
                {accordionItems.map(({ label, icon }) => (
                  <div key={label} className="border-b border-[var(--color-outline-variant)]">
                    <button
                      onClick={() => setOpenAccordion(openAccordion === label ? null : label)}
                      className="w-full flex items-center justify-between py-[var(--spacing-space-md)] text-left"
                    >
                      <div className="flex items-center gap-[var(--spacing-space-sm)]">
                        <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] text-[1.1rem]">{icon}</span>
                        <span className="text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)]">{label}</span>
                      </div>
                      <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] text-[1.2rem] transition-transform"
                        style={{ transform: openAccordion === label ? "rotate(180deg)" : "rotate(0)" }}>
                        expand_more
                      </span>
                    </button>
                    {openAccordion === label && (
                      <div className="pb-[var(--spacing-space-md)] text-[var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] text-[var(--color-on-surface-variant)]">
                        {label === "Description" && (
                          <div>
                            <p className="mb-[var(--spacing-space-sm)]">{product.longDescription}</p>
                            <ul className="list-disc pl-[var(--spacing-space-lg)] space-y-1 mt-[var(--spacing-space-md)]">
                              {product.features.map((f) => <li key={f}>{f}</li>)}
                            </ul>
                          </div>
                        )}
                        {label === "Materials & Craftsmanship" && (
                          <p>Material: {product.material}. {product.origin}.</p>
                        )}
                        {label === "Shipping & Delivery" && (
                          <p>Complimentary carbon-neutral delivery on orders over $150. Standard delivery 5–8 business days. Express 2–3 business days. All pieces are individually packed in recycled materials.</p>
                        )}
                        {label === "Returns & Warranty" && (
                          <p>We offer a 30-day returns policy on all items in original condition. All LUMEN Living objects are covered by our 10-year atelier craft guarantee against material and structural defects.</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Reviews */}
          {product.reviews.length > 0 && (
            <div className="mt-[var(--spacing-space-xl)] pt-[var(--spacing-space-xl)] border-t border-[var(--color-outline-variant)]">
              <h2 className="text-[var(--font-size-headline-md)] font-semibold tracking-[var(--letter-spacing-headline-md)] text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                Customer Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm">
                    <div className="flex text-[var(--color-secondary)] mb-[var(--spacing-space-sm)]">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[1rem]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                    <p className="text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)] mb-[var(--spacing-space-xs)]">{review.title}</p>
                    <p className="text-[var(--font-size-body-sm)] leading-[var(--line-height-body-sm)] text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-md)]">{review.body}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--font-size-label-md)] font-semibold text-[var(--color-on-surface-variant)]">{review.author}</span>
                      <span className="text-[var(--font-size-label-sm)] text-[var(--color-outline)]">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-[var(--spacing-space-xl)] pt-[var(--spacing-space-xl)] border-t border-[var(--color-outline-variant)]">
              <h2 className="text-[var(--font-size-headline-md)] font-semibold tracking-[var(--letter-spacing-headline-md)] text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                You May Also Consider
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--spacing-gutter)]">
                {related.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
