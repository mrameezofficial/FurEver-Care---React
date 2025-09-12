import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Camera, CheckCircle, XCircle } from "lucide-react";

export default function VetProfilePage() {
  const { state: profile } = useLocation();
  const navigate = useNavigate();

  if (!profile) {
    return (
      <div className="p-6">
        <p>No profile data.</p>
        <button
          onClick={() => navigate("/vet-form-page")}
          className="mt-2 px-3 py-1 bg-sky-600 text-white rounded"
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
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Top bar with name */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Veterinarian Profile</h2>
        <span className="font-semibold">{profile.name}</span>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-4 rounded-xl shadow flex gap-4">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {profile.image ? (
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="w-6 h-6 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.specialization}</p>
          <p className="text-xs text-gray-500">
            Phone: {profile.phone} | Email: {profile.email}
          </p>
        </div>
      </div>

      {/* Appointment Slots */}
      <section>
        <h4 className="font-medium mb-2">Appointment Slots</h4>
        <ul className="grid grid-cols-2 gap-3">
          {appointmentSlots.map((s) => (
            <li
              key={s.time}
              className="flex items-center justify-between p-2 border rounded"
            >
              <div>
                <p className="font-medium">{s.time}</p>
                <p className="text-sm">{s.patient ?? "—"}</p>
              </div>
              {s.status === "booked" ? (
                <span className="text-red-500 flex items-center gap-1">
                  <XCircle className="w-4 h-4" /> Booked
                </span>
              ) : (
                <span className="text-green-500 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Available
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section>
        <h4 className="font-medium mb-2">Case Studies</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((c) => (
            <div key={c.id} className="p-3 border rounded-lg">
              <h5 className="font-semibold">{c.title}</h5>
              <p className="text-sm text-gray-700">{c.summary}</p>
              <ul className="mt-2 text-xs text-gray-600 space-y-1">
                {c.keyFindings.map((k, i) => (
                  <li key={i}>• {k}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
