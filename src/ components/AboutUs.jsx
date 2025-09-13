import React from "react";
import { Link } from "react-router";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-row">
            <div className="about-col about-hero-heading">
              <h1>Meet FurEver Care</h1>
              <h2>Happy Moments Start Here</h2>
              <p>
                The best overall dog DNA test is Embark Breed & Health Kit. At
                FurEver Care, we believe every pet deserves a loving home and
                proper care.
              </p>
            </div>

            <div className="about-col about-side-img">
              <img src="../public/side.jpg" alt="Side" />
            </div>

            <div className="about-col about-right">
              <div className=" about-inner-right">
                <h1>Available Through FurEver Care</h1>
                <p>
                  Explore trusted profiles of pets looking for a lifetime of
                  love. FurEver Care ensures all companions are health-checked
                  and ready for a new beginning.
                </p>
                <div className="about-right-button">
                  <Link to="/contact" className="about-button-right">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client / Stats Section */}
      <section className="about-client">
        <div className="about-container">
          <div className="about-row">
            <div className="about-col about-c1">
              <h1>7 Days</h1>
              <p>Pets placed within 7 days</p>
            </div>

            <div className="about-col about-c1">
              <h1>300+</h1>
              <p>Families trust FurEver Care</p>
            </div>

            <div className="about-col about-c1">
              <h1>50k</h1>
              <p>Happy tails and lifelong bonds</p>
            </div>

            <div className="about-col about-c1">
              <h1>25+</h1>
              <p>Years of animal wellness support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
