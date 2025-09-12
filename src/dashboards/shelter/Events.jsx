import React from "react";

function Events({ events }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800 pt-[20vw] shltr-hd2">Upcoming Events</h2>
      <div className="space-y-4 shltr-event">
        {events.map(event => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-orange-600">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="text-gray-700 mt-2">{event.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
