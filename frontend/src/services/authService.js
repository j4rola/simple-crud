const axios = require('axios').default;

async function createUser(input) {    
    //e.preventDefault()    
    const response = await axios.post('http://localhost:8000/register', input)   
    console.log(response.data)     
    localStorage.setItem('user', JSON.stringify(response.data))   
}

async function login(creds) {

    const response = await axios.post('http://localhost:8000/login', creds)

    console.log(response.data)    

    if(response.data){ 

        localStorage.setItem('user', JSON.stringify(response.data))
        console.log('success')
    }

}

const authService = {
    createUser,
    login
}

export default authService   