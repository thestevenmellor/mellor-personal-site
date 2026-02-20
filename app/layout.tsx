import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steven Mellor — Building Digital Products",
    template: "%s | Steven Mellor",
  },
  description:
    "Building digital product businesses and sharing the process. Join thousands learning how to turn knowledge into products that sell themselves.",
  keywords: [
    "digital products",
    "solopreneur",
    "online business",
    "newsletter",
    "indie maker",
  ],
  authors: [{ name: "Steven Mellor", url: siteUrl }],
  creator: "Steven Mellor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Steven Mellor",
    title: "Steven Mellor — Building Digital Products",
    description:
      "Building digital product businesses and sharing the process. Join thousands learning how to turn knowledge into products that sell themselves.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steven Mellor — Building Digital Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Mellor — Building Digital Products",
    description:
      "Building digital product businesses and sharing the process. Join thousands learning how to turn knowledge into products that sell themselves.",
    creator: "@stevenmellor",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
