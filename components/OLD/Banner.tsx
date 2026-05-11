import Image from 'next/image'

export default function Banner() {
  return (
    <div className="panel text-center py-10 mb-8">
      <Image 
        src="/images/logo.png" 
        alt="EpsteinMiner" 
        width={150} 
        height={150} 
        className="mx-auto mb-6 rounded-full border-4 border-[#00D632]/30"
      />
      <div className="space-y-2">
        <p className="text-4xl font-bold text-[#00D632]">8% Daily</p>
        <p className="text-2xl text-gray-400">2,920% APR</p>
      </div>
    </div>
  )
}
