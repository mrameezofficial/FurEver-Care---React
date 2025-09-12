import React from 'react'
import Hero from '../../ components/Hero'
import VetProfile from '../../ components/VetProfile'

const VetProfilePage = () => {
  return (
    <div>
      <Hero pageTitle="Vet Profile" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <VetProfile />
        </div>
      </section>
    </div>
  )
}

export default VetProfilePage
