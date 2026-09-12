"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";

type Step = "shipping" | "payment" | "review";

const steps: { id: Step; label: string; icon: string }[] = [
  { id: "shipping", label: "Shipping", icon: "local_shipping" },
  { id: "payment", label: "Payment", icon: "credit_card" },
  { id: "review", label: "Review", icon: "fact_check" },
];

const cartItems = [
  { product: products[0]!, quantity: 1, color: products[0]!.colors[0]! },
  { product: products[1]!, quantity: 1, color: products[1]!.colors[0]! },
];

const subtotal = cartItems.reduce((s, { product, quantity }) => s + product.price * quantity, 0);
const shipping = 0;
const total = subtotal + shipping;

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState<Step>("shipping");
  const [completed, setCompleted] = useState(false);

  const [shippingForm, setShippingForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "", country: "US",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "", cardName: "", expiry: "", cvv: "",
  });

  const stepIndex = steps.findIndex((s) => s.id === currentStep);

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep("review");
  };

  const handlePlaceOrder = () => {
    setCompleted(true);
  };

  if (completed) {
    return (
      <>
        <Header />
        <main className="w-full pt-[6.875rem] min-h-screen bg-[var(--color-surface)] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-[var(--spacing-margin)] py-[var(--spacing-space-xl)]">
            <div className="w-20 h-20 rounded-full bg-[var(--color-on-tertiary-container)] flex items-center justify-center mx-auto mb-[var(--spacing-space-lg)]">
              <span className="material-symbols-outlined text-white text-[2.5rem]">check</span>
            </div>
            <h1 className="text-[var(--font-size-headline-lg)] font-semibold text-[var(--color-primary)] mb-[var(--spacing-space-md)]">
              Order Confirmed
            </h1>
            <p className="text-[var(--font-size-body-lg)] text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-xl)]">
              Thank you for your LUMEN Living order. You will receive a confirmation email with tracking details within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-[var(--spacing-space-sm)] justify-center">
              <Link
                href="/"
                className="h-12 px-[var(--spacing-space-xl)] rounded-full bg-[var(--color-primary)] text-white text-[var(--font-size-label-lg)] font-semibold flex items-center justify-center"
              >
                Back to Home
              </Link>
              <Link
                href="/products"
                className="h-12 px-[var(--spacing-space-xl)] rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-[var(--font-size-label-lg)] font-semibold flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="w-full pt-[6.875rem] min-h-screen bg-[var(--color-surface)]">

        {/* Page header */}
        <div className="w-full bg-[var(--color-surface-container-low)] border-b border-[var(--color-outline-variant)]">
          <div className="max-w-6xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
              Checkout
            </h1>

            {/* Step indicator */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-0">
              {steps.map((step, i) => {
                const isCompleted = i < stepIndex;
                const isCurrent = step.id === currentStep;
                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? "bg-[var(--color-on-tertiary-container)] text-white shadow-sm"
                          : isCurrent
                          ? "bg-[var(--color-primary)] text-white shadow-md ring-2 ring-[var(--color-primary)] ring-offset-2"
                          : "bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)]"
                      }`}>
                        {isCompleted ? (
                          <span className="material-symbols-outlined text-[1.2rem]">check</span>
                        ) : (
                          <span className="material-symbols-outlined text-[1.1rem]">{step.icon}</span>
                        )}
                      </div>
                      <span className={`text-[var(--font-size-label-sm)] font-semibold mt-1 hidden sm:block ${
                        isCurrent ? "text-[var(--color-primary)]" : "text-[var(--color-on-surface-variant)]"
                      }`}>
                        {step.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`hidden sm:block w-16 md:w-24 h-0.5 mb-5 mx-2 rounded-full transition-all ${
                        i < stepIndex ? "bg-[var(--color-on-tertiary-container)]" : "bg-[var(--color-outline-variant)]"
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-[var(--spacing-margin)] md:px-[var(--spacing-margin-lg)] py-[var(--spacing-space-xl)]">
          <div className="flex flex-col lg:flex-row gap-[var(--spacing-gutter-lg)]">

            {/* Form area */}
            <div className="flex-1">

              {/* ─ Shipping Step ─ */}
              {currentStep === "shipping" && (
                <form onSubmit={handleShippingSubmit}>
                  <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm mb-[var(--spacing-space-lg)]">
                    <h2 className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                      Shipping Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-space-md)]">
                      {[
                        { id: "firstName", label: "First Name", type: "text", required: true, colSpan: 1 },
                        { id: "lastName", label: "Last Name", type: "text", required: true, colSpan: 1 },
                        { id: "email", label: "Email Address", type: "email", required: true, colSpan: 2 },
                        { id: "phone", label: "Phone Number", type: "tel", required: false, colSpan: 2 },
                        { id: "address", label: "Street Address", type: "text", required: true, colSpan: 2 },
                        { id: "city", label: "City", type: "text", required: true, colSpan: 1 },
                        { id: "state", label: "State / Province", type: "text", required: true, colSpan: 1 },
                        { id: "zip", label: "Postal Code", type: "text", required: true, colSpan: 1 },
                      ].map(({ id, label, type, required, colSpan }) => (
                        <div key={id} className={colSpan === 2 ? "sm:col-span-2" : ""}>
                          <label className="block text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-xs)]">
                            {label} {required && <span className="text-[var(--color-error)]">*</span>}
                          </label>
                          <input
                            type={type}
                            required={required}
                            value={shippingForm[id as keyof typeof shippingForm]}
                            onChange={(e) => setShippingForm({ ...shippingForm, [id]: e.target.value })}
                            className="w-full h-12 px-[var(--spacing-space-lg)] rounded-[var(--radius-sm)] bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] text-[var(--font-size-body-md)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] border border-[var(--color-outline-variant)] transition-all placeholder:text-[var(--color-outline)]"
                            placeholder={`Enter ${label.toLowerCase()}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 rounded-full bg-[var(--color-primary)] text-white text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] shadow-md hover:bg-[var(--color-primary-container)] hover:text-white transition-all"
                  >
                    Continue to Payment
                    <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                  </button>
                </form>
              )}

              {/* ─ Payment Step ─ */}
              {currentStep === "payment" && (
                <form onSubmit={handlePaymentSubmit}>
                  <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm mb-[var(--spacing-space-lg)]">
                    <h2 className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                      Payment Details
                    </h2>
                    <div className="flex items-center gap-[var(--spacing-space-sm)] mb-[var(--spacing-space-lg)] p-[var(--spacing-space-md)] bg-[var(--color-surface-container)] rounded-[var(--radius-sm)]">
                      <span className="material-symbols-outlined text-[var(--color-on-tertiary-container)] text-[1.2rem]">lock</span>
                      <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">
                        Your payment information is encrypted and secure.
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-space-md)]">
                      {[
                        { id: "cardNumber", label: "Card Number", placeholder: "1234 5678 9012 3456", colSpan: 2 },
                        { id: "cardName", label: "Cardholder Name", placeholder: "Name on card", colSpan: 2 },
                        { id: "expiry", label: "Expiry Date", placeholder: "MM / YY", colSpan: 1 },
                        { id: "cvv", label: "CVV", placeholder: "•••", colSpan: 1 },
                      ].map(({ id, label, placeholder, colSpan }) => (
                        <div key={id} className={colSpan === 2 ? "sm:col-span-2" : ""}>
                          <label className="block text-[var(--font-size-label-md)] font-semibold tracking-[var(--letter-spacing-label-md)] uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-xs)]">
                            {label} <span className="text-[var(--color-error)]">*</span>
                          </label>
                          <input
                            required
                            value={paymentForm[id as keyof typeof paymentForm]}
                            onChange={(e) => setPaymentForm({ ...paymentForm, [id]: e.target.value })}
                            className="w-full h-12 px-[var(--spacing-space-lg)] rounded-[var(--radius-sm)] bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] text-[var(--font-size-body-md)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] border border-[var(--color-outline-variant)] transition-all placeholder:text-[var(--color-outline)]"
                            placeholder={placeholder}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-[var(--spacing-space-sm)]">
                    <button
                      type="button"
                      onClick={() => setCurrentStep("shipping")}
                      className="h-14 px-[var(--spacing-space-xl)] rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-[var(--font-size-label-lg)] font-semibold flex items-center justify-center gap-[var(--spacing-space-xs)] hover:bg-[var(--color-surface-container)] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 h-14 rounded-full bg-[var(--color-primary)] text-white text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] shadow-md hover:bg-[var(--color-primary-container)] hover:text-white transition-all"
                    >
                      Review Order
                      <span className="material-symbols-outlined text-[1.2rem]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}

              {/* ─ Review Step ─ */}
              {currentStep === "review" && (
                <div>
                  <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm mb-[var(--spacing-space-lg)]">
                    <div className="flex items-center justify-between mb-[var(--spacing-space-lg)]">
                      <h2 className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)]">Review Your Order</h2>
                    </div>

                    {/* Items */}
                    <div className="flex flex-col gap-[var(--spacing-space-md)] mb-[var(--spacing-space-lg)]">
                      {cartItems.map(({ product, quantity, color }) => (
                        <div key={product.id} className="flex items-center gap-[var(--spacing-space-md)]">
                          <div className="relative w-16 h-16 rounded-[var(--radius-sm)] overflow-hidden bg-[var(--color-surface-container-low)] flex-shrink-0">
                            <Image src={product.images[0]!} alt={product.name} fill className="object-cover" sizes="64px" />
                          </div>
                          <div className="flex-1">
                            <p className="text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)]">{product.name}</p>
                            <p className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">{color.name} · Qty {quantity}</p>
                          </div>
                          <span className="text-[var(--font-size-label-lg)] font-bold text-[var(--color-primary)]">
                            ${(product.price * quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-lg)]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-space-lg)]">
                      <div>
                        <p className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-sm)]">
                          Shipping To
                        </p>
                        <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface)]">
                          {shippingForm.firstName || "—"} {shippingForm.lastName}<br />
                          {shippingForm.address || "123 Example Street"}<br />
                          {shippingForm.city || "Copenhagen"}, {shippingForm.state || "DK"} {shippingForm.zip || "1234"}<br />
                          {shippingForm.country}
                        </p>
                      </div>
                      <div>
                        <p className="text-[var(--font-size-label-md)] font-semibold tracking-widest uppercase text-[var(--color-on-surface-variant)] mb-[var(--spacing-space-sm)]">
                          Payment
                        </p>
                        <p className="text-[var(--font-size-body-md)] text-[var(--color-on-surface)]">
                          Card ending in {paymentForm.cardNumber.slice(-4) || "····"}<br />
                          {paymentForm.cardName || "Cardholder"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-[var(--spacing-space-sm)]">
                    <button
                      onClick={() => setCurrentStep("payment")}
                      className="h-14 px-[var(--spacing-space-xl)] rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-[var(--font-size-label-lg)] font-semibold flex items-center justify-center gap-[var(--spacing-space-xs)] hover:bg-[var(--color-surface-container)] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 h-14 rounded-full bg-[var(--color-secondary)] text-white text-[var(--font-size-label-lg)] font-semibold tracking-[var(--letter-spacing-label-lg)] flex items-center justify-center gap-[var(--spacing-space-xs)] shadow-md hover:opacity-90 transition-opacity"
                    >
                      <span className="material-symbols-outlined text-[1.2rem]">lock</span>
                      Place Order — ${total.toFixed(2)}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order summary sidebar */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-[var(--color-surface-container-lowest)] rounded-[var(--radius-DEFAULT)] p-[var(--spacing-space-lg)] shadow-sm sticky top-[7.5rem]">
                <h3 className="text-[var(--font-size-headline-sm)] font-semibold text-[var(--color-primary)] mb-[var(--spacing-space-lg)]">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-[var(--spacing-space-md)] mb-[var(--spacing-space-lg)]">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-[var(--spacing-space-sm)]">
                      <div className="relative w-12 h-12 rounded-[var(--radius-sm)] overflow-hidden bg-[var(--color-surface-container-low)] flex-shrink-0">
                        <Image src={product.images[0]!} alt={product.name} fill className="object-cover" sizes="48px" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-[0.625rem] font-bold flex items-center justify-center">
                          {quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-surface)] leading-tight">{product.name}</p>
                      </div>
                      <span className="text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-surface)]">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-md)]" />
                <div className="flex justify-between mb-[var(--spacing-space-sm)]">
                  <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">Subtotal</span>
                  <span className="text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-surface)]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-[var(--spacing-space-md)]">
                  <span className="text-[var(--font-size-body-sm)] text-[var(--color-on-surface-variant)]">Shipping</span>
                  <span className="text-[var(--font-size-body-sm)] font-semibold text-[var(--color-on-tertiary-container)]">Free</span>
                </div>
                <div className="w-full h-px bg-[var(--color-outline-variant)] mb-[var(--spacing-space-md)]" />
                <div className="flex justify-between">
                  <span className="text-[var(--font-size-body-md)] font-semibold text-[var(--color-on-surface)]">Total</span>
                  <span className="text-[var(--font-size-headline-sm)] font-bold text-[var(--color-primary)]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
