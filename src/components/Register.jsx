import {useState}from 'react'
import { RegisterUser } from '../services/Auth'
import {useNavigate}from 'react-router-dom'



const Register = () =>{

    const navigate = useNavigate()

    const initialState = {
        username:'',
        password:'',
    }

    const [formValues, setFormValues] = useState(initialState)

    // handle Change
    const handleChange = (e) =>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }

    // handle Submit
    const handleSubmit = async (e) =>{
        e.preventDefault() 
        await RegisterUser(formValues)
        setFormValues(initialState)
         navigate('/Login')
    }

    return(
        
        // username
        <div className='Register-Start'>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" 
            name="username"
             placeholder="Enter your username" 
             value={formValues.username} 
             onChange={handleChange} 
             required
              autoComplete="off"/>
         


         {/* password */}
        <div className="form-password">
            <input 
            type="password" 
            name="password"
             placeholder="enter your password"
              value={formValues.password}
            onChange={handleChange}
             required  
            autoComplete="off"/> 

             <button type="submit" disabled={ !formValues.username || !formValues.password  }>
  Register
</button>




        </div>

        
              </form>


        </div>
    )
}


export default Register