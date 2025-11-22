import Image from 'next/image'

interface HeaderProps {
  onConnect: () => void
  connected: boolean
}

export default function Header({ onConnect, connected }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1A1A1A]/95 to-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/bnb_logo.png" alt="EPST" width={40} height={40} className="rounded-full" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#00D632] to-[#00FF41] bg-clip-text text-transparent">
            $EPST MINER
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#story" className="text-gray-400 hover:text-[#00D632] transition-colors">Legend</a>
          <a href="#token" className="text-gray-400 hover:text-[#00D632] transition-colors">Token</a>
          <a href="#how" className="text-gray-400 hover:text-[#00D632] transition-colors">How to Buy</a>
          <a href="#roadmap" className="text-gray-400 hover:text-[#00D632] transition-colors">Roadmap</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="https://t.me/epsteinminer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00D632]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
          {!connected ? (
            <button onClick={onConnect} className="btn-primary text-sm py-2 px-6">
              Connect Wallet
            </button>
          ) : (
            <button className="btn-primary text-sm py-2 px-6">
              Buy $EPST
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
