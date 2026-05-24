import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Advanced Dermatologist Clinic | Premium Hair & Skin Care",
  description: "Expert dermatologist clinic providing advanced treatments for hair loss, acne, pigmentation, and anti-aging. Book your consultation today.",
  keywords: "Dermatologist, Skin Care, Hair Clinic, Acne Treatment, PRP Therapy, Laser Hair Removal, Anti-Aging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-body antialiased text-foreground selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
