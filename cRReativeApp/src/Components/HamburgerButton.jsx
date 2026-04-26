import { useState, useEffect } from "react";
import hamburgerButton from "../assets/hamburgerButton.png";
import "../styles/hamburgerButton.css";
import ProfileMenu from "./ProfileMenu";
import { Profile } from "../pages/Profile";

export function HamburgerBtn() {
  const [display, setDisplay] = useState(false);
  useEffect(() => console.log(display), [display]);
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
