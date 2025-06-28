import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const learners = [
  {
    id: 1,
    name: "Mirnsdo Nmdied",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Mirnsdo Nmdied",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Nidns Janicds",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 4,
    name: "Mbndie Ndne Mond",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/78.jpg",
  },
  {
    id: 5,
    name: "Mahmud Sujons",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 6,
    name: "Jons Emon",
    title: "Manager",
    image:
      "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const LearnerPage = () => {
  return (
    <div className="bg-[#f9faff] min-h-screen pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
    
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Participents
          </h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {learners.map((instructor) => (
            <div
              key={instructor.id}
              className="text-center space-y-4"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-purple-600 font-semibold">
                {instructor.title}
              </p>
              <div className="flex justify-center gap-4 text-purple-600 text-lg">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnerPage;
