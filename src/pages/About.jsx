import React, { useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: {
      title: "About Our Library",
      content:
        "Founded in 1925, Reader's Haven Library has been a cornerstone of our community for generations. Housed in a historic building that blends classical architecture with modern amenities, our library serves as both a repository of knowledge and a vibrant community hub. With over 100,000 books and digital resources, we're committed to preserving the past while embracing the future of information access.",
      icon: "",
    },
    mission: {
      title: "Our Mission",
      content:
        "To ignite curiosity, inspire learning, and strengthen our community by providing equal access to diverse materials, innovative technologies, and engaging programs for all ages and backgrounds.",
      icon: "",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be a beacon of discovery where stories come alive, ideas flourish, and community connections deepen. We envision a place where everyone feels welcome to explore, create, and grow together.",
      icon: "",
    },
    hours: {
      title: "Hours of Operation",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Weekdays</h4>
            <p>Monday - Thursday: 9AM - 8PM</p>
            <p>Friday: 10AM - 6PM</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Weekends</h4>
            <p>Saturday: 10AM - 5PM</p>
            <p>Sunday: 12PM - 4PM</p>
          </div>
        </div>
      ),
      icon: "",
    },
  };

  return (
    <PagesLayouts>
      {/* Added pt-16 (or adjust as needed) to provide spacing for the navbar */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 pt-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center pt-6">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4">
              Reader's Haven
            </h1>
            <p className="text-indigo-700 text-xl">Discover. Learn. Connect.</p>
          </header>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap text-center border-b">
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  className={`py-4 px-6 flex-1 transition-colors font-medium ${
                    activeSection === key
                      ? "bg-indigo-100 text-indigo-900 border-b-2 border-indigo-600"
                      : "hover:bg-indigo-50 text-gray-600"
                  }`}
                  onClick={() => setActiveSection(key)}
                >
                  <span className="mr-2">{sections[key].icon}</span>
                  {sections[key].title}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">
                  {sections[activeSection].icon}
                </span>
                <h2 className="text-3xl font-bold text-indigo-900">
                  {sections[activeSection].title}
                </h2>
              </div>
              <div className="text-lg text-gray-700 leading-relaxed">
                {sections[activeSection].content}
              </div>
            </div>
          </div>

          {/* Decorative Book Elements */}
          <div className="flex justify-center mt-12 space-x-2">
            {["📘", "📙", "📗", "📕", "📓"].map((book, index) => (
              <div
                key={index}
                className="text-4xl transform rotate-3 hover:-translate-y-2 transition-transform"
                style={{ transform: `rotate(${(index - 2) * 5}deg)` }}
              >
                {book}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PagesLayouts>
  );
};

export default AboutPage;
