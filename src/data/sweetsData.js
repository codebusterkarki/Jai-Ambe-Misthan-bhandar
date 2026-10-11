export const SHOP_INFO = {
  name: "Jai Ambe Sweets",
  hindiName: "जय अम्बे मिष्ठान भण्डार",
  tagline: "शुद्धता और स्वाद की चार दशक पुरानी परंपरा",
  englishTagline:
    "Four Decades of Royal Taste, Purity & Authentic Desi Ghee Mithai",
  since: "1984",
  phone: "+91 9058610744",
  altPhone: "+91 9058610744",
  whatsapp: "9058610744",
  email: "tanmmaykarki14@gmail.com",
  fssai: "10021051000342",
  timings: "Everyday: 7:00 AM - 10:30 PM",
  address: "Chharayal Nayak Haldwani, Gas Godam Road, Near Riya Palace",
  city: "Haldwani",
  state: "Uttarakhand, India",
  googleMapsUrl: "https://maps.google.com/?q=Jai+Ambe+Misthan+Bhandar",
  announcement:
    "🪔 Festive Special: Free Royal Gift Packaging on orders above ₹1,000 | Fresh Desi Ghee Batches Prepared Daily!",
};

export const CATEGORIES = [
  { id: "all", name: "All Mithai & Delights", hindi: "सभी मिठाइयाँ" },
  {
    id: "kaju-dryfruit",
    name: "Kaju & Dry Fruit",
    hindi: "काजू व मेवा मिष्ठान",
  },
  {
    id: "desi-ghee",
    name: "Pure Desi Ghee",
    hindi: "शुद्ध देसी घी की मिठाइयाँ",
  },
  {
    id: "chhena-bengali",
    name: "Bengali & Chhena",
    hindi: "छेना व बंगाली मिष्ठान",
  },
  {
    id: "traditional-seasonal",
    name: "Traditional & Seasonal",
    hindi: "पारंपरिक व मौसमी स्वाद",
  },
  {
    id: "namkeen-snacks",
    name: "Namkeen & Khasta",
    hindi: "नमकीन व खस्ता नाश्ता",
  },
  {
    id: "gift-hampers",
    name: "Gift Boxes & Hampers",
    hindi: "उपहार व शगुन डिब्बे",
  },
];

