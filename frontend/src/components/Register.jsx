import { createUser } from '../services/authService'
import {useState} from 'react'

function Register() {

    const [input, updateInput] = useState({name:'', email:'', password:''})

    const {name, email, password} = input 

    const onFormChange = (e) => {
        updateInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value  
        }))
        
    }

    const callCreateUser = (e) => {
        e.preventDefault()
        const userData = {name, email, password}
        createUser(userData) 
    }


  return (
    <div>Register
        <form onSubmit={callCreateUser}> 
            <input onChange={(e) => onFormChange(e)} value={name} name="name" type="text" placeholder="name"/>
            <input onChange={(e) => onFormChange(e)} value={email} name="email" type="text" placeholder="email"/>
            <input onChange={(e) => onFormChange(e)} value={password} name="password" type="text" placeholder="password"/>
            <button type='submit'>Submit</button>
            <p>{name}</p>
        </form>
        

    </div>
  )
}

export default Register