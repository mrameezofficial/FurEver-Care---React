import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Camera, CheckCircle, XCircle } from "lucide-react";

export default function VetProfilePage() {
  const { state: profile } = useLocation();
  const navigate = useNavigate();

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">No profile data available.</p>
        <button
          onClick={() => navigate("/vet-form")}
          className="mt-4 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const appointmentSlots = [
    { time: "09:00 AM", status: "booked", patient: "Bella (Dog)" },
    { time: "09:30 AM", status: "available" },
    { time: "10:00 AM", status: "booked", patient: "Max (Cat)" },
    { time: "10:30 AM", status: "available" },
    { time: "11:00 AM", status: "available" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Otitis in Labrador",
      summary: "6-year-old Labrador with otitis externa.",
      keyFindings: ["Pruritus", "Erythema", "Discharge"],
    },
    {
      id: 2,
      title: "Feline Diabetes",
      summary: "9-year-old cat with PU/PD, hyperglycemia.",
      keyFindings: ["Weight loss", "Hyperglycemia", "Glucosuria"],
    },
  ];

  return (
    <div className="bg-gray-50 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 vetpro-main">
        {/* Left: Profile */}
        <div className="vetpro-proflie">
          <div className="h-48 w-full object-contain mb-4 vetpro-proflie-pic">
            {profile.image ? (
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Camera className="w-10 h-10 text-gray-400" />
            )}
          </div>
          <h3 className="text-xl font-semibold">
            {profile.name}
          </h3>
          <p className="text-sm text-sky-600">Specialization: {profile.specialization}</p>
          <p className="text-sm text-gray-500 mt-2">Phone No:{profile.phone}</p>
          <p className="text-sm text-gray-500">Email:{profile.email}</p>
        </div>

        {/* Right: Appointments + Case Studies */}
        <div className="lg:col-span-2 space-y-8">
          {/* Appointments */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-4">
              Appointment Slots
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appointmentSlots.map((s) => (
                <li
                  key={s.time}
                  className="flex items-center justify-between p-4 bg-gray-50 border rounded-xl hover:shadow-md transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{s.time}</p>
                    <p className="text-sm text-gray-500">
                      {s.patient ?? "—"}
                    </p>
                  </div>
                  {s.status === "booked" ? (
                    <span className="text-red-500 flex items-center gap-1 font-medium">
                      <XCircle className="w-4 h-4" /> Booked
                    </span>
                  ) : (
                    <span className="text-green-600 flex items-center gap-1 font-medium">
                      <CheckCircle className="w-4 h-4" /> Available
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Case Studies */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-4">
              Case Studies
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((c) => (
                <div
                  key={c.id}
                  className="p-5 bg-gray-50 rounded-xl border hover:shadow-md transition"
                >
                  <h5 className="font-semibold text-gray-800 text-lg mb-1">
                    {c.title}
                  </h5>
                  <p className="text-sm text-gray-600">{c.summary}</p>
                  <ul className="mt-3 text-sm text-gray-500 space-y-1">
                    {c.keyFindings.map((k, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-sky-500">•</span> {k}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
