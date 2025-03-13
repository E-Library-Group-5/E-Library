import React, { useEffect, useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import { Trash2, Edit, X, Check } from "lucide-react";
import mockingBird from "../assets/images/Mockingbird.png";
import george1984 from "../assets/images/George.jpg";
import greatGatsby from "../assets/images/GreatGatsby.jpg";
import pridePrejudice from "../assets/images/PrideandPrejudice.jpg";
import theHobbit from "../assets/images/TheHobbit.png";
import theCatcher from "../assets/images/TheCatcher.png";
import lordFlies from "../assets/images/lordFlies.jpg";
import alChemist from "../assets/images/alchemist.jpg";
import bookShelf from "../assets/images/bookshelf.jpg";
import axios from "axios";

// Edit Book Form Component
const EditBookForm = ({ book, onSave, onCancel, onChange }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Edit Book</h3>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Author
        </label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Year
        </label>
        <input
          type="number"
          name="year"
          value={book.year}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Genre
        </label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          step="0.1"
          value={book.rating}
          onChange={onChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-3">
        <label className="flex items-center text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            name="available"
            checked={book.available}
            onChange={onChange}
            className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Available
        </label>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onCancel}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <X className="h-4 w-4 mr-1" />
          Cancel
        </button>
        <button
          onClick={onSave}
          className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <Check className="h-4 w-4 mr-1" />
          Save
        </button>
      </div>
    </div>
  );
};

// Book Details Component
const BookDetails = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={mockingBird}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {book.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close details"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <p className="text-gray-600 text-lg mb-4">{book.author}</p>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
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
              <span className="ml-2 text-gray-600">{book.rating} / 5</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Genre</h3>
                <p>{book.genre}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Year</h3>
                <p>{book.year}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Status</h3>
                <p
                  className={book.available ? "text-green-600" : "text-red-600"}
                >
                  {book.available ? "Available" : "Checked Out"}
                </p>
              </div>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold mb-2">Book Description</h3>
              <p className="text-gray-600">
                {book.description ||
                  "No description available for this book. This would typically include a summary of the plot, themes, and other relevant information about the book."}
              </p>
            </div>

            {book.available && (
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Check Out Book
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Books = () => {
  // Sample book data with fixed IDs
  const [books, setBooks] = useState([]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");

  // State for editing and viewing book details
  const [editingBook, setEditingBook] = useState(null);
  const [viewingBook, setViewingBook] = useState(null);

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

  // Handle book deletion
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await axios.delete(
        `https://library-api-gxyy.onrender.com/api/v1/books/${id}`
      );
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  // Handle book editing
  const handleEdit = (book) => {
    setEditingBook({ ...book });
  };

  // Handle input change in edit form
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditingBook({
      ...editingBook,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle save edits
  const handleSaveEdit = () => {
    setBooks(
      books.map((book) => (book.id === editingBook.id ? editingBook : book))
    );
    setEditingBook(null);
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  // Handle view details
  const handleViewDetails = (book) => {
    setViewingBook(book);
  };

  const getBooks = async () => {
    const response = await axios.get(
      "https://library-api-gxyy.onrender.com/api/v1/books"
    );
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <PagesLayouts>
      {/* Hero Section with background image */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-72">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${bookShelf})` }}
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
                {editingBook && editingBook.id === book.id ? (
                  <EditBookForm
                    book={editingBook}
                    onChange={handleInputChange}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                  />
                ) : (
                  <>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`https://savefiles.org/${book.image}?shareable_link=638`}
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

                      {/* Action buttons */}
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(book)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                            aria-label="Edit book"
                          >
                            <Edit className="h-5 w-5" />
                          </button>

                          <button
                            onClick={() => handleDelete(book.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                            aria-label="Delete book"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleViewDetails(book)}
                          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </>
                )}
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

      {/* Book Details Modal */}
      {viewingBook && (
        <BookDetails book={viewingBook} onClose={() => setViewingBook(null)} />
      )}
    </PagesLayouts>
  );
};

export default Books;
