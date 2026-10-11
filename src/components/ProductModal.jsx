import React, { useState } from "react";
import {
  X,
  Star,
  ShieldCheck,
  Clock,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export default function ProductModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) {
  if (!isOpen || !product) return null;

  const [selectedWeight, setSelectedWeight] = useState(
    product.defaultWeight || "500g"
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const price = product.prices[selectedWeight] * quantity;

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${selectedWeight}`,
      productId: product.id,
      name: product.name,
      hindiName: product.hindiName,
      weight: selectedWeight,
      price: product.prices[selectedWeight],
      quantity: quantity,
      image: product.image,
      category: product.category,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-300 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Top Product Header & Image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-amber-50 border border-amber-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-red-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/40">
                  {product.badge}
                </span>
              )}
              <div className="absolute top-3 right-3 bg-white p-1 rounded-md shadow">
                <div className="w-4 h-4 border-2 border-emerald-600 rounded flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                {product.hindiName}
              </span>
              <h3 className="font-serif font-bold text-red-950 text-2xl leading-tight">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-stone-800">
                  {product.rating}
                </span>
                <span className="text-stone-400">
                  ({product.reviewsCount} customer reviews)
                </span>
              </div>

              {/* Ghee and purity pill */}
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">{product.gheeInfo}</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Detailed Info Tabs / Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-700 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Ingredients & Purity:
              </div>
              <p className="text-stone-600 leading-relaxed">
                {product.ingredients}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-stone-700 font-bold">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Shelf Life & Storage:
              </div>
              <p className="text-stone-600 leading-relaxed">
                {product.shelfLife}
              </p>
            </div>
          </div>

          {/* Weight Selection & Price */}
          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span>Select Quantity (Pack Size):</span>
              <span className="text-red-950">{selectedWeight}</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["250g", "500g", "1kg"].map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                    selectedWeight === w
                      ? "bg-red-900 text-amber-100 border-red-950 shadow-md"
                      : "bg-white text-stone-700 border-amber-200 hover:border-amber-400"
                  }`}
                >
                  <span className="block">{w}</span>
                  <span className="text-[10px] text-amber-400/90 font-medium">
                    ₹{product.prices[w]}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-amber-200/60">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-stone-700">
                  Number of Packs:
                </span>
                <div className="flex items-center bg-white rounded-lg border border-amber-200 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-amber-50 text-stone-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-amber-50 text-stone-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-stone-400 block leading-none">
                  Total Amount
                </span>
                <span className="text-2xl font-black text-red-950 font-serif">
                  ₹{price}
                </span>
              </div>
            </div>
          </div>

          {/* Add to Plate Action */}
          <button
            onClick={handleAdd}
            className={`w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
              isAdded
                ? "bg-emerald-600 text-white"
                : "bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-amber-200 hover:text-white hover:scale-[1.01] active:scale-[0.99]"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added to Plate!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Plate (₹{price})
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
