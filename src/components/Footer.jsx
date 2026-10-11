import React from "react";
import {
  Crown,
  Heart,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
} from "lucide-react";
import { SHOP_INFO } from "../data/sweetsData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#2B0909] to-[#1A0505] text-amber-100/80 border-t border-amber-600/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-500/20">
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-amber-700 flex items-center justify-center text-amber-300 border border-amber-400/40">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white block">
                  {SHOP_INFO.name}
                </span>
                <span className="text-xs text-amber-400">
                  {SHOP_INFO.hindiName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed">
              Preserving traditional Indian sweet-making since 1984. Prepared
              strictly in 100% pure Desi Ghee, daily fresh dairy mawa, and
              handpicked dry fruits for pure family joy.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30 font-medium">
                FSSAI Lic: {SHOP_INFO.fssai}
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30 font-medium">
                100% Pure Veg
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Mithai Menu
                </a>
              </li>
              <li>
                <a
                  href="#box-builder"
                  className="hover:text-amber-300 transition-colors"
                >
                  Custom Shagun Box
                </a>
              </li>
              <li>
                <a
                  href="#purity"
                  className="hover:text-amber-300 transition-colors"
                >
                  Purity Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#catering"
                  className="hover:text-amber-300 transition-colors"
                >
                  Wedding & Bulk Orders
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-amber-300 transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-amber-300 transition-colors"
                >
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Sweets */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wider uppercase">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Royal Kaju Katli (काजू कतली)
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Desi Ghee Motichoor Laddu (मोतीचूर)
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Kashmiri Kesar Rasmalai (रसमलाई)
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Royal Malai Ghewar (शाही घेवर)
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Sugar-Free Anjeer Barfi (अंजीर बर्फी)
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-300 transition-colors"
                >
                  Spicy Hing Khasta Kachori (कचौरी)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Contact & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wider uppercase">
              Store Information
            </h4>
            <div className="space-y-2.5 text-xs text-amber-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {SHOP_INFO.address}, {SHOP_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{SHOP_INFO.timings}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{SHOP_INFO.phone}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-amber-200 font-semibold border border-amber-400/30 transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>
            © {new Date().getFullYear()} {SHOP_INFO.name} ({SHOP_INFO.hindiName}
            ). All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for
            pure Indian celebrations
          </p>
        </div>
      </div>
    </footer>
  );
}
