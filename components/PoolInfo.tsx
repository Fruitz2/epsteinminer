'use client'

import { TrendingUp, Users, Lock, DollarSign } from 'lucide-react'

interface PoolInfoProps {
  totalValueLocked: number
  totalStakers: number
  apy: number
  rewardPool: number
}

export default function PoolInfo({
  totalValueLocked,
  totalStakers,
  apy,
  rewardPool
}: PoolInfoProps) {
  const poolStats = [
    {
      label: 'Total Value Locked',
      value: `$${totalValueLocked.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      icon: Lock,
      color: 'text-primary'
    },
    {
      label: 'Active Stakers',
      value: totalStakers.toString(),
      icon: Users,
      color: 'text-blue-400'
    },
    {
      label: 'Current APY',
      value: `${apy.toFixed(2)}%`,
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      label: 'Reward Pool',
      value: `${rewardPool.toFixed(2)} SOL`,
      icon: DollarSign,
      color: 'text-yellow-400'
    }
  ]

  return (
    <div className="glass-card p-6 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Pool Statistics</h2>
        <p className="text-text-muted">Real-time protocol metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {poolStats.map((stat, index) => (
          <div
            key={index}
            className="bg-background-surface rounded-xl p-4 hover:bg-background-elevated transition-all glow-effect"
          >
            <div className="flex items-start justify-between mb-3">
              <stat.icon className={stat.color} size={20} />
              <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')} animate-pulse`} />
            </div>
            <p className="text-sm text-text-muted mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-white font-mono">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* APY Breakdown */}
      <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-sm font-semibold text-primary mb-3">APY Breakdown</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-text-muted">Daily Rate</span>
            <span className="text-white font-mono">{(apy / 365).toFixed(3)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Weekly Rate</span>
            <span className="text-white font-mono">{(apy / 52).toFixed(3)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Monthly Rate</span>
            <span className="text-white font-mono">{(apy / 12).toFixed(3)}%</span>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-6 flex items-start gap-3 p-4 bg-blue-400/5 rounded-xl border border-blue-400/10">
        <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
          <span className="text-blue-400 text-xs">ℹ️</span>
        </div>
        <p className="text-xs text-text-muted">
          Pool rewards are distributed proportionally based on your stake. APY is dynamic and may vary based on total pool size and network conditions.
        </p>
      </div>
    </div>
  )
}
