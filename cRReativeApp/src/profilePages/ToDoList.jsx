import { useState, useEffect } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import "../styles/toDoContainer.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const newToDo = { title: title, description: description };
    const updatedToDoList = [...toDoList, newToDo];
    setToDoList(updatedToDoList);
    localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
    try {
      const response = await fetch("http://localhost:3000/toDoList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: title, description: description }),
      });
      if (!response.ok) {
        throw new Error("Error. Data not sent.");
      }
    } catch (error) {
      error;
    }
    setTitle("");
    setDescription("");
    console.log("To do saved.");
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
