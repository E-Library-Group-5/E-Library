import React from "react";

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
            <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition-colors">
              EXPLORE COLLECTIONS
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-0">
              <div className="flex items-center bg-green-500 text-white p-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">eBooks</div>
                  <div className="text-2xl font-bold">45,780</div>
                </div>
              </div>

              <div className="flex items-center bg-teal-500 text-white p-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.465a5 5 0 001.42 7.072m2.12-9.9a9 9 0 010 12.728"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">eAudio</div>
                  <div className="text-2xl font-bold">32,450</div>
                </div>
              </div>

              <div className="flex items-center bg-red-500 text-white p-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Magazine</div>
                  <div className="text-2xl font-bold">14,450</div>
                </div>
              </div>

              <div className="flex items-center bg-blue-500 text-white p-6">
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Videos</div>
                  <div className="text-2xl font-bold">32,450</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
