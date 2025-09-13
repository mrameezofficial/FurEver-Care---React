import React, { useEffect, useRef, useState } from "react";

export default function ScrollingTicker({
  initialCount = 234,     // starting visitors seed
  pxPerSec = 220          // increase for faster scroll (pixels per second)
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [location, setLocation] = useState("Fetching...");
  const [visitorCount, setVisitorCount] = useState(initialCount);
  const [duration, setDuration] = useState(8);

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // ---- Clock ----
  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString());
      setDateStr(now.toLocaleDateString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // ---- Visitors: increment ONCE per browser (not on reload) ----
  useEffect(() => {
    // If no stored count, seed it
    if (!localStorage.getItem("visitorCount")) {
      localStorage.setItem("visitorCount", String(initialCount));
    }

    let stored = parseInt(localStorage.getItem("visitorCount") || String(initialCount), 10);

    // Only increment if this browser hasn't been counted before
    if (!localStorage.getItem("hasVisited")) {
      stored += 1;
      localStorage.setItem("visitorCount", String(stored));
      localStorage.setItem("hasVisited", "true");
    }

    setVisitorCount(stored);

    // Keep all tabs in sync
    const onStorage = (e) => {
      if (e.key === "visitorCount" && e.newValue) {
        setVisitorCount(parseInt(e.newValue, 10));
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [initialCount]);

  // ---- Geolocation → city/state fallback ----
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          setLocation(
            data?.address?.city ||
              data?.address?.town ||
              data?.address?.village ||
              data?.address?.state ||
              "Unknown"
          );
        } catch {
          setLocation("Unable to fetch location");
        }
      },
      () => setLocation("Permission denied")
    );
  }, []);

  // ---- Items to scroll ----
  const tickerItems = [
    `🕒 ${timeStr}`,
    `📅 ${dateStr}`,
    `📍 ${location}`,
  ];
  // Duplicate for seamless loop
  const scrollItems = [...tickerItems, ...tickerItems];

  // ---- Measure width → compute duration so speed is consistent ----
  const recalcDuration = () => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    const containerW = container.offsetWidth;
    const contentW = content.scrollWidth;
    // total distance to travel = content width
    // add container width so the last item fully exits before resetting
    const total = contentW + containerW;
    setDuration(total / pxPerSec); // seconds = pixels / (pixels per second)
  };

  useEffect(() => {
    recalcDuration();
    // Recalc when values change (time/date/location) and on resize
    const onResize = () => recalcDuration();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeStr, dateStr, location, pxPerSec]);

  return (
    <div
      ref={containerRef}
      style={{
        background: "#111",
        color: "#fff",
        padding: 8,
        borderRadius: 6,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Fixed Left */}
      <strong style={{ flex: "0 0 auto" }}>Live</strong>

      {/* Scrolling Middle */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div
          ref={contentRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: `marquee ${Math.max(0.1, duration)}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {scrollItems.map((t, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight: 40,
                padding: "4px 10px",
                borderRadius: 4,
                background: "rgba(255,255,255,0.1)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Fixed Right */}
      <div
        style={{
          flex: "0 0 auto",
          fontWeight: "bold",
          padding: "4px 10px",
          borderRadius: 4,
          background: "rgba(255,255,255,0.1)",
        }}
      >
        👥 Visitors: {visitorCount}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
