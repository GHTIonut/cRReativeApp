import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to your profile</h1>

      {user ? (
        <div>
          <p>Your ID: {user.id}</p>
          <p>Your username: {user.username}</p>
          <p>Your email: {user.email}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
