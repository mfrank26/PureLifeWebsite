import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medicare & Life Insurance Plans | Pure Life Insurance Services",
  description:
    "Independent Medicare insurance agency — compare 50+ carriers, get personalized plan recommendations, and speak with a licensed agent in under 30 seconds.",
  keywords:
    "Medicare plans, Medicare Advantage, Medicare Supplement, life insurance, independent insurance agency",
  openGraph: {
    title: "Medicare & Life Insurance Plans | Pure Life Insurance Services",
    description:
      "Independent Medicare insurance agency — compare 50+ carriers and speak with a licensed agent in under 30 seconds.",
    url: "https://purelifeis.com",
    siteName: "Pure Life Insurance Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare & Life Insurance Plans | Pure Life Insurance Services",
    description:
      "Compare 50+ Medicare carriers. Licensed agents. Calls answered in < 30 seconds.",
  },
  alternates: {
    canonical: "https://purelifeis.com",
    languages: {
      "es": "https://purelifeis.com/es",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${jakarta.variable}`}
    >
      <body className="antialiased bg-navy-950 text-white">
        {children}
      </body>
    </html>
  );
}
