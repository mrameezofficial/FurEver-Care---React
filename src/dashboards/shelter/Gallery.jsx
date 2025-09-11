import React from "react";
import PetFilter from "../../dashboards/shelter/PetFilter";
import Listing from "../../dashboards/shelter/Listing";

function Gallery({ pets, filter, setFilter }) {
  const filteredPets =
    filter === "all" ? pets : pets.filter(pet => pet.type === filter);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Adoptable Pets</h2>
      <PetFilter setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredPets.map(pet => (
          <Listing key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
