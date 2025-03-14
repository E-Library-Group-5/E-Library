import React, { useState } from "react";
import PagesLayouts from "../layouts/PagesLayouts";
import eveNts1 from "../assets/images/event1.jpg";
import eveNts2 from "../assets/images/event2.jpg";
import eveNts3 from "../assets/images/event3.jpg";
import eveNts4 from "../assets/images/event4.jpg";
import eveNts5 from "../assets/images/event5.jpg";
import eveNts6 from "../assets/images/event6.jpg";

const EventsPage = () => {
  // Sample upcoming events data
  const [events] = useState([
    {
      id: 1,
      title: "Author Talk: Margaret Atwood",
      date: "March 20, 2025",
      time: "6:00 PM - 7:30 PM",
      location: "Main Reading Room",
      category: "Author Event",
      image: eveNts1,
      description:
        "Join us for an evening with acclaimed author Margaret Atwood as she discusses her latest novel and answers questions from the audience. Book signing to follow.",
    },
    {
      id: 2,
      title: "Children's Story Time",
      date: "March 15, 2025",
      time: "10:00 AM - 11:00 AM",
      location: "Children's Section",
      category: "Children",
      image: eveNts2,
      description:
        "Weekly storytime for children ages 3-7. Join us for stories, songs, and crafts designed to encourage early literacy skills and a love of reading.",
    },
    {
      id: 3,
      title: "Digital Literacy Workshop",
      date: "March 18, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Lab",
      category: "Workshop",
      image: eveNts3,
      description:
        "Learn essential computer skills including email basics, internet safety, and using online resources. Perfect for beginners and seniors looking to build confidence with technology.",
    },
    {
      id: 4,
      title: "Book Club: Science Fiction Classics",
      date: "March 25, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Discussion Room B",
      category: "Book Club",
      image: eveNts4,
      description:
        "This month we're discussing 'Dune' by Frank Herbert. New members always welcome! Refreshments provided.",
    },
    {
      id: 5,
      title: "Resume Writing Workshop",
      date: "March 22, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Meeting Room A",
      category: "Workshop",
      image: eveNts5,
      description:
        "Learn how to craft effective resumes and cover letters. Bring your current resume for personalized feedback from career professionals.",
    },
    {
      id: 6,
      title: "Teen Movie Night",
      date: "March 29, 2025",
      time: "6:00 PM - 8:30 PM",
      location: "Community Room",
      category: "Teen",
      image: eveNts6,
      description:
        "Join us for a screening of a popular teen movie adaptation. Pizza and snacks will be provided. For ages 13-18.",
    },
  ]);

  // Filter state and categories
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'calendar'

  // Extract unique categories
  const categories = ["All", ...new Set(events.map((event) => event.category))];

  // Filter events based on category and search term
  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      activeFilter === "All" || event.category === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Function to parse date strings into Date objects
  const parseEventDate = (dateStr, timeStr) => {
    const [month, day, year] = dateStr.split(" ");
    const datePart = `${month} ${day.replace(",", "")} ${year}`;

    // Parse the time range and get the start time
    const startTime = timeStr.split(" - ")[0];
    const dateTimeStr = `${datePart} ${startTime}`;

    return new Date(dateTimeStr);
  };

  // Function to generate calendar days for the current month
  const generateCalendarDays = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Create array of day objects
    const days = [];

    // Add empty slots for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: null, events: [] });
    }

    // Add all days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      // Find events for this day
      const dayEvents = events.filter((event) => {
        const eventDate = parseEventDate(event.date, event.time);
        return (
          eventDate.getDate() === day &&
          eventDate.getMonth() === month &&
          eventDate.getFullYear() === year
        );
      });

      days.push({
        day,
        events: dayEvents,
        isToday:
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear(),
      });
    }

    return days;
  };

  // Function to create and download an iCalendar file
  const addToCalendar = (event) => {
    // Parse event date and time
    const [startTimeStr, endTimeStr] = event.time.split(" - ");
    const [month, day, year] = event.date.split(" ");

    // Convert to Date objects (simplified parsing)
    const startDateStr = `${month} ${day.replace(
      ",",
      ""
    )} ${year} ${startTimeStr}`;
    const endDateStr = `${month} ${day.replace(",", "")} ${year} ${endTimeStr}`;

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // Format dates for iCalendar
    const formatDateForICal = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "");
    };

    // Generate a random UID
    const uid = Math.random().toString(36).substring(2) + "@libraryvents.com";

    // Create iCalendar content
    const icalContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Library//Events Calendar//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${formatDateForICal(new Date())}`,
      `DTSTART:${formatDateForICal(startDate)}`,
      `DTEND:${formatDateForICal(endDate)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    // Create a blob and download link
    const blob = new Blob([icalContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${event.title.replace(/\s+/g, "-")}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calendar grid view component
  const CalendarView = () => {
    const calendarDays = generateCalendarDays();
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-center text-gray-800">
            {new Date().toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-1">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((dayObj, index) => (
            <div
              key={index}
              className={`min-h-24 border rounded p-1 ${
                dayObj.isToday
                  ? "bg-blue-50 border-blue-300"
                  : "border-gray-200"
              } ${!dayObj.day ? "bg-gray-50" : ""}`}
            >
              {dayObj.day && (
                <>
                  <div
                    className={`text-right ${
                      dayObj.isToday ? "font-bold text-blue-600" : ""
                    }`}
                  >
                    {dayObj.day}
                  </div>
                  <div className="mt-1 space-y-1">
                    {dayObj.events.map((event) => (
                      <div
                        key={event.id}
                        className="text-xs p-1 rounded bg-blue-100 text-blue-800 cursor-pointer truncate"
                        title={event.title}
                        onClick={() => {
                          setViewMode("list");
                          setSearchTerm(event.title);
                        }}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PagesLayouts>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-[url('assets/images/bookshelf.jpg')] bg-cover text-white py-16 text-center flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Events & Programs
            </h1>
            <p className="text-xl max-w-2xl text-center">
              Discover our exciting lineup of events, workshops, and programs
              for all ages. Join us to learn, create, and connect with your
              community.
            </p>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${
                      activeFilter === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() =>
                setViewMode(viewMode === "list" ? "calendar" : "list")
              }
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              {viewMode === "list" ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  View Calendar
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  View List
                </>
              )}
            </button>
          </div>

          {/* Events Display - List or Calendar */}
          {viewMode === "calendar" ? (
            <CalendarView />
          ) : (
            <div className="space-y-8 mb-12">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h2 className="text-2xl font-bold text-gray-800 text-center md:text-left">
                            {event.title}
                          </h2>
                          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 mx-auto md:mx-0">
                            {event.category}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600 justify-center md:justify-start">
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            {event.location}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 text-center md:text-left">
                          {event.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
                            onClick={() => addToCalendar(event)}
                          >
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Add to Calendar
                          </button>
                          <span className="text-gray-500 italic">
                            Remember this event!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-900">
                    No events found
                  </h3>
                  <p className="mt-1 text-gray-500">
                    Try changing your search or filter criteria.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={() => {
                        setActiveFilter("All");
                        setSearchTerm("");
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Subscribe Section */}
          <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-12 text-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Subscribe to our newsletter to receive monthly updates about
                  upcoming events and programs.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PagesLayouts>
  );
};

export default EventsPage;
