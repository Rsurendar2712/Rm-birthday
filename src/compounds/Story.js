import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./cssfile.css";

const lines = [
  "There's someone I've been thinking about...",
  "Someone who makes ordinary moments feel extraordinary...",
  "Someone whose smile lights up the darkest days...",
  "I could have sent a simple message, a few words...",
];

const Story = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  // Effect for the typing animation
  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    let i = 0;
    let timeoutId;
    const currentLine = lines[currentLineIndex];

    const type = () => {
      if (i < currentLine.length) {
        setDisplayText(currentLine.slice(0, i + 1));
        i++;
        timeoutId = setTimeout(type, 50);
      } else {
        // Wait before moving to the next line
        setTimeout(() => {
          setDisplayText(""); // Clear current typing buffer
          setCurrentLineIndex((prev) => prev + 1);
        }, 2000);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [currentLineIndex]);

  // Effect to handle automatic navigation once the story is finished
  useEffect(() => {
    if (currentLineIndex === lines.length) {
      const navTimeout = setTimeout(() => {
        navigate("/BirthdayPage"); // Change this to your actual next route
      }, 1000); // Small pause at the end for impact
      
      return () => clearTimeout(navTimeout);
    }
  }, [currentLineIndex, navigate]);

  return (
    <div className="story-container">
      <div className="story-content">
        {/* Render lines that have finished typing */}
        {lines.slice(0, currentLineIndex).map((line, i) => (
          <p key={i} className={`story-line color-${i}`}>
            {line}
          </p>
        ))}

        {/* CURRENT TYPING LINE */}
        {currentLineIndex < lines.length && (
          <p className={`story-line color-${currentLineIndex}`}>
            {displayText}
            <span className="cursor">|</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Story;