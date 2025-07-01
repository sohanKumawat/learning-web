import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaUserCircle,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const HeaderBar = () => {
  const [selectedLocation, setSelectedLocation] = useState("New Delhi");
  const [activeCourseCategory, setActiveCourseCategory] =
    useState("Web Development");
  const [activeInstructorCategory, setActiveInstructorCategory] =
    useState("Web Development");

  const [locationOpen, setLocationOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [instructorOpen, setInstructorOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  let locationTimeout = useRef();
  let courseTimeout = useRef();
  let instructorTimeout = useRef();
  let accountTimeout = useRef();

  const cities = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
  ];

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
  const [callbackOpen, setCallbackOpen] = useState(false);
  const callBtnRef = useRef(null); // <-- to anchor popup
  const handleSelectLocation = (city) => {
    setSelectedLocation(city);
    setLocationOpen(false);
  };

  const handleMouseEnter = (setter, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setter(true);
  };

  const handleMouseLeave = (setter, timeoutRef) => {
    timeoutRef.current = setTimeout(() => setter(false), 200);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-4 relative">
            <Link to="/" className="flex items-center space-x-2 pl-[2px]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Smart Learning"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-pink-400">
                Smart <span className="text-purple-600">Learning</span>
              </span>
            </Link>

            <div
              onMouseEnter={() =>
                handleMouseEnter(setLocationOpen, locationTimeout)
              }
              onMouseLeave={() =>
                handleMouseLeave(setLocationOpen, locationTimeout)
              }
              className="relative"
            >
              <button className="flex items-center space-x-2 px-3 py-1 rounded bg-gray-100 text-gray-800 hover:bg-gray-200">
                <FaMapMarkerAlt className="text-sm text-blue-900" />
                <span className="font-medium text-blue-900">
                  {selectedLocation}
                </span>
                <FaChevronDown className="text-xs text-blue-900" />
              </button>
              {locationOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleSelectLocation(city)}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-purple-600">
              Home
            </Link>

            <div
              onMouseEnter={() =>
                handleMouseEnter(setCourseOpen, courseTimeout)
              }
              onMouseLeave={() =>
                handleMouseLeave(setCourseOpen, courseTimeout)
              }
              className="relative"
            >
              <Link
                to="/course"
                className="hover:text-purple-600 flex items-center"
              >
                Courses <FaChevronDown className="ml-1 text-xs" />
              </Link>
              {courseOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white shadow-xl rounded-md z-50 flex">
                  <div className="w-1/2 bg-gray-50 rounded-l-md">
                    {Object.keys(courseMap).map((category) => (
                      <div
                        key={category}
                        onMouseEnter={() => setActiveCourseCategory(category)}
                        className={`px-4 py-3 cursor-pointer hover:bg-purple-100 ${
                          activeCourseCategory === category
                            ? "bg-purple-50 text-purple-600 font-semibold"
                            : ""
                        }`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2 px-4 py-3 bg-white rounded-r-md">
                    {courseMap[activeCourseCategory].map((item) => (
                      <Link
                        key={item}
                        to={`/course?name=${encodeURIComponent(item)}`}
                        className="block py-1 text-gray-700 hover:text-purple-600"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() =>
                handleMouseEnter(setInstructorOpen, instructorTimeout)
              }
              onMouseLeave={() =>
                handleMouseLeave(setInstructorOpen, instructorTimeout)
              }
              className="relative"
            >
              <Link
                to="/instructor"
                className="hover:text-purple-600 flex items-center"
              >
                Instructor <FaChevronDown className="ml-1 text-xs" />
              </Link>
              {instructorOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white shadow-xl rounded-md z-50 flex">
                  <div className="w-1/2 bg-gray-50 rounded-l-md">
                    {Object.keys(instructorMap).map((category) => (
                      <div
                        key={category}
                        onMouseEnter={() =>
                          setActiveInstructorCategory(category)
                        }
                        className={`px-4 py-3 cursor-pointer hover:bg-purple-100 ${
                          activeInstructorCategory === category
                            ? "bg-purple-50 text-purple-600 font-semibold"
                            : ""
                        }`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2 px-4 py-3 bg-white rounded-r-md">
                    {instructorMap[activeInstructorCategory].map(
                      (instructor) => (
                        <Link
                          key={instructor}
                          to={`/instructor?name=${encodeURIComponent(
                            instructor
                          )}`}
                          className="block py-1 text-gray-700 hover:text-purple-600"
                        >
                          {instructor}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link to="/participant" className="hover:text-purple-600">
              Participant
            </Link>
          </nav>

          {/* Right - Contact & Account */}
          <div className="flex items-center space-x-4 pr-2 relative">
            <button
              ref={callBtnRef}
              onClick={() => setCallbackOpen(!callbackOpen)}
              className="flex items-center space-x-2 px-3 py-1 rounded bg-black text-white hover:bg-gray-800"
            >
              <FaPhoneAlt className="text-xs" />
              <span className="text-sm">Call us</span>
            </button>

            <div className="h-6 w-px bg-gray-300 mx-2" />

            <FaHeart className="text-lg text-black" />

            <div
              onMouseEnter={() =>
                handleMouseEnter(setAccountOpen, accountTimeout)
              }
              onMouseLeave={() =>
                handleMouseLeave(setAccountOpen, accountTimeout)
              }
              className="relative"
            >
              <div className="flex flex-col text-right text-sm font-medium cursor-pointer">
                <span className="text-gray-500">Hello, Sign in</span>
                <div className="flex items-center justify-end space-x-1 text-black font-semibold">
                  <FaUserCircle className="text-lg" />
                  <span>Account</span>
                  <FaChevronDown className="text-xs" />
                </div>
              </div>
              {accountOpen && (
                <div className="absolute right-1/2 transform translate-x-1/2 top-full mt-2 w-64 bg-white shadow-lg rounded border border-gray-200 z-50">
                  <Link
                    to="/signup"
                    className="block w-full bg-orange-500 text-center text-white font-bold py-3 rounded-t hover:bg-orange-600"
                  >
                    LOG IN/SIGN UP
                  </Link>
                  <div className="flex flex-col divide-y divide-gray-200 p-4">
                    <Link to="/profile" className="py-2 hover:text-purple-600">
                      Profile
                    </Link>
                    <Link
                      to="/mycourses"
                      className="py-2 hover:text-purple-600"
                    >
                      My Courses
                    </Link>
                    <button
                      onClick={() => alert("Logged out!")}
                      className="py-2 text-left text-gray-700 hover:text-purple-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* Callback popup */}
      {callbackOpen && (
        <CallbackPopup
          onClose={() => setCallbackOpen(false)}
          anchorRef={callBtnRef}
        />
      )}
    </>
  );
};

export default HeaderBar;

const CallbackPopup = ({ onClose, anchorRef }) => {
  const rect = anchorRef?.current?.getBoundingClientRect();

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="absolute bg-white w-1/2 max-w-md rounded shadow-lg p-6 border border-gray-200"
        style={{
          top: rect ? rect.bottom + window.scrollY + 8 : "50%",
          left: rect ? rect.left + window.scrollX : "50%",
          transform: rect ? "translateX(0)" : "translate(-50%, -50%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Request call back
        </h2>
        <hr className="mb-4" />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Language
          </label>
          <input
            type="text"
            placeholder="Hindi"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            rows={3}
            placeholder="Tell us what you need help with"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none"
          ></textarea>
        </div>

        <p className="text-sm text-gray-500 mb-1 text-center">
          To have a <strong>SmartLearning</strong> representative call you,
          please click below
        </p>
        <p className="text-sm text-orange-500 font-semibold text-center mb-4">
          We are operational between 9 AM - 9 PM
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gray-300 text-white py-3 rounded font-semibold text-sm"
        >
          CALL ME
        </button>
      </div>
    </div>
  );
};
