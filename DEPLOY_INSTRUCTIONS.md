# EpsteinMiner - Vercel Deployment Instructions

## 🚀 Deploy to Vercel (NO npm required!)

### Method 1: Vercel Web UI (RECOMMENDED)

1. **Go to Vercel**: https://vercel.com/new
2. **Import Git Repository**: 
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Paste: `https://github.com/Fruitz2/islandminer`
   - Click "Import"
3. **Configure Project**:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
4. **Environment Variables**: None required
5. **Click Deploy** ✅

Vercel will automatically:
- Run `npm install` 
- Build the Next.js app
- Deploy to a live URL

### After Deployment

1. **Custom Domain** (optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS setup instructions

2. **Enable DApp** (when ready):
   - Edit `/app/page.tsx`
   - Change: `const [dappLive, setDappLive] = useState(false)`
   - To: `const [dappLive, setDappLive] = useState(true)`
   - Commit and push - auto-redeploys!

3. **Update Contract Addresses**:
   - Edit `/public/js/interface.js`
   - Replace placeholder addresses with real Solana addresses:
     - `minersAddr`: Your Solana Program ID
     - `tokenAddr`: Your $EPST SPL Token Address

## 📱 Project Structure

```
epsteinminer/
├── app/
│   ├── page.tsx          # Main React page (with ComingSoonOverlay)
│   ├── layout.tsx        # Root layout & metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Top navigation with Phantom wallet
│   ├── Banner.tsx        # 8% Daily APR banner
│   ├── MinerStats.tsx    # Miner statistics display
│   ├── MiningControls.tsx # Approve, Hire, Compound, Withdraw
│   ├── Footer.tsx        # Footer with links
│   ├── HowToModal.tsx    # Instructions modal
│   └── ComingSoonOverlay.tsx # Pre-launch overlay
├── public/
│   ├── images/           # Logo and icons
│   └── js/
│       └── interface.js  # Contract addresses (UPDATE THESE!)
├── package.json          # Dependencies (Vercel handles this)
├── next.config.mjs       # Next.js config
├── tailwind.config.ts    # Tailwind CSS config
└── vercel.json          # Vercel deployment config

```

## ✅ What's Already Configured

- ✅ Full Next.js 14 + React + TypeScript setup
- ✅ Phantom wallet integration (Solana)
- ✅ ComingSoonOverlay with token info
- ✅ All addresses use Solana format (44-char base58)
- ✅ $EPST token throughout (not BSC/BNB)
- ✅ SOL payouts (not ETH)
- ✅ PumpFun green theme (#00D632)
- ✅ Mobile responsive design

## 🔧 No npm? No Problem!

Vercel handles ALL npm operations automatically:
- Installs dependencies
- Runs build scripts
- Deploys serverless

You just push code to GitHub, Vercel does the rest!

## 📊 Current Status

- 🟢 **Repo**: https://github.com/Fruitz2/islandminer
- 🟡 **DApp Status**: Coming Soon (overlay active)
- 🟡 **Contract**: Placeholder addresses
- 🔴 **Live**: Not deployed yet

## 🎯 Next Steps

1. Deploy to Vercel (see above)
2. Update contract addresses when ready
3. Toggle `dappLive` to true
4. Add custom domain (optional)

---

**Questions?** Check the Vercel docs: https://vercel.com/docs/frameworks/nextjs
