import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FlatDropdown = ({ label, items, linkPrefix, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);
  const dropdownRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  return (
    <div
      className="relative text-center"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="hover:text-purple-600 flex items-center cursor-pointer justify-center">
        {label} <FaChevronDown className="ml-1 text-xs" />
      </div>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-white shadow-xl rounded-md z-50 animate-fade-in">
          <div className="py-2 px-4 whitespace-nowrap">
            {items.map((item) => (
              <Link
                key={item}
                to={`/${linkPrefix}?name=${encodeURIComponent(item)}`}
                className="block py-2 text-gray-700 hover:text-purple-600 text-sm"
                onClick={onClick}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({
  label,
  route,
  itemsMap,
  activeCategory,
  setActiveCategory,
  linkPrefix,
  onClick,
  mobileMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef(null);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [submenuStyle, setSubmenuStyle] = useState({});

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && mobileMenu && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setSubmenuStyle({
        position: "absolute",
        top: rect.top + window.scrollY,
        left: rect.right + 8 + window.scrollX,
        zIndex: 10000,
      });
    } else {
      setSubmenuStyle({});
    }
  }, [isOpen, mobileMenu]);

  return (
    <div
      className="relative text-center"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={`/${route}`}
        className="hover:text-purple-600 flex items-center cursor-pointer justify-center"
        ref={triggerRef}
      >
        {label}{" "}
        {mobileMenu ? (
          <FaChevronRight className="ml-1 text-xs" />
        ) : (
          <FaChevronDown className="ml-1 text-xs" />
        )}
      </Link>

      {isOpen && (
        <div
          className={
            mobileMenu
              ? "bg-white shadow-xl rounded-md border border-gray-200 z-50 flex absolute animate-fade-in"
              : "absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[600px] bg-white shadow-xl rounded-md z-50 flex animate-fade-in"
          }
          style={mobileMenu ? submenuStyle : {}}
        >
          <div className="w-1/2 bg-gray-50 rounded-l-md">
            {Object.keys(itemsMap).map((category) => (
              <div
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`px-4 py-3 cursor-pointer hover:bg-purple-100 ${
                  activeCategory === category
                    ? "bg-purple-50 text-purple-600 font-semibold"
                    : ""
                }`}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="w-1/2 px-4 py-3 bg-white rounded-r-md">
            {itemsMap[activeCategory].map((item) => (
              <Link
                key={item}
                to={`/${linkPrefix}?name=${encodeURIComponent(item)}`}
                className="block py-1 text-gray-700 hover:text-purple-600"
                onClick={onClick}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { FlatDropdown, DropdownMenu };
