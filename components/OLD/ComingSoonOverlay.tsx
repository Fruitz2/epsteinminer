export default function ComingSoonOverlay() {
  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center">
      <div className="text-center p-8 max-w-2xl">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#00D632] to-[#00FF41] bg-clip-text text-transparent mb-4">
          EpsteinMiner DApp
        </h1>
        <h2 className="text-3xl text-white mb-6">Coming Soon!</h2>
        
        <div className="space-y-4 text-gray-300">
          <p className="text-xl">
            🚀 Launch on PumpFun: <span className="text-[#00D632]">TBA</span>
          </p>
          <p className="text-xl">
            💎 Token: <span className="text-[#00D632]">$EPST</span>
          </p>
          <p className="text-xl">
            📊 Supply: <span className="text-[#00D632]">1,000,000,000 (TBD)</span>
          </p>
          <p className="text-xl">
            ⛏️ APR: <span className="text-[#00D632]">8% Daily (2,920% APY)</span>
          </p>
          <p className="text-xl">
            📍 Contract: <span className="text-[#00D632] text-sm">EPSTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
          </p>
        </div>
        
        <div className="mt-8 p-6 bg-[#1A1A1A]/80 rounded-lg border border-[#00D632]/50">
          <p className="text-gray-400 mb-4">
            The mining contract is currently being audited and tested. 
            Once the $EPST token launches on pump.fun, the dApp will go live!
          </p>
          <p className="text-sm text-gray-500">
            Join our Telegram for updates: <a href="https://t.me/epsteinminer" className="text-[#00D632] underline">@epsteinminer</a>
          </p>
        </div>
        
        <div className="mt-6 text-xs text-gray-600">
          * This is a high-risk DeFi project. DYOR. Not financial advice.
        </div>
      </div>
    </div>
  )
}
