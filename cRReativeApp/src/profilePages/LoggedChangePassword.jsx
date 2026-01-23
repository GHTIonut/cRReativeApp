import { useState } from "react";
import "../styles/loggedChangePassword.css";
import ProfileMenu from "../Components/ProfileMenu";

export default function LoggedChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== repeatPassword) {
      setSuccessMessage("New passwords do not match");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3000/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      setSuccessMessage(data.message);
    } catch {
      setSuccessMessage("An error occurred while updating the password");
    }
  };

  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <div className="changePasswordContainer">
        <h1>Change your password</h1>

        <form className="changePasswordForm" onSubmit={handleSubmit}>
          <label htmlFor="oldPassword">Old password:</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />

          <label htmlFor="newPassword">New password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <label htmlFor="repeatPassword">Repeat new password:</label>
          <input
            type="password"
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          <button type="submit">Update password</button>
        </form>

        {successMessage && <p className="successMessage">{successMessage}</p>}
      </div>
    </>
  );
}
