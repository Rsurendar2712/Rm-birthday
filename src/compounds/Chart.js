import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cssfile.css";

const Chart = () => {
  const navigate = useNavigate();

  const [text, setText] = useState(""); // input typing
  const [chatMessages, setChatMessages] = useState([
    { text: "Hey! ❤️", type: "received" },
    { text: "I have something to tell you...", type: "received" },
  ]);

  const [secondTyped, setSecondTyped] = useState(""); // second message typing
  const [phase, setPhase] = useState("start");

  const firstMsg = "Happy Birthday 🎂 Rathimeena ✨🎉";
  const secondMsg =
  "I can send at exact 12 o'clock like this,  but you're something special ❤️, So wait......";
  

  useEffect(() => {
    setTimeout(() => setPhase("typing1"), 1000);
  }, []);

  useEffect(() => {
    let i = 0;

    // ✅ STEP 1: TYPE IN INPUT
    if (phase === "typing1") {
      const interval = setInterval(() => {
        setText(firstMsg.slice(0, i + 1));
        i++;
        if (i === firstMsg.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("erase"), 2000);
        }
      }, 80);

      return () => clearInterval(interval);
    }

    // ✅ STEP 2: ERASE INPUT
    if (phase === "erase") {
      let j = firstMsg.length;

      const interval = setInterval(() => {
        setText(firstMsg.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(interval);

          // 👉 ADD EMPTY MESSAGE BUBBLE
          setChatMessages((prev) => [...prev, { text: "", type: "sent" }]);

          setPhase("typing2");
        }
      }, 50);

      return () => clearInterval(interval);
    }

    // ✅ STEP 3: TYPE IN CHAT BUBBLE (NOT INPUT)
    if (phase === "typing2") {
      const interval = setInterval(() => {
        const current = (secondMsg || "").slice(0, i + 1);
        setSecondTyped(current);

        // update last message dynamically
        setChatMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            text: current,
            type: "sent",
          };
          return updated;
        });

        i++;

        if (i === secondMsg.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("redirect"), 2000);
        }
      }, 50);

      return () => clearInterval(interval);
    }

    // ✅ STEP 4: REDIRECT
    if (phase === "redirect") {
      setTimeout(() => {
        navigate("/Story");
      }, 1500);
    }
  }, [phase, navigate]);

  return (
    <div className="container">
      <div className="chat-box">

        {/* HEADER */}
        <div className="header">
          <div>
            ❤️ My Special Person
            <div className="online">online</div>
          </div>
          <div className="time">12:00 AM</div>
        </div>

        {/* CHAT BODY */}
        <div className="chat-body">
          {chatMessages.map((msg, i) => (
            <div key={i} className={`msg ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT (ONLY FIRST MSG) */}
        <div className="input-box">
          <input type="text" value={text} readOnly />
          <button>➤</button>
        </div>

      </div>
    </div>
  );
};

export default Chart;