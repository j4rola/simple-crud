import React from 'react' 
import itemService from '../services/itemService' 
import {useState, useEffect} from 'react' 





 

function Item() {  

    

    const [listItems, updateItems] = useState('')  
    const [status, updateStatus] = useState('')    
    
    //get items
    useEffect(
        () => {
            async function getItems() { 
                
                const user = JSON.parse(localStorage.getItem('user'))   
                const token = user.token  
                
                const items = await itemService.getItems(token) 
                           
                updateItems(items.data)      

            } 

            getItems() 
             
        }, []    

    )      
    
    
  

    //delete item 
    async function deleteItem(e) {

        const user = JSON.parse(localStorage.getItem('user'))   
        const token = user.token
        const id = e.target.parentNode.parentNode.id       
        updateItems(items => items.filter(x => x._id !== id)) 
        await itemService.deleteItem(token, id)   
                                  

    } 

    async function markStarted (e) {
        const id = e.target.parentNode.id
        e.target.parentNode.style.border = 'orange solid 1px'
        await itemService.markStarted(id) 
    }

    function markDone (e) {
        e.target.parentNode.style.border = 'green solid 1px' 
    }
 
    
  return (
    <div>
       {listItems ? listItems?.map(x => <div style={{border: `solid 1px ${x.completed}` }} className="item" id={x._id}><h3>{x.title}<span onClick={(e) => deleteItem(e)} id="close">X</span></h3><p>{x.notes}</p><button id="started" onClick={(e) => markStarted(e)}>Mark Started</button><button id="done" onClick={(e) => markDone(e)}>Mark Done</button></div>) : <h1>Loading...</h1>} 
       {listItems.length > 0 ? "" : <p>You have not created any list items.</p>}    
    </div>      
      
)}

export default Item  