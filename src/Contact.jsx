import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <footer className="flex flex-col bg-black relative overflow-hidden text-white py-12">
      {/* 🌌 Neon background effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-ping"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left: Logo + Nav */}
        <div className="flex flex-col items-center md:items-start">
           <div className="flex-shrink-0 flex items-center justify-start">
  <Link to="/" className="flex items-center">
    <img 
      src="/logo.png" 
      alt="Sky Nova Logo" 
      className="w-40 sm:w-56 md:w-64 lg:w-80 object-contain" 
    />
  </Link>
</div>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition">About</a>
            <a href="/services" className="hover:text-cyan-400 transition">Services</a>
          </nav>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="mb-2">📞 +1 (234) 567-890</p>
          <p className="mb-2">📧 info@example.com</p>
          <p>📍 123 Main Street, New York, NY 10001</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="relative mt-10 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Sky Nova. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
