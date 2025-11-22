'use client'

import { useState } from 'react'

interface MiningControlsProps {
  onApprove: (amount: number) => void
  onHire: (amount: number) => void
  onCompound: () => void
  onWithdraw: () => void
}

export default function MiningControls({ onApprove, onHire, onCompound, onWithdraw }: MiningControlsProps) {
  const [approveAmount, setApproveAmount] = useState(100)
  const [hireAmount, setHireAmount] = useState(10)

  return (
    <div className="space-y-6">
      <div className="panel">
        <label className="block text-sm mb-2">Enter $EPST Amount & Click Approve Below</label>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={approveAmount}
            onChange={(e) => setApproveAmount(Number(e.target.value))}
            className="input-field flex-1"
            min="0"
            step="100"
          />
          <span className="text-[#00D632] font-bold self-center">$EPST</span>
        </div>
        <button onClick={() => onApprove(approveAmount)} className="btn-primary w-full">
          Approve $EPST
        </button>
      </div>

      <div className="panel">
        <label className="block text-2xl text-[#00D632] mb-2">Enter $EPST Amount & Click Hire Below</label>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={hireAmount}
            onChange={(e) => setHireAmount(Number(e.target.value))}
            className="input-field flex-1"
            min="0"
            step="10"
          />
          <span className="text-[#00D632] font-bold self-center">$EPST</span>
        </div>
        <button onClick={() => onHire(hireAmount)} className="btn-primary w-full">
          Hire Elite Miners
        </button>
      </div>

      <div className="flex gap-4">
        <button onClick={onCompound} className="btn-hatch flex-1">
          Compound Miners
        </button>
        <button onClick={onWithdraw} className="btn-sell flex-1">
          Pocket your SOL
        </button>
      </div>
    </div>
  )
}
