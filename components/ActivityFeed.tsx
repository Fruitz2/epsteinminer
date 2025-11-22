'use client'

import { ArrowUpCircle, ArrowDownCircle, Gift, ExternalLink } from 'lucide-react'

interface Transaction {
  id: string
  type: 'stake' | 'unstake' | 'claim'
  amount: number
  timestamp: number
  status: 'pending' | 'success' | 'failed'
  txHash?: string
}

interface ActivityFeedProps {
  transactions: Transaction[]
}

export default function ActivityFeed({ transactions }: ActivityFeedProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'stake':
        return <ArrowUpCircle size={20} className="text-green-400" />
      case 'unstake':
        return <ArrowDownCircle size={20} className="text-orange-400" />
      case 'claim':
        return <Gift size={20} className="text-purple-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400'
      case 'pending':
        return 'text-yellow-400'
      case 'failed':
        return 'text-red-400'
      default:
        return 'text-text-muted'
    }
  }

  const formatTime = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  if (transactions.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-background-surface flex items-center justify-center mx-auto mb-4">
          <Gift size={32} className="text-text-muted" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">No Activity Yet</h3>
        <p className="text-text-muted text-sm">
          Your staking transactions will appear here
        </p>
      </div>
    )
  }

  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div
            key={tx.id}
            className="bg-background-surface rounded-xl p-4 hover:bg-background-elevated transition-all animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-background-card flex items-center justify-center flex-shrink-0">
                {getIcon(tx.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-white font-semibold capitalize">
                      {tx.type} {tx.type === 'claim' ? 'Rewards' : '$EPST'}
                    </p>
                    <p className="text-sm text-text-muted">
                      {formatTime(tx.timestamp)}
                    </p>
                  </div>
                  <span className={`text-sm font-semibold ${getStatusColor(tx.status)} capitalize`}>
                    {tx.status}
                  </span>
                </div>

                {/* Amount */}
                <p className="text-lg font-mono font-bold text-primary">
                  {tx.amount.toFixed(4)} {tx.type === 'claim' ? 'SOL' : '$EPST'}
                </p>

                {/* Transaction Link */}
                {tx.txHash && tx.status === 'success' && (
                  <a
                    href={`https://solscan.io/tx/${tx.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light mt-2"
                  >
                    View on Solscan
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      {transactions.length >= 5 && (
        <button className="w-full mt-4 py-2 text-sm text-primary hover:text-primary-light font-semibold transition-colors">
          View All Transactions
        </button>
      )}
    </div>
  )
}
