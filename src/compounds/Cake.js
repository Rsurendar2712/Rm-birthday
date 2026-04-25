import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./cssfile.css";

const Cake = () => {
  const navigate = useNavigate();

  const CustomCake = () => (
    <div className="cake-wrapper">
      <div className="cake-glow" />

      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <motion.path
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          d="M50,15 Q52,10 50,5 Q48,10 50,15"
          fill="#ff5e00"
        />

        <rect x="48.5" y="15" width="3" height="15" fill="#00d2ff" rx="1" />

        <path d="M20,55 L20,75 Q20,85 50,85 Q80,85 80,75 L80,55"
          fill="#d2a679" stroke="#1a0f24" strokeWidth="2" />

        <path d="M20,50 Q20,40 50,40 Q80,40 80,50 L80,60 Q80,65 75,65 Q70,65 68,60 Q65,55 60,55 Q55,55 53,60 Q50,65 47,60 Q45,55 40,55 Q35,55 32,60 Q30,65 25,65 Q20,65 20,60 Z"
          fill="#5d3a1a" stroke="#1a0f24" strokeWidth="2" />
      </svg>
    </div>
  );

  return (
    <div className="cake-container" onClick={() => navigate("/Chart")}>
      
      {/* particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          style={{
            width: Math.random() * 5 + "px",
            height: Math.random() * 5 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            backgroundColor: ["#4df3ff", "#bd34ff", "#ff4db2", "#ffeb3b", "#ffffff"][i % 5],
          }}
        />
      ))}

      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        <CustomCake />
      </motion.div>

      <h1 className="cake-title">A Special Surprise Awaits...</h1>

      <div className="cake-subtitle">
        ✦ TAP ANYWHERE TO BEGIN ✦
      </div>
    </div>
  );
};

export default Cake;