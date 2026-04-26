import { useNavigate } from "react-router-dom";
import "../styles/profileMenu.css";

export default function ProfileMenu({ closeMenu }) {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <div className="profileMenu">
      <button onClick={() => go("/PersonalInfo")}>Personal Info</button>
      <button onClick={() => go("/ChangePassword")}>Change Password </button>
      <button onClick={() => go("/HoroscopeSubscription")}>Subscription</button>
      <button onClick={() => go("/ToDoList")}>To do list</button>
    </div>
  );
}
