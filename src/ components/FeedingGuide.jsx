import React from "react";
import feedingData from "../data/feedingGuide.json";

const FeedingGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Feeding Guide</h2>

      {/* Dogs */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Dogs</h3>

        <h4 className="font-medium mt-4">Puppies</h4>
        <ul className="list-disc pl-6">
          {feedingData.dogs.puppies.map((item, idx) => (
            <li key={idx}>
              <strong>{item.age}</strong>: {item.meals}, Food: {item.food}
            </li>
          ))}
        </ul>

        <h4 className="font-medium mt-4">Adults</h4>
        <ul className="list-disc pl-6">
          {feedingData.dogs.adults.map((item, idx) => (
            <li key={idx}>
              <strong>{item.age}</strong>: {item.meals}, Food: {item.food}
            </li>
          ))}
        </ul>
      </section>

      {/* Cats */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Cats</h3>

        <h4 className="font-medium mt-4">Kittens</h4>
        <ul className="list-disc pl-6">
          {feedingData.cats.kittens.map((item, idx) => (
            <li key={idx}>
              <strong>{item.age}</strong>: {item.meals}, Food: {item.food}
            </li>
          ))}
        </ul>

        <h4 className="font-medium mt-4">Adults</h4>
        <ul className="list-disc pl-6">
          {feedingData.cats.adults.map((item, idx) => (
            <li key={idx}>
              <strong>{item.age}</strong>: {item.meals}, Food: {item.food}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FeedingGuide
