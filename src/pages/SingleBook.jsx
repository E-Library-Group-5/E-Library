import React, { useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import narNia from "../assets/images/narnia.jpg";
import reView1 from "../assets/images/review1.jpg";
import reView2 from "../assets/images/review2.jpg";
import reView3 from "../assets/images/review3.jpg";

const SingleBook = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [reviews] = useState([
    {
      id: 1,
      username: "Nick Perry",
      occupation: "web developer",
      avatar: "/api/placeholder/60/60",
      content:
        "Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.",
    },
    {
      id: 2,
      username: "Jeffrey Marfo",
      occupation: "Musician",
      avatar: "/api/placeholder/60/60",
      content:
        "Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer.",
    },
    {
      id: 3,
      username: "Micheal Hammond",
      occupation: "Teacher",
      avatar: "/api/placeholder/60/60",
      content:
        "Sportsman delighted improving dashwoods gay instantly happiness six. Ham now amounted absolute not mistaken way pleasant whatever. At an these still no dried folly stood thing.",
    },
  ]);

  const book = {
    title: "The Chronicles of Narnia",
    author: "Clive Staples Lewis",
    coverImage: narNia,
    summary:
      "The story begins with young Digory Kirk and his friend Polly accidentally traveling first to the world of Charn and then to Narnia with the aid of Digory's uncle's magic rings. The two accidentally bring Jadis, a villain responsible for the demise of Charn, to Narnia to witness Aslan, the Great Lion and God of Narnia, singing the land into existence. Jadis escapes into the world, vowing to rule it one day and destroy Aslan. Digory must travel to find a magical fruit to save his mother's life; having completed that task, he eventually buries the rings near his home on Earth. A tree grows where they were buried, and it is used to create a wardrobe.",
    fileName: "the_chronicles_of_narnia.pdf",
  };

  const handleDownload = () => {
    // In a real app, this would initiate a file download
    // For demonstration, we'll just show an alert
    alert(`Downloading ${book.fileName}`);

    // For a real implementation, you could use:
    // const link = document.createElement('a');
    // link.href = `/books/${book.fileName}`;
    // link.download = book.fileName;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you would save this state to localStorage or a database
    if (!isBookmarked) {
      alert(`"${book.title}" has been added to your bookmarks!`);
    } else {
      alert(`"${book.title}" has been removed from your bookmarks!`);
    }
  };

  return (
    <PagesLayouts>
      <section className="pt-20 mb-20 px-4">
        <div className="max-w-4xl mx-auto p-4 bg-white font-sans">
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
              <span className="ml-2">Back to Books</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Book Cover */}
            <div className="bg-gray-100 border p-4 flex-shrink-0 self-start">
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                className="w-48 h-64 md:h-64 mx-auto object-cover"
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
                  className={`p-2 rounded-full ${
                    isBookmarked ? "text-blue-500" : "text-gray-400"
                  }`}
                  onClick={toggleBookmark}
                  aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
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

              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center"
                  onClick={handleDownload}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                      fill="currentColor"
                    />
                  </svg>
                  Download Book
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-6">Reviews</h2>

            {/* Reviews Grid - 3 columns in one row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-gray-100 rounded-xl p-6 relative overflow-hidden shadow-sm"
                  style={{
                    background: "linear-gradient(to right, #f3f4f6, #e5e7eb)",
                  }}
                >
                  <div className="flex items-start">
                    {/* Avatar */}
                    <div className="mr-4">
                      <img
                        src={reView1}
                        alt={`${review.username}'s avatar`}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    {/* Review content */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-lg font-medium text-blue-600">
                          {review.username}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {review.occupation}
                        </p>
                      </div>

                      <p className="text-gray-700 text-sm">{review.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PagesLayouts>
  );
};

export default SingleBook;
