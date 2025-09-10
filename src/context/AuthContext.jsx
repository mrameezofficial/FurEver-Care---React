import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");

  // load from localStorage on refresh
  useEffect(() => {
    const savedCategory = localStorage.getItem("category");
    const savedName = localStorage.getItem("name");
    if (savedCategory) setCategory(savedCategory);
    if (savedName) setName(savedName);
  }, []);

  // save whenever updated
  useEffect(() => {
    if (category) localStorage.setItem("category", category);
    if (name) localStorage.setItem("name", name);
  }, [category, name]);

  return (
    <AuthContext.Provider value={{ category, setCategory, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
