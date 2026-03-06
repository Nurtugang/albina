import React, { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  emoji: string;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const FLOAT_EMOJIS = ['💕', '🌸', '✨', '💝', '🌷', '⭐', '🎀', '💫', '🌺', '🐾', '💗', '🌼'];

const FloatingElements: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const generated: FloatingItem[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      emoji: FLOAT_EMOJIS[i % FLOAT_EMOJIS.length],
      x: Math.random() * 95 + 2,
      size: 14 + Math.random() * 14,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 10,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map(item => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            bottom: '-5%',
            fontSize: `${item.size}px`,
            animation: `floatUp ${item.duration}s linear ${item.delay}s infinite`,
            opacity: 0,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
