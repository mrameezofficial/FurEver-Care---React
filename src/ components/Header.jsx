import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/furever-care-logo.jpg";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Get stored name when header loads
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div>
    <div className="header">  
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col logo">
            <Link to="/">
              <img src={logo} alt="FurEver Care Logo" width="120px" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="col navbar">
            <nav>
              <ul className="main-nav">
                <li><Link to="/">Home</Link></li>

                <li><Link to="/about">About Us</Link></li>

                {/* Pet Care Sections Dropdown */}
                <li className="dropdown">
                  <span>Pet Care Sections ▾</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/pet-profile">Pet Profile</Link></li>
                    <li><Link to="/feeding-guide">Feeding Guide</Link></li>
                    <li><Link to="/grooming-videos">Grooming Videos</Link></li>
                    <li><Link to="/health-tips">Health Tips</Link></li>
                    <li><Link to="/training-tips">Training Tips</Link></li>
                  </ul>
                </li>

                {/* Product Showcase Dropdown */}
                <li className="dropdown">
                  <span>Pet Product Showcase ▾</span>
                  <ul className="dropdown-menu">
                    <li><Link to="/product/dog-cat-food">Dog/Cat Food</Link></li>
                    <li><Link to="/product/toys">Toys</Link></li>
                    <li><Link to="/product/grooming">Grooming Essentials</Link></li>
                    <li><Link to="/product/bedding">Bedding & Apparel</Link></li>
                    <li><Link to="/product/health">Health Supplements</Link></li>
                  </ul>
                </li>

                <li><Link to="/vet-help">Emergency & Vet Help</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </nav>
          </div>

          {/* User Greeting & CTA */}
          {userName && (
            <div className="col user-name">
              <span>Welcome, {userName}</span>
            </div>
          )}

          <div className="col header-col">
          <Link to="/" type="button" className="button">Adopt Here</Link>
          <div className="profile-greeting">
            <h4 className="profile-greet">Welcome!</h4>
            <h3 className="profile-name">{name}</h3>
          </div>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}
