import React from 'react'
import Hero from '../../ components/Hero'
import ShelterHome from '../../ components/ShelterHomeComp'
import SuccessStories from '../../ components/ShltSuccessStories'

const ShltSuccessStories = () => {
  return (
    <div>
        <Hero pageTitle="Success Stories" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <SuccessStories/>
        </div>
      </section>
    </div>
  )
}

export default ShltSuccessStories
