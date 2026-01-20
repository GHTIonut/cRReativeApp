import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../Components/ProfileMenu.jsx";
import "../styles/profile.css";
export function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!user) {
    navigate("/Login");
    return null;
  }

  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <div className="profilePage">
        <h1>Welcome to your profile</h1>
      </div>
    </>
  );
}
