import React from 'react'
import itemService from '../services/itemService'




function Item() {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user) 
    console.log(user.token)
    const token = user.token.toString()
    

    async function getItems(token) {                       
        const items = await itemService.getItems(token)  
        console.log(items)     
       return items   
    } 

    getItems(token) 

  return (
    <div>Item    



    </div>          
)}

export default Item