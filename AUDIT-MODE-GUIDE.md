# 🔍 Audit Mode - Complete Guide

## What You Asked For

**Q: Does the skill compare existing sites to skill guidelines and fix differences?**
**A: YES!** Use **Audit Mode** (Mode B)

**Q: Does it use Playwright vision mode?**
**A: YES!** Playwright MCP tools auto-load in Audit Mode

**Q: When fixing, does it overwrite existing deployment?**
**A: YES!** Fixes update your existing GitHub/Netlify URLs (unless you say "as new")

**Q: What command fixes a site like it's making it from scratch?**
**A: Use this:** `"audit and fix landing page in /path/to/folder"`

---

## Three Modes Explained

### Mode A: Quick Fix
```
"fix landing page in /Users/nelsonchan/Downloads/blackpants"
```
- Fixes obvious issues
- No guideline comparison
- No Playwright verification
- ✅ Overwrites existing deployment

### Mode B: Full Audit ⭐ RECOMMENDED
```
"audit and fix landing page in /Users/nelsonchan/Downloads/blackpants"
```
- Compares to ALL skill guidelines
- Uses Playwright for visual testing
- Fixes EVERYTHING automatically
- ✅ Overwrites existing deployment
- **This is what you want!**

### Mode C: Rebuild as New
```
"rebuild landing page in /Users/nelsonchan/Downloads/blackpants as new deployment"
```
- Starts completely over
- Creates NEW GitHub repo
- Creates NEW Netlify URL
- Old deployment stays live

---

## What to Say for Your Use Case

### To Fix an Existing Site (Overwrites It)

**Basic:**
```
"audit and fix landing page in /Users/nelsonchan/Downloads/blackpants"
```

**Detailed:**
```
"audit and fix landing page in /Users/nelsonchan/Downloads/blackpants against skill guidelines"
```

**Alternative:**
```
"compare /Users/nelsonchan/Downloads/blackpants to skill standards and fix all differences"
```

**Any of these activate Audit Mode!**

---

## What Audit Mode Does Step-by-Step

### 1. Loads Playwright MCP Tools
```
✅ Browser automation activated
✅ Visual verification enabled
✅ Can test actual page behavior
```

### 2. Reads ALL Skill Guidelines
```
✅ FIXES-APPLIED.md - All template fixes
✅ SKILL.md - Agent requirements
✅ Agent 4 rules - Testimonial generation
✅ Agent 6A rules - Placeholder replacement
✅ Size selector specs - XL/XXL sold out, XS after 15s
```

### 3. Compares Your Site to Guidelines

**Checks 10+ Critical Areas:**
- ❌ Testimonials hardcoded? (should be product-specific)
- ❌ Wrong product mentioned? (cashmere for polyester, sweater for pants)
- ❌ Certification showing incorrectly?
- ❌ Order bump features generic?
- ❌ Placeholders still visible? ({{PRODUCT_NAME}})
- ❌ Size selector broken?
- ❌ XS doesn't sell out after 15s?
- ❌ Images not optimized? (should be WebP, <1.8s)
- ❌ Checkout broken?
- ❌ Colors don't match product?

### 4. Uses Playwright to Test

**Actual Browser Testing:**
```javascript
// Opens your site in browser
playwright.launch("https://blackpants.netlify.app")

// Tests size selector
- Clicks XL → Verifies "Sold Out"
- Clicks XXL → Verifies "Sold Out"
- Waits 15 seconds
- Verifies XS becomes "Sold Out"
- Verifies notification appears
- Verifies notification disappears after 3s

// Tests order bump
- Clicks "Pre-Order" button
- Verifies popup shows
- Tests accept/decline

// Tests checkout
- Clicks "Order Today"
- Verifies redirects to SimpleSwap

// Measures performance
- Records page load time
- Checks image formats
- Tests mobile responsive
```

### 5. Generates Audit Report

