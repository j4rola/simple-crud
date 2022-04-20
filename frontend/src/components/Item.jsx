import React from 'react' 
import itemService from '../services/itemService' 
import {useState, useEffect} from 'react' 





 

function Item() {  

    

    const [listItems, updateItems] = useState('')      
    
    //get items
    useEffect(
        () => {
            async function getItems() { 
                
                const user = JSON.parse(localStorage.getItem('user'))   
                const token = user.token  

                const items = await itemService.getItems(token) 
                 
                console.log(items.data)           
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
 
    
  return (
    <div>
       {listItems && listItems?.map(x => <div className="item" id={x._id}><h3>{x.title}<span onClick={(e) => deleteItem(e)} id="close">x</span></h3><p>{x.notes}</p></div>)} 
    </div>         
      
)}

export default Item  