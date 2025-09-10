import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection1() {
  const [showAuth, setShowAuth] = useState(false);
  const [step, setStep] = useState("login"); // "login" or "signup"

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-teal-100 to-green-200">
      {/* Hero content */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-teal-800">
          Pet Care Made Easy 🐾
        </h1>
        <p className="mt-4 text-lg text-teal-700">
          Everything your pet needs, in one place.
        </p>
        <button
          onClick={() => setShowAuth(true)}
          className="mt-6 px-6 py-3 rounded-2xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
        >
          User Login
        </button>
      </div>

      {/* Sliding auth column */}
      <AnimatePresence>
        {showAuth && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl p-8"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowAuth(false)}
            >
              ✕
            </button>

            <AnimatePresence mode="wait">
              {step === "login" ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Login</h2>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2 mb-4"
                  />
                  <button className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                    Login
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                      className="text-teal-600 font-semibold"
                      onClick={() => setStep("signup")}
                    >
                      Sign Up
                    </button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-2 mb-3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border rounded-lg px-4 py-2 mb-4"
                  />
                  <button className="w-full py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">
                    Sign Up
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      className="text-teal-600 font-semibold"
                      onClick={() => setStep("login")}
                    >
                      Login
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
