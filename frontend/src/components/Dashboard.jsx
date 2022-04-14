import React from 'react' 
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import itemService from '../services/itemService' 
import Item from './Item' 


function Dashboard() {  


    //logout     
    const navigate = useNavigate()      

    const user = useState(JSON.parse(localStorage.getItem('user')))
    const name = user[0].name     
    const userId = user[0].id     

    const logout = () => {
        
        localStorage.removeItem('user'); 
        navigate('login'); 

    }

    //Create item 

    let inputVal = {
        title: '',
        notes: '',
        id: userId
    }

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.name    
        inputVal[value] = e.target.value    
        console.log(inputVal)   
    }

    async function createItem(inputVal){
        itemService.createItem(inputVal)
        console.log(inputVal)
    }

    
     

  return (    
    <div >Welcome to your Dashboard {name}!  
        <button onClick={logout}>Logout</button>  
        <div id='item-wrapper'>
            <h4>Create List Item</h4> 
            <form action="">
                <input onChange={handleChange} name="title" placeholder='Title'></input>
                <textarea onChange={handleChange} name="notes" placeholder='Notes'></textarea> 
            </form>
            <button onClick={() => createItem(inputVal)}>Create</button>
            <Item userId={userId}/>
            
        </div>   
        
    </div>    
   
  ) 
} 

export default Dashboard