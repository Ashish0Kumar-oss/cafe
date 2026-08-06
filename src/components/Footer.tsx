import React from 'react';
import { Coffee, ArrowUp, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C89B3C]/20 pt-16 pb-12 relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B2416] to-[#C89B3C] p-0.5">
                <div className="w-full h-full bg-[#0F0F0F] rounded-[10px] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#C89B3C]" />
                </div>
              </div>
              <span className="font-serif text-2xl text-white font-semibold">MAISON DU CAFÉ</span>
            </div>
            <p className="font-sans text-xs text-[#B5B5B5] max-w-sm font-light leading-relaxed">
              An award-winning luxury coffee lounge and micro-roastery. We source shade-grown single-origin coffee beans and craft unforgettable daily sensory experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base text-[#C89B3C] font-semibold mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#B5B5B5]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Our Roastery</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Artisanal Menu</a></li>
              <li><a href="#specials" className="hover:text-white transition-colors">Signature Drinks</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Atmosphere Gallery</a></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-serif text-base text-[#C89B3C] font-semibold mb-4">Experiences</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#B5B5B5]">
              <li><a href="#reservation" className="hover:text-white transition-colors">Table Reservation</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Coffee Journal</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Patron Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Private Events</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Bean Subscription</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-base text-[#C89B3C] font-semibold mb-4">Flagship Lounge</h4>
            <div className="space-y-2 font-sans text-xs text-[#B5B5B5]">
              <p className="text-white font-medium">742 Grand Avenue</p>
              <p>Downtown Metropolis</p>
              <div className="pt-2">
                <p className="text-[#C89B3C] font-semibold">Serving Hours:</p>
                <p>Mon - Fri: 07:00 – 22:00</p>
                <p>Sat - Sun: 08:00 – 23:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[#B5B5B5]/60 font-light">
            © 2026 Maison Du Café — Luxury Artisanal Coffee Lounge. All rights reserved.
          </p>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-sans text-[#D9C3A5] hover:text-[#C89B3C] transition-colors glass-panel px-4 py-2 rounded-full border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-[#C89B3C]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
