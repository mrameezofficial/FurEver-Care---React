import React from "react";
import { useAuth } from "../../context/AuthContext";

const ShelterHome = () => {
  const { name } = useAuth();

  return (
    <div>
      <h2>Welcome to Shelter Dashboard</h2>
      <p>Hello, {name} 👋</p>
    </div>
  );
};

export default ShelterHome;
