import React from 'react'
import Hero from '../../ components/Hero'
import ContactUs from '../../ components/ContactUs'

const PetOwnerContact = () => {
  return (
    <div>
        <Hero pageTitle="Contact Us" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <ContactUs />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerContact
