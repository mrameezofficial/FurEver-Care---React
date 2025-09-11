import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // 👇 Load name from localStorage
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }

    // 👇 Listen for storage changes (auto update)
    const handleStorageChange = () => {
      const updatedName = localStorage.getItem("userName");
      setUserName(updatedName || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col logo">
            <img
              src="../src/assets/furever-care-logo.jpg"
              alt="Logo"
              width="120px"
            />
          </div>

          <div className="col navbar">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/doglist">Doglist</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/adoption">Adoption</Link></li>
                <li><Link to="/breeder">Breeder</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className="col button-header">
            <button type="button" className="button">Adopt Here</button>
          </div>

          {/* 👇 Show logged-in user's name */}
          {userName && (
            <div className="col user-name">
              <span>Welcome, {userName} 👋</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
