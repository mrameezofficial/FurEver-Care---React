import React from 'react'
import Hero from '../../ components/Hero'
import GroomingVideos from '../../ components/GroomingVideos'

const PetOwnerGroomingVideos = () => {
  return (
    <div>
      <Hero pageTitle="Grooming Videos" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <GroomingVideos />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerGroomingVideos
