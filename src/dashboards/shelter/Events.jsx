import React from "react";

function Events({ events }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800 pt-[20vw] shltr-hd2">Upcoming Events</h2>
      <div className="shltr-event-hd">
        {events.map(event => (
          <div
            key={event.id}
            className="shltr-event-h2"
          >
            <h3 className="pt-4 text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="text-gray-600">{event.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
