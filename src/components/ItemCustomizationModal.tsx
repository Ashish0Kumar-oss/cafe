import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Flame, Clock, Plus, Minus, Check, Coffee } from 'lucide-react';
import { MenuItem, CartItemOption } from '../types';

interface ItemCustomizationModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, options: CartItemOption, quantity: number) => void;
}

export const ItemCustomizationModal: React.FC<ItemCustomizationModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<CartItemOption['size']>('Standard');
  const [milk, setMilk] = useState<CartItemOption['milk']>('Oat Milk');
  const [sweetness, setSweetness] = useState<CartItemOption['sweetness']>('Regular (100%)');
  const [syrup, setSyrup] = useState<CartItemOption['syrup']>('None');
  const [temperature, setTemperature] = useState<CartItemOption['temperature']>('Hot');

  // Price adjustment based on size
  const sizePriceMultiplier = size === 'Double' ? 1.5 : size === 'Grand / Large' ? 2.0 : 0;
  const milkPriceAdd = milk !== 'Whole Milk' && milk !== 'None' ? 0.75 : 0;
  const syrupPriceAdd = syrup !== 'None' ? 0.75 : 0;
  
  const unitPrice = item.price + sizePriceMultiplier + milkPriceAdd + syrupPriceAdd;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart(
      item,
      {
        size,
        milk,
        sweetness,
        syrup,
        temperature
      },
      quantity
    );
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl glass-card rounded-3xl overflow-hidden border border-[#C89B3C]/30 shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Image */}
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#C89B3C] text-black font-bold text-[10px] uppercase font-sans tracking-widest">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 glass-panel px-2.5 py-0.5 rounded-full text-xs text-white">
                  <Star className="w-3.5 h-3.5 fill-[#C89B3C] text-[#C89B3C]" />
                  <span>{item.rating.toFixed(1)}</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold">
                {item.name}
              </h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <p className="font-sans text-sm text-[#B5B5B5] leading-relaxed font-light">
              {item.longDescription || item.description}
            </p>

            {/* Tasting Notes & Details */}
            {item.tastingNotes && item.tastingNotes.length > 0 && (
              <div className="glass-panel p-4 rounded-2xl border border-[#D9C3A5]/10">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C] block mb-2 font-semibold">
                  Tasting Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-xl bg-[#3B2416]/60 text-[#D9C3A5] text-xs font-serif border border-[#D9C3A5]/20"
                    >
                      ✨ {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Temperature Choice (For beverages) */}
            {['Coffee', 'Espresso', 'Cappuccino', 'Latte', 'Mocha'].includes(item.category) && (
              <div>
                <label className="text-xs uppercase font-sans tracking-widest text-[#C89B3C] block mb-3 font-semibold">
                  Serving Temperature
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Hot', 'Iced', 'Blended'] as const).map((temp) => (
                    <button
                      key={temp}
                      type="button"
                      onClick={() => setTemperature(temp)}
                      className={`py-3 rounded-xl text-xs font-sans tracking-wider border transition-all ${
                        temperature === temp
                          ? 'bg-[#C89B3C] text-black font-semibold border-[#C89B3C]'
                          : 'glass-panel text-white border-white/10 hover:border-[#C89B3C]/40'
                      }`}
                    >
                      {temp === 'Hot' ? '🔥 Hot' : temp === 'Iced' ? '🧊 Iced' : '🌀 Blended'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Choice */}
            <div>
              <label className="text-xs uppercase font-sans tracking-widest text-[#C89B3C] block mb-3 font-semibold">
                Select Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Standard', extra: 'Included' },
                  { name: 'Double', extra: '+$1.50' },
                  { name: 'Grand / Large', extra: '+$2.00' }
                ].map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSize(s.name as any)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                      size === s.name
                        ? 'bg-[#3B2416] text-white border-[#C89B3C] shadow-lg'
                        : 'glass-panel text-white border-white/10 hover:border-[#C89B3C]/40'
                    }`}
                  >
                    <span className="text-xs font-semibold">{s.name}</span>
                    <span className="text-[10px] text-[#C89B3C] mt-1">{s.extra}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Option (For coffee) */}
            {['Coffee', 'Espresso', 'Cappuccino', 'Latte', 'Mocha'].includes(item.category) && (
              <div>
                <label className="text-xs uppercase font-sans tracking-widest text-[#C89B3C] block mb-3 font-semibold">
                  Artisanal Milk Selection
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Oat Milk',
                    'Almond Milk',
                    'Pistachio Milk',
                    'Whole Milk',
                    'None'
                  ].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMilk(m as any)}
                      className={`p-2.5 rounded-xl text-xs font-sans border text-center transition-all ${
                        milk === m
                          ? 'bg-[#C89B3C] text-black font-semibold border-[#C89B3C]'
                          : 'glass-panel text-[#B5B5B5] border-white/10 hover:border-[#C89B3C]/40'
                      }`}
                    >
                      {m} {m !== 'Whole Milk' && m !== 'None' ? '(+$0.75)' : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Gourmet Syrup Option */}
            {['Coffee', 'Espresso', 'Cappuccino', 'Latte', 'Mocha'].includes(item.category) && (
              <div>
                <label className="text-xs uppercase font-sans tracking-widest text-[#C89B3C] block mb-3 font-semibold">
                  Infused Syrup (+ $0.75)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'None',
                    'Vanilla Bean',
                    'Salted Caramel',
                    'Hazelnut',
                    'Honey Lavender'
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSyrup(s as any)}
                      className={`p-2.5 rounded-xl text-xs font-sans border text-center transition-all ${
                        syrup === s
                          ? 'bg-[#C89B3C] text-black font-semibold border-[#C89B3C]'
                          : 'glass-panel text-[#B5B5B5] border-white/10 hover:border-[#C89B3C]/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="p-6 bg-[#121212] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center gap-3 glass-panel px-4 py-2 rounded-2xl border border-white/10">
              <span className="text-xs uppercase text-[#B5B5B5] tracking-wider">Qty:</span>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white hover:text-[#C89B3C]"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-serif text-lg text-white font-bold w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center text-white hover:text-[#C89B3C]"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="w-full sm:w-auto flex-1 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#C89B3C]/20 transition-all"
            >
              <Coffee className="w-4 h-4 text-black" />
              <span>Add to Order — ${totalPrice.toFixed(2)}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
