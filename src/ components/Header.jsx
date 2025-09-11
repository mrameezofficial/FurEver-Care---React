import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
      <div className="row">
        <div className="col logo">
          <img src="../src/assets/furever-care-logo.jpg" alt="Logo" width="120px" />
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
      </div>
    </div>
    </div>
  );
}
