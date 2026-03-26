import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl text-brand-blue tracking-tighter">
          AIESEC <span className="text-gray-400">|</span>{" "}
          <span className="text-sm font-normal text-gray-600">Sri Lanka</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="/" className="hover:text-brand-blue">
            Home
          </a>
          <a href="/about" className="hover:text-brand-blue">
            About Us
          </a>
          <a href="/projects" className="hover:text-brand-blue">
            Projects
          </a>
          <a href="/events" className="hover:text-brand-blue">
            Events
          </a>
          <a href="/partnership" className="hover:text-brand-blue">
            Partners
          </a>
          <button className="bg-brand-blue text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/events">Events</a>
          <a href="/partnership">Partners</a>
          <button className="bg-brand-blue text-white py-2 rounded-md">
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}
