import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticipantSidebar from "./ParticipantSidebar";
import ParticipantDashboard from "./ParticipantDashboard";
import ParticipantProfile from "./ParticipantProfile";
import ParticipantCourses from "./ParticipantCourses";
import Conversion from "./Conversation";
import Feedback from "./Feedback";
import ParticipantPayments from "./ParticipantPayments";
import ParticipantChatGPT from "./ParticipantChatGPT";

export default function ParticipantDetails() {
  const [activePage, setActivePage] = useState("dashboard");

  const [selectedSection, setSelectedSection] = useState("");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <ParticipantDashboard />;
      case "profile":
        return <ParticipantProfile />;
      case "courses":
        return <ParticipantCourses defaultSection={selectedSection} />;
      case "conversion":
        return <Conversion />;
      case "feedbacks":
        return <Feedback />;
      case "payment":
        return <ParticipantPayments />;
      case "chatgpt":
        return <ParticipantChatGPT />;
      default:
        return <ParticipantDashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-40">
        {/* Left section - User info */}
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-sm">Hello,</p>
            <h2 className="font-bold text-lg">Miche Obema</h2>
          </div>
        </div>

        {/* Right section - Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => {
              setSelectedSection("NEW ENROLMENT");
              setActivePage("courses");
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Request for Courses
          </button>
          <button
            onClick={() => setActivePage("chatgpt")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            Chat GPT
          </button>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <ParticipantSidebar
          activePage={activePage}
          setActivePage={setActivePage}
          setSelectedSection={setSelectedSection}
        />
        <main ParticipantSidebar="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
