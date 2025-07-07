import React from "react";

const BecomeInstructor = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-purple-700">
        Become an Instructor
      </h1>
      <p className="mb-6 text-gray-700 text-lg">
        Share your expertise and inspire learners around the world! Join
        SmartLearningHub as an instructor and create impactful courses in your
        field.
      </p>
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-semibold mb-4">Why Teach With Us?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Reach a global audience of motivated learners</li>
          <li>Earn income for your knowledge and skills</li>
          <li>Flexible schedule and creative freedom</li>
          <li>Dedicated support and resources for instructors</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Get Started</h2>
        <form className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full border p-2 rounded"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Expertise / Subject Area"
            required
          />
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Tell us about your teaching experience or motivation"
            rows={4}
            required
          ></textarea>
          <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 font-semibold">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeInstructor;
