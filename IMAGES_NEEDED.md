# 🖼️ EpsteinMiner - Image Replacement Guide

## Required Images for Full Rebrand

### 1. **Main Logo** 
- **Current**: `images/bnb_logo.png`
- **New Name**: `epstein_logo.png`
- **Size**: 150×150px
- **Location**: Banner/header
- **Style**: Dark theme with green accent (#00D632)
- **Note**: This is the main brand image

### 2. **Background Image**
- **Current**: `images/fon.png`  
- **New Name**: `island_background.png`
- **Size**: 1920×1080px (16:9 ratio)
- **Location**: Full page background
- **Style**: Dark island/luxury theme, subtle pattern
- **Note**: Will be stretched to cover, keep low contrast

### 3. **Blockchain Explorer Logo**
- **Current**: `images/bscan_logo.png`
- **New Name**: `solscan_logo.png`
- **Size**: 40×40px
- **Location**: Header and footer links
- **Download**: https://solscan.io (get their official logo)

### 4. **Solana Logo**
- **Current**: `images/Binance-Logo.svg`
- **New Name**: `solana-logo.svg`
- **Size**: SVG (scalable)
- **Location**: Footer
- **Download**: https://solana.com/branding

### 5. **Favicon**
- **Current**: `images/icon/favicon.png`
- **New Name**: `epst_favicon.png`
- **Size**: 32×32px
- **Location**: Browser tab
- **Style**: Simple $EPST or E logo

### 6. **Optional - Keep or Replace**
- `images/miner.svg` - Miner character icon
- `images/mine.svg` - Cave/mine icon  
- `images/pickaxe.svg` - Mining tool icon
- `images/telegram.svg` - Keep as is

## 🎨 Design Guidelines

### Color Palette:
- Primary: #00D632 (PumpFun Green)
- Dark BG: #1A1A1A
- Darker: #0F0F0F
- Text: #E0E0E0

### Style Direction:
- Dark luxury theme
- Subtle green glow effects
- Professional but edgy
- Island/yacht aesthetic

## 📁 File Structure
```
images/
├── epstein_logo.png      (150×150)
├── island_background.png  (1920×1080)
├── solscan_logo.png       (40×40)
├── solana-logo.svg        (SVG)
├── icon/
│   └── epst_favicon.png  (32×32)
├── miner.svg              (keep)
├── mine.svg               (keep)
├── pickaxe.svg            (keep)
└── telegram.svg           (keep)
```

## ⚡ Quick Replace Commands

After adding new images:
```bash
# Rename files (if keeping same names)
mv images/epstein_logo.png images/bnb_logo.png
mv images/island_background.png images/fon.png
mv images/solscan_logo.png images/bscan_logo.png
mv images/solana-logo.svg images/Binance-Logo.svg
mv images/icon/epst_favicon.png images/icon/favicon.png
```

Or update HTML references to use new names.
