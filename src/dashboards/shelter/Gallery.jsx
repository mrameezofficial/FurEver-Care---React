import React, { useState } from "react";
import petsData from "../../data/pets.json";


function Gallery() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "dog", "cat", "rabbit"];

  // filter pets by type
  const filteredPets = petsData.filter(
    (pet) => filter === "all" || pet.type.toLowerCase() === filter
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-800 gallery-main-hl">Adoptable Pets</h2>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-4 mb-6 product-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`tab-btn ${filter === cat ? "active" : ""}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Pets Gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded p-4 border product-card">
            <img src={pet.image} alt={pet.name} />
            <h3 className="gallery-pet-name">{pet.name}</h3>
            <p>
              <strong>Type:</strong>{" "}
              {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
            </p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>

      {filteredPets.length === 0 && <p>No pets found for this category.</p>}
    </div>
  );
}

export default Gallery;
