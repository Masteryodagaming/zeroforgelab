import type { Metadata } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
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
    default: "ZeroForge — We turn ideas into reality",
    template: "%s · ZeroForge",
  },
  description:
    "ZeroForge is a Canadian digital product studio. Bring us an idea and we’ll design, build, and launch it: mobile and web apps, management tools, games, and custom tools for local businesses.",
  keywords: [
    "ZeroForge",
    "digital product studio",
    "custom app development",
    "software studio",
    "web development",
    "mobile apps",
    "digital products",
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
    title: "ZeroForge — We turn ideas into reality",
    description:
      "ZeroForge is a Canadian digital product studio. Bring us an idea, and we’ll design, build, and launch it.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ZeroForge — We turn ideas into reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroForge — We turn ideas into reality",
    description:
      "ZeroForge is a Canadian digital product studio. Bring us an idea, and we’ll design, build, and launch it.",
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
      <body className="relative min-h-full bg-background text-foreground">
        <div className="noise" aria-hidden />
        <AnimatedBackground />
        <div className="relative z-10 flex min-h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
