import React from "react";
import eventsData from "../../data/zevents.json"; 

export default function Events() {
  // Ensure it's always an array
  const events = Array.isArray(eventsData) ? eventsData : [];

  if (!events.length) {
    return <p className="p-6">No events available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600">
              📅 {event.date} | 📍 {event.location}
            </p>
            <p className="mt-2 text-gray-700">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
