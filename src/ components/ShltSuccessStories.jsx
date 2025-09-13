import React from "react";
import successStoriesData from "../data/successstoriess.json";

function SuccessStories() {
  return (
    <div className="success-stories">
      <h2>Adoption Success Stories</h2>
      <p className="intro">
        Here are some heartwarming stories of pets who found their forever homes
        through our shelter.
      </p>

      {/* Stories grid */}
      <div className="stories-grid">
        {successStoriesData.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.name} />
            <h3>{story.name}</h3>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
