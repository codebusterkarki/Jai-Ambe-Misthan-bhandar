import React, { useState } from "react";
import {
  Sparkles,
  Eye,
  Plus,
  Check,
  Star,
  Clock,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { CATEGORIES, SWEETS_PRODUCTS } from "../data/sweetsData";

export default function MenuCatalogue({
  searchQuery,
  onAddToCart,
  onOpenProductModal,
  cartItems = [],
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemWeights, setItemWeights] = useState({});
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  // Handle selected weight per product
  const getSelectedWeight = (productId) => {
    return itemWeights[productId] || "500g";
  };

  const handleWeightChange = (productId, weight) => {
    setItemWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  // Filter products based on category and search query
  const filteredProducts = SWEETS_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hindiName.includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddWithFeedback = (product) => {
    const weight = getSelectedWeight(product.id);
    const price = product.prices[weight];
    onAddToCart({
      id: `${product.id}-${weight}`,
      productId: product.id,
      name: product.name,
      hindiName: product.hindiName,
      weight,
      price,
      image: product.image,
      category: product.category,
    });

    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section
      id="menu"
      className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Mithai & Namkeen Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-950 mb-3">
            Pure Desi Delicacies for Every Celebration
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Select your preferred weight (250g, 500g, or 1kg) for fresh daily
            preparations. Prepared in 100% Shudh Desi Ghee with authentic
            heritage recipes.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex flex-col items-center shrink-0 border ${
                  isActive
                    ? "bg-red-900 text-amber-100 border-red-950 shadow-md scale-105"
                    : "bg-white text-stone-700 border-amber-200 hover:border-red-300 hover:bg-amber-50/60"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-amber-300" : "text-stone-400"
                  }`}
                >
                  {cat.hindi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-amber-200 p-8">
            <p className="text-lg font-serif text-stone-700 font-bold mb-2">
              No sweets found matching "{searchQuery}"
            </p>
            <p className="text-sm text-stone-500 mb-4">
              Try searching for Kaju Katli, Laddu, Rasgulla, or browse all
              categories.
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              className="px-5 py-2 rounded-full bg-red-900 text-amber-100 text-xs font-bold"
            >
              Show All Delicacies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const currentWeight = getSelectedWeight(product.id);
              const currentPrice = product.prices[currentWeight];
              const isAdded = addedAnimationId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Product Image & Badges */}
                  <div className="relative h-48 overflow-hidden bg-amber-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-red-900/90 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30 backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Pure Veg Green Dot Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 p-1 rounded-md shadow flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-emerald-600 rounded flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      </div>
                    </div>

                    {/* Quick View Floating Button */}
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-stone-800 hover:bg-white hover:text-red-900 shadow-md transition-all opacity-90 group-hover:opacity-100"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Rating pill */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-md text-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-[10px] text-stone-300">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Hindi Name & English Title */}
                      <span className="text-xs font-semibold text-amber-800 block mb-0.5">
                        {product.hindiName}
                      </span>
                      <h3 className="font-serif font-bold text-red-950 text-base leading-tight mb-1 group-hover:text-red-800 transition-colors">
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed mb-3">
                        {product.description}
                      </p>

                      {/* Ghee and Shelf Life Tag */}
                      <div className="flex items-center gap-2 text-[11px] text-stone-600 mb-3 bg-amber-50/70 p-2 rounded-lg border border-amber-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span className="truncate">{product.gheeInfo}</span>
                      </div>
                    </div>

                    <div>
                      {/* Weight Selector Tabs */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1 font-medium">
                          <span>Select Quantity:</span>
                          <span className="text-red-900 font-bold">
                            {currentWeight}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 bg-stone-100 p-1 rounded-xl text-xs font-semibold">
                          {["250g", "500g", "1kg"].map((w) => (
                            <button
                              key={w}
                              onClick={() => handleWeightChange(product.id, w)}
                              className={`py-1 rounded-lg transition-all text-center ${
                                currentWeight === w
                                  ? "bg-white text-red-950 shadow-sm font-bold border border-amber-200"
                                  : "text-stone-600 hover:text-stone-900"
                              }`}
                            >
                              {w}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price & Add to Plate Button */}
                      <div className="pt-2 border-t border-amber-100 flex items-center justify-between gap-2">
                        <div>
                          <span className="text-xs text-stone-400 block leading-none">
                            Price ({currentWeight})
                          </span>
                          <span className="text-lg font-black text-red-950">
                            ₹{currentPrice}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddWithFeedback(product)}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                            isAdded
                              ? "bg-emerald-600 text-white scale-105"
                              : "bg-red-900 hover:bg-red-950 text-amber-200 hover:text-white active:scale-95"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Added!
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              Add to Plate
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
