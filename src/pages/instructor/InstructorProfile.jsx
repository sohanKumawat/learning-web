
import React, { useState } from "react";

export default function InstructorProfile() {
  const initialProfile = {
    registrationDate: "20, January 2024 9:00 PM",
    firstName: "Miche",
    lastName: "Obema",
    username: "obema007",
    email: "obema@example.com",
    phone: "+55 669 4456 25987",
    expert: "Graphics Design",
    biography:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam, delectus accusamus nesciunt laborum repellat laboriosam, deserunt possimus itaque iusto perferendis voluptatum quaerat cupiditate vitae. Esse aut illum perferendis nulla, corporis impedit quasi alias est!",
    qualification: ["B.Sc", "M.Sc"],
    expertise: ["UI Design", "UX Research", "Graphics"],
  };

  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const allQualifications = ["B.Sc", "M.Sc", "PhD", "Diploma"];
  const allExpertise = [
    "UI Design",
    "UX Research",
    "Graphics",
    "Web Development",
    "Illustration",
  ];

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleMultiChange = (field, value) => {
    const current = profile[field] || [];
    if (current.includes(value)) {
      setProfile({
        ...profile,
        [field]: current.filter((item) => item !== value),
      });
    } else {
      setProfile({
        ...profile,
        [field]: [...current, value],
      });
    }
  };

  const handleSave = () => {
    // Could do an API call here
    setIsEdit(false);
  };

  return (
    <div className="p-0 font-sans">
      <div className="p-0 font-sans">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Profile</h2>
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="text-sm px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {isEdit ? "Cancel" : "Edit"}
          </button>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <ProfileField
            label="First Name"
            value={profile.firstName}
            isEdit={isEdit}
            onChange={(val) => handleChange("firstName", val)}
          />

          <ProfileField
            label="Last Name"
            value={profile.lastName}
            isEdit={isEdit}
            onChange={(val) => handleChange("lastName", val)}
          />

          <ProfileField
            label="Username"
            value={profile.username}
            isEdit={isEdit}
            onChange={(val) => handleChange("username", val)}
          />

          <ProfileField
            label="Email"
            value={profile.email}
            isEdit={isEdit}
            onChange={(val) => handleChange("email", val)}
          />

          <ProfileField
            label="Phone Number"
            value={profile.phone}
            isEdit={isEdit}
            onChange={(val) => handleChange("phone", val)}
          />

          <ProfileField
            label="Expert"
            value={profile.expert}
            isEdit={isEdit}
            onChange={(val) => handleChange("expert", val)}
          />

          {/* Qualification - multi */}
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">
              Qualification
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {isEdit ? (
                <div className="flex flex-wrap gap-2">
                  {allQualifications.map((q) => (
                    <span
                      key={q}
                      onClick={() => handleMultiChange("qualification", q)}
                      className={`px-2 py-1 rounded-full text-xs cursor-pointer ${
                        profile.qualification?.includes(q)
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {q}
                    </span>
                  ))}
                </div>
              ) : profile.qualification?.length ? (
                <div className="flex flex-wrap gap-2">
                  {profile.qualification.map((q) => (
                    <span
                      key={q}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              ) : (
                "-"
              )}
            </dd>
          </div>

          {/* Expertise - multi */}
          <div>
            <dt className="text-sm font-medium text-gray-500 mb-1">
              Expertise
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {isEdit ? (
                <div className="flex flex-wrap gap-2">
                  {allExpertise.map((ex) => (
                    <span
                      key={ex}
                      onClick={() => handleMultiChange("expertise", ex)}
                      className={`px-2 py-1 rounded-full text-xs cursor-pointer ${
                        profile.expertise?.includes(ex)
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              ) : profile.expertise?.length ? (
                <div className="flex flex-wrap gap-2">
                  {profile.expertise.map((ex) => (
                    <span
                      key={ex}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              ) : (
                "-"
              )}
            </dd>
          </div>

          <div className="md:col-span-2">
            <dt className="text-sm font-medium text-gray-500 mb-1">
              Biography
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {isEdit ? (
                <textarea
                  value={profile.biography}
                  onChange={(e) => handleChange("biography", e.target.value)}
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                  rows={4}
                />
              ) : (
                <p>{profile.biography}</p>
              )}
            </dd>
          </div>
           <ProfileField
            label="Registration Date"
            value={profile.registrationDate}
            isEdit={false}
          />
        </dl>

        {isEdit && (
          <div className="mt-6">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 text-sm"
            >
              Save Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileField({ label, value, isEdit, onChange }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500 mb-1">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">
        {isEdit ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          />
        ) : (
          <p>{value || "-"}</p>
        )}
      </dd>
    </div>
  );
}
