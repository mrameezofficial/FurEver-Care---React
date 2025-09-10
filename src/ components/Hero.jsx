import React from 'react'

const Hero = ({pageTitle}) => {
  return (
    <section className='inner-banner h-[30vh] bg-[var(--green)] flex align-middle bg-(image:../assets/'>
      <div className='row w-[var(--globeWidth)] m-auto'>
        <div className='col-12'>
            <h1 className='text-center'>{pageTitle}</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
