// This component generates a dynamic OG image using pure CSS/SVG
// Since we're not using actual images, we'll create a stylized preview

export default function OGImageGenerator() {
  return (
    <div style={{
      width: '1200px',
      height: '630px',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 30% 40%, rgba(0, 255, 65, 0.2) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle at 70% 60%, rgba(0, 214, 50, 0.15) 0%, transparent 50%)',
      }} />
      
      {/* Logo */}
      <div style={{
        width: '120px',
        height: '120px',
        background: 'linear-gradient(135deg, #00FF41 0%, #00D632 100%)',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px',
        boxShadow: '0 20px 60px rgba(0, 255, 65, 0.4)',
      }}>
        <span style={{
          color: '#0A0A0A',
          fontSize: '60px',
          fontWeight: '900',
        }}>E</span>
      </div>
      
      {/* Title */}
      <h1 style={{
        fontSize: '72px',
        fontWeight: '900',
        background: 'linear-gradient(135deg, #00FF41 0%, #00D632 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        margin: '0 0 20px 0',
        letterSpacing: '-2px',
      }}>
        EpsteinMiner
      </h1>
      
      {/* Subtitle */}
      <p style={{
        fontSize: '36px',
        color: '#FFFFFF',
        margin: '0 0 40px 0',
        fontWeight: '300',
      }}>
        Elite Solana Staking Protocol
      </p>
      
      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '60px',
        marginBottom: '40px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#00FF41',
          }}>8% APY</div>
          <div style={{
            fontSize: '18px',
            color: '#A0A0A0',
            marginTop: '8px',
          }}>Daily Rewards</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#00FF41',
          }}>$EPST</div>
          <div style={{
            fontSize: '18px',
            color: '#A0A0A0',
            marginTop: '8px',
          }}>Stake Token</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#00FF41',
          }}>SOL</div>
          <div style={{
            fontSize: '18px',
            color: '#A0A0A0',
            marginTop: '8px',
          }}>Earn Rewards</div>
        </div>
      </div>
      
      {/* CTA */}
      <div style={{
        background: 'rgba(0, 255, 65, 0.1)',
        border: '2px solid rgba(0, 255, 65, 0.3)',
        borderRadius: '12px',
        padding: '12px 30px',
        fontSize: '20px',
        color: '#00FF41',
        fontWeight: '600',
      }}>
        No Lock-up Period • Withdraw Anytime
      </div>
    </div>
  )
}
