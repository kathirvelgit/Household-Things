import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LUMEN Living",
    template: "%s — LUMEN Living",
  },
  description:
    "Crafted Scandinavian furniture, architectural lighting, and artisan ceramics designed to elevate everyday rituals into tactile meditations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface)] font-[var(--font-plus-jakarta-sans)] antialiased">
        {children}
      </body>
    </html>
  );
}
