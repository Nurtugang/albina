import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  front: string;
  back: string;
  backEmoji: string;
  color: string;
  backColor: string;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    front: '💌',
    back: 'You are the sunshine of my every single day ☀️',
    backEmoji: '🌞',
    color: 'from-pink-300 to-rose-400',
    backColor: 'from-yellow-200 to-orange-200',
  },
  {
    id: 2,
    front: '🐱',
    back: 'You make my heart purr with happiness 🐾',
    backEmoji: '💜',
    color: 'from-purple-300 to-violet-400',
    backColor: 'from-purple-100 to-pink-100',
  },
  {
    id: 3,
    front: '🐰',
    back: 'I love you more than all the bunnies in the world 🌍',
    backEmoji: '🥕',
    color: 'from-blue-200 to-cyan-300',
    backColor: 'from-green-100 to-teal-100',
  },
  {
    id: 4,
    front: '🌸',
    back: 'Happy Women\'s Day, my strongest, most beautiful person 👑',
    backEmoji: '✨',
    color: 'from-rose-300 to-pink-400',
    backColor: 'from-pink-100 to-rose-100',
  },
  {
    id: 5,
    front: '⭐',
    back: 'You are my favorite adventure and my safest place 🏡',
    backEmoji: '🌙',
    color: 'from-amber-200 to-yellow-300',
    backColor: 'from-indigo-100 to-purple-100',
  },
];

interface CardProps {
  message: Message;
  index: number;
}

const MessageCard: React.FC<CardProps> = ({ message, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="card-container w-full"
      style={{ height: '140px' }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div
        className={`card-inner ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className={`card-front bg-gradient-to-br ${message.color} flex flex-col items-center justify-center cursor-pointer select-none`}
        >
          <motion.div
            className="text-5xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
          >
            {message.front}
          </motion.div>
          <p className="text-white/90 text-sm font-semibold mt-2 tracking-wide">
            Tap to reveal 💕
          </p>
        </div>

        {/* Back */}
        <div
          className={`card-back bg-gradient-to-br ${message.backColor} flex flex-col items-center justify-center px-5 cursor-pointer select-none`}
        >
          <p className="text-purple-800 font-bold text-center text-base leading-relaxed">
            {message.back}
          </p>
          <p className="text-3xl mt-3">{message.backEmoji}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MessageCards: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <motion.h2
        className="text-center text-xl font-bold text-purple-800 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Little love notes just for you 💌
        <p className="text-sm font-normal text-pink-400 mt-0.5">tap each card to reveal</p>
      </motion.h2>
      {MESSAGES.map((msg, i) => (
        <MessageCard key={msg.id} message={msg} index={i} />
      ))}
    </div>
  );
};

export default MessageCards;
