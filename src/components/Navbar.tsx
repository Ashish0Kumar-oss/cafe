import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Heart, Search, Menu as MenuIcon, X, Volume2, VolumeX, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenReservation: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenReservation,
  isAudioPlaying,
  onToggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass-nav shadow-2xl'
          : 'py-6 bg-gradient-to-b from-[#0F0F0F]/90 via-[#0F0F0F]/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B2416] to-[#C89B3C] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0F0F0F] rounded-[10px] flex items-center justify-center">
              <Coffee className="w-5 h-5 text-[#C89B3C] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl text-white tracking-wider font-semibold group-hover:text-[#D9C3A5] transition-colors">
              MAISON DU CAFÉ
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C89B3C]">
              Artisanal Roastery
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-xs uppercase font-sans tracking-widest text-[#B5B5B5] hover:text-[#C89B3C] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C89B3C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Audio Toggle */}
          <button
            id="audio-toggle-btn"
            onClick={onToggleAudio}
            title={isAudioPlaying ? "Mute Café Ambiance" : "Play Café Ambiance"}
            className="w-9 h-9 rounded-full glass-panel border border-[#D9C3A5]/20 flex items-center justify-center text-[#D9C3A5] hover:text-[#C89B3C] hover:border-[#C89B3C]/50 transition-all duration-300"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#C89B3C] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Search Trigger */}
          <button
            id="search-trigger-btn"
            onClick={onOpenSearch}
            aria-label="Search menu"
            className="w-9 h-9 rounded-full glass-panel border border-[#D9C3A5]/20 flex items-center justify-center text-[#D9C3A5] hover:text-[#C89B3C] hover:border-[#C89B3C]/50 transition-all duration-300"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Trigger */}
          <button
            id="wishlist-trigger-btn"
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative w-9 h-9 rounded-full glass-panel border border-[#D9C3A5]/20 flex items-center justify-center text-[#D9C3A5] hover:text-[#C89B3C] hover:border-[#C89B3C]/50 transition-all duration-300"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C89B3C] text-[#0F0F0F] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Reservation Shortcut Button */}
          <button
            id="nav-reserve-btn"
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-sans tracking-wide border border-[#C89B3C]/40 text-[#D9C3A5] hover:bg-[#C89B3C]/10 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>Book Table</span>
          </button>

          {/* Cart Trigger */}
          <button
            id="cart-trigger-btn"
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#3B2416] to-[#C89B3C] text-white font-sans text-xs tracking-wider flex items-center gap-2 hover:brightness-110 transition-all shadow-lg hover:shadow-[#C89B3C]/20"
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span className="hidden sm:inline font-medium">Order</span>
            {cartCount > 0 && (
              <span className="bg-white text-[#3B2416] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="xl:hidden w-9 h-9 rounded-full glass-panel border border-[#D9C3A5]/20 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass-nav border-t border-[#D9C3A5]/10 mt-3 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm uppercase font-sans tracking-widest text-[#B5B5B5] hover:text-[#C89B3C] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 rounded-xl border border-[#C89B3C] text-[#C89B3C] text-xs uppercase tracking-widest font-semibold text-center"
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
