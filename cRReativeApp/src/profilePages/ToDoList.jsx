import { useState, useEffect } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import "../styles/toDoContainer.css";

export function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const newToDo = { title: title, description: description };
    const updatedToDoList = [...toDoList, newToDo];
    setToDoList(updatedToDoList);
    localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    setTitle("");
    setDescription("");
  }

  function deleteToDo(indexToDelete) {
    const updatedList = toDoList.filter((_, index) => index !== indexToDelete);
    setToDoList(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));
  }

  return (
    <>
      <ProfileMenu />
      <section className="toDoFormContainer">
        <form className="toDoForm">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Save
          </button>
          <div>
            {toDoList.map((toDo, index) => (
              <div key={index}>
                <h2>{toDo.title}</h2> <p>{toDo.description}</p>{" "}
                <button type="button" onClick={() => deleteToDo(index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
