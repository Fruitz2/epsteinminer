'use client'

import { useState, useEffect } from 'react'
import { ArrowUpCircle, ArrowDownCircle, Gift, Info } from 'lucide-react'

interface StakingCardProps {
  balance: number
  stakedAmount: number
  pendingRewards: number
  apy: number
  onStake: (amount: number) => void
  onUnstake: (amount: number) => void
  onClaim: () => void
  connected: boolean
}

export default function StakingCard({
  balance,
  stakedAmount,
  pendingRewards,
  apy,
  onStake,
  onUnstake,
  onClaim,
  connected
}: StakingCardProps) {
  const [amount, setAmount] = useState('')
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake')
  const [estimatedDaily, setEstimatedDaily] = useState(0)

  // Calculate estimated daily rewards
  useEffect(() => {
    const amountNum = parseFloat(amount) || 0
    const daily = (amountNum * (apy / 100)) / 365
    setEstimatedDaily(daily)
  }, [amount, apy])

  const handleMaxClick = () => {
    if (activeTab === 'stake') {
      setAmount(balance.toString())
    } else {
      setAmount(stakedAmount.toString())
    }
  }

  const handleSubmit = () => {
    const amountNum = parseFloat(amount)
    if (isNaN(amountNum) || amountNum <= 0) return

    if (activeTab === 'stake') {
      onStake(amountNum)
    } else {
      onUnstake(amountNum)
    }
    setAmount('')
  }

  const isValid = () => {
    const amountNum = parseFloat(amount)
    if (isNaN(amountNum) || amountNum <= 0) return false
    
    if (activeTab === 'stake') {
      return amountNum <= balance
    } else {
      return amountNum <= stakedAmount
    }
  }

  return (
    <div className="glass-card p-6 md:p-8 animated-border">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Stake $EPST</h2>
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <Info size={16} />
          <span>Earn SOL Daily</span>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('stake')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'stake'
              ? 'bg-gradient-primary text-background shadow-glow'
              : 'bg-background-surface text-text-secondary hover:bg-background-elevated'
          }`}
        >
          <ArrowUpCircle size={18} className="inline mr-2" />
          Stake
        </button>
        <button
          onClick={() => setActiveTab('unstake')}
          className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'unstake'
              ? 'bg-gradient-primary text-background shadow-glow'
              : 'bg-background-surface text-text-secondary hover:bg-background-elevated'
          }`}
        >
          <ArrowDownCircle size={18} className="inline mr-2" />
          Unstake
        </button>
      </div>

      {/* Balance Display */}
      <div className="glass-card p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-text-muted text-sm">
            {activeTab === 'stake' ? 'Available Balance' : 'Staked Balance'}
          </span>
          <span className="font-mono font-semibold text-primary">
            {activeTab === 'stake' ? balance.toFixed(4) : stakedAmount.toFixed(4)} $EPST
          </span>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mb-6">
        <label className="block text-sm text-text-muted mb-2">Amount</label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="input-field w-full text-xl font-mono pr-20"
            disabled={!connected}
          />
          <button
            onClick={handleMaxClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary-light font-semibold text-sm"
            disabled={!connected}
          >
            MAX
          </button>
        </div>
      </div>

      {/* Estimated Returns */}
      {parseFloat(amount) > 0 && activeTab === 'stake' && (
        <div className="glass-card p-4 mb-6 border border-primary/20 animate-slide-up">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Est. Daily Rewards</span>
              <span className="font-mono text-primary font-semibold">
                {estimatedDaily.toFixed(6)} SOL
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Est. Monthly Rewards</span>
              <span className="font-mono text-primary font-semibold">
                {(estimatedDaily * 30).toFixed(4)} SOL
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Est. Yearly Rewards</span>
              <span className="font-mono text-primary font-semibold">
                {(estimatedDaily * 365).toFixed(2)} SOL
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={handleSubmit}
        disabled={!connected || !isValid()}
        className="btn-primary w-full py-4 text-lg font-bold mb-4"
      >
        {!connected ? 'Connect Wallet' : activeTab === 'stake' ? 'Stake $EPST' : 'Unstake $EPST'}
      </button>

      {/* Pending Rewards */}
      {pendingRewards > 0 && (
        <div className="glass-card p-4 border border-primary/30 animate-pulse-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-muted mb-1">Pending Rewards</p>
              <p className="text-2xl font-bold text-primary font-mono">
                {pendingRewards.toFixed(6)} SOL
              </p>
            </div>
            <button
              onClick={onClaim}
              className="btn-secondary flex items-center gap-2 py-3"
              disabled={!connected}
            >
              <Gift size={18} />
              Claim
            </button>
          </div>
        </div>
      )}

      {/* Info Footer */}
      <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
        <p className="text-xs text-text-muted text-center">
          🔒 Your staked tokens are secure on Solana blockchain • No lock-up period • Withdraw anytime
        </p>
      </div>
    </div>
  )
}
