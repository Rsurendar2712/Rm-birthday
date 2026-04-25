import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 1. Added import
import confetti from 'canvas-confetti';
import './cssfile.css';
import { NotepadText } from 'lucide-react';

const CAKES = [
  { id: 1, name: 'Chocolate Dream', icon: '🍫', rain: '🍫' },
  { id: 2, name: 'Strawberry Bliss', icon: '🧸', rain: '🧸' },
  { id: 3, name: 'Royal Velvet', icon: '🎁', rain: '🎁' },
  { id: 4, name: 'Floral Garden', icon: '🎂', rain: '🎂' }
];

const BirthdayPage = () => {
  // 2. Move navigate inside the component
  const navigate = useNavigate(); 
  const [selectedCake, setSelectedCake] = useState(null);

  // 3. Move Next function inside the component
  const handleNext = () => {
    navigate("/Final"); 
  };

  const handleSelect = (cake) => {
    setSelectedCake(cake);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff1a8c', '#ffd700', '#ffffff']
    });
  };

  return (
    <div className="birthday-container">
      {/* 1. The Rain Effect: Only appears when selectedCake is not null */}
      <AnimatePresence>
        {selectedCake && (
          <div className="rain-layer">
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={`${selectedCake.id}-${i}`}
                initial={{ y: -50, x: `${Math.random() * 100}vw`, opacity: 0 }}
                animate={{ y: '110vh', opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 1,
                }}
                className="falling-emoji"
              >
                {selectedCake.rain}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>

      <main className="content-wrapper">
        <header className="header-section">
          <div className="top-emojis">🎈 🎊 ✨ 🎁 🥳</div>
          <h2 className="title-text">🎂 Choose one emoji</h2>
          <p className="subtitle-text">Pick your favorite to begin the celebration</p>
        </header>

        {/* 2x2 Grid optimized for mobile and desktop screens */}
        <div className="cake-grid">
          {CAKES.map((cake) => (
            <motion.div
              key={cake.id}
              className={`cake-card ${selectedCake?.name === cake.name ? 'active' : ''}`}
              onClick={() => handleSelect(cake)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="cake-icon">{cake.icon}</div>
              <p className="cake-label">{cake.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.section 
          className="message-card"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="envelope">💌</span>
          <h3>A Birthday Message</h3>
          <p><em>Hi Sister!✨</em> On this special day, I want you to know how truly amazing you are special! 🎉</p>
        </motion.section>

        <div className="action-buttons">
          <button className="btn-next" onClick={handleNext}>
            Next ! 💫
          </button>
        </div>
      </main>

      <footer className="footer-note">
        Made with best for <strong>Meen</strong>
      </footer>
    </div>
  );
};

export default BirthdayPage;