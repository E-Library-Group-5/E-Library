import React from "react";
import { Link } from "react-router-dom"; // Add this import

const EventsAndPrograms = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-16 container mx-auto px-4">
      {/* Left Content - Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800">
          EVENTS AND PROGRAMS
        </h2>
        <div className="w-20 h-1 bg-blue-600 my-4"></div>

        <p className="text-gray-600 mb-4">
          Join us for exciting events, workshops, and programs throughout the
          year.
        </p>

        <p className="text-gray-700 mb-6">
          Our library hosts a variety of programs for all ages and interests.
          From author talks and book clubs to children's storytime, technology
          workshops, and community gatherings. There's something for everyone to
          learn, create, and enjoy.
        </p>

        {/* Replace button with Link component */}
        <Link
          to="/eventspage"
          className="inline-block px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors uppercase"
        >
          View All Events
        </Link>
      </div>

      {/* Right Content - Featured Events */}
      <div className="w-full md:w-1/2">
        {/* Rest of your code remains the same */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="/api/placeholder/600/400"
            alt="Library event with people engaged in a workshop"
            className="w-full h-auto"
          />
          <div className="p-4 bg-blue-50">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upcoming Featured Events
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-1">
                  MAR 15
                </span>
                <span>Children's Story Time - 10:00 AM</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-1">
                  MAR 18
                </span>
                <span>Digital Literacy Workshop - 2:00 PM</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-2 mt-1">
                  MAR 20
                </span>
                <span>Author Talk: Margaret Atwood - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndPrograms;
