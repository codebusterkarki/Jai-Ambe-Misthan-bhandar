import React, { useState } from "react";
import {
  Gift,
  Users,
  Calendar,
  Sparkles,
  MessageCircle,
  Phone,
  Check,
  Award,
} from "lucide-react";
import { SHOP_INFO } from "../data/sweetsData";

export default function OccasionCatering() {
  const [guestCount, setGuestCount] = useState(200);
  const [occasion, setOccasion] = useState("Wedding & Shagun Bhaji");
  const [boxWeight, setBoxWeight] = useState("500g");

  // Calculations
  const weightInKgPerBox =
    boxWeight === "250g" ? 0.25 : boxWeight === "500g" ? 0.5 : 1.0;
  const totalMithaiKg = Math.round(guestCount * weightInKgPerBox);

  // Bulk discount tiers
  let discountPercent = 5;
  if (guestCount >= 100 && guestCount < 300) discountPercent = 10;
  if (guestCount >= 300 && guestCount < 500) discountPercent = 15;
  if (guestCount >= 500) discountPercent = 20;

  const whatsappMessage = `Namaste Jai Ambe Sweets! I would like to inquire about a Bulk Order:
• Occasion: ${occasion}
• Estimated Guests/Boxes: ${guestCount}
• Box Size: ${boxWeight}
• Total Mithai Required: approx ${totalMithaiKg} kg
Please share wholesale bulk quote and catalog.`;

  return (
    <section
      id="catering"
      className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            <span>Weddings, Festivals & Corporate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-950 mb-3">
            Royal Mithai Catering & Bulk Shagun Boxes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From intimate family havans to grand 2,000+ guest wedding receptions
            and corporate festive hampers — we bring four decades of catering
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Bulk Order Calculator */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md">
            <h3 className="font-serif font-bold text-xl text-red-950 mb-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Interactive Bulk Mithai Estimator
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Estimate quantity and unlock wholesale slab discounts for your
              upcoming celebration.
            </p>

            <div className="space-y-5">
              {/* Occasion Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">
                  Select Occasion / Event:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    "Wedding & Shagun Bhaji",
                    "Corporate Diwali Hampers",
                    "Griha Pravesh & Puja",
                    "Anniversary & Birthday",
                  ].map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setOccasion(occ)}
                      className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
                        occasion === occ
                          ? "bg-red-900 text-amber-100 font-bold border-red-950 shadow-sm"
                          : "bg-stone-50 text-stone-700 border-stone-200 hover:border-amber-300"
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-stone-700">
                    Number of Guests / Gift Boxes:
                  </label>
                  <span className="text-sm font-black text-red-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                    {guestCount} Boxes
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="1500"
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-red-900"
                />
                <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                  <span>25 Boxes</span>
                  <span>500 Boxes</span>
                  <span>1,000 Boxes</span>
                  <span>1,500+ Boxes</span>
                </div>
              </div>

              {/* Preferred Box Weight */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-2">
                  Preferred Box Weight per Guest:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "250g (Compact Gift)",
                    "500g (Standard Shagun)",
                    "1kg (Grand Royal Box)",
                  ].map((weightOption) => {
                    const weightKey = weightOption.split(" ")[0];
                    return (
                      <button
                        key={weightOption}
                        onClick={() => setBoxWeight(weightKey)}
                        className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                          boxWeight === weightKey
                            ? "bg-amber-100 text-red-950 font-bold border-amber-400 shadow-sm"
                            : "bg-stone-50 text-stone-600 border-stone-200 hover:border-amber-300"
                        }`}
                      >
                        {weightOption}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Results Estimation Box */}
              <div className="bg-gradient-to-br from-amber-50 to-red-50 p-4 rounded-2xl border border-amber-200/80">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <span className="text-[11px] text-stone-500 block">
                      Total Mithai
                    </span>
                    <span className="text-lg sm:text-xl font-black text-red-950">
                      {totalMithaiKg} kg
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block">
                      Bulk Discount
                    </span>
                    <span className="text-lg sm:text-xl font-black text-emerald-700">
                      {discountPercent}% OFF
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block">
                      Custom Foil Print
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-amber-800">
                      FREE
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${(SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Request Bulk Quote on WhatsApp
                </a>

                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-red-900 hover:bg-red-950 text-amber-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Catering Desk
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bulk Features & Why Choose Jai Ambe */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-gradient-to-br from-red-900 to-amber-950 text-white p-6 sm:p-8 rounded-3xl border border-amber-400/40 shadow-xl">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block mb-2">
                Special Wedding Services
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 mb-4">
                Personalized Foil-Embossed Shagun Boxes
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-amber-100/90">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Custom Names & Monograms:</strong> Get the Bride &
                    Groom or Company logo embossed in gold foil on every box.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Live Halwai Kitchen on Site:</strong> Available for
                    live Jalebi-Rabdi, fresh Imarti, and hot Hing Kachori stalls
                    at your venue.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Timely On-Site Delivery:</strong> Insulated
                    temperature-controlled transport to the banquet hall on the
                    exact designated hour.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tasting Sessions Available:</strong> Visit our main
                    branch for a complimentary sweet-box tasting session with
                    our master halwai.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-amber-400/20 flex items-center justify-between text-xs text-amber-200">
                <span>Catering Desk: 7:00 AM - 10:30 PM</span>
                <span className="font-bold text-amber-300">
                  GST Invoice Provided
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
