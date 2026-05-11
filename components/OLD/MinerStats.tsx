interface MinerStatsProps {
  miners: number
  productionRate: number
  mined: number
  untilFull: string
}

export default function MinerStats({ miners, productionRate, mined, untilFull }: MinerStatsProps) {
  return (
    <div className="space-y-6 mb-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#00D632]">
          <span className="underline">{miners}</span> $EPST Miners
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="panel flex items-center gap-4">
          <div className="text-4xl">⛏️</div>
          <div>
            <h3 className="font-bold text-white">Digging</h3>
            <p className="text-gray-400">{productionRate} feet per hour</p>
          </div>
        </div>
        
        <div className="panel flex items-center gap-4">
          <div className="text-4xl">💎</div>
          <div>
            <h3 className="font-bold text-white">Mined</h3>
            <p className="text-[#00D632]">{mined} SOL</p>
            <p className="text-gray-400 text-sm">{untilFull} until full</p>
          </div>
        </div>
      </div>
    </div>
  )
}
