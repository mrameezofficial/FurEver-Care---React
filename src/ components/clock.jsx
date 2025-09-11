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
    <div className="time-date">
      <div>{formattedTime}</div> | 
      {showDate && <div>{formattedDate}</div>}
    </div>
  );
};

export default RealTimeClock;
