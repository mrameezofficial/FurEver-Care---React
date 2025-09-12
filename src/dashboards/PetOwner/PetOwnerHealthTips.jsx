import React from 'react'
import HealthTips from "../../ components/HealthTips";
import Hero from "../../ components/Hero";

const PetOwnerHealthTips = () => {
  return (
    <div>
      <Hero pageTitle="Health Tips" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <HealthTips />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerHealthTips
