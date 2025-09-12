import React from 'react'
import Hero from '../../ components/Hero'
import VetForm from '../../ components/VetForm'

const VetFormPage = () => {
  return (
    <div>
        <Hero pageTitle="Veterinarian Form" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <VetForm/>
        </div>
      </section>
    </div>
  )
}

export default VetFormPage
