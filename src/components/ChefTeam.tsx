import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, Instagram, Twitter, Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/coffeeData';

export const ChefTeam: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>MASTERS OF THE CRAFT</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Meet Our World-Class <span className="gold-gradient-text italic font-cormorant">Artisans</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden group border border-[#D9C3A5]/10 hover:border-[#C89B3C]/50 transition-all duration-500 shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />

                {/* Social icons on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button aria-label="Instagram profile" className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]">
                    <Instagram className="w-4 h-4" />
                  </button>
                  <button aria-label="Twitter profile" className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C] font-semibold block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-semibold">{member.name}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed font-light mb-4">
                  {member.bio}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#D9C3A5]">
                    <span className="font-semibold">Specialty:</span> {member.specialty}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.awards.map((award) => (
                      <span key={award} className="inline-flex items-center gap-1 text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] border border-[#C89B3C]/20">
                        <Award className="w-3 h-3 text-[#C89B3C]" />
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
