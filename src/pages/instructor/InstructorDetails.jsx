import React from "react";
import {
  FaStar,
  FaUser,
  FaBook,
  FaCheckCircle,
  FaUsers,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaInbox,
  FaHeart,
  FaClipboard,
  FaHistory,
} from "react-icons/fa";


export default function InstructorDetails() {
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
        <button className="mt-4 sm:mt-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2">
          Create a New Course
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r border-gray-200">
          <nav className="divide-y divide-gray-200 p-4">
            {/* Welcome Section */}
            <div>
              <ul className="space-y-2">
                <li className="text-purple-600 font-medium flex items-center gap-2">
                  <FaUser /> Dashboard
                </li>
                <li className="text-gray-600 hover:text-purple-600 flex items-center gap-2 cursor-pointer">
                  <FaUser /> My Profile
                </li>
                  <li className="text-gray-600 hover:text-purple-600 flex items-center gap-2 cursor-pointer">
                  <FaBook /> My Course
                </li>
                <li className="text-gray-600 hover:text-purple-600 flex items-center gap-2 cursor-pointer">
                  <FaInbox /> Conversion
                  <span className="ml-auto text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">
                    9+
                  </span>
                </li>
                <li className="text-gray-600 hover:text-purple-600 flex items-center gap-2 cursor-pointer">
                  <FaStar /> Learner Feedbacks
                </li>
                <li className="text-gray-600 hover:text-purple-600 flex items-center gap-2 cursor-pointer">
                  <FaHistory /> Payment Details
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-4">
          <h1 className="text-xl font-semibold mb-4">Dashboard</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaBook className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">27+</h2>
                <p className="text-sm text-gray-500">Enrolled Courses</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaBook className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">14+</h2>
                <p className="text-sm text-gray-500">Total Courses</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaBook className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">8+</h2>
                <p className="text-sm text-gray-500">Active Courses</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaUsers className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">10k</h2>
                <p className="text-sm text-gray-500">Total Students</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaCheckCircle className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">5k</h2>
                <p className="text-sm text-gray-500">Complete Courses</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-center gap-4">
              <FaMoneyBillWave className="text-pink-500 text-3xl" />
              <div>
                <h2 className="text-xl font-bold">30,000+</h2>
                <p className="text-sm text-gray-500">Total Earning</p>
              </div>
            </div>
          </div>

          {/* Total Feedbacks Table */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between mb-2">
              <h2 className="text-lg font-semibold">Total Feedbacks</h2>
              <button className="text-purple-600 text-sm hover:underline">
                See More...
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b">
                  <tr className="text-gray-600">
                    <th className="py-2">Course Name</th>
                    <th className="py-2">Enrolled</th>
                    <th className="py-2">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Javascript", enrolled: 1100, stars: 5 },
                    { name: "PHP", enrolled: 700, stars: 4 },
                    { name: "HTML", enrolled: 1350, stars: 4 },
                    { name: "Graphic", enrolled: 1266, stars: 4 },
                  ].map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-2">{item.name}</td>
                      <td className="py-2">{item.enrolled}</td>
                      <td className="py-2">
                        {Array.from({ length: item.stars }).map((_, i) => (
                          <FaStar
                            key={i}
                            className="inline text-yellow-500 mr-1"
                          />
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
