import { Link } from "react-router-dom"
import "../styles/Nav.css"

const Nav = ({ user }) => {
  return (
    <header className="navbar">
      {user ? (
        <>
          <h3>Welcome, {user.username}!</h3>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/workoutForm">New Workout</Link>
          </nav>
        </>
      ) : (
        <nav>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </nav>
      )}
    </header>
  )
}

export default Nav
