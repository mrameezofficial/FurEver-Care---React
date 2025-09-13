import React from "react";
import eventsData from "../../data/zevents.json"; g

export default function Events() {
  const events = Array.isArray(eventsData) ? eventsData : [];

  if (!events.length) {
    return <p className="no-events">No events available.</p>;
  }

  return (
    <div className="events-container">
      <h2 className="events-heading">Upcoming Events</h2>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-meta">
              📅 {event.date} | 📍 {event.location}
            </p>
            <p className="event-description">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
