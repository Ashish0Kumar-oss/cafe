import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Plus, Trash2 } from 'lucide-react';
import { MenuItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: MenuItem[];
  onRemoveWishlist: (item: MenuItem) => void;
  onAddToCartDirect: (item: MenuItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCartDirect
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10"
          >
            <div className="w-screen max-w-md bg-[#121212] border-l border-[#C89B3C]/30 shadow-2xl flex flex-col justify-between">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-400 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white font-semibold">Wishlist</h3>
                    <p className="font-sans text-xs text-[#B5B5B5]">
                      {wishlistItems.length} saved favorites
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {wishlistItems.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <Heart className="w-12 h-12 text-[#D9C3A5]/30 mx-auto" />
                    <p className="font-serif text-lg text-white">No saved items</p>
                    <p className="font-sans text-xs text-[#B5B5B5]">Click the heart icon on any coffee or pastry to save it here!</p>
                  </div>
                ) : (
                  wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="glass-panel p-4 rounded-2xl border border-white/10 flex gap-4 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-white font-semibold truncate">
                          {item.name}
                        </h4>
                        <p className="font-serif text-sm text-[#C89B3C] font-bold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onAddToCartDirect(item)}
                          className="w-8 h-8 rounded-lg bg-[#C89B3C] text-black flex items-center justify-center"
                          title="Add to Cart"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onRemoveWishlist(item)}
                          className="w-8 h-8 rounded-lg glass-panel text-red-400 flex items-center justify-center"
                          title="Remove from Wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
