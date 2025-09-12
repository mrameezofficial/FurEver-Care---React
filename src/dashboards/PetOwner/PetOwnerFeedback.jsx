import React from "react";
import Hero from "../../ components/Hero";

const PetOwnerFeedback = () => {
  // Prevent numeric input in name fields
  const blockNumbers = (e) => {
    if (/\d/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <Hero pageTitle="We’d Love Your Feedback!" />

      <section className="pet-owner-section feedback-section">
        <div className="container">
          <div className="row">
            <form action="" className="feedback-form">
              {/* Full Name */}
              <div className="flex gap-6 form-row">
                <div className="mb-4 w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="firstName"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full border rounded-md px-3 py-2"
                    onKeyDown={blockNumbers}
                    required
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="lastName"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full border rounded-md px-3 py-2"
                    onKeyDown={blockNumbers}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-row mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full border rounded-md px-3 py-2"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-row mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded-md px-3 py-2"
                  placeholder="Tell us more..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="feedback-submit-btn bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetOwnerFeedback;
