"use client";

import React, { useState } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuCatalogue from "../components/MenuCatalogue";
import CustomBoxBuilder from "../components/CustomBoxBuilder";
import PurityPromise from "../components/PurityPromise";
import OccasionCatering from "../components/OccasionCatering";
import Reviews from "../components/Reviews";
import ContactLocation from "../components/ContactLocation";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [cartItems, setCartItems] = useState([
    {
      id: "kaju-katli-500g",
      productId: "kaju-katli",
      name: "Royal Kaju Katli",
      hindiName: "शाही काजू कतली",
      weight: "500g",
      price: 510,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      category: "kaju-dryfruit",
    },
    {
      id: "motichoor-laddu-500g",
      productId: "motichoor-laddu",
      name: "Desi Ghee Motichoor Laddu",
      hindiName: "देसी घी मोतीचूर लड्डू",
      weight: "500g",
      price: 350,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      category: "desi-ghee",
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Cart Handlers
  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity =
          (updated[existingIndex].quantity || 1) + (newItem.quantity || 1);
        return updated;
      }
      return [...prev, { ...newItem, quantity: newItem.quantity || 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );
  const totalCartAmount = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0]">
      {/* Top Notification Announcement */}
      <AnnouncementBar />

      {/* Main Sticky Navbar */}
      <Navbar
        cartCount={totalCartCount}
        cartTotal={totalCartAmount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onExploreClick={() => {}} />

        {/* Sweet & Namkeen Menu Catalogue */}
        <MenuCatalogue
          searchQuery={searchQuery}
          onAddToCart={handleAddToCart}
          onOpenProductModal={(product) => setSelectedProductForModal(product)}
          cartItems={cartItems}
        />

        {/* Custom Shagun Box Interactive Builder */}
        <CustomBoxBuilder onAddCustomBox={handleAddToCart} />

        {/* 100% Desi Ghee Purity Promise */}
        <PurityPromise />

        {/* Occasion & Bulk Catering Estimator */}
        <OccasionCatering />

        {/* Customer Reviews & Testimonials */}
        <Reviews />

        {/* Store Location & FAQ */}
        <ContactLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {selectedProductForModal && (
        <ProductModal
          product={selectedProductForModal}
          isOpen={!!selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
