import React from 'react'
import Hero from '../../ components/Hero'
import PetProductShowcase from '../../ components/PetProductShowcase'

const PetOwnerProductsShowcase = () => {
  return (
    <div>
      <Hero pageTitle="Pet Products Showcase" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <PetProductShowcase/>
        </div>
      </section>
    </div>
  )
}

export default PetOwnerProductsShowcase
