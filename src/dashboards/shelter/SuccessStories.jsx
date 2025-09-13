import React from "react";
import storiesData from "../../data/successstoriess.json";

export default function SuccessStories() {
  // always ensure it's an array
  const stories = Array.isArray(storiesData) ? storiesData : [];

  if (!stories.length) {
    return <p className="p-6 text-gray-600">No success stories yet.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-teal-700">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stories.map((story, index) => (
          <div
            key={story.id || index}
            className="p-4 border rounded-lg shadow hover:shadow-md transition bg-white"
          >
            {story.image && (
              <img
                src={story.image}
                alt={story.title || story.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-lg font-semibold">
              {story.title || story.name}
            </h3>
            <p className="mt-2 text-gray-700">
              {story.description || story.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
