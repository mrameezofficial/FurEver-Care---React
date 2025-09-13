import React from "react";
import ScrollingTicker from "../ components/ScrollingTicker";

export default function Scrolling() {
  const updates = [
    "Zarshan",
    "New order received #2345",
    "Reminder: Standup at 10:00",
  ];

  return (
    <div >
      <ScrollingTicker updates={updates} speed={20} />
    </div>
  );
}
