import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const HeaderBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Edurock"
            className="w-8 h-8"
          />
          <span className="text-2xl font-bold text-pink-400">
            Smart <span className="text-purple-600">Learning</span>
          </span>
        </Link>
        {/* Nav */}
        <nav className="hidden md:flex space-x-4 text-gray-600 font-semibold">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/course" className="hover:text-purple-600">Courses</Link>
          <Link to="/instructor" className="hover:text-purple-600">Instructor</Link>
          <Link to="/learner" className="hover:text-purple-600">Learner</Link>
          <Link to="/contact" className="hover:text-purple-600">Contacts</Link>
          <Link to="/signup" className="hover:text-purple-600">Signup</Link>
        </nav>

        {/* Cart and Button */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaShoppingCart className="text-gray-700 text-xl" />
            <span className="absolute -top-2 -right-2 text-xs bg-pink-600 text-white rounded-full px-1">
              1
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
