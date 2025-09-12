import React from 'react'
import Hero from '../../ components/Hero'
import ShelterHome from '../../ components/ShelterHomeComp'

const ShelterHomeComp = () => {
  return (
    <div>
        <Hero pageTitle="Animal Shelter" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <ShelterHome/>
        </div>
      </section>
    </div>
  )
}

export default ShelterHomeComp
