import React from 'react'
import Hero from "../../ components/Hero";
import TrainingTips from '../../ components/TrainingTips';

const PetOwnerTraningTips = () => {
  return (
    <div>
      <Hero pageTitle="Training Tips" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <TrainingTips />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerTraningTips