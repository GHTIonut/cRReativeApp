export default function LogIn() {
    return (
        <div>
            <h1>Log in page</h1>
            <form action="">
                <label htmlFor=""> Username
                    <input type="text" name="username"/>
                </label>
                <label htmlFor=""> Password
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}