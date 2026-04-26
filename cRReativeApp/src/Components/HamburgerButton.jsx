import { useState, useContext } from "react";
import hamburgerButton from "../assets/hamburgerButton.png";
import "../styles/hamburgerButton.css";
import ProfileMenu from "./ProfileMenu";
import { Profile } from "../pages/Profile";
import { AuthContext } from "../Context/AuthContext";

export function HamburgerBtn() {
  const [display, setDisplay] = useState(false);
  const { token } = useContext(AuthContext);
  if (!token) return;
  return (
    <>
      <div className="hamburgerButtonContainer">
        <div>
          <img
            src={hamburgerButton}
            alt="hamburgerButton"
            className="hamburgerButton"
            onClick={() => setDisplay(!display)}
          />
        </div>
      </div>
      <div className="hiddenMenu">
        {display && <ProfileMenu closeMenu={() => setDisplay(false)} />}
      </div>
    </>
  );
}
