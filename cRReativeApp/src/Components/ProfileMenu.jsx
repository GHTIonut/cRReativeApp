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
      <select
        defaultValue=""
        name=""
        id=""
        onChange={(e) => {
          go(e.target.value);
          e.target.value = "";
        }}
      >
        <option value="" disabled>
          Profile Menu
        </option>
        <option value="/PersonalInfo">Personal Info</option>
        <option value="/ChangePassword">Change password</option>
        <option value="/HoroscopeSubscription">Horoscope subscription</option>
        <option value="/ToDoList">To-do list</option>
      </select>
    </div>
  );
}
