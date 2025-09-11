import React from "react";
import PetProfile from "../../ components/PetProfile";
import Hero from "../../ components/Hero";

const PetOwnerPetProfile = () => {
  return (
    <div>
      <Hero pageTitle="Pet Proile" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <PetProfile />
        </div>
      </section>
    </div>
  );
};

export default PetOwnerPetProfile;
