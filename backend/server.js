require('dotenv').config()
const User = require('./models/userModel.js')
const express = require('express') 
const app = express() 
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const connectDB = require('./config/db.js') 
var cors = require('cors')  

app.use(cors())


connectDB()      

app.use(express.json())
app.use(express.urlencoded({extended: false}))    
app.use(express.raw())    

app.get('/', function (req, res) {       
  res.send('Hello World!')              
}) 

app.post('/test-post', asyncHandler( async function(req, res) {        

    console.log(req.body)       
    //console.log(req.body)          

    const user = await User.create({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
         
        
    }) 


    res.json({
        "name": user.name, 
        "email": user.email,
        "token": getJWT(4),
        "id": user.id
    }) 
    
    
}))   

app.post('/login', asyncHandler( async function(req, res) {      
    
    console.log('test')
    const email = req.body.email
    console.log(email)

    const user = await User.findOne({email})       

    if(user) {

        res.json({

            "name": user.name, 
            "email": user.email, 
            "token": getJWT(4), 
            "id": user.id

        }) 

    }

    
    
    
})) 

//Generate a JWT 
const getJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {  
        expiresIn: '10d'   
    })    
}   



app.listen(8000) 