export const SWEETS_PRODUCTS = [
  {
    id: "kaju-katli",
    name: "Royal Kaju Katli",
    hindiName: "शाही काजू कतली",
    category: "kaju-dryfruit",
    badge: "Bestseller",
    description:
      "Melt-in-mouth diamond cuts made from 100% premium Goan cashews, minimal sugar, infused with fragrant cardamom and crowned with pure vegetarian silver vark.",
    prices: { "250g": 260, "500g": 510, "1kg": 1000 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 420,
    shelfLife: "20 Days (Cool Dry Place)",
    ingredients:
      "Goan Cashew Nuts, Refined Sugar, Cardamom, Pure Silver Leaf (Varq)",
    isPureVeg: true,
    gheeInfo: "Made with Rich Cashew Butter & Desi Khoya",
  },
  {
    id: "motichoor-laddu",
    name: "Desi Ghee Motichoor Laddu",
    hindiName: "देसी घी मोतीचूर लड्डू",
    category: "desi-ghee",
    badge: "Auspicious Special",
    description:
      "Ultra-fine tiny gram-flour pearls fried in pure churned Desi Ghee, delicately bathed in saffron-infused syrup, melon seeds (magaj), and roasted cardamom.",
    prices: { "250g": 180, "500g": 350, "1kg": 680 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 512,
    shelfLife: "7 Days at Room Temperature",
    ingredients:
      "Fine Gram Flour (Besan), 100% Pure Desi Ghee, Saffron, Magaj (Melon Seeds), Cardamom",
    isPureVeg: true,
    gheeInfo: "100% Shudh Desi Ghee",
  },
  {
    id: "kesar-rasmalai",
    name: "Kashmiri Kesar Rasmalai",
    hindiName: "कश्मीरी केसर रसमलाई",
    category: "chhena-bengali",
    badge: "Chef's Signature",
    description:
      "Feather-soft, spongy cottage cheese discs gently simmered and drenched in saffron-laced thick rabdi milk, generously garnished with slivered pistachios and almonds.",
    prices: { "250g": 220, "500g": 420, "1kg": 820 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviewsCount: 388,
    shelfLife: "2 Days (Keep Refrigerated)",
    ingredients:
      "Fresh Cow Milk Chhena, Kashmiri Kesar, Thickened Milk (Rabdi), Pista, Almonds",
    isPureVeg: true,
    gheeInfo: "Fresh Daily Cow Milk",
  },
  {
    id: "shahi-gulab-jamun",
    name: "Shahi Desi Ghee Gulab Jamun",
    hindiName: "शाही देसी घी गुलाब जामुन",
    category: "desi-ghee",
    badge: "All-Time Favorite",
    description:
      "Plump, melt-in-mouth dumplings crafted from rich slow-churned mawa, fried to a golden hue in pure Desi Ghee and soaked in warm rose and saffron sugar syrup.",
    prices: { "250g": 160, "500g": 310, "1kg": 600 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 290,
    shelfLife: "5 Days (Best Served Warm)",
    ingredients:
      "Fresh Milk Mawa (Khoya), Pure Desi Ghee, Saffron, Rose Water, Green Cardamom",
    isPureVeg: true,
    gheeInfo: "100% Shudh Desi Ghee",
  },
  {
    id: "sponge-rasgulla",
    name: "Kolkata Sponge Rasgulla",
    hindiName: "कोलकाता स्पंज रसगुल्ला",
    category: "chhena-bengali",
    badge: "100% Cow Milk",
    description:
      "Classic authentic spongy chhena spheres boiled to tender perfection in clear, light cardamom syrup. Juicy, fresh, and soothingly light on the palate.",
    prices: { "250g": 140, "500g": 270, "1kg": 520 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 340,
    shelfLife: "3 Days (Refrigerated)",
    ingredients: "Pure Cow Milk Chhena, Cane Sugar, Rose Essence, Cardamom",
    isPureVeg: true,
    gheeInfo: "Dairy Fresh Chhena",
  },
  {
    id: "malai-ghewar",
    name: "Royal Malai Ghewar (Festive)",
    hindiName: "शाही मलाई घेवर",
    category: "traditional-seasonal",
    badge: "Royal Special",
    description:
      "Rajasthan's regal honeycomb delicacy fried crispy in pure Desi Ghee, dipped in aromatic syrup, topped with thick condensed malai, saffron, and silver leaf.",
    prices: { "250g": 250, "500g": 490, "1kg": 950 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviewsCount: 460,
    shelfLife: "3 Days for Malai / 15 Days Dry",
    ingredients:
      "All-Purpose Flour, Desi Ghee, Ice Water Churn, Thick Rabdi Malai, Kesar, Pista",
    isPureVeg: true,
    gheeInfo: "100% Shudh Desi Ghee",
  },
  {
    id: "kaju-pista-roll",
    name: "Kaju Pista Roll",
    hindiName: "काजू पिस्ता रोल",
    category: "kaju-dryfruit",
    badge: "Dry Fruit Masterpiece",
    description:
      "Silky cashew paste cylinder wrapped gently around a crunchy emerald core of Iranian pistachios, green cardamom, and golden saffron threads.",
    prices: { "250g": 290, "500g": 570, "1kg": 1100 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 215,
    shelfLife: "20 Days",
    ingredients:
      "Goan Cashews, Iranian Pistachios, Green Cardamom, Saffron, Silver Leaf",
    isPureVeg: true,
    gheeInfo: "Pure Nut Confection",
  },
  {
    id: "besan-laddu",
    name: "Shahi Desi Ghee Besan Laddu",
    hindiName: "शाही देसी घी बेसन लड्डू",
    category: "desi-ghee",
    badge: "Traditional Classic",
    description:
      "Coarse gram flour roasted on a slow flame in Desi Ghee until it releases a divine nutty aroma, blended with crunchy bura sugar, almonds, and melon seeds.",
    prices: { "250g": 170, "500g": 330, "1kg": 640 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1605197150244-67d7301c34a2?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 310,
    shelfLife: "30 Days at Room Temperature",
    ingredients:
      "Coarse Gram Flour, Pure Desi Ghee, Tagar (Bura) Sugar, Magaj, Almonds",
    isPureVeg: true,
    gheeInfo: "100% Shudh Desi Ghee",
  },
  {
    id: "anjeer-dryfruit-barfi",
    name: "Sugar-Free Anjeer Barfi",
    hindiName: "शुगर-फ्री अंजीर मेवा बर्फी",
    category: "kaju-dryfruit",
    badge: "Zero Added Sugar",
    description:
      "Wholesome sun-dried Turkish figs pureed and slow-cooked with crunchy roasted almonds, cashews, pistachios, and walnuts without a single grain of refined sugar.",
    prices: { "250g": 320, "500g": 620, "1kg": 1200 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 185,
    shelfLife: "25 Days",
    ingredients:
      "Dried Turkish Figs (Anjeer), Almonds, Cashews, Pistachios, Walnuts, Desi Ghee",
    isPureVeg: true,
    gheeInfo: "Diabetic Friendly & Healthy",
  },
  {
    id: "alwar-milkcake",
    name: "Special Alwar Milk Cake",
    hindiName: "अलवर का स्पेशल मिल्क केक",
    category: "traditional-seasonal",
    badge: "Heritage Favorite",
    description:
      "Granular, caramelized solid milk fudge prepared through hours of continuous stirring of pure full-fat milk, resulting in a dark roasted caramel heart and light golden crust.",
    prices: { "250g": 190, "500g": 370, "1kg": 720 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 275,
    shelfLife: "10 Days",
    ingredients:
      "Pure Cow & Buffalo Milk, Alum (Phitkari), Sugar, Green Cardamom, Desi Ghee",
    isPureVeg: true,
    gheeInfo: "Pure Slow-Cooked Milk",
  },
  {
    id: "hing-kachori",
    name: "Special Hing Khasta Kachori (4 Pcs)",
    hindiName: "स्पेशल हींग खस्ता कचौरी",
    category: "namkeen-snacks",
    badge: "Morning Fresh",
    description:
      "Flaky, multi-layered puffed crisps filled with spiced urad dal, coarse fennel, crushed black pepper, and premium aromatic asafoetida (Hing). Served with spicy tamarind chutney.",
    prices: { "250g": 120, "500g": 220, "1kg": 420 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 640,
    shelfLife: "Best on Day of Purchase (Packaged: 3 Days)",
    ingredients:
      "Refined Flour, Spiced Urad Dal, Pure Hing, Fennel, Cloves, Mustard Oil Fry",
    isPureVeg: true,
    gheeInfo: "Traditional Halwai Masala",
  },
  {
    id: "shahi-samosa",
    name: "Shahi Dry Fruit Samosa (Snack)",
    hindiName: "शाही ड्राई फ्रूट समोसा",
    category: "namkeen-snacks",
    badge: "Hot & Crispy",
    description:
      "Golden triangular pastries loaded with tempered potatoes, tender green peas, roasted cashews, raisins, and secret garam masala blend. Served steaming hot.",
    prices: { "250g": 110, "500g": 200, "1kg": 380 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewsCount: 580,
    shelfLife: "Consume Fresh",
    ingredients:
      "Flour Crust, Mountain Potatoes, Cashews, Kishmish, Green Peas, Amchur",
    isPureVeg: true,
    gheeInfo: "Freshly Fried Everyday",
  },
  {
    id: "ratlami-sev",
    name: "Authentic Ratlami Sev",
    hindiName: "रतलामी लौंग सेव",
    category: "namkeen-snacks",
    badge: "Spicy & Crunchy",
    description:
      "Crisp and flavorful gram-flour sev infused with fresh freshly pounded cloves (Laung), black pepper, and carom seeds (Ajwain). Perfect teatime companion.",
    prices: { "250g": 100, "500g": 190, "1kg": 360 },
    defaultWeight: "500g",
    image:
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 310,
    shelfLife: "60 Days (Vacuum Pack)",
    ingredients: "Pure Besan, Cloves, Black Pepper, Ajwain, Hing, Red Chili",
    isPureVeg: true,
    gheeInfo: "Crispy Tea Companion",
  },
  {
    id: "rajwada-hamper",
    name: "Rajwada Royal Assorted Hamper",
    hindiName: "राजवाड़ा शाही उपहार डिब्बा",
    category: "gift-hampers",
    badge: "Luxury Gifting",
    description:
      "A royal velvet-finished gift trunk containing 1kg of premium selection: Kaju Katli, Kesar Motichoor, Kaju Pista Roll, and Roasted California Almonds with golden greeting card.",
    prices: { "250g": 650, "500g": 1150, "1kg": 2100 },
    defaultWeight: "1kg",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    reviewsCount: 198,
    shelfLife: "20 Days",
    ingredients:
      "4 Delicacy Assortment in Luxury Metallic Gift Box with Golden Ribbon",
    isPureVeg: true,
    gheeInfo: "Complete Premium Gift",
  },
  {
    id: "shagun-box",
    name: "Shagun Auspicious Mithai Box",
    hindiName: "शगुन 4-इन-1 उत्सव बॉक्स",
    category: "gift-hampers",
    badge: "Wedding & Puja",
    description:
      "Specially crafted 4-compartment golden box for weddings, ring ceremonies, and housewarmings. Includes Kaju Katli, Motichoor Laddu, Besan Laddu, and Milk Cake.",
    prices: { "250g": 380, "500g": 720, "1kg": 1380 },
    defaultWeight: "1kg",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviewsCount: 245,
    shelfLife: "15 Days",
    ingredients: "Custom 4 Sweets in Gold Embellished Box with Custom Note",
    isPureVeg: true,
    gheeInfo: "Best for Celebrations",
  },
];

export const BOX_BUILDER_OPTIONS = [
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    type: "Dry Fruit",
    pricePerSlot: 130,
  },
  {
    id: "motichoor-laddu",
    name: "Motichoor Laddu",
    type: "Desi Ghee",
    pricePerSlot: 90,
  },
  {
    id: "kaju-pista-roll",
    name: "Kaju Pista Roll",
    type: "Dry Fruit",
    pricePerSlot: 145,
  },
  {
    id: "besan-laddu",
    name: "Besan Laddu",
    type: "Desi Ghee",
    pricePerSlot: 85,
  },
  {
    id: "alwar-milkcake",
    name: "Alwar Milk Cake",
    type: "Mawa Special",
    pricePerSlot: 95,
  },
  {
    id: "anjeer-dryfruit-barfi",
    name: "Anjeer Barfi",
    type: "Sugar-Free",
    pricePerSlot: 155,
  },
  {
    id: "shahi-gulab-jamun",
    name: "Gulab Jamun",
    type: "Desi Ghee",
    pricePerSlot: 80,
  },
  {
    id: "badam-halwa",
    name: "Badam Katli",
    type: "Dry Fruit",
    pricePerSlot: 140,
  },
];

export const PURITY_PILLARS = [
  {
    icon: "ShieldCheck",
    title: "100% Shudh Desi Ghee",
    hindi: "शत-प्रतिशत शुद्ध देसी घी",
    desc: "Every batch of our ghee mithai is prepared strictly using lab-tested, slow-churned pure Desi Ghee. No palm oil, zero vegetable shortening (vanaspati).",
  },
  {
    icon: "Milk",
    title: "Daily Fresh Chhena & Khoya",
    hindi: "ताजा छेना व मावा",
    desc: "We boil over 800 liters of pure cow and buffalo milk daily to prepare fresh, chemical-free mawa and chhena in our own hygienic kitchen.",
  },
  {
    icon: "Sparkles",
    title: "Real Kashmiri Saffron & Nuts",
    hindi: "असली कश्मीरी केसर व मेवा",
    desc: "We only use original GI-tagged saffron strands from Pampore, Kashmir, and handpicked premium Goan cashews and California almonds.",
  },
  {
    icon: "HeartHandshake",
    title: "Zero Artificial Additives",
    hindi: "कोई मिलावट नहीं",
    desc: "No synthetic chemical stabilizers or artificial colors. We believe that true taste comes only from nature, love, and time-honored patience.",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Rajeshwar Singhania",
    location: "Heritage Chowk, Regular Customer for 18 Years",
    rating: 5,
    date: "2 days ago",
    text: "Whenever there is a wedding or Diwali in our family, Jai Ambe Sweets is our only destination. Their Kaju Katli and Motichoor Laddu have had the exact same royal fragrance and richness for over 20 years!",
    favorite: "Royal Kaju Katli & Motichoor Laddu",
  },
  {
    id: 2,
    name: "Meenakshi Agarwal",
    location: "Civil Lines, Bulk Wedding Client",
    rating: 5,
    date: "1 week ago",
    text: "Ordered 350 customized Shagun boxes for my daughter's wedding. Every single guest praised the freshness and the golden box presentation. Truly the best sweet shop in town!",
    favorite: "Custom Shagun Box & Malai Ghewar",
  },
  {
    id: 3,
    name: "Dr. Vikramaditya Rathore",
    location: "University Campus",
    rating: 5,
    date: "2 weeks ago",
    text: "As a diabetic patient, their Sugar-Free Anjeer Barfi is an absolute blessing. 100% authentic dry fruits with no fake sweeteners. Also, their Hing Kachoris in the morning are unmatched.",
    favorite: "Sugar-Free Anjeer Barfi & Hing Kachori",
  },
  {
    id: 4,
    name: "Pooja & Ankit Sharma",
    location: "Sector 7",
    rating: 5,
    date: "3 weeks ago",
    text: "The Kesar Rasmalai melts before you even chew it. So clean, hygienic, and authentic. Ordered via WhatsApp and got it delivered within 40 minutes in insulated chilled packs!",
    favorite: "Kashmiri Kesar Rasmalai",
  },
];

export const FAQS = [
  {
    q: "How do you guarantee that all sweets are made in pure Desi Ghee?",
    a: "We procure milk and butter directly from certified rural dairy cooperatives. Our kitchens are completely vanaspati-free. Customers can even visit our preparation gallery at our main store to witness the live cooking process!",
  },
  {
    q: "Can I place bulk orders for weddings, pujas, and corporate gifting?",
    a: "Yes! We specialize in bulk orders from 20 boxes to 5,000+ boxes with customized branding, custom gift boxes, and special bulk pricing tiers. You can use our WhatsApp ordering or inquiry form on this website.",
  },
  {
    q: "Do you deliver to home and what are the delivery charges?",
    a: "We offer same-day express local delivery within 45-60 minutes across the city. For orders above ₹800, home delivery is completely FREE. Chhena and milk sweets are dispatched in food-grade chilled containers.",
  },
  {
    q: "How long do the sweets last? What is the recommended shelf life?",
    a: "Dry fruit sweets like Kaju Katli and Anjeer Barfi stay fresh for 20-25 days. Desi Ghee Laddus and Besan sweets last up to 30 days. Fresh Bengali sweets (Rasgulla, Rasmalai) should be refrigerated and consumed within 2-3 days.",
  },
  {
    q: "Can I customize the sweets inside the gift box?",
    a: "Yes! We offer a unique 'Royal Custom Mithai Box Builder' right on our website where you can select 4 or 6 of your favorite varieties and add a personalized message card.",
  },
];
