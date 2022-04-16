import React from 'react'
import authService from '../services/authService'
import { useNavigate } from 'react-router-dom'



function Login() {

    const navigate = useNavigate()  

    const creds = {
        email: '',
        password: '',
    } 

    const handleChange = (e) => {
        e.preventDefault()             
        const value = e.target.name    
        creds[value] = e.target.value   

        console.log(creds) 
    }

    async function  login (creds) {
        //e.preventDefault()
        try { 
        await authService.login(creds) 
        navigate('/') 
    }   catch(err)
    
    {
        console.log(err)
        alert(err)}
          
    }



    

  return (
    <div>Login
        <form action="">
            <input type="text" onChange={handleChange} name='email' placeholder='email' />
            <input type="text" onChange={handleChange} name='password' placeholder='password'/>
        </form>
        <button onClick={() => login(creds)}>Login</button>   

    </div>
  )
}

export default Login