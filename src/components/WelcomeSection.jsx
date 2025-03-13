import React from "react";
import { Link } from "react-router-dom";
import welcomeImage from "../assets/images/Welcome.jpg";

const WelcomeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              WELCOME TO THE LIBRARY
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-gray-600 mb-4">
              Your gateway to knowledge, imagination, and community resources.
            </p>
            <p className="text-gray-700 mb-6">
              Our library offers a vast collection of books, e-books,
              audiobooks, magazines, and videos for all ages. Whether you're
              researching for school, looking for your next great read, or
              seeking community events, we're here to help you discover, learn,
              and grow.
            </p>
            <Link
              to="/books"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors inline-block"
            >
              EXPLORE COLLECTIONS
            </Link>
          </div>

          {/* Right Content - Welcome Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg ">
              <img
                src={welcomeImage}
                alt="Welcome to our library"
                className="w-full h-auto"
              />
              <div className="p-4 bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Discover Your Next Adventure
                </h3>
                <p className="text-gray-600">
                  Our library is a place where stories come to life and
                  knowledge knows no bounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
