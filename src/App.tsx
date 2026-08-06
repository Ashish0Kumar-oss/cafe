import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedMenu } from './components/FeaturedMenu';
import { SignatureDrinks } from './components/SignatureDrinks';
import { ItemCustomizationModal } from './components/ItemCustomizationModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ChefTeam } from './components/ChefTeam';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { ReservationSection } from './components/ReservationSection';
import { BlogSection } from './components/BlogSection';
import { InstagramFeed } from './components/InstagramFeed';
import { Newsletter } from './components/Newsletter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { LiveChatWidget } from './components/LiveChatWidget';
import { CustomCursor } from './components/CustomCursor';
import { AudioPlayer } from './components/AudioPlayer';

import { MENU_ITEMS } from './data/coffeeData';
import { MenuItem, CartItem, CartItemOption, Reservation } from './types';

export default function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['m1', 'm10']);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Cart operations
  const handleAddToCartWithOptions = (
    item: MenuItem,
    options: CartItemOption,
    quantity: number
  ) => {
    const sizeMultiplier = options.size === 'Double' ? 1.5 : options.size === 'Grand / Large' ? 2.0 : 0;
    const milkAdd = options.milk !== 'Whole Milk' && options.milk !== 'None' ? 0.75 : 0;
    const syrupAdd = options.syrup && options.syrup !== 'None' ? 0.75 : 0;
    const unitPrice = item.price + sizeMultiplier + milkAdd + syrupAdd;
    const totalPrice = unitPrice * quantity;

    const cartId = `${item.id}-${options.size}-${options.milk}-${options.syrup}-${options.temperature}-${Date.now()}`;

    const newCartItem: CartItem = {
      cartId,
      item,
      quantity,
      options,
      totalPrice
    };

    setCart((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  const handleAddToCartDirect = (item: MenuItem) => {
    handleAddToCartWithOptions(
      item,
      {
        size: 'Standard',
        milk: 'Oat Milk',
        sweetness: 'Regular (100%)',
        syrup: 'None',
        temperature: 'Hot'
      },
      1
    );
  };

  const handleUpdateCartQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.cartId === cartId) {
            const newQty = ci.quantity + delta;
            if (newQty <= 0) return null;
            const singleUnitPrice = ci.totalPrice / ci.quantity;
            return {
              ...ci,
              quantity: newQty,
              totalPrice: singleUnitPrice * newQty
            };
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (cartId: string) => {
    setCart((prev) => prev.filter((ci) => ci.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (item: MenuItem) => {
    setWishlistIds((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
  };

  const wishlistItems = MENU_ITEMS.filter((i) => wishlistIds.includes(i.id));

  // Navigation actions
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white selection:bg-[#C89B3C] selection:text-black font-sans relative">
      {/* Loading Screen */}
      {!loadingFinished && (
        <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      )}

      {/* Custom Follower Cursor */}
      <CustomCursor />

      {/* Background Ambient Audio Player */}
      <AudioPlayer isPlaying={isAudioPlaying} />

      {/* Navigation */}
      <Navbar
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenReservation={() => scrollToSection('#reservation')}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
      />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={() => scrollToSection('#menu')}
          onReserveTable={() => scrollToSection('#reservation')}
        />

        {/* 2. About Section & Heritage */}
        <About />

        {/* 3. Featured Curated Menu */}
        <FeaturedMenu
          items={MENU_ITEMS}
          wishlistIds={wishlistIds}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCartDirect={handleAddToCartDirect}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 4. Signature Drinks */}
        <SignatureDrinks
          specials={MENU_ITEMS.filter((i) => i.isSpecial)}
          onSelectItem={(item) => setSelectedItem(item)}
          onAddToCartDirect={handleAddToCartDirect}
        />

        {/* 5. Why Choose Us (Craft Highlights) */}
        <WhyChooseUs />

        {/* 6. Chef & Barista Team */}
        <ChefTeam />

        {/* 7. Patron Testimonials */}
        <Testimonials />

        {/* 8. Atmosphere Gallery & Lightbox */}
        <Gallery />

        {/* 9. Reservation System */}
        <ReservationSection />

        {/* 10. Coffee Journal & Blog */}
        <BlogSection />

        {/* 11. Instagram Feed */}
        <InstagramFeed />

        {/* 12. Coffee Club Newsletter */}
        <Newsletter />

        {/* 13. Contact & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <ItemCustomizationModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCartWithOptions}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCartDirect={handleAddToCartDirect}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={MENU_ITEMS}
        onSelectItem={(item) => setSelectedItem(item)}
      />

      {/* Virtual Barista AI Assistant Chat Widget */}
      <LiveChatWidget onSelectItem={(item) => setSelectedItem(item)} />
    </div>
  );
}
