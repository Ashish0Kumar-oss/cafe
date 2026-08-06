import React from 'react';
import { motion } from 'motion/react';
import { Bean, UtensilsCrossed, Award, Armchair, Zap, Wifi, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Bean,
      title: '100% Organic Beans',
      desc: 'Shade-grown, hand-harvested single-origin micro-lots from Ethiopia, Panama, and Colombia.'
    },
    {
      icon: UtensilsCrossed,
      title: 'Fresh Artisanal Pastries',
      desc: 'French butter laminated pastries baked fresh twice daily by Le Cordon Bleu trained chefs.'
    },
    {
      icon: Award,
      title: 'World-Class Baristas',
      desc: 'Certified Q-Graders and international barista championship medalists crafting your cup.'
    },
    {
      icon: Armchair,
      title: 'Cozy Luxury Atmosphere',
      desc: 'Custom velvet seating, low warm lighting, and acoustic dampening for deep relaxation.'
    },
    {
      icon: Zap,
      title: 'Fast Mobile Pickup',
      desc: 'Order ahead via app or site and collect your freshly extracted beverage in seconds.'
    },
    {
      icon: Wifi,
      title: 'Ultra Fiber WiFi',
      desc: 'Gigabit wireless speeds paired with quiet work pods for remote executives and creators.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>UNCOMPROMISING STANDARDS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Why Discerning Guests Choose <span className="gold-gradient-text italic font-cormorant">Maison Du Café</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-[#D9C3A5]/10 hover:border-[#C89B3C]/40 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#3B2416]/50 border border-[#C89B3C]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#C89B3C] transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#C89B3C]" />
                </div>

                <h3 className="font-serif text-xl text-white font-semibold mb-3 group-hover:text-[#D9C3A5] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
