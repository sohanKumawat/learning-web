
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Instructors = [
  {
    id: 1,
    name: "Mirnsdo Nmdied",
    title: "Manager",
    location: "New York",
    courseName: "JavaScript Basics",
    skillLevel: "Intermediate",
    price: 120,
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Nidns Janicds",
    title: "Senior Developer",
    location: "Delhi",
    courseName: "React Fundamentals",
    skillLevel: "Beginner",
    price: 99,
    rating: 4.0,
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 3,
    name: "Mbndie Ndne Mond",
    title: "UI Designer",
    location: "London",
    courseName: "Design Systems",
    skillLevel: "Advanced",
    price: 150,
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 4,
    name: "Mahmud Sujons",
    title: "AI Specialist",
    location: "Berlin",
    courseName: "Machine Learning",
    skillLevel: "Advanced",
    price: 200,
    rating: 5.0,
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    id: 5,
    name: "Jons Emon",
    title: "Instructor",
    location: "Tokyo",
    courseName: "Python Basics",
    skillLevel: "Beginner",
    price: 75,
    rating: 4.2,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const InstructorCard = ({ instructor }) => (
  <div key={instructor.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 text-center">
     <Link to={`/instructor/${instructor.id}`} key={instructor.id}>
    <img
      src={instructor.image}
      alt={instructor.name}
      className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
    />
    <h3 className="text-lg font-bold">{instructor.name}</h3>
    <p className="text-purple-600 text-sm mb-1">{instructor.title}</p>
    <p className="text-gray-500 text-sm mb-2">{instructor.location}</p>
    <p className="text-gray-700 text-sm mb-1">
      Course: <span className="font-medium">{instructor.courseName}</span>
    </p>
    <p className="text-gray-700 text-sm mb-1">
      Skill Level: {instructor.skillLevel}
    </p>
    <p className="text-gray-700 text-sm mb-1">
      Price: ${instructor.price}
    </p>
    <p className="text-yellow-500 text-sm mb-2">
      Rating: {instructor.rating} ⭐
    </p>
    <div className="flex justify-center gap-3 text-purple-600 text-lg">
      <FaTwitter className="cursor-pointer hover:text-purple-800" />
      <FaFacebookF className="cursor-pointer hover:text-purple-800" />
      <FaInstagram className="cursor-pointer hover:text-purple-800" />
      <FaLinkedinIn className="cursor-pointer hover:text-purple-800" />
    </div>
  </Link>
  </div>
);

const banners = [
  { label: "Become an Instructor" },
  { label: "Trending Courses" },
  { label: "AI Courses" },
  { label: "Academic Courses" },
];

const ExpertInstructors = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-4 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded p-2 text-sm"
            placeholder="Search instructor name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Name
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded p-2 text-sm"
            placeholder="e.g. React"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            className="w-full border-gray-300 rounded p-2 text-sm"
            placeholder="e.g. Delhi"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skill Level
          </label>
          <select className="w-full border-gray-300 rounded p-2 text-sm">
            <option value="">All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Instructor Rating
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            className="w-full"
          />
        </div>

        <button className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 mt-2 text-sm">
          Apply Filters
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Banners */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-4">
            {banners.map((banner, i) => (
              <div
                key={i}
                className="min-w-[200px] h-24 flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow cursor-pointer hover:opacity-90"
              >
                {banner.label}
              </div>
            ))}
          </div>
        </div>

        {/* Instructor Grid */}
        <h2 className="text-2xl font-bold mb-4">Our Expert Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Instructors.map((inst) => (
            <InstructorCard key={inst.id} instructor={inst} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExpertInstructors;

