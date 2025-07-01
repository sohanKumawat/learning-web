
import React, { useState } from "react";
import { Link } from "react-router-dom";

const InstructorCourseRegistration = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Form data
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    category: "",
    type: "",
    skills: [],
    languages: [],
  });

  const [introVideo, setIntroVideo] = useState({
    search: "",
    url: "",
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    startDate: "",
    language: "",
    requirements: "",
    description: "",
    tags: "",
  });

  const [curriculum, setCurriculum] = useState([]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleCourseInfoChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (courseInfo.newSkill) {
      setCourseInfo((prev) => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill],
        newSkill: "",
      }));
    }
  };

  const handleAddLanguage = () => {
    if (courseInfo.newLanguage) {
      setCourseInfo((prev) => ({
        ...prev,
        languages: [...prev.languages, prev.newLanguage],
        newLanguage: "",
      }));
    }
  };

  const handleAddTopic = () => {
    setCurriculum((prev) => [
      ...prev,
      {
        id: Date.now(),
        lectureName: "",
        quiz: "No",
        feedback: "",
        rating: "",
        lectures: [],
      },
    ]);
  };

  const handleTopicChange = (topicIndex, field, value) => {
    const updated = [...curriculum];
    updated[topicIndex][field] = value;
    setCurriculum(updated);
  };

  const handleAddLecture = (topicIndex) => {
    const newLecture = {
      title: "",
      videoUrl: "",
      videoImage: "",
      duration: "",
      docs: null,
      description: "",
    };

    const updated = [...curriculum];
    updated[topicIndex].lectures.push(newLecture);
    setCurriculum(updated);
  };

  const handleLectureChange = (topicIndex, lectureIndex, field, value) => {
    const updated = [...curriculum];
    updated[topicIndex].lectures[lectureIndex][field] = value;
    setCurriculum(updated);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

      {/* Course Info */}
      <div className="border rounded mb-4">
        <div
          className="flex justify-between p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleSection("info")}
        >
          <span className="font-semibold">Course Info</span>
          <span>{activeSection === "info" ? "▲" : "▼"}</span>
        </div>
        {activeSection === "info" && (
          <div className="p-4 space-y-4 bg-gray-50">
            <div>
              <label className="block text-gray-700 mb-1">Course Name</label>
              <input
                name="name"
                value={courseInfo.name}
                onChange={handleCourseInfoChange}
                className="w-full border rounded p-2"
                placeholder="Enter course name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Course Category</label>
              <select
                name="category"
                value={courseInfo.category}
                onChange={handleCourseInfoChange}
                className="w-full border rounded p-2"
              >
                <option value="">Select Category</option>
                <option>Mechanical</option>
                <option>Development</option>
                <option>UI & UX Design</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Course Type</label>
              <select
                name="type"
                value={courseInfo.type}
                onChange={handleCourseInfoChange}
                className="w-full border rounded p-2"
              >
                <option value="">Select Type</option>
                <option>Paid</option>
                <option>Free</option>
              </select>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-gray-700 mb-1">Skills</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={courseInfo.newSkill || ""}
                  onChange={(e) =>
                    setCourseInfo((prev) => ({
                      ...prev,
                      newSkill: e.target.value,
                    }))
                  }
                  className="flex-1 border p-2 rounded"
                  placeholder="Add skill..."
                />
                <button
                  onClick={handleAddSkill}
                  className="bg-purple-600 text-white px-4 rounded"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {courseInfo.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="block text-gray-700 mb-1">Languages</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={courseInfo.newLanguage || ""}
                  onChange={(e) =>
                    setCourseInfo((prev) => ({
                      ...prev,
                      newLanguage: e.target.value,
                    }))
                  }
                  className="flex-1 border p-2 rounded"
                  placeholder="Add language..."
                />
                <button
                  onClick={handleAddLanguage}
                  className="bg-purple-600 text-white px-4 rounded"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {courseInfo.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Course Intro Video */}
      <div className="border rounded mb-4">
        <div
          className="flex justify-between p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleSection("video")}
        >
          <span className="font-semibold">Course Intro Video</span>
          <span>{activeSection === "video" ? "▲" : "▼"}</span>
        </div>
        {activeSection === "video" && (
          <div className="p-4 bg-gray-50 space-y-4">
            <input
              value={introVideo.search}
              onChange={(e) =>
                setIntroVideo((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
              className="w-full border p-2 rounded"
              placeholder="Select video search"
            />
            <input
              value={introVideo.url}
              onChange={(e) =>
                setIntroVideo((prev) => ({
                  ...prev,
                  url: e.target.value,
                }))
              }
              className="w-full border p-2 rounded"
              placeholder="Add your video URL here"
            />
            <p className="text-sm text-gray-500">
              Example: https://www.youtube.com/watch?v=yourvideoid
            </p>
          </div>
        )}
      </div>

      {/* Course Builder */}
      <div className="border rounded mb-4">
        <div
          className="flex justify-between p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleSection("builder")}
        >
          <span className="font-semibold">Course Builder</span>
          <span>{activeSection === "builder" ? "▲" : "▼"}</span>
        </div>
        {activeSection === "builder" && (
          <div className="p-4 bg-gray-50">
            <button
              onClick={handleAddTopic}
              className="bg-purple-600 text-white px-4 py-2 rounded mb-4"
            >
              Add New Topic
            </button>

            {curriculum.map((topic, tIndex) => (
              <div
                key={topic.id}
                className="border p-4 rounded mb-4 bg-white"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    placeholder="Lecture Name"
                    className="border p-2 rounded"
                    value={topic.lectureName}
                    onChange={(e) =>
                      handleTopicChange(tIndex, "lectureName", e.target.value)
                    }
                  />
                  <select
                    className="border p-2 rounded"
                    value={topic.quiz}
                    onChange={(e) =>
                      handleTopicChange(tIndex, "quiz", e.target.value)
                    }
                  >
                    <option value="No">Quiz: No</option>
                    <option value="Yes">Quiz: Yes</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    placeholder="Feedback"
                    className="border p-2 rounded"
                    value={topic.feedback}
                    onChange={(e) =>
                      handleTopicChange(tIndex, "feedback", e.target.value)
                    }
                  />
                  <input
                    placeholder="Rating"
                    className="border p-2 rounded"
                    value={topic.rating}
                    onChange={(e) =>
                      handleTopicChange(tIndex, "rating", e.target.value)
                    }
                  />
                </div>

                {/* Lectures list */}
                {topic.lectures.map((lecture, lIndex) => (
                  <div
                    key={lIndex}
                    className="border p-4 rounded mb-4 bg-gray-50"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                      <input
                        placeholder="Title"
                        className="border p-2 rounded"
                        value={lecture.title}
                        onChange={(e) =>
                          handleLectureChange(
                            tIndex,
                            lIndex,
                            "title",
                            e.target.value
                          )
                        }
                      />
                      <input
                        placeholder="Video URL"
                        className="border p-2 rounded"
                        value={lecture.videoUrl}
                        onChange={(e) =>
                          handleLectureChange(
                            tIndex,
                            lIndex,
                            "videoUrl",
                            e.target.value
                          )
                        }
                      />
                      <input
                        placeholder="Video Image URL"
                        className="border p-2 rounded"
                        value={lecture.videoImage}
                        onChange={(e) =>
                          handleLectureChange(
                            tIndex,
                            lIndex,
                            "videoImage",
                            e.target.value
                          )
                        }
                      />
                      <input
                        placeholder="Duration"
                        className="border p-2 rounded"
                        value={lecture.duration}
                        onChange={(e) =>
                          handleLectureChange(
                            tIndex,
                            lIndex,
                            "duration",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="file"
                        className="border p-2 rounded w-full"
                        onChange={(e) =>
                          handleLectureChange(
                            tIndex,
                            lIndex,
                            "docs",
                            e.target.files[0]
                          )
                        }
                      />
                    </div>
                    <textarea
                      placeholder="Description"
                      className="border p-2 rounded w-full"
                      value={lecture.description}
                      onChange={(e) =>
                        handleLectureChange(
                          tIndex,
                          lIndex,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}

                <button
                  onClick={() => handleAddLecture(tIndex)}
                  className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Add Lecture
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Additional Information */}
      <div className="border rounded mb-4">
        <div
          className="flex justify-between p-4 cursor-pointer bg-gray-50"
          onClick={() => toggleSection("additional")}
        >
          <span className="font-semibold">Additional Information</span>
          <span>{activeSection === "additional" ? "▲" : "▼"}</span>
        </div>
        {activeSection === "additional" && (
          <div className="p-4 bg-gray-50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                placeholder="Start Date"
                className="border p-2 rounded"
                value={additionalInfo.startDate}
                onChange={(e) =>
                  setAdditionalInfo((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }))
                }
              />
              <input
                placeholder="Language"
                className="border p-2 rounded"
                value={additionalInfo.language}
                onChange={(e) =>
                  setAdditionalInfo((prev) => ({
                    ...prev,
                    language: e.target.value,
                  }))
                }
              />
            </div>
            <textarea
              placeholder="Requirements"
              className="border p-2 rounded w-full"
              rows={3}
              value={additionalInfo.requirements}
              onChange={(e) =>
                setAdditionalInfo((prev) => ({
                  ...prev,
                  requirements: e.target.value,
                }))
              }
            />
            <textarea
              placeholder="Description"
              className="border p-2 rounded w-full"
              rows={3}
              value={additionalInfo.description}
              onChange={(e) =>
                setAdditionalInfo((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
            <textarea
              placeholder="Course Tags"
              className="border p-2 rounded w-full"
              rows={3}
              value={additionalInfo.tags}
              onChange={(e) =>
                setAdditionalInfo((prev) => ({
                  ...prev,
                  tags: e.target.value,
                }))
              }
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Update Info
            </button>
          </div>
        )}
      </div>

      {/* Example navigation to instructor page */}
      <Link
        to={`/instructor/123`}
        key={123}
        className="text-purple-600 hover:underline text-sm"
      >
        Go to Instructor Profile
      </Link>
    </div>
  );
};

export default InstructorCourseRegistration;

