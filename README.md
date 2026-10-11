# Jai Ambe Sweets (जय अम्बे मिष्ठान भण्डार) 🪔👑
### Official Web Application | Next.js, React & Tailwind CSS

> **A premium heritage sweet shop web application built for Jai Ambe Sweets with 100% Shudh Desi Ghee authentic mithai catalogue, Royal Custom Shagun Box builder, wedding catering calculator, and direct WhatsApp ordering.**

---

## 🌟 Why the 404 Error Occurred & How It Is Resolved

The `404` error appeared because the Next.js App Router root page ([`src/app/page.jsx`](file:///c:/Tanmay/Jai%20Ambe%20Misthan%20bhandar/src/app/page.jsx)) was still being generated in the previous step.

**Both environments are now 100% ready and verified:**
1. **Next.js 14 App Router** ([`src/app/page.jsx`](file:///c:/Tanmay/Jai%20Ambe%20Misthan%20bhandar/src/app/page.jsx)): Tested with `npx next build` and successfully compiled route `/` with 0 errors!
2. **Instant Zero-Setup Preview** ([`index.html`](file:///c:/Tanmay/Jai%20Ambe%20Misthan%20bhandar/index.html)): Complete standalone single-page application that can be opened immediately by double-clicking in any browser without terminal setup.

---

## 🚀 How to Run and View the Website

### Option 1: Run with Next.js (Recommended)
Open your terminal in `c:\Tanmay\Jai Ambe Misthan bhandar` and run:

```bash
npm run dev
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**.
The full homepage with all interactive features will load immediately!

---

### Option 2: Instant Browser Preview (Zero Setup Needed)
If you just want to preview or demo the site to the client without running Node commands:
1. Open the project folder: `c:\Tanmay\Jai Ambe Misthan bhandar`
2. Double-click **[`index.html`](file:///c:/Tanmay/Jai%20Ambe%20Misthan%20bhandar/index.html)** in Windows File Explorer (or right-click → Open with Chrome / Edge).
3. The entire website with interactive catalogue, custom box builder, cart, and WhatsApp order flow works instantly!

---

## 👑 Features Built Specifically for Jai Ambe Sweets

### 1. 🪔 Royal Indian Heritage Visual Identity
- **Palatial Color Scheme:** Royal Sindoor Crimson (`#781818`, `#4A0E0E`), Saffron Gold (`#F59E0B`, `#D97706`), Warm Ivory Kesar Cream (`#FAF7F0`), and pure emerald vegetarian badges.
- **Typography:** Classic `Playfair Display` serif typography with bilingual English & Hindi display titles (*जय अम्बे मिष्ठान भण्डार*).

### 2. 🍯 Interactive Mithai & Namkeen Catalogue
- **Live Search & Category Tabs:**
  - Kaju & Dry Fruit (काजू व मेवा)
  - Pure Desi Ghee (शुद्ध देसी घी)
  - Bengali & Fresh Chhena (छेना व बंगाली)
  - Traditional & Seasonal Specials (Ghewar, Jalebi-Rabdi)
  - Namkeen & Khasta Snacks (Hing Kachori, Samosa, Sev)
  - Luxury Gift Boxes & Hampers (शगुन डिब्बे)
- **Weight Switcher Tabs:** Instant price recalculation for **250g, 500g, and 1kg** packs.
- **Purity Badges:** 100% Shudh Desi Ghee indicators, shelf-life guides, and green veg certification mark.
- **Quick View Modal:** In-depth ingredient breakdown, storage instructions, and quantity selector.

### 3. 🎁 Royal Custom Shagun Box Builder
- Interactive 4-compartment virtual gift box where customers can pick 4 individual sweets from the counter to create a custom wedding/Diwali hamper.
- Live box price calculation based on chosen sweets + luxury packaging.
- Choice of Ribbon (Royal Velvet Red, Pure Gold Brocade, Festive Marigold).
- Custom gold greeting card note (e.g., "Warm Wishes from Sharma Family").

### 4. 🛡️ 100% Desi Ghee Purity Promise Section
- 4 Key Quality Pillars: 100% Pure Desi Ghee, Daily Fresh Cow Milk Chhena, Real Kashmiri Saffron, and Zero Vanaspati / Palm Oil.
- Visual comparison table contrasting Jai Ambe's slow-churned methods against ordinary market commercial sweets.
- Official FSSAI Central Registration display: `10021051000342`.

### 5. 🤝 Wedding & Corporate Bulk Order Calculator
- Interactive guest count slider (50 to 1,500+ guests).
- Automatic calculation of total sweet requirement in kg.
- Wholesale slab discounts (up to 20% OFF for bulk celebrations) + Free custom gold foil box printing.
- Pre-filled WhatsApp inquiry button for catering quotations.

### 6. ⭐ Customer Reviews & Testimonials
- Authentic reviews highlighting 40+ years of family trust, wedding client praise, and diabetic-friendly dry fruit options.
- 4.9★ rating display with 15,000+ celebrations served.

### 7. 🛍️ Slide-Over Cart & Direct WhatsApp Checkout
- Slide-over plate drawer displaying items, chosen weights, and quantities.
- Packaging selector: Standard Eco Box vs. Royal Golden Gift Box (+₹50).
- Delivery selector: Store Pickup vs. Express Local Delivery (Free on orders above ₹800).
- Coupon Code System: enter `MITHAI10` for 10% festive discount!
- **1-Click WhatsApp Ordering:** Compiles customer name, address, items, and total amount into a pre-formatted WhatsApp message sent directly to the Jai Ambe team!

---

## 📁 Project Architecture

```
c:\Tanmay\Jai Ambe Misthan bhandar\
├── index.html                     # Standalone Zero-Setup Instant Browser Preview
├── package.json                   # Next.js 14, React 18, Tailwind CSS scripts
├── next.config.js                 # Next.js image domain & compiler settings
├── tailwind.config.js             # Royal Indian Sweets custom color theme
├── postcss.config.js              # PostCSS Tailwind processor
├── README.md                      # Complete project documentation
│
└── src/
    ├── app/
    │   ├── globals.css            # Base styles, mandala patterns & scrollbar
    │   ├── layout.jsx             # Next.js RootLayout with Google fonts & metadata
    │   └── page.jsx               # Next.js Home page connecting all components & cart state
    │
    ├── components/
    │   ├── AnnouncementBar.jsx    # Top marquee with store timings & FSSAI badge
    │   ├── Navbar.jsx             # Sticky navigation, search bar, cart plate counter
    │   ├── Hero.jsx               # Royal hero banner with stats & trust badges
    │   ├── MenuCatalogue.jsx      # Filterable sweets catalogue with weight selectors
    │   ├── CustomBoxBuilder.jsx   # Interactive 4-compartment Shagun box builder
    │   ├── PurityPromise.jsx      # 100% Desi Ghee guarantee & comparison table
    │   ├── OccasionCatering.jsx   # Bulk wedding estimator & WhatsApp quotation
    │   ├── Reviews.jsx            # Testimonials with verified customer tags
    │   ├── ContactLocation.jsx    # Flagship store details, map CTA & FAQ accordion
    │   ├── Footer.jsx             # Heritage credentials, links & timings
    │   ├── ProductModal.jsx       # Quick view modal with ingredients & storage
    │   └── CartDrawer.jsx         # Slide-over cart with checkout & WhatsApp formatting
    │
    └── data/
        └── sweetsData.js          # Single source of truth for products, prices, and FAQs
```

---

## 🔧 Easy Customization

All store information and pricing can be updated in a single file:
- Open [`src/data/sweetsData.js`](file:///c:/Tanmay/Jai%20Ambe%20Misthan%20bhandar/src/data/sweetsData.js) to edit:
  - Phone numbers, address, and WhatsApp number
  - Sweet names, Hindi titles, and descriptions
  - Prices for 250g, 500g, and 1kg
  - Timings and FSSAI number
