import React from "react";
import { Star, Quote, CheckCircle2, Heart, MessageSquare } from "lucide-react";
import { REVIEWS } from "../data/sweetsData";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 bg-white border-t border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Customer Testimonials & Heritage Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-950 mb-3">
            Loved Across Generations
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            From childhood morning jalebis to daughters' weddings, discover why
            thousands of families continue to choose Jai Ambe Sweets year after
            year.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-amber-50/40 rounded-2xl p-6 border border-amber-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-amber-200/60">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif font-bold text-red-950 text-sm">
                    {review.name}
                  </h4>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-tight mb-2">
                  {review.location}
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-100/70 px-2 py-1 rounded-md font-medium">
                  ❤️ Loves: {review.favorite}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Callout */}
        <div className="mt-12 text-center bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
              Google Maps Rating
            </span>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
              <span className="text-2xl font-bold font-serif text-white">
                4.9 / 5.0
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs text-amber-200">
                (2,480+ Genuine Reviews)
              </span>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Jai+Ambe+Misthan+Bhandar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-red-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            Read All Reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
