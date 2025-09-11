import React, { useState, useEffect } from "react";

const VisitorCounter = ({
  initialCount = 100, // Starting number of visitors
  minIncrement = 1,   // Minimum visitors to add per update
  maxIncrement = 3,   // Maximum visitors to add per update
  interval = 5000     // Update interval in milliseconds
}) => {
  const [visitorCount, setVisitorCount] = useState(initialCount);

  // Simulate visitor count increment
  useEffect(() => {
    const timer = setInterval(() => {
      const increment = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
      setVisitorCount(prev => prev + increment);
    }, interval);

    return () => clearInterval(timer); // Cleanup
  }, [minIncrement, maxIncrement, interval]);

  return (
    <div style={styles.container}>
      <span style={styles.label}>Visitors:</span> {visitorCount}
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    color: "#fff",
    backgroundColor: "#28a745",
    padding: "15px 30px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    width: "fit-content",
    margin: "20px auto",
    transition: "all 0.3s ease"
  },
  label: {
    fontWeight: "bold",
    marginRight: "10px"
  }
};

export default VisitorCounter;
