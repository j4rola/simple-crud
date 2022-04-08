import React from 'react' 
import { useState } from 'react'

function Dashboard() {  

    const [user, updateUser] = useState(JSON.parse(localStorage.getItem('user')))

    const getUser = () => {
        //updateUser();
    }
     

  return (    
    <div >Welcome to your Dashboard {user.name}!  
        
    </div>    
   
  ) 
} 

export default Dashboard