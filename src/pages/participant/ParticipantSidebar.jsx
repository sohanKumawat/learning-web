import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaBook,
  FaExchangeAlt,
  FaStar,
  FaCreditCard,
} from "react-icons/fa";

const ParticipantSidebar = ({
  activePage,
  setActivePage,
  setSelectedSection,
}) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      section: "",
      icon: <FaTachometerAlt />,
    },
    {
      id: "profile",
      label: "My Profile",
      section: "",
      icon: <FaUser />,
    },
    {
      id: "courses",
      label: "My Course",
      section: "IN-PROGRESS",
      icon: <FaBook />,
    },
    {
      id: "conversion",
      label: "Conversion",
      section: "",
      icon: <FaExchangeAlt />,
      badge: "9+",
    },
    {
      id: "feedbacks",
      label: "Participatns Feedbacks",
      section: "",
      icon: <FaStar />,
    },
    {
      id: "payment",
      label: "Payment History",
      section: "",
      icon: <FaCreditCard />,
    },
    {
      id: "chatgpt",
      label: "ChatGPT History",
      section: "",
      icon: <FaCreditCard />,
    },
  ];
  return (
    <aside className="w-64 bg-white border-r h-full overflow-y-auto">
      <nav className="mt-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedSection(item.section);
              setActivePage(item.id);
            }}
            className={`w-full flex items-center justify-between px-4 py-2 text-left ${
              activePage === item.id
                ? "text-purple-700 bg-purple-100 font-semibold"
                : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span className="text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ParticipantSidebar;
