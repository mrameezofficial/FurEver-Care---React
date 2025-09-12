import React from "react";
import Team from "./TeamData";

const ContactUs = () => {
    return (
        <div className="ct-main-body">
            {/* Breadcrumb Section */}
            <section className="breadcrumps-section">
                <div className="containers">
                    <div className="main-hd">
                        <div>
                            <div className="breadcrumps-content">
                                <h2 className="title">Contact us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-team-dt">
                <Team />
            </section>
            {/* Contact Section */}
            <section>
                <div className="main-hd">
                    {/* Left Column */}
                    <div className="col-1">
                        <div className="contact-title">
                            <h5 className="sub-title">Contact Us</h5>
                            <h2 className="titles">
                                Let's Talk Question<span className="exclimation">.</span>
                            </h2>
                        </div>

                        <div className="contact-wrap-content">
                            <p>
                                The domestic dog is a doiated dendant of the wolf. The dog
                                derived from an ancient, extinct wolf, and the modern grey.
                            </p>

                            <form className="contact-form">
                                <div className="form-grp">
                                    <label className="form-label" htmlFor="name">
                                        Your Name <span className="exclimation">*</span>
                                    </label>
                                    <input type="text" id="name" placeholder="Jon Deo..." />
                                </div>

                                <div className="form-grp">
                                    <label className="form-label" htmlFor="email">
                                        Your Email <span className="exclimation">*</span>
                                    </label>
                                    <input type="email" id="email" placeholder="info.example@.com" />
                                </div>

                                <div className="form-grp">
                                    <label className="form-label" htmlFor="message">
                                        Your Message <span className="exclimation">*</span>
                                    </label>
                                    <textarea id="message" placeholder="Opinion..."></textarea>
                                </div>

                                <div className="form-grp checkbox-grp">
                                    <input type="checkbox" id="checkbox" />
                                    <label className="email-adress" htmlFor="checkbox">
                                        Don’t show your email address
                                    </label>
                                </div>

                                <button type="button" className="btn rounded-btn">
                                    Send Now
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-2">
                        <div className="contact-info-wrap">
                            <div className="contact-img">
                                <img src="../public/contact_img.png" alt="Contact Illustration" />
                            </div>

                            <div>
                                <ul className="contact-info-list">
                                    <li>
                                        <div className="contact-icons">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="content">
                                            <p>W84 New Park Lan, New York, NY 4586 United States</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icons">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="content">
                                            <p>+9 (256) 254 9568</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-icons">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="content">
                                            <p>Contact@ info.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact-social">
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            aria-label="Facebook"
                                            className="social-icon facebook"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            aria-label="Instagram"
                                            className="social-icon instagram"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            aria-label="LinkedIn"
                                            className="social-icon linkedin"
                                        >
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
