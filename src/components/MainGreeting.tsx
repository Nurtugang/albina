import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { KawaiiCatMain, KawaiiiBunny, PawPrints } from './CatBunnyArt';
import MessageCards from './MessageCards';
import GiftBox from './GiftBox';
import FloatingElements from './FloatingElements';

const CONFETTI_INITIAL = ['🌸', '💕', '🎀', '✨', '💝', '🌷', '⭐', '🐾'];

const MainGreeting: React.FC = () => {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFE4F0 0%, #F2D8FF 35%, #D8EEFF 70%, #FFE8D8 100%)',
      }}
    >
      {/* Floating background elements */}
      <FloatingElements />

      {/* Content */}
      <div
        ref={topRef}
        className="relative z-10 w-full max-w-sm mx-auto px-5 pt-8 pb-16 flex flex-col items-center gap-8"
      >

        {/* Top decoration */}
        <div className="flex gap-2 text-lg">
          {['🌸', '💕', '🌸', '💕', '🌸'].map((e, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2.5s' }}
              className="animate-float-sway"
            >
              {e}
            </span>
          ))}
        </div>

        {/* Main header card */}
        <motion.div
          className="w-full bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        >
          {/* Colorful top stripe */}
          <div className="h-3 w-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400" />

          <div className="px-6 pt-5 pb-6 flex flex-col items-center gap-4">
            {/* Characters */}
            <div className="flex items-end justify-center gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              >
                <KawaiiCatMain />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.4 }}
              >
                <KawaiiiBunny />
              </motion.div>
            </div>

            {/* March 8 badge */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-4 py-1.5 text-sm font-bold shadow-md">
              <span>🌷</span>
              <span>С праздником зая!</span>
              <span>🌷</span>
            </div>

            {/* Main title */}
            <div className="text-center">
              <motion.h1
                className="text-3xl font-black leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #FF6B9D, #C77DFF, #4D96FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
              >
                С женским днем, зайчик! 💖
              </motion.h1>
              <p className="text-purple-600 text-base mt-2 font-medium">
                Менин жаним сени жаксы корем!
              </p>
            </div>

            <PawPrints />
          </div>
        </motion.div>

        {/* Special message card */}
        <motion.div
          className="w-full bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-5 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <div className="flex gap-3 items-start">
            <span className="text-3xl flex-shrink-0">📜</span>
            <div>
              <p className="text-purple-700 text-sm leading-relaxed">
                Зайчик я долго это делал, хотел вовремя подготовить, успел как смог!
                Поздравляю тебя с женским днем, дай бог чтобы ты всегда была счастлива и мы праздновали этот день всегда каждый год!
                Прости за сегодня еще раз, я не должен был шутить про вокзал, когда ты так скучаешь, я тоже скучаю о тебе(( 🌸
              </p>
              <p className="text-pink-500 text-sm font-semibold mt-2">
                — я тя люблю, моя красавица! 💕
              </p>
            </div>
          </div>
        </motion.div>

        {/* Message cards (tap to reveal) */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MessageCards />
        </motion.div>

       

        {/* Cat row decoration */}
        <motion.div
          className="flex justify-center gap-1 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {['🐱', '🐰', '🌸', '🐰', '🐱'].map((e, i) => (
            <span
              key={i}
              className="animate-bounce-soft"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: `${1.8 + i * 0.15}s` }}
            >
              {e}
            </span>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-pink-400 text-sm font-medium animate-heartbeat">
            Сделано с 💗
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MainGreeting;
