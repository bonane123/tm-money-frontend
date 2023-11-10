import { Outlet, Navigate } from "react-router-dom";
import { getAuthToken } from "./auth";

const ProtectedRoute = ({ role }) => {
  let storedValue = getAuthToken();

  if (!storedValue) {
    return <Navigate to="/login" />;
  }
  if (storedValue.data.user.role === role) {
    return <Outlet />;
  } else if (role === "user" || role === "admin") {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/" />;
  } else {
    // Redirect to the home page or another appropriate route if the user is authenticated but doesn't have the required role
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
