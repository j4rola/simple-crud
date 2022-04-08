const axios = require('axios').default;

async function createUser(input, e) {    
    e.preventDefault()    
    const response = await axios.post('http://localhost:8000/test-post', input)   
    console.log(response.data)     
    localStorage.setItem('user', JSON.stringify(response.data))   
}

module.exports = {createUser}   