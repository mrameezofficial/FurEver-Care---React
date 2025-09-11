import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Headernew() {
  const [userName, setUserName] = useState("");
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    // Get stored name when header loads
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          
          {/* Logo */}
          <div className="col logo">
            <Link to="/">
              <img
                src="../src/assets/furever-care-logo.jpg"
                alt="Logo"
                width="120px"
              />
            </Link>
          </div>

          {/* Navbar */}
          <div className="col navbar">
            <nav>
              <ul>
                {/* About Us */}
                <li
                  onMouseEnter={() => toggleSubmenu("about")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  <Link to="/about">About Us</Link>
                  {activeSubmenu === "about" && (
                    <ul className="submenu">
                      <li><Link to="/about">About the team</Link></li>
                    </ul>
                  )}
                </li>

                {/* Pet Care Sections */}
                <li
                  onMouseEnter={() => toggleSubmenu("care")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  <span>Pet Care Sections</span>
                  {activeSubmenu === "care" && (
                    <ul className="submenu">
                      <li><Link to="/pet-profile">Pet Profile</Link></li>
                      <li><Link to="/feeding-guide">Feeding Guide</Link></li>
                      <li><Link to="/grooming-videos">Grooming Videos</Link></li>
                      <li><Link to="/health-tips">Health Tips</Link></li>
                      <li><Link to="/training-tips">Training Tips</Link></li>
                    </ul>
                  )}
                </li>

                {/* Pet Product Showcase */}
                <li
                  onMouseEnter={() => toggleSubmenu("products")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  <span>Pet Product Showcase</span>
                  {activeSubmenu === "products" && (
                    <ul className="submenu">
                      <li><Link to="/food">Dog/Cat Food</Link></li>
                      <li><Link to="/toys">Toys</Link></li>
                      <li><Link to="/essentials">Grooming Essentials</Link></li>
                      <li><Link to="/bedding">Bedding & Apparel</Link></li>
                      <li><Link to="/supplements">Health Supplements</Link></li>
                    </ul>
                  )}
                </li>

                {/* Emergency and Vet Help */}
                <li
                  onMouseEnter={() => toggleSubmenu("emergency")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  <span>Emergency & Vet Help</span>
                  {activeSubmenu === "emergency" && (
                    <ul className="submenu">
                      <li>Emergency contact numbers</li>
                      <li>Hard-coded table data</li>
                    </ul>
                  )}
                </li>

                {/* Feedback Page */}
                <li>
                  <Link to="/feedback">Feedback Page</Link>
                </li>

                {/* Contact Us */}
                <li
                  onMouseEnter={() => toggleSubmenu("contact")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  <Link to="/contact">Contact Us</Link>
                  {activeSubmenu === "contact" && (
                    <ul className="submenu">
                      <li>Static team contact information</li>
                      <li>Real-time clock</li>
                      <li>Geolocation display</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>

          {/* Username Display */}
          {userName && (
            <div className="col user-name">
              <span>Welcome, {userName}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
