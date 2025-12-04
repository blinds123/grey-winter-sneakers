# 🎯 How to Execute Landing Page Builder Skill

## Complete Guide with Exact Prompts

This guide shows you **exactly** what to say to Claude to execute each feature of the Landing Page Builder skill.

---

## 📋 Table of Contents

1. [Create New Landing Page (Default Pricing)](#1-create-new-landing-page-default-pricing)
2. [Create New Landing Page (Custom Pricing)](#2-create-new-landing-page-custom-pricing)
3. [Audit & Fix Existing Landing Page](#3-audit--fix-existing-landing-page)
4. [Check Pool Server Status](#4-check-pool-server-status)
5. [Top Up Exchange Pools](#5-top-up-exchange-pools)

---

## 1. Create New Landing Page (Default Pricing)

**Use this for:** Brand new landing page with standard $19/$29/$59 pricing

### Step-by-Step:

#### 1. Prepare Your Directory

```bash
# Create directory for your product
mkdir "/Users/nelsonchan/Downloads/blue-dress"

# Copy your product images
cp ~/Desktop/product-photos/* "/Users/nelsonchan/Downloads/blue-dress/images/product/"

# Copy your testimonial avatar images (15-25 recommended)
cp ~/Desktop/testimonial-avatars/* "/Users/nelsonchan/Downloads/blue-dress/images/testimonials/"

# Navigate to the directory
cd "/Users/nelsonchan/Downloads/blue-dress"
```

#### 2. Open Claude Code CLI

```bash
claude
```

#### 3. Say This Exact Prompt:

```
make a landing page for blue dress
```

**Alternative prompts that work:**
- `"build landing page"`
- `"create product page"`
- `"deploy landing page"`

### What Happens:

1. **Skill detects** you're in `/Users/nelsonchan/Downloads/blue-dress`
2. **Skill asks:** "Use default pricing ($19/$29/$59) or create custom?"
   - **You respond:** `1` (for default)
3. **Skill counts** testimonial images: e.g., "Found 22 testimonial images"
4. **Skill runs** 6 agents in parallel:
   - Agent 1: Extracts colors from product image
   - Agent 2: Chooses matching order bump accessory
   - Agent 4: Generates exactly 22 testimonials
   - Agent 5: Generates product tabs
   - Agent 6A: Builds landing page with all 22 images linked
   - Agent 6B: Optimizes all images to WebP
5. **Skill deploys:**
   - Creates NEW GitHub repo (e.g., `github.com/blinds123/bluedress`)
   - Creates NEW Netlify site (e.g., `bluedress.netlify.app`)
   - All 22 testimonial images display correctly
   - Uses $19/$29/$59 pricing

### Expected Output:

```
═══════════════════════════════════════════
✅ LANDING PAGE DEPLOYED
═══════════════════════════════════════════

Product: Blue Dress
Directory: /Users/nelsonchan/Downloads/blue-dress

GitHub: https://github.com/blinds123/bluedress
Netlify: https://bluedress.netlify.app

Pricing:
  • Pre-Order: $19
  • Pre-Order + Bump: $29
  • Order Today: $59

Testimonials: 22 (all images displaying)
Pool Server: https://simpleswap-automation-1.onrender.com

Time: 5 minutes
═══════════════════════════════════════════
```

---

## 2. Create New Landing Page (Custom Pricing)

**Use this for:** Landing page with custom price points (e.g., $79/$39/$49)

### Step-by-Step:

#### 1-2. Same as above (prepare directory + open Claude)

#### 3. Say This Exact Prompt:

```
make a landing page for premium leather jacket
```

### What Happens:

1. **Skill asks:** "Use default pricing ($19/$29/$59) or create custom?"
   - **You respond:** `2` (for custom)

2. **Skill asks for your custom pricing:**
   ```
   Enter your custom price points:
     Order Today price: $__
     Pre-Order price: $__
     Order Bump add-on: $__
   ```
   - **You respond:**
     ```
     79
     39
     15
     ```

3. **Skill checks existing pool tiers:**
   ```
   📊 Checking pool server...
   Current tiers: $19 (45), $29 (45), $59 (45)
   Missing tiers: $79, $39, $54
   ```

4. **Skill creates missing tiers:**
   ```
   🔧 Creating 3 new pricing tiers...
   Creating 15 exchanges per tier

   📦 Creating $79 tier:
      [1/15] ✅ Exchange created: abc123
      [2/15] ✅ Exchange created: def456
      ...
      [15/15] ✅ Exchange created: xyz789
   ✅ $79 tier added (15 exchanges)

   📦 Creating $39 tier:
      [1/15] ✅ Exchange created: ...
      ...
   ✅ $39 tier added (15 exchanges)

   📦 Creating $54 tier:
      [1/15] ✅ Exchange created: ...
      ...
   ✅ $54 tier added (15 exchanges)

   🚀 Deploying updated pool server to Render.com...
   ✅ Pool server deployed with new tiers!

   📊 Current pool status:
      $19: 45 exchanges
      $29: 45 exchanges
      $39: 15 exchanges (NEW)
      $54: 15 exchanges (NEW)
      $59: 45 exchanges
      $79: 15 exchanges (NEW)
   ```

5. **Skill continues** with agents and deployment (same as default)

### Expected Output:

```
═══════════════════════════════════════════
✅ LANDING PAGE DEPLOYED
═══════════════════════════════════════════

Product: Premium Leather Jacket
Directory: /Users/nelsonchan/Downloads/leather-jacket

GitHub: https://github.com/blinds123/leatherjacket
Netlify: https://leatherjacket.netlify.app

Pricing:
  • Pre-Order: $39
  • Pre-Order + Bump: $54
  • Order Today: $79

Testimonials: 18 (all images displaying)
Pool Server: https://simpleswap-automation-1.onrender.com
  New tiers created: $79 (15), $39 (15), $54 (15)

Time: 15 minutes
═══════════════════════════════════════════
```

---

## 3. Audit & Fix Existing Landing Page

**Use this for:** Fixing issues in an already-deployed landing page

### Step-by-Step:

#### 1. Navigate to Existing Landing Page Directory

```bash
# Go to your existing landing page
cd "/Users/nelsonchan/Downloads/gael boots"
```

#### 2. Open Claude Code CLI

```bash
claude
```

#### 3. Say This Exact Prompt:

```
audit and fix landing page
```

**Alternative prompts that work:**
- `"fix landing page"`
- `"audit landing page"`

### What Happens:

1. **Skill detects** you're in an existing landing page:
   ```
   📍 Detected existing landing page
      Directory: /Users/nelsonchan/Downloads/gael boots
      GitHub: github.com/blinds123/gael-boots
      Netlify: gael-boots.netlify.app
   ```

2. **Skill asks:** "Use default pricing ($19/$29/$59) or create custom?"
   - **You respond:** `1` (keep default) or `2` (change to custom)

3. **Skill counts** testimonial images:
   ```
   📸 Found 18 testimonial images
   ```

4. **Skill loads Playwright** for visual testing:
   ```
   🎭 Loading Playwright MCP for visual testing...
   ```

5. **Skill runs comprehensive audit:**
   ```
   🔍 Running comprehensive audit...

   ═══════════════════════════════════════════
   AUDIT REPORT: gael boots
   ═══════════════════════════════════════════

   🔴 CRITICAL ISSUES (3):

   1. Testimonials not displaying images
      - Found: 18 testimonials without avatars
      - Expected: All testimonials with linked images
      - Fix: Rename images + update testimonialImages array

   2. Testimonial count mismatch
      - Found: 12 testimonials in HTML
      - Expected: 18 (matching image count)
      - Fix: Regenerate all 18 testimonials

   3. Pricing incorrect
      - Found: Hardcoded $89/$49/$39
      - Expected: $59/$29/$19 (from pool server)
      - Fix: Update pricing placeholders

   ⚠️  WARNINGS (1):

   4. Images not optimized
      - Format: JPEG (should be WebP)
      - Load: 3.2s (should be <1.8s)
      - Fix: Run Agent 6B optimization

   ✅ PASSED (4):
   - Colors correct
   - GitHub connected
   - Netlify deployed
   - Order bump working

   ═══════════════════════════════════════════
   ```

6. **Skill auto-fixes** all issues:
   ```
   🔧 Auto-fixing 4 issues...

   [1/4] Renaming testimonial images...
      ✅ Gemini_Generated_Image_1.png → testimonial-01.png
      ✅ Gemini_Generated_Image_2.png → testimonial-02.png
      ...
      ✅ All 18 images renamed

   [2/4] Regenerating testimonials...
      ✅ Generated 18 product-specific testimonials for boots
      ✅ All testimonials have img: 0-17 fields

   [3/4] Updating pricing...
      ✅ {{PRICE_ORDER}} → $59
      ✅ {{PRICE_PREORDER}} → $19
      ✅ {{PRICE_BUMP}} → $10

   [4/4] Optimizing images...
      ✅ Product images → WebP
      ✅ Testimonial avatars → 200×200px WebP
      ✅ Load time: 1.6s ✅

   ═══════════════════════════════════════════
   ```

7. **Skill redeploys:**
   ```
   🚀 Redeploying to GitHub + Netlify...
   ✅ Committed: "Audit fixes applied"
   ✅ Pushed to: github.com/blinds123/gael-boots
   ✅ Deployed to: gael-boots.netlify.app
   ```

### Expected Output:

```
═══════════════════════════════════════════
✅ AUDIT COMPLETE - ALL ISSUES FIXED
═══════════════════════════════════════════

Fixed:
  4 issues resolved

Testimonials:
  18 testimonials regenerated
  All images now displaying correctly

Deployed to:
  GitHub: github.com/blinds123/gael-boots (SAME)
  Netlify: gael-boots.netlify.app (SAME)

Time: 10 minutes
═══════════════════════════════════════════
```

---

## 4. Check Pool Server Status

**Use this for:** Seeing current exchange pool status

### Say This Exact Prompt:

```
check exchange pool status
```

**Alternative prompts:**
- `"show pool server status"`
- `"how many exchanges in pools?"`

### Expected Output:

```
═══════════════════════════════════════════
📊 EXCHANGE POOL STATUS
═══════════════════════════════════════════

Pool Server: https://simpleswap-automation-1.onrender.com

Current Tiers:
  $19: 45 exchanges (100% capacity) ✅
  $29: 45 exchanges (100% capacity) ✅
  $39: 15 exchanges (100% capacity) ✅
  $54: 15 exchanges (100% capacity) ✅
  $59: 45 exchanges (100% capacity) ✅
  $79: 15 exchanges (100% capacity) ✅

Total: 195 exchanges across 6 tiers
═══════════════════════════════════════════
```

---

## 5. Top Up Exchange Pools

**Use this for:** Adding more exchanges to an existing tier

### Say This Exact Prompt:

```
top up $79 pool to 30 exchanges
```

**Or for multiple tiers:**
```
top up pools:
- $79 pool: add 15 more (total 30)
- $39 pool: add 15 more (total 30)
```

### What Happens:

1. **Skill checks current** $79 pool: 15 exchanges
2. **Skill creates** 15 additional exchanges via BrightData
3. **Skill adds** to existing pool
4. **Skill redeploys** Render service
5. **Skill verifies** $79 pool now has 30 exchanges

### Expected Output:

```
═══════════════════════════════════════════
💰 TOPPING UP EXCHANGE POOLS
═══════════════════════════════════════════

Current status:
  $79 pool: 15 exchanges

Creating 15 additional exchanges...
  [1/15] ✅ Exchange created
  [2/15] ✅ Exchange created
  ...
  [15/15] ✅ Exchange created

🚀 Deploying to Render...
✅ Deployment complete

Updated status:
  $79 pool: 30 exchanges (200% capacity)

Time: 5 minutes
═══════════════════════════════════════════
```

---

## 🎯 Quick Reference - All Commands

### Create New Landing Page

| Situation | Exact Prompt |
|-----------|--------------|
| Default pricing ($19/$29/$59) | `make a landing page` |
| Custom pricing | `make a landing page` → choose `2` → enter prices |
| Specific product | `make a landing page for [product name]` |

### Audit Existing Landing Page

| Situation | Exact Prompt |
|-----------|--------------|
| Fix all issues | `audit and fix landing page` |
| Just audit (no fixes) | `audit landing page` |
| Fix specific issue | `fix testimonial images` |

### Pool Management

| Action | Exact Prompt |
|--------|--------------|
| Check status | `check exchange pool status` |
| Top up tier | `top up $79 pool to 30 exchanges` |
| Create new tier | `create $99 exchange tier with 15 exchanges` |

---

## 💡 Tips & Best Practices

### 1. Always Navigate to Directory First

```bash
# ✅ CORRECT
cd "/Users/nelsonchan/Downloads/my-product"
claude
"make a landing page"

# ❌ WRONG (skill won't find your images)
claude
"make a landing page for /Users/nelsonchan/Downloads/my-product"
```

### 2. Testimonial Image Count

**Recommended:** 15-25 testimonial avatar images

- Too few (<10): Page looks sparse
- Too many (>30): Generation takes longer
- Sweet spot: 18-22 images

### 3. Image Requirements

**Product images:**
- Format: JPG, PNG, WebP
- Location: `images/product/`
- Count: 4-7 images recommended
- Resolution: 1200x1600px or higher

**Testimonial avatars:**
- Format: JPG, PNG, WebP
- Location: `images/testimonials/`
- Count: 15-25 recommended
- Resolution: 400x400px or higher (will be optimized to 200x200px)

### 4. Pricing Decisions

**Use default ($19/$29/$59) when:**
- Testing new products
- Standard pricing model
- Want fast deployment (5 min)

**Use custom pricing when:**
- Premium products ($79+)
- Budget products ($9-$15)
- Specific price points required
- Okay with longer deployment (15 min)

### 5. When to Audit

**Run audit when:**
- Testimonial images not showing
- Wrong pricing displayed
- Product info outdated
- After manual HTML edits
- Quarterly maintenance

---

## 🚨 Troubleshooting

### Issue: "No images found"

**Cause:** Images not in correct directory

**Fix:**
```bash
# Check your structure
ls images/product/
ls images/testimonials/

# Should see images in both directories
```

### Issue: "Not an existing landing page"

**Cause:** Trying to audit a directory without .git/

**Fix:** Use "make a landing page" instead of "audit"

### Issue: "Pool server timeout"

**Cause:** Render service may be sleeping (free tier)

**Fix:** Wait 30 seconds and try again, or wake up service:
```bash
curl https://simpleswap-automation-1.onrender.com/health
```

---

## 📞 Need Help?

If you encounter issues:

1. **Check directory structure:**
   ```bash
   pwd  # Should be in your product directory
   ls images/product/  # Should show product images
   ls images/testimonials/  # Should show avatar images
   ```

2. **Check Claude Code is in skill directory:**
   ```bash
   ls ~/.claude/skills/landing-page-builder/SKILL.md
   ```

3. **Try the simplest command first:**
   ```
   make a landing page
   ```

---

## ✅ Success Checklist

Before saying "make a landing page":

- [ ] Created directory for product
- [ ] Copied 4-7 product images to `images/product/`
- [ ] Copied 15-25 testimonial avatars to `images/testimonials/`
- [ ] Navigated into product directory (`cd /path/to/product`)
- [ ] Opened Claude Code CLI (`claude`)
- [ ] Ready to say: `make a landing page`

**That's it! The skill handles everything else automatically.** 🚀
