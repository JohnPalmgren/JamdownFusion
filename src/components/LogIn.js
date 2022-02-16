
import classes from "./LogIn.module.css"

const LogIn = (props) => {
    return (
        <div className={ props.isLoggedIn ? classes.loginScreen : classes.hidden}>
            <h1>Admin Login</h1>
            <form>
                <label htmlFor="pword">Password</label>
                <input type="password" id="pword"></input>
                <button type="submit">Submit</button>
            </form>
        </div>)
}

export default LogIn;