"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";

// Mock cart items from the first 3 products
const initialCartItems = [
  { product: products[0]!, quantity: 1, color: products[0]!.colors[0]! },
  { product: products[1]!, quantity: 1, color: products[1]!.colors[0]! },
  { product: products[3]!, quantity: 2, color: products[3]!.colors[0]! },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQty = (idx: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item, i) =>
          i === idx ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );
  const shipping = subtotal >= 150 ? 0 : 15;
  const total = subtotal + shipping;

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
              <span className="text-[var(--color-on-surface)]">Shopping Bag</span>
            </nav>
            <h1 className="text-[var(--font-size-headline-xl)] font-semibold leading-[var(--line-height-headline-xl)] tracking-[var(--letter-spacing-headline-xl)] text-[var(--color-primary)]">
              Your Shopping Bag
            </h1>
            <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] mt-[var(--spacing-space-xs)]">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
          {cartItems.length === 0 ? (
            <div className="text-center py-[var(--spacing-space-xl)]">
              <span className="material-symbols-outlined text-[4rem] text-[var(--color-outline)]">local_mall</span>
              <h2 className="text-[var(--font-size-headline-md)] font-semibold text-[var(--color-on-surface)] mt-[var(--spacing-space-md)]">
                Your bag is empty
              </h2>
              <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)] mt-[var(--spacing-space-sm)] mb-[var(--spacing-space-xl)]">
                Explore our collection of crafted Scandinavian objects.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-[var(--spacing-space-xs)] h-12 px-[var(--spacing-space-xl)] rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[var(--font-size-label-lg)] font-semibold"
              >
                Continue Shopping
                <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-[var(--spacing-gutter-lg)]">

              {/* Cart items */}
              <div className="flex-1 flex flex-col gap-[var(--spacing-space-md)]">
                {cartItems.map(({ product, quantity, color }, idx) => (
                  <div
                    key={product.id}
                    className="flex gap-[var(--spacing-space-lg)] bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm"
                  >
                    {/* Thumbnail */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-[var(--radius-sm)] overflow-hidden bg-[var(--color-surface-container-low)] flex-shrink-0"
                    >
                      <Image
                        src={product.images[0]!}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-[var(--spacing-space-sm)]">
                        <div>
                          <Link
                            href={`/products/${product.slug}`}
                            className="text-[var(--font-size-headline-sm)] font-medium leading-[var(--line-height-headline-sm)] text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                          >
                            {product.name}
                          </Link>
                          <div className="flex items-center gap-[var(--spacing-space-xs)] mt-[var(--spacing-space-xs)]">
                            <span
                              className="w-3.5 h-3.5 rounded-full ring-1 ring-[var(--color-outline-variant)]"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
                              {color.name}
                            </span>
                          </div>
                          <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)] mt-[var(--spacing-space-xs)]">
                            {product.category}
                          </p>
                        </div>
                        <button
                          onClick={() => updateQty(idx, -quantity)}
                          className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--color-on-surface-variant)] hover:text-[var(--color-error)] hover:bg-[var(--color-error-container)] transition-colors"
                          aria-label="Remove item"
                        >
                          <span className="material-symbols-outlined text-[1.1rem]">delete</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-[var(--spacing-space-sm)]">
                        {/* Quantity stepper */}
                        <div className="inline-flex items-center rounded-full border border-[var(--color-outline-variant)] overflow-hidden">
                          <button
                            onClick={() => updateQty(idx, -1)}
                            className="w-9 h-9 flex items-center justify-center text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors"
                          >
                            <span className="material-symbols-outlined text-[1rem]">remove</span>
                          </button>
                          <span className="w-10 text-center text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-surface)]">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQty(idx, 1)}
                            className="w-9 h-9 flex items-center justify-center text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container)] transition-colors"
                          >
                            <span className="material-symbols-outlined text-[1rem]">add</span>
                          </button>
                        </div>
                        {/* Line price */}
                        <span className="text-[var(--font-size-label-lg)] font-bold text-[var(--color-primary)]">
                          ${(product.price * quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo */}
                <div className="flex gap-[var(--spacing-space-sm)]">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 h-12 px-[var(--spacing-space-lg)] rounded-full bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] text-[var(--font-size-body-sm)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                  />
                  <button className="h-12 px-[var(--spacing-space-xl)] rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-[var(--font-size-label-lg)] font-semibold hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all">
                    Apply
                  </button>
                </div>
              </div>

              {/* Order summary */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm sticky top-[7.5rem]">
                  <h2 className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                    Order Summary
                  </h2>

                  <div className="flex flex-col gap-[var(--spacing-space-sm)] mb-[var(--spacing-space-lg)]">
                    <div className="flex justify-between">
                      <span className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">Subtotal</span>
                      <span className="text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--font-size-body-md)] text-[var(--color-on-surface-variant)]">Shipping</span>
                      <span className={`text-[var(--font-size-body-md)] font-semibold ${shipping === 0 ? "text-[var(--color-on-tertiary-container)]" : "text-[var(--color-on-surface)]"}`}>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <div className="flex items-center gap-[var(--spacing-space-xs)] bg-[var(--color-surface-container)] rounded-[var(--radius-sm)] px-[var(--spacing-space-sm)] py-[var(--spacing-space-xs)]">
                        <span className="material-symbols-outlined text-[var(--color-secondary)] text-[1rem]">info</span>
                        <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
                          Add ${(150 - subtotal).toFixed(2)} more for free shipping
                        </span>
                      </div>
                    )}
                    <div className="w-full h-px bg-[var(--color-outline-variant)]" />
                    <div className="flex justify-between">
                      <span className="text-[var(--font-size-body-lg)] font-semibold text-[var(--color-on-surface)]">Total</span>
                      <span className="text-[var(--font-size-headline-sm)] font-bold text-[var(--color-primary)]">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full h-14 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] shadow-md hover:bg-[var(--color-primary-container)] transition-all mb-[var(--spacing-space-md)]"
                  >
                    Proceed to Checkout
                    <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                  </Link>

                  <div className="flex flex-col gap-[var(--spacing-space-sm)]">
                    {[
                      { icon: "lock", text: "Secure SSL checkout" },
                      { icon: "local_shipping", text: "Carbon-neutral delivery" },
                      { icon: "assignment_return", text: "30-day returns" },
                    ].map(({ icon, text }) => (
                      <div key={text} className="flex items-center gap-[var(--spacing-space-xs)]">
                        <span className="material-symbols-outlined text-[var(--color-on-tertiary-container)] text-[1rem]">{icon}</span>
                        <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
