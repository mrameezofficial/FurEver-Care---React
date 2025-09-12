import React, { useState } from "react";
import petsData from "../../data/pets.json";
import eventsData from "../../data/zevents.json"
import storiesData from "../../data/successstoriess.json";

import Gallery from "../../dashboards/shelter/Gallery";
import SuccessStories from "../../dashboards/shelter/SuccessStories";
import Events from "../../dashboards/shelter/Events";
import Contact from "../../dashboards/shelter/Contact";
import AnimalShelterNavbar from "./AnimalShelterNav";


function ShelterHome() {
  const [filter, setFilter] = useState("all");

  return (
    <>
    <AnimalShelterNavbar />
    <div className="font-sans bg-gray-50 min-h-screen">
      <header className="bg-orange-500 text-white py-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">🐾 Animal Shelter</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <Gallery pets={petsData} filter={filter} setFilter={setFilter} />
        <SuccessStories stories={storiesData} />
        <Events events={eventsData} />
        <Contact />
      </main>
    </div>
    </>
  );
}

export default ShelterHome;
