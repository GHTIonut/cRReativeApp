import { useState } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import "../styles/toDoContainer.css";

export function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <ProfileMenu />
      <div className="toDoContainer">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>Save</button>
      </div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </>
  );
}
