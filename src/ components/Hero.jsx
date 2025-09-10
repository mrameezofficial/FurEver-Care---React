import React from 'react'

const Hero = ({pageTitle}) => {
  return (
    <section className='inner-banner h-[40vh] bg-[var(--green)]'>
      <div className='row w-[var(--globeWidth)] m-auto'>
        <div className='col-12'>
            <h1 className='text-center'>{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
