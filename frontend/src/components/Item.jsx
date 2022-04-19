import React from 'react' 
import itemService from '../services/itemService' 
import {useState, useEffect} from 'react' 
import List from '../components/List'




 

function Item() {  

    

    const [listItems, updateItems] = useState('') 
    
    console.log({listItems})     
    


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

        const id = e.target.parentNode.id    
        
        const newItems = listItems  
         
        const filtered = newItems.filter(x => x._id !== id) 
       
        console.log(`aksdj = ${filtered}`) 
          
        updateItems(items => items.filter(x => x._id !== id))
        await itemService.deleteItem(token, id)   

        //updateItems([...filtered])
                                  

    } 
 
    
  return (
    <div>
       {listItems && listItems?.map(x => <div className="item" id={x._id}><h4>{x.title}</h4><span onClick={(e) => deleteItem(e)} id="close">x</span><p>{x.notes}</p></div>)} 
       <List/>        
    </div>         
      
)}

export default Item  