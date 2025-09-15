import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
        <div className="flex-shrink-0 flex items-center justify-start">
  <Link to="/" className="flex items-center">
    <img 
      src="/logo.png" 
      alt="Sky Nova Logo" 
      className="w-40 sm:w-56 md:w-64 lg:w-80 object-contain" 
    />
  </Link>
</div>





          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/#home"
              className="text-white hover:text-cyan-400 transition"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-white hover:text-cyan-400 transition"
            >
              About
            </Link>
            <Link
              to="/#services"
              className="text-white hover:text-cyan-400 transition"
            >
              Services
            </Link>
            <Link
              to="/#contact"
              className="text-white hover:text-cyan-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-[#0f0c29]/95">
          <Link
            to="/#home"
            className="block text-white hover:text-cyan-400 transition"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="block text-white hover:text-cyan-400 transition"
          >
            About
          </Link>
          <Link
            to="/#services"
            className="block text-white hover:text-cyan-400 transition"
          >
            Services
          </Link>
          <Link
            to="/#contact"
            className="block text-white hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
