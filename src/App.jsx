// imports
import { useState} from "react"
import {Route, Routes} from "react-router"


import Register from "./components/Register"






const App = () => {
    // const [user, setUser] = useState(null)
    // const checkToken = async () => {
    //     // if its token exits it sends token to localStorage  to persist logged in user
    //     const userData = await checkSession ()
    //     setUser(userData)
    // }


    // useEffect(() =>{
    //     const token = localStorage.getItem("token")
    //     // Check if token exists before requesting to validate the token
    
    //     if (token){
    //         checkToken()
    //     }
    // },[])

    return(
        <>
        <h1>hrllo</h1>
        <main>
            {/* <Nav user={user}/> */}
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </main>
        </>

    )


}



















// calling the routes



export default App