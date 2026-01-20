import "../styles/resetPassword.css";
import ProfileMenu from "../Components/ProfileMenu";

export default function ResetPasswordWindow() {
  return (
    <>
      <div className="profileMenu">
        <ProfileMenu />
      </div>
      <div className="resetPasswordContainer">
        <form className="resetPasswordForm">
          <h1>Reset Password</h1>
          <p className="resetDescription">
            Enter your account email and we will send you instructions to reset
            your password.
          </p>
          <label>
            E-mail
            <input type="email" name="email" placeholder="example@mail.com" />
          </label>
          <button type="submit" className="resetButton">
            Send reset link
          </button>
          <p className="backToLogin" onClick={() => window.history.back()}>
            ← Back to Login
          </p>
        </form>
      </div>
    </>
  );
}
