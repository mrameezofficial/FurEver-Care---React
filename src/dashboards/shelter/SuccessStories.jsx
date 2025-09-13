import React from 'react'
import Hero from '../../ components/Hero'
import Gallery from '../../ components/Animalgallery'
import SuccessStories from '../../ components/ShltSuccessStories'


const ShltSuccessStories = () => {
  return (
    <div>
        <Hero pageTitle="Success Stories" />
      <section className="pet-owner-section">
        <div className="container pet-owner-row">
          <SuccessStories stories={storiesData}  />
        </div>
      </section>
    </div>
  )
}

export default ShltSuccessStories
