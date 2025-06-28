import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt ,FaBookOpen, FaHeart, FaStar} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function courseDetails() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
       <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center mb-2">Course Details</h1>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Category Badge */}
          <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Mechanical
          </span>

          {/* Title */}
          <h2 className="text-2xl font-bold">
            Become a product manager learn the Skills & job.
          </h2>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/30"
                alt="Teacher"
                className="w-6 h-6 rounded-full"
              />
              <span>
                <strong>Teacher:</strong> Elon Masksd
              </span>
            </div>
            <div>
              <strong>Last Update:</strong> July 24, 2024
            </div>
            <div>
              <strong>Location:</strong> 684 West College St. Sun City, USA
            </div>
          </div>

          {/* Image */}
          <img
            src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/event/event__6.png"
            alt="Event"
            className="w-full rounded"
          />

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-4">
              He legged it up the kyver have it mush super old mucker cheeky
              naff that are you are taking the piss, bloke off ruddy pub cobble
              you barf your arm off the wireless boot or blimey guvnor happy
              days bendy...
            </p>
            <h4 className="font-semibold mb-2">
              This event will allow participants to:
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Business’s managers, leaders</li>
              <li>Downloadable lectures, code and design assets for all projects</li>
              <li>Anyone who is finding a chance to get the promotion</li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Price Box */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold text-purple-600">$32.00</span>
              <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">
                68% OFF
              </span>
            </div>
            <p className="text-gray-500 line-through mb-4">$67.00</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-purple-600" />
                <span>
                  <strong>End:</strong> July 26, 2024 12:30 am
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-purple-600" />
                <span>
                  <strong>Time:</strong> 10:45 AM - 01:30 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-600" />
                <span>
                  <strong>Venue:</strong> New York, TX 82760, USA
                </span>
              </div>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 transition">
              Enroll New Course
            </button>
          </div>

          {/* Sponsor Box */}
          <div className="bg-white p-4 rounded shadow space-y-2">
            <img
              src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/icon/event__details__2.png"
              alt="Sponsor"
              className="mb-2"
            />
            <div className="text-sm text-gray-700">
              <p><strong>Thomas R. Toe</strong></p>
              <p>Email: Minsmodham@gmail.com</p>
            </div>
            <div className="flex gap-2 mt-2">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}