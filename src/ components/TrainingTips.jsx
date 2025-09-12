import React from 'react';
import trainingTips from '../data/trainingTips.json';

const TrainingTips = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold pet-owner-title">Training Tips</h2>

      {Object.entries(trainingTips).map(([animalType, tips]) => (
        <div key={animalType} className="mb-6">
          <h3 className="text-xl font-semibold capitalize mb-2 pet-owner-subtitle">{animalType}</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="border rounded-md p-4 bg-white shadow-sm video-col">
                <h4 className="text-lg font-bold mb-1">{tip.title}</h4>
                <p className="text-sm mb-2">{tip.description}</p>

                {tip.type === 'video' ? (
                  <iframe
                    className="w-full h-56"
                    src={tip.url}
                    title={tip.title}
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainingTips