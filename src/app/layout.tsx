import type { Metadata } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://zeroforgelab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZeroForge — Digital products, forged with precision",
    template: "%s · ZeroForge",
  },
  description:
    "ZeroForge is a Canadian software and digital product studio. We design and build modern web apps, brand sites, and digital tools that feel sharp, fast, and ready for the real world.",
  keywords: [
    "ZeroForge",
    "software studio",
    "web development",
    "digital products",
    "Next.js",
    "Canada",
    "zeroforgelab",
  ],
  authors: [{ name: "ZeroForge", url: siteUrl }],
  creator: "ZeroForge",
  publisher: "ZeroForge",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "ZeroForge",
    title: "ZeroForge — Digital products, forged with precision",
    description:
      "Canadian software studio crafting modern web apps, brand experiences, and digital tools.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ZeroForge — Digital products, forged with precision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroForge — Digital products, forged with precision",
    description:
      "Canadian software studio crafting modern web apps, brand experiences, and digital tools.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
