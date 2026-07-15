import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PearlSourceHub | Pearl River Delta Sourcing Partner",
    template: "%s | PearlSourceHub",
  },
  description:
    "PearlSourceHub helps global brands find, verify, and manage manufacturers across Shenzhen, Dongguan, Guangzhou, Foshan, Zhongshan, and Huizhou.",
  keywords: [
    "Pearl River Delta sourcing",
    "China manufacturer verification",
    "Shenzhen factory audit",
    "product development China",
    "OEM ODM project management",
    "quality inspection China",
    "supplier sourcing Guangdong",
  ],
  authors: [{ name: "PearlSourceHub" }],
  creator: "PearlSourceHub",
  publisher: "PearlSourceHub",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://www.pearlsourcehub.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.pearlsourcehub.com",
    siteName: "PearlSourceHub",
    title: "PearlSourceHub | Pearl River Delta Sourcing Partner",
    description:
      "Find, verify, and manage manufacturers across the Pearl River Delta — from product brief to sample development and mass production.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PearlSourceHub | Pearl River Delta Sourcing Partner",
    description:
      "Find, verify, and manage manufacturers across the Pearl River Delta — from product brief to sample development and mass production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
