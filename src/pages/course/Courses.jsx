import React from "react";
import { Link } from "react-router-dom";
import {FaClock,FaBookOpen, FaHeart, FaStar} from "react-icons/fa";

const courses = [
  {
    id: 1,
    category: "Data & Tech",
    image: "https://picsum.photos/400/250?random=1",
    lessons: 23,
    duration: "1 hr 30 min",
    title: "Foundation course to understand about software",
    price: "$32.00",
    oldPrice: "$67.00",
    isFree: false,
    author: "Mice John",
    rating: 4.5,
    reviews: 44,
    tagColor: "bg-pink-600",
  },
  {
    id: 2,
    category: "Mechanical",
    image: "https://picsum.photos/400/250?random=1",
    lessons: 29,
    duration: "2 hr 10 min",
    title: "Nidnies course to understand about software",
    price: "$32.00",
    oldPrice: "$67.00",
    isFree: true,
    author: "Rinis Jhon",
    rating: 4.5,
    reviews: 44,
    tagColor: "bg-blue-600",
  },
  {
    id: 3,
    category: "Development",
    image: "https://picsum.photos/400/250?random=1",
    lessons: 25,
    duration: "1 hr 40 min",
    title: "Minws course to understand about solution",
    price: "$40.00",
    oldPrice: "$67.00",
    isFree: true,
    author: "Mice John",
    rating: 4.5,
    reviews: 44,
    tagColor: "bg-red-600",
  },
  {
    id: 4,
    category: "Development1",
    image: "https://picsum.photos/400/250?random=1",
    lessons: 25,
    duration: "1 hr 40 min",
    title: "Minws course to understand about solution",
    price: "$40.00",
    oldPrice: "$67.00",
    isFree: true,
    author: "Mice John",
    rating: 4.5,
    reviews: 44,
    tagColor: "bg-red-600",
  }
  // add more courses as needed
];

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Comming Courses</h1>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 space-y-8 bg-white p-4 border rounded shadow-sm">
  {/* Search */}
  <div>
    <input
      type="text"
      placeholder="Search Produce"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  {/* Categories */}
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">Categories</h3>
    <ul className="space-y-2">
      <li className="flex justify-between text-gray-600 hover:bg-purple-50 px-2 py-1 rounded cursor-pointer">
        <span>Mobile Set</span> <span>03</span>
      </li>
      <li className="flex justify-between text-gray-600 hover:bg-purple-50 px-2 py-1 rounded cursor-pointer">
        <span>Raxila Dish noyte</span> <span>09</span>
      </li>
      <li className="flex justify-between text-gray-600 hover:bg-purple-50 px-2 py-1 rounded cursor-pointer">
        <span>Fresh Vegetable</span> <span>01</span>
      </li>
      <li className="flex justify-between text-gray-600 hover:bg-purple-50 px-2 py-1 rounded cursor-pointer">
        <span>Fruites</span> <span>01</span>
      </li>
    </ul>
  </div>

  {/* Tags */}
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">Tag</h3>
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full cursor-pointer hover:bg-purple-200">
        Mechanical
      </span>
      <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">
        English
      </span>
      <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">
        Computer Science
      </span>
      <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-gray-200">
        Data & Tech
      </span>
    </div>
  </div>

  {/* Skill Level */}
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">Skill Level</h3>
    <ul className="space-y-2">
      {["All", "Fullstack", "English Learn", "Intermediate", "Wordpress"].map(
        (level) => (
          <li
            key={level}
            className="text-gray-600 hover:text-purple-700 hover:underline cursor-pointer"
          >
            {level}
          </li>
        )
      )}
    </ul>
  </div>
</aside>

        {/* Main Grid */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">Showing 1-12 of 54 Results</p>
            <select className="border px-3 py-2 rounded text-gray-700">
              <option>Short by New</option>
              <option>Short by Old</option>
            </select>
          </div>

          {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
    <Link to={`/course/${course.id}`} key={course.id}>
      <div className="bg-white border rounded shadow-sm overflow-hidden relative hover:shadow-md transition">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${course.tagColor}`}
        >
          {course.category}
        </span>
        <button className="absolute top-2 right-2 text-gray-700">
          <FaHeart />
        </button>

        <div className="p-4">
          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span className="flex items-center gap-1">
              <FaBookOpen /> {course.lessons} Lesson
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> {course.duration}
            </span>
          </div>
          <h3 className="text-base font-semibold mb-2">{course.title}</h3>

          <div className="mb-2">
            <span className="text-purple-600 font-bold">{course.price}</span>{" "}
            <span className="line-through text-gray-400">
              {course.oldPrice}
            </span>{" "}
            {course.isFree && (
              <span className="text-green-600 font-semibold">Free</span>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{course.author}</span>
            <span className="flex items-center gap-1 text-yellow-500">
              <FaStar className="w-4 h-4" /> {course.rating} ({course.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              &laquo;
            </button>
            <button className="px-3 py-1 border rounded bg-purple-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">
              &raquo;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
