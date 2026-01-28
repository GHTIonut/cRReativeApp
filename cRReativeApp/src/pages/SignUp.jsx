import { useState } from "react";
import "../styles/signUp.css";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
  const [message, setMessage] = useState("");

  const postAccount = (event) => {
    event.preventDefault();

    if (!user.username || !user.password || !user.email) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (user.username.length < 5) {
      setMessage("Username length must be atleast 5 characters.");
      return;
    }

    if (user.password.length < 5 || !passwordRegex.test(user.password)) {
      setMessage(
        "Password must be atleast 5 characters and must contain at least one uppercase letter, one number, and one special character.",
      );
      return;
    }

    if (!emailRegex.test(user.email)) {
      return setMessage("Invalid E-mail.");
    }

    fetch("http://localhost:3000/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json({});
      })
      .then((data) => {
        console.log("Account created:", data);
        setMessage("Account successfully created!");
        setUser({
          username: "",
          password: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error creating account:", error);
        setMessage("Error creating account.");
      });
  };
  return (
    <div className="signUpContainer">
      <form className="signUpFormContainer">
        <h1>Register an account</h1>
        <label htmlFor="username">
          Username:
          <input
            required
            className="registerInput"
            name="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            required
            className="registerInput"
            name="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            required
            className="registerInput"
            name="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>

        <button onClick={postAccount}>Register</button>
        <p>{message}</p>
      </form>
    </div>
  );
}
