// imports
import { useEffect, useState} from "react"
import {Route, Routes} from "react-router"


import Register from "./components/Register"
import Login from "./components/Login"




import { CheckSession } from "./services/Auth"

const App = () => {


const [user, setUser] = useState(null)

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
        <h1>hrllo</h1>
        <main>
            {/* <Nav user={user}/> */}
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login setUser={setUser}/>}/>
                <Route path="home" element={<Home/>}/>

            </Routes>
        </main>
        </>

    )







}
















export default App