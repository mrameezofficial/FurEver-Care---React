import React from 'react'

const Hero = ({pageTitle}) => {
  return (
    <section className='inner-banner bg-(image:../assets/'>
      <div className='container'>
        <div className='col-12'>
            <h1 className='banner-title'>{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
