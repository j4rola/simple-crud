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
        
    //console.log(listItems)        

    // async function getItems() {         
        
    //     const user = JSON.parse(localStorage.getItem('user'))   
    //     const token = user.token

    //     const items = await itemService.getItems(token)  
    //     updateItems(items.data)
    //     //console.log(items.data[0].title) 
    //     //userItems.push(items.data[0].title)
    //    // items.data.map(x => userItems.push(x.title))
    //     //updateItems(items.data)    
    //     console.log(listItems)  
    //     return items   
    // } 

    //getItems()

  return (
    <div>Item       
       {listItems && listItems.data.map(x => <div><h4>{x.title}</h4><p>{x.notes}</p></div>)}   
        <p>test</p>       
    </div>          
)}

export default Item