import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, select, textarea, .cursor-pointer');
        if (interactive) {
          setIsHovered(true);
          const customText = interactive.getAttribute('data-cursor-text');
          setHoverText(customText || '');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Mobile check
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#C89B3C] rounded-full pointer-events-none z-[999] mix-blend-difference"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: isHovered ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#C89B3C]/70 pointer-events-none z-[998] flex items-center justify-center font-sans text-[9px] uppercase font-bold text-[#C89B3C] tracking-widest bg-[#C89B3C]/10 backdrop-blur-[2px]"
        animate={{
          x: pos.x - (isHovered ? 24 : 18),
          y: pos.y - (isHovered ? 24 : 18),
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          borderColor: isHovered ? '#E2B45C' : 'rgba(200, 155, 60, 0.4)'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {hoverText}
      </motion.div>
    </>
  );
};
