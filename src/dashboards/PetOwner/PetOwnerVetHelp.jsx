import React from 'react'
import Hero from '../../ components/Hero'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const PetOwnerVetHelp = () => {
  return (
    <div>
      <Hero pageTitle="Emergency and Vet Help" />
      <section className="vet-section">
        <div className="container max-w-4xl mx-auto p-6 bg-rose-100 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            Emergency and Vet Help:
          </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Vet Emergency Contacts</h3>

<div className='table-wrapper'>          <table className="w-full table-auto border border-gray-400 mb-6 vet-help-table">
            <thead className="bg-rose-200">
              <tr>
                <th className="px-4 py-2 border">Clinic Name</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-4 py-2">Pet Zone Vet Clinic</td>
                <td className="border px-4 py-2">Shah Faisal, Karachi</td>
                <td className="border px-4 py-2">+92 300 1234567</td>
              </tr>
              <tr className="text-center bg-rose-50">
                <td className="border px-4 py-2">Animal Care Center</td>
                <td className="border px-4 py-2">Lahore</td>
                <td className="border px-4 py-2">+92 345 7654321</td>
              </tr>
              <tr className="text-center">
                <td className="border px-4 py-2">Vet Emergency Hub</td>
                <td className="border px-4 py-2">Islamabad</td>
                <td className="border px-4 py-2">+92 321 1122334</td>
              </tr>
            </tbody>
          </table>
</div>
          <div className="vet-help-info-row">
            <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Plot #5, Pet Street, Karachi</p>
            <p className="flex items-center gap-2"><FaEnvelope /> support@furevercare.com</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +92 311 1234567</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PetOwnerVetHelp
