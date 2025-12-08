import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="navBar">
        <button onClick={() => navigate("/Test")}>Test Page</button>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/News")}>News</button>
        <button onClick={() => navigate("/SignUp")}>Sign Up</button>
        <button onClick={() => navigate("/Login")}>Log In</button>
      </div>
    </header>
  );
}
