import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Latte Art', 'Pastries', 'Roastery'];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const currentItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>VISUAL STORYTELLING</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            The Atmosphere <span className="gold-gradient-text italic font-cormorant">& Gallery</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase font-sans tracking-wider whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C89B3C] text-black font-semibold shadow-lg shadow-[#C89B3C]/20'
                  : 'glass-panel text-[#B5B5B5] hover:text-white hover:border-[#C89B3C]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(idx)}
                className="relative rounded-3xl overflow-hidden glass-card group cursor-pointer border border-[#D9C3A5]/10 hover:border-[#C89B3C] transition-all duration-500 h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-[#C89B3C]" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-white font-semibold">{item.title}</h3>
                  <p className="font-sans text-xs text-[#B5B5B5] line-clamp-1 mt-1 font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && currentItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev & Next Controls */}
            <button
              onClick={() =>
                setSelectedItemIndex((prev) =>
                  prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : 0
                )
              }
              className="absolute left-6 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                setSelectedItemIndex((prev) =>
                  prev !== null ? (prev + 1) % filteredItems.length : 0
                )
              }
              className="absolute right-6 z-20 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-[#C89B3C]/30"
            >
              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-[#1A1A1A] border-t border-white/10">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C] font-semibold">
                  {currentItem.category}
                </span>
                <h3 className="font-serif text-2xl text-white font-semibold mt-1">
                  {currentItem.title}
                </h3>
                <p className="font-sans text-xs text-[#B5B5B5] mt-2 font-light">
                  {currentItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
