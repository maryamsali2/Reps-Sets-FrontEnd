import {useState} from "react"
import { LoginUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"

const Login = ({setUser}) =>{

    let navigate = useNavigate()

    const initialState = { username:'' , password: ''}
    const [formValues, setFormValues] = useState(initialState)

    // handle change button
    const handleChange = (e) =>{
        setFormValues({...formValues,[e.target.name]: e.target.value})
    }

    // submit button 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = await LoginUser(formValues)
        setFormValues(initialState)
        setUser(userData)
        if(userData){
            navigate('/WorkoutForm')
        }
    }



return(
    <div className="Login">
        <div className="login-card">
        <h2 className="login-tittle">Login</h2>
        <form className="btn" onSubmit={handleSubmit}>
            {/* username */}
            <div className="form-Login">
                <label htmlFor="username">Username</label>
                <input 
                name="username"
                type="username"
                placeholder="enter your username"
                onChange={handleChange}
                value={formValues.username}
                required
                autoComplete="userename" 
                />


            </div>

            {/* password */}
            <div className="form-password">
                <label htmlFor="password">Password</label>
                <input 
                name ="password"
                type="password"
                onChange={handleChange}
                value={formValues.password}
                required
                autoComplete="current-password"
                />
            </div>
            <button type="submit" disabled={!formValues.username || !formValues.password }>
            Login </button>
            
        </form>
        </div>
    </div>
)




    
}

export default Login