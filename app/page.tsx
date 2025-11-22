'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import MinerStats from '@/components/MinerStats'
import MiningControls from '@/components/MiningControls'
import Footer from '@/components/Footer'
import HowToModal from '@/components/HowToModal'

export default function Home() {
  const [miners, setMiners] = useState(0)
  const [mined, setMined] = useState(0)
  const [contractBalance, setContractBalance] = useState(0)
  const [walletBalance, setWalletBalance] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)

  useEffect(() => {
    // Check for Phantom wallet
    if (typeof window !== 'undefined' && window.solana?.isPhantom) {
      console.log('Phantom wallet detected')
    }
  }, [])

  const connectWallet = async () => {
    if (window.solana?.isPhantom) {
      try {
        const response = await window.solana.connect()
        console.log('Connected:', response.publicKey.toString())
        setWalletConnected(true)
      } catch (err) {
        console.error('Connection failed:', err)
      }
    } else {
      alert('Please install Phantom wallet!')
      window.open('https://phantom.app/', '_blank')
    }
  }

  const handleApprove = (amount: number) => {
    console.log('Approving', amount, '$EPST')
    // TODO: Implement Solana token approval
  }

  const handleHireMiners = (amount: number) => {
    console.log('Hiring miners with', amount, '$EPST')
    // TODO: Implement miner hiring
  }

  const handleCompound = () => {
    console.log('Compounding miners')
    // TODO: Implement compound
  }

  const handleWithdraw = () => {
    console.log('Withdrawing SOL')
    // TODO: Implement withdrawal
  }

  return (
    <div className="min-h-screen relative">
      <Header onConnect={connectWallet} connected={walletConnected} />
      
      <main className="container mx-auto max-w-3xl px-4 pt-20">
        <Banner />
        
        <MinerStats 
          miners={miners}
          productionRate={miners * 60 * 60}
          mined={mined}
          untilFull={miners > 0 ? '24h' : '?'}
        />
        
        <MiningControls
          onApprove={handleApprove}
          onHire={handleHireMiners}
          onCompound={handleCompound}
          onWithdraw={handleWithdraw}
        />
        
        <div className="panel mt-8 text-center">
          <p className="text-sm">Contract: <span className="text-[#00D632]">{contractBalance.toFixed(3)} SOL</span></p>
          <p className="text-sm">Wallet: <span className="text-[#00D632]">{walletBalance.toFixed(3)} SOL</span></p>
        </div>
      </main>
      
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      
      {isModalOpen && (
        <HowToModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
