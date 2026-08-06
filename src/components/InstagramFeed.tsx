import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Heart, MessageCircle, X } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const posts = [
    {
      id: 'ig1',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
      likes: '1,420',
      comments: '84'
    },
    {
      id: 'ig2',
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
      likes: '2,190',
      comments: '112'
    },
    {
      id: 'ig3',
      img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
      likes: '3,450',
      comments: '204'
    },
    {
      id: 'ig4',
      img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80',
      likes: '1,890',
      comments: '95'
    }
  ];

  return (
    <section className="py-20 bg-[#0F0F0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B2416] via-[#C89B3C] to-[#E2B45C] p-0.5">
              <div className="w-full h-full bg-[#0F0F0F] rounded-[10px] flex items-center justify-center text-[#C89B3C]">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white font-semibold">@MaisonDuCafe</h3>
              <p className="font-sans text-xs text-[#B5B5B5]">Follow our daily roastery ritual on Instagram</p>
            </div>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full border border-[#C89B3C]/50 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Follow Us
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActivePhoto(post.img)}
              className="relative rounded-2xl overflow-hidden h-64 glass-card group cursor-pointer border border-white/5"
            >
              <img
                src={post.img}
                alt="Instagram coffee feed"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                <span className="flex items-center gap-1.5 font-sans text-xs font-semibold">
                  <Heart className="w-4 h-4 text-[#C89B3C] fill-[#C89B3C]" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 font-sans text-xs font-semibold">
                  <MessageCircle className="w-4 h-4 text-white" />
                  {post.comments}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-xl w-full rounded-3xl overflow-hidden glass-card border border-[#C89B3C]/30"
            >
              <img src={activePhoto} alt="Instagram preview" referrerPolicy="no-referrer" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
