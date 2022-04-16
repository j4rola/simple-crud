import React from 'react' 
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import itemService from '../services/itemService' 
import Item from './Item' 


function Dashboard() {  


    //logout     
    const navigate = useNavigate()      

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(`user: ${JSON.stringify(user)}`)
    const name = user.name     
    const userId = user._id     

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
                <button onClick={() => createItem(inputVal)}>Create</button>
            </form>
            
            <Item/>
            
        </div>   
        
    </div>    
   
  ) 
} 

export default Dashboard