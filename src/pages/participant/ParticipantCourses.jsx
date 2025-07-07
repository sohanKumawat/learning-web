import React, { useState, useEffect } from "react";

const ParticipantCourses = ({ defaultSection }) => {
  const [activeTab, setActiveTab] = useState(defaultSection || "ENRROLED");

  useEffect(() => {
    if (defaultSection) {
      setActiveTab(defaultSection);
    }
  }, [defaultSection]);

  const courses = [
    {
      id: 1,
      category: "Mechanical",
      image:
        "https://images.pexels.com/photos/4145198/pexels-photo-4145198.jpeg",
      lessons: 29,
      duration: "2 hr 10 min",
      title: "Nidnies course to under stand about software",
      price: "$32.00",
      oldPrice: "$67.00",
      free: true,
      instructor: "Rinis Jhon",
      rating: 4,
      reviews: 44,
      status: "IN-PROGRESS",
    },
    {
      id: 2,
      category: "Development",
      image:
        "https://images.pexels.com/photos/2280548/pexels-photo-2280548.jpeg",
      lessons: 25,
      duration: "1 hr 40 min",
      title: "Minws course to under stand about solution",
      price: "$40.00",
      oldPrice: "$67.00",
      free: true,
      instructor: "Micle John",
      rating: 5,
      reviews: 44,
      status: "ENRROLED",
    },
    {
      id: 3,
      category: "UI & UX Design",
      image:
        "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
      lessons: 36,
      duration: "3 hr 40 min",
      title: "Design course to under stand about solution",
      price: "$40.00",
      oldPrice: "$67.00",
      free: true,
      instructor: "Micle Robin",
      rating: 5,
      reviews: 44,
      status: "IN-PROGRESS",
    },
    {
      id: 4,
      category: "UI & UX Design",
      image:
        "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
      lessons: 36,
      duration: "3 hr 40 min",
      title: "Design course to under stand about solution",
      price: "$40.00",
      oldPrice: "$67.00",
      free: true,
      instructor: "Micle Robin",
      rating: 5,
      reviews: 44,
      status: "IN-PROGRESS",
    },
    {
      id: 5,
      category: "UI & UX Design",
      image:
        "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg",
      lessons: 36,
      duration: "3 hr 40 min",
      title: "Design course to under stand about solution",
      price: "$40.00",
      oldPrice: "$67.00",
      free: true,
      instructor: "Micle Robin",
      rating: 5,
      reviews: 44,
      status: "COMPLETED",
    },
  ];

  const tabs = ["IN-PROGRESS", "ENRROLED", "COMPLETED", "NEW ENROLMENT"];

  const filteredCourses = courses.filter(
    (course) => course.status === activeTab
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "border-purple-600 text-purple-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-purple-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {course.category}
                </span>
                <button className="absolute top-2 right-2 text-gray-600">
                  ❤️
                </button>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
                    <span>{course.lessons} Lesson</span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6l4 2"
                        />
                      </svg>
                      {course.duration}
                    </span>
                  </div>

                  <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                    {course.title}
                  </h2>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-600 font-bold">
                      {course.price}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      {course.oldPrice}
                    </span>
                    {course.free && (
                      <span className="text-green-600 font-semibold text-sm">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt={course.instructor}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-700">
                        {course.instructor}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < course.rating ? "★" : "☆"}</span>
                      ))}
                      <span className="text-gray-500 text-xs">
                        ({course.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No courses in this tab.</p>
      )}
    </div>
  );
};

export default ParticipantCourses;
