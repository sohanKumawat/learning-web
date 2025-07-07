import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const dummyReviews = {
  received: [
    {
      id: 1,
      student: "John Lock",
      date: "January 30, 2030",
      course: "Speaking Korean for Beginners",
      rating: 2,
      reviewsCount: 9,
      feedback: "Good",
    },
    {
      id: 2,
      student: "John Robi",
      date: "June 30, 2025",
      course: "PHP for Beginners",
      rating: 4,
      reviewsCount: 9,
      feedback: "Awesome",
    },
    {
      id: 3,
      student: "Mice Jerry",
      date: "April 30, 2024",
      course: "WordPress for Beginners",
      rating: 3,
      reviewsCount: 9,
      feedback: "Nice Course",
    },
    {
      id: 4,
      student: "Mice Jerry",
      date: "October 30, 2013",
      course: "Speaking Korean for Beginners",
      rating: 1,
      reviewsCount: 9,
      feedback: "-",
    },
  ],
  given: [
    {
      id: 1,
      student: "Sarah Thomas",
      date: "May 10, 2025",
      course: "React Basics",
      rating: 5,
      reviewsCount: 5,
      feedback: "Very helpful course.",
      isEditing: false,
    },
  ],
};

export default function Feedback() {
  const [activeTab, setActiveTab] = useState("received");
  const [reviews, setReviews] = useState(dummyReviews);

  const handleAddFeedback = () => {
    const newId = Math.max(...reviews.given.map((r) => r.id)) + 1 || 1;
    const newReview = {
      id: newId,
      student: "",
      date: new Date().toLocaleDateString(),
      course: "",
      rating: 0,
      reviewsCount: 0,
      feedback: "",
      isEditing: true,
    };

    setReviews((prev) => ({
      ...prev,
      given: [newReview, ...prev.given],
    }));
  };

  const handleEditToggle = (id) => {
    setReviews((prev) => ({
      ...prev,
      given: prev.given.map((r) =>
        r.id === id ? { ...r, isEditing: !r.isEditing } : r
      ),
    }));
  };

  const handleChange = (id, field, value) => {
    setReviews((prev) => ({
      ...prev,
      given: prev.given.map((r) =>
        r.id === id ? { ...r, [field]: value } : r
      ),
    }));
  };

  const handleSave = (id) => {
    setReviews((prev) => ({
      ...prev,
      given: prev.given.map((r) =>
        r.id === id ? { ...r, isEditing: false } : r
      ),
    }));
    alert("Feedback saved!");
  };

  const currentReviews = reviews[activeTab];

  return (
    <div className="p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>

        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded text-sm font-medium ${
              activeTab === "received"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab("received")}
          >
            RECEIVED
          </button>
          <button
            className={`px-4 py-2 rounded text-sm font-medium ${
              activeTab === "given"
                ? "bg-purple-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab("given")}
          >
            GIVEN
          </button>
        </div>
      </div>

      {activeTab === "given" && (
        <div className="mb-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
            onClick={handleAddFeedback}
          >
            + Add Feedback
          </button>
        </div>
      )}

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-500">
            <tr>
              <th className="text-left px-6 py-3">Student</th>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Course</th>
              <th className="text-left px-6 py-3">Rating</th>
              <th className="text-left px-6 py-3">Feedback</th>
              {activeTab === "given" && (
                <th className="text-left px-6 py-3">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review, idx) => (
              <tr
                key={review.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {activeTab === "given" && review.isEditing ? (
                    <input
                      type="text"
                      value={review.student}
                      onChange={(e) =>
                        handleChange(review.id, "student", e.target.value)
                      }
                      className="border px-2 py-1 rounded w-full"
                      placeholder="Student name"
                    />
                  ) : (
                    <span className="font-medium text-gray-900">
                      {review.student}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-600">{review.date}</td>
                <td className="px-6 py-4">
                  {activeTab === "given" && review.isEditing ? (
                    <input
                      type="text"
                      value={review.course}
                      onChange={(e) =>
                        handleChange(review.id, "course", e.target.value)
                      }
                      className="border px-2 py-1 rounded w-full"
                      placeholder="Course name"
                    />
                  ) : (
                    <span className="font-medium text-gray-700">
                      {review.course}
                    </span>
                  )}
                  <span className="text-xs text-gray-500 ml-2">
                    ({review.reviewsCount} Reviews)
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`h-4 w-4 cursor-pointer ${
                          star <= review.rating
                            ? "text-purple-600"
                            : "text-gray-300"
                        }`}
                        onClick={() =>
                          activeTab === "given" &&
                          review.isEditing &&
                          handleChange(review.id, "rating", star)
                        }
                      />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  {activeTab === "given" && review.isEditing ? (
                    <textarea
                      rows={2}
                      className="w-full border border-gray-300 rounded p-2 text-sm"
                      value={review.feedback}
                      onChange={(e) =>
                        handleChange(review.id, "feedback", e.target.value)
                      }
                      placeholder="Write feedback..."
                    ></textarea>
                  ) : (
                    <span className="text-gray-700 text-sm">
                      {review.feedback || "-"}
                    </span>
                  )}
                </td>
                {activeTab === "given" && (
                  <td className="px-6 py-4">
                    {review.isEditing ? (
                      <button
                        className="bg-purple-600 text-white text-xs px-3 py-1 rounded hover:bg-purple-700"
                        onClick={() => handleSave(review.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-gray-600 text-white text-xs px-3 py-1 rounded hover:bg-gray-700"
                        onClick={() => handleEditToggle(review.id)}
                      >
                        Edit
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}

            {currentReviews.length === 0 && (
              <tr>
                <td
                  colSpan={activeTab === "given" ? 6 : 5}
                  className="text-center text-gray-500 px-6 py-8"
                >
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
