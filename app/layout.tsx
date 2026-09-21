import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/analytics/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Bajriwala | Construction Materials Delivered to Your Site",
    template: "%s | Bajriwala",
  },
  description: siteConfig.description,
  applicationName: "Bajriwala",
  keywords: [
    "Bajriwala",
    "construction materials",
    "cement delivery",
    "RMC",
    "bricks",
    "aggregates",
    "site delivery",
  ],
  authors: [{ name: "Bajriwala" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: "Bajriwala",
    title: "Bajriwala | Construction Materials Delivered to Your Site",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajriwala | Construction Materials Delivered to Your Site",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
