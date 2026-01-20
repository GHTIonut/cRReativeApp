import { useNavigate } from "react-router-dom";
import "../styles/profileMenu.css";

export default function ProfileMenu() {
  const navigate = useNavigate();

  return (
    <div className="profileMenu">
      <button onClick={() => navigate("/PersonalInfo")}>Personal Info</button>
      <button onClick={() => navigate("/ChangePassword")}>
        Change Password{" "}
      </button>
      <button onClick={() => navigate("/Subscription")}>Subscription</button>
    </div>
  );
}
