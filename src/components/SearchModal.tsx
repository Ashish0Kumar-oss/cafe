import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Star, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  items,
  onSelectItem
}) => {
  const [query, setQuery] = useState('');

  const results = query.trim()
    ? items.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.description.toLowerCase().includes(query.toLowerCase()) ||
          i.category.toLowerCase().includes(query.toLowerCase())
      )
    : items.slice(0, 4); // Quick suggestions when empty

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-2xl glass-card rounded-3xl border border-[#C89B3C]/40 p-6 z-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <Search className="w-5 h-5 text-[#C89B3C]" />
              <input
                type="text"
                autoFocus
                placeholder="Search single-origin coffee, lattes, pastries..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-lg text-white placeholder-[#B5B5B5]/50 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              <p className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C] font-semibold">
                {query.trim() ? `Search Results (${results.length})` : 'Popular Recommendations'}
              </p>

              {results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="glass-panel p-3 rounded-2xl border border-white/5 hover:border-[#C89B3C] flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-serif text-sm text-white font-semibold group-hover:text-[#D9C3A5]">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#B5B5B5]">
                        <span>{item.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5 text-[#C89B3C]">
                          <Star className="w-3 h-3 fill-current" />
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-[#C89B3C] font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
