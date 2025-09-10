import React from 'react';
import groomingData from '../data/groomingVideos.json';

const GroomingVideos = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🐾 Grooming Videos</h2>

      {Object.entries(groomingData).map(([animalType, videos]) => (
        <div key={animalType} className="mb-6">
          <h3 className="text-xl font-semibold capitalize mb-2">{animalType}</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="border rounded-md shadow-sm p-4 bg-white">
                <h4 className="font-bold text-lg mb-1">{video.title}</h4>
                <p className="text-sm mb-2">{video.description}</p>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    allowFullScreen
                    className="w-full h-64"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroomingVideos