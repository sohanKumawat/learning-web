import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import InstructorSidebar from "./InstructorSidebar";
import InstructorDashboard from "./InstructorDashboard";
import InstructorProfile from "./InstructorProfile";
import InstructorCourse from "./InstructorCourse";
import Conversion from "./InstructorChat";
import LearnerFeedbacks from "./InstructorFeedback";
import PaymentDetails from "./InstructorPaymet";


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
      case "conversion":
        return <Conversion />;
      case "feedbacks":
        return <LearnerFeedbacks />;
      case "payment":
        return <PaymentDetails />;
      default:
        return <Dashboard />;
    }
  };
    
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Header */}
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div>
            <p className="text-sm">Hello,</p>
            <h2 className="font-bold text-lg">Miche Obema</h2>
            <div className="flex items-center text-sm text-yellow-300 mt-1">
              <FaStar className="mr-1" /> 4.0 (20 Reviews)
            </div>
          </div>
        </div>
        <button onClick={() =>
        navigate(`/instructor/1/create-course`)
      } className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
          Create a New Course
        </button>
      </header>
      {/* Main Content */}
       <div className="flex flex-1 overflow-hidden">
        <InstructorSidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};
