import React, { useState } from "react";
import { Trash2, Edit, Search, X, Check, ChevronDown } from "lucide-react";

// BookCard Component
const BookCard = ({ book, onEdit, onDelete }) => {
  // Calculate star rating display
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${
              i < fullStars
                ? "text-yellow-400"
                : i === fullStars && hasHalfStar
                ? "text-yellow-300"
                : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-1 text-xs text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
      <div className="relative">
        <img
          src={book.coverImg}
          alt={`${book.title} cover`}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              book.isAvailable
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {book.isAvailable ? "Available" : "Checked Out"}
          </span>
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
          {book.title}
        </h2>
        <p className="text-xs text-gray-600 mb-1">{book.author}</p>

        <div className="flex justify-between items-center mb-1 mt-auto">
          <span className="text-xs text-gray-500">{book.genre}</span>
          <span className="text-xs text-gray-500">{book.year}</span>
        </div>

        <StarRating rating={book.rating} />

        <div className="mt-2 flex justify-end space-x-1">
          <button
            onClick={() => onEdit(book)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded-full"
            aria-label="Edit book"
          >
            <Edit className="h-4 w-4" />
          </button>

          <button
            onClick={() => onDelete(book.id)}
            className="p-1 text-red-600 hover:bg-red-50 rounded-full"
            aria-label="Delete book"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
