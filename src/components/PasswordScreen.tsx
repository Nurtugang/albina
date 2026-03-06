import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PasswordScreenProps {
  onUnlock: () => void;
}

// Cute kawaii cat SVG
const KawaiiCat = ({ isShaking }: { isShaking: boolean }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-40 h-40 drop-shadow-lg ${isShaking ? 'animate-shake' : 'animate-float-sway'}`}
    style={{ animationDuration: isShaking ? '0.6s' : '3s' }}
  >
    {/* Ears */}
    <path d="M40 85 L55 40 L80 70Z" fill="#FFB3C6" />
    <path d="M160 85 L145 40 L120 70Z" fill="#FFB3C6" />
    <path d="M50 80 L60 50 L75 68Z" fill="#FF8FAB" />
    <path d="M150 80 L140 50 L125 68Z" fill="#FF8FAB" />

    {/* Head */}
    <ellipse cx="100" cy="110" rx="65" ry="60" fill="#FFF0F5" />
    <ellipse cx="100" cy="110" rx="63" ry="58" fill="#FFF8FB" />

    {/* Cheek blush */}
    <ellipse cx="68" cy="120" rx="14" ry="9" fill="#FFB3C6" opacity="0.6" />
    <ellipse cx="132" cy="120" rx="14" ry="9" fill="#FFB3C6" opacity="0.6" />

    {/* Eyes - sparkly */}
    <ellipse cx="82" cy="100" rx="12" ry="13" fill="#5B2C6F" />
    <ellipse cx="118" cy="100" rx="12" ry="13" fill="#5B2C6F" />
    <circle cx="82" cy="100" r="10" fill="#3D1A6B" />
    <circle cx="118" cy="100" r="10" fill="#3D1A6B" />
    <circle cx="86" cy="96" r="3.5" fill="white" />
    <circle cx="122" cy="96" r="3.5" fill="white" />
    <circle cx="80" cy="104" r="1.5" fill="white" opacity="0.6" />
    <circle cx="116" cy="104" r="1.5" fill="white" opacity="0.6" />

    {/* Nose */}
    <path d="M96 115 L100 119 L104 115 Q100 112 96 115Z" fill="#FF6B9D" />

    {/* Mouth */}
    <path d="M100 119 Q94 126 88 123" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M100 119 Q106 126 112 123" stroke="#FF6B9D" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Whiskers */}
    <line x1="62" y1="115" x2="88" y2="118" stroke="#C77DFF" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="60" y1="122" x2="87" y2="121" stroke="#C77DFF" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="113" y1="118" x2="138" y2="115" stroke="#C77DFF" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="113" y1="121" x2="140" y2="122" stroke="#C77DFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Little collar with bow */}
    <rect x="72" y="158" width="56" height="12" rx="6" fill="#FF6B9D" />
    <ellipse cx="100" cy="158" rx="8" ry="5" fill="#FF8FAB" />
    <path d="M92 158 L100 155 L108 158 L100 161Z" fill="white" />
  </svg>
);

// Tiny floating star
const Star = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <div
    className="absolute text-yellow-300 animate-star-twinkle pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animationDuration: `${1.5 + delay}s`,
      animationDelay: `${delay * 0.4}s`,
      fontSize: '18px',
    }}
  >
    ✦
  </div>
);

const PASSWORD = '0308';

const PasswordScreen: React.FC<PasswordScreenProps> = ({ onUnlock }) => {
  const [input, setInput] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  const stars = [
    { x: 8, y: 12 }, { x: 85, y: 8 }, { x: 92, y: 70 },
    { x: 5, y: 75 }, { x: 50, y: 5 }, { x: 20, y: 88 },
    { x: 75, y: 85 }, { x: 30, y: 20 },
  ];

  const handleDigit = (digit: string) => {
    if (isSuccess) return;
    if (input.length >= 4) return;
    const newInput = input + digit;
    setInput(newInput);
    setMessage('');

    if (newInput.length === 4) {
      setTimeout(() => {
        if (newInput === PASSWORD) {
          setIsSuccess(true);
          setMessage('💖 Welcome, my love! 💖');
          setTimeout(() => onUnlock(), 1400);
        } else {
          setIsShaking(true);
          setMessage('Meow~ wrong code! Try again 🐾');
          setTimeout(() => {
            setIsShaking(false);
            setInput('');
          }, 700);
        }
      }, 200);
    }
  };

  const handleDelete = () => {
    if (isSuccess) return;
    setInput(prev => prev.slice(0, -1));
    setMessage('');
  };

  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFE4E8 0%, #F0D8FF 50%, #D4F0FF 100%)',
      }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <Star key={i} x={s.x} y={s.y} delay={i * 0.2} />
      ))}

      {/* Floating emoji decorations */}
      {['🌸', '💕', '🌺', '✨', '🌷'].map((emoji, i) => (
        <div
          key={emoji}
          className="absolute pointer-events-none text-2xl"
          style={{
            left: `${[5, 85, 10, 90, 50][i]}%`,
            top: `${[25, 20, 65, 60, 88][i]}%`,
            animation: `floatSway ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            opacity: 0.7,
          }}
        >
          {emoji}
        </div>
      ))}

      <div className="w-full max-w-sm mx-auto px-6 flex flex-col items-center gap-5">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-pink-400 uppercase mb-1">
            🔒 Secret Garden
          </p>
          <h1 className="text-3xl font-bold text-purple-800 leading-tight">
            Enter the<br />Magic Code
          </h1>
        </motion.div>

        {/* Cat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <KawaiiCat isShaking={isShaking} />
        </motion.div>

        {/* PIN dots */}
        <motion.div
          className="flex gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className="w-5 h-5 rounded-full border-2 border-pink-400 flex items-center justify-center"
              style={{ background: i < input.length ? '#FF6B9D' : 'transparent' }}
            >
              {i < input.length && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-3 h-3 rounded-full bg-white"
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Message */}
        <AnimatePresence>
          {message && (
            <motion.p
              key={message}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-sm font-semibold text-center ${
                isSuccess ? 'text-pink-500' : 'text-purple-500'
              }`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Numpad */}
        <motion.div
          className="grid grid-cols-3 gap-3 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {digits.map((digit, i) => {
            if (digit === '') return <div key={i} />;
            const isDelete = digit === '⌫';
            return (
              <button
                key={i}
                onPointerDown={() => isDelete ? handleDelete() : handleDigit(digit)}
                className={`
                  touch-target h-14 rounded-2xl text-xl font-bold
                  flex items-center justify-center
                  active:scale-95 transition-all duration-100
                  ${isDelete
                    ? 'bg-pink-100 text-pink-400 active:bg-pink-200'
                    : 'bg-white/80 text-purple-700 shadow-md active:bg-pink-100 hover:bg-white'
                  }
                  shadow-[0_2px_8px_rgba(199,125,255,0.2)]
                `}
              >
                {digit}
              </button>
            );
          })}
        </motion.div>

        {/* Hint */}
        <motion.button
          className="text-xs text-purple-400 underline underline-offset-2 touch-target"
          onTap={() => setShowHint(v => !v)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Need a hint? 🐱
        </motion.button>

        <AnimatePresence>
          {showHint && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-pink-400 text-center bg-pink-50 rounded-xl px-4 py-2"
            >
              It's the date of this very special day 🌸<br />
              <span className="opacity-50">(hint: 0 _ 0 _)</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PasswordScreen;
