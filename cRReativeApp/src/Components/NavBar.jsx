import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export function LoggedOutStatus({ navigate }) {
  return (
    <>
      <button onClick={() => navigate("/SignUp")}>Sign Up</button>
      <button onClick={() => navigate("/Login")}>Log In</button>
    </>
  );
}

export function LoggedInStatus({ navigate, user, logOut }) {
  return (
    <>
      <button onClick={() => navigate("/MyAccount")}>My Account</button>
      <span>Hello, {user?.username}</span>
      <button onClick={logOut}>Log Out</button>
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
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/News")}>News</button>
        {renderAuthSection()}
      </div>
    </header>
  );
}
