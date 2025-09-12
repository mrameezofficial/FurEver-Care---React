import React from 'react'
import Hero from '../../ components/Hero'
import AboutUs from '../../ components/AboutUs'
import TeamData from '../../ components/TeamData'

const PetOwnerAbout = () => {
  return (
    <div>
        <Hero pageTitle="About Us" />
      <section className="pet-owner-section">
        <div className="container">
          <AboutUs/>
        </div>
        <div className="container">
          <TeamData />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerAbout
