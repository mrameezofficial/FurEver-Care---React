import React from "react";

function SuccessStories({ stories }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map(story => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-48 h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{story.title}</h3>
            <p className="text-gray-600 mt-2">{story.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SuccessStories;
