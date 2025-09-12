import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-ftr">
      <div className="footer-bg">
        <div className="footer-container">
          <div className="row justify-content-between">
            {/* Column 1 */}
            <div className="col-3">
              <div className="footer-widget">
                <div className="footer-text">
                  <img src="../../src/assets/furever-care-logo.png" width="160px" />
                  <p>
                    
                  </p>
                </div>
                {/* <div className="footer-contact">
                  <div className="footer-icon">
                    <i className="fas fa-headphones"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="tel:0987654321">747-800-9880</a>
                    </h4>
                    <span className="contact-span">Call Now</span>
                  </div>
                </div> */}
                <div className="footer-social">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-2">
              <div className="footer-widget">
                <h4 className="fw-title">Our Policies</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/contacts">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Editorial Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">IP Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Grievance Redressal Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Our Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-2">
              <div className="footer-widget">
                <h4 className="fw-title">Our Services</h4>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/breeder">Our Breeder</Link>
                    </li>
                    <li>
                      <Link to="/adoption">Our Adoption</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Editorial Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Return Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Grievance Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Redressal Policy</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-3">
              <div className="footer-widget">
                <h4 className="fw-title">Locate Us</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="Copyright-container">
          <div className="copyright-area-rows">
            <div className="col-8">
              <div className="copyright-text">
                <p>Copyright © 2022 FurEver Care. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
