import React, { useState, useEffect } from "react";

// Stylish, reusable RealTimeClock component
const RealTimeClock = ({ showDate = true, fontSize = "24px", color = "#333" }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up
  }, []);

  // Format date and time
  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: fontSize,
        color: color,
        textAlign: "center",
        padding: "10px 0",
        background: "#f0f0f0",
        borderRadius: "8px",
        width: "fit-content",
        margin: "auto",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <div>{formattedTime}</div>
      {showDate && <div style={{ fontSize: "16px", color: "#555" }}>{formattedDate}</div>}
    </div>
  );
};

export default RealTimeClock;
