import React, { useState } from "react";
import {
  Crown,
  Sparkles,
  Gift,
  Check,
  Trash2,
  Plus,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { BOX_BUILDER_OPTIONS, SHOP_INFO } from "../data/sweetsData";

export default function CustomBoxBuilder({ onAddCustomBox }) {
  const [boxSize, setBoxSize] = useState(4); // 4 or 6 compartments
  const [selectedSlots, setSelectedSlots] = useState([null, null, null, null]);
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);
  const [ribbonStyle, setRibbonStyle] = useState("Royal Velvet Crimson");
  const [greetingMessage, setGreetingMessage] = useState(
    "Warmest Blessings & Festive Greetings"
  );
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);

  // When box size changes, reset or resize slots
  const handleSizeChange = (size) => {
    setBoxSize(size);
    setSelectedSlots(Array(size).fill(null));
    setActiveSlotIndex(0);
  };

  // Place sweet into current active slot or next empty slot
  const handleSelectSweet = (sweet) => {
    const updated = [...selectedSlots];
    let targetIndex = activeSlotIndex;

    // If current slot already filled, find next empty slot
    if (updated[targetIndex]) {
      const nextEmpty = updated.findIndex((s) => s === null);
      if (nextEmpty !== -1) {
        targetIndex = nextEmpty;
      }
    }

    updated[targetIndex] = sweet;
    setSelectedSlots(updated);

    // Auto advance to next empty slot
    const nextEmptyAfter = updated.findIndex(
      (s, idx) => s === null && idx > targetIndex
    );
    if (nextEmptyAfter !== -1) {
      setActiveSlotIndex(nextEmptyAfter);
    } else {
      const anyEmpty = updated.findIndex((s) => s === null);
      if (anyEmpty !== -1) setActiveSlotIndex(anyEmpty);
    }
  };

  const handleRemoveSlot = (index) => {
    const updated = [...selectedSlots];
    updated[index] = null;
    setSelectedSlots(updated);
    setActiveSlotIndex(index);
  };

  // Calculate box price
  const baseBoxCost = boxSize === 4 ? 120 : 180;
  const sweetsCost = selectedSlots.reduce(
    (total, item) => total + (item ? item.pricePerSlot * 2.5 : 0),
    0
  );
  const totalBoxPrice = Math.round(baseBoxCost + sweetsCost);

  const filledCount = selectedSlots.filter(Boolean).length;
  const isBoxComplete = filledCount === boxSize;

  const handleAddToCart = () => {
    if (!isBoxComplete) return;

    const boxItem = {
      id: `custom-box-${Date.now()}`,
      name: `Royal ${boxSize}-Mithai Shagun Box`,
      hindiName: `शाही ${boxSize}-इन-1 शगुन डिब्बा`,
      isCustomBox: true,
      boxSize,
      ribbonStyle,
      greetingMessage,
      sweets: selectedSlots.map((s) => s.name),
      price: totalBoxPrice,
      weight: boxSize === 4 ? "Approx 800g" : "Approx 1.2kg",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    };

    onAddCustomBox(boxItem);
    setIsAddedSuccess(true);
    setTimeout(() => setIsAddedSuccess(false), 2000);
  };

  return (
    <section
      id="box-builder"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#2D0A0A] via-[#3B0D0D] to-[#250808] text-white relative overflow-hidden"
    >
      {/* Decorative Traditional Lantern & Golden Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Assortment Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-50 mb-3">
            Build Your Royal Shagun Mithai Box
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Handpick your favorite 4 or 6 royal delicacies to create a
            personalized gift hamper with custom greeting cards for weddings,
            festivals, and housewarmings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Box Visual Display */}
          <div className="lg:col-span-6 space-y-6">
            {/* Box Size Selector */}
            <div className="flex items-center justify-between bg-black/40 p-2 rounded-2xl border border-amber-500/30">
              <span className="text-xs font-bold text-amber-200 px-3">
                Choose Box Compartments:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSizeChange(4)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    boxSize === 4
                      ? "bg-amber-400 text-red-950 shadow-md font-extrabold"
                      : "bg-white/10 text-amber-200 hover:bg-white/20"
                  }`}
                >
                  4-Variety Box (800g)
                </button>
                <button
                  onClick={() => handleSizeChange(6)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    boxSize === 6
                      ? "bg-amber-400 text-red-950 shadow-md font-extrabold"
                      : "bg-white/10 text-amber-200 hover:bg-white/20"
                  }`}
                >
                  6-Variety Royal Trunk (1.2kg)
                </button>
              </div>
            </div>

            {/* Virtual Box Container with Gold Foil Style */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#4A1010] via-[#350A0A] to-[#250606] border-2 border-amber-400/60 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-amber-500/30 mb-4">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-amber-400" />
                  <span className="font-serif font-bold text-amber-200 text-sm sm:text-base">
                    Jai Ambe Royal Gold Box ({filledCount}/{boxSize} Selected)
                  </span>
                </div>
                <span className="text-xs bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/40 font-medium">
                  {ribbonStyle}
                </span>
              </div>

              {/* Grid of Slots */}
              <div
                className={`grid ${
                  boxSize === 4 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                } gap-3 mb-5`}
              >
                {selectedSlots.map((slot, index) => {
                  const isActive = activeSlotIndex === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveSlotIndex(index)}
                      className={`relative h-28 sm:h-32 rounded-2xl border-2 transition-all p-3 flex flex-col items-center justify-center cursor-pointer text-center ${
                        slot
                          ? "bg-gradient-to-br from-amber-900/60 to-red-950/80 border-amber-400/70 shadow-md"
                          : isActive
                          ? "bg-amber-400/10 border-amber-300 border-dashed animate-pulse"
                          : "bg-black/30 border-amber-500/20 border-dashed hover:border-amber-400/40"
                      }`}
                    >
                      {slot ? (
                        <>
                          <span className="text-xs font-serif font-bold text-amber-200 leading-tight mb-1">
                            {slot.name}
                          </span>
                          <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold">
                            {slot.type}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveSlot(index);
                            }}
                            className="absolute top-2 right-2 p-1 text-red-300 hover:text-red-100 hover:bg-red-800/80 rounded-full transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center gap-1 text-amber-200/50">
                          <Plus className="w-5 h-5" />
                          <span className="text-[11px] font-medium">
                            Slot #{index + 1}
                          </span>
                          <span className="text-[9px]">Tap to choose</span>
                        </div>
                      )}

                      {/* Active Indicator Pin */}
                      {isActive && !slot && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-red-950 text-[9px] font-black px-2 py-0.2 rounded-full uppercase">
                          Pick Below
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Box Customization Options (Ribbon & Greeting Card) */}
              <div className="space-y-3 pt-3 border-t border-amber-500/20 text-xs">
                <div>
                  <label className="block text-amber-200 font-semibold mb-1">
                    Select Gift Wrap & Ribbon:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Royal Velvet Crimson",
                      "Pure Gold Brocade",
                      "Festive Marigold",
                    ].map((ribbon) => (
                      <button
                        key={ribbon}
                        onClick={() => setRibbonStyle(ribbon)}
                        className={`py-1.5 px-2 rounded-xl text-[11px] font-medium text-center border transition-all ${
                          ribbonStyle === ribbon
                            ? "bg-amber-400 text-red-950 font-bold border-amber-300 shadow"
                            : "bg-white/5 text-amber-100/70 border-white/10 hover:border-amber-400/40"
                        }`}
                      >
                        {ribbon}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200 font-semibold mb-1">
                    Personalized Greeting Note (Free Gold Card):
                  </label>
                  <input
                    type="text"
                    value={greetingMessage}
                    onChange={(e) => setGreetingMessage(e.target.value)}
                    placeholder="e.g. Best wishes from Sharma family"
                    className="w-full bg-black/40 border border-amber-500/30 rounded-xl px-3 py-2 text-amber-100 text-xs focus:outline-none focus:border-amber-400 placeholder-stone-500"
                  />
                </div>
              </div>

              {/* Price Calculation & Add Button */}
              <div className="mt-6 pt-4 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-amber-200/70 block">
                    Total Custom Box Price:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-amber-300">
                      ₹{totalBoxPrice}
                    </span>
                    <span className="text-xs text-amber-200/60 line-through">
                      ₹{Math.round(totalBoxPrice * 1.15)}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">
                      Includes Luxury Packaging
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!isBoxComplete}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                    isBoxComplete
                      ? isAddedSuccess
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-red-950 active:scale-95"
                      : "bg-white/10 text-stone-400 cursor-not-allowed border border-white/10"
                  }`}
                >
                  {isAddedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      Box Added to Plate!
                    </>
                  ) : isBoxComplete ? (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      Add Custom Box to Plate
                    </>
                  ) : (
                    `Fill ${boxSize - filledCount} More Slot${
                      boxSize - filledCount > 1 ? "s" : ""
                    }`
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Sweet Selection Tray */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-amber-100">
                  Select Sweets for Slot #{activeSlotIndex + 1}
                </h3>
                <p className="text-xs text-amber-200/70">
                  Tap any delicacy to place it into the selected compartment
                </p>
              </div>
              <span className="text-xs bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full font-bold">
                100% Shudh Desi Ghee
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
              {BOX_BUILDER_OPTIONS.map((sweet) => {
                const countInBox = selectedSlots.filter(
                  (s) => s && s.id === sweet.id
                ).length;
                return (
                  <div
                    key={sweet.id}
                    onClick={() => handleSelectSweet(sweet)}
                    className="p-3.5 rounded-2xl bg-white/5 border border-amber-500/25 hover:border-amber-400 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="font-serif font-bold text-sm text-amber-100 group-hover:text-amber-300 transition-colors">
                          {sweet.name}
                        </span>
                        {countInBox > 0 && (
                          <span className="text-[10px] bg-amber-400 text-red-950 px-1.5 py-0.2 rounded-full font-extrabold">
                            x{countInBox}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-amber-200/60 block">
                        Category: {sweet.type}
                      </span>
                    </div>

                    <button
                      className="p-2 rounded-xl bg-amber-400/20 text-amber-300 group-hover:bg-amber-400 group-hover:text-red-950 transition-colors"
                      title="Add to box"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-red-950/40 border border-amber-500/20 text-xs text-amber-200/80 space-y-1">
              <p className="font-semibold text-amber-300">
                ✨ Jai Ambe Shagun Box Guarantee:
              </p>
              <p>
                • Food-grade golden partition trays prevent aroma mixing between
                sweets.
              </p>
              <p>
                • Hygienic shrink-wrapped sealing keeps sweets fresh for up to
                20 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
