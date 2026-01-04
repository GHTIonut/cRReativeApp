import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="profilePage">
      <h1>Welcome to your profile</h1>

      {user ? (
        <div>
          <p>Your username: {user.username}</p>
          <p>Your email: {user.email}</p>
        </div>
      ) : (
        navigate("/logIn")
      )}
    </div>
  );
}
