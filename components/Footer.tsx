import Image from 'next/image'

interface FooterProps {
  onOpenModal: () => void
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="mt-20 pb-10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-8">
          <a 
            href="https://pump.fun/coin/EPSTEIN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl font-bold text-[#00D632] hover:text-[#00FF41] transition-colors"
          >
            BUY $EPST ON PUMP.FUN
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="panel">
            <h4 className="text-xl font-bold mb-4 underline">Sustainability</h4>
            <p className="text-gray-400">
              EpsteinMiner pays a modest 8% daily, allowing investors to rest easy knowing that their
              investments have unlimited growth potential and a maximum, improbable risk of less than 8%.
            </p>
            <h4 className="text-xl font-bold mb-4 mt-6 underline">Verified Public Contract</h4>
            <p className="text-gray-400">
              The EpsteinMiner contract is public, verified and can be viewed here on{' '}
              <a 
                href="https://solscan.io/account/EPSTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D632] underline"
              >
                Solscan
              </a>.
            </p>
          </div>

          <div className="panel">
            <h4 className="text-xl font-bold mb-4 underline">Miner Info</h4>
            <p className="text-gray-400 mb-4">
              EpsteinMiner pays 8% daily, according to the current mining efficiency rate. The mining
              efficiency rate rises and falls as you and other players hire miners, compound earnings
              and pocket EPSTEIN.
            </p>
            <p className="text-gray-400">
              The object of the game is hiring more miners, sooner and more often than other players.
              This in turn earns you more EPSTEIN faster. Hiring more miners using your daily EPSTEIN
              earnings will 3x your miners within 30 days or less. Rewards paid in SOL!
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <button 
            onClick={onOpenModal}
            className="text-[#00D632] text-xl hover:text-[#00FF41] transition-colors underline"
          >
            How To Start Mining
          </button>
        </div>

        <div className="panel mb-8">
          <h4 className="text-xl font-bold mb-4 underline">Referral link - 5%</h4>
          <p className="text-gray-400">
            Earn <b>5%</b> of the $EPST used to hire miners by anyone who starts mining using your link
          </p>
          <button className="btn-primary mt-4">Copy RefLink</button>
        </div>

        <div className="text-center">
          <Image src="/images/solana-logo.svg" alt="Solana" width={200} height={60} className="mx-auto" />
          <div className="flex justify-center gap-8 mt-8">
            <a href="https://t.me/epsteinminer" target="_blank" rel="noopener noreferrer">
              <Image src="/images/telegram.svg" alt="Telegram" width={30} height={30} />
            </a>
            <a href="https://solscan.io/account/EPSTxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" target="_blank" rel="noopener noreferrer">
              <Image src="/images/solscan_logo.png" alt="Solscan" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
