"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const badgeColorClass =
    product.badgeColor === "tertiary"
      ? "text-[var(--color-on-tertiary-container)]"
      : "text-[var(--color-secondary)]";

  return (
    <div
      className={`group flex flex-col bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-md)] shadow-[0_8px_30px_-4px_rgba(30,35,42,0.04),0_2px_6px_-1px_rgba(30,35,42,0.02)] hover:shadow-[0_20px_35px_-8px_rgba(30,35,42,0.07),0_4px_10px_-2px_rgba(30,35,42,0.03)] hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-square rounded-[var(--radius-sm)] overflow-hidden bg-[var(--color-surface-container-low)] mb-[var(--spacing-space-md)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-[var(--spacing-space-sm)] left-[var(--spacing-space-sm)] bg-[var(--color-surface)/90] backdrop-blur-md px-[var(--spacing-space-sm)] py-0.5 rounded-full">
            <span className={`text-[var(--font-size-label-sm)] font-semibold ${badgeColorClass}`}>
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-[var(--spacing-space-xs)] mb-[var(--spacing-space-xs)]">
        <div className="flex text-[var(--color-secondary)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="material-symbols-outlined text-[0.95rem]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
          ))}
        </div>
        <span className="text-[var(--font-size-label-sm)] font-semibold text-[var(--color-on-surface-variant)]">
          {product.rating} ({product.reviewCount})
        </span>
      </div>

      {/* Name */}
      <Link
        href={`/products/${product.slug}`}
        className="text-[var(--font-size-headline-sm)] font-medium leading-[var(--line-height-headline-sm)] tracking-[var(--letter-spacing-headline-sm)] text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-[var(--spacing-space-xs)]"
      >
        {product.name}
      </Link>

      {/* Price + Colors */}
      <div className="flex items-center justify-between mt-auto pt-[var(--spacing-space-sm)]">
        <span className="text-[var(--font-size-label-lg)] font-bold tracking-[var(--letter-spacing-label-lg)] text-[var(--color-primary)]">
          ${product.price.toFixed(2)}
        </span>
        <div className="flex items-center gap-1.5">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="w-3.5 h-3.5 rounded-full ring-1 ring-[var(--color-surface-container-highest)] cursor-pointer hover:scale-125 transition-transform"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Quick Add */}
      <Link
        href={`/products/${product.slug}`}
        className="mt-[var(--spacing-space-md)] w-full h-11 rounded-full bg-[var(--color-surface-container-low)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] text-[var(--color-on-surface)] text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] flex items-center justify-center gap-[var(--spacing-space-xs)] transition-colors"
      >
        <span className="material-symbols-outlined text-[1.1rem]">shopping_bag</span>
        <span>Quick Add</span>
      </Link>
    </div>
  );
}
