import React from 'react'

const Hero = ({pageTitle}) => {
  return (
    <section className='inner-banner '>
      <div className='row'>
        <div className='col-12'>
            <h1>{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
