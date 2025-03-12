import React, { useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";

const Books = () => {
  // Sample book data
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "/api/placeholder/200/300",
      genre: "Fiction",
      year: 1960,
      available: true,
      rating: 4.8,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "/api/placeholder/200/300",
      genre: "Science Fiction",
      year: 1949,
      available: true,
      rating: 4.7,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "/api/placeholder/200/300",
      genre: "Fiction",
      year: 1925,
      available: false,
      rating: 4.5,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "/api/placeholder/200/300",
      genre: "Romance",
      year: 1813,
      available: true,
      rating: 4.6,
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "/api/placeholder/200/300",
      genre: "Fantasy",
      year: 1937,
      available: true,
      rating: 4.9,
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "/api/placeholder/200/300",
      genre: "Fiction",
      year: 1951,
      available: false,
      rating: 4.3,
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "/api/placeholder/200/300",
      genre: "Fiction",
      year: 1951,
      available: false,
      rating: 4.3,
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "/api/placeholder/200/300",
      genre: "Fiction",
      year: 1951,
      available: false,
      rating: 4.3,
    },
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");

  // Get unique genres for filter
  const genres = ["All", ...new Set(books.map((book) => book.genre))];

  // Filter books based on search term and genre
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === "All" || book.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  return (
    <PagesLayouts>
      {/* Hero Section with background image */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-72">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-4xl">
                  Library Collection
                </h1>
                <p className="mt-4 text-lg text-gray-200">
                  Explore our collection of classic and contemporary literature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/4">
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-0 right-0 m-2 px-2 py-1 rounded-full text-xs font-bold ${
                      book.available
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {book.available ? "Available" : "Checked Out"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 truncate">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{book.genre}</span>
                    <span>{book.year}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(book.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">
                      {book.rating}
                    </span>
                  </div>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No books found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </PagesLayouts>
  );
};

export default Books;
