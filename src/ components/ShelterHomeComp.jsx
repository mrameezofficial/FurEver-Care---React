import React, { useState } from "react";

import eventsData from "../../src/data/zevents.json"
import storiesData from "../../src/data/successstoriess.json";

import Gallery from "../../src/dashboards/shelter/Gallery";
import SuccessStories from "../ components/ShltSuccessStories";
import Events from "../../src/dashboards/shelter/Events";
import Contact from "../../src/dashboards/shelter/Contact";
import { Contact2 } from "lucide-react";
import AnimalShelterNavbar from "../dashboards/shelter/AnimalShelterNav";


function ShelterHome() {
  const [filter, setFilter] = useState("all");

  return (
    <>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <SuccessStories stories={storiesData} />
        <Events events={eventsData} />
        <Contact />
      </main>

    </>
  );
}

export default ShelterHome;
