import React from 'react'
import Hero from '../../ components/Hero'
import FeedingGuide from '../../ components/FeedingGuide'

const PetOwnerFeedingGuide = () => {
  return (
    <div>
        <Hero pageTitle="Feeding Guide" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <FeedingGuide />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerFeedingGuide
