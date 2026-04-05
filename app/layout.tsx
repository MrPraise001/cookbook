import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keto-Vegan Secrets | Burn Fat, Stay Plant-Based",
  description:
    "Discover the ultimate keto-vegan roadmap. Burn fat, stay plant-based, and thrive with science-backed recipes and guides.",
  keywords: [
    "keto vegan",
    "plant-based keto",
    "vegan weight loss",
    "keto recipes",
    "vegan recipes",
    "ebook",
    "macro calculator",
    "fat loss",
    "vegetarian keto",
  ],
  openGraph: {
    title: "Keto-Vegan Secrets | Burn Fat, Stay Plant-Based",
    description:
      "Discover the ultimate keto-vegan roadmap. Burn fat, stay plant-based, and thrive with science-backed recipes and guides.",
    url: "https://yourdomain.com/",
    siteName: "Keto-Vegan Secrets",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keto-Vegan Secrets Ebook Cover",
      },
    ],
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* BidVertiser Conversion Pixel Placeholder */}
        <script id="bidvertiser-pixel-placeholder">
          {/* Place your BidVertiser pixel script here */}
        </script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
