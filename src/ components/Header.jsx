import { Link } from "react-router-dom";
import PetOwnerHome from "../dashboards/PetOwner/PetOwnerHome";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const {name} = useAuth();
  return (
    <div className="header">
      <div className="container">
      <div className="row">
        <div className="col logo">
          <Link to="/">
          <img src="../src/assets/furever-care-logo.jpg" alt="Logo" width="120px" />
          </Link>
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
  );
}
