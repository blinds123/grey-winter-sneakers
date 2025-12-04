# How to Use the Landing Page Builder Skill

## 🚀 Quick Start (3 Steps)

### 1. Duplicate the Template

```bash
cp -r /Users/nelsonchan/Downloads/rebuild-landing-template /Users/nelsonchan/Downloads/my-product-name
```

### 2. Add Your Images

```
my-product-name/
├── images/
│   ├── product/           ← Add 4+ product photos here (any format, any size)
│   └── testimonials/      ← Add 15-25 avatar images here (any format)
```

### 3. Activate the Skill

Type ANY of these commands in Claude:

```
"deploy landing page for my black tailored pants"
```

```
"create product page for white lace top"
```

```
"build landing page for blue denim jacket

Product folder: /Users/nelsonchan/Downloads/my-product-name
Competitor: https://competitor.com/product
Pricing: order $59, preorder $19, bump $10"
```

**That's it!** The skill will:
- Extract colors from your product images
- Generate 15-25 product-specific testimonials
- Choose a matching accessory for order bump
- Build & deploy to Netlify
- Give you live URLs in 5-8 minutes

---

## 🔧 Fixing Existing Sites

### Problem: Site has wrong testimonials, colors, or product references

Type:

```
"fix landing page in /Users/nelsonchan/Downloads/blackpants"
```

```
"repair /Users/nelsonchan/Downloads/sienna-white-top - testimonials mention wrong product"
```

### The skill will:
1. Read existing site
2. Identify hardcoded problems (cashmere, red, sweater, etc.)
3. Generate correct product-specific content
4. Replace all placeholders
5. Redeploy fixed version

---

## 🎯 Trigger Phrases

The skill auto-activates on these phrases:

### For New Deployments:
- "deploy landing page"
- "create product page"
- "build landing page"
- **"make a landing page"** ← Just say this!
- "landing page for [product]"

### For Fixing Sites:
- "fix landing page"
- "repair landing page"
- "fix the site"
- "rebuild [folder]"
- "convert [folder]"
- "optimize images in"

---

## 📝 What the Skill Does Automatically

### ✅ Generates Product-Specific Content
- Testimonials mention YOUR product (not cashmere sweaters)
- Color descriptions match YOUR product
- Material references match YOUR product type
- Certification badges only show if YOUR product has one

### ✅ Extracts Colors from Images
- Analyzes your product image
- Creates full color palette
- Applies to entire design

### ✅ Chooses Matching Accessory
- Analyzes your product type
- Selects appropriate order bump (belt, earrings, scarf, etc.)
- Downloads high-quality image from Pexels

### ✅ Optimizes Performance
- Converts images to WebP
- Creates responsive sizes (600px, 800px, 1200px)
- Guarantees sub-1.8 second mobile load

---

## ⚙️ Advanced Options

### Specify All Details Upfront

```
"Deploy landing page for Rose Gold Hoop Earrings

Product folder: /Users/nelsonchan/Downloads/rose-gold-earrings
Competitor: https://etsy.com/listing/rose-gold-hoops
Pricing: order $59, preorder $19, bump $10
Material: sterling silver with rose gold plating
Features: hypoallergenic, lightweight, 18mm diameter"
```

### Just Product Name (Skill Will Ask for Details)

```
"deploy landing page for my new dress"
```

Skill will prompt you for:
- Product folder path
- Competitor URL (optional)
- Pricing (will use defaults if not provided)
- Material/features (will infer from images if not provided)

---

## 🐛 Common Issues

### "Skill didn't activate"

Make sure you use a trigger phrase:
- ✅ "deploy landing page for black pants"
- ❌ "can you help me with a landing page?"

### "Site shows {{PLACEHOLDERS}}"

The skill didn't finish. Check:
- Did all agents complete?
- Were there any errors during deployment?
- Try: "fix landing page in [folder]" to repair

### "Testimonials mention wrong product"

Old template issue. Fix with:
```
"fix /Users/nelsonchan/Downloads/my-site - regenerate testimonials"
```

