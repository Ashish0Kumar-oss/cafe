import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Plus, Heart, SlidersHorizontal, Search, Sparkles, Clock, Flame } from 'lucide-react';
import { MenuItem, CategoryType } from '../types';

interface FeaturedMenuProps {
  items: MenuItem[];
  wishlistIds: string[];
  onSelectItem: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
  onToggleWishlist: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  items,
  wishlistIds,
  onSelectItem,
  onAddToCartDirect,
  onToggleWishlist
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: CategoryType[] = [
    'All',
    'Coffee',
    'Espresso',
    'Cappuccino',
    'Latte',
    'Mocha',
    'Desserts',
    'Breakfast',
    'Sandwiches'
  ];

  const filteredItems = items
    .filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#0F0F0F] relative">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>CURATED ARTISANAL MENU</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-6">
            Handcrafted <span className="gold-gradient-text italic font-cormorant font-normal">Delights</span>
          </h2>
          <p className="font-sans text-[#B5B5B5] text-base font-light leading-relaxed">
            Every creation is prepared to order using ethically sourced single-origin beans, organic dairy, and gourmet French techniques.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase font-sans tracking-wider whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold shadow-lg shadow-[#C89B3C]/20 scale-105'
                    : 'glass-panel text-[#B5B5B5] hover:text-white hover:border-[#C89B3C]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-[#D9C3A5]/10">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#D9C3A5]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search coffee, pastries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/60 pl-10 pr-4 py-2.5 rounded-xl border border-[#D9C3A5]/10 focus:outline-none focus:border-[#C89B3C] transition-colors"
              />
            </div>

            {/* Sorting dropdown */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <SlidersHorizontal className="w-4 h-4 text-[#C89B3C]" />
              <span className="text-xs text-[#B5B5B5]">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#1A1A1A] text-xs text-white border border-[#D9C3A5]/10 rounded-xl px-3 py-2 focus:outline-none focus:border-[#C89B3C]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const isWishlisted = wishlistIds.includes(item.id);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full border border-[#D9C3A5]/10 hover:border-[#C89B3C]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C89B3C]/10"
                >
                  {/* Image Container */}
                  <div
                    className="relative h-60 overflow-hidden cursor-pointer"
                    onClick={() => onSelectItem(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/30" />

                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.isSpecial && (
                        <span className="bg-[#C89B3C] text-black font-bold text-[10px] uppercase font-sans tracking-widest px-2.5 py-1 rounded-full shadow-md">
                          Signature
                        </span>
                      )}
                      {item.isBestSeller && (
                        <span className="bg-[#3B2416] text-[#D9C3A5] font-semibold text-[10px] uppercase font-sans tracking-widest px-2.5 py-1 rounded-full border border-[#D9C3A5]/30">
                          Best Seller
                        </span>
                      )}
                    </div>

                    {/* Wishlist Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item);
                      }}
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full glass-panel flex items-center justify-center transition-colors ${
                        isWishlisted ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'text-white hover:text-[#C89B3C]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>

                    {/* Rating badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 glass-panel px-3 py-1 rounded-full text-xs font-semibold text-white">
                      <Star className="w-3.5 h-3.5 fill-[#C89B3C] text-[#C89B3C]" />
                      <span>{item.rating.toFixed(1)}</span>
                      <span className="text-[#B5B5B5] text-[10px]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3
                          onClick={() => onSelectItem(item)}
                          className="font-serif text-xl text-white font-semibold group-hover:text-[#D9C3A5] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h3>
                      </div>

                      <p className="font-sans text-xs text-[#B5B5B5] font-light leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Origin & Prep info */}
                      {(item.origin || item.prepTime) && (
                        <div className="flex items-center gap-3 text-[11px] text-[#D9C3A5]/70 mb-4 font-sans">
                          {item.origin && <span>📍 {item.origin}</span>}
                          {item.prepTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#C89B3C]" />
                              {item.prepTime}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Price and Actions */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-sans tracking-wider text-[#B5B5B5]">Price</span>
                        <span className="font-serif text-2xl text-[#C89B3C] font-semibold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectItem(item)}
                          className="px-3.5 py-2 rounded-xl text-xs font-sans text-[#D9C3A5] border border-[#D9C3A5]/20 hover:border-[#C89B3C] transition-colors"
                        >
                          Customize
                        </button>

                        <button
                          onClick={() => onAddToCartDirect(item)}
                          className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#3B2416] to-[#C89B3C] text-white flex items-center justify-center hover:scale-105 shadow-lg hover:shadow-[#C89B3C]/20 transition-transform"
                          title="Add to Cart"
                        >
                          <Plus className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-3xl p-8 max-w-md mx-auto">
            <p className="font-serif text-xl text-white mb-2">No items found</p>
            <p className="font-sans text-xs text-[#B5B5B5] mb-4">Try adjusting your search query or active filter category.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#C89B3C] text-black text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
