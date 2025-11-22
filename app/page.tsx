'use client'

import { useState, useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import StakingCard from '@/components/StakingCard'
import StatsGrid from '@/components/StatsGrid'
import PoolInfo from '@/components/PoolInfo'
import ActivityFeed from '@/components/ActivityFeed'

// Solana wallet integration placeholder
declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean
      connect: () => Promise<{ publicKey: { toString: () => string } }>
      disconnect: () => Promise<void>
      publicKey?: { toString: () => string }
    }
  }
}

interface Transaction {
  id: string
  type: 'stake' | 'unstake' | 'claim'
  amount: number
  timestamp: number
  status: 'pending' | 'success' | 'failed'
  txHash?: string
}

export default function Home() {
  // Wallet state
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string>()
  const [solBalance, setSolBalance] = useState(0)
  
  // Staking state
  const [epstBalance, setEpstBalance] = useState(1000) // Mock balance
  const [stakedAmount, setStakedAmount] = useState(500)
  const [pendingRewards, setPendingRewards] = useState(2.5)
  const [totalRewards, setTotalRewards] = useState(15.75)
  
  // Pool state
  const [poolTVL, setPoolTVL] = useState(2500000)
  const [poolStakers, setPoolStakers] = useState(1247)
  const [poolAPY, setPoolAPY] = useState(8.0)
  const [rewardPool, setRewardPool] = useState(5000)
  
  // Transaction history
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'stake',
      amount: 500,
      timestamp: Date.now() - 3600000,
      status: 'success',
      txHash: '5YNmS1R9nNSCDzb5sa6xT...'
    },
    {
      id: '2',
      type: 'claim',
      amount: 2.5,
      timestamp: Date.now() - 7200000,
      status: 'success',
      txHash: '3XpL9qW2kKSDbn8xa4yZ...'
    }
  ])

  // Calculate daily yield
  const dailyYield = (stakedAmount * (poolAPY / 100)) / 365

  // Connect wallet
  const connectWallet = async () => {
    if (typeof window === 'undefined') return
    
    if (window.solana?.isPhantom) {
      try {
        const response = await window.solana.connect()
        const pubKey = response.publicKey.toString()
        setConnected(true)
        setAddress(pubKey)
        setSolBalance(Math.random() * 10) // Mock balance
        console.log('Connected to Phantom:', pubKey)
      } catch (err) {
        console.error('Connection failed:', err)
      }
    } else {
      alert('Phantom wallet not found! Please install it from phantom.app')
      window.open('https://phantom.app/', '_blank')
    }
  }

  // Stake function
  const handleStake = async (amount: number) => {
    if (!connected || amount > epstBalance) return
    
    // Mock staking transaction
    setEpstBalance(prev => prev - amount)
    setStakedAmount(prev => prev + amount)
    
    // Add transaction
    const newTx: Transaction = {
      id: Date.now().toString(),
      type: 'stake',
      amount,
      timestamp: Date.now(),
      status: 'pending',
    }
    setTransactions(prev => [newTx, ...prev])
    
    // Simulate success
    setTimeout(() => {
      setTransactions(prev => 
        prev.map(tx => 
          tx.id === newTx.id 
            ? { ...tx, status: 'success', txHash: '5YNmS1R9nNSCDzb5sa6xT...' }
            : tx
        )
      )
    }, 2000)
  }

  // Unstake function
  const handleUnstake = async (amount: number) => {
    if (!connected || amount > stakedAmount) return
    
    // Mock unstaking transaction
    setStakedAmount(prev => prev - amount)
    setEpstBalance(prev => prev + amount)
    
    // Add transaction
    const newTx: Transaction = {
      id: Date.now().toString(),
      type: 'unstake',
      amount,
      timestamp: Date.now(),
      status: 'pending',
    }
    setTransactions(prev => [newTx, ...prev])
    
    // Simulate success
    setTimeout(() => {
      setTransactions(prev => 
        prev.map(tx => 
          tx.id === newTx.id 
            ? { ...tx, status: 'success', txHash: '3XpL9qW2kKSDbn8xa4yZ...' }
            : tx
        )
      )
    }, 2000)
  }

  // Claim rewards function
  const handleClaim = async () => {
    if (!connected || pendingRewards <= 0) return
    
    // Mock claim transaction
    const claimed = pendingRewards
    setPendingRewards(0)
    setTotalRewards(prev => prev + claimed)
    setSolBalance(prev => prev + claimed)
    
    // Add transaction
    const newTx: Transaction = {
      id: Date.now().toString(),
      type: 'claim',
      amount: claimed,
      timestamp: Date.now(),
      status: 'pending',
    }
    setTransactions(prev => [newTx, ...prev])
    
    // Simulate success
    setTimeout(() => {
      setTransactions(prev => 
        prev.map(tx => 
          tx.id === newTx.id 
            ? { ...tx, status: 'success', txHash: '4ZqM3tX5lLRDcn9yb5aW...' }
            : tx
        )
      )
    }, 2000)
  }

  // Simulate reward accumulation
  useEffect(() => {
    if (!connected || stakedAmount <= 0) return
    
    const interval = setInterval(() => {
      const rewardPerSecond = dailyYield / 86400
      setPendingRewards(prev => prev + rewardPerSecond)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [connected, stakedAmount, dailyYield])

  return (
    <div className="min-h-screen bg-background">
      {/* NavBar */}
      <NavBar
        onConnect={connectWallet}
        connected={connected}
        address={address}
        balance={solBalance}
      />

      {/* Hero Section */}
      <Hero
        tvl={poolTVL}
        apy={poolAPY}
        totalStakers={poolStakers}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Stats Grid */}
        <div className="mb-8" id="stats">
          <StatsGrid
            balance={epstBalance}
            stakedAmount={stakedAmount}
            totalRewards={totalRewards}
            dailyYield={dailyYield}
          />
        </div>

        {/* Staking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Staking Card - Takes 2 columns */}
          <div className="lg:col-span-2" id="stake">
            <StakingCard
              balance={epstBalance}
              stakedAmount={stakedAmount}
              pendingRewards={pendingRewards}
              apy={poolAPY}
              onStake={handleStake}
              onUnstake={handleUnstake}
              onClaim={handleClaim}
              connected={connected}
            />
          </div>

          {/* Activity Feed - Takes 1 column */}
          <div>
            <ActivityFeed transactions={transactions} />
          </div>
        </div>

        {/* Pool Info */}
        <div id="rewards">
          <PoolInfo
            totalValueLocked={poolTVL}
            totalStakers={poolStakers}
            apy={poolAPY}
            rewardPool={rewardPool}
          />
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/epsteinminer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Buy $EPST
              </a>
              <a
                href="https://solscan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Solscan
              </a>
            </div>
            <p className="text-sm text-text-muted">
              © 2024 EpsteinMiner • Built on Solana
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
