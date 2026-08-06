import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/coffeeData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 sm:py-32 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>JOURNAL & COFFEE CULTURE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            The Roaster’s <span className="gold-gradient-text italic font-cormorant">Journal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setSelectedArticle(post)}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-[#D9C3A5]/10 hover:border-[#C89B3C]/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#3B2416]/80 backdrop-blur-md text-[#D9C3A5] font-semibold text-[10px] uppercase font-sans tracking-widest px-3 py-1 rounded-full border border-[#D9C3A5]/20">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-[#B5B5B5] mb-3 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C89B3C]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C89B3C]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-semibold mb-3 group-hover:text-[#D9C3A5] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed font-light line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-sans text-[#C89B3C] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full glass-card rounded-3xl overflow-hidden border border-[#C89B3C]/30 my-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-[#C89B3C] text-black font-bold text-[10px] uppercase font-sans tracking-widest">
                    {selectedArticle.category}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-10 space-y-6 max-h-[50vh] overflow-y-auto font-sans text-sm text-[#B5B5B5] font-light leading-relaxed">
                <div className="flex items-center gap-4 text-xs text-[#D9C3A5]">
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <p className="font-serif text-lg text-white italic border-l-2 border-[#C89B3C] pl-4">
                  "{selectedArticle.excerpt}"
                </p>
                <p>{selectedArticle.content}</p>
                <p>
                  Every cup served at Maison Du Café represents an ecosystem of direct farm-to-cup relationships, precise thermal extraction profiling, and sensory dedication.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
