import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import HeroSection9 from "./dashboards/LandingPage/HeroSection";

const Welcome = () => {
  const [selected, setSelected] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { setCategory, setName } = useAuth();

  const handleSubmit = () => {
    if (!username) {
      alert("Please enter your name!");
      return;
    }
    if (selected) {
      setCategory(selected);
      setName(username);

      if (selected === "PetOwner") navigate("/pet-owner");
      else if (selected === "Vartenian") navigate("/vartenian");
      else if (selected === "Shelter") navigate("/shelter");
    } else {
      alert("Please select a category first!");
    }
  };

  return (
    <div>
      <div className="welcome-row">
      <div className="welcome-logo">
        <img src="../src/assets/furever-care-logo.png" width="150px"/>
      </div>
      <div className="welcome-hero">
        <h1>Welcome To FurEver Care</h1>
        <h3>Your Trusted Companion for All Things Pet Care. <br />They Deserve Forever Love</h3>
      </div>
      </div>
      <HeroSection9 />
    </div>
  );
};

export default Welcome