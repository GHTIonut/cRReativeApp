import "../styles/navBar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import pageLogo1 from "../assets/pageLogo1.png";

export function LoggedOutStatus({ navigate }) {
  return (
    <>
      <button onClick={() => navigate("/SignUp")} className="signUpButton">
        Sign Up
      </button>
      <button onClick={() => navigate("/Login")} className="logInButton">
        Log In
      </button>
    </>
  );
}

export function LoggedInStatus({ navigate, logOut }) {
  return (
    <>
      <button onClick={() => navigate("/Profile")} className="profileButton">
        My Account
      </button>
      <button onClick={logOut} className="logOutButton">
        Log Out
      </button>
    </>
  );
}

export default function NavBar() {
  const navigate = useNavigate();
  const { loggedIn, user, logOut } = useContext(AuthContext);

  function renderAuthSection() {
    if (loggedIn) {
      return <LoggedInStatus navigate={navigate} user={user} logOut={logOut} />;
    } else {
      return <LoggedOutStatus navigate={navigate} />;
    }
  }

  return (
    <header>
      <div className="navBar">
        <div>
          <img src={pageLogo1} alt="asdas" className="pageLogo" />
        </div>
        <div className="navBarDivButtons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/Horoscope")}>Horoscope</button>
          <button onClick={() => navigate("/News")}>News</button>
          {renderAuthSection()}
        </div>
      </div>
    </header>
  );
}
