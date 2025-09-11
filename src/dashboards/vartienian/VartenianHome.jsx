import React from "react";
import { useAuth } from "../../context/AuthContext";
import veterinarians from "../../data/veterinarians.json";

const VartenianHome = ({ vetId = 1 }) => {
  const { name } = useAuth();

  // find veterinarian by ID from JSON
  const vetData = veterinarians.find((v) => v.id === vetId);

  if (!vetData) {
    return <p className="text-center mt-10">Veterinarian not found</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Greeting */}
      <h2 className="text-2xl font-bold mb-2">Welcome to Vartenian Dashboard</h2>
      <p className=" text-2xl font-bold mb-6 text-gray-700">Hello, {name} 👋</p>

      {/* Header */}
      <h1 className="text-xl font-semibold mb-6">{vetData.name}</h1>

      {/* Profile Section */}
      <div className="flex gap-6 items-center bg-white shadow-md rounded-2xl p-6 mb-6">
        <img
          src={vetData.image}
          alt={vetData.name}
          className="w-28 h-28 rounded-full object-cover shadow"
        />
        <div>
          <h2 className="text-lg font-semibold">{vetData.name}</h2>
          <p className="text-gray-600">{vetData.specialization}</p>
          <p className="text-gray-500">{vetData.contact}</p>
        </div>
      </div>

      {/* Grid for Time Slots & Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Time Slots */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Appointment Slots</h3>
          <ul className="space-y-2">
            {vetData.timeSlots.map((slot, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 rounded-lg ${
                  slot.status === "Booked"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <span>{slot.time}</span>
                <span className="font-medium">{slot.status}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Case Studies */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Case Studies</h3>
          <ul className="space-y-4">
            {vetData.caseStudies.map((caseStudy, index) => (
              <li
                key={index}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h4 className="font-medium">{caseStudy.title}</h4>
                <p className="text-gray-600 text-sm">
                  {caseStudy.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VartenianHome;
