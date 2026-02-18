import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      {/* Desktop & Header Container */}
      <div className="flex justify-between items-center py-4 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center z-50">
          <img src="/logo.PNG" alt="ceci's bite logo" className="w-10 h-auto" />
          <p className="font-playfair text-primary ml-2 text-2xl">
            Ceci's Bite
          </p>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex justify-between gap-8 font-inter">
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition">
            About Us
          </Link>
          <Link to="/menu" className="hover:text-primary transition">
            Menu
          </Link>
          <Link to="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link to="/school" className="hover:text-primary transition">
            Baking School
          </Link>
        </div>

        {/* Desktop Button - Hidden on Mobile */}
        <Link
          className="hidden md:inline-block py-2 px-10 bg-primary text-white rounded-xl text-xs font-bold hover:bg-secondary hover:text-black transition duration-300"
          to="/menu"
        >
          Shop Now
        </Link>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-primary z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-3xl">✕</span> // Close Icon
          ) : (
            <span className="text-3xl">☰</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
        fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-xl font-inter transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <Link onClick={() => setIsOpen(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/about">
          About Us
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/menu">
          Menu
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/contact">
          Contact
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/school">
          Baking School
        </Link>
        <Link
          onClick={() => setIsOpen(false)}
          className="py-3 px-10 bg-primary text-white rounded-xl font-bold"
          to="/menu"
        >
          Shop Now
        </Link>
      </div>
    </nav>
  );
}
