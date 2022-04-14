import React from 'react'
import itemService from '../services/itemService'
import useState from 'react'

function Item() {

   // const [items, updateItems] = useState([])

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user) 
    console.log(user.token)  
    const token = user.token   
    

    async function getItems(token) {                       
        const items = await itemService.getItems(token)  
        console.log(items)
        //updateItems(items.data)     
        return items   
    } 

    getItems(token)

  return (
    <div>Item    
        <p></p> 
    </div>          
)}

export default Item