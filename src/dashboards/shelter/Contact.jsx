import React from "react";

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-2">📧 contact@animalshelter.org</p>
        <p className="text-gray-700 mb-4">📞 +123 456 7890</p>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
          className="w-full h-64 rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
