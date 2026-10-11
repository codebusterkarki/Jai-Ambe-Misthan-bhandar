import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { FAQS, SHOP_INFO } from "../data/sweetsData";

export default function ContactLocation() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="location"
      className="py-16 sm:py-24 bg-[#FAF7F0] border-t border-amber-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Store Locator & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-red-950 mb-3">
            Visit Our Flagship Store
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Step into the divine aroma of boiling pure milk, frying jalebis, and
            roasted cardamom. We welcome you every day of the week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
              <div className="border-b border-amber-100 pb-4">
                <span className="text-xs font-bold text-amber-800 uppercase block mb-1">
                  Main Heritage Branch
                </span>
                <h3 className="font-serif font-bold text-2xl text-red-950">
                  {SHOP_INFO.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {SHOP_INFO.hindiName} • Serving Since {SHOP_INFO.since}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-800 flex items-center justify-center shrink-0 border border-red-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900">Address:</strong>
                    <span>
                      {SHOP_INFO.address}, {SHOP_INFO.city}, {SHOP_INFO.state}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900">
                      Store Timings:
                    </strong>
                    <span>{SHOP_INFO.timings}</span>
                    <span className="block text-[11px] text-emerald-700 font-semibold mt-0.5">
                      Hot Jalebi & Kachori Counter opens at 7:00 AM!
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900">
                      Phone & Orders:
                    </strong>
                    <div className="flex flex-col gap-0.5">
                      <a
                        href={`tel:${SHOP_INFO.phone}`}
                        className="hover:text-red-800 font-medium"
                      >
                        {SHOP_INFO.phone} (Primary)
                      </a>
                      <a
                        href={`tel:${SHOP_INFO.altPhone}`}
                        className="hover:text-red-800 font-medium"
                      >
                        {SHOP_INFO.altPhone} (Bulk Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-stone-900">Email:</strong>
                    <a
                      href={`mailto:${SHOP_INFO.email}`}
                      className="hover:text-red-800"
                    >
                      {SHOP_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-red-900 hover:bg-red-950 text-amber-100 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Get Google Maps Directions
                </a>

                <a
                  href={`https://wa.me/${(SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    "Namaste! What are the today's special sweets?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif font-bold text-xl text-red-950">
                Frequently Asked Questions (अक्सर पूछे जाने वाले सवाल)
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-amber-200/80 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 hover:text-red-950 transition-colors"
                    >
                      <span className="text-sm sm:text-base leading-snug">
                        {faq.q}
                      </span>
                      <div className="p-1 rounded-full bg-amber-50 text-amber-800 shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100/60 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Inquiry Callout */}
            <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300 flex items-center justify-between gap-3 text-xs text-amber-950">
              <span>
                Have a specific customization or outstation courier request?
              </span>
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="font-bold underline text-red-900 shrink-0"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
