import { useState, useEffect } from "react";

export default function News() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Error fetching data");
      });
  }, []);
  return (
    <div>
      <h2>News</h2>
      <p id="demoMessage">{message}</p>
    </div>
  );
}
