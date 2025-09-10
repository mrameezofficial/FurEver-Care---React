import React from 'react'
import Hero from '../../ components/Hero'

const PetOwnerVetHelp = () => {
  return (
    <div>
      <Hero pageTitle="Emergency and Vet Help"/>
      <section class="max-w-4xl mx-auto p-6 bg-rose-100 rounded-lg shadow-md mt-10">
  <h2 class="text-3xl font-bold text-blue-600 underline mb-6 text-center">Emergency and Vet Help</h2>

  <p class="text-gray-800 mb-4 text-center">
    Below are emergency vet contact numbers for immediate help.
  </p>

  <table class="w-full table-auto border border-gray-400">
    <thead class="bg-rose-200">
      <tr>
        <th class="px-4 py-2 border border-gray-400">Clinic Name</th>
        <th class="px-4 py-2 border border-gray-400">City</th>
        <th class="px-4 py-2 border border-gray-400">Contact Number</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <td class="border px-4 py-2">Pet Zone Vet Clinic</td>
        <td class="border px-4 py-2">Karachi</td>
        <td class="border px-4 py-2">+92 300 1234567</td>
      </tr>
      <tr class="text-center bg-rose-50">
        <td class="border px-4 py-2">Animal Care Center</td>
        <td class="border px-4 py-2">Lahore</td>
        <td class="border px-4 py-2">+92 345 7654321</td>
      </tr>
      <tr class="text-center">
        <td class="border px-4 py-2">Vet Emergency Hub</td>
        <td class="border px-4 py-2">Islamabad</td>
        <td class="border px-4 py-2">+92 321 1122334</td>
      </tr>
    </tbody>
  </table>
</section>

    </div>
  )
}

export default PetOwnerVetHelp
