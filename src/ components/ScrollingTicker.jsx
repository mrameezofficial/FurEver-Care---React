import React, { useEffect, useState } from "react";
import RealTimeClock from "./clock";
import VisitorCounter from "./visitorcounter";

export default function ScrollingTicker({ updates = [], speed = 15 }) {
  const [isPaused, setIsPaused] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  // Update clock every second
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [`Time: ${timeStr}`, ...updates];
  const tickerItems = [...items, ...items]; // duplicate for smooth scroll

  return (
    <div
      style={{
        background: "#132b45",
        color: "#fff",
        padding: 8,
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <strong style={{ flex: "0 0 auto ", flexDirection: "row", display: "flex", alignItems:"center", gap:15 }}> Live <VisitorCounter/> </strong>

        <div style={{ flex: 1, overflow: "hidden" }}>
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: `marquee ${speed}s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {tickerItems.map((t, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  marginRight: 24,
                  padding: "4px 8px",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: "0 0 auto", fontSize: 16 }}>
          {new Date().toLocaleDateString()}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}