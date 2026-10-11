import React from "react";
import { Sparkles, Phone, Clock, MapPin } from "lucide-react";
import { SHOP_INFO } from "../data/sweetsData";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-amber-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-600/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
          <span className="text-amber-200 font-semibold">
            {SHOP_INFO.announcement}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-amber-200/90 font-medium">
          <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {SHOP_INFO.timings}
          </span>
          <span className="hidden md:inline text-amber-500">•</span>
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            Call: {SHOP_INFO.phone}
          </a>
          <span className="hidden md:inline text-amber-500">•</span>
          <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/40 text-[11px] font-bold">
            FSSAI Reg: {SHOP_INFO.fssai}
          </span>
        </div>
      </div>
    </div>
  );
}
