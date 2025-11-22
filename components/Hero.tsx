'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

interface HeroProps {
  tvl?: number
  apy?: number
  totalStakers?: number
}

export default function Hero({ tvl = 0, apy = 8.0, totalStakers = 0 }: HeroProps) {
  const [displayTVL, setDisplayTVL] = useState(0)
  const [displayStakers, setDisplayStakers] = useState(0)

  // Count-up animation
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const tvlIncrement = tvl / steps
    const stakersIncrement = totalStakers / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      setDisplayTVL(prev => Math.min(prev + tvlIncrement, tvl))
      setDisplayStakers(prev => Math.min(prev + stakersIncrement, totalStakers))
      
      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [tvl, totalStakers])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      {/* Floating Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up">
            <span className="text-gradient">Elite Island</span>
            <br />
            <span className="text-white">Mining Protocol</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Stake <span className="text-primary font-semibold">$EPST</span> • Earn <span className="text-primary font-semibold">SOL</span> Rewards
          </p>

          {/* APY Banner */}
          <div className="inline-flex items-center gap-3 glass-card px-8 py-4 mb-12 animate-pulse-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <TrendingUp className="text-primary" size={32} />
            <div className="text-left">
              <p className="text-sm text-text-muted">Current APY</p>
              <p className="text-3xl font-bold text-gradient font-mono">{apy.toFixed(1)}%</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* TVL */}
            <div className="stat-card glow-effect">
              <div className="flex items-center justify-center gap-3 mb-2">
                <DollarSign className="text-primary" size={24} />
                <p className="text-sm text-text-muted uppercase tracking-wide">Total Value Locked</p>
              </div>
              <p className="text-3xl font-bold text-white font-mono number-counter">
                ${displayTVL.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>

            {/* APY Info */}
            <div className="stat-card glow-effect">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="text-primary" size={24} />
                <p className="text-sm text-text-muted uppercase tracking-wide">Daily Returns</p>
              </div>
              <p className="text-3xl font-bold text-white font-mono">
                {(apy / 365).toFixed(3)}%
              </p>
            </div>

            {/* Stakers */}
            <div className="stat-card glow-effect">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users className="text-primary" size={24} />
                <p className="text-sm text-text-muted uppercase tracking-wide">Active Stakers</p>
              </div>
              <p className="text-3xl font-bold text-white font-mono number-counter">
                {Math.floor(displayStakers)}
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <p className="text-sm text-text-muted mb-2">Scroll to stake</p>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
