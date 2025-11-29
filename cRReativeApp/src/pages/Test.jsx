import { useState } from 'react';

export default function Test() {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    const postAccount = () => {
        fetch("http://localhost:3000/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error")
            } 
            return response.json();
        })
        .then((data) => {
            console.log("Account created:", data);
        })
        .catch((error) => {
            console.error("Error creating account:", error);
        });
    };

    return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={postAccount}>Register</button>
      <p id='afterClick'></p>
    </div>
    )
}