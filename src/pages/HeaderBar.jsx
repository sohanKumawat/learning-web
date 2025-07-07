import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { DropdownMenu } from "./Headerpopups";
import UserLogin from "./account/UserAccount";
import HamburgerMenu from "./HamburgerMenu";

const HeaderBar = () => {
  const [activeCourseCategory, setActiveCourseCategory] =
    useState("Web Development");
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerBtnRef = useRef(null);

  const courseMap = {
    "Web Development": [
      "HTML & CSS",
      "React Basics",
      "Node.js",
      "Fullstack Projects",
    ],
    "Data Science": ["Python for Data", "Pandas", "NumPy", "Data Viz"],
    "Machine Learning": [
      "Linear Regression",
      "Decision Trees",
      "Scikit Learn",
      "Deep Learning",
    ],
    "Graphic Design": ["Photoshop", "Illustrator", "UI Kits", "Figma Basics"],
    "Digital Marketing": ["SEO", "Google Ads", "Email Campaigns", "Analytics"],
    "Business Analytics": [
      "Excel Modelling",
      "Power BI",
      "SQL Analysis",
      "Dashboarding",
    ],
  };

  const searchSuggestions = [
    "React",
    "Node.js",
    "Python",
    "Pandas",
    "SEO",
    "Power BI",
    "Photoshop",
    "Excel",
    "Deep Learning",
    "Google Ads",
    "Dashboarding",
  ];

  const handleSearchSelect = (value) => {
    setSearchInput(value);
    setShowSuggestions(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-3">
        {/* Logo on the far left */}
        <Link
          to="/"
          className="flex items-center space-x-2 mr-4"
          aria-label="Go to homepage"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Smart Learning logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-pink-400 leading-tight">
            Smart <span className="text-purple-600">Learning</span>
          </span>
        </Link>

        {/* Main flex container for hamburger and nav */}
        <div className="flex items-center space-x-3 flex-grow">
          {/* Hamburger on left for mobile */}
          <div className="md:hidden pr-2" ref={hamburgerBtnRef}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium text-gray-700">
            <DropdownMenu
              label="Tech Courses"
              route="course?tech"
              itemsMap={courseMap}
              activeCategory={activeCourseCategory}
              setActiveCategory={setActiveCourseCategory}
              linkPrefix="course"
            />

            <DropdownMenu
              label="Academic Courses"
              route="course?Academic"
              itemsMap={courseMap}
              activeCategory={activeCourseCategory}
              setActiveCategory={setActiveCourseCategory}
              linkPrefix="course"
            />

            <DropdownMenu
              label="More Courses"
              route="course?others"
              itemsMap={courseMap}
              activeCategory={activeCourseCategory}
              setActiveCategory={setActiveCourseCategory}
              linkPrefix="course"
            />

            <div className="relative w-full max-w-xs lg:max-w-md xl:max-w-lg">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchInput(value);
                  if (value.length > 0) {
                    const matches = searchSuggestions.filter((sug) =>
                      sug.toLowerCase().includes(value.toLowerCase())
                    );
                    setFilteredSuggestions(matches);
                    setShowSuggestions(true);
                  } else {
                    setShowSuggestions(false);
                  }
                }}
                onFocus={() => searchInput && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                placeholder="Search courses, topics, etc."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
                aria-label="Search courses, topics, etc."
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 mt-1 max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSearchSelect(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-purple-100 text-sm"
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                          handleSearchSelect(item);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <Link
            to="/instructor-signup"
            className="ml-4 px-3 py-1 rounded border border-purple-600 text-purple-600 text-sm font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            Become Instructor
          </Link>
        </div>
        <div className="flex items-center pl-8">
          <UserLogin btnClassName="ml-2 px-3 py-1 rounded border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors duration-200" />
        </div>
      </div>

      {/* HamburgerMenu overlay for mobile */}
      <HamburgerMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        courseMap={courseMap}
        activeCourseCategory={activeCourseCategory}
        setActiveCategory={setActiveCourseCategory}
        anchorRef={hamburgerBtnRef}
      />
    </header>
  );
};

export default HeaderBar;
