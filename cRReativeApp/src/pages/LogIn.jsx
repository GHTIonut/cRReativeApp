import { useState } from "react";

export default function LogIn() {
    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    );

    function log(e) {
        e.preventDefault();
        if (!user.email || !user.password) {
            return (
                alert("You must fill up all inputs.")
            )
        }
            fetch("http://localhost:3000/loginCheck", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    alert("Logged in!");
                } else {
                    alert(data.message);
                }
            })
    }

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
            <h1>Log in page</h1>
            <form action="">
                <label htmlFor=""> E-mail
                    <input  type="email" name="email" value={user.email} onChange={handleChange}/>
                </label>
                <label htmlFor=""> Password
                    <input type="password" name="password" value={user.password} onChange={handleChange}/>
                </label>
                <button type="submit" onClick={log}>Log in</button>
            </form>
        </div>
    )
}