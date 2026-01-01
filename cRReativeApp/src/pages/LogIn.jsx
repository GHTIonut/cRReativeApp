import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function log(e) {
    e.preventDefault();

    if (!user.email || !user.password) {
      return alert("You must fill up all inputs.");
    }

    fetch("http://localhost:3000/loginCheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          logIn(data.token, data.user);
          alert("Logged in!");
          navigate("/Profile");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Log in page</h1>
      <form>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" onClick={log}>
          Log in
        </button>
      </form>
    </div>
  );
}
