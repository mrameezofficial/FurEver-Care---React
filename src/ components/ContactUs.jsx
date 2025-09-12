import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value
    }));
  };

  const handleNameKeyDown = (e) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Form submitted successfully!");
      // submit logic here
    }
  };

  return (
    <div className="ct-main-body">
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
              <form className="contact-form" noValidate>
                <div className="form-grp">
                  <label className="form-label" htmlFor="name">
                    Your Name <span className="exclimation">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jon Deo..."
                    value={formData.name}
                    onChange={handleChange}
                    onKeyDown={handleNameKeyDown}
                  />
                  {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                </div>

                <div className="form-grp">
                  <label className="form-label" htmlFor="email">
                    Your Email <span className="exclimation">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="info.example@.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                </div>

                <div className="form-grp">
                  <label className="form-label" htmlFor="message">
                    Your Message <span className="exclimation">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Opinion..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}
                </div>

                <div className="form-grp checkbox-grp">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={formData.checkbox}
                    onChange={handleChange}
                  />
                  <label className="email-adress" htmlFor="checkbox">
                    Don’t show your email address
                  </label>
                </div>

                <button type="button" className="btn rounded-btn" onClick={handleSubmit}>
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
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="content">
                      <p>W84 New Park Lan, New York, NY 4586 United States</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icons">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="content">
                      <p>+9 (256) 254 9568</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icons">
                      <FontAwesomeIcon icon={faEnvelopeOpen} />
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
                    <a href="#" aria-label="Facebook" className="social-icon facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Instagram" className="social-icon instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="LinkedIn" className="social-icon linkedin">
                      <FontAwesomeIcon icon={faLinkedinIn} />
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