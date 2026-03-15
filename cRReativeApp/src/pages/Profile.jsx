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
  }, []);

  let ascendent = "";

  if (personalInfo) {
    const hour = personalInfo.birthHour;
    const minute = personalInfo.birthMinute;
    if (
      personalInfo.sign === "Aries" &&
      hour >= "5" &&
      hour <= "6" &&
      minute === "23"
    ) {
      ascendent = "Aries";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "6" &&
      hour <= "7" &&
      minute >= "23" &&
      minute <= "52"
    ) {
      ascendent = "Taurus";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "7" &&
      hour <= "9" &&
      minute <= "52" &&
      minute >= "46"
    ) {
      ascendent = "Gemini";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "9" &&
      hour <= "12" &&
      minute <= "46" &&
      minute >= "13"
    ) {
      ascendent = "Cancer";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "12" &&
      hour <= "14" &&
      minute <= "41" &&
      minute >= "13"
    ) {
      ascendent = "Leo";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "14" &&
      hour <= "17" &&
      minute <= "41" &&
      minute >= "18"
    ) {
      ascendent = "Virgo";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "17" &&
      hour <= "20" &&
      minute <= "19" &&
      minute >= "0"
    ) {
      ascendent = "Libra";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "20" &&
      hour <= "22" &&
      minute <= "38" &&
      minute >= "0"
    ) {
      ascendent = "Scorpio";
    } else if (
      personalInfo.sign === "Aries" &&
      (hour === "22" || hour === "23" || hour === "0" || hour === "1") &&
      minute <= "38" &&
      minute >= "08"
    ) {
      ascendent = "Sagittarius";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "1" &&
      hour <= "2" &&
      minute <= "53" &&
      minute >= "08"
    ) {
      ascendent = "Capricorn";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "2" &&
      hour <= "4" &&
      minute <= "53" &&
      minute >= "17"
    ) {
      ascendent = "Aquarius";
    } else if (
      personalInfo.sign === "Aries" &&
      hour >= "4" &&
      hour <= "5" &&
      minute <= "23" &&
      minute >= "17"
    ) {
      ascendent = "Pisces";
    }
  }

  return (
    <>
      <ProfileMenu />

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
              <strong>BirthHour:</strong> {personalInfo.birthHour}
            </p>
            <p>
              <strong>Birth minute:</strong> {personalInfo.birthMinute}
            </p>
            <p>
              <strong>Birth second:</strong> {personalInfo.birthSecond}
            </p>
          </div>
        )}
        {<div>Ascendent: {ascendent || "Unknown"}</div>}
      </div>
    </>
  );
}
