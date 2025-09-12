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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi!5e0!3m2!1sen!2s!4v1757654665768!5m2!1sen!2s"
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
