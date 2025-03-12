import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/80 shadow-md py-2" : "bg-black/20 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className={`text-2xl font-bold ${
              scrolled ? "text-gray-800" : "text-white drop-shadow-md"
            }`}
          >
            LibraryName
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" label="Home" scrolled={scrolled} />
          <NavLink href="/catalog" label="Catalog" scrolled={scrolled} />
          <NavLink href="/events" label="Events" scrolled={scrolled} />
          <NavLink href="/about" label="About" scrolled={scrolled} />
          <NavLink href="/contact" label="Contact" scrolled={scrolled} />
        </div>

        {/* Search and Account Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className={`${
              scrolled
                ? "text-gray-700 hover:text-gray-900"
                : "text-white drop-shadow-md hover:text-gray-200"
            } transition-colors`}
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button
            className={`${
              scrolled
                ? "text-gray-700 hover:text-gray-900"
                : "text-white drop-shadow-md hover:text-gray-200"
            } transition-colors`}
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              scrolled
                ? "text-gray-700 hover:text-gray-900"
                : "text-white drop-shadow-md hover:text-gray-200"
            } focus:outline-none`}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/catalog" label="Catalog" />
            <MobileNavLink href="/events" label="Events" />
            <MobileNavLink href="/about" label="About" />
            <MobileNavLink href="/contact" label="Contact" />
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <button
                className="p-2 text-gray-700 hover:text-gray-900"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                className="p-2 text-gray-700 hover:text-gray-900"
                aria-label="Account"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop navigation link component
const NavLink = ({ href, label, scrolled }) => {
  return (
    <a
      href={href}
      className={`font-medium tracking-wide ${
        scrolled
          ? "text-gray-700 hover:text-gray-900"
          : "text-white drop-shadow-md hover:text-gray-200"
      } transition-colors`}
    >
      {label}
    </a>
  );
};

// Mobile navigation link component
const MobileNavLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
    >
      {label}
    </a>
  );
};

export default Navbar;
