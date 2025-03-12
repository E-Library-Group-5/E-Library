import React, { useState } from "react";
import isBookmarked from "react";
const SingleBookPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const book = {
    title: "The Chronicles of Narnia",
    coverImage: "assets/images/narnia.jpg",
  };
};

const book = {
  title: "The Chronicles of Narnia",
  author: "Clive Staples Lewis",
  coverImage: "/api/placeholder/200/300",
  summary:
    "The story begins with young Digory Kirk and his friend Polly accidentally traveling first to the world of Charn and then to Narnia with the aid of Digory's uncle's magic rings. The two accidentally bring Jadis, a villain responsible for the demise of Charn, to Narnia to witness Aslan, the Great Lion and God of Narnia, singing the land into existence. Jadis escapes into the world, vowing to rule it one day and destroy Aslan. Digory must travel to find a magical fruit to save his mother's life; having completed that task, he eventually buries the rings near his home on Earth. A tree grows where they were buried, and it is used to create a wardrobe.",
  price: "87.75 $",
};

export const SingleBook = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto p-4 bg-white font-sans">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="text-blue-700 ">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex-1 ml-24">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 w-full max-w-xs bg-gray-100 rounded-lg text-sm focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                fill="currentColor"
              />
            </svg>
            <span className="ml-2">Book Details</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Book Cover */}
          <div className="bg-gray-100 border p-4 flex-shrink-0 self-start">
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              className="w-48 h-[300px] mx-auto"
            />
          </div>

          {/* Book Info */}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {book.title}
                </h1>
                <p className="text-gray-600">{book.author}</p>
              </div>
              <button
                className={`p-2 rounded-full ${isBookmarked} 'text-blue-500' : 'text-gray-400'}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z"
                    fill={isBookmarked ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Summary</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {book.summary}
              </p>
            </div>

            <div className="flex mt-8 items-center justify-between">
              <div className="text-xl font-bold text-gray-900">
                {book.price}
              </div>
              <button className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleBook;
