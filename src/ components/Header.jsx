import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/furever-care-logo.jpg";
import VisitorCounter from "./visitorcounter";
import RealTimeClock from "./clock";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const auth = useAuth();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      {/* Topbar */}
      <div className="topbar bg-gray-100 py-2 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md relative z-50 header-sec">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="FurEver Care Logo" className="w-28" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center header-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>

            <div className="relative group">
              <button className="cursor-pointer">Pet Care Sections ▾</button>
              <ul className="absolute hidden group-hover:block bg-white border mt-1 py-2 px-4 shadow-md">
                <li>
                  <Link to="/pet-profile" className="block py-1">
                    Pet Profile
                  </Link>
                </li>
                <li>
                  <Link to="/feeding-guide" className="block py-1">
                    Feeding Guide
                  </Link>
                </li>
                <li>
                  <Link to="/grooming-videos" className="block py-1">
                    Grooming Videos
                  </Link>
                </li>
                <li>
                  <Link to="/health-tips" className="block py-1">
                    Health Tips
                  </Link>
                </li>
                <li>
                  <Link to="/training-tips" className="block py-1">
                    Training Tips
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <button className="cursor-pointer">
                <Link to="/products">Pet Product Showcase ▾</Link>
              </button>
              <ul className="absolute hidden group-hover:block bg-white border mt-1 py-2 px-4 shadow-md">
                <li>
                  <Link to="/products?category=Dog%2FCat%20Food" className="block py-1">
                    Dog/Cat Food
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Toys" className="block py-1">
                    Toys
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Grooming%20Essentials" className="block py-1">
                    Grooming Essentials
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Bedding%20and%20Apparel" className="block py-1">
                    Bedding & Apparel
                  </Link>
                </li>
                <li>
                  <Link to="/products?category=Health%20Supplements" className="block py-1">
                    Health Supplements
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/vet-help">Emergency & Vet Help</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          <div className="header-btn-col">
            <span className="ml-4 font-semibold text-blue-700 welcome-user">
              Welcome, {auth?.userName || userName}
            </span>
            <button
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="logout-btn"
            >
              Logout
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Hamburger (Mobile) */}
        </div>

        {/* Off-canvas Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeMenu}
          >
            <div
              className="bg-white w-72 h-full p-6 absolute top-0 left-0 overflow-y-auto shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <img src={logo} alt="FurEver Logo" className="w-20" />
                <button onClick={closeMenu} className="text-xl">
                  ✕
                </button>
              </div>
              <div className="space-y-4 mobile-menu">
                <div className="text-blue-600 font-semibold">
                  Welcome, {auth?.userName || userName}
                </div>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>
                <details>
                  <summary className="cursor-pointer">
                    Pet Care Sections ▾
                  </summary>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <Link to="/pet-profile" onClick={closeMenu}>
                        Pet Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/feeding-guide" onClick={closeMenu}>
                        Feeding Guide
                      </Link>
                    </li>
                    <li>
                      <Link to="/grooming-videos" onClick={closeMenu}>
                        Grooming Videos
                      </Link>
                    </li>
                    <li>
                      <Link to="/health-tips" onClick={closeMenu}>
                        Health Tips
                      </Link>
                    </li>
                    <li>
                      <Link to="/training-tips" onClick={closeMenu}>
                        Training Tips
                      </Link>
                    </li>
                  </ul>
                </details>
                <details>
                  <summary className="cursor-pointer">
                    Pet Product Showcase ▾
                  </summary>
                  <ul className="ml-4 mt-2 space-y-1">
                    <li>
                      <Link to="/product/dog-cat-food" onClick={closeMenu}>
                        Dog/Cat Food
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/toys" onClick={closeMenu}>
                        Toys
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/grooming" onClick={closeMenu}>
                        Grooming Essentials
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/bedding" onClick={closeMenu}>
                        Bedding & Apparel
                      </Link>
                    </li>
                    <li>
                      <Link to="/product/health" onClick={closeMenu}>
                        Health Supplements
                      </Link>
                    </li>
                  </ul>
                </details>
                <Link to="/vet-help" onClick={closeMenu}>
                  Emergency & Vet Help
                </Link>
                <Link to="/feedback" onClick={closeMenu}>
                  Feedback
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                  Contact Us
                </Link>
                
                <button
                  onClick={() => {
                    closeMenu();
                    handleLogout();
                  }}
                  className="block w-full mt-2 bg-red-500 text-white text-center py-2 rounded"
                >
                  Logout
                </button>{" "}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
