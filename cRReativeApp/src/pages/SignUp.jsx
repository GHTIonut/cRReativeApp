import { useState } from "react";
import "../styles/signUp.css";
// import { preview } from "vite";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
  const [message, setMessage] = useState({
    allFieldsRequired: "",
    usernameError1: "",
    usernameError2: "",
    passwordError: "",
    emailError: "",
    succes: "",
  });

  const postAccount = (event) => {
    event.preventDefault();

    // if (!user.username || !user.password || !user.email) {
    //   setMessage("Please fill in all fields.");
    //   return;
    // }

    // if (user.username.length < 5) {
    //   setMessage("Username length must be atleast 5 characters.");
    //   return;
    // }

    // if (user.password.length < 5 || !passwordRegex.test(user.password)) {
    //   setMessage(
    //     "Password must be atleast 5 characters and must contain at least one uppercase letter, one number, and one special character.",
    //   );
    //   return;
    // }

    // if (!emailRegex.test(user.email)) {
    //   return setMessage();
    // }

    setMessage({
      allFieldsRequired: "",
      usernameError1: "",
      usernameError2: "",
      passwordError: "",
      emailError: "",
      succes: "",
    });

    fetch("http://localhost:3000/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          setMessage({
            allFieldsRequired: data.allFieldsRequired || "",
            usernameError1: data.usernameError || "",
            passwordError: data.passwordError || "",
            emailError: data.emailError || "",
            succes: "",
          });
          return;
        }
        setMessage({
          allFieldsRequired: "",
          usernameError: "",
          passwordError: "",
          emailError: "",
          success: "Account successfully created!",
        });
        setUser({
          username: "",
          password: "",
          email: "",
        });
      })
      .catch(() => {
        setMessage((prev) => ({
          ...prev,
          allFieldsRequired: "Server error. Please try again.",
        }));
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
            autoComplete="username"
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
            autoComplete="new-password"
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
        {message.allFieldsRequired && (
          <div className="error">{message.allFieldsRequired}</div>
        )}
        {message.usernameError && (
          <div className="erorr">{message.usernameError1}</div>
        )}
        {message.passwordError && (
          <div className="error">{message.passwordError}</div>
        )}
        {message.emailError && (
          <div className="error">{message.emailError}</div>
        )}
        {message.success && <div className="success">{message.success}</div>}
      </form>
    </div>
  );
}
