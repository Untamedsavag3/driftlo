# 🌊 Driftlo — Short-Term Rental Aggregator

A full Next.js website comparing rentals across Airbnb, VRBO, Booking.com, Hipcamp & Vacasa.

## Pages
- `/` — Homepage with hero, features, testimonials
- `/search` — Live search with filters and price comparison modal
- `/about` — About page (required for Booking.com affiliate)
- `/privacy` — Privacy Policy (required for affiliate programs)
- `/terms` — Terms of Service (required for affiliate programs)

---

## 🚀 Deploy to Vercel in 5 Steps

### Step 1 — Push to GitHub
1. Go to **github.com** and click **New Repository**
2. Name it `driftlo` and click **Create Repository**
3. Upload all these files (drag and drop the folder), or use Git:

```bash
git init
git add .
git commit -m "Initial Driftlo commit"
git remote add origin https://github.com/YOUR_USERNAME/driftlo.git
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to **vercel.com** and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `driftlo` repository
4. Click **"Import"**

### Step 3 — Configure (no changes needed)
- Framework: **Next.js** (auto-detected)
- Build Command: `next build` (auto-filled)
- Output Directory: leave blank
- Click **"Deploy"**

### Step 4 — Wait ~2 minutes
Vercel builds and deploys automatically. You'll get a live URL like:
`https://driftlo.vercel.app`

### Step 5 — Add a Custom Domain (optional)
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `driftlo.com` (if you own it)
3. Follow DNS instructions

---

## 📋 For Booking.com Affiliate Application

When applying at **affiliate.booking.com**, use:
- **Website URL:** your Vercel URL
- **Privacy Policy:** yoursite.com/privacy
- **Terms of Service:** yoursite.com/terms
- **Description:** "Price comparison platform for short-term rentals, aggregating listings from major platforms to help travelers find the best price."

---

## 🔑 Adding API Keys Later

Once you have API keys, add them in Vercel:
1. Vercel Dashboard → Project → **Settings → Environment Variables**
2. Add: `BOOKING_API_KEY`, `EXPEDIA_API_KEY`, `SERP_API_KEY`
3. Redeploy

---

Built with Next.js 14 · Deployed on Vercel · © 2026 Driftlo Inc.
