import React from 'react'
import Hero from '../../ components/Hero'

const PetOwnerFeedback = () => {
  return (
    <div>
      <Hero pageTitle="We’d Love Your Feedback!"/>

      <section>
        <div className="row w-[600px] m-auto pt-25 pb-25">
          <div className="col-12">
            <form action="" className='feedback-form'>
              
    {/* <!-- Full Name --> */}
    <div className='flex gap-6'>
    <div class="mb-4 w-full">
      <label class="block text-sm font-medium mb-1" for="fullName">First Name*</label>
      <input type="text" id="firstName" name="firstName" class="w-full border rounded-md px-3 py-2" required />
    </div>
    <div class="mb-4 w-full">
      <label class="block text-sm font-medium mb-1" for="lastName">Last Name*</label>
      <input type="text" id="lastName" name="lastName" class="w-full border rounded-md px-3 py-2" required />
    </div>
    </div>

    {/* <!-- Pet Name --> */}
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1" for="email">Email*</label>
      <input type="email" id="email" name="email" class="w-full border rounded-md px-3 py-2" required />
    </div>

    {/* <!-- Message --> */}
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1" for="message">Message</label>
      <textarea id="message" name="message" rows="4" class="w-full border rounded-md px-3 py-2" placeholder="Tell us more..."></textarea>
    </div>

    {/* <!-- Submit Button --> */}
    <button type="submit" class="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition">
      Submit Feedback
    </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PetOwnerFeedback
