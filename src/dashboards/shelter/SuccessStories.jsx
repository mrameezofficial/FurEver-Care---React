import React from "react";

function SuccessStories({ stories }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800 pt-[20vw] shltr-hd2">Success Stories</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <div
            key={story.id}
            className="bg-white shadow-md rounded p-4 border shltr-card object-cover transition"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover"
            />
            <h3 className="pt-4 text-xl font-semibold">{story.title}</h3>
            <p className="text-gray-600 mt-2">{story.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;
