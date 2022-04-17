import React from 'react' 
import itemService from '../services/itemService' 
import {useState, useEffect} from 'react' 
import { useNavigate } from 'react-router-dom'



 

function Item() {
    
    const navigate = useNavigate()      

    const [listItems, updateItems] = useState('') 
    const [isUpdated, updateStatus] = useState(true)

    //get items
    useEffect(
        () => {
            async function getItems() { 
                
                const user = JSON.parse(localStorage.getItem('user'))   
                const token = user.token  

                const items = await itemService.getItems(token) 
                console.log(items)           
                updateItems(items)      

            } 

            getItems() 
             
        }, []    

    )         
  

    //delete item 
    async function deleteItem(e) {

        const user = JSON.parse(localStorage.getItem('user'))   
        const token = user.token

        const id = e.target.parentNode.id  
        const test = listItems.data.filter(x => x.id !== id)
        console.log(test)
        //updateItems(...listItems,  )  
        await itemService.deleteItem(token, id)  

        
    }
    
  return (
    <div>
       {listItems && listItems.data.map(x => <div className="item" id={x._id}><h4>{x.title}</h4><span onClick={(e) => deleteItem(e)} id="close">x</span><p>{x.notes}</p></div>)}         
    </div>            
)}

export default Item  