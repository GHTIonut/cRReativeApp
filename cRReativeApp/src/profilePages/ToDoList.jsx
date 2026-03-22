import { useState, useEffect, useContext } from "react";
import ProfileMenu from "../Components/ProfileMenu";
import "../styles/toDoList.css";
import { AuthContext } from "../Context/AuthContext";

export function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const { token } = useContext(AuthContext);
  const [error, setError] = useState({ title: "", description: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

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
        return;
      }

      const newToDo = { ...data.toDo, done: false };
      const updatedList = [...toDoList, newToDo];

      setToDoList(updatedList);
      localStorage.setItem("toDoList", JSON.stringify(updatedList));

      setTitle("");
      setDescription("");
      setError({ title: "", description: "" });
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
      await fetch("http://localhost:3000/deleteToDo", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: toDoToDelete.id }),
      });
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

  function editToDo(index) {
    const item = toDoList[index];
    setTitle(item.title);
    setDescription(item.description);
    setEditIndex(index);
    setIsEditing(true);
    setError({ title: "", description: "" });
  }

  async function updateToDo() {
    try {
      const updatedItem = {
        ...toDoList[editIndex],
        title,
        description,
      };

      const response = await fetch("http://localhost:3000/updateToDo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) {
        console.error("Update failed!");
        return;
      }

      const updatedList = [...toDoList];
      updatedList[editIndex] = updatedItem;

      setToDoList(updatedList);
      localStorage.setItem("toDoList", JSON.stringify(updatedList));

      setTitle("");
      setDescription("");
      setIsEditing(false);
      setEditIndex(null);
      setError({ title: "", description: "" });
    } catch (error) {
      console.error("Update error:", error);
    }
  }

  return (
    <>
      <ProfileMenu />
      <section className="toDoContainer">
        <h1>Your To‑Do List</h1>

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

          {error.title && <div className="errorMessage">{error.title}</div>}
          {error.description && (
            <div className="errorMessage">{error.description}</div>
          )}

          {isEditing ? (
            <button type="button" onClick={updateToDo}>
              Update
            </button>
          ) : (
            <button type="button" onClick={handleSubmit}>
              Save
            </button>
          )}

          <div>
            {toDoList.map((toDo, index) => (
              <div className="toDoItem" key={index}>
                <h2>{toDo.title}</h2>
                <p>{toDo.description}</p>

                <button
                  type="button"
                  onClick={() => deleteToDo(index)}
                  id="deleteButton"
                >
                  Delete
                </button>

                <button
                  type="button"
                  onClick={() => editToDo(index)}
                  id="editButton"
                >
                  Edit
                </button>

                <label>Done</label>
                <input
                  type="checkbox"
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
