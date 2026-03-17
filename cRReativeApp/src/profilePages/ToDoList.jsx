import { useState, useEffect } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import "../styles/toDoList.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const { token } = useContext(AuthContext);
  const [error, setError] = useState({ title: "", description: "" });
  // const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    const storedToDoList = localStorage.getItem("toDoList");
    if (storedToDoList) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/toDoList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError({
          title: data.titleMessage,
          description: data.descriptionMessage,
        });
        setTitle("");
        setDescription("");
        return;
      }
      const newToDoFromBackend = { ...data.toDo, done: false };
      const updatedToDoList = [...toDoList, newToDoFromBackend];
      setToDoList(updatedToDoList);
      localStorage.setItem("toDoList", JSON.stringify(updatedToDoList));
      setTitle("");
      setDescription("");
      setError({ title: "", description: "" });
      console.log("To-do saved.");
    } catch (error) {
      console.error("POST error:", error);
    }
  }

  async function deleteToDo(indexToDelete) {
    const toDoToDelete = toDoList[indexToDelete];

    const updatedList = toDoList.filter((_, index) => index !== indexToDelete);
    setToDoList(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));

    try {
      const response = await fetch("http://localhost:3000/deleteToDo", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: toDoToDelete.id }),
      });

      const data = await response.json();
      console.log("Deleted:", data);
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  async function toggleDone(index) {
    const updatedList = [...toDoList];
    updatedList[index].done = !updatedList[index].done;
    setToDoList(updatedList);
    localStorage.setItem("toDoList", JSON.stringify(updatedList));

    try {
      await fetch("http://localhost:3000/updateToDo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: updatedList[index].id,
          done: updatedList[index].done,
        }),
      });
    } catch (error) {
      console.error("Update error:", error);
    }
  }

  return (
    <>
      <ProfileMenu />
      <section className="toDoContainer">
        <h1>Your To do List</h1>
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
          {error.title && <div className="errorMessage">{error.title}</div>}
          {error.description && (
            <div className="errorMessage">{error.description}</div>
          )}
          <div>
            {toDoList.map((toDo, index) => (
              <div className="toDoItem" key={index}>
                <h2>{toDo.title}</h2> <p>{toDo.description}</p>{" "}
                <button type="button" onClick={() => deleteToDo(index)}>
                  Delete
                </button>
                <label htmlFor="checkBox">Done</label>
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  checked={toDo.done}
                  onChange={() => toggleDone(index)}
                />
              </div>
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
