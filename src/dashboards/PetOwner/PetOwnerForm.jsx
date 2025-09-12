import React from 'react'
import Hero from '../../ components/Hero'
import PetForm from './PetForm'

const PetOwnerForm = () => {
  return (
    <div>
      <Hero pageTitle="Pet Owner Info" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <PetForm />
        </div>
      </section>
    </div>
  )
}

export default PetOwnerForm
