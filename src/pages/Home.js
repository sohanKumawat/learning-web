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
      {/* ========== HERO SECTION ========== */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase text-purple-600 font-semibold bg-purple-50 rounded px-2 py-1 inline-block">
              Learn Anything
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6">
              Explore Top{" "}
              <span className="text-purple-600">Online Courses</span> Anytime,
              Anywhere
            </h1>
            <p className="text-gray-600 mb-6">
              Join thousands of learners mastering new skills across tech,
              business, design, and more.
            </p>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l px-4 py-3 w-full focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-6 rounded-r hover:bg-purple-700">
                Join Free
              </button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <img
              src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_10.png"
              alt="Online Learning"
              className="rounded-xl w-80 h-80 object-cover"
            />
            <div className="absolute -bottom-6 left-12 bg-white shadow rounded p-3 text-sm flex gap-3 items-center">
              <img
                src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_12.png"
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-semibold">Welcome aboard!</p>
                <p className="text-gray-500">New learner just signed up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEARNING PATH SECTION ========== */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            360° Education Platform for{" "}
            <span className="text-purple-600">Learning Path</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Learning",
                desc: "Courses tailored for school and college students across various subjects and boards.",
                icon: "🎓",
              },
              {
                title: "Professional Growth",
                desc: "Certifications, skill training, and mentorship by domain experts.",
                icon: "💼",
              },
              {
                title: "Beginner Friendly",
                desc: "Step-by-step foundational learning for beginners exploring new fields.",
                icon: "👶",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRENDING COURSES SECTION ========== */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">
            Trending <span className="text-purple-600">Courses</span>
          </h2>
          <div className="flex overflow-x-auto space-x-2 pb-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="min-w-[250px] border rounded p-3 bg-white shadow-sm flex-shrink-0"
              >
                <img
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/grid/grid_4.png"
                  alt="Course"
                  className="w-full h-32 object-cover rounded"
                />
                <h4 className="font-bold mt-3 mb-1 text-sm">
                  Course Title {i + 1}
                </h4>
                <p className="text-xs text-gray-500">Data & Tech</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INSTRUCTORS SECTION ========== */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">
            Top <span className="text-purple-600">Instructors</span>
          </h2>
          <div className="flex overflow-x-auto space-x-2 pb-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white p-4 rounded shadow-sm flex-shrink-0"
              >
                <img
                  src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/team/team__1.png"
                  alt="Instructor"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <h4 className="font-bold text-sm">Instructor {i + 1}</h4>
                <p className="text-xs text-gray-500">
                  UI/UX Design • Intermediate
                </p>
                <div className="text-yellow-500 text-xs mt-1">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REGISTRATION SECTION ========== */}
      <section className="bg-purple-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white text-purple-700 text-sm px-3 py-1 rounded-full font-semibold mb-4">
              Registration
            </span>
            <h3 className="text-3xl font-bold mb-4">Register Your Account</h3>
            <p className="mb-4 text-lg">Get access to 60,000+ online courses</p>
            <p className="text-sm">
              Learn something new & build your career from anywhere in the world
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4">Fill Your Registration</h4>
            <form className="space-y-3">
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Your Name"
              />
              <div className="flex gap-3">
                <input
                  className="w-1/2 border p-2 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-1/2 border p-2 rounded"
                  type="tel"
                  placeholder="Phone"
                />
              </div>
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Address"
              />
              <textarea
                className="w-full border p-2 rounded"
                placeholder="Comment"
                rows={3}
              ></textarea>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Sign Up →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL SECTION ========== */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-6">
            What <span className="text-purple-600">Learners Say</span>
          </h2>
          <div className="flex overflow-x-auto space-x-2 pb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="min-w-[300px] border rounded p-4 bg-white flex-shrink-0"
              >
                <div className="flex gap-4 mb-2">
                  <img
                    src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/testimonial/testi_2.png"
                    alt="User"
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="font-bold text-sm">User {i + 1}</p>
                    <p className="text-xs text-gray-500">B.Tech • Full Stack</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  The platform helped me upskill quickly and efficiently.
                  Instructors were top-notch.
                </p>
                <div className="text-yellow-500 text-xs">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
