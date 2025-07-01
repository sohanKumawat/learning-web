
import React from "react";
import { FaBook, FaUsers, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
export default function InstructorDashboard() {
  const cards = [
    { icon: <FaBook />, label: "Enrolled Courses", value: "27+" },
    { icon: <FaBook />, label: "Total Courses", value: "14+" },
    { icon: <FaBook />, label: "Active Courses", value: "8+" },
    { icon: <FaUsers />, label: "Total Students", value: "10k" },
    { icon: <FaCheckCircle />, label: "Complete Courses", value: "5k" },
    { icon: <FaMoneyBillWave />, label: "Total Earning", value: "30,000+" },
  ];

  return (
    <div className="p-0 font-sans">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded shadow flex items-center gap-4"
          >
            <div className="text-pink-500 text-3xl">{item.icon}</div>
            <div>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Total Feedbacks</h2>
          <button className="text-purple-600 text-sm hover:underline">
            See More..
          </button>
        </div>
        <table className="w-full text-sm">
          <thead className="text-gray-500 text-left border-b">
            <tr>
              <th className="py-2">Course Name</th>
              <th className="py-2">Enrolled</th>
              <th className="py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Javascript", enrolled: 1100, rating: 5 },
              { name: "PHP", enrolled: 700, rating: 4 },
              { name: "HTML", enrolled: 1350, rating: 5 },
              { name: "Graphic", enrolled: 1266, rating: 5 },
            ].map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{row.name}</td>
                <td className="py-2">{row.enrolled}</td>
                <td className="py-2">
                  {Array.from({ length: row.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500">★</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
