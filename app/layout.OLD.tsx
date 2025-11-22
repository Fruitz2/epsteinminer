import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EpsteinMiner | Elite Island Mining Operation',
  description: 'Elite Island Mining Operation - Solana dApp with 8% Daily APR. Stake $EPST, earn SOL.',
  keywords: 'Epstein, miner, Solana, crypto, $EPST, mining, DeFi',
  openGraph: {
    title: 'EpsteinMiner - 8% Daily APR',
    description: 'Hire Elite Miners to earn SOL on Solana',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EpsteinMiner - 8% Daily APR',
    description: 'Hire Elite Miners to earn SOL on Solana',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon/favicon.png" />
        <meta name="theme-color" content="#00D632" />
      </head>
      <body>{children}</body>
    </html>
  )
}
