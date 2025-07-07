import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { logout } from "./UserStore";
import Signup from "./Signup";

const UserLogin = ({
  btnClassName = "text-blue-600 hover:underline font-semibold",
}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    setAccountOpen(false);
    navigate("/");
  };

  return (
    <div className="relative text-sm font-medium text-right cursor-pointer">
      {!user ? (
        <div className="flex items-center space-x-2 text-sm">
          <button
            onClick={() => setShowLoginModal(true)}
            className={btnClassName}
          >
            Sign In
          </button>

          {showLoginModal && (
            <Signup onClose={() => setShowLoginModal(false)} />
          )}
        </div>
      ) : (
        <div className="flex items-center relative">
          {/* Overlay for outside click */}
          {accountOpen && (
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setAccountOpen(false)}
              aria-label="Close account menu overlay"
            />
          )}
          <div
            onClick={() => setAccountOpen((prev) => !prev)}
            className="flex items-center z-[10000]"
            style={{ position: "relative" }}
          >
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt="User"
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
            ) : (
              <FaUserCircle className="text-2xl text-gray-600" />
            )}
            <FaChevronDown className="text-xs ml-1 text-black font-semibold" />
          </div>

          {accountOpen && (
            <div className="fixed right-0 top-16 mr-4 w-64 bg-white shadow-2xl rounded-xl border border-gray-200 z-[9999] overflow-hidden animate-fade-in">
              {/* Header Section */}
              <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-purple-100 to-pink-100 border-b">
                <img
                  src={user.imageUrl}
                  alt="User"
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-300 shadow"
                />
                <div>
                  <h2 className="font-bold text-gray-800 text-base mb-1 flex items-center gap-2">
                    {user.name}
                  </h2>
                  <p className="text-xs text-gray-500">{user.emailId}</p>
                </div>
              </div>

              {/* Menu Section */}
              <div className="flex flex-col py-2 text-sm text-gray-700 bg-white">
                <Link
                  to={getProfileRoute(user)}
                  className="px-6 py-3 hover:bg-purple-50 flex items-center gap-2 transition-colors duration-150"
                  onClick={() => setAccountOpen(false)}
                >
                  <span className="material-icons text-purple-400 text-base">
                    Dashboard
                  </span>
                </Link>
                <Link
                  to={getCoursesRoute(user)}
                  className="px-6 py-3 hover:bg-purple-50 flex items-center gap-2 transition-colors duration-150"
                  onClick={() => setAccountOpen(false)}
                >
                  <span className="material-icons text-purple-400 text-base">
                    My Courses
                  </span>
                </Link>
                <Link
                  to={getProfileRoute(user)}
                  className="px-6 py-3 hover:bg-purple-50 flex items-center gap-2 transition-colors duration-150"
                  onClick={() => setAccountOpen(false)}
                >
                  <span className="material-icons text-purple-400 text-base">
                    My Profile
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-6 py-3 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors duration-150 border-t border-gray-100"
                >
                  <span className="material-icons text-red-400 text-base">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function getProfileRoute(user) {
  if (!user) return "/";
  if (user.userType === "instructor" && user.id)
    return "/instructor/" + user.id;
  if (user.userType === "participant" && user.id)
    return "/participant/" + user.id;
  if (user.userType === "admin" && user.id) return "/admin/" + user.id;
  return "/";
}

function getCoursesRoute(user) {
  if (!user || !user.id) return "/";
  if (user.userType === "instructor" && user.id)
    return "/instructor/" + user.id;
  if (user.userType === "participant" && user.id)
    return "/participant/" + user.id;
  if (user.userType === "admin" && user.id) return "/admin/" + user.id;
  return "/";
}

export default UserLogin;
