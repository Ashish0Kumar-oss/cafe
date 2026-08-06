import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Mail, CheckCircle2, Ticket } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 sm:p-14 rounded-3xl border border-[#C89B3C]/30 text-center relative shadow-2xl overflow-hidden">
          {/* Subtle background texture effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C89B3C]/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>EXCLUSIVE CONNOISSEUR SOCIETY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Join Our <span className="gold-gradient-text italic font-cormorant">Coffee Club</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#B5B5B5] max-w-lg mx-auto font-light leading-relaxed mb-8">
            Subscribe for private reserve bean drop invitations, barista tasting masterclasses, and receive an instant <strong className="text-[#D9C3A5]">15% off voucher</strong> for your first online order.
          </p>

          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel p-6 rounded-2xl border border-[#C89B3C] max-w-md mx-auto flex flex-col items-center"
              >
                <CheckCircle2 className="w-10 h-10 text-[#C89B3C] mb-2" />
                <h4 className="font-serif text-xl text-white font-semibold">Welcome to the Club!</h4>
                <p className="text-xs text-[#B5B5B5] mt-1 mb-4">Use your secret code at checkout for 15% off:</p>
                <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-xl border border-[#C89B3C]/50 font-mono text-sm text-[#C89B3C] font-bold">
                  <Ticket className="w-4 h-4" />
                  <span>AURA15OFF</span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <div className="relative w-full">
                  <Mail className="w-4 h-4 text-[#D9C3A5]/60 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 pl-11 pr-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#C89B3C] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-wider whitespace-nowrap hover:scale-105 transition-all shadow-lg"
                >
                  Unlock 15% Off
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
