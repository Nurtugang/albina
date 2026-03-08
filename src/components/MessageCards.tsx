import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  front: string;
  back: string;
  backEmoji: string;
  color: string;
  backColor: string;
  imageUrl?: string;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    front: '💌',
    back: 'Я всегда хочу ощущать твое тепло ☀️',
    backEmoji: '🌞',
    color: 'from-pink-300 to-rose-400',
    backColor: 'from-yellow-200 to-orange-200',
    imageUrl: 'src\\assets\\1.jpeg',
  },
  {
    id: 2,
    front: '🐱',
    back: 'Всегда хочу быть с тобой 🐾',
    backEmoji: '💜',
    color: 'from-purple-300 to-violet-400',
    backColor: 'from-purple-100 to-pink-100',
    imageUrl: 'src\\assets\\2.jpeg',
  },
  {
    id: 3,
    front: '🐰',
    back: 'И всегда буду гордится и дорожить тобой 🌍',
    backEmoji: '🥕',
    color: 'from-blue-200 to-cyan-300',
    backColor: 'from-green-100 to-teal-100',
    imageUrl: 'src\\assets\\3.jpeg',
  }
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
      style={{ height: '260px' }}
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
          className={`card-back bg-gradient-to-br ${message.backColor} flex flex-col items-center justify-center px-4 py-2 cursor-pointer select-none`}
        >
          {message.imageUrl && (
            <img 
              src={message.imageUrl} 
              alt="memory" 
              className="w-40 h-40 object-cover rounded-xl mb-3 shadow-sm border-2 border-white/50"
            />
          )}
          <p className="text-purple-800 font-bold text-center text-xs leading-tight px-2">
            {message.back}
          </p>
          <p className="text-lg mt-1">{message.backEmoji}</p>
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
         💌
        <p className="text-sm font-normal text-pink-400 mt-0.5">каждый картанын устыне бас</p>
      </motion.h2>
      {MESSAGES.map((msg, i) => (
        <MessageCard key={msg.id} message={msg} index={i} />
      ))}
    </div>
  );
};

export default MessageCards;