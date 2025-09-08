import { Link } from "react-router-dom"




const Nav = ({ user}) => {
  const userOptions = (
    <>
      <Link to="/home">Home</Link>
      
      <Link to="/workoutForm">New Workout</Link>
    </>
  )

  

  const publicOptions = (
    <>
      
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
    </>
  )

  return (
    <header>
      {user ? <h3>Welcome, {user.username}!</h3> : null}
      <nav>{user ? userOptions : publicOptions}</nav>
    </header>
  )
}

export default Nav