import React from "react";
import {
  FaPlay,
  FaLock,
  FaFileAlt,
  FaStar,
  FaClock,
  FaBookOpen,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="font-sans">
      {/* ========== SECTION 1 ========== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              Education
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Cloud-based LMS <br /> Trusted by 1000+
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing typesetting
              industry. Lorem Ipsum has been
            </p>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 rounded-l px-4 py-3 w-full focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-6 rounded-r hover:bg-purple-700">
                Sign Up
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex justify-center relative">
            <img
              src="https://images.unsplash.com/photo-1614283626809-7c73ff892cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
              alt=""
              className="rounded-xl w-80 h-80 object-cover"
            />
            <div className="absolute -bottom-6 left-12 bg-white shadow-lg rounded p-3 text-sm flex gap-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1614283626809-7c73ff892cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-semibold">Congratulations!!</p>
                <p className="text-gray-500">Your Admission Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center text-center border p-6 rounded-lg">
            <FaPlay className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Video Training</h3>
            <p className="text-gray-500 text-sm">With unlimited courses</p>
          </div>
          <div className="flex flex-col items-center text-center border p-6 rounded-lg">
            <FaLock className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Expert Teacher</h3>
            <p className="text-gray-500 text-sm">With unlimited courses</p>
          </div>
          <div className="flex flex-col items-center text-center border p-6 rounded-lg">
            <FaFileAlt className="text-purple-600 text-3xl mb-4" />
            <h3 className="font-bold mb-2">Versatile Course</h3>
            <p className="text-gray-500 text-sm">With unlimited courses</p>
          </div>
        </div>

        {/* Welcome section */}
        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496799515-6c2e3b0e8c64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt=""
              className="rounded-xl w-80 h-auto"
            />
          </div>
          <div>
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              About Us
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Welcome to the <span className="underline decoration-pink-500">Online</span> Learning Center
            </h2>
            <p className="text-gray-500 mb-6">
              Forging relationships between multi to national Governments and
              global NGOs begins.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Explore a variety of fresh educational teach</li>
              <li>✓ Explore a variety of fresh educational teach</li>
              <li>✓ Explore a variety of fresh educational teach</li>
            </ul>
            <button className="mt-6 bg-purple-600 text-white px-5 py-3 rounded hover:bg-purple-700">
              More About →
            </button>
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
                Course List
              </span>
              <h3 className="text-2xl font-bold mt-3">
                Populer <span className="underline decoration-pink-500">Subjects</span>
              </h3>
            </div>
            <button className="bg-pink-500 text-white px-5 py-2 rounded text-sm">
              All Categories →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Business Studies",
              "Programming Tech",
              "Artist & Design",
              "Machine Learning",
              "Health & Fitness",
              "Marketing Analysis",
            ].map((subject) => (
              <div
                key={subject}
                className="border rounded-lg p-4 text-center hover:shadow-lg transition"
              >
                <h4 className="font-bold text-gray-700 mb-1">{subject}</h4>
                <p className="text-gray-400 text-sm">Business is success</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <hr className="border-t border-gray-200 my-12" />

      {/* ========== SECTION 2 ========== */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              Course List
            </span>
            <h2 className="text-3xl font-bold mt-4">
              Perfect Online <span className="underline decoration-pink-500">Course</span> <br />
              Your Career
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["All", "Computer Science", "Data science", "Engineering", "Web Development", "Architecture"].map(
              (cat) => (
                <button
                  key={cat}
                  className="border border-purple-600 text-purple-600 px-4 py-2 rounded text-sm hover:bg-purple-600 hover:text-white"
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white border rounded overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    Data & Tech
                  </span>
                  <h4 className="font-bold text-gray-800 mt-2 mb-2 text-sm">
                    Foundation course to understand about software
                  </h4>
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span className="flex gap-1 items-center">
                      <FaBookOpen /> 23 Lesson
                    </span>
                    <span className="flex gap-1 items-center">
                      <FaClock /> 1 hr 30 min
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 font-bold">$32.00</span>
                    <span className="flex items-center text-yellow-500">
                      <FaStar className="w-4 h-4" /> 4.5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATOR */}
      <hr className="border-t border-gray-200 my-12" />

      {/* ========== SECTION 3 ========== */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              Event List
            </span>
            <h2 className="text-3xl font-bold mt-4">
              We Arrange <span className="underline decoration-pink-500">learning</span> Event for students
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
              <button
                key={day}
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-600 hover:text-white text-sm"
              >
                {day}
              </button>
            ))}
          </div>

          {/* Event List */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-6 border p-6 rounded shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    Forging relationships between multi to national governments
                    and global.
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">
                    10.00am - 11.00 am ·{" "}
                    <span className="text-purple-600">Mirnsdo JH</span> - Event
                    Speaker
                  </p>
                  <button className="text-purple-600 text-sm hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-16 text-center">
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              Course List
            </span>
            <h3 className="text-3xl font-bold mt-4">
              Client <span className="underline decoration-pink-500">Testimonial</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="border p-6 rounded shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1590080877631-1a7c4ba5ab02?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-700">Mirnsdo Jons</p>
                    <p className="text-sm text-gray-500">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-500 mb-4 text-sm">
                  The other hand we denounce with righteous indignation men who
                  are so beguiled and demoralized.
                </p>
                <span className="text-yellow-500 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
