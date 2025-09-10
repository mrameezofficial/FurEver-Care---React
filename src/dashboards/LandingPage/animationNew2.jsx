import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [hovered, setHovered] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState("");

  // Add image URLs for each role
  const roles = [
    {
      id: "owner",
      label: "🐶 Pet Owner",
      image: "../public/images/img-1.jpg",
    },
    {
      id: "vet",
      label: "🩺 Veterinarian",
      image: "../public/Images/img-2.jpg",
    },
    {
      id: "shelter",
      label: "🏠 Animal Shelter / Rescue Volunteer",
      image: "../public/images/Hero-.jpg.webp",
    },
  ];

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setShowPopup(true);
    setExpanded(false);
    setName("");
  };

  const handleSubmit = () => {
    if (name.trim() !== "") {
      setExpanded(true);
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* 3 animated divs with background images */}
      {roles.map((role) => (
        <motion.div
          key={role.id}
          layout
          onMouseEnter={() => setHovered(role.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleRoleClick(role.label)}
          className="relative flex items-center justify-center cursor-pointer text-2xl md:text-3xl font-bold text-white transition bg-center bg-cover"
          style={{
            backgroundImage: `url(${role.image})`,
          }}
          animate={{
            flex: hovered === role.id ? 3 : hovered ? 1 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text */}
          <span className="relative z-10">{role.label}</span>
        </motion.div>
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
              animate={{ borderRadius: expanded ? 0 : 20 }}
              transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
              className="bg-white shadow-2xl relative overflow-hidden p-8"
              style={{
                width: expanded ? "100%" : 380,
                height: expanded ? "100%" : "auto",
              }}
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
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
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
                      className="w-full py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-900 transition"
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
                    <h1 className="text-4xl font-bold text-gray-800">
                      🎉 Welcome, {name}!  
                      <br /> You are logged in as{" "}
                      <span className="text-gray-900">{selectedRole}</span>.
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
