import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
  FaSignInAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const HamburgerMenu = ({
  open,
  onClose,
  courseMap,
  activeCourseCategory,
  setActiveCategory,
}) => {
  const [submenu, setSubmenu] = useState(null); // null or category string
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const user = useSelector((state) => state.user);

  // Close on click outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        overlayRef.current &&
        overlayRef.current.contains(e.target)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  // Mouse over/leave for desktop: open on mouse enter, close on mouse leave
  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    function handleMouseEnter() {
      // Do nothing, keep open
    }
    function handleMouseLeave(e) {
      if (!drawer.contains(e.relatedTarget)) {
        onClose();
      }
    }
    drawer.addEventListener("mouseenter", handleMouseEnter);
    drawer.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      drawer.removeEventListener("mouseenter", handleMouseEnter);
      drawer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [open, onClose]);

  if (!open) return null;

  // Hamburger-only submenu rendering (mobile/side-drawer)
  const hamburgerSubmenuPanel = (categoryLabel, mapKey) => (
    <div className="flex flex-col h-full">
      <div className="flex items-center px-4 py-3 border-b bg-gray-50">
        <button
          className="mr-2 text-lg text-gray-600 hover:text-purple-600"
          onClick={() => setSubmenu(null)}
          onMouseEnter={() => setSubmenu(null)}
          aria-label="Back"
        >
          <FaChevronLeft />
        </button>
        <span className="font-semibold text-lg">{categoryLabel}</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {courseMap[mapKey].map((item) => (
          <a
            key={item}
            href={`/#/course?name=${encodeURIComponent(item)}`}
            className="block py-3 px-2 text-gray-700 hover:bg-purple-100 rounded"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );

  // Hamburger-only main menu
  const mainMenu = (
    <div className="flex flex-col h-full">
      {/* User/Profile section */}
      <div className="flex items-center px-6 py-5 border-b bg-gray-50">
        {user && user.imageUrl ? (
          <img
            src={user.imageUrl}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-300 mr-3"
          />
        ) : (
          <FaUserCircle className="text-3xl text-gray-400 mr-3" />
        )}
        <div className="flex-1">
          {user ? (
            <>
              <div className="font-semibold text-base text-gray-800">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">{user.emailId}</div>
            </>
          ) : (
            <>
              <div className="font-semibold text-base text-gray-800">Guest</div>
              <a
                href="/#/login"
                className="flex items-center text-purple-600 hover:underline text-sm mt-1"
              >
                <FaSignInAlt className="mr-1" /> Sign In
              </a>
            </>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <button
          className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold hover:bg-purple-50 border-b"
          onClick={() => setSubmenu("Tech Courses")}
          onMouseEnter={() => setSubmenu("Tech Courses")}
        >
          Tech Courses <FaChevronRight className="text-gray-400" />
        </button>
        <button
          className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold hover:bg-purple-50 border-b"
          onClick={() => setSubmenu("Academic Courses")}
          onMouseEnter={() => setSubmenu("Academic Courses")}
        >
          Academic Courses <FaChevronRight className="text-gray-400" />
        </button>
        <button
          className="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold hover:bg-purple-50 border-b"
          onClick={() => setSubmenu("More Courses")}
          onMouseEnter={() => setSubmenu("More Courses")}
        >
          More Courses <FaChevronRight className="text-gray-400" />
        </button>
      </div>
    </div>
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex"
      style={{ pointerEvents: open ? "auto" : "none" }}
    >
      {/* Drawer */}
      <div
        ref={drawerRef}
        className="bg-white shadow-2xl h-full w-80 max-w-full transition-transform duration-300 ease-in-out transform translate-x-0 flex flex-col"
      >
        {submenu === null && mainMenu}
        {submenu === "Tech Courses" &&
          hamburgerSubmenuPanel("Tech Courses", "Web Development")}
        {submenu === "Academic Courses" &&
          hamburgerSubmenuPanel("Academic Courses", "Data Science")}
        {submenu === "More Courses" &&
          hamburgerSubmenuPanel("More Courses", "Business Analytics")}
      </div>
      {/* Overlay */}
      <div className="flex-1 bg-black bg-opacity-30" />
    </div>
  );
};

export default HamburgerMenu;
