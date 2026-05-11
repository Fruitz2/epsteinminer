# 🚀 EpsteinMiner - Complete Rebuild Plan

## Design Philosophy
**Ultra-Modern Solana Staking DApp**
- **NO IMAGES**: Pure CSS/SVG gradients and effects
- **Color Scheme**: Electric Green (#00FF41, #00D632) + Dark Greys (#0A0A0A, #1A1A1A, #2A2A2A)
- **Style**: Glassmorphism + Neumorphism hybrid with subtle animations
- **UX Goal**: Award-winning, intuitive, immersive experience

## Tech Stack
- Next.js 14.2.33 + React 18 + TypeScript
- Tailwind CSS (custom config for green theme)
- Framer Motion (smooth animations)
- @solana/web3.js + @solana/wallet-adapter-react
- Recharts (for live charts)

## Design System

### Colors
```
Primary Green: #00FF41 (neon highlight)
Secondary Green: #00D632 (accents)
Success: #22C55E
Warning: #F59E0B
Error: #EF4444

Background Dark: #0A0A0A
Surface: #1A1A1A
Card: #2A2A2A
Border: rgba(0, 255, 65, 0.1)

Text Primary: #FFFFFF
Text Secondary: #A0A0A0
Text Muted: #666666
```

### Typography
- Heading: Inter Bold (modern, clean)
- Body: Inter Regular
- Mono: JetBrains Mono (for addresses/numbers)

### Effects
1. **Glassmorphism Cards**
   - backdrop-blur-xl
   - bg-white/5
   - border with green glow
   
2. **Animated Gradients**
   - Moving mesh gradients
   - Pulse effects on hover
   
3. **Micro-interactions**
   - Button hover states
   - Number count-ups
   - Smooth transitions

## Component Architecture

### Layout Components
1. **NavBar** - Glassmorphic top nav with wallet button
2. **Sidebar** (optional) - Quick stats sidebar
3. **Footer** - Minimal, links only

### Core Components
1. **Hero Section**
   - Animated title with gradient
   - Live TVL/APY stats
   - Pulse animations
   
2. **StakingCard** (Main Feature)
   - Input amount
   - APY calculator (real-time)
   - Stake/Unstake buttons
   - Transaction preview
   - Glassmorphic design
   
3. **StatsGrid**
   - Your Balance
   - Staked Amount
   - Rewards Earned
   - Est. Daily Yield
   - Live updating numbers
   
4. **ActivityFeed**
   - Recent transactions
   - Real-time updates
   - Transaction status
   
5. **PoolInfo**
   - Total staked
   - Pool APY chart (line chart)
   - Reward rate
   
6. **WalletConnect**
   - Phantom/Solflare support
   - Clean connection flow
   - Account display

### Utility Components
- Loading skeletons
- Toast notifications
- Modals (transaction confirm)
- Tooltips with explanations

## Page Structure

### Main Dashboard (`/`)
```
├── Hero (Welcome + Quick Stats)
├── StakingCard (Primary CTA)
├── StatsGrid (4-col grid)
├── PoolInfo (Charts + Details)
└── ActivityFeed (Recent txs)
```

### Responsive Design
- Desktop: Multi-column layout
- Tablet: 2-col stacking
- Mobile: Single column, sticky CTA

## Animations & Interactions

1. **Page Load**
   - Fade in from bottom
   - Stagger children
   
2. **Hover States**
   - Card lift + glow
   - Button scale + shine
   
3. **Number Animations**
   - Count up effect
   - Shimmer on update
   
4. **Transaction Flow**
   - Progress indicator
   - Success confetti (CSS)

## Solana Integration

### Smart Contract Functions
```typescript
- stake(amount: number)
- unstake(amount: number)
- claimRewards()
- getStakedBalance()
- getRewards()
- getPoolStats()
```

### Wallet Connection
- Auto-detect Phantom/Solflare
- Handle connection errors
- Display address (shortened)
- Balance display

## Performance Optimizations
- Code splitting
- Image optimization (none needed!)
- Lazy load components
- Debounce input handlers
- Memoize expensive calculations

## Accessibility
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support
- High contrast mode ready

## Mobile UX
- Touch-friendly buttons (min 44px)
- Swipe gestures
- Bottom sheet modals
- Sticky action buttons
- Reduced motion option

## Testing Checklist
- [ ] Wallet connection flow
- [ ] Staking transaction
- [ ] Unstaking transaction
- [ ] Reward claim
- [ ] Error handling
- [ ] Mobile responsive
- [ ] Dark mode only
- [ ] Loading states
- [ ] Edge cases (0 balance, etc)

## Deployment
- Vercel (auto-deploy from GitHub)
- Environment variables for RPC
- Analytics integration
- Error monitoring (Sentry)

---

## Build Order
1. ✅ Design system + theme config
2. Layout components (Nav, Footer)
3. Hero section
4. StakingCard (core feature)
5. StatsGrid
6. PoolInfo + charts
7. ActivityFeed
8. Wallet integration
9. Polish + animations
10. Test + deploy
