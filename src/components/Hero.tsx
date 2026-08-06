import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Coffee, Calendar } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Coffee Roastery Ambiance"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 animate-float-slow"
        />
        {/* Dark Luxury Radial & Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/70 to-[#0F0F0F]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0F0F0F]/80 to-[#0F0F0F]" />
      </div>

      {/* Mouse Follow Ambient Glow Effect */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#C89B3C]/15 to-[#3B2416]/20 blur-3xl transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      {/* Floating Coffee Beans Simulation */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Floating bean 1 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-10 w-12 h-12 glass-panel rounded-full border border-[#C89B3C]/30 flex items-center justify-center shadow-xl opacity-70"
        >
          <span className="text-xl">☕</span>
        </motion.div>

        {/* Floating bean 2 */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 right-12 w-14 h-14 glass-panel rounded-full border border-[#C89B3C]/20 flex items-center justify-center shadow-2xl opacity-60"
        >
          <span className="text-2xl">✨</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#C89B3C]/40 text-[#D9C3A5] text-xs uppercase font-sans tracking-[0.25em] mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>Award Winning Artisanal Roastery</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1.05] mb-6"
        >
          Every Cup <br />
          <span className="gold-gradient-text italic font-cormorant font-normal">
            Tells A Story.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-base sm:text-xl text-[#B5B5B5] max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Crafted with passion. Brewed to perfection. Experience single-origin roasting, rare Panamanian Geisha beans, and handcrafted French patisserie in an atmosphere of quiet luxury.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#C89B3C]/30 hover:scale-[1.02] transition-all duration-300"
          >
            <Coffee className="w-4 h-4 text-black" />
            <span>Explore Menu</span>
          </button>

          <button
            id="hero-reserve-table-btn"
            onClick={onReserveTable}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border border-[#C89B3C]/50 text-white hover:text-[#C89B3C] hover:border-[#C89B3C] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#C89B3C]" />
            <span>Reserve Table</span>
          </button>
        </motion.div>

        {/* Feature Highlights Pills below buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-3xl text-left"
        >
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#C89B3C]">100% Organic</span>
            <span className="text-xs text-[#B5B5B5] font-sans">Shade-grown beans</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#C89B3C]">Direct Trade</span>
            <span className="text-xs text-[#B5B5B5] font-sans">Sustainable growers</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#C89B3C]">Master Roasters</span>
            <span className="text-xs text-[#B5B5B5] font-sans">Cast-iron small batch</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg text-[#C89B3C]">Artisan Kitchen</span>
            <span className="text-xs text-[#B5B5B5] font-sans">Fresh daily pastries</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#D9C3A5]/60 hover:text-[#C89B3C] transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#C89B3C]" />
      </motion.a>
    </section>
  );
};
