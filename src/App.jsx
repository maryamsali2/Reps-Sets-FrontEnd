// imports
import { useState} from "react"
import {Route, Routes} from "react-router"


import Register from "./components/Register"
import Login from "./components/Login"







    return(
        <>
        <h1>hrllo</h1>
        <main>
            {/* <Nav user={user}/> */}
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login setUser={setUser}/>}/>

            </Routes>
        </main>
        </>

    )
























export default App