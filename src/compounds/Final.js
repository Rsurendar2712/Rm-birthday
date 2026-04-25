import React, { useEffect, useState } from "react";
import "./cssfile.css";

const lines = [
  "Hi Meena",
  "I hope you loved this 🎊...",
  "I hope I made you smile 😄😋...",
  "And made our day special ✨",
  "I wish you a long life filled with happiness ... ☺",
  "And a beautiful future ahead ❤️",
];

const finalMessage =
  "Happy Birthday 🎂 Many more happy returns of the day! Enjoy your day ❤️ Sorry for the late wishes...";

const FinalPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [completedLines, setCompletedLines] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (currentIndex >= lines.length) {
      setShowFinal(true);
      return;
    }

    let i = 0;
    let timeout;

    const type = () => {
      if (i < lines[currentIndex].length) {
        setDisplayText(lines[currentIndex].slice(0, i + 1));
        i++;
        timeout = setTimeout(type, 40);
      } else {
        // save typed line
        setCompletedLines((prev) => [...prev, lines[currentIndex]]);
        setDisplayText("");

        // move to next line
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 800);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="final-container">

      {/* CONFETTI */}
      <div className="confetti-container">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="confetti"
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 3 + Math.random() * 3 + "s",
            }}
          ></span>
        ))}
      </div>

      {/* TEXT AREA */}
      <div className="content">

        {/* Already typed lines (stay visible) */}
        {completedLines.map((line, index) => (
          <p key={index} className="line">
            {line}
          </p>
        ))}

        {/* Current typing line */}
        {currentIndex < lines.length && (
          <p className="line typing">
            {displayText}
            <span className="cursor">|</span>
          </p>
        )}

        {/* FINAL MESSAGE */}
        {showFinal && (
          <h2 className="final-message">
            {finalMessage}
          </h2>
        )}

      </div>

      {/* HEART GLOW */}
      <div className="heart-glow"></div>

    </div>
  );
};

export default FinalPage;