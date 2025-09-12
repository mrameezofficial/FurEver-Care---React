import React from "react";

export default function AboutUs() {
  return (
    <>
      {/* Slider Section */}
      <section className="about-slider">
        <div id="carouselExample" className="about-carousel slide">
          <div className="about-carousel-inner">
            <div className="about-carousel-item active about-slid">
              <img
                src="../public/breadcrumb_bg.jpg "
                className="about-d-block about-w-100 "
                alt="Slider"
              />
            </div>
          </div>
        </div>
        <div className="about-caption">
          <h1>Get Adoption</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-row">
            <div className="about-col about-hero-heading">
              <h1>Meet Adoption</h1>
              <h2>
                Work For <span style={{ color: "red" }}>Adoption</span> Happy
                Time
              </h2>
              <p>
                The best overall dog DNA test is Embark Breed & Health Kit view
                at Chewy which pres domesti dog is a sticated descendant.
              </p>
              <div className="about-ui">
                <p>The domestic dog is a domesticated</p>
                <p>Embark Breed & Health</p>
              </div>
            </div>

            <div className="about-col about-side-img">
              <img src="../public/side.jpg" alt="Side" />
            </div>

            <div className="about-col about-right">
              <div className="about-col about-inner-right">
                <p>| Dog Adoption</p>
                <h1>Available for Adoption</h1>
                <p>
                  The best overall dog DNA test is Embark Breed & Health Kit
                  (view at Chewy), which provid dogs
                </p>
                <div className="about-right-button">
                  <button type="button" className="about-button-right">
                    Adopt Here
                  </button>
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
              <h1>75%</h1>
              <p>dogs are first bred</p>
            </div>

            <div className="about-col about-c1">
              <h1>259+</h1>
              <p>Most dogs are first</p>
            </div>

            <div className="about-col about-c1">
              <h1>39k</h1>
              <p>Dog Breeding</p>
            </div>

            <div className="about-col about-c1">
              <h1>45+</h1>
              <p>Years Of History</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
