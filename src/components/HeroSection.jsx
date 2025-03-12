import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('assets/images/hero.jpg')] bg-cover bg-center h-screen  bg-grey-700 bg-blend-overlay">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-opacity-70"></div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-white text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Explore our vast collection of books, from classics to contemporary
            bestsellers.
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-md mb-8">
            <input
              type="text"
              placeholder="Search for books..."
              className="w-full px-4 py-3 pr-12 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-blue-200"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white">
              <Search size={20} />
            </button>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
              Browse Collection
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
              New Arrivals
            </button>
          </div>

          {/* Welcome panel */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-md w-full">
            <h2 className="text-2xl font-serif font-bold text-center mb-4">
              Welcome to Our Library
            </h2>
            <p className="text-center mb-6">
              Find thousands of books across all genres
            </p>
            <div className="flex justify-center">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
