import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Flame, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';

interface SignatureDrinksProps {
  specials: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const SignatureDrinks: React.FC<SignatureDrinksProps> = ({
  specials,
  onSelectItem,
  onAddToCartDirect
}) => {
  return (
    <section id="specials" className="py-24 sm:py-32 bg-[#121212] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C89B3C]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>ROASTER'S PRIVATE CELLAR</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              Signature <span className="gold-gradient-text italic font-cormorant font-normal">Creations</span>
            </h2>
          </div>
          <p className="font-sans text-[#B5B5B5] text-sm max-w-md font-light">
            Exquisite brews created by our master barista using rare micro-lots, botanical reductions, and artisanal gold leaf finishes.
          </p>
        </div>

        {/* Horizontal Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specials.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden group border border-[#C89B3C]/20 hover:border-[#C89B3C] transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Image with Steam Animation */}
              <div
                className="relative h-72 overflow-hidden cursor-pointer"
                onClick={() => onSelectItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/20" />

                {/* Steam animation overlay */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none opacity-80">
                  <span className="w-1 h-8 bg-gradient-to-t from-[#D9C3A5] to-transparent rounded-full animate-steam" />
                  <span className="w-1 h-10 bg-gradient-to-t from-[#C89B3C] to-transparent rounded-full animate-steam-delayed" />
                  <span className="w-1 h-6 bg-gradient-to-t from-[#D9C3A5] to-transparent rounded-full animate-steam" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#C89B3C] text-black font-bold text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full shadow-lg">
                  Chef's Special
                </div>
              </div>

              {/* Info Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-sans text-[#C89B3C]">
                      {item.origin || 'Single Origin'}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#D9C3A5]">
                      <Star className="w-3.5 h-3.5 fill-[#C89B3C] text-[#C89B3C]" />
                      <span>{item.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => onSelectItem(item)}
                    className="font-serif text-2xl text-white font-semibold mb-3 group-hover:text-[#D9C3A5] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </h3>

                  <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tasting notes */}
                {item.tastingNotes && (
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {item.tastingNotes.map((note) => (
                      <span key={note} className="text-[10px] font-sans px-2.5 py-1 rounded-lg bg-[#3B2416]/40 text-[#D9C3A5] border border-[#D9C3A5]/10">
                        {note}
                      </span>
                    ))}
                  </div>
                )}

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#B5B5B5] uppercase block">Price</span>
                    <span className="font-serif text-2xl text-[#C89B3C] font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddToCartDirect(item)}
                    className="px-5 py-2.5 rounded-full bg-[#C89B3C] hover:bg-[#E2B45C] text-black text-xs uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Try Special</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
