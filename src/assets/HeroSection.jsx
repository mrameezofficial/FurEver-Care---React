import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [showAuth, setShowAuth] = useState(false);
  const [step, setStep] = useState("login");


  const handleAuth = () => {
    setStep("dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-blue-300 relative">
   
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Pet Care 🐾</h1>
        <p className="mt-2 text-gray-700">Caring for your pets made simple</p>
        <button
          onClick={() => {
            setShowAuth(true);
            setStep("login");
          }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
        >
          User Login
        </button>
      </div>

      <AnimatePresence>
        {showAuth && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute right-0 top-0 h-full w-96 bg-white shadow-2xl p-6 flex flex-col"
          >
           
            <button
              onClick={() => setShowAuth(false)}
              className="self-end text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            <AnimatePresence mode="wait">
              {step === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col flex-1 justify-center"
                >
                  <h2 className="text-2xl font-semibold mb-4">Login</h2>
                  <input type="email" placeholder="Email" className="border p-2 rounded mb-3" />
                  <input type="password" placeholder="Password" className="border p-2 rounded mb-3" />
                  <button
                    onClick={handleAuth}
                    className="bg-blue-600 text-white py-2 rounded mb-4"
                  >
                    Login
                  </button>
                  <p className="text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <button className="text-blue-600" onClick={() => setStep("signup")}>
                      Sign up
                    </button>
                  </p>
                </motion.div>
              )}

              {step === "signup" && (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col flex-1 justify-center"
                >
                  <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                  <input type="text" placeholder="Full Name" className="border p-2 rounded mb-3" />
                  <input type="email" placeholder="Email" className="border p-2 rounded mb-3" />
                  <input type="password" placeholder="Password" className="border p-2 rounded mb-3" />
                  <button
                    onClick={handleAuth}
                    className="bg-green-600 text-white py-2 rounded mb-4"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <button className="text-blue-600" onClick={() => setStep("login")}>
                      Login
                    </button>
                  </p>
                </motion.div>
              )}

              {step === "dashboard" && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col flex-1 justify-center text-center"
                >
                  <h2 className="text-3xl font-bold text-green-600 mb-4">Welcome Back! 🐶</h2>
                  <p className="text-gray-700 mb-6 bg-red-50">
                    You are now logged in. This is your dashboard.
                  </p>
                  <button
                    onClick={() => setShowAuth(false)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Close Dashboard
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
