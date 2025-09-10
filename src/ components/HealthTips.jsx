import React from 'react';
import healthTips from '../data/healthTips.json';

const HealthTips = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🩺 Health Tips</h2>

      {Object.entries(healthTips).map(([animalType, tips]) => (
        <div key={animalType} className="mb-6">
          <h3 className="text-xl font-semibold capitalize mb-2">{animalType}</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="border rounded-md p-4 bg-white shadow-sm">
                <h4 className="text-lg font-bold mb-1">{tip.title}</h4>
                <p className="text-sm mb-2">{tip.description}</p>

                {tip.type === 'video' ? (
                  <iframe
                    className="w-full h-56"
                    src={tip.url}
                    title={tip.title}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <audio controls className="w-full mt-2">
                    <source src={tip.url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthTips