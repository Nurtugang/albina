import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PasswordScreen from './components/PasswordScreen';
import MainGreeting from './components/MainGreeting';

function App() {    
  const [unlocked, setUnlocked] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
    setTimeout(() => setShowMain(true), 800);
  };

  // Prevent body scroll on password screen; allow after unlock
  useEffect(() => {
    if (!showMain) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showMain]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!unlocked && (
          <PasswordScreen key="password" onUnlock={handleUnlock} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <MainGreeting />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unlock transition overlay */}
      <AnimatePresence>
        {unlocked && !showMain && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FFE4E8, #F0D8FF, #D4F0FF)' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
            >
              <div className="text-6xl mb-4 animate-heartbeat">💖</div>
              <p className="text-pink-500 font-bold text-xl">Welcome, my love!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
