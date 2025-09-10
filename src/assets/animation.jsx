import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection2() {
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState("");

  const roles = [
    { id: "owner", label: "🐶 Pet Owner" },
    { id: "vet", label: "🩺 Veterinarian" },
    { id: "shelter", label: "🏠 Animal Shelter / Rescue Volunteer" },
  ];

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setShowPopup(true);
    setExpanded(false);
    setName("");
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      setExpanded(true); // expand after entering name
    }
  };

  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-3">
      {/* Full panels for roles */}
      {roles.map((role) => (
        <div
          key={role.id}
          onClick={() => handleRoleClick(role.label)}
          className="font-[healine2] flex items-center justify-center cursor-pointer text-[5rem] font-bold text-black transition hover:opacity-100"
          style={{
            background:
              role.id === "owner"
                ? "#f7e1d7"
                : role.id === "vet"
                ? "#dedbd2"
                : "#b0c4b1",
          }}
        >
          {role.label}
        </div>
      ))}

      {/* Popup with smooth expand */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="popupBox"
              initial={{ borderRadius: 20 }}
              animate={{
                borderRadius: expanded ? 0 : 20,
              }}
              transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
              className="bg-white shadow-2xl relative overflow-hidden p-8"
              style={{ width: expanded ? "100%" : 380, height: expanded ? "100%" : "auto" }}
            >
              {!expanded && (
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                  onClick={() => setShowPopup(false)}
                >
                  ✕
                </button>
              )}

              <AnimatePresence mode="wait">
                {!expanded ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">
                      Welcome {selectedRole}
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border rounded-lg px-4 py-2 mb-4"
                    />
                    <button
                      onClick={handleSubmit}
                      className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
                    >
                      Continue
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="page"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full flex items-center justify-center text-center p-10"
                  >
                    <h1 className="text-4xl font-bold text-teal-700">
                      🎉 Welcome, {name}!  
                      <br /> You are logged in as{" "}
                      <span className="text-teal-900">{selectedRole}</span>.
                    </h1>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
