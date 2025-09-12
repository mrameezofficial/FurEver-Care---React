import React from "react";
import PetFilter from "../../dashboards/shelter/PetFilter";
import Listing from "../../dashboards/shelter/Listing";

function Gallery({ pets, filter, setFilter }) {
  const filteredPets =
    filter === "all" ? pets : pets.filter(pet => pet.type === filter);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4 text-gray-800 shltr-hd">Adoptable Pets</h2>
      <PetFilter setFilter={setFilter} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map(pet => (
          <Listing key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
