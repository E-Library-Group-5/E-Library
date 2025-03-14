import React, { useState, useEffect } from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally connect to your backend
    console.log("Form submitted:", formData);
    setFormStatus("success");
    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contactMethods = [
    {
      title: "Call Us",
      details: "(555) 123-4567",
      description: "Available Monday-Friday, 9AM-5PM",
    },
    {
      title: "Email",
      details: "contact@readershaven.org",
      description: "We'll respond within 24 hours",
    },
    {
      title: "Visit",
      details: "123 Book Lane, Literary City",
      description: "See our hours on the About page",
    },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  // Map configuration
  const mapCenter = {
    lat: 40.712776, // Replace with your library's actual coordinates
    lng: -74.005974, // Replace with your library's actual coordinates
  };

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "0.5rem",
  };

  const onMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <PagesLayouts>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 pt-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center pt-6">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">
              Contact Reader's Haven
            </h1>
            <p className="text-indigo-700 text-xl">
              We'd love to hear from you
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="pb-4 mb-2">
                    <h3 className="font-medium text-xl text-indigo-800 mb-1">
                      {method.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700">
                      {method.details}
                    </p>
                    <p className="text-gray-500">{method.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4">
                <h3 className="font-medium text-xl text-indigo-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Send a Message
              </h2>

              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership</option>
                    <option value="events">Programs & Events</option>
                    <option value="donations">Donations & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6">Find Us</h2>

            <LoadScript
              googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
              onLoad={() => console.log("Google Maps loaded")}
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={15}
                onLoad={onMapLoad}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>

            <div className="mt-6 text-gray-700">
              <p className="mb-2">
                <strong>Reader's Haven Library</strong>
              </p>
              <p>123 Book Lane</p>
              <p>Literary City, STATE 12345</p>
              <p className="mt-4">
                Accessible entrance available on east side of building.
              </p>
              <p>Free parking available in the lot behind the library.</p>
            </div>
          </div>

          {/* Removed decorative book elements for cleaner look */}
        </div>
      </div>
    </PagesLayouts>
  );
};

export default ContactPage;
