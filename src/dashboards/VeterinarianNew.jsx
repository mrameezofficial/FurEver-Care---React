import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, CheckCircle, XCircle, Calendar } from "lucide-react";

// --- VetForm Component ---
function VetForm({ form, setForm, imagePreview, handleImageChange, handleSubmit, fileInputRef }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 rounded-2xl shadow-sm"
    >
      <div className="md:col-span-2 space-y-3">
        <label className="block">
          <span className="text-sm font-medium">Full Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Dr. Samantha Green"
            className="mt-1 block w-full rounded-lg border p-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Specialization</span>
          <input
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            placeholder="Small animals, exotics, surgery, dentistry..."
            className="mt-1 block w-full rounded-lg border p-2"
          />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label>
            <span className="text-sm font-medium">Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="mt-1 block w-full rounded-lg border p-2"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="vet@example.com"
              className="mt-1 block w-full rounded-lg border p-2"
            />
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700"
          >
            Save Profile
          </button>
        </div>
      </div>

      <aside className="flex flex-col items-center justify-start gap-3 p-3 border rounded-lg">
        <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
          {imagePreview ? (
            <img src={imagePreview} alt="Vet preview" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center text-sm text-gray-500">
              <Camera className="w-6 h-6" />
              <span className="mt-2">Upload image</span>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm"
        />

        <p className="text-xs text-gray-500 text-center">Optional profile photo</p>
      </aside>
    </motion.form>
  );
}

// --- VetProfile Component ---
function VetProfile({ profile, setShowForm, handleResetProfile, appointmentSlots }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4"
    >
      <div className="flex items-center gap-4 md:w-1/3">
        <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {profile && profile.image ? (
            <img src={profile.image} alt={`${profile.name} profile`} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center text-gray-500">
              <Camera className="mx-auto mb-1" /> No image
            </div>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold">{profile?.name ?? "—"}</h3>
          <p className="text-sm text-gray-600">{profile?.specialization ?? "—"}</p>
          <p className="text-xs text-gray-500 mt-2">Saved: {profile?.createdAt ? new Date(profile.createdAt).toLocaleString() : "—"}</p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 border rounded-lg">
          <h4 className="font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Contact
          </h4>
          <p className="mt-2 text-sm">Phone: {profile?.phone ?? "—"}</p>
          <p className="text-sm">Email: {profile?.email ?? "—"}</p>
        </div>

        <div className="p-3 border rounded-lg">
          <h4 className="font-medium">Today's Appointments</h4>
          <ul className="mt-2 space-y-2">
            {appointmentSlots.map((s) => (
              <li key={s.time} className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{s.time}</div>
                  <div className="text-xs text-gray-500">{s.patient ?? "—"}</div>
                </div>
                <div className="flex items-center gap-2">
                  {s.status === "booked" ? (
                    <span className="text-sm inline-flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-red-500" /> Booked
                    </span>
                  ) : (
                    <span className="text-sm inline-flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" /> Available
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-500">Display only — no backend</p>
        </div>

        <div className="md:col-span-2 p-3 border rounded-lg">
          <h4 className="font-medium">About</h4>
          <p className="mt-2 text-sm text-gray-700">
            {profile?.specialization
              ? `${profile.name} specializes in ${profile.specialization}.`
              : "No additional biography provided."}
          </p>

          <div className="mt-3 flex gap-2">
            <button onClick={() => setShowForm(true)} className="px-3 py-1 rounded-md border">
              Edit Info
            </button>
            <button onClick={handleResetProfile} className="px-3 py-1 rounded-md border bg-red-50">
              Clear
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- CaseStudies Component ---
function CaseStudies({ caseStudies }) {
  return (
    <section className="bg-white p-4 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold">Sample Medical Histories — Case Studies</h3>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudies.map((c) => (
          <article key={c.id} className="p-3 border rounded-lg">
            <h4 className="font-medium">{c.title}</h4>
            <p className="mt-2 text-sm text-gray-700">{c.summary}</p>
            <ul className="mt-3 text-xs text-gray-600 space-y-1">
              {c.keyFindings.map((k, i) => (
                <li key={i}>• {k}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// --- Main VetSection ---
export default function VetSection() {
  const [form, setForm] = useState({ name: "", specialization: "", phone: "", email: "" });
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const appointmentSlots = [
    { time: "09:00 AM", status: "booked", patient: "Bella (Dog)" },
    { time: "09:30 AM", status: "available" },
    { time: "10:00 AM", status: "booked", patient: "Max (Cat)" },
    { time: "10:30 AM", status: "available" },
    { time: "11:00 AM", status: "available" },
    { time: "02:00 PM", status: "booked", patient: "Charlie (Rabbit)" },
  ];

  const caseStudies = [
    { id: 1, title: "Acute Otitis in a Labrador", summary: "6-year-old Labrador with otitis externa.", keyFindings: ["Pruritus", "Erythema", "Discharge"] },
    { id: 2, title: "Feline Diabetes Mellitus", summary: "9-year-old cat with PU/PD, confirmed hyperglycemia.", keyFindings: ["Weight loss", "Hyperglycemia", "Glucosuria"] },
    { id: 3, title: "Rabbit Dental Overgrowth", summary: "Adult rabbit with drooling, molar spurs treated by trimming.", keyFindings: ["Drooling", "Hyporexia", "Molar spurs"] },
  ];

  function handleImageChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Please enter the vet's name.");
      return;
    }
    const savedProfile = { ...form, image: imagePreview, createdAt: new Date().toISOString() };
    setProfile(savedProfile);
    setShowForm(false);
  }

  function handleResetProfile() {
    setProfile(null);
    setImagePreview(null);
    setForm({ name: "", specialization: "", phone: "", email: "" });
    setShowForm(true);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Veterinarian Section</h2>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowForm((s) => !s)} className="px-3 py-1 rounded-md border hover:shadow-sm">
            {showForm ? "View Profile" : "Edit Info"}
          </button>
          <button onClick={handleResetProfile} className="px-3 py-1 rounded-md border bg-red-50 hover:bg-red-100">
            Reset
          </button>
        </div>
      </div>

      {showForm ? (
        <VetForm
          form={form}
          setForm={setForm}
          imagePreview={imagePreview}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          fileInputRef={fileInputRef}
        />
      ) : (
        <VetProfile
          profile={profile}
          setShowForm={setShowForm}
          handleResetProfile={handleResetProfile}
          appointmentSlots={appointmentSlots}
        />
      )}

      <CaseStudies caseStudies={caseStudies} />
      <p className="text-xs text-gray-500">Client-only component — no backend persistence.</p>
    </div>
  );
}
