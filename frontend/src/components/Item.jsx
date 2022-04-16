import React from 'react' 
import itemService from '../services/itemService' 
import {useState, useEffect} from 'react' 

 

function Item() {   

     
    const [listItems, updateItems] = useState('') 

    
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
    
  return (
    <div>
       {listItems && listItems.data.map(x => <div id="item"><h4>{x.title} <span id="close">x</span></h4><p>{x.notes}</p></div>)}         
    </div>          
)}

export default Item