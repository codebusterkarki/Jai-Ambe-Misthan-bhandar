import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, Menu, X, Crown, MessageCircle, Sparkles, MapPin, Gift, ShieldCheck, Star } from 'lucide-react';
import { SHOP_INFO } from '../data/sweetsData';

export default function Navbar({ cartCount, cartTotal, onOpenCart, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/70 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22 gap-4 lg:gap-8">
          
          {/* 1. BRAND LOGO & HERITAGE TITLE */}
          <div className="flex items-center shrink-0">
            <a href="#" className="flex items-center gap-3 sm:gap-3.5 group py-1.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-red-800 via-red-900 to-amber-900 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-105 group-hover:shadow-red-900/20 transition-all duration-300 border border-amber-400/40 shrink-0">
                <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-red-950 leading-tight">
                    {SHOP_INFO.name}
                  </span>
                  <span className="hidden sm:inline-flex items-center text-[10px] bg-red-100 text-red-800 font-sans font-bold px-2 py-0.5 rounded-full border border-red-200">
                    Est. {SHOP_INFO.since}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-amber-800/90 font-medium tracking-wide leading-tight mt-0.5">
                  {SHOP_INFO.hindiName} <span className="text-amber-500">•</span> 100% Desi Ghee
                </span>
              </div>
            </a>
          </div>

          {/* 2. DESKTOP NAVIGATION LINKS (Balanced Gaps & Padding) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-stone-700">
            <a
              href="#menu"
              className="px-3.5 py-2 rounded-xl hover:bg-amber-50 hover:text-red-900 text-stone-700 transition-all duration-200"
            >
              Mithai Menu
            </a>

            <a
              href="#box-builder"
              className="px-3.5 py-2 rounded-xl bg-amber-50/80 hover:bg-amber-100 text-amber-900 border border-amber-200/80 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse shrink-0" />
              <span>Custom Shagun Box</span>
            </a>

            <a
              href="#purity"
              className="px-3.5 py-2 rounded-xl hover:bg-amber-50 hover:text-red-900 text-stone-700 transition-all duration-200"
            >
              Purity Promise
            </a>

            <a
              href="#catering"
              className="px-3.5 py-2 rounded-xl hover:bg-amber-50 hover:text-red-900 text-stone-700 transition-all duration-200"
            >
              Weddings & Bulk
            </a>

            <a
              href="#reviews"
              className="px-3.5 py-2 rounded-xl hover:bg-amber-50 hover:text-red-900 text-stone-700 transition-all duration-200"
            >
              Reviews
            </a>

            <a
              href="#location"
              className="px-3.5 py-2 rounded-xl hover:bg-amber-50 hover:text-red-900 text-stone-700 transition-all duration-200"
            >
              Store & Timings
            </a>
          </nav>

          {/* 3. RIGHT ACTIONS: SEARCH, WHATSAPP & CART */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
            
            {/* Quick Search Input */}
            <div className="relative hidden xl:block">
              <input
                type="text"
                placeholder="Search Kaju Katli, Laddoos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 2xl:w-56 pl-9 pr-3.5 py-2 text-xs bg-amber-50/60 border border-amber-200/90 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:bg-white placeholder-stone-400 transition-all duration-200"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5 pointer-events-none" />
            </div>

            {/* Direct WhatsApp Action */}
            <a
              href={`https://wa.me/${(SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Namaste! I would like to order fresh sweets from Jai Ambe Sweets.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 shadow-sm transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 sm:px-4.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-red-800 via-red-900 to-amber-950 text-white font-medium text-xs sm:text-sm shadow-md shadow-red-950/15 hover:from-red-900 hover:to-black transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="hidden xs:inline font-semibold">Plate</span>
              {cartCount > 0 ? (
                <span className="bg-amber-400 text-red-950 text-xs font-black px-2 py-0.5 rounded-full min-w-[22px] text-center shadow-sm">
                  {cartCount}
                </span>
              ) : (
                <span className="text-amber-200/80 text-xs font-normal">(0)</span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-stone-700 hover:text-red-900 hover:bg-amber-50/80 border border-transparent hover:border-amber-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* 4. MOBILE DRAWER MENU (Refined Spacing & Touch Targets) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-amber-200/90 shadow-2xl px-4 sm:px-6 py-5 transition-all animate-fadeIn">
          
          {/* Mobile Search Input */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search sweets (e.g. Kaju Katli, Motichoor)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-amber-50/70 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:bg-white"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
          </div>

          {/* Mobile Navigation List */}
          <div className="flex flex-col space-y-1.5 text-stone-800 font-medium">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-amber-50 text-red-950 font-bold transition-colors"
            >
              <span>All Mithai Menu (सभी मिठाइयाँ)</span>
              <span className="text-amber-600 text-xs">Explore →</span>
            </a>

            <a
              href="#box-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-amber-50/80 text-amber-900 font-bold border border-amber-200/80 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-600" />
                <span>Custom Shagun Box Builder</span>
              </div>
              <span className="text-[11px] bg-amber-400 text-red-950 px-2 py-0.5 rounded-full font-black">
                Featured
              </span>
            </a>

            <a
              href="#purity"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-amber-50 text-stone-700 hover:text-red-900 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Desi Ghee Purity Promise</span>
            </a>

            <a
              href="#catering"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-amber-50 text-stone-700 hover:text-red-900 transition-colors"
            >
              <Crown className="w-4 h-4 text-amber-600" />
              <span>Weddings & Bulk Gifting</span>
            </a>

            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-amber-50 text-stone-700 hover:text-red-900 transition-colors"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Customer Reviews & Stories</span>
            </a>

            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-amber-50 text-stone-700 hover:text-red-900 transition-colors"
            >
              <MapPin className="w-4 h-4 text-red-700" />
              <span>Store Location & Opening Hours</span>
            </a>
          </div>

          {/* Quick Contact Bar in Mobile Menu */}
          <div className="mt-5 pt-4 border-t border-amber-100 flex items-center gap-3">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-red-900 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-700" />
              <span>{SHOP_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${(SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Namaste! I would like to order sweets.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp Order</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
