import React from 'react'
import petProfile from '../data/petProfile.json';

const PetProfile = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">🐾 Pet Profile</h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src={petProfile.avatarUrl}
          alt={`${petProfile.name}'s Avatar`}
          className="w-40 h-40 object-cover rounded-full border-4 border-orange-400"
        />
        <div className="text-lg">
          <p><strong>Name:</strong> {petProfile.name}</p>
          <p><strong>Species:</strong> {petProfile.species}</p>
          <p><strong>Breed:</strong> {petProfile.breed}</p>
          <p><strong>Age:</strong> {petProfile.age}</p>
          <p><strong>Gender:</strong> {petProfile.gender}</p>
          <p><strong>Weight:</strong> {petProfile.weight}</p>
          <p>
            <strong>Vaccinated:</strong>{" "}
            <span className={petProfile.vaccinated ? "text-green-600" : "text-red-600"}>
              {petProfile.vaccinated ? "Yes ✅" : "No ❌"}
            </span>
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">💉 Vaccination Details</h2>
      <ul className="list-disc pl-6 mb-6">
        {petProfile.vaccinationDetails?.map((v, index) => (
  <li key={index}>
    {v.vaccine} — <span className="text-gray-700">{v.date}</span>
  </li>
))}

      </ul>

      <h2 className="text-xl font-semibold mb-2">👤 Owner Information</h2>
      <p><strong>Name:</strong> {petProfile.owner.name}</p>
      <p><strong>Contact:</strong> {petProfile.owner.contact}</p>
      <p><strong>Email:</strong> {petProfile.owner.email}</p>
    </div>
  )
}

export default PetProfile
