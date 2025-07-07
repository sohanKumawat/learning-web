import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaUserCircle,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { FlatDropdown, DropdownMenu } from "./Headerpopups";
import { CallbackPopup } from "./ContactUs";
import UserLogin from "./account/UserAccount";

const HeaderBar = () => {
  const [activeCourseCategory, setActiveCourseCategory] =
    useState("Web Development");
  const [activeInstructorCategory, setActiveInstructorCategory] =
    useState("Web Development");
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const callBtnRef = useRef(null);

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

  const instructorMap = {
    "Web Development": ["John Doe", "Jane Smith"],
    "Data Science": ["Emily Johnson", "Sara Lee"],
    "Machine Learning": ["Michael Brown", "Rajesh Kumar"],
    "Graphic Design": ["Ananya Patel", "Karan Verma"],
    "Digital Marketing": ["Priya Mehra", "Dev Singh"],
    "Business Analytics": ["Sneha Shah", "Rahul Iyer"],
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

  const handleMouseEnter = (setter, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleMouseLeave = (setter, timeoutRef) => {
    timeoutRef.current = setTimeout(() => setter(false), 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-3">
        {/* Logo on the far left */}
        <Link to="/" className="flex items-center space-x-2 mr-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Smart Learning"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-pink-400 leading-tight whitespace-pre">
            Smart{"\n"}
            <span className="text-purple-600">Learning</span>
          </span>
        </Link>

        {/* Main flex container for hamburger and nav */}
        <div className="flex items-center space-x-3 flex-grow">
          {/* Hamburger on left for mobile */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            <FlatDropdown
              label="Explore"
              items={Object.values(courseMap).flat()}
              linkPrefix="course"
            />

            <div className="relative w-64">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-md border border-gray-200 z-50 mt-1 max-h-60 overflow-y-auto">
                  {filteredSuggestions.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSearchSelect(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-purple-100 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
              label="Physical&Utility Courses"
              route="course?others"
              itemsMap={courseMap}
              activeCategory={activeCourseCategory}
              setActiveCategory={setActiveCourseCategory}
              linkPrefix="course"
            />
            {/* <DropdownMenu
              label="Instructor"
              route="instructor"
              itemsMap={instructorMap}
              activeCategory={activeInstructorCategory}
              setActiveCategory={setActiveInstructorCategory}
              linkPrefix="instructor"
            /> */}
          </nav>
        </div>

        <div className="flex items-center space-x-10 pl-8">
          {/*   <button
            ref={callBtnRef}
            onClick={() => setCallbackOpen(!callbackOpen)}
            className="flex items-center space-x-2 px-3 py-1 rounded bg-black text-white hover:bg-gray-800"
          >
            <FaPhoneAlt className="text-xs" />
            <span className="text-sm">Call us</span>
          </button>*/}
          <div className="h-6 w-px bg-gray-300 mx-2" />
          <UserLogin />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 top-full w-64 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="px-4 py-4 space-y-6 text-sm">
            <FlatDropdown
              label="Explore"
              items={Object.values(courseMap).flat()}
              linkPrefix="course"
            />
            <DropdownMenu
              label="Software Courses"
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
              label="Physical&Utility Courses"
              route="course?others"
              itemsMap={courseMap}
              activeCategory={activeCourseCategory}
              setActiveCategory={setActiveCourseCategory}
              linkPrefix="course"
            />
            {/* <DropdownMenu
              label="Instructor"
              route="instructor"
              itemsMap={instructorMap}
              activeCategory={activeInstructorCategory}
              setActiveCategory={setActiveInstructorCategory}
              linkPrefix="instructor"
            /> */}
          </div>
        </div>
      )}

      {/* {callbackOpen && (
        <CallbackPopup
          onClose={() => setCallbackOpen(false)}
          anchorRef={callBtnRef}
        />
      )} */}
    </header>
  );
};

//export default HeaderBar;
