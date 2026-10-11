import React from "react";
import {
  Crown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Award,
  Star,
  MessageCircle,
} from "lucide-react";
import { SHOP_INFO } from "../data/sweetsData";

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#4A0E0E] via-[#5C1111] to-[#781818] text-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Decorative Gold Motifs & Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle traditional lattice line art */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FBBF24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Heritage Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>A Legacy of Royal Taste Since 1984</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-amber-300">40+ Years of Purity</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-amber-50">
              <span className="block text-amber-300 font-serif font-normal text-xl sm:text-2xl md:text-3xl mb-1">
                {SHOP_INFO.hindiName}
              </span>
              Handcrafted in <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
                100% Shudh Desi Ghee
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-amber-100/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Every piece of sweet at{" "}
              <strong className="text-amber-200">Jai Ambe Sweets</strong> is
              slow-crafted with slow-churned Desi Ghee, daily fresh dairy mawa,
              Kashmiri saffron, and premium dry fruits. No preservatives, zero
              vanaspati — just the divine taste of true Indian celebration.
            </p>

            {/* Key Quality Pillars Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-1.5 bg-red-950/60 border border-amber-500/30 px-3 py-1.5 rounded-xl text-xs text-amber-100 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Pure Desi Ghee
              </div>
              <div className="flex items-center gap-1.5 bg-red-950/60 border border-amber-500/30 px-3 py-1.5 rounded-xl text-xs text-amber-100 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Daily Fresh Cow Milk Chhena
              </div>
              <div className="flex items-center gap-1.5 bg-red-950/60 border border-amber-500/30 px-3 py-1.5 rounded-xl text-xs text-amber-100 font-medium">
                <Award className="w-4 h-4 text-yellow-400" />
                No Artificial Additives
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#menu"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-red-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:from-amber-300 hover:to-amber-400 hover:scale-105 active:scale-95 transition-all"
              >
                Explore Mithai Menu
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#box-builder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-amber-300/40 backdrop-blur-sm transition-all"
              >
                <Crown className="w-4 h-4 text-amber-300" />
                Build Custom Shagun Box
              </a>

              <a
                href={`https://wa.me/${(SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Namaste! I would like to place an order from Jai Ambe Sweets."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Order via WhatsApp
              </a>
            </div>

            {/* Customer Rating snippet */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-amber-200">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span>
                <strong>4.9 / 5.0</strong> Rating
              </span>
              <span className="text-amber-400">•</span>
              <span>15,000+ Happy Celebrations & Weddings Served</span>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image with Golden Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-red-950 group">
                <img
                  src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80"
                  alt="Jai Ambe Sweets Royal Assortment"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/20 to-transparent"></div>

                {/* Floating Tag inside image */}
                <div className="absolute bottom-4 left-4 right-4 bg-red-950/80 backdrop-blur-md p-4 rounded-2xl border border-amber-400/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-amber-300 font-serif text-sm font-bold block">
                        Royal Kaju & Desi Ghee Thali
                      </span>
                      <span className="text-xs text-amber-100/80">
                        Kaju Katli • Motichoor • Rasmalai • Ghewar
                      </span>
                    </div>
                    <span className="bg-amber-400 text-red-950 text-xs font-bold px-2.5 py-1 rounded-lg">
                      Fresh Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: 100% Pure Ghee Guarantee */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-amber-400 text-red-950 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-yellow-200 animate-bounce duration-1000">
                <Crown className="w-5 h-5 text-red-900" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider leading-none text-red-900">
                    Guaranteed
                  </p>
                  <p className="text-xs font-black leading-tight">
                    100% Shudh Desi Ghee
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Local Love */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-red-900/95 text-amber-100 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-400/40 backdrop-blur-md">
                <div className="w-9 h-9 rounded-full bg-amber-400 text-red-950 flex items-center justify-center font-bold text-sm">
                  40+
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-amber-200">
                    Years of Trust
                  </p>
                  <p className="text-[11px] text-amber-100/70">
                    Heritage Sweet Shop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlights / Counter Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-amber-500/20 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              40+
            </span>
            <span className="text-xs sm:text-sm text-amber-100/80 font-medium">
              Years Serving Purity
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              100%
            </span>
            <span className="text-xs sm:text-sm text-amber-100/80 font-medium">
              Pure Desi Ghee & Mawa
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              60+
            </span>
            <span className="text-xs sm:text-sm text-amber-100/80 font-medium">
              Mithai & Namkeen Types
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/20 backdrop-blur-sm">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-300 font-serif">
              50,000+
            </span>
            <span className="text-xs sm:text-sm text-amber-100/80 font-medium">
              Festive Celebrations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
