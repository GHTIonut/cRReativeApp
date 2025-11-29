import { use, useState } from "react";

export default function SignUp() {
        const [user, setUser] = useState({
            username: "",
            password: "",
            email: ""
        });

        const [message, setMessage] = useState("");
    
        const postAccount = (event) => {
            event.preventDefault();
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
                setMessage("Account successfully created!");    
                setUser({
                    username: "",
                    password: "",
                    email: ""
                });
            })
            .catch((error) => {
                console.error("Error creating account:", error);
                setMessage("Error creating account.");  
            });
        };
    return (
    <div>
        <form action="">
            <h1>Register Page</h1>
            <label htmlFor="username">Username:</label>
            <input
                className="registerInput"
                name="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input
                className="registerInput"
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label htmlFor="email">E-mail:</label>
            <input
                className="registerInput"
                name="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button onClick={postAccount}>Register</button>
            <p>{message}</p>
        </form> 
    </div>
    )
}