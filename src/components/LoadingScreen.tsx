import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee } from 'lucide-react';

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onFinish) onFinish();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#0F0F0F] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Ambient light glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#C89B3C]/10 blur-3xl pointer-events-none animate-pulse" />

          <div className="relative flex flex-col items-center max-w-sm w-full text-center">
            {/* Animated Coffee Cup Icon & Steam */}
            <div className="relative mb-8">
              {/* Steam waves */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-80">
                <span className="w-1 h-6 bg-gradient-to-t from-[#D9C3A5] to-transparent rounded-full animate-steam" />
                <span className="w-1 h-8 bg-gradient-to-t from-[#C89B3C] to-transparent rounded-full animate-steam-delayed" />
                <span className="w-1 h-5 bg-gradient-to-t from-[#D9C3A5] to-transparent rounded-full animate-steam" />
              </div>

              {/* Cup frame */}
              <div className="w-20 h-20 rounded-2xl glass-panel border border-[#C89B3C]/30 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Fill liquid background */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3B2416] via-[#C89B3C]/40 to-[#D9C3A5]/60 transition-all duration-300 ease-out"
                  style={{ height: `${progress}%` }}
                />
                <Coffee className="w-10 h-10 text-[#C89B3C] relative z-10 drop-shadow-md" />
              </div>
            </div>

            {/* Brand Title */}
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-white mb-2">
              MAISON DU CAFÉ
            </h1>
            <p className="font-cormorant italic text-sm text-[#D9C3A5] tracking-widest uppercase mb-8">
              Artisanal Coffee & Roastery
            </p>

            {/* Progress bar container */}
            <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden border border-[#D9C3A5]/10 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage indicator */}
            <div className="flex items-center justify-between w-full mt-3 text-xs text-[#B5B5B5] font-sans">
              <span>Warming the espresso...</span>
              <span className="font-mono text-[#C89B3C]">{Math.min(100, progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
