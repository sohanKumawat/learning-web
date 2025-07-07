import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import InstructorSidebar from "./InstructorSidebar";
import InstructorDashboard from "./InstructorDashboard";
import InstructorProfile from "./InstructorProfile";
import InstructorCourse from "./InstructorCourse";
import InstructorCourseRegistration from "./InstructorCourseReg";
import Conversion from "./Conversation";
import Feedbacks from "./Feedback";
import PaymentDetails from "./InstructorPaymet";
import InstructorChatGPT from "./InstructorChatGPT";

export default function InstructorDetails() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("dashboard");
  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <InstructorDashboard />;
      case "profile":
        return <InstructorProfile />;
      case "courses":
        return <InstructorCourse />;
      case "courseReg":
        return <InstructorCourseRegistration />;
      case "conversion":
        return <Conversion />;
      case "feedbacks":
        return <Feedbacks />;
      case "payment":
        return <PaymentDetails />;
      case "chatgpt":
        return <InstructorChatGPT />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky top-0 z-40 w-full">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-sm">Hello,</p>
            <h2 className="font-bold text-lg">Miche Obema</h2>
          </div>
          <div className="flex items-center text-sm text-yellow-300 mt-1">
            <FaStar className="mr-1" /> 4.0 (20 Reviews)
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={() => setActivePage("courseReg")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Create New Course"
          >
            Create New Course
          </button>
          <button
            onClick={() => setActivePage("chatgpt")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-purple-300"
            aria-label="Chat GPT"
          >
            Chat GPT
          </button>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden w-full">
        <InstructorSidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 w-full">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
