import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

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

      if (selected === "PetOwner") navigate("/petowner");
      else if (selected === "Vartenian") navigate("/vartenian");
      else if (selected === "Shelter") navigate("/shelter");
    } else {
      alert("Please select a category first!");
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div>
        <input
          type="radio"
          name="category"
          value="PetOwner"
          onChange={(e) => setSelected(e.target.value)}
        />
        <label>Pet Owner</label>

        <input
          type="radio"
          name="category"
          value="Vartenian"
          onChange={(e) => setSelected(e.target.value)}
        />
        <label>Vartenian</label>

        <input
          type="radio"
          name="category"
          value="Shelter"
          onChange={(e) => setSelected(e.target.value)}
        />
        <label>Shelter</label>
      </div>

      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
};

export default Welcome;
