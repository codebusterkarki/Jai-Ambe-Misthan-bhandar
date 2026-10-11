import React from "react";
import {
  ShieldCheck,
  Milk,
  Sparkles,
  HeartHandshake,
  Award,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { PURITY_PILLARS, SHOP_INFO } from "../data/sweetsData";

export default function PurityPromise() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case "Milk":
        return <Milk className="w-6 h-6 text-amber-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-yellow-500" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-red-600" />;
      default:
        return <Award className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section
      id="purity"
      className="py-16 sm:py-24 bg-white border-t border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Jai Ambe Purity Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-950 mb-4">
            Four Decades of Trust, Pure Milk & 100% Desi Ghee
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            In an era where adulteration and synthetic shortcuts are common, we
            hold fast to the sacred kitchen traditions started in 1984. What we
            serve your family is what we serve our own gods and children.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PURITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-amber-200 flex items-center justify-center mb-4 shadow-sm">
                  {getIcon(pillar.icon)}
                </div>
                <span className="text-xs font-bold text-amber-800 block mb-1">
                  {pillar.hindi}
                </span>
                <h3 className="font-serif font-bold text-red-950 text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/50 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified Lab Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table: Jai Ambe vs Market Standards */}
        <div className="bg-gradient-to-br from-amber-50 via-white to-red-50/40 rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-red-950 mb-1">
              Why Families Trust Jai Ambe Sweets
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              An honest comparison of our artisan methods versus commercial
              confectioners
            </p>
          </div>

          <div className="divide-y divide-amber-200/60 text-xs sm:text-sm">
            <div className="py-3.5 grid grid-cols-12 items-center gap-2">
              <div className="col-span-4 font-bold text-stone-800">
                Cooking Fat
              </div>
              <div className="col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Shudh Desi Ghee</span>
              </div>
              <div className="col-span-4 text-stone-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Palm Oil or Vanaspati mix</span>
              </div>
            </div>

            <div className="py-3.5 grid grid-cols-12 items-center gap-2">
              <div className="col-span-4 font-bold text-stone-800">
                Mawa & Chhena
              </div>
              <div className="col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily slow-churned in-house</span>
              </div>
              <div className="col-span-4 text-stone-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Commercial powders / starch</span>
              </div>
            </div>

            <div className="py-3.5 grid grid-cols-12 items-center gap-2">
              <div className="col-span-4 font-bold text-stone-800">
                Silver Vark (Warq)
              </div>
              <div className="col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Machine-made pure veg</span>
              </div>
              <div className="col-span-4 text-stone-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Traditional unhygienic foil</span>
              </div>
            </div>

            <div className="py-3.5 grid grid-cols-12 items-center gap-2">
              <div className="col-span-4 font-bold text-stone-800">
                Kashmiri Saffron
              </div>
              <div className="col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Real Pampore Kesar threads</span>
              </div>
              <div className="col-span-4 text-stone-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Synthetic yellow color dyes</span>
              </div>
            </div>

            <div className="py-3.5 grid grid-cols-12 items-center gap-2">
              <div className="col-span-4 font-bold text-stone-800">
                Preservatives
              </div>
              <div className="col-span-4 text-emerald-800 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero chemical stabilizers</span>
              </div>
              <div className="col-span-4 text-stone-500 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>Chemical extenders for shelf-life</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-white p-4 rounded-2xl border border-amber-200">
            <span className="text-xs text-stone-500 font-medium block">
              Government Food Safety & Standards Authority of India
            </span>
            <span className="text-sm font-bold text-red-950 font-mono">
              FSSAI Central Registration No: {SHOP_INFO.fssai}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
