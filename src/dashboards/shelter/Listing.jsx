import React from "react";

function Listing({ pet }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
        <p className="text-gray-600">Age: {pet.age}</p>
        <p className="text-gray-600">Breed: {pet.breed}</p>
        <p className="mt-2 text-gray-700 text-sm">{pet.description}</p>
      </div>
    </div>
  );
}

export default Listing;
