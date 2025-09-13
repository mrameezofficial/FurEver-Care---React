import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/furever-care-logo.jpg";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const { category, setCategory } = useAuth(); // 👈 include setCategory from context
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("category");
    navigate("/"); // back to landing
  };

  // 🔹 Handle Role Switching
  const handleRoleSwitch = (newRole) => {
    setCategory(newRole);
    localStorage.setItem("category", newRole);

    // redirect to correct dashboard
    if (newRole === "owner") navigate("/pet-owner");
    if (newRole === "vet") navigate("/vet");
    if (newRole === "shelter") navigate("/shelter");
  };

  // Navigation for Pet Owner
  const PetOwnerNav = () => (
    <>
      <Link to="/pet-owner">Home</Link>
      <Link to="/about">About Us</Link>
      <div className="relative group">
        <button className="cursor-pointer">Pet Care ▾</button>
        <ul className="absolute hidden group-hover:block bg-white border mt-1 py-2 px-4 shadow-md">
          <li><Link to="/pet-profile">Pet Profile</Link></li>
          <li><Link to="/feeding-guide">Feeding Guide</Link></li>
          <li><Link to="/grooming-videos">Grooming Videos</Link></li>
          <li><Link to="/health-tips">Health Tips</Link></li>
          <li><Link to="/training-tips">Training Tips</Link></li>
        </ul>
      </div>
      <Link to="/products">Pet Product Showcase</Link>
      <Link to="/vet-help">Emergency & Vet Help</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/contact">Contact Us</Link>
    </>
  );

  // Navigation for Veterinarian
  const VetNav = () => (
    <>
      <Link to="/vet">Home</Link>
      <Link to="/vet-form-page">Add Profile</Link>
      <Link to="/vet-profile-page">My Profile</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/cases">Case Studies</Link>
      <Link to="/contact">Contact Us</Link>
    </>
  );

  // Navigation for Shelter
  const ShelterNav = () => (
    <>
      <Link to="/shelter">Home</Link>
      <Link to="/shelter-animals">Available Animals</Link>
      <Link to="/shelter-form">Register Animal</Link>
      <Link to="/events">Adoption Events</Link>
      <Link to="/contact">Contact Us</Link>
    </>
  );

  const renderNav = () => {
    switch (category) {
      case "owner":
        return <PetOwnerNav />;
      case "vet":
        return <VetNav />;
      case "shelter":
        return <ShelterNav />;
      default:
        return <PetOwnerNav />; // fallback
    }
  };

  // 🔹 Role Switcher Dropdown
  const roleLabels = {
    owner: "Pet Owner",
    vet: "Veterinarian",
    shelter: "Animal Shelter"
  };

  const otherRoles = ["owner", "vet", "shelter"].filter((r) => r !== category);

  return (
    <header className="bg-white shadow-md relative z-50 header-sec">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to={category ? `/${category}` : "/"}>
          <img src={logo} alt="FurEver Care Logo" className="w-28" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center header-nav">
          {renderNav()}
        </nav>

        <div className="header-btn-col flex items-center gap-4">
          {/* 🔹 Role Switcher */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => handleRoleSwitch(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value={category}>{roleLabels[category]}</option>
              {otherRoles.map((role) => (
                <option key={role} value={role}>
                  {roleLabels[role]}
                </option>
              ))}
            </select>
          </div>

          {/* Welcome Text */}
          <span className="ml-2 font-semibold text-blue-700 welcome-user">
            Welcome, {userName || "Guest"}
          </span>

          {/* Logout */}
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
