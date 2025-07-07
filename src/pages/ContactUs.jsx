import React, { useState, useEffect } from "react";

const CallbackPopup = ({ onClose, anchorRef }) => {
  const [popupStyle, setPopupStyle] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      const rect = anchorRef?.current?.getBoundingClientRect();
      if (rect) {
        setPopupStyle({
          position: "absolute",
          top: rect.bottom + window.scrollY + 10,
          left: rect.left + window.scrollX + rect.width / 2,
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "400px",
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [anchorRef]);

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div
        className="bg-white rounded shadow-lg p-6 border border-gray-200"
        style={popupStyle}
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

export { CallbackPopup };
