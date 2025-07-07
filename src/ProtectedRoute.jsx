import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedTypes }) => {
  const user = useSelector((state) => state.user);

  if (!user) {
    // Not logged in, redirect to home
    return <Navigate to="/" replace />;
  }

  if (allowedTypes && !allowedTypes.includes(user.userType)) {
    // User type not allowed
    return <Navigate to="/" replace />;
  }

  // User is authenticated and allowed
  return <Outlet />;
};

export default ProtectedRoute;
