import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteGuest({ children }) {
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn) {
    return <Navigate to="/Profile" replace />;
  }

  return children;
}
