import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  color: string;
  x: number;
  rotate: number;
  duration: number;
  shape: 'circle' | 'rect';
}

const CONFETTI_COLORS = ['#FF6B9D', '#C77DFF', '#FFD93D', '#6BCB77', '#4D96FF', '#FFB3C6'];

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Generate confetti
    const pieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      x: (Math.random() - 0.5) * 240,
      rotate: Math.random() * 720 - 360,
      duration: 0.8 + Math.random() * 0.8,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }));
    setConfetti(pieces);

    setTimeout(() => setShowMessage(true), 600);
    setTimeout(() => setConfetti([]), 2200);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Gift Box */}
      <div className="relative flex flex-col items-center">
        {/* Confetti explosion */}
        <AnimatePresence>
          {confetti.map(piece => (
            <motion.div
              key={piece.id}
              className="absolute pointer-events-none"
              style={{
                width: piece.shape === 'circle' ? 10 : 8,
                height: piece.shape === 'circle' ? 10 : 12,
                borderRadius: piece.shape === 'circle' ? '50%' : '2px',
                background: piece.color,
                top: '50%',
                left: '50%',
                zIndex: 50,
              }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
              animate={{
                x: piece.x,
                y: [-20, -60, 80],
                rotate: piece.rotate,
                opacity: [1, 1, 0],
              }}
              transition={{ duration: piece.duration, ease: 'easeOut' }}
              exit={{ opacity: 0 }}
            />
          ))}
        </AnimatePresence>

        {/* Box lid */}
        <motion.div
          className="w-32 h-10 bg-gradient-to-b from-pink-500 to-pink-600 rounded-t-lg relative z-10 cursor-pointer shadow-lg"
          animate={isOpen ? { y: -50, rotate: -20, opacity: 0 } : { y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={handleOpen}
        >
          {/* Bow */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            {/* Left bow loop */}
            <div className="absolute -left-6 -top-1 w-5 h-5 bg-yellow-300 rounded-full border-2 border-yellow-400 -rotate-45 origin-right" />
            {/* Right bow loop */}
            <div className="absolute left-1 -top-1 w-5 h-5 bg-yellow-300 rounded-full border-2 border-yellow-400 rotate-45 origin-left" />
            {/* Center */}
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-500 relative z-10" />
          </div>
          {/* Ribbon */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-yellow-300 opacity-80" />
        </motion.div>

        {/* Box body */}
        <motion.div
          className="w-36 h-28 bg-gradient-to-b from-pink-400 to-pink-500 rounded-b-lg relative overflow-hidden shadow-xl cursor-pointer"
          whileTap={!isOpen ? { scale: 0.95 } : {}}
          onClick={handleOpen}
        >
          {/* Ribbon on body */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-5 bg-yellow-300 opacity-80" />
          {/* Box shine */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-white/20 rounded-b-sm" />
          {/* Polka dots */}
          {[[15, 20], [75, 30], [30, 60], [65, 65], [50, 45]].map(([x, y], i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white/20"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}

          {/* Gift emerging when opened */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-4xl"
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1.3, y: -10 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
              >
                🎁
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Tap prompt */}
      <AnimatePresence>
        {!isOpen && (
          <motion.p
            className="text-sm text-pink-500 font-medium animate-bounce-soft"
            exit={{ opacity: 0, y: -10 }}
          >
            Tap to open your gift! 🎀
          </motion.p>
        )}
      </AnimatePresence>

      {/* Message after opening */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="text-center bg-white/80 backdrop-blur-sm rounded-3xl px-6 py-4 shadow-lg max-w-xs"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <p className="text-2xl mb-2">🎁✨</p>
            <p className="text-purple-700 font-bold text-lg leading-snug">
              My heart is yours!
            </p>
            <p className="text-pink-500 text-sm mt-1">
              Every day with you is a gift 💝
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBox;
