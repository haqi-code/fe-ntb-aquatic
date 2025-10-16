import { Navigate } from "react-router-dom";
import { getUserRole, isAuthenticated } from "./auth";

export default function ProtectedRouted({ children, role }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (role && getUserRole() !== role) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
