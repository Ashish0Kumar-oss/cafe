import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, Ticket, CheckCircle, Clock } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // 0.15 for 15%
  const [promoError, setPromoError] = useState('');
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [pickupTime, setPickupTime] = useState('15-20 Mins');

  const subtotal = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const discountAmount = subtotal * appliedDiscount;
  const tax = (subtotal - discountAmount) * 0.08;
  const grandTotal = subtotal - discountAmount + tax;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AURA15OFF' || promoCode.trim().toUpperCase() === 'COFFEE15') {
      setAppliedDiscount(0.15);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "AURA15OFF"');
    }
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  const resetState = () => {
    setIsCheckoutStep(false);
    setIsOrderPlaced(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetState}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 max-w-full flex pl-10 z-10"
          >
            <div className="w-screen max-w-md bg-[#121212] border-l border-[#C89B3C]/30 shadow-2xl flex flex-col justify-between">
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-[#C89B3C]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white font-semibold">Your Order</h3>
                    <p className="font-sans text-xs text-[#B5B5B5]">
                      {cart.reduce((a, b) => a + b.quantity, 0)} items in bag
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetState}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {isOrderPlaced ? (
                  /* Order Completed View */
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-serif text-2xl text-white">Order Sent to Barista!</h3>
                    <p className="font-sans text-xs text-[#B5B5B5] max-w-xs mx-auto">
                      Your order is being extracted and prepared at our roaster bar.
                    </p>
                    <div className="glass-panel p-4 rounded-2xl border border-[#C89B3C]/40 text-left space-y-2 font-sans text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#B5B5B5]">Order Ticket</span>
                        <span className="font-mono text-[#C89B3C] font-bold">#MDC-{Math.floor(1000 + Math.random() * 9000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#B5B5B5]">Est. Pickup Time</span>
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {pickupTime}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={resetState}
                      className="w-full py-3 rounded-xl bg-[#C89B3C] text-black text-xs uppercase font-semibold tracking-wider"
                    >
                      Back to Café
                    </button>
                  </div>
                ) : cart.length === 0 ? (
                  <div className="text-center py-16 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-[#D9C3A5]/30 mx-auto" />
                    <p className="font-serif text-lg text-white">Your bag is empty</p>
                    <p className="font-sans text-xs text-[#B5B5B5]">Add some artisanal coffee or fresh patisserie!</p>
                  </div>
                ) : (
                  cart.map((cartItem) => (
                    <div
                      key={cartItem.cartId}
                      className="glass-panel p-4 rounded-2xl border border-white/10 flex gap-4 items-center"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-white font-semibold truncate">
                          {cartItem.item.name}
                        </h4>
                        <p className="font-sans text-[11px] text-[#C89B3C]">
                          {cartItem.options.size} • {cartItem.options.temperature}
                        </p>
                        {cartItem.options.milk !== 'None' && (
                          <p className="font-sans text-[10px] text-[#B5B5B5]">Milk: {cartItem.options.milk}</p>
                        )}
                        <p className="font-serif text-sm text-white font-bold mt-1">
                          ${cartItem.totalPrice.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2 bg-[#1A1A1A] px-2 py-1 rounded-lg border border-white/10">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartId, -1)}
                            className="text-[#B5B5B5] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-semibold text-white">{cartItem.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartId, 1)}
                            className="text-[#B5B5B5] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(cartItem.cartId)}
                          className="text-red-400 hover:text-red-300 text-[10px] flex items-center gap-1 mt-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && !isOrderPlaced && (
                <div className="p-6 bg-[#1A1A1A] border-t border-white/10 space-y-4">
                  {/* Promo Input */}
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Ticket className="w-3.5 h-3.5 text-[#C89B3C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Promo code (e.g. AURA15OFF)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full bg-[#121212] text-xs text-white pl-9 pr-3 py-2 rounded-xl border border-white/10 uppercase font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#3B2416] text-[#D9C3A5] border border-[#C89B3C]/40 rounded-xl text-xs font-semibold"
                    >
                      Apply
                    </button>
                  </form>
                  {promoError && <p className="text-[10px] text-red-400">{promoError}</p>}
                  {appliedDiscount > 0 && (
                    <p className="text-[10px] text-emerald-400">✓ 15% Coffee Club Discount Applied!</p>
                  )}

                  {/* Calculations */}
                  <div className="space-y-1.5 font-sans text-xs border-t border-white/5 pt-3">
                    <div className="flex justify-between text-[#B5B5B5]">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount (15%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#B5B5B5]">
                      <span>Estimated Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-serif text-white font-bold pt-2 border-t border-white/10">
                      <span>Total Amount</span>
                      <span className="text-[#C89B3C]">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-xl hover:brightness-110"
                  >
                    <span>Place Express Pickup Order</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
