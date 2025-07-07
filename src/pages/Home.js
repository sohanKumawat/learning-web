import React from "react";
import {
  FaPlay,
  FaLock,
  FaFileAlt,
  FaStar,
  FaClock,
  FaBookOpen,
  FaChalkboardTeacher,
  FaRocket,
  FaRegSmile,
} from "react-icons/fa";

const trendingCourses = [
  {
    title: "React for Beginners",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    students: 1200,
  },
  {
    title: "Python Data Science",
    category: "Data Science",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    students: 950,
  },
  {
    title: "UI/UX Design Essentials",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    students: 800,
  },
  {
    title: "Machine Learning A-Z",
    category: "AI & ML",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    students: 1100,
  },
  {
    title: "Digital Marketing Mastery",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    students: 700,
  },
  {
    title: "Excel for Business",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    students: 650,
  },
];

const instructors = [
  {
    name: "Priya Sharma",
    expertise: "Data Science",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
  },
  {
    name: "John Doe",
    expertise: "Web Development",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
  },
  {
    name: "Sara Lee",
    expertise: "UI/UX Design",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.7,
  },
  {
    name: "Michael Brown",
    expertise: "AI & ML",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4.8,
  },
];

const testimonials = [
  {
    name: "Amit Kumar",
    course: "React for Beginners",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: "The platform helped me upskill quickly and efficiently. Instructors were top-notch!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    course: "Python Data Science",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Loved the hands-on projects and the community support.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    course: "UI/UX Design Essentials",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    text: "Great content and easy to follow. Highly recommended!",
    rating: 4,
  },
];

const Home = () => {
  return (
    <div className="font-sans">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase text-purple-700 font-semibold bg-purple-100 rounded px-2 py-1 inline-block mb-2">
              Learn Anything, Anytime
            </span>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Unlock Your <span className="text-purple-600">Potential</span>{" "}
              with
              <br /> World-Class Online Courses
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of learners mastering new skills across tech,
              business, design, and more. Learn from top instructors, at your
              own pace.
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l px-4 py-3 w-full focus:outline-none"
              />
              <button className="bg-purple-600 text-white px-6 rounded-r hover:bg-purple-700 font-semibold">
                Join Free
              </button>
            </form>
          </div>
          <div className="flex justify-center relative">
            <img
              src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_10.png"
              alt="Online Learning"
              className="rounded-xl w-96 h-96 object-cover shadow-lg"
            />
            <div className="absolute -bottom-8 left-16 bg-white shadow-lg rounded-xl p-4 text-sm flex gap-3 items-center border border-purple-100">
              <img
                src="https://html.themewin.com/edurcok-preview-tailwind/edurock/assets/images/about/about_12.png"
                alt="Student"
                className="w-12 h-12 rounded-full object-cover"
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
      <section className="bg-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why <span className="text-purple-600">SmartLearningHub?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                desc: "Learn from industry leaders and real-world practitioners.",
                icon: (
                  <FaChalkboardTeacher className="text-4xl text-purple-500 mx-auto mb-2" />
                ),
              },
              {
                title: "Flexible Learning",
                desc: "Self-paced courses, lifetime access, and mobile-friendly.",
                icon: (
                  <FaBookOpen className="text-4xl text-purple-500 mx-auto mb-2" />
                ),
              },
              {
                title: "Career Growth",
                desc: "Certifications, projects, and mentorship to boost your career.",
                icon: (
                  <FaRocket className="text-4xl text-purple-500 mx-auto mb-2" />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-purple-50 p-8 rounded-xl shadow text-center hover:shadow-lg transition"
              >
                {item.icon}
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRENDING COURSES SECTION ========== */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">
            Trending <span className="text-purple-600">Courses</span>
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-200">
            {trendingCourses.map((course, i) => (
              <div
                key={i}
                className="min-w-[270px] border rounded-xl p-4 bg-white shadow-sm flex-shrink-0 hover:shadow-lg transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 object-cover rounded mb-3"
                />
                <h4 className="font-bold mb-1 text-base line-clamp-2 min-h-[48px]">
                  {course.title}
                </h4>
                <p className="text-xs text-gray-500 mb-2">{course.category}</p>
                <div className="flex items-center text-yellow-500 text-xs mb-1">
                  <FaStar className="mr-1" /> {course.rating} ({course.students}{" "}
                  students)
                </div>
                <button className="mt-2 w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition">
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INSTRUCTORS SECTION ========== */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">
            Meet Our <span className="text-purple-600">Instructors</span>
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-200">
            {instructors.map((inst, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white p-6 rounded-xl shadow-sm flex-shrink-0 hover:shadow-lg transition text-center"
              >
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-20 h-20 rounded-full mb-3 mx-auto border-2 border-purple-200"
                />
                <h4 className="font-bold text-base mb-1">{inst.name}</h4>
                <p className="text-xs text-gray-500 mb-1">{inst.expertise}</p>
                <div className="text-yellow-500 text-xs mb-2">
                  {Array(Math.round(inst.rating))
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} className="inline" />
                    ))}
                  <span className="ml-1 text-gray-600">{inst.rating}</span>
                </div>
                <button className="bg-purple-50 text-purple-700 px-4 py-2 rounded font-semibold hover:bg-purple-100 transition text-xs">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL SECTION ========== */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8">
            What <span className="text-purple-600">Learners Say</span>
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-purple-200">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[320px] border rounded-xl p-6 bg-white flex-shrink-0 hover:shadow-lg transition"
              >
                <div className="flex gap-4 mb-3 items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-full w-14 h-14 border-2 border-purple-100"
                  />
                  <div>
                    <p className="font-bold text-base">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{t.text}</p>
                <div className="text-yellow-500 text-xs">
                  {Array(t.rating)
                    .fill(0)
                    .map((_, idx) => (
                      <FaStar key={idx} className="inline" />
                    ))}
                </div>
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
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 font-semibold">
                Sign Up →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
