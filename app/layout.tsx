import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://islandminer.vercel.app'),
  title: "EpsteinMiner - Elite Solana Staking | $EPST",
  description: "Stake $EPST tokens and earn SOL rewards with 8% APY. Join the elite island mining protocol on Solana blockchain. No lock-up period, withdraw anytime.",
  keywords: ["solana", "staking", "defi", "epst", "epstein miner", "crypto", "blockchain", "sol rewards", "staking rewards", "passive income"],
  authors: [{ name: "EpsteinMiner Team" }],
  creator: "EpsteinMiner",
  publisher: "EpsteinMiner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EpsteinMiner - Elite Solana Staking | Earn 8% APY",
    description: "Stake $EPST tokens and earn SOL rewards daily. Join the most exclusive staking protocol on Solana. No lock-up period, glassmorphic UI.",
    url: "https://islandminer.vercel.app",
    siteName: "EpsteinMiner",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EpsteinMiner - Elite Solana Staking Protocol",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EpsteinMiner - Elite Solana Staking | $EPST",
    description: "Stake $EPST, earn SOL rewards with 8% APY. The most exclusive staking protocol on Solana.",
    images: ["/og-image.png"],
    creator: "@epsteinminer",
    site: "@epsteinminer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00FF41" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
