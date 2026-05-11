'use client'

import { useEffect, useState } from 'react'
import { Wallet, TrendingUp, Gift, Zap } from 'lucide-react'

interface StatsGridProps {
  balance: number
  stakedAmount: number
  totalRewards: number
  dailyYield: number
}

export default function StatsGrid({
  balance,
  stakedAmount,
  totalRewards,
  dailyYield
}: StatsGridProps) {
  const [animatedBalance, setAnimatedBalance] = useState(0)
  const [animatedStaked, setAnimatedStaked] = useState(0)
  const [animatedRewards, setAnimatedRewards] = useState(0)
  const [animatedYield, setAnimatedYield] = useState(0)

  useEffect(() => {
    const duration = 1000
    const steps = 30
    
    const balanceStep = balance / steps
    const stakedStep = stakedAmount / steps
    const rewardsStep = totalRewards / steps
    const yieldStep = dailyYield / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      setAnimatedBalance(prev => Math.min(prev + balanceStep, balance))
      setAnimatedStaked(prev => Math.min(prev + stakedStep, stakedAmount))
      setAnimatedRewards(prev => Math.min(prev + rewardsStep, totalRewards))
      setAnimatedYield(prev => Math.min(prev + yieldStep, dailyYield))
      
      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [balance, stakedAmount, totalRewards, dailyYield])

  const stats = [
    {
      icon: Wallet,
      label: 'Your Balance',
      value: animatedBalance,
      suffix: '$EPST',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: TrendingUp,
      label: 'Total Staked',
      value: animatedStaked,
      suffix: '$EPST',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Gift,
      label: 'Total Rewards',
      value: animatedRewards,
      suffix: 'SOL',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Zap,
      label: 'Est. Daily Yield',
      value: animatedYield,
      suffix: 'SOL',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-card glow-effect animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Icon */}
          <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center mb-4`}>
            <stat.icon className={stat.color} size={24} />
          </div>

          {/* Label */}
          <p className="text-sm text-text-muted mb-2 uppercase tracking-wide">
            {stat.label}
          </p>

          {/* Value */}
          <p className="text-2xl md:text-3xl font-bold text-white font-mono number-counter">
            {stat.value.toFixed(stat.suffix === 'SOL' ? 6 : 2)}
          </p>

          {/* Suffix */}
          <p className={`text-sm ${stat.color} font-semibold mt-1`}>
            {stat.suffix}
          </p>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 shimmer opacity-0 hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
        </div>
      ))}
    </div>
  )
}
