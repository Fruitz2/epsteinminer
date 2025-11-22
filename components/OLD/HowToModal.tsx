interface HowToModalProps {
  onClose: () => void
}

export default function HowToModal({ onClose }: HowToModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[#1A1A1A] border border-[#00D632] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#00D632]">How to start mining:</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>1) Send SOL to Phantom/Solflare wallet on Solana Chain.</p>
            <p>2) Go to <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="text-[#00D632] underline">pump.fun</a> and buy $EPST tokens with SOL</p>
            <p>3) At EpsteinMiner:</p>
            <div className="pl-4 space-y-2">
              <p>A. Approve the amount of $EPST tokens you wish to spend.</p>
              <p>B. Enter the $EPST amount to Hire Elite Miners.</p>
              <p>C. Click Hire miners.</p>
              <p>D. Compound Daily to hire more miners to increase your profit.</p>
              <p>E. Withdraw Profit using the &quot;Pocket Your SOL&quot; button (pays SOL, not $EPST).</p>
            </div>
            
            <h3 className="text-xl font-bold text-[#00D632] pt-4">
              Approve $EPST → Hire Elite Miners → Earn SOL → Compound Daily → Withdraw SOL Profits!
            </h3>
            
            <div className="pt-4 text-sm">
              <p className="font-bold">*** Disclaimer *** Risk warning:</p>
              <p>EPSTEINMINER is subject to high risk. Please make your investment cautiously. EpsteinMiner will not be responsible for your investment losses.</p>
              <p className="mt-2">Crypto markets and Blockchain technology are high risk!</p>
              <p>Always do your own due diligence</p>
              <h3 className="text-lg font-bold mt-2">Don&apos;t invest more than you can afford to lose!</h3>
              <p className="mt-4">Thanks for your support!</p>
              <p>EpsteinMiner Team</p>
            </div>
          </div>
          
          <button onClick={onClose} className="btn-primary w-full mt-6">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
