// import { useState } from "react";
import hamburgerButton from "../assets/hamburgerButton.png";
import "../styles/hamburgerButton.css";

export function HamburgerBtn() {
  //   const [display, setDisplay] = useState(true);
  return (
    <div>
      <img
        src={hamburgerButton}
        alt="hamburgerButton"
        className="hamburgerButton"
      />
    </div>
  );
}
