import React from 'react' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {  

    const navigate = useNavigate()

    const user = useState(JSON.parse(localStorage.getItem('user')))

    const logout = () => {
        localStorage.removeItem('user');
        navigate('login')

    }
     

  return (    
    <div >Welcome to your Dashboard {user.name}!  
        <button onClick={logout}>Logout</button>
    </div>    
   
  ) 
} 

export default Dashboard