### "Order bump doesn't match my product"

Agent 3 needs better context. Try adding competitor URL:
```
"rebuild /Users/nelsonchan/Downloads/my-site

Competitor: https://competitor.com/product"
```

---

## 🔄 Each Deployment Creates NEW Repos

**⚠️ IMPORTANT: The skill NEVER overwrites old deployments.**

Every time you run the skill, it creates:
- ✅ **NEW GitHub repo** - If name exists, adds timestamp (e.g., `blackpants-20251203-143022`)
- ✅ **NEW Netlify site** - Unique URL for each deployment
- ✅ **Old deployments stay live** - All previous products remain deployed

**Example:**

```
First deployment:
→ GitHub: github.com/blinds123/blackpants
→ Netlify: blackpants.netlify.app

Second deployment (same product name):
→ GitHub: github.com/blinds123/blackpants-20251203-143022
→ Netlify: blackpants-abc123.netlify.app

Different product:
→ GitHub: github.com/blinds123/whitetop
→ Netlify: whitetop.netlify.app
```

**This means you can:**
- Deploy unlimited products simultaneously
- Test different versions of the same product
- Keep all deployments live
- Never worry about overwriting old sites

---

## 📦 Output Files

After deployment, your folder will contain:

```
my-product-name/
├── index.html                    ← Your landing page
├── images/
│   ├── product/                  ← Your product images (optimized)
│   ├── testimonials/             ← Your avatar images (optimized)
│   ├── worn-by-favorites/        ← Fixed influencer images
│   └── order-bump/               ← Generated accessory image
├── netlify/
│   └── functions/
│       └── buy-now.js            ← Checkout integration
├── .git/                         ← Git repo
└── README.md                     ← Auto-generated docs
```

---

## 🎨 What Gets Customized Per Product

| Element | Example for Black Pants | Example for White Top |
|---------|-------------------------|----------------------|
| Colors | Black primary (#000), silver accent | White primary (#fff), soft pink accent |
| Testimonials | "these pants are perfect!", "the black goes with everything" | "this top is so cute!", "the white stays bright" |
| Order Bump | Silver minimalist earrings | Delicate rose gold necklace |
| Material | "Polyester suiting fabric" | "Cotton blend" |
| Certification | None (no badge shown) | "GOTS Organic" (badge shown) |

---

## 🔍 Testing Your Deployment

After skill completes, verify:

1. **Visit the Netlify URL** - Page should load in <2 seconds
2. **Check testimonials** - Should mention YOUR product
3. **Check colors** - Should match your product image
4. **Test size selector** - XL/XXL sold out, XS sells out after 15s
5. **Test order bump** - Should show matching accessory
6. **Test checkout** - Click buttons, should redirect to SimpleSwap

---

## 💡 Pro Tips

### Tip 1: Use High-Quality Product Images
- 1200x1600px minimum
- Clear, well-lit photos
- Multiple angles

### Tip 2: Provide Competitor URL
- Helps skill understand your product better
- Generates better copy and testimonials
- Chooses better order bump accessory

### Tip 3: Match Testimonial Count to Images
- Skill generates EXACTLY as many testimonials as avatar images
- 15-25 images recommended
- More testimonials = more social proof

### Tip 4: Use Descriptive Product Names
- ✅ "Black Tailored High-Waisted Pants"
- ❌ "Pants 001"

Better names = better SEO and copy generation

---

## 🆘 Need Help?

### Read the Documentation
- `FIXES-APPLIED.md` - See what problems were fixed
- `USAGE.md` - Quick usage guide
- `skill.md` - Full skill specification

### Common Commands

**Check skill status:**
```
"what skills do I have?"
```

**See recent deployments:**
```
"show me my recent landing pages"
```

**Fix a broken deployment:**
```
"fix landing page in /Users/nelsonchan/Downloads/broken-site"
```

---

**Ready to deploy? Just say:** "deploy landing page for [your product name]"
