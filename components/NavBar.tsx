'use client'

import { useState } from 'react'
import { Wallet, Menu, X } from 'lucide-react'

interface NavBarProps {
  onConnect: () => void
  connected: boolean
  address?: string
  balance?: number
}

export default function NavBar({ onConnect, connected, address, balance }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const shortenAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-background font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">EpsteinMiner</h1>
              <p className="text-xs text-text-muted">Solana Staking</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#stake" className="text-text-secondary hover:text-primary transition-colors">Stake</a>
            <a href="#stats" className="text-text-secondary hover:text-primary transition-colors">Stats</a>
            <a href="#rewards" className="text-text-secondary hover:text-primary transition-colors">Rewards</a>
            <a href="https://t.me/epsteinminer" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              Telegram
            </a>
          </div>

          {/* Wallet Button */}
          <div className="flex items-center gap-3">
            {connected && balance !== undefined && (
              <div className="hidden sm:flex items-center gap-2 glass-card px-4 py-2">
                <span className="text-primary font-mono text-sm font-semibold">
                  {balance.toFixed(2)} SOL
                </span>
              </div>
            )}
            
            <button
              onClick={onConnect}
              className={`btn-primary flex items-center gap-2 ${connected ? 'bg-background-card' : ''}`}
            >
              <Wallet size={18} />
              <span className="hidden sm:inline">
                {connected && address ? shortenAddress(address) : 'Connect Wallet'}
              </span>
              <span className="sm:hidden">
                {connected ? 'Connected' : 'Connect'}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-3">
              <a 
                href="#stake" 
                className="text-text-secondary hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stake
              </a>
              <a 
                href="#stats" 
                className="text-text-secondary hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stats
              </a>
              <a 
                href="#rewards" 
                className="text-text-secondary hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Rewards
              </a>
              <a 
                href="https://t.me/epsteinminer" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary transition-colors py-2"
              >
                Telegram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
