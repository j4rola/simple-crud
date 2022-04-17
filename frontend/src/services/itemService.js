const axios = require('axios').default;

async function createItem(input) {    
        
    const response = await axios.post('http://localhost:8000/create-item', input)   
    console.log(response.data)     
    localStorage.setItem('user', JSON.stringify(response.data))   
} 

async function getItems(token) {
    
    console.log(token)  
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,    
        }  
    }

    const response = await axios.get('http://localhost:8000/get-items', config);
    
    return response
    
}  

async function deleteItem(token, id) {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,    
        }   
    }  

    console.log(token)

    await axios.delete(`http://localhost:8000/delete-item-${id}`, config)
    
    console.log(id) 
}

const itemService = {
    createItem,
    getItems,
    deleteItem
}

export default itemService 
