import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function HeroSection8() {
  const [hovered, setHovered] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // 👇 Har role ka unique path
  const roles = [
    { id: "owner", label: "Pet Owner", bg: "bg-teal-600", path: "/petowner" },
    { id: "vet", label: "Veterinarian", bg: "bg-blue-600", path: "/vartenian" },
    { id: "shelter", label: "Animal Shelter / Rescue Volunteer", bg: "bg-purple-600", path: "/shelter" },
  ];

  // ✅ ab role object store hoga (label nahi)
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

  // 👇 Auto-redirect 2 second ke baad
  useEffect(() => {
    if (expanded && selectedRole) {
      const timer = setTimeout(() => {
        navigate(selectedRole.path); // ✅ ab correct path use karega
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [expanded, selectedRole, navigate]);

  return (
    <div className="h-screen w-screen flex ">
      {/* Role selection buttons */}
      {roles.map((role) => (
        <motion.button
          key={role.id}
          layout
          onMouseEnter={() => setHovered(role.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleRoleClick(role)} // ✅ role object pass
          className={`${role.bg} flex items-center justify-center cursor-pointer text-2xl md:text-3xl font-bold text-white transition welcome-service-col ${role.id}`}
          animate={{ flex: hovered === role.id ? 3 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3>{role.label}</h3>
        </motion.button>
      ))}

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center isok justify-center bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
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
              onClick={(e) => e.stopPropagation()}
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
                      Welcome {selectedRole?.label}
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
                      <span className="text-teal-900">{selectedRole?.label}</span>.
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
