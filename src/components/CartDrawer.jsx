import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, MessageCircle, ArrowRight, ShieldCheck, Gift, Check, Tag } from 'lucide-react';
import { SHOP_INFO } from '../data/sweetsData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryType, setDeliveryType] = useState('Home Delivery'); // 'Home Delivery' or 'Store Pickup'
  const [packagingType, setPackagingType] = useState('Standard Eco Box'); // 'Standard Eco Box' or 'Royal Golden Gift Box'
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  // Subtotal Calculation
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (item.price * (item.quantity || 1));
  }, 0);

  const packagingFee = packagingType === 'Royal Golden Gift Box' ? 50 : 0;
  const deliveryFee = deliveryType === 'Store Pickup' ? 0 : subtotal >= 800 ? 0 : 50;
  
  const discountAmount = couponApplied ? Math.round(subtotal * 0.10) : 0;
  const grandTotal = Math.max(0, subtotal + packagingFee + deliveryFee - discountAmount);

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'MITHAI10' || couponCode.trim().toUpperCase() === 'FESTIVE') {
      setCouponApplied(true);
      setCouponDiscount(10);
    } else {
      alert("Invalid coupon code. Try 'MITHAI10' for 10% OFF!");
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems.map((item, idx) => {
      if (item.isCustomBox) {
        return `${idx + 1}. *${item.name}* (Weight: ${item.weight})\n   - Assortment: ${item.sweets.join(', ')}\n   - Ribbon: ${item.ribbonStyle}\n   - Card: "${item.greetingMessage}"\n   - Price: ₹${item.price} x ${item.quantity || 1}`;
      }
      return `${idx + 1}. *${item.name}* (${item.weight || '500g'})\n   - Qty: ${item.quantity || 1}\n   - Price: ₹${item.price * (item.quantity || 1)}`;
    }).join('\n\n');

    const orderSummary = `🪔 *NEW ORDER - JAI AMBE SWEETS* 🪔\n\n` +
      `*Customer Details:*\n` +
      `👤 Name: ${customerName || 'Customer'}\n` +
      `📞 Phone: ${customerPhone || 'Not provided'}\n` +
      `📍 Delivery Type: ${deliveryType}\n` +
      (deliveryType === 'Home Delivery' ? `🏠 Address: ${deliveryAddress || 'Shared upon confirmation'}\n` : '') +
      `🎁 Packaging: ${packagingType}\n\n` +
      `*Items Ordered:*\n${itemsText}\n\n` +
      `*Payment Summary:*\n` +
      `• Subtotal: ₹${subtotal}\n` +
      `• Packaging: ₹${packagingFee}\n` +
      `• Delivery: ₹${deliveryFee === 0 ? 'FREE' : '₹' + deliveryFee}\n` +
      (couponApplied ? `• Discount (10%): -₹${discountAmount}\n` : '') +
      `*Grand Total: ₹${grandTotal}*\n\n` +
      `Please confirm order preparation and dispatch time. Thank you!`;

    const cleanPhone = (SHOP_INFO.whatsapp || '').replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(orderSummary);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-amber-300">
          
          {/* Cart Header */}
          <div className="p-5 bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white flex items-center justify-between border-b border-amber-500/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-red-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-amber-100">
                  Your Mithai Plate
                </h3>
                <p className="text-xs text-amber-200/80">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-amber-200 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-red-950 text-lg mb-1">
                  Your plate is currently empty!
                </h4>
                <p className="text-stone-500 text-xs mb-6 max-w-xs mx-auto">
                  Add some fresh Kaju Katli, Desi Ghee Motichoor Laddus, or build your own Shagun box.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-red-900 text-amber-200 hover:text-white font-bold text-xs shadow-md transition-all"
                >
                  Explore Mithai Menu
                </button>
              </div>
            ) : (
              <>
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-amber-50/40 border border-amber-200/80 flex items-start gap-3 hover:bg-amber-50 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 border border-amber-200"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h5 className="font-serif font-bold text-red-950 text-xs sm:text-sm leading-tight truncate">
                            {item.name}
                          </h5>
                          <span className="text-[11px] text-amber-800 font-medium block">
                            {item.weight || '500g'}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-stone-400 hover:text-red-700 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Custom Box details */}
                      {item.isCustomBox && (
                        <div className="text-[10px] text-stone-600 bg-white/80 p-1.5 rounded-lg border border-amber-200 my-1 space-y-0.5">
                          <p><strong>Box:</strong> {item.sweets?.join(', ')}</p>
                          <p><strong>Card:</strong> "{item.greetingMessage}"</p>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center bg-white rounded-lg border border-amber-200 overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                            className="p-1 hover:bg-amber-100 text-stone-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-stone-800">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                            className="p-1 hover:bg-amber-100 text-stone-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-bold text-sm text-red-950 font-serif">
                          ₹{item.price * (item.quantity || 1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Packaging & Delivery Options */}
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Gift Packaging Type:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'Standard Eco Box', fee: 'Free' },
                        { name: 'Royal Golden Gift Box', fee: '+₹50' }
                      ].map(pkg => (
                        <button
                          key={pkg.name}
                          onClick={() => setPackagingType(pkg.name)}
                          className={`p-2 rounded-xl text-[11px] font-medium border text-center transition-all ${
                            packagingType === pkg.name
                              ? 'bg-amber-100 text-red-950 font-bold border-amber-400'
                              : 'bg-white text-stone-600 border-stone-200'
                          }`}
                        >
                          <span>{pkg.name}</span>
                          <span className="block text-[10px] text-stone-400">{pkg.fee}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-bold mb-1">
                      Delivery Option:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'Home Delivery', note: subtotal >= 800 ? 'Free (Above ₹800)' : '₹50 fee' },
                        { name: 'Store Pickup', note: 'Pick up at Shop' }
                      ].map(del => (
                        <button
                          key={del.name}
                          onClick={() => setDeliveryType(del.name)}
                          className={`p-2 rounded-xl text-[11px] font-medium border text-center transition-all ${
                            deliveryType === del.name
                              ? 'bg-amber-100 text-red-950 font-bold border-amber-400'
                              : 'bg-white text-stone-600 border-stone-200'
                          }`}
                        >
                          <span>{del.name}</span>
                          <span className="block text-[10px] text-stone-400">{del.note}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Info Form */}
                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    <input
                      type="text"
                      placeholder="Your Name (Optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-400"
                    />
                    {deliveryType === 'Home Delivery' && (
                      <input
                        type="text"
                        placeholder="Delivery Address & Landmark"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-amber-400"
                      />
                    )}
                  </div>

                  {/* Coupon Code Input */}
                  <div className="pt-2 border-t border-stone-200">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Coupon code (e.g. MITHAI10)"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="w-full bg-white border border-stone-200 rounded-xl pl-8 pr-3 py-2 text-xs uppercase font-mono focus:outline-none focus:border-amber-400"
                        />
                        <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                      </div>
                      <button
                        onClick={handleApplyCoupon}
                        className="px-3 py-2 bg-stone-800 text-white rounded-xl text-xs font-bold hover:bg-stone-900 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-[11px] text-emerald-700 font-bold mt-1">
                        ✓ 10% Festive Discount Applied!
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Cart Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 bg-white border-t border-amber-200 space-y-3 shadow-lg">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Items Subtotal:</span>
                  <span className="font-semibold text-stone-800">₹{subtotal}</span>
                </div>
                {packagingFee > 0 && (
                  <div className="flex justify-between">
                    <span>Royal Gift Packaging:</span>
                    <span className="font-semibold text-stone-800">₹{packagingFee}</span>
                  </div>
                )}
                {deliveryType === 'Home Delivery' && (
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold text-emerald-700">
                      {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                    </span>
                  </div>
                )}
                {couponApplied && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Coupon Discount (10%):</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-red-950 font-serif pt-1.5 border-t border-amber-100">
                  <span>Grand Total:</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Order via WhatsApp CTA */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Confirm & Order on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Shudh Desi Ghee
                </span>
                <button
                  onClick={onClearCart}
                  className="hover:text-red-700 transition-colors"
                >
                  Clear Plate
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

