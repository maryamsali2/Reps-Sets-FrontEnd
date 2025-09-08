import { Link } from "react-router-dom"

const Home = ({user})=> {
    if(user){
        return(
            <div className="home-page">
                <h1>Welcome back, {user.username}! </h1>
                <p>Ready to start a new workout?</p>
                <div className="home-workout">
                <Link to="/workoutForm">
                <button>Create Workout</button>
                
                </Link>
                </div>
            </div>
        )
    }


    // if its not a user
    return(
        <div className="home-page">
            <h1>Welcome to Reps & Sets </h1>
            <p>Please login or Register to start tracking your workouts</p>
            <div className="home-auth">
                <Link to="/login">
                <button>Login</button>
                </Link>
                <Link to="/register">
                <button>Register</button>
                </Link>
                 </div>
        </div>
    )

}

export default Home