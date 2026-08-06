import React, { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  isPlaying: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (isPlaying) {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          // Main Gain
          const masterGain = ctx.createGain();
          masterGain.gain.value = 0.08; // subtle volume
          masterGain.connect(ctx.destination);
          gainNodeRef.current = masterGain;

          // Warm coffee shop ambient chord generator (Fmaj7 lowpass)
          const frequencies = [174.61, 220.00, 261.63, 329.63]; // F3, A3, C4, E4
          frequencies.forEach((freq) => {
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            // Filter for warm lofi sound
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(450, ctx.currentTime);

            osc.connect(filter);
            filter.connect(masterGain);
            osc.start();
          });
        }
      } else if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    } else {
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
    }
  }, [isPlaying]);

  return null;
};
