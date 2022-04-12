import React from 'react'
import authService from '../services/authService'

function Login() {

    

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
        await authService.login(creds)    
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