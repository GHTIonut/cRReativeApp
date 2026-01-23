import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileMenu from "../Components/ProfileMenu.jsx";
import "../styles/profile.css";

export function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState(null);
  if (!user) {
    navigate("/Login");
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getPersonalData() {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/getPersonalInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setPersonalInfo(data);
    }
    getPersonalData();
  });

  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <div className="profilePage">
        <h1>Your cosmic space awaits, {user.username}</h1>
        {personalInfo && (
          <div className="personalInfoDisplay">
            <h2>Your personal info</h2>
            <p>
              <strong>Zodiac sign:</strong> {personalInfo.sign}
            </p>
            <p>
              <strong>Country:</strong> {personalInfo.country}
            </p>
            <p>
              <strong>City:</strong> {personalInfo.city}
            </p>
            <p>
              <strong>Birthday:</strong> {personalInfo.birthday}
            </p>
            <p>
              <strong>Birth minute:</strong> {personalInfo.birthMinute}
            </p>
            <p>
              <strong>Birth second:</strong> {personalInfo.birthSecond}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
