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
    fontSize: "14px",
    color: "#FFF",
  },
  label: {
    fontWeight: "bold",
    marginRight: "10px"
  }
};

export default VisitorCounter;
