import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thestevenmellor.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Steven Mellor — Content + AI + Automation = Freedom.",
    template: "%s | Steven Mellor",
  },
  description:
    "Built a 7-figure creator business using marketing, AI, and automation. Now I document every system I build so you can do the same.",
  keywords: [
    "digital products",
    "solopreneur",
    "instagram expert",
    "hybrid creator",
    "marketing automation",
  ],
  authors: [{ name: "Steven Mellor", url: siteUrl }],
  creator: "Steven Mellor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Steven Mellor",
    title: "Steven Mellor — Content + AI + Automation = Freedom.",
    description:
      "Built a 7-figure creator business using marketing, AI, and automation. Now I document every system I build so you can do the same.",
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
    title: "Steven Mellor — Content + AI + Automation = Freedom.",
    description:
      "Built a 7-figure creator business using marketing, AI, and automation. Now I document every system I build so you can do the same.",
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
      <head>
      <script
        defer
        data-website-id="dfid_ETZ4uAvDlQ2nGIonfBhT5"
        data-domain="stevenmellor.com"
        data-allowed-hostnames="thestevenmellor.thrivecart.com,thestevenmellor.com"
        src="https://datafa.st/js/script.js">
      </script>
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
