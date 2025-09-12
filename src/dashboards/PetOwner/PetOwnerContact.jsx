import React from 'react'
import Hero from '../../ components/Hero'
import ContactUs from '../../ components/ContactUs'
import Team from '../../ components/TeamData'

const PetOwnerContact = () => {
  return (
    <div>
        <Hero pageTitle="Contact Us" />
        <Team />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <ContactUs />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerContact
