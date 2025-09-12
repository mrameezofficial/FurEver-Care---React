import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PetForm = () => {
  const [pet, setPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // ✅ hook for redirection

  const validate = () => {
    const newErrors = {};

    if (!pet.name.trim()) {
      newErrors.name = "Pet name is required.";
    }

    if (!pet.species) {
      newErrors.species = "Please select a species.";
    }

    if (!pet.age) {
      newErrors.age = "Age is required.";
    } else if (isNaN(pet.age) || pet.age <= 0) {
      newErrors.age = "Age must be a positive number.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Pet Information Submitted:", pet);
      alert("Pet information submitted successfully!");

      // Reset form
      setPet({
        name: "",
        species: "",
        breed: "",
        age: "",
        notes: "",
      });

      // ✅ Redirect to /pet-owner
      navigate("/pet-owner");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        background: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Pet Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Pet Name */}
        <label>
          Pet Name:*
          <input
            type="text"
            name="name"
            value={pet.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        {errors.name && <p style={errorStyle}>{errors.name}</p>}

        {/* Species */}
        <label>
          Species:*
          <select
            name="species"
            value={pet.species}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </label>
        {errors.species && <p style={errorStyle}>{errors.species}</p>}

        {/* Breed */}
        <label>
          Breed:*
          <input
            type="text"
            name="breed"
            value={pet.breed}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>

        {/* Age */}
        <label>
          Age:*
          <input
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        {errors.age && <p style={errorStyle}>{errors.age}</p>}

        {/* Notes */}
        <label>
          Additional Notes:
          <textarea
            name="notes"
            value={pet.notes}
            onChange={handleChange}
            rows="3"
            style={inputStyle}
          />
        </label>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Styles
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  margin: "8px 0 8px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
  marginTop: "15px",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-8px",
  marginBottom: "10px",
};

export default PetForm;
