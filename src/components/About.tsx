import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Coffee, Sparkles, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Coffee, value: '15+', label: 'Years Experience', desc: 'Crafting fine coffee since 2011' },
    { icon: Users, value: '50K+', label: 'Happy Customers', desc: 'Connoisseurs & daily patrons' },
    { icon: Sparkles, value: '120+', label: 'Premium Recipes', desc: 'Handcrafted drinks & patisserie' },
    { icon: Award, value: '12', label: 'Global Awards', desc: 'World roasting & barista honors' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#3B2416]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 gold-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
                alt="Inside Maison Du Café Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[560px] object-cover rounded-2xl filter contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />

              {/* Floating Badge overlay */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-[#C89B3C]/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/20 border border-[#C89B3C] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#C89B3C]" />
                </div>
                <div>
                  <p className="font-serif text-white text-base font-semibold">100% Micro-Lot Direct Trade</p>
                  <p className="font-sans text-xs text-[#B5B5B5]">Sourced directly from high-altitude shade farms in Ethiopia, Colombia & Panama.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
              <span className="w-8 h-[1px] bg-[#C89B3C]" />
              <span>OUR HERITAGE & CRAFT</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              Where Roasting Meets <br />
              <span className="gold-gradient-text italic font-cormorant font-normal">
                Uncompromising Luxury.
              </span>
            </h2>

            <p className="font-sans text-base text-[#B5B5B5] leading-relaxed mb-6 font-light">
              Founded in 2011 by World Barista Champion Matteo Bellini, <strong className="text-[#D9C3A5]">Maison Du Café</strong> was born from a singular obsession: to elevate coffee into an unforgettable culinary art form. 
            </p>

            <p className="font-sans text-sm text-[#B5B5B5] leading-relaxed mb-10 font-light">
              We roast exclusively in small batches using vintage German cast-iron drums. Every bean is cupped, profiled, and paired with handcrafted French pastries baked fresh every morning by Executive Pastry Chef Camille Laurent.
            </p>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card p-5 rounded-2xl border border-[#D9C3A5]/10 hover:border-[#C89B3C]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-2xl sm:text-3xl text-[#C89B3C] font-bold">
                        {stat.value}
                      </span>
                      <Icon className="w-5 h-5 text-[#D9C3A5]/60" />
                    </div>
                    <p className="font-serif text-sm text-white font-medium mb-1">{stat.label}</p>
                    <p className="font-sans text-[11px] text-[#B5B5B5] font-light">{stat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
