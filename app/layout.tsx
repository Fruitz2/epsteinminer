import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EpsteinMiner - Elite Solana Staking",
  description: "Stake $EPST tokens and earn SOL rewards with 8% daily APY on Solana blockchain",
  keywords: ["solana", "staking", "defi", "epst", "crypto", "blockchain"],
  openGraph: {
    title: "EpsteinMiner - Elite Solana Staking",
    description: "Stake $EPST tokens and earn SOL rewards with 8% daily APY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EpsteinMiner - Elite Solana Staking",
    description: "Stake $EPST tokens and earn SOL rewards with 8% daily APY",
  },
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