**Example Output:**
```
═══════════════════════════════════════════
AUDIT REPORT: blackpants
═══════════════════════════════════════════

❌ CRITICAL ISSUES (4):

1. Testimonials hardcoded
   Found: 30 reviews about "red cashmere sweater"
   Expected: 20 reviews about "black pants"
   Fix: Re-run Agent 4

2. Wrong certification
   Found: "Good Cashmere Standard"
   Product: Polyester (no certification)
   Fix: Remove certification badge

3. Size selector broken
   XL available (should be sold out)
   XXL available (should be sold out)
   XS never sells out
   Fix: Update JavaScript

4. Order bump wrong
   Found: "100% cashmere blend"
   Expected: Silver earrings features
   Fix: Regenerate features

⚠️  WARNINGS (1):

5. Images not optimized
   Format: JPEG (should be WebP)
   Load: 3.2s (should be <1.8s)
   Fix: Run Agent 6B

✅ PASSED (5):
- Colors correct (#000000)
- Checkout works
- Mobile responsive
- No placeholders
- GitHub/Netlify connected

═══════════════════════════════════════════
AUTO-FIXING 5 ISSUES...
═══════════════════════════════════════════
```

### 6. Auto-Fixes EVERYTHING

**No manual work needed:**
- ✅ Re-runs Agent 4 → Product-specific testimonials
- ✅ Removes certification badge
- ✅ Fixes size selector JavaScript
- ✅ Regenerates order bump features
- ✅ Optimizes images to WebP

### 7. Re-Verifies with Playwright

**Tests again to confirm fixes:**
- All issues resolved? ✅
- Page load <1.8s? ✅
- Size selector works? ✅
- Notification appears? ✅

### 8. Overwrites Existing Deployment

**Updates your live site:**
```bash
git commit -m "Audit fixes applied"
git push origin main
netlify deploy --prod
```

**Result:** Same GitHub repo, same Netlify URL, all issues fixed!

---

## Comparison Chart

| Feature | Quick Fix | **Audit Mode** | Rebuild |
|---------|-----------|---------------|---------|
| Compares to guidelines | ❌ No | ✅ Yes | ❌ No |
| Uses Playwright | ❌ No | ✅ Yes | ❌ No |
| Auto-fixes ALL issues | ❌ Some | ✅ All | N/A |
| Visual verification | ❌ No | ✅ Yes | ❌ No |
| Overwrites existing | ✅ Yes | ✅ Yes | ❌ No |
| Creates new repo | ❌ No | ❌ No | ✅ Yes |
| Generates audit report | ❌ No | ✅ Yes | ❌ No |

---

## Example: Fix Your blackpants Site

### What You Would Say:
```
"audit and fix landing page in /Users/nelsonchan/Downloads/blackpants"
```

### What Happens:
1. **Loads Playwright** ✅
2. **Reads skill guidelines** ✅
3. **Compares blackpants to standards** ✅
4. **Tests with Playwright browser** ✅
5. **Generates audit report** ✅
6. **Auto-fixes all issues** ✅
7. **Re-verifies everything works** ✅
8. **Overwrites blackpants deployment** ✅

### Result:
- Same GitHub: `github.com/blinds123/blackpants`
- Same Netlify: `blackpants.netlify.app`
- **But now it matches skill guidelines 100%**
- Verified working with Playwright
- Product-specific testimonials
- Correct size selector behavior
- Optimized images
- All fixes applied

---

## Quick Reference

### To fix an existing site (overwrite):
```
"audit and fix landing page in /path/to/folder"
```

### To create a completely new version:
```
"rebuild landing page in /path/to/folder as new deployment"
```

### To just make a new landing page:
```
"make a landing page for my product"
```

---

## Why Audit Mode is Powerful

**It's like having the skill make your landing page from scratch, but:**
- ✅ Fixes your existing one instead
- ✅ Compares every detail to guidelines
- ✅ Tests actual behavior with Playwright
- ✅ Auto-fixes ALL differences
- ✅ Verifies everything works
- ✅ Keeps your existing URLs

**You get a perfect, guideline-compliant landing page without creating a new deployment!**

---

## Ready to Test?

Try it on your blackpants site:

```
"audit and fix landing page in /Users/nelsonchan/Downloads/blackpants"
```

The skill will:
1. Load Playwright MCP
2. Compare to all guidelines
3. Test everything visually
4. Fix all issues automatically
5. Update your existing deployment

**No manual work. Just say the command and let the skill handle everything!** 🚀
