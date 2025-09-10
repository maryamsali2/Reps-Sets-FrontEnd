// imports
import { useEffect, useState} from "react"
import {Routes, Route} from "react-router"


import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import WorkoutForm from "./components/WorkoutForm"
import WorkoutDetails from "./components/WorkoutDetails"


import { CheckSession } from "./services/Auth"

const App = () => {


const [user, setUser] = useState(null)

 const [exercise, setExercise] = useState({
        name:"",
        weight:"",
        sets:"",
        reps:"",

    })


const CheckToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
}


useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
        CheckToken()
    }
},[])



    return(
        <>
        <h1>hello</h1>
        <main>
            {/* <Nav user={user}/> */}
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login setUser={setUser}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/workoutForm" element={<WorkoutForm exercise={exercise} setExercise={setExercise} />} />
                <Route path="/workout/:workoutId" element={<WorkoutDetails exercise={exercise} setExercise={setExercise} />} />
         


            </Routes>
        </main>
        </>

    )







}
















export default App