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

    return(
        <>
        </>
    )
}


export default Register