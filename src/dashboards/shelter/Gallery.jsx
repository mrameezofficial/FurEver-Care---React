import React from 'react'
import Hero from '../../ components/Hero'
import Gallery from '../../ components/Animalgallery'


const animalGallery = () => {
  return (
    <div>
        <Hero pageTitle="Gallery" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <Gallery/>
        </div>
      </section>
    </div>
  )
}

export default animalGallery
