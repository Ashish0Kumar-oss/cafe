import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/coffeeData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentReview = REVIEWS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-[#3B2416]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>WORDS FROM PATRONS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Loved By Coffee <span className="gold-gradient-text italic font-cormorant">Connoisseurs</span>
          </h2>
        </div>

        {/* Carousel Window */}
        <div className="relative glass-card p-8 sm:p-12 rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
          <Quote className="w-12 h-12 text-[#C89B3C]/30 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C89B3C] text-[#C89B3C]" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-serif text-lg sm:text-2xl text-white italic leading-relaxed max-w-3xl mb-8 font-light">
                "{currentReview.comment}"
              </p>

              {/* Customer Avatar & Bio */}
              <div className="flex items-center gap-4">
                <img
                  src={currentReview.avatar}
                  alt={currentReview.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C89B3C] shadow-lg"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base text-white font-semibold">{currentReview.name}</h4>
                  <p className="font-sans text-xs text-[#B5B5B5]">{currentReview.location}</p>
                  <span className="text-[10px] text-[#C89B3C] font-sans">Fav brew: {currentReview.favoriteDrink}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#C89B3C]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to review slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)}
                aria-label="Next review"
                className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
